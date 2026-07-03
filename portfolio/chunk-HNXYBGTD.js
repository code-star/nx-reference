import * as a from "@angular/core";
import { InjectionToken as p, inject as c, DOCUMENT as u } from "@angular/core";
var h = null;
function i() { return h; }
function m(o) { h ??= o; }
var s = class {
}, f = (() => { class o {
    historyGo(t) { throw new Error(""); }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: () => c(g), providedIn: "platform" });
} return o; })(), w = new p(""), g = (() => { class o extends f {
    _location;
    _history;
    _doc = c(u);
    constructor() { super(), this._location = window.location, this._history = window.history; }
    getBaseHrefFromDOM() { return i().getBaseHref(this._doc); }
    onPopState(t) { let e = i().getGlobalEventTarget(this._doc, "window"); return e.addEventListener("popstate", t, !1), () => e.removeEventListener("popstate", t); }
    onHashChange(t) { let e = i().getGlobalEventTarget(this._doc, "window"); return e.addEventListener("hashchange", t, !1), () => e.removeEventListener("hashchange", t); }
    get href() { return this._location.href; }
    get protocol() { return this._location.protocol; }
    get hostname() { return this._location.hostname; }
    get port() { return this._location.port; }
    get pathname() { return this._location.pathname; }
    get search() { return this._location.search; }
    get hash() { return this._location.hash; }
    set pathname(t) { this._location.pathname = t; }
    pushState(t, e, n) { this._history.pushState(t, e, n); }
    replaceState(t, e, n) { this._history.replaceState(t, e, n); }
    forward() { this._history.forward(); }
    back() { this._history.back(); }
    historyGo(t = 0) { this._history.go(t); }
    getState() { return this._history.state; }
    static \u0275fac = function (e) { return new (e || o); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: () => new o, providedIn: "platform" });
} return o; })();
function I(o, r) { r = encodeURIComponent(r); for (let t of o.split(";")) {
    let e = t.indexOf("="), [n, d] = e == -1 ? [t, ""] : [t.slice(0, e), t.slice(e + 1)];
    if (n.trim() === r)
        return decodeURIComponent(d);
} return null; }
var l = class {
};
export { i as a, m as b, s as c, f as d, w as e, g as f, I as g, l as h };
/*! Bundled license information:

@angular/common/fesm2022/_platform_location-chunk.mjs:
@angular/common/fesm2022/_xhr-chunk.mjs:
  (**
   * @license Angular v21.2.17
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
