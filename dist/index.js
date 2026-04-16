import { renderStoryString as a2, persona_description_positions as ov } from "../../../../power-user.js";
import { parseMesExamples as i2, baseChatReplace as s2, chat_metadata as Ls, getMaxContextSize as o2, name1 as Aa, name2 as Kr, this_chid as un, extension_prompt_types as xa, depth_prompt_role_default as u2, depth_prompt_depth_default as l2 } from "../../../../../script.js";
import { createWorldInfoEntry as c2, world_info_include_names as d2, wi_anchor_position as f2, selected_world_info as h2, METADATA_KEY as p2, world_info as m2, world_names as g2 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as v2, formatInstructModeSystemPrompt as y2 } from "../../../../instruct-mode.js";
import { appendFileContent as _2 } from "../../../../chats.js";
import { setOpenAIMessages as b2, setOpenAIMessageExamples as S2, formatWorldInfo as w2, getPromptPosition as E2, getPromptRole as C2, prepareOpenAIMessages as k2 } from "../../../../openai.js";
import { metadata_keys as Ps } from "../../../../authors-note.js";
import { getGroupDepthPrompts as A2, selected_group as Kt, groups as uv } from "../../../../group-chats.js";
import { runRegexScript as x2, getRegexedString as T2, regex_placement as lv } from "../../../regex/engine.js";
import { getCharaFilename as N2, removeFromArray as cv, runAfterAnimation as O2 } from "../../../../utils.js";
import { commonEnumProviders as M2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as Kd } from "../../../../popup.js";
import dv from "../../../../../lib/dialog-polyfill.esm.js";
function Wf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jd = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function R2() {
  if (fv) return Is;
  fv = 1;
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
var hv;
function j2() {
  return hv || (hv = 1, Jd.exports = R2()), Jd.exports;
}
var A = j2(), Wd = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv;
function D2() {
  if (pv) return De;
  pv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.iterator;
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
  var P = N.prototype = new j();
  P.constructor = N, h(P, x.prototype), P.isPureReactComponent = !0;
  var c = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(B, Y, ce, G, I, te) {
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
  function W(B, Y, ce, G, I) {
    var te = typeof B;
    (te === "undefined" || te === "boolean") && (B = null);
    var Q = !1;
    if (B === null) Q = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (B.$$typeof) {
            case t:
            case r:
              Q = !0;
              break;
            case v:
              return Q = B._init, W(
                Q(B._payload),
                Y,
                ce,
                G,
                I
              );
          }
      }
    if (Q)
      return I = I(B), Q = G === "" ? "." + q(B, 0) : G, c(I) ? (ce = "", Q != null && (ce = Q.replace(L, "$&/") + "/"), W(I, Y, ce, "", function(pe) {
        return pe;
      })) : I != null && (z(I) && (I = M(
        I,
        ce + (I.key == null || B && B.key === I.key ? "" : ("" + I.key).replace(
          L,
          "$&/"
        ) + "/") + Q
      )), Y.push(I)), 1;
    Q = 0;
    var se = G === "" ? "." : G + ":";
    if (c(B))
      for (var re = 0; re < B.length; re++)
        G = B[re], te = se + q(G, re), Q += W(
          G,
          Y,
          ce,
          te,
          I
        );
    else if (re = _(B), typeof re == "function")
      for (B = re.call(B), re = 0; !(G = B.next()).done; )
        G = G.value, te = se + q(G, re++), Q += W(
          G,
          Y,
          ce,
          te,
          I
        );
    else if (te === "object") {
      if (typeof B.then == "function")
        return W(
          $(B),
          Y,
          ce,
          G,
          I
        );
      throw Y = String(B), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(B).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Q;
  }
  function O(B, Y, ce) {
    if (B == null) return B;
    var G = [], I = 0;
    return W(B, G, "", "", function(te) {
      return Y.call(ce, te, I++);
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
    var G = h({}, B.props), I = B.key, te = void 0;
    if (Y != null)
      for (Q in Y.ref !== void 0 && (te = void 0), Y.key !== void 0 && (I = "" + Y.key), Y)
        !w.call(Y, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && Y.ref === void 0 || (G[Q] = Y[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) G.children = ce;
    else if (1 < Q) {
      for (var se = Array(Q), re = 0; re < Q; re++)
        se[re] = arguments[re + 2];
      G.children = se;
    }
    return k(B.type, I, void 0, void 0, te, G);
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
    var G, I = {}, te = null;
    if (Y != null)
      for (G in Y.key !== void 0 && (te = "" + Y.key), Y)
        w.call(Y, G) && G !== "key" && G !== "__self" && G !== "__source" && (I[G] = Y[G]);
    var Q = arguments.length - 2;
    if (Q === 1) I.children = ce;
    else if (1 < Q) {
      for (var se = Array(Q), re = 0; re < Q; re++)
        se[re] = arguments[re + 2];
      I.children = se;
    }
    if (B && B.defaultProps)
      for (G in Q = B.defaultProps, Q)
        I[G] === void 0 && (I[G] = Q[G]);
    return k(B, te, void 0, void 0, null, I);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(B) {
    return { $$typeof: m, render: B };
  }, De.isValidElement = z, De.lazy = function(B) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: B },
      _init: U
    };
  }, De.memo = function(B, Y) {
    return {
      $$typeof: g,
      type: B,
      compare: Y === void 0 ? null : Y
    };
  }, De.startTransition = function(B) {
    var Y = y.T, ce = {};
    y.T = ce;
    try {
      var G = B(), I = y.S;
      I !== null && I(ce, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(ae, J);
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
var mv;
function eh() {
  return mv || (mv = 1, Wd.exports = D2()), Wd.exports;
}
var ie = eh();
const bl = /* @__PURE__ */ Wf(ie);
var ef = { exports: {} }, Bs = {}, tf = { exports: {} }, nf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function z2() {
  return gv || (gv = 1, (function(t) {
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
          var ce = 2 * (ae + 1) - 1, G = O[ce], I = ce + 1, te = O[I];
          if (0 > u(G, J))
            I < B && 0 > u(te, G) ? (O[ae] = te, O[I] = J, ae = I) : (O[ae] = G, O[ce] = J, ae = ce);
          else if (I < B && 0 > u(te, J))
            O[ae] = te, O[I] = J, ae = I;
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
    var p = [], g = [], v = 1, E = null, _ = 3, S = !1, h = !1, C = !1, x = !1, j = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function c(O) {
      for (var U = s(g); U !== null; ) {
        if (U.callback === null) a(g);
        else if (U.startTime <= O)
          a(g), U.sortIndex = U.expirationTime, r(p, U);
        else break;
        U = s(g);
      }
    }
    function y(O) {
      if (C = !1, c(O), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, q());
        else {
          var U = s(g);
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
                  var Y = s(g);
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
    if (typeof P == "function")
      q = function() {
        P(L);
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
        id: v++,
        callback: U,
        priorityLevel: O,
        startTime: J,
        expirationTime: B,
        sortIndex: -1
      }, J > ae ? (O.sortIndex = J, r(g, O), s(p) === null && O === s(g) && (C ? (N(k), k = -1) : C = !0, W(y, J - ae))) : (O.sortIndex = B, r(p, O), h || S || (h = !0, w || (w = !0, q()))), O;
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
  })(nf)), nf;
}
var vv;
function L2() {
  return vv || (vv = 1, tf.exports = z2()), tf.exports;
}
var rf = { exports: {} }, Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv;
function P2() {
  if (yv) return Zt;
  yv = 1;
  var t = eh();
  function r(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function l(p, g, v) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: g,
      implementation: v
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, g) {
    if (p === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Zt.createPortal = function(p, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return l(p, g, null, v);
  }, Zt.flushSync = function(p) {
    var g = f.T, v = a.p;
    try {
      if (f.T = null, a.p = 2, p) return p();
    } finally {
      f.T = g, a.p = v, a.d.f();
    }
  }, Zt.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, a.d.C(p, g));
  }, Zt.prefetchDNS = function(p) {
    typeof p == "string" && a.d.D(p);
  }, Zt.preinit = function(p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var v = g.as, E = m(v, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, S = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? a.d.S(
        p,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: E,
          integrity: _,
          fetchPriority: S
        }
      ) : v === "script" && a.d.X(p, {
        crossOrigin: E,
        integrity: _,
        fetchPriority: S,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Zt.preinitModule = function(p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = m(
            g.as,
            g.crossOrigin
          );
          a.d.M(p, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && a.d.M(p);
  }, Zt.preload = function(p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, E = m(v, g.crossOrigin);
      a.d.L(p, v, {
        crossOrigin: E,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Zt.preloadModule = function(p, g) {
    if (typeof p == "string")
      if (g) {
        var v = m(g.as, g.crossOrigin);
        a.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else a.d.m(p);
  }, Zt.requestFormReset = function(p) {
    a.d.r(p);
  }, Zt.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, Zt.useFormState = function(p, g, v) {
    return f.H.useFormState(p, g, v);
  }, Zt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Zt.version = "19.1.1", Zt;
}
var _v;
function yy() {
  if (_v) return rf.exports;
  _v = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), rf.exports = P2(), rf.exports;
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
var bv;
function I2() {
  if (bv) return Bs;
  bv = 1;
  var t = L2(), r = eh(), s = yy();
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
  function g(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = g(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign, E = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), N = Symbol.for("react.consumer"), P = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), R = Symbol.for("react.memo_cache_sentinel"), L = Symbol.iterator;
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
        case P:
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
  var I = Y(null), te = Y(null), Q = Y(null), se = Y(null);
  function re(e, n) {
    switch (G(Q, n), G(te, e), G(I, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? zg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = zg(n), e = Lg(n, e);
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
    ce(I), G(I, e);
  }
  function pe() {
    ce(I), ce(te), ce(Q);
  }
  function je(e) {
    e.memoizedState !== null && G(se, e);
    var n = I.current, i = Lg(n, e.type);
    n !== i && (G(te, e), G(I, i));
  }
  function He(e) {
    te.current === e && (ce(I), ce(te)), se.current === e && (ce(se), Ms._currentValue = J);
  }
  var be = Object.prototype.hasOwnProperty, fe = t.unstable_scheduleCallback, me = t.unstable_cancelCallback, Ne = t.unstable_shouldYield, ze = t.unstable_requestPaint, Ye = t.unstable_now, fn = t.unstable_getCurrentPriorityLevel, bt = t.unstable_ImmediatePriority, ve = t.unstable_UserBlockingPriority, ye = t.unstable_NormalPriority, Ve = t.unstable_LowPriority, Ze = t.unstable_IdlePriority, it = t.log, xr = t.unstable_setDisableYieldValue, nr = null, mt = null;
  function Vn(e) {
    if (typeof it == "function" && xr(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(nr, e);
      } catch {
      }
  }
  var Vt = Math.clz32 ? Math.clz32 : ua, Cn = Math.log, oa = Math.LN2;
  function ua(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Cn(e) / oa | 0) | 0;
  }
  var rr = 256, $n = 4194304;
  function kn(e) {
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
    return D !== 0 ? (o = D & ~b, o !== 0 ? d = kn(o) : (T &= D, T !== 0 ? d = kn(T) : i || (i = D & ~e, i !== 0 && (d = kn(i))))) : (D = o & ~b, D !== 0 ? d = kn(D) : T !== 0 ? d = kn(T) : i || (i = o & ~e, i !== 0 && (d = kn(i)))), d === 0 ? 0 : n !== 0 && n !== d && (n & b) === 0 && (b = d & -d, i = n & -n, b >= i || b === 32 && (i & 4194048) !== 0) ? n : d;
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
  function _h() {
    var e = $n;
    return $n <<= 1, ($n & 62914560) === 0 && ($n = 4194304), e;
  }
  function Ul(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function $_(e, n, i, o, d, b) {
    var T = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var D = e.entanglements, H = e.expirationTimes, K = e.hiddenUpdates;
    for (i = T & ~i; 0 < i; ) {
      var oe = 31 - Vt(i), de = 1 << oe;
      D[oe] = 0, H[oe] = -1;
      var ee = K[oe];
      if (ee !== null)
        for (K[oe] = null, oe = 0; oe < ee.length; oe++) {
          var ne = ee[oe];
          ne !== null && (ne.lane &= -536870913);
        }
      i &= ~de;
    }
    o !== 0 && bh(e, o, 0), b !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= b & ~(T & ~n));
  }
  function bh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Vt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function Sh(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - Vt(i), d = 1 << o;
      d & n | e[o] & n && (e[o] |= n), i &= ~d;
    }
  }
  function Hl(e) {
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
  function ql(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function wh() {
    var e = U.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tv(e.type));
  }
  function Y_(e, n) {
    var i = U.p;
    try {
      return U.p = e, n();
    } finally {
      U.p = i;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + Tr, Wt = "__reactProps$" + Tr, Ha = "__reactContainer$" + Tr, Zl = "__reactEvents$" + Tr, F_ = "__reactListeners$" + Tr, X_ = "__reactHandles$" + Tr, Eh = "__reactResources$" + Tr, qi = "__reactMarker$" + Tr;
  function Gl(e) {
    delete e[Ht], delete e[Wt], delete e[Zl], delete e[F_], delete e[X_];
  }
  function qa(e) {
    var n = e[Ht];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ha] || i[Ht]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Ug(e); e !== null; ) {
            if (i = e[Ht]) return i;
            e = Ug(e);
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
    var n = e[Eh];
    return n || (n = e[Eh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Mt(e) {
    e[qi] = !0;
  }
  var Ch = /* @__PURE__ */ new Set(), kh = {};
  function la(e, n) {
    Va(e, n), Va(e + "Capture", n);
  }
  function Va(e, n) {
    for (kh[e] = n, e = 0; e < n.length; e++)
      Ch.add(n[e]);
  }
  var Q_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ah = {}, xh = {};
  function K_(e) {
    return be.call(xh, e) ? !0 : be.call(Ah, e) ? !1 : Q_.test(e) ? xh[e] = !0 : (Ah[e] = !0, !1);
  }
  function mo(e, n, i) {
    if (K_(n))
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
  var Vl, Th;
  function $a(e) {
    if (Vl === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Vl = n && n[1] || "", Th = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vl + e + Th;
  }
  var $l = !1;
  function Yl(e, n) {
    if (!e || $l) return "";
    $l = !0;
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
`), K = D.split(`
`);
        for (d = o = 0; o < H.length && !H[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < K.length && !K[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === H.length || d === K.length)
          for (o = H.length - 1, d = K.length - 1; 1 <= o && 0 <= d && H[o] !== K[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (H[o] !== K[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || H[o] !== K[d]) {
                  var oe = `
` + H[o].replace(" at new ", " at ");
                  return e.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", e.displayName)), oe;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      $l = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? $a(i) : "";
  }
  function J_(e) {
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
        return Yl(e.type, !1);
      case 11:
        return Yl(e.type.render, !1);
      case 1:
        return Yl(e.type, !0);
      case 31:
        return $a("Activity");
      default:
        return "";
    }
  }
  function Nh(e) {
    try {
      var n = "";
      do
        n += J_(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function An(e) {
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
  function Oh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function W_(e) {
    var n = Oh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
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
    e._valueTracker || (e._valueTracker = W_(e));
  }
  function Mh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = Oh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function yo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var eb = /[\n"\\]/g;
  function xn(e) {
    return e.replace(
      eb,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fl(e, n, i, o, d, b, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), n != null ? T === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + An(n)) : e.value !== "" + An(n) && (e.value = "" + An(n)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), n != null ? Xl(e, T, An(n)) : i != null ? Xl(e, T, An(i)) : o != null && e.removeAttribute("value"), d == null && b != null && (e.defaultChecked = !!b), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + An(D) : e.removeAttribute("name");
  }
  function Rh(e, n, i, o, d, b, T, D) {
    if (b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.type = b), n != null || i != null) {
      if (!(b !== "submit" && b !== "reset" || n != null))
        return;
      i = i != null ? "" + An(i) : "", n = n != null ? "" + An(n) : i, D || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Xl(e, n, i) {
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
      for (i = "" + An(i), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jh(e, n, i) {
    if (n != null && (n = "" + An(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + An(i) : "";
  }
  function Dh(e, n, i, o) {
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
    i = An(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
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
  var tb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zh(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || tb.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Lh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in n)
        o = n[d], n.hasOwnProperty(d) && i[d] !== o && zh(e, d, o);
    } else
      for (var b in n)
        n.hasOwnProperty(b) && zh(e, b, n[b]);
  }
  function Ql(e) {
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
  var nb = /* @__PURE__ */ new Map([
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
  ]), rb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _o(e) {
    return rb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Kl = null;
  function Jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, Qa = null;
  function Ph(e) {
    var n = Za(e);
    if (n && (e = n.stateNode)) {
      var i = e[Wt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Fl(
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
              'input[name="' + xn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var d = o[Wt] || null;
                if (!d) throw Error(a(90));
                Fl(
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
              o = i[n], o.form === e.form && Mh(o);
          }
          break e;
        case "textarea":
          jh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ya(e, !!i.multiple, n, !1);
      }
    }
  }
  var Wl = !1;
  function Ih(e, n, i) {
    if (Wl) return e(n, i);
    Wl = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Wl = !1, (Xa !== null || Qa !== null) && (au(), Xa && (n = Xa, e = Qa, Qa = Xa = null, Ph(n), e)))
        for (n = 0; n < e.length; n++) Ph(e[n]);
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
  var ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ec = !1;
  if (ir)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          ec = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      ec = !1;
    }
  var Nr = null, tc = null, bo = null;
  function Bh() {
    if (bo) return bo;
    var e, n = tc, i = n.length, o, d = "value" in Nr ? Nr.value : Nr.textContent, b = d.length;
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
  function Uh() {
    return !1;
  }
  function en(e) {
    function n(i, o, d, b, T) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = b, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (i = e[D], this[D] = i ? i(b) : b[D]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? wo : Uh, this.isPropagationStopped = Uh, this;
    }
    return v(n.prototype, {
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
  }, Eo = en(ca), $i = v({}, ca, { view: 0, detail: 0 }), ab = en($i), nc, rc, Yi, Co = v({}, $i, {
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
    getModifierState: ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (nc = e.screenX - Yi.screenX, rc = e.screenY - Yi.screenY) : rc = nc = 0, Yi = e), nc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : rc;
    }
  }), Hh = en(Co), ib = v({}, Co, { dataTransfer: 0 }), sb = en(ib), ob = v({}, $i, { relatedTarget: 0 }), ac = en(ob), ub = v({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lb = en(ub), cb = v({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), db = en(cb), fb = v({}, ca, { data: 0 }), qh = en(fb), hb = {
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
  }, pb = {
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
  }, mb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = mb[e]) ? !!n[e] : !1;
  }
  function ic() {
    return gb;
  }
  var vb = v({}, $i, {
    key: function(e) {
      if (e.key) {
        var n = hb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = So(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ic,
    charCode: function(e) {
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), yb = en(vb), _b = v({}, Co, {
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
  }), Zh = en(_b), bb = v({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic
  }), Sb = en(bb), wb = v({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Eb = en(wb), Cb = v({}, Co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kb = en(Cb), Ab = v({}, ca, {
    newState: 0,
    oldState: 0
  }), xb = en(Ab), Tb = [9, 13, 27, 32], sc = ir && "CompositionEvent" in window, Fi = null;
  ir && "documentMode" in document && (Fi = document.documentMode);
  var Nb = ir && "TextEvent" in window && !Fi, Gh = ir && (!sc || Fi && 8 < Fi && 11 >= Fi), Vh = " ", $h = !1;
  function Yh(e, n) {
    switch (e) {
      case "keyup":
        return Tb.indexOf(n.keyCode) !== -1;
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
  function Fh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function Ob(e, n) {
    switch (e) {
      case "compositionend":
        return Fh(n);
      case "keypress":
        return n.which !== 32 ? null : ($h = !0, Vh);
      case "textInput":
        return e = n.data, e === Vh && $h ? null : e;
      default:
        return null;
    }
  }
  function Mb(e, n) {
    if (Ka)
      return e === "compositionend" || !sc && Yh(e, n) ? (e = Bh(), bo = tc = Nr = null, Ka = !1, e) : null;
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
        return Gh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Rb = {
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
  function Xh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Rb[e.type] : n === "textarea";
  }
  function Qh(e, n, i, o) {
    Xa ? Qa ? Qa.push(o) : Qa = [o] : Xa = o, n = cu(n, "onChange"), 0 < n.length && (i = new Eo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Xi = null, Qi = null;
  function jb(e) {
    Og(e, 0);
  }
  function ko(e) {
    var n = Zi(e);
    if (Mh(n)) return e;
  }
  function Kh(e, n) {
    if (e === "change") return n;
  }
  var Jh = !1;
  if (ir) {
    var oc;
    if (ir) {
      var uc = "oninput" in document;
      if (!uc) {
        var Wh = document.createElement("div");
        Wh.setAttribute("oninput", "return;"), uc = typeof Wh.oninput == "function";
      }
      oc = uc;
    } else oc = !1;
    Jh = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function ep() {
    Xi && (Xi.detachEvent("onpropertychange", tp), Qi = Xi = null);
  }
  function tp(e) {
    if (e.propertyName === "value" && ko(Qi)) {
      var n = [];
      Qh(
        n,
        Qi,
        e,
        Jl(e)
      ), Ih(jb, n);
    }
  }
  function Db(e, n, i) {
    e === "focusin" ? (ep(), Xi = n, Qi = i, Xi.attachEvent("onpropertychange", tp)) : e === "focusout" && ep();
  }
  function zb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ko(Qi);
  }
  function Lb(e, n) {
    if (e === "click") return ko(n);
  }
  function Pb(e, n) {
    if (e === "input" || e === "change")
      return ko(n);
  }
  function Ib(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var hn = typeof Object.is == "function" ? Object.is : Ib;
  function Ki(e, n) {
    if (hn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!be.call(n, d) || !hn(e[d], n[d]))
        return !1;
    }
    return !0;
  }
  function np(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rp(e, n) {
    var i = np(e);
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
      i = np(i);
    }
  }
  function ap(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ap(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ip(e) {
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
  function lc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Bb = ir && "documentMode" in document && 11 >= document.documentMode, Ja = null, cc = null, Ji = null, dc = !1;
  function sp(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    dc || Ja == null || Ja !== yo(o) || (o = Ja, "selectionStart" in o && lc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ji && Ki(Ji, o) || (Ji = o, o = cu(cc, "onSelect"), 0 < o.length && (n = new Eo(
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
  }, fc = {}, op = {};
  ir && (op = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function fa(e) {
    if (fc[e]) return fc[e];
    if (!Wa[e]) return e;
    var n = Wa[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in op)
        return fc[e] = n[i];
    return e;
  }
  var up = fa("animationend"), lp = fa("animationiteration"), cp = fa("animationstart"), Ub = fa("transitionrun"), Hb = fa("transitionstart"), qb = fa("transitioncancel"), dp = fa("transitionend"), fp = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hc.push("scrollEnd");
  function Pn(e, n) {
    fp.set(e, n), la(n, [e]);
  }
  var hp = /* @__PURE__ */ new WeakMap();
  function Tn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = hp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Nh(n)
      }, hp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Nh(n)
    };
  }
  var Nn = [], ei = 0, pc = 0;
  function Ao() {
    for (var e = ei, n = pc = ei = 0; n < e; ) {
      var i = Nn[n];
      Nn[n++] = null;
      var o = Nn[n];
      Nn[n++] = null;
      var d = Nn[n];
      Nn[n++] = null;
      var b = Nn[n];
      if (Nn[n++] = null, o !== null && d !== null) {
        var T = o.pending;
        T === null ? d.next = d : (d.next = T.next, T.next = d), o.pending = d;
      }
      b !== 0 && pp(i, d, b);
    }
  }
  function xo(e, n, i, o) {
    Nn[ei++] = e, Nn[ei++] = n, Nn[ei++] = i, Nn[ei++] = o, pc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function mc(e, n, i, o) {
    return xo(e, n, i, o), To(e);
  }
  function ti(e, n) {
    return xo(e, null, null, n), To(e);
  }
  function pp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, b = e.return; b !== null; )
      b.childLanes |= i, o = b.alternate, o !== null && (o.childLanes |= i), b.tag === 22 && (e = b.stateNode, e === null || e._visibility & 1 || (d = !0)), e = b, b = b.return;
    return e.tag === 3 ? (b = e.stateNode, d && n !== null && (d = 31 - Vt(i), e = b.hiddenUpdates, o = e[d], o === null ? e[d] = [n] : o.push(n), n.lane = i | 536870912), b) : null;
  }
  function To(e) {
    if (50 < Es)
      throw Es = 0, Sd = null, Error(a(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function Zb(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pn(e, n, i, o) {
    return new Zb(e, n, i, o);
  }
  function gc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sr(e, n) {
    var i = e.alternate;
    return i === null ? (i = pn(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function mp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function No(e, n, i, o, d, b) {
    var T = 0;
    if (o = e, typeof e == "function") gc(e) && (T = 1);
    else if (typeof e == "string")
      T = V1(
        e,
        i,
        I.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case z:
          return e = pn(31, i, n, d), e.elementType = z, e.lanes = b, e;
        case h:
          return ha(i.children, d, b, n);
        case C:
          T = 8, d |= 24;
          break;
        case x:
          return e = pn(12, i, n, d | 2), e.elementType = x, e.lanes = b, e;
        case y:
          return e = pn(13, i, n, d), e.elementType = y, e.lanes = b, e;
        case w:
          return e = pn(19, i, n, d), e.elementType = w, e.lanes = b, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case j:
              case P:
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
    return n = pn(T, i, n, d), n.elementType = e, n.type = o, n.lanes = b, n;
  }
  function ha(e, n, i, o) {
    return e = pn(7, e, o, n), e.lanes = i, e;
  }
  function vc(e, n, i) {
    return e = pn(6, e, null, n), e.lanes = i, e;
  }
  function yc(e, n, i) {
    return n = pn(
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
  var ri = [], ai = 0, Oo = null, Mo = 0, On = [], Mn = 0, pa = null, or = 1, ur = "";
  function ma(e, n) {
    ri[ai++] = Mo, ri[ai++] = Oo, Oo = e, Mo = n;
  }
  function gp(e, n, i) {
    On[Mn++] = or, On[Mn++] = ur, On[Mn++] = pa, pa = e;
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
  function _c(e) {
    e.return !== null && (ma(e, 1), gp(e, 1, 0));
  }
  function bc(e) {
    for (; e === Oo; )
      Oo = ri[--ai], ri[ai] = null, Mo = ri[--ai], ri[ai] = null;
    for (; e === pa; )
      pa = On[--Mn], On[Mn] = null, ur = On[--Mn], On[Mn] = null, or = On[--Mn], On[Mn] = null;
  }
  var Yt = null, ft = null, Fe = !1, ga = null, Yn = !1, Sc = Error(a(519));
  function va(e) {
    var n = Error(a(418, ""));
    throw ts(Tn(n, e)), Sc;
  }
  function vp(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[Ht] = e, n[Wt] = o, i) {
      case "dialog":
        Be("cancel", n), Be("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ks.length; i++)
          Be(ks[i], n);
        break;
      case "source":
        Be("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", n), Be("load", n);
        break;
      case "details":
        Be("toggle", n);
        break;
      case "input":
        Be("invalid", n), Rh(
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
        Be("invalid", n);
        break;
      case "textarea":
        Be("invalid", n), Dh(n, o.value, o.defaultValue, o.children), vo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Dg(n.textContent, i) ? (o.popover != null && (Be("beforetoggle", n), Be("toggle", n)), o.onScroll != null && Be("scroll", n), o.onScrollEnd != null && Be("scrollend", n), o.onClick != null && (n.onclick = du), n = !0) : n = !1, n || va(e);
  }
  function yp(e) {
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
    if (!Fe) return yp(e), Fe = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Pd(e.type, e.memoizedProps)), i = !i), i && ft && va(e), yp(e), n === 13) {
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
      n === 27 ? (n = ft, Vr(e.type) ? (e = Hd, Hd = null, ft = e) : ft = n) : ft = Yt ? Bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    ft = Yt = null, Fe = !1;
  }
  function _p() {
    var e = ga;
    return e !== null && (rn === null ? rn = e : rn.push.apply(
      rn,
      e
    ), ga = null), e;
  }
  function ts(e) {
    ga === null ? ga = [e] : ga.push(e);
  }
  var wc = Y(null), ya = null, lr = null;
  function Or(e, n, i) {
    G(wc, n._currentValue), n._currentValue = i;
  }
  function cr(e) {
    e._currentValue = wc.current, ce(wc);
  }
  function Ec(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function Cc(e, n, i, o) {
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
              b.lanes |= i, D = b.alternate, D !== null && (D.lanes |= i), Ec(
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
        T.lanes |= i, b = T.alternate, b !== null && (b.lanes |= i), Ec(T, i, e), T = null;
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
          hn(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === se.current) {
        if (T = d.alternate, T === null) throw Error(a(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      d = d.return;
    }
    e !== null && Cc(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function Ro(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!hn(
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
    return bp(ya, e);
  }
  function jo(e, n) {
    return ya === null && _a(e), bp(e, n);
  }
  function bp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, lr === null) {
      if (e === null) throw Error(a(308));
      lr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else lr = lr.next = n;
    return i;
  }
  var Gb = typeof AbortController < "u" ? AbortController : function() {
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
  }, Vb = t.unstable_scheduleCallback, $b = t.unstable_NormalPriority, At = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function kc() {
    return {
      controller: new Gb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && Vb($b, function() {
      e.controller.abort();
    });
  }
  var as = null, Ac = 0, ii = 0, si = null;
  function Yb(e, n) {
    if (as === null) {
      var i = as = [];
      Ac = 0, ii = Td(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Ac++, n.then(Sp, Sp), n;
  }
  function Sp() {
    if (--Ac === 0 && as !== null) {
      si !== null && (si.status = "fulfilled");
      var e = as;
      as = null, ii = 0, si = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Fb(e, n) {
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
  var wp = O.S;
  O.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Yb(e, n), wp !== null && wp(e, n);
  };
  var ba = Y(null);
  function xc() {
    var e = ba.current;
    return e !== null ? e : rt.pooledCache;
  }
  function Do(e, n) {
    n === null ? G(ba, ba.current) : G(ba, n.pool);
  }
  function Ep() {
    var e = xc();
    return e === null ? null : { parent: At._currentValue, pool: e };
  }
  var is = Error(a(460)), Cp = Error(a(474)), zo = Error(a(542)), Tc = { then: function() {
  } };
  function kp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Lo() {
  }
  function Ap(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Lo, Lo), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Tp(e), e;
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
            throw e = n.reason, Tp(e), e;
        }
        throw ss = n, is;
    }
  }
  var ss = null;
  function xp() {
    if (ss === null) throw Error(a(459));
    var e = ss;
    return ss = null, e;
  }
  function Tp(e) {
    if (e === is || e === zo)
      throw Error(a(483));
  }
  var Mr = !1;
  function Nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Oc(e, n) {
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
    if (o = o.shared, (Qe & 2) !== 0) {
      var d = o.pending;
      return d === null ? n.next = n : (n.next = d.next, d.next = n), o.pending = n, n = To(e), pp(e, null, i), n;
    }
    return xo(e, o, n, i), To(e);
  }
  function os(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Sh(e, i);
    }
  }
  function Mc(e, n) {
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
  var Rc = !1;
  function us() {
    if (Rc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, i, o) {
    Rc = !1;
    var d = e.updateQueue;
    Mr = !1;
    var b = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var H = D, K = H.next;
      H.next = null, T === null ? b = K : T.next = K, T = H;
      var oe = e.alternate;
      oe !== null && (oe = oe.updateQueue, D = oe.lastBaseUpdate, D !== T && (D === null ? oe.firstBaseUpdate = K : D.next = K, oe.lastBaseUpdate = H));
    }
    if (b !== null) {
      var de = d.baseState;
      T = 0, oe = K = H = null, D = b;
      do {
        var ee = D.lane & -536870913, ne = ee !== D.lane;
        if (ne ? (Ge & ee) === ee : (o & ee) === ee) {
          ee !== 0 && ee === ii && (Rc = !0), oe !== null && (oe = oe.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var ke = e, Ee = D;
            ee = n;
            var et = i;
            switch (Ee.tag) {
              case 1:
                if (ke = Ee.payload, typeof ke == "function") {
                  de = ke.call(et, de, ee);
                  break e;
                }
                de = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = Ee.payload, ee = typeof ke == "function" ? ke.call(et, de, ee) : ke, ee == null) break e;
                de = v({}, de, ee);
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
          }, oe === null ? (K = oe = ne, H = de) : oe = oe.next = ne, T |= ee;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          ne = D, D = ne.next, ne.next = null, d.lastBaseUpdate = ne, d.shared.pending = null;
        }
      } while (!0);
      oe === null && (H = de), d.baseState = H, d.firstBaseUpdate = K, d.lastBaseUpdate = oe, b === null && (d.shared.lanes = 0), Hr |= T, e.lanes = T, e.memoizedState = de;
    }
  }
  function Np(e, n) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(n);
  }
  function Op(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Np(i[e], n);
  }
  var oi = Y(null), Po = Y(0);
  function Mp(e, n) {
    e = vr, G(Po, e), G(oi, n), vr = e | n.baseLanes;
  }
  function jc() {
    G(Po, vr), G(oi, oi.current);
  }
  function Dc() {
    vr = Po.current, ce(oi), ce(Po);
  }
  var Dr = 0, Le = null, Je = null, St = null, Io = !1, ui = !1, Sa = !1, Bo = 0, cs = 0, li = null, Xb = 0;
  function gt() {
    throw Error(a(321));
  }
  function zc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!hn(e[i], n[i])) return !1;
    return !0;
  }
  function Lc(e, n, i, o, d, b) {
    return Dr = b, Le = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = e === null || e.memoizedState === null ? pm : mm, Sa = !1, b = i(o, d), Sa = !1, ui && (b = jp(
      n,
      i,
      o,
      d
    )), Rp(e), b;
  }
  function Rp(e) {
    O.H = Vo;
    var n = Je !== null && Je.next !== null;
    if (Dr = 0, St = Je = Le = null, Io = !1, cs = 0, li = null, n) throw Error(a(300));
    e === null || Rt || (e = e.dependencies, e !== null && Ro(e) && (Rt = !0));
  }
  function jp(e, n, i, o) {
    Le = e;
    var d = 0;
    do {
      if (ui && (li = null), cs = 0, ui = !1, 25 <= d) throw Error(a(301));
      if (d += 1, St = Je = null, e.updateQueue != null) {
        var b = e.updateQueue;
        b.lastEffect = null, b.events = null, b.stores = null, b.memoCache != null && (b.memoCache.index = 0);
      }
      O.H = n1, b = n(i, o);
    } while (ui);
    return b;
  }
  function Qb() {
    var e = O.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ds(n) : n, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Le.flags |= 1024), n;
  }
  function Pc() {
    var e = Bo !== 0;
    return Bo = 0, e;
  }
  function Ic(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Bc(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Io = !1;
    }
    Dr = 0, St = Je = Le = null, ui = !1, cs = Bo = 0, li = null;
  }
  function tn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return St === null ? Le.memoizedState = St = e : St = St.next = e, St;
  }
  function wt() {
    if (Je === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var n = St === null ? Le.memoizedState : St.next;
    if (n !== null)
      St = n, Je = e;
    else {
      if (e === null)
        throw Le.alternate === null ? Error(a(467)) : Error(a(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, St === null ? Le.memoizedState = St = e : St = St.next = e;
    }
    return St;
  }
  function Uc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var n = cs;
    return cs += 1, li === null && (li = []), e = Ap(li, e, n), n = Le, (St === null ? n.memoizedState : St.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? pm : mm), e;
  }
  function Uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === P) return qt(e);
    }
    throw Error(a(438, String(e)));
  }
  function Hc(e) {
    var n = null, i = Le.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = Le.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Uc(), Le.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = R;
    return n.index++, i;
  }
  function dr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = wt();
    return qc(n, Je, e);
  }
  function qc(e, n, i) {
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
      var D = T = null, H = null, K = n, oe = !1;
      do {
        var de = K.lane & -536870913;
        if (de !== K.lane ? (Ge & de) === de : (Dr & de) === de) {
          var ee = K.revertLane;
          if (ee === 0)
            H !== null && (H = H.next = {
              lane: 0,
              revertLane: 0,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            }), de === ii && (oe = !0);
          else if ((Dr & ee) === ee) {
            K = K.next, ee === ii && (oe = !0);
            continue;
          } else
            de = {
              lane: 0,
              revertLane: K.revertLane,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            }, H === null ? (D = H = de, T = b) : H = H.next = de, Le.lanes |= ee, Hr |= ee;
          de = K.action, Sa && i(b, de), b = K.hasEagerState ? K.eagerState : i(b, de);
        } else
          ee = {
            lane: de,
            revertLane: K.revertLane,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          }, H === null ? (D = H = ee, T = b) : H = H.next = ee, Le.lanes |= de, Hr |= de;
        K = K.next;
      } while (K !== null && K !== n);
      if (H === null ? T = b : H.next = D, !hn(b, e.memoizedState) && (Rt = !0, oe && (i = si, i !== null)))
        throw i;
      e.memoizedState = b, e.baseState = T, e.baseQueue = H, o.lastRenderedState = b;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Zc(e) {
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
      hn(b, n.memoizedState) || (Rt = !0), n.memoizedState = b, n.baseQueue === null && (n.baseState = b), i.lastRenderedState = b;
    }
    return [b, o];
  }
  function Dp(e, n, i) {
    var o = Le, d = wt(), b = Fe;
    if (b) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = n();
    var T = !hn(
      (Je || d).memoizedState,
      i
    );
    T && (d.memoizedState = i, Rt = !0), d = d.queue;
    var D = Pp.bind(null, o, d, e);
    if (fs(2048, 8, D, [e]), d.getSnapshot !== n || T || St !== null && St.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        qo(),
        Lp.bind(
          null,
          o,
          d,
          i,
          n
        ),
        null
      ), rt === null) throw Error(a(349));
      b || (Dr & 124) !== 0 || zp(o, n, i);
    }
    return i;
  }
  function zp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = Le.updateQueue, n === null ? (n = Uc(), Le.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Lp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Ip(n) && Bp(e);
  }
  function Pp(e, n, i) {
    return i(function() {
      Ip(n) && Bp(e);
    });
  }
  function Ip(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !hn(e, i);
    } catch {
      return !0;
    }
  }
  function Bp(e) {
    var n = ti(e, 2);
    n !== null && _n(n, e, 2);
  }
  function Gc(e) {
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
  function Up(e, n, i, o) {
    return e.baseState = i, qc(
      e,
      Je,
      typeof o == "function" ? o : dr
    );
  }
  function Kb(e, n, i, o, d) {
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
      O.T !== null ? i(!0) : b.isTransition = !1, o(b), i = n.pending, i === null ? (b.next = n.pending = b, Hp(n, b)) : (b.next = i.next, n.pending = i.next = b);
    }
  }
  function Hp(e, n) {
    var i = n.action, o = n.payload, d = e.state;
    if (n.isTransition) {
      var b = O.T, T = {};
      O.T = T;
      try {
        var D = i(d, o), H = O.S;
        H !== null && H(T, D), qp(e, n, D);
      } catch (K) {
        Vc(e, n, K);
      } finally {
        O.T = b;
      }
    } else
      try {
        b = i(d, o), qp(e, n, b);
      } catch (K) {
        Vc(e, n, K);
      }
  }
  function qp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Zp(e, n, o);
      },
      function(o) {
        return Vc(e, n, o);
      }
    ) : Zp(e, n, i);
  }
  function Zp(e, n, i) {
    n.status = "fulfilled", n.value = i, Gp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Hp(e, i)));
  }
  function Vc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Gp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Gp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Vp(e, n) {
    return n;
  }
  function $p(e, n) {
    if (Fe) {
      var i = rt.formState;
      if (i !== null) {
        e: {
          var o = Le;
          if (Fe) {
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
      lastRenderedReducer: Vp,
      lastRenderedState: n
    }, i.queue = o, i = dm.bind(
      null,
      Le,
      o
    ), o.dispatch = i, o = Gc(!1), b = Qc.bind(
      null,
      Le,
      !1,
      o.queue
    ), o = tn(), d = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = Kb.bind(
      null,
      Le,
      d,
      b,
      i
    ), d.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Yp(e) {
    var n = wt();
    return Fp(n, Je, e);
  }
  function Fp(e, n, i) {
    if (n = qc(
      e,
      n,
      Vp
    )[0], e = Ho(dr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ds(n);
      } catch (T) {
        throw T === is ? zo : T;
      }
    else o = n;
    n = wt();
    var d = n.queue, b = d.dispatch;
    return i !== n.memoizedState && (Le.flags |= 2048, ci(
      9,
      qo(),
      Jb.bind(null, d, i),
      null
    )), [o, b, e];
  }
  function Jb(e, n) {
    e.action = n;
  }
  function Xp(e) {
    var n = wt(), i = Je;
    if (i !== null)
      return Fp(n, i, e);
    wt(), n = n.memoizedState, i = wt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function ci(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = Le.updateQueue, n === null && (n = Uc(), Le.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function qo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qp() {
    return wt().memoizedState;
  }
  function Zo(e, n, i, o) {
    var d = tn();
    o = o === void 0 ? null : o, Le.flags |= e, d.memoizedState = ci(
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
    Je !== null && o !== null && zc(o, Je.memoizedState.deps) ? d.memoizedState = ci(n, b, i, o) : (Le.flags |= e, d.memoizedState = ci(
      1 | n,
      b,
      i,
      o
    ));
  }
  function Kp(e, n) {
    Zo(8390656, 8, e, n);
  }
  function Jp(e, n) {
    fs(2048, 8, e, n);
  }
  function Wp(e, n) {
    return fs(4, 2, e, n);
  }
  function em(e, n) {
    return fs(4, 4, e, n);
  }
  function tm(e, n) {
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
  function nm(e, n, i) {
    i = i != null ? i.concat([e]) : null, fs(4, 4, tm.bind(null, n, e), i);
  }
  function $c() {
  }
  function rm(e, n) {
    var i = wt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && zc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function am(e, n) {
    var i = wt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && zc(n, o[1]))
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
  function Yc(e, n, i) {
    return i === void 0 || (Dr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = og(), Le.lanes |= e, Hr |= e, i);
  }
  function im(e, n, i, o) {
    return hn(i, n) ? i : oi.current !== null ? (e = Yc(e, i, o), hn(e, n) || (Rt = !0), e) : (Dr & 42) === 0 ? (Rt = !0, e.memoizedState = i) : (e = og(), Le.lanes |= e, Hr |= e, n);
  }
  function sm(e, n, i, o, d) {
    var b = U.p;
    U.p = b !== 0 && 8 > b ? b : 8;
    var T = O.T, D = {};
    O.T = D, Qc(e, !1, n, i);
    try {
      var H = d(), K = O.S;
      if (K !== null && K(D, H), H !== null && typeof H == "object" && typeof H.then == "function") {
        var oe = Fb(
          H,
          o
        );
        hs(
          e,
          n,
          oe,
          yn(e)
        );
      } else
        hs(
          e,
          n,
          o,
          yn(e)
        );
    } catch (de) {
      hs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: de },
        yn()
      );
    } finally {
      U.p = b, O.T = T;
    }
  }
  function Wb() {
  }
  function Fc(e, n, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = om(e).queue;
    sm(
      e,
      d,
      n,
      J,
      i === null ? Wb : function() {
        return um(e), i(o);
      }
    );
  }
  function om(e) {
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
  function um(e) {
    var n = om(e).next.queue;
    hs(e, n, {}, yn());
  }
  function Xc() {
    return qt(Ms);
  }
  function lm() {
    return wt().memoizedState;
  }
  function cm() {
    return wt().memoizedState;
  }
  function e1(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = yn();
          e = Rr(i);
          var o = jr(n, e, i);
          o !== null && (_n(o, n, i), os(o, n, i)), n = { cache: kc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function t1(e, n, i) {
    var o = yn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e) ? fm(n, i) : (i = mc(e, n, i, o), i !== null && (_n(i, e, o), hm(i, n, o)));
  }
  function dm(e, n, i) {
    var o = yn();
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
    if (Go(e)) fm(n, d);
    else {
      var b = e.alternate;
      if (e.lanes === 0 && (b === null || b.lanes === 0) && (b = n.lastRenderedReducer, b !== null))
        try {
          var T = n.lastRenderedState, D = b(T, i);
          if (d.hasEagerState = !0, d.eagerState = D, hn(D, T))
            return xo(e, n, d, 0), rt === null && Ao(), !1;
        } catch {
        } finally {
        }
      if (i = mc(e, n, d, o), i !== null)
        return _n(i, e, o), hm(i, n, o), !0;
    }
    return !1;
  }
  function Qc(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Td(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e)) {
      if (n) throw Error(a(479));
    } else
      n = mc(
        e,
        i,
        o,
        2
      ), n !== null && _n(n, e, 2);
  }
  function Go(e) {
    var n = e.alternate;
    return e === Le || n !== null && n === Le;
  }
  function fm(e, n) {
    ui = Io = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function hm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Sh(e, i);
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
  }, pm = {
    readContext: qt,
    use: Uo,
    useCallback: function(e, n) {
      return tn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: qt,
    useEffect: Kp,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, Zo(
        4194308,
        4,
        tm.bind(null, n, e),
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
      }, o.queue = e, e = e.dispatch = t1.bind(
        null,
        Le,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = tn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Gc(e);
      var n = e.queue, i = dm.bind(null, Le, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: $c,
    useDeferredValue: function(e, n) {
      var i = tn();
      return Yc(i, e, n);
    },
    useTransition: function() {
      var e = Gc(!1);
      return e = sm.bind(
        null,
        Le,
        e.queue,
        !0,
        !1
      ), tn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = Le, d = tn();
      if (Fe) {
        if (i === void 0)
          throw Error(a(407));
        i = i();
      } else {
        if (i = n(), rt === null)
          throw Error(a(349));
        (Ge & 124) !== 0 || zp(o, n, i);
      }
      d.memoizedState = i;
      var b = { value: i, getSnapshot: n };
      return d.queue = b, Kp(Pp.bind(null, o, b, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        qo(),
        Lp.bind(
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
      if (Fe) {
        var i = ur, o = or;
        i = (o & ~(1 << 32 - Vt(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Bo++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Xb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Xc,
    useFormState: $p,
    useActionState: $p,
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
      return n.queue = i, n = Qc.bind(
        null,
        Le,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Hc,
    useCacheRefresh: function() {
      return tn().memoizedState = e1.bind(
        null,
        Le
      );
    }
  }, mm = {
    readContext: qt,
    use: Uo,
    useCallback: rm,
    useContext: qt,
    useEffect: Jp,
    useImperativeHandle: nm,
    useInsertionEffect: Wp,
    useLayoutEffect: em,
    useMemo: am,
    useReducer: Ho,
    useRef: Qp,
    useState: function() {
      return Ho(dr);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, n) {
      var i = wt();
      return im(
        i,
        Je.memoizedState,
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
    useSyncExternalStore: Dp,
    useId: lm,
    useHostTransitionStatus: Xc,
    useFormState: Yp,
    useActionState: Yp,
    useOptimistic: function(e, n) {
      var i = wt();
      return Up(i, Je, e, n);
    },
    useMemoCache: Hc,
    useCacheRefresh: cm
  }, n1 = {
    readContext: qt,
    use: Uo,
    useCallback: rm,
    useContext: qt,
    useEffect: Jp,
    useImperativeHandle: nm,
    useInsertionEffect: Wp,
    useLayoutEffect: em,
    useMemo: am,
    useReducer: Zc,
    useRef: Qp,
    useState: function() {
      return Zc(dr);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, n) {
      var i = wt();
      return Je === null ? Yc(i, e, n) : im(
        i,
        Je.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Zc(dr)[0], n = wt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Dp,
    useId: lm,
    useHostTransitionStatus: Xc,
    useFormState: Xp,
    useActionState: Xp,
    useOptimistic: function(e, n) {
      var i = wt();
      return Je !== null ? Up(i, Je, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Hc,
    useCacheRefresh: cm
  }, di = null, ps = 0;
  function $o(e) {
    var n = ps;
    return ps += 1, di === null && (di = []), Ap(di, e, n);
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
  function gm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function vm(e) {
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
      return Z === null || Z.tag !== 6 ? (Z = vc(X, V.mode, ue), Z.return = V, Z) : (Z = d(Z, X), Z.return = V, Z);
    }
    function H(V, Z, X, ue) {
      var ge = X.type;
      return ge === h ? oe(
        V,
        Z,
        X.props.children,
        ue,
        X.key
      ) : Z !== null && (Z.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === M && gm(ge) === Z.type) ? (Z = d(Z, X.props), ms(Z, X), Z.return = V, Z) : (Z = No(
        X.type,
        X.key,
        X.props,
        null,
        V.mode,
        ue
      ), ms(Z, X), Z.return = V, Z);
    }
    function K(V, Z, X, ue) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== X.containerInfo || Z.stateNode.implementation !== X.implementation ? (Z = yc(X, V.mode, ue), Z.return = V, Z) : (Z = d(Z, X.children || []), Z.return = V, Z);
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
        return Z = vc(
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
            return Z = yc(
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
        if (Z.$$typeof === P)
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
            return X.key === ge ? K(V, Z, X, ue) : null;
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
        if (X.$$typeof === P)
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
            ) || null, K(Z, V, ue, ge);
          case M:
            var Pe = ue._init;
            return ue = Pe(ue._payload), ne(
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
        if (ue.$$typeof === P)
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
    function ke(V, Z, X, ue) {
      for (var ge = null, Pe = null, _e = Z, Ce = Z = 0, Dt = null; _e !== null && Ce < X.length; Ce++) {
        _e.index > Ce ? (Dt = _e, _e = null) : Dt = _e.sibling;
        var $e = ee(
          V,
          _e,
          X[Ce],
          ue
        );
        if ($e === null) {
          _e === null && (_e = Dt);
          break;
        }
        e && _e && $e.alternate === null && n(V, _e), Z = b($e, Z, Ce), Pe === null ? ge = $e : Pe.sibling = $e, Pe = $e, _e = Dt;
      }
      if (Ce === X.length)
        return i(V, _e), Fe && ma(V, Ce), ge;
      if (_e === null) {
        for (; Ce < X.length; Ce++)
          _e = de(V, X[Ce], ue), _e !== null && (Z = b(
            _e,
            Z,
            Ce
          ), Pe === null ? ge = _e : Pe.sibling = _e, Pe = _e);
        return Fe && ma(V, Ce), ge;
      }
      for (_e = o(_e); Ce < X.length; Ce++)
        Dt = ne(
          _e,
          V,
          Ce,
          X[Ce],
          ue
        ), Dt !== null && (e && Dt.alternate !== null && _e.delete(
          Dt.key === null ? Ce : Dt.key
        ), Z = b(
          Dt,
          Z,
          Ce
        ), Pe === null ? ge = Dt : Pe.sibling = Dt, Pe = Dt);
      return e && _e.forEach(function(Qr) {
        return n(V, Qr);
      }), Fe && ma(V, Ce), ge;
    }
    function Ee(V, Z, X, ue) {
      if (X == null) throw Error(a(151));
      for (var ge = null, Pe = null, _e = Z, Ce = Z = 0, Dt = null, $e = X.next(); _e !== null && !$e.done; Ce++, $e = X.next()) {
        _e.index > Ce ? (Dt = _e, _e = null) : Dt = _e.sibling;
        var Qr = ee(V, _e, $e.value, ue);
        if (Qr === null) {
          _e === null && (_e = Dt);
          break;
        }
        e && _e && Qr.alternate === null && n(V, _e), Z = b(Qr, Z, Ce), Pe === null ? ge = Qr : Pe.sibling = Qr, Pe = Qr, _e = Dt;
      }
      if ($e.done)
        return i(V, _e), Fe && ma(V, Ce), ge;
      if (_e === null) {
        for (; !$e.done; Ce++, $e = X.next())
          $e = de(V, $e.value, ue), $e !== null && (Z = b($e, Z, Ce), Pe === null ? ge = $e : Pe.sibling = $e, Pe = $e);
        return Fe && ma(V, Ce), ge;
      }
      for (_e = o(_e); !$e.done; Ce++, $e = X.next())
        $e = ne(_e, V, Ce, $e.value, ue), $e !== null && (e && $e.alternate !== null && _e.delete($e.key === null ? Ce : $e.key), Z = b($e, Z, Ce), Pe === null ? ge = $e : Pe.sibling = $e, Pe = $e);
      return e && _e.forEach(function(r2) {
        return n(V, r2);
      }), Fe && ma(V, Ce), ge;
    }
    function et(V, Z, X, ue) {
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
                  } else if (Z.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === M && gm(ge) === Z.type) {
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
              ue = yc(X, V.mode, ue), ue.return = V, V = ue;
            }
            return T(V);
          case M:
            return ge = X._init, X = ge(X._payload), et(
              V,
              Z,
              X,
              ue
            );
        }
        if (W(X))
          return ke(
            V,
            Z,
            X,
            ue
          );
        if (q(X)) {
          if (ge = q(X), typeof ge != "function") throw Error(a(150));
          return X = ge.call(X), Ee(
            V,
            Z,
            X,
            ue
          );
        }
        if (typeof X.then == "function")
          return et(
            V,
            Z,
            $o(X),
            ue
          );
        if (X.$$typeof === P)
          return et(
            V,
            Z,
            jo(V, X),
            ue
          );
        Yo(V, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, Z !== null && Z.tag === 6 ? (i(V, Z.sibling), ue = d(Z, X), ue.return = V, V = ue) : (i(V, Z), ue = vc(X, V.mode, ue), ue.return = V, V = ue), T(V)) : i(V, Z);
    }
    return function(V, Z, X, ue) {
      try {
        ps = 0;
        var ge = et(
          V,
          Z,
          X,
          ue
        );
        return di = null, ge;
      } catch (_e) {
        if (_e === is || _e === zo) throw _e;
        var Pe = pn(29, _e, null, V.mode);
        return Pe.lanes = ue, Pe.return = V, Pe;
      } finally {
      }
    };
  }
  var fi = vm(!0), ym = vm(!1), Rn = Y(null), Fn = null;
  function zr(e) {
    var n = e.alternate;
    G(xt, xt.current & 1), G(Rn, e), Fn === null && (n === null || oi.current !== null || n.memoizedState !== null) && (Fn = e);
  }
  function _m(e) {
    if (e.tag === 22) {
      if (G(xt, xt.current), G(Rn, e), Fn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Fn = e);
      }
    } else Lr();
  }
  function Lr() {
    G(xt, xt.current), G(Rn, Rn.current);
  }
  function fr(e) {
    ce(Rn), Fn === e && (Fn = null), ce(xt);
  }
  var xt = Y(0);
  function Fo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Ud(i)))
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
  function Kc(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : v({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Jc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = yn(), d = Rr(o);
      d.payload = n, i != null && (d.callback = i), n = jr(e, d, o), n !== null && (_n(n, e, o), os(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = yn(), d = Rr(o);
      d.tag = 1, d.payload = n, i != null && (d.callback = i), n = jr(e, d, o), n !== null && (_n(n, e, o), os(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = yn(), o = Rr(i);
      o.tag = 2, n != null && (o.callback = n), n = jr(e, o, i), n !== null && (_n(n, e, i), os(n, e, i));
    }
  };
  function bm(e, n, i, o, d, b, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, b, T) : n.prototype && n.prototype.isPureReactComponent ? !Ki(i, o) || !Ki(d, b) : !0;
  }
  function Sm(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Jc.enqueueReplaceState(n, n.state, null);
  }
  function wa(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    }
    if (e = e.defaultProps) {
      i === n && (i = v({}, i));
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
  function wm(e) {
    Xo(e);
  }
  function Em(e) {
    console.error(e);
  }
  function Cm(e) {
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
  function km(e, n, i) {
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
  function Wc(e, n, i) {
    return i = Rr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Qo(e, n);
    }, i;
  }
  function Am(e) {
    return e = Rr(e), e.tag = 3, e;
  }
  function xm(e, n, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var b = o.value;
      e.payload = function() {
        return d(b);
      }, e.callback = function() {
        km(n, i, o);
      };
    }
    var T = i.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      km(n, i, o), typeof d != "function" && (qr === null ? qr = /* @__PURE__ */ new Set([this]) : qr.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function r1(e, n, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && ns(
        n,
        i,
        d,
        !0
      ), i = Rn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Fn === null ? Ed() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === Tc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), kd(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === Tc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), kd(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return kd(e, o, d), Ed(), !1;
    }
    if (Fe)
      return n = Rn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = d, o !== Sc && (e = Error(a(422), { cause: o }), ts(Tn(e, i)))) : (o !== Sc && (n = Error(a(423), {
        cause: o
      }), ts(
        Tn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Tn(o, i), d = Wc(
        e.stateNode,
        o,
        d
      ), Mc(e, d), ht !== 4 && (ht = 2)), !1;
    var b = Error(a(520), { cause: o });
    if (b = Tn(b, i), ws === null ? ws = [b] : ws.push(b), ht !== 4 && (ht = 2), n === null) return !0;
    o = Tn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = Wc(i.stateNode, o, e), Mc(i, e), !1;
        case 1:
          if (n = i.type, b = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (qr === null || !qr.has(b))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = Am(d), xm(
              d,
              e,
              i,
              o
            ), Mc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Tm = Error(a(461)), Rt = !1;
  function zt(e, n, i, o) {
    n.child = e === null ? ym(n, null, i, o) : fi(
      n,
      e.child,
      i,
      o
    );
  }
  function Nm(e, n, i, o, d) {
    i = i.render;
    var b = n.ref;
    if ("ref" in o) {
      var T = {};
      for (var D in o)
        D !== "ref" && (T[D] = o[D]);
    } else T = o;
    return _a(n), o = Lc(
      e,
      n,
      i,
      T,
      b,
      d
    ), D = Pc(), e !== null && !Rt ? (Ic(e, n, d), hr(e, n, d)) : (Fe && D && _c(n), n.flags |= 1, zt(e, n, o, d), n.child);
  }
  function Om(e, n, i, o, d) {
    if (e === null) {
      var b = i.type;
      return typeof b == "function" && !gc(b) && b.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = b, Mm(
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
    if (b = e.child, !od(e, d)) {
      var T = b.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ki, i(T, o) && e.ref === n.ref)
        return hr(e, n, d);
    }
    return n.flags |= 1, e = sr(b, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Mm(e, n, i, o, d) {
    if (e !== null) {
      var b = e.memoizedProps;
      if (Ki(b, o) && e.ref === n.ref)
        if (Rt = !1, n.pendingProps = o = b, od(e, d))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else
          return n.lanes = e.lanes, hr(e, n, d);
    }
    return ed(
      e,
      n,
      i,
      o,
      d
    );
  }
  function Rm(e, n, i) {
    var o = n.pendingProps, d = o.children, b = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = b !== null ? b.baseLanes | i : i, e !== null) {
          for (d = n.child = e.child, b = 0; d !== null; )
            b = b | d.lanes | d.childLanes, d = d.sibling;
          n.childLanes = b & ~o;
        } else n.childLanes = 0, n.child = null;
        return jm(
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
        ), b !== null ? Mp(n, b) : jc(), _m(n);
      else
        return n.lanes = n.childLanes = 536870912, jm(
          e,
          n,
          b !== null ? b.baseLanes | i : i,
          i
        );
    } else
      b !== null ? (Do(n, b.cachePool), Mp(n, b), Lr(), n.memoizedState = null) : (e !== null && Do(n, null), jc(), Lr());
    return zt(e, n, d, i), n.child;
  }
  function jm(e, n, i, o) {
    var d = xc();
    return d = d === null ? null : { parent: At._currentValue, pool: d }, n.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && Do(n, null), jc(), _m(n), e !== null && ns(e, n, o, !0), null;
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
  function ed(e, n, i, o, d) {
    return _a(n), i = Lc(
      e,
      n,
      i,
      o,
      void 0,
      d
    ), o = Pc(), e !== null && !Rt ? (Ic(e, n, d), hr(e, n, d)) : (Fe && o && _c(n), n.flags |= 1, zt(e, n, i, d), n.child);
  }
  function Dm(e, n, i, o, d, b) {
    return _a(n), n.updateQueue = null, i = jp(
      n,
      o,
      i,
      d
    ), Rp(e), o = Pc(), e !== null && !Rt ? (Ic(e, n, b), hr(e, n, b)) : (Fe && o && _c(n), n.flags |= 1, zt(e, n, i, b), n.child);
  }
  function zm(e, n, i, o, d) {
    if (_a(n), n.stateNode === null) {
      var b = ni, T = i.contextType;
      typeof T == "object" && T !== null && (b = qt(T)), b = new i(o, b), n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, b.updater = Jc, n.stateNode = b, b._reactInternals = n, b = n.stateNode, b.props = o, b.state = n.memoizedState, b.refs = {}, Nc(n), T = i.contextType, b.context = typeof T == "object" && T !== null ? qt(T) : ni, b.state = n.memoizedState, T = i.getDerivedStateFromProps, typeof T == "function" && (Kc(
        n,
        i,
        T,
        o
      ), b.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function" || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (T = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), T !== b.state && Jc.enqueueReplaceState(b, b.state, null), ls(n, o, b, d), us(), b.state = n.memoizedState), typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      b = n.stateNode;
      var D = n.memoizedProps, H = wa(i, D);
      b.props = H;
      var K = b.context, oe = i.contextType;
      T = ni, typeof oe == "object" && oe !== null && (T = qt(oe));
      var de = i.getDerivedStateFromProps;
      oe = typeof de == "function" || typeof b.getSnapshotBeforeUpdate == "function", D = n.pendingProps !== D, oe || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (D || K !== T) && Sm(
        n,
        b,
        o,
        T
      ), Mr = !1;
      var ee = n.memoizedState;
      b.state = ee, ls(n, o, b, d), us(), K = n.memoizedState, D || ee !== K || Mr ? (typeof de == "function" && (Kc(
        n,
        i,
        de,
        o
      ), K = n.memoizedState), (H = Mr || bm(
        n,
        i,
        H,
        o,
        ee,
        K,
        T
      )) ? (oe || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = K), b.props = o, b.state = K, b.context = T, o = H) : (typeof b.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      b = n.stateNode, Oc(e, n), T = n.memoizedProps, oe = wa(i, T), b.props = oe, de = n.pendingProps, ee = b.context, K = i.contextType, H = ni, typeof K == "object" && K !== null && (H = qt(K)), D = i.getDerivedStateFromProps, (K = typeof D == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (T !== de || ee !== H) && Sm(
        n,
        b,
        o,
        H
      ), Mr = !1, ee = n.memoizedState, b.state = ee, ls(n, o, b, d), us();
      var ne = n.memoizedState;
      T !== de || ee !== ne || Mr || e !== null && e.dependencies !== null && Ro(e.dependencies) ? (typeof D == "function" && (Kc(
        n,
        i,
        D,
        o
      ), ne = n.memoizedState), (oe = Mr || bm(
        n,
        i,
        oe,
        o,
        ee,
        ne,
        H
      ) || e !== null && e.dependencies !== null && Ro(e.dependencies)) ? (K || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(o, ne, H), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(
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
  function Lm(e, n, i, o) {
    return es(), n.flags |= 256, zt(e, n, i, o), n.child;
  }
  var td = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function nd(e) {
    return { baseLanes: e, cachePool: Ep() };
  }
  function rd(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= jn), e;
  }
  function Pm(e, n, i) {
    var o = n.pendingProps, d = !1, b = (n.flags & 128) !== 0, T;
    if ((T = b) || (T = e !== null && e.memoizedState === null ? !1 : (xt.current & 2) !== 0), T && (d = !0, n.flags &= -129), T = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Fe) {
        if (d ? zr(n) : Lr(), Fe) {
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
            }, H = pn(
              18,
              null,
              null,
              0
            ), H.stateNode = D, H.return = n, n.child = H, Yt = n, ft = null, H = !0) : H = !1;
          }
          H || va(n);
        }
        if (D = n.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Ud(D) ? n.lanes = 32 : n.lanes = 536870912, null;
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
      ), D.return = n, o.return = n, D.sibling = o, n.child = D, d = n.child, d.memoizedState = nd(i), d.childLanes = rd(
        e,
        T,
        i
      ), n.memoizedState = td, o) : (zr(n), ad(n, D));
    }
    if (H = e.memoizedState, H !== null && (D = H.dehydrated, D !== null)) {
      if (b)
        n.flags & 256 ? (zr(n), n.flags &= -257, n = id(
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
        ), o = n.child, o.memoizedState = nd(i), o.childLanes = rd(
          e,
          T,
          i
        ), n.memoizedState = td, n = d);
      else if (zr(n), Ud(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var K = T.dgst;
        T = K, o = Error(a(419)), o.stack = "", o.digest = T, ts({ value: o, source: null, stack: null }), n = id(
          e,
          n,
          i
        );
      } else if (Rt || ns(e, n, i, !1), T = (i & e.childLanes) !== 0, Rt || T) {
        if (T = rt, T !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Hl(o), o = (o & (T.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== H.retryLane))
          throw H.retryLane = o, ti(e, o), _n(T, e, o), Tm;
        D.data === "$?" || Ed(), n = id(
          e,
          n,
          i
        );
      } else
        D.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = H.treeContext, ft = Bn(
          D.nextSibling
        ), Yt = n, Fe = !0, ga = null, Yn = !1, e !== null && (On[Mn++] = or, On[Mn++] = ur, On[Mn++] = pa, or = e.id, ur = e.overflow, pa = n), n = ad(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return d ? (Lr(), d = o.fallback, D = n.mode, H = e.child, K = H.sibling, o = sr(H, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = H.subtreeFlags & 65011712, K !== null ? d = sr(K, d) : (d = ha(
      d,
      D,
      i,
      null
    ), d.flags |= 2), d.return = n, o.return = n, o.sibling = d, n.child = o, o = d, d = n.child, D = e.child.memoizedState, D === null ? D = nd(i) : (H = D.cachePool, H !== null ? (K = At._currentValue, H = H.parent !== K ? { parent: K, pool: K } : H) : H = Ep(), D = {
      baseLanes: D.baseLanes | i,
      cachePool: H
    }), d.memoizedState = D, d.childLanes = rd(
      e,
      T,
      i
    ), n.memoizedState = td, o) : (zr(n), i = e.child, e = i.sibling, i = sr(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (T = n.deletions, T === null ? (n.deletions = [e], n.flags |= 16) : T.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function ad(e, n) {
    return n = Jo(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Jo(e, n) {
    return e = pn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function id(e, n, i) {
    return fi(n, e.child, null, i), e = ad(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Im(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Ec(e.return, n, i);
  }
  function sd(e, n, i, o, d) {
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
  function Bm(e, n, i) {
    var o = n.pendingProps, d = o.revealOrder, b = o.tail;
    if (zt(e, n, o.children, i), o = xt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Im(e, i, n);
          else if (e.tag === 19)
            Im(e, i, n);
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
        i = d, i === null ? (d = n.child, n.child = null) : (d = i.sibling, i.sibling = null), sd(
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
        sd(
          n,
          !0,
          i,
          null,
          b
        );
        break;
      case "together":
        sd(n, !1, null, null, void 0);
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
  function od(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ro(e)));
  }
  function a1(e, n, i) {
    switch (n.tag) {
      case 3:
        re(n, n.stateNode.containerInfo), Or(n, At, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        je(n);
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
          return o.dehydrated !== null ? (zr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Pm(e, n, i) : (zr(n), e = hr(
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
            return Bm(
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
        return n.lanes = 0, Rm(e, n, i);
      case 24:
        Or(n, At, e.memoizedState.cache);
    }
    return hr(e, n, i);
  }
  function Um(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Rt = !0;
      else {
        if (!od(e, i) && (n.flags & 128) === 0)
          return Rt = !1, a1(
            e,
            n,
            i
          );
        Rt = (e.flags & 131072) !== 0;
      }
    else
      Rt = !1, Fe && (n.flags & 1048576) !== 0 && gp(n, Mo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, d = o._init;
          if (o = d(o._payload), n.type = o, typeof o == "function")
            gc(o) ? (e = wa(o, e), n.tag = 1, n = zm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = ed(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === c) {
                n.tag = 11, n = Nm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === k) {
                n.tag = 14, n = Om(
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
        return ed(
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
        ), zm(
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
          d = b.element, Oc(e, n), ls(n, o, null, i);
          var T = n.memoizedState;
          if (o = T.cache, Or(n, At, o), o !== b.cache && Cc(
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
              n = Lm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = Tn(
                Error(a(424)),
                n
              ), ts(d), n = Lm(
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
              for (ft = Bn(e.firstChild), Yt = n, Fe = !0, ga = null, Yn = !0, i = ym(
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
        return Ko(e, n), e === null ? (i = Gg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : Fe || (i = n.type, e = n.pendingProps, o = fu(
          Q.current
        ).createElement(i), o[Ht] = n, o[Wt] = e, Pt(o, i, e), Mt(o), n.stateNode = o) : n.memoizedState = Gg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return je(n), e === null && Fe && (o = n.stateNode = Hg(
          n.type,
          n.pendingProps,
          Q.current
        ), Yt = n, Yn = !0, d = ft, Vr(n.type) ? (Hd = d, ft = Bn(
          o.firstChild
        )) : ft = d), zt(
          e,
          n,
          n.pendingProps.children,
          i
        ), Ko(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Fe && ((d = o = ft) && (o = R1(
          o,
          n.type,
          n.pendingProps,
          Yn
        ), o !== null ? (n.stateNode = o, Yt = n, ft = Bn(
          o.firstChild
        ), Yn = !1, d = !0) : d = !1), d || va(n)), je(n), d = n.type, b = n.pendingProps, T = e !== null ? e.memoizedProps : null, o = b.children, Pd(d, b) ? o = null : T !== null && Pd(d, T) && (n.flags |= 32), n.memoizedState !== null && (d = Lc(
          e,
          n,
          Qb,
          null,
          null,
          i
        ), Ms._currentValue = d), Ko(e, n), zt(e, n, o, i), n.child;
      case 6:
        return e === null && Fe && ((e = i = ft) && (i = j1(
          i,
          n.pendingProps,
          Yn
        ), i !== null ? (n.stateNode = i, Yt = n, ft = null, e = !0) : e = !1), e || va(n)), null;
      case 13:
        return Pm(e, n, i);
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
        return Nm(
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
        return Om(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Mm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Bm(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Jo(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = sr(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Rm(e, n, i);
      case 24:
        return _a(n), o = qt(At), e === null ? (d = xc(), d === null && (d = rt, b = kc(), d.pooledCache = b, b.refCount++, b !== null && (d.pooledCacheLanes |= i), d = b), n.memoizedState = {
          parent: o,
          cache: d
        }, Nc(n), Or(n, At, d)) : ((e.lanes & i) !== 0 && (Oc(e, n), ls(n, null, null, i), us()), d = e.memoizedState, b = n.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, n.memoizedState = d, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = d), Or(n, At, o)) : (o = b.cache, Or(n, At, o), o !== d.cache && Cc(
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
  function Hm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Xg(n)) {
      if (n = Rn.current, n !== null && ((Ge & 4194048) === Ge ? Fn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || n !== Fn))
        throw ss = Tc, Cp;
      e.flags |= 8192;
    }
  }
  function Wo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? _h() : 536870912, e.lanes |= n, gi |= n);
  }
  function gs(e, n) {
    if (!Fe)
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
  function i1(e, n, i) {
    var o = n.pendingProps;
    switch (bc(n), n.tag) {
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
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), cr(At), pe(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? pr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, _p())), lt(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (pr(n), i !== null ? (lt(n), Hm(n, i)) : (lt(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (pr(n), lt(n), Hm(n, i)) : (lt(n), n.flags &= -16777217) : (e.memoizedProps !== o && pr(n), lt(n), n.flags &= -16777217), null;
      case 27:
        He(n), i = Q.current;
        var d = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && pr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return lt(n), null;
          }
          e = I.current, Wi(n) ? vp(n) : (e = Hg(d, o, i), n.stateNode = e, pr(n));
        }
        return lt(n), null;
      case 5:
        if (He(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && pr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(a(166));
            return lt(n), null;
          }
          if (e = I.current, Wi(n))
            vp(n);
          else {
            switch (d = fu(
              Q.current
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
          if (e = Q.current, Wi(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, d = Yt, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Ht] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Dg(e.nodeValue, i)), e || va(n);
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
            d = _p(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
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
        return pe(), e === null && Rd(n.stateNode.containerInfo), lt(n), null;
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
                    mp(i, e), i = i.sibling;
                  return G(
                    xt,
                    xt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Ye() > nu && (n.flags |= 128, o = !0, gs(d, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Fo(b), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Wo(n, e), gs(d, !0), d.tail === null && d.tailMode === "hidden" && !b.alternate && !Fe)
                return lt(n), null;
            } else
              2 * Ye() - d.renderingStartTime > nu && i !== 536870912 && (n.flags |= 128, o = !0, gs(d, !1), n.lanes = 4194304);
          d.isBackwards ? (b.sibling = n.child, n.child = b) : (e = d.last, e !== null ? e.sibling = b : n.child = b, d.last = b);
        }
        return d.tail !== null ? (n = d.tail, d.rendering = n, d.tail = n.sibling, d.renderingStartTime = Ye(), n.sibling = null, e = xt.current, G(xt, o ? e & 1 | 2 : e & 1), n) : (lt(n), null);
      case 22:
      case 23:
        return fr(n), Dc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), i = n.updateQueue, i !== null && Wo(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ce(ba), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), cr(At), lt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function s1(e, n) {
    switch (bc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return cr(At), pe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return He(n), null;
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
        return fr(n), Dc(), e !== null && ce(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return cr(At), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qm(e, n) {
    switch (bc(n), n.tag) {
      case 3:
        cr(At), pe();
        break;
      case 26:
      case 27:
      case 5:
        He(n);
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
        fr(n), Dc(), e !== null && ce(ba);
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
              var H = i, K = D;
              try {
                K();
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
  function Zm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Op(n, i);
      } catch (o) {
        tt(e, e.return, o);
      }
    }
  }
  function Gm(e, n, i) {
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
  function Vm(e) {
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
  function ud(e, n, i) {
    try {
      var o = e.stateNode;
      x1(o, e.type, i, n), o[Wt] = n;
    } catch (d) {
      tt(e, e.return, d);
    }
  }
  function $m(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vr(e.type) || e.tag === 4;
  }
  function ld(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $m(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Vr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cd(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = du));
    else if (o !== 4 && (o === 27 && Vr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (cd(e, n, i), e = e.sibling; e !== null; )
        cd(e, n, i), e = e.sibling;
  }
  function eu(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Vr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (eu(e, n, i), e = e.sibling; e !== null; )
        eu(e, n, i), e = e.sibling;
  }
  function Ym(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = n.attributes; d.length; )
        n.removeAttributeNode(d[0]);
      Pt(n, o, i), n[Ht] = e, n[Wt] = i;
    } catch (b) {
      tt(e, e.return, b);
    }
  }
  var mr = !1, vt = !1, dd = !1, Fm = typeof WeakSet == "function" ? WeakSet : Set, jt = null;
  function o1(e, n) {
    if (e = e.containerInfo, zd = yu, e = ip(e), lc(e)) {
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
            var T = 0, D = -1, H = -1, K = 0, oe = 0, de = e, ee = null;
            t: for (; ; ) {
              for (var ne; de !== i || d !== 0 && de.nodeType !== 3 || (D = T + d), de !== b || o !== 0 && de.nodeType !== 3 || (H = T + o), de.nodeType === 3 && (T += de.nodeValue.length), (ne = de.firstChild) !== null; )
                ee = de, de = ne;
              for (; ; ) {
                if (de === e) break t;
                if (ee === i && ++K === d && (D = T), ee === b && ++oe === o && (H = T), (ne = de.nextSibling) !== null) break;
                de = ee, ee = de.parentNode;
              }
              de = ne;
            }
            i = D === -1 || H === -1 ? null : { start: D, end: H };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Ld = { focusedElem: e, selectionRange: i }, yu = !1, jt = n; jt !== null; )
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
                  var ke = wa(
                    i.type,
                    d,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    ke,
                    b
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ee) {
                  tt(
                    i,
                    i.return,
                    Ee
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Bd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bd(e);
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
  function Xm(e, n, i) {
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
        o & 64 && Zm(i), o & 512 && ys(i, i.return);
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
            Op(e, n);
          } catch (T) {
            tt(i, i.return, T);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Ym(i);
      case 26:
      case 5:
        Ir(e, i), n === null && o & 4 && Vm(i), o & 512 && ys(i, i.return);
        break;
      case 12:
        Ir(e, i);
        break;
      case 13:
        Ir(e, i), o & 4 && Jm(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = g1.bind(
          null,
          i
        ), D1(e, i))));
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
  function Qm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Qm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Gl(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, nn = !1;
  function gr(e, n, i) {
    for (i = i.child; i !== null; )
      Km(e, n, i), i = i.sibling;
  }
  function Km(e, n, i) {
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
        st !== null && (nn ? (e = st, Bg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), zs(e)) : Bg(st, i.stateNode));
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
        vt || (Xn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Gm(
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
  function Jm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (i) {
        tt(n, n.return, i);
      }
  }
  function u1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Fm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Fm()), n;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function fd(e, n) {
    var i = u1(e);
    n.forEach(function(o) {
      var d = v1.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function mn(e, n) {
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
        Km(b, T, d), st = null, nn = !1, b = d.alternate, b !== null && (b.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Wm(n, e), n = n.sibling;
  }
  var In = null;
  function Wm(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mn(n, e), gn(e), o & 4 && (Pr(3, e, e.return), vs(3, e), Pr(5, e, e.return));
        break;
      case 1:
        mn(n, e), gn(e), o & 512 && (vt || i === null || Xn(i, i.return)), o & 64 && mr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = In;
        if (mn(n, e), gn(e), o & 512 && (vt || i === null || Xn(i, i.return)), o & 4) {
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
                      var T = Yg(
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
                      if (T = Yg(
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
                Fg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = $g(
                d,
                o,
                e.memoizedProps
              );
          else
            b !== o ? (b === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : b.count--, o === null ? Fg(
              d,
              e.type,
              e.stateNode
            ) : $g(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && ud(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        mn(n, e), gn(e), o & 512 && (vt || i === null || Xn(i, i.return)), i !== null && o & 4 && ud(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (mn(n, e), gn(e), o & 512 && (vt || i === null || Xn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Fa(d, "");
          } catch (ne) {
            tt(e, e.return, ne);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, ud(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (dd = !0);
        break;
      case 6:
        if (mn(n, e), gn(e), o & 4) {
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
        if (mu = null, d = In, In = hu(n.containerInfo), mn(n, e), In = d, gn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (ne) {
            tt(e, e.return, ne);
          }
        dd && (dd = !1, eg(e));
        break;
      case 4:
        o = In, In = hu(
          e.stateNode.containerInfo
        ), mn(n, e), gn(e), In = o;
        break;
      case 12:
        mn(n, e), gn(e);
        break;
      case 13:
        mn(n, e), gn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (yd = Ye()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, fd(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var H = i !== null && i.memoizedState !== null, K = mr, oe = vt;
        if (mr = K || d, vt = oe || H, mn(n, e), vt = oe, mr = K, gn(e), o & 8192)
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
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, fd(e, i))));
        break;
      case 19:
        mn(n, e), gn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, fd(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        mn(n, e), gn(e);
    }
  }
  function gn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if ($m(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, b = ld(e);
            eu(e, b, d);
            break;
          case 5:
            var T = i.stateNode;
            i.flags & 32 && (Fa(T, ""), i.flags &= -33);
            var D = ld(e);
            eu(e, D, T);
            break;
          case 3:
          case 4:
            var H = i.stateNode.containerInfo, K = ld(e);
            cd(
              e,
              K,
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
  function eg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        eg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ir(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Xm(e, n.alternate, n), n = n.sibling;
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
          typeof i.componentWillUnmount == "function" && Gm(
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
            } catch (K) {
              tt(o, o.return, K);
            }
          if (o = b, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var H = d.shared.hiddenCallbacks;
              if (H !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < H.length; d++)
                  Np(H[d], D);
            } catch (K) {
              tt(o, o.return, K);
            }
          }
          i && T & 64 && Zm(b), ys(b, b.return);
          break;
        case 27:
          Ym(b);
        case 26:
        case 5:
          Br(
            d,
            b,
            i
          ), i && o === null && T & 4 && Vm(b), ys(b, b.return);
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
          ), i && T & 4 && Jm(d, b);
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
  function hd(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && rs(i));
  }
  function pd(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function Qn(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        tg(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function tg(e, n, i, o) {
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
        )), d & 2048 && hd(T, n);
        break;
      case 24:
        Qn(
          e,
          n,
          i,
          o
        ), d & 2048 && pd(n.alternate, n);
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
      var b = e, T = n, D = i, H = o, K = T.flags;
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
          )), d && K & 2048 && hd(
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
          ), d && K & 2048 && pd(T.alternate, T);
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
            _s(i, o), d & 2048 && hd(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(i, o), d & 2048 && pd(o.alternate, o);
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
        ng(e), e = e.sibling;
  }
  function ng(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & bs && e.memoizedState !== null && Y1(
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
  function rg(e) {
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
          jt = o, ig(
            o,
            e
          );
        }
      rg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ag(e), e = e.sibling;
  }
  function ag(e) {
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
          jt = o, ig(
            o,
            e
          );
        }
      rg(e);
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
  function ig(e, n) {
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
          if (Qm(o), o === i) {
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
  var l1 = {
    getCacheForType: function(e) {
      var n = qt(At), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, c1 = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, rt = null, Ie = null, Ge = 0, Ke = 0, vn = null, Ur = !1, mi = !1, md = !1, vr = 0, ht = 0, Hr = 0, Ca = 0, gd = 0, jn = 0, gi = 0, ws = null, rn = null, vd = !1, yd = 0, nu = 1 / 0, ru = null, qr = null, Lt = 0, Zr = null, vi = null, yi = 0, _d = 0, bd = null, sg = null, Es = 0, Sd = null;
  function yn() {
    if ((Qe & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (O.T !== null) {
      var e = ii;
      return e !== 0 ? e : Td();
    }
    return wh();
  }
  function og() {
    jn === 0 && (jn = (Ge & 536870912) === 0 || Fe ? Ua() : 536870912);
    var e = Rn.current;
    return e !== null && (e.flags |= 32), jn;
  }
  function _n(e, n, i) {
    (e === rt && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), Gr(
      e,
      Ge,
      jn,
      !1
    )), Hi(e, i), ((Qe & 2) === 0 || e !== rt) && (e === rt && ((Qe & 2) === 0 && (Ca |= i), ht === 4 && Gr(
      e,
      Ge,
      jn,
      !1
    )), Kn(e));
  }
  function ug(e, n, i) {
    if ((Qe & 6) !== 0) throw Error(a(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Jt(e, n), d = o ? h1(e, n) : Cd(e, n, !0), b = o;
    do {
      if (d === 0) {
        mi && !o && Gr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, b && !d1(i)) {
          d = Cd(e, n, !1), b = !1;
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
              if (H && (_i(D, T).flags |= 256), T = Cd(
                D,
                T,
                !1
              ), T !== 2) {
                if (md && !H) {
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
                jn,
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
          if ((n & 62914560) === n && (d = yd + 300 - Ye(), 10 < d)) {
            if (Gr(
              o,
              n,
              jn,
              !Ur
            ), $t(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Pg(
              lg.bind(
                null,
                o,
                i,
                rn,
                ru,
                vd,
                n,
                jn,
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
          lg(
            o,
            i,
            rn,
            ru,
            vd,
            n,
            jn,
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
  function lg(e, n, i, o, d, b, T, D, H, K, oe, de, ee, ne) {
    if (e.timeoutHandle = -1, de = n.subtreeFlags, (de & 8192 || (de & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: $1 }, ng(n), de = F1(), de !== null)) {
      e.cancelPendingCommit = de(
        gg.bind(
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
      ), Gr(e, b, T, !K);
      return;
    }
    gg(
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
  function d1(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], b = d.getSnapshot;
          d = d.value;
          try {
            if (!hn(b(), d)) return !1;
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
    n &= ~gd, n &= ~Ca, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var d = n; 0 < d; ) {
      var b = 31 - Vt(d), T = 1 << b;
      o[b] = -1, d &= ~T;
    }
    i !== 0 && bh(e, i, n);
  }
  function au() {
    return (Qe & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function wd() {
    if (Ie !== null) {
      if (Ke === 0)
        var e = Ie.return;
      else
        e = Ie, lr = ya = null, Bc(e), di = null, ps = 0, e = Ie;
      for (; e !== null; )
        qm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function _i(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, N1(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), wd(), rt = e, Ie = i = sr(e.current, null), Ge = n, Ke = 0, vn = null, Ur = !1, mi = Jt(e, n), md = !1, gi = jn = gd = Ca = Hr = ht = 0, rn = ws = null, vd = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var d = 31 - Vt(o), b = 1 << d;
        n |= e[d], o &= ~b;
      }
    return vr = n, Ao(), i;
  }
  function cg(e, n) {
    Le = null, O.H = Vo, n === is || n === zo ? (n = xp(), Ke = 3) : n === Cp ? (n = xp(), Ke = 4) : Ke = n === Tm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, vn = n, Ie === null && (ht = 1, Qo(
      e,
      Tn(n, e.current)
    ));
  }
  function dg() {
    var e = O.H;
    return O.H = Vo, e === null ? Vo : e;
  }
  function fg() {
    var e = O.A;
    return O.A = l1, e;
  }
  function Ed() {
    ht = 4, Ur || (Ge & 4194048) !== Ge && Rn.current !== null || (mi = !0), (Hr & 134217727) === 0 && (Ca & 134217727) === 0 || rt === null || Gr(
      rt,
      Ge,
      jn,
      !1
    );
  }
  function Cd(e, n, i) {
    var o = Qe;
    Qe |= 2;
    var d = dg(), b = fg();
    (rt !== e || Ge !== n) && (ru = null, _i(e, n)), n = !1;
    var T = ht;
    e: do
      try {
        if (Ke !== 0 && Ie !== null) {
          var D = Ie, H = vn;
          switch (Ke) {
            case 8:
              wd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rn.current === null && (n = !0);
              var K = Ke;
              if (Ke = 0, vn = null, bi(e, D, H, K), i && mi) {
                T = 0;
                break e;
              }
              break;
            default:
              K = Ke, Ke = 0, vn = null, bi(e, D, H, K);
          }
        }
        f1(), T = ht;
        break;
      } catch (oe) {
        cg(e, oe);
      }
    while (!0);
    return n && e.shellSuspendCounter++, lr = ya = null, Qe = o, O.H = d, O.A = b, Ie === null && (rt = null, Ge = 0, Ao()), T;
  }
  function f1() {
    for (; Ie !== null; ) hg(Ie);
  }
  function h1(e, n) {
    var i = Qe;
    Qe |= 2;
    var o = dg(), d = fg();
    rt !== e || Ge !== n ? (ru = null, nu = Ye() + 500, _i(e, n)) : mi = Jt(
      e,
      n
    );
    e: do
      try {
        if (Ke !== 0 && Ie !== null) {
          n = Ie;
          var b = vn;
          t: switch (Ke) {
            case 1:
              Ke = 0, vn = null, bi(e, n, b, 1);
              break;
            case 2:
            case 9:
              if (kp(b)) {
                Ke = 0, vn = null, pg(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || rt !== e || (Ke = 7), Kn(e);
              }, b.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              kp(b) ? (Ke = 0, vn = null, pg(n)) : (Ke = 0, vn = null, bi(e, n, b, 7));
              break;
            case 5:
              var T = null;
              switch (Ie.tag) {
                case 26:
                  T = Ie.memoizedState;
                case 5:
                case 27:
                  var D = Ie;
                  if (!T || Xg(T)) {
                    Ke = 0, vn = null;
                    var H = D.sibling;
                    if (H !== null) Ie = H;
                    else {
                      var K = D.return;
                      K !== null ? (Ie = K, iu(K)) : Ie = null;
                    }
                    break t;
                  }
              }
              Ke = 0, vn = null, bi(e, n, b, 5);
              break;
            case 6:
              Ke = 0, vn = null, bi(e, n, b, 6);
              break;
            case 8:
              wd(), ht = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        p1();
        break;
      } catch (oe) {
        cg(e, oe);
      }
    while (!0);
    return lr = ya = null, O.H = o, O.A = d, Qe = i, Ie !== null ? 0 : (rt = null, Ge = 0, Ao(), ht);
  }
  function p1() {
    for (; Ie !== null && !Ne(); )
      hg(Ie);
  }
  function hg(e) {
    var n = Um(e.alternate, e, vr);
    e.memoizedProps = e.pendingProps, n === null ? iu(e) : Ie = n;
  }
  function pg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Dm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ge
        );
        break;
      case 11:
        n = Dm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ge
        );
        break;
      case 5:
        Bc(n);
      default:
        qm(i, n), n = Ie = mp(n, vr), n = Um(i, n, vr);
    }
    e.memoizedProps = e.pendingProps, n === null ? iu(e) : Ie = n;
  }
  function bi(e, n, i, o) {
    lr = ya = null, Bc(n), di = null, ps = 0;
    var d = n.return;
    try {
      if (r1(
        e,
        d,
        n,
        i,
        Ge
      )) {
        ht = 1, Qo(
          e,
          Tn(i, e.current)
        ), Ie = null;
        return;
      }
    } catch (b) {
      if (d !== null) throw Ie = d, b;
      ht = 1, Qo(
        e,
        Tn(i, e.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? (Fe || o === 1 ? e = !0 : mi || (Ge & 536870912) !== 0 ? e = !1 : (Ur = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Rn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), mg(n, e)) : iu(n);
  }
  function iu(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        mg(
          n,
          Ur
        );
        return;
      }
      e = n.return;
      var i = i1(
        n.alternate,
        n,
        vr
      );
      if (i !== null) {
        Ie = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function mg(e, n) {
    do {
      var i = s1(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ie = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = i;
    } while (e !== null);
    ht = 6, Ie = null;
  }
  function gg(e, n, i, o, d, b, T, D, H) {
    e.cancelPendingCommit = null;
    do
      su();
    while (Lt !== 0);
    if ((Qe & 6) !== 0) throw Error(a(327));
    if (n !== null) {
      if (n === e.current) throw Error(a(177));
      if (b = n.lanes | n.childLanes, b |= pc, $_(
        e,
        i,
        b,
        T,
        D,
        H
      ), e === rt && (Ie = rt = null, Ge = 0), vi = n, Zr = e, yi = i, _d = b, bd = d, sg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, y1(ye, function() {
        return Sg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = O.T, O.T = null, d = U.p, U.p = 2, T = Qe, Qe |= 4;
        try {
          o1(e, n, i);
        } finally {
          Qe = T, U.p = d, O.T = o;
        }
      }
      Lt = 1, vg(), yg(), _g();
    }
  }
  function vg() {
    if (Lt === 1) {
      Lt = 0;
      var e = Zr, n = vi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null;
        var o = U.p;
        U.p = 2;
        var d = Qe;
        Qe |= 4;
        try {
          Wm(n, e);
          var b = Ld, T = ip(e.containerInfo), D = b.focusedElem, H = b.selectionRange;
          if (T !== D && D && D.ownerDocument && ap(
            D.ownerDocument.documentElement,
            D
          )) {
            if (H !== null && lc(D)) {
              var K = H.start, oe = H.end;
              if (oe === void 0 && (oe = K), "selectionStart" in D)
                D.selectionStart = K, D.selectionEnd = Math.min(
                  oe,
                  D.value.length
                );
              else {
                var de = D.ownerDocument || document, ee = de && de.defaultView || window;
                if (ee.getSelection) {
                  var ne = ee.getSelection(), ke = D.textContent.length, Ee = Math.min(H.start, ke), et = H.end === void 0 ? Ee : Math.min(H.end, ke);
                  !ne.extend && Ee > et && (T = et, et = Ee, Ee = T);
                  var V = rp(
                    D,
                    Ee
                  ), Z = rp(
                    D,
                    et
                  );
                  if (V && Z && (ne.rangeCount !== 1 || ne.anchorNode !== V.node || ne.anchorOffset !== V.offset || ne.focusNode !== Z.node || ne.focusOffset !== Z.offset)) {
                    var X = de.createRange();
                    X.setStart(V.node, V.offset), ne.removeAllRanges(), Ee > et ? (ne.addRange(X), ne.extend(Z.node, Z.offset)) : (X.setEnd(Z.node, Z.offset), ne.addRange(X));
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
          yu = !!zd, Ld = zd = null;
        } finally {
          Qe = d, U.p = o, O.T = i;
        }
      }
      e.current = n, Lt = 2;
    }
  }
  function yg() {
    if (Lt === 2) {
      Lt = 0;
      var e = Zr, n = vi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = O.T, O.T = null;
        var o = U.p;
        U.p = 2;
        var d = Qe;
        Qe |= 4;
        try {
          Xm(e, n.alternate, n);
        } finally {
          Qe = d, U.p = o, O.T = i;
        }
      }
      Lt = 3;
    }
  }
  function _g() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0, ze();
      var e = Zr, n = vi, i = yi, o = sg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, vi = Zr = null, bg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (qr = null), ql(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
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
      (yi & 3) !== 0 && su(), Kn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === Sd ? Es++ : (Es = 0, Sd = e) : Es = 0, Cs(0);
    }
  }
  function bg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function su(e) {
    return vg(), yg(), _g(), Sg();
  }
  function Sg() {
    if (Lt !== 5) return !1;
    var e = Zr, n = _d;
    _d = 0;
    var i = ql(yi), o = O.T, d = U.p;
    try {
      U.p = 32 > i ? 32 : i, O.T = null, i = bd, bd = null;
      var b = Zr, T = yi;
      if (Lt = 0, vi = Zr = null, yi = 0, (Qe & 6) !== 0) throw Error(a(331));
      var D = Qe;
      if (Qe |= 4, ag(b.current), tg(
        b,
        b.current,
        T,
        i
      ), Qe = D, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(nr, b);
        } catch {
        }
      return !0;
    } finally {
      U.p = d, O.T = o, bg(e, n);
    }
  }
  function wg(e, n, i) {
    n = Tn(i, n), n = Wc(e.stateNode, n, 2), e = jr(e, n, 2), e !== null && (Hi(e, 2), Kn(e));
  }
  function tt(e, n, i) {
    if (e.tag === 3)
      wg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          wg(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (qr === null || !qr.has(o))) {
            e = Tn(i, e), i = Am(2), o = jr(n, i, 2), o !== null && (xm(
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
  function kd(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new c1();
      var d = /* @__PURE__ */ new Set();
      o.set(n, d);
    } else
      d = o.get(n), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(n, d));
    d.has(i) || (md = !0, d.add(i), e = m1.bind(null, e, n, i), n.then(e, e));
  }
  function m1(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, rt === e && (Ge & i) === i && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Ye() - yd ? (Qe & 2) === 0 && _i(e, 0) : gd |= i, gi === Ge && (gi = 0)), Kn(e);
  }
  function Eg(e, n) {
    n === 0 && (n = _h()), e = ti(e, n), e !== null && (Hi(e, n), Kn(e));
  }
  function g1(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Eg(e, i);
  }
  function v1(e, n) {
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
    o !== null && o.delete(n), Eg(e, i);
  }
  function y1(e, n) {
    return fe(e, n);
  }
  var ou = null, Si = null, Ad = !1, uu = !1, xd = !1, ka = 0;
  function Kn(e) {
    e !== Si && e.next === null && (Si === null ? ou = Si = e : Si = Si.next = e), uu = !0, Ad || (Ad = !0, b1());
  }
  function Cs(e, n) {
    if (!xd && uu) {
      xd = !0;
      do
        for (var i = !1, o = ou; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var b = 0;
            else {
              var T = o.suspendedLanes, D = o.pingedLanes;
              b = (1 << 31 - Vt(42 | e) + 1) - 1, b &= d & ~(T & ~D), b = b & 201326741 ? b & 201326741 | 1 : b ? b | 2 : 0;
            }
            b !== 0 && (i = !0, xg(o, b));
          } else
            b = Ge, b = $t(
              o,
              o === rt ? b : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (b & 3) === 0 || Jt(o, b) || (i = !0, xg(o, b));
          o = o.next;
        }
      while (i);
      xd = !1;
    }
  }
  function _1() {
    Cg();
  }
  function Cg() {
    uu = Ad = !1;
    var e = 0;
    ka !== 0 && (T1() && (e = ka), ka = 0);
    for (var n = Ye(), i = null, o = ou; o !== null; ) {
      var d = o.next, b = kg(o, n);
      b === 0 ? (o.next = null, i === null ? ou = d : i.next = d, d === null && (Si = i)) : (i = o, (e !== 0 || (b & 3) !== 0) && (uu = !0)), o = d;
    }
    Cs(e);
  }
  function kg(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, b = e.pendingLanes & -62914561; 0 < b; ) {
      var T = 31 - Vt(b), D = 1 << T, H = d[T];
      H === -1 ? ((D & i) === 0 || (D & o) !== 0) && (d[T] = po(D, n)) : H <= n && (e.expiredLanes |= D), b &= ~D;
    }
    if (n = rt, i = Ge, i = $t(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && me(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Jt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && me(o), ql(i)) {
        case 2:
        case 8:
          i = ve;
          break;
        case 32:
          i = ye;
          break;
        case 268435456:
          i = Ze;
          break;
        default:
          i = ye;
      }
      return o = Ag.bind(null, e), i = fe(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && me(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ag(e, n) {
    if (Lt !== 0 && Lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (su() && e.callbackNode !== i)
      return null;
    var o = Ge;
    return o = $t(
      e,
      e === rt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (ug(e, o, n), kg(e, Ye()), e.callbackNode != null && e.callbackNode === i ? Ag.bind(null, e) : null);
  }
  function xg(e, n) {
    if (su()) return null;
    ug(e, n, !0);
  }
  function b1() {
    O1(function() {
      (Qe & 6) !== 0 ? fe(
        bt,
        _1
      ) : Cg();
    });
  }
  function Td() {
    return ka === 0 && (ka = Ua()), ka;
  }
  function Tg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _o("" + e);
  }
  function Ng(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function S1(e, n, i, o, d) {
    if (n === "submit" && i && i.stateNode === d) {
      var b = Tg(
        (d[Wt] || null).action
      ), T = o.submitter;
      T && (n = (n = T[Wt] || null) ? Tg(n.formAction) : T.getAttribute("formAction"), n !== null && (b = n, T = null));
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
                  var H = T ? Ng(d, T) : new FormData(d);
                  Fc(
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
                typeof b == "function" && (D.preventDefault(), H = T ? Ng(d, T) : new FormData(d), Fc(
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
  for (var Nd = 0; Nd < hc.length; Nd++) {
    var Od = hc[Nd], w1 = Od.toLowerCase(), E1 = Od[0].toUpperCase() + Od.slice(1);
    Pn(
      w1,
      "on" + E1
    );
  }
  Pn(up, "onAnimationEnd"), Pn(lp, "onAnimationIteration"), Pn(cp, "onAnimationStart"), Pn("dblclick", "onDoubleClick"), Pn("focusin", "onFocus"), Pn("focusout", "onBlur"), Pn(Ub, "onTransitionRun"), Pn(Hb, "onTransitionStart"), Pn(qb, "onTransitionCancel"), Pn(dp, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  ), C1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks)
  );
  function Og(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], d = o.event;
      o = o.listeners;
      e: {
        var b = void 0;
        if (n)
          for (var T = o.length - 1; 0 <= T; T--) {
            var D = o[T], H = D.instance, K = D.currentTarget;
            if (D = D.listener, H !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = K;
            try {
              b(d);
            } catch (oe) {
              Xo(oe);
            }
            d.currentTarget = null, b = H;
          }
        else
          for (T = 0; T < o.length; T++) {
            if (D = o[T], H = D.instance, K = D.currentTarget, D = D.listener, H !== b && d.isPropagationStopped())
              break e;
            b = D, d.currentTarget = K;
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
  function Be(e, n) {
    var i = n[Zl];
    i === void 0 && (i = n[Zl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Mg(n, e, 2, !1), i.add(o));
  }
  function Md(e, n, i) {
    var o = 0;
    n && (o |= 4), Mg(
      i,
      e,
      o,
      n
    );
  }
  var lu = "_reactListening" + Math.random().toString(36).slice(2);
  function Rd(e) {
    if (!e[lu]) {
      e[lu] = !0, Ch.forEach(function(i) {
        i !== "selectionchange" && (C1.has(i) || Md(i, !1, e), Md(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[lu] || (n[lu] = !0, Md("selectionchange", !1, n));
    }
  }
  function Mg(e, n, i, o) {
    switch (tv(n)) {
      case 2:
        var d = K1;
        break;
      case 8:
        d = J1;
        break;
      default:
        d = $d;
    }
    i = d.bind(
      null,
      n,
      i,
      e
    ), d = void 0, !ec || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(n, i, !0) : d !== void 0 ? e.addEventListener(n, i, {
      passive: d
    }) : e.addEventListener(n, i, !1);
  }
  function jd(e, n, i, o, d) {
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
    Ih(function() {
      var K = b, oe = Jl(i), de = [];
      e: {
        var ee = fp.get(e);
        if (ee !== void 0) {
          var ne = Eo, ke = e;
          switch (e) {
            case "keypress":
              if (So(i) === 0) break e;
            case "keydown":
            case "keyup":
              ne = yb;
              break;
            case "focusin":
              ke = "focus", ne = ac;
              break;
            case "focusout":
              ke = "blur", ne = ac;
              break;
            case "beforeblur":
            case "afterblur":
              ne = ac;
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
              ne = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = sb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = Sb;
              break;
            case up:
            case lp:
            case cp:
              ne = lb;
              break;
            case dp:
              ne = Eb;
              break;
            case "scroll":
            case "scrollend":
              ne = ab;
              break;
            case "wheel":
              ne = kb;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = db;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = Zh;
              break;
            case "toggle":
            case "beforetoggle":
              ne = xb;
          }
          var Ee = (n & 4) !== 0, et = !Ee && (e === "scroll" || e === "scrollend"), V = Ee ? ee !== null ? ee + "Capture" : null : ee;
          Ee = [];
          for (var Z = K, X; Z !== null; ) {
            var ue = Z;
            if (X = ue.stateNode, ue = ue.tag, ue !== 5 && ue !== 26 && ue !== 27 || X === null || V === null || (ue = Gi(Z, V), ue != null && Ee.push(
              As(Z, ue, X)
            )), et) break;
            Z = Z.return;
          }
          0 < Ee.length && (ee = new ne(
            ee,
            ke,
            null,
            i,
            oe
          ), de.push({ event: ee, listeners: Ee }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (ee = e === "mouseover" || e === "pointerover", ne = e === "mouseout" || e === "pointerout", ee && i !== Kl && (ke = i.relatedTarget || i.fromElement) && (qa(ke) || ke[Ha]))
            break e;
          if ((ne || ee) && (ee = oe.window === oe ? oe : (ee = oe.ownerDocument) ? ee.defaultView || ee.parentWindow : window, ne ? (ke = i.relatedTarget || i.toElement, ne = K, ke = ke ? qa(ke) : null, ke !== null && (et = l(ke), Ee = ke.tag, ke !== et || Ee !== 5 && Ee !== 27 && Ee !== 6) && (ke = null)) : (ne = null, ke = K), ne !== ke)) {
            if (Ee = Hh, ue = "onMouseLeave", V = "onMouseEnter", Z = "mouse", (e === "pointerout" || e === "pointerover") && (Ee = Zh, ue = "onPointerLeave", V = "onPointerEnter", Z = "pointer"), et = ne == null ? ee : Zi(ne), X = ke == null ? ee : Zi(ke), ee = new Ee(
              ue,
              Z + "leave",
              ne,
              i,
              oe
            ), ee.target = et, ee.relatedTarget = X, ue = null, qa(oe) === K && (Ee = new Ee(
              V,
              Z + "enter",
              ke,
              i,
              oe
            ), Ee.target = X, Ee.relatedTarget = et, ue = Ee), et = ue, ne && ke)
              t: {
                for (Ee = ne, V = ke, Z = 0, X = Ee; X; X = wi(X))
                  Z++;
                for (X = 0, ue = V; ue; ue = wi(ue))
                  X++;
                for (; 0 < Z - X; )
                  Ee = wi(Ee), Z--;
                for (; 0 < X - Z; )
                  V = wi(V), X--;
                for (; Z--; ) {
                  if (Ee === V || V !== null && Ee === V.alternate)
                    break t;
                  Ee = wi(Ee), V = wi(V);
                }
                Ee = null;
              }
            else Ee = null;
            ne !== null && Rg(
              de,
              ee,
              ne,
              Ee,
              !1
            ), ke !== null && et !== null && Rg(
              de,
              et,
              ke,
              Ee,
              !0
            );
          }
        }
        e: {
          if (ee = K ? Zi(K) : window, ne = ee.nodeName && ee.nodeName.toLowerCase(), ne === "select" || ne === "input" && ee.type === "file")
            var ge = Kh;
          else if (Xh(ee))
            if (Jh)
              ge = Pb;
            else {
              ge = zb;
              var Pe = Db;
            }
          else
            ne = ee.nodeName, !ne || ne.toLowerCase() !== "input" || ee.type !== "checkbox" && ee.type !== "radio" ? K && Ql(K.elementType) && (ge = Kh) : ge = Lb;
          if (ge && (ge = ge(e, K))) {
            Qh(
              de,
              ge,
              i,
              oe
            );
            break e;
          }
          Pe && Pe(e, ee, K), e === "focusout" && K && ee.type === "number" && K.memoizedProps.value != null && Xl(ee, "number", ee.value);
        }
        switch (Pe = K ? Zi(K) : window, e) {
          case "focusin":
            (Xh(Pe) || Pe.contentEditable === "true") && (Ja = Pe, cc = K, Ji = null);
            break;
          case "focusout":
            Ji = cc = Ja = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dc = !1, sp(de, i, oe);
            break;
          case "selectionchange":
            if (Bb) break;
          case "keydown":
          case "keyup":
            sp(de, i, oe);
        }
        var _e;
        if (sc)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Ka ? Yh(e, i) && (Ce = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Gh && i.locale !== "ko" && (Ka || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Ka && (_e = Bh()) : (Nr = oe, tc = "value" in Nr ? Nr.value : Nr.textContent, Ka = !0)), Pe = cu(K, Ce), 0 < Pe.length && (Ce = new qh(
          Ce,
          e,
          null,
          i,
          oe
        ), de.push({ event: Ce, listeners: Pe }), _e ? Ce.data = _e : (_e = Fh(i), _e !== null && (Ce.data = _e)))), (_e = Nb ? Ob(e, i) : Mb(e, i)) && (Ce = cu(K, "onBeforeInput"), 0 < Ce.length && (Pe = new qh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          oe
        ), de.push({
          event: Pe,
          listeners: Ce
        }), Pe.data = _e)), S1(
          de,
          e,
          K,
          i,
          oe
        );
      }
      Og(de, n);
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
  function Rg(e, n, i, o, d) {
    for (var b = n._reactName, T = []; i !== null && i !== o; ) {
      var D = i, H = D.alternate, K = D.stateNode;
      if (D = D.tag, H !== null && H === o) break;
      D !== 5 && D !== 26 && D !== 27 || K === null || (H = K, d ? (K = Gi(i, b), K != null && T.unshift(
        As(i, K, H)
      )) : d || (K = Gi(i, b), K != null && T.push(
        As(i, K, H)
      ))), i = i.return;
    }
    T.length !== 0 && e.push({ event: n, listeners: T });
  }
  var k1 = /\r\n?/g, A1 = /\u0000|\uFFFD/g;
  function jg(e) {
    return (typeof e == "string" ? e : "" + e).replace(k1, `
`).replace(A1, "");
  }
  function Dg(e, n) {
    return n = jg(n), jg(e) === n;
  }
  function du() {
  }
  function We(e, n, i, o, d, b) {
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
        Lh(e, o, b);
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
          typeof b == "function" && (i === "formAction" ? (n !== "input" && We(e, n, "name", d.name, d, null), We(
            e,
            n,
            "formEncType",
            d.formEncType,
            d,
            null
          ), We(
            e,
            n,
            "formMethod",
            d.formMethod,
            d,
            null
          ), We(
            e,
            n,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (We(e, n, "encType", d.encType, d, null), We(e, n, "method", d.method, d, null), We(e, n, "target", d.target, d, null)));
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
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
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
        Be("beforetoggle", e), Be("toggle", e), mo(e, "popover", o);
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
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = nb.get(i) || i, mo(e, i, o));
    }
  }
  function Dd(e, n, i, o, d, b) {
    switch (i) {
      case "style":
        Lh(e, o, b);
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
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
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
        if (!kh.hasOwnProperty(i))
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
        Be("error", e), Be("load", e);
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
                  We(e, n, b, T, i, null);
              }
          }
        d && We(e, n, "srcSet", i.srcSet, i, null), o && We(e, n, "src", i.src, i, null);
        return;
      case "input":
        Be("invalid", e);
        var D = b = T = d = null, H = null, K = null;
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
                  K = oe;
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
                  We(e, n, o, oe, i, null);
              }
          }
        Rh(
          e,
          b,
          D,
          H,
          K,
          T,
          d,
          !1
        ), vo(e);
        return;
      case "select":
        Be("invalid", e), o = T = b = null;
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
                We(e, n, d, D, i, null);
            }
        n = b, i = T, e.multiple = !!o, n != null ? Ya(e, !!o, n, !1) : i != null && Ya(e, !!o, i, !0);
        return;
      case "textarea":
        Be("invalid", e), b = d = o = null;
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
                We(e, n, T, D, i, null);
            }
        Dh(e, o, d, b), vo(e);
        return;
      case "option":
        for (H in i)
          if (i.hasOwnProperty(H) && (o = i[H], o != null))
            switch (H) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                We(e, n, H, o, i, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ks.length; o++)
          Be(ks[o], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
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
        for (K in i)
          if (i.hasOwnProperty(K) && (o = i[K], o != null))
            switch (K) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, n));
              default:
                We(e, n, K, o, i, null);
            }
        return;
      default:
        if (Ql(n)) {
          for (oe in i)
            i.hasOwnProperty(oe) && (o = i[oe], o !== void 0 && Dd(
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
      i.hasOwnProperty(D) && (o = i[D], o != null && We(e, n, D, o, i, null));
  }
  function x1(e, n, i, o) {
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
        var d = null, b = null, T = null, D = null, H = null, K = null, oe = null;
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
                o.hasOwnProperty(ne) || We(e, n, ne, null, o, de);
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
                K = ne;
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
                ne !== de && We(
                  e,
                  n,
                  ee,
                  ne,
                  o,
                  de
                );
            }
        }
        Fl(
          e,
          T,
          D,
          H,
          K,
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
                o.hasOwnProperty(b) || We(
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
                b !== H && We(
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
                We(e, n, D, null, o, d);
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
                d !== b && We(e, n, T, d, o, b);
            }
        jh(e, ee, ne);
        return;
      case "option":
        for (var ke in i)
          if (ee = i[ke], i.hasOwnProperty(ke) && ee != null && !o.hasOwnProperty(ke))
            switch (ke) {
              case "selected":
                e.selected = !1;
                break;
              default:
                We(
                  e,
                  n,
                  ke,
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
                We(
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
        for (var Ee in i)
          ee = i[Ee], i.hasOwnProperty(Ee) && ee != null && !o.hasOwnProperty(Ee) && We(e, n, Ee, null, o, ee);
        for (K in o)
          if (ee = o[K], ne = i[K], o.hasOwnProperty(K) && ee !== ne && (ee != null || ne != null))
            switch (K) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(a(137, n));
                break;
              default:
                We(
                  e,
                  n,
                  K,
                  ee,
                  o,
                  ne
                );
            }
        return;
      default:
        if (Ql(n)) {
          for (var et in i)
            ee = i[et], i.hasOwnProperty(et) && ee !== void 0 && !o.hasOwnProperty(et) && Dd(
              e,
              n,
              et,
              void 0,
              o,
              ee
            );
          for (oe in o)
            ee = o[oe], ne = i[oe], !o.hasOwnProperty(oe) || ee === ne || ee === void 0 && ne === void 0 || Dd(
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
      ee = i[V], i.hasOwnProperty(V) && ee != null && !o.hasOwnProperty(V) && We(e, n, V, null, o, ee);
    for (de in o)
      ee = o[de], ne = i[de], !o.hasOwnProperty(de) || ee === ne || ee == null && ne == null || We(e, n, de, ee, o, ne);
  }
  var zd = null, Ld = null;
  function fu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lg(e, n) {
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
  function Pd(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Id = null;
  function T1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Id ? !1 : (Id = e, !0) : (Id = null, !1);
  }
  var Pg = typeof setTimeout == "function" ? setTimeout : void 0, N1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ig = typeof Promise == "function" ? Promise : void 0, O1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ig < "u" ? function(e) {
    return Ig.resolve(null).then(e).catch(M1);
  } : Pg;
  function M1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vr(e) {
    return e === "head";
  }
  function Bg(e, n) {
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
  function Bd(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bd(i), Gl(i);
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
  function R1(e, n, i, o) {
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
  function j1(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ud(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function D1(e, n) {
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
  var Hd = null;
  function Ug(e) {
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
  function Hg(e, n, i) {
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
    Gl(e);
  }
  var Dn = /* @__PURE__ */ new Map(), qg = /* @__PURE__ */ new Set();
  function hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var yr = U.d;
  U.d = {
    f: z1,
    r: L1,
    D: P1,
    C: I1,
    L: B1,
    m: U1,
    X: q1,
    S: H1,
    M: Z1
  };
  function z1() {
    var e = yr.f(), n = au();
    return e || n;
  }
  function L1(e) {
    var n = Za(e);
    n !== null && n.tag === 5 && n.type === "form" ? um(n) : yr.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Zg(e, n, i) {
    var o = Ei;
    if (o && typeof n == "string" && n) {
      var d = xn(n);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), qg.has(d) || (qg.add(d), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(d) === null && (n = o.createElement("link"), Pt(n, "link", e), Mt(n), o.head.appendChild(n)));
    }
  }
  function P1(e) {
    yr.D(e), Zg("dns-prefetch", e, null);
  }
  function I1(e, n) {
    yr.C(e, n), Zg("preconnect", e, n);
  }
  function B1(e, n, i) {
    yr.L(e, n, i);
    var o = Ei;
    if (o && e && n) {
      var d = 'link[rel="preload"][as="' + xn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + xn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + xn(
        i.imageSizes
      ) + '"]')) : d += '[href="' + xn(e) + '"]';
      var b = d;
      switch (n) {
        case "style":
          b = Ci(e);
          break;
        case "script":
          b = ki(e);
      }
      Dn.has(b) || (e = v(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), Dn.set(b, e), o.querySelector(d) !== null || n === "style" && o.querySelector(Ts(b)) || n === "script" && o.querySelector(Ns(b)) || (n = o.createElement("link"), Pt(n, "link", e), Mt(n), o.head.appendChild(n)));
    }
  }
  function U1(e, n) {
    yr.m(e, n);
    var i = Ei;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", d = 'link[rel="modulepreload"][as="' + xn(o) + '"][href="' + xn(e) + '"]', b = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          b = ki(e);
      }
      if (!Dn.has(b) && (e = v({ rel: "modulepreload", href: e }, n), Dn.set(b, e), i.querySelector(d) === null)) {
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
  function H1(e, n, i) {
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
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = Dn.get(b)) && qd(e, i);
          var H = T = o.createElement("link");
          Mt(H), Pt(H, "link", e), H._p = new Promise(function(K, oe) {
            H.onload = K, H.onerror = oe;
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
  function q1(e, n) {
    yr.X(e, n);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = i.querySelector(Ns(d)), b || (e = v({ src: e, async: !0 }, n), (n = Dn.get(d)) && Zd(e, n), b = i.createElement("script"), Mt(b), Pt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Z1(e, n) {
    yr.M(e, n);
    var i = Ei;
    if (i && e) {
      var o = Ga(i).hoistableScripts, d = ki(e), b = o.get(d);
      b || (b = i.querySelector(Ns(d)), b || (e = v({ src: e, async: !0, type: "module" }, n), (n = Dn.get(d)) && Zd(e, n), b = i.createElement("script"), Mt(b), Pt(b, "link", e), i.head.appendChild(b)), b = {
        type: "script",
        instance: b,
        count: 1,
        state: null
      }, o.set(d, b));
    }
  }
  function Gg(e, n, i, o) {
    var d = (d = Q.current) ? hu(d) : null;
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
          )) && !b._p && (T.instance = b, T.state.loading = 5), Dn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Dn.set(e, i), b || G1(
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
    return 'href="' + xn(e) + '"';
  }
  function Ts(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vg(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function G1(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Pt(n, "link", i), Mt(n), e.head.appendChild(n));
  }
  function ki(e) {
    return '[src="' + xn(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function $g(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + xn(i.href) + '"]'
          );
          if (o)
            return n.instance = o, Mt(o), o;
          var d = v({}, i, {
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
          o = Vg(i), (d = Dn.get(d)) && qd(o, d), b = (e.ownerDocument || e).createElement("link"), Mt(b);
          var T = b;
          return T._p = new Promise(function(D, H) {
            T.onload = D, T.onerror = H;
          }), Pt(b, "link", o), n.state.loading |= 4, pu(b, i.precedence, e), n.instance = b;
        case "script":
          return b = ki(i.src), (d = e.querySelector(
            Ns(b)
          )) ? (n.instance = d, Mt(d), d) : (o = i, (d = Dn.get(b)) && (o = v({}, i), Zd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), Mt(d), Pt(d, "link", o), e.head.appendChild(d), n.instance = d);
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
  function qd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Zd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var mu = null;
  function Yg(e, n, i) {
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
  function Fg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function V1(e, n, i) {
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
  function Xg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function $1() {
  }
  function Y1(e, n, i) {
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
        b = e.ownerDocument || e, i = Vg(i), (d = Dn.get(d)) && qd(i, d), b = b.createElement("link"), Mt(b);
        var T = b;
        T._p = new Promise(function(D, H) {
          T.onload = D, T.onerror = H;
        }), Pt(b, "link", i), n.instance = b;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = gu.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function F1() {
    if (Os === null) throw Error(a(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && Gd(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Gd(e, e.stylesheets), e.unsuspend) {
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
      if (this.stylesheets) Gd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vu = null;
  function Gd(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vu = /* @__PURE__ */ new Map(), n.forEach(X1, e), vu = null, gu.call(e));
  }
  function X1(e, n) {
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
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function Q1(e, n, i, o, d, b, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ul(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.hiddenUpdates = Ul(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = b, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qg(e, n, i, o, d, b, T, D, H, K, oe, de) {
    return e = new Q1(
      e,
      n,
      i,
      T,
      D,
      H,
      K,
      de
    ), n = 1, b === !0 && (n |= 24), b = pn(3, null, null, n), e.current = b, b.stateNode = e, n = kc(), n.refCount++, e.pooledCache = n, n.refCount++, b.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Nc(b), e;
  }
  function Kg(e) {
    return e ? (e = ni, e) : ni;
  }
  function Jg(e, n, i, o, d, b) {
    d = Kg(d), o.context === null ? o.context = d : o.pendingContext = d, o = Rr(n), o.payload = { element: i }, b = b === void 0 ? null : b, b !== null && (o.callback = b), i = jr(e, o, n), i !== null && (_n(i, e, n), os(i, e, n));
  }
  function Wg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Vd(e, n) {
    Wg(e, n), (e = e.alternate) && Wg(e, n);
  }
  function ev(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && _n(n, e, 67108864), Vd(e, 67108864);
    }
  }
  var yu = !0;
  function K1(e, n, i, o) {
    var d = O.T;
    O.T = null;
    var b = U.p;
    try {
      U.p = 2, $d(e, n, i, o);
    } finally {
      U.p = b, O.T = d;
    }
  }
  function J1(e, n, i, o) {
    var d = O.T;
    O.T = null;
    var b = U.p;
    try {
      U.p = 8, $d(e, n, i, o);
    } finally {
      U.p = b, O.T = d;
    }
  }
  function $d(e, n, i, o) {
    if (yu) {
      var d = Yd(o);
      if (d === null)
        jd(
          e,
          n,
          o,
          _u,
          i
        ), nv(e, o);
      else if (e2(
        d,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (nv(e, o), n & 4 && -1 < W1.indexOf(e)) {
        for (; d !== null; ) {
          var b = Za(d);
          if (b !== null)
            switch (b.tag) {
              case 3:
                if (b = b.stateNode, b.current.memoizedState.isDehydrated) {
                  var T = kn(b.pendingLanes);
                  if (T !== 0) {
                    var D = b;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; T; ) {
                      var H = 1 << 31 - Vt(T);
                      D.entanglements[1] |= H, T &= ~H;
                    }
                    Kn(b), (Qe & 6) === 0 && (nu = Ye() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                D = ti(b, 2), D !== null && _n(D, b, 2), au(), Vd(b, 2);
            }
          if (b = Yd(o), b === null && jd(
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
        jd(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function Yd(e) {
    return e = Jl(e), Fd(e);
  }
  var _u = null;
  function Fd(e) {
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
  function tv(e) {
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
        switch (fn()) {
          case bt:
            return 2;
          case ve:
            return 8;
          case ye:
          case Ve:
            return 32;
          case Ze:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xd = !1, $r = null, Yr = null, Fr = null, Rs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Xr = [], W1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nv(e, n) {
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
    }, n !== null && (n = Za(n), n !== null && ev(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, d !== null && n.indexOf(d) === -1 && n.push(d), e);
  }
  function e2(e, n, i, o, d) {
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
  function rv(e) {
    var n = qa(e.target);
    if (n !== null) {
      var i = l(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, Y_(e.priority, function() {
              if (i.tag === 13) {
                var o = yn();
                o = Hl(o);
                var d = ti(i, o);
                d !== null && _n(d, i, o), Vd(i, o);
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
      var i = Yd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Kl = o, i.target.dispatchEvent(o), Kl = null;
      } else
        return n = Za(i), n !== null && ev(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function av(e, n, i) {
    bu(e) && i.delete(n);
  }
  function t2() {
    Xd = !1, $r !== null && bu($r) && ($r = null), Yr !== null && bu(Yr) && (Yr = null), Fr !== null && bu(Fr) && (Fr = null), Rs.forEach(av), js.forEach(av);
  }
  function Su(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xd || (Xd = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      t2
    )));
  }
  var wu = null;
  function iv(e) {
    wu !== e && (wu = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        wu === e && (wu = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], d = e[n + 2];
          if (typeof o != "function") {
            if (Fd(o || i) === null)
              continue;
            break;
          }
          var b = Za(i);
          b !== null && (e.splice(n, 3), n -= 3, Fc(
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
      rv(i), i.blockedOn === null && Xr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], b = i[o + 1], T = d[Wt] || null;
        if (typeof b == "function")
          T || iv(i);
        else if (T) {
          var D = null;
          if (b && b.hasAttribute("formAction")) {
            if (d = b, T = b[Wt] || null)
              D = T.formAction;
            else if (Fd(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? i[o + 1] = D : (i.splice(o, 3), o -= 3), iv(i);
        }
      }
  }
  function Qd(e) {
    this._internalRoot = e;
  }
  Eu.prototype.render = Qd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(a(409));
    var i = n.current, o = yn();
    Jg(i, o, e, n, null, null);
  }, Eu.prototype.unmount = Qd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Jg(e.current, 2, null, e, null, null), au(), n[Ha] = null;
    }
  };
  function Eu(e) {
    this._internalRoot = e;
  }
  Eu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = wh();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Xr.length && n !== 0 && n < Xr[i].priority; i++) ;
      Xr.splice(i, 0, e), i === 0 && rv(e);
    }
  };
  var sv = r.version;
  if (sv !== "19.1.1")
    throw Error(
      a(
        527,
        sv,
        "19.1.1"
      )
    );
  U.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = p(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var n2 = {
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
          n2
        ), mt = Cu;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = wm, b = Em, T = Cm, D = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (d = n.onUncaughtError), n.onCaughtError !== void 0 && (b = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (D = n.unstable_transitionCallbacks)), n = Qg(
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
    ), e[Ha] = n.current, Rd(e), new Qd(n);
  }, Bs.hydrateRoot = function(e, n, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", b = wm, T = Em, D = Cm, H = null, K = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (b = i.onUncaughtError), i.onCaughtError !== void 0 && (T = i.onCaughtError), i.onRecoverableError !== void 0 && (D = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (H = i.unstable_transitionCallbacks), i.formState !== void 0 && (K = i.formState)), n = Qg(
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
      K
    ), n.context = Kg(null), i = n.current, o = yn(), o = Hl(o), d = Rr(o), d.callback = null, jr(i, d, o), i = o, n.current.lanes = i, Hi(n, i), Kn(n), e[Ha] = n.current, Rd(e), new Eu(n);
  }, Bs.version = "19.1.1", Bs;
}
var Sv;
function B2() {
  if (Sv) return ef.exports;
  Sv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), ef.exports = I2(), ef.exports;
}
var U2 = B2();
const wv = /* @__PURE__ */ Wf(U2);
var H2 = Object.defineProperty, q2 = (t, r, s) => r in t ? H2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, Ev = (t, r, s) => q2(t, typeof r != "symbol" ? r + "" : r, s);
class _y {
  constructor(r, s) {
    Ev(this, "settingsKey"), Ev(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
      let p = function(g, v) {
        let E = !1;
        for (const _ of Object.keys(v))
          g[_] === void 0 ? (g[_] = v[_], E = !0) : typeof v[_] == "object" && v[_] !== null && (g[_] = g[_] || {}, p(g[_], v[_]) && (E = !0));
        return E;
      };
      a && l.version !== a && (m.version.changed = !0, m.version.new = a, l.version = a), u && u !== "*" && l.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, l.formatVersion = u), (p(l, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !l.version && (l.version = a, m.version.changed = !0, m.version.new = a), u && !l.formatVersion && (l.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(l), g = l.formatVersion;
      try {
        let v;
        do {
          v = !1;
          let E = s.find((_) => _.from === g);
          if (E && E.to > g)
            p = await E.action(p), g = E.to, p.formatVersion = E.to, v = !0;
          else
            for (const _ of s)
              if (_.from === "*" && _.to > g && g !== _.to) {
                p = await _.action(p), g = _.to, p.formatVersion = _.to, v = !0;
                break;
              }
        } while (v);
        if (g !== l.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = g;
          const E = this.defaultSettings.version;
          E && (p.version = E);
        }
        if (m.formatVersion.changed) {
          for (const E of Object.keys(l))
            delete l[E];
          Object.assign(l, p), this.saveSettings();
        }
      } catch (v) {
        throw console.error("Failed to apply version changes:", v), new Error(`Version migration failed: ${v instanceof Error ? v.message : v}`, {
          cause: v
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
  return Array.isArray ? Array.isArray(t) : wy(t) === "[object Array]";
}
function Z2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function G2(t) {
  return t == null ? "" : Z2(t);
}
function Jn(t) {
  return typeof t == "string";
}
function by(t) {
  return typeof t == "number";
}
function V2(t) {
  return t === !0 || t === !1 || $2(t) && wy(t) == "[object Boolean]";
}
function Sy(t) {
  return typeof t == "object";
}
function $2(t) {
  return Sy(t) && t !== null;
}
function En(t) {
  return t != null;
}
function af(t) {
  return !t.trim().length;
}
function wy(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const Y2 = "Incorrect 'index' type", F2 = (t) => `Invalid value for key ${t}`, X2 = (t) => `Pattern length exceeds max of ${t}.`, Q2 = (t) => `Missing ${t} property in key`, K2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Cv = Object.prototype.hasOwnProperty;
class J2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = Ey(a);
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
function Ey(t) {
  let r = null, s = null, a = null, u = 1, l = null;
  if (Jn(t) || Cr(t))
    a = t, r = kv(t), s = Nf(t);
  else {
    if (!Cv.call(t, "name"))
      throw new Error(Q2("name"));
    const f = t.name;
    if (a = f, Cv.call(t, "weight") && (u = t.weight, u <= 0))
      throw new Error(K2(f));
    r = kv(f), s = Nf(f), l = t.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: l };
}
function kv(t) {
  return Cr(t) ? t : t.split(".");
}
function Nf(t) {
  return Cr(t) ? t.join(".") : t;
}
function W2(t, r) {
  let s = [], a = !1;
  const u = (l, f, m) => {
    if (En(l))
      if (!f[m])
        s.push(l);
      else {
        let p = f[m];
        const g = l[p];
        if (!En(g))
          return;
        if (m === f.length - 1 && (Jn(g) || by(g) || V2(g)))
          s.push(G2(g));
        else if (Cr(g)) {
          a = !0;
          for (let v = 0, E = g.length; v < E; v += 1)
            u(g[v], f, m + 1);
        } else f.length && u(g, f, m + 1);
      }
  };
  return u(t, Jn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const e3 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, t3 = {
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
}, n3 = {
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
}, r3 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: W2,
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
var Te = {
  ...t3,
  ...e3,
  ...n3,
  ...r3
};
const a3 = /[^ ]+/g;
function i3(t = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const l = u.match(a3).length;
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
class th {
  constructor({
    getFn: r = Te.getFn,
    fieldNormWeight: s = Te.fieldNormWeight
  } = {}) {
    this.norm = i3(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!En(r) || af(r))
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
      if (En(f)) {
        if (Cr(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: g, value: v } = p.pop();
            if (En(v))
              if (Jn(v) && !af(v)) {
                let E = {
                  v,
                  i: g,
                  n: this.norm.get(v)
                };
                m.push(E);
              } else Cr(v) && v.forEach((E, _) => {
                p.push({
                  nestedArrIndex: _,
                  value: E
                });
              });
          }
          a.$[l] = m;
        } else if (Jn(f) && !af(f)) {
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
function Cy(t, r, { getFn: s = Te.getFn, fieldNormWeight: a = Te.fieldNormWeight } = {}) {
  const u = new th({ getFn: s, fieldNormWeight: a });
  return u.setKeys(t.map(Ey)), u.setSources(r), u.create(), u;
}
function s3(t, { getFn: r = Te.getFn, fieldNormWeight: s = Te.fieldNormWeight } = {}) {
  const { keys: a, records: u } = t, l = new th({ getFn: r, fieldNormWeight: s });
  return l.setKeys(a), l.setIndexRecords(u), l;
}
function ku(t, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: a = 0,
  distance: u = Te.distance,
  ignoreLocation: l = Te.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (l)
    return f;
  const m = Math.abs(a - s);
  return u ? f + m / u : m ? 1 : f;
}
function o3(t = [], r = Te.minMatchCharLength) {
  let s = [], a = -1, u = -1, l = 0;
  for (let f = t.length; l < f; l += 1) {
    let m = t[l];
    m && a === -1 ? a = l : !m && a !== -1 && (u = l - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return t[l - 1] && l - a >= r && s.push([a, l - 1]), s;
}
const ja = 32;
function u3(t, r, s, {
  location: a = Te.location,
  distance: u = Te.distance,
  threshold: l = Te.threshold,
  findAllMatches: f = Te.findAllMatches,
  minMatchCharLength: m = Te.minMatchCharLength,
  includeMatches: p = Te.includeMatches,
  ignoreLocation: g = Te.ignoreLocation
} = {}) {
  if (r.length > ja)
    throw new Error(X2(ja));
  const v = r.length, E = t.length, _ = Math.max(0, Math.min(a, E));
  let S = l, h = _;
  const C = m > 1 || p, x = C ? Array(E) : [];
  let j;
  for (; (j = t.indexOf(r, h)) > -1; ) {
    let k = ku(r, {
      currentLocation: j,
      expectedLocation: _,
      distance: u,
      ignoreLocation: g
    });
    if (S = Math.min(k, S), h = j + v, C) {
      let M = 0;
      for (; M < v; )
        x[j + M] = 1, M += 1;
    }
  }
  h = -1;
  let N = [], P = 1, c = v + E;
  const y = 1 << v - 1;
  for (let k = 0; k < v; k += 1) {
    let M = 0, z = c;
    for (; M < z; )
      ku(r, {
        errors: k,
        currentLocation: _ + z,
        expectedLocation: _,
        distance: u,
        ignoreLocation: g
      }) <= S ? M = z : c = z, z = Math.floor((c - M) / 2 + M);
    c = z;
    let R = Math.max(1, _ - z + 1), L = f ? E : Math.min(_ + z, E) + v, q = Array(L + 2);
    q[L + 1] = (1 << k) - 1;
    for (let $ = L; $ >= R; $ -= 1) {
      let W = $ - 1, O = s[t.charAt(W)];
      if (C && (x[W] = +!!O), q[$] = (q[$ + 1] << 1 | 1) & O, k && (q[$] |= (N[$ + 1] | N[$]) << 1 | 1 | N[$ + 1]), q[$] & y && (P = ku(r, {
        errors: k,
        currentLocation: W,
        expectedLocation: _,
        distance: u,
        ignoreLocation: g
      }), P <= S)) {
        if (S = P, h = W, h <= _)
          break;
        R = Math.max(1, 2 * _ - h);
      }
    }
    if (ku(r, {
      errors: k + 1,
      currentLocation: _,
      expectedLocation: _,
      distance: u,
      ignoreLocation: g
    }) > S)
      break;
    N = q;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, P)
  };
  if (C) {
    const k = o3(x, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function l3(t) {
  let r = {};
  for (let s = 0, a = t.length; s < a; s += 1) {
    const u = t.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const Sl = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class ky {
  constructor(r, {
    location: s = Te.location,
    threshold: a = Te.threshold,
    distance: u = Te.distance,
    includeMatches: l = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: g = Te.ignoreDiacritics,
    ignoreLocation: v = Te.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: l,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: g,
      ignoreLocation: v
    }, r = p ? r : r.toLowerCase(), r = g ? Sl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (S, h) => {
      this.chunks.push({
        pattern: S,
        alphabet: l3(S),
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
    if (r = s ? r : r.toLowerCase(), r = a ? Sl(r) : r, this.pattern === r) {
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
      minMatchCharLength: g,
      ignoreLocation: v
    } = this.options;
    let E = [], _ = 0, S = !1;
    this.chunks.forEach(({ pattern: C, alphabet: x, startIndex: j }) => {
      const { isMatch: N, score: P, indices: c } = u3(r, C, x, {
        location: l + j,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: g,
        includeMatches: u,
        ignoreLocation: v
      });
      N && (S = !0), _ += P, N && c && (E = [...E, ...c]);
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
    return Av(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Av(r, this.singleRegex);
  }
  search() {
  }
}
function Av(t, r) {
  const s = t.match(r);
  return s ? s[1] : null;
}
class c3 extends aa {
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
class d3 extends aa {
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
class f3 extends aa {
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
class h3 extends aa {
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
class p3 extends aa {
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
class m3 extends aa {
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
class Ay extends aa {
  constructor(r, {
    location: s = Te.location,
    threshold: a = Te.threshold,
    distance: u = Te.distance,
    includeMatches: l = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: g = Te.ignoreDiacritics,
    ignoreLocation: v = Te.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new ky(r, {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: l,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: g,
      ignoreLocation: v
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
class xy extends aa {
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
const Of = [
  c3,
  xy,
  f3,
  h3,
  m3,
  p3,
  d3,
  Ay
], xv = Of.length, g3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, v3 = "|";
function y3(t, r = {}) {
  return t.split(v3).map((s) => {
    let a = s.trim().split(g3).filter((l) => l && !!l.trim()), u = [];
    for (let l = 0, f = a.length; l < f; l += 1) {
      const m = a[l];
      let p = !1, g = -1;
      for (; !p && ++g < xv; ) {
        const v = Of[g];
        let E = v.isMultiMatch(m);
        E && (u.push(new v(E, r)), p = !0);
      }
      if (!p)
        for (g = -1; ++g < xv; ) {
          const v = Of[g];
          let E = v.isSingleMatch(m);
          if (E) {
            u.push(new v(E, r));
            break;
          }
        }
    }
    return u;
  });
}
const _3 = /* @__PURE__ */ new Set([Ay.type, xy.type]);
class b3 {
  constructor(r, {
    isCaseSensitive: s = Te.isCaseSensitive,
    ignoreDiacritics: a = Te.ignoreDiacritics,
    includeMatches: u = Te.includeMatches,
    minMatchCharLength: l = Te.minMatchCharLength,
    ignoreLocation: f = Te.ignoreLocation,
    findAllMatches: m = Te.findAllMatches,
    location: p = Te.location,
    threshold: g = Te.threshold,
    distance: v = Te.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: a,
      includeMatches: u,
      minMatchCharLength: l,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: g,
      distance: v
    }, r = s ? r : r.toLowerCase(), r = a ? Sl(r) : r, this.pattern = r, this.query = y3(this.pattern, this.options);
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
    r = u ? r : r.toLowerCase(), r = l ? Sl(r) : r;
    let f = 0, m = [], p = 0;
    for (let g = 0, v = s.length; g < v; g += 1) {
      const E = s[g];
      m.length = 0, f = 0;
      for (let _ = 0, S = E.length; _ < S; _ += 1) {
        const h = E[_], { isMatch: C, indices: x, score: j } = h.search(r);
        if (C) {
          if (f += 1, p += j, a) {
            const N = h.constructor.type;
            _3.has(N) ? m = [...m, ...x] : m.push(x);
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
const Mf = [];
function S3(...t) {
  Mf.push(...t);
}
function Rf(t, r) {
  for (let s = 0, a = Mf.length; s < a; s += 1) {
    let u = Mf[s];
    if (u.condition(t, r))
      return new u(t, r);
  }
  return new ky(t, r);
}
const wl = {
  AND: "$and",
  OR: "$or"
}, jf = {
  PATH: "$path",
  PATTERN: "$val"
}, Df = (t) => !!(t[wl.AND] || t[wl.OR]), w3 = (t) => !!t[jf.PATH], E3 = (t) => !Cr(t) && Sy(t) && !Df(t), Tv = (t) => ({
  [wl.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function Ty(t, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let l = Object.keys(u);
    const f = w3(u);
    if (!f && l.length > 1 && !Df(u))
      return a(Tv(u));
    if (E3(u)) {
      const p = f ? u[jf.PATH] : l[0], g = f ? u[jf.PATTERN] : u[p];
      if (!Jn(g))
        throw new Error(F2(p));
      const v = {
        keyId: Nf(p),
        pattern: g
      };
      return s && (v.searcher = Rf(g, r)), v;
    }
    let m = {
      children: [],
      operator: l[0]
    };
    return l.forEach((p) => {
      const g = u[p];
      Cr(g) && g.forEach((v) => {
        m.children.push(a(v));
      });
    }), m;
  };
  return Df(t) || (t = Tv(t)), a(t);
}
function C3(t, { ignoreFieldNorm: r = Te.ignoreFieldNorm }) {
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
function k3(t, r) {
  const s = t.matches;
  r.matches = [], En(s) && s.forEach((a) => {
    if (!En(a.indices) || !a.indices.length)
      return;
    const { indices: u, value: l } = a;
    let f = {
      indices: u,
      value: l
    };
    a.key && (f.key = a.key.src), a.idx > -1 && (f.refIndex = a.idx), r.matches.push(f);
  });
}
function A3(t, r) {
  r.score = t.score;
}
function x3(t, r, {
  includeMatches: s = Te.includeMatches,
  includeScore: a = Te.includeScore
} = {}) {
  const u = [];
  return s && u.push(k3), a && u.push(A3), t.map((l) => {
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
    this.options = { ...Te, ...s }, this.options.useExtendedSearch, this._keyStore = new J2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof th))
      throw new Error(Y2);
    this._myIndex = s || Cy(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    En(r) && (this._docs.push(r), this._myIndex.add(r));
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
    return C3(p, { ignoreFieldNorm: m }), l && p.sort(f), by(s) && s > -1 && (p = p.slice(0, s)), x3(p, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = Rf(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: l, i: f, n: m }) => {
      if (!En(l))
        return;
      const { isMatch: p, score: g, indices: v } = s.searchIn(l);
      p && u.push({
        item: l,
        idx: f,
        matches: [{ score: g, value: l, norm: m, indices: v }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = Ty(r, this.options), a = (m, p, g) => {
      if (!m.children) {
        const { keyId: E, searcher: _ } = m, S = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: _
        });
        return S && S.length ? [
          {
            idx: g,
            item: p,
            matches: S
          }
        ] : [];
      }
      const v = [];
      for (let E = 0, _ = m.children.length; E < _; E += 1) {
        const S = m.children[E], h = a(S, p, g);
        if (h.length)
          v.push(...h);
        else if (m.operator === wl.AND)
          return [];
      }
      return v;
    }, u = this._myIndex.records, l = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (En(m)) {
        let g = a(s, m, p);
        g.length && (l[p] || (l[p] = { idx: p, item: m, matches: [] }, f.push(l[p])), g.forEach(({ matches: v }) => {
          l[p].matches.push(...v);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = Rf(r, this.options), { keys: a, records: u } = this._myIndex, l = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!En(f))
        return;
      let p = [];
      a.forEach((g, v) => {
        p.push(
          ...this._findMatches({
            key: g,
            value: f[v],
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
    if (!En(s))
      return [];
    let u = [];
    if (Cr(s))
      s.forEach(({ v: l, i: f, n: m }) => {
        if (!En(l))
          return;
        const { isMatch: p, score: g, indices: v } = a.searchIn(l);
        p && u.push({
          score: g,
          key: r,
          value: l,
          idx: f,
          norm: m,
          indices: v
        });
      });
    else {
      const { v: l, n: f } = s, { isMatch: m, score: p, indices: g } = a.searchIn(l);
      m && u.push({ score: p, key: r, value: l, norm: f, indices: g });
    }
    return u;
  }
}
Ui.version = "7.1.0";
Ui.createIndex = Cy;
Ui.parseIndex = s3;
Ui.config = Te;
Ui.parseQuery = Ty;
S3(b3);
var T3 = Object.defineProperty, N3 = (t, r, s) => r in t ? T3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, O3 = (t, r, s) => N3(t, r + "", s);
let M3 = class {
  constructor() {
    O3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        for await (const g of m())
          p = g, s != null && s.onEntry && await s.onEntry(l, g);
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
async function R3(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Se(t, r, { escapeHtml: s = !0 } = {}) {
  await R3("echo", { severity: t, escapeHtml: (!!s).toString() }, r);
}
function sf(t) {
  return o2(t);
}
function Nv(t, r) {
  return i2(t, r);
}
function Au(t, r, s) {
  return s2(t, r, s);
}
function j3(t, r, s) {
  return v2(t, r, s);
}
function D3(t, r) {
  return y2(t, r);
}
function z3(t, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return a2(t, { customStoryString: r, customInstructSettings: s });
}
function Ta(t) {
  return C2(t);
}
function L3() {
  return {
    prompt: Ls[Ps.prompt],
    interval: Ls[Ps.interval],
    position: Ls[Ps.position],
    depth: Ls[Ps.depth],
    role: Ls[Ps.role]
  };
}
function P3(t, r) {
  return A2(t, r);
}
function I3({
  name2: t,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
  worldInfoBefore: u,
  worldInfoAfter: l,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: g,
  extensionPrompts: v,
  cyclePrompt: E,
  systemPromptOverride: _,
  jailbreakPromptOverride: S,
  personaDescription: h,
  messages: C,
  messageExamples: x
}, j) {
  return k2(
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
      quietImage: g,
      cyclePrompt: E,
      systemPromptOverride: _,
      jailbreakPromptOverride: S,
      personaDescription: h,
      extensionPrompts: v,
      messages: C,
      messageExamples: x
    },
    j
  );
}
function B3(t) {
  return b2(t);
}
function U3(t) {
  return S2(t);
}
function H3(t, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: l,
  depth: f
}) {
  return T2(t, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: l, depth: f });
}
function q3(t, r, { characterOverride: s = null } = {}) {
  return x2(t, r, { characterOverride: s });
}
async function Z3(t, r) {
  return await _2(t, r);
}
function Ov(t, {
  wiFormat: r
} = {}) {
  return w2(t, { wiFormat: r });
}
function Us(t) {
  return E2(t);
}
function Ny(t, {
  manualAvatarKey: r
} = {}) {
  return N2(t, { manualAvatarKey: r });
}
function nh(t, r) {
  return c2(t, r);
}
class G3 {
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
var V3 = Object.defineProperty, $3 = (t, r, s) => r in t ? V3(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[r] = s, xu = (t, r, s) => $3(t, typeof r != "symbol" ? r + "" : r, s);
class Y3 {
  constructor(r) {
    xu(this, "messages", []), xu(this, "tokenizer"), xu(this, "maxContext"), xu(this, "currentTokenCount", 0), this.tokenizer = new G3(), this.maxContext = r;
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
      const p = s[m], g = a[m];
      if (this.currentTokenCount + l + g <= this.maxContext)
        f.unshift(p), l += g;
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
async function Oy(t, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: l,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: g,
  ignoreWorldInfo: v,
  messageIndexesBetween: E
} = {}) {
  var _, S, h, C, x, j, N, P, c, y, w, k, M, z;
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
  let B = Nv(W, ae);
  function Y() {
    var ve, ye;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return sf();
    if (typeof f == "number")
      return f;
    let Ve;
    if (t === "textgenerationwebui") {
      const Ze = (ve = R.getPresetManager("textgenerationwebui")) == null ? void 0 : ve.getCompletionPresetByName(s);
      Ve = Ze?.max_length;
    } else {
      const Ze = (ye = R.getPresetManager("openai")) == null ? void 0 : ye.getCompletionPresetByName(s);
      Ve = Ze?.openai_max_context;
    }
    return typeof Ve == "number" ? Ve : sf();
  }
  let ce = [];
  const G = Y();
  if (G <= 0)
    return { result: [], warnings: ce };
  const I = new Y3(G), te = R.ToolManager.isToolCallingSupported(), Q = E?.start ?? 0, se = E != null && E.end ? E.end + 1 : void 0;
  let re = Q === -1 && se === 0 ? [] : R.chat.slice(Q, se).filter((ve) => {
    var ye;
    return !ve.is_system || te && Array.isArray((ye = ve.extra) == null ? void 0 : ye.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ve, ye) => {
      var Ve, Ze;
      let it = ve.mes, xr = ve.is_user ? lv.USER_INPUT : lv.AI_OUTPUT, nr = { isPrompt: !0, depth: re.length - ye - 1 }, mt = H3(it, xr, nr);
      return mt = await Z3(ve, mt), (Ve = ve?.extra) != null && Ve.append_title && (Ze = ve?.extra) != null && Ze.title && (mt = `${mt}

${ve.extra.title}`), {
        ...ve,
        mes: mt,
        index: ye
      };
    })
  );
  const pe = re.map((ve) => d2 ? `${ve.name}: ${ve.mes}` : ve.mes).reverse(), { worldInfoString: je, worldInfoBefore: He, worldInfoAfter: be, worldInfoExamples: fe, worldInfoDepth: me, anBefore: Ne, anAfter: ze } = v ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await R.getWorldInfoPrompt(pe, G, !1);
  for (const ve of fe) {
    const ye = ve.content;
    if (ye.length === 0)
      continue;
    const Ve = Au(ye, Aa, Kr), Ze = Nv(Ve, ae);
    ve.position === f2.before ? B.unshift(...Ze) : B.push(...Ze);
  }
  function Ye() {
    const ve = [];
    for (let ye = re.length - 1; ye >= 0; ye--) {
      const Ve = re[ye], Ze = Ve.name === "System" && !Ve.is_user ? "system" : Ve.is_user ? "user" : "assistant";
      ve.unshift({
        role: Ze,
        content: m && Ze != "system" ? `${Ve.name}: ${Ve.mes}` : Ve.mes,
        source: Ve
      });
    }
    I.addMany(ve);
  }
  if (t === "textgenerationwebui") {
    const ve = [...B];
    B && (B = j3(B, Aa, Kr));
    const ye = (S = R.getPresetManager("sysprompt")) == null ? void 0 : S.getCompletionPresetByName(l);
    ye && (O = R.powerUserSettings.prefer_character_prompt && O ? O : Au(ye.content, Aa, Kr), O = ae ? D3(
      R.substituteParams(O, Aa, Kr, ye.content),
      J
    ) : O);
    const Ve = {
      description: L,
      personality: q,
      persona: R.powerUserSettings.persona_description_position == ov.IN_PROMPT ? F : "",
      scenario: $,
      system: O,
      char: Kr,
      user: Aa,
      wiBefore: He,
      wiAfter: be,
      loreBefore: He,
      loreAfter: be,
      mesExamples: B.join(""),
      mesExamplesRaw: ve.join("")
    }, Ze = (h = R.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let it = z3(Ve, {
      customInstructSettings: J,
      customStoryString: Ze?.story_string
    });
    it && I.add({ role: "system", content: it, ignoreInstruct: !0 }), Ye();
  } else {
    let ve = function($t) {
      const Jt = Cn.find((Ua) => Ua.identifier === $t);
      if (Jt)
        return Jt;
      const po = it.prompts.find((Ua) => Ua.identifier === $t);
      if (po)
        return po;
    }, ye = B3(re), Ve = U3(B);
    async function Ze() {
      let [$t, Jt] = await I3(
        {
          name2: Kr,
          charDescription: L,
          charPersonality: q,
          Scenario: $,
          worldInfoBefore: He,
          worldInfoAfter: be,
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
          messageExamples: Ve
        },
        !1
      );
      I.addMany($t);
    }
    if (!s)
      return ce.push("No preset name provided. Using default preset."), await Ze(), { result: I.getMessages(), warnings: ce };
    const it = (C = R.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!it)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ce.push(`Preset not found: ${s}. Using current preset.`), Ze(), { result: I.getMessages(), warnings: ce };
    let xr = (x = it.prompt_order) == null ? void 0 : x.find(($t) => $t.character_id === un);
    if (!xr && it.prompt_order && it.prompt_order.length > 0 && (xr = it.prompt_order[it.prompt_order.length - 1]), !xr)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ce.push(`No prompt order found for preset: ${s}. Using current preset.`), Ze(), { result: I.getMessages(), warnings: ce };
    const nr = $ && it.scenario_format ? R.substituteParams(it.scenario_format) : "", mt = q && it.personality_format ? R.substituteParams(it.personality_format) : "", Vn = R.substituteParams(it.group_nudge_prompt), Vt = it.impersonation_prompt ? R.substituteParams(it.impersonation_prompt) : "", Cn = [];
    v || Cn.push(
      {
        role: "system",
        content: Ov(He, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Ov(be, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || Cn.push(
      { role: "system", content: L, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: nr, identifier: "scenario" }
    ), Cn.push(
      { role: "system", content: Vt, identifier: "impersonate" },
      { role: "system", content: Vn, identifier: "groupNudge" }
    );
    const oa = R.extensionPrompts["1_memory"];
    oa && oa.value && Cn.push({
      role: Ta(oa.role),
      content: oa.value,
      identifier: "summary",
      position: Us(oa.position)
    });
    const ua = R.extensionPrompts["2_floating_prompt"];
    !g && ua && ua.value && Cn.push({
      role: Ta(ua.role),
      content: ua.value,
      identifier: "authorsNote",
      position: Us(ua.position)
    });
    const rr = R.extensionPrompts["3_vectors"];
    rr && rr.value && Cn.push({
      role: "system",
      content: rr.value,
      identifier: "vectorsMemory",
      position: Us(rr.position)
    });
    const $n = R.extensionPrompts["4_vectors_data_bank"];
    $n && $n.value && Cn.push({
      role: Ta($n.role),
      content: $n.value,
      identifier: "vectorsDataBank",
      position: Us($n.position)
    });
    const kn = R.extensionPrompts.chromadb;
    kn && kn.value && Cn.push({
      role: "system",
      content: kn.value,
      identifier: "smartContext",
      position: Us(kn.position)
    }), !p && R.powerUserSettings.persona_description && R.powerUserSettings.persona_description_position === ov.IN_PROMPT && Cn.push({
      role: "system",
      content: R.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), xr.order.forEach(($t) => {
      if (!$t.enabled)
        return;
      const Jt = ve($t.identifier);
      if (Jt && Jt.content) {
        I.add({
          role: Jt.role ?? "system",
          content: R.substituteParams(Jt.content)
        });
        return;
      }
      $t.identifier === "chatHistory" && Ye();
    });
  }
  const fn = [
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
      if (fn.includes(ve) || !R.extensionPrompts[ve].value || ![xa.BEFORE_PROMPT, xa.IN_PROMPT].includes(ye.position) || typeof ye.filter == "function" && !await ye.filter()) continue;
      const Ve = {
        role: Ta(ye.role) ?? "system",
        content: ye.value
      };
      if (ye.position === xa.BEFORE_PROMPT)
        I.insert(ye.depth, Ve);
      else if (ye.position === xa.IN_PROMPT) {
        const Ze = I.getMessages();
        I.insert(Ze.length - ye.depth, Ve);
      }
    }
  for (const ve of me) {
    const ye = I.getMessages();
    I.insert(ye.length - ve.depth, {
      role: Ta(ve.role),
      content: ve.entries.join(`
`)
    });
  }
  if (!p) {
    const ve = P3(Kt, Number(un));
    if (Kt && Array.isArray(ve) && ve.length > 0)
      ve.filter((ye) => ye.text).forEach((ye, Ve) => {
        const Ze = I.getMessages();
        I.insert(Ze.length - ye.depth, { role: ye.role, content: ye.text });
      });
    else {
      const ye = Au(
        (y = (c = (P = (N = (j = R.characters[un]) == null ? void 0 : j.data) == null ? void 0 : N.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : c.prompt) == null ? void 0 : y.trim(),
        Aa,
        Kr
      ) || "";
      if (ye) {
        const Ve = l2, Ze = ((z = (M = (k = (w = R.characters[un]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : M.depth_prompt) == null ? void 0 : z.role) ?? u2, it = I.getMessages();
        I.insert(it.length - Ve, {
          role: Ta(Ze),
          content: ye
        });
      }
    }
  }
  let bt = -1;
  if (!g) {
    const ve = L3();
    if (ve.prompt) {
      ve.prompt = Au(ve.prompt, Aa, Kr);
      const ye = { role: Ta(ve.role), content: ve.prompt };
      switch (ve.position) {
        case xa.IN_PROMPT:
          I.insert(1, ye), bt = 1;
          break;
        case xa.IN_CHAT:
          bt = I.getMessages().length - ve.depth, I.insert(bt, ye);
          break;
        case xa.BEFORE_PROMPT:
          I.addFront(ye), bt = 0;
          break;
      }
    }
  }
  return bt >= 0 && (Ne.length > 0 && (I.insert(bt, { role: "system", content: Ne.join(`
`) }), bt++), ze.length > 0 && I.insert(bt + 1, { role: "system", content: ze.join(`
`) })), { result: I.getMessages(), warnings: ce };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Mv(t, r) {
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
    r % 2 ? Mv(Object(s), !0).forEach(function(a) {
      F3(t, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : Mv(Object(s)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return t;
}
function hl(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hl = function(r) {
    return typeof r;
  } : hl = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, hl(t);
}
function F3(t, r, s) {
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
function X3(t, r) {
  if (t == null) return {};
  var s = {}, a = Object.keys(t), u, l;
  for (l = 0; l < a.length; l++)
    u = a[l], !(r.indexOf(u) >= 0) && (s[u] = t[u]);
  return s;
}
function Q3(t, r) {
  if (t == null) return {};
  var s = X3(t, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      a = l[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (s[a] = t[a]);
  }
  return s;
}
var K3 = "1.15.6";
function wr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Ar = wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), uo = wr(/Edge/i), Rv = wr(/firefox/i), eo = wr(/safari/i) && !wr(/chrome/i) && !wr(/android/i), rh = wr(/iP(ad|od|hone)/i), My = wr(/chrome/i) && wr(/android/i), Ry = {
  capture: !1,
  passive: !1
};
function qe(t, r, s) {
  t.addEventListener(r, s, !Ar && Ry);
}
function Ue(t, r, s) {
  t.removeEventListener(r, s, !Ar && Ry);
}
function El(t, r) {
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
function jy(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Zn(t, r, s, a) {
  if (t) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === s && El(t, r) : El(t, r)) || a && t === s)
        return t;
      if (t === s) break;
    } while (t = jy(t));
  }
  return null;
}
var jv = /\s+/g;
function Sn(t, r, s) {
  if (t && r)
    if (t.classList)
      t.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + t.className + " ").replace(jv, " ").replace(" " + r + " ", " ");
      t.className = (a + (s ? " " + r : "")).replace(jv, " ");
    }
}
function Ae(t, r, s) {
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
      var a = Ae(t, "transform");
      a && a !== "none" && (s = a + " " + s);
    } while (!r && (t = t.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function Dy(t, r, s) {
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
    var l, f, m, p, g, v, E;
    if (t !== window && t.parentNode && t !== Wn() ? (l = t.getBoundingClientRect(), f = l.top, m = l.left, p = l.bottom, g = l.right, v = l.height, E = l.width) : (f = 0, m = 0, p = window.innerHeight, g = window.innerWidth, v = window.innerHeight, E = window.innerWidth), (r || s) && t !== window && (u = u || t.parentNode, !Ar))
      do
        if (u && u.getBoundingClientRect && (Ae(u, "transform") !== "none" || s && Ae(u, "position") !== "static")) {
          var _ = u.getBoundingClientRect();
          f -= _.top + parseInt(Ae(u, "border-top-width")), m -= _.left + parseInt(Ae(u, "border-left-width")), p = f + l.height, g = m + l.width;
          break;
        }
      while (u = u.parentNode);
    if (a && t !== window) {
      var S = Pi(u || t), h = S && S.a, C = S && S.d;
      S && (f /= C, m /= h, E /= h, v /= C, p = f + v, g = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: g,
      width: E,
      height: v
    };
  }
}
function Dv(t, r, s) {
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
    if (f[l].style.display !== "none" && f[l] !== xe.ghost && (a || f[l] !== xe.dragged) && Zn(f[l], s.draggable, t, !1)) {
      if (u === r)
        return f[l];
      u++;
    }
    l++;
  }
  return null;
}
function ah(t, r) {
  for (var s = t.lastElementChild; s && (s === xe.ghost || Ae(s, "display") === "none" || r && !El(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function zn(t, r) {
  var s = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== xe.clone && (!r || El(t, r)) && s++;
  return s;
}
function zv(t) {
  var r = 0, s = 0, a = Wn();
  if (t)
    do {
      var u = Pi(t), l = u.a, f = u.d;
      r += t.scrollLeft * l, s += t.scrollTop * f;
    } while (t !== a && (t = t.parentNode));
  return [r, s];
}
function J3(t, r) {
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
      var u = Ae(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return Wn();
        if (a || r) return s;
        a = !0;
      }
    }
  while (s = s.parentNode);
  return Wn();
}
function W3(t, r) {
  if (t && r)
    for (var s in r)
      r.hasOwnProperty(s) && (t[s] = r[s]);
  return t;
}
function of(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var to;
function zy(t, r) {
  return function() {
    if (!to) {
      var s = arguments, a = this;
      s.length === 1 ? t.call(a, s[0]) : t.apply(a, s), to = setTimeout(function() {
        to = void 0;
      }, r);
    }
  };
}
function e8() {
  clearTimeout(to), to = void 0;
}
function Ly(t, r, s) {
  t.scrollLeft += r, t.scrollTop += s;
}
function Py(t) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : s ? s(t).clone(!0)[0] : t.cloneNode(!0);
}
function Iy(t, r, s) {
  var a = {};
  return Array.from(t.children).forEach(function(u) {
    var l, f, m, p;
    if (!(!Zn(u, r.draggable, t, !1) || u.animated || u === s)) {
      var g = Ct(u);
      a.left = Math.min((l = a.left) !== null && l !== void 0 ? l : 1 / 0, g.left), a.top = Math.min((f = a.top) !== null && f !== void 0 ? f : 1 / 0, g.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, g.right), a.bottom = Math.max((p = a.bottom) !== null && p !== void 0 ? p : -1 / 0, g.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var on = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function t8() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(u) {
          if (!(Ae(u, "display") === "none" || u === xe.ghost)) {
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
      t.splice(J3(t, {
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
        var p = 0, g = m.target, v = g.fromRect, E = Ct(g), _ = g.prevFromRect, S = g.prevToRect, h = m.rect, C = Pi(g, !0);
        C && (E.top -= C.f, E.left -= C.e), g.toRect = E, g.thisAnimationDuration && of(_, E) && !of(v, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (v.top - E.top) / (v.left - E.left) && (p = r8(h, _, S, u.options)), of(E, v) || (g.prevFromRect = v, g.prevToRect = E, p || (p = u.options.animation), u.animate(g, h, E, p)), p && (l = !0, f = Math.max(f, p), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, p), g.thisAnimationDuration = p);
      }), clearTimeout(r), l ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, f) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, u, l, f) {
      if (f) {
        Ae(a, "transition", ""), Ae(a, "transform", "");
        var m = Pi(this.el), p = m && m.a, g = m && m.d, v = (u.left - l.left) / (p || 1), E = (u.top - l.top) / (g || 1);
        a.animatingX = !!v, a.animatingY = !!E, Ae(a, "transform", "translate3d(" + v + "px," + E + "px,0)"), this.forRepaintDummy = n8(a), Ae(a, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ae(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          Ae(a, "transition", ""), Ae(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, f);
      }
    }
  };
}
function n8(t) {
  return t.offsetWidth;
}
function r8(t, r, s, a) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var xi = [], uf = {
  initializeByDefault: !0
}, lo = {
  mount: function(r) {
    for (var s in uf)
      uf.hasOwnProperty(s) && !(s in r) && (r[s] = uf[s]);
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
        var g = new m(r, s, r.options);
        g.sortable = r, g.options = r.options, r[p] = g, kr(a, g.defaults);
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
function a8(t) {
  var r = t.sortable, s = t.rootEl, a = t.name, u = t.targetEl, l = t.cloneEl, f = t.toEl, m = t.fromEl, p = t.oldIndex, g = t.newIndex, v = t.oldDraggableIndex, E = t.newDraggableIndex, _ = t.originalEvent, S = t.putSortable, h = t.extraEventProperties;
  if (r = r || s && s[on], !!r) {
    var C, x = r.options, j = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Ar && !uo ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = l, C.oldIndex = p, C.newIndex = g, C.oldDraggableIndex = v, C.newDraggableIndex = E, C.originalEvent = _, C.pullMode = S ? S.lastPutMode : void 0;
    var N = tr(tr({}, h), lo.getEventProperties(a, r));
    for (var P in N)
      C[P] = N[P];
    s && s.dispatchEvent(C), x[j] && x[j].call(r, C);
  }
}
var i8 = ["evt"], an = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, l = Q3(a, i8);
  lo.pluginEvent.bind(xe)(r, s, tr({
    dragEl: he,
    parentEl: pt,
    ghostEl: Me,
    rootEl: ot,
    nextEl: Ma,
    lastDownEl: pl,
    cloneEl: ct,
    cloneHidden: ta,
    dragStarted: Xs,
    putSortable: It,
    activeSortable: xe.active,
    originalEvent: u,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: wn,
    newDraggableIndex: ea,
    hideGhostForTarget: qy,
    unhideGhostForTarget: Zy,
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
  a8(tr({
    putSortable: It,
    cloneEl: ct,
    targetEl: he,
    rootEl: ot,
    oldIndex: Di,
    oldDraggableIndex: no,
    newIndex: wn,
    newDraggableIndex: ea
  }, t));
}
var he, pt, Me, ot, Ma, pl, ct, ta, Di, wn, no, ea, Tu, It, ji = !1, Cl = !1, kl = [], Na, Un, lf, cf, Lv, Pv, Xs, Ti, ro, ao = !1, Nu = !1, ml, Gt, df = [], zf = !1, Al = [], Dl = typeof document < "u", Ou = rh, Iv = uo || Ar ? "cssFloat" : "float", s8 = Dl && !My && !rh && "draggable" in document.createElement("div"), By = (function() {
  if (Dl) {
    if (Ar)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), Uy = function(r, s) {
  var a = Ae(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), l = Bi(r, 0, s), f = Bi(r, 1, s), m = l && Ae(l), p = f && Ae(f), g = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Ct(l).width, v = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Ct(f).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (l && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return l && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || g >= u && a[Iv] === "none" || f && a[Iv] === "none" && g + v > u) ? "vertical" : "horizontal";
}, o8 = function(r, s, a) {
  var u = a ? r.left : r.top, l = a ? r.right : r.bottom, f = a ? r.width : r.height, m = a ? s.left : s.top, p = a ? s.right : s.bottom, g = a ? s.width : s.height;
  return u === m || l === p || u + f / 2 === m + g / 2;
}, u8 = function(r, s) {
  var a;
  return kl.some(function(u) {
    var l = u[on].options.emptyInsertThreshold;
    if (!(!l || ah(u))) {
      var f = Ct(u), m = r >= f.left - l && r <= f.right + l, p = s >= f.top - l && s <= f.bottom + l;
      if (m && p)
        return a = u;
    }
  }), a;
}, Hy = function(r) {
  function s(l, f) {
    return function(m, p, g, v) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (l == null && (f || E))
        return !0;
      if (l == null || l === !1)
        return !1;
      if (f && l === "clone")
        return l;
      if (typeof l == "function")
        return s(l(m, p, g, v), f)(m, p, g, v);
      var _ = (f ? m : p).options.group.name;
      return l === !0 || typeof l == "string" && l === _ || l.join && l.indexOf(_) > -1;
    };
  }
  var a = {}, u = r.group;
  (!u || hl(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, qy = function() {
  !By && Me && Ae(Me, "display", "none");
}, Zy = function() {
  !By && Me && Ae(Me, "display", "");
};
Dl && !My && document.addEventListener("click", function(t) {
  if (Cl)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Cl = !1, !1;
}, !0);
var Oa = function(r) {
  if (he) {
    r = r.touches ? r.touches[0] : r;
    var s = u8(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[on]._onDragOver(a);
    }
  }
}, l8 = function(r) {
  he && he.parentNode[on]._isOutsideThisEl(r.target);
};
function xe(t, r) {
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
      return Uy(t, this.options);
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
    supportPointer: xe.supportPointer !== !1 && "PointerEvent" in window && (!eo || rh),
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, t, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  Hy(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : s8, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? qe(t, "pointerdown", this._onTapStart) : (qe(t, "mousedown", this._onTapStart), qe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (qe(t, "dragover", this), qe(t, "dragenter", this)), kl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), kr(this, t8());
}
xe.prototype = /** @lends Sortable.prototype */
{
  constructor: xe,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, he) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, a = this.el, u = this.options, l = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, v = u.filter;
      if (v8(a), !he && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !g.isContentEditable && !(!this.nativeDraggable && eo && p && p.tagName.toUpperCase() === "SELECT") && (p = Zn(p, u.draggable, a, !1), !(p && p.animated) && pl !== p)) {
        if (Di = zn(p), no = zn(p, u.draggable), typeof v == "function") {
          if (v.call(this, r, p, this)) {
            Ft({
              sortable: s,
              rootEl: g,
              name: "filter",
              targetEl: p,
              toEl: a,
              fromEl: a
            }), an("filter", s, {
              evt: r
            }), l && r.preventDefault();
            return;
          }
        } else if (v && (v = v.split(",").some(function(E) {
          if (E = Zn(g, E.trim(), a, !1), E)
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
        }), v)) {
          l && r.preventDefault();
          return;
        }
        u.handle && !Zn(g, u.handle, a, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, l = u.el, f = u.options, m = l.ownerDocument, p;
    if (a && !he && a.parentNode === l) {
      var g = Ct(a);
      if (ot = l, he = a, pt = he.parentNode, Ma = he.nextSibling, pl = a, Tu = f.group, xe.dragged = he, Na = {
        target: he,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, Lv = Na.clientX - g.left, Pv = Na.clientY - g.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, he.style["will-change"] = "all", p = function() {
        if (an("delayEnded", u, {
          evt: r
        }), xe.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !Rv && u.nativeDraggable && (he.draggable = !0), u._triggerDragStart(r, s), Ft({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), Sn(he, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(v) {
        Dy(he, v.trim(), ff);
      }), qe(m, "dragover", Oa), qe(m, "mousemove", Oa), qe(m, "touchmove", Oa), f.supportPointer ? (qe(m, "pointerup", u._onDrop), !this.nativeDraggable && qe(m, "pointercancel", u._onDrop)) : (qe(m, "mouseup", u._onDrop), qe(m, "touchend", u._onDrop), qe(m, "touchcancel", u._onDrop)), Rv && this.nativeDraggable && (this.options.touchStartThreshold = 4, he.draggable = !0), an("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(uo || Ar))) {
        if (xe.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (qe(m, "pointerup", u._disableDelayedDrag), qe(m, "pointercancel", u._disableDelayedDrag)) : (qe(m, "mouseup", u._disableDelayedDrag), qe(m, "touchend", u._disableDelayedDrag), qe(m, "touchcancel", u._disableDelayedDrag)), qe(m, "mousemove", u._delayedDragTouchMoveHandler), qe(m, "touchmove", u._delayedDragTouchMoveHandler), f.supportPointer && qe(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    he && ff(he), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? qe(document, "pointermove", this._onTouchMove) : s ? qe(document, "touchmove", this._onTouchMove) : qe(document, "mousemove", this._onTouchMove) : (qe(he, "dragend", this), qe(ot, "dragstart", this._onDragStart));
    try {
      document.selection ? gl(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (ji = !1, ot && he) {
      an("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && qe(document, "dragover", l8);
      var a = this.options;
      !r && Sn(he, a.dragClass, !1), Sn(he, a.ghostClass, !0), xe.active = this, r && this._appendGhost(), Ft({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Un) {
      this._lastX = Un.clientX, this._lastY = Un.clientY, qy();
      for (var r = document.elementFromPoint(Un.clientX, Un.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Un.clientX, Un.clientY), r !== s); )
        s = r;
      if (he.parentNode[on]._isOutsideThisEl(r), s)
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
        } while (s = jy(s));
      Zy();
    }
  },
  _onTouchMove: function(r) {
    if (Na) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, l = r.touches ? r.touches[0] : r, f = Me && Pi(Me, !0), m = Me && f && f.a, p = Me && f && f.d, g = Ou && Gt && zv(Gt), v = (l.clientX - Na.clientX + u.x) / (m || 1) + (g ? g[0] - df[0] : 0) / (m || 1), E = (l.clientY - Na.clientY + u.y) / (p || 1) + (g ? g[1] - df[1] : 0) / (p || 1);
      if (!xe.active && !ji) {
        if (a && Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += v - (lf || 0), f.f += E - (cf || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: v,
          f: E
        };
        var _ = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Ae(Me, "webkitTransform", _), Ae(Me, "mozTransform", _), Ae(Me, "msTransform", _), Ae(Me, "transform", _), lf = v, cf = E, Un = l;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : ot, s = Ct(he, !0, Ou, !0, r), a = this.options;
      if (Ou) {
        for (Gt = r; Ae(Gt, "position") === "static" && Ae(Gt, "transform") === "none" && Gt !== document; )
          Gt = Gt.parentNode;
        Gt !== document.body && Gt !== document.documentElement ? (Gt === document && (Gt = Wn()), s.top += Gt.scrollTop, s.left += Gt.scrollLeft) : Gt = Wn(), df = zv(Gt);
      }
      Me = he.cloneNode(!0), Sn(Me, a.ghostClass, !1), Sn(Me, a.fallbackClass, !0), Sn(Me, a.dragClass, !0), Ae(Me, "transition", ""), Ae(Me, "transform", ""), Ae(Me, "box-sizing", "border-box"), Ae(Me, "margin", 0), Ae(Me, "top", s.top), Ae(Me, "left", s.left), Ae(Me, "width", s.width), Ae(Me, "height", s.height), Ae(Me, "opacity", "0.8"), Ae(Me, "position", Ou ? "absolute" : "fixed"), Ae(Me, "zIndex", "100000"), Ae(Me, "pointerEvents", "none"), xe.ghost = Me, r.appendChild(Me), Ae(Me, "transform-origin", Lv / parseInt(Me.style.width) * 100 + "% " + Pv / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var a = this, u = r.dataTransfer, l = a.options;
    if (an("dragStart", this, {
      evt: r
    }), xe.eventCanceled) {
      this._onDrop();
      return;
    }
    an("setupClone", this), xe.eventCanceled || (ct = Py(he), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), Sn(ct, this.options.chosenClass, !1), xe.clone = ct), a.cloneId = gl(function() {
      an("clone", a), !xe.eventCanceled && (a.options.removeCloneOnHide || ot.insertBefore(ct, he), a._hideClone(), Ft({
        sortable: a,
        name: "clone"
      }));
    }), !s && Sn(he, l.dragClass, !0), s ? (Cl = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Ue(document, "mouseup", a._onDrop), Ue(document, "touchend", a._onDrop), Ue(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", l.setData && l.setData.call(a, u, he)), qe(document, "drop", a), Ae(he, "transform", "translateZ(0)")), ji = !0, a._dragStartId = gl(a._dragStarted.bind(a, s, r)), qe(document, "selectstart", a), Xs = !0, window.getSelection().removeAllRanges(), eo && Ae(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, l, f, m = this.options, p = m.group, g = xe.active, v = Tu === p, E = m.sort, _ = It || g, S, h = this, C = !1;
    if (zf) return;
    function x(J, ae) {
      an(J, h, tr({
        evt: r,
        isOwner: v,
        axis: S ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: l,
        canSort: E,
        fromSortable: _,
        target: a,
        completed: N,
        onMove: function(Y, ce) {
          return Mu(ot, s, he, u, Y, Ct(Y), r, ce);
        },
        changed: P
      }, ae));
    }
    function j() {
      x("dragOverAnimationCapture"), h.captureAnimationState(), h !== _ && _.captureAnimationState();
    }
    function N(J) {
      return x("dragOverCompleted", {
        insertion: J
      }), J && (v ? g._hideClone() : g._showClone(h), h !== _ && (Sn(he, It ? It.options.ghostClass : g.options.ghostClass, !1), Sn(he, m.ghostClass, !0)), It !== h && h !== xe.active ? It = h : h === xe.active && It && (It = null), _ === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        x("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (a === he && !he.animated || a === s && !a.animated) && (Ti = null), !m.dragoverBubble && !r.rootEl && a !== document && (he.parentNode[on]._isOutsideThisEl(r.target), !J && Oa(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function P() {
      wn = zn(he), ea = zn(he, m.draggable), Ft({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: wn,
        newDraggableIndex: ea,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), a = Zn(a, m.draggable, s, !0), x("dragOver"), xe.eventCanceled) return C;
    if (he.contains(r.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return N(!1);
    if (Cl = !1, g && !m.disabled && (v ? E || (f = pt !== ot) : It === this || (this.lastPutMode = Tu.checkPull(this, g, he, r)) && p.checkPut(this, g, he, r))) {
      if (S = this._getDirection(r, a) === "vertical", u = Ct(he), x("dragOverValid"), xe.eventCanceled) return C;
      if (f)
        return pt = ot, j(), this._hideClone(), x("revert"), xe.eventCanceled || (Ma ? ot.insertBefore(he, Ma) : ot.appendChild(he)), N(!0);
      var c = ah(s, m.draggable);
      if (!c || h8(r, S, this) && !c.animated) {
        if (c === he)
          return N(!1);
        if (c && s === r.target && (a = c), a && (l = Ct(a)), Mu(ot, s, he, u, a, l, r, !!a) !== !1)
          return j(), c && c.nextSibling ? s.insertBefore(he, c.nextSibling) : s.appendChild(he), pt = s, P(), N(!0);
      } else if (c && f8(r, S, this)) {
        var y = Bi(s, 0, m, !0);
        if (y === he)
          return N(!1);
        if (a = y, l = Ct(a), Mu(ot, s, he, u, a, l, r, !1) !== !1)
          return j(), s.insertBefore(he, y), pt = s, P(), N(!0);
      } else if (a.parentNode === s) {
        l = Ct(a);
        var w = 0, k, M = he.parentNode !== s, z = !o8(he.animated && he.toRect || u, a.animated && a.toRect || l, S), R = S ? "top" : "left", L = Dv(a, "top", "top") || Dv(he, "top", "top"), q = L ? L.scrollTop : void 0;
        Ti !== a && (k = l[R], ao = !1, Nu = !z && m.invertSwap || M), w = p8(r, a, l, S, z ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Nu, Ti === a);
        var F;
        if (w !== 0) {
          var $ = zn(he);
          do
            $ -= w, F = pt.children[$];
          while (F && (Ae(F, "display") === "none" || F === Me));
        }
        if (w === 0 || F === a)
          return N(!1);
        Ti = a, ro = w;
        var W = a.nextElementSibling, O = !1;
        O = w === 1;
        var U = Mu(ot, s, he, u, a, l, r, O);
        if (U !== !1)
          return (U === 1 || U === -1) && (O = U === 1), zf = !0, setTimeout(d8, 30), j(), O && !W ? s.appendChild(he) : a.parentNode.insertBefore(he, O ? W : a), L && Ly(L, 0, q - L.scrollTop), pt = he.parentNode, k !== void 0 && !Nu && (ml = Math.abs(k - Ct(a)[R])), P(), N(!0);
      }
      if (s.contains(he))
        return N(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", Oa), Ue(document, "mousemove", Oa), Ue(document, "touchmove", Oa);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._onDrop), Ue(r, "touchend", this._onDrop), Ue(r, "pointerup", this._onDrop), Ue(r, "pointercancel", this._onDrop), Ue(r, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, a = this.options;
    if (wn = zn(he), ea = zn(he, a.draggable), an("drop", this, {
      evt: r
    }), pt = he && he.parentNode, wn = zn(he), ea = zn(he, a.draggable), xe.eventCanceled) {
      this._nulling();
      return;
    }
    ji = !1, Nu = !1, ao = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Lf(this.cloneId), Lf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), eo && Ae(document.body, "user-select", ""), Ae(he, "transform", ""), r && (Xs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (ot === pt || It && It.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), he && (this.nativeDraggable && Ue(he, "dragend", this), ff(he), he.style["will-change"] = "", Xs && !ji && Sn(he, It ? It.options.ghostClass : this.options.ghostClass, !1), Sn(he, this.options.chosenClass, !1), Ft({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ot !== pt ? (wn >= 0 && (Ft({
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
    })), It && It.save()) : wn !== Di && wn >= 0 && (Ft({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), xe.active && ((wn == null || wn === -1) && (wn = Di, ea = no), Ft({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    an("nulling", this), ot = he = pt = Me = Ma = ct = pl = ta = Na = Un = Xs = wn = ea = Di = no = Ti = ro = It = Tu = xe.dragged = xe.ghost = xe.clone = xe.active = null, Al.forEach(function(r) {
      r.checked = !0;
    }), Al.length = lf = cf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        he && (this._onDragOver(r), c8(r));
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
      s = a[u], Zn(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || g8(s));
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
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && Hy(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    an("destroy", this);
    var r = this.el;
    r[on] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), kl.splice(kl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ta) {
      if (an("hideClone", this), xe.eventCanceled) return;
      Ae(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ta = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ta) {
      if (an("showClone", this), xe.eventCanceled) return;
      he.parentNode == ot && !this.options.group.revertClone ? ot.insertBefore(ct, he) : Ma ? ot.insertBefore(ct, Ma) : ot.appendChild(ct), this.options.group.revertClone && this.animate(he, ct), Ae(ct, "display", ""), ta = !1;
    }
  }
};
function c8(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Mu(t, r, s, a, u, l, f, m) {
  var p, g = t[on], v = g.options.onMove, E;
  return window.CustomEvent && !Ar && !uo ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = t, p.dragged = s, p.draggedRect = a, p.related = u || r, p.relatedRect = l || Ct(r), p.willInsertAfter = m, p.originalEvent = f, t.dispatchEvent(p), v && (E = v.call(g, p, f)), E;
}
function ff(t) {
  t.draggable = !1;
}
function d8() {
  zf = !1;
}
function f8(t, r, s) {
  var a = Ct(Bi(s.el, 0, s.options, !0)), u = Iy(s.el, s.options, Me), l = 10;
  return r ? t.clientX < u.left - l || t.clientY < a.top && t.clientX < a.right : t.clientY < u.top - l || t.clientY < a.bottom && t.clientX < a.left;
}
function h8(t, r, s) {
  var a = Ct(ah(s.el, s.options.draggable)), u = Iy(s.el, s.options, Me), l = 10;
  return r ? t.clientX > u.right + l || t.clientY > a.bottom && t.clientX > a.left : t.clientY > u.bottom + l || t.clientX > a.right && t.clientY > a.top;
}
function p8(t, r, s, a, u, l, f, m) {
  var p = a ? t.clientY : t.clientX, g = a ? s.height : s.width, v = a ? s.top : s.left, E = a ? s.bottom : s.right, _ = !1;
  if (!f) {
    if (m && ml < g * u) {
      if (!ao && (ro === 1 ? p > v + g * l / 2 : p < E - g * l / 2) && (ao = !0), ao)
        _ = !0;
      else if (ro === 1 ? p < v + ml : p > E - ml)
        return -ro;
    } else if (p > v + g * (1 - u) / 2 && p < E - g * (1 - u) / 2)
      return m8(r);
  }
  return _ = _ || f, _ && (p < v + g * l / 2 || p > E - g * l / 2) ? p > v + g / 2 ? 1 : -1 : 0;
}
function m8(t) {
  return zn(he) < zn(t) ? 1 : -1;
}
function g8(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function v8(t) {
  Al.length = 0;
  for (var r = t.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && Al.push(a);
  }
}
function gl(t) {
  return setTimeout(t, 0);
}
function Lf(t) {
  return clearTimeout(t);
}
Dl && qe(document, "touchmove", function(t) {
  (xe.active || ji) && t.cancelable && t.preventDefault();
});
xe.utils = {
  on: qe,
  off: Ue,
  css: Ae,
  find: Dy,
  is: function(r, s) {
    return !!Zn(r, s, r, !1);
  },
  extend: W3,
  throttle: zy,
  closest: Zn,
  toggleClass: Sn,
  clone: Py,
  index: zn,
  nextTick: gl,
  cancelNextTick: Lf,
  detectDirection: Uy,
  getChild: Bi,
  expando: on
};
xe.get = function(t) {
  return t[on];
};
xe.mount = function() {
  for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (xe.utils = tr(tr({}, xe.utils), a.utils)), lo.mount(a);
  });
};
xe.create = function(t, r) {
  return new xe(t, r);
};
xe.version = K3;
var Et = [], Qs, Pf, If = !1, hf, pf, xl, Ks;
function y8() {
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
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? qe(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? qe(document, "touchmove", this._handleFallbackAutoScroll) : qe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var a = s.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), Bv(), vl(), e8();
    },
    nulling: function() {
      xl = Pf = Qs = If = Ks = hf = pf = null, Et.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, l = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(l, f);
      if (xl = s, a || this.options.forceAutoScrollFallback || uo || Ar || eo) {
        mf(s, this.options, m, a);
        var p = na(m, !0);
        If && (!Ks || l !== hf || f !== pf) && (Ks && Bv(), Ks = setInterval(function() {
          var g = na(document.elementFromPoint(l, f), !0);
          g !== p && (p = g, vl()), mf(s, u.options, g, a);
        }, 10), hf = l, pf = f);
      } else {
        if (!this.options.bubbleScroll || na(m, !0) === Wn()) {
          vl();
          return;
        }
        mf(s, this.options, na(m, !1), !1);
      }
    }
  }, kr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function vl() {
  Et.forEach(function(t) {
    clearInterval(t.pid);
  }), Et = [];
}
function Bv() {
  clearInterval(Ks);
}
var mf = zy(function(t, r, s, a) {
  if (r.scroll) {
    var u = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = Wn(), g = !1, v;
    Pf !== s && (Pf = s, vl(), Qs = r.scroll, v = r.scrollFn, Qs === !0 && (Qs = na(s, !0)));
    var E = 0, _ = Qs;
    do {
      var S = _, h = Ct(S), C = h.top, x = h.bottom, j = h.left, N = h.right, P = h.width, c = h.height, y = void 0, w = void 0, k = S.scrollWidth, M = S.scrollHeight, z = Ae(S), R = S.scrollLeft, L = S.scrollTop;
      S === p ? (y = P < k && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), w = c < M && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (y = P < k && (z.overflowX === "auto" || z.overflowX === "scroll"), w = c < M && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var q = y && (Math.abs(N - u) <= f && R + P < k) - (Math.abs(j - u) <= f && !!R), F = w && (Math.abs(x - l) <= f && L + c < M) - (Math.abs(C - l) <= f && !!L);
      if (!Et[E])
        for (var $ = 0; $ <= E; $++)
          Et[$] || (Et[$] = {});
      (Et[E].vx != q || Et[E].vy != F || Et[E].el !== S) && (Et[E].el = S, Et[E].vx = q, Et[E].vy = F, clearInterval(Et[E].pid), (q != 0 || F != 0) && (g = !0, Et[E].pid = setInterval((function() {
        a && this.layer === 0 && xe.active._onTouchMove(xl);
        var W = Et[this.layer].vy ? Et[this.layer].vy * m : 0, O = Et[this.layer].vx ? Et[this.layer].vx * m : 0;
        typeof v == "function" && v.call(xe.dragged.parentNode[on], O, W, t, xl, Et[this.layer].el) !== "continue" || Ly(Et[this.layer].el, O, W);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && _ !== p && (_ = na(_, !1)));
    If = g;
  }
}, 30), Gy = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, l = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var g = a || l;
    m();
    var v = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(v.clientX, v.clientY);
    p(), g && !g.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function ih() {
}
ih.prototype = {
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
  drop: Gy
};
kr(ih, {
  pluginName: "revertOnSpill"
});
function sh() {
}
sh.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: Gy
};
kr(sh, {
  pluginName: "removeOnSpill"
});
xe.mount(new y8());
xe.mount(sh, ih);
async function yl(t, r, s) {
  var a, u, l;
  function f(v) {
    return t.includes("all") || t.includes(v);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const g = h2;
  if (f("global") && g != null && g.length)
    for (const v of g) {
      const E = await _8(v);
      E && (p[v] || (p[v] = []), Object.values(E).forEach((_) => {
        p[v].push(_);
      }));
    }
  if (f("chat")) {
    const v = m.chatMetadata[p2];
    if (v && !p[v]) {
      p[v] = [];
      const E = await m.loadWorldInfo(v);
      E && Object.values(E.entries).forEach((_) => {
        p[v].push(_);
      });
    }
  }
  if (f("character") && s) {
    const v = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const _ = (u = (a = v?.data) == null ? void 0 : a.extensions) == null ? void 0 : u.world;
    _ && E.add(_);
    const S = Ny(s), h = (l = m2.charLore) == null ? void 0 : l.find((C) => C.name === S);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const x = await m.loadWorldInfo(C);
      !x || p[C] || (p[C] = [], Object.values(x.entries).forEach((j) => {
        p[C].push(j);
      }));
    }
  }
  if (f("persona")) {
    const v = m.powerUserSettings.persona_description_lorebook;
    if (v && !p[v]) {
      p[v] = [];
      const E = await m.loadWorldInfo(v);
      E && Object.values(E.entries).forEach((_) => {
        p[v].push(_);
      });
    }
  }
  return p;
}
async function _8(t) {
  const r = await SillyTavern.getContext().loadWorldInfo(t);
  return r ? Object.values(r.entries) : null;
}
const b8 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, Uv = `Optional Tier 1 fields (omit them when the default is fine):
- "order": 100 — injection priority
- "position": 0 — placement (0=before char, 1=after char, 2=before AN, 3=after AN, 4=at depth, 5=at depth from top, 6=before example messages, 7=after example messages)
- "depth": 4 — position depth when position=4 or 5
- "role": 0 — injection role (0=system, 1=user, 2=assistant)
- "selective": true — requires secondary keys
- "constant": false — always inject
- "group": "" — grouped activation name
- "probability": 100 — activation chance %
- "excludeRecursion": false — skip during recursion
- "preventRecursion": false — prevent recursive activation`, oh = `{{#unless (eq entry.order 100)}}
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
{{/if}}`, S8 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
${oh}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, w8 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, E8 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
${oh}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, C8 = `Respond exclusively with {{responseFormat}}. Do not include any other text, explanation, or markdown outside the {{responseFormat}} structure.

{{#if (eq responseFormat 'json')}}
Respond with a JSON object using this structure:
- "lorebooks" object containing an "entry" object (or array of entry objects for multiple entries)
- Each entry has: "worldName" (string), "id" (number, optional - for updates), "name" (string), "triggers" (array of strings), "content" (string)

${Uv}

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
${Uv}

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
{{/if}}`, k8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, A8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", x8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", T8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, N8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
${oh}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, O8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, M8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, Vy = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", R8 = Vy + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", j8 = "[" + Vy + "][" + R8 + "]*", D8 = new RegExp("^" + j8 + "$");
function $y(t, r) {
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
const uh = function(t) {
  const r = D8.exec(t);
  return !(r === null || typeof r > "u");
};
function z8(t) {
  return typeof t < "u";
}
const L8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function Yy(t, r) {
  r = Object.assign({}, L8, r);
  const s = [];
  let a = !1, u = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let l = 0; l < t.length; l++)
    if (t[l] === "<" && t[l + 1] === "?") {
      if (l += 2, l = qv(t, l), l.err) return l;
    } else if (t[l] === "<") {
      let f = l;
      if (l++, t[l] === "!") {
        l = Zv(t, l);
        continue;
      } else {
        let m = !1;
        t[l] === "/" && (m = !0, l++);
        let p = "";
        for (; l < t.length && t[l] !== ">" && t[l] !== " " && t[l] !== "	" && t[l] !== `
` && t[l] !== "\r"; l++)
          p += t[l];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), l--), !G8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(t, l));
        }
        const g = B8(t, l);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(t, l));
        let v = g.value;
        if (l = g.index, v[v.length - 1] === "/") {
          const E = l - v.length;
          v = v.substring(0, v.length - 1);
          const _ = Gv(v, r);
          if (_ === !0)
            a = !0;
          else
            return yt(_.err.code, _.err.msg, Xt(t, E + _.err.line));
        } else if (m)
          if (g.tagClosed) {
            if (v.trim().length > 0)
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
          const E = Gv(v, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(t, l - v.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(t, l));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), a = !0;
        }
        for (l++; l < t.length; l++)
          if (t[l] === "<")
            if (t[l + 1] === "!") {
              l++, l = Zv(t, l);
              continue;
            } else if (t[l + 1] === "?") {
              if (l = qv(t, ++l), l.err) return l;
            } else
              break;
          else if (t[l] === "&") {
            const E = q8(t, l);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(t, l));
            l = E;
          } else if (u === !0 && !Hv(t[l]))
            return yt("InvalidXml", "Extra text at the end", Xt(t, l));
        t[l] === "<" && l--;
      }
    } else {
      if (Hv(t[l]))
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
function Hv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function qv(t, r) {
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
function Zv(t, r) {
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
const P8 = '"', I8 = "'";
function B8(t, r) {
  let s = "", a = "", u = !1;
  for (; r < t.length; r++) {
    if (t[r] === P8 || t[r] === I8)
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
const U8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Gv(t, r) {
  const s = $y(t, U8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Hs(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Hs(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Hs(s[u]));
    const l = s[u][2];
    if (!Z8(l))
      return yt("InvalidAttr", "Attribute '" + l + "' is an invalid name.", Hs(s[u]));
    if (!a.hasOwnProperty(l))
      a[l] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + l + "' is repeated.", Hs(s[u]));
  }
  return !0;
}
function H8(t, r) {
  let s = /\d/;
  for (t[r] === "x" && (r++, s = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(s))
      break;
  }
  return -1;
}
function q8(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, H8(t, r);
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
function Z8(t) {
  return uh(t);
}
function G8(t) {
  return uh(t);
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
const V8 = {
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
}, $8 = function(t) {
  return Object.assign({}, V8, t);
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
function Y8(t, r) {
  const s = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, l = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !l) {
        if (u && Q8(t, r)) {
          r += 7;
          let m, p;
          [m, p, r] = F8(t, r + 1), p.indexOf("&") === -1 && (s[eS(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && K8(t, r)) r += 8;
        else if (u && J8(t, r)) r += 8;
        else if (u && W8(t, r)) r += 9;
        else if (X8) l = !0;
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
function F8(t, r) {
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
function X8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Q8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function K8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function J8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function W8(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function eS(t) {
  if (uh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const tS = /^[-+]?0x[a-fA-F0-9]+$/, nS = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, rS = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function aS(t, r = {}) {
  if (r = Object.assign({}, rS, r), !t || typeof t != "string") return t;
  let s = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return t;
  if (t === "0") return 0;
  if (r.hex && tS.test(s))
    return sS(s, 16);
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
    const a = nS.exec(s);
    if (a) {
      const u = a[1], l = a[2];
      let f = iS(a[3]);
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
function iS(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function sS(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function oS(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const s of t)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class uS {
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
    }, this.addExternalEntities = lS, this.parseXml = pS, this.parseTextData = cS, this.resolveNameSpace = dS, this.buildAttributesMap = hS, this.isItStopNode = yS, this.replaceEntitiesValue = gS, this.readStopNodeData = bS, this.saveTextToParentTag = vS, this.addChild = mS, this.ignoreAttributesFn = oS(this.options.ignoreAttributes);
  }
}
function lS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: t[a]
    };
  }
}
function cS(t, r, s, a, u, l, f) {
  if (t !== void 0 && (this.options.trimValues && !a && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const m = this.options.tagValueProcessor(r, t, s, u, l);
    return m == null ? t : typeof m != typeof t || m !== t ? m : this.options.trimValues ? Uf(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Uf(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function dS(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), s = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = s + r[1]);
  }
  return t;
}
const fS = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function hS(t, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const a = $y(t, fS), u = a.length, l = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(a[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = a[f][4], g = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const v = this.options.attributeValueProcessor(m, p, r);
          v == null ? l[g] = p : typeof v != typeof p || v !== p ? l[g] = v : l[g] = Uf(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (l[g] = !0);
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
const pS = function(t) {
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
        const g = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let v = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (v = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : v = u.lastIndexOf("."), u = u.substring(0, v), s = this.tagsNodeStack.pop(), a = "", l = m;
      } else if (t[l + 1] === "?") {
        let m = Bf(t, l, !1, "?>");
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
        const m = Y8(t, l);
        this.docTypeEntities = m.entities, l = m.i;
      } else if (t.substr(l + 1, 2) === "![") {
        const m = Da(t, "]]>", l, "CDATA is not closed.") - 2, p = t.substring(l + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let g = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, g), l = m + 2;
      } else {
        let m = Bf(t, l, this.options.removeNSPrefix), p = m.tagName;
        const g = m.rawTagName;
        let v = m.tagExp, E = m.attrExpPresent, _ = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && a && s.tagname !== "!xml" && (a = this.saveTextToParentTag(a, s, u, !1));
        const S = s;
        if (S && this.options.unpairedTags.indexOf(S.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), v = p) : v = v.substr(0, v.length - 1), l = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            l = m.closeIndex;
          else {
            const x = this.readStopNodeData(t, g, _ + 1);
            if (!x) throw new Error(`Unexpected end of ${g}`);
            l = x.i, h = x.tagContent;
          }
          const C = new qs(p);
          p !== v && E && (C[":@"] = this.buildAttributesMap(v, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), v = p) : v = v.substr(0, v.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new qs(p);
            p !== v && E && (h[":@"] = this.buildAttributesMap(v, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new qs(p);
            this.tagsNodeStack.push(s), p !== v && E && (h[":@"] = this.buildAttributesMap(v, u, p)), this.addChild(s, h, u), s = h;
          }
          a = "", l = _;
        }
      }
    else
      a += t[l];
  return r.child;
};
function mS(t, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), t.addChild(r));
}
const gS = function(t) {
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
function vS(t, r, s, a) {
  return t && (a === void 0 && (a = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function yS(t, r, s) {
  const a = "*." + s;
  for (const u in t) {
    const l = t[u];
    if (a === l || r === l) return !0;
  }
  return !1;
}
function _S(t, r, s = ">") {
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
function Bf(t, r, s, a = ">") {
  const u = _S(t, r + 1, a);
  if (!u) return;
  let l = u.data;
  const f = u.index, m = l.search(/\s/);
  let p = l, g = !0;
  m !== -1 && (p = l.substring(0, m), l = l.substring(m + 1).trimStart());
  const v = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), g = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: l,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: v
  };
}
function bS(t, r, s) {
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
        const l = Bf(t, s, ">");
        l && ((l && l.tagName) === r && l.tagExp[l.tagExp.length - 1] !== "/" && u++, s = l.closeIndex);
      }
}
function Uf(t, r, s) {
  if (r && typeof t == "string") {
    const a = t.trim();
    return a === "true" ? !0 : a === "false" ? !1 : aS(t, s);
  } else
    return z8(t) ? t : "";
}
function SS(t, r) {
  return Fy(t, r);
}
function Fy(t, r, s) {
  let a;
  const u = {};
  for (let l = 0; l < t.length; l++) {
    const f = t[l], m = wS(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = f[m] : a += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let g = Fy(f[m], r, p);
        const v = CS(g, r);
        f[":@"] ? ES(g, f[":@"], p, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(g)) : r.isArray(m, p, v) ? u[m] = [g] : u[m] = g;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function wS(t) {
  const r = Object.keys(t);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function ES(t, r, s, a) {
  if (r) {
    const u = Object.keys(r), l = u.length;
    for (let f = 0; f < l; f++) {
      const m = u[f];
      a.isArray(m, s + "." + m, !0, !0) ? t[m] = [r[m]] : t[m] = r[m];
    }
  }
}
function CS(t, r) {
  const { textNodeName: s } = r, a = Object.keys(t).length;
  return !!(a === 0 || a === 1 && (t[s] || typeof t[s] == "boolean" || t[s] === 0));
}
class kS {
  constructor(r) {
    this.externalEntities = {}, this.options = $8(r);
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
      const l = Yy(r, s);
      if (l !== !0)
        throw Error(`${l.err.msg}:${l.err.line}:${l.err.col}`);
    }
    const a = new uS(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : SS(u, this.options);
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
const AS = {
  validate: Yy
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
], xS = [
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
], Xy = [
  { value: 0, label: "Before Char Definition" },
  { value: 1, label: "After Char Definition" },
  { value: 2, label: "Before Author's Note" },
  { value: 3, label: "After Author's Note" },
  { value: 4, label: "At Depth (from bottom)" },
  { value: 5, label: "At Depth (from top)" },
  { value: 6, label: "Before Example Messages" },
  { value: 7, label: "After Example Messages" }
], Qy = [
  { value: 0, label: "System" },
  { value: 1, label: "User" },
  { value: 2, label: "Assistant" }
], TS = {
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
}, Xe = {
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
}, NS = new kS({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function OS(t) {
  return Math.floor(Math.random() * Math.pow(10, t));
}
function Hf(t, r) {
  if (!(!r || !t || !r.properties))
    for (const s in r.properties) {
      if (!t.hasOwnProperty(s)) continue;
      const a = r.properties[s];
      let u = t[s];
      if (a.type === "array" && !Array.isArray(u) && (u === "" || u === null ? u = [] : u = [u], t[s] = u), a.type === "array" && a.items?.type === "object" && Array.isArray(u)) {
        const l = a.items.required || [], f = a.items.properties ? Object.keys(a.items.properties) : [], m = l.length > 0 ? l : f;
        if (m.length > 0) {
          const p = [];
          let g = !1;
          for (const v of u) {
            const E = (_) => typeof _ != "object" || _ === null ? !1 : m.some((S) => Object.prototype.hasOwnProperty.call(_, S));
            if (E(v))
              p.push(v);
            else {
              let _ = !1;
              if (typeof v == "object" && v !== null)
                for (const S in v) {
                  const h = v[S];
                  if (E(h)) {
                    p.push(h), _ = !0, g = !0;
                    break;
                  }
                  if (Array.isArray(h) && h.length > 0 && E(h[0])) {
                    p.push(...h), _ = !0, g = !0;
                    break;
                  }
                }
              _ || p.push(v);
            }
          }
          g && (u = p, t[s] = u);
        }
      }
      a.type === "object" && typeof u == "object" && u !== null ? Hf(u, a) : a.type === "array" && a.items?.type === "object" && Array.isArray(u) && u.forEach((l) => Hf(l, a.items)), a.type === "string" && typeof u != "string" ? t[s] = String(u) : a.type === "array" && a.items?.type === "string" && Array.isArray(u) && (t[s] = u.map(String));
    }
}
const Ru = "<content>", ju = "</content>", qf = "<![CDATA[";
function Vv(t) {
  return t.replace(/&(#x?[0-9a-fA-F]+|amp|lt|gt|quot|apos);/g, (r, s) => {
    switch (s) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      case "apos":
        return "'";
      default:
        if (!s.startsWith("#"))
          return r;
        const a = s[1]?.toLowerCase() === "x", u = Number.parseInt(s.slice(a ? 2 : 1), a ? 16 : 10);
        if (!Number.isFinite(u))
          return r;
        try {
          return String.fromCodePoint(u);
        } catch {
          return r;
        }
    }
  });
}
function $v(t) {
  return t.replace(/\]\]>/g, "]]]]><![CDATA[>");
}
function Yv(t) {
  return t.trimStart().startsWith(qf);
}
function MS(t) {
  let r = "", s = 0;
  for (; ; ) {
    const a = t.indexOf(Ru, s);
    if (a === -1)
      return r + t.slice(s);
    r += t.slice(s, a);
    const u = a + Ru.length, l = t.indexOf(ju, u);
    if (l === -1) {
      const m = t.slice(u);
      return Yv(m) ? r + t.slice(a) : `${r}${Ru}${qf}${$v(Vv(m))}`;
    }
    const f = t.slice(u, l);
    if (Yv(f))
      r += t.slice(a, l + ju.length);
    else {
      const m = $v(Vv(f.trim()));
      r += `${Ru}${qf}${m}]]>${ju}`;
    }
    s = l + ju.length;
  }
}
function Ky(t, r, s = {}) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/, u = t.match(a);
  let l = u ? u[1].trim() : t.trim();
  const { previousContent: f } = s;
  f && (l = f + l.trimEnd());
  const m = r === "xml" ? MS(l) : l;
  try {
    switch (r) {
      case "xml":
        const p = AS.validate(m);
        if (p !== !0)
          throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        let g = NS.parse(m);
        return g.root && (g = g.root), s.schema && Hf(g, s.schema), g;
      case "json":
        return JSON.parse(l);
      case "none":
        return l;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (p) {
    throw console.error(`Error parsing response in format '${r}':`, p), console.error("Raw content received:", t), r === "xml" ? p.message.startsWith("Model response is not valid XML:") ? p : new Error(`Model response is not valid XML: ${p.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${p.message}`);
  }
}
function RS(t, r, s) {
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
function jS(t) {
  const r = {};
  for (const s of ra) {
    const a = t[s], u = Xe[s];
    a != null && a !== u && (r[s] = a);
  }
  return r;
}
function DS(t) {
  if (t === void 0)
    return OS(6);
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
function zS(t, r, s) {
  const a = jS(r);
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
function LS(t, r, s = {}) {
  if (!t?.trim())
    return {};
  try {
    const u = Ky(t, r, {
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
      let g;
      Array.isArray(m.triggers) ? g = m.triggers : typeof m.triggers == "string" ? g = m.triggers.split(",").map((E) => E.trim()).filter(Boolean) : g = [];
      const v = {
        ...Xe,
        uid: DS(m.id),
        key: g,
        content: m.content ?? "",
        comment: m.name ?? "",
        disable: !1,
        keysecondary: []
      };
      for (const E of ra) {
        const _ = m[E];
        _ !== void 0 && (v[E] = _);
      }
      f[p].push(v);
    }
    return f;
  } catch (a) {
    throw a;
  }
}
var Du = { exports: {} }, zu = { exports: {} }, Hn = {}, sn = {}, Fv;
function cn() {
  if (Fv) return sn;
  Fv = 1, sn.__esModule = !0, sn.extend = u, sn.indexOf = p, sn.escapeExpression = g, sn.isEmpty = v, sn.createFrame = E, sn.blockParams = _, sn.appendContextPath = S;
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
  function g(h) {
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
  function v(h) {
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
var Lu = { exports: {} }, Xv;
function Gn() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, l) {
      var f = l && l.loc, m = void 0, p = void 0, g = void 0, v = void 0;
      f && (m = f.start.line, p = f.end.line, g = f.start.column, v = f.end.column, u += " - " + m + ":" + g);
      for (var E = Error.prototype.constructor.call(this, u), _ = 0; _ < s.length; _++)
        this[s[_]] = E[s[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: v,
          enumerable: !0
        })) : (this.column = g, this.endColumn = v));
      } catch {
      }
    }
    a.prototype = new Error(), r.default = a, t.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var Zs = {}, Pu = { exports: {} }, Qv;
function PS() {
  return Qv || (Qv = 1, (function(t, r) {
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
  })(Pu, Pu.exports)), Pu.exports;
}
var Iu = { exports: {} }, Kv;
function IS() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = cn(), u = Gn(), l = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new l.default("Must pass iterator to #each");
        var g = p.fn, v = p.inverse, E = 0, _ = "", S = void 0, h = void 0;
        p.data && p.ids && (h = a.appendContextPath(p.data.contextPath, p.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), p.data && (S = a.createFrame(p.data));
        function C(c, y, w) {
          S && (S.key = c, S.index = y, S.first = y === 0, S.last = !!w, h && (S.contextPath = h + c)), _ = _ + g(m[c], {
            data: S,
            blockParams: a.blockParams([m[c], c], [h + c, null])
          });
        }
        if (m && typeof m == "object")
          if (a.isArray(m))
            for (var x = m.length; E < x; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var j = [], N = m[Symbol.iterator](), P = N.next(); !P.done; P = N.next())
              j.push(P.value);
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
        return E === 0 && (_ = v(this)), _;
      });
    }, t.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Bu = { exports: {} }, Jv;
function BS() {
  return Jv || (Jv = 1, (function(t, r) {
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
  })(Bu, Bu.exports)), Bu.exports;
}
var Uu = { exports: {} }, Wv;
function US() {
  return Wv || (Wv = 1, (function(t, r) {
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
  })(Uu, Uu.exports)), Uu.exports;
}
var Hu = { exports: {} }, e0;
function HS() {
  return e0 || (e0 = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], l = 0; l < arguments.length - 1; l++)
          a.push(arguments[l]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), a[0] = f, s.log.apply(s, a);
      });
    }, t.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var qu = { exports: {} }, t0;
function qS() {
  return t0 || (t0 = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, l) {
        return a && l.lookupProperty(a, u);
      });
    }, t.exports = r.default;
  })(qu, qu.exports)), qu.exports;
}
var Zu = { exports: {} }, n0;
function ZS() {
  return n0 || (n0 = 1, (function(t, r) {
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
        var g = p.fn;
        if (a.isEmpty(m))
          return p.inverse(this);
        var v = p.data;
        return p.data && p.ids && (v = a.createFrame(p.data), v.contextPath = a.appendContextPath(p.data.contextPath, p.ids[0])), g(m, {
          data: v,
          blockParams: a.blockParams([m], [v && v.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var r0;
function Jy() {
  if (r0) return Zs;
  r0 = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = C, Zs.moveHelperToHooks = x;
  function t(j) {
    return j && j.__esModule ? j : { default: j };
  }
  var r = PS(), s = t(r), a = IS(), u = t(a), l = BS(), f = t(l), m = US(), p = t(m), g = HS(), v = t(g), E = qS(), _ = t(E), S = ZS(), h = t(S);
  function C(j) {
    s.default(j), u.default(j), f.default(j), p.default(j), v.default(j), _.default(j), h.default(j);
  }
  function x(j, N, P) {
    j.helpers[N] && (j.hooks[N] = j.helpers[N], P || delete j.helpers[N]);
  }
  return Zs;
}
var Gu = {}, Vu = { exports: {} }, a0;
function GS() {
  return a0 || (a0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = cn();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, l, f, m) {
        var p = u;
        return l.partials || (l.partials = {}, p = function(g, v) {
          var E = f.partials;
          f.partials = s.extend({}, E, l.partials);
          var _ = u(g, v);
          return f.partials = E, _;
        }), l.partials[m.args[0]] = m.fn, p;
      });
    }, t.exports = r.default;
  })(Vu, Vu.exports)), Vu.exports;
}
var i0;
function VS() {
  if (i0) return Gu;
  i0 = 1, Gu.__esModule = !0, Gu.registerDefaultDecorators = a;
  function t(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = GS(), s = t(r);
  function a(u) {
    s.default(u);
  }
  return Gu;
}
var $u = { exports: {} }, s0;
function Wy() {
  return s0 || (s0 = 1, (function(t, r) {
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
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), g = 1; g < m; g++)
            p[g - 1] = arguments[g];
          console[f].apply(console, p);
        }
      }
    };
    r.default = a, t.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var Ni = {}, Yu = {}, o0;
function $S() {
  if (o0) return Yu;
  o0 = 1, Yu.__esModule = !0, Yu.createNewLookupObject = r;
  var t = cn();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Yu;
}
var u0;
function e_() {
  if (u0) return Ni;
  u0 = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = l, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = g;
  function t(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = $S(), s = Wy(), a = t(s), u = /* @__PURE__ */ Object.create(null);
  function l(v) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var _ = /* @__PURE__ */ Object.create(null);
    return _.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(_, v.allowedProtoProperties),
        defaultValue: v.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, v.allowedProtoMethods),
        defaultValue: v.allowProtoMethodsByDefault
      }
    };
  }
  function f(v, E, _) {
    return m(typeof v == "function" ? E.methods : E.properties, _);
  }
  function m(v, E) {
    return v.whitelist[E] !== void 0 ? v.whitelist[E] === !0 : v.defaultValue !== void 0 ? v.defaultValue : (p(E), !1);
  }
  function p(v) {
    u[v] !== !0 && (u[v] = !0, a.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + v + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(u).forEach(function(v) {
      delete u[v];
    });
  }
  return Ni;
}
var l0;
function lh() {
  if (l0) return Hn;
  l0 = 1, Hn.__esModule = !0, Hn.HandlebarsEnvironment = h;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = cn(), s = Gn(), a = t(s), u = Jy(), l = VS(), f = Wy(), m = t(f), p = e_(), g = "4.7.8";
  Hn.VERSION = g;
  var v = 8;
  Hn.COMPILER_REVISION = v;
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
var Fu = { exports: {} }, c0;
function YS() {
  return c0 || (c0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, t.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var _r = {}, Xu = {}, d0;
function FS() {
  if (d0) return Xu;
  d0 = 1, Xu.__esModule = !0, Xu.wrapHelper = t;
  function t(r, s) {
    if (typeof r != "function")
      return r;
    var a = function() {
      var l = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(l), r.apply(this, arguments);
    };
    return a;
  }
  return Xu;
}
var f0;
function XS() {
  if (f0) return _r;
  f0 = 1, _r.__esModule = !0, _r.checkRevision = v, _r.template = E, _r.wrapProgram = _, _r.resolvePartial = S, _r.invokePartial = h, _r.noop = C;
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
  var s = cn(), a = r(s), u = Gn(), l = t(u), f = lh(), m = Jy(), p = FS(), g = e_();
  function v(c) {
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
        if (F == null || Object.prototype.hasOwnProperty.call(L, q) || g.resultIsAllowed(F, M.protoAccessControl, q))
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
        N(L, M), M.helpers = L, c.usePartial && (M.partials = M.mergeIfNeeded(R.partials, y.partials)), (c.usePartial || c.useDecorators) && (M.decorators = a.extend({}, y.decorators, R.decorators)), M.hooks = {}, M.protoAccessControl = g.createProtoAccessControl(R);
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
      c[w] = P(k, y);
    });
  }
  function P(c, y) {
    var w = y.lookupProperty;
    return p.wrapHelper(c, function(k) {
      return a.extend({ lookupProperty: w }, k);
    });
  }
  return _r;
}
var Qu = { exports: {} }, h0;
function t_() {
  return h0 || (h0 = 1, (function(t, r) {
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
  })(Qu, Qu.exports)), Qu.exports;
}
var p0;
function QS() {
  return p0 || (p0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(N) {
      return N && N.__esModule ? N : { default: N };
    }
    function a(N) {
      if (N && N.__esModule)
        return N;
      var P = {};
      if (N != null)
        for (var c in N)
          Object.prototype.hasOwnProperty.call(N, c) && (P[c] = N[c]);
      return P.default = N, P;
    }
    var u = lh(), l = a(u), f = YS(), m = s(f), p = Gn(), g = s(p), v = cn(), E = a(v), _ = XS(), S = a(_), h = t_(), C = s(h);
    function x() {
      var N = new l.HandlebarsEnvironment();
      return E.extend(N, l), N.SafeString = m.default, N.Exception = g.default, N.Utils = E, N.escapeExpression = E.escapeExpression, N.VM = S, N.template = function(P) {
        return S.template(P, N);
      }, N;
    }
    var j = x();
    j.create = x, C.default(j), j.default = j, r.default = j, t.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Ku = { exports: {} }, m0;
function n_() {
  return m0 || (m0 = 1, (function(t, r) {
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
  })(Ku, Ku.exports)), Ku.exports;
}
var Oi = {}, Ju = { exports: {} }, g0;
function KS() {
  return g0 || (g0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, g, v, E, _, S) {
          var h = _.length - 1;
          switch (E) {
            case 1:
              return _[h - 1];
            case 2:
              this.$ = v.prepareProgram(_[h]);
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
                value: v.stripComment(_[h]),
                strip: v.stripFlags(_[h], _[h]),
                loc: v.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[h],
                value: _[h],
                loc: v.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = v.prepareRawBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 12:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1] };
              break;
            case 13:
              this.$ = v.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !1, this._$);
              break;
            case 14:
              this.$ = v.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[h - 5], path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: v.stripFlags(_[h - 5], _[h]) };
              break;
            case 16:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: v.stripFlags(_[h - 5], _[h]) };
              break;
            case 17:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: v.stripFlags(_[h - 5], _[h]) };
              break;
            case 18:
              this.$ = { strip: v.stripFlags(_[h - 1], _[h - 1]), program: _[h] };
              break;
            case 19:
              var C = v.prepareBlock(_[h - 2], _[h - 1], _[h], _[h], !1, this._$), x = v.prepareProgram([C], _[h - 1].loc);
              x.chained = !0, this.$ = { strip: _[h - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = _[h];
              break;
            case 21:
              this.$ = { path: _[h - 1], strip: v.stripFlags(_[h - 2], _[h]) };
              break;
            case 22:
              this.$ = v.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], v.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 23:
              this.$ = v.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], v.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                indent: "",
                strip: v.stripFlags(_[h - 4], _[h]),
                loc: v.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = v.preparePartialBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 26:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1], strip: v.stripFlags(_[h - 4], _[h]) };
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
                loc: v.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[h], loc: v.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: v.id(_[h - 2]), value: _[h], loc: v.locInfo(this._$) };
              break;
            case 32:
              this.$ = v.id(_[h - 1]);
              break;
            case 33:
              this.$ = _[h];
              break;
            case 34:
              this.$ = _[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[h], original: _[h], loc: v.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[h]), original: Number(_[h]), loc: v.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[h] === "true", original: _[h] === "true", loc: v.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: v.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: v.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[h];
              break;
            case 41:
              this.$ = _[h];
              break;
            case 42:
              this.$ = v.preparePath(!0, _[h], this._$);
              break;
            case 43:
              this.$ = v.preparePath(!1, _[h], this._$);
              break;
            case 44:
              _[h - 2].push({ part: v.id(_[h]), original: _[h], separator: _[h - 1] }), this.$ = _[h - 2];
              break;
            case 45:
              this.$ = [{ part: v.id(_[h]), original: _[h] }];
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
          var p = this, g = [0], v = [null], E = [], _ = this.table, S = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          E.push(x);
          var j = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function N() {
            var F;
            return F = p.lexer.lex() || 1, typeof F != "number" && (F = p.symbols_[F] || F), F;
          }
          for (var P, c, y, w, k = {}, M, z, R, L; ; ) {
            if (c = g[g.length - 1], this.defaultActions[c] ? y = this.defaultActions[c] : ((P === null || typeof P > "u") && (P = N()), y = _[c] && _[c][P]), typeof y > "u" || !y.length || !y[0]) {
              var q = "";
              {
                L = [];
                for (M in _[c]) this.terminals_[M] && M > 2 && L.push("'" + this.terminals_[M] + "'");
                this.lexer.showPosition ? q = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + L.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : q = "Parse error on line " + (h + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(q, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: x, expected: L });
              }
            }
            if (y[0] instanceof Array && y.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + c + ", token: " + P);
            switch (y[0]) {
              case 1:
                g.push(P), v.push(this.lexer.yytext), E.push(this.lexer.yylloc), g.push(y[1]), P = null, C = this.lexer.yyleng, S = this.lexer.yytext, h = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (z = this.productions_[y[1]][1], k.$ = v[v.length - z], k._$ = { first_line: E[E.length - (z || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (z || 1)].first_column, last_column: E[E.length - 1].last_column }, j && (k._$.range = [E[E.length - (z || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, S, C, h, this.yy, y[1], v, E), typeof w < "u")
                  return w;
                z && (g = g.slice(0, -1 * z * 2), v = v.slice(0, -1 * z), E = E.slice(0, -1 * z)), g.push(this.productions_[y[1]][0]), v.push(k.$), E.push(k._$), R = _[g[g.length - 2]][g[g.length - 1]], g.push(R);
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
          parseError: function(p, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, g);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var g = p.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var g = p.length, v = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), v.length - 1 && (this.yylineno -= v.length - 1);
            var _ = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: v ? (v.length === E.length ? this.yylloc.first_column : 0) + E[E.length - v.length].length - v[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [_[0], _[0] + this.yyleng - g]), this;
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
            var p = this.pastInput(), g = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, g, v, E, _;
            this._more || (this.yytext = "", this.match = "");
            for (var S = this._currentRules(), h = 0; h < S.length && (v = this._input.match(this.rules[S[h]]), !(v && (!g || v[0].length > g[0].length) && (g = v, E = h, !this.options.flex))); h++)
              ;
            return g ? (_ = g[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], p = this.performAction.call(this, this.yy, this, S[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(p, g, v, E) {
          function _(S, h) {
            return g.yytext = g.yytext.substring(S, g.yyleng - h + S);
          }
          switch (v) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (_(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (_(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
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
              this.unput(g.yytext), this.popState(), this.begin("com");
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
              return g.yytext = _(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = _(1, 2).replace(/\\'/g, "'"), 80;
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
              return g.yytext = g.yytext.replace(/\\([\\\]])/g, "$1"), 72;
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
  })(Ju, Ju.exports)), Ju.exports;
}
var Wu = { exports: {} }, el = { exports: {} }, v0;
function r_() {
  return v0 || (v0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = Gn(), u = s(a);
    function l() {
      this.parents = [];
    }
    l.prototype = {
      constructor: l,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(v, E) {
        var _ = this.accept(v[E]);
        if (this.mutating) {
          if (_ && !l.prototype[_.type])
            throw new u.default('Unexpected node type "' + _.type + '" found when accepting ' + E + " on " + v.type);
          v[E] = _;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(v, E) {
        if (this.acceptKey(v, E), !v[E])
          throw new u.default(v.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(v) {
        for (var E = 0, _ = v.length; E < _; E++)
          this.acceptKey(v, E), v[E] || (v.splice(E, 1), E--, _--);
      },
      accept: function(v) {
        if (v) {
          if (!this[v.type])
            throw new u.default("Unknown type: " + v.type, v);
          this.current && this.parents.unshift(this.current), this.current = v;
          var E = this[v.type](v);
          if (this.current = this.parents.shift(), !this.mutating || E)
            return E;
          if (E !== !1)
            return v;
        }
      },
      Program: function(v) {
        this.acceptArray(v.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: p,
      PartialBlockStatement: function(v) {
        p.call(this, v), this.acceptKey(v, "program");
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
      Hash: function(v) {
        this.acceptArray(v.pairs);
      },
      HashPair: function(v) {
        this.acceptRequired(v, "value");
      }
    };
    function f(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function m(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function p(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = l, t.exports = r.default;
  })(el, el.exports)), el.exports;
}
var y0;
function JS() {
  return y0 || (y0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var a = r_(), u = s(a);
    function l() {
      var v = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = v;
    }
    l.prototype = new u.default(), l.prototype.Program = function(v) {
      var E = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var S = v.body, h = 0, C = S.length; h < C; h++) {
        var x = S[h], j = this.accept(x);
        if (j) {
          var N = f(S, h, _), P = m(S, h, _), c = j.openStandalone && N, y = j.closeStandalone && P, w = j.inlineStandalone && N && P;
          j.close && p(S, h, !0), j.open && g(S, h, !0), E && w && (p(S, h), g(S, h) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(S[h - 1].original)[1])), E && c && (p((x.program || x.inverse).body), g(S, h)), E && y && (p(S, h), g((x.inverse || x.program).body));
        }
      }
      return v;
    }, l.prototype.BlockStatement = l.prototype.DecoratorBlock = l.prototype.PartialBlockStatement = function(v) {
      this.accept(v.program), this.accept(v.inverse);
      var E = v.program || v.inverse, _ = v.program && v.inverse, S = _, h = _;
      if (_ && _.chained)
        for (S = _.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: v.openStrip.open,
        close: v.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((S || E).body)
      };
      if (v.openStrip.close && p(E.body, null, !0), _) {
        var x = v.inverseStrip;
        x.open && g(E.body, null, !0), x.close && p(S.body, null, !0), v.closeStrip.open && g(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(S.body) && (g(E.body), p(S.body));
      } else v.closeStrip.open && g(E.body, null, !0);
      return C;
    }, l.prototype.Decorator = l.prototype.MustacheStatement = function(v) {
      return v.strip;
    }, l.prototype.PartialStatement = l.prototype.CommentStatement = function(v) {
      var E = v.strip || {};
      return {
        inlineStandalone: !0,
        open: E.open,
        close: E.close
      };
    };
    function f(v, E, _) {
      E === void 0 && (E = v.length);
      var S = v[E - 1], h = v[E - 2];
      if (!S)
        return _;
      if (S.type === "ContentStatement")
        return (h || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(S.original);
    }
    function m(v, E, _) {
      E === void 0 && (E = -1);
      var S = v[E + 1], h = v[E + 2];
      if (!S)
        return _;
      if (S.type === "ContentStatement")
        return (h || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(S.original);
    }
    function p(v, E, _) {
      var S = v[E == null ? 0 : E + 1];
      if (!(!S || S.type !== "ContentStatement" || !_ && S.rightStripped)) {
        var h = S.value;
        S.value = S.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), S.rightStripped = S.value !== h;
      }
    }
    function g(v, E, _) {
      var S = v[E == null ? v.length - 1 : E - 1];
      if (!(!S || S.type !== "ContentStatement" || !_ && S.leftStripped)) {
        var h = S.value;
        return S.value = S.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), S.leftStripped = S.value !== h, S.leftStripped;
      }
    }
    r.default = l, t.exports = r.default;
  })(Wu, Wu.exports)), Wu.exports;
}
var bn = {}, _0;
function WS() {
  if (_0) return bn;
  _0 = 1, bn.__esModule = !0, bn.SourceLocation = u, bn.id = l, bn.stripFlags = f, bn.stripComment = m, bn.preparePath = p, bn.prepareMustache = g, bn.prepareRawBlock = v, bn.prepareBlock = E, bn.prepareProgram = _, bn.preparePartialBlock = S;
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
    for (var j = h ? "@" : "", N = [], P = 0, c = 0, y = C.length; c < y; c++) {
      var w = C[c].part, k = C[c].original !== w;
      if (j += (C[c].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (N.length > 0)
          throw new s.default("Invalid path: " + j, { loc: x });
        w === ".." && P++;
      } else
        N.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: P,
      parts: N,
      original: j,
      loc: x
    };
  }
  function g(h, C, x, j, N, P) {
    var c = j.charAt(3) || j.charAt(2), y = c !== "{" && c !== "&", w = /\*/.test(j);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: x,
      escaped: y,
      strip: N,
      loc: this.locInfo(P)
    };
  }
  function v(h, C, x, j) {
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
  function E(h, C, x, j, N, P) {
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
      loc: this.locInfo(P)
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
  return bn;
}
var b0;
function ew() {
  if (b0) return Oi;
  b0 = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = v, Oi.parse = E;
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
  var s = KS(), a = r(s), u = JS(), l = r(u), f = WS(), m = t(f), p = cn();
  Oi.parser = a.default;
  var g = {};
  p.extend(g, m);
  function v(_, S) {
    if (_.type === "Program")
      return _;
    a.default.yy = g, g.locInfo = function(C) {
      return new g.SourceLocation(S && S.srcName, C);
    };
    var h = a.default.parse(_);
    return h;
  }
  function E(_, S) {
    var h = v(_, S), C = new l.default(S);
    return C.accept(h);
  }
  return Oi;
}
var Mi = {}, S0;
function tw() {
  if (S0) return Mi;
  S0 = 1, Mi.__esModule = !0, Mi.Compiler = m, Mi.precompile = p, Mi.compile = g;
  function t(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = Gn(), s = t(r), a = cn(), u = n_(), l = t(u), f = [].slice;
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
        if (x.opcode !== j.opcode || !v(x.args, j.args))
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
        var N = S.path.parts[0], P = this.options;
        P.knownHelpers[N] ? x = !0 : P.knownHelpersOnly && (j = !1);
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
  function g(_, S, h) {
    if (S === void 0 && (S = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    S = a.extend({}, S), "data" in S || (S.data = !0), S.compat && (S.useDepths = !0);
    var C = void 0;
    function x() {
      var N = h.parse(_, S), P = new h.Compiler().compile(N, S), c = new h.JavaScriptCompiler().compile(P, S, void 0, !0);
      return h.template(c);
    }
    function j(N, P) {
      return C || (C = x()), C.call(this, N, P);
    }
    return j._setup = function(N) {
      return C || (C = x()), C._setup(N);
    }, j._child = function(N, P, c, y) {
      return C || (C = x()), C._child(N, P, c, y);
    }, j;
  }
  function v(_, S) {
    if (_ === S)
      return !0;
    if (a.isArray(_) && a.isArray(S) && _.length === S.length) {
      for (var h = 0; h < _.length; h++)
        if (!v(_[h], S[h]))
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
var tl = { exports: {} }, nl = { exports: {} }, Gs = {}, gf = {}, rl = {}, al = {}, w0;
function nw() {
  if (w0) return al;
  w0 = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return al.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, al.decode = function(r) {
    var s = 65, a = 90, u = 97, l = 122, f = 48, m = 57, p = 43, g = 47, v = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= l ? r - u + v : f <= r && r <= m ? r - f + E : r == p ? 62 : r == g ? 63 : -1;
  }, al;
}
var E0;
function a_() {
  if (E0) return rl;
  E0 = 1;
  var t = nw(), r = 5, s = 1 << r, a = s - 1, u = s;
  function l(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, g = m >> 1;
    return p ? -g : g;
  }
  return rl.encode = function(p) {
    var g = "", v, E = l(p);
    do
      v = E & a, E >>>= r, E > 0 && (v |= u), g += t.encode(v);
    while (E > 0);
    return g;
  }, rl.decode = function(p, g, v) {
    var E = p.length, _ = 0, S = 0, h, C;
    do {
      if (g >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = t.decode(p.charCodeAt(g++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(g - 1));
      h = !!(C & u), C &= a, _ = _ + (C << S), S += r;
    } while (h);
    v.value = f(_), v.rest = g;
  }, rl;
}
var vf = {}, C0;
function co() {
  return C0 || (C0 = 1, (function(t) {
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
    var g = (function() {
      var c = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in c);
    })();
    function v(c) {
      return c;
    }
    function E(c) {
      return S(c) ? "$" + c : c;
    }
    t.toSetString = g ? v : E;
    function _(c) {
      return S(c) ? c.slice(1) : c;
    }
    t.fromSetString = g ? v : _;
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
    function P(c, y, w) {
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
    t.computeSourceURL = P;
  })(vf)), vf;
}
var yf = {}, k0;
function i_() {
  if (k0) return yf;
  k0 = 1;
  var t = co(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(l, f) {
    for (var m = new a(), p = 0, g = l.length; p < g; p++)
      m.add(l[p], f);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(l, f) {
    var m = s ? l : t.toSetString(l), p = s ? this.has(l) : r.call(this._set, m), g = this._array.length;
    (!p || f) && this._array.push(l), p || (s ? this._set.set(l, g) : this._set[m] = g);
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
  }, yf.ArraySet = a, yf;
}
var _f = {}, A0;
function rw() {
  if (A0) return _f;
  A0 = 1;
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
  }, _f.MappingList = s, _f;
}
var x0;
function s_() {
  if (x0) return gf;
  x0 = 1;
  var t = a_(), r = co(), s = i_().ArraySet, a = rw().MappingList;
  function u(l) {
    l || (l = {}), this._file = r.getArg(l, "file", null), this._sourceRoot = r.getArg(l, "sourceRoot", null), this._skipValidation = r.getArg(l, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(g) {
      var v = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (v.source = g.source, m != null && (v.source = r.relative(m, v.source)), v.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (v.name = g.name)), p.addMapping(v);
    }), f.sources.forEach(function(g) {
      var v = g;
      m !== null && (v = r.relative(m, g)), p._sources.has(v) || p._sources.add(v);
      var E = f.sourceContentFor(g);
      E != null && p.setSourceContent(g, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), g = r.getArg(f, "source", null), v = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, g, v), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: g,
      name: v
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var g = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var v = this._sourceRoot;
    v != null && (g = r.relative(v, g));
    var E = new s(), _ = new s();
    this._mappings.unsortedForEach(function(S) {
      if (S.source === g && S.originalLine != null) {
        var h = f.originalPositionFor({
          line: S.originalLine,
          column: S.originalColumn
        });
        h.source != null && (S.source = h.source, p != null && (S.source = r.join(p, S.source)), v != null && (S.source = r.relative(v, S.source)), S.originalLine = h.line, S.originalColumn = h.column, h.name != null && (S.name = h.name));
      }
      var C = S.source;
      C != null && !E.has(C) && E.add(C);
      var x = S.name;
      x != null && !_.has(x) && _.add(x);
    }, this), this._sources = E, this._names = _, f.sources.forEach(function(S) {
      var h = f.sourceContentFor(S);
      h != null && (p != null && (S = r.join(p, S)), v != null && (S = r.relative(v, S)), this.setSourceContent(S, h));
    }, this);
  }, u.prototype._validateMapping = function(f, m, p, g) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !g)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: g
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, g = 0, v = 0, E = 0, _ = "", S, h, C, x, j = this._mappings.toArray(), N = 0, P = j.length; N < P; N++) {
      if (h = j[N], S = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          S += ";", m++;
      else if (N > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, j[N - 1]))
          continue;
        S += ",";
      }
      S += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (x = this._sources.indexOf(h.source), S += t.encode(x - E), E = x, S += t.encode(h.originalLine - 1 - g), g = h.originalLine - 1, S += t.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), S += t.encode(C - v), v = C)), _ += S;
    }
    return _;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var g = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
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
  }, gf.SourceMapGenerator = u, gf;
}
var Vs = {}, bf = {}, T0;
function aw() {
  return T0 || (T0 = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, l, f, m) {
      var p = Math.floor((a - s) / 2) + s, g = f(u, l[p], !0);
      return g === 0 ? p : g > 0 ? a - p > 1 ? r(p, a, u, l, f, m) : m == t.LEAST_UPPER_BOUND ? a < l.length ? a : -1 : p : p - s > 1 ? r(s, p, u, l, f, m) : m == t.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
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
  })(bf)), bf;
}
var Sf = {}, N0;
function iw() {
  if (N0) return Sf;
  N0 = 1;
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
      for (var g = a[f], v = l; v < f; v++)
        u(a[v], g) <= 0 && (p += 1, t(a, p, v));
      t(a, p + 1, v);
      var E = p + 1;
      s(a, u, l, E - 1), s(a, u, E + 1, f);
    }
  }
  return Sf.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, Sf;
}
var O0;
function sw() {
  if (O0) return Vs;
  O0 = 1;
  var t = co(), r = aw(), s = i_().ArraySet, a = a_(), u = iw().quickSort;
  function l(g, v) {
    var E = g;
    return typeof g == "string" && (E = t.parseSourceMapInput(g)), E.sections != null ? new p(E, v) : new f(E, v);
  }
  l.fromSourceMap = function(g, v) {
    return f.fromSourceMap(g, v);
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
  }), l.prototype._charIsMappingSeparator = function(v, E) {
    var _ = v.charAt(E);
    return _ === ";" || _ === ",";
  }, l.prototype._parseMappings = function(v, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, l.GENERATED_ORDER = 1, l.ORIGINAL_ORDER = 2, l.GREATEST_LOWER_BOUND = 1, l.LEAST_UPPER_BOUND = 2, l.prototype.eachMapping = function(v, E, _) {
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
    }, this).forEach(v, S);
  }, l.prototype.allGeneratedPositionsFor = function(v) {
    var E = t.getArg(v, "line"), _ = {
      source: t.getArg(v, "source"),
      originalLine: E,
      originalColumn: t.getArg(v, "column", 0)
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
      if (v.column === void 0)
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
  function f(g, v) {
    var E = g;
    typeof g == "string" && (E = t.parseSourceMapInput(g));
    var _ = t.getArg(E, "version"), S = t.getArg(E, "sources"), h = t.getArg(E, "names", []), C = t.getArg(E, "sourceRoot", null), x = t.getArg(E, "sourcesContent", null), j = t.getArg(E, "mappings"), N = t.getArg(E, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    C && (C = t.normalize(C)), S = S.map(String).map(t.normalize).map(function(P) {
      return C && t.isAbsolute(C) && t.isAbsolute(P) ? t.relative(C, P) : P;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(S, !0), this._absoluteSources = this._sources.toArray().map(function(P) {
      return t.computeSourceURL(C, P, v);
    }), this.sourceRoot = C, this.sourcesContent = x, this._mappings = j, this._sourceMapURL = v, this.file = N;
  }
  f.prototype = Object.create(l.prototype), f.prototype.consumer = l, f.prototype._findSourceIndex = function(g) {
    var v = g;
    if (this.sourceRoot != null && (v = t.relative(this.sourceRoot, v)), this._sources.has(v))
      return this._sources.indexOf(v);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == g)
        return E;
    return -1;
  }, f.fromSourceMap = function(v, E) {
    var _ = Object.create(f.prototype), S = _._names = s.fromArray(v._names.toArray(), !0), h = _._sources = s.fromArray(v._sources.toArray(), !0);
    _.sourceRoot = v._sourceRoot, _.sourcesContent = v._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = v._file, _._sourceMapURL = E, _._absoluteSources = _._sources.toArray().map(function(w) {
      return t.computeSourceURL(_.sourceRoot, w, E);
    });
    for (var C = v._mappings.toArray().slice(), x = _.__generatedMappings = [], j = _.__originalMappings = [], N = 0, P = C.length; N < P; N++) {
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
  f.prototype._parseMappings = function(v, E) {
    for (var _ = 1, S = 0, h = 0, C = 0, x = 0, j = 0, N = v.length, P = 0, c = {}, y = {}, w = [], k = [], M, z, R, L, q; P < N; )
      if (v.charAt(P) === ";")
        _++, P++, S = 0;
      else if (v.charAt(P) === ",")
        P++;
      else {
        for (M = new m(), M.generatedLine = _, L = P; L < N && !this._charIsMappingSeparator(v, L); L++)
          ;
        if (z = v.slice(P, L), R = c[z], R)
          P += z.length;
        else {
          for (R = []; P < L; )
            a.decode(v, P, y), q = y.value, P = y.rest, R.push(q);
          if (R.length === 2)
            throw new Error("Found a source, but no line and column");
          if (R.length === 3)
            throw new Error("Found a source and line, but no column");
          c[z] = R;
        }
        M.generatedColumn = S + R[0], S = M.generatedColumn, R.length > 1 && (M.source = x + R[1], x += R[1], M.originalLine = h + R[2], h = M.originalLine, M.originalLine += 1, M.originalColumn = C + R[3], C = M.originalColumn, R.length > 4 && (M.name = j + R[4], j += R[4])), k.push(M), typeof M.originalLine == "number" && w.push(M);
      }
    u(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, t.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(v, E, _, S, h, C) {
    if (v[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + v[_]);
    if (v[S] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + v[S]);
    return r.search(v, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var v = 0; v < this._generatedMappings.length; ++v) {
      var E = this._generatedMappings[v];
      if (v + 1 < this._generatedMappings.length) {
        var _ = this._generatedMappings[v + 1];
        if (E.generatedLine === _.generatedLine) {
          E.lastGeneratedColumn = _.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(v) {
    var E = {
      generatedLine: t.getArg(v, "line"),
      generatedColumn: t.getArg(v, "column")
    }, _ = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(v, "bias", l.GREATEST_LOWER_BOUND)
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
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(v) {
      return v == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(v, E) {
    if (!this.sourcesContent)
      return null;
    var _ = this._findSourceIndex(v);
    if (_ >= 0)
      return this.sourcesContent[_];
    var S = v;
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
  }, f.prototype.generatedPositionFor = function(v) {
    var E = t.getArg(v, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var _ = {
      source: E,
      originalLine: t.getArg(v, "line"),
      originalColumn: t.getArg(v, "column")
    }, S = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(v, "bias", l.GREATEST_LOWER_BOUND)
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
  function p(g, v) {
    var E = g;
    typeof g == "string" && (E = t.parseSourceMapInput(g));
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
        consumer: new l(t.getArg(C, "map"), v)
      };
    });
  }
  return p.prototype = Object.create(l.prototype), p.prototype.constructor = l, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var g = [], v = 0; v < this._sections.length; v++)
        for (var E = 0; E < this._sections[v].consumer.sources.length; E++)
          g.push(this._sections[v].consumer.sources[E]);
      return g;
    }
  }), p.prototype.originalPositionFor = function(v) {
    var E = {
      generatedLine: t.getArg(v, "line"),
      generatedColumn: t.getArg(v, "column")
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
      bias: v.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(v) {
      return v.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(v, E) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var S = this._sections[_], h = S.consumer.sourceContentFor(v, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(v) {
    for (var E = 0; E < this._sections.length; E++) {
      var _ = this._sections[E];
      if (_.consumer._findSourceIndex(t.getArg(v, "source")) !== -1) {
        var S = _.consumer.generatedPositionFor(v);
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
  }, p.prototype._parseMappings = function(v, E) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var S = this._sections[_], h = S.consumer._generatedMappings, C = 0; C < h.length; C++) {
        var x = h[C], j = S.consumer._sources.at(x.source);
        j = t.computeSourceURL(S.consumer.sourceRoot, j, this._sourceMapURL), this._sources.add(j), j = this._sources.indexOf(j);
        var N = null;
        x.name && (N = S.consumer._names.at(x.name), this._names.add(N), N = this._names.indexOf(N));
        var P = {
          source: j,
          generatedLine: x.generatedLine + (S.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (S.generatedOffset.generatedLine === x.generatedLine ? S.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: N
        };
        this.__generatedMappings.push(P), typeof P.originalLine == "number" && this.__originalMappings.push(P);
      }
    u(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), u(this.__originalMappings, t.compareByOriginalPositions);
  }, Vs.IndexedSourceMapConsumer = p, Vs;
}
var wf = {}, M0;
function ow() {
  if (M0) return wf;
  M0 = 1;
  var t = s_().SourceMapGenerator, r = co(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function l(f, m, p, g, v) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = v ?? null, this[u] = !0, g != null && this.add(g);
  }
  return l.fromStringWithSourceMap = function(m, p, g) {
    var v = new l(), E = m.split(s), _ = 0, S = function() {
      var N = c(), P = c() || "";
      return N + P;
      function c() {
        return _ < E.length ? E[_++] : void 0;
      }
    }, h = 1, C = 0, x = null;
    return p.eachMapping(function(N) {
      if (x !== null)
        if (h < N.generatedLine)
          j(x, S()), h++, C = 0;
        else {
          var P = E[_] || "", c = P.substr(0, N.generatedColumn - C);
          E[_] = P.substr(N.generatedColumn - C), C = N.generatedColumn, j(x, c), x = N;
          return;
        }
      for (; h < N.generatedLine; )
        v.add(S()), h++;
      if (C < N.generatedColumn) {
        var P = E[_] || "";
        v.add(P.substr(0, N.generatedColumn)), E[_] = P.substr(N.generatedColumn), C = N.generatedColumn;
      }
      x = N;
    }, this), _ < E.length && (x && j(x, S()), v.add(E.splice(_).join(""))), p.sources.forEach(function(N) {
      var P = p.sourceContentFor(N);
      P != null && (g != null && (N = r.join(g, N)), v.setSourceContent(N, P));
    }), v;
    function j(N, P) {
      if (N === null || N.source === void 0)
        v.add(P);
      else {
        var c = g ? r.join(g, N.source) : N.source;
        v.add(new l(
          N.originalLine,
          N.originalColumn,
          c,
          P,
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
    for (var p, g = 0, v = this.children.length; g < v; g++)
      p = this.children[g], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, l.prototype.join = function(m) {
    var p, g, v = this.children.length;
    if (v > 0) {
      for (p = [], g = 0; g < v - 1; g++)
        p.push(this.children[g]), p.push(m);
      p.push(this.children[g]), this.children = p;
    }
    return this;
  }, l.prototype.replaceRight = function(m, p) {
    var g = this.children[this.children.length - 1];
    return g[u] ? g.replaceRight(m, p) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, l.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, l.prototype.walkSourceContents = function(m) {
    for (var p = 0, g = this.children.length; p < g; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var v = Object.keys(this.sourceContents), p = 0, g = v.length; p < g; p++)
      m(r.fromSetString(v[p]), this.sourceContents[v[p]]);
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
    }, g = new t(m), v = !1, E = null, _ = null, S = null, h = null;
    return this.walk(function(C, x) {
      p.code += C, x.source !== null && x.line !== null && x.column !== null ? ((E !== x.source || _ !== x.line || S !== x.column || h !== x.name) && g.addMapping({
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
      }), E = x.source, _ = x.line, S = x.column, h = x.name, v = !0) : v && (g.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, v = !1);
      for (var j = 0, N = C.length; j < N; j++)
        C.charCodeAt(j) === a ? (p.line++, p.column = 0, j + 1 === N ? (E = null, v = !1) : v && g.addMapping({
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
      g.setSourceContent(C, x);
    }), { code: p.code, map: g };
  }, wf.SourceNode = l, wf;
}
var R0;
function uw() {
  return R0 || (R0 = 1, Gs.SourceMapGenerator = s_().SourceMapGenerator, Gs.SourceMapConsumer = sw().SourceMapConsumer, Gs.SourceNode = ow().SourceNode), Gs;
}
var j0;
function lw() {
  return j0 || (j0 = 1, (function(t, r) {
    r.__esModule = !0;
    var s = cn(), a = void 0;
    try {
      var u = uw();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, p, g, v) {
      this.src = "", v && this.add(v);
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
    function l(m, p, g) {
      if (s.isArray(m)) {
        for (var v = [], E = 0, _ = m.length; E < _; E++)
          v.push(p.wrap(m[E], g));
        return v;
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
      prepend: function(p, g) {
        this.source.unshift(this.wrap(p, g));
      },
      push: function(p, g) {
        this.source.push(this.wrap(p, g));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(g) {
          p.add(["  ", g, `
`]);
        }), p;
      },
      each: function(p) {
        for (var g = 0, v = this.source.length; g < v; g++)
          p(this.source[g]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new a(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof a ? p : (p = l(p, this, g), new a(g.start.line, g.start.column, this.srcFile, p));
      },
      functionCall: function(p, g, v) {
        return v = this.generateList(v), this.wrap([p, g ? "." + g + "(" : "(", v, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var g = this, v = [];
        Object.keys(p).forEach(function(_) {
          var S = l(p[_], g);
          S !== "undefined" && v.push([g.quotedString(_), ":", S]);
        });
        var E = this.generateList(v);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var g = this.empty(), v = 0, E = p.length; v < E; v++)
          v && g.add(","), g.add(l(p[v], this));
        return g;
      },
      generateArray: function(p) {
        var g = this.generateList(p);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(nl, nl.exports)), nl.exports;
}
var D0;
function cw() {
  return D0 || (D0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var a = lh(), u = Gn(), l = s(u), f = cn(), m = lw(), p = s(m);
    function g(_) {
      this.value = _;
    }
    function v() {
    }
    v.prototype = {
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
        var j = S.opcodes, N = void 0, P = void 0, c = void 0, y = void 0;
        for (c = 0, y = j.length; c < y; c++)
          N = j[c], this.source.currentLocation = N.loc, P = P || N.loc, this[N.opcode].apply(this, N.args);
        if (this.source.currentLocation = P, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
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
        var P = this.mergeSource(C);
        return S ? (N.push(P), Function.apply(this, N)) : this.source.wrap(["function(", N.join(","), `) {
  `, P, "}"]);
      },
      mergeSource: function(S) {
        var h = this.environment.isSimple, C = !this.forceBuffer, x = void 0, j = void 0, N = void 0, P = void 0;
        return this.source.each(function(c) {
          c.appendToBuffer ? (N ? c.prepend("  + ") : N = c, P = c) : (N && (j ? N.prepend("buffer += ") : x = !0, P.add(";"), N = P = void 0), j = !0, h || (C = !1));
        }), C ? N ? (N.prepend("return "), P.add(";")) : j || this.source.push('return "";') : (S += ", buffer = " + (x ? "" : this.initializeBuffer()), N ? (N.prepend("return buffer + "), P.add(";")) : this.source.push("return buffer;")), S && this.source.prepend("var " + S.substring(2) + (x ? "" : `;
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
        for (var P = h.length; C < P; C++)
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
        var P = ["(", this.itemsSeparatedBy(N, "||"), ")"], c = this.source.functionCall(P, "call", j.callParams);
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
      compiler: v,
      compileChildren: function(S, h) {
        for (var C = S.children, x = void 0, j = void 0, N = 0, P = C.length; N < P; N++) {
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
        return S instanceof g || (S = this.source.wrap(S)), this.inlineStack.push(S), S;
      },
      pushStackLiteral: function(S) {
        this.push(new g(S));
      },
      pushSource: function(S) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), S && this.source.push(S);
      },
      replaceStack: function(S) {
        var h = ["("], C = void 0, x = void 0, j = void 0;
        if (!this.isInline())
          throw new l.default("replaceStack on non-inline");
        var N = this.popStack(!0);
        if (N instanceof g)
          C = [N.value], h = ["(", C], j = !0;
        else {
          x = !0;
          var P = this.incrStack();
          h = ["((", this.push(P), " = ", N, ")"], C = this.topStack();
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
          if (x instanceof g)
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
        if (!S && C instanceof g)
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
        return h instanceof g ? h.value : h;
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
        var x = [], j = this.setupHelperArgs(h, S, x, C), N = this.nameLookup("helpers", h, "helper"), P = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: j,
          name: N,
          callParams: [P].concat(x)
        };
      },
      setupParams: function(S, h, C) {
        var x = {}, j = [], N = [], P = [], c = !C, y = void 0;
        c && (C = []), x.name = this.quotedString(S), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (x.fn = k || "container.noop", x.inverse = w || "container.noop");
        for (var M = h; M--; )
          y = this.popStack(), C[M] = y, this.trackIds && (P[M] = this.popStack()), this.stringParams && (N[M] = this.popStack(), j[M] = this.popStack());
        return c && (x.args = this.source.generateArray(C)), this.trackIds && (x.ids = this.source.generateArray(P)), this.stringParams && (x.types = this.source.generateArray(N), x.contexts = this.source.generateArray(j)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(S, h, C, x) {
        var j = this.setupParams(S, h, C);
        return j.loc = JSON.stringify(this.source.currentLocation), j = this.objectLiteral(j), x ? (this.useRegister("options"), C.push("options"), ["options=", j]) : C ? (C.push(j), "") : j;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), S = v.RESERVED_WORDS = {}, h = 0, C = _.length; h < C; h++)
        S[_[h]] = !0;
    })(), v.isValidJavaScriptVariableName = function(_) {
      return !v.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function E(_, S, h, C, x) {
      var j = S.popStack(), N = h.length;
      for (_ && N--; C < N; C++)
        j = S.nameLookup(j, h[C], x);
      return _ ? [S.aliasable("container.strict"), "(", j, ", ", S.quotedString(h[C]), ", ", JSON.stringify(S.source.currentLocation), " )"] : j;
    }
    r.default = v, t.exports = r.default;
  })(tl, tl.exports)), tl.exports;
}
var z0;
function dw() {
  return z0 || (z0 = 1, (function(t, r) {
    r.__esModule = !0;
    function s(N) {
      return N && N.__esModule ? N : { default: N };
    }
    var a = QS(), u = s(a), l = n_(), f = s(l), m = ew(), p = tw(), g = cw(), v = s(g), E = r_(), _ = s(E), S = t_(), h = s(S), C = u.default.create;
    function x() {
      var N = C();
      return N.compile = function(P, c) {
        return p.compile(P, c, N);
      }, N.precompile = function(P, c) {
        return p.precompile(P, c, N);
      }, N.AST = f.default, N.Compiler = p.Compiler, N.JavaScriptCompiler = v.default, N.Parser = m.parser, N.parse = m.parse, N.parseWithoutProcessing = m.parseWithoutProcessing, N;
    }
    var j = x();
    j.create = x, h.default(j), j.Visitor = _.default, j.default = j, r.default = j, t.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var ln = dw();
const Re = SillyTavern.getContext();
new _y("dumb", {}).getSettings();
async function o_({
  profileId: t,
  userPrompt: r,
  responseFormat: s,
  buildPromptOptions: a,
  session: u,
  entriesGroupByWorldName: l,
  promptSettings: f,
  mainContextList: m,
  maxResponseToken: p,
  continueFrom: g
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const E = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((P) => P.id === t);
  if (!E)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const _ = E.api ? Re.CONNECT_API_MAP[E.api].selected : void 0;
  if (!_)
    throw new Error(`Could not determine API for profile "${E.name}".`);
  const S = {};
  S.user = "{{user}}", S.char = "{{char}}", S.persona = "{{persona}}", S.responseFormat = s, S.blackListedEntries = u.blackListedEntries;
  const h = r.trim();
  g && g.mode === "revise" ? S.userInstructions = "" : S.userInstructions = ln.compile(h, { noEscape: !0 })(S);
  {
    const P = {};
    Object.entries(l).filter(
      ([c, y]) => y.length > 0 && u.selectedWorldNames.includes(c) && y.some((w) => !w?.disable)
    ).forEach(([c, y]) => {
      let w = y.filter((M) => !M?.disable);
      const k = u.selectedEntryUids?.[c];
      if (k && k.length > 0) {
        const M = new Set(k);
        w = w.filter((z) => M.has(z.uid));
      }
      w.length > 0 && (P[c] = w);
    }), S.currentLorebooks = P;
  }
  {
    const P = {};
    Object.entries(u.suggestedEntries).filter(([c, y]) => y.length > 0).forEach(([c, y]) => {
      P[c] = y.filter(
        (w) => !(c === g?.worldName && w.uid === g.entry.uid && w.comment === g.entry.comment)
      );
    }), S.suggestedLorebooks = P;
  }
  const C = [];
  {
    for (const P of m) {
      if (P.promptName === "chatHistory") {
        C.push(...(await Oy(_, a)).result);
        continue;
      }
      const c = f[P.promptName];
      if (!c)
        continue;
      const y = {
        role: P.role,
        content: ln.compile(c.content, { noEscape: !0 })(S)
      };
      y.content = Re.substituteParams(y.content), y.content && C.push(y);
    }
    g && (g.mode === "continue" ? C.push({
      role: "assistant",
      content: RS(g.worldName, g.entry, s)
    }) : g.mode === "revise" && (C.push({
      role: "assistant",
      content: zS(g.worldName, g.entry, s)
    }), h && C.push({
      role: "user",
      content: h
    })));
  }
  const x = await Re.ConnectionManagerRequestService.sendRequest(
    t,
    C,
    p
  ), j = C.find((P) => P.role === "assistant");
  if (!x.content)
    return {};
  let N = LS(x.content, s, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: g && g.mode === "continue" ? j?.content : void 0
  });
  return Object.keys(N).length === 0 ? {} : (Object.entries(N).forEach(([P, c]) => {
    l[P] && c.forEach((y) => {
      const w = l[P]?.find((k) => k.uid === y.uid);
      w && (y.key.length === 0 && (y.key = w.key), y.comment || (y.comment = w.comment)), (y.comment === null || y.comment === void 0) && (y.comment = "");
    });
  }), N = g ? { [g.worldName]: [N[g.worldName][0]] } : N, N);
}
function fw(t, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === t.uid);
  let l;
  const f = u !== -1;
  if (f)
    l = a[u];
  else {
    const m = { entries: {} };
    a.forEach((v) => m.entries[v.uid] = v);
    const p = nh(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const g = a.length > 0 ? a[a.length - 1] : void 0;
    if (g) {
      const v = p.uid;
      Object.assign(p, g), p.uid = v;
    }
    l = p, a.push(l);
  }
  l.key = t.key, l.content = t.content, l.comment = t.comment;
  for (const m of ra)
    l[m] = t[m];
  return { modifiedEntry: l, status: f ? "updated" : "added" };
}
function hw() {
  const t = Re.extensionSettings?.connectionManager?.profiles ?? [];
  return t.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => t.find((a) => a.name?.includes(s))?.name
  }));
}
const zi = "SillyTavern-WorldInfo-Recommender-Plus", pw = "0.3.0", mw = "F_1.6", gw = {
  EXTENSION: "worldInfoRecommender"
}, il = [
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
  stDescription: b8,
  currentLorebooks: S8,
  blackListedEntries: w8,
  suggestedLorebooks: E8,
  responseRules: C8,
  taskDescription: k8,
  reviseJsonPrompt: A8,
  reviseXmlPrompt: x8,
  reviseTaskDescription: T8,
  reviseGlobalStateUpdate: M8,
  reviseGlobalStateUpdateAddedModified: N8,
  reviseGlobalStateUpdateRemoved: O8
}, io = {
  version: pw,
  formatVersion: mw,
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
function sl(t, r) {
  const s = t.prompts[r], a = io.prompts[r];
  if (!s) {
    t.prompts[r] = { ...a };
    return;
  }
  s.isDefault === !0 && (s.content = nt[r], s.isDefault = !0);
}
function L0(t) {
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
const Ut = new _y(gw.EXTENSION, io);
async function vw() {
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
            return a.formatVersion = "F_1.6", a.prompts || (a.prompts = { ...io.prompts }), sl(a, "responseRules"), sl(a, "currentLorebooks"), sl(a, "suggestedLorebooks"), sl(a, "reviseGlobalStateUpdateAddedModified"), a;
          }
        }
      ]
    }).then((s) => {
      t();
    }).catch((s) => {
      console.error(`[${zi}] Error initializing settings:`, s), Se("error", `[${zi}] Failed to initialize settings: ${s.message}`), Re.Popup.show.confirm(
        `[${zi}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((a) => {
        a && (Ut.resetSettings(), Se("success", `[${zi}] Settings reset. Reloading may be required.`), t());
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
}, u_ = ({ label: t, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
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
}, Tl = ({ children: t, className: r, overrideDefaults: s = !1, ...a }) => {
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
var yw = yy(), Bt = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Bt || {}), Wr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Wr || {});
const _w = SillyTavern.getContext(), er = ({
  content: t,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: l
}) => {
  var f;
  const m = ie.useRef(null), p = ie.useRef(null), [g, v] = ie.useState(!1), [E, _] = ie.useState(null), S = ie.useRef(_w.uuidv4()), h = ie.useRef({
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
    const P = (c) => {
      c.preventDefault(), u || C(Wr.CANCELLED);
    };
    return N.addEventListener("cancel", P), h.current.dlg = N, h.current.mainInput = p.current, Ai.util.popups.push(h.current), N.showModal || (N.classList.add("poly_dialog"), dv.registerDialog(N), new ResizeObserver((c) => {
      for (const y of c)
        dv.reposition(y.target);
    }).observe(N)), N.showModal(), Kd(), () => {
      cv(Ai.util.popups, h.current), Kd(), N.removeEventListener("cancel", P);
    };
  }, []);
  const C = async (N) => {
    var P, c;
    let y = N;
    if (r === Bt.INPUT && (N >= Wr.AFFIRMATIVE ? y = (P = p.current) == null ? void 0 : P.value : N === Wr.NEGATIVE ? y = !1 : N === Wr.CANCELLED ? y = null : y = !1), (c = a.customInputs) != null && c.length) {
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
      v(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    v(!1), Ai.util.lastResult = {
      value: y,
      result: N,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Kd(), O2(w, async () => {
      var k;
      if (w.close(), a.onClose && await a.onClose(h.current), cv(Ai.util.popups, h.current), Ai.util.popups.length > 0) {
        const M = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), z = M?.getAttribute("data-id"), R = Ai.util.popups.find((L) => L.id === z);
        R && R.lastFocus && R.lastFocus.focus();
      }
      l(y);
    }));
  }, x = (N) => {
    N.target instanceof HTMLElement && N.target !== m.current && (_(N.target), h.current.lastFocus = N.target);
  }, j = async (N) => {
  };
  return yw.createPortal(
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
            (f = a.customButtons) == null ? void 0 : f.map((N, P) => {
              const c = typeof N == "string" ? { text: N, result: P + 2 } : N;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${c.classes ?? ""}`,
                  "data-result": c.result,
                  onClick: () => {
                    var y;
                    (y = c.action) == null || y.call(c), C(c.result ?? P + 2);
                  },
                  "data-i18n": c.text,
                  children: c.text
                },
                P
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
}, br = SillyTavern.getContext(), l_ = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: l,
  onDelete: f
}) => {
  const [m, p] = ie.useState(t ?? ""), [g, v] = ie.useState(Date.now()), { isEnabled: E, profiles: _, connectApiMap: S } = ie.useMemo(() => {
    var x, j;
    return (x = br.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((j = br.extensionSettings.connectionManager) == null ? void 0 : j.profiles) ?? [],
      connectApiMap: br.CONNECT_API_MAP
    };
  }, [g]);
  ie.useEffect(() => {
    if (!E) return;
    const x = (P) => {
      $s(P, r, S) && (v(Date.now()), u?.(P));
    }, j = (P, c) => {
      const y = $s(P, r, S), w = $s(c, r, S);
      (y || w) && v(Date.now()), l?.(P, c), m === P.id && !w && (p(""), a?.(void 0));
    }, N = (P) => {
      $s(P, r, S) && (v(Date.now()), f?.(P), m === P.id && (p(""), a?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", x), br.eventSource.on("CONNECTION_PROFILE_UPDATED", j), br.eventSource.on("CONNECTION_PROFILE_DELETED", N), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", j), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", N);
    };
  }, [E, m, r, S, a, u, l, f]);
  const h = ie.useMemo(() => {
    if (!E) return [];
    const x = _.filter((N) => $s(N, r, S)), j = {};
    for (const [N, P] of Object.entries(r))
      j[N] = { label: P, profiles: [] };
    for (const N of x) {
      const P = S[N.api];
      j[P.selected] && j[P.selected].profiles.push(N);
    }
    for (const N of Object.values(j))
      N.profiles.sort((P, c) => (P.name ?? "").localeCompare(c.name ?? ""));
    return Object.values(j).filter((N) => N.profiles.length > 0);
  }, [E, _, r, S]), C = ie.useCallback(
    (x) => {
      const j = x.target.value;
      p(j);
      const N = _.find((P) => P.id === j);
      a?.(N);
    },
    [_, a]
  );
  return E ? /* @__PURE__ */ A.jsxs(Tl, { value: m, onChange: C, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: s }),
    h.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((j) => /* @__PURE__ */ A.jsx("option", { value: j.id, children: j.name }, j.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(Tl, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, bw = bl.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: l, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: g,
      canDelete: v = !0,
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
      opacity: r && !g ? 0.6 : 1
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
        Tl,
        {
          value: C,
          onChange: (P) => f(m, P.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((P) => /* @__PURE__ */ A.jsx("option", { value: P.value, children: P.label }, P.value))
        }
      ),
      a && (!_ || !S) && /* @__PURE__ */ A.jsx("span", { style: N }),
      r && E && /* @__PURE__ */ A.jsx(
        Oe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...j,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      r && !E && /* @__PURE__ */ A.jsx("span", { style: N }),
      s && v && /* @__PURE__ */ A.jsx(
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
      s && !v && /* @__PURE__ */ A.jsx("span", { style: { ...N, marginRight: 0 } })
    ] });
  }
), c_ = ({
  items: t,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: a = !1,
  showSelectInput: u = !1,
  sortableJsOptions: l = {}
}) => {
  const f = ie.useRef(null), m = ie.useRef(null);
  ie.useEffect(() => (f.current && (m.current = xe.create(f.current, {
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
  }, g = (E) => {
    r(t.filter((_) => _.id !== E));
  }, v = (E, _) => {
    r(t.map((S) => S.id === E ? { ...S, selectValue: _ } : S));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((E) => /* @__PURE__ */ A.jsx(
    bw,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: p,
      onDelete: g,
      onSelectChange: v
    },
    E.id
  )) });
}, d_ = ({
  items: t,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
  closeOnSelect: u = !1,
  multiple: l = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: v = "No results found",
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
  const P = ie.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new Ui(t, k);
  }, [t, p, E]), c = ie.useMemo(() => !p || !x.trim() || !P ? t : P.search(x.trim()).map((k) => k.item), [t, x, p, P]), y = async (k) => {
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
                    u_,
                    {
                      type: "text",
                      placeholder: g,
                      value: x,
                      onChange: (k) => j(k.target.value),
                      autoFocus: !0,
                      className: _
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: c.length > 0 ? c.map((k) => /* @__PURE__ */ A.jsx(
                Sw,
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
                  children: v
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, Sw = bl.memo(({ item: t, isSelected: r, onClick: s }) => {
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
}), Ef = SillyTavern.getContext(), Zf = ({
  value: t,
  items: r,
  readOnlyValues: s = [],
  label: a,
  onChange: u,
  onItemsChange: l,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: g,
  onRename: v,
  onDelete: E,
  buttons: _
}) => {
  const S = ie.useMemo(() => r.find((N) => N.value === t), [r, t]), h = ie.useCallback((N) => N ? s.includes(N) : !1, [s]), C = async () => {
    const N = await Ef.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!N || N.trim() === "") return;
    const P = N.trim();
    if (r.some((y) => y.value === P)) {
      await Se("warning", `A ${a} with this name already exists.`);
      return;
    }
    let c = { value: P, label: P };
    if (g) {
      const y = await Promise.resolve(g(P));
      if (!y.confirmed) return;
      y.value && (typeof y.value == "string" ? c = { value: y.value, label: y.value } : c = y.value);
    }
    l([...r, c]), u(c.value, t);
  }, x = async () => {
    if (!S) {
      await Se("warning", `Please select a ${a} to rename.`);
      return;
    }
    if (h(S.value)) {
      await Se("warning", `This ${a} cannot be renamed as it is read-only.`);
      return;
    }
    const N = await Ef.Popup.show.input(
      `Rename ${a}`,
      `Please enter a new name for "${S.label}":`,
      S.label
    );
    if (!N || N.trim() === "" || N.trim() === S.value) return;
    const P = N.trim();
    if (r.some((w) => w.value === P)) {
      await Se("warning", `A ${a} with this name already exists.`);
      return;
    }
    let c = { value: P, label: P };
    if (v) {
      const w = await Promise.resolve(v(S.value, P));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? c = { value: w.value, label: w.value } : c = w.value);
    }
    const y = r.map((w) => w.value === S.value ? c : w);
    l(y), u(c.value, t);
  }, j = async () => {
    var N;
    if (!S) {
      await Se("warning", `Please select a ${a} to delete.`);
      return;
    }
    if (h(S.value)) {
      await Se("warning", `This ${a} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Ef.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${S.label}"?`
    ) || E && !await Promise.resolve(E(S.value)))
      return;
    const P = r.findIndex((w) => w.value === S.value), c = r.filter((w) => w.value !== S.value);
    l(c);
    let y;
    if (c.length > 0) {
      const w = Math.min(P, c.length - 1);
      y = (N = c[w]) == null ? void 0 : N.value;
    }
    u(y, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Tl, { value: t ?? "", onChange: (N) => u(N.target.value, t), children: r.map((N) => /* @__PURE__ */ A.jsx("option", { value: N.value, children: N.label }, N.value)) }),
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
}, f_ = () => {
  const [, t] = ie.useState(0);
  return ie.useCallback(() => {
    t((s) => s + 1);
  }, []);
}, Cf = SillyTavern.getContext(), ww = () => {
  const t = f_(), r = Ut.getSettings(), [s, a] = ie.useState(il[0]), u = ie.useCallback(
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
  }, g = (c) => {
    u((y) => {
      const w = {}, k = y.mainContextTemplatePresets;
      c.forEach((M) => {
        w[M.value] = k[M.value] ?? structuredClone(k[y.mainContextTemplatePreset] ?? k.default);
      }), y.mainContextTemplatePresets = w;
    });
  }, v = (c) => {
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
    await Cf.Popup.show.confirm("Restore default", "Are you sure?") && u((y) => {
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
    const y = L0(c);
    return y ? r.prompts[y] ? (Se("error", `Prompt name already exists: ${y}`), { confirmed: !1 }) : (u((w) => {
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
    }), a(y), { confirmed: !0, value: y }) : (Se("error", `Invalid prompt name: ${c}`), { confirmed: !1 });
  }, h = (c, y) => {
    const w = L0(y);
    return w ? r.prompts[w] ? (Se("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (u((k) => {
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
    }), a(w), { confirmed: !0, value: w }) : (Se("error", `Invalid prompt name: ${y}`), { confirmed: !1 });
  }, C = (c) => {
    const y = c.target.value;
    u((w) => {
      const k = w.prompts[s];
      k && (w.prompts = {
        ...w.prompts,
        [s]: {
          ...k,
          content: y,
          isDefault: il.includes(s) ? nt[s] === y : !1
        }
      });
    });
  }, x = async () => {
    const c = r.prompts[s];
    if (!c) return Se("warning", "No prompt selected.");
    await Cf.Popup.show.confirm("Restore Default", `Restore default for "${c.label}"?`) && u((w) => {
      w.prompts = {
        ...w.prompts,
        [s]: {
          ...w.prompts[s],
          content: nt[s]
        }
      };
    });
  }, j = async () => {
    await Cf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Ut.resetSettings(), t(), Se("success", "Settings reset. The UI has been updated."));
  }, N = r.prompts[s]?.content ?? "", P = il.includes(s);
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
        Zf,
        {
          label: "Template",
          items: l,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        c_,
        {
          items: m,
          onItemsChange: v,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Prompt Templates" }),
        P && /* @__PURE__ */ A.jsx(
          Oe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Zf,
        {
          label: "Prompt",
          items: f,
          value: s,
          readOnlyValues: il,
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
var _l = { exports: {} }, Ew = _l.exports, P0;
function Cw() {
  return P0 || (P0 = 1, (function(t) {
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
          var w = g(y, c);
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
      function g(c, y) {
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
        var y = g(c, null);
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
      function v(c, y) {
        var w = y.charCodeAt(0);
        return "¨E" + w + "E";
      }
      a.helper.escapeCharactersCallback = v, a.helper.escapeCharacters = function(c, y, w) {
        var k = "([" + y.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var M = new RegExp(k, "g");
        return c = c.replace(M, v), c;
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
          var J = g(O, U);
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
          var J = g(O, U);
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
            preList: I(J)
          };
          G(J);
          for (var B = J.childNodes, Y = "", ce = 0; ce < B.length; ce++)
            Y += a.subParser("makeMarkdown.node")(B[ce], ae);
          function G(te) {
            for (var Q = 0; Q < te.childNodes.length; ++Q) {
              var se = te.childNodes[Q];
              se.nodeType === 3 ? !/\S/.test(se.nodeValue) && !/^[ ]+$/.test(se.nodeValue) ? (te.removeChild(se), --Q) : (se.nodeValue = se.nodeValue.split(`
`).join(" "), se.nodeValue = se.nodeValue.replace(/(\s)+/g, "$1")) : se.nodeType === 1 && G(se);
            }
          }
          function I(te) {
            for (var Q = te.querySelectorAll("pre"), se = [], re = 0; re < Q.length; ++re)
              if (Q[re].childElementCount === 1 && Q[re].firstChild.tagName.toLowerCase() === "code") {
                var pe = Q[re].firstChild.innerHTML.trim(), je = Q[re].firstChild.getAttribute("data-language") || "";
                if (je === "")
                  for (var He = Q[re].firstChild.className.split(" "), be = 0; be < He.length; ++be) {
                    var fe = He[be].match(/^language-(.+)$/);
                    if (fe !== null) {
                      je = fe[1];
                      break;
                    }
                  }
                pe = a.helper.unescapeHTMLEntities(pe), se.push(pe), Q[re].outerHTML = '<precode language="' + je + '" precodenum="' + re.toString() + '"></precode>';
              } else
                se.push(Q[re].innerHTML), Q[re].innerHTML = "", Q[re].setAttribute("prenum", re.toString());
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
          var ce = w.gUrls, G = w.gTitles, I = w.gDimensions;
          if (O = O.toLowerCase(), Y || (Y = ""), $.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            U = "";
          else if (U === "" || U === null)
            if ((O === "" || O === null) && (O = W.toLowerCase().replace(/ ?\n/g, " ")), U = "#" + O, !a.helper.isUndefined(ce[O]))
              U = ce[O], a.helper.isUndefined(G[O]) || (Y = G[O]), a.helper.isUndefined(I[O]) || (J = I[O].width, ae = I[O].height);
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
            for (var G = [], I = 0; I < B.length; ++I)
              a.helper.isUndefined(ae[W][I]), G.push(L(ae[W][I], Y[I]));
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
      var P = this;
      t.exports ? t.exports = a : P.showdown = a;
    }).call(Ew);
  })(_l)), _l.exports;
}
var kw = Cw();
const Aw = /* @__PURE__ */ Wf(kw);
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
      }, p = s.length, g = r.length, v = 1, E = p + g;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var _ = (f = a.timeout) !== null && f !== void 0 ? f : 1 / 0, S = Date.now() + _, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, a);
      if (h[0].oldPos + 1 >= g && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var x = -1 / 0, j = 1 / 0, N = function() {
        for (var c = Math.max(x, -v); c <= Math.min(j, v); c += 2) {
          var y = void 0, w = h[c - 1], k = h[c + 1];
          w && (h[c - 1] = void 0);
          var M = !1;
          if (k) {
            var z = k.oldPos - c;
            M = k && 0 <= z && z < p;
          }
          var R = w && w.oldPos + 1 < g;
          if (!M && !R) {
            h[c] = void 0;
            continue;
          }
          if (!R || M && w.oldPos < k.oldPos ? y = l.addToPath(k, !0, !1, 0, a) : y = l.addToPath(w, !1, !0, 1, a), C = l.extractCommon(y, s, r, c, a), y.oldPos + 1 >= g && C + 1 >= p)
            return m(l.buildValues(y.lastComponent, s, r)) || !0;
          h[c] = y, y.oldPos + 1 >= g && (j = Math.min(j, c - 1)), C + 1 >= p && (x = Math.max(x, c + 1));
        }
        v++;
      };
      if (u)
        (function c() {
          setTimeout(function() {
            if (v > E || Date.now() > S)
              return u(void 0);
            N() || c();
          }, 0);
        })();
      else
        for (; v <= E && Date.now() <= S; ) {
          var P = N();
          if (P)
            return P;
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
      for (var f = s.length, m = a.length, p = r.oldPos, g = p - u, v = 0; g + 1 < f && p + 1 < m && this.equals(a[p + 1], s[g + 1], l); )
        g++, p++, v++, l.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return v && !l.oneChangePerToken && (r.lastComponent = { count: v, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, g;
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
      for (var f = u.length, m = 0, p = 0, g = 0; m < f; m++) {
        var v = u[m];
        if (v.removed)
          v.value = this.join(a.slice(g, g + v.count)), g += v.count;
        else {
          if (!v.added && this.useLongestToken) {
            var E = s.slice(p, p + v.count);
            E = E.map(function(_, S) {
              var h = a[g + S];
              return h.length > _.length ? h : _;
            }), v.value = this.join(E);
          } else
            v.value = this.join(s.slice(p, p + v.count));
          p += v.count, v.added || (g += v.count);
        }
      }
      return u;
    }, t;
  })()
), xw = /* @__PURE__ */ (function() {
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
    return r;
  })(ia)
);
new Tw();
function I0(t, r) {
  var s;
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[s] != r[s])
      return t.slice(0, s);
  return t.slice(0, s);
}
function B0(t, r) {
  var s;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < t.length && s < r.length; s++)
    if (t[t.length - (s + 1)] != r[r.length - (s + 1)])
      return t.slice(-s);
  return t.slice(-s);
}
function Gf(t, r, s) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + t.slice(r.length);
}
function Vf(t, r, s) {
  if (!r)
    return t + s;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + s;
}
function Ys(t, r) {
  return Gf(t, r, "");
}
function ol(t, r) {
  return Vf(t, r, "");
}
function U0(t, r) {
  return r.slice(0, Nw(t, r));
}
function Nw(t, r) {
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
var h_ = /* @__PURE__ */ (function() {
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
})(), Nl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Ow = new RegExp("[".concat(Nl, "]+|\\s+|[^").concat(Nl, "]"), "ug"), Mw = (
  /** @class */
  (function(t) {
    h_(r, t);
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
        u = s.match(Ow) || [];
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
        m.added ? l = m : m.removed ? f = m : ((l || f) && H0(u, f, l, m), u = m, l = null, f = null);
      }), (l || f) && H0(u, f, l, null), s;
    }, r;
  })(ia)
), Rw = new Mw();
function p_(t, r, s) {
  return Rw.diff(t, r, s);
}
function H0(t, r, s, a) {
  if (r && s) {
    var u = Jr(r.value), l = Fs(r.value), f = Jr(s.value), m = Fs(s.value);
    if (t) {
      var p = I0(u, f);
      t.value = Vf(t.value, f, p), r.value = Ys(r.value, p), s.value = Ys(s.value, p);
    }
    if (a) {
      var g = B0(l, m);
      a.value = Gf(a.value, m, g), r.value = ol(r.value, g), s.value = ol(s.value, g);
    }
  } else if (s) {
    if (t) {
      var v = Jr(s.value);
      s.value = s.value.substring(v.length);
    }
    if (a) {
      var v = Jr(a.value);
      a.value = a.value.substring(v.length);
    }
  } else if (t && a) {
    var E = Jr(a.value), _ = Jr(r.value), S = Fs(r.value), h = I0(E, _);
    r.value = Ys(r.value, h);
    var C = B0(Ys(E, h), S);
    r.value = ol(r.value, C), a.value = Gf(a.value, E, C), t.value = Vf(t.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var x = Jr(a.value), j = Fs(r.value), N = U0(j, x);
    r.value = ol(r.value, N);
  } else if (t) {
    var P = Fs(t.value), c = Jr(r.value), N = U0(P, c);
    r.value = Ys(r.value, N);
  }
}
var jw = (
  /** @class */
  (function(t) {
    h_(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(Nl, "]+|[^\\S\\n\\r]+|[^").concat(Nl, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(ia)
);
new jw();
var Dw = /* @__PURE__ */ (function() {
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
})(), zw = (
  /** @class */
  (function(t) {
    Dw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = m_, s;
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
new zw();
function m_(t, r) {
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
var Lw = /* @__PURE__ */ (function() {
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
})(), Pw = (
  /** @class */
  (function(t) {
    Lw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ia)
);
new Pw();
var Iw = /* @__PURE__ */ (function() {
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
})(), Bw = (
  /** @class */
  (function(t) {
    Iw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(ia)
);
new Bw();
var Uw = /* @__PURE__ */ (function() {
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
})(), Hw = (
  /** @class */
  (function(t) {
    Uw(r, t);
    function r() {
      var s = t !== null && t.apply(this, arguments) || this;
      return s.tokenize = m_, s;
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
      return typeof s == "string" ? s : JSON.stringify($f(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return t.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(ia)
);
new Hw();
function $f(t, r, s, a, u) {
  r = r || [], s = s || [], a && (t = a(u === void 0 ? "" : u, t));
  var l;
  for (l = 0; l < r.length; l += 1)
    if (r[l] === t)
      return s[l];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), s.push(f), l = 0; l < t.length; l += 1)
      f[l] = $f(t[l], r, s, a, String(l));
    return r.pop(), s.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, s.push(f);
    var m = [], p;
    for (p in t)
      Object.prototype.hasOwnProperty.call(t, p) && m.push(p);
    for (m.sort(), l = 0; l < m.length; l += 1)
      p = m[l], f[p] = $f(t[p], r, s, a, p);
    r.pop(), s.pop();
  } else
    f = t;
  return f;
}
var qw = /* @__PURE__ */ (function() {
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
})(), Zw = (
  /** @class */
  (function(t) {
    qw(r, t);
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
new Zw();
const Gw = Object.fromEntries(Xy.map(({ value: t, label: r }) => [t, r])), Vw = Object.fromEntries(Qy.map(({ value: t, label: r }) => [t, r]));
function q0(t) {
  return t ?? null;
}
function Sr(t) {
  return t == null || t === "" ? "—" : typeof t == "boolean" ? t ? "Yes" : "No" : Array.isArray(t) ? t.length > 0 ? t.join(", ") : "—" : String(t);
}
function Z0(t, r) {
  return t === "position" ? Sr(Gw[Number(r)] ?? r) : t === "role" ? Sr(Vw[Number(r)] ?? r) : t === "probability" && typeof r == "number" ? `${r}%` : Sr(r);
}
function Ol(t) {
  return (t.key || []).slice().sort().join(",");
}
function $w(t, r) {
  if ((t.content || "") !== (r.content || "") || (t.comment || "") !== (r.comment || "") || Ol(t) !== Ol(r)) return !1;
  for (const s of ra) {
    const a = t[s], u = r[s];
    if (a !== u && !(a == null && u == null))
      return !1;
  }
  return !0;
}
function zl(t, r) {
  return !$w(t, r);
}
function g_(t, r) {
  const s = [];
  (t.comment || "") !== (r.comment || "") && s.push({
    field: "comment",
    label: "Name",
    before: Sr(t.comment),
    after: Sr(r.comment)
  }), Ol(t) !== Ol(r) && s.push({
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
  for (const a of xS) {
    const u = q0(t[a] ?? Xe[a]), l = q0(r[a] ?? Xe[a]);
    u !== l && s.push({
      field: a,
      label: TS[a],
      before: Z0(a, u),
      after: Z0(a, l)
    });
  }
  return s;
}
function G0(t) {
  const r = {};
  for (const s of ra) {
    const a = t[s], u = Xe[s];
    a !== void 0 && a !== u && (r[s] = a);
  }
  return r;
}
const Yw = ({ originalEntry: t, newEntry: r }) => {
  const s = ie.useMemo(
    () => g_(t, r),
    [t, r]
  ), a = (u, l) => {
    const f = p_(u, l);
    let m = "", p = "";
    return f.forEach((g) => {
      const v = g.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), _ = `<span style="${g.added ? "color: green; background-color: #e6ffed;" : g.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${v}</span>`;
      g.added || (m += _), g.removed || (p += _);
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
}, Fw = SillyTavern.getContext(), kf = (t, r, s, a) => {
  const u = t.trim();
  if (!u) return r;
  const l = Number.parseInt(u, 10);
  return Number.isNaN(l) ? r : s !== void 0 && l < s ? s : a !== void 0 && l > a ? a : l;
}, Xw = ie.forwardRef(({ entry: t, initialRegexIds: r }, s) => {
  const [a, u] = ie.useState([]), [l, f] = ie.useState(t.comment), [m, p] = ie.useState(t.key.join(", ")), [g, v] = ie.useState(t.content), [E, _] = ie.useState([]), [S, h] = ie.useState(!1), [C, x] = ie.useState(t.position ?? Xe.position), [j, N] = ie.useState(String(t.depth ?? Xe.depth)), [P, c] = ie.useState(String(t.order ?? Xe.order)), [y, w] = ie.useState(t.role ?? Xe.role), [k, M] = ie.useState(t.selective ?? Xe.selective), [z, R] = ie.useState(t.constant ?? Xe.constant), [L, q] = ie.useState(String(t.probability ?? Xe.probability)), [F, $] = ie.useState(t.group ?? Xe.group), [W, O] = ie.useState(
    t.excludeRecursion ?? Xe.excludeRecursion
  ), [U, J] = ie.useState(
    t.preventRecursion ?? Xe.preventRecursion
  );
  ie.useEffect(() => {
    const I = Fw.extensionSettings.regex ?? [];
    u(I);
    const te = Object.entries(r).map(([Q, se]) => {
      const re = I.find((pe) => pe.id === Q);
      return re ? { id: re.id, label: re.scriptName, enabled: !se?.disabled } : null;
    }).filter((Q) => Q !== null);
    _(te);
  }, [r]), ie.useImperativeHandle(s, () => ({
    getFormData: () => {
      const I = {
        ...t,
        comment: l.trim(),
        key: m.split(",").map((Q) => Q.trim()).filter(Boolean),
        content: g,
        position: C,
        depth: kf(j, t.depth ?? Xe.depth, 0),
        order: kf(P, t.order ?? Xe.order),
        role: y,
        selective: k,
        constant: z,
        probability: kf(L, t.probability ?? Xe.probability, 0, 100),
        group: F.trim(),
        excludeRecursion: W,
        preventRecursion: U
      }, te = E.reduce(
        (Q, se) => (Q[se.id] = { disabled: !se.enabled }, Q),
        {}
      );
      return { updatedEntry: I, updatedRegexIds: te };
    }
  }));
  const ae = ie.useMemo(
    () => a.map((I) => ({ value: I.id, label: I.scriptName })),
    [a]
  ), B = ie.useMemo(() => E.map((I) => I.id), [E]), Y = C === 4 || C === 5, ce = ie.useCallback(() => {
    let I = t.content;
    const te = E.filter((Q) => Q.enabled);
    for (const Q of te) {
      const se = a.find((re) => re.id === Q.id);
      se && (I = q3(se, I));
    }
    v(I);
  }, [E, a, t.content]), G = (I) => {
    const te = I.map((Q) => {
      const se = E.find((pe) => pe.id === Q);
      if (se) return se;
      const re = a.find((pe) => pe.id === Q);
      return re ? { id: re.id, label: re.scriptName, enabled: !0 } : null;
    }).filter((Q) => Q !== null);
    _(te);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: "Title" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: l, onChange: (I) => f(I.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (I) => p(I.target.value) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ A.jsx(
        d_,
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
        c_,
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
        value: g,
        onChange: (I) => v(I.target.value),
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
          onClick: () => h((I) => !I),
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
                onChange: (I) => x(Number.parseInt(I.target.value, 10)),
                children: Xy.map((I) => /* @__PURE__ */ A.jsx("option", { value: I.value, children: I.label }, I.value))
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
                onChange: (I) => N(I.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Order" }),
            /* @__PURE__ */ A.jsx("input", { type: "number", className: "text_pole", value: P, onChange: (I) => c(I.target.value) })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Role" }),
            /* @__PURE__ */ A.jsx(
              "select",
              {
                className: "text_pole",
                value: y,
                onChange: (I) => w(Number.parseInt(I.target.value, 10)),
                children: Qy.map((I) => /* @__PURE__ */ A.jsx("option", { value: I.value, children: I.label }, I.value))
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
                onChange: (I) => q(I.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "edit-popup-field", children: [
            /* @__PURE__ */ A.jsx("label", { children: "Group" }),
            /* @__PURE__ */ A.jsx("input", { type: "text", className: "text_pole", value: F, onChange: (I) => $(I.target.value) })
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "advanced-settings-checkboxes", children: [
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: k, onChange: (I) => M(I.target.checked) }),
            /* @__PURE__ */ A.jsx("span", { children: "Selective" })
          ] }),
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: z, onChange: (I) => R(I.target.checked) }),
            /* @__PURE__ */ A.jsx("span", { children: "Constant" })
          ] }),
          /* @__PURE__ */ A.jsxs("label", { className: "checkbox_field", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "checkbox",
                checked: W,
                onChange: (I) => O(I.target.checked)
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
                onChange: (I) => J(I.target.checked)
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
    var g;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (g = m._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(t), r(m, p);
    for (const v in f.prototype)
      v in m || Object.defineProperty(m, v, { value: f.prototype[v].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const u = s?.Parent ?? Object;
  class l extends u {
  }
  Object.defineProperty(l, "name", { value: t });
  function f(m) {
    var p;
    const g = s?.Parent ? new l() : this;
    a(g, m), (p = g._zod).deferred ?? (p.deferred = []);
    for (const v of g._zod.deferred)
      v();
    return g;
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
class v_ extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const y_ = {};
function La(t) {
  return y_;
}
function __(t) {
  const r = Object.values(t).filter((a) => typeof a == "number");
  return Object.entries(t).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function Yf(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ch(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function dh(t) {
  return t == null;
}
function fh(t) {
  const r = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, s);
}
function Qw(t, r) {
  const s = (t.toString().split(".")[1] || "").length, a = r.toString();
  let u = (a.split(".")[1] || "").length;
  if (u === 0 && /\d?e-\d?/.test(a)) {
    const p = a.match(/\d?e-(\d?)/);
    p?.[1] && (u = Number.parseInt(p[1]));
  }
  const l = s > u ? s : u, f = Number.parseInt(t.toFixed(l).replace(".", "")), m = Number.parseInt(r.toFixed(l).replace(".", ""));
  return f % m / 10 ** l;
}
const V0 = Symbol("evaluating");
function at(t, r, s) {
  let a;
  Object.defineProperty(t, r, {
    get() {
      if (a !== V0)
        return a === void 0 && (a = V0, a = s()), a;
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
function $0(t) {
  return JSON.stringify(t);
}
const b_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Ml(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const Kw = ch(() => {
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
  if (Ml(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(Ml(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function S_(t) {
  return so(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Jw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ll(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function sa(t, r, s) {
  const a = new t._zod.constr(r ?? t._zod.def);
  return (!r || s?.parent) && (a._zod.parent = t), a;
}
function we(t) {
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
function Ww(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const eE = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function tE(t, r) {
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
function nE(t, r) {
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
function rE(t, r) {
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
function aE(t, r) {
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
function iE(t, r) {
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
function sE(t, r, s) {
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
function oE(t, r, s) {
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
function w_(t, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(t), s;
  });
}
function ul(t) {
  return typeof t == "string" ? t : t?.message;
}
function Pa(t, r, s) {
  const a = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const u = ul(t.inst?._zod.def?.error?.(t)) ?? ul(r?.error?.(t)) ?? ul(s.customError?.(t)) ?? ul(s.localeError?.(t)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function hh(t) {
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
const E_ = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Yf, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, C_ = le("$ZodError", E_), k_ = le("$ZodError", E_, { Parent: Error });
function uE(t, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of t.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function lE(t, r = (s) => s.message) {
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
const ph = (t) => (r, s, a, u) => {
  const l = a ? Object.assign(a, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, l);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => Pa(p, l, La())));
    throw b_(m, u?.callee), m;
  }
  return f.value;
}, mh = (t) => async (r, s, a, u) => {
  const l = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, l);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? t)(f.issues.map((p) => Pa(p, l, La())));
    throw b_(m, u?.callee), m;
  }
  return f.value;
}, Pl = (t) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, l = r._zod.run({ value: s, issues: [] }, u);
  if (l instanceof Promise)
    throw new Ii();
  return l.issues.length ? {
    success: !1,
    error: new (t ?? C_)(l.issues.map((f) => Pa(f, u, La())))
  } : { success: !0, data: l.value };
}, cE = /* @__PURE__ */ Pl(k_), Il = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let l = r._zod.run({ value: s, issues: [] }, u);
  return l instanceof Promise && (l = await l), l.issues.length ? {
    success: !1,
    error: new t(l.issues.map((f) => Pa(f, u, La())))
  } : { success: !0, data: l.value };
}, dE = /* @__PURE__ */ Il(k_), fE = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return ph(t)(r, s, u);
}, hE = (t) => (r, s, a) => ph(t)(r, s, a), pE = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return mh(t)(r, s, u);
}, mE = (t) => async (r, s, a) => mh(t)(r, s, a), gE = (t) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Pl(t)(r, s, u);
}, vE = (t) => (r, s, a) => Pl(t)(r, s, a), yE = (t) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Il(t)(r, s, u);
}, _E = (t) => async (r, s, a) => Il(t)(r, s, a), bE = /^[cC][^\s-]{8,}$/, SE = /^[0-9a-z]+$/, wE = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, EE = /^[0-9a-vA-V]{20}$/, CE = /^[A-Za-z0-9]{27}$/, kE = /^[a-zA-Z0-9_-]{21}$/, AE = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, xE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Y0 = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, TE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, NE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function OE() {
  return new RegExp(NE, "u");
}
const ME = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, RE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, jE = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, DE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, zE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, A_ = /^[A-Za-z0-9_-]*$/, LE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, PE = /^\+(?:[0-9]){6,14}[0-9]$/, x_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", IE = /* @__PURE__ */ new RegExp(`^${x_}$`);
function T_(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function BE(t) {
  return new RegExp(`^${T_(t)}$`);
}
function UE(t) {
  const r = T_({ precision: t.precision }), s = ["Z"];
  t.local && s.push(""), t.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${x_}T(?:${a})$`);
}
const HE = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, qE = /^-?\d+$/, ZE = /^-?\d+(?:\.\d+)?/, GE = /^(?:true|false)$/i, VE = /^[^A-Z]*$/, $E = /^[^a-z]*$/, dn = /* @__PURE__ */ le("$ZodCheck", (t, r) => {
  var s;
  t._zod ?? (t._zod = {}), t._zod.def = r, (s = t._zod).onattach ?? (s.onattach = []);
}), N_ = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, O_ = /* @__PURE__ */ le("$ZodCheckLessThan", (t, r) => {
  dn.init(t, r);
  const s = N_[typeof r.value];
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
}), M_ = /* @__PURE__ */ le("$ZodCheckGreaterThan", (t, r) => {
  dn.init(t, r);
  const s = N_[typeof r.value];
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
}), YE = /* @__PURE__ */ le("$ZodCheckMultipleOf", (t, r) => {
  dn.init(t, r), t._zod.onattach.push((s) => {
    var a;
    (a = s._zod.bag).multipleOf ?? (a.multipleOf = r.value);
  }), t._zod.check = (s) => {
    if (typeof s.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof s.value == "bigint" ? s.value % r.value === BigInt(0) : Qw(s.value, r.value) === 0) || s.issues.push({
      origin: typeof s.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), FE = /* @__PURE__ */ le("$ZodCheckNumberFormat", (t, r) => {
  dn.init(t, r), r.format = r.format || "float64";
  const s = r.format?.includes("int"), a = s ? "int" : "number", [u, l] = eE[r.format];
  t._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = r.format, m.minimum = u, m.maximum = l, s && (m.pattern = qE);
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
}), XE = /* @__PURE__ */ le("$ZodCheckMaxLength", (t, r) => {
  var s;
  dn.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !dh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const f = hh(u);
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
}), QE = /* @__PURE__ */ le("$ZodCheckMinLength", (t, r) => {
  var s;
  dn.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !dh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), t._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const f = hh(u);
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
}), KE = /* @__PURE__ */ le("$ZodCheckLengthEquals", (t, r) => {
  var s;
  dn.init(t, r), (s = t._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !dh(u) && u.length !== void 0;
  }), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), t._zod.check = (a) => {
    const u = a.value, l = u.length;
    if (l === r.length)
      return;
    const f = hh(u), m = l > r.length;
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
}), Bl = /* @__PURE__ */ le("$ZodCheckStringFormat", (t, r) => {
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
}), JE = /* @__PURE__ */ le("$ZodCheckRegex", (t, r) => {
  Bl.init(t, r), t._zod.check = (s) => {
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
}), WE = /* @__PURE__ */ le("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = VE), Bl.init(t, r);
}), e4 = /* @__PURE__ */ le("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = $E), Bl.init(t, r);
}), t4 = /* @__PURE__ */ le("$ZodCheckIncludes", (t, r) => {
  dn.init(t, r);
  const s = Ll(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
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
}), n4 = /* @__PURE__ */ le("$ZodCheckStartsWith", (t, r) => {
  dn.init(t, r);
  const s = new RegExp(`^${Ll(r.prefix)}.*`);
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
}), r4 = /* @__PURE__ */ le("$ZodCheckEndsWith", (t, r) => {
  dn.init(t, r);
  const s = new RegExp(`.*${Ll(r.suffix)}$`);
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
}), a4 = /* @__PURE__ */ le("$ZodCheckOverwrite", (t, r) => {
  dn.init(t, r), t._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class i4 {
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
const s4 = {
  major: 4,
  minor: 1,
  patch: 12
}, _t = /* @__PURE__ */ le("$ZodType", (t, r) => {
  var s;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = s4;
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
      let g = Li(f), v;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const _ = f.issues.length, S = E._zod.check(f);
        if (S instanceof Promise && p?.async === !1)
          throw new Ii();
        if (v || S instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await S, f.issues.length !== _ && (g || (g = Li(f, _)));
          });
        else {
          if (f.issues.length === _)
            continue;
          g || (g = Li(f, _));
        }
      }
      return v ? v.then(() => f) : f;
    }, l = (f, m, p) => {
      if (Li(f))
        return f.aborted = !0, f;
      const g = u(m, a, p);
      if (g instanceof Promise) {
        if (p.async === !1)
          throw new Ii();
        return g.then((v) => t._zod.parse(v, p));
      }
      return t._zod.parse(g, p);
    };
    t._zod.run = (f, m) => {
      if (m.skipChecks)
        return t._zod.parse(f, m);
      if (m.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return g instanceof Promise ? g.then((v) => l(v, f, m)) : l(g, f, m);
      }
      const p = t._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new Ii();
        return p.then((g) => u(g, a, m));
      }
      return u(p, a, m);
    };
  }
  t["~standard"] = {
    validate: (u) => {
      try {
        const l = cE(t, u);
        return l.success ? { value: l.data } : { issues: l.error?.issues };
      } catch {
        return dE(t, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), gh = /* @__PURE__ */ le("$ZodString", (t, r) => {
  _t.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? HE(t._zod.bag), t._zod.parse = (s, a) => {
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
  Bl.init(t, r), gh.init(t, r);
}), o4 = /* @__PURE__ */ le("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = xE), ut.init(t, r);
}), u4 = /* @__PURE__ */ le("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Y0(a));
  } else
    r.pattern ?? (r.pattern = Y0());
  ut.init(t, r);
}), l4 = /* @__PURE__ */ le("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = TE), ut.init(t, r);
}), c4 = /* @__PURE__ */ le("$ZodURL", (t, r) => {
  ut.init(t, r), t._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: LE.source,
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
}), d4 = /* @__PURE__ */ le("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = OE()), ut.init(t, r);
}), f4 = /* @__PURE__ */ le("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = kE), ut.init(t, r);
}), h4 = /* @__PURE__ */ le("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = bE), ut.init(t, r);
}), p4 = /* @__PURE__ */ le("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = SE), ut.init(t, r);
}), m4 = /* @__PURE__ */ le("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = wE), ut.init(t, r);
}), g4 = /* @__PURE__ */ le("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = EE), ut.init(t, r);
}), v4 = /* @__PURE__ */ le("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = CE), ut.init(t, r);
}), y4 = /* @__PURE__ */ le("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = UE(r)), ut.init(t, r);
}), _4 = /* @__PURE__ */ le("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = IE), ut.init(t, r);
}), b4 = /* @__PURE__ */ le("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = BE(r)), ut.init(t, r);
}), S4 = /* @__PURE__ */ le("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = AE), ut.init(t, r);
}), w4 = /* @__PURE__ */ le("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = ME), ut.init(t, r), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), E4 = /* @__PURE__ */ le("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = RE), ut.init(t, r), t._zod.onattach.push((s) => {
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
}), C4 = /* @__PURE__ */ le("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = jE), ut.init(t, r);
}), k4 = /* @__PURE__ */ le("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = DE), ut.init(t, r), t._zod.check = (s) => {
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
function R_(t) {
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
const A4 = /* @__PURE__ */ le("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = zE), ut.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (s) => {
    R_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function x4(t) {
  if (!A_.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return R_(s);
}
const T4 = /* @__PURE__ */ le("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = A_), ut.init(t, r), t._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (s) => {
    x4(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), N4 = /* @__PURE__ */ le("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = PE), ut.init(t, r);
});
function O4(t, r = null) {
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
const M4 = /* @__PURE__ */ le("$ZodJWT", (t, r) => {
  ut.init(t, r), t._zod.check = (s) => {
    O4(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), j_ = /* @__PURE__ */ le("$ZodNumber", (t, r) => {
  _t.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? ZE, t._zod.parse = (s, a) => {
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
}), R4 = /* @__PURE__ */ le("$ZodNumber", (t, r) => {
  FE.init(t, r), j_.init(t, r);
}), j4 = /* @__PURE__ */ le("$ZodBoolean", (t, r) => {
  _t.init(t, r), t._zod.pattern = GE, t._zod.parse = (s, a) => {
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
}), D4 = /* @__PURE__ */ le("$ZodUnknown", (t, r) => {
  _t.init(t, r), t._zod.parse = (s) => s;
}), z4 = /* @__PURE__ */ le("$ZodNever", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: t
  }), s);
});
function F0(t, r, s) {
  t.issues.length && r.issues.push(...w_(s, t.issues)), r.value[s] = t.value;
}
const L4 = /* @__PURE__ */ le("$ZodArray", (t, r) => {
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
      p instanceof Promise ? l.push(p.then((g) => F0(g, s, f))) : F0(p, s, f);
    }
    return l.length ? Promise.all(l).then(() => s) : s;
  };
});
function Rl(t, r, s, a) {
  t.issues.length && r.issues.push(...w_(s, t.issues)), t.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = t.value;
}
function D_(t) {
  const r = Object.keys(t.shape);
  for (const a of r)
    if (!t.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = Ww(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function z_(t, r, s, a, u, l) {
  const f = [], m = u.keySet, p = u.catchall._zod, g = p.def.type;
  for (const v of Object.keys(r)) {
    if (m.has(v))
      continue;
    if (g === "never") {
      f.push(v);
      continue;
    }
    const E = p.run({ value: r[v], issues: [] }, a);
    E instanceof Promise ? t.push(E.then((_) => Rl(_, s, v, r))) : Rl(E, s, v, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: l
  }), t.length ? Promise.all(t).then(() => s) : s;
}
const P4 = /* @__PURE__ */ le("$ZodObject", (t, r) => {
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
  const a = ch(() => D_(r));
  at(t._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const g in m) {
      const v = m[g]._zod;
      if (v.values) {
        p[g] ?? (p[g] = /* @__PURE__ */ new Set());
        for (const E of v.values)
          p[g].add(E);
      }
    }
    return p;
  });
  const u = Ml, l = r.catchall;
  let f;
  t._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const g = m.value;
    if (!u(g))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), m;
    m.value = {};
    const v = [], E = f.shape;
    for (const _ of f.keys) {
      const h = E[_]._zod.run({ value: g[_], issues: [] }, p);
      h instanceof Promise ? v.push(h.then((C) => Rl(C, m, _, g))) : Rl(h, m, _, g);
    }
    return l ? z_(v, g, m, p, a.value, t) : v.length ? Promise.all(v).then(() => m) : m;
  };
}), I4 = /* @__PURE__ */ le("$ZodObjectJIT", (t, r) => {
  P4.init(t, r);
  const s = t._zod.parse, a = ch(() => D_(r)), u = (_) => {
    const S = new i4(["shape", "payload", "ctx"]), h = a.value, C = (P) => {
      const c = $0(P);
      return `shape[${c}]._zod.run({ value: input[${c}], issues: [] }, ctx)`;
    };
    S.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let j = 0;
    for (const P of h.keys)
      x[P] = `key_${j++}`;
    S.write("const newResult = {};");
    for (const P of h.keys) {
      const c = x[P], y = $0(P);
      S.write(`const ${c} = ${C(P)};`), S.write(`
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
    return (P, c) => N(_, P, c);
  };
  let l;
  const f = Ml, m = !y_.jitless, g = m && Kw.value, v = r.catchall;
  let E;
  t._zod.parse = (_, S) => {
    E ?? (E = a.value);
    const h = _.value;
    return f(h) ? m && g && S?.async === !1 && S.jitless !== !0 ? (l || (l = u(r.shape)), _ = l(_, S), v ? z_([], h, _, S, E, t) : _) : s(_, S) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), _);
  };
});
function X0(t, r, s, a) {
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
const B4 = /* @__PURE__ */ le("$ZodUnion", (t, r) => {
  _t.init(t, r), at(t._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), at(t._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), at(t._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), at(t._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((l) => l._zod.pattern);
      return new RegExp(`^(${u.map((l) => fh(l.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  t._zod.parse = (u, l) => {
    if (s)
      return a(u, l);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const g = p._zod.run({
        value: u.value,
        issues: []
      }, l);
      if (g instanceof Promise)
        m.push(g), f = !0;
      else {
        if (g.issues.length === 0)
          return g;
        m.push(g);
      }
    }
    return f ? Promise.all(m).then((p) => X0(p, u, t, l)) : X0(m, u, t, l);
  };
}), U4 = /* @__PURE__ */ le("$ZodIntersection", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => {
    const u = s.value, l = r.left._zod.run({ value: u, issues: [] }, a), f = r.right._zod.run({ value: u, issues: [] }, a);
    return l instanceof Promise || f instanceof Promise ? Promise.all([l, f]).then(([p, g]) => Q0(s, p, g)) : Q0(s, l, f);
  };
});
function Ff(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (so(t) && so(r)) {
    const s = Object.keys(r), a = Object.keys(t).filter((l) => s.indexOf(l) !== -1), u = { ...t, ...r };
    for (const l of a) {
      const f = Ff(t[l], r[l]);
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
      const u = t[a], l = r[a], f = Ff(u, l);
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
function Q0(t, r, s) {
  if (r.issues.length && t.issues.push(...r.issues), s.issues.length && t.issues.push(...s.issues), Li(t))
    return t;
  const a = Ff(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return t.value = a.data, t;
}
const H4 = /* @__PURE__ */ le("$ZodEnum", (t, r) => {
  _t.init(t, r);
  const s = __(r.entries), a = new Set(s);
  t._zod.values = a, t._zod.pattern = new RegExp(`^(${s.filter((u) => Jw.has(typeof u)).map((u) => typeof u == "string" ? Ll(u) : u.toString()).join("|")})$`), t._zod.parse = (u, l) => {
    const f = u.value;
    return a.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: t
    }), u;
  };
}), q4 = /* @__PURE__ */ le("$ZodTransform", (t, r) => {
  _t.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new v_(t.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Ii();
    return s.value = u, s;
  };
});
function K0(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const Z4 = /* @__PURE__ */ le("$ZodOptional", (t, r) => {
  _t.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), at(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${fh(s.source)})?$`) : void 0;
  }), t._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((l) => K0(l, s.value)) : K0(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), G4 = /* @__PURE__ */ le("$ZodNullable", (t, r) => {
  _t.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${fh(s.source)}|null)$`) : void 0;
  }), at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), V4 = /* @__PURE__ */ le("$ZodDefault", (t, r) => {
  _t.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => J0(l, r)) : J0(u, r);
  };
});
function J0(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const $4 = /* @__PURE__ */ le("$ZodPrefault", (t, r) => {
  _t.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), Y4 = /* @__PURE__ */ le("$ZodNonOptional", (t, r) => {
  _t.init(t, r), at(t._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), t._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => W0(l, t)) : W0(u, t);
  };
});
function W0(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const F4 = /* @__PURE__ */ le("$ZodCatch", (t, r) => {
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
}), X4 = /* @__PURE__ */ le("$ZodPipe", (t, r) => {
  _t.init(t, r), at(t._zod, "values", () => r.in._zod.values), at(t._zod, "optin", () => r.in._zod.optin), at(t._zod, "optout", () => r.out._zod.optout), at(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const l = r.out._zod.run(s, a);
      return l instanceof Promise ? l.then((f) => ll(f, r.in, a)) : ll(l, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((l) => ll(l, r.out, a)) : ll(u, r.out, a);
  };
});
function ll(t, r, s) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, s);
}
const Q4 = /* @__PURE__ */ le("$ZodReadonly", (t, r) => {
  _t.init(t, r), at(t._zod, "propValues", () => r.innerType._zod.propValues), at(t._zod, "values", () => r.innerType._zod.values), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(ey) : ey(u);
  };
});
function ey(t) {
  return t.value = Object.freeze(t.value), t;
}
const K4 = /* @__PURE__ */ le("$ZodCustom", (t, r) => {
  dn.init(t, r), _t.init(t, r), t._zod.parse = (s, a) => s, t._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((l) => ty(l, s, a, t));
    ty(u, s, a, t);
  };
});
function ty(t, r, s, a) {
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
class L_ {
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
function J4() {
  return new L_();
}
const Js = /* @__PURE__ */ J4();
function W4(t, r) {
  return new t({
    type: "string",
    ...we(r)
  });
}
function eC(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function ny(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function tC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function nC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...we(r)
  });
}
function rC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...we(r)
  });
}
function aC(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...we(r)
  });
}
function iC(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function sC(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function oC(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function uC(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function lC(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function cC(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function dC(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function fC(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function hC(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function pC(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function mC(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function gC(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function vC(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function yC(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function _C(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function bC(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function SC(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...we(r)
  });
}
function wC(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...we(r)
  });
}
function EC(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...we(r)
  });
}
function CC(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...we(r)
  });
}
function kC(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...we(r)
  });
}
function AC(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...we(r)
  });
}
function xC(t, r) {
  return new t({
    type: "boolean",
    ...we(r)
  });
}
function TC(t) {
  return new t({
    type: "unknown"
  });
}
function NC(t, r) {
  return new t({
    type: "never",
    ...we(r)
  });
}
function ry(t, r) {
  return new O_({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function Af(t, r) {
  return new O_({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function ay(t, r) {
  return new M_({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function xf(t, r) {
  return new M_({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function iy(t, r) {
  return new YE({
    check: "multiple_of",
    ...we(r),
    value: t
  });
}
function P_(t, r) {
  return new XE({
    check: "max_length",
    ...we(r),
    maximum: t
  });
}
function jl(t, r) {
  return new QE({
    check: "min_length",
    ...we(r),
    minimum: t
  });
}
function I_(t, r) {
  return new KE({
    check: "length_equals",
    ...we(r),
    length: t
  });
}
function OC(t, r) {
  return new JE({
    check: "string_format",
    format: "regex",
    ...we(r),
    pattern: t
  });
}
function MC(t) {
  return new WE({
    check: "string_format",
    format: "lowercase",
    ...we(t)
  });
}
function RC(t) {
  return new e4({
    check: "string_format",
    format: "uppercase",
    ...we(t)
  });
}
function jC(t, r) {
  return new t4({
    check: "string_format",
    format: "includes",
    ...we(r),
    includes: t
  });
}
function DC(t, r) {
  return new n4({
    check: "string_format",
    format: "starts_with",
    ...we(r),
    prefix: t
  });
}
function zC(t, r) {
  return new r4({
    check: "string_format",
    format: "ends_with",
    ...we(r),
    suffix: t
  });
}
function fo(t) {
  return new a4({
    check: "overwrite",
    tx: t
  });
}
function LC(t) {
  return fo((r) => r.normalize(t));
}
function PC() {
  return fo((t) => t.trim());
}
function IC() {
  return fo((t) => t.toLowerCase());
}
function BC() {
  return fo((t) => t.toUpperCase());
}
function UC(t, r, s) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...we(s)
  });
}
function HC(t, r, s) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...we(s)
  });
}
function qC(t) {
  const r = ZC((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(oo(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(oo(u));
    }
  }, t(s.value, s)));
  return r;
}
function ZC(t, r) {
  const s = new dn({
    check: "custom",
    ...we(r)
  });
  return s._zod.check = t, s;
}
class sy {
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
            const { minimum: C, maximum: x, format: j, patterns: N, contentEncoding: P } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof x == "number" && (h.maxLength = x), j && (h.format = l[j] ?? j, h.format === "" && delete h.format), P && (h.contentEncoding = P), N && N.size > 0) {
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
            const h = S, { minimum: C, maximum: x, format: j, multipleOf: N, exclusiveMaximum: P, exclusiveMinimum: c } = r._zod.bag;
            typeof j == "string" && j.includes("int") ? h.type = "integer" : h.type = "number", typeof c == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = c, h.exclusiveMinimum = !0) : h.exclusiveMinimum = c), typeof C == "number" && (h.minimum = C, typeof c == "number" && this.target !== "draft-4" && (c >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof P == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = P, h.exclusiveMaximum = !0) : h.exclusiveMaximum = P), typeof x == "number" && (h.maximum = x, typeof P == "number" && this.target !== "draft-4" && (P <= x ? delete h.maximum : delete h.exclusiveMaximum)), typeof N == "number" && (h.multipleOf = N);
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
              const P = u.shape[N]._zod;
              return this.io === "input" ? P.optin === void 0 : P.optout === void 0;
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
            }), j = (P) => "allOf" in P && Object.keys(P).length === 1, N = [
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
            const { minimum: P, maximum: c } = r._zod.bag;
            typeof P == "number" && (h.minItems = P), typeof c == "number" && (h.maxItems = c);
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
            const h = S, C = __(u.entries);
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
            x !== void 0 && (C.minLength = x), j !== void 0 && (C.maxLength = j), N ? N.length === 1 ? (C.contentMediaType = N[0], Object.assign(h, C)) : h.anyOf = N.map((P) => ({ ...C, contentMediaType: P })) : Object.assign(h, C);
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
    const g = this.metadataRegistry.get(r);
    return g && Object.assign(m.schema, g), this.io === "input" && Tt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
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
    const l = (v) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (a.external) {
        const C = a.external.registry.get(v[0])?.id, x = a.external.uri ?? ((N) => N);
        if (C)
          return { ref: x(C) };
        const j = v[1].defId ?? v[1].schema.id ?? `schema${this.counter++}`;
        return v[1].defId = j, { defId: j, ref: `${x("__shared")}#/${E}/${j}` };
      }
      if (v[1] === u)
        return { ref: "#" };
      const S = `#/${E}/`, h = v[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: S + h };
    }, f = (v) => {
      if (v[1].schema.$ref)
        return;
      const E = v[1], { ref: _, defId: S } = l(v);
      E.def = { ...E.schema }, S && (E.defId = S);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = _;
    };
    if (a.cycles === "throw")
      for (const v of this.seen.entries()) {
        const E = v[1];
        if (E.cycle)
          throw new Error(`Cycle detected: #/${E.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const v of this.seen.entries()) {
      const E = v[1];
      if (r === v[0]) {
        f(v);
        continue;
      }
      if (a.external) {
        const S = a.external.registry.get(v[0])?.id;
        if (r !== v[0] && S) {
          f(v);
          continue;
        }
      }
      if (this.metadataRegistry.get(v[0])?.id) {
        f(v);
        continue;
      }
      if (E.cycle) {
        f(v);
        continue;
      }
      if (E.count > 1 && a.reused === "ref") {
        f(v);
        continue;
      }
    }
    const m = (v, E) => {
      const _ = this.seen.get(v), S = _.def ?? _.schema, h = { ...S };
      if (_.ref === null)
        return;
      const C = _.ref;
      if (_.ref = null, C) {
        m(C, E);
        const x = this.seen.get(C).schema;
        x.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (S.allOf = S.allOf ?? [], S.allOf.push(x)) : (Object.assign(S, x), Object.assign(S, h));
      }
      _.isParent || this.override({
        zodSchema: v,
        jsonSchema: S,
        path: _.path ?? []
      });
    };
    for (const v of [...this.seen.entries()].reverse())
      m(v[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), a.external?.uri) {
      const v = a.external.registry.get(r)?.id;
      if (!v)
        throw new Error("Schema is missing an `id` property");
      p.$id = a.external.uri(v);
    }
    Object.assign(p, u.def);
    const g = a.external?.defs ?? {};
    for (const v of this.seen.entries()) {
      const E = v[1];
      E.def && E.defId && (g[E.defId] = E.def);
    }
    a.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? p.$defs = g : p.definitions = g);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function GC(t, r) {
  if (t instanceof L_) {
    const a = new sy(r), u = {};
    for (const m of t._idmap.entries()) {
      const [p, g] = m;
      a.process(g);
    }
    const l = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: u
    };
    for (const m of t._idmap.entries()) {
      const [p, g] = m;
      l[p] = a.emit(g, {
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
  const s = new sy(r);
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
const VC = /* @__PURE__ */ le("ZodISODateTime", (t, r) => {
  y4.init(t, r), dt.init(t, r);
});
function $C(t) {
  return SC(VC, t);
}
const YC = /* @__PURE__ */ le("ZodISODate", (t, r) => {
  _4.init(t, r), dt.init(t, r);
});
function FC(t) {
  return wC(YC, t);
}
const XC = /* @__PURE__ */ le("ZodISOTime", (t, r) => {
  b4.init(t, r), dt.init(t, r);
});
function QC(t) {
  return EC(XC, t);
}
const KC = /* @__PURE__ */ le("ZodISODuration", (t, r) => {
  S4.init(t, r), dt.init(t, r);
});
function JC(t) {
  return CC(KC, t);
}
const WC = (t, r) => {
  C_.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (s) => lE(t, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => uE(t, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        t.issues.push(s), t.message = JSON.stringify(t.issues, Yf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        t.issues.push(...s), t.message = JSON.stringify(t.issues, Yf, 2);
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
}, Ln = le("ZodError", WC, {
  Parent: Error
}), ek = /* @__PURE__ */ ph(Ln), tk = /* @__PURE__ */ mh(Ln), nk = /* @__PURE__ */ Pl(Ln), rk = /* @__PURE__ */ Il(Ln), ak = /* @__PURE__ */ fE(Ln), ik = /* @__PURE__ */ hE(Ln), sk = /* @__PURE__ */ pE(Ln), ok = /* @__PURE__ */ mE(Ln), uk = /* @__PURE__ */ gE(Ln), lk = /* @__PURE__ */ vE(Ln), ck = /* @__PURE__ */ yE(Ln), dk = /* @__PURE__ */ _E(Ln), kt = /* @__PURE__ */ le("ZodType", (t, r) => (_t.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...s) => t.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), t.clone = (s, a) => sa(t, s, a), t.brand = () => t, t.register = ((s, a) => (s.add(t, a), t)), t.parse = (s, a) => ek(t, s, a, { callee: t.parse }), t.safeParse = (s, a) => nk(t, s, a), t.parseAsync = async (s, a) => tk(t, s, a, { callee: t.parseAsync }), t.safeParseAsync = async (s, a) => rk(t, s, a), t.spa = t.safeParseAsync, t.encode = (s, a) => ak(t, s, a), t.decode = (s, a) => ik(t, s, a), t.encodeAsync = async (s, a) => sk(t, s, a), t.decodeAsync = async (s, a) => ok(t, s, a), t.safeEncode = (s, a) => uk(t, s, a), t.safeDecode = (s, a) => lk(t, s, a), t.safeEncodeAsync = async (s, a) => ck(t, s, a), t.safeDecodeAsync = async (s, a) => dk(t, s, a), t.refine = (s, a) => t.check(nA(s, a)), t.superRefine = (s) => t.check(rA(s)), t.overwrite = (s) => t.check(fo(s)), t.optional = () => cy(t), t.nullable = () => dy(t), t.nullish = () => cy(dy(t)), t.nonoptional = (s) => Xk(t, s), t.array = () => za(t), t.or = (s) => Ik([t, s]), t.and = (s) => Uk(t, s), t.transform = (s) => fy(t, Zk(s)), t.default = (s) => $k(t, s), t.prefault = (s) => Fk(t, s), t.catch = (s) => Kk(t, s), t.pipe = (s) => fy(t, s), t.readonly = () => eA(t), t.describe = (s) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), B_ = /* @__PURE__ */ le("_ZodString", (t, r) => {
  gh.init(t, r), kt.init(t, r);
  const s = t._zod.bag;
  t.format = s.format ?? null, t.minLength = s.minimum ?? null, t.maxLength = s.maximum ?? null, t.regex = (...a) => t.check(OC(...a)), t.includes = (...a) => t.check(jC(...a)), t.startsWith = (...a) => t.check(DC(...a)), t.endsWith = (...a) => t.check(zC(...a)), t.min = (...a) => t.check(jl(...a)), t.max = (...a) => t.check(P_(...a)), t.length = (...a) => t.check(I_(...a)), t.nonempty = (...a) => t.check(jl(1, ...a)), t.lowercase = (a) => t.check(MC(a)), t.uppercase = (a) => t.check(RC(a)), t.trim = () => t.check(PC()), t.normalize = (...a) => t.check(LC(...a)), t.toLowerCase = () => t.check(IC()), t.toUpperCase = () => t.check(BC());
}), fk = /* @__PURE__ */ le("ZodString", (t, r) => {
  gh.init(t, r), B_.init(t, r), t.email = (s) => t.check(eC(hk, s)), t.url = (s) => t.check(iC(pk, s)), t.jwt = (s) => t.check(bC(Nk, s)), t.emoji = (s) => t.check(sC(mk, s)), t.guid = (s) => t.check(ny(oy, s)), t.uuid = (s) => t.check(tC(cl, s)), t.uuidv4 = (s) => t.check(nC(cl, s)), t.uuidv6 = (s) => t.check(rC(cl, s)), t.uuidv7 = (s) => t.check(aC(cl, s)), t.nanoid = (s) => t.check(oC(gk, s)), t.guid = (s) => t.check(ny(oy, s)), t.cuid = (s) => t.check(uC(vk, s)), t.cuid2 = (s) => t.check(lC(yk, s)), t.ulid = (s) => t.check(cC(_k, s)), t.base64 = (s) => t.check(vC(Ak, s)), t.base64url = (s) => t.check(yC(xk, s)), t.xid = (s) => t.check(dC(bk, s)), t.ksuid = (s) => t.check(fC(Sk, s)), t.ipv4 = (s) => t.check(hC(wk, s)), t.ipv6 = (s) => t.check(pC(Ek, s)), t.cidrv4 = (s) => t.check(mC(Ck, s)), t.cidrv6 = (s) => t.check(gC(kk, s)), t.e164 = (s) => t.check(_C(Tk, s)), t.datetime = (s) => t.check($C(s)), t.date = (s) => t.check(FC(s)), t.time = (s) => t.check(QC(s)), t.duration = (s) => t.check(JC(s));
});
function Ot(t) {
  return W4(fk, t);
}
const dt = /* @__PURE__ */ le("ZodStringFormat", (t, r) => {
  ut.init(t, r), B_.init(t, r);
}), hk = /* @__PURE__ */ le("ZodEmail", (t, r) => {
  l4.init(t, r), dt.init(t, r);
}), oy = /* @__PURE__ */ le("ZodGUID", (t, r) => {
  o4.init(t, r), dt.init(t, r);
}), cl = /* @__PURE__ */ le("ZodUUID", (t, r) => {
  u4.init(t, r), dt.init(t, r);
}), pk = /* @__PURE__ */ le("ZodURL", (t, r) => {
  c4.init(t, r), dt.init(t, r);
}), mk = /* @__PURE__ */ le("ZodEmoji", (t, r) => {
  d4.init(t, r), dt.init(t, r);
}), gk = /* @__PURE__ */ le("ZodNanoID", (t, r) => {
  f4.init(t, r), dt.init(t, r);
}), vk = /* @__PURE__ */ le("ZodCUID", (t, r) => {
  h4.init(t, r), dt.init(t, r);
}), yk = /* @__PURE__ */ le("ZodCUID2", (t, r) => {
  p4.init(t, r), dt.init(t, r);
}), _k = /* @__PURE__ */ le("ZodULID", (t, r) => {
  m4.init(t, r), dt.init(t, r);
}), bk = /* @__PURE__ */ le("ZodXID", (t, r) => {
  g4.init(t, r), dt.init(t, r);
}), Sk = /* @__PURE__ */ le("ZodKSUID", (t, r) => {
  v4.init(t, r), dt.init(t, r);
}), wk = /* @__PURE__ */ le("ZodIPv4", (t, r) => {
  w4.init(t, r), dt.init(t, r);
}), Ek = /* @__PURE__ */ le("ZodIPv6", (t, r) => {
  E4.init(t, r), dt.init(t, r);
}), Ck = /* @__PURE__ */ le("ZodCIDRv4", (t, r) => {
  C4.init(t, r), dt.init(t, r);
}), kk = /* @__PURE__ */ le("ZodCIDRv6", (t, r) => {
  k4.init(t, r), dt.init(t, r);
}), Ak = /* @__PURE__ */ le("ZodBase64", (t, r) => {
  A4.init(t, r), dt.init(t, r);
}), xk = /* @__PURE__ */ le("ZodBase64URL", (t, r) => {
  T4.init(t, r), dt.init(t, r);
}), Tk = /* @__PURE__ */ le("ZodE164", (t, r) => {
  N4.init(t, r), dt.init(t, r);
}), Nk = /* @__PURE__ */ le("ZodJWT", (t, r) => {
  M4.init(t, r), dt.init(t, r);
}), U_ = /* @__PURE__ */ le("ZodNumber", (t, r) => {
  j_.init(t, r), kt.init(t, r), t.gt = (a, u) => t.check(ay(a, u)), t.gte = (a, u) => t.check(xf(a, u)), t.min = (a, u) => t.check(xf(a, u)), t.lt = (a, u) => t.check(ry(a, u)), t.lte = (a, u) => t.check(Af(a, u)), t.max = (a, u) => t.check(Af(a, u)), t.int = (a) => t.check(uy(a)), t.safe = (a) => t.check(uy(a)), t.positive = (a) => t.check(ay(0, a)), t.nonnegative = (a) => t.check(xf(0, a)), t.negative = (a) => t.check(ry(0, a)), t.nonpositive = (a) => t.check(Af(0, a)), t.multipleOf = (a, u) => t.check(iy(a, u)), t.step = (a, u) => t.check(iy(a, u)), t.finite = () => t;
  const s = t._zod.bag;
  t.minValue = Math.max(s.minimum ?? Number.NEGATIVE_INFINITY, s.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(s.maximum ?? Number.POSITIVE_INFINITY, s.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (s.format ?? "").includes("int") || Number.isSafeInteger(s.multipleOf ?? 0.5), t.isFinite = !0, t.format = s.format ?? null;
});
function Nt(t) {
  return kC(U_, t);
}
const Ok = /* @__PURE__ */ le("ZodNumberFormat", (t, r) => {
  R4.init(t, r), U_.init(t, r);
});
function uy(t) {
  return AC(Ok, t);
}
const Mk = /* @__PURE__ */ le("ZodBoolean", (t, r) => {
  j4.init(t, r), kt.init(t, r);
});
function Qt(t) {
  return xC(Mk, t);
}
const Rk = /* @__PURE__ */ le("ZodUnknown", (t, r) => {
  D4.init(t, r), kt.init(t, r);
});
function ly() {
  return TC(Rk);
}
const jk = /* @__PURE__ */ le("ZodNever", (t, r) => {
  z4.init(t, r), kt.init(t, r);
});
function Dk(t) {
  return NC(jk, t);
}
const zk = /* @__PURE__ */ le("ZodArray", (t, r) => {
  L4.init(t, r), kt.init(t, r), t.element = r.element, t.min = (s, a) => t.check(jl(s, a)), t.nonempty = (s) => t.check(jl(1, s)), t.max = (s, a) => t.check(P_(s, a)), t.length = (s, a) => t.check(I_(s, a)), t.unwrap = () => t.element;
});
function za(t, r) {
  return UC(zk, t, r);
}
const Lk = /* @__PURE__ */ le("ZodObject", (t, r) => {
  I4.init(t, r), kt.init(t, r), at(t, "shape", () => r.shape), t.keyof = () => Hk(Object.keys(t._zod.def.shape)), t.catchall = (s) => t.clone({ ...t._zod.def, catchall: s }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: ly() }), t.loose = () => t.clone({ ...t._zod.def, catchall: ly() }), t.strict = () => t.clone({ ...t._zod.def, catchall: Dk() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (s) => rE(t, s), t.safeExtend = (s) => aE(t, s), t.merge = (s) => iE(t, s), t.pick = (s) => tE(t, s), t.omit = (s) => nE(t, s), t.partial = (...s) => sE(H_, t, s[0]), t.required = (...s) => oE(q_, t, s[0]);
});
function ho(t, r) {
  const s = {
    type: "object",
    shape: t ?? {},
    ...we(r)
  };
  return new Lk(s);
}
const Pk = /* @__PURE__ */ le("ZodUnion", (t, r) => {
  B4.init(t, r), kt.init(t, r), t.options = r.options;
});
function Ik(t, r) {
  return new Pk({
    type: "union",
    options: t,
    ...we(r)
  });
}
const Bk = /* @__PURE__ */ le("ZodIntersection", (t, r) => {
  U4.init(t, r), kt.init(t, r);
});
function Uk(t, r) {
  return new Bk({
    type: "intersection",
    left: t,
    right: r
  });
}
const Xf = /* @__PURE__ */ le("ZodEnum", (t, r) => {
  H4.init(t, r), kt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  t.extract = (a, u) => {
    const l = {};
    for (const f of a)
      if (s.has(f))
        l[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Xf({
      ...r,
      checks: [],
      ...we(u),
      entries: l
    });
  }, t.exclude = (a, u) => {
    const l = { ...r.entries };
    for (const f of a)
      if (s.has(f))
        delete l[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Xf({
      ...r,
      checks: [],
      ...we(u),
      entries: l
    });
  };
});
function Hk(t, r) {
  const s = Array.isArray(t) ? Object.fromEntries(t.map((a) => [a, a])) : t;
  return new Xf({
    type: "enum",
    entries: s,
    ...we(r)
  });
}
const qk = /* @__PURE__ */ le("ZodTransform", (t, r) => {
  q4.init(t, r), kt.init(t, r), t._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new v_(t.constructor.name);
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
function Zk(t) {
  return new qk({
    type: "transform",
    transform: t
  });
}
const H_ = /* @__PURE__ */ le("ZodOptional", (t, r) => {
  Z4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function cy(t) {
  return new H_({
    type: "optional",
    innerType: t
  });
}
const Gk = /* @__PURE__ */ le("ZodNullable", (t, r) => {
  G4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function dy(t) {
  return new Gk({
    type: "nullable",
    innerType: t
  });
}
const Vk = /* @__PURE__ */ le("ZodDefault", (t, r) => {
  V4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function $k(t, r) {
  return new Vk({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : S_(r);
    }
  });
}
const Yk = /* @__PURE__ */ le("ZodPrefault", (t, r) => {
  $4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Fk(t, r) {
  return new Yk({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : S_(r);
    }
  });
}
const q_ = /* @__PURE__ */ le("ZodNonOptional", (t, r) => {
  Y4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Xk(t, r) {
  return new q_({
    type: "nonoptional",
    innerType: t,
    ...we(r)
  });
}
const Qk = /* @__PURE__ */ le("ZodCatch", (t, r) => {
  F4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function Kk(t, r) {
  return new Qk({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const Jk = /* @__PURE__ */ le("ZodPipe", (t, r) => {
  X4.init(t, r), kt.init(t, r), t.in = r.in, t.out = r.out;
});
function fy(t, r) {
  return new Jk({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const Wk = /* @__PURE__ */ le("ZodReadonly", (t, r) => {
  Q4.init(t, r), kt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function eA(t) {
  return new Wk({
    type: "readonly",
    innerType: t
  });
}
const tA = /* @__PURE__ */ le("ZodCustom", (t, r) => {
  K4.init(t, r), kt.init(t, r);
});
function nA(t, r = {}) {
  return HC(tA, t, r);
}
function rA(t) {
  return qC(t);
}
const hy = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Qf = "placeholder-chatHistory", Z_ = {
  order: Nt().default(Xe.order).describe("Injection priority. Higher = earlier in prompt."),
  position: Nt().default(Xe.position).describe(
    "Where content is placed. 0=before_char, 1=after_char, 2=before_anchor, 3=after_anchor, 4=at_depth, 5=at_depth_from_top, 6=top_of_chat, 7=bottom_of_chat."
  ),
  depth: Nt().default(Xe.depth).describe("Position depth. Used when position=4 or 5."),
  role: Nt().default(Xe.role).describe("Injection role. 0=system, 1=user, 2=assistant."),
  selective: Qt().default(Xe.selective).describe("Whether secondary key matching is enabled."),
  selectiveLogic: Nt().default(Xe.selectiveLogic).describe("Secondary key logic. 0=NOT_ANY, 1=NOT_ALL, 2=ANY, 3=ALL."),
  constant: Qt().default(Xe.constant).describe("Always inject this entry."),
  probability: Nt().default(Xe.probability).describe("Activation chance percentage (0-100)."),
  useProbability: Qt().default(Xe.useProbability).describe("Apply probability gate."),
  group: Ot().default(Xe.group).describe("Entry group name for grouped activation."),
  groupWeight: Nt().default(Xe.groupWeight).describe("Weight within the group."),
  groupOverride: Qt().default(Xe.groupOverride).describe("Allow group to override normal selection.")
}, vh = {
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
}, aA = ho({
  justification: Ot().describe("A brief, friendly explanation of the changes made."),
  name: Ot().describe("The entry's new name/comment."),
  triggers: za(Ot()).describe("The entry's new keywords/triggers."),
  content: Ot().describe("The entry's new content."),
  ...Z_,
  ...vh
}), iA = ho({
  worldName: Ot().describe("The name of the world where the new entry should be added."),
  name: Ot().describe("The new entry's name/comment."),
  triggers: za(Ot()).describe("The new entry's triggers."),
  content: Ot().describe("The new entry's content."),
  ...Z_,
  ...vh
}), sA = ho({
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
  ...vh
}), oA = ho({
  worldName: Ot().describe("The name of the world containing the entry to remove."),
  name: Ot().describe("The name/comment of the entry to remove.")
}), uA = ho({
  justification: Ot().describe("A brief, friendly explanation of all the operations performed."),
  add: za(iA).optional().describe("A list of new entries to add."),
  change: za(sA).optional().describe("A list of existing entries to change."),
  remove: za(oA).optional().describe("A list of existing entries to remove.")
});
function Tf(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Kf(t, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Kf(a, r + 1)}${s}</item>
` : `${s}<item>${Tf(a)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let a = "";
    for (const u of Object.keys(t)) {
      const l = t[u];
      l !== null && typeof l == "object" ? a += `${s}<${u}>
${Kf(l, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${Tf(l)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${Tf(t)}</value>
`;
}
function lA(t, r) {
  const s = Ra(t);
  return r === "xml" ? `<root>
${Kf(s, 1)}</root>` : JSON.stringify(s, null, 2);
}
function cA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function dA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Ra(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, s = cA(t.example, r, t.default);
  if (s !== void 0) return s;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const a = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (a) return Ra(a);
  switch (dA(t.type)) {
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
const fA = new M3();
async function Jf(t, r, s, a, u, l) {
  const f = !a.json_schema && !1;
  return new Promise((m, p) => {
    const g = new AbortController(), v = l ?? g.signal;
    l && l.addEventListener("abort", () => g.abort(), { once: !0 }), fA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: v },
        overridePayload: a
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (E, _, S) => v.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : S ? p(S) : _ === void 0 && S === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (_ || p(new Error("No data received from LLM")), S ? p(S) : m(_))
      }
    );
  });
}
async function hA(t, r, s, a) {
  const u = await Jf(t, r, s, {}, void 0, a);
  if (!u?.content)
    throw new Error("Plain request failed to return content.");
  return u.content;
}
async function py(t, r, s, a, u, l, f) {
  const m = Ut.getSettings();
  let p, g;
  const v = GC(s);
  if (u === "native") {
    if (p = await Jf(
      t,
      r,
      l,
      {
        json_schema: { name: a, strict: !0, value: v }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    g = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const _ = u, S = lA(v, _), h = JSON.stringify(v, null, 2), C = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = m.prompts[C]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const j = {
      example_response: S,
      schema: h
    }, P = { role: "system", content: ln.compile(x, { noEscape: !0, strict: !0 })(j) };
    if (p = await Jf(
      t,
      [...r, P],
      l,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    g = Ky(p.content, _, { schema: v });
  }
  const E = s.safeParse(g);
  if (!E.success) {
    const _ = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", g), await Se("error", _), new Error(_);
  }
  return E.data;
}
const pA = ({ originalContent: t, newContent: r }) => {
  const s = ie.useMemo(() => {
    const a = p_(t, r);
    let u = "", l = "";
    return a.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += g), f.removed || (l += g);
    }), { originalHtml: u, newHtml: l };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, G_ = ({ before: t, after: r }) => {
  const s = ie.useMemo(() => !t || !r ? [] : g_(t, r), [t, r]);
  return s.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No entry changes were detected for this step." }) : /* @__PURE__ */ A.jsx(A.Fragment, { children: s.map(({ field: a, label: u, before: l, after: f }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ A.jsx("h4", { children: u }),
    /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ A.jsx("span", { children: "Before" }),
      /* @__PURE__ */ A.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ A.jsx(pA, { originalContent: l, newContent: f })
  ] }, a)) });
}, mA = ({ before: t, after: r }) => {
  const { added: s, removed: a, changed: u } = ie.useMemo(() => {
    const f = t || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([_, S]) => {
      S.forEach((h) => {
        const C = `${_}::${h.uid}`;
        m.set(C, { worldName: _, entry: h });
      });
    });
    const p = [], g = [], v = [], E = Object.entries(r || {}).flatMap(
      ([_, S]) => S.map((h) => ({ worldName: _, entry: h }))
    );
    for (const { worldName: _, entry: S } of E) {
      const h = `${_}::${S.uid}`;
      if (m.has(h)) {
        const x = m.get(h).entry;
        zl(x, S) && v.push({ worldName: _, before: x, after: S }), m.delete(h);
      } else
        p.push({ worldName: _, entry: S });
    }
    return m.forEach(({ worldName: _, entry: S }) => {
      g.push({ worldName: _, entry: S });
    }), { added: p, removed: g, changed: v };
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
        /* @__PURE__ */ A.jsx(G_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, yh = ({ sessionType: t, before: r, after: s }) => !r && !s ? /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: t === "global" ? /* @__PURE__ */ A.jsx(mA, { before: r, after: s }) : /* @__PURE__ */ A.jsx(G_, { before: r, after: s }) })
] }), gA = ({ currentState: t, initialState: r }) => {
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
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(yh, { sessionType: "entry", before: r, after: t }) : u.map(({ label: l, value: f }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ A.jsx("label", { children: l }),
      /* @__PURE__ */ A.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, l)) })
  ] });
}, vA = ({ currentState: t, initialState: r }) => {
  const [s, a] = ie.useState(!1);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: s, onChange: (u) => a(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ A.jsx(yh, { sessionType: "global", before: r, after: t }) : Object.entries(t).map(([u, l]) => /* @__PURE__ */ A.jsxs("div", { className: "world-group", children: [
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
}, Ri = SillyTavern.getContext(), yA = (t, r) => {
  const s = structuredClone(t);
  s.comment = r.name, s.key = r.triggers, s.content = r.content;
  for (const a of ra) {
    const u = r[a];
    u !== void 0 && (s[a] = u);
  }
  return s;
}, _A = (t, r) => {
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
        console.warn(`[WREC] Could not find entry to change: "${l}" in world "${u}"`), Se("warning", `Could not find entry to change: "${l}" in world "${u}"`);
    }
  if (r.add)
    for (const a of r.add) {
      const { worldName: u, name: l, triggers: f, content: m } = a;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((v) => [v.uid, v])) }, g = nh(u, p);
      if (g) {
        g.comment = l, g.key = f, g.content = m;
        for (const v of ra) {
          const E = a[v];
          E !== void 0 && (g[v] = E);
        }
        s[u].push(g);
      }
    }
  return s;
}, bA = ({ initialState: t, onSave: r, onClose: s }) => {
  const [a, u] = ie.useState(t.comment), [l, f] = ie.useState(t.key.join(", ")), [m, p] = ie.useState(t.content), g = () => {
    const v = {
      ...structuredClone(t),
      comment: a,
      key: l.split(",").map((E) => E.trim()).filter(Boolean),
      content: m
    };
    r(v);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Entry State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(Oe, { onClick: g, children: [
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
        /* @__PURE__ */ A.jsx(u_, { type: "text", value: a, onInput: (v) => u(v.currentTarget.value) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ A.jsx(Er, { value: l, onChange: (v) => f(v.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: "Content" }),
        /* @__PURE__ */ A.jsx(Er, { value: m, onChange: (v) => p(v.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, SA = ({
  session: t,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: l
}) => {
  const [f, m] = ie.useState(t.messages), [p, g] = ie.useState(""), [v, E] = ie.useState(!1), [_, S] = ie.useState(null), [h, C] = ie.useState(!1), [x, j] = ie.useState(!1), [N, P] = ie.useState(null), [c, y] = ie.useState(""), w = ie.useRef(null), k = ie.useRef(null);
  ie.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const M = ie.useCallback(
    (G, I, te) => {
      if (JSON.stringify(te) === JSON.stringify(I))
        return G;
      const Q = Ut.getSettings();
      let se = "";
      if (t.type === "global") {
        const re = Q.prompts.reviseGlobalStateUpdate?.content, pe = Q.prompts.reviseGlobalStateUpdateAddedModified?.content, je = Q.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !pe || !je) return G;
        const He = te || {}, be = I || {}, fe = /* @__PURE__ */ new Map();
        Object.entries(He).forEach(([bt, ve]) => {
          ve.forEach((ye) => {
            fe.set(`${bt}::${ye.uid}`, ye);
          });
        });
        const me = /* @__PURE__ */ new Map();
        Object.entries(be).forEach(([bt, ve]) => {
          ve.forEach((ye) => {
            me.set(`${bt}::${ye.uid}`, ye);
          });
        });
        const Ne = {}, ze = [];
        if (me.forEach((bt, ve) => {
          const [ye] = ve.split("::"), Ve = fe.get(ve);
          let Ze = !1;
          Ve ? zl(bt, Ve) && (Ze = !0) : Ze = !0, Ze && (Ne[ye] || (Ne[ye] = []), Ne[ye].push(bt));
        }), fe.forEach((bt, ve) => {
          if (!me.has(ve)) {
            const [ye] = ve.split("::");
            ze.push({ worldName: ye, comment: bt.comment });
          }
        }), Object.keys(Ne).length === 0 && ze.length === 0)
          return G;
        const Ye = ln.compile(pe, { noEscape: !0 })({
          changedLorebooks: Ne
        }), fn = ln.compile(je, { noEscape: !0 })({ removedEntries: ze });
        se = ln.compile(re, { noEscape: !0 })({
          addedModifiedContent: Ye,
          removedContent: fn
        });
      } else {
        const re = I;
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
    async (G, I, te, Q) => {
      const se = Ut.getSettings();
      if (!t.profileId) {
        Se("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), te(), E(!0);
      try {
        const re = [], pe = Ri.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === t.profileId
        ), je = pe?.api ? Ri.CONNECT_API_MAP[pe.api].selected : void 0;
        if (!je) {
          Se("warning", "No API selected for this session.");
          return;
        }
        for (const fe of G)
          if (fe.id === Qf) {
            if (un === void 0 && !Kt) continue;
            const me = await Oy(je, l);
            me.warnings?.length && me.warnings.forEach((Ne) => Se("warning", Ne)), re.push(...me.result);
          } else
            re.push(fe);
        const He = G.slice(0, G.length - (I ? 0 : 1)).reverse().find((fe) => fe.stateSnapshot)?.stateSnapshot ?? u;
        let be = "";
        if (t.type === "global") {
          const fe = se.prompts.currentLorebooks?.content;
          if (fe) {
            const me = { currentLorebooks: He };
            be = ln.compile(fe, { noEscape: !0 })(me);
          }
        } else {
          const fe = He;
          be = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${t.worldName}
### (NAME: ${fe.comment})
Triggers: ${(fe.key || []).join(", ")}
Content: ${fe.content}`;
        }
        if (be = Ri.substituteParams(be.trim()), be) {
          const fe = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: be
          }, me = re.pop();
          re.push(fe), me && re.push(me);
        }
        if (t.isReadonly) {
          re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const fe = await hA(
            t.profileId,
            re,
            se.maxResponseToken,
            k.current.signal
          ), me = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: fe
          }, Ne = [...G, me];
          m(Ne), a({ ...t, messages: Ne });
        } else {
          let fe, me;
          if (t.type === "entry") {
            const Ye = await py(
              t.profileId,
              re,
              aA,
              hy.ENTRY,
              t.promptEngineeringMode,
              se.maxResponseToken,
              k.current.signal
            );
            fe = yA(He, Ye), me = Ye.justification;
          } else {
            const Ye = await py(
              t.profileId,
              re,
              uA,
              hy.GLOBAL,
              t.promptEngineeringMode,
              se.maxResponseToken,
              k.current.signal
            );
            fe = _A(He, Ye), me = Ye.justification;
          }
          const Ne = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: me,
            stateSnapshot: fe
          };
          let ze = [...G, Ne];
          ze = M(ze, fe, He), m(ze), a({ ...t, messages: ze });
        }
      } catch (re) {
        re.name === "AbortError" ? Se("info", "Request was cancelled.") : (console.error("Revise request failed:", re), Se("error", `Request failed: ${re.message}`)), Q();
      } finally {
        E(!1), k.current = null;
      }
    },
    [t, a, u, l, M]
  ), R = ie.useCallback(async () => {
    if (!p.trim() || v) return;
    const G = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, I = f;
    await z(
      [...f, G],
      !1,
      () => {
        m([...f, G]), g("");
      },
      () => m(I)
    );
  }, [p, v, f, z]), L = ie.useCallback(async () => {
    if (v || f.length === 0) return;
    const G = f;
    let I = [...f];
    const te = f.findLastIndex((Q) => !Q.isStateUpdate);
    te > -1 && f[te].role === "assistant" && (I = f.slice(0, te)), await z(
      I,
      !0,
      () => m(I),
      () => m(G)
    );
  }, [v, f, z]), q = () => {
    const G = f.slice().reverse().find((I) => I.stateSnapshot)?.stateSnapshot ?? u;
    s(G), r();
  }, F = (G) => {
    const I = f.findIndex((se) => se.id === G);
    if (I < 0 || !f[I].stateSnapshot) return;
    const te = f[I].stateSnapshot;
    let Q = u;
    for (let se = I - 1; se >= 0; se--)
      if (f[se].stateSnapshot) {
        Q = f[se].stateSnapshot;
        break;
      }
    S({ before: Q, after: te });
  }, $ = (G) => {
    P(G.id), y(G.content);
  }, W = () => {
    P(null), y("");
  }, O = async () => {
    if (!N) return;
    const G = f.findIndex((pe) => pe.id === N);
    if (G === -1 || !await Ri.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const te = f, Q = f.slice(0, G), se = { ...f[G], content: c }, re = [...Q, se];
    W(), await z(
      re,
      !1,
      () => m(re),
      () => m(te)
    );
  }, U = async (G) => {
    const I = f.findIndex((re) => re.id === G);
    if (I === -1) return;
    const te = !!f[I].isInitial;
    if (!await Ri.Popup.show.confirm(
      "Delete Message",
      te ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const se = te ? f.filter((re) => re.isInitial && re.id !== G) : f.slice(0, I);
    m(se), a({ ...t, messages: se }), Se("info", "Message history has been updated.");
  }, J = (G) => {
    const I = f.slice().reverse().find((se) => se.stateSnapshot)?.stateSnapshot ?? u, te = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: G
    };
    let Q = [...f, te];
    Q = M(Q, G, I), m(Q), a({ ...t, messages: Q }), j(!1);
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
          l_,
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
            /* @__PURE__ */ A.jsx(Er, { value: c, onChange: (I) => y(I.target.value), rows: 5 }),
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
            !v && G.id !== Qf && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
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
          /* @__PURE__ */ A.jsx(Er, { value: c, onChange: (I) => y(I.target.value), rows: 3 }),
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
            G.role === "user" && !G.stateSnapshot && !v && /* @__PURE__ */ A.jsx(
              Oe,
              {
                className: "message-action-button",
                onClick: () => $(G),
                title: "Edit and Fork",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            G.stateSnapshot && !v && /* @__PURE__ */ A.jsx(
              Oe,
              {
                className: "message-action-button",
                onClick: () => F(G.id),
                title: "Compare changes",
                children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !v && /* @__PURE__ */ A.jsx(
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
      ce.length > 0 && !v && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(Oe, { onClick: L, title: "Regenerate response", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      v && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
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
          onChange: (G) => g(G.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: v || !!N,
          onKeyDown: (G) => {
            G.key === "Enter" && !G.shiftKey && (G.preventDefault(), R());
          }
        }
      ),
      /* @__PURE__ */ A.jsx(Oe, { onClick: R, disabled: v || !p.trim() || !!N, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    _ && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(yh, { sessionType: t.type, before: _.before, after: _.after }),
        onComplete: () => S(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: t.type === "entry" ? /* @__PURE__ */ A.jsx(gA, { currentState: ae, initialState: u }) : /* @__PURE__ */ A.jsx(
          vA,
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
          bA,
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
async function wA(t, r, s, a, u, l, f) {
  const m = Ut.getSettings(), p = m.mainContextTemplatePresets[a];
  if (!p)
    throw new Error(`Main context template preset "${a}" not found.`);
  const g = [], v = {
    user: Re.name1 || "You",
    char: Re.name2 || "Character",
    persona: Re.powerUserSettings.persona_description,
    blackListedEntries: l.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      v.currentLorebooks = t;
    else {
      const _ = {};
      Object.entries(f).filter(([S]) => l.selectedWorldNames.includes(S)).forEach(([S, h]) => {
        const C = new Set(l.selectedEntryUids[S] ?? []), x = C.size > 0 ? h.filter((j) => C.has(j.uid)) : h.filter((j) => !j.disable);
        x.length > 0 && (_[S] = x);
      }), v.currentLorebooks = _;
    }
  if (r === "entry") {
    const _ = t;
    v.entryToRevise = {
      worldName: s,
      name: _.comment,
      triggers: _.key.join(", "),
      content: _.content
    };
  }
  for (const _ of p.prompts) {
    if (!_.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(_.promptName) || _.promptName === "chatHistory" && u.messages.type === "none" || un === void 0 && !Kt && _.promptName === "chatHistory") continue;
    if (_.promptName === "chatHistory") {
      g.push({
        id: Qf,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const S = m.prompts[_.promptName];
    if (S) {
      let h = ln.compile(S.content, { noEscape: !0 })(v);
      h = Re.substituteParams(h), h.trim() && g.push({
        id: `im-${g.length}`,
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
    g.push({
      id: `im-${g.length}`,
      role: "system",
      content: _,
      isInitial: !0
    });
  }
  return g;
}
const dl = SillyTavern.getContext(), my = "worldInfoRecommender_reviseSessions", V_ = ({
  target: t,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: l,
  contextToSend: f
}) => {
  const [m, p] = ie.useState([]), [g, v] = ie.useState(null), [E, _] = ie.useState(!0), S = ie.useMemo(() => t.type === "entry" ? `${t.worldName}::${t.entry.uid}::${t.entry.comment}` : "global", [t]);
  ie.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(my) || "[]");
    p(w), _(!1);
  }, []);
  const h = ie.useMemo(() => t.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === S).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, t.type, S]), C = (w) => {
    localStorage.setItem(my, JSON.stringify(w)), p(w);
  }, x = async () => {
    const w = await dl.Popup.show.input(
      "New Session Name",
      t.type === "entry" ? `Revise "${t.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = Ut.getSettings();
        if (!k.profileId) {
          Se("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = await wA(
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
        v(z);
      } catch (k) {
        const M = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), Se("error", `Failed to create session: ${M}`);
      }
  }, j = (w) => {
    v(w);
  }, N = async (w) => {
    if (await dl.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const M = m.filter((z) => z.id !== w);
      C(M);
    }
  }, P = (w) => {
    const k = m.findIndex((z) => z.id === w.id), M = [...m];
    k !== -1 ? M[k] = w : M.push(w), C(M), v(w);
  }, c = (w) => {
    t.type === "entry" ? a({
      worldName: t.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : a(w), s();
  };
  if (g) {
    const w = dl.extensionSettings.connectionManager?.profiles?.find(
      (z) => z.id === g.profileId
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
          const z = dl.chat?.length ?? 0, R = k.last ?? 10;
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
      SA,
      {
        session: g,
        onBack: () => v(null),
        onApply: c,
        onSessionUpdate: P,
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
}, EA = new Aw.Converter(), CA = ({
  initialWorldName: t,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: l,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: g,
  sessionForContext: v,
  contextToSend: E
}) => {
  const [_, S] = ie.useState(() => s.find((B) => B === t) ?? s[0] ?? ""), [h, C] = ie.useState(!1), [x, j] = ie.useState(!1), [N, P] = ie.useState(!1), [c, y] = ie.useState(!1), [w, k] = ie.useState(!1), [M, z] = ie.useState(!1), [R, L] = ie.useState(""), q = ie.useRef(null), F = ie.useMemo(
    () => !!g[_]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [_, r.uid, r.comment, g]
  ), $ = x || N, W = async () => {
    C(!0), await l(r, t, _);
  }, O = async () => {
    j(!0), await m({ worldName: t, entry: r, prompt: R, mode: "continue" }), j(!1);
  }, U = async () => {
    P(!0), await m({ worldName: t, entry: r, prompt: R, mode: "revise" }), P(!1);
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
      /* @__PURE__ */ A.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: EA.makeHtml(r.content ?? "") } }),
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
        content: /* @__PURE__ */ A.jsx(Xw, { ref: q, entry: r, initialRegexIds: u }),
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
        content: /* @__PURE__ */ A.jsx(Yw, { originalEntry: a, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    M && /* @__PURE__ */ A.jsx(
      er,
      {
        type: Bt.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          V_,
          {
            target: { type: "entry", worldName: t, entry: r },
            initialState: r,
            onClose: () => z(!1),
            onApply: J,
            sessionForContext: v,
            allEntries: g,
            contextToSend: E
          }
        ),
        onComplete: () => z(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, gy = ie.forwardRef(
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
    const g = (_, S) => {
      const h = `${_}::${S}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, v = () => {
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
        /* @__PURE__ */ A.jsx(Oe, { onClick: v, children: "Select All (Filtered)" }),
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
              onChange: () => g(_, h.uid)
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
const qn = SillyTavern.getContext(), fl = () => un ? Ny(un) : Kt;
function vy(t, r, s) {
  const a = t.find((f) => f.uid === r.uid);
  if (a)
    return zl(r, a) ? (Object.assign(a, {
      key: r.key,
      content: r.content,
      comment: r.comment,
      ...G0(r)
    }), { status: "updated" }) : { status: "unchanged" };
  const u = { entries: Object.fromEntries(t.map((f) => [f.uid, f])) }, l = nh(s, u);
  if (!l) throw new Error("Failed to create new World Info entry.");
  return Object.assign(l, {
    key: r.key,
    content: r.content,
    comment: r.comment,
    ...G0(r)
  }), t.push(l), { status: "added" };
}
const kA = () => {
  const t = f_(), r = Ut.getSettings(), [s, a] = ie.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, l] = ie.useState([]), [f, m] = ie.useState({}), [p, g] = ie.useState([]), [v, E] = ie.useState(!0), [_, S] = ie.useState(!1), [h, C] = ie.useState(!1), [x, j] = ie.useState(!1), [N, P] = ie.useState(!1), c = ie.useRef(null), y = ie.useRef(null), w = ie.useMemo(() => fl() ?? "_global", [un, Kt]);
  ie.useEffect(() => {
    (async () => {
      E(!0), m({}), l([]), g([]);
      const te = fl(), Q = `worldInfoRecommend_${w}`, se = JSON.parse(localStorage.getItem(Q) ?? "{}"), re = {
        suggestedEntries: se.suggestedEntries ?? {},
        blackListedEntries: se.blackListedEntries ?? [],
        selectedWorldNames: se.selectedWorldNames ?? [],
        selectedEntryUids: se.selectedEntryUids ?? {},
        regexIds: se.regexIds ?? {}
      };
      let pe = {};
      if (te)
        if (Kt) {
          const be = await yl(["chat", "persona", "global"]);
          be && (pe = be);
          const fe = uv.find((me) => me.id === Kt);
          if (fe)
            for (const me of fe.members) {
              const Ne = qn.characters.findIndex((ze) => ze.avatar === me);
              if (Ne !== -1) {
                const ze = await yl(["character"], !0, Ne);
                ze && (pe = { ...pe, ...ze });
              }
            }
        } else
          pe = await yl(["all"], !0, un);
      else
        for (const be of g2) {
          const fe = await qn.loadWorldInfo(be);
          fe && (pe[be] = Object.values(fe.entries));
        }
      m(pe);
      const je = Object.keys(pe);
      l(je), re.selectedWorldNames.length === 0 && w !== "_global" ? re.selectedWorldNames = [...je] : re.selectedWorldNames = re.selectedWorldNames.filter(
        (be) => je.includes(be)
      );
      const He = {};
      if (re.selectedEntryUids) {
        for (const [be, fe] of Object.entries(re.selectedEntryUids))
          if (pe[be]) {
            const me = new Set(pe[be].map((ze) => ze.uid)), Ne = fe.filter((ze) => me.has(ze));
            Ne.length > 0 && (He[be] = Ne);
          }
      }
      if (re.selectedEntryUids = He, a(re), Kt) {
        const be = uv.find((fe) => fe.id === Kt);
        if (be?.generation_mode === 0) {
          const fe = be.members.map((me) => qn.characters.find((Ne) => Ne.avatar === me)).filter((me) => !!me);
          g(fe);
        }
      }
      E(!1);
    })();
  }, [w]), ie.useEffect(() => {
    if (v) return;
    const I = `worldInfoRecommend_${w}`;
    localStorage.setItem(I, JSON.stringify(s));
  }, [s, w, v]);
  const k = (I, te) => {
    Ut.getSettings()[I] = te, Ut.saveSettings(), t();
  }, M = (I, te) => {
    Ut.getSettings().contextToSend[I] = te, Ut.saveSettings(), t();
  }, z = ie.useCallback(
    async (I, te, Q = !1) => {
      const se = structuredClone(f);
      se[te] || (se[te] = []);
      const { status: re } = vy(se[te], I, te);
      if (m(se), !Q) {
        const pe = {
          entries: Object.fromEntries(se[te].map((je) => [je.uid, je]))
        };
        await qn.saveWorldInfo(te, pe), qn.reloadWorldInfoEditor(te, !0);
      }
      return re;
    },
    [f]
  ), R = ie.useCallback(
    async (I) => {
      if (!r.profileId) return Se("warning", "Please select a connection profile.");
      const te = I?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!I && !te)
        return Se("warning", "Please enter a prompt.");
      S(!0);
      try {
        const Q = qn.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === r.profileId
        );
        if (!Q) throw new Error("Connection profile not found.");
        const se = fl(), re = {
          presetName: Q.preset,
          contextName: Q.context,
          instructName: Q.instruct,
          syspromptName: Q.sysprompt,
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
              const fe = r.contextToSend.messages.last ?? 10, me = qn.chat?.length ?? 0;
              re.messageIndexesBetween = {
                end: Math.max(0, me - 1),
                start: Math.max(0, me - fe)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (re.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const pe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pe.stDescription, (!r.contextToSend.worldInfo || s.selectedWorldNames.length === 0) && delete pe.currentLorebooks;
        const je = Object.values(s.suggestedEntries).some((fe) => fe.length > 0);
        (!r.contextToSend.suggestedEntries || !je) && delete pe.suggestedLorebooks, s.blackListedEntries.length === 0 && delete pe.blackListedEntries;
        const He = I ? { worldName: I.worldName, entry: I.entry, mode: I.mode } : void 0, be = await o_({
          profileId: r.profileId,
          userPrompt: te,
          responseFormat: r.responseFormat,
          buildPromptOptions: re,
          session: s,
          entriesGroupByWorldName: f,
          promptSettings: pe,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((fe) => fe.enabled).map((fe) => ({ promptName: fe.promptName, role: fe.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: He
        });
        Object.keys(be).length > 0 ? a(I ? (fe) => {
          const me = structuredClone(fe.suggestedEntries), Ne = I.worldName, ze = be[Ne]?.[0];
          if (me[Ne] && ze) {
            const Ye = me[Ne].findIndex(
              (fn) => fn.uid === I.entry.uid && fn.comment === I.entry.comment
            );
            Ye !== -1 && (me[Ne][Ye] = ze);
          }
          return { ...fe, suggestedEntries: me };
        } : (fe) => {
          const me = structuredClone(fe.suggestedEntries);
          for (const [Ne, ze] of Object.entries(be)) {
            me[Ne] || (me[Ne] = []);
            for (const Ye of ze)
              me[Ne].some((fn) => fn.uid === Ye.uid && fn.comment === Ye.comment) || me[Ne].push(Ye);
          }
          return { ...fe, suggestedEntries: me };
        }) : Se("warning", "No results from AI");
      } catch (Q) {
        console.error(Q), Se("error", Q instanceof Error ? Q.message : String(Q));
      } finally {
        S(!1);
      }
    },
    [r, s, f]
  ), L = ie.useCallback(
    async (I, te, Q) => {
      try {
        const se = await z(I, Q);
        se === "unchanged" ? Se("info", `No changes detected for "${I.comment}". Entry was not updated.`) : Se("success", se === "added" ? "Entry added" : "Entry updated"), a((re) => {
          const pe = { ...re.suggestedEntries };
          return pe[te] && (pe[te] = pe[te].filter(
            (je) => !(je.uid === I.uid && je.comment === I.comment)
          )), { ...re, suggestedEntries: pe };
        });
      } catch (se) {
        console.error(se), Se("error", `Failed to add entry: ${se.message}`);
      }
    },
    [z]
  ), q = async () => {
    const I = Object.values(s.suggestedEntries).flat().length;
    if (I === 0) return Se("warning", "No entries to add.");
    if (await qn.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${I} suggested entries?`
    )) {
      S(!0);
      try {
        const Q = structuredClone(f);
        let se = 0, re = 0, pe = 0;
        const je = [], He = /* @__PURE__ */ new Set(), be = [];
        Object.entries(s.suggestedEntries).forEach(([fe, me]) => {
          me.forEach((Ne) => {
            const ze = u.includes(fe) ? fe : u[0] ?? "";
            ze && be.push({ worldName: ze, entry: Ne });
          });
        });
        for (const { worldName: fe, entry: me } of be) {
          Q[fe] || (Q[fe] = []);
          try {
            const { status: Ne } = vy(Q[fe], me, fe);
            Ne === "added" ? se++ : Ne === "updated" ? re++ : pe++, Ne !== "unchanged" && He.add(fe);
          } catch {
            Se("error", `Failed to process entry: ${me.comment}`), je.push({ worldName: fe, entry: me });
          }
        }
        for (const fe of He)
          try {
            const me = { entries: Object.fromEntries(Q[fe].map((Ne) => [Ne.uid, Ne])) };
            await qn.saveWorldInfo(fe, me), qn.reloadWorldInfoEditor(fe, !0);
          } catch {
            Se("error", `Failed to save world: ${fe}`);
          }
        m(Q), je.length === 0 ? a((fe) => ({ ...fe, suggestedEntries: {} })) : a((fe) => {
          const me = { ...fe.suggestedEntries }, Ne = new Set(je.map((ze) => ze.entry.uid));
          for (const { worldName: ze, entry: Ye } of be)
            Ne.has(Ye.uid) || me[ze] && (me[ze] = me[ze].filter((fn) => fn.uid !== Ye.uid));
          for (const ze of Object.keys(me))
            me[ze].length === 0 && delete me[ze];
          return { ...fe, suggestedEntries: me };
        }), Se("success", `Processed: ${se} new, ${re} updated, ${pe} unchanged.`);
      } finally {
        S(!1);
      }
    }
  }, F = async () => {
    await qn.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (a((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: fl() ? [...u] : [],
      selectedEntryUids: {}
    })), Se("success", "Reset successful"));
  }, $ = (I, te, Q) => {
    a((se) => {
      const re = { ...se };
      Q && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${I.comment})`]);
      const pe = { ...re.suggestedEntries };
      return pe[te] && (pe[te] = pe[te].filter(
        (je) => !(je.uid === I.uid && je.comment === I.comment)
      )), re.suggestedEntries = pe, re;
    });
  }, W = (I, te, Q, se) => {
    a((re) => {
      const pe = { ...re.suggestedEntries };
      if (pe[I]) {
        const He = pe[I].findIndex(
          (be) => be.uid === te.uid && be.comment === te.comment
        );
        He !== -1 && (pe[I][He] = Q);
      }
      const je = { ...re, suggestedEntries: pe };
      return se && (je.regexIds = se), je;
    });
  }, O = ie.useCallback(
    (I) => {
      a((te) => {
        const Q = structuredClone(te.suggestedEntries);
        let se = 0;
        for (const [re, pe] of Object.entries(I))
          if (f[re]) {
            Q[re] || (Q[re] = []);
            for (const je of pe) {
              if (Q[re].some((fe) => fe.uid === je)) continue;
              const be = f[re].find((fe) => fe.uid === je);
              be && (Q[re].push(structuredClone(be)), se++);
            }
          }
        return se > 0 && Se("success", `Imported ${se} entries for revision.`), { ...te, suggestedEntries: Q };
      });
    },
    [f]
  ), U = ie.useMemo(() => {
    const I = {};
    return s.selectedWorldNames.forEach((te) => {
      f[te] && (I[te] = f[te]);
    }), I;
  }, [s.selectedWorldNames, f]), J = ie.useMemo(() => {
    const I = JSON.parse(JSON.stringify(U)), te = /* @__PURE__ */ new Map();
    return Object.entries(s.suggestedEntries).forEach(([Q, se]) => {
      se.forEach((re) => {
        re.uid && te.set(re.uid, { worldName: Q, entry: re });
      });
    }), Object.entries(I).forEach(([, Q]) => {
      Q.forEach((se, re) => {
        se.uid && te.has(se.uid) && (Q[re] = te.get(se.uid).entry, te.delete(se.uid));
      });
    }), te.forEach(({ worldName: Q, entry: se }) => {
      I[Q] || (I[Q] = []), I[Q].some((re) => re.uid === se.uid) || I[Q].push(se);
    }), I;
  }, [U, s.suggestedEntries]), ae = (I) => {
    const te = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([se, re]) => {
      re.forEach((pe) => {
        te.set(`${se}::${pe.uid}`, pe);
      });
    });
    const Q = {};
    Object.entries(I).forEach(([se, re]) => {
      re.forEach((pe) => {
        const je = `${se}::${pe.uid}`, He = te.get(je);
        let be = !1;
        He ? zl(pe, He) && (be = !0) : be = !0, be && (Q[se] || (Q[se] = []), Q[se].push(pe));
      });
    }), a((se) => ({ ...se, suggestedEntries: Q })), Se("success", "Changes from global revise session applied.");
  }, B = ie.useMemo(
    () => Object.keys(r.promptPresets).map((I) => ({ value: I, label: I })),
    [r.promptPresets]
  ), Y = ie.useMemo(
    () => u.map((I) => ({ value: I, label: I })),
    [u]
  ), ce = ie.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((I, te) => I + te.length, 0),
    [s.selectedEntryUids]
  );
  if (v)
    return /* @__PURE__ */ A.jsx("div", { children: "Loading..." });
  const G = Object.entries(s.suggestedEntries).flatMap(
    ([I, te]) => te.map((Q) => ({ worldName: I, entry: Q }))
  );
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "World Info Recommender" }),
      /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
            /* @__PURE__ */ A.jsx(
              l_,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (I) => k("profileId", I?.id)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Response Format" }),
            /* @__PURE__ */ A.jsxs(
              "select",
              {
                value: r.responseFormat,
                onChange: (I) => k("responseFormat", I.target.value),
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
                    onChange: (I) => M("stDescription", I.target.checked)
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
                    onChange: (I) => M("messages", {
                      ...r.contextToSend.messages,
                      type: I.target.value
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
                      onChange: (I) => M("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(I.target.value) || 10
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
                      onChange: (I) => M("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(I.target.value) || 10
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
                      onChange: (I) => M("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(I.target.value) || 0
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
                      onChange: (I) => M("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(I.target.value) || 10
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
                    onChange: (I) => M("charCard", I.target.checked)
                  }
                ),
                "Char Card"
              ] }),
              p.length > 0 && /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Select Character" }),
                /* @__PURE__ */ A.jsx("select", { className: "text_pole", title: "Select character for your group.", children: p.map((I) => /* @__PURE__ */ A.jsx("option", { value: I.avatar, children: I.name }, I.avatar)) })
              ] }),
              /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (I) => M("authorNote", I.target.checked)
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
                    onChange: (I) => M("worldInfo", I.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ A.jsxs("div", { children: [
                /* @__PURE__ */ A.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ A.jsx(
                  d_,
                  {
                    items: Y,
                    value: s.selectedWorldNames,
                    onChange: (I) => {
                      a((te) => {
                        const Q = { ...te.selectedEntryUids };
                        return te.selectedWorldNames.filter((re) => !I.includes(re)).forEach((re) => delete Q[re]), { ...te, selectedWorldNames: I, selectedEntryUids: Q };
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
                    onChange: (I) => M("suggestedEntries", I.target.checked)
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
                  onChange: (I) => k("maxContextType", I.target.value),
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
                onChange: (I) => k("maxContextValue", parseInt(I.target.value) || 2048)
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
                  onChange: (I) => k("maxResponseToken", parseInt(I.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Your Prompt" }),
            /* @__PURE__ */ A.jsx(
              Zf,
              {
                label: "Prompt Preset",
                items: B,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (I) => k("promptPreset", I ?? "default"),
                onItemsChange: (I) => {
                  const te = I.reduce(
                    (Q, se) => (Q[se.value] = r.promptPresets[se.value] ?? { content: "" }, Q),
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
                onChange: (I) => {
                  const te = { ...r.promptPresets };
                  te[r.promptPreset] && (te[r.promptPreset].content = I.target.value, k("promptPresets", te));
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
                onClick: () => P(!0),
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
            G.map(({ worldName: I, entry: te }) => /* @__PURE__ */ A.jsx(
              CA,
              {
                initialWorldName: I,
                entry: te,
                allWorldNames: u,
                existingEntry: f[I]?.find((Q) => Q.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: L,
                onRemove: $,
                onContinue: R,
                onUpdate: W,
                entriesGroupByWorldName: f,
                sessionForContext: s,
                contextToSend: r.contextToSend
              },
              `${I}-${te.uid}-${te.comment}`
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
          gy,
          {
            ref: c,
            entriesByWorldName: U,
            initialSelectedUids: s.selectedEntryUids,
            title: "Select Entries to Include in Context"
          }
        ),
        onComplete: (I) => {
          if (I && c.current) {
            const te = c.current.getSelection();
            a((Q) => ({ ...Q, selectedEntryUids: te }));
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
          gy,
          {
            ref: y,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (I) => {
          if (I && y.current) {
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
          V_,
          {
            target: { type: "global" },
            initialState: J,
            onClose: () => P(!1),
            onApply: ae,
            sessionForContext: s,
            allEntries: f,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => P(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, AA = () => {
  const [t, r] = ie.useState(!1), s = () => r(!0), a = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, t ? /* @__PURE__ */ A.jsx(
    er,
    {
      content: /* @__PURE__ */ A.jsx(kA, {}),
      type: Bt.DISPLAY,
      onComplete: a,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function xA() {
  function t(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
      let l = u.trim();
      l.startsWith("[") && l.endsWith("]") && (l = l.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let g = 0; g < l.length; g++) {
        const v = l[g];
        v === '"' || v === "'" ? g > 0 && l[g - 1] === "\\" ? f = f.slice(0, -1) + v : m ? v === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += v : (m = !0, p = v) : v === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += v;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  Re.SlashCommandParser.addCommandObject(
    Re.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: Re.ARGUMENT_TYPE.BOOLEAN
    })
  ), Re.SlashCommandParser.addCommandObject(
    Re.SlashCommand.fromProps({
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
      returns: Re.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        Re.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: hw
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: M2.worlds
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [Re.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [Re.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [Re.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Re.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [Re.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        Re.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [Re.ARGUMENT_TYPE.STRING],
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
          const p = Re.extensionSettings?.connectionManager?.profiles?.find(
            (U) => U.id === f || U.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const g = t(r.lorebooks);
          let v;
          if (g !== null) {
            v = {};
            for (const U of g) {
              const J = await Re.loadWorldInfo(U);
              J && (v[U] = Object.values(J.entries));
            }
          } else
            v = await yl(["all"], !0, un);
          const E = Object.keys(v);
          let _;
          if (g !== null) {
            if (_ = g.map((U) => U.trim()).filter((U) => E.includes(U) ? !0 : (a || Se("warning", `Specified lorebook "${U}" is not active or does not exist. Ignoring.`), !1)), _.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            _ = E;
          _.length === 0 && (a || Se("warning", "No active lorebooks found to use for context."));
          const S = t(r["allowed-ops"]), h = S !== null ? S : ["add", "update"], C = h.includes("add"), x = h.includes("update"), j = /* @__PURE__ */ new Set(), N = t(r["editable-entries"]);
          N !== null && N.forEach((U) => {
            j.add(U.trim());
          });
          const P = j.size > 0, c = t(r.context), y = { ...u.contextToSend };
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
              a || Se("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
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
              const U = y.messages.last ?? 10, J = Re.chat?.length ?? 0;
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
            entriesGroupByWorldName: v,
            // Pass the current state
            promptSettings: z,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((U) => U.enabled).map((U) => ({
              promptName: U.promptName,
              role: U.role
            })),
            maxResponseToken: M ?? u.maxResponseToken
          };
          a || Se("info", "Running World Info Recommender...");
          const L = await o_(R);
          if (Object.keys(L).length === 0)
            return a || Se("info", "AI returned no suggestions."), !0;
          let q = 0, F = 0, $ = 0;
          const W = /* @__PURE__ */ new Set(), O = structuredClone(v);
          for (const [U, J] of Object.entries(L)) {
            let ae = U;
            if (!_.includes(ae))
              if (E.includes(ae)) {
                a || Se(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${J.length} entries.`
                ), $ += J.length;
                continue;
              } else if (_.length > 0)
                ae = _[0], a || Se(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${U}". Attempting to place in "${ae}".`
                );
              else {
                a || Se(
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
                  a || Se(
                    "info",
                    `Skipping update for "${ae}.${B.comment || B.uid}" (updates disallowed).`
                  ), $++;
                  continue;
                }
                if (P) {
                  const ce = `${ae}.${B.comment}`, G = `${ae}.${B.uid}`;
                  if (!j.has(ce) && !j.has(G)) {
                    a || Se(
                      "info",
                      `Skipping update for "${ae}.${B.comment || B.uid}" (not in editable-entries).`
                    ), $++;
                    continue;
                  }
                }
              } else if (!C) {
                a || Se(
                  "info",
                  `Skipping add for "${ae}.${B.comment || "New Entry"}" (adds disallowed).`
                ), $++;
                continue;
              }
              try {
                const { status: ce } = fw(B, ae, O);
                ce === "added" ? q++ : F++, W.add(ae);
              } catch (ce) {
                a || Se(
                  "error",
                  `Failed to prepare modification for "${ae}.${B.comment || B.uid}": ${ce.message}`
                ), $++;
              }
            }
          }
          if (W.size > 0) {
            a || Se("info", `Saving changes to ${W.size} lorebook(s)...`);
            for (const U of W) {
              const J = O[U], ae = { entries: {} };
              J.forEach((B) => ae.entries[B.uid] = B), await Re.saveWorldInfo(U, ae), Re.reloadWorldInfoEditor(U, !0);
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
            Se("success", J, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), a || Se("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Ws = SillyTavern.getContext();
async function TA() {
  const t = await Ws.renderExtensionTemplateAsync(
    `third-party/${zi}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), wv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(bl.StrictMode, { children: /* @__PURE__ */ A.jsx(ww, {}) })
  ));
  const a = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], l = document.createElement("div");
  document.body.appendChild(l), wv.createRoot(l).render(
    /* @__PURE__ */ A.jsx(bl.StrictMode, { children: /* @__PURE__ */ A.jsx(AA, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = a.trim();
    const g = p.firstChild;
    g && (m.prepend(g), g.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function NA() {
  return !(!Ws.ConnectionManagerRequestService || !Ws.getCharacterCardFields || !Ws.getWorldInfoPrompt || !Ws.reloadWorldInfoEditor);
}
NA() ? vw().then(() => {
  TA(), xA();
}) : Se("error", `[${zi}] Make sure ST is updated.`);
export {
  TA as init
};
