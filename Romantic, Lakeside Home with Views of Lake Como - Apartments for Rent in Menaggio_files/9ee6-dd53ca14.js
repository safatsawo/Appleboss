(window.webpackJsonp=window.webpackJsonp||[]).push([["9ee6"],{"4mPP":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.getInternalMethods=function(t,e){var n=e?o:a,r=e?t.prototype:t;return Object.getOwnPropertyNames(r).reduce(function(t,e){return-1!==n.indexOf(e)||(t[e]=r[e]),t},{})},e.warn=function(t){"undefined"!=typeof console&&console.warn(new ReferenceError(t))},e.uid=function(t,e){var n=0,r=e;for(;Object.hasOwnProperty.call(t,r);)r=e+String(++n);return r},e.formatAsConstant=function(t){return t.replace(/[a-z]([A-Z])/g,function(t){return t[0]+"_"+t[1].toLowerCase()}).toUpperCase()},e.dispatchIdentity=function(t){for(var e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.dispatch(n.length?[t].concat(n):t)},e.fsa=c,e.dispatch=function(t,e,n,r){var i=e.dispatch(n);if(void 0===i)return null;var a=e.id,o={id:a,namespace:a,name:a};return s.isFunction(i)?i(function(t){return r.dispatch(a,t,o)},r):r.dispatcher.dispatch(c(t,a,i,o))};var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("TnYo")),a=Object.getOwnPropertyNames(r),o=Object.getOwnPropertyNames(r.prototype);function c(t,e,n,r){return{type:e,payload:n,meta:i({dispatchId:t},r),id:t,action:e,data:n,details:r}}function r(){}},"5Oxj":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function l(t,e,n){for(var r=!0;r;){var i=t,a=e,o=n;u=c=void 0,r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,a);if(void 0!==s){if("value"in s)return s.value;var c=s.get;if(void 0===c)return;return c.call(o)}var u=Object.getPrototypeOf(i);if(null===u)return;t=u,e=a,n=o,r=!0}}var f=Function.prototype.bind;function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.createStoreConfig=function(t,e){e.config=y.assign({getState:function(t){return Array.isArray(t)?t.slice():y.isMutableObject(t)?y.assign({},t):t},setState:function(t,e){return y.isMutableObject(e)?y.assign(t,e):e}},t,e.config)},e.transformStore=function(t,e){return t.reduce(function(t,e){return e(t)},e)},e.createStoreFromObject=function(t,e,n){var r=void 0,i=b({},t,n,y.assign({getInstance:function(){return r},setState:function(t){g(this,r,t)}},e));i.bindListeners&&a.default.bindListeners.call(i,i.bindListeners);i.observe&&a.default.bindListeners.call(i,i.observe(t));i.lifecycle&&y.eachObject(function(t,e){a.default.on.call(i,t,e)},[i.lifecycle]);return r=y.assign(new v.default(t,i,void 0!==i.state?i.state:{},e),i.publicMethods,{displayName:n,config:e.config})},e.createStoreFromClass=function(t,e,n){var r=void 0,i=e.config,a=function(){function r(){h(this,r);for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];l(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,e)}return p(r,e),r}();b(a.prototype,t,n,{type:"AltStore",getInstance:function(){return r},setState:function(t){g(this,r,t)}});for(var o=arguments.length,s=Array(3<o?o-3:0),c=3;c<o;c++)s[c-3]=arguments[c];var u=new(f.apply(a,[null].concat(s)));i.bindListeners&&u.bindListeners(i.bindListeners);i.datasource&&u.registerAsync(i.datasource);return r=y.assign(new v.default(t,u,void 0!==u.state?u.state:u,e),d.getInternalMethods(e),i.publicMethods,{displayName:n})};var d=i(n("4mPP")),y=i(n("TnYo")),v=r(n("EJyI")),a=r(n("avw6"));function g(t,e,n){if(n){var r=e.StoreModel.config,i=y.isFunction(n)?n(e.state):n;e.state=r.setState.call(t,e.state,i),t.alt.dispatcher.isDispatching()||t.emitChange()}}function b(t,e,n,r){return y.assign(t,a.default,{displayName:n,alt:e,dispatcher:e.dispatcher,preventDefault:function(){this.getInstance().preventDefault=!0},boundListeners:[],lifecycleEvents:{},actionListeners:{},actionListenerHandlers:{},publicMethods:{},handlesOwnErrors:!1},r)}},CNem:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i,a,o,s){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,a,o,s],l=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[l++]}))}throw c.framesToPop=1,c}}},EJyI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a,u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("TnYo")),o=n("pOcp"),l=(a=o)&&a.__esModule?a:{default:a},s=(r(f,[{key:"listen",value:function(t){var e=this;if(!u.isFunction(t))throw new TypeError("listen expects a function");return this.transmitter.subscribe(t),function(){return e.unlisten(t)}}},{key:"unlisten",value:function(t){this.lifecycle("unlisten"),this.transmitter.unsubscribe(t)}},{key:"getState",value:function(){return this.StoreModel.config.getState.call(this,this.state)}}]),f);function f(t,n,e,r){var i=this;c(this,f);var a=n.lifecycleEvents;this.transmitter=(0,l.default)(),this.lifecycle=function(t,e){a[t]&&a[t].push(e)},this.state=e,this.alt=t,this.preventDefault=!1,this.displayName=n.displayName,this.boundListeners=n.boundListeners,this.StoreModel=r,this.reduce=n.reduce||function(t){return t};var o=n.output||function(t){return t};this.emitChange=function(){return i.transmitter.push(o(i.state))};function s(t,e){try{return t()}catch(t){if(n.handlesOwnErrors)return i.lifecycle("error",{error:t,payload:e,state:i.state}),!1;throw t}}u.assign(this,n.publicMethods),this.dispatchToken=t.dispatcher.register(function(e){i.preventDefault=!1,i.lifecycle("beforeEach",{payload:e,state:i.state});var t=n.actionListeners[e.action];if(t||n.otherwise){!1===s(t?function(){return t.filter(Boolean).every(function(t){return!1!==t.call(n,e.data,e.action)})}:function(){return n.otherwise(e.data,e.action)},e)||i.preventDefault||i.emitChange()}n.reduce&&(s(function(){var t=n.reduce(i.state,e);void 0!==t&&(i.state=t)},e),i.preventDefault||i.emitChange()),i.lifecycle("afterEach",{payload:e,state:i.state})}),this.lifecycle("init")}e.default=s,t.exports=e.default},RkTr:function(t,e,n){"use strict";var r=n("CNem"),i=1;function a(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}a.prototype.register=function(t){var e="ID_"+i++;return this.$Dispatcher_callbacks[e]=t,e},a.prototype.unregister=function(t){r(this.$Dispatcher_callbacks[t],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this.$Dispatcher_callbacks[t]},a.prototype.waitFor=function(t){r(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];this.$Dispatcher_isPending[n]?r(this.$Dispatcher_isHandled[n],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(r(this.$Dispatcher_callbacks[n],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this.$Dispatcher_invokeCallback(n))}},a.prototype.dispatch=function(t){r(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(t);try{for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]||this.$Dispatcher_invokeCallback(e)}finally{this.$Dispatcher_stopDispatching()}},a.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},a.prototype.$Dispatcher_invokeCallback=function(t){this.$Dispatcher_isPending[t]=!0,this.$Dispatcher_callbacks[t](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[t]=!0},a.prototype.$Dispatcher_startDispatching=function(t){for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]=!1,this.$Dispatcher_isHandled[e]=!1;this.$Dispatcher_pendingPayload=t,this.$Dispatcher_isDispatching=!0},a.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},t.exports=a},TnYo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isMutableObject=function(t){var e=t.constructor;return!!t&&"object"==typeof t&&!Object.isFrozen(t)&&"[object Object]"===Object.prototype.toString.call(t)&&r(e)&&(e instanceof e||"AltStore"===t.type)},e.isPromise=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},e.eachObject=i,e.assign=function(n){for(var t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return i(function(t,e){return n[t]=e},e),n};var r=function(t){return"function"==typeof t};function i(n,t){t.forEach(function(e){Object.keys(Object(e)).forEach(function(t){n(t,e[t])})})}e.isFunction=r},avw6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n("pOcp"),a=(r=i)&&r.__esModule?r:{default:r},o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("TnYo")),s={waitFor:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!e.length)throw new ReferenceError("Dispatch tokens not provided");var r=e;1===e.length&&(r=Array.isArray(e[0])?e[0]:e);var i=r.map(function(t){return t.dispatchToken||t});this.dispatcher.waitFor(i)},exportAsync:function(t){this.registerAsync(t)},registerAsync:function(t){var u=this,l=0,r=o.isFunction(t)?t(this.alt):t,e=Object.keys(r).reduce(function(t,e){var n=r[e],c=o.isFunction(n)?n(u):n;return["success","error","loading"].forEach(function(t){if(c[t]&&!c[t].id)throw new Error(t+" handler must be an action function")}),t[e]=function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];function n(n,r){return function(t){function e(){if(l-=1,n(s(t,n,i)),r)throw t}return u.alt.trapAsync?function(){return e()}:e()}}var r=u.getInstance().getState(),a=c.local&&c.local.apply(c,[r].concat(i)),o=c.shouldFetch?c.shouldFetch.apply(c,[r].concat(i)):null==a,s=c.interceptResponse||function(t){return t};return o?(l+=1,c.loading&&c.loading(s(null,c.loading,i)),c.remote.apply(c,[r].concat(i)).then(n(c.success),n(c.error,1))):(u.emitChange(),a)},t},{});this.exportPublicMethods(e),this.exportPublicMethods({isLoading:function(){return 0<l}})},exportPublicMethods:function(t){var n=this;o.eachObject(function(t,e){if(!o.isFunction(e))throw new TypeError("exportPublicMethods expects a function");n.publicMethods[t]=e},[t])},emitChange:function(){this.getInstance().emitChange()},on:function(t,e){"error"===t&&(this.handlesOwnErrors=!0);var n=this.lifecycleEvents[t]||(0,a.default)();return(this.lifecycleEvents[t]=n).subscribe(e.bind(this))},bindAction:function(t,e){if(!t)throw new ReferenceError("Invalid action reference passed in");if(!o.isFunction(e))throw new TypeError("bindAction expects a function");if(1<e.length)throw new TypeError("Action handler in store "+this.displayName+" for "+(t.id||t).toString()+" was defined with two parameters. Only a single parameter is passed through the dispatcher, did you mean to pass in an Object instead?");var n=t.id?t.id:t;this.actionListeners[n]=this.actionListeners[n]||[],this.actionListenerHandlers[n]=this.actionListenerHandlers[n]||[],-1===this.actionListenerHandlers[n].indexOf(e)&&(this.actionListenerHandlers[n].push(e),this.actionListeners[n].push(e.bind(this))),this.boundListeners.push(n)},bindActions:function(t){var i=this;o.eachObject(function(t,e){var n=t.replace(/./,function(t){return"on"+t[0].toUpperCase()});if(i[t]&&i[n])throw new ReferenceError("You have multiple action handlers bound to an action: "+t+" and "+n);var r=i[t]||i[n];r&&i.bindAction(e,r)},[t])},bindListeners:function(t){var r=this;o.eachObject(function(t,e){var n=r[t];if(!n)throw new ReferenceError(t+" defined but does not exist in "+r.displayName);Array.isArray(e)?e.forEach(function(t){r.bindAction(t,n)}):r.bindAction(e,n)},[t])}};e.default=s,t.exports=e.default},cGZX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.default=function(e,t,n,r,i){var a=p.uid(e._actionsRegistry,t+"."+n);e._actionsRegistry[a]=1;function o(t){return e.dispatch(a,t,c)}function s(){u.dispatched=!1;var t=u._dispatch.apply(u,arguments);return u.dispatched||void 0===t||h.isPromise(t)||(h.isFunction(t)?t(o,e):o(t)),t}var c={id:a,namespace:t,name:n},u=new d(e,a,r,i,c);s.defer=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];setTimeout(function(){u._dispatch.apply(null,e)})},s.id=a,s.data=c;var l=e.actions[t],f=p.uid(l,n);return l[f]=s};var h=a(n("TnYo")),p=a(n("4mPP")),d=(r(s,[{key:"dispatch",value:function(t){this.dispatched=!0,this.alt.dispatch(this.id,t,this.actionDetails)}}]),s);function s(t,e,n,r,i){o(this,s),this.id=e,this._dispatch=n.bind(this),this.actions=r,this.actionDetails=i,this.alt=t}t.exports=e.default},cYY0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setAppState=function(a,t,o){var s=a.deserialize(t);c.eachObject(function(t,e){var n,r,i=a.stores[t];i&&(n=i.StoreModel.config,r=i.state,n.onDeserialize&&(s[t]=n.onDeserialize(e)||e),c.isMutableObject(r)?(c.eachObject(function(t){return delete r[t]},[r]),c.assign(r,s[t])):i.state=s[t],o(i,i.state))},[s])},e.snapshot=function(o){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return(t.length?t:Object.keys(o.stores)).reduce(function(t,e){var n=e.displayName||e,r=o.stores[n],i=r.StoreModel.config;r.lifecycle("snapshot");var a=i.onSerialize&&i.onSerialize(r.state);return t[n]=a||r.getState(),t},{})},e.saveInitialSnapshot=function(t,e){var n=t.deserialize(t.serialize(t.stores[e].state));t._initSnapshot[e]=n,t._lastSnapshot[e]=n},e.filterSnapshots=function(t,r,e){return e.reduce(function(t,e){var n=e.displayName||e;if(!r[n])throw new ReferenceError(n+" is not a valid store");return t[n]=r[n],t},{})};var c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("TnYo"))},kSgk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function l(t,e,n){for(var r=!0;r;){var i=t,a=e,o=n;u=c=void 0,r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,a);if(void 0!==s){if("value"in s)return s.value;var c=s.get;if(void 0===c)return;return c.call(o)}var u=Object.getPrototypeOf(i);if(null===u)return;t=u,e=a,n=o,r=!0}}var f=Function.prototype.bind,h=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function p(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a,o=n("rl72"),c=i(n("cYY0")),v=i(n("TnYo")),u=i(n("5Oxj")),g=i(n("4mPP")),s=n("cGZX"),b=(a=s)&&a.__esModule?a:{default:a},w=(h(m,[{key:"dispatch",value:function(n,r,i){var a=this;this.batchingFunction(function(){var t=Math.random().toString(18).substr(2,16);if(n.hasOwnProperty("type")&&n.hasOwnProperty("payload")){var e={id:n.type,namespace:n.type,name:n.type};return a.dispatcher.dispatch(g.fsa(t,n.type,n.payload,e))}return n.id&&n.dispatch?g.dispatch(t,n,r,a):a.dispatcher.dispatch(g.fsa(t,n,r,i))})}},{key:"createUnsavedStore",value:function(t){var e=t.displayName||"";u.createStoreConfig(this.config,t);for(var n=u.transformStore(this.storeTransforms,t),r=arguments.length,i=Array(1<r?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return v.isFunction(n)?u.createStoreFromClass.apply(u,[this,n,e].concat(i)):u.createStoreFromObject(this,n,e)}},{key:"createStore",value:function(t,e){var n=e||t.displayName||t.name||"";u.createStoreConfig(this.config,t);var r=u.transformStore(this.storeTransforms,t);!this.stores[n]&&n||(this.stores[n]?g.warn("A store named "+n+" already exists, double check your store names or pass in your own custom identifier for each store"):g.warn("Store name was not specified"),n=g.uid(this.stores,n));for(var i=arguments.length,a=Array(2<i?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];var s=v.isFunction(r)?u.createStoreFromClass.apply(u,[this,r,n].concat(a)):u.createStoreFromObject(this,r,n);return this.stores[n]=s,c.saveInitialSnapshot(this,n),s}},{key:"generateActions",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.createActions(e.reduce(function(t,e){return t[e]=g.dispatchIdentity,t},{name:"global"}))}},{key:"createAction",value:function(t,e,n){return(0,b.default)(this,"global",t,e,n)}},{key:"createActions",value:function(e,t){var n,i,a,o=arguments,r=this,s=arguments.length<=1||void 0===t?{}:t,c={},u=g.uid(this._actionsRegistry,e.displayName||e.name||"Unknown");return v.isFunction(e)?function(){v.assign(c,g.getInternalMethods(e,!0));var t=(d(r,e),h(r,[{key:"generateActions",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){c[t]=g.dispatchIdentity})}}]),r);function r(){y(this,r);for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];l(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,e)}for(n=o.length,i=Array(2<n?n-2:0),a=2;a<n;a++)i[a-2]=o[a];v.assign(c,new(f.apply(t,[null].concat(p(i)))))}():v.assign(c,e),this.actions[u]=this.actions[u]||{},v.eachObject(function(t,e){if(v.isFunction(e)){s[t]=(0,b.default)(r,u,t,e,s);var n=g.formatAsConstant(t);s[n]=s[t].id}},[c]),s}},{key:"takeSnapshot",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=c.snapshot(this,e);return v.assign(this._lastSnapshot,r),this.serialize(r)}},{key:"rollback",value:function(){c.setAppState(this,this.serialize(this._lastSnapshot),function(t){t.lifecycle("rollback"),t.emitChange()})}},{key:"recycle",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.length?c.filterSnapshots(this,this._initSnapshot,e):this._initSnapshot;c.setAppState(this,this.serialize(r),function(t){t.lifecycle("init"),t.emitChange()})}},{key:"flush",value:function(){var t=this.serialize(c.snapshot(this));return this.recycle(),t}},{key:"bootstrap",value:function(t){c.setAppState(this,t,function(t,e){t.lifecycle("bootstrap",e),t.emitChange()})}},{key:"prepare",value:function(t,e){var n={};if(!t.displayName)throw new ReferenceError("Store provided does not have a name");return n[t.displayName]=e,this.serialize(n)}},{key:"addActions",value:function(t,e){for(var n=arguments.length,r=Array(2<n?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];this.actions[t]=Array.isArray(e)?this.generateActions.apply(this,e):this.createActions.apply(this,[e].concat(r))}},{key:"addStore",value:function(t,e){for(var n=arguments.length,r=Array(2<n?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];this.createStore.apply(this,[e,t].concat(r))}},{key:"getActions",value:function(t){return this.actions[t]}},{key:"getStore",value:function(t){return this.stores[t]}}],[{key:"debug",value:function(t,e){var n="alt.js.org";return window[n]=window[n]||[],window[n].push({name:t,alt:e}),e}}]),m);function m(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];y(this,m),this.config=t,this.serialize=t.serialize||JSON.stringify,this.deserialize=t.deserialize||JSON.parse,this.dispatcher=t.dispatcher||new o.Dispatcher,this.batchingFunction=t.batchingFunction||function(t){return t()},this.actions={global:{}},this.stores={},this.storeTransforms=t.storeTransforms||[],this.trapAsync=!1,this._actionsRegistry={},this._initSnapshot={},this._lastSnapshot={}}e.default=w,t.exports=e.default},pOcp:function(t,e,n){"use strict";t.exports=function(){function e(t){var e=n.indexOf(t);0<=e&&n.splice(e,1)}var n=[];return{subscribe:function(t){n.push(t);return{dispose:function(){return e(t)}}},push:function(e){n.forEach(function(t){return t(e)})},unsubscribe:e}}},rl72:function(t,e,n){t.exports.Dispatcher=n("RkTr")}}]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/9ee6-1387f56e.js.map