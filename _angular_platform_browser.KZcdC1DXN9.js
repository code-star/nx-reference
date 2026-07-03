import { a as I, b as W, d as B } from "@nf-internal/chunk-4CLCTAJ7";
import { \u0275DomAdapter as Pe, \u0275setRootDomAdapter as ke, \u0275parseCookieValue as Ue, \u0275getDOM as ce, DOCUMENT as le, CommonModule as je, XhrFactory as xe, \u0275PLATFORM_BROWSER_ID as Be } from "@angular/common";
import * as h from "@angular/core";
import { \u0275global as v, \u0275RuntimeError as Fe, InjectionToken as Yt, ApplicationModule as Ve, \u0275INJECTOR_SCOPE as ze, ErrorHandler as de, RendererFactory2 as $e, \u0275TESTABILITY_GETTER as Ge, Testability as Y, \u0275TESTABILITY as Ye, \u0275internalCreateApplication as ue, createPlatformFactory as Ze, platformCore as Je, PLATFORM_ID as Ke, PLATFORM_INITIALIZER as Xe, \u0275resolveComponentResources as Zt, \u0275setDocument as We } from "@angular/core";
import { DOCUMENT as $, \u0275getDOM as De } from "@angular/common";
import * as l from "@angular/core";
import { InjectionToken as te, \u0275RuntimeError as V, APP_ID as ne, CSP_NONCE as re, PLATFORM_ID as Re, ViewEncapsulation as E, \u0275TracingService as Ce, RendererStyleFlags2 as O, \u0275allLeavingAnimations as be } from "@angular/core";
var g = class {
    _doc;
    constructor(r) { this._doc = r; }
    manager;
}, M = (() => { class n extends g {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, o, s) { return e.addEventListener(t, o, s), () => this.removeEventListener(e, t, o, s); }
    removeEventListener(e, t, o, s) { return e.removeEventListener(t, o, s); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject($)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), S = new te(""), P = (() => { class n {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let o = e.filter(i => !(i instanceof M)); this._plugins = o.slice().reverse(); let s = e.find(i => i instanceof M); s && this._plugins.push(s); }
    addEventListener(e, t, o, s) { return this._findPluginFor(t).addEventListener(e, t, o, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new V(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(S), l.\u0275\u0275inject(l.NgZone)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), N = "ng-app-id";
function q(n) { for (let r of n)
    r.remove(); }
function Q(n, r) { let e = r.createElement("style"); return e.textContent = n, e; }
function Ae(n, r, e, t) { let o = n.head?.querySelectorAll(`style[${N}="${r}"],link[${N}="${r}"]`); if (o)
    for (let s of o)
        s.removeAttribute(N), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); }
function z(n, r) { let e = r.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e; }
var k = (() => { class n {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, o, s = {}) { this.doc = e, this.appId = t, this.nonce = o, Ae(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let o of e)
        this.addUsage(o, this.inline, Q); t?.forEach(o => this.addUsage(o, this.external, z)); }
    removeStyles(e, t) { for (let o of e)
        this.removeUsage(o, this.inline); t?.forEach(o => this.removeUsage(o, this.external)); }
    addUsage(e, t, o) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, o(e, this.doc))) }); }
    removeUsage(e, t) { let o = t.get(e); o && (o.usage--, o.usage <= 0 && (q(o.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        q(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: o }] of this.inline)
        o.push(this.addElement(e, Q(t, this.doc))); for (let [t, { elements: o }] of this.external)
        o.push(this.addElement(e, z(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(N, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject($), l.\u0275\u0275inject(ne), l.\u0275\u0275inject(re, 8), l.\u0275\u0275inject(Re)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), F = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, G = /%COMP%/g;
var oe = "%COMP%", Ie = `_nghost-${oe}`, Oe = `_ngcontent-${oe}`, Ne = !0, se = new te("", { factory: () => Ne });
function Le(n) { return Oe.replace(G, n); }
function He(n) { return Ie.replace(G, n); }
function ie(n, r) { return r.map(e => e.replace(G, n)); }
var U = (() => { class n {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    constructor(e, t, o, s, i, a, c = null, u = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = a, this.nonce = c, this.tracingService = u, this.defaultRenderer = new _(e, i, a, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && (t.encapsulation === E.ShadowDom || t.encapsulation === E.ExperimentalIsolatedShadowDom) && (t = W(I({}, t), { encapsulation: E.Emulated })); let o = this.getOrCreateRenderer(e, t); return o instanceof H ? o.applyToHost(e) : o instanceof T && o.applyStyles(), o; }
    getOrCreateRenderer(e, t) { let o = this.rendererByCompId, s = o.get(t.id); if (!s) {
        let i = this.doc, a = this.ngZone, c = this.eventManager, u = this.sharedStylesHost, f = this.removeStylesOnCompDestroy, p = this.tracingService;
        switch (t.encapsulation) {
            case E.Emulated:
                s = new H(c, u, t, this.appId, f, i, a, p);
                break;
            case E.ShadowDom: return new L(c, e, t, i, a, this.nonce, p, u);
            case E.ExperimentalIsolatedShadowDom: return new L(c, e, t, i, a, this.nonce, p);
            default:
                s = new T(c, u, t, f, i, a, p);
                break;
        }
        o.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(P), l.\u0275\u0275inject(k), l.\u0275\u0275inject(ne), l.\u0275\u0275inject(se), l.\u0275\u0275inject($), l.\u0275\u0275inject(l.NgZone), l.\u0275\u0275inject(re), l.\u0275\u0275inject(Ce, 8)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), _ = class {
    eventManager;
    doc;
    ngZone;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, t, o) { this.eventManager = r, this.doc = e, this.ngZone = t, this.tracingService = o; }
    destroy() { }
    destroyNode = null;
    createElement(r, e) { return e ? this.doc.createElementNS(F[e] || e, r) : this.doc.createElement(r); }
    createComment(r) { return this.doc.createComment(r); }
    createText(r) { return this.doc.createTextNode(r); }
    appendChild(r, e) { (ee(r) ? r.content : r).appendChild(e); }
    insertBefore(r, e, t) { r && (ee(r) ? r.content : r).insertBefore(e, t); }
    removeChild(r, e) { e.remove(); }
    selectRootElement(r, e) { let t = typeof r == "string" ? this.doc.querySelector(r) : r; if (!t)
        throw new V(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(r) { return r.parentNode; }
    nextSibling(r) { return r.nextSibling; }
    setAttribute(r, e, t, o) { if (o) {
        e = o + ":" + e;
        let s = F[o];
        s ? r.setAttributeNS(s, e, t) : r.setAttribute(e, t);
    }
    else
        r.setAttribute(e, t); }
    removeAttribute(r, e, t) { if (t) {
        let o = F[t];
        o ? r.removeAttributeNS(o, e) : r.removeAttribute(`${t}:${e}`);
    }
    else
        r.removeAttribute(e); }
    addClass(r, e) { r.classList.add(e); }
    removeClass(r, e) { r.classList.remove(e); }
    setStyle(r, e, t, o) { o & (O.DashCase | O.Important) ? r.style.setProperty(e, t, o & O.Important ? "important" : "") : r.style[e] = t; }
    removeStyle(r, e, t) { t & O.DashCase ? r.style.removeProperty(e) : r.style[e] = ""; }
    setProperty(r, e, t) { r != null && (r[e] = t); }
    setValue(r, e) { r.nodeValue = e; }
    listen(r, e, t, o) { if (typeof r == "string" && (r = De().getGlobalEventTarget(this.doc, r), !r))
        throw new V(5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(r, e, s)), this.eventManager.addEventListener(r, e, s, o); }
    decoratePreventDefault(r) { return e => { if (e === "__ngUnwrap__")
        return r; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => r(e)) : r(e)) === !1 && e.preventDefault(); }; }
};
function ee(n) { return n.tagName === "TEMPLATE" && n.content !== void 0; }
var L = class extends _ {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(r, e, t, o, s, i, a, c) { super(r, o, s, a), this.hostEl = e, this.sharedStylesHost = c, this.shadowRoot = e.attachShadow({ mode: "open" }), this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot); let u = t.styles; u = ie(t.id, u); for (let p of u) {
        let y = document.createElement("style");
        i && y.setAttribute("nonce", i), y.textContent = p, this.shadowRoot.appendChild(y);
    } let f = t.getExternalStyles?.(); if (f)
        for (let p of f) {
            let y = z(p, o);
            i && y.setAttribute("nonce", i), this.shadowRoot.appendChild(y);
        } }
    nodeOrShadowRoot(r) { return r === this.hostEl ? this.shadowRoot : r; }
    appendChild(r, e) { return super.appendChild(this.nodeOrShadowRoot(r), e); }
    insertBefore(r, e, t) { return super.insertBefore(this.nodeOrShadowRoot(r), e, t); }
    removeChild(r, e) { return super.removeChild(null, e); }
    parentNode(r) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r))); }
    destroy() { this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot); }
}, T = class extends _ {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, t, o, s, i, a, c) { super(r, s, i, a), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = o; let u = t.styles; this.styles = c ? ie(c, u) : u, this.styleUrls = t.getExternalStyles?.(c); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && be.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, H = class extends T {
    contentAttr;
    hostAttr;
    constructor(r, e, t, o, s, i, a, c) { let u = o + "-" + t.id; super(r, e, t, s, i, a, c, u), this.contentAttr = Le(u), this.hostAttr = He(u); }
    applyToHost(r) { this.applyStyles(), this.setAttribute(r, this.hostAttr, ""); }
    createElement(r, e) { let t = super.createElement(r, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
var j = class n extends Pe {
    supportsDOMEvents = !0;
    static makeCurrent() { ke(new n); }
    onAndCancel(r, e, t, o) { return r.addEventListener(e, t, o), () => { r.removeEventListener(e, t, o); }; }
    dispatchEvent(r, e) { r.dispatchEvent(e); }
    remove(r) { r.remove(); }
    createElement(r, e) { return e = e || this.getDefaultDocument(), e.createElement(r); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(r) { return r.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(r) { return r instanceof DocumentFragment; }
    getGlobalEventTarget(r, e) { return e === "window" ? window : e === "document" ? r : e === "body" ? r.body : null; }
    getBaseHref(r) { let e = qe(); return e == null ? null : Qe(e); }
    resetBaseElement() { D = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(r) { return Ue(document.cookie, r); }
}, D = null;
function qe() { return D = D || document.head.querySelector("base"), D ? D.getAttribute("href") : null; }
function Qe(n) { return new URL(n, document.baseURI).pathname; }
var x = class {
    addToWindow(r) { v.getAngularTestability = (t, o = !0) => { let s = r.findTestabilityInTree(t, o); if (s == null)
        throw new Fe(5103, !1); return s; }, v.getAllAngularTestabilities = () => r.getAllTestabilities(), v.getAllAngularRootElements = () => r.getAllRootElements(); let e = t => { let o = v.getAllAngularTestabilities(), s = o.length, i = function () { s--, s == 0 && t(); }; o.forEach(a => { a.whenStable(i); }); }; v.frameworkStabilizers || (v.frameworkStabilizers = []), v.frameworkStabilizers.push(e); }
    findTestabilityInTree(r, e, t) { if (e == null)
        return null; let o = r.getTestability(e); return o ?? (t ? ce().isShadowRoot(e) ? this.findTestabilityInTree(r, e.host, !0) : this.findTestabilityInTree(r, e.parentElement, !0) : null); }
}, et = (() => { class n {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), ae = ["alt", "control", "meta", "shift"], tt = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, nt = { alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey }, fe = (() => { class n extends g {
    constructor(e) { super(e); }
    supports(e) { return n.parseEventName(e) != null; }
    addEventListener(e, t, o, s) { let i = n.parseEventName(t), a = n.eventCallback(i.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => ce().onAndCancel(e, i.domEventName, a, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), o = t.shift(); if (t.length === 0 || !(o === "keydown" || o === "keyup"))
        return null; let s = n._normalizeKey(t.pop()), i = "", a = t.indexOf("code"); if (a > -1 && (t.splice(a, 1), i = "code."), ae.forEach(u => { let f = t.indexOf(u); f > -1 && (t.splice(f, 1), i += u + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let c = {}; return c.domEventName = o, c.fullKey = i, c; }
    static matchEventFullKeyCode(e, t) { let o = tt[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (o = e.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), ae.forEach(i => { if (i !== o) {
        let a = nt[i];
        a(e) && (s += i + ".");
    } }), s += o, s === t); }
    static eventCallback(e, t, o) { return s => { n.matchEventFullKeyCode(s, e) && o.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || n)(h.\u0275\u0275inject(le)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function rt(n, r, e) { return B(this, null, function* () { let t = I({ rootComponent: n }, pe(r, e)); return ue(t); }); }
function ot(n, r) { return B(this, null, function* () { return ue(pe(n, r)); }); }
function pe(n, r) { return { platformRef: r?.platformRef, appProviders: [...ge, ...n?.providers ?? []], platformProviders: he }; }
function st() { return [...me]; }
function it() { j.makeCurrent(); }
function at() { return new de; }
function ct() { return We(document), document; }
var he = [{ provide: Ke, useValue: Be }, { provide: Xe, useValue: it, multi: !0 }, { provide: le, useFactory: ct }], lt = Ze(Je, "browser", he);
var me = [{ provide: Ge, useClass: x }, { provide: Ye, useClass: Y }, { provide: Y, useClass: Y }], ge = [{ provide: ze, useValue: "root" }, { provide: de, useFactory: at }, { provide: S, useClass: M, multi: !0 }, { provide: S, useClass: fe, multi: !0 }, U, k, P, { provide: $e, useExisting: U }, { provide: xe, useClass: et }, []], dt = (() => { class n {
    constructor() { }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [...ge, ...me], imports: [je, Ve] });
} return n; })();
import { \u0275getDOM as Ee, DOCUMENT as b } from "@angular/common";
import { \u0275getDOM as An } from "@angular/common";
import * as d from "@angular/core";
import { \u0275global as ve, ApplicationRef as ut, InjectionToken as Se, Injector as ft, Optional as pt, \u0275Console as nn, \u0275RuntimeError as Z, SecurityContext as w, \u0275allowSanitizationBypassAndThrow as R, \u0275unwrapSafeValue as C, \u0275_sanitizeUrl as ht, \u0275_sanitizeHtml as mt, \u0275bypassSanitizationTrustHtml as gt, \u0275bypassSanitizationTrustStyle as vt, \u0275bypassSanitizationTrustScript as yt, \u0275bypassSanitizationTrustUrl as Et, \u0275bypassSanitizationTrustResourceUrl as St, makeEnvironmentProviders as wt, \u0275withDomHydration as Mt, \u0275withEventReplay as _t, \u0275withI18nSupport as Tt, \u0275withIncrementalHydration as Dt, ENVIRONMENT_INITIALIZER as cn, inject as ln, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as dn, \u0275formatRuntimeError as un, Version as Rt } from "@angular/core";
import { \u0275withHttpTransferCache as we } from "@angular/common/http";
var hn = (() => { class n {
    _doc;
    _dom;
    constructor(e) { this._doc = e, this._dom = Ee(); }
    addTag(e, t = !1) { return e ? this._getOrCreateElement(e, t) : null; }
    addTags(e, t = !1) { return e ? e.reduce((o, s) => (s && o.push(this._getOrCreateElement(s, t)), o), []) : []; }
    getTag(e) { if (!e)
        return null; let t = this._doc.querySelector(`meta[${e}]`); return t?.nodeName.toLowerCase() === "meta" ? t : null; }
    getTags(e) { if (!e)
        return []; let t = this._doc.querySelectorAll(`meta[${e}]`); return t ? [].slice.call(t).filter(o => o.nodeName.toLowerCase() === "meta") : []; }
    updateTag(e, t) { if (!e)
        return null; t = t || this._parseSelector(e); let o = this.getTag(t); return o ? this._setMetaElementAttributes(e, o) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, t = !1) { if (!t) {
        let i = this._parseSelector(e), a = this.getTags(i).filter(c => this._containsAttributes(e, c))[0];
        if (a !== void 0)
            return a;
    } let o = this._dom.createElement("meta"); return this._setMetaElementAttributes(e, o), this._doc.getElementsByTagName("head")[0].appendChild(o), o; }
    _setMetaElementAttributes(e, t) { return Object.keys(e).forEach(o => t.setAttribute(this._getMetaKeyMap(o), e[o])), t; }
    _parseSelector(e) { let t = e.name ? "name" : "property"; return `${t}=${this._escapeSelectorValue(String(e[t]))}`; }
    _escapeSelectorValue(e) { return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
    _containsAttributes(e, t) { return Object.keys(e).every(o => t.getAttribute(this._getMetaKeyMap(o)) === e[o]); }
    _getMetaKeyMap(e) { return Ct[e] || e; }
    static \u0275fac = function (t) { return new (t || n)(d.\u0275\u0275inject(b)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), Ct = { httpEquiv: "http-equiv" }, mn = (() => { class n {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (t) { return new (t || n)(d.\u0275\u0275inject(b)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function Me(n, r) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = ve.ng = ve.ng || {};
    e[n] = r;
} }
var J = class {
    msPerTick;
    numTicks;
    constructor(r, e) { this.msPerTick = r, this.numTicks = e; }
}, K = class {
    appRef;
    constructor(r) { this.appRef = r.injector.get(ut); }
    timeChangeDetection(r) { let e = r && r.record, t = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(t); let o = performance.now(), s = 0; for (; s < 5 || performance.now() - o < 500;)
        this.appRef.tick(), s++; let i = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t); let a = (i - o) / s; return console.log(`ran ${s} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new J(a, s); }
}, _e = "profiler";
function gn(n) { return Me(_e, new K(n)), n; }
function vn() { Me(_e, null); }
var ye = class {
    static all() { return () => !0; }
    static css(r) { return e => e.nativeElement != null ? bt(e.nativeElement, r) : !1; }
    static directive(r) { return e => e.providerTokens.indexOf(r) !== -1; }
};
function bt(n, r) { return Ee().isElementNode(n) ? n.matches && n.matches(r) || n.msMatchesSelector && n.msMatchesSelector(r) || n.webkitMatchesSelector && n.webkitMatchesSelector(r) : !1; }
var At = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0, doubletap: !0 }, X = new Se(""), Te = new Se(""), It = (() => { class n {
    events = [];
    overrides = {};
    options;
    buildHammer(e) { let t = new Hammer(e, this.options); t.get("pinch").set({ enable: !0 }), t.get("rotate").set({ enable: !0 }); for (let o in this.overrides)
        t.get(o).set(this.overrides[o]); return t; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), Ot = (() => { class n extends g {
    _config;
    _injector;
    loader;
    _loaderPromise = null;
    constructor(e, t, o, s) { super(e), this._config = t, this._injector = o, this.loader = s; }
    supports(e) { return !(!At.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader); }
    addEventListener(e, t, o) { let s = this.manager.getZone(); if (t = t.toLowerCase(), !window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || s.runOutsideAngular(() => this.loader());
        let i = !1, a = () => { i = !0; };
        return s.runOutsideAngular(() => this._loaderPromise.then(() => { if (!window.Hammer) {
            a = () => { };
            return;
        } i || (a = this.addEventListener(e, t, o)); }).catch(() => { a = () => { }; })), () => { a(); };
    } return s.runOutsideAngular(() => { let i = this._config.buildHammer(e), a = function (c) { s.runGuarded(function () { o(c); }); }; return i.on(t, a), () => { i.off(t, a), typeof i.destroy == "function" && i.destroy(); }; }); }
    isCustomEvent(e) { return this._config.events.indexOf(e) > -1; }
    static \u0275fac = function (t) { return new (t || n)(d.\u0275\u0275inject(b), d.\u0275\u0275inject(X), d.\u0275\u0275inject(d.Injector), d.\u0275\u0275inject(Te, 8)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), yn = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = d.\u0275\u0275defineInjector({ providers: [{ provide: S, useClass: Ot, multi: !0, deps: [b, X, ft, [new pt, Te]] }, { provide: X, useClass: It }] });
} return n; })(), Nt = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: n, factory: function (t) { let o = null; return t ? o = new (t || n) : o = d.\u0275\u0275inject(Lt), o; }, providedIn: "root" });
} return n; })(), Lt = (() => { class n extends Nt {
    _doc;
    constructor(e) { super(), this._doc = e; }
    sanitize(e, t) { if (t == null)
        return null; switch (e) {
        case w.NONE: return t;
        case w.HTML: return R(t, "HTML") ? C(t) : mt(this._doc, String(t)).toString();
        case w.STYLE: return R(t, "Style") ? C(t) : t;
        case w.SCRIPT:
            if (R(t, "Script"))
                return C(t);
            throw new Z(5200, !1);
        case w.URL: return R(t, "URL") ? C(t) : ht(String(t));
        case w.RESOURCE_URL:
            if (R(t, "ResourceURL"))
                return C(t);
            throw new Z(5201, !1);
        default: throw new Z(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return gt(e); }
    bypassSecurityTrustStyle(e) { return vt(e); }
    bypassSecurityTrustScript(e) { return yt(e); }
    bypassSecurityTrustUrl(e) { return Et(e); }
    bypassSecurityTrustResourceUrl(e) { return St(e); }
    static \u0275fac = function (t) { return new (t || n)(d.\u0275\u0275inject(b)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), m = (function (n) { return n[n.NoHttpTransferCache = 0] = "NoHttpTransferCache", n[n.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", n[n.I18nSupport = 2] = "I18nSupport", n[n.EventReplay = 3] = "EventReplay", n[n.IncrementalHydration = 4] = "IncrementalHydration", n; })(m || {});
function A(n, r = [], e = {}) { return { \u0275kind: n, \u0275providers: r }; }
function En() { return A(m.NoHttpTransferCache); }
function Sn(n) { return A(m.HttpTransferCacheOptions, we(n)); }
function wn() { return A(m.I18nSupport, Tt()); }
function Mn() { return A(m.EventReplay, _t()); }
function _n() { return A(m.IncrementalHydration, Dt()); }
function Tn(...n) { let r = [], e = new Set; for (let { \u0275providers: o, \u0275kind: s } of n)
    e.add(s), o.length && r.push(o); let t = e.has(m.HttpTransferCacheOptions); return wt([[], [], Mt(), e.has(m.NoHttpTransferCache) || t ? [] : we({}), r]); }
var Dn = new Rt("21.2.17");
export { dt as BrowserModule, ye as By, Nt as DomSanitizer, S as EVENT_MANAGER_PLUGINS, P as EventManager, g as EventManagerPlugin, X as HAMMER_GESTURE_CONFIG, Te as HAMMER_LOADER, It as HammerGestureConfig, yn as HammerModule, m as HydrationFeatureKind, hn as Meta, se as REMOVE_STYLES_ON_COMPONENT_DESTROY, mn as Title, Dn as VERSION, rt as bootstrapApplication, ot as createApplication, vn as disableDebugTools, gn as enableDebugTools, lt as platformBrowser, Tn as provideClientHydration, st as provideProtractorTestingSupport, Mn as withEventReplay, Sn as withHttpTransferCacheOptions, wn as withI18nSupport, _n as withIncrementalHydration, En as withNoHttpTransferCache, j as \u0275BrowserDomAdapter, x as \u0275BrowserGetTestability, M as \u0275DomEventsPlugin, U as \u0275DomRendererFactory2, Lt as \u0275DomSanitizerImpl, Ot as \u0275HammerGesturesPlugin, fe as \u0275KeyEventsPlugin, k as \u0275SharedStylesHost, An as \u0275getDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v21.2.17
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
