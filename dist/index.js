import { renderStoryString as Q1, persona_description_positions as av } from "../../../../power-user.js";
import { parseMesExamples as K1, baseChatReplace as J1, chat_metadata as Ls, getMaxContextSize as W1, name1 as Aa, name2 as Kr, this_chid as un, extension_prompt_types as xa, depth_prompt_role_default as e2, depth_prompt_depth_default as t2 } from "../../../../../script.js";
import { createWorldInfoEntry as n2, world_info_include_names as r2, wi_anchor_position as a2, selected_world_info as i2, METADATA_KEY as s2, world_info as o2, world_names as u2 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as l2, formatInstructModeSystemPrompt as c2 } from "../../../../instruct-mode.js";
import { appendFileContent as d2 } from "../../../../chats.js";
import { setOpenAIMessages as f2, setOpenAIMessageExamples as h2, formatWorldInfo as p2, getPromptPosition as m2, getPromptRole as g2, prepareOpenAIMessages as v2 } from "../../../../openai.js";
import { metadata_keys as Ps } from "../../../../authors-note.js";
import { getGroupDepthPrompts as y2, selected_group as Kt, groups as iv } from "../../../../group-chats.js";
import { runRegexScript as _2, getRegexedString as b2, regex_placement as sv } from "../../../regex/engine.js";
import { getCharaFilename as S2, removeFromArray as ov, runAfterAnimation as w2 } from "../../../../utils.js";
import { commonEnumProviders as E2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as Xd } from "../../../../popup.js";
import uv from "../../../../../lib/dialog-polyfill.esm.js";
function Qf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qd = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;
function C2() {
  if (lv) return Is;
  lv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(a, u, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      l = {};
      for (var m in u)
        m !== "key" && (l[m] = u[m]);
    } else l = u;
    return u = l.ref, {
      $$typeof: t,
      type: a,
      key: f,
      ref: u !== void 0 ? u : null,
      props: l
    };
  }
  return Is.Fragment = r, Is.jsx = s, Is.jsxs = s, Is;
}
var cv;
function k2() {
  return cv || (cv = 1, Qd.exports = C2()), Qd.exports;
}
var A = k2(), Kd = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dv;
function A2() {
  if (dv) return De;
  dv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
  function _(B) {
    return B === null || typeof B != "object" ? null : (B = E && B[E] || B["@@iterator"], typeof B == "function" ? B : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, C = {};
  function x(B, Y, ce) {
    this.props = B, this.context = Y, this.refs = C, this.updater = ce || S;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(B, Y) {
    if (typeof B != "object" && typeof B != "function" && B != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, B, Y, "setState");
  }, x.prototype.forceUpdate = function(B) {
    this.updater.enqueueForceUpdate(this, B, "forceUpdate");
  };
  function j() {
  }
  j.prototype = x.prototype;
  function N(B, Y, ce) {
    this.props = B, this.context = Y, this.refs = C, this.updater = ce || S;
  }
  var I = N.prototype = new j();
  I.constructor = N, h(I, x.prototype), I.isPureReactComponent = !0;
  var c = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(B, Y, ce, G, P, te) {
    return ce = te.ref, {
      $$typeof: t,
      type: B,
      key: Y,
      ref: ce !== void 0 ? ce : null,
      props: te
    };
  }
  function M(B, Y) {
    return k(
      B.type,
      Y,
      void 0,
      void 0,
      void 0,
      B.props
    );
  }
  function z(B) {
    return typeof B == "object" && B !== null && B.$$typeof === t;
  }
  function R(B) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + B.replace(/[=:]/g, function(ce) {
      return Y[ce];
    });
  }
  var L = /\/+/g;
  function q(B, Y) {
    return typeof B == "object" && B !== null && B.key != null ? R("" + B.key) : Y.toString(36);
  }
  function F() {
  }
  function $(B) {
    switch (B.status) {
      case "fulfilled":
        return B.value;
      case "rejected":
        throw B.reason;
      default:
        switch (typeof B.status == "string" ? B.then(F, F) : (B.status = "pending", B.then(
          function(Y) {
            B.status === "pending" && (B.status = "fulfilled", B.value = Y);
          },
          function(Y) {
            B.status === "pending" && (B.status = "rejected", B.reason = Y);
          }
        )), B.status) {
          case "fulfilled":
            return B.value;
          case "rejected":
            throw B.reason;
        }
    }
    throw B;
  }
  function W(B, Y, ce, G, P) {
    var te = typeof B;
    (te === "undefined" || te === "boolean") && (B = null);
    var K = !1;
    if (B === null) K = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (B.$$typeof) {
            case t:
            case r:
              K = !0;
              break;
            case g:
              return K = B._init, W(
                K(B._payload),
                Y,
                ce,
                G,
                P
              );
          }
      }
    if (K)
      return P = P(B), K = G === "" ? "." + q(B, 0) : G, c(P) ? (ce = "", K != null && (ce = K.replace(L, "$&/") + "/"), W(P, Y, ce, "", function(pe) {
        return pe;
      })) : P != null && (z(P) && (P = M(
        P,
        ce + (P.key == null || B && B.key === P.key ? "" : ("" + P.key).replace(
          L,
          "$&/"
        ) + "/") + K
      )), Y.push(P)), 1;
    K = 0;
    var se = G === "" ? "." : G + ":";
    if (c(B))
      for (var re = 0; re < B.length; re++)
        G = B[re], te = se + q(G, re), K += W(
          G,
          Y,
          ce,
          te,
          P
        );
    else if (re = _(B), typeof re == "function")
      for (B = re.call(B), re = 0; !(G = B.next()).done; )
        G = G.value, te = se + q(G, re++), K += W(
          G,
          Y,
          ce,
          te,
          P
        );
    else if (te === "object") {
      if (typeof B.then == "function")
        return W(
          $(B),
          Y,
          ce,
          G,
          P
        );
      throw Y = String(B), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(B).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return K;
  }
  function O(B, Y, ce) {
    if (B == null) return B;
    var G = [], P = 0;
    return W(B, G, "", "", function(te) {
      return Y.call(ce, te, P++);
    }), G;
  }
  function U(B) {
    if (B._status === -1) {
      var Y = B._result;
      Y = Y(), Y.then(
        function(ce) {
          (B._status === 0 || B._status === -1) && (B._status = 1, B._result = ce);
        },
        function(ce) {
          (B._status === 0 || B._status === -1) && (B._status = 2, B._result = ce);
        }
      ), B._status === -1 && (B._status = 0, B._result = Y);
    }
    if (B._status === 1) return B._result.default;
    throw B._result;
  }
  var J = typeof reportError == "function" ? reportError : function(B) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof B == "object" && B !== null && typeof B.message == "string" ? String(B.message) : String(B),
        error: B
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", B);
      return;
    }
    console.error(B);
  };
  function ae() {
  }
  return De.Children = {
    map: O,
    forEach: function(B, Y, ce) {
      O(
        B,
        function() {
          Y.apply(this, arguments);
        },
        ce
      );
    },
    count: function(B) {
      var Y = 0;
      return O(B, function() {
        Y++;
      }), Y;
    },
    toArray: function(B) {
      return O(B, function(Y) {
        return Y;
      }) || [];
    },
    only: function(B) {
      if (!z(B))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return B;
    }
  }, De.Component = x, De.Fragment = s, De.Profiler = u, De.PureComponent = N, De.StrictMode = a, De.Suspense = p, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(B) {
      return y.H.useMemoCache(B);
    }
  }, De.cache = function(B) {
    return function() {
      return B.apply(null, arguments);
    };
  }, De.cloneElement = function(B, Y, ce) {
    if (B == null)
      throw Error(
        "The argument must be a React element, but you passed " + B + "."
      );
    var G = h({}, B.props), P = B.key, te = void 0;
    if (Y != null)
      for (K in Y.ref !== void 0 && (te = void 0), Y.key !== void 0 && (P = "" + Y.key), Y)
        !w.call(Y, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && Y.ref === void 0 || (G[K] = Y[K]);
    var K = arguments.length - 2;
    if (K === 1) G.children = ce;
    else if (1 < K) {
      for (var se = Array(K), re = 0; re < K; re++)
        se[re] = arguments[re + 2];
      G.children = se;
    }
    return k(B.type, P, void 0, void 0, te, G);
  }, De.createContext = function(B) {
    return B = {
      $$typeof: f,
      _currentValue: B,
      _currentValue2: B,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, B.Provider = B, B.Consumer = {
      $$typeof: l,
      _context: B
    }, B;
  }, De.createElement = function(B, Y, ce) {
    var G, P = {}, te = null;
    if (Y != null)
      for (G in Y.key !== void 0 && (te = "" + Y.key), Y)
        w.call(Y, G) && G !== "key" && G !== "__self" && G !== "__source" && (P[G] = Y[G]);
    var K = arguments.length - 2;
    if (K === 1) P.children = ce;
    else if (1 < K) {
      for (var se = Array(K), re = 0; re < K; re++)
        se[re] = arguments[re + 2];
      P.children = se;
    }
    if (B && B.defaultProps)
      for (G in K = B.defaultProps, K)
        P[G] === void 0 && (P[G] = K[G]);
    return k(B, te, void 0, void 0, null, P);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(B) {
    return { $$typeof: m, render: B };
  }, De.isValidElement = z, De.lazy = function(B) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: B },
      _init: U
    };
  }, De.memo = function(B, Y) {
    return {
      $$typeof: v,
      type: B,
      compare: Y === void 0 ? null : Y
    };
  }, De.startTransition = function(B) {
    var Y = y.T, ce = {};
    y.T = ce;
    try {
      var G = B(), P = y.S;
      P !== null && P(ce, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(ae, J);
    } catch (te) {
      J(te);
    } finally {
      y.T = Y;
    }
  }, De.unstable_useCacheRefresh = function() {
    return y.H.useCacheRefresh();
  }, De.use = function(B) {
    return y.H.use(B);
  }, De.useActionState = function(B, Y, ce) {
    return y.H.useActionState(B, Y, ce);
  }, De.useCallback = function(B, Y) {
    return y.H.useCallback(B, Y);
  }, De.useContext = function(B) {
    return y.H.useContext(B);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(B, Y) {
    return y.H.useDeferredValue(B, Y);
  }, De.useEffect = function(B, Y, ce) {
    var G = y.H;
    if (typeof ce == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return G.useEffect(B, Y);
  }, De.useId = function() {
    return y.H.useId();
  }, De.useImperativeHandle = function(B, Y, ce) {
    return y.H.useImperativeHandle(B, Y, ce);
  }, De.useInsertionEffect = function(B, Y) {
    return y.H.useInsertionEffect(B, Y);
  }, De.useLayoutEffect = function(B, Y) {
    return y.H.useLayoutEffect(B, Y);
  }, De.useMemo = function(B, Y) {
    return y.H.useMemo(B, Y);
  }, De.useOptimistic = function(B, Y) {
    return y.H.useOptimistic(B, Y);
  }, De.useReducer = function(B, Y, ce) {
    return y.H.useReducer(B, Y, ce);
  }, De.useRef = function(B) {
    return y.H.useRef(B);
  }, De.useState = function(B) {
    return y.H.useState(B);
  }, De.useSyncExternalStore = function(B, Y, ce) {
    return y.H.useSyncExternalStore(
      B,
      Y,
      ce
    );
  }, De.useTransition = function() {
    return y.H.useTransition();
  }, De.version = "19.1.1", De;
}
var fv;
function Kf() {
  return fv || (fv = 1, Kd.exports = A2()), Kd.exports;
}
var ie = Kf();
const yl = /* @__PURE__ */ Qf(ie);
var Jd = { exports: {} }, Bs = {}, Wd = { exports: {} }, ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function x2() {
  return hv || (hv = 1, (function(t) {
    function r(O, U) {
      var J = O.length;
      O.push(U);
      e: for (; 0 < J; ) {
        var ae = J - 1 >>> 1, B = O[ae];
        if (0 < u(B, U))
          O[ae] = U, O[J] = B, J = ae;
        else break e;
      }
    }
    function s(O) {
      return O.length === 0 ? null : O[0];
    }
    function a(O) {
      if (O.length === 0) return null;
      var U = O[0], J = O.pop();
      if (J !== U) {
        O[0] = J;
        e: for (var ae = 0, B = O.length, Y = B >>> 1; ae < Y; ) {
          var ce = 2 * (ae + 1) - 1, G = O[ce], P = ce + 1, te = O[P];
          if (0 > u(G, J))
            P < B && 0 > u(te, G) ? (O[ae] = te, O[P] = J, ae = P) : (O[ae] = G, O[ce] = J, ae = ce);
          else if (P < B && 0 > u(te, J))
            O[ae] = te, O[P] = J, ae = P;
          else break e;
        }
      }
      return U;
    }
    function u(O, U) {
      var J = O.sortIndex - U.sortIndex;
      return J !== 0 ? J : O.id - U.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      t.unstable_now = function() {
        return l.now();
      };
    } else {
      var f = Date, m = f.now();
      t.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], v = [], g = 1, E = null, _ = 3, S = !1, h = !1, C = !1, x = !1, j = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    function c(O) {
      for (var U = s(v); U !== null; ) {
        if (U.callback === null) a(v);
        else if (U.startTime <= O)
          a(v), U.sortIndex = U.expirationTime, r(p, U);
        else break;
        U = s(v);
      }
    }
    function y(O) {
      if (C = !1, c(O), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, q());
        else {
          var U = s(v);
          U !== null && W(y, U.startTime - O);
        }
    }
    var w = !1, k = -1, M = 5, z = -1;
    function R() {
      return x ? !0 : !(t.unstable_now() - z < M);
    }
    function L() {
      if (x = !1, w) {
        var O = t.unstable_now();
        z = O;
        var U = !0;
        try {
          e: {
            h = !1, C && (C = !1, N(k), k = -1), S = !0;
            var J = _;
            try {
              t: {
                for (c(O), E = s(p); E !== null && !(E.expirationTime > O && R()); ) {
                  var ae = E.callback;
                  if (typeof ae == "function") {
                    E.callback = null, _ = E.priorityLevel;
                    var B = ae(
                      E.expirationTime <= O
                    );
                    if (O = t.unstable_now(), typeof B == "function") {
                      E.callback = B, c(O), U = !0;
                      break t;
                    }
                    E === s(p) && a(p), c(O);
                  } else a(p);
                  E = s(p);
                }
                if (E !== null) U = !0;
                else {
                  var Y = s(v);
                  Y !== null && W(
                    y,
                    Y.startTime - O
                  ), U = !1;
                }
              }
              break e;
            } finally {
              E = null, _ = J, S = !1;
            }
            U = void 0;
          }
        } finally {
          U ? q() : w = !1;
        }
      }
    }
    var q;
    if (typeof I == "function")
      q = function() {
        I(L);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), $ = F.port2;
      F.port1.onmessage = L, q = function() {
        $.postMessage(null);
      };
    } else
      q = function() {
        j(L, 0);
      };
    function W(O, U) {
      k = j(function() {
        O(t.unstable_now());
      }, U);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, t.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : M = 0 < O ? Math.floor(1e3 / O) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, t.unstable_next = function(O) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = _;
      }
      var J = _;
      _ = U;
      try {
        return O();
      } finally {
        _ = J;
      }
    }, t.unstable_requestPaint = function() {
      x = !0;
    }, t.unstable_runWithPriority = function(O, U) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var J = _;
      _ = O;
      try {
        return U();
      } finally {
        _ = J;
      }
    }, t.unstable_scheduleCallback = function(O, U, J) {
      var ae = t.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ae + J : ae) : J = ae, O) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = J + B, O = {
        id: g++,
        callback: U,
        priorityLevel: O,
        startTime: J,
        expirationTime: B,
        sortIndex: -1
      }, J > ae ? (O.sortIndex = J, r(v, O), s(p) === null && O === s(v) && (C ? (N(k), k = -1) : C = !0, W(y, J - ae))) : (O.sortIndex = B, r(p, O), h || S || (h = !0, w || (w = !0, q()))), O;
    }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(O) {
      var U = _;
      return function() {
        var J = _;
        _ = U;
        try {
          return O.apply(this, arguments);
        } finally {
          _ = J;
        }
      };
    };
  })(ef)), ef;
}
var pv;
function T2() {
  return pv || (pv = 1, Wd.exports = x2()), Wd.exports;
}
var tf = { exports: {} }, Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function N2() {
  if (mv) return Zt;
  mv = 1;
  var t = Kf();
  function r(p) {
    var v = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        v += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var a = {
    d: {
      f: s,
      r: function() {
        throw Error(r(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function l(p, v, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: v,
      implementation: g
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, v) {
    if (p === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Zt.createPortal = function(p, v) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return l(p, v, null, g);
  }, Zt.flushSync = function(p) {
    var v = f.T, g = a.p;
    try {
      if (f.T = null, a.p = 2, p) return p();
    } finally {
      f.T = v, a.p = g, a.d.f();
    }
  }, Zt.preconnect = function(p, v) {
    typeof p == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, a.d.C(p, v));
  }, Zt.prefetchDNS = function(p) {
    typeof p == "string" && a.d.D(p);
  }, Zt.preinit = function(p, v) {
    if (typeof p == "string" && v && typeof v.as == "string") {
      var g = v.as, E = m(g, v.crossOrigin), _ = typeof v.integrity == "string" ? v.integrity : void 0, S = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      g === "style" ? a.d.S(
        p,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: E,
          integrity: _,
          fetchPriority: S
        }
      ) : g === "script" && a.d.X(p, {
        crossOrigin: E,
        integrity: _,
        fetchPriority: S,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Zt.preinitModule = function(p, v) {
    if (typeof p == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var g = m(
            v.as,
            v.crossOrigin
          );
          a.d.M(p, {
            crossOrigin: g,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && a.d.M(p);
  }, Zt.preload = function(p, v) {
    if (typeof p == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var g = v.as, E = m(g, v.crossOrigin);
      a.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Zt.preloadModule = function(p, v) {
    if (typeof p == "string")
      if (v) {
        var g = m(v.as, v.crossOrigin);
        a.d.m(p, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: g,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else a.d.m(p);
  }, Zt.requestFormReset = function(p) {
    a.d.r(p);
  }, Zt.unstable_batchedUpdates = function(p, v) {
    return p(v);
  }, Zt.useFormState = function(p, v, g) {
    return f.H.useFormState(p, v, g);
  }, Zt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Zt.version = "19.1.1", Zt;
}
var gv;
function cy() {
  if (gv) return tf.exports;
  gv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), tf.exports = N2(), tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function O2() {
  if (vv) return Bs;
  vv = 1;
  var t = T2(), r = Kf(), s = cy();
  function a(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function l(e) {
    var n = e, i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (i = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (l(e) !== e)
      throw Error(a(188));
  }
  function p(e) {
    var n = e.alternate;
    if (!n) {
      if (n = l(e), n === null) throw Error(a(188));
      return n !== e ? null : e;
    }
    for (var i = e, o = n; ; ) {
      var d = i.return;
      if (d === null) break;
      var b = d.alternate;
      if (b === null) {
        if (o = d.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (d.child === b.child) {
        for (b = d.child; b; ) {
          if (b === i) return m(d), e;
          if (b === o) return m(d), n;
          b = b.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) i = d, o = b;
      else {
        for (var T = !1, D = d.child; D; ) {
          if (D === i) {
            T = !0, i = d, o = b;
            break;
          }
          if (D === o) {
            T = !0, o = d, i = b;
            break;
          }
          D = D.sibling;
        }
        if (!T) {
          for (D = b.child; D; ) {
            if (D === i) {
              T = !0, i = b, o = d;
              break;
            }
            if (D === o) {
              T = !0, o = b, i = d;
              break;
            }
            D = D.sibling;
          }
          if (!T) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : n;
  }
  function v(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = v(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), N = Symbol.for("react.consumer"), I = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), R = Symbol.for("react.memo_cache_sentinel"), L = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Symbol.for("react.client.reference");
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case x:
        return "Profiler";
      case C:
        return "StrictMode";
      case y:
        return "Suspense";
      case w:
        return "SuspenseList";
      case z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case I:
          return (e.displayName || "Context") + ".Provider";
        case N:
          return (e._context.displayName || "Context") + ".Consumer";
        case c:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : $(e.type) || "Memo";
        case M:
          n = e._payload, e = e._init;
          try {
            return $(e(n));
          } catch {
          }
      }
    return null;
  }
  var W = Array.isArray, O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], B = -1;
  function Y(e) {
    return { current: e };
  }
  function ce(e) {
    0 > B || (e.current = ae[B], ae[B] = null, B--);
  }
  function G(e, n) {
    B++, ae[B] = e.current, e.current = n;
  }
  var P = Y(null), te = Y(null), K = Y(null), se = Y(null);
  function re(e, n) {
    switch (G(K, n), G(te, e), G(P, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Rg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Rg(n), e = jg(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ce(P), G(P, e);
  }
  function pe() {
    ce(P), ce(te), ce(K);
  }
  function Re(e) {
    e.memoizedState !== null && G(se, e);
    var n = P.current, i = jg(n, e.type);
    n !== i && (G(te, e), G(P, i));
  }
  function we(e) {
    te.current === e && (ce(P), ce(te)), se.current === e && (ce(se), Ms._currentValue = J);
  }
  var me = Object.prototype.hasOwnProperty, he = t.unstable_scheduleCallback, Ee = t.unstable_cancelCallback, Ue = t.unstable_shouldYield, et = t.unstable_requestPaint, Qe = t.unstable_now, Ln = t.unstable_getCurrentPriorityLevel, bt = t.unstable_ImmediatePriority, ve = t.unstable_UserBlockingPriority, ye = t.unstable_NormalPriority, Ge = t.unstable_LowPriority, qe = t.unstable_IdlePriority, it = t.log, xr = t.unstable_setDisableYieldValue, nr = null, mt = null;
  function Vn(e) {
    if (typeof it == "function" && xr(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(nr, e);
      } catch {
      }
  }
  var Vt = Math.clz32 ? Math.clz32 : ua, En = Math.log, oa = Math.LN2;
  function ua(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (En(e) / oa | 0) | 0;
  }
  var rr = 256, $n = 4194304;
  function Cn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function $t(e, n, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, b = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~b, o !== 0 ? d = Cn(o) : (T &= D, T !== 0 ? d = Cn(T) : i || (i = D & ~e, i !== 0 && (d = Cn(i))))) : (D = o & ~b, D !== 0 ? d = Cn(D) : T !== 0 ? d = Cn(T) : i || (i = o & ~e, i !== 0 && (d = Cn(i)))), d === 0 ? 0 : n !== 0 && n !== d && (n & b) === 0 && (b = d & -d, i = n & -n, b >= i || b === 32 && (i & 4194048) !== 0) ? n : d;
  }
  function Jt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function po(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ua() {
    var e = rr;
    return rr <<= 1, (rr & 4194048) === 0 && (rr = 256), e;
  }
  function gh() {
    var e = $n;
    return $n <<= 1, ($n & 62914560) === 0 && ($n = 4194304), e;
  }
  function Il(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function I_(e, n, i, o, d, b) {
    var T = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var D = e.entanglements, H = e.expirationTimes, Q = e.hiddenUpdates;
    for (i = T & ~i; 0 < i; ) {
      var oe = 31 - Vt(i), de = 1 << oe;
      D[oe] = 0, H[oe] = -1;
      var ee = Q[oe];
      if (ee !== null)
        for (Q[oe] = null, oe = 0; oe < ee.length; oe++) {
          var ne = ee[oe];
          ne !== null && (ne.lane &= -536870913);
        }
      i &= ~de;
    }
    o !== 0 && vh(e, o, 0), b !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(T & ~n));
  }
  function vh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Vt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function yh(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - Vt(i), d = 1 << o;
      d & n | e[o] & n && (e[o] |= n), i &= ~d;
    }
  }
  function Bl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ul(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _h() {
    var e = U.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Jg(e.type));
  }
  function B_(e, n) {
    var i = U.p;
    try {
      return U.p = e, n();
    } finally {
      U.p = i;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + Tr, Wt = "__reactProps$" + Tr, Ha = "__reactContainer$" + Tr, Hl = "__reactEvents$" + Tr, U_ = "__reactListeners$" + Tr, H_ = "__reactHandles$" + Tr, bh = "__reactResources$" + Tr, qi = "__reactMarker$" + Tr;
  function ql(e) {
    delete e[Ht], delete e[Wt], delete e[Hl], delete e[U_], delete e[H_];
  }
  function qa(e) {
    var n = e[Ht];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ha] || i[Ht]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Pg(e); e !== null; ) {
            if (i = e[Ht]) return i;
            e = Pg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Za(e) {
    if (e = e[Ht] || e[Ha]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Zi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ga(e) {
    var n = e[bh];
    return n || (n = e[bh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Mt(e) {
    e[qi] = !0;
  }
  var Sh = /* @__PURE__ */ new Set(), wh = {};
  function la(e, n) {
    Va(e, n), Va(e + "Capture", n);
  }
  function Va(e, n) {
    for (wh[e] = n, e = 0; e < n.length; e++)
      Sh.add(n[e]);
  }
  var q_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Eh = {}, Ch = {};
  function Z_(e) {
    return me.call(Ch, e) ? !0 : me.call(Eh, e) ? !1 : q_.test(e) ? Ch[e] = !0 : (Eh[e] = !0, !1);
  }
  function mo(e, n, i) {
    if (Z_(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + i);
      }
  }
  function go(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + i);
    }
  }
  function ar(e, n, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, "" + o);
    }
  }
  var Zl, kh;
  function $a(e) {
    if (Zl === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Zl = n && n[1] || "", kh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zl + e + kh;
  }
  var Gl = !1;
  function Vl(e, n) {
    if (!e || Gl) return "";
    Gl = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var de = function() {
                throw Error();
              };
              if (Object.defineProperty(de.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(de, []);
                } catch (ne) {
                  var ee = ne;
                }
                Reflect.construct(e, [], de);
              } else {
                try {
                  de.call();
                } catch (ne) {
                  ee = ne;
                }
                e.call(de.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ne) {
                ee = ne;
              }
              (de = e()) && typeof de.catch == "function" && de.catch(function() {
              });
            }
          } catch (ne) {
            if (ne && ee && typeof ne.stack == "string")
              return [ne.stack, ee.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var b = o.DetermineComponentFrameRoot(), T = b[0], D = b[1];
      if (T && D) {
        var H = T.split(`
`), Q = D.split(`
`);
        for (d = o = 0; o < H.length && !H[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < Q.length && !Q[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === H.length || d === Q.length)
          for (o = H.length - 1, d = Q.length - 1; 1 <= o && 0 <= d && H[o] !== Q[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (H[o] !== Q[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || H[o] !== Q[d]) {
                  var oe = `
` + H[o].replace(" at new ", " at ");
                  return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), oe;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      Gl = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? $a(i) : "";
  }
  function G_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $a(e.type);
      case 16:
        return $a("Lazy");
      case 13:
        return $a("Suspense");
      case 19:
        return $a("SuspenseList");
      case 0:
      case 15:
        return Vl(e.type, !1);
      case 11:
        return Vl(e.type.render, !1);
      case 1:
        return Vl(e.type, !0);
      case 31:
        return $a("Activity");
      default:
        return "";
    }
  }
  function Ah(e) {
    try {
      var n = "";
      do
        n += G_(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function kn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function V_(e) {
    var n = xh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get, b = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(T) {
          o = "" + T, b.call(this, T);
        }
      }), Object.defineProperty(e, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(T) {
          o = "" + T;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function vo(e) {
    e._valueTracker || (e._valueTracker = V_(e));
  }
  function Th(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = xh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function yo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $_ = /[\n"\\]/g;
  function An(e) {
    return e.replace(
      $_,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $l(e, n, i, o, d, b, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), n != null ? T === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + kn(n)) : e.value !== "" + kn(n) && (e.value = "" + kn(n)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), n != null ? Yl(e, T, kn(n)) : i != null ? Yl(e, T, kn(i)) : o != null && e.removeAttribute("value"), d == null && b != null && (e.defaultChecked = !!b), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + kn(D) : e.removeAttribute("name");
  }
  function Nh(e, n, i, o, d, b, T, D) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), n != null || i != null) {
      if (!(b !== "submit" && b !== "reset" || n != null))
        return;
      i = i != null ? "" + kn(i) : "", n = n != null ? "" + kn(n) : i, D || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Yl(e, n, i) {
    n === "number" && yo(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ya(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var d = 0; d < i.length; d++)
        n["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        d = n.hasOwnProperty("$" + e[i].value), e[i].selected !== d && (e[i].selected = d), d && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + kn(i), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Oh(e, n, i) {
    if (n != null && (n = "" + kn(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + kn(i) : "";
  }
  function Mh(e, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(a(92));
        if (W(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), n = i;
    }
    i = kn(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Fa(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Y_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rh(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || Y_.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function jh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in n)
        o = n[d], n.hasOwnProperty(d) && i[d] !== o && Rh(e, d, o);
    } else
      for (var b in n)
        n.hasOwnProperty(b) && Rh(e, b, n[b]);
  }
  function Fl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var F_ = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), X_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _o(e) {
    return X_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Xl = null;
  function Ql(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, Qa = null;
  function Dh(e) {
    var n = Za(e);
    if (n && (e = n.stateNode)) {
      var i = e[Wt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if ($l(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), n = i.name, i.type === "radio" && n != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + An(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var d = o[Wt] || null;
                if (!d) throw Error(a(90));
                $l(
                  o,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (n = 0; n < i.length; n++)
              o = i[n], o.form === e.form && Th(o);
          }
          break e;
        case "textarea":
          Oh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ya(e, !!i.multiple, n, !1);
      }
    }
  }
  var Kl = !1;
  function zh(e, n, i) {
    if (Kl) return e(n, i);
    Kl = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Kl = !1, (Xa !== null || Qa !== null) && (au(), Xa && (n = Xa, e = Qa, Qa = Xa = null, Dh(n), e)))
        for (n = 0; n < e.length; n++) Dh(e[n]);
    }
  }
  function Gi(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[Wt] || null;
    if (o === null) return null;
    i = o[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        a(231, n, typeof i)
      );
    return i;
  }
  var ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jl = !1;
  if (ir)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          Jl = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      Jl = !1;
    }
  var Nr = null, Wl = null, bo = null;
  function Lh() {
    if (bo) return bo;
    var e, n = Wl, i = n.length, o, d = "value" in Nr ? Nr.value : Nr.textContent, b = d.length;
    for (e = 0; e < i && n[e] === d[e]; e++) ;
    var T = i - e;
    for (o = 1; o <= T && n[i - o] === d[b - o]; o++) ;
    return bo = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function So(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wo() {
    return !0;
  }
  function Ph() {
    return !1;
  }
  function en(e) {
    function n(i, o, d, b, T) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = b, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (i = e[D], this[D] = i ? i(b) : b[D]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? wo : Ph, this.isPropagationStopped = Ph, this;
    }
    return g(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = wo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = wo);
      },
      persist: function() {
      },
      isPersistent: wo
    }), n;
  }
  var ca = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Eo = en(ca), $i = g({}, ca, { view: 0, detail: 0 }), Q_ = en($i), ec, tc, Yi, Co = g({}, $i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (ec = e.screenX - Yi.screenX, tc = e.screenY - Yi.screenY) : tc = ec = 0, Yi = e), ec);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : tc;
    }
  }), Ih = en(Co), K_ = g({}, Co, { dataTransfer: 0 }), J_ = en(K_), W_ = g({}, $i, { relatedTarget: 0 }), nc = en(W_), eb = g({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tb = en(eb), nb = g({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rb = en(nb), ab = g({}, ca, { data: 0 }), Bh = en(ab), ib = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ob = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ub(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = ob[e]) ? !!n[e] : !1;
  }
  function rc() {
    return ub;
  }
  var lb = g({}, $i, {
    key: function(e) {
      if (e.key) {
        var n = ib[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = So(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(e) {
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), cb = en(lb), db = g({}, Co, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Uh = en(db), fb = g({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
  }), hb = en(fb), pb = g({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mb = en(pb), gb = g({}, Co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vb = en(gb), yb = g({}, ca, {
    newState: 0,
    oldState: 0
  }), _b = en(yb), bb = [9, 13, 27, 32], ac = ir && "CompositionEvent" in window, Fi = null;
  ir && "documentMode" in document && (Fi = document.documentMode);
  var Sb = ir && "TextEvent" in window && !Fi, Hh = ir && (!ac || Fi && 8 < Fi && 11 >= Fi), qh = " ", Zh = !1;
  function Gh(e, n) {
    switch (e) {
      case "keyup":
        return bb.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function wb(e, n) {
    switch (e) {
      case "compositionend":
        return Vh(n);
      case "keypress":
        return n.which !== 32 ? null : (Zh = !0, qh);
      case "textInput":
        return e = n.data, e === qh && Zh ? null : e;
      default:
        return null;
    }
  }
  function Eb(e, n) {
    if (Ka)
      return e === "compositionend" || !ac && Gh(e, n) ? (e = Lh(), bo = Wl = Nr = null, Ka = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Hh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function $h(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Cb[e.type] : n === "textarea";
  }
  function Yh(e, n, i, o) {
    Xa ? Qa ? Qa.push(o) : Qa = [o] : Xa = o, n = cu(n, "onChange"), 0 < n.length && (i = new Eo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Xi = null, Qi = null;
  function kb(e) {
    xg(e, 0);
  }
  function ko(e) {
    var n = Zi(e);
    if (Th(n)) return e;
  }
  function Fh(e, n) {
    if (e === "change") return n;
  }
  var Xh = !1;
  if (ir) {
    var ic;
    if (ir) {
      var sc = "oninput" in document;
      if (!sc) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"), sc = typeof Qh.oninput == "function";
      }
      ic = sc;
    } else ic = !1;
    Xh = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Kh() {
    Xi && (Xi.detachEvent("onpropertychange", Jh), Qi = Xi = null);
  }
  function Jh(e) {
    if (e.propertyName === "value" && ko(Qi)) {
      var n = [];
      Yh(
        n,
        Qi,
        e,
        Ql(e)
      ), zh(kb, n);
    }
  }
  function Ab(e, n, i) {
    e === "focusin" ? (Kh(), Xi = n, Qi = i, Xi.attachEvent("onpropertychange", Jh)) : e === "focusout" && Kh();
  }
  function xb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ko(Qi);
  }
  function Tb(e, n) {
    if (e === "click") return ko(n);
  }
  function Nb(e, n) {
    if (e === "input" || e === "change")
      return ko(n);
  }
  function Ob(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var fn = typeof Object.is == "function" ? Object.is : Ob;
  function Ki(e, n) {
    if (fn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!me.call(n, d) || !fn(e[d], n[d]))
        return !1;
    }
    return !0;
  }
  function Wh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ep(e, n) {
    var i = Wh(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= n && o >= n)
          return { node: i, offset: n - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Wh(i);
    }
  }
  function tp(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? tp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function np(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = yo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = yo(e.document);
    }
    return n;
  }
  function oc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Mb = ir && "documentMode" in document && 11 >= document.documentMode, Ja = null, uc = null, Ji = null, lc = !1;
  function rp(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    lc || Ja == null || Ja !== yo(o) || (o = Ja, "selectionStart" in o && oc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ji && Ki(Ji, o) || (Ji = o, o = cu(uc, "onSelect"), 0 < o.length && (n = new Eo(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: o }), n.target = Ja)));
  }
  function da(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var Wa = {
    animationend: da("Animation", "AnimationEnd"),
    animationiteration: da("Animation", "AnimationIteration"),
    animationstart: da("Animation", "AnimationStart"),
    transitionrun: da("Transition", "TransitionRun"),
    transitionstart: da("Transition", "TransitionStart"),
    transitioncancel: da("Transition", "TransitionCancel"),
    transitionend: da("Transition", "TransitionEnd")
  }, cc = {}, ap = {};
  ir && (ap = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function fa(e) {
    if (cc[e]) return cc[e];
    if (!Wa[e]) return e;
    var n = Wa[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in ap)
        return cc[e] = n[i];
    return e;
  }
  var ip = fa("animationend"), sp = fa("animationiteration"), op = fa("animationstart"), Rb = fa("transitionrun"), jb = fa("transitionstart"), Db = fa("transitioncancel"), up = fa("transitionend"), lp = /* @__PURE__ */ new Map(), dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  dc.push("scrollEnd");
  function Pn(e, n) {
    lp.set(e, n), la(n, [e]);
  }
  var cp = /* @__PURE__ */ new WeakMap();
  function xn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = cp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Ah(n)
      }, cp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Ah(n)
    };
  }
  var Tn = [], ei = 0, fc = 0;
  function Ao() {
    for (var e = ei, n = fc = ei = 0; n < e; ) {
      var i = Tn[n];
      Tn[n++] = null;
      var o = Tn[n];
      Tn[n++] = null;
      var d = Tn[n];
      Tn[n++] = null;
      var b = Tn[n];
      if (Tn[n++] = null, o !== null && d !== null) {
        var T = o.pending;
        T === null ? d.next = d : (d.next = T.next, T.next = d), o.pending = d;
      }
      b !== 0 && dp(i, d, b);
    }
  }
  function xo(e, n, i, o) {
    Tn[ei++] = e, Tn[ei++] = n, Tn[ei++] = i, Tn[ei++] = o, fc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function hc(e, n, i, o) {
    return xo(e, n, i, o), To(e);
  }
  function ti(e, n) {
    return xo(e, null, null, n), To(e);
  }
  function dp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, b = e.return; b !== null; )
      b.childLanes |= i, o = b.alternate, o !== null && (o.childLanes |= i), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (d = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, d && n !== null && (d = 31 - Vt(i), e = b.hiddenUpdates, o = e[d], o === null ? e[d] = [n] : o.push(n), n.lane = i | 536870912), b) : null;
  }
  function To(e) {
    if (50 < Es)
      throw Es = 0, _d = null, Error(a(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function zb(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function hn(e, n, i, o) {
    return new zb(e, n, i, o);
  }
  function pc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sr(e, n) {
    var i = e.alternate;
    return i === null ? (i = hn(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function fp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function No(e, n, i, o, d, b) {
    var T = 0;
    if (o = e, typeof e == "function") pc(e) && (T = 1);
    else if (typeof e == "string")
      T = P1(
        e,
        i,
        P.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case z:
          return e = hn(31, i, n, d), e.elementType = z, e.lanes = b, e;
        case h:
          return ha(i.children, d, b, n);
        case C:
          T = 8, d |= 24;
          break;
        case x:
          return e = hn(12, i, n, d | 2), e.elementType = x, e.lanes = b, e;
        case y:
          return e = hn(13, i, n, d), e.elementType = y, e.lanes = b, e;
        case w:
          return e = hn(19, i, n, d), e.elementType = w, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case j:
              case I:
                T = 10;
                break e;
              case N:
                T = 9;
                break e;
              case c:
                T = 11;
                break e;
              case k:
                T = 14;
                break e;
              case M:
                T = 16, o = null;
                break e;
            }
          T = 29, i = Error(
            a(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = hn(T, i, n, d), n.elementType = e, n.type = o, n.lanes = b, n;
  }
  function ha(e, n, i, o) {
    return e = hn(7, e, o, n), e.lanes = i, e;
  }
  function mc(e, n, i) {
    return e = hn(6, e, null, n), e.lanes = i, e;
  }
  function gc(e, n, i) {
    return n = hn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = i, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ri = [], ai = 0, Oo = null, Mo = 0, Nn = [], On = 0, pa = null, or = 1, ur = "";
  function ma(e, n) {
    ri[ai++] = Mo, ri[ai++] = Oo, Oo = e, Mo = n;
  }
  function hp(e, n, i) {
    Nn[On++] = or, Nn[On++] = ur, Nn[On++] = pa, pa = e;
    var o = or;
    e = ur;
    var d = 32 - Vt(o) - 1;
    o &= ~(1 << d), i += 1;
    var b = 32 - Vt(n) + d;
    if (30 < b) {
      var T = d - d % 5;
      b = (o & (1 << T) - 1).toString(32), o >>= T, d -= T, or = 1 << 32 - Vt(n) + d | i << d | o, ur = b + e;
    } else
      or = 1 << b | i << d | o, ur = e;
  }
  function vc(e) {
    e.return !== null && (ma(e, 1), hp(e, 1, 0));
  }
  function yc(e) {
    for (; e === Oo; )
      Oo = ri[--ai], ri[ai] = null, Mo = ri[--ai], ri[ai] = null;
    for (; e === pa; )
      pa = Nn[--On], Nn[On] = null, ur = Nn[--On], Nn[On] = null, or = Nn[--On], Nn[On] = null;
  }
  var Yt = null, ft = null, $e = !1, ga = null, Yn = !1, _c = Error(a(519));
  function va(e) {
    var n = Error(a(418, ""));
    throw ts(xn(n, e)), _c;
  }
  function pp(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[Ht] = e, n[Wt] = o, i) {
      case "dialog":
        Ie("cancel", n), Ie("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ie("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ks.length; i++)
          Ie(ks[i], n);
        break;
      case "source":
        Ie("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ie("error", n), Ie("load", n);
        break;
      case "details":
        Ie("toggle", n);
        break;
      case "input":
        Ie("invalid", n), Nh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), vo(n);
        break;
      case "select":
        Ie("invalid", n);
        break;
      case "textarea":
        Ie("invalid", n), Mh(n, o.value, o.defaultValue, o.children), vo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Mg(n.textContent, i) ? (o.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)), o.onScroll != null && Ie("scroll", n), o.onScrollEnd != null && Ie("scrollend", n), o.onClick != null && (n.onclick = du), n = !0) : n = !1, n || va(e);
  }
  function mp(e) {
    for (Yt = e.return; Yt; )
      switch (Yt.tag) {
        case 5:
        case 13:
          Yn = !1;
          return;
        case 27:
        case 3:
          Yn = !0;
          return;
        default:
          Yt = Yt.return;
      }
  }
  function Wi(e) {
    if (e !== Yt) return !1;
    if (!$e) return mp(e), $e = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || zd(e.type, e.memoizedProps)), i = !i), i && ft && va(e), mp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                ft = Bn(e.nextSibling);
                break e;
              }
              n--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || n++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      n === 27 ? (n = ft, Vr(e.type) ? (e = Bd, Bd = null, ft = e) : ft = n) : ft = Yt ? Bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    ft = Yt = null, $e = !1;
  }
  function gp() {
    var e = ga;
    return e !== null && (rn === null ? rn = e : rn.push.apply(
      rn,
      e
    ), ga = null), e;
  }
  function ts(e) {
    ga === null ? ga = [e] : ga.push(e);
  }
  var bc = Y(null), ya = null, lr = null;
  function Or(e, n, i) {
    G(bc, n._currentValue), n._currentValue = i;
  }
  function cr(e) {
    e._currentValue = bc.current, ce(bc);
  }
  function Sc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function wc(e, n, i, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var b = d.dependencies;
      if (b !== null) {
        var T = d.child;
        b = b.firstContext;
        e: for (; b !== null; ) {
          var D = b;
          b = d;
          for (var H = 0; H < n.length; H++)
            if (D.context === n[H]) {
              b.lanes |= i, D = b.alternate, D !== null && (D.lanes |= i), Sc(
                b.return,
                i,
                e
              ), o || (T = null);
              break e;
            }
          b = D.next;
        }
      } else if (d.tag === 18) {
        if (T = d.return, T === null) throw Error(a(341));
        T.lanes |= i, b = T.alternate, b !== null && (b.lanes |= i), Sc(T, i, e), T = null;
      } else T = d.child;
      if (T !== null) T.return = d;
      else
        for (T = d; T !== null; ) {
          if (T === e) {
            T = null;
            break;
          }
          if (d = T.sibling, d !== null) {
            d.return = T.return, T = d;
            break;
          }
          T = T.return;
        }
      d = T;
    }
  }
  function ns(e, n, i, o) {
    e = null;
    for (var d = n, b = !1; d !== null; ) {
      if (!b) {
        if ((d.flags & 524288) !== 0) b = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var T = d.alternate;
        if (T === null) throw Error(a(387));
        if (T = T.memoizedProps, T !== null) {
          var D = d.type;
          fn(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === se.current) {
        if (T = d.alternate, T === null) throw Error(a(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      d = d.return;
    }
    e !== null && wc(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function Ro(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!fn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function _a(e) {
    ya = e, lr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function qt(e) {
    return vp(ya, e);
  }
  function jo(e, n) {
    return ya === null && _a(e), vp(e, n);
  }
  function vp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, lr === null) {
      if (e === null) throw Error(a(308));
      lr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else lr = lr.next = n;
    return i;
  }
  var Lb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Pb = t.unstable_scheduleCallback, Ib = t.unstable_NormalPriority, At = {
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ec() {
    return {
      controller: new Lb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && Pb(Ib, function() {
      e.controller.abort();
    });
  }
  var as = null, Cc = 0, ii = 0, si = null;
  function Bb(e, n) {
    if (as === null) {
      var i = as = [];
      Cc = 0, ii = Ad(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Cc++, n.then(yp, yp), n;
  }
  function yp() {
    if (--Cc === 0 && as !== null) {
      si !== null && (si.status = "fulfilled");
      var e = as;
      as = null, ii = 0, si = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Ub(e, n) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        i.push(d);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var d = 0; d < i.length; d++) (0, i[d])(n);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < i.length; d++)
          (0, i[d])(void 0);
      }
    ), o;
  }
  var _p = O.S;
  O.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Bb(e, n), _p !== null && _p(e, n);
  };
  var ba = Y(null);
  function kc() {
    var e = ba.current;
    return e !== null ? e : rt.pooledCache;
  }
  function Do(e, n) {
    n === null ? G(ba, ba.current) : G(ba, n.pool);
  }
  function bp() {
    var e = kc();
    return e === null ? null : { parent: At._currentValue, pool: e };
  }
  var is = Error(a(460)), Sp = Error(a(474)), zo = Error(a(542)), Ac = { then: function() {
  } };
  function wp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Lo() {
  }
  function Ep(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Lo, Lo), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, kp(e), e;
      default:
        if (typeof n.status == "string") n.then(Lo, Lo);
        else {
          if (e = rt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(a(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var d = n;
                d.status = "fulfilled", d.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var d = n;
                d.status = "rejected", d.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, kp(e), e;
        }
        throw ss = n, is;
    }
  }
  var ss = null;
  function Cp() {
    if (ss === null) throw Error(a(459));
    var e = ss;
    return ss = null, e;
  }
  function kp(e) {
    if (e === is || e === zo)
      throw Error(a(483));
  }
  var Mr = !1;
  function xc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Tc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Rr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jr(e, n, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Fe & 2) !== 0) {
      var d = o.pending;
      return d === null ? n.next = n : (n.next = d.next, d.next = n), o.pending = n, n = To(e), dp(e, null, i), n;
    }
    return xo(e, o, n, i), To(e);
  }
  function os(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, yh(e, i);
    }
  }
  function Nc(e, n) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var d = null, b = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var T = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          b === null ? d = b = T : b = b.next = T, i = i.next;
        } while (i !== null);
        b === null ? d = b = n : b = b.next = n;
      } else d = b = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: b,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var Oc = !1;
  function us() {
    if (Oc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, i, o) {
    Oc = !1;
    var d = e.updateQueue;
    Mr = !1;
    var b = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var H = D, Q = H.next;
      H.next = null, T === null ? b = Q : T.next = Q, T = H;
      var oe = e.alternate;
      oe !== null && (oe = oe.updateQueue, D = oe.lastBaseUpdate, D !== T && (D === null ? oe.firstBaseUpdate = Q : D.next = Q, oe.lastBaseUpdate = H));
    }
    if (b !== null) {
      var de = d.baseState;
      T = 0, oe = Q = H = null, D = b;
      do {
        var ee = D.lane & -536870913, ne = ee !== D.lane;
        if (ne ? (Ze & ee) === ee : (o & ee) === ee) {
          ee !== 0 && ee === ii && (Oc = !0), oe !== null && (oe = oe.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Ae = e, Ce = D;
            ee = n;
            var We = i;
            switch (Ce.tag) {
              case 1:
                if (Ae = Ce.payload, typeof Ae == "function") {
                  de = Ae.call(We, de, ee);
                  break e;
                }
                de = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = Ce.payload, ee = typeof Ae == "function" ? Ae.call(We, de, ee) : Ae, ee == null) break e;
                de = g({}, de, ee);
                break e;
              case 2:
                Mr = !0;
            }
          }
          ee = D.callback, ee !== null && (e.flags |= 64, ne && (e.flags |= 8192), ne = d.callbacks, ne === null ? d.callbacks = [ee] : ne.push(ee));
        } else
          ne = {
            lane: ee,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, oe === null ? (Q = oe = ne, H = de) : oe = oe.next = ne, T |= ee;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          ne = D, D = ne.next, ne.next = null, d.lastBaseUpdate = ne, d.shared.pending = null;
        }
      } while (!0);
      oe === null && (H = de), d.baseState = H, d.firstBaseUpdate = Q, d.lastBaseUpdate = oe, b === null && (d.shared.lanes = 0), Hr |= T, e.lanes = T, e.memoizedState = de;
    }
  }
  function Ap(e, n) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(n);
  }
  function xp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Ap(i[e], n);
  }
  var oi = Y(null), Po = Y(0);
  function Tp(e, n) {
    e = vr, G(Po, e), G(oi, n), vr = e | n.baseLanes;
  }
  function Mc() {
    G(Po, vr), G(oi, oi.current);
  }
  function Rc() {
    vr = Po.current, ce(oi), ce(Po);
  }
  var Dr = 0, ze = null, Ke = null, St = null, Io = !1, ui = !1, Sa = !1, Bo = 0, cs = 0, li = null, Hb = 0;
  function gt() {
    throw Error(a(321));
  }
  function jc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!fn(e[i], n[i])) return !1;
    return !0;
  }
  function Dc(e, n, i, o, d, b) {
    return Dr = b, ze = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = e === null || e.memoizedState === null ? dm : fm, Sa = !1, b = i(o, d), Sa = !1, ui && (b = Op(
      n,
      i,
      o,
      d
    )), Np(e), b;
  }
  function Np(e) {
    O.H = Vo;
    var n = Ke !== null && Ke.next !== null;
    if (Dr = 0, St = Ke = ze = null, Io = !1, cs = 0, li = null, n) throw Error(a(300));
    e === null || Rt || (e = e.dependencies, e !== null && Ro(e) && (Rt = !0));
  }
  function Op(e, n, i, o) {
    ze = e;
    var d = 0;
    do {
      if (ui && (li = null), cs = 0, ui = !1, 25 <= d) throw Error(a(301));
      if (d += 1, St = Ke = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      O.H = Fb, b = n(i, o);
    } while (ui);
    return b;
  }
  function qb() {
    var e = O.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ds(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (ze.flags |= 1024), n;
  }
  function zc() {
    var e = Bo !== 0;
    return Bo = 0, e;
  }
  function Lc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Pc(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Io = !1;
    }
    Dr = 0, St = Ke = ze = null, ui = !1, cs = Bo = 0, li = null;
  }
  function tn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return St === null ? ze.memoizedState = St = e : St = St.next = e, St;
  }
  function wt() {
    if (Ke === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = St === null ? ze.memoizedState : St.next;
    if (n !== null)
      St = n, Ke = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(a(467)) : Error(a(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, St === null ? ze.memoizedState = St = e : St = St.next = e;
    }
    return St;
  }
  function Ic() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var n = cs;
    return cs += 1, li === null && (li = []), e = Ep(li, e, n), n = ze, (St === null ? n.memoizedState : St.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? dm : fm), e;
  }
  function Uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === I) return qt(e);
    }
    throw Error(a(438, String(e)));
  }
  function Bc(e) {
    var n = null, i = ze.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = ze.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Ic(), ze.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = R;
    return n.index++, i;
  }
  function dr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = wt();
    return Uc(n, Ke, e);
  }
  function Uc(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = i;
    var d = e.baseQueue, b = o.pending;
    if (b !== null) {
      if (d !== null) {
        var T = d.next;
        d.next = b.next, b.next = T;
      }
      n.baseQueue = d = b, o.pending = null;
    }
    if (b = e.baseState, d === null) e.memoizedState = b;
    else {
      n = d.next;
      var D = T = null, H = null, Q = n, oe = !1;
      do {
        var de = Q.lane & -536870913;
        if (de !== Q.lane ? (Ze & de) === de : (Dr & de) === de) {
          var ee = Q.revertLane;
          if (ee === 0)
            H !== null && (H = H.next = {
              lane: 0,
              revertLane: 0,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), de === ii && (oe = !0);
          else if ((Dr & ee) === ee) {
            Q = Q.next, ee === ii && (oe = !0);
            continue;
          } else
            de = {
              lane: 0,
              revertLane: Q.revertLane,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }, H === null ? (D = H = de, T = b) : H = H.next = de, ze.lanes |= ee, Hr |= ee;
          de = Q.action, Sa && i(b, de), b = Q.hasEagerState ? Q.eagerState : i(b, de);
        } else
          ee = {
            lane: de,
            revertLane: Q.revertLane,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, H === null ? (D = H = ee, T = b) : H = H.next = ee, ze.lanes |= de, Hr |= de;
        Q = Q.next;
      } while (Q !== null && Q !== n);
      if (H === null ? T = b : H.next = D, !fn(b, e.memoizedState) && (Rt = !0, oe && (i = si, i !== null)))
        throw i;
      e.memoizedState = b, e.baseState = T, e.baseQueue = H, o.lastRenderedState = b;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Hc(e) {
    var n = wt(), i = n.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, d = i.pending, b = n.memoizedState;
    if (d !== null) {
      i.pending = null;
      var T = d = d.next;
      do
        b = e(b, T.action), T = T.next;
      while (T !== d);
      fn(b, n.memoizedState) || (Rt = !0), n.memoizedState = b, n.baseQueue === null && (n.baseState = b), i.lastRenderedState = b;
    }
    return [b, o];
  }
  function Mp(e, n, i) {
    var o = ze, d = wt(), b = $e;
    if (b) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = n();
    var T = !fn(
      (Ke || d).memoizedState,
      i
    );
    T && (d.memoizedState = i, Rt = !0), d = d.queue;
    var D = Dp.bind(null, o, d, e);
    if (fs(2048, 8, D, [e]), d.getSnapshot !== n || T || St !== null && St.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        qo(),
        jp.bind(
          null,
          o,
          d,
          i,
          n
        ),
        null
      ), rt === null) throw Error(a(349));
      b || (Dr & 124) !== 0 || Rp(o, n, i);
    }
    return i;
  }
  function Rp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = ze.updateQueue, n === null ? (n = Ic(), ze.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function jp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, zp(n) && Lp(e);
  }
  function Dp(e, n, i) {
    return i(function() {
      zp(n) && Lp(e);
    });
  }
  function zp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !fn(e, i);
    } catch {
      return !0;
    }
  }
  function Lp(e) {
    var n = ti(e, 2);
    n !== null && yn(n, e, 2);
  }
  function qc(e) {
    var n = tn();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), Sa) {
        Vn(!0);
        try {
          i();
        } finally {
          Vn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: e
    }, n;
  }
  function Pp(e, n, i, o) {
    return e.baseState = i, Uc(
      e,
      Ke,
      typeof o == "function" ? o : dr
    );
  }
  function Zb(e, n, i, o, d) {
    if (Go(e)) throw Error(a(485));
    if (e = n.action, e !== null) {
      var b = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(T) {
          b.listeners.push(T);
        }
      };
      O.T !== null ? i(!0) : b.isTransition = !1, o(b), i = n.pending, i === null ? (b.next = n.pending = b, Ip(n, b)) : (b.next = i.next, n.pending = i.next = b);
    }
  }
  function Ip(e, n) {
    var i = n.action, o = n.payload, d = e.state;
    if (n.isTransition) {
      var b = O.T, T = {};
      O.T = T;
      try {
        var D = i(d, o), H = O.S;
        H !== null && H(T, D), Bp(e, n, D);
      } catch (Q) {
        Zc(e, n, Q);
      } finally {
        O.T = b;
      }
    } else
      try {
        b = i(d, o), Bp(e, n, b);
      } catch (Q) {
        Zc(e, n, Q);
      }
  }
  function Bp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Up(e, n, o);
      },
      function(o) {
        return Zc(e, n, o);
      }
    ) : Up(e, n, i);
  }
  function Up(e, n, i) {
    n.status = "fulfilled", n.value = i, Hp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Ip(e, i)));
  }
  function Zc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Hp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Hp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function qp(e, n) {
    return n;
  }
  function Zp(e, n) {
    if ($e) {
      var i = rt.formState;
      if (i !== null) {
        e: {
          var o = ze;
          if ($e) {
            if (ft) {
              t: {
                for (var d = ft, b = Yn; d.nodeType !== 8; ) {
                  if (!b) {
                    d = null;
                    break t;
                  }
                  if (d = Bn(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                b = d.data, d = b === "F!" || b === "F" ? d : null;
              }
              if (d) {
                ft = Bn(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            va(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = tn(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qp,
      lastRenderedState: n
    }, i.queue = o, i = um.bind(
      null,
      ze,
      o
    ), o.dispatch = i, o = qc(!1), b = Fc.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = tn(), d = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = Zb.bind(
      null,
      ze,
      d,
      b,
      i
    ), d.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Gp(e) {
    var n = wt();
    return Vp(n, Ke, e);
  }
  function Vp(e, n, i) {
    if (n = Uc(
      e,
      n,
      qp
    )[0], e = Ho(dr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ds(n);
      } catch (T) {
        throw T === is ? zo : T;
      }
    else o = n;
    n = wt();
    var d = n.queue, b = d.dispatch;
    return i !== n.memoizedState && (ze.flags |= 2048, ci(
      9,
      qo(),
      Gb.bind(null, d, i),
      null
    )), [o, b, e];
  }
  function Gb(e, n) {
    e.action = n;
  }
  function $p(e) {
    var n = wt(), i = Ke;
    if (i !== null)
      return Vp(n, i, e);
    wt(), n = n.memoizedState, i = wt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function ci(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = ze.updateQueue, n === null && (n = Ic(), ze.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function qo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Yp() {
    return wt().memoizedState;
  }
  function Zo(e, n, i, o) {
    var d = tn();
    o = o === void 0 ? null : o, ze.flags |= e, d.memoizedState = ci(
      1 | n,
      qo(),
      i,
      o
    );
  }
  function fs(e, n, i, o) {
    var d = wt();
    o = o === void 0 ? null : o;
    var b = d.memoizedState.inst;
    Ke !== null && o !== null && jc(o, Ke.memoizedState.deps) ? d.memoizedState = ci(n, b, i, o) : (ze.flags |= e, d.memoizedState = ci(
      1 | n,
      b,
      i,
      o
    ));
  }
  function Fp(e, n) {
    Zo(8390656, 8, e, n);
  }
  function Xp(e, n) {
    fs(2048, 8, e, n);
  }
  function Qp(e, n) {
    return fs(4, 2, e, n);
  }
  function Kp(e, n) {
    return fs(4, 4, e, n);
  }
  function Jp(e, n) {
    if (typeof n == "function") {
      e = e();
      var i = n(e);
      return function() {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Wp(e, n, i) {
    i = i != null ? i.concat([e]) : null, fs(4, 4, Jp.bind(null, n, e), i);
  }
  function Gc() {
  }
  function em(e, n) {
    var i = wt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && jc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function tm(e, n) {
    var i = wt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && jc(n, o[1]))
      return o[0];
    if (o = e(), Sa) {
      Vn(!0);
      try {
        e();
      } finally {
        Vn(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Vc(e, n, i) {
    return i === void 0 || (Dr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = ag(), ze.lanes |= e, Hr |= e, i);
  }
  function nm(e, n, i, o) {
    return fn(i, n) ? i : oi.current !== null ? (e = Vc(e, i, o), fn(e, n) || (Rt = !0), e) : (Dr & 42) === 0 ? (Rt = !0, e.memoizedState = i) : (e = ag(), ze.lanes |= e, Hr |= e, n);
  }
  function rm(e, n, i, o, d) {
    var b = U.p;
    U.p = b !== 0 && 8 > b ? b : 8;
    var T = O.T, D = {};
    O.T = D, Fc(e, !1, n, i);
    try {
      var H = d(), Q = O.S;
      if (Q !== null && Q(D, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var oe = Ub(
          H,
          o
        );
        hs(
          e,
          n,
          oe,
          vn(e)
        );
      } else
        hs(
          e,
          n,
          o,
          vn(e)
        );
    } catch (de) {
      hs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: de },
        vn()
      );
    } finally {
      U.p = b, O.T = T;
    }
  }
  function Vb() {
  }
  function $c(e, n, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = am(e).queue;
    rm(
      e,
      d,
      n,
      J,
      i === null ? Vb : function() {
        return im(e), i(o);
      }
    );
  }
  function am(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: J
      },
      next: null
    };
    var i = {};
    return n.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function im(e) {
    var n = am(e).next.queue;
    hs(e, n, {}, vn());
  }
  function Yc() {
    return qt(Ms);
  }
  function sm() {
    return wt().memoizedState;
  }
  function om() {
    return wt().memoizedState;
  }
  function $b(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = vn();
          e = Rr(i);
          var o = jr(n, e, i);
          o !== null && (yn(o, n, i), os(o, n, i)), n = { cache: Ec() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Yb(e, n, i) {
    var o = vn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e) ? lm(n, i) : (i = hc(e, n, i, o), i !== null && (yn(i, e, o), cm(i, n, o)));
  }
  function um(e, n, i) {
    var o = vn();
    hs(e, n, i, o);
  }
  function hs(e, n, i, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Go(e)) lm(n, d);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = n.lastRenderedReducer, b !== null))
        try {
          var T = n.lastRenderedState, D = b(T, i);
          if (d.hasEagerState = !0, d.eagerState = D, fn(D, T))
            return xo(e, n, d, 0), rt === null && Ao(), !1;
        } catch {
        } finally {
        }
      if (i = hc(e, n, d, o), i !== null)
        return yn(i, e, o), cm(i, n, o), !0;
    }
    return !1;
  }
  function Fc(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Ad(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e)) {
      if (n) throw Error(a(479));
    } else
      n = hc(
        e,
        i,
        o,
        2
      ), n !== null && yn(n, e, 2);
  }
  function Go(e) {
    var n = e.alternate;
    return e === ze || n !== null && n === ze;
  }
  function lm(e, n) {
    ui = Io = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function cm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, yh(e, i);
    }
  }
  var Vo = {
    readContext: qt,
    use: Uo,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, dm = {
    readContext: qt,
    use: Uo,
    useCallback: function(e, n) {
      return tn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: qt,
    useEffect: Fp,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, Zo(
        4194308,
        4,
        Jp.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return Zo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Zo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = tn();
      n = n === void 0 ? null : n;
      var o = e();
      if (Sa) {
        Vn(!0);
        try {
          e();
        } finally {
          Vn(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, i) {
      var o = tn();
      if (i !== void 0) {
        var d = i(n);
        if (Sa) {
          Vn(!0);
          try {
            i(n);
          } finally {
            Vn(!1);
          }
        }
      } else d = n;
      return o.memoizedState = o.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, o.queue = e, e = e.dispatch = Yb.bind(
        null,
        ze,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = tn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = qc(e);
      var n = e.queue, i = um.bind(null, ze, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Gc,
    useDeferredValue: function(e, n) {
      var i = tn();
      return Vc(i, e, n);
    },
    useTransition: function() {
      var e = qc(!1);
      return e = rm.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), tn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = ze, d = tn();
      if ($e) {
        if (i === void 0)
          throw Error(a(407));
        i = i();
      } else {
        if (i = n(), rt === null)
          throw Error(a(349));
        (Ze & 124) !== 0 || Rp(o, n, i);
      }
      d.memoizedState = i;
      var b = { value: i, getSnapshot: n };
      return d.queue = b, Fp(Dp.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        qo(),
        jp.bind(
          null,
          o,
          b,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = tn(), n = rt.identifierPrefix;
      if ($e) {
        var i = ur, o = or;
        i = (o & ~(1 << 32 - Vt(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Bo++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Hb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Yc,
    useFormState: Zp,
    useActionState: Zp,
    useOptimistic: function(e) {
      var n = tn();
      n.memoizedState = n.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = Fc.bind(
        null,
        ze,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Bc,
    useCacheRefresh: function() {
      return tn().memoizedState = $b.bind(
        null,
        ze
      );
    }
  }, fm = {
    readContext: qt,
    use: Uo,
    useCallback: em,
    useContext: qt,
    useEffect: Xp,
    useImperativeHandle: Wp,
    useInsertionEffect: Qp,
    useLayoutEffect: Kp,
    useMemo: tm,
    useReducer: Ho,
    useRef: Yp,
    useState: function() {
      return Ho(dr);
    },
    useDebugValue: Gc,
    useDeferredValue: function(e, n) {
      var i = wt();
      return nm(
        i,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ho(dr)[0], n = wt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Mp,
    useId: sm,
    useHostTransitionStatus: Yc,
    useFormState: Gp,
    useActionState: Gp,
    useOptimistic: function(e, n) {
      var i = wt();
      return Pp(i, Ke, e, n);
    },
    useMemoCache: Bc,
    useCacheRefresh: om
  }, Fb = {
    readContext: qt,
    use: Uo,
    useCallback: em,
    useContext: qt,
    useEffect: Xp,
    useImperativeHandle: Wp,
    useInsertionEffect: Qp,
    useLayoutEffect: Kp,
    useMemo: tm,
    useReducer: Hc,
    useRef: Yp,
    useState: function() {
      return Hc(dr);
    },
    useDebugValue: Gc,
    useDeferredValue: function(e, n) {
      var i = wt();
      return Ke === null ? Vc(i, e, n) : nm(
        i,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Hc(dr)[0], n = wt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Mp,
    useId: sm,
    useHostTransitionStatus: Yc,
    useFormState: $p,
    useActionState: $p,
    useOptimistic: function(e, n) {
      var i = wt();
      return Ke !== null ? Pp(i, Ke, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: om
  }, di = null, ps = 0;
  function $o(e) {
    var n = ps;
    return ps += 1, di === null && (di = []), Ep(di, e, n);
  }
  function ms(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Yo(e, n) {
    throw n.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(n), Error(
      a(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function hm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function pm(e) {
    function n(V, Z) {
      if (e) {
        var X = V.deletions;
        X === null ? (V.deletions = [Z], V.flags |= 16) : X.push(Z);
      }
    }
    function i(V, Z) {
      if (!e) return null;
      for (; Z !== null; )
        n(V, Z), Z = Z.sibling;
      return null;
    }
    function o(V) {
      for (var Z = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? Z.set(V.key, V) : Z.set(V.index, V), V = V.sibling;
      return Z;
    }
    function d(V, Z) {
      return V = sr(V, Z), V.index = 0, V.sibling = null, V;
    }
    function b(V, Z, X) {
      return V.index = X, e ? (X = V.alternate, X !== null ? (X = X.index, X < Z ? (V.flags |= 67108866, Z) : X) : (V.flags |= 67108866, Z)) : (V.flags |= 1048576, Z);
    }
    function T(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function D(V, Z, X, ue) {
      return Z === null || Z.tag !== 6 ? (Z = mc(X, V.mode, ue), Z.return = V, Z) : (Z = d(Z, X), Z.return = V, Z);
    }
    function H(V, Z, X, ue) {
      var ge = X.type;
      return ge === h ? oe(
        V,
        Z,
        X.props.children,
        ue,
        X.key
      ) : Z !== null && (Z.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === M && hm(ge) === Z.type) ? (Z = d(Z, X.props), ms(Z, X), Z.return = V, Z) : (Z = No(
        X.type,
        X.key,
        X.props,
        null,
        V.mode,
        ue
      ), ms(Z, X), Z.return = V, Z);
    }
    function Q(V, Z, X, ue) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== X.containerInfo || Z.stateNode.implementation !== X.implementation ? (Z = gc(X, V.mode, ue), Z.return = V, Z) : (Z = d(Z, X.children || []), Z.return = V, Z);
    }
    function oe(V, Z, X, ue, ge) {
      return Z === null || Z.tag !== 7 ? (Z = ha(
        X,
        V.mode,
        ue,
        ge
      ), Z.return = V, Z) : (Z = d(Z, X), Z.return = V, Z);
    }
    function de(V, Z, X) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return Z = mc(
          "" + Z,
          V.mode,
          X
        ), Z.return = V, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case _:
            return X = No(
              Z.type,
              Z.key,
              Z.props,
              null,
              V.mode,
              X
            ), ms(X, Z), X.return = V, X;
          case S:
            return Z = gc(
              Z,
              V.mode,
              X
            ), Z.return = V, Z;
          case M:
            var ue = Z._init;
            return Z = ue(Z._payload), de(V, Z, X);
        }
        if (W(Z) || q(Z))
          return Z = ha(
            Z,
            V.mode,
            X,
            null
          ), Z.return = V, Z;
        if (typeof Z.then == "function")
          return de(V, $o(Z), X);
        if (Z.$$typeof === I)
          return de(
            V,
            jo(V, Z),
            X
          );
        Yo(V, Z);
      }
      return null;
    }
    function ee(V, Z, X, ue) {
      var ge = Z !== null ? Z.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return ge !== null ? null : D(V, Z, "" + X, ue);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case _:
            return X.key === ge ? H(V, Z, X, ue) : null;
          case S:
            return X.key === ge ? Q(V, Z, X, ue) : null;
          case M:
            return ge = X._init, X = ge(X._payload), ee(V, Z, X, ue);
        }
        if (W(X) || q(X))
          return ge !== null ? null : oe(V, Z, X, ue, null);
        if (typeof X.then == "function")
          return ee(
            V,
            Z,
            $o(X),
            ue
          );
        if (X.$$typeof === I)
          return ee(
            V,
            Z,
            jo(V, X),
            ue
          );
        Yo(V, X);
      }
      return null;
    }
    function ne(V, Z, X, ue, ge) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number" || typeof ue == "bigint")
        return V = V.get(X) || null, D(Z, V, "" + ue, ge);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case _:
            return V = V.get(
              ue.key === null ? X : ue.key
            ) || null, H(Z, V, ue, ge);
          case S:
            return V = V.get(
              ue.key === null ? X : ue.key
            ) || null, Q(Z, V, ue, ge);
          case M:
            var Le = ue._init;
            return ue = Le(ue._payload), ne(
              V,
              Z,
              X,
              ue,
              ge
            );
        }
        if (W(ue) || q(ue))
          return V = V.get(X) || null, oe(Z, V, ue, ge, null);
        if (typeof ue.then == "function")
          return ne(
            V,
            Z,
            X,
            $o(ue),
            ge
          );
        if (ue.$$typeof === I)
          return ne(
            V,
            Z,
            X,
            jo(Z, ue),
            ge
          );
        Yo(Z, ue);
      }
      return null;
    }
    function Ae(V, Z, X, ue) {
      for (var ge = null, Le = null, _e = Z, ke = Z = 0, Dt = null; _e !== null && ke < X.length; ke++) {
        _e.index > ke ? (Dt = _e, _e = null) : Dt = _e.sibling;
        var Ve = ee(
          V,
          _e,
          X[ke],
          ue
        );
        if (Ve === null) {
          _e === null && (_e = Dt);
          break;
        }
        e && _e && Ve.alternate === null && n(V, _e), Z = b(Ve, Z, ke), Le === null ? ge = Ve : Le.sibling = Ve, Le = Ve, _e = Dt;
      }
      if (ke === X.length)
        return i(V, _e), $e && ma(V, ke), ge;
      if (_e === null) {
        for (; ke < X.length; ke++)
          _e = de(V, X[ke], ue), _e !== null && (Z = b(
            _e,
            Z,
            ke
          ), Le === null ? ge = _e : Le.sibling = _e, Le = _e);
        return $e && ma(V, ke), ge;
      }
      for (_e = o(_e); ke < X.length; ke++)
        Dt = ne(
          _e,
          V,
          ke,
          X[ke],
          ue
        ), Dt !== null && (e && Dt.alternate !== null && _e.delete(
          Dt.key === null ? ke : Dt.key
        ), Z = b(
          Dt,
          Z,
          ke
        ), Le === null ? ge = Dt : Le.sibling = Dt, Le = Dt);
      return e && _e.forEach(function(Qr) {
        return n(V, Qr);
      }), $e && ma(V, ke), ge;
    }
    function Ce(V, Z, X, ue) {
      if (X == null) throw Error(a(151));
      for (var ge = null, Le = null, _e = Z, ke = Z = 0, Dt = null, Ve = X.next(); _e !== null && !Ve.done; ke++, Ve = X.next()) {
        _e.index > ke ? (Dt = _e, _e = null) : Dt = _e.sibling;
        var Qr = ee(V, _e, Ve.value, ue);
        if (Qr === null) {
          _e === null && (_e = Dt);
          break;
        }
        e && _e && Qr.alternate === null && n(V, _e), Z = b(Qr, Z, ke), Le === null ? ge = Qr : Le.sibling = Qr, Le = Qr, _e = Dt;
      }
      if (Ve.done)
        return i(V, _e), $e && ma(V, ke), ge;
      if (_e === null) {
        for (; !Ve.done; ke++, Ve = X.next())
          Ve = de(V, Ve.value, ue), Ve !== null && (Z = b(Ve, Z, ke), Le === null ? ge = Ve : Le.sibling = Ve, Le = Ve);
        return $e && ma(V, ke), ge;
      }
      for (_e = o(_e); !Ve.done; ke++, Ve = X.next())
        Ve = ne(_e, V, ke, Ve.value, ue), Ve !== null && (e && Ve.alternate !== null && _e.delete(Ve.key === null ? ke : Ve.key), Z = b(Ve, Z, ke), Le === null ? ge = Ve : Le.sibling = Ve, Le = Ve);
      return e && _e.forEach(function(X1) {
        return n(V, X1);
      }), $e && ma(V, ke), ge;
    }
    function We(V, Z, X, ue) {
      if (typeof X == "object" && X !== null && X.type === h && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case _:
            e: {
              for (var ge = X.key; Z !== null; ) {
                if (Z.key === ge) {
                  if (ge = X.type, ge === h) {
                    if (Z.tag === 7) {
                      i(
                        V,
                        Z.sibling
                      ), ue = d(
                        Z,
                        X.props.children
                      ), ue.return = V, V = ue;
                      break e;
                    }
                  } else if (Z.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === M && hm(ge) === Z.type) {
                    i(
                      V,
                      Z.sibling
                    ), ue = d(Z, X.props), ms(ue, X), ue.return = V, V = ue;
                    break e;
                  }
                  i(V, Z);
                  break;
                } else n(V, Z);
                Z = Z.sibling;
              }
              X.type === h ? (ue = ha(
                X.props.children,
                V.mode,
                ue,
                X.key
              ), ue.return = V, V = ue) : (ue = No(
                X.type,
                X.key,
                X.props,
                null,
                V.mode,
                ue
              ), ms(ue, X), ue.return = V, V = ue);
            }
            return T(V);
          case S:
            e: {
              for (ge = X.key; Z !== null; ) {
                if (Z.key === ge)
                  if (Z.tag === 4 && Z.stateNode.containerInfo === X.containerInfo && Z.stateNode.implementation === X.implementation) {
                    i(
                      V,
                      Z.sibling
                    ), ue = d(Z, X.children || []), ue.return = V, V = ue;
                    break e;
                  } else {
                    i(V, Z);
                    break;
                  }
                else n(V, Z);
                Z = Z.sibling;
              }
              ue = gc(X, V.mode, ue), ue.return = V, V = ue;
            }
            return T(V);
          case M:
            return ge = X._init, X = ge(X._payload), We(
              V,
              Z,
              X,
              ue
            );
        }
        if (W(X))
          return Ae(
            V,
            Z,
            X,
            ue
          );
        if (q(X)) {
          if (ge = q(X), typeof ge != "function") throw Error(a(150));
          return X = ge.call(X), Ce(
            V,
            Z,
            X,
            ue
          );
        }
        if (typeof X.then == "function")
          return We(
            V,
            Z,
            $o(X),
            ue
          );
        if (X.$$typeof === I)
          return We(
            V,
            Z,
            jo(V, X),
            ue
          );
        Yo(V, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, Z !== null && Z.tag === 6 ? (i(V, Z.sibling), ue = d(Z, X), ue.return = V, V = ue) : (i(V, Z), ue = mc(X, V.mode, ue), ue.return = V, V = ue), T(V)) : i(V, Z);
    }
    return function(V, Z, X, ue) {
      try {
        ps = 0;
        var ge = We(
          V,
          Z,
          X,
          ue
        );
        return di = null, ge;
      } catch (_e) {
        if (_e === is || _e === zo) throw _e;
        var Le = hn(29, _e, null, V.mode);
        return Le.lanes = ue, Le.return = V, Le;
      } finally {
      }
    };
  }
  var fi = pm(!0), mm = pm(!1), Mn = Y(null), Fn = null;
  function zr(e) {
    var n = e.alternate;
    G(xt, xt.current & 1), G(Mn, e), Fn === null && (n === null || oi.current !== null || n.memoizedState !== null) && (Fn = e);
  }
  function gm(e) {
    if (e.tag === 22) {
      if (G(xt, xt.current), G(Mn, e), Fn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Fn = e);
      }
    } else Lr();
  }
  function Lr() {
    G(xt, xt.current), G(Mn, Mn.current);
  }
  function fr(e) {
    ce(Mn), Fn === e && (Fn = null), ce(xt);
  }
  var xt = Y(0);
  function Fo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Id(i)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Xc(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : g({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Qc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = vn(), d = Rr(o);
      d.payload = n, i != null && (d.callback = i), n = jr(e, d, o), n !== null && (yn(n, e, o), os(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = vn(), d = Rr(o);
      d.tag = 1, d.payload = n, i != null && (d.callback = i), n = jr(e, d, o), n !== null && (yn(n, e, o), os(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = vn(), o = Rr(i);
      o.tag = 2, n != null && (o.callback = n), n = jr(e, o, i), n !== null && (yn(n, e, i), os(n, e, i));
    }
  };
  function vm(e, n, i, o, d, b, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, T) : n.prototype && n.prototype.isPureReactComponent ? !Ki(i, o) || !Ki(d, b) : !0;
  }
  function ym(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Qc.enqueueReplaceState(n, n.state, null);
  }
  function wa(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    }
    if (e = e.defaultProps) {
      i === n && (i = g({}, i));
      for (var d in e)
        i[d] === void 0 && (i[d] = e[d]);
    }
    return i;
  }
  var Xo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function _m(e) {
    Xo(e);
  }
  function bm(e) {
    console.error(e);
  }
  function Sm(e) {
    Xo(e);
  }
  function Qo(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function wm(e, n, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function Kc(e, n, i) {
    return i = Rr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Qo(e, n);
    }, i;
  }
  function Em(e) {
    return e = Rr(e), e.tag = 3, e;
  }
  function Cm(e, n, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var b = o.value;
      e.payload = function() {
        return d(b);
      }, e.callback = function() {
        wm(n, i, o);
      };
    }
    var T = i.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      wm(n, i, o), typeof d != "function" && (qr === null ? qr = /* @__PURE__ */ new Set([this]) : qr.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function Xb(e, n, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && ns(
        n,
        i,
        d,
        !0
      ), i = Mn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Fn === null ? Sd() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === Ac ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Ed(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === Ac ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Ed(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return Ed(e, o, d), Sd(), !1;
    }
    if ($e)
      return n = Mn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = d, o !== _c && (e = Error(a(422), { cause: o }), ts(xn(e, i)))) : (o !== _c && (n = Error(a(423), {
        cause: o
      }), ts(
        xn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = xn(o, i), d = Kc(
        e.stateNode,
        o,
        d
      ), Nc(e, d), ht !== 4 && (ht = 2)), !1;
    var b = Error(a(520), { cause: o });
    if (b = xn(b, i), ws === null ? ws = [b] : ws.push(b), ht !== 4 && (ht = 2), n === null) return !0;
    o = xn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = Kc(i.stateNode, o, e), Nc(i, e), !1;
        case 1:
          if (n = i.type, b = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (qr === null || !qr.has(b))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = Em(d), Cm(
              d,
              e,
              i,
              o
            ), Nc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var km = Error(a(461)), Rt = !1;
  function zt(e, n, i, o) {
    n.child = e === null ? mm(n, null, i, o) : fi(
      n,
      e.child,
      i,
      o
    );
  }
  function Am(e, n, i, o, d) {
    i = i.render;
    var b = n.ref;
    if ("ref" in o) {
      var T = {};
      for (var D in o)
        D !== "ref" && (T[D] = o[D]);
    } else T = o;
    return _a(n), o = Dc(
      e,
      n,
      i,
      T,
      b,
      d
    ), D = zc(), e !== null && !Rt ? (Lc(e, n, d), hr(e, n, d)) : ($e && D && vc(n), n.flags |= 1, zt(e, n, o, d), n.child);
  }
  function xm(e, n, i, o, d) {
    if (e === null) {
      var b = i.type;
      return typeof b == "function" && !pc(b) && b.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = b, Tm(
        e,
        n,
        b,
        o,
        d
      )) : (e = No(
        i.type,
        null,
        o,
        n,
        n.mode,
        d
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (b = e.child, !id(e, d)) {
      var T = b.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ki, i(T, o) && e.ref === n.ref)
        return hr(e, n, d);
    }
    return n.flags |= 1, e = sr(b, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Tm(e, n, i, o, d) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Ki(b, o) && e.ref === n.ref)
        if (Rt = !1, n.pendingProps = o = b, id(e, d))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else
          return n.lanes = e.lanes, hr(e, n, d);
    }
    return Jc(
      e,
      n,
      i,
      o,
      d
    );
  }
  function Nm(e, n, i) {
    var o = n.pendingProps, d = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | i : i, e !== null) {
          for (d = n.child = e.child, b = 0; d !== null; )
            b = b | d.lanes | d.childLanes, d = d.sibling;
          n.childLanes = b & ~o;
        } else n.childLanes = 0, n.child = null;
        return Om(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Do(
          n,
          b !== null ? b.cachePool : null
        ), b !== null ? Tp(n, b) : Mc(), gm(n);
      else
        return n.lanes = n.childLanes = 536870912, Om(
          e,
          n,
          b !== null ? b.baseLanes | i : i,
          i
        );
    } else
      b !== null ? (Do(n, b.cachePool), Tp(n, b), Lr(), n.memoizedState = null) : (e !== null && Do(n, null), Mc(), Lr());
    return zt(e, n, d, i), n.child;
  }
  function Om(e, n, i, o) {
    var d = kc();
    return d = d === null ? null : { parent: At._currentValue, pool: d }, n.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && Do(n, null), Mc(), gm(n), e !== null && ns(e, n, o, !0), null;
  }
  function Ko(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(a(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function Jc(e, n, i, o, d) {
    return _a(n), i = Dc(
      e,
      n,
      i,
      o,
      void 0,
      d
    ), o = zc(), e !== null && !Rt ? (Lc(e, n, d), hr(e, n, d)) : ($e && o && vc(n), n.flags |= 1, zt(e, n, i, d), n.child);
  }
  function Mm(e, n, i, o, d, b) {
    return _a(n), n.updateQueue = null, i = Op(
      n,
      o,
      i,
      d
    ), Np(e), o = zc(), e !== null && !Rt ? (Lc(e, n, b), hr(e, n, b)) : ($e && o && vc(n), n.flags |= 1, zt(e, n, i, b), n.child);
  }
  function Rm(e, n, i, o, d) {
    if (_a(n), n.stateNode === null) {
      var b = ni, T = i.contextType;
      typeof T == "object" && T !== null && (b = qt(T)), b = new i(o, b), n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Qc, n.stateNode = b, b._reactInternals = n, b = n.stateNode, b.props = o, b.state = n.memoizedState, b.refs = {}, xc(n), T = i.contextType, b.context = typeof T == "object" && T !== null ? qt(T) : ni, b.state = n.memoizedState, T = i.getDerivedStateFromProps, typeof T == "function" && (Xc(
        n,
        i,
        T,
        o
      ), b.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (T = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), T !== b.state && Qc.enqueueReplaceState(b, b.state, null), ls(n, o, b, d), us(), b.state = n.memoizedState), typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = n.stateNode;
      var D = n.memoizedProps, H = wa(i, D);
      b.props = H;
      var Q = b.context, oe = i.contextType;
      T = ni, typeof oe == "object" && oe !== null && (T = qt(oe));
      var de = i.getDerivedStateFromProps;
      oe = typeof de == "function" || typeof b.getSnapshotBeforeUpdate == "function", D = n.pendingProps !== D, oe || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (D || Q !== T) && ym(
        n,
        b,
        o,
        T
      ), Mr = !1;
      var ee = n.memoizedState;
      b.state = ee, ls(n, o, b, d), us(), Q = n.memoizedState, D || ee !== Q || Mr ? (typeof de == "function" && (Xc(
        n,
        i,
        de,
        o
      ), Q = n.memoizedState), (H = Mr || vm(
        n,
        i,
        H,
        o,
        ee,
        Q,
        T
      )) ? (oe || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = Q), b.props = o, b.state = Q, b.context = T, o = H) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      b = n.stateNode, Tc(e, n), T = n.memoizedProps, oe = wa(i, T), b.props = oe, de = n.pendingProps, ee = b.context, Q = i.contextType, H = ni, typeof Q == "object" && Q !== null && (H = qt(Q)), D = i.getDerivedStateFromProps, (Q = typeof D == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (T !== de || ee !== H) && ym(
        n,
        b,
        o,
        H
      ), Mr = !1, ee = n.memoizedState, b.state = ee, ls(n, o, b, d), us();
      var ne = n.memoizedState;
      T !== de || ee !== ne || Mr || e !== null && e.dependencies !== null && Ro(e.dependencies) ? (typeof D == "function" && (Xc(
        n,
        i,
        D,
        o
      ), ne = n.memoizedState), (oe = Mr || vm(
        n,
        i,
        oe,
        o,
        ee,
        ne,
        H
      ) || e !== null && e.dependencies !== null && Ro(e.dependencies)) ? (Q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, ne, H), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
        o,
        ne,
        H
      )), typeof b.componentDidUpdate == "function" && (n.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || T === e.memoizedProps && ee === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && ee === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = ne), b.props = o, b.state = ne, b.context = H, o = oe) : (typeof b.componentDidUpdate != "function" || T === e.memoizedProps && ee === e.memoizedState || (n.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && ee === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return b = o, Ko(e, n), o = (n.flags & 128) !== 0, b || o ? (b = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : b.render(), n.flags |= 1, e !== null && o ? (n.child = fi(
      n,
      e.child,
      null,
      d
    ), n.child = fi(
      n,
      null,
      i,
      d
    )) : zt(e, n, i, d), n.memoizedState = b.state, e = n.child) : e = hr(
      e,
      n,
      d
    ), e;
  }
  function jm(e, n, i, o) {
    return es(), n.flags |= 256, zt(e, n, i, o), n.child;
  }
  var Wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ed(e) {
    return { baseLanes: e, cachePool: bp() };
  }
  function td(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= Rn), e;
  }
  function Dm(e, n, i) {
    var o = n.pendingProps, d = !1, b = (n.flags & 128) !== 0, T;
    if ((T = b) || (T = e !== null && e.memoizedState === null ? !1 : (xt.current & 2) !== 0), T && (d = !0, n.flags &= -129), T = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if ($e) {
        if (d ? zr(n) : Lr(), $e) {
          var D = ft, H;
          if (H = D) {
            e: {
              for (H = D, D = Yn; H.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (H = Bn(
                  H.nextSibling
                ), H === null) {
                  D = null;
                  break e;
                }
              }
              D = H;
            }
            D !== null ? (n.memoizedState = {
              dehydrated: D,
              treeContext: pa !== null ? { id: or, overflow: ur } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, H = hn(
              18,
              null,
              null,
              0
            ), H.stateNode = D, H.return = n, n.child = H, Yt = n, ft = null, H = !0) : H = !1;
          }
          H || va(n);
        }
        if (D = n.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Id(D) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return D = o.children, o = o.fallback, d ? (Lr(), d = n.mode, D = Jo(
        { mode: "hidden", children: D },
        d
      ), o = ha(
        o,
        d,
        i,
        null
      ), D.return = n, o.return = n, D.sibling = o, n.child = D, d = n.child, d.memoizedState = ed(i), d.childLanes = td(
        e,
        T,
        i
      ), n.memoizedState = Wc, o) : (zr(n), nd(n, D));
    }
    if (H = e.memoizedState, H !== null && (D = H.dehydrated, D !== null)) {
      if (b)
        n.flags & 256 ? (zr(n), n.flags &= -257, n = rd(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (Lr(), n.child = e.child, n.flags |= 128, n = null) : (Lr(), d = o.fallback, D = n.mode, o = Jo(
          { mode: "visible", children: o.children },
          D
        ), d = ha(
          d,
          D,
          i,
          null
        ), d.flags |= 2, o.return = n, d.return = n, o.sibling = d, n.child = o, fi(
          n,
          e.child,
          null,
          i
        ), o = n.child, o.memoizedState = ed(i), o.childLanes = td(
          e,
          T,
          i
        ), n.memoizedState = Wc, n = d);
      else if (zr(n), Id(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var Q = T.dgst;
        T = Q, o = Error(a(419)), o.stack = "", o.digest = T, ts({ value: o, source: null, stack: null }), n = rd(
          e,
          n,
          i
        );
      } else if (Rt || ns(e, n, i, !1), T = (i & e.childLanes) !== 0, Rt || T) {
        if (T = rt, T !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Bl(o), o = (o & (T.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
          throw H.retryLane = o, ti(e, o), yn(T, e, o), km;
        D.data === "$?" || Sd(), n = rd(
          e,
          n,
          i
        );
      } else
        D.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = H.treeContext, ft = Bn(
          D.nextSibling
        ), Yt = n, $e = !0, ga = null, Yn = !1, e !== null && (Nn[On++] = or, Nn[On++] = ur, Nn[On++] = pa, or = e.id, ur = e.overflow, pa = n), n = nd(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return d ? (Lr(), d = o.fallback, D = n.mode, H = e.child, Q = H.sibling, o = sr(H, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = H.subtreeFlags & 65011712, Q !== null ? d = sr(Q, d) : (d = ha(
      d,
      D,
      i,
      null
    ), d.flags |= 2), d.return = n, o.return = n, o.sibling = d, n.child = o, o = d, d = n.child, D = e.child.memoizedState, D === null ? D = ed(i) : (H = D.cachePool, H !== null ? (Q = At._currentValue, H = H.parent !== Q ? { parent: Q, pool: Q } : H) : H = bp(), D = {
      baseLanes: D.baseLanes | i,
      cachePool: H
    }), d.memoizedState = D, d.childLanes = td(
      e,
      T,
      i
    ), n.memoizedState = Wc, o) : (zr(n), i = e.child, e = i.sibling, i = sr(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (T = n.deletions, T === null ? (n.deletions = [e], n.flags |= 16) : T.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function nd(e, n) {
    return n = Jo(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Jo(e, n) {
    return e = hn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function rd(e, n, i) {
    return fi(n, e.child, null, i), e = nd(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function zm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Sc(e.return, n, i);
  }
  function ad(e, n, i, o, d) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: d
    } : (b.isBackwards = n, b.rendering = null, b.renderingStartTime = 0, b.last = o, b.tail = i, b.tailMode = d);
  }
  function Lm(e, n, i) {
    var o = n.pendingProps, d = o.revealOrder, b = o.tail;
    if (zt(e, n, o.children, i), o = xt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && zm(e, i, n);
          else if (e.tag === 19)
            zm(e, i, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (G(xt, o), d) {
      case "forwards":
        for (i = n.child, d = null; i !== null; )
          e = i.alternate, e !== null && Fo(e) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = n.child, n.child = null) : (d = i.sibling, i.sibling = null), ad(
          n,
          !1,
          d,
          i,
          b
        );
        break;
      case "backwards":
        for (i = null, d = n.child, n.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Fo(e) === null) {
            n.child = d;
            break;
          }
          e = d.sibling, d.sibling = i, i = d, d = e;
        }
        ad(
          n,
          !0,
          i,
          null,
          b
        );
        break;
      case "together":
        ad(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function hr(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Hr |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (ns(
          e,
          n,
          i,
          !1
        ), (i & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(a(153));
    if (n.child !== null) {
      for (e = n.child, i = sr(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        e = e.sibling, i = i.sibling = sr(e, e.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function id(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ro(e)));
  }
  function Qb(e, n, i) {
    switch (n.tag) {
      case 3:
        re(n, n.stateNode.containerInfo), Or(n, At, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        Re(n);
        break;
      case 4:
        re(n, n.stateNode.containerInfo);
        break;
      case 10:
        Or(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (zr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Dm(e, n, i) : (zr(n), e = hr(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        zr(n);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (ns(
          e,
          n,
          i,
          !1
        ), o = (i & n.childLanes) !== 0), d) {
          if (o)
            return Lm(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (d = n.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), G(xt, xt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Nm(e, n, i);
      case 24:
        Or(n, At, e.memoizedState.cache);
    }
    return hr(e, n, i);
  }
  function Pm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Rt = !0;
      else {
        if (!id(e, i) && (n.flags & 128) === 0)
          return Rt = !1, Qb(
            e,
            n,
            i
          );
        Rt = (e.flags & 131072) !== 0;
      }
    else
      Rt = !1, $e && (n.flags & 1048576) !== 0 && hp(n, Mo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, d = o._init;
          if (o = d(o._payload), n.type = o, typeof o == "function")
            pc(o) ? (e = wa(o, e), n.tag = 1, n = Rm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = Jc(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === c) {
                n.tag = 11, n = Am(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === k) {
                n.tag = 14, n = xm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = $(o) || o, Error(a(306, n, ""));
          }
        }
        return n;
      case 0:
        return Jc(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 1:
        return o = n.type, d = wa(
          o,
          n.pendingProps
        ), Rm(
          e,
          n,
          o,
          d,
          i
        );
      case 3:
        e: {
          if (re(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(a(387));
          o = n.pendingProps;
          var b = n.memoizedState;
          d = b.element, Tc(e, n), ls(n, o, null, i);
          var T = n.memoizedState;
          if (o = T.cache, Or(n, At, o), o !== b.cache && wc(
            n,
            [At],
            i,
            !0
          ), us(), o = T.element, b.isDehydrated)
            if (b = {
              element: o,
              isDehydrated: !1,
              cache: T.cache
            }, n.updateQueue.baseState = b, n.memoizedState = b, n.flags & 256) {
              n = jm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = xn(
                Error(a(424)),
                n
              ), ts(d), n = jm(
                e,
                n,
                o,
                i
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ft = Bn(e.firstChild), Yt = n, $e = !0, ga = null, Yn = !0, i = mm(
                n,
                null,
                o,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (es(), o === d) {
              n = hr(
                e,
                n,
                i
              );
              break e;
            }
            zt(
              e,
              n,
              o,
              i
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ko(e, n), e === null ? (i = Hg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : $e || (i = n.type, e = n.pendingProps, o = fu(
          K.current
        ).createElement(i), o[Ht] = n, o[Wt] = e, Pt(o, i, e), Mt(o), n.stateNode = o) : n.memoizedState = Hg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(n), e === null && $e && (o = n.stateNode = Ig(
          n.type,
          n.pendingProps,
          K.current
        ), Yt = n, Yn = !0, d = ft, Vr(n.type) ? (Bd = d, ft = Bn(
          o.firstChild
        )) : ft = d), zt(
          e,
          n,
          n.pendingProps.children,
          i
        ), Ko(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && $e && ((d = o = ft) && (o = C1(
          o,
          n.type,
          n.pendingProps,
          Yn
        ), o !== null ? (n.stateNode = o, Yt = n, ft = Bn(
          o.firstChild
        ), Yn = !1, d = !0) : d = !1), d || va(n)), Re(n), d = n.type, b = n.pendingProps, T = e !== null ? e.memoizedProps : null, o = b.children, zd(d, b) ? o = null : T !== null && zd(d, T) && (n.flags |= 32), n.memoizedState !== null && (d = Dc(
          e,
          n,
          qb,
          null,
          null,
          i
        ), Ms._currentValue = d), Ko(e, n), zt(e, n, o, i), n.child;
      case 6:
        return e === null && $e && ((e = i = ft) && (i = k1(
          i,
          n.pendingProps,
          Yn
        ), i !== null ? (n.stateNode = i, Yt = n, ft = null, e = !0) : e = !1), e || va(n)), null;
      case 13:
        return Dm(e, n, i);
      case 4:
        return re(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = fi(
          n,
          null,
          o,
          i
        ) : zt(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return Am(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return zt(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return zt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return zt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return o = n.pendingProps, Or(n, n.type, o.value), zt(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return d = n.type._context, o = n.pendingProps.children, _a(n), d = qt(d), o = o(d), n.flags |= 1, zt(e, n, o, i), n.child;
      case 14:
        return xm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Tm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Lm(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Jo(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = sr(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Nm(e, n, i);
      case 24:
        return _a(n), o = qt(At), e === null ? (d = kc(), d === null && (d = rt, b = Ec(), d.pooledCache = b, b.refCount++, b !== null && (d.pooledCacheLanes |= i), d = b), n.memoizedState = {
          parent: o,
          cache: d
        }, xc(n), Or(n, At, d)) : ((e.lanes & i) !== 0 && (Tc(e, n), ls(n, null, null, i), us()), d = e.memoizedState, b = n.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, n.memoizedState = d, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = d), Or(n, At, o)) : (o = b.cache, Or(n, At, o), o !== d.cache && wc(
          n,
          [At],
          i,
          !0
        ))), zt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(a(156, n.tag));
  }
  function pr(e) {
    e.flags |= 4;
  }
  function Im(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$g(n)) {
      if (n = Mn.current, n !== null && ((Ze & 4194048) === Ze ? Fn !== null : (Ze & 62914560) !== Ze && (Ze & 536870912) === 0 || n !== Fn))
        throw ss = Ac, Sp;
      e.flags |= 8192;
    }
  }
  function Wo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? gh() : 536870912, e.lanes |= n, gi |= n);
  }
  function gs(e, n) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function lt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (n)
      for (var d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, n;
  }
  function Kb(e, n, i) {
    var o = n.pendingProps;
    switch (yc(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(n), null;
      case 1:
        return lt(n), null;
      case 3:
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), cr(At), pe(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? pr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, gp())), lt(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (pr(n), i !== null ? (lt(n), Im(n, i)) : (lt(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (pr(n), lt(n), Im(n, i)) : (lt(n), n.flags &= -16777217) : (e.memoizedProps !== o && pr(n), lt(n), n.flags &= -16777217), null;
      case 27:
        we(n), i = K.current;
        var d = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && pr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return lt(n), null;
          }
          e = P.current, Wi(n) ? pp(n) : (e = Ig(d, o, i), n.stateNode = e, pr(n));
        }
        return lt(n), null;
      case 5:
        if (we(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && pr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return lt(n), null;
          }
          if (e = P.current, Wi(n))
            pp(n);
          else {
            switch (d = fu(
              K.current
            ), e) {
              case 1:
                e = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                e = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    e = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? d.createElement(i, { is: o.is }) : d.createElement(i);
                }
            }
            e[Ht] = n, e[Wt] = o;
            e: for (d = n.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                e.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === n) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === n)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            n.stateNode = e;
            e: switch (Pt(e, i, o), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && pr(n);
          }
        }
        return lt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && pr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(a(166));
          if (e = K.current, Wi(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, d = Yt, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Ht] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Mg(e.nodeValue, i)), e || va(n);
          } else
            e = fu(e).createTextNode(
              o
            ), e[Ht] = n, n.stateNode = e;
        }
        return lt(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Wi(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(a(318));
              if (d = n.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[Ht] = n;
            } else
              es(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            lt(n), d = !1;
          } else
            d = gp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = n.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var b = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (b = o.memoizedState.cachePool.pool), b !== d && (o.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), Wo(n, n.updateQueue), lt(n), null;
      case 4:
        return pe(), e === null && Od(n.stateNode.containerInfo), lt(n), null;
      case 10:
        return cr(n.type), lt(n), null;
      case 19:
        if (ce(xt), d = n.memoizedState, d === null) return lt(n), null;
        if (o = (n.flags & 128) !== 0, b = d.rendering, b === null)
          if (o) gs(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (b = Fo(e), b !== null) {
                  for (n.flags |= 128, gs(d, !1), e = b.updateQueue, n.updateQueue = e, Wo(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    fp(i, e), i = i.sibling;
                  return G(
                    xt,
                    xt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Qe() > nu && (n.flags |= 128, o = !0, gs(d, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Fo(b), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Wo(n, e), gs(d, !0), d.tail === null && d.tailMode === "hidden" && !b.alternate && !$e)
                return lt(n), null;
            } else
              2 * Qe() - d.renderingStartTime > nu && i !== 536870912 && (n.flags |= 128, o = !0, gs(d, !1), n.lanes = 4194304);
          d.isBackwards ? (b.sibling = n.child, n.child = b) : (e = d.last, e !== null ? e.sibling = b : n.child = b, d.last = b);
        }
        return d.tail !== null ? (n = d.tail, d.rendering = n, d.tail = n.sibling, d.renderingStartTime = Qe(), n.sibling = null, e = xt.current, G(xt, o ? e & 1 | 2 : e & 1), n) : (lt(n), null);
      case 22:
      case 23:
        return fr(n), Rc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), i = n.updateQueue, i !== null && Wo(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ce(ba), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), cr(At), lt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function Jb(e, n) {
    switch (yc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return cr(At), pe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return we(n), null;
      case 13:
        if (fr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(a(340));
          es();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ce(xt), null;
      case 4:
        return pe(), null;
      case 10:
        return cr(n.type), null;
      case 22:
      case 23:
        return fr(n), Rc(), e !== null && ce(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return cr(At), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bm(e, n) {
    switch (yc(n), n.tag) {
      case 3:
        cr(At), pe();
        break;
      case 26:
      case 27:
      case 5:
        we(n);
        break;
      case 4:
        pe();
        break;
      case 13:
        fr(n);
        break;
      case 19:
        ce(xt);
        break;
      case 10:
        cr(n.type);
        break;
      case 22:
      case 23:
        fr(n), Rc(), e !== null && ce(ba);
        break;
      case 24:
        cr(At);
    }
  }
  function vs(e, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        i = d;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var b = i.create, T = i.inst;
            o = b(), T.destroy = o;
          }
          i = i.next;
        } while (i !== d);
      }
    } catch (D) {
      tt(n, n.return, D);
    }
  }
  function Pr(e, n, i) {
    try {
      var o = n.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var b = d.next;
        o = b;
        do {
          if ((o.tag & e) === e) {
            var T = o.inst, D = T.destroy;
            if (D !== void 0) {
              T.destroy = void 0, d = n;
              var H = i, Q = D;
              try {
                Q();
              } catch (oe) {
                tt(
                  d,
                  H,
                  oe
                );
              }
            }
          }
          o = o.next;
        } while (o !== b);
      }
    } catch (oe) {
      tt(n, n.return, oe);
    }
  }
  function Um(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        xp(n, i);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function Hm(e, n, i) {
    i.props = wa(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      tt(e, n, o);
    }
  }
  function ys(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(o) : i.current = o;
      }
    } catch (d) {
      tt(e, n, d);
    }
  }
  function Xn(e, n) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          tt(e, n, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (d) {
          tt(e, n, d);
        }
      else i.current = null;
  }
  function qm(e) {
    var n = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function sd(e, n, i) {
    try {
      var o = e.stateNode;
      _1(o, e.type, i, n), o[Wt] = n;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function Zm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vr(e.type) || e.tag === 4;
  }
  function od(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Vr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ud(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = du));
    else if (o !== 4 && (o === 27 && Vr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (ud(e, n, i), e = e.sibling; e !== null; )
        ud(e, n, i), e = e.sibling;
  }
  function eu(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Vr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (eu(e, n, i), e = e.sibling; e !== null; )
        eu(e, n, i), e = e.sibling;
  }
  function Gm(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = n.attributes; d.length; )
        n.removeAttributeNode(d[0]);
      Pt(n, o, i), n[Ht] = e, n[Wt] = i;
    } catch (b) {
      tt(e, e.return, b);
    }
  }
  var mr = !1, vt = !1, ld = !1, Vm = typeof WeakSet == "function" ? WeakSet : Set, jt = null;
  function Wb(e, n) {
    if (e = e.containerInfo, jd = yu, e = np(e), oc(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var d = o.anchorOffset, b = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, b.nodeType;
            } catch {
              i = null;
              break e;
            }
            var T = 0, D = -1, H = -1, Q = 0, oe = 0, de = e, ee = null;
            t: for (; ; ) {
              for (var ne; de !== i || d !== 0 && de.nodeType !== 3 || (D = T + d), de !== b || o !== 0 && de.nodeType !== 3 || (H = T + o), de.nodeType === 3 && (T += de.nodeValue.length), (ne = de.firstChild) !== null; )
                ee = de, de = ne;
              for (; ; ) {
                if (de === e) break t;
                if (ee === i && ++Q === d && (D = T), ee === b && ++oe === o && (H = T), (ne = de.nextSibling) !== null) break;
                de = ee, ee = de.parentNode;
              }
              de = ne;
            }
            i = D === -1 || H === -1 ? null : { start: D, end: H };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Dd = { focusedElem: e, selectionRange: i }, yu = !1, jt = n; jt !== null; )
      if (n = jt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, jt = e;
      else
        for (; jt !== null; ) {
          switch (n = jt, b = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && b !== null) {
                e = void 0, i = n, d = b.memoizedProps, b = b.memoizedState, o = i.stateNode;
                try {
                  var Ae = wa(
                    i.type,
                    d,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ae,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ce) {
                  tt(
                    i,
                    i.return,
                    Ce
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Pd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, jt = e;
            break;
          }
          jt = n.return;
        }
  }
  function $m(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Ir(e, i), o & 4 && vs(5, i);
        break;
      case 1:
        if (Ir(e, i), o & 4)
          if (e = i.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (T) {
              tt(i, i.return, T);
            }
          else {
            var d = wa(
              i.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (T) {
              tt(
                i,
                i.return,
                T
              );
            }
          }
        o & 64 && Um(i), o & 512 && ys(i, i.return);
        break;
      case 3:
        if (Ir(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
          if (n = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            xp(e, n);
          } catch (T) {
            tt(i, i.return, T);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Gm(i);
      case 26:
      case 5:
        Ir(e, i), n === null && o & 4 && qm(i), o & 512 && ys(i, i.return);
        break;
      case 12:
        Ir(e, i);
        break;
      case 13:
        Ir(e, i), o & 4 && Xm(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = u1.bind(
          null,
          i
        ), A1(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || mr, !o) {
          n = n !== null && n.memoizedState !== null || vt, d = mr;
          var b = vt;
          mr = o, (vt = n) && !b ? Br(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Ir(e, i), mr = d, vt = b;
        }
        break;
      case 30:
        break;
      default:
        Ir(e, i);
    }
  }
  function Ym(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ym(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && ql(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, nn = !1;
  function gr(e, n, i) {
    for (i = i.child; i !== null; )
      Fm(e, n, i), i = i.sibling;
  }
  function Fm(e, n, i) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(nr, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        vt || Xn(i, n), gr(
          e,
          n,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        vt || Xn(i, n);
        var o = st, d = nn;
        Vr(i.type) && (st = i.stateNode, nn = !1), gr(
          e,
          n,
          i
        ), xs(i.stateNode), st = o, nn = d;
        break;
      case 5:
        vt || Xn(i, n);
      case 6:
        if (o = st, d = nn, st = null, gr(
          e,
          n,
          i
        ), st = o, nn = d, st !== null)
          if (nn)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(i.stateNode);
            } catch (b) {
              tt(
                i,
                n,
                b
              );
            }
          else
            try {
              st.removeChild(i.stateNode);
            } catch (b) {
              tt(
                i,
                n,
                b
              );
            }
        break;
      case 18:
        st !== null && (nn ? (e = st, Lg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), zs(e)) : Lg(st, i.stateNode));
        break;
      case 4:
        o = st, d = nn, st = i.stateNode.containerInfo, nn = !0, gr(
          e,
          n,
          i
        ), st = o, nn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Pr(2, i, n), vt || Pr(4, i, n), gr(
          e,
          n,
          i
        );
        break;
      case 1:
        vt || (Xn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Hm(
          i,
          n,
          o
        )), gr(
          e,
          n,
          i
        );
        break;
      case 21:
        gr(
          e,
          n,
          i
        );
        break;
      case 22:
        vt = (o = vt) || i.memoizedState !== null, gr(
          e,
          n,
          i
        ), vt = o;
        break;
      default:
        gr(
          e,
          n,
          i
        );
    }
  }
  function Xm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (i) {
        tt(n, n.return, i);
      }
  }
  function e1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Vm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Vm()), n;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function cd(e, n) {
    var i = e1(e);
    n.forEach(function(o) {
      var d = l1.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function pn(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var d = i[o], b = e, T = n, D = T;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Vr(D.type)) {
                st = D.stateNode, nn = !1;
                break e;
              }
              break;
            case 5:
              st = D.stateNode, nn = !1;
              break e;
            case 3:
            case 4:
              st = D.stateNode.containerInfo, nn = !0;
              break e;
          }
          D = D.return;
        }
        if (st === null) throw Error(a(160));
        Fm(b, T, d), st = null, nn = !1, b = d.alternate, b !== null && (b.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Qm(n, e), n = n.sibling;
  }
  var In = null;
  function Qm(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pn(n, e), mn(e), o & 4 && (Pr(3, e, e.return), vs(3, e), Pr(5, e, e.return));
        break;
      case 1:
        pn(n, e), mn(e), o & 512 && (vt || i === null || Xn(i, i.return)), o & 64 && mr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = In;
        if (pn(n, e), mn(e), o & 512 && (vt || i === null || Xn(i, i.return)), o & 4) {
          var b = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      b = d.getElementsByTagName("title")[0], (!b || b[qi] || b[Ht] || b.namespaceURI === "http://www.w3.org/2000/svg" || b.hasAttribute("itemprop")) && (b = d.createElement(o), d.head.insertBefore(
                        b,
                        d.querySelector("head > title")
                      )), Pt(b, o, i), b[Ht] = e, Mt(b), o = b;
                      break e;
                    case "link":
                      var T = Gg(
                        "link",
                        "href",
                        d
                      ).get(o + (i.href || ""));
                      if (T) {
                        for (var D = 0; D < T.length; D++)
                          if (b = T[D], b.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && b.getAttribute("rel") === (i.rel == null ? null : i.rel) && b.getAttribute("title") === (i.title == null ? null : i.title) && b.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), Pt(b, o, i), d.head.appendChild(b);
                      break;
                    case "meta":
                      if (T = Gg(
                        "meta",
                        "content",
                        d
                      ).get(o + (i.content || ""))) {
                        for (D = 0; D < T.length; D++)
                          if (b = T[D], b.getAttribute("content") === (i.content == null ? null : "" + i.content) && b.getAttribute("name") === (i.name == null ? null : i.name) && b.getAttribute("property") === (i.property == null ? null : i.property) && b.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && b.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      b = d.createElement(o), Pt(b, o, i), d.head.appendChild(b);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  b[Ht] = e, Mt(b), o = b;
                }
                e.stateNode = o;
              } else
                Vg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Zg(
                d,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : b.count--, o === null ? Vg(
              d,
              e.type,
              e.stateNode
            ) : Zg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && sd(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        pn(n, e), mn(e), o & 512 && (vt || i === null || Xn(i, i.return)), i !== null && o & 4 && sd(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (pn(n, e), mn(e), o & 512 && (vt || i === null || Xn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Fa(d, "");
          } catch (ne) {
            tt(e, e.return, ne);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, sd(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (ld = !0);
        break;
      case 6:
        if (pn(n, e), mn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(a(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (ne) {
            tt(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (mu = null, d = In, In = hu(n.containerInfo), pn(n, e), In = d, mn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (ne) {
            tt(e, e.return, ne);
          }
        ld && (ld = !1, Km(e));
        break;
      case 4:
        o = In, In = hu(
          e.stateNode.containerInfo
        ), pn(n, e), mn(e), In = o;
        break;
      case 12:
        pn(n, e), mn(e);
        break;
      case 13:
        pn(n, e), mn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (gd = Qe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, cd(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var H = i !== null && i.memoizedState !== null, Q = mr, oe = vt;
        if (mr = Q || d, vt = oe || H, pn(n, e), vt = oe, mr = Q, mn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, d && (i === null || H || mr || vt || Ea(e)), i = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                H = i = n;
                try {
                  if (b = H.stateNode, d)
                    T = b.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                  else {
                    D = H.stateNode;
                    var de = H.memoizedProps.style, ee = de != null && de.hasOwnProperty("display") ? de.display : null;
                    D.style.display = ee == null || typeof ee == "boolean" ? "" : ("" + ee).trim();
                  }
                } catch (ne) {
                  tt(H, H.return, ne);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                H = n;
                try {
                  H.stateNode.nodeValue = d ? "" : H.memoizedProps;
                } catch (ne) {
                  tt(H, H.return, ne);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              i === n && (i = null), n = n.return;
            }
            i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, cd(e, i))));
        break;
      case 19:
        pn(n, e), mn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, cd(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pn(n, e), mn(e);
    }
  }
  function mn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Zm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, b = od(e);
            eu(e, b, d);
            break;
          case 5:
            var T = i.stateNode;
            i.flags & 32 && (Fa(T, ""), i.flags &= -33);
            var D = od(e);
            eu(e, D, T);
            break;
          case 3:
          case 4:
            var H = i.stateNode.containerInfo, Q = od(e);
            ud(
              e,
              Q,
              H
            );
            break;
          default:
            throw Error(a(161));
        }
      } catch (oe) {
        tt(e, e.return, oe);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Km(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Km(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ir(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        $m(e, n.alternate, n), n = n.sibling;
  }
  function Ea(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pr(4, n, n.return), Ea(n);
          break;
        case 1:
          Xn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Hm(
            n,
            n.return,
            i
          ), Ea(n);
          break;
        case 27:
          xs(n.stateNode);
        case 26:
        case 5:
          Xn(n, n.return), Ea(n);
          break;
        case 22:
          n.memoizedState === null && Ea(n);
          break;
        case 30:
          Ea(n);
          break;
        default:
          Ea(n);
      }
      e = e.sibling;
    }
  }
  function Br(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, d = e, b = n, T = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Br(
            d,
            b,
            i
          ), vs(4, b);
          break;
        case 1:
          if (Br(
            d,
            b,
            i
          ), o = b, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (Q) {
              tt(o, o.return, Q);
            }
          if (o = b, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++)
                  Ap(H[d], D);
            } catch (Q) {
              tt(o, o.return, Q);
            }
          }
          i && T & 64 && Um(b), ys(b, b.return);
          break;
        case 27:
          Gm(b);
        case 26:
        case 5:
          Br(
            d,
            b,
            i
          ), i && o === null && T & 4 && qm(b), ys(b, b.return);
          break;
        case 12:
          Br(
            d,
            b,
            i
          );
          break;
        case 13:
          Br(
            d,
            b,
            i
          ), i && T & 4 && Xm(d, b);
          break;
        case 22:
          b.memoizedState === null && Br(
            d,
            b,
            i
          ), ys(b, b.return);
          break;
        case 30:
          break;
        default:
          Br(
            d,
            b,
            i
          );
      }
      n = n.sibling;
    }
  }
  function dd(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && rs(i));
  }
  function fd(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function Qn(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Jm(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function Jm(e, n, i, o) {
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(
          e,
          n,
          i,
          o
        ), d & 2048 && vs(9, n);
        break;
      case 1:
        Qn(
          e,
          n,
          i,
          o
        );
        break;
      case 3:
        Qn(
          e,
          n,
          i,
          o
        ), d & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e)));
        break;
      case 12:
        if (d & 2048) {
          Qn(
            e,
            n,
            i,
            o
          ), e = n.stateNode;
          try {
            var b = n.memoizedProps, T = b.id, D = b.onPostCommit;
            typeof D == "function" && D(
              T,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (H) {
            tt(n, n.return, H);
          }
        } else
          Qn(
            e,
            n,
            i,
            o
          );
        break;
      case 13:
        Qn(
          e,
          n,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        b = n.stateNode, T = n.alternate, n.memoizedState !== null ? b._visibility & 2 ? Qn(
          e,
          n,
          i,
          o
        ) : _s(e, n) : b._visibility & 2 ? Qn(
          e,
          n,
          i,
          o
        ) : (b._visibility |= 2, hi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), d & 2048 && dd(T, n);
        break;
      case 24:
        Qn(
          e,
          n,
          i,
          o
        ), d & 2048 && fd(n.alternate, n);
        break;
      default:
        Qn(
          e,
          n,
          i,
          o
        );
    }
  }
  function hi(e, n, i, o, d) {
    for (d = d && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var b = e, T = n, D = i, H = o, Q = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            b,
            T,
            D,
            H,
            d
          ), vs(8, T);
          break;
        case 23:
          break;
        case 22:
          var oe = T.stateNode;
          T.memoizedState !== null ? oe._visibility & 2 ? hi(
            b,
            T,
            D,
            H,
            d
          ) : _s(
            b,
            T
          ) : (oe._visibility |= 2, hi(
            b,
            T,
            D,
            H,
            d
          )), d && Q & 2048 && dd(
            T.alternate,
            T
          );
          break;
        case 24:
          hi(
            b,
            T,
            D,
            H,
            d
          ), d && Q & 2048 && fd(T.alternate, T);
          break;
        default:
          hi(
            b,
            T,
            D,
            H,
            d
          );
      }
      n = n.sibling;
    }
  }
  function _s(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, o = n, d = o.flags;
        switch (o.tag) {
          case 22:
            _s(i, o), d & 2048 && dd(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(i, o), d & 2048 && fd(o.alternate, o);
            break;
          default:
            _s(i, o);
        }
        n = n.sibling;
      }
  }
  var bs = 8192;
  function pi(e) {
    if (e.subtreeFlags & bs)
      for (e = e.child; e !== null; )
        Wm(e), e = e.sibling;
  }
  function Wm(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & bs && e.memoizedState !== null && B1(
          In,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        pi(e);
        break;
      case 3:
      case 4:
        var n = In;
        In = hu(e.stateNode.containerInfo), pi(e), In = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = bs, bs = 16777216, pi(e), bs = n) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function eg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ss(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          jt = o, ng(
            o,
            e
          );
        }
      eg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        tg(e), e = e.sibling;
  }
  function tg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ss(e), e.flags & 2048 && Pr(9, e, e.return);
        break;
      case 3:
        Ss(e);
        break;
      case 12:
        Ss(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, tu(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function tu(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          jt = o, ng(
            o,
            e
          );
        }
      eg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Pr(8, n, n.return), tu(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, tu(n));
          break;
        default:
          tu(n);
      }
      e = e.sibling;
    }
  }
  function ng(e, n) {
    for (; jt !== null; ) {
      var i = jt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Pr(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          rs(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, jt = o;
      else
        e: for (i = e; jt !== null; ) {
          o = jt;
          var d = o.sibling, b = o.return;
          if (Ym(o), o === i) {
            jt = null;
            break e;
          }
          if (d !== null) {
            d.return = b, jt = d;
            break e;
          }
          jt = b;
        }
    }
  }
  var t1 = {
    getCacheForType: function(e) {
      var n = qt(At), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, n1 = typeof WeakMap == "function" ? WeakMap : Map, Fe = 0, rt = null, Pe = null, Ze = 0, Xe = 0, gn = null, Ur = !1, mi = !1, hd = !1, vr = 0, ht = 0, Hr = 0, Ca = 0, pd = 0, Rn = 0, gi = 0, ws = null, rn = null, md = !1, gd = 0, nu = 1 / 0, ru = null, qr = null, Lt = 0, Zr = null, vi = null, yi = 0, vd = 0, yd = null, rg = null, Es = 0, _d = null;
  function vn() {
    if ((Fe & 2) !== 0 && Ze !== 0)
      return Ze & -Ze;
    if (O.T !== null) {
      var e = ii;
      return e !== 0 ? e : Ad();
    }
    return _h();
  }
  function ag() {
    Rn === 0 && (Rn = (Ze & 536870912) === 0 || $e ? Ua() : 536870912);
    var e = Mn.current;
    return e !== null && (e.flags |= 32), Rn;
  }
  function yn(e, n, i) {
    (e === rt && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), Gr(
      e,
      Ze,
      Rn,
      !1
    )), Hi(e, i), ((Fe & 2) === 0 || e !== rt) && (e === rt && ((Fe & 2) === 0 && (Ca |= i), ht === 4 && Gr(
      e,
      Ze,
      Rn,
      !1
    )), Kn(e));
  }
  function ig(e, n, i) {
    if ((Fe & 6) !== 0) throw Error(a(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Jt(e, n), d = o ? i1(e, n) : wd(e, n, !0), b = o;
    do {
      if (d === 0) {
        mi && !o && Gr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, b && !r1(i)) {
          d = wd(e, n, !1), b = !1;
          continue;
        }
        if (d === 2) {
          if (b = n, e.errorRecoveryDisabledLanes & b)
            var T = 0;
          else
            T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            n = T;
            e: {
              var D = e;
              d = ws;
              var H = D.current.memoizedState.isDehydrated;
              if (H && (_i(D, T).flags |= 256), T = wd(
                D,
                T,
                !1
              ), T !== 2) {
                if (hd && !H) {
                  D.errorRecoveryDisabledLanes |= b, Ca |= b, d = 4;
                  break e;
                }
                b = rn, rn = d, b !== null && (rn === null ? rn = b : rn.push.apply(
                  rn,
                  b
                ));
              }
              d = T;
            }
            if (b = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          _i(e, 0), Gr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, b = d, b) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Gr(
                o,
                n,
                Rn,
                !Ur
              );
              break e;
            case 2:
              rn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((n & 62914560) === n && (d = gd + 300 - Qe(), 10 < d)) {
            if (Gr(
              o,
              n,
              Rn,
              !Ur
            ), $t(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Dg(
              sg.bind(
                null,
                o,
                i,
                rn,
                ru,
                md,
                n,
                Rn,
                Ca,
                gi,
                Ur,
                b,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          sg(
            o,
            i,
            rn,
            ru,
            md,
            n,
            Rn,
            Ca,
            gi,
            Ur,
            b,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Kn(e);
  }
  function sg(e, n, i, o, d, b, T, D, H, Q, oe, de, ee, ne) {
    if (e.timeoutHandle = -1, de = n.subtreeFlags, (de & 8192 || (de & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: I1 }, Wm(n), de = U1(), de !== null)) {
      e.cancelPendingCommit = de(
        hg.bind(
          null,
          e,
          n,
          b,
          i,
          o,
          d,
          T,
          D,
          H,
          oe,
          1,
          ee,
          ne
        )
      ), Gr(e, b, T, !Q);
      return;
    }
    hg(
      e,
      n,
      b,
      i,
      o,
      d,
      T,
      D,
      H
    );
  }
  function r1(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], b = d.getSnapshot;
          d = d.value;
          try {
            if (!fn(b(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = n.child, n.subtreeFlags & 16384 && i !== null)
        i.return = n, n = i;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Gr(e, n, i, o) {
    n &= ~pd, n &= ~Ca, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var d = n; 0 < d; ) {
      var b = 31 - Vt(d), T = 1 << b;
      o[b] = -1, d &= ~T;
    }
    i !== 0 && vh(e, i, n);
  }
  function au() {
    return (Fe & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function bd() {
    if (Pe !== null) {
      if (Xe === 0)
        var e = Pe.return;
      else
        e = Pe, lr = ya = null, Pc(e), di = null, ps = 0, e = Pe;
      for (; e !== null; )
        Bm(e.alternate, e), e = e.return;
      Pe = null;
    }
  }
  function _i(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, S1(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), bd(), rt = e, Pe = i = sr(e.current, null), Ze = n, Xe = 0, gn = null, Ur = !1, mi = Jt(e, n), hd = !1, gi = Rn = pd = Ca = Hr = ht = 0, rn = ws = null, md = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var d = 31 - Vt(o), b = 1 << d;
        n |= e[d], o &= ~b;
      }
    return vr = n, Ao(), i;
  }
  function og(e, n) {
    ze = null, O.H = Vo, n === is || n === zo ? (n = Cp(), Xe = 3) : n === Sp ? (n = Cp(), Xe = 4) : Xe = n === km ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, gn = n, Pe === null && (ht = 1, Qo(
      e,
      xn(n, e.current)
    ));
  }
  function ug() {
    var e = O.H;
    return O.H = Vo, e === null ? Vo : e;
  }
  function lg() {
    var e = O.A;
    return O.A = t1, e;
  }
  function Sd() {
    ht = 4, Ur || (Ze & 4194048) !== Ze && Mn.current !== null || (mi = !0), (Hr & 134217727) === 0 && (Ca & 134217727) === 0 || rt === null || Gr(
      rt,
      Ze,
      Rn,
      !1
    );
  }
  function wd(e, n, i) {
    var o = Fe;
    Fe |= 2;
    var d = ug(), b = lg();
    (rt !== e || Ze !== n) && (ru = null, _i(e, n)), n = !1;
    var T = ht;
    e: do
      try {
        if (Xe !== 0 && Pe !== null) {
          var D = Pe, H = gn;
          switch (Xe) {
            case 8:
              bd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mn.current === null && (n = !0);
              var Q = Xe;
              if (Xe = 0, gn = null, bi(e, D, H, Q), i && mi) {
                T = 0;
                break e;
              }
              break;
            default:
              Q = Xe, Xe = 0, gn = null, bi(e, D, H, Q);
          }
        }
        a1(), T = ht;
        break;
      } catch (oe) {
        og(e, oe);
      }
    while (!0);
    return n && e.shellSuspendCounter++, lr = ya = null, Fe = o, O.H = d, O.A = b, Pe === null && (rt = null, Ze = 0, Ao()), T;
  }
  function a1() {
    for (; Pe !== null; ) cg(Pe);
  }
  function i1(e, n) {
    var i = Fe;
    Fe |= 2;
    var o = ug(), d = lg();
    rt !== e || Ze !== n ? (ru = null, nu = Qe() + 500, _i(e, n)) : mi = Jt(
      e,
      n
    );
    e: do
      try {
        if (Xe !== 0 && Pe !== null) {
          n = Pe;
          var b = gn;
          t: switch (Xe) {
            case 1:
              Xe = 0, gn = null, bi(e, n, b, 1);
              break;
            case 2:
            case 9:
              if (wp(b)) {
                Xe = 0, gn = null, dg(n);
                break;
              }
              n = function() {
                Xe !== 2 && Xe !== 9 || rt !== e || (Xe = 7), Kn(e);
              }, b.then(n, n);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              wp(b) ? (Xe = 0, gn = null, dg(n)) : (Xe = 0, gn = null, bi(e, n, b, 7));
              break;
            case 5:
              var T = null;
              switch (Pe.tag) {
                case 26:
                  T = Pe.memoizedState;
                case 5:
                case 27:
                  var D = Pe;
                  if (!T || $g(T)) {
                    Xe = 0, gn = null;
                    var H = D.sibling;
                    if (H !== null) Pe = H;
                    else {
                      var Q = D.return;
                      Q !== null ? (Pe = Q, iu(Q)) : Pe = null;
                    }
                    break t;
                  }
              }
              Xe = 0, gn = null, bi(e, n, b, 5);
              break;
            case 6:
              Xe = 0, gn = null, bi(e, n, b, 6);
              break;
            case 8:
              bd(), ht = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        s1();
        break;
      } catch (oe) {
        og(e, oe);
      }
    while (!0);
    return lr = ya = null, O.H = o, O.A = d, Fe = i, Pe !== null ? 0 : (rt = null, Ze = 0, Ao(), ht);
  }
  function s1() {
    for (; Pe !== null && !Ue(); )
      cg(Pe);
  }
  function cg(e) {
    var n = Pm(e.alternate, e, vr);
    e.memoizedProps = e.pendingProps, n === null ? iu(e) : Pe = n;
  }
  function dg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Mm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ze
        );
        break;
      case 11:
        n = Mm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        Pc(n);
      default:
        Bm(i, n), n = Pe = fp(n, vr), n = Pm(i, n, vr);
    }
    e.memoizedProps = e.pendingProps, n === null ? iu(e) : Pe = n;
  }
  function bi(e, n, i, o) {
    lr = ya = null, Pc(n), di = null, ps = 0;
    var d = n.return;
    try {
      if (Xb(
        e,
        d,
        n,
        i,
        Ze
      )) {
        ht = 1, Qo(
          e,
          xn(i, e.current)
        ), Pe = null;
        return;
      }
    } catch (b) {
      if (d !== null) throw Pe = d, b;
      ht = 1, Qo(
        e,
        xn(i, e.current)
      ), Pe = null;
      return;
    }
    n.flags & 32768 ? ($e || o === 1 ? e = !0 : mi || (Ze & 536870912) !== 0 ? e = !1 : (Ur = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Mn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), fg(n, e)) : iu(n);
  }
  function iu(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        fg(
          n,
          Ur
        );
        return;
      }
      e = n.return;
      var i = Kb(
        n.alternate,
        n,
        vr
      );
      if (i !== null) {
        Pe = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Pe = n;
        return;
      }
      Pe = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function fg(e, n) {
    do {
      var i = Jb(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Pe = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        Pe = e;
        return;
      }
      Pe = e = i;
    } while (e !== null);
    ht = 6, Pe = null;
  }
  function hg(e, n, i, o, d, b, T, D, H) {
    e.cancelPendingCommit = null;
    do
      su();
    while (Lt !== 0);
    if ((Fe & 6) !== 0) throw Error(a(327));
    if (n !== null) {
      if (n === e.current) throw Error(a(177));
      if (b = n.lanes | n.childLanes, b |= fc, I_(
        e,
        i,
        b,
        T,
        D,
        H
      ), e === rt && (Pe = rt = null, Ze = 0), vi = n, Zr = e, yi = i, vd = b, yd = d, rg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, c1(ye, function() {
        return yg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = O.T, O.T = null, d = U.p, U.p = 2, T = Fe, Fe |= 4;
        try {
          Wb(e, n, i);
        } finally {
          Fe = T, U.p = d, O.T = o;
        }
      }
      Lt = 1, pg(), mg(), gg();
    }
  }
  function pg() {
    if (Lt === 1) {
      Lt = 0;
      var e = Zr, n = vi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null;
        var o = U.p;
        U.p = 2;
        var d = Fe;
        Fe |= 4;
        try {
          Qm(n, e);
          var b = Dd, T = np(e.containerInfo), D = b.focusedElem, H = b.selectionRange;
          if (T !== D && D && D.ownerDocument && tp(
            D.ownerDocument.documentElement,
            D
          )) {
            if (H !== null && oc(D)) {
              var Q = H.start, oe = H.end;
              if (oe === void 0 && (oe = Q), "selectionStart" in D)
                D.selectionStart = Q, D.selectionEnd = Math.min(
                  oe,
                  D.value.length
                );
              else {
                var de = D.ownerDocument || document, ee = de && de.defaultView || window;
                if (ee.getSelection) {
                  var ne = ee.getSelection(), Ae = D.textContent.length, Ce = Math.min(H.start, Ae), We = H.end === void 0 ? Ce : Math.min(H.end, Ae);
                  !ne.extend && Ce > We && (T = We, We = Ce, Ce = T);
                  var V = ep(
                    D,
                    Ce
                  ), Z = ep(
                    D,
                    We
                  );
                  if (V && Z && (ne.rangeCount !== 1 || ne.anchorNode !== V.node || ne.anchorOffset !== V.offset || ne.focusNode !== Z.node || ne.focusOffset !== Z.offset)) {
                    var X = de.createRange();
                    X.setStart(V.node, V.offset), ne.removeAllRanges(), Ce > We ? (ne.addRange(X), ne.extend(Z.node, Z.offset)) : (X.setEnd(Z.node, Z.offset), ne.addRange(X));
                  }
                }
              }
            }
            for (de = [], ne = D; ne = ne.parentNode; )
              ne.nodeType === 1 && de.push({
                element: ne,
                left: ne.scrollLeft,
                top: ne.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < de.length; D++) {
              var ue = de[D];
              ue.element.scrollLeft = ue.left, ue.element.scrollTop = ue.top;
            }
          }
          yu = !!jd, Dd = jd = null;
        } finally {
          Fe = d, U.p = o, O.T = i;
        }
      }
      e.current = n, Lt = 2;
    }
  }
  function mg() {
    if (Lt === 2) {
      Lt = 0;
      var e = Zr, n = vi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = O.T, O.T = null;
        var o = U.p;
        U.p = 2;
        var d = Fe;
        Fe |= 4;
        try {
          $m(e, n.alternate, n);
        } finally {
          Fe = d, U.p = o, O.T = i;
        }
      }
      Lt = 3;
    }
  }
  function gg() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0, et();
      var e = Zr, n = vi, i = yi, o = rg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, vi = Zr = null, vg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (qr = null), Ul(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            nr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = O.T, d = U.p, U.p = 2, O.T = null;
        try {
          for (var b = e.onRecoverableError, T = 0; T < o.length; T++) {
            var D = o[T];
            b(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          O.T = n, U.p = d;
        }
      }
      (yi & 3) !== 0 && su(), Kn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === _d ? Es++ : (Es = 0, _d = e) : Es = 0, Cs(0);
    }
  }
  function vg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function su(e) {
    return pg(), mg(), gg(), yg();
  }
  function yg() {
    if (Lt !== 5) return !1;
    var e = Zr, n = vd;
    vd = 0;
    var i = Ul(yi), o = O.T, d = U.p;
    try {
      U.p = 32 > i ? 32 : i, O.T = null, i = yd, yd = null;
      var b = Zr, T = yi;
      if (Lt = 0, vi = Zr = null, yi = 0, (Fe & 6) !== 0) throw Error(a(331));
      var D = Fe;
      if (Fe |= 4, tg(b.current), Jm(
        b,
        b.current,
        T,
        i
      ), Fe = D, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(nr, b);
        } catch {
        }
      return !0;
    } finally {
      U.p = d, O.T = o, vg(e, n);
    }
  }
  function _g(e, n, i) {
    n = xn(i, n), n = Kc(e.stateNode, n, 2), e = jr(e, n, 2), e !== null && (Hi(e, 2), Kn(e));
  }
  function tt(e, n, i) {
    if (e.tag === 3)
      _g(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          _g(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (qr === null || !qr.has(o))) {
            e = xn(i, e), i = Em(2), o = jr(n, i, 2), o !== null && (Cm(
              i,
              o,
              n,
              e
            ), Hi(o, 2), Kn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ed(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new n1();
      var d = /* @__PURE__ */ new Set();
      o.set(n, d);
    } else
      d = o.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(n, d));
    d.has(i) || (hd = !0, d.add(i), e = o1.bind(null, e, n, i), n.then(e, e));
  }
  function o1(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, rt === e && (Ze & i) === i && (ht === 4 || ht === 3 && (Ze & 62914560) === Ze && 300 > Qe() - gd ? (Fe & 2) === 0 && _i(e, 0) : pd |= i, gi === Ze && (gi = 0)), Kn(e);
  }
  function bg(e, n) {
    n === 0 && (n = gh()), e = ti(e, n), e !== null && (Hi(e, n), Kn(e));
  }
  function u1(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), bg(e, i);
  }
  function l1(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, d = e.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(n), bg(e, i);
  }
  function c1(e, n) {
    return he(e, n);
  }
  var ou = null, Si = null, Cd = !1, uu = !1, kd = !1, ka = 0;
  function Kn(e) {
    e !== Si && e.next === null && (Si === null ? ou = Si = e : Si = Si.next = e), uu = !0, Cd || (Cd = !0, f1());
  }
  function Cs(e, n) {
    if (!kd && uu) {
      kd = !0;
      do
        for (var i = !1, o = ou; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var b = 0;
            else {
              var T = o.suspendedLanes, D = o.pingedLanes;
              b = (1 << 31 - Vt(42 | e) + 1) - 1, b &= d & ~(T & ~D), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (i = !0, Cg(o, b));
          } else
            b = Ze, b = $t(
              o,
              o === rt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || Jt(o, b) || (i = !0, Cg(o, b));
          o = o.next;
        }
      while (i);
      kd = !1;
    }
  }
  function d1() {
    Sg();
  }
  function Sg() {
    uu = Cd = !1;
    var e = 0;
    ka !== 0 && (b1() && (e = ka), ka = 0);
    for (var n = Qe(), i = null, o = ou; o !== null; ) {
      var d = o.next, b = wg(o, n);
      b === 0 ? (o.next = null, i === null ? ou = d : i.next = d, d === null && (Si = i)) : (i = o, (e !== 0 || (b & 3) !== 0) && (uu = !0)), o = d;
    }
    Cs(e);
  }
  function wg(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var T = 31 - Vt(b), D = 1 << T, H = d[T];
      H === -1 ? ((D & i) === 0 || (D & o) !== 0) && (d[T] = po(D, n)) : H <= n && (e.expiredLanes |= D), b &= ~D;
    }
    if (n = rt, i = Ze, i = $t(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && Ee(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Jt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && Ee(o), Ul(i)) {
        case 2:
        case 8:
          i = ve;
          break;
        case 32:
          i = ye;
          break;
        case 268435456:
          i = qe;
          break;
        default:
          i = ye;
      }
      return o = Eg.bind(null, e), i = he(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && Ee(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Eg(e, n) {
    if (Lt !== 0 && Lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (su() && e.callbackNode !== i)
      return null;
    var o = Ze;
    return o = $t(
      e,
      e === rt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (ig(e, o, n), wg(e, Qe()), e.callbackNode != null && e.callbackNode === i ? Eg.bind(null, e) : null);
  }
  function Cg(e, n) {
    if (su()) return null;
    ig(e, n, !0);
  }
  function f1() {
    w1(function() {
      (Fe & 6) !== 0 ? he(
        bt,
        d1
      ) : Sg();
    });
  }
  function Ad() {
    return ka === 0 && (ka = Ua()), ka;
  }
  function kg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _o("" + e);
  }
  function Ag(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function h1(e, n, i, o, d) {
    if (n === "submit" && i && i.stateNode === d) {
      var b = kg(
        (d[Wt] || null).action
      ), T = o.submitter;
      T && (n = (n = T[Wt] || null) ? kg(n.formAction) : T.getAttribute("formAction"), n !== null && (b = n, T = null));
      var D = new Eo(
        "action",
        "action",
        null,
        o,
        d
      );
      e.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (ka !== 0) {
                  var H = T ? Ag(d, T) : new FormData(d);
                  $c(
                    i,
                    {
                      pending: !0,
                      data: H,
                      method: d.method,
                      action: b
                    },
                    null,
                    H
                  );
                }
              } else
                typeof b == "function" && (D.preventDefault(), H = T ? Ag(d, T) : new FormData(d), $c(
                  i,
                  {
                    pending: !0,
                    data: H,
                    method: d.method,
                    action: b
                  },
                  b,
                  H
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var xd = 0; xd < dc.length; xd++) {
    var Td = dc[xd], p1 = Td.toLowerCase(), m1 = Td[0].toUpperCase() + Td.slice(1);
    Pn(
      p1,
      "on" + m1
    );
  }
  Pn(ip, "onAnimationEnd"), Pn(sp, "onAnimationIteration"), Pn(op, "onAnimationStart"), Pn("dblclick", "onDoubleClick"), Pn("focusin", "onFocus"), Pn("focusout", "onBlur"), Pn(Rb, "onTransitionRun"), Pn(jb, "onTransitionStart"), Pn(Db, "onTransitionCancel"), Pn(up, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), la(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), la(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), la("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), la(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ks = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), g1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks)
  );
  function xg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], d = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (n)
          for (var T = o.length - 1; 0 <= T; T--) {
            var D = o[T], H = D.instance, Q = D.currentTarget;
            if (D = D.listener, H !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = Q;
            try {
              b(d);
            } catch (oe) {
              Xo(oe);
            }
            d.currentTarget = null, b = H;
          }
        else
          for (T = 0; T < o.length; T++) {
            if (D = o[T], H = D.instance, Q = D.currentTarget, D = D.listener, H !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = Q;
            try {
              b(d);
            } catch (oe) {
              Xo(oe);
            }
            d.currentTarget = null, b = H;
          }
      }
    }
  }
  function Ie(e, n) {
    var i = n[Hl];
    i === void 0 && (i = n[Hl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Tg(n, e, 2, !1), i.add(o));
  }
  function Nd(e, n, i) {
    var o = 0;
    n && (o |= 4), Tg(
      i,
      e,
      o,
      n
    );
  }
  var lu = "_reactListening" + Math.random().toString(36).slice(2);
  function Od(e) {
    if (!e[lu]) {
      e[lu] = !0, Sh.forEach(function(i) {
        i !== "selectionchange" && (g1.has(i) || Nd(i, !1, e), Nd(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[lu] || (n[lu] = !0, Nd("selectionchange", !1, n));
    }
  }
  function Tg(e, n, i, o) {
    switch (Jg(n)) {
      case 2:
        var d = Z1;
        break;
      case 8:
        d = G1;
        break;
      default:
        d = Gd;
    }
    i = d.bind(
      null,
      n,
      i,
      e
    ), d = void 0, !Jl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(n, i, !0) : d !== void 0 ? e.addEventListener(n, i, {
      passive: d
    }) : e.addEventListener(n, i, !1);
  }
  function Md(e, n, i, o, d) {
    var b = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var T = o.tag;
        if (T === 3 || T === 4) {
          var D = o.stateNode.containerInfo;
          if (D === d) break;
          if (T === 4)
            for (T = o.return; T !== null; ) {
              var H = T.tag;
              if ((H === 3 || H === 4) && T.stateNode.containerInfo === d)
                return;
              T = T.return;
            }
          for (; D !== null; ) {
            if (T = qa(D), T === null) return;
            if (H = T.tag, H === 5 || H === 6 || H === 26 || H === 27) {
              o = b = T;
              continue e;
            }
            D = D.parentNode;
          }
        }
        o = o.return;
      }
    zh(function() {
      var Q = b, oe = Ql(i), de = [];
      e: {
        var ee = lp.get(e);
        if (ee !== void 0) {
          var ne = Eo, Ae = e;
          switch (e) {
            case "keypress":
              if (So(i) === 0) break e;
            case "keydown":
            case "keyup":
              ne = cb;
              break;
            case "focusin":
              Ae = "focus", ne = nc;
              break;
            case "focusout":
              Ae = "blur", ne = nc;
              break;
            case "beforeblur":
            case "afterblur":
              ne = nc;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ne = Ih;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = J_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = hb;
              break;
            case ip:
            case sp:
            case op:
              ne = tb;
              break;
            case up:
              ne = mb;
              break;
            case "scroll":
            case "scrollend":
              ne = Q_;
              break;
            case "wheel":
              ne = vb;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = rb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = Uh;
              break;
            case "toggle":
            case "beforetoggle":
              ne = _b;
          }
          var Ce = (n & 4) !== 0, We = !Ce && (e === "scroll" || e === "scrollend"), V = Ce ? ee !== null ? ee + "Capture" : null : ee;
          Ce = [];
          for (var Z = Q, X; Z !== null; ) {
            var ue = Z;
            if (X = ue.stateNode, ue = ue.tag, ue !== 5 && ue !== 26 && ue !== 27 || X === null || V === null || (ue = Gi(Z, V), ue != null && Ce.push(
              As(Z, ue, X)
            )), We) break;
            Z = Z.return;
          }
          0 < Ce.length && (ee = new ne(
            ee,
            Ae,
            null,
            i,
            oe
          ), de.push({ event: ee, listeners: Ce }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (ee = e === "mouseover" || e === "pointerover", ne = e === "mouseout" || e === "pointerout", ee && i !== Xl && (Ae = i.relatedTarget || i.fromElement) && (qa(Ae) || Ae[Ha]))
            break e;
          if ((ne || ee) && (ee = oe.window === oe ? oe : (ee = oe.ownerDocument) ? ee.defaultView || ee.parentWindow : window, ne ? (Ae = i.relatedTarget || i.toElement, ne = Q, Ae = Ae ? qa(Ae) : null, Ae !== null && (We = l(Ae), Ce = Ae.tag, Ae !== We || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Ae = null)) : (ne = null, Ae = Q), ne !== Ae)) {
            if (Ce = Ih, ue = "onMouseLeave", V = "onMouseEnter", Z = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Uh, ue = "onPointerLeave", V = "onPointerEnter", Z = "pointer"), We = ne == null ? ee : Zi(ne), X = Ae == null ? ee : Zi(Ae), ee = new Ce(
              ue,
              Z + "leave",
              ne,
              i,
              oe
            ), ee.target = We, ee.relatedTarget = X, ue = null, qa(oe) === Q && (Ce = new Ce(
              V,
              Z + "enter",
              Ae,
              i,
              oe
            ), Ce.target = X, Ce.relatedTarget = We, ue = Ce), We = ue, ne && Ae)
              t: {
                for (Ce = ne, V = Ae, Z = 0, X = Ce; X; X = wi(X))
                  Z++;
                for (X = 0, ue = V; ue; ue = wi(ue))
                  X++;
                for (; 0 < Z - X; )
                  Ce = wi(Ce), Z--;
                for (; 0 < X - Z; )
                  V = wi(V), X--;
                for (; Z--; ) {
                  if (Ce === V || V !== null && Ce === V.alternate)
                    break t;
                  Ce = wi(Ce), V = wi(V);
                }
                Ce = null;
              }
            else Ce = null;
            ne !== null && Ng(
              de,
              ee,
              ne,
              Ce,
              !1
            ), Ae !== null && We !== null && Ng(
              de,
              We,
              Ae,
              Ce,
              !0
            );
          }
        }
        e: {
          if (ee = Q ? Zi(Q) : window, ne = ee.nodeName && ee.nodeName.toLowerCase(), ne === "select" || ne === "input" && ee.type === "file")
            var ge = Fh;
          else if ($h(ee))
            if (Xh)
              ge = Nb;
            else {
              ge = xb;
              var Le = Ab;
            }
          else
            ne = ee.nodeName, !ne || ne.toLowerCase() !== "input" || ee.type !== "checkbox" && ee.type !== "radio" ? Q && Fl(Q.elementType) && (ge = Fh) : ge = Tb;
          if (ge && (ge = ge(e, Q))) {
            Yh(
              de,
              ge,
              i,
              oe
            );
            break e;
          }
          Le && Le(e, ee, Q), e === "focusout" && Q && ee.type === "number" && Q.memoizedProps.value != null && Yl(ee, "number", ee.value);
        }
        switch (Le = Q ? Zi(Q) : window, e) {
          case "focusin":
            ($h(Le) || Le.contentEditable === "true") && (Ja = Le, uc = Q, Ji = null);
            break;
          case "focusout":
            Ji = uc = Ja = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, rp(de, i, oe);
            break;
          case "selectionchange":
            if (Mb) break;
          case "keydown":
          case "keyup":
            rp(de, i, oe);
        }
        var _e;
        if (ac)
          e: {
            switch (e) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          Ka ? Gh(e, i) && (ke = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Hh && i.locale !== "ko" && (Ka || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Ka && (_e = Lh()) : (Nr = oe, Wl = "value" in Nr ? Nr.value : Nr.textContent, Ka = !0)), Le = cu(Q, ke), 0 < Le.length && (ke = new Bh(
          ke,
          e,
          null,
          i,
          oe
        ), de.push({ event: ke, listeners: Le }), _e ? ke.data = _e : (_e = Vh(i), _e !== null && (ke.data = _e)))), (_e = Sb ? wb(e, i) : Eb(e, i)) && (ke = cu(Q, "onBeforeInput"), 0 < ke.length && (Le = new Bh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          oe
        ), de.push({
          event: Le,
          listeners: ke
        }), Le.data = _e)), h1(
          de,
          e,
          Q,
          i,
          oe
        );
      }
      xg(de, n);
    });
  }
  function As(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function cu(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var d = e, b = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || b === null || (d = Gi(e, i), d != null && o.unshift(
        As(e, d, b)
      ), d = Gi(e, n), d != null && o.push(
        As(e, d, b)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function wi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ng(e, n, i, o, d) {
    for (var b = n._reactName, T = []; i !== null && i !== o; ) {
      var D = i, H = D.alternate, Q = D.stateNode;
      if (D = D.tag, H !== null && H === o) break;
      D !== 5 && D !== 26 && D !== 27 || Q === null || (H = Q, d ? (Q = Gi(i, b), Q != null && T.unshift(
        As(i, Q, H)
      )) : d || (Q = Gi(i, b), Q != null && T.push(
        As(i, Q, H)
      ))), i = i.return;
    }
    T.length !== 0 && e.push({ event: n, listeners: T });
  }
  var v1 = /\r\n?/g, y1 = /\u0000|\uFFFD/g;
  function Og(e) {
    return (typeof e == "string" ? e : "" + e).replace(v1, `
`).replace(y1, "");
  }
  function Mg(e, n) {
    return n = Og(n), Og(e) === n;
  }
  function du() {
  }
  function Je(e, n, i, o, d, b) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Fa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Fa(e, "" + o);
        break;
      case "className":
        go(e, "class", o);
        break;
      case "tabIndex":
        go(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        go(e, i, o);
        break;
      case "style":
        jh(e, o, b);
        break;
      case "data":
        if (n !== "object") {
          go(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = _o("" + o), e.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof b == "function" && (i === "formAction" ? (n !== "input" && Je(e, n, "name", d.name, d, null), Je(
            e,
            n,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Je(
            e,
            n,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Je(
            e,
            n,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Je(e, n, "encType", d.encType, d, null), Je(e, n, "method", d.method, d, null), Je(e, n, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = _o("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = du);
        break;
      case "onScroll":
        o != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ie("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (i = o.__html, i != null) {
            if (d.children != null) throw Error(a(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = _o("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "" + o) : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(i) : e.setAttribute(i, o);
        break;
      case "popover":
        Ie("beforetoggle", e), Ie("toggle", e), mo(e, "popover", o);
        break;
      case "xlinkActuate":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        ar(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        ar(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        ar(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        mo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = F_.get(i) || i, mo(e, i, o));
    }
  }
  function Rd(e, n, i, o, d, b) {
    switch (i) {
      case "style":
        jh(e, o, b);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (i = o.__html, i != null) {
            if (d.children != null) throw Error(a(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Fa(e, o) : (typeof o == "number" || typeof o == "bigint") && Fa(e, "" + o);
        break;
      case "onScroll":
        o != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ie("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = du);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!wh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (d = i.endsWith("Capture"), n = i.slice(2, d ? i.length - 7 : void 0), b = e[Wt] || null, b = b != null ? b[i] : null, typeof b == "function" && e.removeEventListener(n, b, d), typeof o == "function")) {
              typeof b != "function" && b !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, d);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : mo(e, i, o);
          }
    }
  }
  function Pt(e, n, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ie("error", e), Ie("load", e);
        var o = !1, d = !1, b;
        for (b in i)
          if (i.hasOwnProperty(b)) {
            var T = i[b];
            if (T != null)
              switch (b) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, n));
                default:
                  Je(e, n, b, T, i, null);
              }
          }
        d && Je(e, n, "srcSet", i.srcSet, i, null), o && Je(e, n, "src", i.src, i, null);
        return;
      case "input":
        Ie("invalid", e);
        var D = b = T = d = null, H = null, Q = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var oe = i[o];
            if (oe != null)
              switch (o) {
                case "name":
                  d = oe;
                  break;
                case "type":
                  T = oe;
                  break;
                case "checked":
                  H = oe;
                  break;
                case "defaultChecked":
                  Q = oe;
                  break;
                case "value":
                  b = oe;
                  break;
                case "defaultValue":
                  D = oe;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (oe != null)
                    throw Error(a(137, n));
                  break;
                default:
                  Je(e, n, o, oe, i, null);
              }
          }
        Nh(
          e,
          b,
          D,
          H,
          Q,
          T,
          d,
          !1
        ), vo(e);
        return;
      case "select":
        Ie("invalid", e), o = T = b = null;
        for (d in i)
          if (i.hasOwnProperty(d) && (D = i[d], D != null))
            switch (d) {
              case "value":
                b = D;
                break;
              case "defaultValue":
                T = D;
                break;
              case "multiple":
                o = D;
              default:
                Je(e, n, d, D, i, null);
            }
        n = b, i = T, e.multiple = !!o, n != null ? Ya(e, !!o, n, !1) : i != null && Ya(e, !!o, i, !0);
        return;
      case "textarea":
        Ie("invalid", e), b = d = o = null;
        for (T in i)
          if (i.hasOwnProperty(T) && (D = i[T], D != null))
            switch (T) {
              case "value":
                o = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                b = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(a(91));
                break;
              default:
                Je(e, n, T, D, i, null);
            }
        Mh(e, o, d, b), vo(e);
        return;
      case "option":
        for (H in i)
          if (i.hasOwnProperty(H) && (o = i[H], o != null))
            switch (H) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Je(e, n, H, o, i, null);
            }
        return;
      case "dialog":
        Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
        break;
      case "iframe":
      case "object":
        Ie("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ks.length; o++)
          Ie(ks[o], e);
        break;
      case "image":
        Ie("error", e), Ie("load", e);
        break;
      case "details":
        Ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ie("error", e), Ie("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Q in i)
          if (i.hasOwnProperty(Q) && (o = i[Q], o != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, n));
              default:
                Je(e, n, Q, o, i, null);
            }
        return;
      default:
        if (Fl(n)) {
          for (oe in i)
            i.hasOwnProperty(oe) && (o = i[oe], o !== void 0 && Rd(
              e,
              n,
              oe,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (D in i)
      i.hasOwnProperty(D) && (o = i[D], o != null && Je(e, n, D, o, i, null));
  }
  function _1(e, n, i, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, b = null, T = null, D = null, H = null, Q = null, oe = null;
        for (ne in i) {
          var de = i[ne];
          if (i.hasOwnProperty(ne) && de != null)
            switch (ne) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                H = de;
              default:
                o.hasOwnProperty(ne) || Je(e, n, ne, null, o, de);
            }
        }
        for (var ee in o) {
          var ne = o[ee];
          if (de = i[ee], o.hasOwnProperty(ee) && (ne != null || de != null))
            switch (ee) {
              case "type":
                b = ne;
                break;
              case "name":
                d = ne;
                break;
              case "checked":
                Q = ne;
                break;
              case "defaultChecked":
                oe = ne;
                break;
              case "value":
                T = ne;
                break;
              case "defaultValue":
                D = ne;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ne != null)
                  throw Error(a(137, n));
                break;
              default:
                ne !== de && Je(
                  e,
                  n,
                  ee,
                  ne,
                  o,
                  de
                );
            }
        }
        $l(
          e,
          T,
          D,
          H,
          Q,
          oe,
          b,
          d
        );
        return;
      case "select":
        ne = T = D = ee = null;
        for (b in i)
          if (H = i[b], i.hasOwnProperty(b) && H != null)
            switch (b) {
              case "value":
                break;
              case "multiple":
                ne = H;
              default:
                o.hasOwnProperty(b) || Je(
                  e,
                  n,
                  b,
                  null,
                  o,
                  H
                );
            }
        for (d in o)
          if (b = o[d], H = i[d], o.hasOwnProperty(d) && (b != null || H != null))
            switch (d) {
              case "value":
                ee = b;
                break;
              case "defaultValue":
                D = b;
                break;
              case "multiple":
                T = b;
              default:
                b !== H && Je(
                  e,
                  n,
                  d,
                  b,
                  o,
                  H
                );
            }
        n = D, i = T, o = ne, ee != null ? Ya(e, !!i, ee, !1) : !!o != !!i && (n != null ? Ya(e, !!i, n, !0) : Ya(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        ne = ee = null;
        for (D in i)
          if (d = i[D], i.hasOwnProperty(D) && d != null && !o.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Je(e, n, D, null, o, d);
            }
        for (T in o)
          if (d = o[T], b = i[T], o.hasOwnProperty(T) && (d != null || b != null))
            switch (T) {
              case "value":
                ee = d;
                break;
              case "defaultValue":
                ne = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(a(91));
                break;
              default:
                d !== b && Je(e, n, T, d, o, b);
            }
        Oh(e, ee, ne);
        return;
      case "option":
        for (var Ae in i)
          if (ee = i[Ae], i.hasOwnProperty(Ae) && ee != null && !o.hasOwnProperty(Ae))
            switch (Ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Je(
                  e,
                  n,
                  Ae,
                  null,
                  o,
                  ee
                );
            }
        for (H in o)
          if (ee = o[H], ne = i[H], o.hasOwnProperty(H) && ee !== ne && (ee != null || ne != null))
            switch (H) {
              case "selected":
                e.selected = ee && typeof ee != "function" && typeof ee != "symbol";
                break;
              default:
                Je(
                  e,
                  n,
                  H,
                  ee,
                  o,
                  ne
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in i)
          ee = i[Ce], i.hasOwnProperty(Ce) && ee != null && !o.hasOwnProperty(Ce) && Je(e, n, Ce, null, o, ee);
        for (Q in o)
          if (ee = o[Q], ne = i[Q], o.hasOwnProperty(Q) && ee !== ne && (ee != null || ne != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(a(137, n));
                break;
              default:
                Je(
                  e,
                  n,
                  Q,
                  ee,
                  o,
                  ne
                );
            }
        return;
      default:
        if (Fl(n)) {
          for (var We in i)
            ee = i[We], i.hasOwnProperty(We) && ee !== void 0 && !o.hasOwnProperty(We) && Rd(
              e,
              n,
              We,
              void 0,
              o,
              ee
            );
          for (oe in o)
            ee = o[oe], ne = i[oe], !o.hasOwnProperty(oe) || ee === ne || ee === void 0 && ne === void 0 || Rd(
              e,
              n,
              oe,
              ee,
              o,
              ne
            );
          return;
        }
    }
    for (var V in i)
      ee = i[V], i.hasOwnProperty(V) && ee != null && !o.hasOwnProperty(V) && Je(e, n, V, null, o, ee);
    for (de in o)
      ee = o[de], ne = i[de], !o.hasOwnProperty(de) || ee === ne || ee == null && ne == null || Je(e, n, de, ee, o, ne);
  }
  var jd = null, Dd = null;
  function fu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jg(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function zd(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ld = null;
  function b1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ld ? !1 : (Ld = e, !0) : (Ld = null, !1);
  }
  var Dg = typeof setTimeout == "function" ? setTimeout : void 0, S1 = typeof clearTimeout == "function" ? clearTimeout : void 0, zg = typeof Promise == "function" ? Promise : void 0, w1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof zg < "u" ? function(e) {
    return zg.resolve(null).then(e).catch(E1);
  } : Dg;
  function E1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vr(e) {
    return e === "head";
  }
  function Lg(e, n) {
    var i = n, o = 0, d = 0;
    do {
      var b = i.nextSibling;
      if (e.removeChild(i), b && b.nodeType === 8)
        if (i = b.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var T = e.ownerDocument;
            if (i & 1 && xs(T.documentElement), i & 2 && xs(T.body), i & 4)
              for (i = T.head, xs(i), T = i.firstChild; T; ) {
                var D = T.nextSibling, H = T.nodeName;
                T[qi] || H === "SCRIPT" || H === "STYLE" || H === "LINK" && T.rel.toLowerCase() === "stylesheet" || i.removeChild(T), T = D;
              }
          }
          if (d === 0) {
            e.removeChild(b), zs(n);
            return;
          }
          d--;
        } else
          i === "$" || i === "$?" || i === "$!" ? d++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = b;
    } while (i);
    zs(n);
  }
  function Pd(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pd(i), ql(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function C1(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var d = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[qi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (b = e.getAttribute("rel"), b === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (b !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (b = e.getAttribute("src"), (b !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && b && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var b = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === b)
          return e;
      } else return e;
      if (e = Bn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function k1(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Id(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function A1(e, n) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Bn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Bd = null;
  function Pg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ig(e, n, i) {
    switch (n = fu(i), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(a(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(a(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function xs(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    ql(e);
  }
  var jn = /* @__PURE__ */ new Map(), Bg = /* @__PURE__ */ new Set();
  function hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var yr = U.d;
  U.d = {
    f: x1,
    r: T1,
    D: N1,
    C: O1,
    L: M1,
    m: R1,
    X: D1,
    S: j1,
    M: z1
  };
  function x1() {
    var e = yr.f(), n = au();
    return e || n;
  }
  function T1(e) {
    var n = Za(e);
    n !== null && n.tag === 5 && n.type === "form" ? im(n) : yr.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Ug(e, n, i) {
    var o = Ei;
    if (o && typeof n == "string" && n) {
      var d = An(n);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), Bg.has(d) || (Bg.add(d), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(d) === null && (n = o.createElement("link"), Pt(n, "link", e), Mt(n), o.head.appendChild(n)));
    }
  }
  function N1(e) {
    yr.D(e), Ug("dns-prefetch", e, null);
  }
  function O1(e, n) {
    yr.C(e, n), Ug("preconnect", e, n);
  }
  function M1(e, n, i) {
    yr.L(e, n, i);
    var o = Ei;
    if (o && e && n) {
      var d = 'link[rel="preload"][as="' + An(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + An(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + An(
        i.imageSizes
      ) + '"]')) : d += '[href="' + An(e) + '"]';
      var b = d;
      switch (n) {
        case "style":
          b = Ci(e);
          break;
        case "script":
          b = ki(e);
      }
      jn.has(b) || (e = g(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), jn.set(b, e), o.querySelector(d) !== null || n === "style" && o.querySelector(Ts(b)) || n === "script" && o.querySelector(Ns(b)) || (n = o.createElement("link"), Pt(n, "link", e), Mt(n), o.head.appendChild(n)));
    }
  }
  function R1(e, n) {
    yr.m(e, n);
    var i = Ei;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", d = 'link[rel="modulepreload"][as="' + An(o) + '"][href="' + An(e) + '"]', b = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = ki(e);
      }
      if (!jn.has(b) && (e = g({ rel: "modulepreload", href: e }, n), jn.set(b, e), i.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ns(b)))
              return;
        }
        o = i.createElement("link"), Pt(o, "link", e), Mt(o), i.head.appendChild(o);
      }
    }
  }
  function j1(e, n, i) {
    yr.S(e, n, i);
    var o = Ei;
    if (o && e) {
      var d = Ga(o).hoistableStyles, b = Ci(e);
      n = n || "default";
      var T = d.get(b);
      if (!T) {
        var D = { loading: 0, preload: null };
        if (T = o.querySelector(
          Ts(b)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = jn.get(b)) && Ud(e, i);
          var H = T = o.createElement("link");
          Mt(H), Pt(H, "link", e), H._p = new Promise(function(Q, oe) {
            H.onload = Q, H.onerror = oe;
          }), H.addEventListener("load", function() {
            D.loading |= 1;
          }), H.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, pu(T, n, o);
        }
        T = {
          type: "stylesheet",
          instance: T,
          count: 1,
          state: D
        }, d.set(b, T);
      }
    }
  }
  function D1(e, n) {
    yr.X(e, n);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = i.querySelector(Ns(d)), b || (e = g({ src: e, async: !0 }, n), (n = jn.get(d)) && Hd(e, n), b = i.createElement("script"), Mt(b), Pt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function z1(e, n) {
    yr.M(e, n);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = i.querySelector(Ns(d)), b || (e = g({ src: e, async: !0, type: "module" }, n), (n = jn.get(d)) && Hd(e, n), b = i.createElement("script"), Mt(b), Pt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Hg(e, n, i, o) {
    var d = (d = K.current) ? hu(d) : null;
    if (!d) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ci(i.href), i = Ga(
          d
        ).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ci(i.href);
          var b = Ga(
            d
          ).hoistableStyles, T = b.get(e);
          if (T || (d = d.ownerDocument || d, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, b.set(e, T), (b = d.querySelector(
            Ts(e)
          )) && !b._p && (T.instance = b, T.state.loading = 5), jn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, jn.set(e, i), b || L1(
            d,
            e,
            i,
            T.state
          ))), n && o === null)
            throw Error(a(528, ""));
          return T;
        }
        if (n && o !== null)
          throw Error(a(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ki(i), i = Ga(
          d
        ).hoistableScripts, o = i.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, e));
    }
  }
  function Ci(e) {
    return 'href="' + An(e) + '"';
  }
  function Ts(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function qg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function L1(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Pt(n, "link", i), Mt(n), e.head.appendChild(n));
  }
  function ki(e) {
    return '[src="' + An(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Zg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + An(i.href) + '"]'
          );
          if (o)
            return n.instance = o, Mt(o), o;
          var d = g({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Mt(o), Pt(o, "style", d), pu(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          d = Ci(i.href);
          var b = e.querySelector(
            Ts(d)
          );
          if (b)
            return n.state.loading |= 4, n.instance = b, Mt(b), b;
          o = qg(i), (d = jn.get(d)) && Ud(o, d), b = (e.ownerDocument || e).createElement("link"), Mt(b);
          var T = b;
          return T._p = new Promise(function(D, H) {
            T.onload = D, T.onerror = H;
          }), Pt(b, "link", o), n.state.loading |= 4, pu(b, i.precedence, e), n.instance = b;
        case "script":
          return b = ki(i.src), (d = e.querySelector(
            Ns(b)
          )) ? (n.instance = d, Mt(d), d) : (o = i, (d = jn.get(b)) && (o = g({}, i), Hd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), Mt(d), Pt(d, "link", o), e.head.appendChild(d), n.instance = d);
        case "void":
          return null;
        default:
          throw Error(a(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, pu(o, i.precedence, e));
    return n.instance;
  }
  function pu(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, b = d, T = 0; T < o.length; T++) {
      var D = o[T];
      if (D.dataset.precedence === n) b = D;
      else if (b !== d) break;
    }
    b ? b.parentNode.insertBefore(e, b.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Ud(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Hd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var mu = null;
  function Gg(e, n, i) {
    if (mu === null) {
      var o = /* @__PURE__ */ new Map(), d = mu = /* @__PURE__ */ new Map();
      d.set(i, o);
    } else
      d = mu, o = d.get(i), o || (o = /* @__PURE__ */ new Map(), d.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), d = 0; d < i.length; d++) {
      var b = i[d];
      if (!(b[qi] || b[Ht] || e === "link" && b.getAttribute("rel") === "stylesheet") && b.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = b.getAttribute(n) || "";
        T = e + T;
        var D = o.get(T);
        D ? D.push(b) : o.set(T, [b]);
      }
    }
    return o;
  }
  function Vg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function P1(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function $g(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function I1() {
  }
  function B1(e, n, i) {
    if (Os === null) throw Error(a(475));
    var o = Os;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var d = Ci(i.href), b = e.querySelector(
          Ts(d)
        );
        if (b) {
          e = b._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = gu.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = b, Mt(b);
          return;
        }
        b = e.ownerDocument || e, i = qg(i), (d = jn.get(d)) && Ud(i, d), b = b.createElement("link"), Mt(b);
        var T = b;
        T._p = new Promise(function(D, H) {
          T.onload = D, T.onerror = H;
        }), Pt(b, "link", i), n.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = gu.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function U1() {
    if (Os === null) throw Error(a(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && qd(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && qd(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function gu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) qd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vu = null;
  function qd(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vu = /* @__PURE__ */ new Map(), n.forEach(H1, e), vu = null, gu.call(e));
  }
  function H1(e, n) {
    if (!(n.state.loading & 4)) {
      var i = vu.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), vu.set(e, i);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), b = 0; b < d.length; b++) {
          var T = d[b];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (i.set(T.dataset.precedence, T), o = T);
        }
        o && i.set(null, o);
      }
      d = n.instance, T = d.getAttribute("data-precedence"), b = i.get(T) || o, b === o && i.set(null, d), i.set(T, d), this.count++, o = gu.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), b ? b.parentNode.insertBefore(d, b.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function q1(e, n, i, o, d, b, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Il(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Il(0), this.hiddenUpdates = Il(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = b, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yg(e, n, i, o, d, b, T, D, H, Q, oe, de) {
    return e = new q1(
      e,
      n,
      i,
      T,
      D,
      H,
      Q,
      de
    ), n = 1, b === !0 && (n |= 24), b = hn(3, null, null, n), e.current = b, b.stateNode = e, n = Ec(), n.refCount++, e.pooledCache = n, n.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, xc(b), e;
  }
  function Fg(e) {
    return e ? (e = ni, e) : ni;
  }
  function Xg(e, n, i, o, d, b) {
    d = Fg(d), o.context === null ? o.context = d : o.pendingContext = d, o = Rr(n), o.payload = { element: i }, b = b === void 0 ? null : b, b !== null && (o.callback = b), i = jr(e, o, n), i !== null && (yn(i, e, n), os(i, e, n));
  }
  function Qg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Zd(e, n) {
    Qg(e, n), (e = e.alternate) && Qg(e, n);
  }
  function Kg(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && yn(n, e, 67108864), Zd(e, 67108864);
    }
  }
  var yu = !0;
  function Z1(e, n, i, o) {
    var d = O.T;
    O.T = null;
    var b = U.p;
    try {
      U.p = 2, Gd(e, n, i, o);
    } finally {
      U.p = b, O.T = d;
    }
  }
  function G1(e, n, i, o) {
    var d = O.T;
    O.T = null;
    var b = U.p;
    try {
      U.p = 8, Gd(e, n, i, o);
    } finally {
      U.p = b, O.T = d;
    }
  }
  function Gd(e, n, i, o) {
    if (yu) {
      var d = Vd(o);
      if (d === null)
        Md(
          e,
          n,
          o,
          _u,
          i
        ), Wg(e, o);
      else if ($1(
        d,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (Wg(e, o), n & 4 && -1 < V1.indexOf(e)) {
        for (; d !== null; ) {
          var b = Za(d);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var T = Cn(b.pendingLanes);
                  if (T !== 0) {
                    var D = b;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; T; ) {
                      var H = 1 << 31 - Vt(T);
                      D.entanglements[1] |= H, T &= ~H;
                    }
                    Kn(b), (Fe & 6) === 0 && (nu = Qe() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                D = ti(b, 2), D !== null && yn(D, b, 2), au(), Zd(b, 2);
            }
          if (b = Vd(o), b === null && Md(
            e,
            n,
            o,
            _u,
            i
          ), b === d) break;
          d = b;
        }
        d !== null && o.stopPropagation();
      } else
        Md(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function Vd(e) {
    return e = Ql(e), $d(e);
  }
  var _u = null;
  function $d(e) {
    if (_u = null, e = qa(e), e !== null) {
      var n = l(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return _u = e, null;
  }
  function Jg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ln()) {
          case bt:
            return 2;
          case ve:
            return 8;
          case ye:
          case Ge:
            return 32;
          case qe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yd = !1, $r = null, Yr = null, Fr = null, Rs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Xr = [], V1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        $r = null;
        break;
      case "dragenter":
      case "dragleave":
        Yr = null;
        break;
      case "mouseover":
      case "mouseout":
        Fr = null;
        break;
      case "pointerover":
      case "pointerout":
        Rs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(n.pointerId);
    }
  }
  function Ds(e, n, i, o, d, b) {
    return e === null || e.nativeEvent !== b ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: b,
      targetContainers: [d]
    }, n !== null && (n = Za(n), n !== null && Kg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e);
  }
  function $1(e, n, i, o, d) {
    switch (n) {
      case "focusin":
        return $r = Ds(
          $r,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "dragenter":
        return Yr = Ds(
          Yr,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "mouseover":
        return Fr = Ds(
          Fr,
          e,
          n,
          i,
          o,
          d
        ), !0;
      case "pointerover":
        var b = d.pointerId;
        return Rs.set(
          b,
          Ds(
            Rs.get(b) || null,
            e,
            n,
            i,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return b = d.pointerId, js.set(
          b,
          Ds(
            js.get(b) || null,
            e,
            n,
            i,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function ev(e) {
    var n = qa(e.target);
    if (n !== null) {
      var i = l(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, B_(e.priority, function() {
              if (i.tag === 13) {
                var o = vn();
                o = Bl(o);
                var d = ti(i, o);
                d !== null && yn(d, i, o), Zd(i, o);
              }
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Vd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Xl = o, i.target.dispatchEvent(o), Xl = null;
      } else
        return n = Za(i), n !== null && Kg(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function tv(e, n, i) {
    bu(e) && i.delete(n);
  }
  function Y1() {
    Yd = !1, $r !== null && bu($r) && ($r = null), Yr !== null && bu(Yr) && (Yr = null), Fr !== null && bu(Fr) && (Fr = null), Rs.forEach(tv), js.forEach(tv);
  }
  function Su(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Yd || (Yd = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      Y1
    )));
  }
  var wu = null;
  function nv(e) {
    wu !== e && (wu = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        wu === e && (wu = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], d = e[n + 2];
          if (typeof o != "function") {
            if ($d(o || i) === null)
              continue;
            break;
          }
          var b = Za(i);
          b !== null && (e.splice(n, 3), n -= 3, $c(
            b,
            {
              pending: !0,
              data: d,
              method: i.method,
              action: o
            },
            o,
            d
          ));
        }
      }
    ));
  }
  function zs(e) {
    function n(H) {
      return Su(H, e);
    }
    $r !== null && Su($r, e), Yr !== null && Su(Yr, e), Fr !== null && Su(Fr, e), Rs.forEach(n), js.forEach(n);
    for (var i = 0; i < Xr.length; i++) {
      var o = Xr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Xr.length && (i = Xr[0], i.blockedOn === null); )
      ev(i), i.blockedOn === null && Xr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], b = i[o + 1], T = d[Wt] || null;
        if (typeof b == "function")
          T || nv(i);
        else if (T) {
          var D = null;
          if (b && b.hasAttribute("formAction")) {
            if (d = b, T = b[Wt] || null)
              D = T.formAction;
            else if ($d(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? i[o + 1] = D : (i.splice(o, 3), o -= 3), nv(i);
        }
      }
  }
  function Fd(e) {
    this._internalRoot = e;
  }
  Eu.prototype.render = Fd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(a(409));
    var i = n.current, o = vn();
    Xg(i, o, e, n, null, null);
  }, Eu.prototype.unmount = Fd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Xg(e.current, 2, null, e, null, null), au(), n[Ha] = null;
    }
  };
  function Eu(e) {
    this._internalRoot = e;
  }
  Eu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = _h();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Xr.length && n !== 0 && n < Xr[i].priority; i++) ;
      Xr.splice(i, 0, e), i === 0 && ev(e);
    }
  };
  var rv = r.version;
  if (rv !== "19.1.1")
    throw Error(
      a(
        527,
        rv,
        "19.1.1"
      )
    );
  U.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = p(n), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        nr = Cu.inject(
          F1
        ), mt = Cu;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = _m, b = bm, T = Sm, D = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (d = n.onUncaughtError), n.onCaughtError !== void 0 && (b = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (D = n.unstable_transitionCallbacks)), n = Yg(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      d,
      b,
      T,
      D,
      null
    ), e[Ha] = n.current, Od(e), new Fd(n);
  }, Bs.hydrateRoot = function(e, n, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", b = _m, T = bm, D = Sm, H = null, Q = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (b = i.onUncaughtError), i.onCaughtError !== void 0 && (T = i.onCaughtError), i.onRecoverableError !== void 0 && (D = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (H = i.unstable_transitionCallbacks), i.formState !== void 0 && (Q = i.formState)), n = Yg(
      e,
      1,
      !0,
      n,
      i ?? null,
      o,
      d,
      b,
      T,
      D,
      H,
      Q
    ), n.context = Fg(null), i = n.current, o = vn(), o = Bl(o), d = Rr(o), d.callback = null, jr(i, d, o), i = o, n.current.lanes = i, Hi(n, i), Kn(n), e[Ha] = n.current, Od(e), new Eu(n);
  }, Bs.version = "19.1.1", Bs;
}
var yv;
function M2() {
  if (yv) return Jd.exports;
  yv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Jd.exports = O2(), Jd.exports;
}
var R2 = M2();
const _v = /* @__PURE__ */ Qf(R2);
var j2 = Object.defineProperty, D2 = (t, r, s) => r in t ? j2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, bv = (t, r, s) => D2(t, typeof r != "symbol" ? r + "" : r, s);
class dy {
  constructor(r, s) {
    bv(this, "settingsKey"), bv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: s = "recursive" } = r, a = this.defaultSettings.version, u = this.defaultSettings.formatVersion, l = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: a ?? ""
      },
      formatVersion: {
        changed: !1,
        new: u ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!l)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const m = {
      ...f,
      oldSettings: structuredClone(l),
      version: {
        changed: !1,
        old: l.version,
        new: l.version
      },
      formatVersion: {
        changed: !1,
        old: l.formatVersion,
        new: l.formatVersion
      }
    };
    if (s === "recursive") {
      let p = function(v, g) {
        let E = !1;
        for (const _ of Object.keys(g))
          v[_] === void 0 ? (v[_] = g[_], E = !0) : typeof g[_] == "object" && g[_] !== null && (v[_] = v[_] || {}, p(v[_], g[_]) && (E = !0));
        return E;
      };
      a && l.version !== a && (m.version.changed = !0, m.version.new = a, l.version = a), u && u !== "*" && l.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, l.formatVersion = u), (p(l, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !l.version && (l.version = a, m.version.changed = !0, m.version.new = a), u && !l.formatVersion && (l.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(l), v = l.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((_) => _.from === v);
          if (E && E.to > v)
            p = await E.action(p), v = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const _ of s)
              if (_.from === "*" && _.to > v && v !== _.to) {
                p = await _.action(p), v = _.to, p.formatVersion = _.to, g = !0;
                break;
              }
        } while (g);
        if (v !== l.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = v;
          const E = this.defaultSettings.version;
          E && (p.version = E);
        }
        if (m.formatVersion.changed) {
          for (const E of Object.keys(l))
            delete l[E];
          Object.assign(l, p), this.saveSettings();
        }
      } catch (g) {
        throw console.error("Failed to apply version changes:", g), new Error(`Version migration failed: ${g instanceof Error ? g.message : g}`, {
          cause: g
        });
      }
    }
    return m.newSettings = l, m;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, s) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = s, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Cr(t) {
  return Array.isArray ? Array.isArray(t) : py(t) === "[object Array]";
}
function z2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function L2(t) {
  return t == null ? "" : z2(t);
}
function Jn(t) {
  return typeof t == "string";
}
function fy(t) {
  return typeof t == "number";
}
function P2(t) {
  return t === !0 || t === !1 || I2(t) && py(t) == "[object Boolean]";
}
function hy(t) {
  return typeof t == "object";
}
function I2(t) {
  return hy(t) && t !== null;
}
function wn(t) {
  return t != null;
}
function nf(t) {
  return !t.trim().length;
}
function py(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const B2 = "Incorrect 'index' type", U2 = (t) => `Invalid value for key ${t}`, H2 = (t) => `Pattern length exceeds max of ${t}.`, q2 = (t) => `Missing ${t} property in key`, Z2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Sv = Object.prototype.hasOwnProperty;
class G2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = my(a);
      this._keys.push(u), this._keyMap[u.id] = u, s += u.weight;
    }), this._keys.forEach((a) => {
      a.weight /= s;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function my(t) {
  let r = null, s = null, a = null, u = 1, l = null;
  if (Jn(t) || Cr(t))
    a = t, r = wv(t), s = xf(t);
  else {
    if (!Sv.call(t, "name"))
      throw new Error(q2("name"));
    const f = t.name;
    if (a = f, Sv.call(t, "weight") && (u = t.weight, u <= 0))
      throw new Error(Z2(f));
    r = wv(f), s = xf(f), l = t.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: l };
}
function wv(t) {
  return Cr(t) ? t : t.split(".");
}
function xf(t) {
  return Cr(t) ? t.join(".") : t;
}
function V2(t, r) {
  let s = [], a = !1;
  const u = (l, f, m) => {
    if (wn(l))
      if (!f[m])
        s.push(l);
      else {
        let p = f[m];
        const v = l[p];
        if (!wn(v))
          return;
        if (m === f.length - 1 && (Jn(v) || fy(v) || P2(v)))
          s.push(L2(v));
        else if (Cr(v)) {
          a = !0;
          for (let g = 0, E = v.length; g < E; g += 1)
            u(v[g], f, m + 1);
        } else f.length && u(v, f, m + 1);
      }
  };
  return u(t, Jn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const $2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Y2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, r) => t.score === r.score ? t.idx < r.idx ? -1 : 1 : t.score < r.score ? -1 : 1
}, F2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, X2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: V2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Ne = {
  ...Y2,
  ...$2,
  ...F2,
  ...X2
};
const Q2 = /[^ ]+/g;
function K2(t = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const l = u.match(Q2).length;
      if (s.has(l))
        return s.get(l);
      const f = 1 / Math.pow(l, 0.5 * t), m = parseFloat(Math.round(f * a) / a);
      return s.set(l, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class Jf {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: s = Ne.fieldNormWeight
  } = {}) {
    this.norm = K2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((s, a) => {
      this._keysMap[s.id] = a;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Jn(this.docs[0]) ? this.docs.forEach((r, s) => {
      this._addString(r, s);
    }) : this.docs.forEach((r, s) => {
      this._addObject(r, s);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const s = this.size();
    Jn(r) ? this._addString(r, s) : this._addObject(r, s);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let s = r, a = this.size(); s < a; s += 1)
      this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(r, s) {
    return r[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, s) {
    if (!wn(r) || nf(r))
      return;
    let a = {
      v: r,
      i: s,
      n: this.norm.get(r)
    };
    this.records.push(a);
  }
  _addObject(r, s) {
    let a = { i: s, $: {} };
    this.keys.forEach((u, l) => {
      let f = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (wn(f)) {
        if (Cr(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: v, value: g } = p.pop();
            if (wn(g))
              if (Jn(g) && !nf(g)) {
                let E = {
                  v: g,
                  i: v,
                  n: this.norm.get(g)
                };
                m.push(E);
              } else Cr(g) && g.forEach((E, _) => {
                p.push({
                  nestedArrIndex: _,
                  value: E
                });
              });
          }
          a.$[l] = m;
        } else if (Jn(f) && !nf(f)) {
          let m = {
            v: f,
            n: this.norm.get(f)
          };
          a.$[l] = m;
        }
      }
    }), this.records.push(a);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function gy(t, r, { getFn: s = Ne.getFn, fieldNormWeight: a = Ne.fieldNormWeight } = {}) {
  const u = new Jf({ getFn: s, fieldNormWeight: a });
  return u.setKeys(t.map(my)), u.setSources(r), u.create(), u;
}
function J2(t, { getFn: r = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const { keys: a, records: u } = t, l = new Jf({ getFn: r, fieldNormWeight: s });
  return l.setKeys(a), l.setIndexRecords(u), l;
}
function ku(t, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: a = 0,
  distance: u = Ne.distance,
  ignoreLocation: l = Ne.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (l)
    return f;
  const m = Math.abs(a - s);
  return u ? f + m / u : m ? 1 : f;
}
function W2(t = [], r = Ne.minMatchCharLength) {
  let s = [], a = -1, u = -1, l = 0;
  for (let f = t.length; l < f; l += 1) {
    let m = t[l];
    m && a === -1 ? a = l : !m && a !== -1 && (u = l - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return t[l - 1] && l - a >= r && s.push([a, l - 1]), s;
}
const ja = 32;
function e3(t, r, s, {
  location: a = Ne.location,
  distance: u = Ne.distance,
  threshold: l = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: m = Ne.minMatchCharLength,
  includeMatches: p = Ne.includeMatches,
  ignoreLocation: v = Ne.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(H2(ja));
  const g = r.length, E = t.length, _ = Math.max(0, Math.min(a, E));
  let S = l, h = _;
  const C = m > 1 || p, x = C ? Array(E) : [];
  let j;
  for (; (j = t.indexOf(r, h)) > -1; ) {
    let k = ku(r, {
      currentLocation: j,
      expectedLocation: _,
      distance: u,
      ignoreLocation: v
    });
    if (S = Math.min(k, S), h = j + g, C) {
      let M = 0;
      for (; M < g; )
        x[j + M] = 1, M += 1;
    }
  }
  h = -1;
  let N = [], I = 1, c = g + E;
  const y = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let M = 0, z = c;
    for (; M < z; )
      ku(r, {
        errors: k,
        currentLocation: _ + z,
        expectedLocation: _,
        distance: u,
        ignoreLocation: v
      }) <= S ? M = z : c = z, z = Math.floor((c - M) / 2 + M);
    c = z;
    let R = Math.max(1, _ - z + 1), L = f ? E : Math.min(_ + z, E) + g, q = Array(L + 2);
    q[L + 1] = (1 << k) - 1;
    for (let $ = L; $ >= R; $ -= 1) {
      let W = $ - 1, O = s[t.charAt(W)];
      if (C && (x[W] = +!!O), q[$] = (q[$ + 1] << 1 | 1) & O, k && (q[$] |= (N[$ + 1] | N[$]) << 1 | 1 | N[$ + 1]), q[$] & y && (I = ku(r, {
        errors: k,
        currentLocation: W,
        expectedLocation: _,
        distance: u,
        ignoreLocation: v
      }), I <= S)) {
        if (S = I, h = W, h <= _)
          break;
        R = Math.max(1, 2 * _ - h);
      }
    }
    if (ku(r, {
      errors: k + 1,
      currentLocation: _,
      expectedLocation: _,
      distance: u,
      ignoreLocation: v
    }) > S)
      break;
    N = q;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, I)
  };
  if (C) {
    const k = W2(x, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function t3(t) {
  let r = {};
  for (let s = 0, a = t.length; s < a; s += 1) {
    const u = t.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const _l = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class vy {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: l = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: v = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: l,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: v,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = v ? _l(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: t3(S),
        startIndex: h
      });
    }, _ = this.pattern.length;
    if (_ > ja) {
      let S = 0;
      const h = _ % ja, C = _ - h;
      for (; S < C; )
        E(this.pattern.substr(S, ja), S), S += ja;
      if (h) {
        const x = _ - ja;
        E(this.pattern.substr(x), x);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: a, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = a ? _l(r) : r, this.pattern === r) {
      let C = {
        isMatch: !0,
        score: 0
      };
      return u && (C.indices = [[0, r.length - 1]]), C;
    }
    const {
      location: l,
      distance: f,
      threshold: m,
      findAllMatches: p,
      minMatchCharLength: v,
      ignoreLocation: g
    } = this.options;
    let E = [], _ = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: x, startIndex: j }) => {
      const { isMatch: N, score: I, indices: c } = e3(r, C, x, {
        location: l + j,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: v,
        includeMatches: u,
        ignoreLocation: g
      });
      N && (S = !0), _ += I, N && c && (E = [...E, ...c]);
    });
    let h = {
      isMatch: S,
      score: S ? _ / this.chunks.length : 1
    };
    return S && u && (h.indices = E), h;
  }
}
class aa {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Ev(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Ev(r, this.singleRegex);
  }
  search() {
  }
}
function Ev(t, r) {
  const s = t.match(r);
  return s ? s[1] : null;
}
class n3 extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const s = r === this.pattern;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class r3 extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const a = r.indexOf(this.pattern) === -1;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class a3 extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const s = r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class i3 extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const s = !r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class s3 extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const s = r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class o3 extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const s = !r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class yy extends aa {
  constructor(r, {
    location: s = Ne.location,
    threshold: a = Ne.threshold,
    distance: u = Ne.distance,
    includeMatches: l = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: m = Ne.minMatchCharLength,
    isCaseSensitive: p = Ne.isCaseSensitive,
    ignoreDiacritics: v = Ne.ignoreDiacritics,
    ignoreLocation: g = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new vy(r, {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: l,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: v,
      ignoreLocation: g
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class _y extends aa {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let s = 0, a;
    const u = [], l = this.pattern.length;
    for (; (a = r.indexOf(this.pattern, s)) > -1; )
      s = a + l, u.push([a, s - 1]);
    const f = !!u.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: u
    };
  }
}
const Tf = [
  n3,
  _y,
  a3,
  i3,
  o3,
  s3,
  r3,
  yy
], Cv = Tf.length, u3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, l3 = "|";
function c3(t, r = {}) {
  return t.split(l3).map((s) => {
    let a = s.trim().split(u3).filter((l) => l && !!l.trim()), u = [];
    for (let l = 0, f = a.length; l < f; l += 1) {
      const m = a[l];
      let p = !1, v = -1;
      for (; !p && ++v < Cv; ) {
        const g = Tf[v];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (v = -1; ++v < Cv; ) {
          const g = Tf[v];
          let E = g.isSingleMatch(m);
          if (E) {
            u.push(new g(E, r));
            break;
          }
        }
    }
    return u;
  });
}
const d3 = /* @__PURE__ */ new Set([yy.type, _y.type]);
class f3 {
  constructor(r, {
    isCaseSensitive: s = Ne.isCaseSensitive,
    ignoreDiacritics: a = Ne.ignoreDiacritics,
    includeMatches: u = Ne.includeMatches,
    minMatchCharLength: l = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: m = Ne.findAllMatches,
    location: p = Ne.location,
    threshold: v = Ne.threshold,
    distance: g = Ne.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: a,
      includeMatches: u,
      minMatchCharLength: l,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: v,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = a ? _l(r) : r, this.pattern = r, this.query = c3(this.pattern, this.options);
  }
  static condition(r, s) {
    return s.useExtendedSearch;
  }
  searchIn(r) {
    const s = this.query;
    if (!s)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: a, isCaseSensitive: u, ignoreDiacritics: l } = this.options;
    r = u ? r : r.toLowerCase(), r = l ? _l(r) : r;
    let f = 0, m = [], p = 0;
    for (let v = 0, g = s.length; v < g; v += 1) {
      const E = s[v];
      m.length = 0, f = 0;
      for (let _ = 0, S = E.length; _ < S; _ += 1) {
        const h = E[_], { isMatch: C, indices: x, score: j } = h.search(r);
        if (C) {
          if (f += 1, p += j, a) {
            const N = h.constructor.type;
            d3.has(N) ? m = [...m, ...x] : m.push(x);
          }
        } else {
          p = 0, f = 0, m.length = 0;
          break;
        }
      }
      if (f) {
        let _ = {
          isMatch: !0,
          score: p / f
        };
        return a && (_.indices = m), _;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Nf = [];
function h3(...t) {
  Nf.push(...t);
}
function Of(t, r) {
  for (let s = 0, a = Nf.length; s < a; s += 1) {
    let u = Nf[s];
    if (u.condition(t, r))
      return new u(t, r);
  }
  return new vy(t, r);
}
const bl = {
  AND: "$and",
  OR: "$or"
}, Mf = {
  PATH: "$path",
  PATTERN: "$val"
}, Rf = (t) => !!(t[bl.AND] || t[bl.OR]), p3 = (t) => !!t[Mf.PATH], m3 = (t) => !Cr(t) && hy(t) && !Rf(t), kv = (t) => ({
  [bl.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function by(t, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let l = Object.keys(u);
    const f = p3(u);
    if (!f && l.length > 1 && !Rf(u))
      return a(kv(u));
    if (m3(u)) {
      const p = f ? u[Mf.PATH] : l[0], v = f ? u[Mf.PATTERN] : u[p];
      if (!Jn(v))
        throw new Error(U2(p));
      const g = {
        keyId: xf(p),
        pattern: v
      };
      return s && (g.searcher = Of(v, r)), g;
    }
    let m = {
      children: [],
      operator: l[0]
    };
    return l.forEach((p) => {
      const v = u[p];
      Cr(v) && v.forEach((g) => {
        m.children.push(a(g));
      });
    }), m;
  };
  return Rf(t) || (t = kv(t)), a(t);
}
function g3(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  t.forEach((s) => {
    let a = 1;
    s.matches.forEach(({ key: u, norm: l, score: f }) => {
      const m = u ? u.weight : null;
      a *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : l)
      );
    }), s.score = a;
  });
}
function v3(t, r) {
  const s = t.matches;
  r.matches = [], wn(s) && s.forEach((a) => {
    if (!wn(a.indices) || !a.indices.length)
      return;
    const { indices: u, value: l } = a;
    let f = {
      indices: u,
      value: l
    };
    a.key && (f.key = a.key.src), a.idx > -1 && (f.refIndex = a.idx), r.matches.push(f);
  });
}
function y3(t, r) {
  r.score = t.score;
}
function _3(t, r, {
  includeMatches: s = Ne.includeMatches,
  includeScore: a = Ne.includeScore
} = {}) {
  const u = [];
  return s && u.push(v3), a && u.push(y3), t.map((l) => {
    const { idx: f } = l, m = {
      item: r[f],
      refIndex: f
    };
    return u.length && u.forEach((p) => {
      p(l, m);
    }), m;
  });
}
class Ui {
  constructor(r, s = {}, a) {
    this.options = { ...Ne, ...s }, this.options.useExtendedSearch, this._keyStore = new G2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof Jf))
      throw new Error(B2);
    this._myIndex = s || gy(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    wn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let a = 0, u = this._docs.length; a < u; a += 1) {
      const l = this._docs[a];
      r(l, a) && (this.removeAt(a), a -= 1, u -= 1, s.push(l));
    }
    return s;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: s = -1 } = {}) {
    const {
      includeMatches: a,
      includeScore: u,
      shouldSort: l,
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Jn(r) ? Jn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return g3(p, { ignoreFieldNorm: m }), l && p.sort(f), fy(s) && s > -1 && (p = p.slice(0, s)), _3(p, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = Of(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: l, i: f, n: m }) => {
      if (!wn(l))
        return;
      const { isMatch: p, score: v, indices: g } = s.searchIn(l);
      p && u.push({
        item: l,
        idx: f,
        matches: [{ score: v, value: l, norm: m, indices: g }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = by(r, this.options), a = (m, p, v) => {
      if (!m.children) {
        const { keyId: E, searcher: _ } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: _
        });
        return S && S.length ? [
          {
            idx: v,
            item: p,
            matches: S
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, _ = m.children.length; E < _; E += 1) {
        const S = m.children[E], h = a(S, p, v);
        if (h.length)
          g.push(...h);
        else if (m.operator === bl.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, l = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (wn(m)) {
        let v = a(s, m, p);
        v.length && (l[p] || (l[p] = { idx: p, item: m, matches: [] }, f.push(l[p])), v.forEach(({ matches: g }) => {
          l[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = Of(r, this.options), { keys: a, records: u } = this._myIndex, l = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!wn(f))
        return;
      let p = [];
      a.forEach((v, g) => {
        p.push(
          ...this._findMatches({
            key: v,
            value: f[g],
            searcher: s
          })
        );
      }), p.length && l.push({
        idx: m,
        item: f,
        matches: p
      });
    }), l;
  }
  _findMatches({ key: r, value: s, searcher: a }) {
    if (!wn(s))
      return [];
    let u = [];
    if (Cr(s))
      s.forEach(({ v: l, i: f, n: m }) => {
        if (!wn(l))
          return;
        const { isMatch: p, score: v, indices: g } = a.searchIn(l);
        p && u.push({
          score: v,
          key: r,
          value: l,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: l, n: f } = s, { isMatch: m, score: p, indices: v } = a.searchIn(l);
      m && u.push({ score: p, key: r, value: l, norm: f, indices: v });
    }
    return u;
  }
}
Ui.version = "7.1.0";
Ui.createIndex = gy;
Ui.parseIndex = J2;
Ui.config = Ne;
Ui.parseQuery = by;
h3(f3);
var b3 = Object.defineProperty, S3 = (t, r, s) => r in t ? b3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, w3 = (t, r, s) => S3(t, r + "", s);
let E3 = class {
  constructor() {
    w3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var s;
    const a = this.requestMap.get(r);
    if (a) {
      if (a.abortController)
        try {
          a.abortController.abort();
        } catch {
        }
      (s = a.options) != null && s.onFinish && await a.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, s) {
    var a;
    const u = SillyTavern.getContext(), l = u.uuidv4(), f = ((a = r?.custom) == null ? void 0 : a.stream) ?? !1;
    if (this.requestMap.set(l, {
      abortController: s?.abortController,
      isStream: f,
      options: s
    }), f)
      try {
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        s != null && s.onStart && await s.onStart(l);
        let p;
        for await (const v of m())
          p = v, s != null && s.onEntry && await s.onEntry(l, v);
        s != null && s.onFinish && await s.onFinish(l, p);
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(l, void 0, m);
      } finally {
        this.requestMap.delete(l);
      }
    else
      try {
        s != null && s.onStart && await s.onStart(l);
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(l) && (s != null && s.onEntry && await s.onEntry(l, m), s != null && s.onFinish && await s.onFinish(l, m));
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(l, void 0, m);
      } finally {
        this.requestMap.delete(l);
      }
    return l;
  }
  getActiveRequest(r) {
    var s;
    return (s = this.requestMap.get(r)) == null ? void 0 : s.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [s, a] of this.requestMap)
      r.set(s, a.abortController);
    return r;
  }
};
async function C3(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function be(t, r, { escapeHtml: s = !0 } = {}) {
  await C3("echo", { severity: t, escapeHtml: (!!s).toString() }, r);
}
function rf(t) {
  return W1(t);
}
function Av(t, r) {
  return K1(t, r);
}
function Au(t, r, s) {
  return J1(t, r, s);
}
function k3(t, r, s) {
  return l2(t, r, s);
}
function A3(t, r) {
  return c2(t, r);
}
function x3(t, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return Q1(t, { customStoryString: r, customInstructSettings: s });
}
function Ta(t) {
  return g2(t);
}
function T3() {
  return {
    prompt: Ls[Ps.prompt],
    interval: Ls[Ps.interval],
    position: Ls[Ps.position],
    depth: Ls[Ps.depth],
    role: Ls[Ps.role]
  };
}
function N3(t, r) {
  return y2(t, r);
}
function O3({
  name2: t,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
  worldInfoBefore: u,
  worldInfoAfter: l,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: v,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: _,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: x
}, j) {
  return v2(
    {
      name2: t,
      charDescription: r,
      charPersonality: s,
      Scenario: a,
      worldInfoBefore: u,
      worldInfoAfter: l,
      bias: f,
      type: m,
      quietPrompt: p,
      quietImage: v,
      cyclePrompt: E,
      systemPromptOverride: _,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: x
    },
    j
  );
}
function M3(t) {
  return f2(t);
}
function R3(t) {
  return h2(t);
}
function j3(t, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: l,
  depth: f
}) {
  return b2(t, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: l, depth: f });
}
function D3(t, r, { characterOverride: s = null } = {}) {
  return _2(t, r, { characterOverride: s });
}
async function z3(t, r) {
  return await d2(t, r);
}
function xv(t, {
  wiFormat: r
} = {}) {
  return p2(t, { wiFormat: r });
}
function Us(t) {
  return m2(t);
}
function Sy(t, {
  manualAvatarKey: r
} = {}) {
  return S2(t, { manualAvatarKey: r });
}
function Wf(t, r) {
  return n2(t, r);
}
class L3 {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const s = Math.ceil(r.length / 4);
    return new Array(s).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var P3 = Object.defineProperty, I3 = (t, r, s) => r in t ? P3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, xu = (t, r, s) => I3(t, typeof r != "symbol" ? r + "" : r, s);
class B3 {
  constructor(r) {
    xu(this, "messages", []), xu(this, "tokenizer"), xu(this, "maxContext"), xu(this, "currentTokenCount", 0), this.tokenizer = new L3(), this.maxContext = r;
  }
  getTokenCount(r) {
    var s, a;
    return r.content ? ((a = (s = r.source) == null ? void 0 : s.extra) == null ? void 0 : a.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += s, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += s, !0);
  }
  addMany(r) {
    const s = r.filter((m) => m.content), a = s.map((m) => this.getTokenCount(m)), u = a.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let l = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], v = a[m];
      if (this.currentTokenCount + l + v <= this.maxContext)
        f.unshift(p), l += v;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += l), f.length === s.length;
  }
  insert(r, s) {
    if (!s.content) return !0;
    const a = this.getTokenCount(s);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.splice(r, 0, s), this.currentTokenCount += a, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function wy(t, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: l,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: v,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var _, S, h, C, x, j, N, I, c, y, w, k, M, z;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const R = SillyTavern.getContext();
  let { description: L, personality: q, persona: F, scenario: $, mesExamples: W, system: O, jailbreak: U } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : R.getCharacterCardFields({
    chid: r
  });
  const J = t === "textgenerationwebui" ? (_ = R.getPresetManager("instruct")) == null ? void 0 : _.getCompletionPresetByName(a) : void 0, ae = !!(J != null && J.enabled);
  let B = Av(W, ae);
  function Y() {
    var ve, ye;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return rf();
    if (typeof f == "number")
      return f;
    let Ge;
    if (t === "textgenerationwebui") {
      const qe = (ve = R.getPresetManager("textgenerationwebui")) == null ? void 0 : ve.getCompletionPresetByName(s);
      Ge = qe?.max_length;
    } else {
      const qe = (ye = R.getPresetManager("openai")) == null ? void 0 : ye.getCompletionPresetByName(s);
      Ge = qe?.openai_max_context;
    }
    return typeof Ge == "number" ? Ge : rf();
  }
  let ce = [];
  const G = Y();
  if (G <= 0)
    return { result: [], warnings: ce };
  const P = new B3(G), te = R.ToolManager.isToolCallingSupported(), K = E?.start ?? 0, se = E != null && E.end ? E.end + 1 : void 0;
  let re = K === -1 && se === 0 ? [] : R.chat.slice(K, se).filter((ve) => {
    var ye;
    return !ve.is_system || te && Array.isArray((ye = ve.extra) == null ? void 0 : ye.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ve, ye) => {
      var Ge, qe;
      let it = ve.mes, xr = ve.is_user ? sv.USER_INPUT : sv.AI_OUTPUT, nr = { isPrompt: !0, depth: re.length - ye - 1 }, mt = j3(it, xr, nr);
      return mt = await z3(ve, mt), (Ge = ve?.extra) != null && Ge.append_title && (qe = ve?.extra) != null && qe.title && (mt = `${mt}

${ve.extra.title}`), {
        ...ve,
        mes: mt,
        index: ye
      };
    })
  );
  const pe = re.map((ve) => r2 ? `${ve.name}: ${ve.mes}` : ve.mes).reverse(), { worldInfoString: Re, worldInfoBefore: we, worldInfoAfter: me, worldInfoExamples: he, worldInfoDepth: Ee, anBefore: Ue, anAfter: et } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await R.getWorldInfoPrompt(pe, G, !1);
  for (const ve of he) {
    const ye = ve.content;
    if (ye.length === 0)
      continue;
    const Ge = Au(ye, Aa, Kr), qe = Av(Ge, ae);
    ve.position === a2.before ? B.unshift(...qe) : B.push(...qe);
  }
  function Qe() {
    const ve = [];
    for (let ye = re.length - 1; ye >= 0; ye--) {
      const Ge = re[ye], qe = Ge.name === "System" && !Ge.is_user ? "system" : Ge.is_user ? "user" : "assistant";
      ve.unshift({
        role: qe,
        content: m && qe != "system" ? `${Ge.name}: ${Ge.mes}` : Ge.mes,
        source: Ge
      });
    }
    P.addMany(ve);
  }
  if (t === "textgenerationwebui") {
    const ve = [...B];
    B && (B = k3(B, Aa, Kr));
    const ye = (S = R.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(l);
    ye && (O = R.powerUserSettings.prefer_character_prompt && O ? O : Au(ye.content, Aa, Kr), O = ae ? A3(
      R.substituteParams(O, Aa, Kr, ye.content),
      J
    ) : O);
    const Ge = {
      description: L,
      personality: q,
      persona: R.powerUserSettings.persona_description_position == av.IN_PROMPT ? F : "",
      scenario: $,
      system: O,
      char: Kr,
      user: Aa,
      wiBefore: we,
      wiAfter: me,
      loreBefore: we,
      loreAfter: me,
      mesExamples: B.join(""),
      mesExamplesRaw: ve.join("")
    }, qe = (h = R.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let it = x3(Ge, {
      customInstructSettings: J,
      customStoryString: qe?.story_string
    });
    it && P.add({ role: "system", content: it, ignoreInstruct: !0 }), Qe();
  } else {
    let ve = function($t) {
      const Jt = En.find((Ua) => Ua.identifier === $t);
      if (Jt)
        return Jt;
      const po = it.prompts.find((Ua) => Ua.identifier === $t);
      if (po)
        return po;
    }, ye = M3(re), Ge = R3(B);
    async function qe() {
      let [$t, Jt] = await O3(
        {
          name2: Kr,
          charDescription: L,
          charPersonality: q,
          Scenario: $,
          worldInfoBefore: we,
          worldInfoAfter: me,
          extensionPrompts: R.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: O,
          jailbreakPromptOverride: U,
          personaDescription: F,
          messages: ye,
          messageExamples: Ge
        },
        !1
      );
      P.addMany($t);
    }
    if (!s)
      return ce.push("No preset name provided. Using default preset."), await qe(), { result: P.getMessages(), warnings: ce };
    const it = (C = R.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!it)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ce.push(`Preset not found: ${s}. Using current preset.`), qe(), { result: P.getMessages(), warnings: ce };
    let xr = (x = it.prompt_order) == null ? void 0 : x.find(($t) => $t.character_id === un);
    if (!xr && it.prompt_order && it.prompt_order.length > 0 && (xr = it.prompt_order[it.prompt_order.length - 1]), !xr)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ce.push(`No prompt order found for preset: ${s}. Using current preset.`), qe(), { result: P.getMessages(), warnings: ce };
    const nr = $ && it.scenario_format ? R.substituteParams(it.scenario_format) : "", mt = q && it.personality_format ? R.substituteParams(it.personality_format) : "", Vn = R.substituteParams(it.group_nudge_prompt), Vt = it.impersonation_prompt ? R.substituteParams(it.impersonation_prompt) : "", En = [];
    g || En.push(
      {
        role: "system",
        content: xv(we, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: xv(me, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || En.push(
      { role: "system", content: L, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: nr, identifier: "scenario" }
    ), En.push(
      { role: "system", content: Vt, identifier: "impersonate" },
      { role: "system", content: Vn, identifier: "groupNudge" }
    );
    const oa = R.extensionPrompts["1_memory"];
    oa && oa.value && En.push({
      role: Ta(oa.role),
      content: oa.value,
      identifier: "summary",
      position: Us(oa.position)
    });
    const ua = R.extensionPrompts["2_floating_prompt"];
    !v && ua && ua.value && En.push({
      role: Ta(ua.role),
      content: ua.value,
      identifier: "authorsNote",
      position: Us(ua.position)
    });
    const rr = R.extensionPrompts["3_vectors"];
    rr && rr.value && En.push({
      role: "system",
      content: rr.value,
      identifier: "vectorsMemory",
      position: Us(rr.position)
    });
    const $n = R.extensionPrompts["4_vectors_data_bank"];
    $n && $n.value && En.push({
      role: Ta($n.role),
      content: $n.value,
      identifier: "vectorsDataBank",
      position: Us($n.position)
    });
    const Cn = R.extensionPrompts.chromadb;
    Cn && Cn.value && En.push({
      role: "system",
      content: Cn.value,
      identifier: "smartContext",
      position: Us(Cn.position)
    }), !p && R.powerUserSettings.persona_description && R.powerUserSettings.persona_description_position === av.IN_PROMPT && En.push({
      role: "system",
      content: R.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), xr.order.forEach(($t) => {
      if (!$t.enabled)
        return;
      const Jt = ve($t.identifier);
      if (Jt && Jt.content) {
        P.add({
          role: Jt.role ?? "system",
          content: R.substituteParams(Jt.content)
        });
        return;
      }
      $t.identifier === "chatHistory" && Qe();
    });
  }
  const Ln = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ve in R.extensionPrompts)
    if (Object.hasOwn(R.extensionPrompts, ve)) {
      const ye = R.extensionPrompts[ve];
      if (Ln.includes(ve) || !R.extensionPrompts[ve].value || ![xa.BEFORE_PROMPT, xa.IN_PROMPT].includes(ye.position) || typeof ye.filter == "function" && !await ye.filter()) continue;
      const Ge = {
        role: Ta(ye.role) ?? "system",
        content: ye.value
      };
      if (ye.position === xa.BEFORE_PROMPT)
        P.insert(ye.depth, Ge);
      else if (ye.position === xa.IN_PROMPT) {
        const qe = P.getMessages();
        P.insert(qe.length - ye.depth, Ge);
      }
    }
  for (const ve of Ee) {
    const ye = P.getMessages();
    P.insert(ye.length - ve.depth, {
      role: Ta(ve.role),
      content: ve.entries.join(`
`)
    });
  }
  if (!p) {
    const ve = N3(Kt, Number(un));
    if (Kt && Array.isArray(ve) && ve.length > 0)
      ve.filter((ye) => ye.text).forEach((ye, Ge) => {
        const qe = P.getMessages();
        P.insert(qe.length - ye.depth, { role: ye.role, content: ye.text });
      });
    else {
      const ye = Au(
        (y = (c = (I = (N = (j = R.characters[un]) == null ? void 0 : j.data) == null ? void 0 : N.extensions) == null ? void 0 : I.depth_prompt) == null ? void 0 : c.prompt) == null ? void 0 : y.trim(),
        Aa,
        Kr
      ) || "";
      if (ye) {
        const Ge = t2, qe = ((z = (M = (k = (w = R.characters[un]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : M.depth_prompt) == null ? void 0 : z.role) ?? e2, it = P.getMessages();
        P.insert(it.length - Ge, {
          role: Ta(qe),
          content: ye
        });
      }
    }
  }
  let bt = -1;
  if (!v) {
    const ve = T3();
    if (ve.prompt) {
      ve.prompt = Au(ve.prompt, Aa, Kr);
      const ye = { role: Ta(ve.role), content: ve.prompt };
      switch (ve.position) {
        case xa.IN_PROMPT:
          P.insert(1, ye), bt = 1;
          break;
        case xa.IN_CHAT:
          bt = P.getMessages().length - ve.depth, P.insert(bt, ye);
          break;
        case xa.BEFORE_PROMPT:
          P.addFront(ye), bt = 0;
          break;
      }
    }
  }
  return bt >= 0 && (Ue.length > 0 && (P.insert(bt, { role: "system", content: Ue.join(`
`) }), bt++), et.length > 0 && P.insert(bt + 1, { role: "system", content: et.join(`
`) })), { result: P.getMessages(), warnings: ce };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Tv(t, r) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), s.push.apply(s, a);
  }
  return s;
}
function tr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tv(Object(s), !0).forEach(function(a) {
      U3(t, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : Tv(Object(s)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return t;
}
function dl(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dl = function(r) {
    return typeof r;
  } : dl = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, dl(t);
}
function U3(t, r, s) {
  return r in t ? Object.defineProperty(t, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = s, t;
}
function kr() {
  return kr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
    }
    return t;
  }, kr.apply(this, arguments);
}
function H3(t, r) {
  if (t == null) return {};
  var s = {}, a = Object.keys(t), u, l;
  for (l = 0; l < a.length; l++)
    u = a[l], !(r.indexOf(u) >= 0) && (s[u] = t[u]);
  return s;
}
function q3(t, r) {
  if (t == null) return {};
  var s = H3(t, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      a = l[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (s[a] = t[a]);
  }
  return s;
}
var Z3 = "1.15.6";
function wr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Ar = wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), uo = wr(/Edge/i), Nv = wr(/firefox/i), eo = wr(/safari/i) && !wr(/chrome/i) && !wr(/android/i), eh = wr(/iP(ad|od|hone)/i), Ey = wr(/chrome/i) && wr(/android/i), Cy = {
  capture: !1,
  passive: !1
};
function He(t, r, s) {
  t.addEventListener(r, s, !Ar && Cy);
}
function Be(t, r, s) {
  t.removeEventListener(r, s, !Ar && Cy);
}
function Sl(t, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(r);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(r);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function ky(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Zn(t, r, s, a) {
  if (t) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === s && Sl(t, r) : Sl(t, r)) || a && t === s)
        return t;
      if (t === s) break;
    } while (t = ky(t));
  }
  return null;
}
var Ov = /\s+/g;
function bn(t, r, s) {
  if (t && r)
    if (t.classList)
      t.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + t.className + " ").replace(Ov, " ").replace(" " + r + " ", " ");
      t.className = (a + (s ? " " + r : "")).replace(Ov, " ");
    }
}
function xe(t, r, s) {
  var a = t && t.style;
  if (a) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (s = t.currentStyle), r === void 0 ? s : s[r];
    !(r in a) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), a[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function Pi(t, r) {
  var s = "";
  if (typeof t == "string")
    s = t;
  else
    do {
      var a = xe(t, "transform");
      a && a !== "none" && (s = a + " " + s);
    } while (!r && (t = t.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function Ay(t, r, s) {
  if (t) {
    var a = t.getElementsByTagName(r), u = 0, l = a.length;
    if (s)
      for (; u < l; u++)
        s(a[u], u);
    return a;
  }
  return [];
}
function Wn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Ct(t, r, s, a, u) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var l, f, m, p, v, g, E;
    if (t !== window && t.parentNode && t !== Wn() ? (l = t.getBoundingClientRect(), f = l.top, m = l.left, p = l.bottom, v = l.right, g = l.height, E = l.width) : (f = 0, m = 0, p = window.innerHeight, v = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && t !== window && (u = u || t.parentNode, !Ar))
      do
        if (u && u.getBoundingClientRect && (xe(u, "transform") !== "none" || s && xe(u, "position") !== "static")) {
          var _ = u.getBoundingClientRect();
          f -= _.top + parseInt(xe(u, "border-top-width")), m -= _.left + parseInt(xe(u, "border-left-width")), p = f + l.height, v = m + l.width;
          break;
        }
      while (u = u.parentNode);
    if (a && t !== window) {
      var S = Pi(u || t), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, g /= C, p = f + g, v = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: v,
      width: E,
      height: g
    };
  }
}
function Mv(t, r, s) {
  for (var a = na(t, !0), u = Ct(t)[r]; a; ) {
    var l = Ct(a)[s], f = void 0;
    if (f = u >= l, !f) return a;
    if (a === Wn()) break;
    a = na(a, !1);
  }
  return !1;
}
function Bi(t, r, s, a) {
  for (var u = 0, l = 0, f = t.children; l < f.length; ) {
    if (f[l].style.display !== "none" && f[l] !== Te.ghost && (a || f[l] !== Te.dragged) && Zn(f[l], s.draggable, t, !1)) {
      if (u === r)
        return f[l];
      u++;
    }
    l++;
  }
  return null;
}
function th(t, r) {
  for (var s = t.lastElementChild; s && (s === Te.ghost || xe(s, "display") === "none" || r && !Sl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Dn(t, r) {
  var s = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Te.clone && (!r || Sl(t, r)) && s++;
  return s;
}
function Rv(t) {
  var r = 0, s = 0, a = Wn();
  if (t)
    do {
      var u = Pi(t), l = u.a, f = u.d;
      r += t.scrollLeft * l, s += t.scrollTop * f;
    } while (t !== a && (t = t.parentNode));
  return [r, s];
}
function G3(t, r) {
  for (var s in t)
    if (t.hasOwnProperty(s)) {
      for (var a in r)
        if (r.hasOwnProperty(a) && r[a] === t[s][a]) return Number(s);
    }
  return -1;
}
function na(t, r) {
  if (!t || !t.getBoundingClientRect) return Wn();
  var s = t, a = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = xe(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return Wn();
        if (a || r) return s;
        a = !0;
      }
    }
  while (s = s.parentNode);
  return Wn();
}
function V3(t, r) {
  if (t && r)
    for (var s in r)
      r.hasOwnProperty(s) && (t[s] = r[s]);
  return t;
}
function af(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var to;
function xy(t, r) {
  return function() {
    if (!to) {
      var s = arguments, a = this;
      s.length === 1 ? t.call(a, s[0]) : t.apply(a, s), to = setTimeout(function() {
        to = void 0;
      }, r);
    }
  };
}
function $3() {
  clearTimeout(to), to = void 0;
}
function Ty(t, r, s) {
  t.scrollLeft += r, t.scrollTop += s;
}
function Ny(t) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : s ? s(t).clone(!0)[0] : t.cloneNode(!0);
}
function Oy(t, r, s) {
  var a = {};
  return Array.from(t.children).forEach(function(u) {
    var l, f, m, p;
    if (!(!Zn(u, r.draggable, t, !1) || u.animated || u === s)) {
      var v = Ct(u);
      a.left = Math.min((l = a.left) !== null && l !== void 0 ? l : 1 / 0, v.left), a.top = Math.min((f = a.top) !== null && f !== void 0 ? f : 1 / 0, v.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, v.right), a.bottom = Math.max((p = a.bottom) !== null && p !== void 0 ? p : -1 / 0, v.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var on = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Y3() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(u) {
          if (!(xe(u, "display") === "none" || u === Te.ghost)) {
            t.push({
              target: u,
              rect: Ct(u)
            });
            var l = tr({}, t[t.length - 1].rect);
            if (u.thisAnimationDuration) {
              var f = Pi(u, !0);
              f && (l.top -= f.f, l.left -= f.e);
            }
            u.fromRect = l;
          }
        });
      }
    },
    addAnimationState: function(a) {
      t.push(a);
    },
    removeAnimationState: function(a) {
      t.splice(G3(t, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof a == "function" && a();
        return;
      }
      var l = !1, f = 0;
      t.forEach(function(m) {
        var p = 0, v = m.target, g = v.fromRect, E = Ct(v), _ = v.prevFromRect, S = v.prevToRect, h = m.rect, C = Pi(v, !0);
        C && (E.top -= C.f, E.left -= C.e), v.toRect = E, v.thisAnimationDuration && af(_, E) && !af(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = X3(h, _, S, u.options)), af(E, g) || (v.prevFromRect = g, v.prevToRect = E, p || (p = u.options.animation), u.animate(v, h, E, p)), p && (l = !0, f = Math.max(f, p), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, p), v.thisAnimationDuration = p);
      }), clearTimeout(r), l ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, f) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, u, l, f) {
      if (f) {
        xe(a, "transition", ""), xe(a, "transform", "");
        var m = Pi(this.el), p = m && m.a, v = m && m.d, g = (u.left - l.left) / (p || 1), E = (u.top - l.top) / (v || 1);
        a.animatingX = !!g, a.animatingY = !!E, xe(a, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = F3(a), xe(a, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          xe(a, "transition", ""), xe(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, f);
      }
    }
  };
}
function F3(t) {
  return t.offsetWidth;
}
function X3(t, r, s, a) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var xi = [], sf = {
  initializeByDefault: !0
}, lo = {
  mount: function(r) {
    for (var s in sf)
      sf.hasOwnProperty(s) && !(s in r) && (r[s] = sf[s]);
    xi.forEach(function(a) {
      if (a.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), xi.push(r);
  },
  pluginEvent: function(r, s, a) {
    var u = this;
    this.eventCanceled = !1, a.cancel = function() {
      u.eventCanceled = !0;
    };
    var l = r + "Global";
    xi.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][l] && s[f.pluginName][l](tr({
        sortable: s
      }, a)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](tr({
        sortable: s
      }, a)));
    });
  },
  initializePlugins: function(r, s, a, u) {
    xi.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var v = new m(r, s, r.options);
        v.sortable = r, v.options = r.options, r[p] = v, kr(a, v.defaults);
      }
    });
    for (var l in r.options)
      if (r.options.hasOwnProperty(l)) {
        var f = this.modifyOption(r, l, r.options[l]);
        typeof f < "u" && (r.options[l] = f);
      }
  },
  getEventProperties: function(r, s) {
    var a = {};
    return xi.forEach(function(u) {
      typeof u.eventProperties == "function" && kr(a, u.eventProperties.call(s[u.pluginName], r));
    }), a;
  },
  modifyOption: function(r, s, a) {
    var u;
    return xi.forEach(function(l) {
      r[l.pluginName] && l.optionListeners && typeof l.optionListeners[s] == "function" && (u = l.optionListeners[s].call(r[l.pluginName], a));
    }), u;
  }
};
function Q3(t) {
  var r = t.sortable, s = t.rootEl, a = t.name, u = t.targetEl, l = t.cloneEl, f = t.toEl, m = t.fromEl, p = t.oldIndex, v = t.newIndex, g = t.oldDraggableIndex, E = t.newDraggableIndex, _ = t.originalEvent, S = t.putSortable, h = t.extraEventProperties;
  if (r = r || s && s[on], !!r) {
    var C, x = r.options, j = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Ar && !uo ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = l, C.oldIndex = p, C.newIndex = v, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = _, C.pullMode = S ? S.lastPutMode : void 0;
    var N = tr(tr({}, h), lo.getEventProperties(a, r));
    for (var I in N)
      C[I] = N[I];
    s && s.dispatchEvent(C), x[j] && x[j].call(r, C);
  }
}
var K3 = ["evt"], an = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, l = q3(a, K3);
  lo.pluginEvent.bind(Te)(r, s, tr({
    dragEl: fe,
    parentEl: pt,
    ghostEl: Me,
    rootEl: ot,
    nextEl: Ma,
    lastDownEl: fl,
    cloneEl: ct,
    cloneHidden: ta,
    dragStarted: Xs,
    putSortable: It,
    activeSortable: Te.active,
    originalEvent: u,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: Sn,
    newDraggableIndex: ea,
    hideGhostForTarget: Dy,
    unhideGhostForTarget: zy,
    cloneNowHidden: function() {
      ta = !0;
    },
    cloneNowShown: function() {
      ta = !1;
    },
    dispatchSortableEvent: function(m) {
      Ft({
        sortable: s,
        name: m,
        originalEvent: u
      });
    }
  }, l));
};
function Ft(t) {
  Q3(tr({
    putSortable: It,
    cloneEl: ct,
    targetEl: fe,
    rootEl: ot,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: Sn,
    newDraggableIndex: ea
  }, t));
}
var fe, pt, Me, ot, Ma, fl, ct, ta, Di, Sn, no, ea, Tu, It, ji = !1, wl = !1, El = [], Na, Un, of, uf, jv, Dv, Xs, Ti, ro, ao = !1, Nu = !1, hl, Gt, lf = [], jf = !1, Cl = [], jl = typeof document < "u", Ou = eh, zv = uo || Ar ? "cssFloat" : "float", J3 = jl && !Ey && !eh && "draggable" in document.createElement("div"), My = (function() {
  if (jl) {
    if (Ar)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), Ry = function(r, s) {
  var a = xe(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), l = Bi(r, 0, s), f = Bi(r, 1, s), m = l && xe(l), p = f && xe(f), v = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Ct(l).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Ct(f).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (l && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return l && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || v >= u && a[zv] === "none" || f && a[zv] === "none" && v + g > u) ? "vertical" : "horizontal";
}, W3 = function(r, s, a) {
  var u = a ? r.left : r.top, l = a ? r.right : r.bottom, f = a ? r.width : r.height, m = a ? s.left : s.top, p = a ? s.right : s.bottom, v = a ? s.width : s.height;
  return u === m || l === p || u + f / 2 === m + v / 2;
}, e8 = function(r, s) {
  var a;
  return El.some(function(u) {
    var l = u[on].options.emptyInsertThreshold;
    if (!(!l || th(u))) {
      var f = Ct(u), m = r >= f.left - l && r <= f.right + l, p = s >= f.top - l && s <= f.bottom + l;
      if (m && p)
        return a = u;
    }
  }), a;
}, jy = function(r) {
  function s(l, f) {
    return function(m, p, v, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (l == null && (f || E))
        return !0;
      if (l == null || l === !1)
        return !1;
      if (f && l === "clone")
        return l;
      if (typeof l == "function")
        return s(l(m, p, v, g), f)(m, p, v, g);
      var _ = (f ? m : p).options.group.name;
      return l === !0 || typeof l == "string" && l === _ || l.join && l.indexOf(_) > -1;
    };
  }
  var a = {}, u = r.group;
  (!u || dl(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, Dy = function() {
  !My && Me && xe(Me, "display", "none");
}, zy = function() {
  !My && Me && xe(Me, "display", "");
};
jl && !Ey && document.addEventListener("click", function(t) {
  if (wl)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), wl = !1, !1;
}, !0);
var Oa = function(r) {
  if (fe) {
    r = r.touches ? r.touches[0] : r;
    var s = e8(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[on]._onDragOver(a);
    }
  }
}, t8 = function(r) {
  fe && fe.parentNode[on]._isOutsideThisEl(r.target);
};
function Te(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = kr({}, r), t[on] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Ry(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, m) {
      f.setData("Text", m.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Te.supportPointer !== !1 && "PointerEvent" in window && (!eo || eh),
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, t, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  jy(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : J3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(t, "pointerdown", this._onTapStart) : (He(t, "mousedown", this._onTapStart), He(t, "touchstart", this._onTapStart)), this.nativeDraggable && (He(t, "dragover", this), He(t, "dragenter", this)), El.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), kr(this, Y3());
}
Te.prototype = /** @lends Sortable.prototype */
{
  constructor: Te,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, fe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, a = this.el, u = this.options, l = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (l8(a), !fe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !v.isContentEditable && !(!this.nativeDraggable && eo && p && p.tagName.toUpperCase() === "SELECT") && (p = Zn(p, u.draggable, a, !1), !(p && p.animated) && fl !== p)) {
        if (Di = Dn(p), no = Dn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Ft({
              sortable: s,
              rootEl: v,
              name: "filter",
              targetEl: p,
              toEl: a,
              fromEl: a
            }), an("filter", s, {
              evt: r
            }), l && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = Zn(v, E.trim(), a, !1), E)
            return Ft({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: a,
              toEl: a
            }), an("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          l && r.preventDefault();
          return;
        }
        u.handle && !Zn(v, u.handle, a, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, l = u.el, f = u.options, m = l.ownerDocument, p;
    if (a && !fe && a.parentNode === l) {
      var v = Ct(a);
      if (ot = l, fe = a, pt = fe.parentNode, Ma = fe.nextSibling, fl = a, Tu = f.group, Te.dragged = fe, Na = {
        target: fe,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, jv = Na.clientX - v.left, Dv = Na.clientY - v.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, fe.style["will-change"] = "all", p = function() {
        if (an("delayEnded", u, {
          evt: r
        }), Te.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !Nv && u.nativeDraggable && (fe.draggable = !0), u._triggerDragStart(r, s), Ft({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), bn(fe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        Ay(fe, g.trim(), cf);
      }), He(m, "dragover", Oa), He(m, "mousemove", Oa), He(m, "touchmove", Oa), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), Nv && this.nativeDraggable && (this.options.touchStartThreshold = 4, fe.draggable = !0), an("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(uo || Ar))) {
        if (Te.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (He(m, "pointerup", u._disableDelayedDrag), He(m, "pointercancel", u._disableDelayedDrag)) : (He(m, "mouseup", u._disableDelayedDrag), He(m, "touchend", u._disableDelayedDrag), He(m, "touchcancel", u._disableDelayedDrag)), He(m, "mousemove", u._delayedDragTouchMoveHandler), He(m, "touchmove", u._delayedDragTouchMoveHandler), f.supportPointer && He(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    fe && cf(fe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Be(r, "mouseup", this._disableDelayedDrag), Be(r, "touchend", this._disableDelayedDrag), Be(r, "touchcancel", this._disableDelayedDrag), Be(r, "pointerup", this._disableDelayedDrag), Be(r, "pointercancel", this._disableDelayedDrag), Be(r, "mousemove", this._delayedDragTouchMoveHandler), Be(r, "touchmove", this._delayedDragTouchMoveHandler), Be(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(fe, "dragend", this), He(ot, "dragstart", this._onDragStart));
    try {
      document.selection ? pl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (ji = !1, ot && fe) {
      an("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", t8);
      var a = this.options;
      !r && bn(fe, a.dragClass, !1), bn(fe, a.ghostClass, !0), Te.active = this, r && this._appendGhost(), Ft({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Un) {
      this._lastX = Un.clientX, this._lastY = Un.clientY, Dy();
      for (var r = document.elementFromPoint(Un.clientX, Un.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Un.clientX, Un.clientY), r !== s); )
        s = r;
      if (fe.parentNode[on]._isOutsideThisEl(r), s)
        do {
          if (s[on]) {
            var a = void 0;
            if (a = s[on]._onDragOver({
              clientX: Un.clientX,
              clientY: Un.clientY,
              target: r,
              rootEl: s
            }), a && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = ky(s));
      zy();
    }
  },
  _onTouchMove: function(r) {
    if (Na) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, l = r.touches ? r.touches[0] : r, f = Me && Pi(Me, !0), m = Me && f && f.a, p = Me && f && f.d, v = Ou && Gt && Rv(Gt), g = (l.clientX - Na.clientX + u.x) / (m || 1) + (v ? v[0] - lf[0] : 0) / (m || 1), E = (l.clientY - Na.clientY + u.y) / (p || 1) + (v ? v[1] - lf[1] : 0) / (p || 1);
      if (!Te.active && !ji) {
        if (a && Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += g - (of || 0), f.f += E - (uf || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var _ = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        xe(Me, "webkitTransform", _), xe(Me, "mozTransform", _), xe(Me, "msTransform", _), xe(Me, "transform", _), of = g, uf = E, Un = l;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : ot, s = Ct(fe, !0, Ou, !0, r), a = this.options;
      if (Ou) {
        for (Gt = r; xe(Gt, "position") === "static" && xe(Gt, "transform") === "none" && Gt !== document; )
          Gt = Gt.parentNode;
        Gt !== document.body && Gt !== document.documentElement ? (Gt === document && (Gt = Wn()), s.top += Gt.scrollTop, s.left += Gt.scrollLeft) : Gt = Wn(), lf = Rv(Gt);
      }
      Me = fe.cloneNode(!0), bn(Me, a.ghostClass, !1), bn(Me, a.fallbackClass, !0), bn(Me, a.dragClass, !0), xe(Me, "transition", ""), xe(Me, "transform", ""), xe(Me, "box-sizing", "border-box"), xe(Me, "margin", 0), xe(Me, "top", s.top), xe(Me, "left", s.left), xe(Me, "width", s.width), xe(Me, "height", s.height), xe(Me, "opacity", "0.8"), xe(Me, "position", Ou ? "absolute" : "fixed"), xe(Me, "zIndex", "100000"), xe(Me, "pointerEvents", "none"), Te.ghost = Me, r.appendChild(Me), xe(Me, "transform-origin", jv / parseInt(Me.style.width) * 100 + "% " + Dv / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var a = this, u = r.dataTransfer, l = a.options;
    if (an("dragStart", this, {
      evt: r
    }), Te.eventCanceled) {
      this._onDrop();
      return;
    }
    an("setupClone", this), Te.eventCanceled || (ct = Ny(fe), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), bn(ct, this.options.chosenClass, !1), Te.clone = ct), a.cloneId = pl(function() {
      an("clone", a), !Te.eventCanceled && (a.options.removeCloneOnHide || ot.insertBefore(ct, fe), a._hideClone(), Ft({
        sortable: a,
        name: "clone"
      }));
    }), !s && bn(fe, l.dragClass, !0), s ? (wl = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Be(document, "mouseup", a._onDrop), Be(document, "touchend", a._onDrop), Be(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", l.setData && l.setData.call(a, u, fe)), He(document, "drop", a), xe(fe, "transform", "translateZ(0)")), ji = !0, a._dragStartId = pl(a._dragStarted.bind(a, s, r)), He(document, "selectstart", a), Xs = !0, window.getSelection().removeAllRanges(), eo && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, l, f, m = this.options, p = m.group, v = Te.active, g = Tu === p, E = m.sort, _ = It || v, S, h = this, C = !1;
    if (jf) return;
    function x(J, ae) {
      an(J, h, tr({
        evt: r,
        isOwner: g,
        axis: S ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: l,
        canSort: E,
        fromSortable: _,
        target: a,
        completed: N,
        onMove: function(Y, ce) {
          return Mu(ot, s, fe, u, Y, Ct(Y), r, ce);
        },
        changed: I
      }, ae));
    }
    function j() {
      x("dragOverAnimationCapture"), h.captureAnimationState(), h !== _ && _.captureAnimationState();
    }
    function N(J) {
      return x("dragOverCompleted", {
        insertion: J
      }), J && (g ? v._hideClone() : v._showClone(h), h !== _ && (bn(fe, It ? It.options.ghostClass : v.options.ghostClass, !1), bn(fe, m.ghostClass, !0)), It !== h && h !== Te.active ? It = h : h === Te.active && It && (It = null), _ === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        x("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (a === fe && !fe.animated || a === s && !a.animated) && (Ti = null), !m.dragoverBubble && !r.rootEl && a !== document && (fe.parentNode[on]._isOutsideThisEl(r.target), !J && Oa(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function I() {
      Sn = Dn(fe), ea = Dn(fe, m.draggable), Ft({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: Sn,
        newDraggableIndex: ea,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), a = Zn(a, m.draggable, s, !0), x("dragOver"), Te.eventCanceled) return C;
    if (fe.contains(r.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return N(!1);
    if (wl = !1, v && !m.disabled && (g ? E || (f = pt !== ot) : It === this || (this.lastPutMode = Tu.checkPull(this, v, fe, r)) && p.checkPut(this, v, fe, r))) {
      if (S = this._getDirection(r, a) === "vertical", u = Ct(fe), x("dragOverValid"), Te.eventCanceled) return C;
      if (f)
        return pt = ot, j(), this._hideClone(), x("revert"), Te.eventCanceled || (Ma ? ot.insertBefore(fe, Ma) : ot.appendChild(fe)), N(!0);
      var c = th(s, m.draggable);
      if (!c || i8(r, S, this) && !c.animated) {
        if (c === fe)
          return N(!1);
        if (c && s === r.target && (a = c), a && (l = Ct(a)), Mu(ot, s, fe, u, a, l, r, !!a) !== !1)
          return j(), c && c.nextSibling ? s.insertBefore(fe, c.nextSibling) : s.appendChild(fe), pt = s, I(), N(!0);
      } else if (c && a8(r, S, this)) {
        var y = Bi(s, 0, m, !0);
        if (y === fe)
          return N(!1);
        if (a = y, l = Ct(a), Mu(ot, s, fe, u, a, l, r, !1) !== !1)
          return j(), s.insertBefore(fe, y), pt = s, I(), N(!0);
      } else if (a.parentNode === s) {
        l = Ct(a);
        var w = 0, k, M = fe.parentNode !== s, z = !W3(fe.animated && fe.toRect || u, a.animated && a.toRect || l, S), R = S ? "top" : "left", L = Mv(a, "top", "top") || Mv(fe, "top", "top"), q = L ? L.scrollTop : void 0;
        Ti !== a && (k = l[R], ao = !1, Nu = !z && m.invertSwap || M), w = s8(r, a, l, S, z ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Nu, Ti === a);
        var F;
        if (w !== 0) {
          var $ = Dn(fe);
          do
            $ -= w, F = pt.children[$];
          while (F && (xe(F, "display") === "none" || F === Me));
        }
        if (w === 0 || F === a)
          return N(!1);
        Ti = a, ro = w;
        var W = a.nextElementSibling, O = !1;
        O = w === 1;
        var U = Mu(ot, s, fe, u, a, l, r, O);
        if (U !== !1)
          return (U === 1 || U === -1) && (O = U === 1), jf = !0, setTimeout(r8, 30), j(), O && !W ? s.appendChild(fe) : a.parentNode.insertBefore(fe, O ? W : a), L && Ty(L, 0, q - L.scrollTop), pt = fe.parentNode, k !== void 0 && !Nu && (hl = Math.abs(k - Ct(a)[R])), I(), N(!0);
      }
      if (s.contains(fe))
        return N(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Be(document, "mousemove", this._onTouchMove), Be(document, "touchmove", this._onTouchMove), Be(document, "pointermove", this._onTouchMove), Be(document, "dragover", Oa), Be(document, "mousemove", Oa), Be(document, "touchmove", Oa);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Be(r, "mouseup", this._onDrop), Be(r, "touchend", this._onDrop), Be(r, "pointerup", this._onDrop), Be(r, "pointercancel", this._onDrop), Be(r, "touchcancel", this._onDrop), Be(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, a = this.options;
    if (Sn = Dn(fe), ea = Dn(fe, a.draggable), an("drop", this, {
      evt: r
    }), pt = fe && fe.parentNode, Sn = Dn(fe), ea = Dn(fe, a.draggable), Te.eventCanceled) {
      this._nulling();
      return;
    }
    ji = !1, Nu = !1, ao = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Df(this.cloneId), Df(this._dragStartId), this.nativeDraggable && (Be(document, "drop", this), Be(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), eo && xe(document.body, "user-select", ""), xe(fe, "transform", ""), r && (Xs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (ot === pt || It && It.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), fe && (this.nativeDraggable && Be(fe, "dragend", this), cf(fe), fe.style["will-change"] = "", Xs && !ji && bn(fe, It ? It.options.ghostClass : this.options.ghostClass, !1), bn(fe, this.options.chosenClass, !1), Ft({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ot !== pt ? (Sn >= 0 && (Ft({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: ot,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Ft({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: ot,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), It && It.save()) : Sn !== Di && Sn >= 0 && (Ft({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Te.active && ((Sn == null || Sn === -1) && (Sn = Di, ea = no), Ft({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    an("nulling", this), ot = fe = pt = Me = Ma = ct = fl = ta = Na = Un = Xs = Sn = ea = Di = no = Ti = ro = It = Tu = Te.dragged = Te.ghost = Te.clone = Te.active = null, Cl.forEach(function(r) {
      r.checked = !0;
    }), Cl.length = of = uf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        fe && (this._onDragOver(r), n8(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], s, a = this.el.children, u = 0, l = a.length, f = this.options; u < l; u++)
      s = a[u], Zn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || u8(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var a = {}, u = this.el;
    this.toArray().forEach(function(l, f) {
      var m = u.children[f];
      Zn(m, this.options.draggable, u, !1) && (a[l] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(l) {
      a[l] && (u.removeChild(a[l]), u.appendChild(a[l]));
    }), s && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, s) {
    return Zn(r, s || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, s) {
    var a = this.options;
    if (s === void 0)
      return a[r];
    var u = lo.modifyOption(this, r, s);
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && jy(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    an("destroy", this);
    var r = this.el;
    r[on] = null, Be(r, "mousedown", this._onTapStart), Be(r, "touchstart", this._onTapStart), Be(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Be(r, "dragover", this), Be(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), El.splice(El.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ta) {
      if (an("hideClone", this), Te.eventCanceled) return;
      xe(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ta = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ta) {
      if (an("showClone", this), Te.eventCanceled) return;
      fe.parentNode == ot && !this.options.group.revertClone ? ot.insertBefore(ct, fe) : Ma ? ot.insertBefore(ct, Ma) : ot.appendChild(ct), this.options.group.revertClone && this.animate(fe, ct), xe(ct, "display", ""), ta = !1;
    }
  }
};
function n8(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Mu(t, r, s, a, u, l, f, m) {
  var p, v = t[on], g = v.options.onMove, E;
  return window.CustomEvent && !Ar && !uo ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = t, p.dragged = s, p.draggedRect = a, p.related = u || r, p.relatedRect = l || Ct(r), p.willInsertAfter = m, p.originalEvent = f, t.dispatchEvent(p), g && (E = g.call(v, p, f)), E;
}
function cf(t) {
  t.draggable = !1;
}
function r8() {
  jf = !1;
}
function a8(t, r, s) {
  var a = Ct(Bi(s.el, 0, s.options, !0)), u = Oy(s.el, s.options, Me), l = 10;
  return r ? t.clientX < u.left - l || t.clientY < a.top && t.clientX < a.right : t.clientY < u.top - l || t.clientY < a.bottom && t.clientX < a.left;
}
function i8(t, r, s) {
  var a = Ct(th(s.el, s.options.draggable)), u = Oy(s.el, s.options, Me), l = 10;
  return r ? t.clientX > u.right + l || t.clientY > a.bottom && t.clientX > a.left : t.clientY > u.bottom + l || t.clientX > a.right && t.clientY > a.top;
}
function s8(t, r, s, a, u, l, f, m) {
  var p = a ? t.clientY : t.clientX, v = a ? s.height : s.width, g = a ? s.top : s.left, E = a ? s.bottom : s.right, _ = !1;
  if (!f) {
    if (m && hl < v * u) {
      if (!ao && (ro === 1 ? p > g + v * l / 2 : p < E - v * l / 2) && (ao = !0), ao)
        _ = !0;
      else if (ro === 1 ? p < g + hl : p > E - hl)
        return -ro;
    } else if (p > g + v * (1 - u) / 2 && p < E - v * (1 - u) / 2)
      return o8(r);
  }
  return _ = _ || f, _ && (p < g + v * l / 2 || p > E - v * l / 2) ? p > g + v / 2 ? 1 : -1 : 0;
}
function o8(t) {
  return Dn(fe) < Dn(t) ? 1 : -1;
}
function u8(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function l8(t) {
  Cl.length = 0;
  for (var r = t.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && Cl.push(a);
  }
}
function pl(t) {
  return setTimeout(t, 0);
}
function Df(t) {
  return clearTimeout(t);
}
jl && He(document, "touchmove", function(t) {
  (Te.active || ji) && t.cancelable && t.preventDefault();
});
Te.utils = {
  on: He,
  off: Be,
  css: xe,
  find: Ay,
  is: function(r, s) {
    return !!Zn(r, s, r, !1);
  },
  extend: V3,
  throttle: xy,
  closest: Zn,
  toggleClass: bn,
  clone: Ny,
  index: Dn,
  nextTick: pl,
  cancelNextTick: Df,
  detectDirection: Ry,
  getChild: Bi,
  expando: on
};
Te.get = function(t) {
  return t[on];
};
Te.mount = function() {
  for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (Te.utils = tr(tr({}, Te.utils), a.utils)), lo.mount(a);
  });
};
Te.create = function(t, r) {
  return new Te(t, r);
};
Te.version = Z3;
var Et = [], Qs, zf, Lf = !1, df, ff, kl, Ks;
function c8() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return t.prototype = {
    dragStarted: function(s) {
      var a = s.originalEvent;
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var a = s.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : (Be(document, "pointermove", this._handleFallbackAutoScroll), Be(document, "touchmove", this._handleFallbackAutoScroll), Be(document, "mousemove", this._handleFallbackAutoScroll)), Lv(), ml(), $3();
    },
    nulling: function() {
      kl = zf = Qs = Lf = Ks = df = ff = null, Et.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, l = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(l, f);
      if (kl = s, a || this.options.forceAutoScrollFallback || uo || Ar || eo) {
        hf(s, this.options, m, a);
        var p = na(m, !0);
        Lf && (!Ks || l !== df || f !== ff) && (Ks && Lv(), Ks = setInterval(function() {
          var v = na(document.elementFromPoint(l, f), !0);
          v !== p && (p = v, ml()), hf(s, u.options, v, a);
        }, 10), df = l, ff = f);
      } else {
        if (!this.options.bubbleScroll || na(m, !0) === Wn()) {
          ml();
          return;
        }
        hf(s, this.options, na(m, !1), !1);
      }
    }
  }, kr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ml() {
  Et.forEach(function(t) {
    clearInterval(t.pid);
  }), Et = [];
}
function Lv() {
  clearInterval(Ks);
}
var hf = xy(function(t, r, s, a) {
  if (r.scroll) {
    var u = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = Wn(), v = !1, g;
    zf !== s && (zf = s, ml(), Qs = r.scroll, g = r.scrollFn, Qs === !0 && (Qs = na(s, !0)));
    var E = 0, _ = Qs;
    do {
      var S = _, h = Ct(S), C = h.top, x = h.bottom, j = h.left, N = h.right, I = h.width, c = h.height, y = void 0, w = void 0, k = S.scrollWidth, M = S.scrollHeight, z = xe(S), R = S.scrollLeft, L = S.scrollTop;
      S === p ? (y = I < k && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), w = c < M && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (y = I < k && (z.overflowX === "auto" || z.overflowX === "scroll"), w = c < M && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var q = y && (Math.abs(N - u) <= f && R + I < k) - (Math.abs(j - u) <= f && !!R), F = w && (Math.abs(x - l) <= f && L + c < M) - (Math.abs(C - l) <= f && !!L);
      if (!Et[E])
        for (var $ = 0; $ <= E; $++)
          Et[$] || (Et[$] = {});
      (Et[E].vx != q || Et[E].vy != F || Et[E].el !== S) && (Et[E].el = S, Et[E].vx = q, Et[E].vy = F, clearInterval(Et[E].pid), (q != 0 || F != 0) && (v = !0, Et[E].pid = setInterval((function() {
        a && this.layer === 0 && Te.active._onTouchMove(kl);
        var W = Et[this.layer].vy ? Et[this.layer].vy * m : 0, O = Et[this.layer].vx ? Et[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Te.dragged.parentNode[on], O, W, t, kl, Et[this.layer].el) !== "continue" || Ty(Et[this.layer].el, O, W);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && _ !== p && (_ = na(_, !1)));
    Lf = v;
  }
}, 30), Ly = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, l = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var v = a || l;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), v && !v.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function nh() {
}
nh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var u = Bi(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: Ly
};
kr(nh, {
  pluginName: "revertOnSpill"
});
function rh() {
}
rh.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: Ly
};
kr(rh, {
  pluginName: "removeOnSpill"
});
Te.mount(new c8());
Te.mount(rh, nh);
async function gl(t, r, s) {
  var a, u, l;
  function f(g) {
    return t.includes("all") || t.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const v = i2;
  if (f("global") && v != null && v.length)
    for (const g of v) {
      const E = await d8(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((_) => {
        p[g].push(_);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[s2];
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((_) => {
        p[g].push(_);
      });
    }
  }
  if (f("character") && s) {
    const g = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const _ = (u = (a = g?.data) == null ? void 0 : a.extensions) == null ? void 0 : u.world;
    _ && E.add(_);
    const S = Sy(s), h = (l = o2.charLore) == null ? void 0 : l.find((C) => C.name === S);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const x = await m.loadWorldInfo(C);
      !x || p[C] || (p[C] = [], Object.values(x.entries).forEach((j) => {
        p[C].push(j);
      }));
    }
  }
  if (f("persona")) {
    const g = m.powerUserSettings.persona_description_lorebook;
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((_) => {
        p[g].push(_);
      });
    }
  }
  return p;
}
async function d8(t) {
  const r = await SillyTavern.getContext().loadWorldInfo(t);
  return r ? Object.values(r.entries) : null;
}
const f8 = `=== SILLYTAVERN===

**SillyTavern** is a popular open-source front-end interface designed for interacting with AI language models. It's primarily used for role-playing, creative writing, and conversational experiences, offering a user-friendly platform to customize interactions with AI. Here's an overview:

### Key Features:
1. **AI Backend Compatibility**: Works with APIs like OpenAI (GPT), KoboldAI, Claude, or local models (via services like Text-generation-webui or Ollama).
2. **Customization**:
   - Create and import character cards (with personas, scenarios, and dialogue examples).
   - Adjust model parameters (temperature, repetition penalties) for tailored responses.
3. **Plugins & Extensions**: Adds features like text-to-speech, image generation, emotion recognition, and world-building tools.
4. **Privacy**: Self-hosted locally, giving users control over data (unlike cloud-based services).

### Use Cases:
- Role-playing with AI characters.
- Collaborative storytelling or creative writing.
- Experimental AI interactions (users often share character templates and scripts in communities).

### Requirements:
- Technical setup involves installing Node.js, cloning the GitHub repo, and configuring API connections.
- Requires access to an AI model backend (e.g., OpenAI API key or a locally hosted model).

### Community & Ethics:
- Active communities on platforms like GitHub and Reddit share guides, characters, and plugins.
- Encourages responsible use, as the tool can generate unrestricted content depending on the AI backend.

SillyTavern is not an AI itself but a flexible interface to enhance interactions with LLMs.

=== WORLDINFO (LOREBOOKS) ===

**World Info** (often called **Lorebooks**) is a feature used in AI-driven storytelling and role-playing platforms (like SillyTavern, NovelAI, KoboldAI, or Text-generation-webui) to help AI models maintain consistency in fictional worlds. It acts as a dynamic knowledge base that the AI references during interactions to avoid contradictions and keep track of key details.

---

### **What is World Info/Lorebooks?**
- **A structured database**: Stores details about characters, locations, rules, events, or concepts in your fictional world.
- **Contextual triggers**: Entries activate automatically when specific keywords or phrases appear in the conversation/story.
- **Prevents "amnesia"**: Ensures the AI remembers critical lore without relying solely on its limited context window.

---

### **How It Works**
1. **Create Entries**: Define elements (e.g., a character’s backstory, a magic system’s rules).
2. **Set Triggers**: Link entries to keywords (e.g., mention "Dragonstone" → inject lore about that location).
3. **Dynamic Injection**: When a trigger word appears in the chat/story, the relevant entry is temporarily added to the AI’s context.

---

### **Key Features**
- **Hierarchy**: Organize entries into categories (e.g., factions, items, timelines).
- **Priority**: Set which entries take precedence if multiple triggers occur.
- **Cross-references**: Link entries to each other (e.g., a character entry references their home city).
- **Formatting**: Use markdown, JSON, or plain text depending on the platform.

---

### **Example Lorebook Entry**
\`\`\`plaintext
Name: Dragonstone Citadel
Triggers: Dragonstone, Citadel, Obsidian Fortress
Content:
  A volcanic fortress built from black obsidian. Home to the ancient Order of Flames,
  who guard the Eternal Fire—a magical flame that grants visions of the future.
  The citadel is rumored to be cursed, as its rulers never live past 40 years.
\`\`\`

---

### **Use Cases**
1. **Complex Worldbuilding**: Track political factions, religions, or history.
2. **Character Consistency**: Ensure the AI remembers a character’s motives, secrets, or relationships.
3. **Magic/Science Systems**: Define rules (e.g., "Magic drains lifeforce" or "Robots cannot harm humans").
4. **Plot Hooks**: Store hidden clues or foreshadowing for the AI to weave into the narrative.

---

### **Tools Supporting Lorebooks**
- **SillyTavern**: Integrates with lorebooks via extensions or prompts.
- **NovelAI**: Has a built-in "Lorebook" feature with advanced triggers.
- **KoboldAI/Text-generation-webui**: Use "world info" files or scripts.
- **AIDungeon** (historically): Early adopter of world info, though less popular now.

---

### **Best Practices**
- **Keep entries concise**: AI models process information best in short, clear snippets.
- **Balance detail**: Too many entries can overwhelm the context window.
- **Test triggers**: Ensure keywords are unique enough to avoid false activations.
- **Update dynamically**: Add/remove entries as the story evolves.

Lorebooks are essential for long-term storytelling with AI.`, Pv = `Optional Tier 1 fields (omit them when the default is fine):
- "order": 100 — injection priority
- "position": 0 — placement (0=before char, 1=after char, 2=before AN, 3=after AN, 4=at depth, 5=at depth from top, 6=before example messages, 7=after example messages)
- "depth": 4 — position depth when position=4 or 5
- "role": 0 — injection role (0=system, 1=user, 2=assistant)
- "selective": true — requires secondary keys
- "constant": false — always inject
- "group": "" — grouped activation name
- "probability": 100 — activation chance %
- "excludeRecursion": false — skip during recursion
- "preventRecursion": false — prevent recursive activation`, ah = `{{#unless (eq entry.order 100)}}
Order: {{entry.order}}
{{/unless}}{{#unless (eq entry.position 0)}}
Position: {{entry.position}}
{{/unless}}{{#unless (eq entry.depth 4)}}
Depth: {{entry.depth}}
{{/unless}}{{#unless (eq entry.role 0)}}
Role: {{entry.role}}
{{/unless}}{{#if (eq entry.selective false)}}
Selective: {{entry.selective}}
{{/if}}{{#if entry.constant}}
Constant: {{entry.constant}}
{{/if}}{{#if entry.group}}
Group: {{entry.group}}
{{/if}}{{#unless (eq entry.probability 100)}}
Probability: {{entry.probability}}
{{/unless}}{{#if entry.excludeRecursion}}
Exclude Recursion: {{entry.excludeRecursion}}
{{/if}}{{#if entry.preventRecursion}}
Prevent Recursion: {{entry.preventRecursion}}
{{/if}}`, h8 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
${ah}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, p8 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, m8 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
${ah}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, g8 = `Respond exclusively with {{responseFormat}}. Do not include any other text, explanation, or markdown outside the {{responseFormat}} structure.

{{#if (eq responseFormat 'json')}}
Respond with a JSON object using this structure:
- "lorebooks" object containing an "entry" object (or array of entry objects for multiple entries)
- Each entry has: "worldName" (string), "id" (number, optional - for updates), "name" (string), "triggers" (array of strings), "content" (string)

${Pv}

Example - Creating new entries:
\`\`\`json
{
  "lorebooks": {
    "entry": {
      "worldName": "World 1",
      "name": "Book 1",
      "triggers": ["word1", "word2"],
      "content": "Content of book 1",
      "order": 100,
      "position": 0,
      "depth": 4,
      "role": 0,
      "selective": true,
      "constant": false,
      "group": "",
      "probability": 100,
      "excludeRecursion": false,
      "preventRecursion": false
    }
  }
}
\`\`\`

Example - Updating an existing entry (include the "id" field; the same optional Tier 1 fields may also be included):
\`\`\`json
{
  "lorebooks": {
    "entry": {
      "worldName": "World 1",
      "id": 15,
      "name": "Book 1",
      "triggers": ["word1", "word2"],
      "content": "Content of book 1"
    }
  }
}
\`\`\`
{{else}}
${Pv}

If you are creating a new entry you should write it like this:
\`\`\`xml
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
        <order>100</order>
        <position>0</position>
        <depth>4</depth>
        <role>0</role>
        <selective>true</selective>
        <constant>false</constant>
        <group></group>
        <probability>100</probability>
        <excludeRecursion>false</excludeRecursion>
        <preventRecursion>false</preventRecursion>
    </entry>
</lorebooks>
\`\`\`

If you are updating an existing entry you should specify the id of the entry. The same optional Tier 1 fields may also be included. Like this:
\`\`\`xml
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <id>15</id> // Id should be the id of the entry
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>
\`\`\`
{{/if}}`, v8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, y8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", _8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", b8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, S8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
${ah}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, w8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, E8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, Py = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", C8 = Py + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", k8 = "[" + Py + "][" + C8 + "]*", A8 = new RegExp("^" + k8 + "$");
function Iy(t, r) {
  const s = [];
  let a = r.exec(t);
  for (; a; ) {
    const u = [];
    u.startIndex = r.lastIndex - a[0].length;
    const l = a.length;
    for (let f = 0; f < l; f++)
      u.push(a[f]);
    s.push(u), a = r.exec(t);
  }
  return s;
}
const ih = function(t) {
  const r = A8.exec(t);
  return !(r === null || typeof r > "u");
};
function x8(t) {
  return typeof t < "u";
}
const T8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function By(t, r) {
  r = Object.assign({}, T8, r);
  const s = [];
  let a = !1, u = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let l = 0; l < t.length; l++)
    if (t[l] === "<" && t[l + 1] === "?") {
      if (l += 2, l = Bv(t, l), l.err) return l;
    } else if (t[l] === "<") {
      let f = l;
      if (l++, t[l] === "!") {
        l = Uv(t, l);
        continue;
      } else {
        let m = !1;
        t[l] === "/" && (m = !0, l++);
        let p = "";
        for (; l < t.length && t[l] !== ">" && t[l] !== " " && t[l] !== "	" && t[l] !== `
` && t[l] !== "\r"; l++)
          p += t[l];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), l--), !L8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(t, l));
        }
        const v = M8(t, l);
        if (v === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(t, l));
        let g = v.value;
        if (l = v.index, g[g.length - 1] === "/") {
          const E = l - g.length;
          g = g.substring(0, g.length - 1);
          const _ = Hv(g, r);
          if (_ === !0)
            a = !0;
          else
            return yt(_.err.code, _.err.msg, Xt(t, E + _.err.line));
        } else if (m)
          if (v.tagClosed) {
            if (g.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Xt(t, f));
            if (s.length === 0)
              return yt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Xt(t, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let _ = Xt(t, E.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + _.line + ", col " + _.col + ") instead of closing tag '" + p + "'.",
                  Xt(t, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Xt(t, l));
        else {
          const E = Hv(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(t, l - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(t, l));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), a = !0;
        }
        for (l++; l < t.length; l++)
          if (t[l] === "<")
            if (t[l + 1] === "!") {
              l++, l = Uv(t, l);
              continue;
            } else if (t[l + 1] === "?") {
              if (l = Bv(t, ++l), l.err) return l;
            } else
              break;
          else if (t[l] === "&") {
            const E = D8(t, l);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(t, l));
            l = E;
          } else if (u === !0 && !Iv(t[l]))
            return yt("InvalidXml", "Extra text at the end", Xt(t, l));
        t[l] === "<" && l--;
      }
    } else {
      if (Iv(t[l]))
        continue;
      return yt("InvalidChar", "char '" + t[l] + "' is not expected.", Xt(t, l));
    }
  if (a) {
    if (s.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Xt(t, s[0].tagStartPos));
    if (s.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(s.map((l) => l.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Iv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Bv(t, r) {
  const s = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const a = t.substr(s, r - s);
      if (r > 5 && a === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Uv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let s = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        s++;
      else if (t[r] === ">" && (s--, s === 0))
        break;
  } else if (t.length > r + 9 && t[r + 1] === "[" && t[r + 2] === "C" && t[r + 3] === "D" && t[r + 4] === "A" && t[r + 5] === "T" && t[r + 6] === "A" && t[r + 7] === "[") {
    for (r += 8; r < t.length; r++)
      if (t[r] === "]" && t[r + 1] === "]" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const N8 = '"', O8 = "'";
function M8(t, r) {
  let s = "", a = "", u = !1;
  for (; r < t.length; r++) {
    if (t[r] === N8 || t[r] === O8)
      a === "" ? a = t[r] : a !== t[r] || (a = "");
    else if (t[r] === ">" && a === "") {
      u = !0;
      break;
    }
    s += t[r];
  }
  return a !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const R8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Hv(t, r) {
  const s = Iy(t, R8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Hs(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Hs(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Hs(s[u]));
    const l = s[u][2];
    if (!z8(l))
      return yt("InvalidAttr", "Attribute '" + l + "' is an invalid name.", Hs(s[u]));
    if (!a.hasOwnProperty(l))
      a[l] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + l + "' is repeated.", Hs(s[u]));
  }
  return !0;
}
function j8(t, r) {
  let s = /\d/;
  for (t[r] === "x" && (r++, s = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(s))
      break;
  }
  return -1;
}
function D8(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, j8(t, r);
  let s = 0;
  for (; r < t.length; r++, s++)
    if (!(t[r].match(/\w/) && s < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(t, r, s) {
  return {
    err: {
      code: t,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function z8(t) {
  return ih(t);
}
function L8(t) {
  return ih(t);
}
function Xt(t, r) {
  const s = t.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Hs(t) {
  return t.startIndex + t[1].length;
}
const P8 = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, r) {
    return r;
  },
  attributeValueProcessor: function(t, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, r, s) {
    return t;
  }
  // skipEmptyListItem: false
}, I8 = function(t) {
  return Object.assign({}, P8, t);
};
class qs {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, s) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: s });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function B8(t, r) {
  const s = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, l = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !l) {
        if (u && q8(t, r)) {
          r += 7;
          let m, p;
          [m, p, r] = U8(t, r + 1), p.indexOf("&") === -1 && (s[$8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && Z8(t, r)) r += 8;
        else if (u && G8(t, r)) r += 8;
        else if (u && V8(t, r)) r += 9;
        else if (H8) l = !0;
        else throw new Error("Invalid DOCTYPE");
        a++, f = "";
      } else if (t[r] === ">") {
        if (l ? t[r - 1] === "-" && t[r - 2] === "-" && (l = !1, a--) : a--, a === 0)
          break;
      } else t[r] === "[" ? u = !0 : f += t[r];
    if (a !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function U8(t, r) {
  let s = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    s += t[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const a = t[r++];
  let u = "";
  for (; r < t.length && t[r] !== a; r++)
    u += t[r];
  return [s, u, r];
}
function H8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function q8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Z8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function G8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function V8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function $8(t) {
  if (ih(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Y8 = /^[-+]?0x[a-fA-F0-9]+$/, F8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, X8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Q8(t, r = {}) {
  if (r = Object.assign({}, X8, r), !t || typeof t != "string") return t;
  let s = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return t;
  if (t === "0") return 0;
  if (r.hex && Y8.test(s))
    return J8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const a = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (a) {
      if (r.leadingZeros)
        s = (a[1] || "") + a[3];
      else if (!(a[2] === "0" && a[3][0] === ".")) return t;
      return r.eNotation ? Number(s) : t;
    } else
      return t;
  } else {
    const a = F8.exec(s);
    if (a) {
      const u = a[1], l = a[2];
      let f = K8(a[3]);
      if (!r.leadingZeros && l.length > 0 && u && s[2] !== ".") return t;
      if (!r.leadingZeros && l.length > 0 && !u && s[1] !== ".") return t;
      if (r.leadingZeros && l === t) return 0;
      {
        const m = Number(s), p = "" + m;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? m : t : s.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || u && p === "-" + f ? m : t : l ? f === p || u + f === p ? m : t : s === p || s === u + p ? m : t;
      }
    } else
      return t;
  }
}
function K8(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function J8(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function W8(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const s of t)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class eS {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (s, a) => String.fromCodePoint(Number.parseInt(a, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (s, a) => String.fromCodePoint(Number.parseInt(a, 16)) }
    }, this.addExternalEntities = tS, this.parseXml = sS, this.parseTextData = nS, this.resolveNameSpace = rS, this.buildAttributesMap = iS, this.isItStopNode = cS, this.replaceEntitiesValue = uS, this.readStopNodeData = fS, this.saveTextToParentTag = lS, this.addChild = oS, this.ignoreAttributesFn = W8(this.options.ignoreAttributes);
  }
}
function tS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: t[a]
    };
  }
}
function nS(t, r, s, a, u, l, f) {
  if (t !== void 0 && (this.options.trimValues && !a && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const m = this.options.tagValueProcessor(r, t, s, u, l);
    return m == null ? t : typeof m != typeof t || m !== t ? m : this.options.trimValues ? If(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? If(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function rS(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), s = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = s + r[1]);
  }
  return t;
}
const aS = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function iS(t, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const a = Iy(t, aS), u = a.length, l = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(a[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = a[f][4], v = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (v = this.options.transformAttributeName(v)), v === "__proto__" && (v = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? l[v] = p : typeof g != typeof p || g !== p ? l[v] = g : l[v] = If(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (l[v] = !0);
    }
    if (!Object.keys(l).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = l, f;
    }
    return l;
  }
}
const sS = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let s = r, a = "", u = "";
  for (let l = 0; l < t.length; l++)
    if (t[l] === "<")
      if (t[l + 1] === "/") {
        const m = Da(t, ">", l, "Closing Tag is not closed.");
        let p = t.substring(l + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (a = this.saveTextToParentTag(a, s, u));
        const v = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        v && this.options.unpairedTags.indexOf(v) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), a = "", l = m;
      } else if (t[l + 1] === "?") {
        let m = Pf(t, l, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (a = this.saveTextToParentTag(a, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new qs(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        l = m.closeIndex + 1;
      } else if (t.substr(l + 1, 3) === "!--") {
        const m = Da(t, "-->", l + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = t.substring(l + 4, m - 2);
          a = this.saveTextToParentTag(a, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        l = m;
      } else if (t.substr(l + 1, 2) === "!D") {
        const m = B8(t, l);
        this.docTypeEntities = m.entities, l = m.i;
      } else if (t.substr(l + 1, 2) === "![") {
        const m = Da(t, "]]>", l, "CDATA is not closed.") - 2, p = t.substring(l + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let v = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        v == null && (v = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, v), l = m + 2;
      } else {
        let m = Pf(t, l, this.options.removeNSPrefix), p = m.tagName;
        const v = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, _ = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && a && s.tagname !== "!xml" && (a = this.saveTextToParentTag(a, s, u, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), l = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            l = m.closeIndex;
          else {
            const x = this.readStopNodeData(t, v, _ + 1);
            if (!x) throw new Error(`Unexpected end of ${v}`);
            l = x.i, h = x.tagContent;
          }
          const C = new qs(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new qs(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new qs(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), s = h;
          }
          a = "", l = _;
        }
      }
    else
      a += t[l];
  return r.child;
};
function oS(t, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), t.addChild(r));
}
const uS = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const s = this.docTypeEntities[r];
      t = t.replace(s.regx, s.val);
    }
    for (let r in this.lastEntities) {
      const s = this.lastEntities[r];
      t = t.replace(s.regex, s.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const s = this.htmlEntities[r];
        t = t.replace(s.regex, s.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function lS(t, r, s, a) {
  return t && (a === void 0 && (a = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function cS(t, r, s) {
  const a = "*." + s;
  for (const u in t) {
    const l = t[u];
    if (a === l || r === l) return !0;
  }
  return !1;
}
function dS(t, r, s = ">") {
  let a, u = "";
  for (let l = r; l < t.length; l++) {
    let f = t[l];
    if (a)
      f === a && (a = "");
    else if (f === '"' || f === "'")
      a = f;
    else if (f === s[0])
      if (s[1]) {
        if (t[l + 1] === s[1])
          return {
            data: u,
            index: l
          };
      } else
        return {
          data: u,
          index: l
        };
    else f === "	" && (f = " ");
    u += f;
  }
}
function Da(t, r, s, a) {
  const u = t.indexOf(r, s);
  if (u === -1)
    throw new Error(a);
  return u + r.length - 1;
}
function Pf(t, r, s, a = ">") {
  const u = dS(t, r + 1, a);
  if (!u) return;
  let l = u.data;
  const f = u.index, m = l.search(/\s/);
  let p = l, v = !0;
  m !== -1 && (p = l.substring(0, m), l = l.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), v = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: l,
    closeIndex: f,
    attrExpPresent: v,
    rawTagName: g
  };
}
function fS(t, r, s) {
  const a = s;
  let u = 1;
  for (; s < t.length; s++)
    if (t[s] === "<")
      if (t[s + 1] === "/") {
        const l = Da(t, ">", s, `${r} is not closed`);
        if (t.substring(s + 2, l).trim() === r && (u--, u === 0))
          return {
            tagContent: t.substring(a, s),
            i: l
          };
        s = l;
      } else if (t[s + 1] === "?")
        s = Da(t, "?>", s + 1, "StopNode is not closed.");
      else if (t.substr(s + 1, 3) === "!--")
        s = Da(t, "-->", s + 3, "StopNode is not closed.");
      else if (t.substr(s + 1, 2) === "![")
        s = Da(t, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const l = Pf(t, s, ">");
        l && ((l && l.tagName) === r && l.tagExp[l.tagExp.length - 1] !== "/" && u++, s = l.closeIndex);
      }
}
function If(t, r, s) {
  if (r && typeof t == "string") {
    const a = t.trim();
    return a === "true" ? !0 : a === "false" ? !1 : Q8(t, s);
  } else
    return x8(t) ? t : "";
}
function hS(t, r) {
  return Uy(t, r);
}
function Uy(t, r, s) {
  let a;
  const u = {};
  for (let l = 0; l < t.length; l++) {
    const f = t[l], m = pS(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = f[m] : a += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let v = Uy(f[m], r, p);
        const g = gS(v, r);
        f[":@"] ? mS(v, f[":@"], p, r) : Object.keys(v).length === 1 && v[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? v = v[r.textNodeName] : Object.keys(v).length === 0 && (r.alwaysCreateTextNode ? v[r.textNodeName] = "" : v = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(v)) : r.isArray(m, p, g) ? u[m] = [v] : u[m] = v;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function pS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function mS(t, r, s, a) {
  if (r) {
    const u = Object.keys(r), l = u.length;
    for (let f = 0; f < l; f++) {
      const m = u[f];
      a.isArray(m, s + "." + m, !0, !0) ? t[m] = [r[m]] : t[m] = r[m];
    }
  }
}
function gS(t, r) {
  const { textNodeName: s } = r, a = Object.keys(t).length;
  return !!(a === 0 || a === 1 && (t[s] || typeof t[s] == "boolean" || t[s] === 0));
}
class vS {
  constructor(r) {
    this.externalEntities = {}, this.options = I8(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, s) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (s) {
      s === !0 && (s = {});
      const l = By(r, s);
      if (l !== !0)
        throw Error(`${l.err.msg}:${l.err.line}:${l.err.col}`);
    }
    const a = new eS(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : hS(u, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, s) {
    if (s.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (s === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = s;
  }
}
const yS = {
  validate: By
}, ra = [
  "order",
  "position",
  "depth",
  "role",
  "selectiveLogic",
  "probability",
  "groupWeight",
  "delayUntilRecursion",
  "selective",
  "constant",
  "excludeRecursion",
  "preventRecursion",
  "useProbability",
  "groupOverride",
  "addMemo",
  "matchPersonaDescription",
  "matchCharacterDescription",
  "group",
  "outletName",
  "scanDepth",
  "sticky",
  "cooldown",
  "delay",
  "caseSensitive",
  "matchWholeWords"
], _S = [
  "position",
  "depth",
  "order",
  "role",
  "selective",
  "constant",
  "probability",
  "group",
  "excludeRecursion",
  "preventRecursion"
], Hy = [
  { value: 0, label: "Before Char Definition" },
  { value: 1, label: "After Char Definition" },
  { value: 2, label: "Before Author's Note" },
  { value: 3, label: "After Author's Note" },
  { value: 4, label: "At Depth (from bottom)" },
  { value: 5, label: "At Depth (from top)" },
  { value: 6, label: "Before Example Messages" },
  { value: 7, label: "After Example Messages" }
], qy = [
  { value: 0, label: "System" },
  { value: 1, label: "User" },
  { value: 2, label: "Assistant" }
], bS = {
  position: "Position",
  depth: "Depth",
  order: "Order",
  role: "Role",
  selective: "Selective",
  constant: "Constant",
  probability: "Probability",
  group: "Group",
  excludeRecursion: "Exclude Recursion",
  preventRecursion: "Prevent Recursion"
}, Ye = {
  order: 100,
  position: 0,
  depth: 4,
  role: 0,
  selectiveLogic: 0,
  probability: 100,
  groupWeight: 100,
  delayUntilRecursion: 0,
  selective: !0,
  constant: !1,
  excludeRecursion: !1,
  preventRecursion: !1,
  useProbability: !0,
  groupOverride: !1,
  addMemo: !0,
  matchPersonaDescription: !1,
  matchCharacterDescription: !1,
  group: "",
  outletName: "",
  scanDepth: null,
  sticky: null,
  cooldown: null,
  delay: null,
  caseSensitive: null,
  matchWholeWords: null
}, SS = new vS({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function wS(t) {
  return Math.floor(Math.random() * Math.pow(10, t));
}
function Bf(t, r) {
  if (!(!r || !t || !r.properties))
    for (const s in r.properties) {
      if (!t.hasOwnProperty(s)) continue;
      const a = r.properties[s];
      let u = t[s];
      if (a.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], t[s] = u), a.type === "array" && a.items?.type === "object" && Array.isArray(u)) {
        const l = a.items.required || [], f = a.items.properties ? Object.keys(a.items.properties) : [], m = l.length > 0 ? l : f;
        if (m.length > 0) {
          const p = [];
          let v = !1;
          for (const g of u) {
            const E = (_) => typeof _ != "object" || _ === null ? !1 : m.some((S) => Object.prototype.hasOwnProperty.call(_, S));
            if (E(g))
              p.push(g);
            else {
              let _ = !1;
              if (typeof g == "object" && g !== null)
                for (const S in g) {
                  const h = g[S];
                  if (E(h)) {
                    p.push(h), _ = !0, v = !0;
                    break;
                  }
                  if (Array.isArray(h) && h.length > 0 && E(h[0])) {
                    p.push(...h), _ = !0, v = !0;
                    break;
                  }
                }
              _ || p.push(g);
            }
          }
          v && (u = p, t[s] = u);
        }
      }
      a.type === "object" && typeof u == "object" && u !== null ? Bf(u, a) : a.type === "array" && a.items?.type === "object" && Array.isArray(u) && u.forEach((l) => Bf(l, a.items)), a.type === "string" && typeof u != "string" ? t[s] = String(u) : a.type === "array" && a.items?.type === "string" && Array.isArray(u) && (t[s] = u.map(String));
    }
}
function Zy(t, r, s = {}) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = t.match(a);
  let l = u ? u[1].trim() : t.trim();
  const { previousContent: f } = s;
  f && (l = f + l.trimEnd());
  try {
    switch (r) {
      case "xml":
        const m = yS.validate(l);
        if (m !== !0)
          throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        let p = SS.parse(l);
        return p.root && (p = p.root), s.schema && Bf(p, s.schema), p;
      case "json":
        return JSON.parse(l);
      case "none":
        return l;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (m) {
    throw console.error(`Error parsing response in format '${r}':`, m), console.error("Raw content received:", t), r === "xml" ? m.message.startsWith("Model response is not valid XML:") ? m : new Error(`Model response is not valid XML: ${m.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${m.message}`);
  }
}
function ES(t, r, s) {
  switch (s) {
    case "xml":
      return `
<lorebooks>
  <entry>
    <worldName>${t}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
    case "json":
      return JSON.stringify(
        {
          lorebooks: {
            entry: {
              worldName: t,
              id: r.uid,
              name: r.comment,
              triggers: r.key,
              content: r.content
            }
          }
        },
        null,
        2
      ).slice(0, -2);
    // Remove the last two characters to make it incomplete
    case "none":
      return r.content;
    default:
      throw new Error(`Unsupported format specified: ${s}`);
  }
}
function CS(t) {
  const r = {};
  for (const s of ra) {
    const a = t[s], u = Ye[s];
    a != null && a !== u && (r[s] = a);
  }
  return r;
}
function kS(t) {
  if (t === void 0)
    return wS(6);
  if (typeof t == "number")
    return t;
  const r = t.trim();
  if (!r)
    throw new Error("Lorebook entry id must not be empty.");
  const s = Number(r);
  if (Number.isFinite(s))
    return s;
  throw new Error(`Lorebook entry id must be numeric. Received: ${t}`);
}
function AS(t, r, s) {
  const a = CS(r);
  switch (s) {
    case "xml":
      const u = Object.entries(a).map(([l, f]) => `    <${l}>${String(f)}</${l}>`).join(`
`);
      return `
<lorebooks>
  <entry>
    <worldName>${t}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}</content>${u ? `
${u}` : ""}
  </entry>
</lorebooks>`;
    case "json":
      return JSON.stringify(
        {
          lorebooks: {
            entry: {
              worldName: t,
              id: r.uid,
              name: r.comment,
              triggers: r.key,
              content: r.content,
              ...a
            }
          }
        },
        null,
        2
      );
    case "none":
      return r.content;
    default:
      throw new Error(`Unsupported format specified: ${s}`);
  }
}
function xS(t, r, s = {}) {
  if (!t?.trim())
    return {};
  try {
    const u = Zy(t, r, {
      previousContent: s.previousContent
    }).lorebooks;
    if (!u)
      return {};
    let l = u.entry;
    if (!l)
      return {};
    Array.isArray(l) || (l = [l]);
    const f = {};
    for (const m of l) {
      const p = m.worldName;
      if (!p)
        continue;
      f[p] || (f[p] = []);
      let v;
      Array.isArray(m.triggers) ? v = m.triggers : typeof m.triggers == "string" ? v = m.triggers.split(",").map((E) => E.trim()).filter(Boolean) : v = [];
      const g = {
        ...Ye,
        uid: kS(m.id),
        key: v,
        content: m.content ?? "",
        comment: m.name ?? "",
        disable: !1,
        keysecondary: []
      };
      for (const E of ra) {
        const _ = m[E];
        _ !== void 0 && (g[E] = _);
      }
      f[p].push(g);
    }
    return f;
  } catch (a) {
    throw a;
  }
}
var Ru = { exports: {} }, ju = { exports: {} }, Hn = {}, sn = {}, qv;
function cn() {
  if (qv) return sn;
  qv = 1, sn.__esModule = !0, sn.extend = u, sn.indexOf = p, sn.escapeExpression = v, sn.isEmpty = g, sn.createFrame = E, sn.blockParams = _, sn.appendContextPath = S;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function a(h) {
    return t[h];
  }
  function u(h) {
    for (var C = 1; C < arguments.length; C++)
      for (var x in arguments[C])
        Object.prototype.hasOwnProperty.call(arguments[C], x) && (h[x] = arguments[C][x]);
    return h;
  }
  var l = Object.prototype.toString;
  sn.toString = l;
  var f = function(C) {
    return typeof C == "function";
  };
  f(/x/) && (sn.isFunction = f = function(h) {
    return typeof h == "function" && l.call(h) === "[object Function]";
  }), sn.isFunction = f;
  var m = Array.isArray || function(h) {
    return h && typeof h == "object" ? l.call(h) === "[object Array]" : !1;
  };
  sn.isArray = m;
  function p(h, C) {
    for (var x = 0, j = h.length; x < j; x++)
      if (h[x] === C)
        return x;
    return -1;
  }
  function v(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return s.test(h) ? h.replace(r, a) : h;
  }
  function g(h) {
    return !h && h !== 0 ? !0 : !!(m(h) && h.length === 0);
  }
  function E(h) {
    var C = u({}, h);
    return C._parent = h, C;
  }
  function _(h, C) {
    return h.path = C, h;
  }
  function S(h, C) {
    return (h ? h + "." : "") + C;
  }
  return sn;
}
var Du = { exports: {} }, Zv;
function Gn() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, l) {
      var f = l && l.loc, m = void 0, p = void 0, v = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, v = f.start.column, g = f.end.column, u += " - " + m + ":" + v);
      for (var E = Error.prototype.constructor.call(this, u), _ = 0; _ < s.length; _++)
        this[s[_]] = E[s[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: v,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = v, this.endColumn = g));
      } catch {
      }
    }
    a.prototype = new Error(), r.default = a, t.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var Zs = {}, zu = { exports: {} }, Gv;
function TS() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var s = cn();
    r.default = function(a) {
      a.registerHelper("blockHelperMissing", function(u, l) {
        var f = l.inverse, m = l.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return f(this);
        if (s.isArray(u))
          return u.length > 0 ? (l.ids && (l.ids = [l.name]), a.helpers.each(u, l)) : f(this);
        if (l.data && l.ids) {
          var p = s.createFrame(l.data);
          p.contextPath = s.appendContextPath(l.data.contextPath, l.name), l = { data: p };
        }
        return m(u, l);
      });
    }, t.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Lu = { exports: {} }, Vv;
function NS() {
  return Vv || (Vv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = cn(), u = Gn(), l = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new l.default("Must pass iterator to #each");
        var v = p.fn, g = p.inverse, E = 0, _ = "", S = void 0, h = void 0;
        p.data && p.ids && (h = a.appendContextPath(p.data.contextPath, p.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), p.data && (S = a.createFrame(p.data));
        function C(c, y, w) {
          S && (S.key = c, S.index = y, S.first = y === 0, S.last = !!w, h && (S.contextPath = h + c)), _ = _ + v(m[c], {
            data: S,
            blockParams: a.blockParams([m[c], c], [h + c, null])
          });
        }
        if (m && typeof m == "object")
          if (a.isArray(m))
            for (var x = m.length; E < x; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var j = [], N = m[Symbol.iterator](), I = N.next(); !I.done; I = N.next())
              j.push(I.value);
            m = j;
            for (var x = m.length; E < x; E++)
              C(E, E, E === m.length - 1);
          } else
            (function() {
              var c = void 0;
              Object.keys(m).forEach(function(y) {
                c !== void 0 && C(c, E - 1), c = y, E++;
              }), c !== void 0 && C(c, E - 1, !0);
            })();
        return E === 0 && (_ = g(this)), _;
      });
    }, t.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var Pu = { exports: {} }, $v;
function OS() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    function s(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var a = Gn(), u = s(a);
    r.default = function(l) {
      l.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Iu = { exports: {} }, Yv;
function MS() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = cn(), u = Gn(), l = s(u);
    r.default = function(f) {
      f.registerHelper("if", function(m, p) {
        if (arguments.length != 2)
          throw new l.default("#if requires exactly one argument");
        return a.isFunction(m) && (m = m.call(this)), !p.hash.includeZero && !m || a.isEmpty(m) ? p.inverse(this) : p.fn(this);
      }), f.registerHelper("unless", function(m, p) {
        if (arguments.length != 2)
          throw new l.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, m, {
          fn: p.inverse,
          inverse: p.fn,
          hash: p.hash
        });
      });
    }, t.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Bu = { exports: {} }, Fv;
function RS() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], l = 0; l < arguments.length - 1; l++)
          a.push(arguments[l]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), a[0] = f, s.log.apply(s, a);
      });
    }, t.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Uu = { exports: {} }, Xv;
function jS() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, l) {
        return a && l.lookupProperty(a, u);
      });
    }, t.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var Hu = { exports: {} }, Qv;
function DS() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = cn(), u = Gn(), l = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new l.default("#with requires exactly one argument");
        a.isFunction(m) && (m = m.call(this));
        var v = p.fn;
        if (a.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = a.createFrame(p.data), g.contextPath = a.appendContextPath(p.data.contextPath, p.ids[0])), v(m, {
          data: g,
          blockParams: a.blockParams([m], [g && g.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var Kv;
function Gy() {
  if (Kv) return Zs;
  Kv = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = C, Zs.moveHelperToHooks = x;
  function t(j) {
    return j && j.__esModule ? j : { default: j };
  }
  var r = TS(), s = t(r), a = NS(), u = t(a), l = OS(), f = t(l), m = MS(), p = t(m), v = RS(), g = t(v), E = jS(), _ = t(E), S = DS(), h = t(S);
  function C(j) {
    s.default(j), u.default(j), f.default(j), p.default(j), g.default(j), _.default(j), h.default(j);
  }
  function x(j, N, I) {
    j.helpers[N] && (j.hooks[N] = j.helpers[N], I || delete j.helpers[N]);
  }
  return Zs;
}
var qu = {}, Zu = { exports: {} }, Jv;
function zS() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    var s = cn();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, l, f, m) {
        var p = u;
        return l.partials || (l.partials = {}, p = function(v, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, l.partials);
          var _ = u(v, g);
          return f.partials = E, _;
        }), l.partials[m.args[0]] = m.fn, p;
      });
    }, t.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var Wv;
function LS() {
  if (Wv) return qu;
  Wv = 1, qu.__esModule = !0, qu.registerDefaultDecorators = a;
  function t(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = zS(), s = t(r);
  function a(u) {
    s.default(u);
  }
  return qu;
}
var Gu = { exports: {} }, e0;
function Vy() {
  return e0 || (e0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = cn(), a = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(l) {
        if (typeof l == "string") {
          var f = s.indexOf(a.methodMap, l.toLowerCase());
          f >= 0 ? l = f : l = parseInt(l, 10);
        }
        return l;
      },
      // Can be overridden in the host environment
      log: function(l) {
        if (l = a.lookupLevel(l), typeof console < "u" && a.lookupLevel(a.level) <= l) {
          var f = a.methodMap[l];
          console[f] || (f = "log");
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), v = 1; v < m; v++)
            p[v - 1] = arguments[v];
          console[f].apply(console, p);
        }
      }
    };
    r.default = a, t.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var Ni = {}, Vu = {}, t0;
function PS() {
  if (t0) return Vu;
  t0 = 1, Vu.__esModule = !0, Vu.createNewLookupObject = r;
  var t = cn();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Vu;
}
var n0;
function $y() {
  if (n0) return Ni;
  n0 = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = l, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = v;
  function t(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = PS(), s = Vy(), a = t(s), u = /* @__PURE__ */ Object.create(null);
  function l(g) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var _ = /* @__PURE__ */ Object.create(null);
    return _.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(_, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, E, _) {
    return m(typeof g == "function" ? E.methods : E.properties, _);
  }
  function m(g, E) {
    return g.whitelist[E] !== void 0 ? g.whitelist[E] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (p(E), !1);
  }
  function p(g) {
    u[g] !== !0 && (u[g] = !0, a.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function v() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Ni;
}
var r0;
function sh() {
  if (r0) return Hn;
  r0 = 1, Hn.__esModule = !0, Hn.HandlebarsEnvironment = h;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = cn(), s = Gn(), a = t(s), u = Gy(), l = LS(), f = Vy(), m = t(f), p = $y(), v = "4.7.8";
  Hn.VERSION = v;
  var g = 8;
  Hn.COMPILER_REVISION = g;
  var E = 7;
  Hn.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var _ = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  Hn.REVISION_CHANGES = _;
  var S = "[object Object]";
  function h(x, j, N) {
    this.helpers = x || {}, this.partials = j || {}, this.decorators = N || {}, u.registerDefaultHelpers(this), l.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(j, N) {
      if (r.toString.call(j) === S) {
        if (N)
          throw new a.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, j);
      } else
        this.helpers[j] = N;
    },
    unregisterHelper: function(j) {
      delete this.helpers[j];
    },
    registerPartial: function(j, N) {
      if (r.toString.call(j) === S)
        r.extend(this.partials, j);
      else {
        if (typeof N > "u")
          throw new a.default('Attempting to register a partial called "' + j + '" as undefined');
        this.partials[j] = N;
      }
    },
    unregisterPartial: function(j) {
      delete this.partials[j];
    },
    registerDecorator: function(j, N) {
      if (r.toString.call(j) === S) {
        if (N)
          throw new a.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, j);
      } else
        this.decorators[j] = N;
    },
    unregisterDecorator: function(j) {
      delete this.decorators[j];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      p.resetLoggedProperties();
    }
  };
  var C = m.default.log;
  return Hn.log = C, Hn.createFrame = r.createFrame, Hn.logger = m.default, Hn;
}
var $u = { exports: {} }, a0;
function IS() {
  return a0 || (a0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, t.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var _r = {}, Yu = {}, i0;
function BS() {
  if (i0) return Yu;
  i0 = 1, Yu.__esModule = !0, Yu.wrapHelper = t;
  function t(r, s) {
    if (typeof r != "function")
      return r;
    var a = function() {
      var l = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(l), r.apply(this, arguments);
    };
    return a;
  }
  return Yu;
}
var s0;
function US() {
  if (s0) return _r;
  s0 = 1, _r.__esModule = !0, _r.checkRevision = g, _r.template = E, _r.wrapProgram = _, _r.resolvePartial = S, _r.invokePartial = h, _r.noop = C;
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c) {
    if (c && c.__esModule)
      return c;
    var y = {};
    if (c != null)
      for (var w in c)
        Object.prototype.hasOwnProperty.call(c, w) && (y[w] = c[w]);
    return y.default = c, y;
  }
  var s = cn(), a = r(s), u = Gn(), l = t(u), f = sh(), m = Gy(), p = BS(), v = $y();
  function g(c) {
    var y = c && c[0] || 1, w = f.COMPILER_REVISION;
    if (!(y >= f.LAST_COMPATIBLE_COMPILER_REVISION && y <= f.COMPILER_REVISION))
      if (y < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], M = f.REVISION_CHANGES[y];
        throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + M + ").");
      } else
        throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + c[1] + ").");
  }
  function E(c, y) {
    if (!y)
      throw new l.default("No environment passed to template");
    if (!c || !c.main)
      throw new l.default("Unknown template object: " + typeof c);
    c.main.decorator = c.main_d, y.VM.checkRevision(c.compiler);
    var w = c.compiler && c.compiler[0] === 7;
    function k(R, L, q) {
      q.hash && (L = a.extend({}, L, q.hash), q.ids && (q.ids[0] = !0)), R = y.VM.resolvePartial.call(this, R, L, q);
      var F = a.extend({}, q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), $ = y.VM.invokePartial.call(this, R, L, F);
      if ($ == null && y.compile && (q.partials[q.name] = y.compile(R, c.compilerOptions, y), $ = q.partials[q.name](L, F)), $ != null) {
        if (q.indent) {
          for (var W = $.split(`
`), O = 0, U = W.length; O < U && !(!W[O] && O + 1 === U); O++)
            W[O] = q.indent + W[O];
          $ = W.join(`
`);
        }
        return $;
      } else
        throw new l.default("The partial " + q.name + " could not be compiled when running in runtime-only mode");
    }
    var M = {
      strict: function(L, q, F) {
        if (!L || !(q in L))
          throw new l.default('"' + q + '" not defined in ' + L, {
            loc: F
          });
        return M.lookupProperty(L, q);
      },
      lookupProperty: function(L, q) {
        var F = L[q];
        if (F == null || Object.prototype.hasOwnProperty.call(L, q) || v.resultIsAllowed(F, M.protoAccessControl, q))
          return F;
      },
      lookup: function(L, q) {
        for (var F = L.length, $ = 0; $ < F; $++) {
          var W = L[$] && M.lookupProperty(L[$], q);
          if (W != null)
            return L[$][q];
        }
      },
      lambda: function(L, q) {
        return typeof L == "function" ? L.call(q) : L;
      },
      escapeExpression: a.escapeExpression,
      invokePartial: k,
      fn: function(L) {
        var q = c[L];
        return q.decorator = c[L + "_d"], q;
      },
      programs: [],
      program: function(L, q, F, $, W) {
        var O = this.programs[L], U = this.fn(L);
        return q || W || $ || F ? O = _(this, L, U, q, F, $, W) : O || (O = this.programs[L] = _(this, L, U)), O;
      },
      data: function(L, q) {
        for (; L && q--; )
          L = L._parent;
        return L;
      },
      mergeIfNeeded: function(L, q) {
        var F = L || q;
        return L && q && L !== q && (F = a.extend({}, q, L)), F;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: y.VM.noop,
      compilerInfo: c.compiler
    };
    function z(R) {
      var L = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], q = L.data;
      z._setup(L), !L.partial && c.useData && (q = x(R, q));
      var F = void 0, $ = c.useBlockParams ? [] : void 0;
      c.useDepths && (L.depths ? F = R != L.depths[0] ? [R].concat(L.depths) : L.depths : F = [R]);
      function W(O) {
        return "" + c.main(M, O, M.helpers, M.partials, q, $, F);
      }
      return W = j(c.main, W, M, L.depths || [], q, $), W(R, L);
    }
    return z.isTop = !0, z._setup = function(R) {
      if (R.partial)
        M.protoAccessControl = R.protoAccessControl, M.helpers = R.helpers, M.partials = R.partials, M.decorators = R.decorators, M.hooks = R.hooks;
      else {
        var L = a.extend({}, y.helpers, R.helpers);
        N(L, M), M.helpers = L, c.usePartial && (M.partials = M.mergeIfNeeded(R.partials, y.partials)), (c.usePartial || c.useDecorators) && (M.decorators = a.extend({}, y.decorators, R.decorators)), M.hooks = {}, M.protoAccessControl = v.createProtoAccessControl(R);
        var q = R.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(M, "helperMissing", q), m.moveHelperToHooks(M, "blockHelperMissing", q);
      }
    }, z._child = function(R, L, q, F) {
      if (c.useBlockParams && !q)
        throw new l.default("must pass block params");
      if (c.useDepths && !F)
        throw new l.default("must pass parent depths");
      return _(M, R, c[R], L, 0, q, F);
    }, z;
  }
  function _(c, y, w, k, M, z, R) {
    function L(q) {
      var F = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = R;
      return R && q != R[0] && !(q === c.nullContext && R[0] === null) && ($ = [q].concat(R)), w(c, q, c.helpers, c.partials, F.data || k, z && [F.blockParams].concat(z), $);
    }
    return L = j(w, L, c, R, k, z), L.program = y, L.depth = R ? R.length : 0, L.blockParams = M || 0, L;
  }
  function S(c, y, w) {
    return c ? !c.call && !w.name && (w.name = c, c = w.partials[c]) : w.name === "@partial-block" ? c = w.data["partial-block"] : c = w.partials[w.name], c;
  }
  function h(c, y, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var M = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var z = w.fn;
      M = w.data["partial-block"] = function(L) {
        var q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return q.data = f.createFrame(q.data), q.data["partial-block"] = k, z(L, q);
      }, z.partials && (w.partials = a.extend({}, w.partials, z.partials));
    })(), c === void 0 && M && (c = M), c === void 0)
      throw new l.default("The partial " + w.name + " could not be found");
    if (c instanceof Function)
      return c(y, w);
  }
  function C() {
    return "";
  }
  function x(c, y) {
    return (!y || !("root" in y)) && (y = y ? f.createFrame(y) : {}, y.root = c), y;
  }
  function j(c, y, w, k, M, z) {
    if (c.decorator) {
      var R = {};
      y = c.decorator(y, R, w, k && k[0], M, z, k), a.extend(y, R);
    }
    return y;
  }
  function N(c, y) {
    Object.keys(c).forEach(function(w) {
      var k = c[w];
      c[w] = I(k, y);
    });
  }
  function I(c, y) {
    var w = y.lookupProperty;
    return p.wrapHelper(c, function(k) {
      return a.extend({ lookupProperty: w }, k);
    });
  }
  return _r;
}
var Fu = { exports: {} }, o0;
function Yy() {
  return o0 || (o0 = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var a = globalThis.Handlebars;
      s.noConflict = function() {
        return globalThis.Handlebars === s && (globalThis.Handlebars = a), s;
      };
    }, t.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var u0;
function HS() {
  return u0 || (u0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(N) {
      return N && N.__esModule ? N : { default: N };
    }
    function a(N) {
      if (N && N.__esModule)
        return N;
      var I = {};
      if (N != null)
        for (var c in N)
          Object.prototype.hasOwnProperty.call(N, c) && (I[c] = N[c]);
      return I.default = N, I;
    }
    var u = sh(), l = a(u), f = IS(), m = s(f), p = Gn(), v = s(p), g = cn(), E = a(g), _ = US(), S = a(_), h = Yy(), C = s(h);
    function x() {
      var N = new l.HandlebarsEnvironment();
      return E.extend(N, l), N.SafeString = m.default, N.Exception = v.default, N.Utils = E, N.escapeExpression = E.escapeExpression, N.VM = S, N.template = function(I) {
        return S.template(I, N);
      }, N;
    }
    var j = x();
    j.create = x, C.default(j), j.default = j, r.default = j, t.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var Xu = { exports: {} }, l0;
function Fy() {
  return l0 || (l0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(u) {
          return u.type === "SubExpression" || (u.type === "MustacheStatement" || u.type === "BlockStatement") && !!(u.params && u.params.length || u.hash);
        },
        scopedId: function(u) {
          return /^\.|this\b/.test(u.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(u) {
          return u.parts.length === 1 && !s.helpers.scopedId(u) && !u.depth;
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Xu, Xu.exports)), Xu.exports;
}
var Oi = {}, Qu = { exports: {} }, c0;
function qS() {
  return c0 || (c0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, v, g, E, _, S) {
          var h = _.length - 1;
          switch (E) {
            case 1:
              return _[h - 1];
            case 2:
              this.$ = g.prepareProgram(_[h]);
              break;
            case 3:
              this.$ = _[h];
              break;
            case 4:
              this.$ = _[h];
              break;
            case 5:
              this.$ = _[h];
              break;
            case 6:
              this.$ = _[h];
              break;
            case 7:
              this.$ = _[h];
              break;
            case 8:
              this.$ = _[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(_[h]),
                strip: g.stripFlags(_[h], _[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[h],
                value: _[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 12:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[h - 5], path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: g.stripFlags(_[h - 5], _[h]) };
              break;
            case 16:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: g.stripFlags(_[h - 5], _[h]) };
              break;
            case 17:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: g.stripFlags(_[h - 5], _[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(_[h - 1], _[h - 1]), program: _[h] };
              break;
            case 19:
              var C = g.prepareBlock(_[h - 2], _[h - 1], _[h], _[h], !1, this._$), x = g.prepareProgram([C], _[h - 1].loc);
              x.chained = !0, this.$ = { strip: _[h - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = _[h];
              break;
            case 21:
              this.$ = { path: _[h - 1], strip: g.stripFlags(_[h - 2], _[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], g.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], g.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                indent: "",
                strip: g.stripFlags(_[h - 4], _[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 26:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1], strip: g.stripFlags(_[h - 4], _[h]) };
              break;
            case 27:
              this.$ = _[h];
              break;
            case 28:
              this.$ = _[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(_[h - 2]), value: _[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(_[h - 1]);
              break;
            case 33:
              this.$ = _[h];
              break;
            case 34:
              this.$ = _[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[h], original: _[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[h]), original: Number(_[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[h] === "true", original: _[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[h];
              break;
            case 41:
              this.$ = _[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, _[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, _[h], this._$);
              break;
            case 44:
              _[h - 2].push({ part: g.id(_[h]), original: _[h], separator: _[h - 1] }), this.$ = _[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(_[h]), original: _[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              _[h - 1].push(_[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              _[h - 1].push(_[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              _[h - 1].push(_[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              _[h - 1].push(_[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              _[h - 1].push(_[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              _[h - 1].push(_[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              _[h - 1].push(_[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              _[h - 1].push(_[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              _[h - 1].push(_[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              _[h - 1].push(_[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              _[h - 1].push(_[h]);
              break;
            case 98:
              this.$ = [_[h]];
              break;
            case 99:
              _[h - 1].push(_[h]);
              break;
            case 100:
              this.$ = [_[h]];
              break;
            case 101:
              _[h - 1].push(_[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, p) {
          throw new Error(m);
        },
        parse: function(m) {
          var p = this, v = [0], g = [null], E = [], _ = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          E.push(x);
          var j = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function N() {
            var F;
            return F = p.lexer.lex() || 1, typeof F != "number" && (F = p.symbols_[F] || F), F;
          }
          for (var I, c, y, w, k = {}, M, z, R, L; ; ) {
            if (c = v[v.length - 1], this.defaultActions[c] ? y = this.defaultActions[c] : ((I === null || typeof I > "u") && (I = N()), y = _[c] && _[c][I]), typeof y > "u" || !y.length || !y[0]) {
              var q = "";
              {
                L = [];
                for (M in _[c]) this.terminals_[M] && M > 2 && L.push("'" + this.terminals_[M] + "'");
                this.lexer.showPosition ? q = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + L.join(", ") + ", got '" + (this.terminals_[I] || I) + "'" : q = "Parse error on line " + (h + 1) + ": Unexpected " + (I == 1 ? "end of input" : "'" + (this.terminals_[I] || I) + "'"), this.parseError(q, { text: this.lexer.match, token: this.terminals_[I] || I, line: this.lexer.yylineno, loc: x, expected: L });
              }
            }
            if (y[0] instanceof Array && y.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + c + ", token: " + I);
            switch (y[0]) {
              case 1:
                v.push(I), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), v.push(y[1]), I = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (z = this.productions_[y[1]][1], k.$ = g[g.length - z], k._$ = { first_line: E[E.length - (z || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (z || 1)].first_column, last_column: E[E.length - 1].last_column }, j && (k._$.range = [E[E.length - (z || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, y[1], g, E), typeof w < "u")
                  return w;
                z && (v = v.slice(0, -1 * z * 2), g = g.slice(0, -1 * z), E = E.slice(0, -1 * z)), v.push(this.productions_[y[1]][0]), g.push(k.$), E.push(k._$), R = _[v[v.length - 2]][v[v.length - 1]], v.push(R);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, u = (function() {
        var f = {
          EOF: 1,
          parseError: function(p, v) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, v);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var v = p.match(/(?:\r\n?|\n).*/g);
            return v ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var v = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - v - 1), this.offset -= v;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var _ = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - v
            }, this.options.ranges && (this.yylloc.range = [_[0], _[0] + this.yyleng - v]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(p) {
            this.unput(this.match.slice(p));
          },
          pastInput: function() {
            var p = this.matched.substr(0, this.matched.length - this.match.length);
            return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var p = this.match;
            return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var p = this.pastInput(), v = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + v + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, v, g, E, _;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (g = this._input.match(this.rules[S[h]]), !(g && (!v || g[0].length > v[0].length) && (v = g, E = h, !this.options.flex))); h++)
              ;
            return v ? (_ = v[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
            }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var p = this.next();
            return typeof p < "u" ? p : this.lex();
          },
          begin: function(p) {
            this.conditionStack.push(p);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(p) {
            this.begin(p);
          }
        };
        return f.options = {}, f.performAction = function(p, v, g, E) {
          function _(S, h) {
            return v.yytext = v.yytext.substring(S, v.yyleng - h + S);
          }
          switch (g) {
            case 0:
              if (v.yytext.slice(-2) === "\\\\" ? (_(0, 1), this.begin("mu")) : v.yytext.slice(-1) === "\\" ? (_(0, 1), this.begin("emu")) : this.begin("mu"), v.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (_(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(v.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return v.yytext = _(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return v.yytext = _(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return v.yytext = v.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      a.lexer = u;
      function l() {
        this.yy = {};
      }
      return l.prototype = a, a.Parser = l, new l();
    })();
    r.default = s, t.exports = r.default;
  })(Qu, Qu.exports)), Qu.exports;
}
var Ku = { exports: {} }, Ju = { exports: {} }, d0;
function Xy() {
  return d0 || (d0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var a = Gn(), u = s(a);
    function l() {
      this.parents = [];
    }
    l.prototype = {
      constructor: l,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(g, E) {
        var _ = this.accept(g[E]);
        if (this.mutating) {
          if (_ && !l.prototype[_.type])
            throw new u.default('Unexpected node type "' + _.type + '" found when accepting ' + E + " on " + g.type);
          g[E] = _;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(g, E) {
        if (this.acceptKey(g, E), !g[E])
          throw new u.default(g.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(g) {
        for (var E = 0, _ = g.length; E < _; E++)
          this.acceptKey(g, E), g[E] || (g.splice(E, 1), E--, _--);
      },
      accept: function(g) {
        if (g) {
          if (!this[g.type])
            throw new u.default("Unknown type: " + g.type, g);
          this.current && this.parents.unshift(this.current), this.current = g;
          var E = this[g.type](g);
          if (this.current = this.parents.shift(), !this.mutating || E)
            return E;
          if (E !== !1)
            return g;
        }
      },
      Program: function(g) {
        this.acceptArray(g.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: p,
      PartialBlockStatement: function(g) {
        p.call(this, g), this.acceptKey(g, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(g) {
        this.acceptArray(g.pairs);
      },
      HashPair: function(g) {
        this.acceptRequired(g, "value");
      }
    };
    function f(v) {
      this.acceptRequired(v, "path"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    function m(v) {
      f.call(this, v), this.acceptKey(v, "program"), this.acceptKey(v, "inverse");
    }
    function p(v) {
      this.acceptRequired(v, "name"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    r.default = l, t.exports = r.default;
  })(Ju, Ju.exports)), Ju.exports;
}
var f0;
function ZS() {
  return f0 || (f0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = Xy(), u = s(a);
    function l() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    l.prototype = new u.default(), l.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = g.body, h = 0, C = S.length; h < C; h++) {
        var x = S[h], j = this.accept(x);
        if (j) {
          var N = f(S, h, _), I = m(S, h, _), c = j.openStandalone && N, y = j.closeStandalone && I, w = j.inlineStandalone && N && I;
          j.close && p(S, h, !0), j.open && v(S, h, !0), E && w && (p(S, h), v(S, h) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && c && (p((x.program || x.inverse).body), v(S, h)), E && y && (p(S, h), v((x.inverse || x.program).body));
        }
      }
      return g;
    }, l.prototype.BlockStatement = l.prototype.DecoratorBlock = l.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var E = g.program || g.inverse, _ = g.program && g.inverse, S = _, h = _;
      if (_ && _.chained)
        for (S = _.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((S || E).body)
      };
      if (g.openStrip.close && p(E.body, null, !0), _) {
        var x = g.inverseStrip;
        x.open && v(E.body, null, !0), x.close && p(S.body, null, !0), g.closeStrip.open && v(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (v(E.body), p(S.body));
      } else g.closeStrip.open && v(E.body, null, !0);
      return C;
    }, l.prototype.Decorator = l.prototype.MustacheStatement = function(g) {
      return g.strip;
    }, l.prototype.PartialStatement = l.prototype.CommentStatement = function(g) {
      var E = g.strip || {};
      return {
        inlineStandalone: !0,
        open: E.open,
        close: E.close
      };
    };
    function f(g, E, _) {
      E === void 0 && (E = g.length);
      var S = g[E - 1], h = g[E - 2];
      if (!S)
        return _;
      if (S.type === "ContentStatement")
        return (h || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(S.original);
    }
    function m(g, E, _) {
      E === void 0 && (E = -1);
      var S = g[E + 1], h = g[E + 2];
      if (!S)
        return _;
      if (S.type === "ContentStatement")
        return (h || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(S.original);
    }
    function p(g, E, _) {
      var S = g[E == null ? 0 : E + 1];
      if (!(!S || S.type !== "ContentStatement" || !_ && S.rightStripped)) {
        var h = S.value;
        S.value = S.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), S.rightStripped = S.value !== h;
      }
    }
    function v(g, E, _) {
      var S = g[E == null ? g.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !_ && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = l, t.exports = r.default;
  })(Ku, Ku.exports)), Ku.exports;
}
var _n = {}, h0;
function GS() {
  if (h0) return _n;
  h0 = 1, _n.__esModule = !0, _n.SourceLocation = u, _n.id = l, _n.stripFlags = f, _n.stripComment = m, _n.preparePath = p, _n.prepareMustache = v, _n.prepareRawBlock = g, _n.prepareBlock = E, _n.prepareProgram = _, _n.preparePartialBlock = S;
  function t(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Gn(), s = t(r);
  function a(h, C) {
    if (C = C.path ? C.path.original : C, h.path.original !== C) {
      var x = { loc: h.path.loc };
      throw new s.default(h.path.original + " doesn't match " + C, x);
    }
  }
  function u(h, C) {
    this.source = h, this.start = {
      line: C.first_line,
      column: C.first_column
    }, this.end = {
      line: C.last_line,
      column: C.last_column
    };
  }
  function l(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, C) {
    return {
      open: h.charAt(2) === "~",
      close: C.charAt(C.length - 3) === "~"
    };
  }
  function m(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function p(h, C, x) {
    x = this.locInfo(x);
    for (var j = h ? "@" : "", N = [], I = 0, c = 0, y = C.length; c < y; c++) {
      var w = C[c].part, k = C[c].original !== w;
      if (j += (C[c].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (N.length > 0)
          throw new s.default("Invalid path: " + j, { loc: x });
        w === ".." && I++;
      } else
        N.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: I,
      parts: N,
      original: j,
      loc: x
    };
  }
  function v(h, C, x, j, N, I) {
    var c = j.charAt(3) || j.charAt(2), y = c !== "{" && c !== "&", w = /\*/.test(j);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: x,
      escaped: y,
      strip: N,
      loc: this.locInfo(I)
    };
  }
  function g(h, C, x, j) {
    a(h, x), j = this.locInfo(j);
    var N = {
      type: "Program",
      body: C,
      strip: {},
      loc: j
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: N,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: j
    };
  }
  function E(h, C, x, j, N, I) {
    j && j.path && a(h, j);
    var c = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var y = void 0, w = void 0;
    if (x) {
      if (c)
        throw new s.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = j.strip), w = x.strip, y = x.program;
    }
    return N && (N = y, y = C, C = N), {
      type: c ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      inverse: y,
      openStrip: h.strip,
      inverseStrip: w,
      closeStrip: j && j.strip,
      loc: this.locInfo(I)
    };
  }
  function _(h, C) {
    if (!C && h.length) {
      var x = h[0].loc, j = h[h.length - 1].loc;
      x && j && (C = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: j.end.line,
          column: j.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: C
    };
  }
  function S(h, C, x, j) {
    return a(h, x), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: h.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(j)
    };
  }
  return _n;
}
var p0;
function VS() {
  if (p0) return Oi;
  p0 = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = g, Oi.parse = E;
  function t(_) {
    if (_ && _.__esModule)
      return _;
    var S = {};
    if (_ != null)
      for (var h in _)
        Object.prototype.hasOwnProperty.call(_, h) && (S[h] = _[h]);
    return S.default = _, S;
  }
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var s = qS(), a = r(s), u = ZS(), l = r(u), f = GS(), m = t(f), p = cn();
  Oi.parser = a.default;
  var v = {};
  p.extend(v, m);
  function g(_, S) {
    if (_.type === "Program")
      return _;
    a.default.yy = v, v.locInfo = function(C) {
      return new v.SourceLocation(S && S.srcName, C);
    };
    var h = a.default.parse(_);
    return h;
  }
  function E(_, S) {
    var h = g(_, S), C = new l.default(S);
    return C.accept(h);
  }
  return Oi;
}
var Mi = {}, m0;
function $S() {
  if (m0) return Mi;
  m0 = 1, Mi.__esModule = !0, Mi.Compiler = m, Mi.precompile = p, Mi.compile = v;
  function t(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = Gn(), s = t(r), a = cn(), u = Fy(), l = t(u), f = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(S) {
      var h = this.opcodes.length;
      if (S.opcodes.length !== h)
        return !1;
      for (var C = 0; C < h; C++) {
        var x = this.opcodes[C], j = S.opcodes[C];
        if (x.opcode !== j.opcode || !g(x.args, j.args))
          return !1;
      }
      h = this.children.length;
      for (var C = 0; C < h; C++)
        if (!this.children[C].equals(S.children[C]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(S, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = a.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(S);
    },
    compileProgram: function(S) {
      var h = new this.compiler(), C = h.compile(S, this.options), x = this.guid++;
      return this.usePartial = this.usePartial || C.usePartial, this.children[x] = C, this.useDepths = this.useDepths || C.useDepths, x;
    },
    accept: function(S) {
      if (!this[S.type])
        throw new s.default("Unknown type: " + S.type, S);
      this.sourceNode.unshift(S);
      var h = this[S.type](S);
      return this.sourceNode.shift(), h;
    },
    Program: function(S) {
      this.options.blockParams.unshift(S.blockParams);
      for (var h = S.body, C = h.length, x = 0; x < C; x++)
        this.accept(h[x]);
      return this.options.blockParams.shift(), this.isSimple = C === 1, this.blockParams = S.blockParams ? S.blockParams.length : 0, this;
    },
    BlockStatement: function(S) {
      E(S);
      var h = S.program, C = S.inverse;
      h = h && this.compileProgram(h), C = C && this.compileProgram(C);
      var x = this.classifySexpr(S);
      x === "helper" ? this.helperSexpr(S, h, C) : x === "simple" ? (this.simpleSexpr(S), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("blockValue", S.path.original)) : (this.ambiguousSexpr(S, h, C), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(S) {
      var h = S.program && this.compileProgram(S.program), C = this.setupFullMustacheParams(S, h, void 0), x = S.path;
      this.useDecorators = !0, this.opcode("registerDecorator", C.length, x.original);
    },
    PartialStatement: function(S) {
      this.usePartial = !0;
      var h = S.program;
      h && (h = this.compileProgram(S.program));
      var C = S.params;
      if (C.length > 1)
        throw new s.default("Unsupported number of partial arguments: " + C.length, S);
      C.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : C.push({ type: "PathExpression", parts: [], depth: 0 }));
      var x = S.name.original, j = S.name.type === "SubExpression";
      j && this.accept(S.name), this.setupFullMustacheParams(S, h, void 0, !0);
      var N = S.indent || "";
      this.options.preventIndent && N && (this.opcode("appendContent", N), N = ""), this.opcode("invokePartial", j, x, N), this.opcode("append");
    },
    PartialBlockStatement: function(S) {
      this.PartialStatement(S);
    },
    MustacheStatement: function(S) {
      this.SubExpression(S), S.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(S) {
      this.DecoratorBlock(S);
    },
    ContentStatement: function(S) {
      S.value && this.opcode("appendContent", S.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(S) {
      E(S);
      var h = this.classifySexpr(S);
      h === "simple" ? this.simpleSexpr(S) : h === "helper" ? this.helperSexpr(S) : this.ambiguousSexpr(S);
    },
    ambiguousSexpr: function(S, h, C) {
      var x = S.path, j = x.parts[0], N = h != null || C != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", j, N);
    },
    simpleSexpr: function(S) {
      var h = S.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(S, h, C) {
      var x = this.setupFullMustacheParams(S, h, C), j = S.path, N = j.parts[0];
      if (this.options.knownHelpers[N])
        this.opcode("invokeKnownHelper", x.length, N);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + N, S);
        j.strict = !0, j.falsy = !0, this.accept(j), this.opcode("invokeHelper", x.length, j.original, l.default.helpers.simpleId(j));
      }
    },
    PathExpression: function(S) {
      this.addDepth(S.depth), this.opcode("getContext", S.depth);
      var h = S.parts[0], C = l.default.helpers.scopedId(S), x = !S.depth && !C && this.blockParamIndex(h);
      x ? this.opcode("lookupBlockParam", x, S.parts) : h ? S.data ? (this.options.data = !0, this.opcode("lookupData", S.depth, S.parts, S.strict)) : this.opcode("lookupOnContext", S.parts, S.falsy, S.strict, C) : this.opcode("pushContext");
    },
    StringLiteral: function(S) {
      this.opcode("pushString", S.value);
    },
    NumberLiteral: function(S) {
      this.opcode("pushLiteral", S.value);
    },
    BooleanLiteral: function(S) {
      this.opcode("pushLiteral", S.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(S) {
      var h = S.pairs, C = 0, x = h.length;
      for (this.opcode("pushHash"); C < x; C++)
        this.pushParam(h[C].value);
      for (; C--; )
        this.opcode("assignToHash", h[C].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(S) {
      this.opcodes.push({
        opcode: S,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(S) {
      S && (this.useDepths = !0);
    },
    classifySexpr: function(S) {
      var h = l.default.helpers.simpleId(S.path), C = h && !!this.blockParamIndex(S.path.parts[0]), x = !C && l.default.helpers.helperExpression(S), j = !C && (x || h);
      if (j && !x) {
        var N = S.path.parts[0], I = this.options;
        I.knownHelpers[N] ? x = !0 : I.knownHelpersOnly && (j = !1);
      }
      return x ? "helper" : j ? "ambiguous" : "simple";
    },
    pushParams: function(S) {
      for (var h = 0, C = S.length; h < C; h++)
        this.pushParam(S[h]);
    },
    pushParam: function(S) {
      var h = S.value != null ? S.value : S.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), S.depth && this.addDepth(S.depth), this.opcode("getContext", S.depth || 0), this.opcode("pushStringParam", h, S.type), S.type === "SubExpression" && this.accept(S);
      else {
        if (this.trackIds) {
          var C = void 0;
          if (S.parts && !l.default.helpers.scopedId(S) && !S.depth && (C = this.blockParamIndex(S.parts[0])), C) {
            var x = S.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", C, x);
          } else
            h = S.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", S.type, h);
        }
        this.accept(S);
      }
    },
    setupFullMustacheParams: function(S, h, C, x) {
      var j = S.params;
      return this.pushParams(j), this.opcode("pushProgram", h), this.opcode("pushProgram", C), S.hash ? this.accept(S.hash) : this.opcode("emptyHash", x), j;
    },
    blockParamIndex: function(S) {
      for (var h = 0, C = this.options.blockParams.length; h < C; h++) {
        var x = this.options.blockParams[h], j = x && a.indexOf(x, S);
        if (x && j >= 0)
          return [h, j];
      }
    }
  };
  function p(_, S, h) {
    if (_ == null || typeof _ != "string" && _.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + _);
    S = S || {}, "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = h.parse(_, S), x = new h.Compiler().compile(C, S);
    return new h.JavaScriptCompiler().compile(x, S);
  }
  function v(_, S, h) {
    if (S === void 0 && (S = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    S = a.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function x() {
      var N = h.parse(_, S), I = new h.Compiler().compile(N, S), c = new h.JavaScriptCompiler().compile(I, S, void 0, !0);
      return h.template(c);
    }
    function j(N, I) {
      return C || (C = x()), C.call(this, N, I);
    }
    return j._setup = function(N) {
      return C || (C = x()), C._setup(N);
    }, j._child = function(N, I, c, y) {
      return C || (C = x()), C._child(N, I, c, y);
    }, j;
  }
  function g(_, S) {
    if (_ === S)
      return !0;
    if (a.isArray(_) && a.isArray(S) && _.length === S.length) {
      for (var h = 0; h < _.length; h++)
        if (!g(_[h], S[h]))
          return !1;
      return !0;
    }
  }
  function E(_) {
    if (!_.path.parts) {
      var S = _.path;
      _.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [S.original + ""],
        original: S.original + "",
        loc: S.loc
      };
    }
  }
  return Mi;
}
var Wu = { exports: {} }, el = { exports: {} }, Gs = {}, pf = {}, tl = {}, nl = {}, g0;
function YS() {
  if (g0) return nl;
  g0 = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return nl.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, nl.decode = function(r) {
    var s = 65, a = 90, u = 97, l = 122, f = 48, m = 57, p = 43, v = 47, g = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= l ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == v ? 63 : -1;
  }, nl;
}
var v0;
function Qy() {
  if (v0) return tl;
  v0 = 1;
  var t = YS(), r = 5, s = 1 << r, a = s - 1, u = s;
  function l(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, v = m >> 1;
    return p ? -v : v;
  }
  return tl.encode = function(p) {
    var v = "", g, E = l(p);
    do
      g = E & a, E >>>= r, E > 0 && (g |= u), v += t.encode(g);
    while (E > 0);
    return v;
  }, tl.decode = function(p, v, g) {
    var E = p.length, _ = 0, S = 0, h, C;
    do {
      if (v >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = t.decode(p.charCodeAt(v++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(v - 1));
      h = !!(C & u), C &= a, _ = _ + (C << S), S += r;
    } while (h);
    g.value = f(_), g.rest = v;
  }, tl;
}
var mf = {}, y0;
function co() {
  return y0 || (y0 = 1, (function(t) {
    function r(c, y, w) {
      if (y in c)
        return c[y];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + y + '" is a required argument.');
    }
    t.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;
    function u(c) {
      var y = c.match(s);
      return y ? {
        scheme: y[1],
        auth: y[2],
        host: y[3],
        port: y[4],
        path: y[5]
      } : null;
    }
    t.urlParse = u;
    function l(c) {
      var y = "";
      return c.scheme && (y += c.scheme + ":"), y += "//", c.auth && (y += c.auth + "@"), c.host && (y += c.host), c.port && (y += ":" + c.port), c.path && (y += c.path), y;
    }
    t.urlGenerate = l;
    function f(c) {
      var y = c, w = u(c);
      if (w) {
        if (!w.path)
          return c;
        y = w.path;
      }
      for (var k = t.isAbsolute(y), M = y.split(/\/+/), z, R = 0, L = M.length - 1; L >= 0; L--)
        z = M[L], z === "." ? M.splice(L, 1) : z === ".." ? R++ : R > 0 && (z === "" ? (M.splice(L + 1, R), R = 0) : (M.splice(L, 2), R--));
      return y = M.join("/"), y === "" && (y = k ? "/" : "."), w ? (w.path = y, l(w)) : y;
    }
    t.normalize = f;
    function m(c, y) {
      c === "" && (c = "."), y === "" && (y = ".");
      var w = u(y), k = u(c);
      if (k && (c = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), l(w);
      if (w || y.match(a))
        return y;
      if (k && !k.host && !k.path)
        return k.host = y, l(k);
      var M = y.charAt(0) === "/" ? y : f(c.replace(/\/+$/, "") + "/" + y);
      return k ? (k.path = M, l(k)) : M;
    }
    t.join = m, t.isAbsolute = function(c) {
      return c.charAt(0) === "/" || s.test(c);
    };
    function p(c, y) {
      c === "" && (c = "."), c = c.replace(/\/$/, "");
      for (var w = 0; y.indexOf(c + "/") !== 0; ) {
        var k = c.lastIndexOf("/");
        if (k < 0 || (c = c.slice(0, k), c.match(/^([^\/]+:\/)?\/*$/)))
          return y;
        ++w;
      }
      return Array(w + 1).join("../") + y.substr(c.length + 1);
    }
    t.relative = p;
    var v = (function() {
      var c = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in c);
    })();
    function g(c) {
      return c;
    }
    function E(c) {
      return S(c) ? "$" + c : c;
    }
    t.toSetString = v ? g : E;
    function _(c) {
      return S(c) ? c.slice(1) : c;
    }
    t.fromSetString = v ? g : _;
    function S(c) {
      if (!c)
        return !1;
      var y = c.length;
      if (y < 9 || c.charCodeAt(y - 1) !== 95 || c.charCodeAt(y - 2) !== 95 || c.charCodeAt(y - 3) !== 111 || c.charCodeAt(y - 4) !== 116 || c.charCodeAt(y - 5) !== 111 || c.charCodeAt(y - 6) !== 114 || c.charCodeAt(y - 7) !== 112 || c.charCodeAt(y - 8) !== 95 || c.charCodeAt(y - 9) !== 95)
        return !1;
      for (var w = y - 10; w >= 0; w--)
        if (c.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function h(c, y, w) {
      var k = x(c.source, y.source);
      return k !== 0 || (k = c.originalLine - y.originalLine, k !== 0) || (k = c.originalColumn - y.originalColumn, k !== 0 || w) || (k = c.generatedColumn - y.generatedColumn, k !== 0) || (k = c.generatedLine - y.generatedLine, k !== 0) ? k : x(c.name, y.name);
    }
    t.compareByOriginalPositions = h;
    function C(c, y, w) {
      var k = c.generatedLine - y.generatedLine;
      return k !== 0 || (k = c.generatedColumn - y.generatedColumn, k !== 0 || w) || (k = x(c.source, y.source), k !== 0) || (k = c.originalLine - y.originalLine, k !== 0) || (k = c.originalColumn - y.originalColumn, k !== 0) ? k : x(c.name, y.name);
    }
    t.compareByGeneratedPositionsDeflated = C;
    function x(c, y) {
      return c === y ? 0 : c === null ? 1 : y === null ? -1 : c > y ? 1 : -1;
    }
    function j(c, y) {
      var w = c.generatedLine - y.generatedLine;
      return w !== 0 || (w = c.generatedColumn - y.generatedColumn, w !== 0) || (w = x(c.source, y.source), w !== 0) || (w = c.originalLine - y.originalLine, w !== 0) || (w = c.originalColumn - y.originalColumn, w !== 0) ? w : x(c.name, y.name);
    }
    t.compareByGeneratedPositionsInflated = j;
    function N(c) {
      return JSON.parse(c.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = N;
    function I(c, y, w) {
      if (y = y || "", c && (c[c.length - 1] !== "/" && y[0] !== "/" && (c += "/"), y = c + y), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var M = k.path.lastIndexOf("/");
          M >= 0 && (k.path = k.path.substring(0, M + 1));
        }
        y = m(l(k), y);
      }
      return f(y);
    }
    t.computeSourceURL = I;
  })(mf)), mf;
}
var gf = {}, _0;
function Ky() {
  if (_0) return gf;
  _0 = 1;
  var t = co(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(l, f) {
    for (var m = new a(), p = 0, v = l.length; p < v; p++)
      m.add(l[p], f);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(l, f) {
    var m = s ? l : t.toSetString(l), p = s ? this.has(l) : r.call(this._set, m), v = this._array.length;
    (!p || f) && this._array.push(l), p || (s ? this._set.set(l, v) : this._set[m] = v);
  }, a.prototype.has = function(l) {
    if (s)
      return this._set.has(l);
    var f = t.toSetString(l);
    return r.call(this._set, f);
  }, a.prototype.indexOf = function(l) {
    if (s) {
      var f = this._set.get(l);
      if (f >= 0)
        return f;
    } else {
      var m = t.toSetString(l);
      if (r.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + l + '" is not in the set.');
  }, a.prototype.at = function(l) {
    if (l >= 0 && l < this._array.length)
      return this._array[l];
    throw new Error("No element indexed by " + l);
  }, a.prototype.toArray = function() {
    return this._array.slice();
  }, gf.ArraySet = a, gf;
}
var vf = {}, b0;
function FS() {
  if (b0) return vf;
  b0 = 1;
  var t = co();
  function r(a, u) {
    var l = a.generatedLine, f = u.generatedLine, m = a.generatedColumn, p = u.generatedColumn;
    return f > l || f == l && p >= m || t.compareByGeneratedPositionsInflated(a, u) <= 0;
  }
  function s() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return s.prototype.unsortedForEach = function(u, l) {
    this._array.forEach(u, l);
  }, s.prototype.add = function(u) {
    r(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, s.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, vf.MappingList = s, vf;
}
var S0;
function Jy() {
  if (S0) return pf;
  S0 = 1;
  var t = Qy(), r = co(), s = Ky().ArraySet, a = FS().MappingList;
  function u(l) {
    l || (l = {}), this._file = r.getArg(l, "file", null), this._sourceRoot = r.getArg(l, "sourceRoot", null), this._skipValidation = r.getArg(l, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(v) {
      var g = {
        generated: {
          line: v.generatedLine,
          column: v.generatedColumn
        }
      };
      v.source != null && (g.source = v.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: v.originalLine,
        column: v.originalColumn
      }, v.name != null && (g.name = v.name)), p.addMapping(g);
    }), f.sources.forEach(function(v) {
      var g = v;
      m !== null && (g = r.relative(m, v)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(v);
      E != null && p.setSourceContent(v, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), v = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, v, g), v != null && (v = String(v), this._sources.has(v) || this._sources.add(v)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: v,
      name: g
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var v = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      v = f.file;
    }
    var g = this._sourceRoot;
    g != null && (v = r.relative(g, v));
    var E = new s(), _ = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === v && S.originalLine != null) {
        var h = f.originalPositionFor({
          line: S.originalLine,
          column: S.originalColumn
        });
        h.source != null && (S.source = h.source, p != null && (S.source = r.join(p, S.source)), g != null && (S.source = r.relative(g, S.source)), S.originalLine = h.line, S.originalColumn = h.column, h.name != null && (S.name = h.name));
      }
      var C = S.source;
      C != null && !E.has(C) && E.add(C);
      var x = S.name;
      x != null && !_.has(x) && _.add(x);
    }, this), this._sources = E, this._names = _, f.sources.forEach(function(S) {
      var h = f.sourceContentFor(S);
      h != null && (p != null && (S = r.join(p, S)), g != null && (S = r.relative(g, S)), this.setSourceContent(S, h));
    }, this);
  }, u.prototype._validateMapping = function(f, m, p, v) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !v)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: v
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, v = 0, g = 0, E = 0, _ = "", S, h, C, x, j = this._mappings.toArray(), N = 0, I = j.length; N < I; N++) {
      if (h = j[N], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (N > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, j[N - 1]))
          continue;
        S += ",";
      }
      S += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (x = this._sources.indexOf(h.source), S += t.encode(x - E), E = x, S += t.encode(h.originalLine - 1 - v), v = h.originalLine - 1, S += t.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += t.encode(C - g), g = C)), _ += S;
    }
    return _;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var v = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, v) ? this._sourcesContents[v] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, pf.SourceMapGenerator = u, pf;
}
var Vs = {}, yf = {}, w0;
function XS() {
  return w0 || (w0 = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, l, f, m) {
      var p = Math.floor((a - s) / 2) + s, v = f(u, l[p], !0);
      return v === 0 ? p : v > 0 ? a - p > 1 ? r(p, a, u, l, f, m) : m == t.LEAST_UPPER_BOUND ? a < l.length ? a : -1 : p : p - s > 1 ? r(s, p, u, l, f, m) : m == t.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    t.search = function(a, u, l, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        a,
        u,
        l,
        f || t.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && l(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(yf)), yf;
}
var _f = {}, E0;
function QS() {
  if (E0) return _f;
  E0 = 1;
  function t(a, u, l) {
    var f = a[u];
    a[u] = a[l], a[l] = f;
  }
  function r(a, u) {
    return Math.round(a + Math.random() * (u - a));
  }
  function s(a, u, l, f) {
    if (l < f) {
      var m = r(l, f), p = l - 1;
      t(a, m, f);
      for (var v = a[f], g = l; g < f; g++)
        u(a[g], v) <= 0 && (p += 1, t(a, p, g));
      t(a, p + 1, g);
      var E = p + 1;
      s(a, u, l, E - 1), s(a, u, E + 1, f);
    }
  }
  return _f.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, _f;
}
var C0;
function KS() {
  if (C0) return Vs;
  C0 = 1;
  var t = co(), r = XS(), s = Ky().ArraySet, a = Qy(), u = QS().quickSort;
  function l(v, g) {
    var E = v;
    return typeof v == "string" && (E = t.parseSourceMapInput(v)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  l.fromSourceMap = function(v, g) {
    return f.fromSourceMap(v, g);
  }, l.prototype._version = 3, l.prototype.__generatedMappings = null, Object.defineProperty(l.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), l.prototype.__originalMappings = null, Object.defineProperty(l.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), l.prototype._charIsMappingSeparator = function(g, E) {
    var _ = g.charAt(E);
    return _ === ";" || _ === ",";
  }, l.prototype._parseMappings = function(g, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, l.GENERATED_ORDER = 1, l.ORIGINAL_ORDER = 2, l.GREATEST_LOWER_BOUND = 1, l.LEAST_UPPER_BOUND = 2, l.prototype.eachMapping = function(g, E, _) {
    var S = E || null, h = _ || l.GENERATED_ORDER, C;
    switch (h) {
      case l.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case l.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var x = this.sourceRoot;
    C.map(function(j) {
      var N = j.source === null ? null : this._sources.at(j.source);
      return N = t.computeSourceURL(x, N, this._sourceMapURL), {
        source: N,
        generatedLine: j.generatedLine,
        generatedColumn: j.generatedColumn,
        originalLine: j.originalLine,
        originalColumn: j.originalColumn,
        name: j.name === null ? null : this._names.at(j.name)
      };
    }, this).forEach(g, S);
  }, l.prototype.allGeneratedPositionsFor = function(g) {
    var E = t.getArg(g, "line"), _ = {
      source: t.getArg(g, "source"),
      originalLine: E,
      originalColumn: t.getArg(g, "column", 0)
    };
    if (_.source = this._findSourceIndex(_.source), _.source < 0)
      return [];
    var S = [], h = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var C = this._originalMappings[h];
      if (g.column === void 0)
        for (var x = C.originalLine; C && C.originalLine === x; )
          S.push({
            line: t.getArg(C, "generatedLine", null),
            column: t.getArg(C, "generatedColumn", null),
            lastColumn: t.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
      else
        for (var j = C.originalColumn; C && C.originalLine === E && C.originalColumn == j; )
          S.push({
            line: t.getArg(C, "generatedLine", null),
            column: t.getArg(C, "generatedColumn", null),
            lastColumn: t.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return S;
  }, Vs.SourceMapConsumer = l;
  function f(v, g) {
    var E = v;
    typeof v == "string" && (E = t.parseSourceMapInput(v));
    var _ = t.getArg(E, "version"), S = t.getArg(E, "sources"), h = t.getArg(E, "names", []), C = t.getArg(E, "sourceRoot", null), x = t.getArg(E, "sourcesContent", null), j = t.getArg(E, "mappings"), N = t.getArg(E, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    C && (C = t.normalize(C)), S = S.map(String).map(t.normalize).map(function(I) {
      return C && t.isAbsolute(C) && t.isAbsolute(I) ? t.relative(C, I) : I;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(I) {
      return t.computeSourceURL(C, I, g);
    }), this.sourceRoot = C, this.sourcesContent = x, this._mappings = j, this._sourceMapURL = g, this.file = N;
  }
  f.prototype = Object.create(l.prototype), f.prototype.consumer = l, f.prototype._findSourceIndex = function(v) {
    var g = v;
    if (this.sourceRoot != null && (g = t.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == v)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var _ = Object.create(f.prototype), S = _._names = s.fromArray(g._names.toArray(), !0), h = _._sources = s.fromArray(g._sources.toArray(), !0);
    _.sourceRoot = g._sourceRoot, _.sourcesContent = g._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = g._file, _._sourceMapURL = E, _._absoluteSources = _._sources.toArray().map(function(w) {
      return t.computeSourceURL(_.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), x = _.__generatedMappings = [], j = _.__originalMappings = [], N = 0, I = C.length; N < I; N++) {
      var c = C[N], y = new m();
      y.generatedLine = c.generatedLine, y.generatedColumn = c.generatedColumn, c.source && (y.source = h.indexOf(c.source), y.originalLine = c.originalLine, y.originalColumn = c.originalColumn, c.name && (y.name = S.indexOf(c.name)), j.push(y)), x.push(y);
    }
    return u(_.__originalMappings, t.compareByOriginalPositions), _;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var _ = 1, S = 0, h = 0, C = 0, x = 0, j = 0, N = g.length, I = 0, c = {}, y = {}, w = [], k = [], M, z, R, L, q; I < N; )
      if (g.charAt(I) === ";")
        _++, I++, S = 0;
      else if (g.charAt(I) === ",")
        I++;
      else {
        for (M = new m(), M.generatedLine = _, L = I; L < N && !this._charIsMappingSeparator(g, L); L++)
          ;
        if (z = g.slice(I, L), R = c[z], R)
          I += z.length;
        else {
          for (R = []; I < L; )
            a.decode(g, I, y), q = y.value, I = y.rest, R.push(q);
          if (R.length === 2)
            throw new Error("Found a source, but no line and column");
          if (R.length === 3)
            throw new Error("Found a source and line, but no column");
          c[z] = R;
        }
        M.generatedColumn = S + R[0], S = M.generatedColumn, R.length > 1 && (M.source = x + R[1], x += R[1], M.originalLine = h + R[2], h = M.originalLine, M.originalLine += 1, M.originalColumn = C + R[3], C = M.originalColumn, R.length > 4 && (M.name = j + R[4], j += R[4])), k.push(M), typeof M.originalLine == "number" && w.push(M);
      }
    u(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, t.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(g, E, _, S, h, C) {
    if (g[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[_]);
    if (g[S] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[S]);
    return r.search(g, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var E = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var _ = this._generatedMappings[g + 1];
        if (E.generatedLine === _.generatedLine) {
          E.lastGeneratedColumn = _.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, _ = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(g, "bias", l.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var S = this._generatedMappings[_];
      if (S.generatedLine === E.generatedLine) {
        var h = t.getArg(S, "source", null);
        h !== null && (h = this._sources.at(h), h = t.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var C = t.getArg(S, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: h,
          line: t.getArg(S, "originalLine", null),
          column: t.getArg(S, "originalColumn", null),
          name: C
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(g, E) {
    if (!this.sourcesContent)
      return null;
    var _ = this._findSourceIndex(g);
    if (_ >= 0)
      return this.sourcesContent[_];
    var S = g;
    this.sourceRoot != null && (S = t.relative(this.sourceRoot, S));
    var h;
    if (this.sourceRoot != null && (h = t.urlParse(this.sourceRoot))) {
      var C = S.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + S))
        return this.sourcesContent[this._sources.indexOf("/" + S)];
    }
    if (E)
      return null;
    throw new Error('"' + S + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(g) {
    var E = t.getArg(g, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var _ = {
      source: E,
      originalLine: t.getArg(g, "line"),
      originalColumn: t.getArg(g, "column")
    }, S = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(g, "bias", l.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var h = this._originalMappings[S];
      if (h.source === _.source)
        return {
          line: t.getArg(h, "generatedLine", null),
          column: t.getArg(h, "generatedColumn", null),
          lastColumn: t.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Vs.BasicSourceMapConsumer = f;
  function p(v, g) {
    var E = v;
    typeof v == "string" && (E = t.parseSourceMapInput(v));
    var _ = t.getArg(E, "version"), S = t.getArg(E, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    this._sources = new s(), this._names = new s();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = S.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = t.getArg(C, "offset"), j = t.getArg(x, "line"), N = t.getArg(x, "column");
      if (j < h.line || j === h.line && N < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: j + 1,
          generatedColumn: N + 1
        },
        consumer: new l(t.getArg(C, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(l.prototype), p.prototype.constructor = l, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var v = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          v.push(this._sections[g].consumer.sources[E]);
      return v;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: t.getArg(g, "line"),
      generatedColumn: t.getArg(g, "column")
    }, _ = r.search(
      E,
      this._sections,
      function(h, C) {
        var x = h.generatedLine - C.generatedOffset.generatedLine;
        return x || h.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), S = this._sections[_];
    return S ? S.consumer.originalPositionFor({
      line: E.generatedLine - (S.generatedOffset.generatedLine - 1),
      column: E.generatedColumn - (S.generatedOffset.generatedLine === E.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(g, E) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var S = this._sections[_], h = S.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var E = 0; E < this._sections.length; E++) {
      var _ = this._sections[E];
      if (_.consumer._findSourceIndex(t.getArg(g, "source")) !== -1) {
        var S = _.consumer.generatedPositionFor(g);
        if (S) {
          var h = {
            line: S.line + (_.generatedOffset.generatedLine - 1),
            column: S.column + (_.generatedOffset.generatedLine === S.line ? _.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(g, E) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var S = this._sections[_], h = S.consumer._generatedMappings, C = 0; C < h.length; C++) {
        var x = h[C], j = S.consumer._sources.at(x.source);
        j = t.computeSourceURL(S.consumer.sourceRoot, j, this._sourceMapURL), this._sources.add(j), j = this._sources.indexOf(j);
        var N = null;
        x.name && (N = S.consumer._names.at(x.name), this._names.add(N), N = this._names.indexOf(N));
        var I = {
          source: j,
          generatedLine: x.generatedLine + (S.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (S.generatedOffset.generatedLine === x.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: N
        };
        this.__generatedMappings.push(I), typeof I.originalLine == "number" && this.__originalMappings.push(I);
      }
    u(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), u(this.__originalMappings, t.compareByOriginalPositions);
  }, Vs.IndexedSourceMapConsumer = p, Vs;
}
var bf = {}, k0;
function JS() {
  if (k0) return bf;
  k0 = 1;
  var t = Jy().SourceMapGenerator, r = co(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function l(f, m, p, v, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, v != null && this.add(v);
  }
  return l.fromStringWithSourceMap = function(m, p, v) {
    var g = new l(), E = m.split(s), _ = 0, S = function() {
      var N = c(), I = c() || "";
      return N + I;
      function c() {
        return _ < E.length ? E[_++] : void 0;
      }
    }, h = 1, C = 0, x = null;
    return p.eachMapping(function(N) {
      if (x !== null)
        if (h < N.generatedLine)
          j(x, S()), h++, C = 0;
        else {
          var I = E[_] || "", c = I.substr(0, N.generatedColumn - C);
          E[_] = I.substr(N.generatedColumn - C), C = N.generatedColumn, j(x, c), x = N;
          return;
        }
      for (; h < N.generatedLine; )
        g.add(S()), h++;
      if (C < N.generatedColumn) {
        var I = E[_] || "";
        g.add(I.substr(0, N.generatedColumn)), E[_] = I.substr(N.generatedColumn), C = N.generatedColumn;
      }
      x = N;
    }, this), _ < E.length && (x && j(x, S()), g.add(E.splice(_).join(""))), p.sources.forEach(function(N) {
      var I = p.sourceContentFor(N);
      I != null && (v != null && (N = r.join(v, N)), g.setSourceContent(N, I));
    }), g;
    function j(N, I) {
      if (N === null || N.source === void 0)
        g.add(I);
      else {
        var c = v ? r.join(v, N.source) : N.source;
        g.add(new l(
          N.originalLine,
          N.originalColumn,
          c,
          I,
          N.name
        ));
      }
    }
  }, l.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(p) {
        this.add(p);
      }, this);
    else if (m[u] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, l.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var p = m.length - 1; p >= 0; p--)
        this.prepend(m[p]);
    else if (m[u] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, l.prototype.walk = function(m) {
    for (var p, v = 0, g = this.children.length; v < g; v++)
      p = this.children[v], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, l.prototype.join = function(m) {
    var p, v, g = this.children.length;
    if (g > 0) {
      for (p = [], v = 0; v < g - 1; v++)
        p.push(this.children[v]), p.push(m);
      p.push(this.children[v]), this.children = p;
    }
    return this;
  }, l.prototype.replaceRight = function(m, p) {
    var v = this.children[this.children.length - 1];
    return v[u] ? v.replaceRight(m, p) : typeof v == "string" ? this.children[this.children.length - 1] = v.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, l.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, l.prototype.walkSourceContents = function(m) {
    for (var p = 0, v = this.children.length; p < v; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, v = g.length; p < v; p++)
      m(r.fromSetString(g[p]), this.sourceContents[g[p]]);
  }, l.prototype.toString = function() {
    var m = "";
    return this.walk(function(p) {
      m += p;
    }), m;
  }, l.prototype.toStringWithSourceMap = function(m) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, v = new t(m), g = !1, E = null, _ = null, S = null, h = null;
    return this.walk(function(C, x) {
      p.code += C, x.source !== null && x.line !== null && x.column !== null ? ((E !== x.source || _ !== x.line || S !== x.column || h !== x.name) && v.addMapping({
        source: x.source,
        original: {
          line: x.line,
          column: x.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: x.name
      }), E = x.source, _ = x.line, S = x.column, h = x.name, g = !0) : g && (v.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var j = 0, N = C.length; j < N; j++)
        C.charCodeAt(j) === a ? (p.line++, p.column = 0, j + 1 === N ? (E = null, g = !1) : g && v.addMapping({
          source: x.source,
          original: {
            line: x.line,
            column: x.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: x.name
        })) : p.column++;
    }), this.walkSourceContents(function(C, x) {
      v.setSourceContent(C, x);
    }), { code: p.code, map: v };
  }, bf.SourceNode = l, bf;
}
var A0;
function WS() {
  return A0 || (A0 = 1, Gs.SourceMapGenerator = Jy().SourceMapGenerator, Gs.SourceMapConsumer = KS().SourceMapConsumer, Gs.SourceNode = JS().SourceNode), Gs;
}
var x0;
function ew() {
  return x0 || (x0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = cn(), a = void 0;
    try {
      var u = WS();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, p, v, g) {
      this.src = "", g && this.add(g);
    }, a.prototype = {
      add: function(p) {
        s.isArray(p) && (p = p.join("")), this.src += p;
      },
      prepend: function(p) {
        s.isArray(p) && (p = p.join("")), this.src = p + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function l(m, p, v) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, _ = m.length; E < _; E++)
          g.push(p.wrap(m[E], v));
        return g;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function f(m) {
      this.srcFile = m, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(p, v) {
        this.source.unshift(this.wrap(p, v));
      },
      push: function(p, v) {
        this.source.push(this.wrap(p, v));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(v) {
          p.add(["  ", v, `
`]);
        }), p;
      },
      each: function(p) {
        for (var v = 0, g = this.source.length; v < g; v++)
          p(this.source[v]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new a(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var v = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof a ? p : (p = l(p, this, v), new a(v.start.line, v.start.column, this.srcFile, p));
      },
      functionCall: function(p, v, g) {
        return g = this.generateList(g), this.wrap([p, v ? "." + v + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var v = this, g = [];
        Object.keys(p).forEach(function(_) {
          var S = l(p[_], v);
          S !== "undefined" && g.push([v.quotedString(_), ":", S]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var v = this.empty(), g = 0, E = p.length; g < E; g++)
          g && v.add(","), v.add(l(p[g], this));
        return v;
      },
      generateArray: function(p) {
        var v = this.generateList(p);
        return v.prepend("["), v.add("]"), v;
      }
    }, r.default = f, t.exports = r.default;
  })(el, el.exports)), el.exports;
}
var T0;
function tw() {
  return T0 || (T0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var a = sh(), u = Gn(), l = s(u), f = cn(), m = ew(), p = s(m);
    function v(_) {
      this.value = _;
    }
    function g() {
    }
    g.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(S, h) {
        return this.internalNameLookup(S, h);
      },
      depthedLookup: function(S) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(S), ")"];
      },
      compilerInfo: function() {
        var S = a.COMPILER_REVISION, h = a.REVISION_CHANGES[S];
        return [S, h];
      },
      appendToBuffer: function(S, h, C) {
        return f.isArray(S) || (S = [S]), S = this.source.wrap(S, h), this.environment.isSimple ? ["return ", S, ";"] : C ? ["buffer += ", S, ";"] : (S.appendToBuffer = !0, S);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(S, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", S, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(S, h, C, x) {
        this.environment = S, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !x, this.name = this.environment.name, this.isChild = !!C, this.context = C || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(S, h), this.useDepths = this.useDepths || S.useDepths || S.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || S.useBlockParams;
        var j = S.opcodes, N = void 0, I = void 0, c = void 0, y = void 0;
        for (c = 0, y = j.length; c < y; c++)
          N = j[c], this.source.currentLocation = N.loc, I = I || N.loc, this[N.opcode].apply(this, N.args);
        if (this.source.currentLocation = I, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new l.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var w = this.createFunctionContext(x);
        if (this.isChild)
          return w;
        var k = {
          compiler: this.compilerInfo(),
          main: w
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var M = this.context, z = M.programs, R = M.decorators;
        for (c = 0, y = z.length; c < y; c++)
          z[c] && (k[c] = z[c], R[c] && (k[c + "_d"] = R[c], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), x ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(S) {
        var h = this, C = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (C += ", " + x.join(", "));
        var j = 0;
        Object.keys(this.aliases).forEach(function(c) {
          var y = h.aliases[c];
          y.children && y.referenceCount > 1 && (C += ", alias" + ++j + "=" + c, y.children[0] = "alias" + j);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var N = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && N.push("blockParams"), this.useDepths && N.push("depths");
        var I = this.mergeSource(C);
        return S ? (N.push(I), Function.apply(this, N)) : this.source.wrap(["function(", N.join(","), `) {
  `, I, "}"]);
      },
      mergeSource: function(S) {
        var h = this.environment.isSimple, C = !this.forceBuffer, x = void 0, j = void 0, N = void 0, I = void 0;
        return this.source.each(function(c) {
          c.appendToBuffer ? (N ? c.prepend("  + ") : N = c, I = c) : (N && (j ? N.prepend("buffer += ") : x = !0, I.add(";"), N = I = void 0), j = !0, h || (C = !1));
        }), C ? N ? (N.prepend("return "), I.add(";")) : j || this.source.push('return "";') : (S += ", buffer = " + (x ? "" : this.initializeBuffer()), N ? (N.prepend("return buffer + "), I.add(";")) : this.source.push("return buffer;")), S && this.source.prepend("var " + S.substring(2) + (x ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(S) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), C = [this.contextName(0)];
        this.setupHelperArgs(S, 0, C);
        var x = this.popStack();
        C.splice(1, 0, x), this.push(this.source.functionCall(h, "call", C));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var S = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var C = this.topStack();
        h.splice(1, 0, C), this.pushSource(["if (!", this.lastHelper, ") { ", C, " = ", this.source.functionCall(S, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(S) {
        this.pendingContent ? S = this.pendingContent + S : this.pendingLocation = this.source.currentLocation, this.pendingContent = S;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var S = this.popStack();
          this.pushSource(["if (", S, " != null) { ", this.appendToBuffer(S, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(S) {
        this.lastContext = S;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(S, h, C, x) {
        var j = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(S[j++])) : this.pushContext(), this.resolvePath("context", S, j, h, C);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(S, h) {
        this.useBlockParams = !0, this.push(["blockParams[", S[0], "][", S[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(S, h, C) {
        S ? this.pushStackLiteral("container.data(data, " + S + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, C);
      },
      resolvePath: function(S, h, C, x, j) {
        var N = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && j, this, h, C, S));
          return;
        }
        for (var I = h.length; C < I; C++)
          this.replaceStack(function(c) {
            var y = N.nameLookup(c, h[C], S);
            return x ? [" && ", y] : [" != null ? ", y, " : ", c];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(S, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof S == "string" ? this.pushString(S) : this.pushStackLiteral(S));
      },
      emptyHash: function(S) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(S ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var S = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(S.ids)), this.stringParams && (this.push(this.objectLiteral(S.contexts)), this.push(this.objectLiteral(S.types))), this.push(this.objectLiteral(S.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(S) {
        this.pushStackLiteral(this.quotedString(S));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(S) {
        this.pushStackLiteral(S);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(S) {
        S != null ? this.pushStackLiteral(this.programExpression(S)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(S, h) {
        var C = this.nameLookup("decorators", h, "decorator"), x = this.setupHelperArgs(h, S);
        this.decorators.push(["fn = ", this.decorators.functionCall(C, "", ["fn", "props", "container", x]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(S, h, C) {
        var x = this.popStack(), j = this.setupHelper(S, h), N = [];
        C && N.push(j.name), N.push(x), this.options.strict || N.push(this.aliasable("container.hooks.helperMissing"));
        var I = ["(", this.itemsSeparatedBy(N, "||"), ")"], c = this.source.functionCall(I, "call", j.callParams);
        this.push(c);
      },
      itemsSeparatedBy: function(S, h) {
        var C = [];
        C.push(S[0]);
        for (var x = 1; x < S.length; x++)
          C.push(h, S[x]);
        return C;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(S, h) {
        var C = this.setupHelper(S, h);
        this.push(this.source.functionCall(C.name, "call", C.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(S, h) {
        this.useRegister("helper");
        var C = this.popStack();
        this.emptyHash();
        var x = this.setupHelper(0, S, h), j = this.lastHelper = this.nameLookup("helpers", S, "helper"), N = ["(", "(helper = ", j, " || ", C, ")"];
        this.options.strict || (N[0] = "(helper = ", N.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", N, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(S, h, C) {
        var x = [], j = this.setupParams(h, 1, x);
        S && (h = this.popStack(), delete j.name), C && (j.indent = JSON.stringify(C)), j.helpers = "helpers", j.partials = "partials", j.decorators = "container.decorators", S ? x.unshift(h) : x.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (j.depths = "depths"), j = this.objectLiteral(j), x.push(j), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(S) {
        var h = this.popStack(), C = void 0, x = void 0, j = void 0;
        this.trackIds && (j = this.popStack()), this.stringParams && (x = this.popStack(), C = this.popStack());
        var N = this.hash;
        C && (N.contexts[S] = C), x && (N.types[S] = x), j && (N.ids[S] = j), N.values[S] = h;
      },
      pushId: function(S, h, C) {
        S === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : S === "PathExpression" ? this.pushString(h) : S === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(S, h) {
        for (var C = S.children, x = void 0, j = void 0, N = 0, I = C.length; N < I; N++) {
          x = C[N], j = new this.compiler();
          var c = this.matchExistingProgram(x);
          if (c == null) {
            this.context.programs.push("");
            var y = this.context.programs.length;
            x.index = y, x.name = "program" + y, this.context.programs[y] = j.compile(x, h, this.context, !this.precompile), this.context.decorators[y] = j.decorators, this.context.environments[y] = x, this.useDepths = this.useDepths || j.useDepths, this.useBlockParams = this.useBlockParams || j.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
          } else
            x.index = c.index, x.name = "program" + c.index, this.useDepths = this.useDepths || c.useDepths, this.useBlockParams = this.useBlockParams || c.useBlockParams;
        }
      },
      matchExistingProgram: function(S) {
        for (var h = 0, C = this.context.environments.length; h < C; h++) {
          var x = this.context.environments[h];
          if (x && x.equals(S))
            return x;
        }
      },
      programExpression: function(S) {
        var h = this.environment.children[S], C = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths"), "container.program(" + C.join(", ") + ")";
      },
      useRegister: function(S) {
        this.registers[S] || (this.registers[S] = !0, this.registers.list.push(S));
      },
      push: function(S) {
        return S instanceof v || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new v(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, x = void 0, j = void 0;
        if (!this.isInline())
          throw new l.default("replaceStack on non-inline");
        var N = this.popStack(!0);
        if (N instanceof v)
          C = [N.value], h = ["(", C], j = !0;
        else {
          x = !0;
          var I = this.incrStack();
          h = ["((", this.push(I), " = ", N, ")"], C = this.topStack();
        }
        var c = S.call(this, C);
        j || this.popStack(), x && this.stackSlot--, this.push(h.concat(c, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var S = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, C = S.length; h < C; h++) {
          var x = S[h];
          if (x instanceof v)
            this.compileStack.push(x);
          else {
            var j = this.incrStack();
            this.pushSource([j, " = ", x, ";"]), this.compileStack.push(j);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(S) {
        var h = this.isInline(), C = (h ? this.inlineStack : this.compileStack).pop();
        if (!S && C instanceof v)
          return C.value;
        if (!h) {
          if (!this.stackSlot)
            throw new l.default("Invalid stack pop");
          this.stackSlot--;
        }
        return C;
      },
      topStack: function() {
        var S = this.isInline() ? this.inlineStack : this.compileStack, h = S[S.length - 1];
        return h instanceof v ? h.value : h;
      },
      contextName: function(S) {
        return this.useDepths && S ? "depths[" + S + "]" : "depth" + S;
      },
      quotedString: function(S) {
        return this.source.quotedString(S);
      },
      objectLiteral: function(S) {
        return this.source.objectLiteral(S);
      },
      aliasable: function(S) {
        var h = this.aliases[S];
        return h ? (h.referenceCount++, h) : (h = this.aliases[S] = this.source.wrap(S), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(S, h, C) {
        var x = [], j = this.setupHelperArgs(h, S, x, C), N = this.nameLookup("helpers", h, "helper"), I = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: j,
          name: N,
          callParams: [I].concat(x)
        };
      },
      setupParams: function(S, h, C) {
        var x = {}, j = [], N = [], I = [], c = !C, y = void 0;
        c && (C = []), x.name = this.quotedString(S), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (x.fn = k || "container.noop", x.inverse = w || "container.noop");
        for (var M = h; M--; )
          y = this.popStack(), C[M] = y, this.trackIds && (I[M] = this.popStack()), this.stringParams && (N[M] = this.popStack(), j[M] = this.popStack());
        return c && (x.args = this.source.generateArray(C)), this.trackIds && (x.ids = this.source.generateArray(I)), this.stringParams && (x.types = this.source.generateArray(N), x.contexts = this.source.generateArray(j)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(S, h, C, x) {
        var j = this.setupParams(S, h, C);
        return j.loc = JSON.stringify(this.source.currentLocation), j = this.objectLiteral(j), x ? (this.useRegister("options"), C.push("options"), ["options=", j]) : C ? (C.push(j), "") : j;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = g.RESERVED_WORDS = {}, h = 0, C = _.length; h < C; h++)
        S[_[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(_) {
      return !g.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function E(_, S, h, C, x) {
      var j = S.popStack(), N = h.length;
      for (_ && N--; C < N; C++)
        j = S.nameLookup(j, h[C], x);
      return _ ? [S.aliasable("container.strict"), "(", j, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : j;
    }
    r.default = g, t.exports = r.default;
  })(Wu, Wu.exports)), Wu.exports;
}
var N0;
function nw() {
  return N0 || (N0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(N) {
      return N && N.__esModule ? N : { default: N };
    }
    var a = HS(), u = s(a), l = Fy(), f = s(l), m = VS(), p = $S(), v = tw(), g = s(v), E = Xy(), _ = s(E), S = Yy(), h = s(S), C = u.default.create;
    function x() {
      var N = C();
      return N.compile = function(I, c) {
        return p.compile(I, c, N);
      }, N.precompile = function(I, c) {
        return p.precompile(I, c, N);
      }, N.AST = f.default, N.Compiler = p.Compiler, N.JavaScriptCompiler = g.default, N.Parser = m.parser, N.parse = m.parse, N.parseWithoutProcessing = m.parseWithoutProcessing, N;
    }
    var j = x();
    j.create = x, h.default(j), j.Visitor = _.default, j.default = j, r.default = j, t.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var ln = nw();
const je = SillyTavern.getContext();
new dy("dumb", {}).getSettings();
async function Wy({
  profileId: t,
  userPrompt: r,
  responseFormat: s,
  buildPromptOptions: a,
  session: u,
  entriesGroupByWorldName: l,
  promptSettings: f,
  mainContextList: m,
  maxResponseToken: p,
  continueFrom: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const E = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((I) => I.id === t);
  if (!E)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const _ = E.api ? je.CONNECT_API_MAP[E.api].selected : void 0;
  if (!_)
    throw new Error(`Could not determine API for profile "${E.name}".`);
  const S = {};
  S.user = "{{user}}", S.char = "{{char}}", S.persona = "{{persona}}", S.responseFormat = s, S.blackListedEntries = u.blackListedEntries;
  const h = r.trim();
  v && v.mode === "revise" ? S.userInstructions = "" : S.userInstructions = ln.compile(h, { noEscape: !0 })(S);
  {
    const I = {};
    Object.entries(l).filter(
      ([c, y]) => y.length > 0 && u.selectedWorldNames.includes(c) && y.some((w) => !w?.disable)
    ).forEach(([c, y]) => {
      let w = y.filter((M) => !M?.disable);
      const k = u.selectedEntryUids?.[c];
      if (k && k.length > 0) {
        const M = new Set(k);
        w = w.filter((z) => M.has(z.uid));
      }
      w.length > 0 && (I[c] = w);
    }), S.currentLorebooks = I;
  }
  {
    const I = {};
    Object.entries(u.suggestedEntries).filter(([c, y]) => y.length > 0).forEach(([c, y]) => {
      I[c] = y.filter(
        (w) => !(c === v?.worldName && w.uid === v.entry.uid && w.comment === v.entry.comment)
      );
    }), S.suggestedLorebooks = I;
  }
  const C = [];
  {
    for (const I of m) {
      if (I.promptName === "chatHistory") {
        C.push(...(await wy(_, a)).result);
        continue;
      }
      const c = f[I.promptName];
      if (!c)
        continue;
      const y = {
        role: I.role,
        content: ln.compile(c.content, { noEscape: !0 })(S)
      };
      y.content = je.substituteParams(y.content), y.content && C.push(y);
    }
    v && (v.mode === "continue" ? C.push({
      role: "assistant",
      content: ES(v.worldName, v.entry, s)
    }) : v.mode === "revise" && (C.push({
      role: "assistant",
      content: AS(v.worldName, v.entry, s)
    }), h && C.push({
      role: "user",
      content: h
    })));
  }
  const x = await je.ConnectionManagerRequestService.sendRequest(
    t,
    C,
    p
  ), j = C.find((I) => I.role === "assistant");
  if (!x.content)
    return {};
  let N = xS(x.content, s, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: v && v.mode === "continue" ? j?.content : void 0
  });
  return Object.keys(N).length === 0 ? {} : (Object.entries(N).forEach(([I, c]) => {
    l[I] && c.forEach((y) => {
      const w = l[I]?.find((k) => k.uid === y.uid);
      w && (y.key.length === 0 && (y.key = w.key), y.comment || (y.comment = w.comment)), (y.comment === null || y.comment === void 0) && (y.comment = "");
    });
  }), N = v ? { [v.worldName]: [N[v.worldName][0]] } : N, N);
}
function rw(t, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === t.uid);
  let l;
  const f = u !== -1;
  if (f)
    l = a[u];
  else {
    const m = { entries: {} };
    a.forEach((g) => m.entries[g.uid] = g);
    const p = Wf(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const v = a.length > 0 ? a[a.length - 1] : void 0;
    if (v) {
      const g = p.uid;
      Object.assign(p, v), p.uid = g;
    }
    l = p, a.push(l);
  }
  l.key = t.key, l.content = t.content, l.comment = t.comment;
  for (const m of ra)
    l[m] = t[m];
  return { modifiedEntry: l, status: f ? "updated" : "added" };
}
function aw() {
  const t = je.extensionSettings?.connectionManager?.profiles ?? [];
  return t.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => t.find((a) => a.name?.includes(s))?.name
  }));
}
const zi = "SillyTavern-WorldInfo-Recommender-Plus", iw = "0.3.0", sw = "F_1.6", ow = {
  EXTENSION: "worldInfoRecommender"
}, rl = [
  "stDescription",
  "currentLorebooks",
  "blackListedEntries",
  "suggestedLorebooks",
  "responseRules",
  "taskDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription",
  "reviseGlobalStateUpdate",
  "reviseGlobalStateUpdateAddedModified",
  "reviseGlobalStateUpdateRemoved"
], nt = {
  stDescription: f8,
  currentLorebooks: h8,
  blackListedEntries: p8,
  suggestedLorebooks: m8,
  responseRules: g8,
  taskDescription: v8,
  reviseJsonPrompt: y8,
  reviseXmlPrompt: _8,
  reviseTaskDescription: b8,
  reviseGlobalStateUpdate: E8,
  reviseGlobalStateUpdateAddedModified: S8,
  reviseGlobalStateUpdateRemoved: w8
}, io = {
  version: iw,
  formatVersion: sw,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "all",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    authorNote: !0,
    worldInfo: !0,
    suggestedEntries: !0
  },
  defaultPromptEngineeringMode: "native",
  responseFormat: "xml",
  prompts: {
    stDescription: {
      label: "SillyTavern Description",
      content: nt.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: nt.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: nt.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: nt.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: nt.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: nt.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: nt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: nt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: nt.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    reviseGlobalStateUpdate: {
      content: nt.reviseGlobalStateUpdate,
      isDefault: !0,
      label: "Revise Global State Update (Wrapper)"
    },
    reviseGlobalStateUpdateAddedModified: {
      content: nt.reviseGlobalStateUpdateAddedModified,
      isDefault: !0,
      label: "Revise Global State (Added/Modified)"
    },
    reviseGlobalStateUpdateRemoved: {
      content: nt.reviseGlobalStateUpdateRemoved,
      isDefault: !0,
      label: "Revise Global State (Removed)"
    }
  },
  promptPreset: "default",
  promptPresets: {
    default: {
      content: ""
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          promptName: "chatHistory",
          // this is exception, since chat history is not exactly a prompt
          enabled: !0,
          role: "system"
        },
        {
          promptName: "stDescription",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "currentLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "blackListedEntries",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "suggestedLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "responseRules",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "taskDescription",
          enabled: !0,
          role: "user"
        }
      ]
    }
  }
};
function al(t, r) {
  const s = t.prompts[r], a = io.prompts[r];
  if (!s) {
    t.prompts[r] = { ...a };
    return;
  }
  s.isDefault === !0 && (s.content = nt[r], s.isDefault = !0);
}
function O0(t) {
  const s = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let a = !1;
  return s.map((u, l) => {
    const f = u.replace(/^\d+/, "");
    if (f) {
      const m = a ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return a || (a = !0), m;
    }
    return "";
  }).join("");
}
const Ut = new dy(ow.EXTENSION, io);
async function uw() {
  return new Promise((t, r) => {
    Ut.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const a = {
              ...io,
              ...s
            };
            return delete a.stWorldInfoPrompt, delete a.usingDefaultStWorldInfoPrompt, delete a.lorebookDefinitionPrompt, delete a.usingDefaultLorebookDefinitionPrompt, delete a.lorebookRulesPrompt, delete a.usingDefaultLorebookRulesPrompt, delete a.responseRulesPrompt, delete a.usingDefaultResponseRulesPrompt, a;
          }
        },
        {
          from: "F_1.1",
          to: "F_1.2",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.2", a.prompts.taskDescription.content === `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}` ? (a.prompts.taskDescription.content = nt.taskDescription, a.prompts.taskDescription.isDefault = !0) : a.prompts.taskDescription.isDefault = !1, a;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.3", a.defaultPromptEngineeringMode = "native", a.prompts || (a.prompts = {}), a.prompts.reviseJsonPrompt = {
              content: nt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, a.prompts.reviseXmlPrompt = {
              content: nt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, a.prompts.reviseTaskDescription = {
              content: nt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (a.prompts.currentLorebooks.content = nt.currentLorebooks, a.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (a.prompts.blackListedEntries.content = nt.blackListedEntries, a.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (a.prompts.suggestedLorebooks.content = nt.suggestedLorebooks, a.prompts.suggestedLorebooks.isDefault = !0), a;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.4", a.prompts || (a.prompts = {}), a.prompts.reviseGlobalStateUpdate = {
              content: nt.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, a.prompts.reviseGlobalStateUpdateAddedModified = {
              content: nt.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, a.prompts.reviseGlobalStateUpdateRemoved = {
              content: nt.reviseGlobalStateUpdateRemoved,
              isDefault: !0,
              label: "Revise Global State (Removed)"
            }, a;
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.5", a.responseFormat = "xml", a.prompts || (a.prompts = {}), a.prompts.responseRules ? (a.prompts.responseRules?.isDefault !== !1 && (a.prompts.responseRules.content = nt.responseRules, a.prompts.responseRules.isDefault = !0), a) : (a.prompts.responseRules = {
              content: nt.responseRules,
              isDefault: !0,
              label: "Response Rules"
            }, a);
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.6", a.prompts || (a.prompts = { ...io.prompts }), al(a, "responseRules"), al(a, "currentLorebooks"), al(a, "suggestedLorebooks"), al(a, "reviseGlobalStateUpdateAddedModified"), a;
          }
        }
      ]
    }).then((s) => {
      t();
    }).catch((s) => {
      console.error(`[${zi}] Error initializing settings:`, s), be("error", `[${zi}] Failed to initialize settings: ${s.message}`), je.Popup.show.confirm(
        `[${zi}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((a) => {
        a && (Ut.resetSettings(), be("success", `[${zi}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const Oe = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const l = [];
    return s || l.push("menu_button", "interactable"), l.push(r), l.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("button", { className: u, ...a, children: t });
}, e_ = ({ label: t, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
  const l = ie.useMemo(() => {
    const f = [];
    return s || (a === "text" || a === "number" || a === "password" || a === "email" || a === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, a]);
  if (a === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: f, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...u }),
      t && /* @__PURE__ */ A.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: a, className: l, ...u });
}, Al = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const l = [];
    return s || l.push("text_pole"), l.push(r), l.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("select", { className: u, ...a, children: t });
}, Er = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ie.useMemo(() => {
    const l = [];
    return s || l.push("text_pole", "textarea_compact"), l.push(r), l.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: u, ...a, children: t });
};
var lw = cy(), Bt = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Bt || {}), Wr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Wr || {});
const cw = SillyTavern.getContext(), er = ({
  content: t,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: l
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [v, g] = ie.useState(!1), [E, _] = ie.useState(null), S = ie.useRef(cw.uuidv4()), h = ie.useRef({
    id: S.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ie.useEffect(() => {
    const N = m.current;
    if (!N) return;
    const I = (c) => {
      c.preventDefault(), u || C(Wr.CANCELLED);
    };
    return N.addEventListener("cancel", I), h.current.dlg = N, h.current.mainInput = p.current, Ai.util.popups.push(h.current), N.showModal || (N.classList.add("poly_dialog"), uv.registerDialog(N), new ResizeObserver((c) => {
      for (const y of c)
        uv.reposition(y.target);
    }).observe(N)), N.showModal(), Xd(), () => {
      ov(Ai.util.popups, h.current), Xd(), N.removeEventListener("cancel", I);
    };
  }, []);
  const C = async (N) => {
    var I, c;
    let y = N;
    if (r === Bt.INPUT && (N >= Wr.AFFIRMATIVE ? y = (I = p.current) == null ? void 0 : I.value : N === Wr.NEGATIVE ? y = !1 : N === Wr.CANCELLED ? y = null : y = !1), (c = a.customInputs) != null && c.length) {
      const k = new Map(
        a.customInputs.map((M) => {
          var z;
          const R = (z = m.current) == null ? void 0 : z.querySelector(`#${M.id}`);
          return [R.id, R.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = N, h.current.value = y, a.onClosing && !await a.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Ai.util.lastResult = {
      value: y,
      result: N,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Xd(), w2(w, async () => {
      var k;
      if (w.close(), a.onClose && await a.onClose(h.current), ov(Ai.util.popups, h.current), Ai.util.popups.length > 0) {
        const M = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), z = M?.getAttribute("data-id"), R = Ai.util.popups.find((L) => L.id === z);
        R && R.lastFocus && R.lastFocus.focus();
      }
      l(y);
    }));
  }, x = (N) => {
    N.target instanceof HTMLElement && N.target !== m.current && (_(N.target), h.current.lastFocus = N.target);
  }, j = async (N) => {
  };
  return lw.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const N = ["popup"];
          return a.wide && N.push("wide_dialogue_popup"), a.wider && N.push("wider_dialogue_popup"), a.large && N.push("large_dialogue_popup"), a.transparent && N.push("transparent_dialogue_popup"), a.allowHorizontalScrolling && N.push("horizontal_scrolling_dialogue_popup"), a.allowVerticalScrolling && N.push("vertical_scrolling_dialogue_popup"), a.animation && N.push(`popup--animation-${a.animation}`), N.join(" ");
        })(),
        "data-id": S.current,
        onKeyDown: j,
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: t }),
          r === Bt.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: a.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          a.customInputs && /* @__PURE__ */ A.jsx("div", { className: "popup-inputs", children: a.customInputs.map((N) => /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: N.id, children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", id: N.id, defaultChecked: N.defaultState }),
            /* @__PURE__ */ A.jsx("span", { "data-i18n": N.label, children: N.label }),
            N.tooltip && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: N.tooltip,
                "data-i18n": `[title]${N.tooltip}`
              }
            )
          ] }, N.id)) }),
          r !== Bt.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (f = a.customButtons) == null ? void 0 : f.map((N, I) => {
              const c = typeof N == "string" ? { text: N, result: I + 2 } : N;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${c.classes ?? ""}`,
                  "data-result": c.result,
                  onClick: () => {
                    var y;
                    (y = c.action) == null || y.call(c), C(c.result ?? I + 2);
                  },
                  "data-i18n": c.text,
                  children: c.text
                },
                I
              );
            }),
            r !== Bt.DISPLAY && a.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Wr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof a.okButton == "string" ? a.okButton : "OK"
              }
            ),
            r !== Bt.DISPLAY && a.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Wr.NEGATIVE),
                "data-result": "0",
                children: typeof a.cancelButton == "string" ? a.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Bt.DISPLAY && /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Wr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, $s = (t, r, s) => {
  if (!t || !t.api)
    return !1;
  const a = s[t.api];
  if (!a || !Object.hasOwn(r, a.selected))
    return !1;
  switch (a.selected) {
    case "openai":
      return !!a.source;
    case "textgenerationwebui":
      return !!a.type;
  }
  return !1;
}, br = SillyTavern.getContext(), t_ = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: l,
  onDelete: f
}) => {
  const [m, p] = ie.useState(t ?? ""), [v, g] = ie.useState(Date.now()), { isEnabled: E, profiles: _, connectApiMap: S } = ie.useMemo(() => {
    var x, j;
    return (x = br.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((j = br.extensionSettings.connectionManager) == null ? void 0 : j.profiles) ?? [],
      connectApiMap: br.CONNECT_API_MAP
    };
  }, [v]);
  ie.useEffect(() => {
    if (!E) return;
    const x = (I) => {
      $s(I, r, S) && (g(Date.now()), u?.(I));
    }, j = (I, c) => {
      const y = $s(I, r, S), w = $s(c, r, S);
      (y || w) && g(Date.now()), l?.(I, c), m === I.id && !w && (p(""), a?.(void 0));
    }, N = (I) => {
      $s(I, r, S) && (g(Date.now()), f?.(I), m === I.id && (p(""), a?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", x), br.eventSource.on("CONNECTION_PROFILE_UPDATED", j), br.eventSource.on("CONNECTION_PROFILE_DELETED", N), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", j), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", N);
    };
  }, [E, m, r, S, a, u, l, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const x = _.filter((N) => $s(N, r, S)), j = {};
    for (const [N, I] of Object.entries(r))
      j[N] = { label: I, profiles: [] };
    for (const N of x) {
      const I = S[N.api];
      j[I.selected] && j[I.selected].profiles.push(N);
    }
    for (const N of Object.values(j))
      N.profiles.sort((I, c) => (I.name ?? "").localeCompare(c.name ?? ""));
    return Object.values(j).filter((N) => N.profiles.length > 0);
  }, [E, _, r, S]), C = ie.useCallback(
    (x) => {
      const j = x.target.value;
      p(j);
      const N = _.find((I) => I.id === j);
      a?.(N);
    },
    [_, a]
  );
  return E ? /* @__PURE__ */ A.jsxs(Al, { value: m, onChange: C, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: s }),
    h.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((j) => /* @__PURE__ */ A.jsx("option", { value: j.id, children: j.name }, j.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(Al, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, dw = yl.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: l, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: v,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: _ = !0,
      canSelect: S = !0,
      selectOptions: h = [],
      selectValue: C
    } = t, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !v ? 0.6 : 1
    }, j = { cursor: "pointer", flexShrink: 0 }, N = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: x, "data-id": m, children: [
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: p
        }
      ),
      a && _ && S && /* @__PURE__ */ A.jsx(
        Al,
        {
          value: C,
          onChange: (I) => f(m, I.target.value),
          disabled: !v,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((I) => /* @__PURE__ */ A.jsx("option", { value: I.value, children: I.label }, I.value))
        }
      ),
      a && (!_ || !S) && /* @__PURE__ */ A.jsx("span", { style: N }),
      r && E && /* @__PURE__ */ A.jsx(
        Oe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${v ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...j,
            marginRight: "10px",
            fontSize: "1.2em",
            color: v ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      r && !E && /* @__PURE__ */ A.jsx("span", { style: N }),
      s && g && /* @__PURE__ */ A.jsx(
        Oe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...j,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => l(m)
        }
      ),
      s && !g && /* @__PURE__ */ A.jsx("span", { style: { ...N, marginRight: 0 } })
    ] });
  }
), n_ = ({
  items: t,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: a = !1,
  showSelectInput: u = !1,
  sortableJsOptions: l = {}
}) => {
  const f = ie.useRef(null), m = ie.useRef(null);
  ie.useEffect(() => (f.current && (m.current = Te.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...l,
    onEnd: (E) => {
      const { oldIndex: _, newIndex: S } = E;
      if (_ === void 0 || S === void 0 || _ === S)
        return;
      const h = Array.from(t), [C] = h.splice(_, 1);
      h.splice(S, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [t, r, l]);
  const p = (E) => {
    r(t.map((_) => _.id === E ? { ..._, enabled: !_.enabled } : _));
  }, v = (E) => {
    r(t.filter((_) => _.id !== E));
  }, g = (E, _) => {
    r(t.map((S) => S.id === E ? { ...S, selectValue: _ } : S));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((E) => /* @__PURE__ */ A.jsx(
    dw,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: p,
      onDelete: v,
      onSelectChange: g
    },
    E.id
  )) });
}, r_ = ({
  items: t,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
  closeOnSelect: u = !1,
  multiple: l = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: v = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: _,
  containerClasses: S
}) => {
  const [h, C] = ie.useState(!1), [x, j] = ie.useState(""), N = ie.useRef(null);
  ie.useEffect(() => {
    const k = (M) => {
      N.current && !N.current.contains(M.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ie.useEffect(() => {
    h || j("");
  }, [h]);
  const I = ie.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new Ui(t, k);
  }, [t, p, E]), c = ie.useMemo(() => !p || !x.trim() || !I ? t : I.search(x.trim()).map((k) => k.item), [t, x, p, I]), y = async (k) => {
    let M;
    l ? M = r.includes(k) ? r.filter((z) => z !== k) : [...r, k] : M = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, M))) && (s(M), u && C(!1));
  }, w = ie.useMemo(() => {
    var k;
    return r.length === 0 ? a : r.length === 1 ? ((k = t.find((M) => M.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, a]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: N,
      className: `fancy-dropdown-container ${S ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && C(!h),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: w }),
              /* @__PURE__ */ A.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              p && /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ A.jsx(
                    e_,
                    {
                      type: "text",
                      placeholder: v,
                      value: x,
                      onChange: (k) => j(k.target.value),
                      autoFocus: !0,
                      className: _
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: c.length > 0 ? c.map((k) => /* @__PURE__ */ A.jsx(
                fw,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: y
                },
                k.value
              )) : /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: g
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, fw = yl.memo(({ item: t, isSelected: r, onClick: s }) => {
  const [a, u] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs(
    "li",
    {
      onClick: () => s(t.value),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : a ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ A.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), Sf = SillyTavern.getContext(), Uf = ({
  value: t,
  items: r,
  readOnlyValues: s = [],
  label: a,
  onChange: u,
  onItemsChange: l,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: v,
  onRename: g,
  onDelete: E,
  buttons: _
}) => {
  const S = ie.useMemo(() => r.find((N) => N.value === t), [r, t]), h = ie.useCallback((N) => N ? s.includes(N) : !1, [s]), C = async () => {
    const N = await Sf.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!N || N.trim() === "") return;
    const I = N.trim();
    if (r.some((y) => y.value === I)) {
      await be("warning", `A ${a} with this name already exists.`);
      return;
    }
    let c = { value: I, label: I };
    if (v) {
      const y = await Promise.resolve(v(I));
      if (!y.confirmed) return;
      y.value && (typeof y.value == "string" ? c = { value: y.value, label: y.value } : c = y.value);
    }
    l([...r, c]), u(c.value, t);
  }, x = async () => {
    if (!S) {
      await be("warning", `Please select a ${a} to rename.`);
      return;
    }
    if (h(S.value)) {
      await be("warning", `This ${a} cannot be renamed as it is read-only.`);
      return;
    }
    const N = await Sf.Popup.show.input(
      `Rename ${a}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!N || N.trim() === "" || N.trim() === S.value) return;
    const I = N.trim();
    if (r.some((w) => w.value === I)) {
      await be("warning", `A ${a} with this name already exists.`);
      return;
    }
    let c = { value: I, label: I };
    if (g) {
      const w = await Promise.resolve(g(S.value, I));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? c = { value: w.value, label: w.value } : c = w.value);
    }
    const y = r.map((w) => w.value === S.value ? c : w);
    l(y), u(c.value, t);
  }, j = async () => {
    var N;
    if (!S) {
      await be("warning", `Please select a ${a} to delete.`);
      return;
    }
    if (h(S.value)) {
      await be("warning", `This ${a} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Sf.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const I = r.findIndex((w) => w.value === S.value), c = r.filter((w) => w.value !== S.value);
    l(c);
    let y;
    if (c.length > 0) {
      const w = Math.min(I, c.length - 1);
      y = (N = c[w]) == null ? void 0 : N.value;
    }
    u(y, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Al, { value: t ?? "", onChange: (N) => u(N.target.value, t), children: r.map((N) => /* @__PURE__ */ A.jsx("option", { value: N.value, children: N.label }, N.value)) }),
    f && /* @__PURE__ */ A.jsx(
      Oe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${a}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${a}`
      }
    ),
    m && /* @__PURE__ */ A.jsx(
      Oe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${a}`,
        onClick: x,
        disabled: !S,
        "data-i18n": `[title]Rename selected ${a}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      Oe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${a}`,
        onClick: j,
        disabled: !S,
        "data-i18n": `[title]Delete selected ${a}`
      }
    ),
    _?.map((N) => /* @__PURE__ */ A.jsx(
      Oe,
      {
        className: N.icon,
        title: N.title,
        onClick: N.onClick,
        disabled: N.disabled,
        "data-i18n": N.i18n ? `[title]${N.i18n}` : void 0
      },
      N.key
    ))
  ] });
}, a_ = () => {
  const [, t] = ie.useState(0);
  return ie.useCallback(() => {
    t((s) => s + 1);
  }, []);
}, wf = SillyTavern.getContext(), hw = () => {
  const t = a_(), r = Ut.getSettings(), [s, a] = ie.useState(rl[0]), u = ie.useCallback(
    (c) => {
      const y = Ut.getSettings();
      c(y), Ut.saveSettings(), t();
    },
    [t]
  ), l = ie.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((c) => ({
      value: c,
      label: c
    })),
    [r.mainContextTemplatePresets]
  ), f = ie.useMemo(
    () => Object.keys(r.prompts).map((c) => {
      const y = r.prompts[c];
      return {
        value: c,
        label: y ? `${y.label} (${c})` : c
      };
    }),
    [r.prompts]
  ), m = ie.useMemo(() => {
    const c = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return c ? c.prompts.map((y) => {
      const w = r.prompts[y.promptName], k = w ? `${w.label} (${y.promptName})` : y.promptName;
      return {
        id: y.promptName,
        label: k,
        enabled: y.enabled,
        selectValue: y.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (c) => {
    u((y) => {
      y.mainContextTemplatePreset = c ?? "default";
    });
  }, v = (c) => {
    u((y) => {
      const w = {}, k = y.mainContextTemplatePresets;
      c.forEach((M) => {
        w[M.value] = k[M.value] ?? structuredClone(k[y.mainContextTemplatePreset] ?? k.default);
      }), y.mainContextTemplatePresets = w;
    });
  }, g = (c) => {
    u((y) => {
      const w = c.map((M) => ({
        promptName: M.id,
        enabled: M.enabled,
        role: M.selectValue ?? "user"
      })), k = {
        ...y.mainContextTemplatePresets[y.mainContextTemplatePreset],
        prompts: w
      };
      y.mainContextTemplatePresets = {
        ...y.mainContextTemplatePresets,
        [y.mainContextTemplatePreset]: k
      };
    });
  }, E = async () => {
    await wf.Popup.show.confirm("Restore default", "Are you sure?") && u((y) => {
      y.mainContextTemplatePresets = {
        ...y.mainContextTemplatePresets,
        default: structuredClone(io.mainContextTemplatePresets.default)
      }, y.mainContextTemplatePreset = "default";
    });
  }, _ = (c) => {
    u((y) => {
      const w = {}, k = y.prompts, M = Object.keys(k), z = c.map((L) => L.value);
      z.forEach((L) => {
        w[L] = k[L] ?? { content: "", isDefault: !1, label: L };
      }), y.prompts = w;
      const R = M.filter((L) => !z.includes(L));
      if (R.length > 0) {
        const L = Object.fromEntries(
          Object.entries(y.mainContextTemplatePresets).map(([q, F]) => [
            q,
            {
              ...F,
              prompts: F.prompts.filter(($) => !R.includes($.promptName))
            }
          ])
        );
        y.mainContextTemplatePresets = L;
      }
    });
  }, S = (c) => {
    const y = O0(c);
    return y ? r.prompts[y] ? (be("error", `Prompt name already exists: ${y}`), { confirmed: !1 }) : (u((w) => {
      w.prompts = {
        ...w.prompts,
        [y]: {
          content: w.prompts[s]?.content ?? "",
          isDefault: !1,
          label: c
        }
      }, w.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(w.mainContextTemplatePresets).map(([k, M]) => [
          k,
          {
            ...M,
            prompts: [...M.prompts, { enabled: !0, promptName: y, role: "user" }]
          }
        ])
      );
    }), a(y), { confirmed: !0, value: y }) : (be("error", `Invalid prompt name: ${c}`), { confirmed: !1 });
  }, h = (c, y) => {
    const w = O0(y);
    return w ? r.prompts[w] ? (be("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
      const { [c]: M, ...z } = k.prompts;
      k.prompts = {
        ...z,
        [w]: { ...M, label: y }
      }, k.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([R, L]) => [
          R,
          {
            ...L,
            prompts: L.prompts.map((q) => q.promptName === c ? { ...q, promptName: w } : q)
          }
        ])
      );
    }), a(w), { confirmed: !0, value: w }) : (be("error", `Invalid prompt name: ${y}`), { confirmed: !1 });
  }, C = (c) => {
    const y = c.target.value;
    u((w) => {
      const k = w.prompts[s];
      k && (w.prompts = {
        ...w.prompts,
        [s]: {
          ...k,
          content: y,
          isDefault: rl.includes(s) ? nt[s] === y : !1
        }
      });
    });
  }, x = async () => {
    const c = r.prompts[s];
    if (!c) return be("warning", "No prompt selected.");
    await wf.Popup.show.confirm("Restore Default", `Restore default for "${c.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: nt[s]
        }
      };
    });
  }, j = async () => {
    await wf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Ut.resetSettings(), t(), be("success", "Settings reset. The UI has been updated."));
  }, N = r.prompts[s]?.content ?? "", I = rl.includes(s);
  return /* @__PURE__ */ A.jsxs("div", { className: "world-info-recommender-settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          Oe,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Uf,
        {
          label: "Template",
          items: l,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: v,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        n_,
        {
          items: m,
          onItemsChange: g,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Prompt Templates" }),
        I && /* @__PURE__ */ A.jsx(
          Oe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Uf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: rl,
          onChange: (c) => a(c ?? ""),
          onItemsChange: _,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: S,
          onRename: h
        }
      ),
      /* @__PURE__ */ A.jsx(
        Er,
        {
          value: N,
          onChange: C,
          placeholder: "Edit the selected system prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(Oe, { className: "danger_button", style: { width: "auto" }, onClick: j, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
};
var vl = { exports: {} }, pw = vl.exports, M0;
function mw() {
  return M0 || (M0 = 1, (function(t) {
    (function() {
      function r(c) {
        var y = {
          omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: !1,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: !1,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: !1,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: !1,
            describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: !1,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: !1,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: !1,
            describe: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: !1,
            describe: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: !1,
            describe: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: !1,
            describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: !1,
            describe: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: !0,
            describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: !1,
            describe: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: !1,
            describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: !1,
            describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: !1,
            describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          ellipsis: {
            defaultValue: !0,
            describe: "Replaces three dots with the ellipsis unicode character",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: !1,
            describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: !1,
            describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: !1,
            describe: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (c === !1)
          return JSON.parse(JSON.stringify(y));
        var w = {};
        for (var k in y)
          y.hasOwnProperty(k) && (w[k] = y[k].defaultValue);
        return w;
      }
      function s() {
        var c = r(!0), y = {};
        for (var w in c)
          c.hasOwnProperty(w) && (y[w] = !0);
        return y;
      }
      var a = {}, u = {}, l = {}, f = r(!0), m = "vanilla", p = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0
        },
        original: {
          noHeaderId: !0,
          ghCodeBlocks: !1
        },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0
        },
        vanilla: r(!0),
        allOn: s()
      };
      a.helper = {}, a.extensions = {}, a.setOption = function(c, y) {
        return f[c] = y, this;
      }, a.getOption = function(c) {
        return f[c];
      }, a.getOptions = function() {
        return f;
      }, a.resetOptions = function() {
        f = r(!0);
      }, a.setFlavor = function(c) {
        if (!p.hasOwnProperty(c))
          throw Error(c + " flavor was not found");
        a.resetOptions();
        var y = p[c];
        m = c;
        for (var w in y)
          y.hasOwnProperty(w) && (f[w] = y[w]);
      }, a.getFlavor = function() {
        return m;
      }, a.getFlavorOptions = function(c) {
        if (p.hasOwnProperty(c))
          return p[c];
      }, a.getDefaultOptions = function(c) {
        return r(c);
      }, a.subParser = function(c, y) {
        if (a.helper.isString(c))
          if (typeof y < "u")
            u[c] = y;
          else {
            if (u.hasOwnProperty(c))
              return u[c];
            throw Error("SubParser named " + c + " not registered!");
          }
      }, a.extension = function(c, y) {
        if (!a.helper.isString(c))
          throw Error("Extension 'name' must be a string");
        if (c = a.helper.stdExtName(c), a.helper.isUndefined(y)) {
          if (!l.hasOwnProperty(c))
            throw Error("Extension named " + c + " is not registered!");
          return l[c];
        } else {
          typeof y == "function" && (y = y()), a.helper.isArray(y) || (y = [y]);
          var w = v(y, c);
          if (w.valid)
            l[c] = y;
          else
            throw Error(w.error);
        }
      }, a.getAllExtensions = function() {
        return l;
      }, a.removeExtension = function(c) {
        delete l[c];
      }, a.resetExtensions = function() {
        l = {};
      };
      function v(c, y) {
        var w = y ? "Error in " + y + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(c) || (c = [c]);
        for (var M = 0; M < c.length; ++M) {
          var z = w + " sub-extension " + M + ": ", R = c[M];
          if (typeof R != "object")
            return k.valid = !1, k.error = z + "must be an object, but " + typeof R + " given", k;
          if (!a.helper.isString(R.type))
            return k.valid = !1, k.error = z + 'property "type" must be a string, but ' + typeof R.type + " given", k;
          var L = R.type = R.type.toLowerCase();
          if (L === "language" && (L = R.type = "lang"), L === "html" && (L = R.type = "output"), L !== "lang" && L !== "output" && L !== "listener")
            return k.valid = !1, k.error = z + "type " + L + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (L === "listener") {
            if (a.helper.isUndefined(R.listeners))
              return k.valid = !1, k.error = z + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (a.helper.isUndefined(R.filter) && a.helper.isUndefined(R.regex))
            return k.valid = !1, k.error = z + L + ' extensions must define either a "regex" property or a "filter" method', k;
          if (R.listeners) {
            if (typeof R.listeners != "object")
              return k.valid = !1, k.error = z + '"listeners" property must be an object but ' + typeof R.listeners + " given", k;
            for (var q in R.listeners)
              if (R.listeners.hasOwnProperty(q) && typeof R.listeners[q] != "function")
                return k.valid = !1, k.error = z + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + q + " must be a function but " + typeof R.listeners[q] + " given", k;
          }
          if (R.filter) {
            if (typeof R.filter != "function")
              return k.valid = !1, k.error = z + '"filter" must be a function, but ' + typeof R.filter + " given", k;
          } else if (R.regex) {
            if (a.helper.isString(R.regex) && (R.regex = new RegExp(R.regex, "g")), !(R.regex instanceof RegExp))
              return k.valid = !1, k.error = z + '"regex" property must either be a string or a RegExp object, but ' + typeof R.regex + " given", k;
            if (a.helper.isUndefined(R.replace))
              return k.valid = !1, k.error = z + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      a.validateExtension = function(c) {
        var y = v(c, null);
        return y.valid ? !0 : (console.warn(y.error), !1);
      }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(c) {
        return typeof c == "string" || c instanceof String;
      }, a.helper.isFunction = function(c) {
        var y = {};
        return c && y.toString.call(c) === "[object Function]";
      }, a.helper.isArray = function(c) {
        return Array.isArray(c);
      }, a.helper.isUndefined = function(c) {
        return typeof c > "u";
      }, a.helper.forEach = function(c, y) {
        if (a.helper.isUndefined(c))
          throw new Error("obj param is required");
        if (a.helper.isUndefined(y))
          throw new Error("callback param is required");
        if (!a.helper.isFunction(y))
          throw new Error("callback param must be a function/closure");
        if (typeof c.forEach == "function")
          c.forEach(y);
        else if (a.helper.isArray(c))
          for (var w = 0; w < c.length; w++)
            y(c[w], w, c);
        else if (typeof c == "object")
          for (var k in c)
            c.hasOwnProperty(k) && y(c[k], k, c);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, a.helper.stdExtName = function(c) {
        return c.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(c, y) {
        var w = y.charCodeAt(0);
        return "¨E" + w + "E";
      }
      a.helper.escapeCharactersCallback = g, a.helper.escapeCharacters = function(c, y, w) {
        var k = "([" + y.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var M = new RegExp(k, "g");
        return c = c.replace(M, g), c;
      }, a.helper.unescapeHTMLEntities = function(c) {
        return c.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(c, y, w, k) {
        var M = k || "", z = M.indexOf("g") > -1, R = new RegExp(y + "|" + w, "g" + M.replace(/g/g, "")), L = new RegExp(y, M.replace(/g/g, "")), q = [], F, $, W, O, U;
        do
          for (F = 0; W = R.exec(c); )
            if (L.test(W[0]))
              F++ || ($ = R.lastIndex, O = $ - W[0].length);
            else if (F && !--F) {
              U = W.index + W[0].length;
              var J = {
                left: { start: O, end: $ },
                match: { start: $, end: W.index },
                right: { start: W.index, end: U },
                wholeMatch: { start: O, end: U }
              };
              if (q.push(J), !z)
                return q;
            }
        while (F && (R.lastIndex = $));
        return q;
      };
      a.helper.matchRecursiveRegExp = function(c, y, w, k) {
        for (var M = E(c, y, w, k), z = [], R = 0; R < M.length; ++R)
          z.push([
            c.slice(M[R].wholeMatch.start, M[R].wholeMatch.end),
            c.slice(M[R].match.start, M[R].match.end),
            c.slice(M[R].left.start, M[R].left.end),
            c.slice(M[R].right.start, M[R].right.end)
          ]);
        return z;
      }, a.helper.replaceRecursiveRegExp = function(c, y, w, k, M) {
        if (!a.helper.isFunction(y)) {
          var z = y;
          y = function() {
            return z;
          };
        }
        var R = E(c, w, k, M), L = c, q = R.length;
        if (q > 0) {
          var F = [];
          R[0].wholeMatch.start !== 0 && F.push(c.slice(0, R[0].wholeMatch.start));
          for (var $ = 0; $ < q; ++$)
            F.push(
              y(
                c.slice(R[$].wholeMatch.start, R[$].wholeMatch.end),
                c.slice(R[$].match.start, R[$].match.end),
                c.slice(R[$].left.start, R[$].left.end),
                c.slice(R[$].right.start, R[$].right.end)
              )
            ), $ < q - 1 && F.push(c.slice(R[$].wholeMatch.end, R[$ + 1].wholeMatch.start));
          R[q - 1].wholeMatch.end < c.length && F.push(c.slice(R[q - 1].wholeMatch.end)), L = F.join("");
        }
        return L;
      }, a.helper.regexIndexOf = function(c, y, w) {
        if (!a.helper.isString(c))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(y instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = c.substring(w || 0).search(y);
        return k >= 0 ? k + (w || 0) : k;
      }, a.helper.splitAtIndex = function(c, y) {
        if (!a.helper.isString(c))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [c.substring(0, y), c.substring(y)];
      }, a.helper.encodeEmailAddress = function(c) {
        var y = [
          function(w) {
            return "&#" + w.charCodeAt(0) + ";";
          },
          function(w) {
            return "&#x" + w.charCodeAt(0).toString(16) + ";";
          },
          function(w) {
            return w;
          }
        ];
        return c = c.replace(/./g, function(w) {
          if (w === "@")
            w = y[Math.floor(Math.random() * 2)](w);
          else {
            var k = Math.random();
            w = k > 0.9 ? y[2](w) : k > 0.45 ? y[1](w) : y[0](w);
          }
          return w;
        }), c;
      }, a.helper.padEnd = function(y, w, k) {
        return w = w >> 0, k = String(k || " "), y.length > w ? String(y) : (w = w - y.length, w > k.length && (k += k.repeat(w / k.length)), String(y) + k.slice(0, w));
      }, typeof console > "u" && (console = {
        warn: function(c) {
          alert(c);
        },
        log: function(c) {
          alert(c);
        },
        error: function(c) {
          throw c;
        }
      }), a.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, a.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        /* special emojis :P */
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
      }, a.Converter = function(c) {
        var y = {}, w = [], k = [], M = {}, z = m, R = {
          parsed: {},
          raw: "",
          format: ""
        };
        L();
        function L() {
          c = c || {};
          for (var O in f)
            f.hasOwnProperty(O) && (y[O] = f[O]);
          if (typeof c == "object")
            for (var U in c)
              c.hasOwnProperty(U) && (y[U] = c[U]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof c + " was passed instead.");
          y.extensions && a.helper.forEach(y.extensions, q);
        }
        function q(O, U) {
          if (U = U || null, a.helper.isString(O))
            if (O = a.helper.stdExtName(O), U = O, a.extensions[O]) {
              console.warn("DEPRECATION WARNING: " + O + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), F(a.extensions[O], O);
              return;
            } else if (!a.helper.isUndefined(l[O]))
              O = l[O];
            else
              throw Error('Extension "' + O + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof O == "function" && (O = O()), a.helper.isArray(O) || (O = [O]);
          var J = v(O, U);
          if (!J.valid)
            throw Error(J.error);
          for (var ae = 0; ae < O.length; ++ae) {
            switch (O[ae].type) {
              case "lang":
                w.push(O[ae]);
                break;
              case "output":
                k.push(O[ae]);
                break;
            }
            if (O[ae].hasOwnProperty("listeners"))
              for (var B in O[ae].listeners)
                O[ae].listeners.hasOwnProperty(B) && $(B, O[ae].listeners[B]);
          }
        }
        function F(O, U) {
          typeof O == "function" && (O = O(new a.Converter())), a.helper.isArray(O) || (O = [O]);
          var J = v(O, U);
          if (!J.valid)
            throw Error(J.error);
          for (var ae = 0; ae < O.length; ++ae)
            switch (O[ae].type) {
              case "lang":
                w.push(O[ae]);
                break;
              case "output":
                k.push(O[ae]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function $(O, U) {
          if (!a.helper.isString(O))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof O + " given");
          if (typeof U != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof U + " given");
          M.hasOwnProperty(O) || (M[O] = []), M[O].push(U);
        }
        function W(O) {
          var U = O.match(/^\s*/)[0].length, J = new RegExp("^\\s{0," + U + "}", "gm");
          return O.replace(J, "");
        }
        this._dispatch = function(U, J, ae, B) {
          if (M.hasOwnProperty(U))
            for (var Y = 0; Y < M[U].length; ++Y) {
              var ce = M[U][Y](U, J, this, ae, B);
              ce && typeof ce < "u" && (J = ce);
            }
          return J;
        }, this.listen = function(O, U) {
          return $(O, U), this;
        }, this.makeHtml = function(O) {
          if (!O)
            return O;
          var U = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: w,
            outputModifiers: k,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          return O = O.replace(/¨/g, "¨T"), O = O.replace(/\$/g, "¨D"), O = O.replace(/\r\n/g, `
`), O = O.replace(/\r/g, `
`), O = O.replace(/\u00A0/g, "&nbsp;"), y.smartIndentationFix && (O = W(O)), O = `

` + O + `

`, O = a.subParser("detab")(O, y, U), O = O.replace(/^[ \t]+$/mg, ""), a.helper.forEach(w, function(J) {
            O = a.subParser("runExtension")(J, O, y, U);
          }), O = a.subParser("metadata")(O, y, U), O = a.subParser("hashPreCodeTags")(O, y, U), O = a.subParser("githubCodeBlocks")(O, y, U), O = a.subParser("hashHTMLBlocks")(O, y, U), O = a.subParser("hashCodeTags")(O, y, U), O = a.subParser("stripLinkDefinitions")(O, y, U), O = a.subParser("blockGamut")(O, y, U), O = a.subParser("unhashHTMLSpans")(O, y, U), O = a.subParser("unescapeSpecialChars")(O, y, U), O = O.replace(/¨D/g, "$$"), O = O.replace(/¨T/g, "¨"), O = a.subParser("completeHTMLDocument")(O, y, U), a.helper.forEach(k, function(J) {
            O = a.subParser("runExtension")(J, O, y, U);
          }), R = U.metadata, O;
        }, this.makeMarkdown = this.makeMd = function(O, U) {
          if (O = O.replace(/\r\n/g, `
`), O = O.replace(/\r/g, `
`), O = O.replace(/>[ \t]+</, ">¨NBSP;<"), !U)
            if (window && window.document)
              U = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var J = U.createElement("div");
          J.innerHTML = O;
          var ae = {
            preList: P(J)
          };
          G(J);
          for (var B = J.childNodes, Y = "", ce = 0; ce < B.length; ce++)
            Y += a.subParser("makeMarkdown.node")(B[ce], ae);
          function G(te) {
            for (var K = 0; K < te.childNodes.length; ++K) {
              var se = te.childNodes[K];
              se.nodeType === 3 ? !/\S/.test(se.nodeValue) && !/^[ ]+$/.test(se.nodeValue) ? (te.removeChild(se), --K) : (se.nodeValue = se.nodeValue.split(`
`).join(" "), se.nodeValue = se.nodeValue.replace(/(\s)+/g, "$1")) : se.nodeType === 1 && G(se);
            }
          }
          function P(te) {
            for (var K = te.querySelectorAll("pre"), se = [], re = 0; re < K.length; ++re)
              if (K[re].childElementCount === 1 && K[re].firstChild.tagName.toLowerCase() === "code") {
                var pe = K[re].firstChild.innerHTML.trim(), Re = K[re].firstChild.getAttribute("data-language") || "";
                if (Re === "")
                  for (var we = K[re].firstChild.className.split(" "), me = 0; me < we.length; ++me) {
                    var he = we[me].match(/^language-(.+)$/);
                    if (he !== null) {
                      Re = he[1];
                      break;
                    }
                  }
                pe = a.helper.unescapeHTMLEntities(pe), se.push(pe), K[re].outerHTML = '<precode language="' + Re + '" precodenum="' + re.toString() + '"></precode>';
              } else
                se.push(K[re].innerHTML), K[re].innerHTML = "", K[re].setAttribute("prenum", re.toString());
            return se;
          }
          return Y;
        }, this.setOption = function(O, U) {
          y[O] = U;
        }, this.getOption = function(O) {
          return y[O];
        }, this.getOptions = function() {
          return y;
        }, this.addExtension = function(O, U) {
          U = U || null, q(O, U);
        }, this.useExtension = function(O) {
          q(O);
        }, this.setFlavor = function(O) {
          if (!p.hasOwnProperty(O))
            throw Error(O + " flavor was not found");
          var U = p[O];
          z = O;
          for (var J in U)
            U.hasOwnProperty(J) && (y[J] = U[J]);
        }, this.getFlavor = function() {
          return z;
        }, this.removeExtension = function(O) {
          a.helper.isArray(O) || (O = [O]);
          for (var U = 0; U < O.length; ++U) {
            for (var J = O[U], ae = 0; ae < w.length; ++ae)
              w[ae] === J && w.splice(ae, 1);
            for (var B = 0; B < k.length; ++B)
              k[B] === J && k.splice(B, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: k
          };
        }, this.getMetadata = function(O) {
          return O ? R.raw : R.parsed;
        }, this.getMetadataFormat = function() {
          return R.format;
        }, this._setMetadataPair = function(O, U) {
          R.parsed[O] = U;
        }, this._setMetadataFormat = function(O) {
          R.format = O;
        }, this._setMetadataRaw = function(O) {
          R.raw = O;
        };
      }, a.subParser("anchors", function(c, y, w) {
        c = w.converter._dispatch("anchors.before", c, y, w);
        var k = function(M, z, R, L, q, F, $) {
          if (a.helper.isUndefined($) && ($ = ""), R = R.toLowerCase(), M.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            L = "";
          else if (!L)
            if (R || (R = z.toLowerCase().replace(/ ?\n/g, " ")), L = "#" + R, !a.helper.isUndefined(w.gUrls[R]))
              L = w.gUrls[R], a.helper.isUndefined(w.gTitles[R]) || ($ = w.gTitles[R]);
            else
              return M;
          L = L.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var W = '<a href="' + L + '"';
          return $ !== "" && $ !== null && ($ = $.replace(/"/g, "&quot;"), $ = $.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), W += ' title="' + $ + '"'), y.openLinksInNewWindow && !/^#/.test(L) && (W += ' rel="noopener noreferrer" target="¨E95Eblank"'), W += ">" + z + "</a>", W;
        };
        return c = c.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), c = c.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), c = c.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), c = c.replace(/\[([^\[\]]+)]()()()()()/g, k), y.ghMentions && (c = c.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(M, z, R, L, q) {
          if (R === "\\")
            return z + L;
          if (!a.helper.isString(y.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var F = y.ghMentionsLink.replace(/\{u}/g, q), $ = "";
          return y.openLinksInNewWindow && ($ = ' rel="noopener noreferrer" target="¨E95Eblank"'), z + '<a href="' + F + '"' + $ + ">" + L + "</a>";
        })), c = w.converter._dispatch("anchors.after", c, y, w), c;
      });
      var _ = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, S = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, x = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, j = function(c) {
        return function(y, w, k, M, z, R, L) {
          k = k.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var q = k, F = "", $ = "", W = w || "", O = L || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), c.excludeTrailingPunctuationFromURLs && R && (F = R), c.openLinksInNewWindow && ($ = ' rel="noopener noreferrer" target="¨E95Eblank"'), W + '<a href="' + k + '"' + $ + ">" + q + "</a>" + F + O;
        };
      }, N = function(c, y) {
        return function(w, k, M) {
          var z = "mailto:";
          return k = k || "", M = a.subParser("unescapeSpecialChars")(M, c, y), c.encodeEmails ? (z = a.helper.encodeEmailAddress(z + M), M = a.helper.encodeEmailAddress(M)) : z = z + M, k + '<a href="' + z + '">' + M + "</a>";
        };
      };
      a.subParser("autoLinks", function(c, y, w) {
        return c = w.converter._dispatch("autoLinks.before", c, y, w), c = c.replace(h, j(y)), c = c.replace(x, N(y, w)), c = w.converter._dispatch("autoLinks.after", c, y, w), c;
      }), a.subParser("simplifiedAutoLinks", function(c, y, w) {
        return y.simplifiedAutoLink && (c = w.converter._dispatch("simplifiedAutoLinks.before", c, y, w), y.excludeTrailingPunctuationFromURLs ? c = c.replace(S, j(y)) : c = c.replace(_, j(y)), c = c.replace(C, N(y, w)), c = w.converter._dispatch("simplifiedAutoLinks.after", c, y, w)), c;
      }), a.subParser("blockGamut", function(c, y, w) {
        return c = w.converter._dispatch("blockGamut.before", c, y, w), c = a.subParser("blockQuotes")(c, y, w), c = a.subParser("headers")(c, y, w), c = a.subParser("horizontalRule")(c, y, w), c = a.subParser("lists")(c, y, w), c = a.subParser("codeBlocks")(c, y, w), c = a.subParser("tables")(c, y, w), c = a.subParser("hashHTMLBlocks")(c, y, w), c = a.subParser("paragraphs")(c, y, w), c = w.converter._dispatch("blockGamut.after", c, y, w), c;
      }), a.subParser("blockQuotes", function(c, y, w) {
        c = w.converter._dispatch("blockQuotes.before", c, y, w), c = c + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return y.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), c = c.replace(k, function(M) {
          return M = M.replace(/^[ \t]*>[ \t]?/gm, ""), M = M.replace(/¨0/g, ""), M = M.replace(/^[ \t]+$/gm, ""), M = a.subParser("githubCodeBlocks")(M, y, w), M = a.subParser("blockGamut")(M, y, w), M = M.replace(/(^|\n)/g, "$1  "), M = M.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(z, R) {
            var L = R;
            return L = L.replace(/^  /mg, "¨0"), L = L.replace(/¨0/g, ""), L;
          }), a.subParser("hashBlock")(`<blockquote>
` + M + `
</blockquote>`, y, w);
        }), c = w.converter._dispatch("blockQuotes.after", c, y, w), c;
      }), a.subParser("codeBlocks", function(c, y, w) {
        c = w.converter._dispatch("codeBlocks.before", c, y, w), c += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return c = c.replace(k, function(M, z, R) {
          var L = z, q = R, F = `
`;
          return L = a.subParser("outdent")(L, y, w), L = a.subParser("encodeCode")(L, y, w), L = a.subParser("detab")(L, y, w), L = L.replace(/^\n+/g, ""), L = L.replace(/\n+$/g, ""), y.omitExtraWLInCodeBlocks && (F = ""), L = "<pre><code>" + L + F + "</code></pre>", a.subParser("hashBlock")(L, y, w) + q;
        }), c = c.replace(/¨0/, ""), c = w.converter._dispatch("codeBlocks.after", c, y, w), c;
      }), a.subParser("codeSpans", function(c, y, w) {
        return c = w.converter._dispatch("codeSpans.before", c, y, w), typeof c > "u" && (c = ""), c = c.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, M, z, R) {
            var L = R;
            return L = L.replace(/^([ \t]*)/g, ""), L = L.replace(/[ \t]*$/g, ""), L = a.subParser("encodeCode")(L, y, w), L = M + "<code>" + L + "</code>", L = a.subParser("hashHTMLSpans")(L, y, w), L;
          }
        ), c = w.converter._dispatch("codeSpans.after", c, y, w), c;
      }), a.subParser("completeHTMLDocument", function(c, y, w) {
        if (!y.completeHTMLDocument)
          return c;
        c = w.converter._dispatch("completeHTMLDocument.before", c, y, w);
        var k = "html", M = `<!DOCTYPE HTML>
`, z = "", R = `<meta charset="utf-8">
`, L = "", q = "";
        typeof w.metadata.parsed.doctype < "u" && (M = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (R = '<meta charset="utf-8">'));
        for (var F in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(F))
            switch (F.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                z = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? R = '<meta charset="' + w.metadata.parsed.charset + `">
` : R = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                L = ' lang="' + w.metadata.parsed[F] + '"', q += '<meta name="' + F + '" content="' + w.metadata.parsed[F] + `">
`;
                break;
              default:
                q += '<meta name="' + F + '" content="' + w.metadata.parsed[F] + `">
`;
            }
        return c = M + "<html" + L + `>
<head>
` + z + R + q + `</head>
<body>
` + c.trim() + `
</body>
</html>`, c = w.converter._dispatch("completeHTMLDocument.after", c, y, w), c;
      }), a.subParser("detab", function(c, y, w) {
        return c = w.converter._dispatch("detab.before", c, y, w), c = c.replace(/\t(?=\t)/g, "    "), c = c.replace(/\t/g, "¨A¨B"), c = c.replace(/¨B(.+?)¨A/g, function(k, M) {
          for (var z = M, R = 4 - z.length % 4, L = 0; L < R; L++)
            z += " ";
          return z;
        }), c = c.replace(/¨A/g, "    "), c = c.replace(/¨B/g, ""), c = w.converter._dispatch("detab.after", c, y, w), c;
      }), a.subParser("ellipsis", function(c, y, w) {
        return y.ellipsis && (c = w.converter._dispatch("ellipsis.before", c, y, w), c = c.replace(/\.\.\./g, "…"), c = w.converter._dispatch("ellipsis.after", c, y, w)), c;
      }), a.subParser("emoji", function(c, y, w) {
        if (!y.emoji)
          return c;
        c = w.converter._dispatch("emoji.before", c, y, w);
        var k = /:([\S]+?):/g;
        return c = c.replace(k, function(M, z) {
          return a.helper.emojis.hasOwnProperty(z) ? a.helper.emojis[z] : M;
        }), c = w.converter._dispatch("emoji.after", c, y, w), c;
      }), a.subParser("encodeAmpsAndAngles", function(c, y, w) {
        return c = w.converter._dispatch("encodeAmpsAndAngles.before", c, y, w), c = c.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), c = c.replace(/<(?![a-z\/?$!])/gi, "&lt;"), c = c.replace(/</g, "&lt;"), c = c.replace(/>/g, "&gt;"), c = w.converter._dispatch("encodeAmpsAndAngles.after", c, y, w), c;
      }), a.subParser("encodeBackslashEscapes", function(c, y, w) {
        return c = w.converter._dispatch("encodeBackslashEscapes.before", c, y, w), c = c.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), c = c.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), c = w.converter._dispatch("encodeBackslashEscapes.after", c, y, w), c;
      }), a.subParser("encodeCode", function(c, y, w) {
        return c = w.converter._dispatch("encodeCode.before", c, y, w), c = c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), c = w.converter._dispatch("encodeCode.after", c, y, w), c;
      }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(c, y, w) {
        c = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", c, y, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, M = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return c = c.replace(k, function(z) {
          return z.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), c = c.replace(M, function(z) {
          return z.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), c = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", c, y, w), c;
      }), a.subParser("githubCodeBlocks", function(c, y, w) {
        return y.ghCodeBlocks ? (c = w.converter._dispatch("githubCodeBlocks.before", c, y, w), c += "¨0", c = c.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, M, z, R) {
          var L = y.omitExtraWLInCodeBlocks ? "" : `
`;
          return R = a.subParser("encodeCode")(R, y, w), R = a.subParser("detab")(R, y, w), R = R.replace(/^\n+/g, ""), R = R.replace(/\n+$/g, ""), R = "<pre><code" + (z ? ' class="' + z + " language-" + z + '"' : "") + ">" + R + L + "</code></pre>", R = a.subParser("hashBlock")(R, y, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: R }) - 1) + `G

`;
        }), c = c.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", c, y, w)) : c;
      }), a.subParser("hashBlock", function(c, y, w) {
        return c = w.converter._dispatch("hashBlock.before", c, y, w), c = c.replace(/(^\n+|\n+$)/g, ""), c = `

¨K` + (w.gHtmlBlocks.push(c) - 1) + `K

`, c = w.converter._dispatch("hashBlock.after", c, y, w), c;
      }), a.subParser("hashCodeTags", function(c, y, w) {
        c = w.converter._dispatch("hashCodeTags.before", c, y, w);
        var k = function(M, z, R, L) {
          var q = R + a.subParser("encodeCode")(z, y, w) + L;
          return "¨C" + (w.gHtmlSpans.push(q) - 1) + "C";
        };
        return c = a.helper.replaceRecursiveRegExp(c, k, "<code\\b[^>]*>", "</code>", "gim"), c = w.converter._dispatch("hashCodeTags.after", c, y, w), c;
      }), a.subParser("hashElement", function(c, y, w) {
        return function(k, M) {
          var z = M;
          return z = z.replace(/\n\n/g, `
`), z = z.replace(/^\n/, ""), z = z.replace(/\n+$/g, ""), z = `

¨K` + (w.gHtmlBlocks.push(z) - 1) + `K

`, z;
        };
      }), a.subParser("hashHTMLBlocks", function(c, y, w) {
        c = w.converter._dispatch("hashHTMLBlocks.before", c, y, w);
        var k = [
          "pre",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "table",
          "dl",
          "ol",
          "ul",
          "script",
          "noscript",
          "form",
          "fieldset",
          "iframe",
          "math",
          "style",
          "section",
          "header",
          "footer",
          "nav",
          "article",
          "aside",
          "address",
          "audio",
          "canvas",
          "figure",
          "hgroup",
          "output",
          "video",
          "p"
        ], M = function(O, U, J, ae) {
          var B = O;
          return J.search(/\bmarkdown\b/) !== -1 && (B = J + w.converter.makeHtml(U) + ae), `

¨K` + (w.gHtmlBlocks.push(B) - 1) + `K

`;
        };
        y.backslashEscapesHTMLTags && (c = c.replace(/\\<(\/?[^>]+?)>/g, function(O, U) {
          return "&lt;" + U + "&gt;";
        }));
        for (var z = 0; z < k.length; ++z)
          for (var R, L = new RegExp("^ {0,3}(<" + k[z] + "\\b[^>]*>)", "im"), q = "<" + k[z] + "\\b[^>]*>", F = "</" + k[z] + ">"; (R = a.helper.regexIndexOf(c, L)) !== -1; ) {
            var $ = a.helper.splitAtIndex(c, R), W = a.helper.replaceRecursiveRegExp($[1], M, q, F, "im");
            if (W === $[1])
              break;
            c = $[0].concat(W);
          }
        return c = c.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(c, y, w)
        ), c = a.helper.replaceRecursiveRegExp(c, function(O) {
          return `

¨K` + (w.gHtmlBlocks.push(O) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), c = c.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(c, y, w)
        ), c = w.converter._dispatch("hashHTMLBlocks.after", c, y, w), c;
      }), a.subParser("hashHTMLSpans", function(c, y, w) {
        c = w.converter._dispatch("hashHTMLSpans.before", c, y, w);
        function k(M) {
          return "¨C" + (w.gHtmlSpans.push(M) - 1) + "C";
        }
        return c = c.replace(/<[^>]+?\/>/gi, function(M) {
          return k(M);
        }), c = c.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(M) {
          return k(M);
        }), c = c.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(M) {
          return k(M);
        }), c = c.replace(/<[^>]+?>/gi, function(M) {
          return k(M);
        }), c = w.converter._dispatch("hashHTMLSpans.after", c, y, w), c;
      }), a.subParser("unhashHTMLSpans", function(c, y, w) {
        c = w.converter._dispatch("unhashHTMLSpans.before", c, y, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var M = w.gHtmlSpans[k], z = 0; /¨C(\d+)C/.test(M); ) {
            var R = RegExp.$1;
            if (M = M.replace("¨C" + R + "C", w.gHtmlSpans[R]), z === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++z;
          }
          c = c.replace("¨C" + k + "C", M);
        }
        return c = w.converter._dispatch("unhashHTMLSpans.after", c, y, w), c;
      }), a.subParser("hashPreCodeTags", function(c, y, w) {
        c = w.converter._dispatch("hashPreCodeTags.before", c, y, w);
        var k = function(M, z, R, L) {
          var q = R + a.subParser("encodeCode")(z, y, w) + L;
          return `

¨G` + (w.ghCodeBlocks.push({ text: M, codeblock: q }) - 1) + `G

`;
        };
        return c = a.helper.replaceRecursiveRegExp(c, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), c = w.converter._dispatch("hashPreCodeTags.after", c, y, w), c;
      }), a.subParser("headers", function(c, y, w) {
        c = w.converter._dispatch("headers.before", c, y, w);
        var k = isNaN(parseInt(y.headerLevelStart)) ? 1 : parseInt(y.headerLevelStart), M = y.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, z = y.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        c = c.replace(M, function(q, F) {
          var $ = a.subParser("spanGamut")(F, y, w), W = y.noHeaderId ? "" : ' id="' + L(F) + '"', O = k, U = "<h" + O + W + ">" + $ + "</h" + O + ">";
          return a.subParser("hashBlock")(U, y, w);
        }), c = c.replace(z, function(q, F) {
          var $ = a.subParser("spanGamut")(F, y, w), W = y.noHeaderId ? "" : ' id="' + L(F) + '"', O = k + 1, U = "<h" + O + W + ">" + $ + "</h" + O + ">";
          return a.subParser("hashBlock")(U, y, w);
        });
        var R = y.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        c = c.replace(R, function(q, F, $) {
          var W = $;
          y.customizedHeaderId && (W = $.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var O = a.subParser("spanGamut")(W, y, w), U = y.noHeaderId ? "" : ' id="' + L($) + '"', J = k - 1 + F.length, ae = "<h" + J + U + ">" + O + "</h" + J + ">";
          return a.subParser("hashBlock")(ae, y, w);
        });
        function L(q) {
          var F, $;
          if (y.customizedHeaderId) {
            var W = q.match(/\{([^{]+?)}\s*$/);
            W && W[1] && (q = W[1]);
          }
          return F = q, a.helper.isString(y.prefixHeaderId) ? $ = y.prefixHeaderId : y.prefixHeaderId === !0 ? $ = "section-" : $ = "", y.rawPrefixHeaderId || (F = $ + F), y.ghCompatibleHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : y.rawHeaderId ? F = F.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : F = F.replace(/[^\w]/g, "").toLowerCase(), y.rawPrefixHeaderId && (F = $ + F), w.hashLinkCounts[F] ? F = F + "-" + w.hashLinkCounts[F]++ : w.hashLinkCounts[F] = 1, F;
        }
        return c = w.converter._dispatch("headers.after", c, y, w), c;
      }), a.subParser("horizontalRule", function(c, y, w) {
        c = w.converter._dispatch("horizontalRule.before", c, y, w);
        var k = a.subParser("hashBlock")("<hr />", y, w);
        return c = c.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), c = c.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), c = c.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), c = w.converter._dispatch("horizontalRule.after", c, y, w), c;
      }), a.subParser("images", function(c, y, w) {
        c = w.converter._dispatch("images.before", c, y, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, M = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, z = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, R = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, L = /!\[([^\[\]]+)]()()()()()/g;
        function q($, W, O, U, J, ae, B, Y) {
          return U = U.replace(/\s/g, ""), F($, W, O, U, J, ae, B, Y);
        }
        function F($, W, O, U, J, ae, B, Y) {
          var ce = w.gUrls, G = w.gTitles, P = w.gDimensions;
          if (O = O.toLowerCase(), Y || (Y = ""), $.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            U = "";
          else if (U === "" || U === null)
            if ((O === "" || O === null) && (O = W.toLowerCase().replace(/ ?\n/g, " ")), U = "#" + O, !a.helper.isUndefined(ce[O]))
              U = ce[O], a.helper.isUndefined(G[O]) || (Y = G[O]), a.helper.isUndefined(P[O]) || (J = P[O].width, ae = P[O].height);
            else
              return $;
          W = W.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), U = U.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var te = '<img src="' + U + '" alt="' + W + '"';
          return Y && a.helper.isString(Y) && (Y = Y.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), te += ' title="' + Y + '"'), J && ae && (J = J === "*" ? "auto" : J, ae = ae === "*" ? "auto" : ae, te += ' width="' + J + '"', te += ' height="' + ae + '"'), te += " />", te;
        }
        return c = c.replace(R, F), c = c.replace(z, q), c = c.replace(M, F), c = c.replace(k, F), c = c.replace(L, F), c = w.converter._dispatch("images.after", c, y, w), c;
      }), a.subParser("italicsAndBold", function(c, y, w) {
        c = w.converter._dispatch("italicsAndBold.before", c, y, w);
        function k(M, z, R) {
          return z + M + R;
        }
        return y.literalMidWordUnderscores ? (c = c.replace(/\b___(\S[\s\S]*?)___\b/g, function(M, z) {
          return k(z, "<strong><em>", "</em></strong>");
        }), c = c.replace(/\b__(\S[\s\S]*?)__\b/g, function(M, z) {
          return k(z, "<strong>", "</strong>");
        }), c = c.replace(/\b_(\S[\s\S]*?)_\b/g, function(M, z) {
          return k(z, "<em>", "</em>");
        })) : (c = c.replace(/___(\S[\s\S]*?)___/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong><em>", "</em></strong>") : M;
        }), c = c.replace(/__(\S[\s\S]*?)__/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong>", "</strong>") : M;
        }), c = c.replace(/_([^\s_][\s\S]*?)_/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<em>", "</em>") : M;
        })), y.literalMidWordAsterisks ? (c = c.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(M, z, R) {
          return k(R, z + "<strong><em>", "</em></strong>");
        }), c = c.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(M, z, R) {
          return k(R, z + "<strong>", "</strong>");
        }), c = c.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(M, z, R) {
          return k(R, z + "<em>", "</em>");
        })) : (c = c.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong><em>", "</em></strong>") : M;
        }), c = c.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<strong>", "</strong>") : M;
        }), c = c.replace(/\*([^\s*][\s\S]*?)\*/g, function(M, z) {
          return /\S$/.test(z) ? k(z, "<em>", "</em>") : M;
        })), c = w.converter._dispatch("italicsAndBold.after", c, y, w), c;
      }), a.subParser("lists", function(c, y, w) {
        function k(R, L) {
          w.gListLevel++, R = R.replace(/\n{2,}$/, `
`), R += "¨0";
          var q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, F = /\n[ \t]*\n(?!¨0)/.test(R);
          return y.disableForced4SpacesIndentedSublists && (q = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), R = R.replace(q, function($, W, O, U, J, ae, B) {
            B = B && B.trim() !== "";
            var Y = a.subParser("outdent")(J, y, w), ce = "";
            return ae && y.tasklists && (ce = ' class="task-list-item" style="list-style-type: none;"', Y = Y.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var G = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return B && (G += " checked"), G += ">", G;
            })), Y = Y.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(G) {
              return "¨A" + G;
            }), W || Y.search(/\n{2,}/) > -1 ? (Y = a.subParser("githubCodeBlocks")(Y, y, w), Y = a.subParser("blockGamut")(Y, y, w)) : (Y = a.subParser("lists")(Y, y, w), Y = Y.replace(/\n$/, ""), Y = a.subParser("hashHTMLBlocks")(Y, y, w), Y = Y.replace(/\n\n+/g, `

`), F ? Y = a.subParser("paragraphs")(Y, y, w) : Y = a.subParser("spanGamut")(Y, y, w)), Y = Y.replace("¨A", ""), Y = "<li" + ce + ">" + Y + `</li>
`, Y;
          }), R = R.replace(/¨0/g, ""), w.gListLevel--, L && (R = R.replace(/\s+$/, "")), R;
        }
        function M(R, L) {
          if (L === "ol") {
            var q = R.match(/^ *(\d+)\./);
            if (q && q[1] !== "1")
              return ' start="' + q[1] + '"';
          }
          return "";
        }
        function z(R, L, q) {
          var F = y.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, $ = y.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, W = L === "ul" ? F : $, O = "";
          if (R.search(W) !== -1)
            (function J(ae) {
              var B = ae.search(W), Y = M(R, L);
              B !== -1 ? (O += `

<` + L + Y + `>
` + k(ae.slice(0, B), !!q) + "</" + L + `>
`, L = L === "ul" ? "ol" : "ul", W = L === "ul" ? F : $, J(ae.slice(B))) : O += `

<` + L + Y + `>
` + k(ae, !!q) + "</" + L + `>
`;
            })(R);
          else {
            var U = M(R, L);
            O = `

<` + L + U + `>
` + k(R, !!q) + "</" + L + `>
`;
          }
          return O;
        }
        return c = w.converter._dispatch("lists.before", c, y, w), c += "¨0", w.gListLevel ? c = c.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(R, L, q) {
            var F = q.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return z(L, F, !0);
          }
        ) : c = c.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(R, L, q, F) {
            var $ = F.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return z(q, $, !1);
          }
        ), c = c.replace(/¨0/, ""), c = w.converter._dispatch("lists.after", c, y, w), c;
      }), a.subParser("metadata", function(c, y, w) {
        if (!y.metadata)
          return c;
        c = w.converter._dispatch("metadata.before", c, y, w);
        function k(M) {
          w.metadata.raw = M, M = M.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), M = M.replace(/\n {4}/g, " "), M.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(z, R, L) {
            return w.metadata.parsed[R] = L, "";
          });
        }
        return c = c.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(M, z, R) {
          return k(R), "¨M";
        }), c = c.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(M, z, R) {
          return z && (w.metadata.format = z), k(R), "¨M";
        }), c = c.replace(/¨M/g, ""), c = w.converter._dispatch("metadata.after", c, y, w), c;
      }), a.subParser("outdent", function(c, y, w) {
        return c = w.converter._dispatch("outdent.before", c, y, w), c = c.replace(/^(\t|[ ]{1,4})/gm, "¨0"), c = c.replace(/¨0/g, ""), c = w.converter._dispatch("outdent.after", c, y, w), c;
      }), a.subParser("paragraphs", function(c, y, w) {
        c = w.converter._dispatch("paragraphs.before", c, y, w), c = c.replace(/^\n+/g, ""), c = c.replace(/\n+$/g, "");
        for (var k = c.split(/\n{2,}/g), M = [], z = k.length, R = 0; R < z; R++) {
          var L = k[R];
          L.search(/¨(K|G)(\d+)\1/g) >= 0 ? M.push(L) : L.search(/\S/) >= 0 && (L = a.subParser("spanGamut")(L, y, w), L = L.replace(/^([ \t]*)/g, "<p>"), L += "</p>", M.push(L));
        }
        for (z = M.length, R = 0; R < z; R++) {
          for (var q = "", F = M[R], $ = !1; /¨(K|G)(\d+)\1/.test(F); ) {
            var W = RegExp.$1, O = RegExp.$2;
            W === "K" ? q = w.gHtmlBlocks[O] : $ ? q = a.subParser("encodeCode")(w.ghCodeBlocks[O].text, y, w) : q = w.ghCodeBlocks[O].codeblock, q = q.replace(/\$/g, "$$$$"), F = F.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, q), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(F) && ($ = !0);
          }
          M[R] = F;
        }
        return c = M.join(`
`), c = c.replace(/^\n+/g, ""), c = c.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", c, y, w);
      }), a.subParser("runExtension", function(c, y, w, k) {
        if (c.filter)
          y = c.filter(y, k.converter, w);
        else if (c.regex) {
          var M = c.regex;
          M instanceof RegExp || (M = new RegExp(M, "g")), y = y.replace(M, c.replace);
        }
        return y;
      }), a.subParser("spanGamut", function(c, y, w) {
        return c = w.converter._dispatch("spanGamut.before", c, y, w), c = a.subParser("codeSpans")(c, y, w), c = a.subParser("escapeSpecialCharsWithinTagAttributes")(c, y, w), c = a.subParser("encodeBackslashEscapes")(c, y, w), c = a.subParser("images")(c, y, w), c = a.subParser("anchors")(c, y, w), c = a.subParser("autoLinks")(c, y, w), c = a.subParser("simplifiedAutoLinks")(c, y, w), c = a.subParser("emoji")(c, y, w), c = a.subParser("underline")(c, y, w), c = a.subParser("italicsAndBold")(c, y, w), c = a.subParser("strikethrough")(c, y, w), c = a.subParser("ellipsis")(c, y, w), c = a.subParser("hashHTMLSpans")(c, y, w), c = a.subParser("encodeAmpsAndAngles")(c, y, w), y.simpleLineBreaks ? /\n\n¨K/.test(c) || (c = c.replace(/\n+/g, `<br />
`)) : c = c.replace(/  +\n/g, `<br />
`), c = w.converter._dispatch("spanGamut.after", c, y, w), c;
      }), a.subParser("strikethrough", function(c, y, w) {
        function k(M) {
          return y.simplifiedAutoLink && (M = a.subParser("simplifiedAutoLinks")(M, y, w)), "<del>" + M + "</del>";
        }
        return y.strikethrough && (c = w.converter._dispatch("strikethrough.before", c, y, w), c = c.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(M, z) {
          return k(z);
        }), c = w.converter._dispatch("strikethrough.after", c, y, w)), c;
      }), a.subParser("stripLinkDefinitions", function(c, y, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, M = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        c += "¨0";
        var z = function(R, L, q, F, $, W, O) {
          return L = L.toLowerCase(), c.toLowerCase().split(L).length - 1 < 2 ? R : (q.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[L] = q.replace(/\s/g, "") : w.gUrls[L] = a.subParser("encodeAmpsAndAngles")(q, y, w), W ? W + O : (O && (w.gTitles[L] = O.replace(/"|'/g, "&quot;")), y.parseImgDimensions && F && $ && (w.gDimensions[L] = {
            width: F,
            height: $
          }), ""));
        };
        return c = c.replace(M, z), c = c.replace(k, z), c = c.replace(/¨0/, ""), c;
      }), a.subParser("tables", function(c, y, w) {
        if (!y.tables)
          return c;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, M = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function z($) {
          return /^:[ \t]*--*$/.test($) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test($) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test($) ? ' style="text-align:center;"' : "";
        }
        function R($, W) {
          var O = "";
          return $ = $.trim(), (y.tablesHeaderId || y.tableHeaderId) && (O = ' id="' + $.replace(/ /g, "_").toLowerCase() + '"'), $ = a.subParser("spanGamut")($, y, w), "<th" + O + W + ">" + $ + `</th>
`;
        }
        function L($, W) {
          var O = a.subParser("spanGamut")($, y, w);
          return "<td" + W + ">" + O + `</td>
`;
        }
        function q($, W) {
          for (var O = `<table>
<thead>
<tr>
`, U = $.length, J = 0; J < U; ++J)
            O += $[J];
          for (O += `</tr>
</thead>
<tbody>
`, J = 0; J < W.length; ++J) {
            O += `<tr>
`;
            for (var ae = 0; ae < U; ++ae)
              O += W[J][ae];
            O += `</tr>
`;
          }
          return O += `</tbody>
</table>
`, O;
        }
        function F($) {
          var W, O = $.split(`
`);
          for (W = 0; W < O.length; ++W)
            /^ {0,3}\|/.test(O[W]) && (O[W] = O[W].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(O[W]) && (O[W] = O[W].replace(/\|[ \t]*$/, "")), O[W] = a.subParser("codeSpans")(O[W], y, w);
          var U = O[0].split("|").map(function(te) {
            return te.trim();
          }), J = O[1].split("|").map(function(te) {
            return te.trim();
          }), ae = [], B = [], Y = [], ce = [];
          for (O.shift(), O.shift(), W = 0; W < O.length; ++W)
            O[W].trim() !== "" && ae.push(
              O[W].split("|").map(function(te) {
                return te.trim();
              })
            );
          if (U.length < J.length)
            return $;
          for (W = 0; W < J.length; ++W)
            Y.push(z(J[W]));
          for (W = 0; W < U.length; ++W)
            a.helper.isUndefined(Y[W]) && (Y[W] = ""), B.push(R(U[W], Y[W]));
          for (W = 0; W < ae.length; ++W) {
            for (var G = [], P = 0; P < B.length; ++P)
              a.helper.isUndefined(ae[W][P]), G.push(L(ae[W][P], Y[P]));
            ce.push(G);
          }
          return q(B, ce);
        }
        return c = w.converter._dispatch("tables.before", c, y, w), c = c.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), c = c.replace(k, F), c = c.replace(M, F), c = w.converter._dispatch("tables.after", c, y, w), c;
      }), a.subParser("underline", function(c, y, w) {
        return y.underline && (c = w.converter._dispatch("underline.before", c, y, w), y.literalMidWordUnderscores ? (c = c.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, M) {
          return "<u>" + M + "</u>";
        }), c = c.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, M) {
          return "<u>" + M + "</u>";
        })) : (c = c.replace(/___(\S[\s\S]*?)___/g, function(k, M) {
          return /\S$/.test(M) ? "<u>" + M + "</u>" : k;
        }), c = c.replace(/__(\S[\s\S]*?)__/g, function(k, M) {
          return /\S$/.test(M) ? "<u>" + M + "</u>" : k;
        })), c = c.replace(/(_)/g, a.helper.escapeCharactersCallback), c = w.converter._dispatch("underline.after", c, y, w)), c;
      }), a.subParser("unescapeSpecialChars", function(c, y, w) {
        return c = w.converter._dispatch("unescapeSpecialChars.before", c, y, w), c = c.replace(/¨E(\d+)E/g, function(k, M) {
          var z = parseInt(M);
          return String.fromCharCode(z);
        }), c = w.converter._dispatch("unescapeSpecialChars.after", c, y, w), c;
      }), a.subParser("makeMarkdown.blockquote", function(c, y) {
        var w = "";
        if (c.hasChildNodes())
          for (var k = c.childNodes, M = k.length, z = 0; z < M; ++z) {
            var R = a.subParser("makeMarkdown.node")(k[z], y);
            R !== "" && (w += R);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), a.subParser("makeMarkdown.codeBlock", function(c, y) {
        var w = c.getAttribute("language"), k = c.getAttribute("precodenum");
        return "```" + w + `
` + y.preList[k] + "\n```";
      }), a.subParser("makeMarkdown.codeSpan", function(c) {
        return "`" + c.innerHTML + "`";
      }), a.subParser("makeMarkdown.emphasis", function(c, y) {
        var w = "";
        if (c.hasChildNodes()) {
          w += "*";
          for (var k = c.childNodes, M = k.length, z = 0; z < M; ++z)
            w += a.subParser("makeMarkdown.node")(k[z], y);
          w += "*";
        }
        return w;
      }), a.subParser("makeMarkdown.header", function(c, y, w) {
        var k = new Array(w + 1).join("#"), M = "";
        if (c.hasChildNodes()) {
          M = k + " ";
          for (var z = c.childNodes, R = z.length, L = 0; L < R; ++L)
            M += a.subParser("makeMarkdown.node")(z[L], y);
        }
        return M;
      }), a.subParser("makeMarkdown.hr", function() {
        return "---";
      }), a.subParser("makeMarkdown.image", function(c) {
        var y = "";
        return c.hasAttribute("src") && (y += "![" + c.getAttribute("alt") + "](", y += "<" + c.getAttribute("src") + ">", c.hasAttribute("width") && c.hasAttribute("height") && (y += " =" + c.getAttribute("width") + "x" + c.getAttribute("height")), c.hasAttribute("title") && (y += ' "' + c.getAttribute("title") + '"'), y += ")"), y;
      }), a.subParser("makeMarkdown.links", function(c, y) {
        var w = "";
        if (c.hasChildNodes() && c.hasAttribute("href")) {
          var k = c.childNodes, M = k.length;
          w = "[";
          for (var z = 0; z < M; ++z)
            w += a.subParser("makeMarkdown.node")(k[z], y);
          w += "](", w += "<" + c.getAttribute("href") + ">", c.hasAttribute("title") && (w += ' "' + c.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), a.subParser("makeMarkdown.list", function(c, y, w) {
        var k = "";
        if (!c.hasChildNodes())
          return "";
        for (var M = c.childNodes, z = M.length, R = c.getAttribute("start") || 1, L = 0; L < z; ++L)
          if (!(typeof M[L].tagName > "u" || M[L].tagName.toLowerCase() !== "li")) {
            var q = "";
            w === "ol" ? q = R.toString() + ". " : q = "- ", k += q + a.subParser("makeMarkdown.listItem")(M[L], y), ++R;
          }
        return k += `
<!-- -->
`, k.trim();
      }), a.subParser("makeMarkdown.listItem", function(c, y) {
        for (var w = "", k = c.childNodes, M = k.length, z = 0; z < M; ++z)
          w += a.subParser("makeMarkdown.node")(k[z], y);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), a.subParser("makeMarkdown.node", function(c, y, w) {
        w = w || !1;
        var k = "";
        if (c.nodeType === 3)
          return a.subParser("makeMarkdown.txt")(c, y);
        if (c.nodeType === 8)
          return "<!--" + c.data + `-->

`;
        if (c.nodeType !== 1)
          return "";
        var M = c.tagName.toLowerCase();
        switch (M) {
          //
          // BLOCKS
          //
          case "h1":
            w || (k = a.subParser("makeMarkdown.header")(c, y, 1) + `

`);
            break;
          case "h2":
            w || (k = a.subParser("makeMarkdown.header")(c, y, 2) + `

`);
            break;
          case "h3":
            w || (k = a.subParser("makeMarkdown.header")(c, y, 3) + `

`);
            break;
          case "h4":
            w || (k = a.subParser("makeMarkdown.header")(c, y, 4) + `

`);
            break;
          case "h5":
            w || (k = a.subParser("makeMarkdown.header")(c, y, 5) + `

`);
            break;
          case "h6":
            w || (k = a.subParser("makeMarkdown.header")(c, y, 6) + `

`);
            break;
          case "p":
            w || (k = a.subParser("makeMarkdown.paragraph")(c, y) + `

`);
            break;
          case "blockquote":
            w || (k = a.subParser("makeMarkdown.blockquote")(c, y) + `

`);
            break;
          case "hr":
            w || (k = a.subParser("makeMarkdown.hr")(c, y) + `

`);
            break;
          case "ol":
            w || (k = a.subParser("makeMarkdown.list")(c, y, "ol") + `

`);
            break;
          case "ul":
            w || (k = a.subParser("makeMarkdown.list")(c, y, "ul") + `

`);
            break;
          case "precode":
            w || (k = a.subParser("makeMarkdown.codeBlock")(c, y) + `

`);
            break;
          case "pre":
            w || (k = a.subParser("makeMarkdown.pre")(c, y) + `

`);
            break;
          case "table":
            w || (k = a.subParser("makeMarkdown.table")(c, y) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = a.subParser("makeMarkdown.codeSpan")(c, y);
            break;
          case "em":
          case "i":
            k = a.subParser("makeMarkdown.emphasis")(c, y);
            break;
          case "strong":
          case "b":
            k = a.subParser("makeMarkdown.strong")(c, y);
            break;
          case "del":
            k = a.subParser("makeMarkdown.strikethrough")(c, y);
            break;
          case "a":
            k = a.subParser("makeMarkdown.links")(c, y);
            break;
          case "img":
            k = a.subParser("makeMarkdown.image")(c, y);
            break;
          default:
            k = c.outerHTML + `

`;
        }
        return k;
      }), a.subParser("makeMarkdown.paragraph", function(c, y) {
        var w = "";
        if (c.hasChildNodes())
          for (var k = c.childNodes, M = k.length, z = 0; z < M; ++z)
            w += a.subParser("makeMarkdown.node")(k[z], y);
        return w = w.trim(), w;
      }), a.subParser("makeMarkdown.pre", function(c, y) {
        var w = c.getAttribute("prenum");
        return "<pre>" + y.preList[w] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function(c, y) {
        var w = "";
        if (c.hasChildNodes()) {
          w += "~~";
          for (var k = c.childNodes, M = k.length, z = 0; z < M; ++z)
            w += a.subParser("makeMarkdown.node")(k[z], y);
          w += "~~";
        }
        return w;
      }), a.subParser("makeMarkdown.strong", function(c, y) {
        var w = "";
        if (c.hasChildNodes()) {
          w += "**";
          for (var k = c.childNodes, M = k.length, z = 0; z < M; ++z)
            w += a.subParser("makeMarkdown.node")(k[z], y);
          w += "**";
        }
        return w;
      }), a.subParser("makeMarkdown.table", function(c, y) {
        var w = "", k = [[], []], M = c.querySelectorAll("thead>tr>th"), z = c.querySelectorAll("tbody>tr"), R, L;
        for (R = 0; R < M.length; ++R) {
          var q = a.subParser("makeMarkdown.tableCell")(M[R], y), F = "---";
          if (M[R].hasAttribute("style")) {
            var $ = M[R].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch ($) {
              case "text-align:left;":
                F = ":---";
                break;
              case "text-align:right;":
                F = "---:";
                break;
              case "text-align:center;":
                F = ":---:";
                break;
            }
          }
          k[0][R] = q.trim(), k[1][R] = F;
        }
        for (R = 0; R < z.length; ++R) {
          var W = k.push([]) - 1, O = z[R].getElementsByTagName("td");
          for (L = 0; L < M.length; ++L) {
            var U = " ";
            typeof O[L] < "u" && (U = a.subParser("makeMarkdown.tableCell")(O[L], y)), k[W].push(U);
          }
        }
        var J = 3;
        for (R = 0; R < k.length; ++R)
          for (L = 0; L < k[R].length; ++L) {
            var ae = k[R][L].length;
            ae > J && (J = ae);
          }
        for (R = 0; R < k.length; ++R) {
          for (L = 0; L < k[R].length; ++L)
            R === 1 ? k[R][L].slice(-1) === ":" ? k[R][L] = a.helper.padEnd(k[R][L].slice(-1), J - 1, "-") + ":" : k[R][L] = a.helper.padEnd(k[R][L], J, "-") : k[R][L] = a.helper.padEnd(k[R][L], J);
          w += "| " + k[R].join(" | ") + ` |
`;
        }
        return w.trim();
      }), a.subParser("makeMarkdown.tableCell", function(c, y) {
        var w = "";
        if (!c.hasChildNodes())
          return "";
        for (var k = c.childNodes, M = k.length, z = 0; z < M; ++z)
          w += a.subParser("makeMarkdown.node")(k[z], y, !0);
        return w.trim();
      }), a.subParser("makeMarkdown.txt", function(c) {
        var y = c.nodeValue;
        return y = y.replace(/ +/g, " "), y = y.replace(/¨NBSP;/g, " "), y = a.helper.unescapeHTMLEntities(y), y = y.replace(/([*_~|`])/g, "\\$1"), y = y.replace(/^(\s*)>/g, "\\$1>"), y = y.replace(/^#/gm, "\\#"), y = y.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), y = y.replace(/^( {0,3}\d+)\./gm, "$1\\."), y = y.replace(/^( {0,3})([+-])/gm, "$1\\$2"), y = y.replace(/]([\s]*)\(/g, "\\]$1\\("), y = y.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), y;
      });
      var I = this;
      t.exports ? t.exports = a : I.showdown = a;
    }).call(pw);
  })(vl)), vl.exports;
}
var gw = mw();
const vw = /* @__PURE__ */ Qf(gw);
var ia = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, s, a) {
      a === void 0 && (a = {});
      var u;
      typeof a == "function" ? (u = a, a = {}) : "callback" in a && (u = a.callback);
      var l = this.castInput(r, a), f = this.castInput(s, a), m = this.removeEmpty(this.tokenize(l, a)), p = this.removeEmpty(this.tokenize(f, a));
      return this.diffWithOptionsObj(m, p, a, u);
    }, t.prototype.diffWithOptionsObj = function(r, s, a, u) {
      var l = this, f, m = function(c) {
        if (c = l.postProcess(c, a), u) {
          setTimeout(function() {
            u(c);
          }, 0);
          return;
        } else
          return c;
      }, p = s.length, v = r.length, g = 1, E = p + v;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var _ = (f = a.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + _, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, a);
      if (h[0].oldPos + 1 >= v && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var x = -1 / 0, j = 1 / 0, N = function() {
        for (var c = Math.max(x, -g); c <= Math.min(j, g); c += 2) {
          var y = void 0, w = h[c - 1], k = h[c + 1];
          w && (h[c - 1] = void 0);
          var M = !1;
          if (k) {
            var z = k.oldPos - c;
            M = k && 0 <= z && z < p;
          }
          var R = w && w.oldPos + 1 < v;
          if (!M && !R) {
            h[c] = void 0;
            continue;
          }
          if (!R || M && w.oldPos < k.oldPos ? y = l.addToPath(k, !0, !1, 0, a) : y = l.addToPath(w, !1, !0, 1, a), C = l.extractCommon(y, s, r, c, a), y.oldPos + 1 >= v && C + 1 >= p)
            return m(l.buildValues(y.lastComponent, s, r)) || !0;
          h[c] = y, y.oldPos + 1 >= v && (j = Math.min(j, c - 1)), C + 1 >= p && (x = Math.max(x, c + 1));
        }
        g++;
      };
      if (u)
        (function c() {
          setTimeout(function() {
            if (g > E || Date.now() > S)
              return u(void 0);
            N() || c();
          }, 0);
        })();
      else
        for (; g <= E && Date.now() <= S; ) {
          var I = N();
          if (I)
            return I;
        }
    }, t.prototype.addToPath = function(r, s, a, u, l) {
      var f = r.lastComponent;
      return f && !l.oneChangePerToken && f.added === s && f.removed === a ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: a, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: a, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, s, a, u, l) {
      for (var f = s.length, m = a.length, p = r.oldPos, v = p - u, g = 0; v + 1 < f && p + 1 < m && this.equals(a[p + 1], s[v + 1], l); )
        v++, p++, g++, l.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !l.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, v;
    }, t.prototype.equals = function(r, s, a) {
      return a.comparator ? a.comparator(r, s) : r === s || !!a.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var s = [], a = 0; a < r.length; a++)
        r[a] && s.push(r[a]);
      return s;
    }, t.prototype.castInput = function(r, s) {
      return r;
    }, t.prototype.tokenize = function(r, s) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, s) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, s, a) {
      for (var u = [], l; r; )
        u.push(r), l = r.previousComponent, delete r.previousComponent, r = l;
      u.reverse();
      for (var f = u.length, m = 0, p = 0, v = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(a.slice(v, v + g.count)), v += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(_, S) {
              var h = a[v + S];
              return h.length > _.length ? h : _;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (v += g.count);
        }
      }
      return u;
    }, t;
  })()
), yw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), _w = (
  /** @class */
  (function(t) {
    yw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ia)
);
new _w();
function R0(t, r) {
  var s;
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[s] != r[s])
      return t.slice(0, s);
  return t.slice(0, s);
}
function j0(t, r) {
  var s;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[t.length - (s + 1)] != r[r.length - (s + 1)])
      return t.slice(-s);
  return t.slice(-s);
}
function Hf(t, r, s) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + t.slice(r.length);
}
function qf(t, r, s) {
  if (!r)
    return t + s;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + s;
}
function Ys(t, r) {
  return Hf(t, r, "");
}
function il(t, r) {
  return qf(t, r, "");
}
function D0(t, r) {
  return r.slice(0, bw(t, r));
}
function bw(t, r) {
  var s = 0;
  t.length > r.length && (s = t.length - r.length);
  var a = r.length;
  t.length < r.length && (a = t.length);
  var u = Array(a), l = 0;
  u[0] = 0;
  for (var f = 1; f < a; f++) {
    for (r[f] == r[l] ? u[f] = u[l] : u[f] = l; l > 0 && r[f] != r[l]; )
      l = u[l];
    r[f] == r[l] && l++;
  }
  l = 0;
  for (var m = s; m < t.length; m++) {
    for (; l > 0 && t[m] != r[l]; )
      l = u[l];
    t[m] == r[l] && l++;
  }
  return l;
}
function Fs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Jr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var i_ = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), xl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Sw = new RegExp("[".concat(xl, "]+|\\s+|[^").concat(xl, "]"), "ug"), ww = (
  /** @class */
  (function(t) {
    i_(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreCase && (s = s.toLowerCase(), a = a.toLowerCase()), s.trim() === a.trim();
    }, r.prototype.tokenize = function(s, a) {
      a === void 0 && (a = {});
      var u;
      if (a.intlSegmenter) {
        var l = a.intlSegmenter;
        if (l.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(l.segment(s), function(p) {
          return p.segment;
        });
      } else
        u = s.match(Sw) || [];
      var f = [], m = null;
      return u.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(a, u) {
        return u == 0 ? a : a.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, a) {
      if (!s || a.oneChangePerToken)
        return s;
      var u = null, l = null, f = null;
      return s.forEach(function(m) {
        m.added ? l = m : m.removed ? f = m : ((l || f) && z0(u, f, l, m), u = m, l = null, f = null);
      }), (l || f) && z0(u, f, l, null), s;
    }, r;
  })(ia)
), Ew = new ww();
function s_(t, r, s) {
  return Ew.diff(t, r, s);
}
function z0(t, r, s, a) {
  if (r && s) {
    var u = Jr(r.value), l = Fs(r.value), f = Jr(s.value), m = Fs(s.value);
    if (t) {
      var p = R0(u, f);
      t.value = qf(t.value, f, p), r.value = Ys(r.value, p), s.value = Ys(s.value, p);
    }
    if (a) {
      var v = j0(l, m);
      a.value = Hf(a.value, m, v), r.value = il(r.value, v), s.value = il(s.value, v);
    }
  } else if (s) {
    if (t) {
      var g = Jr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (a) {
      var g = Jr(a.value);
      a.value = a.value.substring(g.length);
    }
  } else if (t && a) {
    var E = Jr(a.value), _ = Jr(r.value), S = Fs(r.value), h = R0(E, _);
    r.value = Ys(r.value, h);
    var C = j0(Ys(E, h), S);
    r.value = il(r.value, C), a.value = Hf(a.value, E, C), t.value = qf(t.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var x = Jr(a.value), j = Fs(r.value), N = D0(j, x);
    r.value = il(r.value, N);
  } else if (t) {
    var I = Fs(t.value), c = Jr(r.value), N = D0(I, c);
    r.value = Ys(r.value, N);
  }
}
var Cw = (
  /** @class */
  (function(t) {
    i_(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(xl, "]+|[^\\S\\n\\r]+|[^").concat(xl, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(ia)
);
new Cw();
var kw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Aw = (
  /** @class */
  (function(t) {
    kw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = o_, s;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !a.includes(`
`)) && (a = a.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), a.endsWith(`
`) && (a = a.slice(0, -1))), t.prototype.equals.call(this, s, a, u);
    }, r;
  })(ia)
);
new Aw();
function o_(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var s = [], a = t.split(/(\n|\r\n)/);
  a[a.length - 1] || a.pop();
  for (var u = 0; u < a.length; u++) {
    var l = a[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += l : s.push(l);
  }
  return s;
}
var xw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Tw = (
  /** @class */
  (function(t) {
    xw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ia)
);
new Tw();
var Nw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Ow = (
  /** @class */
  (function(t) {
    Nw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(ia)
);
new Ow();
var Mw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Rw = (
  /** @class */
  (function(t) {
    Mw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = o_, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, a) {
      var u = a.undefinedReplacement, l = a.stringifyReplacer, f = l === void 0 ? function(m, p) {
        return typeof p > "u" ? u : p;
      } : l;
      return typeof s == "string" ? s : JSON.stringify(Zf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return t.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(ia)
);
new Rw();
function Zf(t, r, s, a, u) {
  r = r || [], s = s || [], a && (t = a(u === void 0 ? "" : u, t));
  var l;
  for (l = 0; l < r.length; l += 1)
    if (r[l] === t)
      return s[l];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), s.push(f), l = 0; l < t.length; l += 1)
      f[l] = Zf(t[l], r, s, a, String(l));
    return r.pop(), s.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, s.push(f);
    var m = [], p;
    for (p in t)
      Object.prototype.hasOwnProperty.call(t, p) && m.push(p);
    for (m.sort(), l = 0; l < m.length; l += 1)
      p = m[l], f[p] = Zf(t[p], r, s, a, p);
    r.pop(), s.pop();
  } else
    f = t;
  return f;
}
var jw = /* @__PURE__ */ (function() {
  var t = function(r, s) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (a[l] = u[l]);
    }, t(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    t(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), Dw = (
  /** @class */
  (function(t) {
    jw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.slice();
    }, r.prototype.join = function(s) {
      return s;
    }, r.prototype.removeEmpty = function(s) {
      return s;
    }, r;
  })(ia)
);
new Dw();
const zw = Object.fromEntries(Hy.map(({ value: t, label: r }) => [t, r])), Lw = Object.fromEntries(qy.map(({ value: t, label: r }) => [t, r]));
function L0(t) {
  return t ?? null;
}
function Sr(t) {
  return t == null || t === "" ? "—" : typeof t == "boolean" ? t ? "Yes" : "No" : Array.isArray(t) ? t.length > 0 ? t.join(", ") : "—" : String(t);
}
function P0(t, r) {
  return t === "position" ? Sr(zw[Number(r)] ?? r) : t === "role" ? Sr(Lw[Number(r)] ?? r) : t === "probability" && typeof r == "number" ? `${r}%` : Sr(r);
}
function Tl(t) {
  return (t.key || []).slice().sort().join(",");
}
function Pw(t, r) {
  if ((t.content || "") !== (r.content || "") || (t.comment || "") !== (r.comment || "") || Tl(t) !== Tl(r)) return !1;
  for (const s of ra) {
    const a = t[s], u = r[s];
    if (a !== u && !(a == null && u == null))
      return !1;
  }
  return !0;
}
function Nl(t, r) {
  return !Pw(t, r);
}
function u_(t, r) {
  const s = [];
  (t.comment || "") !== (r.comment || "") && s.push({
    field: "comment",
    label: "Name",
    before: Sr(t.comment),
    after: Sr(r.comment)
  }), Tl(t) !== Tl(r) && s.push({
    field: "key",
    label: "Triggers",
    before: Sr(t.key || []),
    after: Sr(r.key || [])
  }), (t.content || "") !== (r.content || "") && s.push({
    field: "content",
    label: "Content",
    before: Sr(t.content),
    after: Sr(r.content)
  });
  for (const a of _S) {
    const u = L0(t[a] ?? Ye[a]), l = L0(r[a] ?? Ye[a]);
    u !== l && s.push({
      field: a,
      label: bS[a],
      before: P0(a, u),
      after: P0(a, l)
    });
  }
  return s;
}
function Iw(t) {
  const r = {};
  for (const s of ra) {
    const a = t[s], u = Ye[s];
    a !== void 0 && a !== u && (r[s] = a);
  }
  return r;
}
const Bw = ({ originalEntry: t, newEntry: r }) => {
  const s = ie.useMemo(
    () => u_(t, r),
    [t, r]
  ), a = (u, l) => {
    const f = s_(u, l);
    let m = "", p = "";
    return f.forEach((v) => {
      const g = v.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), _ = `<span style="${v.added ? "color: green; background-color: #e6ffed;" : v.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${g}</span>`;
      v.added || (m += _), v.removed || (p += _);
    }), { originalHtml: m, newHtml: p };
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Compare Changes" }),
    /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: s.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No entry changes were detected." }) : s.map(({ field: u, label: l, before: f, after: m }) => {
      const p = a(f, m);
      return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
        /* @__PURE__ */ A.jsx("h4", { children: l }),
        /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
          /* @__PURE__ */ A.jsx("span", { children: "Original" }),
          /* @__PURE__ */ A.jsx("span", { children: "Suggestion" })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
          /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: p.originalHtml } }),
          /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: p.newHtml } })
        ] })
      ] }, u);
    }) })
  ] });
}, Uw = SillyTavern.getContext(), Ef = (t, r, s, a) => {
  const u = t.trim();
  if (!u) return r;
  const l = Number.parseInt(u, 10);
  return Number.isNaN(l) ? r : s !== void 0 && l < s ? s : a !== void 0 && l > a ? a : l;
}, Hw = ie.forwardRef(({ entry: t, initialRegexIds: r }, s) => {
  const [a, u] = ie.useState([]), [l, f] = ie.useState(t.comment), [m, p] = ie.useState(t.key.join(", ")), [v, g] = ie.useState(t.content), [E, _] = ie.useState([]), [S, h] = ie.useState(!1), [C, x] = ie.useState(t.position ?? Ye.position), [j, N] = ie.useState(String(t.depth ?? Ye.depth)), [I, c] = ie.useState(String(t.order ?? Ye.order)), [y, w] = ie.useState(t.role ?? Ye.role), [k, M] = ie.useState(t.selective ?? Ye.selective), [z, R] = ie.useState(t.constant ?? Ye.constant), [L, q] = ie.useState(String(t.probability ?? Ye.probability)), [F, $] = ie.useState(t.group ?? Ye.group), [W, O] = ie.useState(
    t.excludeRecursion ?? Ye.excludeRecursion
  ), [U, J] = ie.useState(
    t.preventRecursion ?? Ye.preventRecursion
  );
  ie.useEffect(() => {
    const P = Uw.extensionSettings.regex ?? [];
    u(P);
    const te = Object.entries(r).map(([K, se]) => {
      const re = P.find((pe) => pe.id === K);
      return re ? { id: re.id, label: re.scriptName, enabled: !se?.disabled } : null;
    }).filter((K) => K !== null);
    _(te);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const P = {
        ...t,
        comment: l.trim(),
        key: m.split(",").map((K) => K.trim()).filter(Boolean),
        content: v,
        position: C,
        depth: Ef(j, t.depth ?? Ye.depth, 0),
        order: Ef(I, t.order ?? Ye.order),
        role: y,
        selective: k,
        constant: z,
        probability: Ef(L, t.probability ?? Ye.probability, 0, 100),
        group: F.trim(),
        excludeRecursion: W,
        preventRecursion: U
      }, te = E.reduce(
        (K, se) => (K[se.id] = { disabled: !se.enabled }, K),
        {}
      );
      return { updatedEntry: P, updatedRegexIds: te };
    }
  }));
  const ae = ie.useMemo(
    () => a.map((P) => ({ value: P.id, label: P.scriptName })),
    [a]
  ), B = ie.useMemo(() => E.map((P) => P.id), [E]), Y = C === 4 || C === 5, ce = ie.useCallback(() => {
    let P = t.content;
    const te = E.filter((K) => K.enabled);
    for (const K of te) {
      const se = a.find((re) => re.id === K.id);
      se && (P = D3(se, P));
    }
    g(P);
  }, [E, a, t.content]), G = (P) => {
    const te = P.map((K) => {
      const se = E.find((pe) => pe.id === K);
      if (se) return se;
      const re = a.find((pe) => pe.id === K);
      return re ? { id: re.id, label: re.scriptName, enabled: !0 } : null;
    }).filter((K) => K !== null);
    _(te);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: "Title" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: l, onChange: (P) => f(P.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (P) => p(P.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ A.jsx(
        r_,
        {
          items: ae,
          value: B,
          onChange: G,
          multiple: !0,
          enableSearch: !0,
          placeholder: "Select regex scripts..."
        }
      ),
      E.length > 0 && /* @__PURE__ */ A.jsx(
        n_,
        {
          items: E,
          onItemsChange: _,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx(Oe, { onClick: ce, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ A.jsx(
      Er,
      {
        value: v,
        onChange: (P) => g(P.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    ),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-advanced", children: [
      /* @__PURE__ */ A.jsxs(
        "button",
        {
          type: "button",
          className: "advanced-settings-toggle menu_button",
          onClick: () => h((P) => !P),
          "aria-expanded": S,
          children: [
            /* @__PURE__ */ A.jsx("span", { children: "Advanced Settings" }),
            /* @__PURE__ */ A.jsx("i", { className: `fa-solid ${S ? "fa-chevron-up" : "fa-chevron-down"}` })
          ]
        }
      ),
      S && /* @__PURE__ */ A.jsxs("div", { className: "advanced-settings-panel", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "advanced-settings-grid", children: [
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Position" }),
            /* @__PURE__ */ A.jsx(
              "select",
              {
                className: "text_pole",
                value: C,
                onChange: (P) => x(Number.parseInt(P.target.value, 10)),
                children: Hy.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.value, children: P.label }, P.value))
              }
            )
          ] }),
          Y && /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Depth" }),
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "number",
                min: 0,
                className: "text_pole",
                value: j,
                onChange: (P) => N(P.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Order" }),
            /* @__PURE__ */ A.jsx("input", { type: "number", className: "text_pole", value: I, onChange: (P) => c(P.target.value) })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Role" }),
            /* @__PURE__ */ A.jsx(
              "select",
              {
                className: "text_pole",
                value: y,
                onChange: (P) => w(Number.parseInt(P.target.value, 10)),
                children: qy.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.value, children: P.label }, P.value))
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Probability" }),
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "number",
                min: 0,
                max: 100,
                className: "text_pole",
                value: L,
                onChange: (P) => q(P.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Group" }),
            /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: F, onChange: (P) => $(P.target.value) })
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "advanced-settings-checkboxes", children: [
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: k, onChange: (P) => M(P.target.checked) }),
            /* @__PURE__ */ A.jsx("span", { children: "Selective" })
          ] }),
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: z, onChange: (P) => R(P.target.checked) }),
            /* @__PURE__ */ A.jsx("span", { children: "Constant" })
          ] }),
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "checkbox",
                checked: W,
                onChange: (P) => O(P.target.checked)
              }
            ),
            /* @__PURE__ */ A.jsx("span", { children: "Exclude Recursion" })
          ] }),
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "checkbox",
                checked: U,
                onChange: (P) => J(P.target.checked)
              }
            ),
            /* @__PURE__ */ A.jsx("span", { children: "Prevent Recursion" })
          ] })
        ] })
      ] })
    ] })
  ] });
});
function le(t, r, s) {
  function a(m, p) {
    var v;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (v = m._zod).traits ?? (v.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(t), r(m, p);
    for (const g in f.prototype)
      g in m || Object.defineProperty(m, g, { value: f.prototype[g].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const u = s?.Parent ?? Object;
  class l extends u {
  }
  Object.defineProperty(l, "name", { value: t });
  function f(m) {
    var p;
    const v = s?.Parent ? new l() : this;
    a(v, m), (p = v._zod).deferred ?? (p.deferred = []);
    for (const g of v._zod.deferred)
      g();
    return v;
  }
  return Object.defineProperty(f, "init", { value: a }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Ii extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class l_ extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const c_ = {};
function La(t) {
  return c_;
}
function d_(t) {
  const r = Object.values(t).filter((a) => typeof a == "number");
  return Object.entries(t).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function Gf(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function oh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function uh(t) {
  return t == null;
}
function lh(t) {
  const r = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, s);
}
function qw(t, r) {
  const s = (t.toString().split(".")[1] || "").length, a = r.toString();
  let u = (a.split(".")[1] || "").length;
  if (u === 0 && /\d?e-\d?/.test(a)) {
    const p = a.match(/\d?e-(\d?)/);
    p?.[1] && (u = Number.parseInt(p[1]));
  }
  const l = s > u ? s : u, f = Number.parseInt(t.toFixed(l).replace(".", "")), m = Number.parseInt(r.toFixed(l).replace(".", ""));
  return f % m / 10 ** l;
}
const I0 = Symbol("evaluating");
function at(t, r, s) {
  let a;
  Object.defineProperty(t, r, {
    get() {
      if (a !== I0)
        return a === void 0 && (a = I0, a = s()), a;
    },
    set(u) {
      Object.defineProperty(t, r, {
        value: u
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ia(t, r, s) {
  Object.defineProperty(t, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ba(...t) {
  const r = {};
  for (const s of t) {
    const a = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, a);
  }
  return Object.defineProperties({}, r);
}
function B0(t) {
  return JSON.stringify(t);
}
const f_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Ol(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const Zw = oh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function so(t) {
  if (Ol(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(Ol(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function h_(t) {
  return so(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Gw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Dl(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function sa(t, r, s) {
  const a = new t._zod.constr(r ?? t._zod.def);
  return (!r || s?.parent) && (a._zod.parent = t), a;
}
function Se(t) {
  const r = t;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function Vw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const $w = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Yw(t, r) {
  const s = t._zod.def, a = Ba(t._zod.def, {
    get shape() {
      const u = {};
      for (const l in r) {
        if (!(l in s.shape))
          throw new Error(`Unrecognized key: "${l}"`);
        r[l] && (u[l] = s.shape[l]);
      }
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return sa(t, a);
}
function Fw(t, r) {
  const s = t._zod.def, a = Ba(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape };
      for (const l in r) {
        if (!(l in s.shape))
          throw new Error(`Unrecognized key: "${l}"`);
        r[l] && delete u[l];
      }
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return sa(t, a);
}
function Xw(t, r) {
  if (!so(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = Ba(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return sa(t, u);
}
function Qw(t, r) {
  if (!so(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...t._zod.def,
    get shape() {
      const a = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", a), a;
    },
    checks: t._zod.def.checks
  };
  return sa(t, s);
}
function Kw(t, r) {
  const s = Ba(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", a), a;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return sa(t, s);
}
function Jw(t, r, s) {
  const a = Ba(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, l = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (l[f] = t ? new t({
            type: "optional",
            innerType: u[f]
          }) : u[f]);
        }
      else
        for (const f in u)
          l[f] = t ? new t({
            type: "optional",
            innerType: u[f]
          }) : u[f];
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return sa(r, a);
}
function Ww(t, r, s) {
  const a = Ba(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, l = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (l[f] = new t({
            type: "nonoptional",
            innerType: u[f]
          }));
        }
      else
        for (const f in u)
          l[f] = new t({
            type: "nonoptional",
            innerType: u[f]
          });
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return sa(r, a);
}
function Li(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let s = r; s < t.issues.length; s++)
    if (t.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function p_(t, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(t), s;
  });
}
function sl(t) {
  return typeof t == "string" ? t : t?.message;
}
function Pa(t, r, s) {
  const a = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const u = sl(t.inst?._zod.def?.error?.(t)) ?? sl(r?.error?.(t)) ?? sl(s.customError?.(t)) ?? sl(s.localeError?.(t)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function ch(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function oo(...t) {
  const [r, s, a] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: a
  } : { ...r };
}
const m_ = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Gf, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, g_ = le("$ZodError", m_), v_ = le("$ZodError", m_, { Parent: Error });
function eE(t, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of t.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function tE(t, r = (s) => s.message) {
  const s = { _errors: [] }, a = (u) => {
    for (const l of u.issues)
      if (l.code === "invalid_union" && l.errors.length)
        l.errors.map((f) => a({ issues: f }));
      else if (l.code === "invalid_key")
        a({ issues: l.issues });
      else if (l.code === "invalid_element")
        a({ issues: l.issues });
      else if (l.path.length === 0)
        s._errors.push(r(l));
      else {
        let f = s, m = 0;
        for (; m < l.path.length; ) {
          const p = l.path[m];
          m === l.path.length - 1 ? (f[p] = f[p] || { _errors: [] }, f[p]._errors.push(r(l))) : f[p] = f[p] || { _errors: [] }, f = f[p], m++;
        }
      }
  };
  return a(t), s;
}
const dh = (t) => (r, s, a, u) => {
  const l = a ? Object.assign(a, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, l);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => Pa(p, l, La())));
    throw f_(m, u?.callee), m;
  }
  return f.value;
}, fh = (t) => async (r, s, a, u) => {
  const l = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, l);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => Pa(p, l, La())));
    throw f_(m, u?.callee), m;
  }
  return f.value;
}, zl = (t) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, l = r._zod.run({ value: s, issues: [] }, u);
  if (l instanceof Promise)
    throw new Ii();
  return l.issues.length ? {
    success: !1,
    error: new (t ?? g_)(l.issues.map((f) => Pa(f, u, La())))
  } : { success: !0, data: l.value };
}, nE = /* @__PURE__ */ zl(v_), Ll = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let l = r._zod.run({ value: s, issues: [] }, u);
  return l instanceof Promise && (l = await l), l.issues.length ? {
    success: !1,
    error: new t(l.issues.map((f) => Pa(f, u, La())))
  } : { success: !0, data: l.value };
}, rE = /* @__PURE__ */ Ll(v_), aE = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return dh(t)(r, s, u);
}, iE = (t) => (r, s, a) => dh(t)(r, s, a), sE = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return fh(t)(r, s, u);
}, oE = (t) => async (r, s, a) => fh(t)(r, s, a), uE = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return zl(t)(r, s, u);
}, lE = (t) => (r, s, a) => zl(t)(r, s, a), cE = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Ll(t)(r, s, u);
}, dE = (t) => async (r, s, a) => Ll(t)(r, s, a), fE = /^[cC][^\s-]{8,}$/, hE = /^[0-9a-z]+$/, pE = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, mE = /^[0-9a-vA-V]{20}$/, gE = /^[A-Za-z0-9]{27}$/, vE = /^[a-zA-Z0-9_-]{21}$/, yE = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, _E = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, U0 = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, bE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, SE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function wE() {
  return new RegExp(SE, "u");
}
const EE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, CE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, kE = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, AE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, xE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, y_ = /^[A-Za-z0-9_-]*$/, TE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, NE = /^\+(?:[0-9]){6,14}[0-9]$/, __ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", OE = /* @__PURE__ */ new RegExp(`^${__}$`);
function b_(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ME(t) {
  return new RegExp(`^${b_(t)}$`);
}
function RE(t) {
  const r = b_({ precision: t.precision }), s = ["Z"];
  t.local && s.push(""), t.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${__}T(?:${a})$`);
}
const jE = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, DE = /^-?\d+$/, zE = /^-?\d+(?:\.\d+)?/, LE = /^(?:true|false)$/i, PE = /^[^A-Z]*$/, IE = /^[^a-z]*$/, dn = /* @__PURE__ */ le("$ZodCheck", (t, r) => {
  var s;
  t._zod ?? (t._zod = {}), t._zod.def = r, (s = t._zod).onattach ?? (s.onattach = []);
}), S_ = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, w_ = /* @__PURE__ */ le("$ZodCheckLessThan", (t, r) => {
  dn.init(t, r);
  const s = S_[typeof r.value];
  t._zod.onattach.push((a) => {
    const u = a._zod.bag, l = (r.inclusive ? u.maximum : u.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < l && (r.inclusive ? u.maximum = r.value : u.exclusiveMaximum = r.value);
  }), t._zod.check = (a) => {
    (r.inclusive ? a.value <= r.value : a.value < r.value) || a.issues.push({
      origin: s,
      code: "too_big",
      maximum: r.value,
      input: a.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), E_ = /* @__PURE__ */ le("$ZodCheckGreaterThan", (t, r) => {
  dn.init(t, r);
  const s = S_[typeof r.value];
  t._zod.onattach.push((a) => {
    const u = a._zod.bag, l = (r.inclusive ? u.minimum : u.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > l && (r.inclusive ? u.minimum = r.value : u.exclusiveMinimum = r.value);
  }), t._zod.check = (a) => {
    (r.inclusive ? a.value >= r.value : a.value > r.value) || a.issues.push({
      origin: s,
      code: "too_small",
      minimum: r.value,
      input: a.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), BE = /* @__PURE__ */ le("$ZodCheckMultipleOf", (t, r) => {
  dn.init(t, r), t._zod.onattach.push((s) => {
    var a;
    (a = s._zod.bag).multipleOf ?? (a.multipleOf = r.value);
  }), t._zod.check = (s) => {
    if (typeof s.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof s.value == "bigint" ? s.value % r.value === BigInt(0) : qw(s.value, r.value) === 0) || s.issues.push({
      origin: typeof s.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), UE = /* @__PURE__ */ le("$ZodCheckNumberFormat", (t, r) => {
  dn.init(t, r), r.format = r.format || "float64";
  const s = r.format?.includes("int"), a = s ? "int" : "number", [u, l] = $w[r.format];
  t._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = r.format, m.minimum = u, m.maximum = l, s && (m.pattern = DE);
  }), t._zod.check = (f) => {
    const m = f.value;
    if (s) {
      if (!Number.isInteger(m)) {
        f.issues.push({
          expected: a,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: m,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(m)) {
        m > 0 ? f.issues.push({
          input: m,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: a,
          continue: !r.abort
        }) : f.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: a,
          continue: !r.abort
        });
        return;
      }
    }
    m < u && f.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: u,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), m > l && f.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: l,
      inst: t
    });
  };
}), HE = /* @__PURE__ */ le("$ZodCheckMaxLength", (t, r) => {
  var s;
  dn.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !uh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const f = ch(u);
    a.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: t,
      continue: !r.abort
    });
  };
}), qE = /* @__PURE__ */ le("$ZodCheckMinLength", (t, r) => {
  var s;
  dn.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !uh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const f = ch(u);
    a.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: t,
      continue: !r.abort
    });
  };
}), ZE = /* @__PURE__ */ le("$ZodCheckLengthEquals", (t, r) => {
  var s;
  dn.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !uh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), t._zod.check = (a) => {
    const u = a.value, l = u.length;
    if (l === r.length)
      return;
    const f = ch(u), m = l > r.length;
    a.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Pl = /* @__PURE__ */ le("$ZodCheckStringFormat", (t, r) => {
  var s, a;
  dn.init(t, r), t._zod.onattach.push((u) => {
    const l = u._zod.bag;
    l.format = r.format, r.pattern && (l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(r.pattern));
  }), r.pattern ? (s = t._zod).check ?? (s.check = (u) => {
    r.pattern.lastIndex = 0, !r.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: u.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (a = t._zod).check ?? (a.check = () => {
  });
}), GE = /* @__PURE__ */ le("$ZodCheckRegex", (t, r) => {
  Pl.init(t, r), t._zod.check = (s) => {
    r.pattern.lastIndex = 0, !r.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: s.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), VE = /* @__PURE__ */ le("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = PE), Pl.init(t, r);
}), $E = /* @__PURE__ */ le("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = IE), Pl.init(t, r);
}), YE = /* @__PURE__ */ le("$ZodCheckIncludes", (t, r) => {
  dn.init(t, r);
  const s = Dl(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = a, t._zod.onattach.push((u) => {
    const l = u._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(a);
  }), t._zod.check = (u) => {
    u.value.includes(r.includes, r.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: u.value,
      inst: t,
      continue: !r.abort
    });
  };
}), FE = /* @__PURE__ */ le("$ZodCheckStartsWith", (t, r) => {
  dn.init(t, r);
  const s = new RegExp(`^${Dl(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (a) => {
    a.value.startsWith(r.prefix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), XE = /* @__PURE__ */ le("$ZodCheckEndsWith", (t, r) => {
  dn.init(t, r);
  const s = new RegExp(`.*${Dl(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (a) => {
    a.value.endsWith(r.suffix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), QE = /* @__PURE__ */ le("$ZodCheckOverwrite", (t, r) => {
  dn.init(t, r), t._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class KE {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const a = r.split(`
`).filter((f) => f), u = Math.min(...a.map((f) => f.length - f.trimStart().length)), l = a.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of l)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((l) => `  ${l}`)];
    return new r(...s, u.join(`
`));
  }
}
const JE = {
  major: 4,
  minor: 1,
  patch: 12
}, _t = /* @__PURE__ */ le("$ZodType", (t, r) => {
  var s;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = JE;
  const a = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && a.unshift(t);
  for (const u of a)
    for (const l of u._zod.onattach)
      l(t);
  if (a.length === 0)
    (s = t._zod).deferred ?? (s.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const u = (f, m, p) => {
      let v = Li(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const _ = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new Ii();
        if (g || S instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== _ && (v || (v = Li(f, _)));
          });
        else {
          if (f.issues.length === _)
            continue;
          v || (v = Li(f, _));
        }
      }
      return g ? g.then(() => f) : f;
    }, l = (f, m, p) => {
      if (Li(f))
        return f.aborted = !0, f;
      const v = u(m, a, p);
      if (v instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return v.then((g) => t._zod.parse(g, p));
      }
      return t._zod.parse(v, p);
    };
    t._zod.run = (f, m) => {
      if (m.skipChecks)
        return t._zod.parse(f, m);
      if (m.direction === "backward") {
        const v = t._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return v instanceof Promise ? v.then((g) => l(g, f, m)) : l(v, f, m);
      }
      const p = t._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Ii();
        return p.then((v) => u(v, a, m));
      }
      return u(p, a, m);
    };
  }
  t["~standard"] = {
    validate: (u) => {
      try {
        const l = nE(t, u);
        return l.success ? { value: l.data } : { issues: l.error?.issues };
      } catch {
        return rE(t, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), hh = /* @__PURE__ */ le("$ZodString", (t, r) => {
  _t.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? jE(t._zod.bag), t._zod.parse = (s, a) => {
    if (r.coerce)
      try {
        s.value = String(s.value);
      } catch {
      }
    return typeof s.value == "string" || s.issues.push({
      expected: "string",
      code: "invalid_type",
      input: s.value,
      inst: t
    }), s;
  };
}), ut = /* @__PURE__ */ le("$ZodStringFormat", (t, r) => {
  Pl.init(t, r), hh.init(t, r);
}), WE = /* @__PURE__ */ le("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = _E), ut.init(t, r);
}), e4 = /* @__PURE__ */ le("$ZodUUID", (t, r) => {
  if (r.version) {
    const a = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (a === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = U0(a));
  } else
    r.pattern ?? (r.pattern = U0());
  ut.init(t, r);
}), t4 = /* @__PURE__ */ le("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = bE), ut.init(t, r);
}), n4 = /* @__PURE__ */ le("$ZodURL", (t, r) => {
  ut.init(t, r), t._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: TE.source,
        input: s.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: s.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? s.value = u.href : s.value = a;
      return;
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "url",
        input: s.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), r4 = /* @__PURE__ */ le("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = wE()), ut.init(t, r);
}), a4 = /* @__PURE__ */ le("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = vE), ut.init(t, r);
}), i4 = /* @__PURE__ */ le("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = fE), ut.init(t, r);
}), s4 = /* @__PURE__ */ le("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = hE), ut.init(t, r);
}), o4 = /* @__PURE__ */ le("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = pE), ut.init(t, r);
}), u4 = /* @__PURE__ */ le("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = mE), ut.init(t, r);
}), l4 = /* @__PURE__ */ le("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = gE), ut.init(t, r);
}), c4 = /* @__PURE__ */ le("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = RE(r)), ut.init(t, r);
}), d4 = /* @__PURE__ */ le("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = OE), ut.init(t, r);
}), f4 = /* @__PURE__ */ le("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = ME(r)), ut.init(t, r);
}), h4 = /* @__PURE__ */ le("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = yE), ut.init(t, r);
}), p4 = /* @__PURE__ */ le("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = EE), ut.init(t, r), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), m4 = /* @__PURE__ */ le("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = CE), ut.init(t, r), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv6";
  }), t._zod.check = (s) => {
    try {
      new URL(`http://[${s.value}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: s.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), g4 = /* @__PURE__ */ le("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = kE), ut.init(t, r);
}), v4 = /* @__PURE__ */ le("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = AE), ut.init(t, r), t._zod.check = (s) => {
    const a = s.value.split("/");
    try {
      if (a.length !== 2)
        throw new Error();
      const [u, l] = a;
      if (!l)
        throw new Error();
      const f = Number(l);
      if (`${f}` !== l)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${u}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: s.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function C_(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const y4 = /* @__PURE__ */ le("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = xE), ut.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (s) => {
    C_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function _4(t) {
  if (!y_.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return C_(s);
}
const b4 = /* @__PURE__ */ le("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = y_), ut.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (s) => {
    _4(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), S4 = /* @__PURE__ */ le("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = NE), ut.init(t, r);
});
function w4(t, r = null) {
  try {
    const s = t.split(".");
    if (s.length !== 3)
      return !1;
    const [a] = s;
    if (!a)
      return !1;
    const u = JSON.parse(atob(a));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || r && (!("alg" in u) || u.alg !== r));
  } catch {
    return !1;
  }
}
const E4 = /* @__PURE__ */ le("$ZodJWT", (t, r) => {
  ut.init(t, r), t._zod.check = (s) => {
    w4(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), k_ = /* @__PURE__ */ le("$ZodNumber", (t, r) => {
  _t.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? zE, t._zod.parse = (s, a) => {
    if (r.coerce)
      try {
        s.value = Number(s.value);
      } catch {
      }
    const u = s.value;
    if (typeof u == "number" && !Number.isNaN(u) && Number.isFinite(u))
      return s;
    const l = typeof u == "number" ? Number.isNaN(u) ? "NaN" : Number.isFinite(u) ? void 0 : "Infinity" : void 0;
    return s.issues.push({
      expected: "number",
      code: "invalid_type",
      input: u,
      inst: t,
      ...l ? { received: l } : {}
    }), s;
  };
}), C4 = /* @__PURE__ */ le("$ZodNumber", (t, r) => {
  UE.init(t, r), k_.init(t, r);
}), k4 = /* @__PURE__ */ le("$ZodBoolean", (t, r) => {
  _t.init(t, r), t._zod.pattern = LE, t._zod.parse = (s, a) => {
    if (r.coerce)
      try {
        s.value = !!s.value;
      } catch {
      }
    const u = s.value;
    return typeof u == "boolean" || s.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: u,
      inst: t
    }), s;
  };
}), A4 = /* @__PURE__ */ le("$ZodUnknown", (t, r) => {
  _t.init(t, r), t._zod.parse = (s) => s;
}), x4 = /* @__PURE__ */ le("$ZodNever", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: t
  }), s);
});
function H0(t, r, s) {
  t.issues.length && r.issues.push(...p_(s, t.issues)), r.value[s] = t.value;
}
const T4 = /* @__PURE__ */ le("$ZodArray", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => {
    const u = s.value;
    if (!Array.isArray(u))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: t
      }), s;
    s.value = Array(u.length);
    const l = [];
    for (let f = 0; f < u.length; f++) {
      const m = u[f], p = r.element._zod.run({
        value: m,
        issues: []
      }, a);
      p instanceof Promise ? l.push(p.then((v) => H0(v, s, f))) : H0(p, s, f);
    }
    return l.length ? Promise.all(l).then(() => s) : s;
  };
});
function Ml(t, r, s, a) {
  t.issues.length && r.issues.push(...p_(s, t.issues)), t.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = t.value;
}
function A_(t) {
  const r = Object.keys(t.shape);
  for (const a of r)
    if (!t.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = Vw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function x_(t, r, s, a, u, l) {
  const f = [], m = u.keySet, p = u.catchall._zod, v = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (v === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, a);
    E instanceof Promise ? t.push(E.then((_) => Ml(_, s, g, r))) : Ml(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: l
  }), t.length ? Promise.all(t).then(() => s) : s;
}
const N4 = /* @__PURE__ */ le("$ZodObject", (t, r) => {
  if (_t.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const m = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const p = { ...m };
        return Object.defineProperty(r, "shape", {
          value: p
        }), p;
      }
    });
  }
  const a = oh(() => A_(r));
  at(t._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const v in m) {
      const g = m[v]._zod;
      if (g.values) {
        p[v] ?? (p[v] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[v].add(E);
      }
    }
    return p;
  });
  const u = Ol, l = r.catchall;
  let f;
  t._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const v = m.value;
    if (!u(v))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: t
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const _ of f.keys) {
      const h = E[_]._zod.run({ value: v[_], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => Ml(C, m, _, v))) : Ml(h, m, _, v);
    }
    return l ? x_(g, v, m, p, a.value, t) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), O4 = /* @__PURE__ */ le("$ZodObjectJIT", (t, r) => {
  N4.init(t, r);
  const s = t._zod.parse, a = oh(() => A_(r)), u = (_) => {
    const S = new KE(["shape", "payload", "ctx"]), h = a.value, C = (I) => {
      const c = B0(I);
      return `shape[${c}]._zod.run({ value: input[${c}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let j = 0;
    for (const I of h.keys)
      x[I] = `key_${j++}`;
    S.write("const newResult = {};");
    for (const I of h.keys) {
      const c = x[I], y = B0(I);
      S.write(`const ${c} = ${C(I)};`), S.write(`
        if (${c}.issues.length) {
          payload.issues = payload.issues.concat(${c}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${y}, ...iss.path] : [${y}]
          })));
        }
        
        
        if (${c}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${c}.value;
        }
        
      `);
    }
    S.write("payload.value = newResult;"), S.write("return payload;");
    const N = S.compile();
    return (I, c) => N(_, I, c);
  };
  let l;
  const f = Ol, m = !c_.jitless, v = m && Zw.value, g = r.catchall;
  let E;
  t._zod.parse = (_, S) => {
    E ?? (E = a.value);
    const h = _.value;
    return f(h) ? m && v && S?.async === !1 && S.jitless !== !0 ? (l || (l = u(r.shape)), _ = l(_, S), g ? x_([], h, _, S, E, t) : _) : s(_, S) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), _);
  };
});
function q0(t, r, s, a) {
  for (const l of t)
    if (l.issues.length === 0)
      return r.value = l.value, r;
  const u = t.filter((l) => !Li(l));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: t.map((l) => l.issues.map((f) => Pa(f, a, La())))
  }), r);
}
const M4 = /* @__PURE__ */ le("$ZodUnion", (t, r) => {
  _t.init(t, r), at(t._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), at(t._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), at(t._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), at(t._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((l) => l._zod.pattern);
      return new RegExp(`^(${u.map((l) => lh(l.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  t._zod.parse = (u, l) => {
    if (s)
      return a(u, l);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const v = p._zod.run({
        value: u.value,
        issues: []
      }, l);
      if (v instanceof Promise)
        m.push(v), f = !0;
      else {
        if (v.issues.length === 0)
          return v;
        m.push(v);
      }
    }
    return f ? Promise.all(m).then((p) => q0(p, u, t, l)) : q0(m, u, t, l);
  };
}), R4 = /* @__PURE__ */ le("$ZodIntersection", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => {
    const u = s.value, l = r.left._zod.run({ value: u, issues: [] }, a), f = r.right._zod.run({ value: u, issues: [] }, a);
    return l instanceof Promise || f instanceof Promise ? Promise.all([l, f]).then(([p, v]) => Z0(s, p, v)) : Z0(s, l, f);
  };
});
function Vf(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (so(t) && so(r)) {
    const s = Object.keys(r), a = Object.keys(t).filter((l) => s.indexOf(l) !== -1), u = { ...t, ...r };
    for (const l of a) {
      const f = Vf(t[l], r[l]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [l, ...f.mergeErrorPath]
        };
      u[l] = f.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const u = t[a], l = r[a], f = Vf(u, l);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...f.mergeErrorPath]
        };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Z0(t, r, s) {
  if (r.issues.length && t.issues.push(...r.issues), s.issues.length && t.issues.push(...s.issues), Li(t))
    return t;
  const a = Vf(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return t.value = a.data, t;
}
const j4 = /* @__PURE__ */ le("$ZodEnum", (t, r) => {
  _t.init(t, r);
  const s = d_(r.entries), a = new Set(s);
  t._zod.values = a, t._zod.pattern = new RegExp(`^(${s.filter((u) => Gw.has(typeof u)).map((u) => typeof u == "string" ? Dl(u) : u.toString()).join("|")})$`), t._zod.parse = (u, l) => {
    const f = u.value;
    return a.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: t
    }), u;
  };
}), D4 = /* @__PURE__ */ le("$ZodTransform", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new l_(t.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Ii();
    return s.value = u, s;
  };
});
function G0(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const z4 = /* @__PURE__ */ le("$ZodOptional", (t, r) => {
  _t.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), at(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${lh(s.source)})?$`) : void 0;
  }), t._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((l) => G0(l, s.value)) : G0(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), L4 = /* @__PURE__ */ le("$ZodNullable", (t, r) => {
  _t.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${lh(s.source)}|null)$`) : void 0;
  }), at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), P4 = /* @__PURE__ */ le("$ZodDefault", (t, r) => {
  _t.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => V0(l, r)) : V0(u, r);
  };
});
function V0(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const I4 = /* @__PURE__ */ le("$ZodPrefault", (t, r) => {
  _t.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), B4 = /* @__PURE__ */ le("$ZodNonOptional", (t, r) => {
  _t.init(t, r), at(t._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), t._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => $0(l, t)) : $0(u, t);
  };
});
function $0(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const U4 = /* @__PURE__ */ le("$ZodCatch", (t, r) => {
  _t.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => (s.value = l.value, l.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: l.issues.map((f) => Pa(f, a, La()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((l) => Pa(l, a, La()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), H4 = /* @__PURE__ */ le("$ZodPipe", (t, r) => {
  _t.init(t, r), at(t._zod, "values", () => r.in._zod.values), at(t._zod, "optin", () => r.in._zod.optin), at(t._zod, "optout", () => r.out._zod.optout), at(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const l = r.out._zod.run(s, a);
      return l instanceof Promise ? l.then((f) => ol(f, r.in, a)) : ol(l, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => ol(l, r.out, a)) : ol(u, r.out, a);
  };
});
function ol(t, r, s) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, s);
}
const q4 = /* @__PURE__ */ le("$ZodReadonly", (t, r) => {
  _t.init(t, r), at(t._zod, "propValues", () => r.innerType._zod.propValues), at(t._zod, "values", () => r.innerType._zod.values), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(Y0) : Y0(u);
  };
});
function Y0(t) {
  return t.value = Object.freeze(t.value), t;
}
const Z4 = /* @__PURE__ */ le("$ZodCustom", (t, r) => {
  dn.init(t, r), _t.init(t, r), t._zod.parse = (s, a) => s, t._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((l) => F0(l, s, a, t));
    F0(u, s, a, t);
  };
});
function F0(t, r, s, a) {
  if (!t) {
    const u = {
      code: "custom",
      input: s,
      inst: a,
      // incorporates params.error into issue reporting
      path: [...a._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !a._zod.def.abort
      // params: inst._zod.def.params,
    };
    a._zod.def.params && (u.params = a._zod.def.params), r.issues.push(oo(u));
  }
}
class T_ {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...s) {
    const a = s[0];
    if (this._map.set(r, a), a && typeof a == "object" && "id" in a) {
      if (this._idmap.has(a.id))
        throw new Error(`ID ${a.id} already exists in the registry`);
      this._idmap.set(a.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const s = this._map.get(r);
    return s && typeof s == "object" && "id" in s && this._idmap.delete(s.id), this._map.delete(r), this;
  }
  get(r) {
    const s = r._zod.parent;
    if (s) {
      const a = { ...this.get(s) ?? {} };
      delete a.id;
      const u = { ...a, ...this._map.get(r) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function G4() {
  return new T_();
}
const Js = /* @__PURE__ */ G4();
function V4(t, r) {
  return new t({
    type: "string",
    ...Se(r)
  });
}
function $4(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function X0(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function Y4(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function F4(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Se(r)
  });
}
function X4(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Se(r)
  });
}
function Q4(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Se(r)
  });
}
function K4(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function J4(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function W4(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function eC(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function tC(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function nC(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function rC(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function aC(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function iC(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function sC(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function oC(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function uC(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function lC(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function cC(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function dC(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function fC(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Se(r)
  });
}
function hC(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Se(r)
  });
}
function pC(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...Se(r)
  });
}
function mC(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Se(r)
  });
}
function gC(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Se(r)
  });
}
function vC(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...Se(r)
  });
}
function yC(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Se(r)
  });
}
function _C(t, r) {
  return new t({
    type: "boolean",
    ...Se(r)
  });
}
function bC(t) {
  return new t({
    type: "unknown"
  });
}
function SC(t, r) {
  return new t({
    type: "never",
    ...Se(r)
  });
}
function Q0(t, r) {
  return new w_({
    check: "less_than",
    ...Se(r),
    value: t,
    inclusive: !1
  });
}
function Cf(t, r) {
  return new w_({
    check: "less_than",
    ...Se(r),
    value: t,
    inclusive: !0
  });
}
function K0(t, r) {
  return new E_({
    check: "greater_than",
    ...Se(r),
    value: t,
    inclusive: !1
  });
}
function kf(t, r) {
  return new E_({
    check: "greater_than",
    ...Se(r),
    value: t,
    inclusive: !0
  });
}
function J0(t, r) {
  return new BE({
    check: "multiple_of",
    ...Se(r),
    value: t
  });
}
function N_(t, r) {
  return new HE({
    check: "max_length",
    ...Se(r),
    maximum: t
  });
}
function Rl(t, r) {
  return new qE({
    check: "min_length",
    ...Se(r),
    minimum: t
  });
}
function O_(t, r) {
  return new ZE({
    check: "length_equals",
    ...Se(r),
    length: t
  });
}
function wC(t, r) {
  return new GE({
    check: "string_format",
    format: "regex",
    ...Se(r),
    pattern: t
  });
}
function EC(t) {
  return new VE({
    check: "string_format",
    format: "lowercase",
    ...Se(t)
  });
}
function CC(t) {
  return new $E({
    check: "string_format",
    format: "uppercase",
    ...Se(t)
  });
}
function kC(t, r) {
  return new YE({
    check: "string_format",
    format: "includes",
    ...Se(r),
    includes: t
  });
}
function AC(t, r) {
  return new FE({
    check: "string_format",
    format: "starts_with",
    ...Se(r),
    prefix: t
  });
}
function xC(t, r) {
  return new XE({
    check: "string_format",
    format: "ends_with",
    ...Se(r),
    suffix: t
  });
}
function fo(t) {
  return new QE({
    check: "overwrite",
    tx: t
  });
}
function TC(t) {
  return fo((r) => r.normalize(t));
}
function NC() {
  return fo((t) => t.trim());
}
function OC() {
  return fo((t) => t.toLowerCase());
}
function MC() {
  return fo((t) => t.toUpperCase());
}
function RC(t, r, s) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Se(s)
  });
}
function jC(t, r, s) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...Se(s)
  });
}
function DC(t) {
  const r = zC((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(oo(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(oo(u));
    }
  }, t(s.value, s)));
  return r;
}
function zC(t, r) {
  const s = new dn({
    check: "custom",
    ...Se(r)
  });
  return s._zod.check = t, s;
}
class W0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var a;
    const u = r._zod.def, l = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, s.schemaPath.includes(r) && (f.cycle = s.path), f.schema;
    const m = { schema: {}, count: 1, cycle: void 0, path: s.path };
    this.seen.set(r, m);
    const p = r._zod.toJSONSchema?.();
    if (p)
      m.schema = p;
    else {
      const E = {
        ...s,
        schemaPath: [...s.schemaPath, r],
        path: s.path
      }, _ = r._zod.parent;
      if (_)
        m.ref = _, this.process(_, E), this.seen.get(_).isParent = !0;
      else {
        const S = m.schema;
        switch (u.type) {
          case "string": {
            const h = S;
            h.type = "string";
            const { minimum: C, maximum: x, format: j, patterns: N, contentEncoding: I } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof x == "number" && (h.maxLength = x), j && (h.format = l[j] ?? j, h.format === "" && delete h.format), I && (h.contentEncoding = I), N && N.size > 0) {
              const c = [...N];
              c.length === 1 ? h.pattern = c[0].source : c.length > 1 && (m.schema.allOf = [
                ...c.map((y) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: y.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = S, { minimum: C, maximum: x, format: j, multipleOf: N, exclusiveMaximum: I, exclusiveMinimum: c } = r._zod.bag;
            typeof j == "string" && j.includes("int") ? h.type = "integer" : h.type = "number", typeof c == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = c, h.exclusiveMinimum = !0) : h.exclusiveMinimum = c), typeof C == "number" && (h.minimum = C, typeof c == "number" && this.target !== "draft-4" && (c >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof I == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = I, h.exclusiveMaximum = !0) : h.exclusiveMaximum = I), typeof x == "number" && (h.maximum = x, typeof I == "number" && this.target !== "draft-4" && (I <= x ? delete h.maximum : delete h.exclusiveMaximum)), typeof N == "number" && (h.multipleOf = N);
            break;
          }
          case "boolean": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (S.type = "string", S.nullable = !0, S.enum = [null]) : S.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            S.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = S, { minimum: C, maximum: x } = r._zod.bag;
            typeof C == "number" && (h.minItems = C), typeof x == "number" && (h.maxItems = x), h.type = "array", h.items = this.process(u.element, { ...E, path: [...E.path, "items"] });
            break;
          }
          case "object": {
            const h = S;
            h.type = "object", h.properties = {};
            const C = u.shape;
            for (const N in C)
              h.properties[N] = this.process(C[N], {
                ...E,
                path: [...E.path, "properties", N]
              });
            const x = new Set(Object.keys(C)), j = new Set([...x].filter((N) => {
              const I = u.shape[N]._zod;
              return this.io === "input" ? I.optin === void 0 : I.optout === void 0;
            }));
            j.size > 0 && (h.required = Array.from(j)), u.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : u.catchall ? u.catchall && (h.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = S, C = u.options.map((x, j) => this.process(x, {
              ...E,
              path: [...E.path, "anyOf", j]
            }));
            h.anyOf = C;
            break;
          }
          case "intersection": {
            const h = S, C = this.process(u.left, {
              ...E,
              path: [...E.path, "allOf", 0]
            }), x = this.process(u.right, {
              ...E,
              path: [...E.path, "allOf", 1]
            }), j = (I) => "allOf" in I && Object.keys(I).length === 1, N = [
              ...j(C) ? C.allOf : [C],
              ...j(x) ? x.allOf : [x]
            ];
            h.allOf = N;
            break;
          }
          case "tuple": {
            const h = S;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", j = u.items.map((y, w) => this.process(y, {
              ...E,
              path: [...E.path, C, w]
            })), N = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, x, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = j, N && (h.items = N)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: j
            }, N && h.items.anyOf.push(N), h.minItems = j.length, N || (h.maxItems = j.length)) : (h.items = j, N && (h.additionalItems = N));
            const { minimum: I, maximum: c } = r._zod.bag;
            typeof I == "number" && (h.minItems = I), typeof c == "number" && (h.maxItems = c);
            break;
          }
          case "record": {
            const h = S;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(u.keyType, {
              ...E,
              path: [...E.path, "propertyNames"]
            })), h.additionalProperties = this.process(u.valueType, {
              ...E,
              path: [...E.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const h = S, C = d_(u.entries);
            C.every((x) => typeof x == "number") && (h.type = "number"), C.every((x) => typeof x == "string") && (h.type = "string"), h.enum = C;
            break;
          }
          case "literal": {
            const h = S, C = [];
            for (const x of u.values)
              if (x === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof x == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                C.push(Number(x));
              } else
                C.push(x);
            if (C.length !== 0) if (C.length === 1) {
              const x = C[0];
              h.type = x === null ? "null" : typeof x, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [x] : h.const = x;
            } else
              C.every((x) => typeof x == "number") && (h.type = "number"), C.every((x) => typeof x == "string") && (h.type = "string"), C.every((x) => typeof x == "boolean") && (h.type = "string"), C.every((x) => x === null) && (h.type = "null"), h.enum = C;
            break;
          }
          case "file": {
            const h = S, C = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: x, maximum: j, mime: N } = r._zod.bag;
            x !== void 0 && (C.minLength = x), j !== void 0 && (C.maxLength = j), N ? N.length === 1 ? (C.contentMediaType = N[0], Object.assign(h, C)) : h.anyOf = N.map((I) => ({ ...C, contentMediaType: I })) : Object.assign(h, C);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(u.innerType, E);
            this.target === "openapi-3.0" ? (m.ref = u.innerType, S.nullable = !0) : S.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "success": {
            const h = S;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(u.innerType, E), m.ref = u.innerType, S.default = JSON.parse(JSON.stringify(u.defaultValue));
            break;
          }
          case "prefault": {
            this.process(u.innerType, E), m.ref = u.innerType, this.io === "input" && (S._prefault = JSON.parse(JSON.stringify(u.defaultValue)));
            break;
          }
          case "catch": {
            this.process(u.innerType, E), m.ref = u.innerType;
            let h;
            try {
              h = u.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            S.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = S, C = r._zod.pattern;
            if (!C)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = C.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? u.in._zod.def.type === "transform" ? u.out : u.in : u.out;
            this.process(h, E), m.ref = h;
            break;
          }
          case "readonly": {
            this.process(u.innerType, E), m.ref = u.innerType, S.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "optional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, E), m.ref = h;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const v = this.metadataRegistry.get(r);
    return v && Object.assign(m.schema, v), this.io === "input" && Tt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const a = {
      cycles: s?.cycles ?? "ref",
      reused: s?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: s?.external ?? void 0
    }, u = this.seen.get(r);
    if (!u)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const l = (g) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (a.external) {
        const C = a.external.registry.get(g[0])?.id, x = a.external.uri ?? ((N) => N);
        if (C)
          return { ref: x(C) };
        const j = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = j, { defId: j, ref: `${x("__shared")}#/${E}/${j}` };
      }
      if (g[1] === u)
        return { ref: "#" };
      const S = `#/${E}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: S + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const E = g[1], { ref: _, defId: S } = l(g);
      E.def = { ...E.schema }, S && (E.defId = S);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = _;
    };
    if (a.cycles === "throw")
      for (const g of this.seen.entries()) {
        const E = g[1];
        if (E.cycle)
          throw new Error(`Cycle detected: #/${E.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const g of this.seen.entries()) {
      const E = g[1];
      if (r === g[0]) {
        f(g);
        continue;
      }
      if (a.external) {
        const S = a.external.registry.get(g[0])?.id;
        if (r !== g[0] && S) {
          f(g);
          continue;
        }
      }
      if (this.metadataRegistry.get(g[0])?.id) {
        f(g);
        continue;
      }
      if (E.cycle) {
        f(g);
        continue;
      }
      if (E.count > 1 && a.reused === "ref") {
        f(g);
        continue;
      }
    }
    const m = (g, E) => {
      const _ = this.seen.get(g), S = _.def ?? _.schema, h = { ...S };
      if (_.ref === null)
        return;
      const C = _.ref;
      if (_.ref = null, C) {
        m(C, E);
        const x = this.seen.get(C).schema;
        x.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (S.allOf = S.allOf ?? [], S.allOf.push(x)) : (Object.assign(S, x), Object.assign(S, h));
      }
      _.isParent || this.override({
        zodSchema: g,
        jsonSchema: S,
        path: _.path ?? []
      });
    };
    for (const g of [...this.seen.entries()].reverse())
      m(g[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), a.external?.uri) {
      const g = a.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      p.$id = a.external.uri(g);
    }
    Object.assign(p, u.def);
    const v = a.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (v[E.defId] = E.def);
    }
    a.external || Object.keys(v).length > 0 && (this.target === "draft-2020-12" ? p.$defs = v : p.definitions = v);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function LC(t, r) {
  if (t instanceof T_) {
    const a = new W0(r), u = {};
    for (const m of t._idmap.entries()) {
      const [p, v] = m;
      a.process(v);
    }
    const l = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: u
    };
    for (const m of t._idmap.entries()) {
      const [p, v] = m;
      l[p] = a.emit(v, {
        ...r,
        external: f
      });
    }
    if (Object.keys(u).length > 0) {
      const m = a.target === "draft-2020-12" ? "$defs" : "definitions";
      l.__shared = {
        [m]: u
      };
    }
    return { schemas: l };
  }
  const s = new W0(r);
  return s.process(t), s.emit(t, r);
}
function Tt(t, r) {
  const s = r ?? { seen: /* @__PURE__ */ new Set() };
  if (s.seen.has(t))
    return !1;
  s.seen.add(t);
  const u = t._zod.def;
  switch (u.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return Tt(u.element, s);
    case "object": {
      for (const l in u.shape)
        if (Tt(u.shape[l], s))
          return !0;
      return !1;
    }
    case "union": {
      for (const l of u.options)
        if (Tt(l, s))
          return !0;
      return !1;
    }
    case "intersection":
      return Tt(u.left, s) || Tt(u.right, s);
    case "tuple": {
      for (const l of u.items)
        if (Tt(l, s))
          return !0;
      return !!(u.rest && Tt(u.rest, s));
    }
    case "record":
      return Tt(u.keyType, s) || Tt(u.valueType, s);
    case "map":
      return Tt(u.keyType, s) || Tt(u.valueType, s);
    case "set":
      return Tt(u.valueType, s);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Tt(u.innerType, s);
    case "lazy":
      return Tt(u.getter(), s);
    case "default":
      return Tt(u.innerType, s);
    case "prefault":
      return Tt(u.innerType, s);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Tt(u.in, s) || Tt(u.out, s);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${u.type}`);
}
const PC = /* @__PURE__ */ le("ZodISODateTime", (t, r) => {
  c4.init(t, r), dt.init(t, r);
});
function IC(t) {
  return hC(PC, t);
}
const BC = /* @__PURE__ */ le("ZodISODate", (t, r) => {
  d4.init(t, r), dt.init(t, r);
});
function UC(t) {
  return pC(BC, t);
}
const HC = /* @__PURE__ */ le("ZodISOTime", (t, r) => {
  f4.init(t, r), dt.init(t, r);
});
function qC(t) {
  return mC(HC, t);
}
const ZC = /* @__PURE__ */ le("ZodISODuration", (t, r) => {
  h4.init(t, r), dt.init(t, r);
});
function GC(t) {
  return gC(ZC, t);
}
const VC = (t, r) => {
  g_.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (s) => tE(t, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => eE(t, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        t.issues.push(s), t.message = JSON.stringify(t.issues, Gf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        t.issues.push(...s), t.message = JSON.stringify(t.issues, Gf, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, zn = le("ZodError", VC, {
  Parent: Error
}), $C = /* @__PURE__ */ dh(zn), YC = /* @__PURE__ */ fh(zn), FC = /* @__PURE__ */ zl(zn), XC = /* @__PURE__ */ Ll(zn), QC = /* @__PURE__ */ aE(zn), KC = /* @__PURE__ */ iE(zn), JC = /* @__PURE__ */ sE(zn), WC = /* @__PURE__ */ oE(zn), ek = /* @__PURE__ */ uE(zn), tk = /* @__PURE__ */ lE(zn), nk = /* @__PURE__ */ cE(zn), rk = /* @__PURE__ */ dE(zn), kt = /* @__PURE__ */ le("ZodType", (t, r) => (_t.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...s) => t.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), t.clone = (s, a) => sa(t, s, a), t.brand = () => t, t.register = ((s, a) => (s.add(t, a), t)), t.parse = (s, a) => $C(t, s, a, { callee: t.parse }), t.safeParse = (s, a) => FC(t, s, a), t.parseAsync = async (s, a) => YC(t, s, a, { callee: t.parseAsync }), t.safeParseAsync = async (s, a) => XC(t, s, a), t.spa = t.safeParseAsync, t.encode = (s, a) => QC(t, s, a), t.decode = (s, a) => KC(t, s, a), t.encodeAsync = async (s, a) => JC(t, s, a), t.decodeAsync = async (s, a) => WC(t, s, a), t.safeEncode = (s, a) => ek(t, s, a), t.safeDecode = (s, a) => tk(t, s, a), t.safeEncodeAsync = async (s, a) => nk(t, s, a), t.safeDecodeAsync = async (s, a) => rk(t, s, a), t.refine = (s, a) => t.check(Fk(s, a)), t.superRefine = (s) => t.check(Xk(s)), t.overwrite = (s) => t.check(fo(s)), t.optional = () => ry(t), t.nullable = () => ay(t), t.nullish = () => ry(ay(t)), t.nonoptional = (s) => Hk(t, s), t.array = () => za(t), t.or = (s) => Ok([t, s]), t.and = (s) => Rk(t, s), t.transform = (s) => iy(t, zk(s)), t.default = (s) => Ik(t, s), t.prefault = (s) => Uk(t, s), t.catch = (s) => Zk(t, s), t.pipe = (s) => iy(t, s), t.readonly = () => $k(t), t.describe = (s) => {
  const a = t.clone();
  return Js.add(a, { description: s }), a;
}, Object.defineProperty(t, "description", {
  get() {
    return Js.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...s) => {
  if (s.length === 0)
    return Js.get(t);
  const a = t.clone();
  return Js.add(a, s[0]), a;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), M_ = /* @__PURE__ */ le("_ZodString", (t, r) => {
  hh.init(t, r), kt.init(t, r);
  const s = t._zod.bag;
  t.format = s.format ?? null, t.minLength = s.minimum ?? null, t.maxLength = s.maximum ?? null, t.regex = (...a) => t.check(wC(...a)), t.includes = (...a) => t.check(kC(...a)), t.startsWith = (...a) => t.check(AC(...a)), t.endsWith = (...a) => t.check(xC(...a)), t.min = (...a) => t.check(Rl(...a)), t.max = (...a) => t.check(N_(...a)), t.length = (...a) => t.check(O_(...a)), t.nonempty = (...a) => t.check(Rl(1, ...a)), t.lowercase = (a) => t.check(EC(a)), t.uppercase = (a) => t.check(CC(a)), t.trim = () => t.check(NC()), t.normalize = (...a) => t.check(TC(...a)), t.toLowerCase = () => t.check(OC()), t.toUpperCase = () => t.check(MC());
}), ak = /* @__PURE__ */ le("ZodString", (t, r) => {
  hh.init(t, r), M_.init(t, r), t.email = (s) => t.check($4(ik, s)), t.url = (s) => t.check(K4(sk, s)), t.jwt = (s) => t.check(fC(Sk, s)), t.emoji = (s) => t.check(J4(ok, s)), t.guid = (s) => t.check(X0(ey, s)), t.uuid = (s) => t.check(Y4(ul, s)), t.uuidv4 = (s) => t.check(F4(ul, s)), t.uuidv6 = (s) => t.check(X4(ul, s)), t.uuidv7 = (s) => t.check(Q4(ul, s)), t.nanoid = (s) => t.check(W4(uk, s)), t.guid = (s) => t.check(X0(ey, s)), t.cuid = (s) => t.check(eC(lk, s)), t.cuid2 = (s) => t.check(tC(ck, s)), t.ulid = (s) => t.check(nC(dk, s)), t.base64 = (s) => t.check(lC(yk, s)), t.base64url = (s) => t.check(cC(_k, s)), t.xid = (s) => t.check(rC(fk, s)), t.ksuid = (s) => t.check(aC(hk, s)), t.ipv4 = (s) => t.check(iC(pk, s)), t.ipv6 = (s) => t.check(sC(mk, s)), t.cidrv4 = (s) => t.check(oC(gk, s)), t.cidrv6 = (s) => t.check(uC(vk, s)), t.e164 = (s) => t.check(dC(bk, s)), t.datetime = (s) => t.check(IC(s)), t.date = (s) => t.check(UC(s)), t.time = (s) => t.check(qC(s)), t.duration = (s) => t.check(GC(s));
});
function Ot(t) {
  return V4(ak, t);
}
const dt = /* @__PURE__ */ le("ZodStringFormat", (t, r) => {
  ut.init(t, r), M_.init(t, r);
}), ik = /* @__PURE__ */ le("ZodEmail", (t, r) => {
  t4.init(t, r), dt.init(t, r);
}), ey = /* @__PURE__ */ le("ZodGUID", (t, r) => {
  WE.init(t, r), dt.init(t, r);
}), ul = /* @__PURE__ */ le("ZodUUID", (t, r) => {
  e4.init(t, r), dt.init(t, r);
}), sk = /* @__PURE__ */ le("ZodURL", (t, r) => {
  n4.init(t, r), dt.init(t, r);
}), ok = /* @__PURE__ */ le("ZodEmoji", (t, r) => {
  r4.init(t, r), dt.init(t, r);
}), uk = /* @__PURE__ */ le("ZodNanoID", (t, r) => {
  a4.init(t, r), dt.init(t, r);
}), lk = /* @__PURE__ */ le("ZodCUID", (t, r) => {
  i4.init(t, r), dt.init(t, r);
}), ck = /* @__PURE__ */ le("ZodCUID2", (t, r) => {
  s4.init(t, r), dt.init(t, r);
}), dk = /* @__PURE__ */ le("ZodULID", (t, r) => {
  o4.init(t, r), dt.init(t, r);
}), fk = /* @__PURE__ */ le("ZodXID", (t, r) => {
  u4.init(t, r), dt.init(t, r);
}), hk = /* @__PURE__ */ le("ZodKSUID", (t, r) => {
  l4.init(t, r), dt.init(t, r);
}), pk = /* @__PURE__ */ le("ZodIPv4", (t, r) => {
  p4.init(t, r), dt.init(t, r);
}), mk = /* @__PURE__ */ le("ZodIPv6", (t, r) => {
  m4.init(t, r), dt.init(t, r);
}), gk = /* @__PURE__ */ le("ZodCIDRv4", (t, r) => {
  g4.init(t, r), dt.init(t, r);
}), vk = /* @__PURE__ */ le("ZodCIDRv6", (t, r) => {
  v4.init(t, r), dt.init(t, r);
}), yk = /* @__PURE__ */ le("ZodBase64", (t, r) => {
  y4.init(t, r), dt.init(t, r);
}), _k = /* @__PURE__ */ le("ZodBase64URL", (t, r) => {
  b4.init(t, r), dt.init(t, r);
}), bk = /* @__PURE__ */ le("ZodE164", (t, r) => {
  S4.init(t, r), dt.init(t, r);
}), Sk = /* @__PURE__ */ le("ZodJWT", (t, r) => {
  E4.init(t, r), dt.init(t, r);
}), R_ = /* @__PURE__ */ le("ZodNumber", (t, r) => {
  k_.init(t, r), kt.init(t, r), t.gt = (a, u) => t.check(K0(a, u)), t.gte = (a, u) => t.check(kf(a, u)), t.min = (a, u) => t.check(kf(a, u)), t.lt = (a, u) => t.check(Q0(a, u)), t.lte = (a, u) => t.check(Cf(a, u)), t.max = (a, u) => t.check(Cf(a, u)), t.int = (a) => t.check(ty(a)), t.safe = (a) => t.check(ty(a)), t.positive = (a) => t.check(K0(0, a)), t.nonnegative = (a) => t.check(kf(0, a)), t.negative = (a) => t.check(Q0(0, a)), t.nonpositive = (a) => t.check(Cf(0, a)), t.multipleOf = (a, u) => t.check(J0(a, u)), t.step = (a, u) => t.check(J0(a, u)), t.finite = () => t;
  const s = t._zod.bag;
  t.minValue = Math.max(s.minimum ?? Number.NEGATIVE_INFINITY, s.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(s.maximum ?? Number.POSITIVE_INFINITY, s.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (s.format ?? "").includes("int") || Number.isSafeInteger(s.multipleOf ?? 0.5), t.isFinite = !0, t.format = s.format ?? null;
});
function Nt(t) {
  return vC(R_, t);
}
const wk = /* @__PURE__ */ le("ZodNumberFormat", (t, r) => {
  C4.init(t, r), R_.init(t, r);
});
function ty(t) {
  return yC(wk, t);
}
const Ek = /* @__PURE__ */ le("ZodBoolean", (t, r) => {
  k4.init(t, r), kt.init(t, r);
});
function Qt(t) {
  return _C(Ek, t);
}
const Ck = /* @__PURE__ */ le("ZodUnknown", (t, r) => {
  A4.init(t, r), kt.init(t, r);
});
function ny() {
  return bC(Ck);
}
const kk = /* @__PURE__ */ le("ZodNever", (t, r) => {
  x4.init(t, r), kt.init(t, r);
});
function Ak(t) {
  return SC(kk, t);
}
const xk = /* @__PURE__ */ le("ZodArray", (t, r) => {
  T4.init(t, r), kt.init(t, r), t.element = r.element, t.min = (s, a) => t.check(Rl(s, a)), t.nonempty = (s) => t.check(Rl(1, s)), t.max = (s, a) => t.check(N_(s, a)), t.length = (s, a) => t.check(O_(s, a)), t.unwrap = () => t.element;
});
function za(t, r) {
  return RC(xk, t, r);
}
const Tk = /* @__PURE__ */ le("ZodObject", (t, r) => {
  O4.init(t, r), kt.init(t, r), at(t, "shape", () => r.shape), t.keyof = () => jk(Object.keys(t._zod.def.shape)), t.catchall = (s) => t.clone({ ...t._zod.def, catchall: s }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: ny() }), t.loose = () => t.clone({ ...t._zod.def, catchall: ny() }), t.strict = () => t.clone({ ...t._zod.def, catchall: Ak() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (s) => Xw(t, s), t.safeExtend = (s) => Qw(t, s), t.merge = (s) => Kw(t, s), t.pick = (s) => Yw(t, s), t.omit = (s) => Fw(t, s), t.partial = (...s) => Jw(j_, t, s[0]), t.required = (...s) => Ww(D_, t, s[0]);
});
function ho(t, r) {
  const s = {
    type: "object",
    shape: t ?? {},
    ...Se(r)
  };
  return new Tk(s);
}
const Nk = /* @__PURE__ */ le("ZodUnion", (t, r) => {
  M4.init(t, r), kt.init(t, r), t.options = r.options;
});
function Ok(t, r) {
  return new Nk({
    type: "union",
    options: t,
    ...Se(r)
  });
}
const Mk = /* @__PURE__ */ le("ZodIntersection", (t, r) => {
  R4.init(t, r), kt.init(t, r);
});
function Rk(t, r) {
  return new Mk({
    type: "intersection",
    left: t,
    right: r
  });
}
const $f = /* @__PURE__ */ le("ZodEnum", (t, r) => {
  j4.init(t, r), kt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  t.extract = (a, u) => {
    const l = {};
    for (const f of a)
      if (s.has(f))
        l[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new $f({
      ...r,
      checks: [],
      ...Se(u),
      entries: l
    });
  }, t.exclude = (a, u) => {
    const l = { ...r.entries };
    for (const f of a)
      if (s.has(f))
        delete l[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new $f({
      ...r,
      checks: [],
      ...Se(u),
      entries: l
    });
  };
});
function jk(t, r) {
  const s = Array.isArray(t) ? Object.fromEntries(t.map((a) => [a, a])) : t;
  return new $f({
    type: "enum",
    entries: s,
    ...Se(r)
  });
}
const Dk = /* @__PURE__ */ le("ZodTransform", (t, r) => {
  D4.init(t, r), kt.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new l_(t.constructor.name);
    s.addIssue = (l) => {
      if (typeof l == "string")
        s.issues.push(oo(l, s.value, r));
      else {
        const f = l;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = t), s.issues.push(oo(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((l) => (s.value = l, s)) : (s.value = u, s);
  };
});
function zk(t) {
  return new Dk({
    type: "transform",
    transform: t
  });
}
const j_ = /* @__PURE__ */ le("ZodOptional", (t, r) => {
  z4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function ry(t) {
  return new j_({
    type: "optional",
    innerType: t
  });
}
const Lk = /* @__PURE__ */ le("ZodNullable", (t, r) => {
  L4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function ay(t) {
  return new Lk({
    type: "nullable",
    innerType: t
  });
}
const Pk = /* @__PURE__ */ le("ZodDefault", (t, r) => {
  P4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function Ik(t, r) {
  return new Pk({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : h_(r);
    }
  });
}
const Bk = /* @__PURE__ */ le("ZodPrefault", (t, r) => {
  I4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Uk(t, r) {
  return new Bk({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : h_(r);
    }
  });
}
const D_ = /* @__PURE__ */ le("ZodNonOptional", (t, r) => {
  B4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Hk(t, r) {
  return new D_({
    type: "nonoptional",
    innerType: t,
    ...Se(r)
  });
}
const qk = /* @__PURE__ */ le("ZodCatch", (t, r) => {
  U4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function Zk(t, r) {
  return new qk({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const Gk = /* @__PURE__ */ le("ZodPipe", (t, r) => {
  H4.init(t, r), kt.init(t, r), t.in = r.in, t.out = r.out;
});
function iy(t, r) {
  return new Gk({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const Vk = /* @__PURE__ */ le("ZodReadonly", (t, r) => {
  q4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function $k(t) {
  return new Vk({
    type: "readonly",
    innerType: t
  });
}
const Yk = /* @__PURE__ */ le("ZodCustom", (t, r) => {
  Z4.init(t, r), kt.init(t, r);
});
function Fk(t, r = {}) {
  return jC(Yk, t, r);
}
function Xk(t) {
  return DC(t);
}
const sy = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Yf = "placeholder-chatHistory", z_ = {
  order: Nt().default(Ye.order).describe("Injection priority. Higher = earlier in prompt."),
  position: Nt().default(Ye.position).describe(
    "Where content is placed. 0=before_char, 1=after_char, 2=before_anchor, 3=after_anchor, 4=at_depth, 5=at_depth_from_top, 6=top_of_chat, 7=bottom_of_chat."
  ),
  depth: Nt().default(Ye.depth).describe("Position depth. Used when position=4 or 5."),
  role: Nt().default(Ye.role).describe("Injection role. 0=system, 1=user, 2=assistant."),
  selective: Qt().default(Ye.selective).describe("Whether secondary key matching is enabled."),
  selectiveLogic: Nt().default(Ye.selectiveLogic).describe("Secondary key logic. 0=NOT_ANY, 1=NOT_ALL, 2=ANY, 3=ALL."),
  constant: Qt().default(Ye.constant).describe("Always inject this entry."),
  probability: Nt().default(Ye.probability).describe("Activation chance percentage (0-100)."),
  useProbability: Qt().default(Ye.useProbability).describe("Apply probability gate."),
  group: Ot().default(Ye.group).describe("Entry group name for grouped activation."),
  groupWeight: Nt().default(Ye.groupWeight).describe("Weight within the group."),
  groupOverride: Qt().default(Ye.groupOverride).describe("Allow group to override normal selection.")
}, ph = {
  excludeRecursion: Qt().optional(),
  preventRecursion: Qt().optional(),
  delayUntilRecursion: Nt().optional(),
  scanDepth: Nt().nullable().optional(),
  caseSensitive: Qt().nullable().optional(),
  matchWholeWords: Qt().nullable().optional(),
  sticky: Nt().nullable().optional(),
  cooldown: Nt().nullable().optional(),
  delay: Nt().nullable().optional(),
  addMemo: Qt().optional(),
  matchPersonaDescription: Qt().optional(),
  matchCharacterDescription: Qt().optional(),
  outletName: Ot().optional()
}, Qk = ho({
  justification: Ot().describe("A brief, friendly explanation of the changes made."),
  name: Ot().describe("The entry's new name/comment."),
  triggers: za(Ot()).describe("The entry's new keywords/triggers."),
  content: Ot().describe("The entry's new content."),
  ...z_,
  ...ph
}), Kk = ho({
  worldName: Ot().describe("The name of the world where the new entry should be added."),
  name: Ot().describe("The new entry's name/comment."),
  triggers: za(Ot()).describe("The new entry's triggers."),
  content: Ot().describe("The new entry's content."),
  ...z_,
  ...ph
}), Jk = ho({
  worldName: Ot().describe("The name of the world containing the entry to change."),
  originalName: Ot().describe("The original name/comment of the entry to change, used for identification."),
  newName: Ot().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: za(Ot()).optional().describe("The entry's new list of triggers."),
  content: Ot().optional().describe("The entry's new content."),
  order: Nt().optional(),
  position: Nt().optional(),
  depth: Nt().optional(),
  role: Nt().optional(),
  selective: Qt().optional(),
  selectiveLogic: Nt().optional(),
  constant: Qt().optional(),
  probability: Nt().optional(),
  useProbability: Qt().optional(),
  group: Ot().optional(),
  groupWeight: Nt().optional(),
  groupOverride: Qt().optional(),
  ...ph
}), Wk = ho({
  worldName: Ot().describe("The name of the world containing the entry to remove."),
  name: Ot().describe("The name/comment of the entry to remove.")
}), eA = ho({
  justification: Ot().describe("A brief, friendly explanation of all the operations performed."),
  add: za(Kk).optional().describe("A list of new entries to add."),
  change: za(Jk).optional().describe("A list of existing entries to change."),
  remove: za(Wk).optional().describe("A list of existing entries to remove.")
});
function Af(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Ff(t, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Ff(a, r + 1)}${s}</item>
` : `${s}<item>${Af(a)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let a = "";
    for (const u of Object.keys(t)) {
      const l = t[u];
      l !== null && typeof l == "object" ? a += `${s}<${u}>
${Ff(l, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${Af(l)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${Af(t)}</value>
`;
}
function tA(t, r) {
  const s = Ra(t);
  return r === "xml" ? `<root>
${Ff(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function nA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function rA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Ra(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, s = nA(t.example, r, t.default);
  if (s !== void 0) return s;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const a = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (a) return Ra(a);
  switch (rA(t.type)) {
    case "object": {
      const l = {}, f = t.properties || {};
      for (const m of Object.keys(f))
        l[m] = Ra(f[m]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (l.additionalProperty = Ra(t.additionalProperties)), l;
    }
    case "array": {
      const l = t.items ?? {};
      return [Ra(l)];
    }
    case "string":
      return t.title || t.description || "string";
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Ra({ ...t, type: "object" }) : t.items ? Ra({ ...t, type: "array" }) : null;
  }
}
const aA = new E3();
async function Xf(t, r, s, a, u, l) {
  const f = !a.json_schema && !1;
  return new Promise((m, p) => {
    const v = new AbortController(), g = l ?? v.signal;
    l && l.addEventListener("abort", () => v.abort(), { once: !0 }), aA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: a
      },
      {
        abortController: v,
        onEntry: void 0,
        onFinish: (E, _, S) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : _ === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (_ || p(new Error("No data received from LLM")), S ? p(S) : m(_))
      }
    );
  });
}
async function iA(t, r, s, a) {
  const u = await Xf(t, r, s, {}, void 0, a);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function oy(t, r, s, a, u, l, f) {
  const m = Ut.getSettings();
  let p, v;
  const g = LC(s);
  if (u === "native") {
    if (p = await Xf(
      t,
      r,
      l,
      {
        json_schema: { name: a, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    v = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const _ = u, S = tA(g, _), h = JSON.stringify(g, null, 2), C = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = m.prompts[C]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const j = {
      example_response: S,
      schema: h
    }, I = { role: "system", content: ln.compile(x, { noEscape: !0, strict: !0 })(j) };
    if (p = await Xf(
      t,
      [...r, I],
      l,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    v = Zy(p.content, _, { schema: g });
  }
  const E = s.safeParse(v);
  if (!E.success) {
    const _ = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", v), await be("error", _), new Error(_);
  }
  return E.data;
}
const sA = ({ originalContent: t, newContent: r }) => {
  const s = ie.useMemo(() => {
    const a = s_(t, r);
    let u = "", l = "";
    return a.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), v = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += v), f.removed || (l += v);
    }), { originalHtml: u, newHtml: l };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, L_ = ({ before: t, after: r }) => {
  const s = ie.useMemo(() => !t || !r ? [] : u_(t, r), [t, r]);
  return s.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No entry changes were detected for this step." }) : /* @__PURE__ */ A.jsx(A.Fragment, { children: s.map(({ field: a, label: u, before: l, after: f }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ A.jsx("h4", { children: u }),
    /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ A.jsx("span", { children: "Before" }),
      /* @__PURE__ */ A.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ A.jsx(sA, { originalContent: l, newContent: f })
  ] }, a)) });
}, oA = ({ before: t, after: r }) => {
  const { added: s, removed: a, changed: u } = ie.useMemo(() => {
    const f = t || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([_, S]) => {
      S.forEach((h) => {
        const C = `${_}::${h.uid}`;
        m.set(C, { worldName: _, entry: h });
      });
    });
    const p = [], v = [], g = [], E = Object.entries(r || {}).flatMap(
      ([_, S]) => S.map((h) => ({ worldName: _, entry: h }))
    );
    for (const { worldName: _, entry: S } of E) {
      const h = `${_}::${S.uid}`;
      if (m.has(h)) {
        const x = m.get(h).entry;
        Nl(x, S) && g.push({ worldName: _, before: x, after: S }), m.delete(h);
      } else
        p.push({ worldName: _, entry: S });
    }
    return m.forEach(({ worldName: _, entry: S }) => {
      v.push({ worldName: _, entry: S });
    }), { added: p, removed: v, changed: g };
  }, [t, r]), l = s.length > 0 || a.length > 0 || u.length > 0;
  return /* @__PURE__ */ A.jsx("div", { className: "global-diff", children: l ? /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    s.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Added Entries (",
        s.length,
        ")"
      ] }),
      s.map(({ worldName: f, entry: m }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry added", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ A.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    a.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Removed Entries (",
        a.length,
        ")"
      ] }),
      a.map(({ worldName: f, entry: m }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry removed", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ A.jsxs("span", { children: [
            "(from ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    u.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ A.jsxs("h4", { children: [
        "Changed Entries (",
        u.length,
        ")"
      ] }),
      u.map(({ worldName: f, before: m, after: p }) => /* @__PURE__ */ A.jsxs("div", { className: "diff-entry changed", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "diff-entry-header", children: [
          p.comment,
          " ",
          /* @__PURE__ */ A.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ A.jsx(L_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, mh = ({ sessionType: t, before: r, after: s }) => !r && !s ? /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: t === "global" ? /* @__PURE__ */ A.jsx(oA, { before: r, after: s }) : /* @__PURE__ */ A.jsx(L_, { before: r, after: s }) })
] }), uA = ({ currentState: t, initialState: r }) => {
  const [s, a] = ie.useState(!1), u = ie.useMemo(
    () => [
      { label: "Name", value: t.comment },
      { label: "Triggers", value: t.key.join(", ") },
      { label: "Content", value: t.content }
    ],
    [t]
  );
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Entry State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (l) => a(l.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(mh, { sessionType: "entry", before: r, after: t }) : u.map(({ label: l, value: f }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: l }),
      /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, l)) })
  ] });
}, lA = ({ currentState: t, initialState: r }) => {
  const [s, a] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (u) => a(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(mh, { sessionType: "global", before: r, after: t }) : Object.entries(t).map(([u, l]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
      /* @__PURE__ */ A.jsx("h4", { children: u }),
      l.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle-text", children: "No entries in this world." }) : l.map((f) => /* @__PURE__ */ A.jsxs("div", { className: "state-field-group", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: "Name" }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f.comment || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: "Triggers" }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: (f.key || []).join(", ") || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: "Content" }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f.content || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] })
      ] }, f.uid))
    ] }, u)) })
  ] });
}, Ri = SillyTavern.getContext(), cA = (t, r) => {
  const s = structuredClone(t);
  s.comment = r.name, s.key = r.triggers, s.content = r.content;
  for (const a of ra) {
    const u = r[a];
    u !== void 0 && (s[a] = u);
  }
  return s;
}, dA = (t, r) => {
  const s = structuredClone(t);
  if (r.remove)
    for (const a of r.remove) {
      const { worldName: u, name: l } = a;
      s[u] && (s[u] = s[u].filter((f) => f.comment !== l));
    }
  if (r.change)
    for (const a of r.change) {
      const { worldName: u, originalName: l } = a, f = s[u]?.find((m) => m.comment === l);
      if (f) {
        a.newName !== void 0 && (f.comment = a.newName), a.triggers !== void 0 && (f.key = a.triggers), a.content !== void 0 && (f.content = a.content);
        for (const m of ra) {
          const p = a[m];
          p !== void 0 && (f[m] = p);
        }
      } else
        console.warn(`[WREC] Could not find entry to change: "${l}" in world "${u}"`), be("warning", `Could not find entry to change: "${l}" in world "${u}"`);
    }
  if (r.add)
    for (const a of r.add) {
      const { worldName: u, name: l, triggers: f, content: m } = a;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, v = Wf(u, p);
      if (v) {
        v.comment = l, v.key = f, v.content = m;
        for (const g of ra) {
          const E = a[g];
          E !== void 0 && (v[g] = E);
        }
        s[u].push(v);
      }
    }
  return s;
}, fA = ({ initialState: t, onSave: r, onClose: s }) => {
  const [a, u] = ie.useState(t.comment), [l, f] = ie.useState(t.key.join(", ")), [m, p] = ie.useState(t.content), v = () => {
    const g = {
      ...structuredClone(t),
      comment: a,
      key: l.split(",").map((E) => E.trim()).filter(Boolean),
      content: m
    };
    r(g);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Entry State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(Oe, { onClick: v, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(Oe, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Name" }),
        /* @__PURE__ */ A.jsx(e_, { type: "text", value: a, onInput: (g) => u(g.currentTarget.value) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ A.jsx(Er, { value: l, onChange: (g) => f(g.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Content" }),
        /* @__PURE__ */ A.jsx(Er, { value: m, onChange: (g) => p(g.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, hA = ({
  session: t,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: l
}) => {
  const [f, m] = ie.useState(t.messages), [p, v] = ie.useState(""), [g, E] = ie.useState(!1), [_, S] = ie.useState(null), [h, C] = ie.useState(!1), [x, j] = ie.useState(!1), [N, I] = ie.useState(null), [c, y] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const M = ie.useCallback(
    (G, P, te) => {
      if (JSON.stringify(te) === JSON.stringify(P))
        return G;
      const K = Ut.getSettings();
      let se = "";
      if (t.type === "global") {
        const re = K.prompts.reviseGlobalStateUpdate?.content, pe = K.prompts.reviseGlobalStateUpdateAddedModified?.content, Re = K.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !Re) return G;
        const we = te || {}, me = P || {}, he = /* @__PURE__ */ new Map();
        Object.entries(we).forEach(([bt, ve]) => {
          ve.forEach((ye) => {
            he.set(`${bt}::${ye.uid}`, ye);
          });
        });
        const Ee = /* @__PURE__ */ new Map();
        Object.entries(me).forEach(([bt, ve]) => {
          ve.forEach((ye) => {
            Ee.set(`${bt}::${ye.uid}`, ye);
          });
        });
        const Ue = {}, et = [];
        if (Ee.forEach((bt, ve) => {
          const [ye] = ve.split("::"), Ge = he.get(ve);
          let qe = !1;
          Ge ? Nl(bt, Ge) && (qe = !0) : qe = !0, qe && (Ue[ye] || (Ue[ye] = []), Ue[ye].push(bt));
        }), he.forEach((bt, ve) => {
          if (!Ee.has(ve)) {
            const [ye] = ve.split("::");
            et.push({ worldName: ye, comment: bt.comment });
          }
        }), Object.keys(Ue).length === 0 && et.length === 0)
          return G;
        const Qe = ln.compile(pe, { noEscape: !0 })({
          changedLorebooks: Ue
        }), Ln = ln.compile(Re, { noEscape: !0 })({ removedEntries: et });
        se = ln.compile(re, { noEscape: !0 })({
          addedModifiedContent: Qe,
          removedContent: Ln
        });
      } else {
        const re = P;
        se = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${t.worldName}
### (NAME: ${re.comment})
Triggers: ${(re.key || []).join(", ")}
Content: ${re.content}`;
      }
      if (se = Ri.substituteParams(se.trim()), se) {
        const re = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: se,
          isStateUpdate: !0
        };
        return [...G, re];
      }
      return G;
    },
    [t.type, t.worldName]
  ), z = ie.useCallback(
    async (G, P, te, K) => {
      const se = Ut.getSettings();
      if (!t.profileId) {
        be("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), te(), E(!0);
      try {
        const re = [], pe = Ri.extensionSettings.connectionManager?.profiles?.find(
          (he) => he.id === t.profileId
        ), Re = pe?.api ? Ri.CONNECT_API_MAP[pe.api].selected : void 0;
        if (!Re) {
          be("warning", "No API selected for this session.");
          return;
        }
        for (const he of G)
          if (he.id === Yf) {
            if (un === void 0 && !Kt) continue;
            const Ee = await wy(Re, l);
            Ee.warnings?.length && Ee.warnings.forEach((Ue) => be("warning", Ue)), re.push(...Ee.result);
          } else
            re.push(he);
        const we = G.slice(0, G.length - (P ? 0 : 1)).reverse().find((he) => he.stateSnapshot)?.stateSnapshot ?? u;
        let me = "";
        if (t.type === "global") {
          const he = se.prompts.currentLorebooks?.content;
          if (he) {
            const Ee = { currentLorebooks: we };
            me = ln.compile(he, { noEscape: !0 })(Ee);
          }
        } else {
          const he = we;
          me = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${t.worldName}
### (NAME: ${he.comment})
Triggers: ${(he.key || []).join(", ")}
Content: ${he.content}`;
        }
        if (me = Ri.substituteParams(me.trim()), me) {
          const he = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: me
          }, Ee = re.pop();
          re.push(he), Ee && re.push(Ee);
        }
        if (t.isReadonly) {
          re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const he = await iA(
            t.profileId,
            re,
            se.maxResponseToken,
            k.current.signal
          ), Ee = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: he
          }, Ue = [...G, Ee];
          m(Ue), a({ ...t, messages: Ue });
        } else {
          let he, Ee;
          if (t.type === "entry") {
            const Qe = await oy(
              t.profileId,
              re,
              Qk,
              sy.ENTRY,
              t.promptEngineeringMode,
              se.maxResponseToken,
              k.current.signal
            );
            he = cA(we, Qe), Ee = Qe.justification;
          } else {
            const Qe = await oy(
              t.profileId,
              re,
              eA,
              sy.GLOBAL,
              t.promptEngineeringMode,
              se.maxResponseToken,
              k.current.signal
            );
            he = dA(we, Qe), Ee = Qe.justification;
          }
          const Ue = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ee,
            stateSnapshot: he
          };
          let et = [...G, Ue];
          et = M(et, he, we), m(et), a({ ...t, messages: et });
        }
      } catch (re) {
        re.name === "AbortError" ? be("info", "Request was cancelled.") : (console.error("Revise request failed:", re), be("error", `Request failed: ${re.message}`)), K();
      } finally {
        E(!1), k.current = null;
      }
    },
    [t, a, u, l, M]
  ), R = ie.useCallback(async () => {
    if (!p.trim() || g) return;
    const G = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, P = f;
    await z(
      [...f, G],
      !1,
      () => {
        m([...f, G]), v("");
      },
      () => m(P)
    );
  }, [p, g, f, z]), L = ie.useCallback(async () => {
    if (g || f.length === 0) return;
    const G = f;
    let P = [...f];
    const te = f.findLastIndex((K) => !K.isStateUpdate);
    te > -1 && f[te].role === "assistant" && (P = f.slice(0, te)), await z(
      P,
      !0,
      () => m(P),
      () => m(G)
    );
  }, [g, f, z]), q = () => {
    const G = f.slice().reverse().find((P) => P.stateSnapshot)?.stateSnapshot ?? u;
    s(G), r();
  }, F = (G) => {
    const P = f.findIndex((se) => se.id === G);
    if (P < 0 || !f[P].stateSnapshot) return;
    const te = f[P].stateSnapshot;
    let K = u;
    for (let se = P - 1; se >= 0; se--)
      if (f[se].stateSnapshot) {
        K = f[se].stateSnapshot;
        break;
      }
    S({ before: K, after: te });
  }, $ = (G) => {
    I(G.id), y(G.content);
  }, W = () => {
    I(null), y("");
  }, O = async () => {
    if (!N) return;
    const G = f.findIndex((pe) => pe.id === N);
    if (G === -1 || !await Ri.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const te = f, K = f.slice(0, G), se = { ...f[G], content: c }, re = [...K, se];
    W(), await z(
      re,
      !1,
      () => m(re),
      () => m(te)
    );
  }, U = async (G) => {
    const P = f.findIndex((re) => re.id === G);
    if (P === -1) return;
    const te = !!f[P].isInitial;
    if (!await Ri.Popup.show.confirm(
      "Delete Message",
      te ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const se = te ? f.filter((re) => re.isInitial && re.id !== G) : f.slice(0, P);
    m(se), a({ ...t, messages: se }), be("info", "Message history has been updated.");
  }, J = (G) => {
    const P = f.slice().reverse().find((se) => se.stateSnapshot)?.stateSnapshot ?? u, te = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: G
    };
    let K = [...f, te];
    K = M(K, G, P), m(K), a({ ...t, messages: K }), j(!1);
  }, ae = f.slice().reverse().find((G) => G.stateSnapshot)?.stateSnapshot ?? u, B = f.filter((G) => !G.isStateUpdate), Y = B.filter((G) => G.isInitial), ce = B.filter((G) => !G.isInitial);
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: t.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (G) => a({ ...t, isReadonly: G.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          t_,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (G) => a({ ...t, profileId: G?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (G) => a({ ...t, promptEngineeringMode: G.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(Oe, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        t.type === "entry" && /* @__PURE__ */ A.jsx(Oe, { onClick: () => j(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(Oe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(Oe, { onClick: q, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      Y.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: Y.map(
          (G) => N === G.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(Er, { value: c, onChange: (P) => y(P.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(Oe, { onClick: O, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(Oe, { onClick: W, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, G.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${G.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${G.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: G.content }) }),
            !g && G.id !== Yf && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsx(
                Oe,
                {
                  className: "message-action-button",
                  onClick: () => $(G),
                  title: "Edit Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ A.jsx(
                Oe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => U(G.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, G.id)
        ) })
      ] }),
      ce.map(
        (G) => N === G.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(Er, { value: c, onChange: (P) => y(P.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(Oe, { onClick: O, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(Oe, { onClick: W, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, G.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${G.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            G.role === "user" && !G.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Oe,
              {
                className: "message-action-button",
                onClick: () => $(G),
                title: "Edit and Fork",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            G.stateSnapshot && !g && /* @__PURE__ */ A.jsx(
              Oe,
              {
                className: "message-action-button",
                onClick: () => F(G.id),
                title: "Compare changes",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ A.jsx(
              Oe,
              {
                className: "message-action-button danger_button",
                onClick: () => U(G.id),
                title: "Delete Message",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${G.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: G.content }) })
        ] }, G.id)
      ),
      ce.length > 0 && !g && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(Oe, { onClick: L, title: "Regenerate response", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      g && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(
          Oe,
          {
            onClick: () => k.current?.abort(),
            className: "danger_button",
            title: "Cancel Request",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" })
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: w })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        Er,
        {
          value: p,
          onChange: (G) => v(G.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!N,
          onKeyDown: (G) => {
            G.key === "Enter" && !G.shiftKey && (G.preventDefault(), R());
          }
        }
      ),
      /* @__PURE__ */ A.jsx(Oe, { onClick: R, disabled: g || !p.trim() || !!N, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    _ && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(mh, { sessionType: t.type, before: _.before, after: _.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: t.type === "entry" ? /* @__PURE__ */ A.jsx(uA, { currentState: ae, initialState: u }) : /* @__PURE__ */ A.jsx(
          lA,
          {
            currentState: ae,
            initialState: u
          }
        ),
        onComplete: () => C(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && t.type === "entry" && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          fA,
          {
            initialState: ae,
            onSave: (G) => {
              J(G), j(!1);
            },
            onClose: () => j(!1)
          }
        ),
        onComplete: () => j(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function pA(t, r, s, a, u, l, f) {
  const m = Ut.getSettings(), p = m.mainContextTemplatePresets[a];
  if (!p)
    throw new Error(`Main context template preset "${a}" not found.`);
  const v = [], g = {
    user: je.name1 || "You",
    char: je.name2 || "Character",
    persona: je.powerUserSettings.persona_description,
    blackListedEntries: l.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = t;
    else {
      const _ = {};
      Object.entries(f).filter(([S]) => l.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(l.selectedEntryUids[S] ?? []), x = C.size > 0 ? h.filter((j) => C.has(j.uid)) : h.filter((j) => !j.disable);
        x.length > 0 && (_[S] = x);
      }), g.currentLorebooks = _;
    }
  if (r === "entry") {
    const _ = t;
    g.entryToRevise = {
      worldName: s,
      name: _.comment,
      triggers: _.key.join(", "),
      content: _.content
    };
  }
  for (const _ of p.prompts) {
    if (!_.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(_.promptName) || _.promptName === "chatHistory" && u.messages.type === "none" || un === void 0 && !Kt && _.promptName === "chatHistory") continue;
    if (_.promptName === "chatHistory") {
      v.push({
        id: Yf,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[_.promptName];
    if (S) {
      let h = ln.compile(S.content, { noEscape: !0 })(g);
      h = je.substituteParams(h), h.trim() && v.push({
        id: `im-${v.length}`,
        role: _.role,
        content: h.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const _ = ln.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? t.comment : ""
    });
    v.push({
      id: `im-${v.length}`,
      role: "system",
      content: _,
      isInitial: !0
    });
  }
  return v;
}
const ll = SillyTavern.getContext(), uy = "worldInfoRecommender_reviseSessions", P_ = ({
  target: t,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: l,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [v, g] = ie.useState(null), [E, _] = ie.useState(!0), S = ie.useMemo(() => t.type === "entry" ? `${t.worldName}::${t.entry.uid}::${t.entry.comment}` : "global", [t]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(uy) || "[]");
    p(w), _(!1);
  }, []);
  const h = ie.useMemo(() => t.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, t.type, S]), C = (w) => {
    localStorage.setItem(uy, JSON.stringify(w)), p(w);
  }, x = async () => {
    const w = await ll.Popup.show.input(
      "New Session Name",
      t.type === "entry" ? `Revise "${t.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = Ut.getSettings();
        if (!k.profileId) {
          be("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = await pA(
          r,
          t.type,
          t.type === "entry" ? t.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          l
        ), z = {
          id: `rs-${Date.now()}`,
          name: w,
          type: t.type,
          targetEntryIdentifier: t.type === "entry" ? S : void 0,
          worldName: t.type === "entry" ? t.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: M,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode,
          isReadonly: !1
        };
        g(z);
      } catch (k) {
        const M = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), be("error", `Failed to create session: ${M}`);
      }
  }, j = (w) => {
    g(w);
  }, N = async (w) => {
    if (await ll.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const M = m.filter((z) => z.id !== w);
      C(M);
    }
  }, I = (w) => {
    const k = m.findIndex((z) => z.id === w.id), M = [...m];
    k !== -1 ? M[k] = w : M.push(w), C(M), g(w);
  }, c = (w) => {
    t.type === "entry" ? a({
      worldName: t.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : a(w), s();
  };
  if (v) {
    const w = ll.extensionSettings.connectionManager?.profiles?.find(
      (z) => z.id === v.profileId
    ), k = f.messages, M = {
      targetCharacterId: un,
      ignoreCharacterFields: !f.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !f.authorNote,
      includeNames: !!Kt,
      presetName: w?.preset,
      contextName: w?.context,
      instructName: w?.instruct
    };
    if (!un && !Kt)
      M.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (k.type) {
        case "none":
          M.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          M.messageIndexesBetween = { start: 0, end: k.first ?? 10 };
          break;
        case "last": {
          const z = ll.chat?.length ?? 0, R = k.last ?? 10;
          M.messageIndexesBetween = {
            end: Math.max(0, z - 1),
            start: Math.max(0, z - R)
          };
          break;
        }
        case "range":
          k.range && (M.messageIndexesBetween = {
            start: k.range.start,
            end: k.range.end
          });
          break;
      }
    return /* @__PURE__ */ A.jsx(
      hA,
      {
        session: v,
        onBack: () => g(null),
        onApply: c,
        onSessionUpdate: I,
        initialState: r,
        chatContextOptions: M
      }
    );
  }
  const y = t.type === "entry" ? `Revise Sessions for "${t.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsx("h2", { children: y }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => j(w), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(Oe, { className: "danger_button", onClick: () => N(w.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(Oe, { onClick: x, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, mA = new vw.Converter(), gA = ({
  initialWorldName: t,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: l,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: v,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [_, S] = ie.useState(() => s.find((B) => B === t) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [x, j] = ie.useState(!1), [N, I] = ie.useState(!1), [c, y] = ie.useState(!1), [w, k] = ie.useState(!1), [M, z] = ie.useState(!1), [R, L] = ie.useState(""), q = ie.useRef(null), F = ie.useMemo(
    () => !!v[_]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [_, r.uid, r.comment, v]
  ), $ = x || N, W = async () => {
    C(!0), await l(r, t, _);
  }, O = async () => {
    j(!0), await m({ worldName: t, entry: r, prompt: R, mode: "continue" }), j(!1);
  }, U = async () => {
    I(!0), await m({ worldName: t, entry: r, prompt: R, mode: "revise" }), I(!1);
  }, J = (ae) => {
    p(t, r, ae, u);
  };
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ A.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: _,
            onChange: (ae) => S(ae.target.value),
            children: s.map((ae) => /* @__PURE__ */ A.jsx("option", { value: ae, children: ae }, ae))
          }
        ),
        /* @__PURE__ */ A.jsx(Oe, { onClick: W, disabled: h || $, className: "menu_button interactable add", children: F ? "Update" : "Add" }),
        /* @__PURE__ */ A.jsxs(
          Oe,
          {
            onClick: () => z(!0),
            disabled: $,
            className: "menu_button interactable",
            title: "Revise this entry with a chat-based AI session.",
            children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }),
              " Revise"
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          Oe,
          {
            onClick: O,
            disabled: $,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: x ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Oe,
          {
            onClick: U,
            disabled: $,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: N ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ A.jsx(Oe, { onClick: () => y(!0), disabled: $, className: "menu_button interactable edit", children: "Edit" }),
        F && /* @__PURE__ */ A.jsx(
          Oe,
          {
            onClick: () => k(!0),
            disabled: $,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Oe,
          {
            onClick: () => f(r, t, !0),
            disabled: $,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ A.jsx(
          Oe,
          {
            onClick: () => f(r, t, !1),
            disabled: $,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ A.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ A.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: mA.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ A.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
        Er,
        {
          value: R,
          onChange: (ae) => L(ae.target.value),
          placeholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    c && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(Hw, { ref: q, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && q.current) {
            const { updatedEntry: B, updatedRegexIds: Y } = q.current.getFormData();
            p(t, r, B, Y);
          }
          y(!1);
        }
      }
    ),
    w && a && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(Bw, { originalEntry: a, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    M && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          P_,
          {
            target: { type: "entry", worldName: t, entry: r },
            initialState: r,
            onClose: () => z(!1),
            onApply: J,
            sessionForContext: g,
            allEntries: v,
            contextToSend: E
          }
        ),
        onComplete: () => z(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, ly = ie.forwardRef(
  ({ entriesByWorldName: t, initialSelectedUids: r, title: s }, a) => {
    const [u, l] = ie.useState(""), [f, m] = ie.useState(() => {
      const _ = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([S, h]) => {
        h.forEach((C) => _.add(`${S}::${C}`));
      }), _;
    }), p = ie.useMemo(() => {
      if (!u)
        return t;
      const _ = u.toLowerCase(), S = {};
      return Object.entries(t).forEach(([h, C]) => {
        const x = C.filter(
          (j) => j.comment.toLowerCase().includes(_) || h.toLowerCase().includes(_)
        );
        x.length > 0 && (S[h] = x);
      }), S;
    }, [u, t]);
    ie.useImperativeHandle(a, () => ({
      getSelection: () => {
        const _ = {};
        return f.forEach((S) => {
          const [h, C] = S.split("::"), x = parseInt(C, 10);
          _[h] || (_[h] = []), _[h].push(x);
        }), _;
      }
    }));
    const v = (_, S) => {
      const h = `${_}::${S}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, g = () => {
      const _ = /* @__PURE__ */ new Set();
      Object.entries(p).forEach(([S, h]) => {
        h.forEach((C) => _.add(`${S}::${C.uid}`));
      }), m(_);
    }, E = () => {
      m(/* @__PURE__ */ new Set());
    };
    return /* @__PURE__ */ A.jsxs("div", { className: "select-entries-popup", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s }),
      /* @__PURE__ */ A.jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "text",
            className: "text_pole",
            placeholder: "Filter by name or lorebook...",
            value: u,
            onChange: (_) => l(_.target.value)
          }
        ),
        /* @__PURE__ */ A.jsx(Oe, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ A.jsx(Oe, { onClick: E, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "entry-list", children: Object.keys(p).length === 0 ? /* @__PURE__ */ A.jsx("p", { children: "No entries match your filter." }) : Object.entries(p).map(([_, S]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ A.jsx("h4", { children: _ }),
        /* @__PURE__ */ A.jsx("ul", { children: S.map((h) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsxs("label", { children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: f.has(`${_}::${h.uid}`),
              onChange: () => v(_, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, _)) })
    ] });
  }
);
ln.helpers.join || ln.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
ln.helpers.is_not_empty || ln.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
ln.registerHelper("eq", (t, r) => t === r);
const qn = SillyTavern.getContext(), cl = () => un ? Sy(un) : Kt, vA = () => {
  const t = a_(), r = Ut.getSettings(), [s, a] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, l] = ie.useState([]), [f, m] = ie.useState({}), [p, v] = ie.useState([]), [g, E] = ie.useState(!0), [_, S] = ie.useState(!1), [h, C] = ie.useState(!1), [x, j] = ie.useState(!1), [N, I] = ie.useState(!1), c = ie.useRef(null), y = ie.useRef(null), w = ie.useMemo(() => cl() ?? "_global", [un, Kt]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), l([]), v([]);
      const te = cl(), K = `worldInfoRecommend_${w}`, se = JSON.parse(localStorage.getItem(K) ?? "{}"), re = {
        suggestedEntries: se.suggestedEntries ?? {},
        blackListedEntries: se.blackListedEntries ?? [],
        selectedWorldNames: se.selectedWorldNames ?? [],
        selectedEntryUids: se.selectedEntryUids ?? {},
        regexIds: se.regexIds ?? {}
      };
      let pe = {};
      if (te)
        if (Kt) {
          const me = await gl(["chat", "persona", "global"]);
          me && (pe = me);
          const he = iv.find((Ee) => Ee.id === Kt);
          if (he)
            for (const Ee of he.members) {
              const Ue = qn.characters.findIndex((et) => et.avatar === Ee);
              if (Ue !== -1) {
                const et = await gl(["character"], !0, Ue);
                et && (pe = { ...pe, ...et });
              }
            }
        } else
          pe = await gl(["all"], !0, un);
      else
        for (const me of u2) {
          const he = await qn.loadWorldInfo(me);
          he && (pe[me] = Object.values(he.entries));
        }
      m(pe);
      const Re = Object.keys(pe);
      l(Re), re.selectedWorldNames.length === 0 && w !== "_global" ? re.selectedWorldNames = [...Re] : re.selectedWorldNames = re.selectedWorldNames.filter(
        (me) => Re.includes(me)
      );
      const we = {};
      if (re.selectedEntryUids) {
        for (const [me, he] of Object.entries(re.selectedEntryUids))
          if (pe[me]) {
            const Ee = new Set(pe[me].map((et) => et.uid)), Ue = he.filter((et) => Ee.has(et));
            Ue.length > 0 && (we[me] = Ue);
          }
      }
      if (re.selectedEntryUids = we, a(re), Kt) {
        const me = iv.find((he) => he.id === Kt);
        if (me?.generation_mode === 0) {
          const he = me.members.map((Ee) => qn.characters.find((Ue) => Ue.avatar === Ee)).filter((Ee) => !!Ee);
          v(he);
        }
      }
      E(!1);
    })();
  }, [w]), ie.useEffect(() => {
    if (g) return;
    const P = `worldInfoRecommend_${w}`;
    localStorage.setItem(P, JSON.stringify(s));
  }, [s, w, g]);
  const k = (P, te) => {
    Ut.getSettings()[P] = te, Ut.saveSettings(), t();
  }, M = (P, te) => {
    Ut.getSettings().contextToSend[P] = te, Ut.saveSettings(), t();
  }, z = ie.useCallback(
    async (P, te, K = !1) => {
      const se = structuredClone(f);
      se[te] || (se[te] = []);
      const re = se[te].find((we) => we.uid === P.uid), pe = !!re;
      let Re;
      if (pe) {
        if (!Nl(P, re))
          return "unchanged";
        Re = re;
      } else {
        const we = { entries: Object.fromEntries(se[te].map((he) => [he.uid, he])) }, me = Wf(te, we);
        if (!me) throw new Error("Failed to create new World Info entry.");
        Re = me, se[te].push(Re);
      }
      if (Object.assign(Re, {
        key: P.key,
        content: P.content,
        comment: P.comment,
        ...Iw(P)
      }), m(se), !K) {
        const we = { entries: Object.fromEntries(se[te].map((me) => [me.uid, me])) };
        await qn.saveWorldInfo(te, we), qn.reloadWorldInfoEditor(te, !0);
      }
      return pe ? "updated" : "added";
    },
    [f]
  ), R = ie.useCallback(
    async (P) => {
      if (!r.profileId) return be("warning", "Please select a connection profile.");
      const te = P?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!P && !te)
        return be("warning", "Please enter a prompt.");
      S(!0);
      try {
        const K = qn.extensionSettings.connectionManager?.profiles?.find(
          (he) => he.id === r.profileId
        );
        if (!K) throw new Error("Connection profile not found.");
        const se = cl(), re = {
          presetName: K.preset,
          contextName: K.context,
          instructName: K.instruct,
          syspromptName: K.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Kt
        };
        if (!se)
          re.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              re.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              re.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const he = r.contextToSend.messages.last ?? 10, Ee = qn.chat?.length ?? 0;
              re.messageIndexesBetween = {
                end: Math.max(0, Ee - 1),
                start: Math.max(0, Ee - he)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (re.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const pe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pe.stDescription, (!r.contextToSend.worldInfo || s.selectedWorldNames.length === 0) && delete pe.currentLorebooks;
        const Re = Object.values(s.suggestedEntries).some((he) => he.length > 0);
        (!r.contextToSend.suggestedEntries || !Re) && delete pe.suggestedLorebooks, s.blackListedEntries.length === 0 && delete pe.blackListedEntries;
        const we = P ? { worldName: P.worldName, entry: P.entry, mode: P.mode } : void 0, me = await Wy({
          profileId: r.profileId,
          userPrompt: te,
          responseFormat: r.responseFormat,
          buildPromptOptions: re,
          session: s,
          entriesGroupByWorldName: f,
          promptSettings: pe,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((he) => he.enabled).map((he) => ({ promptName: he.promptName, role: he.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: we
        });
        Object.keys(me).length > 0 ? a(P ? (he) => {
          const Ee = structuredClone(he.suggestedEntries), Ue = P.worldName, et = me[Ue]?.[0];
          if (Ee[Ue] && et) {
            const Qe = Ee[Ue].findIndex(
              (Ln) => Ln.uid === P.entry.uid && Ln.comment === P.entry.comment
            );
            Qe !== -1 && (Ee[Ue][Qe] = et);
          }
          return { ...he, suggestedEntries: Ee };
        } : (he) => {
          const Ee = structuredClone(he.suggestedEntries);
          for (const [Ue, et] of Object.entries(me)) {
            Ee[Ue] || (Ee[Ue] = []);
            for (const Qe of et)
              Ee[Ue].some((Ln) => Ln.uid === Qe.uid && Ln.comment === Qe.comment) || Ee[Ue].push(Qe);
          }
          return { ...he, suggestedEntries: Ee };
        }) : be("warning", "No results from AI");
      } catch (K) {
        console.error(K), be("error", K instanceof Error ? K.message : String(K));
      } finally {
        S(!1);
      }
    },
    [r, s, f]
  ), L = ie.useCallback(
    async (P, te, K) => {
      try {
        const se = await z(P, K);
        se === "unchanged" ? be("info", `No changes detected for "${P.comment}". Entry was not updated.`) : be("success", se === "added" ? "Entry added" : "Entry updated"), a((re) => {
          const pe = { ...re.suggestedEntries };
          return pe[te] && (pe[te] = pe[te].filter(
            (Re) => !(Re.uid === P.uid && Re.comment === P.comment)
          )), { ...re, suggestedEntries: pe };
        });
      } catch (se) {
        console.error(se), be("error", `Failed to add entry: ${se.message}`);
      }
    },
    [z]
  ), q = async () => {
    const P = Object.values(s.suggestedEntries).flat().length;
    if (P === 0) return be("warning", "No entries to add.");
    if (!await qn.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${P} suggested entries?`
    )) return;
    S(!0);
    let K = 0, se = 0, re = 0;
    const pe = /* @__PURE__ */ new Set(), Re = [];
    Object.entries(s.suggestedEntries).forEach(([we, me]) => {
      me.forEach((he) => {
        const Ee = u.includes(we) ? we : u[0] ?? "";
        Ee && Re.push({ worldName: Ee, entry: he });
      });
    });
    for (const { worldName: we, entry: me } of Re)
      try {
        const he = await z(me, we, !0);
        he === "added" ? K++ : he === "updated" ? se++ : re++, he !== "unchanged" && pe.add(we);
      } catch {
        be("error", `Failed to process entry: ${me.comment}`);
      }
    for (const we of pe)
      try {
        const me = { entries: Object.fromEntries(f[we].map((he) => [he.uid, he])) };
        await qn.saveWorldInfo(we, me), qn.reloadWorldInfoEditor(we, !0);
      } catch {
        be("error", `Failed to save world: ${we}`);
      }
    a((we) => ({ ...we, suggestedEntries: {} })), be("success", `Processed: ${K} new, ${se} updated, ${re} unchanged.`), S(!1);
  }, F = async () => {
    await qn.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (a((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: cl() ? [...u] : [],
      selectedEntryUids: {}
    })), be("success", "Reset successful"));
  }, $ = (P, te, K) => {
    a((se) => {
      const re = { ...se };
      K && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${P.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[te] && (pe[te] = pe[te].filter(
        (Re) => !(Re.uid === P.uid && Re.comment === P.comment)
      )), re.suggestedEntries = pe, re;
    });
  }, W = (P, te, K, se) => {
    a((re) => {
      const pe = { ...re.suggestedEntries };
      if (pe[P]) {
        const we = pe[P].findIndex(
          (me) => me.uid === te.uid && me.comment === te.comment
        );
        we !== -1 && (pe[P][we] = K);
      }
      const Re = { ...re, suggestedEntries: pe };
      return se && (Re.regexIds = se), Re;
    });
  }, O = ie.useCallback(
    (P) => {
      a((te) => {
        const K = structuredClone(te.suggestedEntries);
        let se = 0;
        for (const [re, pe] of Object.entries(P))
          if (f[re]) {
            K[re] || (K[re] = []);
            for (const Re of pe) {
              if (K[re].some((he) => he.uid === Re)) continue;
              const me = f[re].find((he) => he.uid === Re);
              me && (K[re].push(structuredClone(me)), se++);
            }
          }
        return se > 0 && be("success", `Imported ${se} entries for revision.`), { ...te, suggestedEntries: K };
      });
    },
    [f]
  ), U = ie.useMemo(() => {
    const P = {};
    return s.selectedWorldNames.forEach((te) => {
      f[te] && (P[te] = f[te]);
    }), P;
  }, [s.selectedWorldNames, f]), J = ie.useMemo(() => {
    const P = JSON.parse(JSON.stringify(U)), te = /* @__PURE__ */ new Map();
    return Object.entries(s.suggestedEntries).forEach(([K, se]) => {
      se.forEach((re) => {
        re.uid && te.set(re.uid, { worldName: K, entry: re });
      });
    }), Object.entries(P).forEach(([, K]) => {
      K.forEach((se, re) => {
        se.uid && te.has(se.uid) && (K[re] = te.get(se.uid).entry, te.delete(se.uid));
      });
    }), te.forEach(({ worldName: K, entry: se }) => {
      P[K] || (P[K] = []), P[K].some((re) => re.uid === se.uid) || P[K].push(se);
    }), P;
  }, [U, s.suggestedEntries]), ae = (P) => {
    const te = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([se, re]) => {
      re.forEach((pe) => {
        te.set(`${se}::${pe.uid}`, pe);
      });
    });
    const K = {};
    Object.entries(P).forEach(([se, re]) => {
      re.forEach((pe) => {
        const Re = `${se}::${pe.uid}`, we = te.get(Re);
        let me = !1;
        we ? Nl(pe, we) && (me = !0) : me = !0, me && (K[se] || (K[se] = []), K[se].push(pe));
      });
    }), a((se) => ({ ...se, suggestedEntries: K })), be("success", "Changes from global revise session applied.");
  }, B = ie.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), Y = ie.useMemo(
    () => u.map((P) => ({ value: P, label: P })),
    [u]
  ), ce = ie.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((P, te) => P + te.length, 0),
    [s.selectedEntryUids]
  );
  if (g)
    return /* @__PURE__ */ A.jsx("div", { children: "Loading..." });
  const G = Object.entries(s.suggestedEntries).flatMap(
    ([P, te]) => te.map((K) => ({ worldName: P, entry: K }))
  );
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "World Info Recommender" }),
      /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
            /* @__PURE__ */ A.jsx(
              t_,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (P) => k("profileId", P?.id)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Response Format" }),
            /* @__PURE__ */ A.jsxs(
              "select",
              {
                value: r.responseFormat,
                onChange: (P) => k("responseFormat", P.target.value),
                children: [
                  /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Context to Send" }),
            /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px" }, children: [
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.stDescription,
                    onChange: (P) => M("stDescription", P.target.checked)
                  }
                ),
                "Description of SillyTavern and Lorebook"
              ] }),
              w !== "_global" && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
                /* @__PURE__ */ A.jsxs(
                  "select",
                  {
                    className: "text_pole",
                    value: r.contextToSend.messages.type,
                    onChange: (P) => M("messages", {
                      ...r.contextToSend.messages,
                      type: P.target.value
                    }),
                    children: [
                      /* @__PURE__ */ A.jsx("option", { value: "none", children: "None" }),
                      /* @__PURE__ */ A.jsx("option", { value: "all", children: "All Messages" }),
                      /* @__PURE__ */ A.jsx("option", { value: "first", children: "First X Messages" }),
                      /* @__PURE__ */ A.jsx("option", { value: "last", children: "Last X Messages" }),
                      /* @__PURE__ */ A.jsx("option", { value: "range", children: "Range" })
                    ]
                  }
                ),
                r.contextToSend.messages.type === "first" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                  "First",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.first ?? 10,
                      onChange: (P) => M("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(P.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "last" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                  "Last",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.last ?? 10,
                      onChange: (P) => M("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(P.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "range" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                  "Range:",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "0",
                      placeholder: "Start",
                      value: r.contextToSend.messages.range?.start ?? 0,
                      onChange: (P) => M("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(P.target.value) || 0
                        }
                      })
                    }
                  ),
                  " ",
                  "to",
                  " ",
                  /* @__PURE__ */ A.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      placeholder: "End",
                      value: r.contextToSend.messages.range?.end ?? 10,
                      onChange: (P) => M("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(P.target.value) || 10
                        }
                      })
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.charCard,
                    onChange: (P) => M("charCard", P.target.checked)
                  }
                ),
                "Char Card"
              ] }),
              p.length > 0 && /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Select Character" }),
                /* @__PURE__ */ A.jsx("select", { className: "text_pole", title: "Select character for your group.", children: p.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.avatar, children: P.name }, P.avatar)) })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (P) => M("authorNote", P.target.checked)
                  }
                ),
                " ",
                "Author Note"
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.worldInfo,
                    onChange: (P) => M("worldInfo", P.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ A.jsx(
                  r_,
                  {
                    items: Y,
                    value: s.selectedWorldNames,
                    onChange: (P) => {
                      a((te) => {
                        const K = { ...te.selectedEntryUids };
                        return te.selectedWorldNames.filter((re) => !P.includes(re)).forEach((re) => delete K[re]), { ...te, selectedWorldNames: P, selectedEntryUids: K };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              s.selectedWorldNames.length > 0 && /* @__PURE__ */ A.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ A.jsxs(
                  Oe,
                  {
                    className: "menu_button",
                    onClick: () => C(!0),
                    title: "Select specific entries from the chosen lorebooks",
                    children: [
                      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-list-check" }),
                      "Select Entries"
                    ]
                  }
                ),
                /* @__PURE__ */ A.jsx("span", { children: ce > 0 ? `${ce} selected` : "All entries included" })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (P) => M("suggestedEntries", P.target.checked)
                  }
                ),
                " ",
                "Existing Suggestions"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsxs("label", { children: [
              "Max Context",
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  title: "Select Max Context Type",
                  value: r.maxContextType,
                  onChange: (P) => k("maxContextType", P.target.value),
                  children: [
                    /* @__PURE__ */ A.jsx("option", { value: "profile", children: "Use profile preset" }),
                    /* @__PURE__ */ A.jsx("option", { value: "sampler", children: "Use active preset in sampler settings" }),
                    /* @__PURE__ */ A.jsx("option", { value: "custom", children: "Custom" })
                  ]
                }
              )
            ] }),
            r.maxContextType === "custom" && /* @__PURE__ */ A.jsx("label", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                min: "1",
                step: "1",
                placeholder: "Enter max tokens",
                value: r.maxContextValue,
                onChange: (P) => k("maxContextValue", parseInt(P.target.value) || 2048)
              }
            ) }),
            /* @__PURE__ */ A.jsxs("label", { style: { display: "block", marginTop: "10px" }, children: [
              "Max Response Tokens",
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  min: "1",
                  step: "1",
                  placeholder: "Enter max response tokens",
                  value: r.maxResponseToken,
                  onChange: (P) => k("maxResponseToken", parseInt(P.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Your Prompt" }),
            /* @__PURE__ */ A.jsx(
              Uf,
              {
                label: "Prompt Preset",
                items: B,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (P) => k("promptPreset", P ?? "default"),
                onItemsChange: (P) => {
                  const te = P.reduce(
                    (K, se) => (K[se.value] = r.promptPresets[se.value] ?? { content: "" }, K),
                    {}
                  );
                  k("promptPresets", te);
                },
                enableCreate: !0,
                enableRename: !0,
                enableDelete: !0
              }
            ),
            /* @__PURE__ */ A.jsx(
              Er,
              {
                value: r.promptPresets[r.promptPreset]?.content ?? "",
                onChange: (P) => {
                  const te = { ...r.promptPresets };
                  te[r.promptPreset] && (te[r.promptPreset].content = P.target.value, k("promptPresets", te));
                },
                placeholder: "e.g., 'Suggest entries for places {{user}} visited.'",
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ A.jsx(
              Oe,
              {
                onClick: () => R(),
                disabled: _,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: _ ? "Generating..." : "Send Prompt"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "wide-column", children: /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Suggested Entries" }),
          /* @__PURE__ */ A.jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ A.jsx(
              Oe,
              {
                onClick: q,
                disabled: _ || G.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ A.jsxs(
              Oe,
              {
                onClick: () => I(!0),
                disabled: _,
                className: "menu_button interactable",
                title: "Revise all selected existing entries and current suggestions in a single chat session",
                children: [
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }),
                  " Global Revise"
                ]
              }
            ),
            /* @__PURE__ */ A.jsx(
              Oe,
              {
                onClick: () => j(!0),
                disabled: _,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ A.jsx(Oe, { onClick: F, disabled: _, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { children: [
            G.length === 0 && /* @__PURE__ */ A.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            G.map(({ worldName: P, entry: te }) => /* @__PURE__ */ A.jsx(
              gA,
              {
                initialWorldName: P,
                entry: te,
                allWorldNames: u,
                existingEntry: f[P]?.find((K) => K.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: L,
                onRemove: $,
                onContinue: R,
                onUpdate: W,
                entriesGroupByWorldName: f,
                sessionForContext: s,
                contextToSend: r.contextToSend
              },
              `${P}-${te.uid}-${te.comment}`
            ))
          ] })
        ] }) })
      ] })
    ] }),
    h && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          ly,
          {
            ref: c,
            entriesByWorldName: U,
            initialSelectedUids: s.selectedEntryUids,
            title: "Select Entries to Include in Context"
          }
        ),
        onComplete: (P) => {
          if (P && c.current) {
            const te = c.current.getSelection();
            a((K) => ({ ...K, selectedEntryUids: te }));
          }
          C(!1);
        },
        options: { wide: !0 }
      }
    ),
    x && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.CONFIRM,
        content: /* @__PURE__ */ A.jsx(
          ly,
          {
            ref: y,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (P) => {
          if (P && y.current) {
            const te = y.current.getSelection();
            O(te);
          }
          j(!1);
        },
        options: { wide: !0 }
      }
    ),
    N && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          P_,
          {
            target: { type: "global" },
            initialState: J,
            onClose: () => I(!1),
            onApply: ae,
            sessionForContext: s,
            allEntries: f,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => I(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, yA = () => {
  const [t, r] = ie.useState(!1), s = () => r(!0), a = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, t ? /* @__PURE__ */ A.jsx(
    er,
    {
      content: /* @__PURE__ */ A.jsx(vA, {}),
      type: Bt.DISPLAY,
      onComplete: a,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function _A() {
  function t(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
      let l = u.trim();
      l.startsWith("[") && l.endsWith("]") && (l = l.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let v = 0; v < l.length; v++) {
        const g = l[v];
        g === '"' || g === "'" ? v > 0 && l[v - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  je.SlashCommandParser.addCommandObject(
    je.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: je.ARGUMENT_TYPE.BOOLEAN
    })
  ), je.SlashCommandParser.addCommandObject(
    je.SlashCommand.fromProps({
      name: "world-info-recommender-run",
      helpString: `
              <div class="inline-drawer">
                  <details>
                      <summary>Run the World Info Recommender AI automatically.</summary>
                      <div class="list-group">
                          Executes the recommendation process using the specified parameters.
                          <br>
                          - <b>profile</b>: (Required) Connection profile ID/name to use for the AI request.
                          <br>
                          - <b>prompt</b>: (Required) The core task/instruction for the AI. Passed as unnamed argument(s).
                          <br>
                          - <b>lorebooks</b>: List of lorebook names to include as context. Defaults to currently active worlds.
                          <br>
                          - <b>allowed-ops</b>: List of operations allowed ('add', 'update'). Defaults to 'add,update'.
                          <br>
                          - <b>editable-entries</b>: Comma-separated list of specific entries allowed for update, format: <code>WorldName.EntryComment</code> or <code>WorldName.UID</code>. If provided, only these entries can be updated. Adds are still allowed if 'add' is in allowed-ops. Defaults to allowing updates for all entries.
                          <br>
                          - <b>context</b>: Context parts ('stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'). Defaults to extension settings.
                          <br>
                          - <b>messages</b>: Message range ('all', 'none', 'first:N', 'last:N', 'range:S-E'). Defaults to extension settings.
                          <br>
                          - <b>max-context</b>: Override context token limit (number). Defaults to extension settings.
                          <br>
                          - <b>max-response</b>: Override response token limit (number). Defaults to extension settings.
                          <br>
                          - <b>main-context-template</b>: Override main context template preset (string). Defaults to extension settings.
                          <br>
                          - <b>silent</b>: Suppress success/error messages (boolean). Defaults to false.
                      </div>
                      <div>
                          <b>Example:</b>
                          <pre><code>/wir-run profile=your_profile_id lorebooks=[CommonEvents,Characters] allowed-ops=[add] "Create 3 new entries about recent events in the tavern based on the last 5 messages."</code></pre>
                          <pre><code>/wir-run profile=your_profile_name editable-entries=[Characters.12345,Locations.The Docks] messages=last:10 prompt="Update the description for character UID 12345 and The Docks based on the recent fight."</code></pre>
                      </div>
                  </details>
              </div>
          `,
      returns: je.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        je.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: aw
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: E2.worlds
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [je.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [je.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [je.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        je.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [je.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        je.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [je.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const a = r.silent ?? !1;
        try {
          const u = Ut.getSettings(), l = Array.isArray(s) ? s.join(" ") : s, f = r.profile;
          let m;
          if (!l)
            throw new Error("Prompt argument is required.");
          if (!f)
            throw new Error("Profile argument is required.");
          const p = je.extensionSettings?.connectionManager?.profiles?.find(
            (U) => U.id === f || U.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const v = t(r.lorebooks);
          let g;
          if (v !== null) {
            g = {};
            for (const U of v) {
              const J = await je.loadWorldInfo(U);
              J && (g[U] = Object.values(J.entries));
            }
          } else
            g = await gl(["all"], !0, un);
          const E = Object.keys(g);
          let _;
          if (v !== null) {
            if (_ = v.map((U) => U.trim()).filter((U) => E.includes(U) ? !0 : (a || be("warning", `Specified lorebook "${U}" is not active or does not exist. Ignoring.`), !1)), _.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            _ = E;
          _.length === 0 && (a || be("warning", "No active lorebooks found to use for context."));
          const S = t(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), x = h.includes("update"), j = /* @__PURE__ */ new Set(), N = t(r["editable-entries"]);
          N !== null && N.forEach((U) => {
            j.add(U.trim());
          });
          const I = j.size > 0, c = t(r.context), y = { ...u.contextToSend };
          if (c !== null) {
            const U = c.map((J) => J.trim());
            y.stDescription = U.includes("stdescription"), y.messages.type = U.includes("messages") ? y.messages.type : "none", y.charCard = U.includes("charcard"), y.authorNote = U.includes("authornote"), y.worldInfo = U.includes("worldinfo"), y.suggestedEntries = !1;
          }
          if (r.messages && y.messages.type !== "none") {
            const U = r.messages.toLowerCase().trim();
            if (U === "all") y.messages.type = "all";
            else if (U === "none") y.messages.type = "none";
            else if (U.startsWith("first:"))
              y.messages.type = "first", y.messages.first = parseInt(U.split(":")[1]) || 10;
            else if (U.startsWith("last:"))
              y.messages.type = "last", y.messages.last = parseInt(U.split(":")[1]) || 10;
            else if (U.startsWith("range:")) {
              const J = U.split(":")[1].split("-");
              y.messages.type = "range", y.messages.range = {
                start: parseInt(J[0]) || 0,
                end: parseInt(J[1]) || 10
              };
            } else
              a || be("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
          }
          const w = {
            // Let runWorldInfoRecommendation determine these from profile
            presetName: void 0,
            contextName: void 0,
            instructName: void 0,
            syspromptName: void 0,
            // Use derived contextToSend settings
            ignoreCharacterFields: !y.charCard,
            ignoreWorldInfo: !0,
            // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !y.authorNote,
            maxContext: r["max-context"] ?? (u.maxContextType === "custom" ? u.maxContextValue : u.maxContextType === "profile" ? "preset" : "active"),
            includeNames: !!Kt,
            targetCharacterId: Kt ? un : void 0
            // Simplification: Use current char in group context
          };
          switch (y.messages.type) {
            case "none":
              w.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              w.messageIndexesBetween = { start: 0, end: y.messages.first ?? 10 };
              break;
            case "last":
              const U = y.messages.last ?? 10, J = je.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, J - 1),
                start: Math.max(0, J - U)
              };
              break;
            case "range":
              y.messages.range && (w.messageIndexesBetween = {
                start: y.messages.range.start,
                end: y.messages.range.end
              });
              break;
            case "all":
            default:
              break;
          }
          const k = {
            selectedWorldNames: _,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, M = r["max-response"] ? parseInt(r["max-response"]) : void 0, z = structuredClone(u.prompts);
          y.stDescription || delete z.stDescription, (!y.worldInfo || _.length === 0) && delete z.currentLorebooks, delete z.suggestedLorebooks;
          const R = {
            profileId: m,
            userPrompt: l,
            responseFormat: u.responseFormat,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: z,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((U) => U.enabled).map((U) => ({
              promptName: U.promptName,
              role: U.role
            })),
            maxResponseToken: M ?? u.maxResponseToken
          };
          a || be("info", "Running World Info Recommender...");
          const L = await Wy(R);
          if (Object.keys(L).length === 0)
            return a || be("info", "AI returned no suggestions."), !0;
          let q = 0, F = 0, $ = 0;
          const W = /* @__PURE__ */ new Set(), O = structuredClone(g);
          for (const [U, J] of Object.entries(L)) {
            let ae = U;
            if (!_.includes(ae))
              if (E.includes(ae)) {
                a || be(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${J.length} entries.`
                ), $ += J.length;
                continue;
              } else if (_.length > 0)
                ae = _[0], a || be(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${U}". Attempting to place in "${ae}".`
                );
              else {
                a || be(
                  "error",
                  `AI suggested entry for "${U}", but no valid target lorebook available. Skipping ${J.length} entries.`
                ), $ += J.length;
                continue;
              }
            for (const B of J) {
              if (O[ae]?.some(
                (ce) => ce.uid === B.uid && ce.comment === B.comment
              )) {
                if (!x) {
                  a || be(
                    "info",
                    `Skipping update for "${ae}.${B.comment || B.uid}" (updates disallowed).`
                  ), $++;
                  continue;
                }
                if (I) {
                  const ce = `${ae}.${B.comment}`, G = `${ae}.${B.uid}`;
                  if (!j.has(ce) && !j.has(G)) {
                    a || be(
                      "info",
                      `Skipping update for "${ae}.${B.comment || B.uid}" (not in editable-entries).`
                    ), $++;
                    continue;
                  }
                }
              } else if (!C) {
                a || be(
                  "info",
                  `Skipping add for "${ae}.${B.comment || "New Entry"}" (adds disallowed).`
                ), $++;
                continue;
              }
              try {
                const { status: ce } = rw(B, ae, O);
                ce === "added" ? q++ : F++, W.add(ae);
              } catch (ce) {
                a || be(
                  "error",
                  `Failed to prepare modification for "${ae}.${B.comment || B.uid}": ${ce.message}`
                ), $++;
              }
            }
          }
          if (W.size > 0) {
            a || be("info", `Saving changes to ${W.size} lorebook(s)...`);
            for (const U of W) {
              const J = O[U], ae = { entries: {} };
              J.forEach((B) => ae.entries[B.uid] = B), await je.saveWorldInfo(U, ae), je.reloadWorldInfoEditor(U, !0);
            }
          }
          if (!a) {
            const U = [];
            (q > 0 || F > 0 || $ > 0) && U.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${q}</li>
                  <li><strong>Updated:</strong> ${F}</li>
                  <li><strong>Skipped:</strong> ${$}</li>
                  </ul>
                </div>
                `), W.size > 0 && U.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(W).map((ae) => `<li>${ae}</li>`).join("")}
                  </ul>
                </div>
                `);
            const J = U.length > 0 ? `
                <div class="wir-results">
                  <h4>World Info Recommender Results:</h4>
                  ${U.join("")}
                </div>
                ` : `
                <div class="wir-results">
                  <h4>World Info Recommender:</h4>
                  <p>No changes were made</p>
                </div>
                `;
            be("success", J, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), a || be("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Ws = SillyTavern.getContext();
async function bA() {
  const t = await Ws.renderExtensionTemplateAsync(
    `third-party/${zi}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), _v.createRoot(r).render(
    /* @__PURE__ */ A.jsx(yl.StrictMode, { children: /* @__PURE__ */ A.jsx(hw, {}) })
  ));
  const a = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], l = document.createElement("div");
  document.body.appendChild(l), _v.createRoot(l).render(
    /* @__PURE__ */ A.jsx(yl.StrictMode, { children: /* @__PURE__ */ A.jsx(yA, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = a.trim();
    const v = p.firstChild;
    v && (m.prepend(v), v.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function SA() {
  return !(!Ws.ConnectionManagerRequestService || !Ws.getCharacterCardFields || !Ws.getWorldInfoPrompt || !Ws.reloadWorldInfoEditor);
}
SA() ? uw().then(() => {
  bA(), _A();
}) : be("error", `[${zi}] Make sure ST is updated.`);
export {
  bA as init
};
