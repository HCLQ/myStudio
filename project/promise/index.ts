// 测试
// tsc project/promise/index 编译
// promises-aplus-tests project/promise/index.js

enum STATUS {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected'
}
const isFunction = (v) => typeof v === 'function'
class MyPromise {
  public static all(promises) {
    return new MyPromise((resolve, reject) => {
      let done = countToGo(promises.length, resolve)
      promises.forEach((promise, index) => {
        promise.then((value) => {
          done(index, value)
        }, reject)
      })
    })

    function countToGo(length, resolve) {
      let count = 0
      let values = []
      return function(i, value) {
        values[i] = value
        if (++count === length) {
          resolve(values)
        }
      }
    }
  }

  public static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise.then(resolve, reject)
      })
    })
  }

  public static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }

  public static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  public static deferred() {
    // 延迟对象
    let defer = {
      promise: undefined,
      resolve: undefined,
      reject: undefined
    }
    defer.promise = new MyPromise((resolve, reject) => {
      defer.resolve = resolve
      defer.reject = reject
    })
    return defer
  }

  public status = STATUS.PENDING
  private onFulfilledCallbacks = []
  private onRejectedCallbacks = []
  private value // 返回值
  private reason // 拒因

  private resolve = (value) => {
    if (value instanceof MyPromise) {
      return value.then(this.resolve, this.reject)
    }

    nextTick(() => {
      // 调用resolve 回调对应onFulfilled函数
      if (this.status === STATUS.PENDING) {
        // 只能由pedning状态 => fulfilled状态 (避免调用多次resolve reject)
        this.status = STATUS.FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach((cb) => cb(value))
      }
    })
  }

  private reject = (reason) => {
    nextTick(() => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach((cb) => cb(reason))
      }
    })
  }

  constructor(excutor) {
    try {
      excutor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }

  public then(onFulfilled, onRejected) {
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : (value) => value
    onRejected = isFunction(onRejected)
      ? onRejected
      : (reason) => {
          throw reason
        }
    let newPromise = new MyPromise((resolve, reject) => {
      let newValue
      switch (this.status) {
        case STATUS.FULFILLED:
          nextTick(() => {
            try {
              newValue = onFulfilled(this.value)
              resolvePromise(newPromise, newValue, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
          break
        case STATUS.REJECTED:
          nextTick(() => {
            try {
              newValue = onRejected(this.reason)
              resolvePromise(newPromise, newValue, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
          break
        case STATUS.PENDING:
          this.onFulfilledCallbacks.push((value) => {
            try {
              let newValue = onFulfilled(value)
              resolvePromise(newPromise, newValue, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
          this.onRejectedCallbacks.push((value) => {
            try {
              let newValue = onRejected(value)
              resolvePromise(newPromise, newValue, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
          break
      }
    })
    return newPromise
  }

  public catch(onRejected) {
    return this.then(null, onRejected)
  }
}

function resolvePromise(promise, value, resolve, reject) {
  if (promise === value) {
    return reject(new TypeError('循环引用'))
  }

  if (value instanceof MyPromise) {
    value.then((y) => resolvePromise(promise, y, resolve, reject), reject)
  } else if (value != null && (typeof value === 'object' || typeof value === 'function')) {
    // value会是boolean 或则是Number 并且在prototype上加then函数
    let called = false // 避免多次调用
    try {
      // then函数只获取一次,  then 是value的getter拿的 那么只应该触发一次getter
      // 而且可能getter then的时候就报错
      let then = value.then
      if (typeof then === 'function') {
        then.call(
          value,
          (y) => {
            if (called) return
            called = true
            resolvePromise(promise, y, resolve, reject)
          },
          (value) => {
            if (called) return
            called = true
            reject(value)
          }
        )
      } else {
        resolve(value)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(value)
  }
}

function nextTick(callback) {
  setTimeout(callback)
}

/**
 * Promise/A+规范测试
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */
export default MyPromise
try {
  module.exports = MyPromise
} catch (e) {}
