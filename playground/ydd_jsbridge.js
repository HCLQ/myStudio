/* eslint-disable */
var bridge = {
  default: this,
  call: function(name, params, callback) {
    var output = "";
    if ("function" == typeof params) {
      callback = params;
      params = {};
    }
    params = {
      data: void 0 === params ? null : params
    };
    if ("function" == typeof callback) {
      var callBackName = "dscb" + window.dscb++;
      window[callBackName] = callback;
      params._dscbstub = callBackName;
    }
    params = JSON.stringify(params);
    if (window._dsbridge) {
      output = window._dsbridge.call(name, params);
    } else if (window._dswk || -1 != navigator.userAgent.indexOf("_dsbridge")) {
      output = prompt("_dsbridge=" + name, params);
    }

    return JSON.parse(output || "{}").data;
  },
  register: function(name, callback, isAsyn) {
    isAsyn = isAsyn ? window._dsaf : window._dsf;
    if (!window._dsInit) {
      window._dsInit = !0;
      setTimeout(function() {
        bridge.call("_dsb.dsinit");
      }, 0);
    }
    if ("object" == typeof callback) {
      isAsyn._obs[name] = callback;
    } else {
      isAsyn[name] = callback;
    }
  },
  registerAsyn: function(name, callback) {
    this.register(name, callback, !0);
  },
  hasNativeMethod: function(name, type) {
    return this.call("_dsb.hasNativeMethod", {
      name: name,
      type: type || "all"
    });
  },
  disableJavascriptDialogBlock: function(b) {
    this.call("_dsb.disableJavascriptDialogBlock", { disable: !1 !== b });
  }
};
!(function() {
  if (!window._dsf) {
    var assignToWin = {
        _dsf: { _obs: {} },
        _dsaf: { _obs: {} },
        dscb: 0,
        dsBridge: bridge,
        close: function() {
          bridge.call("_dsb.closePage");
        },
        _handleMessageFromNative: function(payload) {
          var data = JSON.parse(payload.data);
          var result = { id: payload.callbackId, complete: !0 };
          var syncCallback = this._dsf[payload.method];
          var asyncCallback = this._dsaf[payload.method];
          var callSync = function(action, context) {
            result.data = action.apply(context, data);
            bridge.call("_dsb.returnValue", result);
          };
          var callAsync = function(action, context) {
            data.push(function(a, c) {
              result.data = a;
              result.complete = !1 !== c;
              bridge.call("_dsb.returnValue", result);
            });
            action.apply(context, data);
          };
          if (syncCallback) {
            callSync(syncCallback, this._dsf);
          } else if (asyncCallback) {
            callAsync(asyncCallback, this._dsaf);
          } else {
            syncCallback = payload.method.split(".");
            if (2 <= syncCallback.length) {
              payload = syncCallback.pop();
              var syncCallback = syncCallback.join(".");
              var asyncCallback = this._dsf._obs;
              var asyncCallback = asyncCallback[syncCallback] || {};
              var callback = asyncCallback[payload];
              if (callback && "function" == typeof callback) {
                callSync(callback, asyncCallback);
              } else {
                asyncCallback = this._dsaf._obs;
                asyncCallback = asyncCallback[syncCallback] || {};
                if (
                  (callback = asyncCallback[payload]) &&
                  "function" == typeof callback
                ) {
                  callAsync(callback, asyncCallback);
                }
              }
            }
          }
        }
      },
      a;
    for (a in assignToWin) window[a] = assignToWin[a];
    bridge.register("_hasJavascriptMethod", function(names, b) {
      b = names.split(".");
      if (2 > b.length) return !(!_dsf[b] && !_dsaf[b]);
      names = b.pop();
      b = b.join(".");
      return (b = _dsf._obs[b] || _dsaf._obs[b]) && !!b[names];
    });
  }
})();
export default bridge;
