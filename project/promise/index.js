"use strict";
// 测试
// tsc xxx/xx/xx.ts 编译
// promises-aplus-tests xxx/xx/xx.js
exports.__esModule = true;
var STATUS;
(function (STATUS) {
    STATUS["PENDING"] = "pending";
    STATUS["FULFILLED"] = "fulfilled";
    STATUS["REJECTED"] = "rejected";
})(STATUS || (STATUS = {}));
var isFunction = function (v) { return typeof v === 'function'; };
var MyPromise = /** @class */ (function () {
    function MyPromise(excutor) {
        var _this = this;
        this.status = STATUS.PENDING;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        this.resolve = function (value) {
            if (value instanceof MyPromise) {
                return value.then(_this.resolve, _this.reject);
            }
            nextTick(function () {
                // 调用resolve 回调对应onFulfilled函数
                if (_this.status === STATUS.PENDING) {
                    // 只能由pedning状态 => fulfilled状态 (避免调用多次resolve reject)
                    _this.status = STATUS.FULFILLED;
                    _this.value = value;
                    _this.onFulfilledCallbacks.forEach(function (cb) { return cb(value); });
                }
            });
        };
        this.reject = function (reason) {
            nextTick(function () {
                if (_this.status === STATUS.PENDING) {
                    _this.status = STATUS.REJECTED;
                    _this.reason = reason;
                    _this.onRejectedCallbacks.forEach(function (cb) { return cb(reason); });
                }
            });
        };
        try {
            excutor(this.resolve, this.reject);
        }
        catch (e) {
            this.reject(e);
        }
    }
    MyPromise.all = function (promises) {
        return new MyPromise(function (resolve, reject) {
            var done = countToGo(promises.length, resolve);
            promises.forEach(function (promise, index) {
                promise.then(function (value) {
                    done(index, value);
                }, reject);
            });
        });
        function countToGo(length, resolve) {
            var count = 0;
            var values = [];
            return function (i, value) {
                values[i] = value;
                if (++count === length) {
                    resolve(values);
                }
            };
        }
    };
    MyPromise.race = function (promises) {
        return new MyPromise(function (resolve, reject) {
            promises.forEach(function (promise, index) {
                promise.then(resolve, reject);
            });
        });
    };
    MyPromise.resolve = function (value) {
        return new MyPromise(function (resolve) { return resolve(value); });
    };
    MyPromise.reject = function (reason) {
        return new MyPromise(function (resolve, reject) { return reject(reason); });
    };
    MyPromise.deferred = function () {
        // 延迟对象
        var defer = {
            promise: undefined,
            resolve: undefined,
            reject: undefined
        };
        defer.promise = new MyPromise(function (resolve, reject) {
            defer.resolve = resolve;
            defer.reject = reject;
        });
        return defer;
    };
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        onFulfilled = isFunction(onFulfilled) ? onFulfilled : function (value) { return value; };
        onRejected = isFunction(onRejected)
            ? onRejected
            : function (reason) {
                throw reason;
            };
        var newPromise = new MyPromise(function (resolve, reject) {
            var newValue;
            switch (_this.status) {
                case STATUS.FULFILLED:
                    nextTick(function () {
                        try {
                            newValue = onFulfilled(_this.value);
                            resolvePromise(newPromise, newValue, resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    break;
                case STATUS.REJECTED:
                    nextTick(function () {
                        try {
                            newValue = onRejected(_this.reason);
                            resolvePromise(newPromise, newValue, resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    break;
                case STATUS.PENDING:
                    _this.onFulfilledCallbacks.push(function (value) {
                        try {
                            var newValue_1 = onFulfilled(value);
                            resolvePromise(newPromise, newValue_1, resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    _this.onRejectedCallbacks.push(function (value) {
                        try {
                            var newValue_2 = onRejected(value);
                            resolvePromise(newPromise, newValue_2, resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    break;
            }
        });
        return newPromise;
    };
    MyPromise.prototype["catch"] = function (onRejected) {
        return this.then(null, onRejected);
    };
    return MyPromise;
}());
function resolvePromise(promise, value, resolve, reject) {
    if (promise === value) {
        return reject(new TypeError('循环引用'));
    }
    if (value instanceof MyPromise) {
        value.then(function (y) { return resolvePromise(promise, y, resolve, reject); }, reject);
    }
    else if (value != null && (typeof value === 'object' || typeof value === 'function')) {
        // value会是boolean 或则是Number 并且在prototype上加then函数
        var called_1 = false; // 避免多次调用
        try {
            // then函数只获取一次,  then 是value的getter拿的 那么只应该触发一次getter
            // 而且可能getter then的时候就报错
            var then = value.then;
            if (typeof then === 'function') {
                then.call(value, function (y) {
                    if (called_1)
                        return;
                    called_1 = true;
                    resolvePromise(promise, y, resolve, reject);
                }, function (value) {
                    if (called_1)
                        return;
                    called_1 = true;
                    reject(value);
                });
            }
            else {
                resolve(value);
            }
        }
        catch (e) {
            if (called_1)
                return;
            called_1 = true;
            reject(e);
        }
    }
    else {
        resolve(value);
    }
}
function nextTick(callback) {
    setTimeout(callback);
}
/**
 * Promise/A+规范测试
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */
exports["default"] = MyPromise;
try {
    module.exports = MyPromise;
}
catch (e) { }
