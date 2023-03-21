// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js"); // [('hashchange', 'load')].forEach(ev =>
 //   window.addEventListener(ev, controlRecipes)
 // );
 // window.addEventListener('hashchange', showRecipie);
 // window.addEventListener('load', showRecipie);
 // Model view controller or presenter, flux
 // Business Logic - code that actually solves the business problem. Logic related to solve the problem that the business set out to solve
 // State - stores data about the application in the browser. Like data fetched from api, or input from user or page currently being viewed by user. UI should be in sync with state
 // HTTP Library - responsibe for making http requests to the server
 // Application Logic(ROuter) - implementation of the application itself. Doing something in the application
 // PResentation Logic (UI layer) - code that is concerend about the physical part of the application
 // MVC - Model View Controller
 /* 
  It contains three parts. The model, view and controller.
  The view is for the presentation logic
  The Model is for the business logic and state. it also contains the http library
  THe controller is for the application logic and it acts as a bridge between the model and views. The contaoller can also be said to dispatch task between the model and the view. The controller is responsible for importing and calling functions
*/ 
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _recipeViewsJs = require("./views/recipeViews.js");
var _recipeViewsJsDefault = parcelHelpers.interopDefault(_recipeViewsJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _runtime = require("regenerator-runtime/runtime");
var _regeneratorRuntime = require("regenerator-runtime");
var _helperJs = require("./helper.js");
var _homeViewJs = require("./views/homeView.js");
var _homeViewJsDefault = parcelHelpers.interopDefault(_homeViewJs);
// import recipeViews from './views/recipeViews.js';
// https://forkify-api.herokuapp.com/v2
if (module.hot) module.hot.accept();
///////////////////////////////////////
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewsJsDefault.default).renderSpinner();
        // 0. Update results view to mark selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultPage());
        // 0. Update bookmarks view
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // 1.) Load Recipe
        await _modelJs.loadRecipe(id);
        // 2.) Render Recipie
        (0, _recipeViewsJsDefault.default).render(_modelJs.state.recipe);
    // controlServings(8);
    } catch (error) {
        (0, _recipeViewsJsDefault.default).renderError();
        console.error(error);
    }
};
// showRecipie();
const controlSearchResults = async function(query) {
    try {
        // 1. Get search query
        query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        (0, _resultsViewJsDefault.default).renderSpinner();
        // 2. Load search results
        await _modelJs.loadSearchResults(query);
        // 3. Render search result
        // resultsView.render(model.state.search.results);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage());
        // 4. Render initial pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        console.error(error);
    }
};
const controlPagination = function(gotoPage) {
    // 3. Render NEW search result
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage(gotoPage));
    // 4. Render NEW initial pagination buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    console.log(newServings);
    // Update recipie servings in state
    _modelJs.updateServings(newServings);
    // Update recipie view
    // recipeViews.render(model.state.recipe);
    (0, _recipeViewsJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // 1.) Add / remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // 2.) Update recpie view
    (0, _recipeViewsJsDefault.default).update(_modelJs.state.recipe);
    // 3.) Render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlHome = function() {
    if (window.location.hash !== "") {
        window.location.hash = "";
        location.reload();
    }
};
const controlUpload = async function(newRecipe) {
    try {
        // render spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        await _modelJs.uploadRecipe(newRecipe);
        // Render recipe
        (0, _recipeViewsJsDefault.default).render(_modelJs.state.recipe);
        // Success message
        (0, _addRecipeViewJsDefault.default).renderSuccessMessage();
        // Rerender bookmarks
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // 0. Update bookmarks view
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        setTimeout(()=>{
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (error) {
        (0, _addRecipeViewJsDefault.default).renderError(error.message);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandler(controlBookmarks);
    (0, _recipeViewsJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewsJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _recipeViewsJsDefault.default).addHandlerBookmark(controlAddBookmark);
    (0, _homeViewJsDefault.default).addHandlerHome(controlHome);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlUpload);
};
init();

},{"core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","./model.js":"Y4A21","./config.js":"k5Hzs","./views/recipeViews.js":"fR5Tr","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","regenerator-runtime/runtime":"dXNgZ","regenerator-runtime":"dXNgZ","./helper.js":"lVRAz","./views/homeView.js":"kxSlf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSXXb":[function(require,module,exports) {
var global = require("6b453677857b459");
var DESCRIPTORS = require("d55c63711c14e9c1");
var defineBuiltInAccessor = require("3d4953f214cddc30");
var regExpFlags = require("5fe28792f5d8d2b3");
var fails = require("8e639a6fbbb77124");
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
});

},{"6b453677857b459":"i8HOC","d55c63711c14e9c1":"92ZIi","3d4953f214cddc30":"592rH","5fe28792f5d8d2b3":"9bz1x","8e639a6fbbb77124":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("8800f29b841fafe5");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"8800f29b841fafe5":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("211774059ee96adc");
var defineProperty = require("44cd83ab6f20ab8e");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"211774059ee96adc":"cTB4k","44cd83ab6f20ab8e":"iJR4w"}],"cTB4k":[function(require,module,exports) {
var uncurryThis = require("3b50a6148b1a70e4");
var fails = require("b21ca1211a1b14e5");
var isCallable = require("8c86591860c3feb3");
var hasOwn = require("a3a474e908715cb0");
var DESCRIPTORS = require("aa3beaa143d4387d");
var CONFIGURABLE_FUNCTION_NAME = require("eed30e25f2baa7b6").CONFIGURABLE;
var inspectSource = require("c0f735189d89d142");
var InternalStateModule = require("d5c302be466e940c");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"3b50a6148b1a70e4":"7GlkT","b21ca1211a1b14e5":"hL6D2","8c86591860c3feb3":"l3Kyn","a3a474e908715cb0":"gC2Q5","aa3beaa143d4387d":"92ZIi","eed30e25f2baa7b6":"l6Kgd","c0f735189d89d142":"9jh7O","d5c302be466e940c":"7AMlF"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("c37a5d56e9f1bfe1");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"c37a5d56e9f1bfe1":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("2576361c0236a265");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2576361c0236a265":"hL6D2"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("125f22c6a393e782");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"125f22c6a393e782":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("a00f77b302c0af91");
var toObject = require("ab91bafae23b10f9");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"a00f77b302c0af91":"7GlkT","ab91bafae23b10f9":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("2286379a10cc5eba");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"2286379a10cc5eba":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("c00147fde128cb70");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"c00147fde128cb70":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("31157749ceb42d67");
var hasOwn = require("59d3abc5210c53eb");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"31157749ceb42d67":"92ZIi","59d3abc5210c53eb":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("9dfd35a1b27f081a");
var isCallable = require("cc013b92b25045a0");
var store = require("a6be152268921eb9");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"9dfd35a1b27f081a":"7GlkT","cc013b92b25045a0":"l3Kyn","a6be152268921eb9":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("55389e39e1ef6988");
var defineGlobalProperty = require("b8ec2f24dc7d9859");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"55389e39e1ef6988":"i8HOC","b8ec2f24dc7d9859":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("604085bbed382117");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"604085bbed382117":"i8HOC"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("c63d71eba2b69585");
var global = require("cd6daf3b294179ba");
var isObject = require("a3138e14492eb948");
var createNonEnumerableProperty = require("ced332b711fea690");
var hasOwn = require("dc868c13142aa8c");
var shared = require("6e4d6eec68403005");
var sharedKey = require("b24710e14b34fac4");
var hiddenKeys = require("61a3474494952442");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"c63d71eba2b69585":"2PZTl","cd6daf3b294179ba":"i8HOC","a3138e14492eb948":"Z0pBo","ced332b711fea690":"8CL42","dc868c13142aa8c":"gC2Q5","6e4d6eec68403005":"l4ncH","b24710e14b34fac4":"eAjGz","61a3474494952442":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("333177672f1ddcd1");
var isCallable = require("1db62c55d9926bac");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"333177672f1ddcd1":"i8HOC","1db62c55d9926bac":"l3Kyn"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("87b857f4d3a1bae7");
var $documentAll = require("f2bad8df999d7ab6");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"87b857f4d3a1bae7":"l3Kyn","f2bad8df999d7ab6":"5MHqB"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("a3d580e316bd865");
var definePropertyModule = require("5011de52621c8608");
var createPropertyDescriptor = require("547b09ef49536008");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a3d580e316bd865":"92ZIi","5011de52621c8608":"iJR4w","547b09ef49536008":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("a139777af15a6cfc");
var IE8_DOM_DEFINE = require("9a143b8c2e4a873e");
var V8_PROTOTYPE_DEFINE_BUG = require("1b331c0f6765c1d1");
var anObject = require("bd6d1d2d1137b74e");
var toPropertyKey = require("9754a917817aa665");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"a139777af15a6cfc":"92ZIi","9a143b8c2e4a873e":"qS9uN","1b331c0f6765c1d1":"ka1Un","bd6d1d2d1137b74e":"4isCr","9754a917817aa665":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("6ec4926897a07635");
var fails = require("47a3eb89425a51f2");
var createElement = require("8c27296d5ab4a562");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"6ec4926897a07635":"92ZIi","47a3eb89425a51f2":"hL6D2","8c27296d5ab4a562":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("a2bd73bcb21d6dc7");
var isObject = require("c8490b7ec1e511da");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"a2bd73bcb21d6dc7":"i8HOC","c8490b7ec1e511da":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("7a7b82e2a5f23ef2");
var fails = require("623e6b5b01d39e79");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"7a7b82e2a5f23ef2":"92ZIi","623e6b5b01d39e79":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("5373ca7e059ed1db");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"5373ca7e059ed1db":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("e3997b7890f48a23");
var isSymbol = require("935a2ab6b7d16f4");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"e3997b7890f48a23":"a2mK1","935a2ab6b7d16f4":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("288823e9d1c8227b");
var isObject = require("9829a652c9293b9f");
var isSymbol = require("cff157202a0c88d3");
var getMethod = require("1e7b29d9fc04806b");
var ordinaryToPrimitive = require("93cb2b11131a6a24");
var wellKnownSymbol = require("5206d19f0e7376f2");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"288823e9d1c8227b":"d7JlP","9829a652c9293b9f":"Z0pBo","cff157202a0c88d3":"4aV4F","1e7b29d9fc04806b":"9Zfiw","93cb2b11131a6a24":"7MME2","5206d19f0e7376f2":"gTwyA"}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("b8ff15a86ce4a9e3");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"b8ff15a86ce4a9e3":"i16Dq"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("ad27f0e0ce66fd50");
var isCallable = require("d38a4dcfbc79611a");
var isPrototypeOf = require("6dbf2374d713cb5b");
var USE_SYMBOL_AS_UID = require("346bbec03ca08a31");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"ad27f0e0ce66fd50":"6ZUSY","d38a4dcfbc79611a":"l3Kyn","6dbf2374d713cb5b":"3jtKQ","346bbec03ca08a31":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("52afd4aa5cb74da8");
var isCallable = require("45ae374fa24aba4f");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"52afd4aa5cb74da8":"i8HOC","45ae374fa24aba4f":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("51724d24306ae04c");
module.exports = uncurryThis({}.isPrototypeOf);

},{"51724d24306ae04c":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("5ca557d38f7edc0f");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"5ca557d38f7edc0f":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("5a18b442131246b4");
var fails = require("2b7081ce0a9c3301");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"5a18b442131246b4":"bjFlO","2b7081ce0a9c3301":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("8bf87086ea51cc4f");
var userAgent = require("8c587c9446231e4f");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"8bf87086ea51cc4f":"i8HOC","8c587c9446231e4f":"73xBt"}],"73xBt":[function(require,module,exports) {
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("f6dd037a3b1e6f1d");
var isNullOrUndefined = require("186b3dce1b0b13c4");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"f6dd037a3b1e6f1d":"gOMir","186b3dce1b0b13c4":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("c4ffe75f45c5d530");
var tryToString = require("dc5573655fee27ef");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"c4ffe75f45c5d530":"l3Kyn","dc5573655fee27ef":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("9e1e707201dc2f11");
var isCallable = require("841433af8e12b361");
var isObject = require("b7bf4e3053c8d69f");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"9e1e707201dc2f11":"d7JlP","841433af8e12b361":"l3Kyn","b7bf4e3053c8d69f":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("8ddee155f2159ece");
var shared = require("7f0d82a900319763");
var hasOwn = require("9c1305d2d7a44805");
var uid = require("f6e24af2d7898338");
var NATIVE_SYMBOL = require("b790fb2633ef05bd");
var USE_SYMBOL_AS_UID = require("fd41ab1c92b7494c");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"8ddee155f2159ece":"i8HOC","7f0d82a900319763":"i1mHK","9c1305d2d7a44805":"gC2Q5","f6e24af2d7898338":"a3SEE","b790fb2633ef05bd":"8KyTD","fd41ab1c92b7494c":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("79f2f66d9cfc10c2");
var store = require("7a1ec8718e34247c");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.28.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"79f2f66d9cfc10c2":"5ZsyC","7a1ec8718e34247c":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("1b672dd49350f233");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"1b672dd49350f233":"7GlkT"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"eAjGz":[function(require,module,exports) {
var shared = require("cd73f924d9db997");
var uid = require("4f61e2c6a73a2199");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"cd73f924d9db997":"i1mHK","4f61e2c6a73a2199":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("19bb1ed0a6b41244");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"19bb1ed0a6b41244":"4isCr"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("ff48f5d484284f98");
require("e85571503c6a77b2");

},{"ff48f5d484284f98":"fOGFr","e85571503c6a77b2":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("1d2caa99b08a95b4");
var global = require("36ea2051901370f2");
var clearImmediate = require("a08c8e37317c669b").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"1d2caa99b08a95b4":"dIGt4","36ea2051901370f2":"i8HOC","a08c8e37317c669b":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("7c363a64d8c04efa");
var getOwnPropertyDescriptor = require("17f503d6f8ca5a4e").f;
var createNonEnumerableProperty = require("50dde9a78eab7db4");
var defineBuiltIn = require("b93357c673900b80");
var defineGlobalProperty = require("d11a771e5126090c");
var copyConstructorProperties = require("260e4a5979ad15b6");
var isForced = require("cb456f5950d98b8f");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"7c363a64d8c04efa":"i8HOC","17f503d6f8ca5a4e":"lk5NI","50dde9a78eab7db4":"8CL42","b93357c673900b80":"6XwEX","d11a771e5126090c":"ggjnO","260e4a5979ad15b6":"9Z12i","cb456f5950d98b8f":"6uTCZ"}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("443ce247d4d95401");
var call = require("f076fb5a52a76d44");
var propertyIsEnumerableModule = require("86a7a4d6be7d2416");
var createPropertyDescriptor = require("ec14992c00629288");
var toIndexedObject = require("e56c8ed647cad258");
var toPropertyKey = require("828418099420b1f3");
var hasOwn = require("7bc799926876cddd");
var IE8_DOM_DEFINE = require("5dbf37995925d6d4");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"443ce247d4d95401":"92ZIi","f076fb5a52a76d44":"d7JlP","86a7a4d6be7d2416":"7SuiS","ec14992c00629288":"1lpav","e56c8ed647cad258":"jLWwQ","828418099420b1f3":"5XWKd","7bc799926876cddd":"gC2Q5","5dbf37995925d6d4":"qS9uN"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("8f3e9977008800fb");
var requireObjectCoercible = require("422112d7c2d093c5");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"8f3e9977008800fb":"kPk5h","422112d7c2d093c5":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("862e93c363d368a");
var fails = require("993b34ac83f071cc");
var classof = require("af4bbd3c61a86454");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"862e93c363d368a":"7GlkT","993b34ac83f071cc":"hL6D2","af4bbd3c61a86454":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("a72941f9ef11d91e");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"a72941f9ef11d91e":"7GlkT"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("3db48b1035cb07de");
var definePropertyModule = require("9518a07d820316d3");
var makeBuiltIn = require("99fec1543b272aa2");
var defineGlobalProperty = require("d06502e1771af156");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"3db48b1035cb07de":"l3Kyn","9518a07d820316d3":"iJR4w","99fec1543b272aa2":"cTB4k","d06502e1771af156":"ggjnO"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("e0e7846773d18fa5");
var ownKeys = require("3c0d5b8524e5551d");
var getOwnPropertyDescriptorModule = require("2ff93ef7779c937");
var definePropertyModule = require("4315e6d598ba6390");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"e0e7846773d18fa5":"gC2Q5","3c0d5b8524e5551d":"1CX1A","2ff93ef7779c937":"lk5NI","4315e6d598ba6390":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("7dc215d20d34b66b");
var uncurryThis = require("30ea4b68a3d58511");
var getOwnPropertyNamesModule = require("1b2bf7d87ed6fce3");
var getOwnPropertySymbolsModule = require("6dc345bf80640486");
var anObject = require("b6b3c5027f3dc47");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"7dc215d20d34b66b":"6ZUSY","30ea4b68a3d58511":"7GlkT","1b2bf7d87ed6fce3":"fjY04","6dc345bf80640486":"4DWO3","b6b3c5027f3dc47":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("2732bc8659a0b970");
var enumBugKeys = require("ad4bcafbfbfca2be");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"2732bc8659a0b970":"hl5T1","ad4bcafbfbfca2be":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("24cea5ba82b234c0");
var hasOwn = require("4ced3bc765d39894");
var toIndexedObject = require("4b1605f448dcbb96");
var indexOf = require("3d177d246f665376").indexOf;
var hiddenKeys = require("59533ad5faa1e22e");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"24cea5ba82b234c0":"7GlkT","4ced3bc765d39894":"gC2Q5","4b1605f448dcbb96":"jLWwQ","3d177d246f665376":"n5IsC","59533ad5faa1e22e":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("cb8681310ac43cfa");
var toAbsoluteIndex = require("1f72e4fc372c491b");
var lengthOfArrayLike = require("525e497329fe20e9");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"cb8681310ac43cfa":"jLWwQ","1f72e4fc372c491b":"5yh27","525e497329fe20e9":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("71101de0f28ede81");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"71101de0f28ede81":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("acc6d14c691523b3");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"acc6d14c691523b3":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("eb6d8ac64b3584b");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"eb6d8ac64b3584b":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("b4ff1f3aae5a398");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"b4ff1f3aae5a398":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("89a058525c062dc9");
var isCallable = require("c2c33a9aa2f7c2b4");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"89a058525c062dc9":"hL6D2","c2c33a9aa2f7c2b4":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("7fadade3c9c481d4");
var apply = require("7cd53658cea7d7be");
var bind = require("df7dab6d9568d821");
var isCallable = require("a686d0292093656a");
var hasOwn = require("26ff023216fe0bd1");
var fails = require("b7a328ab23d92df9");
var html = require("abca5ab6e4df879e");
var arraySlice = require("5bfe09ebf72f8ce4");
var createElement = require("64e6a76a0a1be60c");
var validateArgumentsLength = require("8ca404ced8ddae2");
var IS_IOS = require("456aa37645bbc95d");
var IS_NODE = require("24f997b681e79fbf");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"7fadade3c9c481d4":"i8HOC","7cd53658cea7d7be":"148ka","df7dab6d9568d821":"7vpmS","a686d0292093656a":"l3Kyn","26ff023216fe0bd1":"gC2Q5","b7a328ab23d92df9":"hL6D2","abca5ab6e4df879e":"2pze4","5bfe09ebf72f8ce4":"RsFXo","64e6a76a0a1be60c":"4bOHl","8ca404ced8ddae2":"b9O3D","456aa37645bbc95d":"bzGah","24f997b681e79fbf":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("7358ad089e2d1c0");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"7358ad089e2d1c0":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("5962c2f34fd9e5c5");
var aCallable = require("3684e4d1ba1b075c");
var NATIVE_BIND = require("375b5e1af1507679");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"5962c2f34fd9e5c5":"5Hioa","3684e4d1ba1b075c":"gOMir","375b5e1af1507679":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("43bb6ebe99ebf2c9");
var uncurryThis = require("5a21f272728598da");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"43bb6ebe99ebf2c9":"bdfmm","5a21f272728598da":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("1c88584383f95cd");
module.exports = getBuiltIn("document", "documentElement");

},{"1c88584383f95cd":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("50ce61c36154acea");
module.exports = uncurryThis([].slice);

},{"50ce61c36154acea":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("9ccbe5dcd4b72fa3");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"9ccbe5dcd4b72fa3":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var process = require("b04bb1f48961dff2");
var classof = require("e3327d9ec5860444");
module.exports = typeof process != "undefined" && classof(process) == "process";

},{"b04bb1f48961dff2":"d5jf4","e3327d9ec5860444":"bdfmm"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"l7FDS":[function(require,module,exports) {
var $ = require("fd8f5f9e9fc36b00");
var global = require("1a57fc4c7e42ef0c");
var setTask = require("11a1434ede3c421f").set;
var schedulersFix = require("50b4dcfbad62c424");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"fd8f5f9e9fc36b00":"dIGt4","1a57fc4c7e42ef0c":"i8HOC","11a1434ede3c421f":"7jDg7","50b4dcfbad62c424":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("7e6e491285d051d4");
var apply = require("240509b1c851e242");
var isCallable = require("91a9fc33752888b6");
var ENGINE_IS_BUN = require("401eebdebd3acd55");
var USER_AGENT = require("d20bab595a4b54bb");
var arraySlice = require("bf9f5c74022fc9f1");
var validateArgumentsLength = require("54395cedd95c5123");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"7e6e491285d051d4":"i8HOC","240509b1c851e242":"148ka","91a9fc33752888b6":"l3Kyn","401eebdebd3acd55":"2BA6V","d20bab595a4b54bb":"73xBt","bf9f5c74022fc9f1":"RsFXo","54395cedd95c5123":"b9O3D"}],"2BA6V":[function(require,module,exports) {
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _regeneratorRuntime = require("regenerator-runtime");
var _config = require("./config");
var _helper = require("./helper");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultPerPage: (0, _config.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return {
        id: recipe.id,
        ingredients: recipe.ingredients,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        title: recipe.title,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}${id}?key=${(0, _config.KEY)}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (error) {
        console.error(`${error} 2.`);
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}?search=${query}&key=${(0, _config.KEY)}`);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                image: rec.image_url,
                publisher: rec.publisher,
                title: rec.title,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
const getSearchResultPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * (0, _config.RES_PER_PAGE); //0;
    const end = page * (0, _config.RES_PER_PAGE); //10
    return state.search.results.slice(start, end);
};
const updateServings = function(newservings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newservings / state.recipe.servings;
    // nQT = (oQT * nServ) / oServ;
    });
    state.recipe.servings = newservings;
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // add bookmark
    state.bookmarks.push(recipe);
    // mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    // persist bookmarks
    persistBookmarks();
};
const deleteBookmark = function(id) {
    // Delete Boomark
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    // Mark current recipe as not bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    // persist bookmarks
    persistBookmarks();
};
const retrieveData = function() {
    const data = localStorage.getItem("bookmarks");
    if (data) state.bookmarks = JSON.parse(data);
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            const ingArr = ing[1].split(",");
            if (ingArr.length !== 3) throw new Error("Wrong ingredient format! Please use the correct format.");
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: +newRecipe.servings,
            cooking_time: +newRecipe.cookingTime,
            title: newRecipe.title,
            ingredients
        };
        const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}?key=${(0, _config.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (error) {
        throw error;
    }
};
retrieveData(); // LIstening for events in mvc using the publisher subscriber pattern. Events should be handled in the controller and should be listened for in the view otherwise DOM elements would be needed in the controller which would be bad practice.
 // The publisher knows when to react and the subscriber knows what to do when the event is triggered(code that wants to react).
 // To implement this, we need to pass in the subscriber function as an argument for the publisher. When the program loads an init function is called which then calls the publisher from the view. As we call the publisher, we pass in the subscriber as an argument

},{"regenerator-runtime":"dXNgZ","./config":"k5Hzs","./helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = "b55fddeb-857f-47b9-90f7-0bac1c548460";
const MODAL_CLOSE_SEC = 1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
// COntains functions that will be reused over and over in the project.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(()=>{
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.status} (${res.status})`);
        return data;
    } catch (error) {
        throw error;
    }
}; /* export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.status} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.status} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};
 */ 

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fR5Tr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fraction = require("@mathematics/fraction");
var _fractionDefault = parcelHelpers.interopDefault(_fraction);
class recipeViews extends (0, _viewsDefault.default) {
    _parentEl = document.querySelector(".recipe");
    _errorMessage = "Recipe isn't found, try another one .";
    #successMessage;
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--tiny");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo < 1) return;
            handler(updateTo);
        });
    }
    addHandlerBookmark(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    #generateMarkup() {
        return `
    <figure class="recipe__fig">
      <img src="${this.returnData.image}" alt="${this.returnData.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.returnData.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this.returnData.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this.returnData.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this.returnData.servings - 1}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this.returnData.servings + 1}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this.returnData.key ? "" : "hidden"}">
        <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
        </svg>
      </div>
      
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this.returnData.bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.returnData.ingredients.map(this.#generateMarkupIngredient).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this.returnData.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.returnData.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
    }
    #generateMarkupIngredient(ing) {
        return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${new (0, _fractionDefault.default)(ing.quantity)}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
  `;
    }
    get getMarkup() {
        return this.#generateMarkup();
    }
}
exports.default = new recipeViews();

},{"./views":"8t69M","url:../../img/icons.svg":"loVOp","@mathematics/fraction":"gDJcX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8t69M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regeneratorRuntime = require("regenerator-runtime");
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    #data;
    /**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} render If false, creates markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render is false
   * @this {Object} View instance
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this.#data = data;
        const markup = this.getMarkup;
        if (!render) return markup;
        this.#clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
        this.update(data);
    }
    get returnData() {
        return this.#data;
    }
    update(data) {
        // if (!data || (Array.isArray(data) && data.length === 0))
        //   return this.renderError();
        this.#data = data;
        const newMarkup = this.getMarkup;
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll("*"));
        const curElements = Array.from(this._parentEl.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl)); // Checking if the element content in the new dom is the same as the current dom
            // Update changes text
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") // curEl = element already on the page
            // console.log(curEl, newEl.isEqualNode(curEl));
            curEl.textContent = newEl.textContent;
            // Update changed attributes
            if (!newEl.isEqualNode(curEl)) // console.log(newEl.attributes); // it returns the attributes of all the elements that have changed.
            Array.from(newEl.attributes).forEach((attr)=>{
                //replace attributes in the current element with attributes coming from the new element
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    #clear() {
        this._parentEl.innerHTML = " ";
    }
    renderSpinner() {
        const markup = `
              <div class="spinner">
                <svg>
                  <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
                </svg>
              </div>
            `;
        this.#clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this.#clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderSuccessMessage(message = this._successMessage) {
        const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this.#clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"regenerator-runtime":"dXNgZ","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("596b857ba47c8ad4").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"596b857ba47c8ad4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gDJcX":[function(require,module,exports) {
class Fraction {
    /**
   * @constructor
   * @param {number|Fraction} [numerator]
   * @param {number} [denominator]
   * @throws {Error} - if the given denominator is zero.
   * @returns {Fraction}
   * @description Default, copy, single arg, basic constructor.
   *  Always keep sign on the numerator. If denominator gets negative value, then shift sign to the numerator.
   */ constructor(numerator, denominator){
        // Defaults to 0/1 = 0 if no valid arguments have passed.
        this._numerator = 0;
        this._denominator = 1;
        // Two numbers are passed.
        if (!isNaN(arguments[0]) && !isNaN(arguments[1])) {
            if (Number(arguments[1] === 0)) throw new Error("Cannot divide by zero.");
            this._numerator = Number(arguments[0]);
            this._denominator = Number(arguments[1]);
            // shift denominator sign to the numerator.
            if (this._denominator < 0) {
                this._numerator *= -1;
                this._denominator *= -1;
            }
        } else if (!isNaN(arguments[0])) this._numerator = Number(arguments[0]);
        else if (arguments[0] instanceof Fraction) {
            this._numerator = arguments[0]._numerator;
            this._denominator = arguments[0]._denominator;
        }
        this._handleDecimal();
        this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Add.
   */ add(that) {
        Fraction._validateFractionArg(that);
        this._numerator = this._numerator * that._denominator + this._denominator * that._numerator;
        this._denominator = this._denominator * that._denominator;
        return this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Subtract.
   */ subtract(that) {
        Fraction._validateFractionArg(that);
        this._numerator = this._numerator * that._denominator - this._denominator * that._numerator;
        this._denominator = this._denominator * that._denominator;
        return this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Multiply.
   */ multiply(that) {
        Fraction._validateFractionArg(that);
        this._numerator *= that._numerator;
        this._denominator *= that._denominator;
        return this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Divide.
   */ divide(that) {
        Fraction._validateFractionArg(that);
        return this.multiply(that.inverse());
    }
    /**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Inverse.
   *  Keep the sign on numerator.
   */ inverse() {
        let sign = 1;
        if (this._numerator < 0) sign = -1;
        return new Fraction(sign * this._denominator, sign * this._numerator);
    }
    /**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Clone.
   */ clone() {
        return new Fraction(this);
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Copy the values from the given Fraction.
   */ copy(that) {
        Fraction._validateFractionArg(that);
        this._numerator = that._numerator;
        this._denominator = that._denominator;
        return this;
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {boolean}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Checks whether the given Fraction is equal or not.
   */ equals(that) {
        Fraction._validateFractionArg(that);
        return this._numerator === that._numerator && this._denominator === that._denominator;
    }
    /**
   * @public
   * @returns {number}
   * @description Get the value.
   */ value() {
        return this._numerator / this._denominator;
    }
    /**
   * @public
   * @returns {string}
   * @description Convert to string.
   */ toString() {
        return this._numerator + "/" + this._denominator;
    }
    /**
   * @public
   * @returns {number}
   * @description Compute gcd (Euclidean algorithm).
   *  Compute based on absolute values to handle negative numbers as well.
   */ gcd() {
        let a = Math.abs(this._numerator);
        let b = Math.abs(this._denominator);
        if (a === 0) return b;
        while(b !== 0){
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    /**
   * @public
   * @param {any} that
   * @returns {boolean}
   * @description Checks whether the given instance is a Fraction instance.
   */ static isFraction(that) {
        return that instanceof Fraction;
    }
    /**
   * @private
   * @returns {void}
   * @description Handle decimal.
   */ _handleDecimal() {
        if (!Number.isInteger(this._numerator) || !Number.isInteger(this._denominator)) {
            const f1 = Fraction._numberToFraction(this._numerator);
            const f2 = Fraction._numberToFraction(this._denominator);
            const fraction = f1.divide(f2);
            this._numerator = fraction._numerator;
            this._denominator = fraction._denominator;
        }
    }
    /**
   * @private
   * @returns {Fraction}
   * @description Normalize.
   */ _normalize() {
        const gcd = this.gcd();
        this._numerator /= gcd;
        this._denominator /= gcd;
        return this;
    }
    /**
   * @private
   * @param {any} that
   * @returns {void}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Validate Fraction argument.
   */ static _validateFractionArg(that) {
        if (!Fraction.isFraction(that)) throw new Error("Should be an instance of Fraction.");
    }
    /**
   * @private
   * @param {number} number
   * @returns {Fraction}
   * @description Number to fraction.
   */ static _numberToFraction(number) {
        const _number = String(number);
        const decimalPointIndex = _number.indexOf(".");
        if (decimalPointIndex !== -1) {
            const whole = _number.substring(0, decimalPointIndex);
            const isNegative = whole.indexOf("-") !== -1;
            const remaining = _number.substring(decimalPointIndex + 1, _number.length);
            const nthPlace = Math.pow(10, remaining.length);
            return isNegative ? new Fraction(Number(whole)).subtract(new Fraction(Number(remaining), nthPlace)) : new Fraction(Number(whole)).add(new Fraction(Number(remaining), nthPlace));
        } else return new Fraction(Number(number));
    }
}
module.exports = Fraction;

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentEl = document.querySelector(".search");
    getQuery() {
        const query = this.#parentEl.querySelector(".search__field").value;
        this.#clearInput();
        return query;
    }
    #clearInput() {
        this.#parentEl.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this.#parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class ResultsView extends (0, _viewsDefault.default) {
    _parentEl = document.querySelector(".results");
    _errorMessage = "Recipe not found, try another .";
    //   #generateMarkup() {
    //     return this.returnData.map(this.#generateMarkupPreview).join('');
    //   }
    //   #generateMarkupPreview(result) {
    //     const id = window.location.hash.slice(1);
    //     return `
    //     <li class="preview">
    //         <a class="preview__link ${
    //           result.id === id ? 'preview__link--active' : ''
    //         }" href="#${result.id}">
    //         <figure class="preview__fig">
    //             <img src="${result.image}" alt="Test" />
    //         </figure>
    //         <div class="preview__data">
    //             <h4 class="preview__title">${result.title}</h4>
    //             <p class="preview__publisher">${result.publisher}</p>
    //         </div>
    //         </a>
    //     </li>
    // `;
    //   }
    #generateMarkup() {
        return this.returnData.map((result)=>(0, _previewViewDefault.default).render(result, false)).join("");
    }
    get getMarkup() {
        return this.#generateMarkup();
    }
}
exports.default = new ResultsView();

},{"url:../../img/icons.svg":"loVOp","./views":"8t69M","./previewView":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class PreviewView extends (0, _viewsDefault.default) {
    _parentEl = "";
    #generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
    <li class="preview">
        <a class="preview__link ${this.returnData.id === id ? "preview__link--active" : ""}" href="#${this.returnData.id}">
        <figure class="preview__fig">
            <img src="${this.returnData.image}" alt="Test" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${this.returnData.title}</h4>
            <p class="preview__publisher">${this.returnData.publisher}</p>
           
            <div class="recipe__user-generated ${this.returnData.key ? "" : "hidden"}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
        </div>
        </a>
    </li>
    `;
    }
    get getMarkup() {
        return this.#generateMarkup();
    }
}
exports.default = new PreviewView();

},{"url:../../img/icons.svg":"loVOp","./views":"8t69M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class PaginationView extends (0, _viewsDefault.default) {
    _parentEl = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const gotoPage = +btn.dataset.goto;
            handler(gotoPage);
        });
    }
    #generateMarkup() {
        const curPage = this.returnData.page;
        const numPags = Math.ceil(this.returnData.results.length / this.returnData.resultPerPage);
        // Page 1, and there are other pages
        if (curPage === 1 && numPags > 1) return this.#generateMarkupButton(curPage, "next");
        // last
        if (curPage === numPags && numPags > 1) return this.#generateMarkupButton(curPage, "prev");
        // others
        if (curPage < numPags) return this.#generateMarkupButton(curPage, "next") + this.#generateMarkupButton(curPage, "prev");
    }
    #generateMarkupButton(page, type) {
        return `
      <button data-goto="${type === "next" ? page + 1 : page - 1}" class="btn--inline pagination__btn--${type}">
          <span>Page ${type === "next" ? page + 1 : page - 1}</span>
          <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-${type === "next" ? "right" : "left"}"></use>
          </svg>
      </button>
    `;
    }
    get getMarkup() {
        return this.#generateMarkup();
    }
}
exports.default = new PaginationView();

},{"url:../../img/icons.svg":"loVOp","./views":"8t69M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class BookmarksView extends (0, _viewsDefault.default) {
    _parentEl = document.querySelector(".bookmarks__list");
    _errorMessage = "Bookmarks not found. Try adding a recipe to bookmark .";
    //   #generateMarkup() {
    //     return this.returnData.map(this.#generateMarkupPreview).join('');
    //   }
    //   #generateMarkupPreview(result) {
    //     const id = window.location.hash.slice(1);
    //     return `
    //     <li class="preview">
    //         <a class="preview__link ${
    //           result.id === id ? 'preview__link--active' : ''
    //         }" href="#${result.id}">
    //         <figure class="preview__fig">
    //             <img src="${result.image}" alt="Test" />
    //         </figure>
    //         <div class="preview__data">
    //             <h4 class="preview__title">${result.title}</h4>
    //             <p class="preview__publisher">${result.publisher}</p>
    //         </div>
    //         </a>
    //     </li>
    // `;
    //   }
    addHandler(handler) {
        window.addEventListener("load", handler);
    }
    #generateMarkup() {
        return this.returnData.map((bookmark)=>(0, _previewViewDefault.default).render(bookmark, false)).join(""); //render method returns the markup as a string
    }
    get getMarkup() {
        return this.#generateMarkup();
    }
}
exports.default = new BookmarksView();

},{"url:../../img/icons.svg":"loVOp","./views":"8t69M","./previewView":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class AddRecipeView extends (0, _viewsDefault.default) {
    _parentEl = document.querySelector(".upload");
    _successMessage = "Recipe successfully uploaded";
    #window = document.querySelector(".add-recipe-window");
    #overlay = document.querySelector(".overlay");
    #btnClose = document.querySelector(".btn--close-modal");
    #btnOpen = document.querySelector(".nav__btn--add-recipe");
    constructor(){
        super();
        this.#addHandlerShowWindow();
        this.#addHandlerHideWindow();
    }
    toggleWindow() {
        this.#overlay.classList.toggle("hidden");
        this.#window.classList.toggle("hidden");
    }
    #addHandlerShowWindow() {
        this.#btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    #addHandlerHideWindow() {
        this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    #generateMarkup() {}
    get getMarkup() {
        return this.#generateMarkup();
    }
}
exports.default = new AddRecipeView();

},{"url:../../img/icons.svg":"loVOp","./views":"8t69M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxSlf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class recipeViews extends (0, _viewsDefault.default) {
    _parentEl = document.querySelector(".header");
    addHandlerHome(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".header__logo");
            if (!btn) return;
            handler();
        });
    }
}
exports.default = new recipeViews();

},{"./views":"8t69M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
