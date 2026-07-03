import { d as Me, g as Oe, h as De } from "@nf-internal/chunk-HNXYBGTD";
import { a as W, c as Ne, d as ae } from "@nf-internal/chunk-4CLCTAJ7";
import * as h from "@angular/core";
import { \u0275RuntimeError as A, inject as v, NgZone as xt, DestroyRef as Nt, \u0275formatRuntimeError as Nr, InjectionToken as F, \u0275TracingService as Mt, runInInjectionContext as fe, PendingTasks as Ue, CSP_NONCE as Ot, DOCUMENT as je, EnvironmentInjector as Dt, makeEnvironmentProviders as At } from "@angular/core";
import { switchMap as It, finalize as Le, concatMap as kt, filter as _t, map as K } from "rxjs/operators";
import { Observable as pe, from as Ft, of as Be } from "rxjs";
var M = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(r) {
        r ? typeof r == "string" ? this.lazyInit = () => {
            this.headers = new Map, r.split(`
`).forEach(t => { let n = t.indexOf(":"); if (n > 0) {
                let o = t.slice(0, n), s = t.slice(n + 1).trim();
                this.addHeaderEntry(o, s);
            } });
        } : typeof Headers < "u" && r instanceof Headers ? (this.headers = new Map, r.forEach((t, n) => { this.addHeaderEntry(n, t); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(r).forEach(([t, n]) => { this.setHeaderEntries(t, n); }); } : this.headers = new Map;
    }
    has(r) { return this.init(), this.headers.has(r.toLowerCase()); }
    get(r) { this.init(); let t = this.headers.get(r.toLowerCase()); return t && t.length > 0 ? t[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(r) { return this.init(), this.headers.get(r.toLowerCase()) || null; }
    append(r, t) { return this.clone({ name: r, value: t, op: "a" }); }
    set(r, t) { return this.clone({ name: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ name: r, value: t, op: "d" }); }
    maybeSetNormalizedName(r, t) { this.normalizedNames.has(t) || this.normalizedNames.set(t, r); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(r => this.applyUpdate(r)), this.lazyUpdate = null)); }
    copyFrom(r) { r.init(), Array.from(r.headers.keys()).forEach(t => { this.headers.set(t, r.headers.get(t)), this.normalizedNames.set(t, r.normalizedNames.get(t)); }); }
    clone(r) { let t = new e; return t.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([r]), t; }
    applyUpdate(r) { let t = r.name.toLowerCase(); switch (r.op) {
        case "a":
        case "s":
            let n = r.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(r.name, t);
            let o = (r.op === "a" ? this.headers.get(t) : void 0) || [];
            o.push(...n), this.headers.set(t, o);
            break;
        case "d":
            let s = r.value;
            if (!s)
                this.headers.delete(t), this.normalizedNames.delete(t);
            else {
                let i = this.headers.get(t);
                if (!i)
                    return;
                i = i.filter(d => s.indexOf(d) === -1), i.length === 0 ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, i);
            }
            break;
    } }
    addHeaderEntry(r, t) { let n = r.toLowerCase(); this.maybeSetNormalizedName(r, n), this.headers.has(n) ? this.headers.get(n).push(t) : this.headers.set(n, [t]); }
    setHeaderEntries(r, t) { let n = (Array.isArray(t) ? t : [t]).map(s => s.toString()), o = r.toLowerCase(); this.headers.set(o, n), this.maybeSetNormalizedName(r, o); }
    forEach(r) { this.init(), Array.from(this.normalizedNames.keys()).forEach(t => r(this.normalizedNames.get(t), this.headers.get(t))); }
};
var de = class {
    defaultValue;
    constructor(r) { this.defaultValue = r; }
}, Q = class {
    map = new Map;
    set(r, t) { return this.map.set(r, t), this; }
    get(r) { return this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r); }
    delete(r) { return this.map.delete(r), this; }
    has(r) { return this.map.has(r); }
    keys() { return this.map.keys(); }
}, q = class {
    encodeKey(r) { return Ae(r); }
    encodeValue(r) { return Ae(r); }
    decodeKey(r) { return decodeURIComponent(r); }
    decodeValue(r) { return decodeURIComponent(r); }
};
function Ct(e, r) { let t = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(o => { let s = o.indexOf("="), [i, d] = s == -1 ? [r.decodeKey(o), ""] : [r.decodeKey(o.slice(0, s)), r.decodeValue(o.slice(s + 1))], a = t.get(i) || []; a.push(d), t.set(i, a); }), t; }
var St = /%(\d[a-f0-9])/gi, Ut = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function Ae(e) { return encodeURIComponent(e).replace(St, (r, t) => Ut[t] ?? r); }
function Y(e) { return `${e}`; }
var I = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(r = {}) { if (this.encoder = r.encoder || new q, r.fromString) {
        if (r.fromObject)
            throw new A(2805, !1);
        this.map = Ct(r.fromString, this.encoder);
    }
    else
        r.fromObject ? (this.map = new Map, Object.keys(r.fromObject).forEach(t => { let n = r.fromObject[t], o = Array.isArray(n) ? n.map(Y) : [Y(n)]; this.map.set(t, o); })) : this.map = null; }
    has(r) { return this.init(), this.map.has(r); }
    get(r) { this.init(); let t = this.map.get(r); return t ? t[0] : null; }
    getAll(r) { return this.init(), this.map.get(r) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(r, t) { return this.clone({ param: r, value: t, op: "a" }); }
    appendAll(r) { let t = []; return Object.keys(r).forEach(n => { let o = r[n]; Array.isArray(o) ? o.forEach(s => { t.push({ param: n, value: s, op: "a" }); }) : t.push({ param: n, value: o, op: "a" }); }), this.clone(t); }
    set(r, t) { return this.clone({ param: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ param: r, value: t, op: "d" }); }
    toString() { return this.init(), this.keys().map(r => { let t = this.encoder.encodeKey(r); return this.map.get(r).map(n => t + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(r => r !== "").join("&"); }
    clone(r) { let t = new e({ encoder: this.encoder }); return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat(r), t; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(r => this.map.set(r, this.cloneFrom.map.get(r))), this.updates.forEach(r => { switch (r.op) {
        case "a":
        case "s":
            let t = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
            t.push(Y(r.value)), this.map.set(r.param, t);
            break;
        case "d": if (r.value !== void 0) {
            let n = this.map.get(r.param) || [], o = n.indexOf(Y(r.value));
            o !== -1 && n.splice(o, 1), n.length > 0 ? this.map.set(r.param, n) : this.map.delete(r.param);
        }
        else {
            this.map.delete(r.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
};
function jt(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Ie(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function ke(e) { return typeof Blob < "u" && e instanceof Blob; }
function _e(e) { return typeof FormData < "u" && e instanceof FormData; }
function Lt(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var X = "Content-Type", H = "Accept", ze = "text/plain", Je = "application/json", Xe = `${Je}, ${ze}, */*`, L = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    referrerPolicy;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(r, t, n, o) { this.url = t, this.method = r.toUpperCase(); let s; if (jt(this.method) || o ? (this.body = n !== void 0 ? n : null, s = o) : s = n, s) {
        if (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, this.keepalive = !!s.keepalive, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.context && (this.context = s.context), s.params && (this.params = s.params), s.priority && (this.priority = s.priority), s.cache && (this.cache = s.cache), s.credentials && (this.credentials = s.credentials), typeof s.timeout == "number") {
            if (s.timeout < 1 || !Number.isInteger(s.timeout))
                throw new A(2822, "");
            this.timeout = s.timeout;
        }
        s.mode && (this.mode = s.mode), s.redirect && (this.redirect = s.redirect), s.integrity && (this.integrity = s.integrity), s.referrer !== void 0 && (this.referrer = s.referrer), s.referrerPolicy && (this.referrerPolicy = s.referrerPolicy), this.transferCache = s.transferCache;
    } if (this.headers ??= new M, this.context ??= new Q, !this.params)
        this.params = new I, this.urlWithParams = t;
    else {
        let i = this.params.toString();
        if (i.length === 0)
            this.urlWithParams = t;
        else {
            let d = t.indexOf("?"), a = d === -1 ? "?" : d < t.length - 1 ? "&" : "";
            this.urlWithParams = t + a + i;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Ie(this.body) || ke(this.body) || _e(this.body) || Lt(this.body) ? this.body : this.body instanceof I ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || _e(this.body) ? null : ke(this.body) ? this.body.type || null : Ie(this.body) ? null : typeof this.body == "string" ? ze : this.body instanceof I ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Je : null; }
    clone(r = {}) { let t = r.method || this.method, n = r.url || this.url, o = r.responseType || this.responseType, s = r.keepalive ?? this.keepalive, i = r.priority || this.priority, d = r.cache || this.cache, a = r.mode || this.mode, l = r.redirect || this.redirect, p = r.credentials || this.credentials, f = r.referrer ?? this.referrer, T = r.integrity || this.integrity, b = r.referrerPolicy || this.referrerPolicy, R = r.transferCache ?? this.transferCache, y = r.timeout ?? this.timeout, c = r.body !== void 0 ? r.body : this.body, u = r.withCredentials ?? this.withCredentials, m = r.reportProgress ?? this.reportProgress, P = r.headers || this.headers, g = r.params || this.params, O = r.context ?? this.context; return r.setHeaders !== void 0 && (P = Object.keys(r.setHeaders).reduce((w, x) => w.set(x, r.setHeaders[x]), P)), r.setParams && (g = Object.keys(r.setParams).reduce((w, x) => w.set(x, r.setParams[x]), g)), new e(t, n, c, { params: g, headers: P, context: O, reportProgress: m, responseType: o, withCredentials: u, transferCache: R, keepalive: s, cache: d, priority: i, timeout: y, mode: a, redirect: l, credentials: p, referrer: f, integrity: T, referrerPolicy: b }); }
}, D = (function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; })(D || {}), z = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    responseType;
    constructor(r, t = 200, n = "OK") { this.headers = r.headers || new M, this.status = r.status !== void 0 ? r.status : t, this.statusText = r.statusText || n, this.url = r.url || null, this.redirected = r.redirected, this.responseType = r.responseType, this.ok = this.status >= 200 && this.status < 300; }
}, V = class e extends z {
    constructor(r = {}) { super(r); }
    type = D.ResponseHeader;
    clone(r = {}) { return new e({ headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0 }); }
}, _ = class e extends z {
    body;
    constructor(r = {}) { super(r), this.body = r.body !== void 0 ? r.body : null; }
    type = D.Response;
    clone(r = {}) { return new e({ body: r.body !== void 0 ? r.body : this.body, headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0, redirected: r.redirected ?? this.redirected, responseType: r.responseType ?? this.responseType }); }
}, N = class extends z {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(r) { super(r, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${r.url || "(unknown url)"}` : this.message = `Http failure response for ${r.url || "(unknown url)"}: ${r.status} ${r.statusText}`, this.error = r.error || null; }
}, ye = 200, Bt = 204, Ve = (function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; })(Ve || {}), zt = /^\)\]\}',?\n/, $e = new F(""), Z = (() => { class e {
    fetchImpl = v(le, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t));
    ngZone = v(xt);
    destroyRef = v(Nt);
    handle(t) { return new pe(n => { let o = new AbortController; this.doRequest(t, o.signal, n).then(ue, i => n.error(new N({ error: i }))); let s; return t.timeout && (s = this.ngZone.runOutsideAngular(() => setTimeout(() => { o.signal.aborted || o.abort(new DOMException("signal timed out", "TimeoutError")); }, t.timeout))), () => { s !== void 0 && clearTimeout(s), o.abort(); }; }); }
    doRequest(t, n, o) { return ae(this, null, function* () { let s = this.createRequestInit(t), i; try {
        let y = this.ngZone.runOutsideAngular(() => this.fetchImpl(t.urlWithParams, W({ signal: n }, s)));
        Jt(y), o.next({ type: D.Sent }), i = yield y;
    }
    catch (y) {
        o.error(new N({ error: y, status: y.status ?? 0, statusText: y.statusText, url: t.urlWithParams, headers: y.headers }));
        return;
    } let d = new M(i.headers), a = i.statusText, l = i.url || t.urlWithParams, p = i.status, f = null; if (t.reportProgress && o.next(new V({ headers: d, status: p, statusText: a, url: l })), i.body) {
        let y = i.headers.get("content-length"), c = [], u = i.body.getReader(), m = 0, P, g, O = typeof Zone < "u" && Zone.current, w = !1;
        if (yield this.ngZone.runOutsideAngular(() => ae(this, null, function* () { for (;;) {
            if (this.destroyRef.destroyed) {
                yield u.cancel(), w = !0;
                break;
            }
            let { done: k, value: U } = yield u.read();
            if (k)
                break;
            if (c.push(U), m += U.length, t.reportProgress) {
                g = t.responseType === "text" ? (g ?? "") + (P ??= new TextDecoder).decode(U, { stream: !0 }) : void 0;
                let E = () => o.next({ type: D.DownloadProgress, total: y ? +y : void 0, loaded: m, partialText: g });
                O ? O.run(E) : E();
            }
        } })), w) {
            o.complete();
            return;
        }
        let x = this.concatChunks(c, m);
        try {
            let k = i.headers.get(X) ?? "";
            f = this.parseBody(t, x, k, p);
        }
        catch (k) {
            o.error(new N({ error: k, headers: new M(i.headers), status: i.status, statusText: i.statusText, url: i.url || t.urlWithParams }));
            return;
        }
    } p === 0 && (p = f ? ye : 0); let T = p >= 200 && p < 300, b = i.redirected, R = i.type; T ? (o.next(new _({ body: f, headers: d, status: p, statusText: a, url: l, redirected: b, responseType: R })), o.complete()) : o.error(new N({ error: f, headers: d, status: p, statusText: a, url: l, redirected: b, responseType: R })); }); }
    parseBody(t, n, o, s) { switch (t.responseType) {
        case "json":
            let i = new TextDecoder().decode(n).replace(zt, "");
            if (i === "")
                return null;
            try {
                return JSON.parse(i);
            }
            catch (d) {
                if (s < 200 || s >= 300)
                    return i;
                throw d;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: o });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(t) { let n = {}, o; if (o = t.credentials, t.withCredentials && (o = "include"), t.headers.forEach((s, i) => n[s] = i.join(",")), t.headers.has(H) || (n[H] = Xe), !t.headers.has(X)) {
        let s = t.detectContentTypeHeader();
        s !== null && (n[X] = s);
    } return { body: t.serializeBody(), method: t.method, headers: n, credentials: o, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, referrer: t.referrer, integrity: t.integrity, referrerPolicy: t.referrerPolicy }; }
    concatChunks(t, n) { let o = new Uint8Array(n), s = 0; for (let i of t)
        o.set(i, s), s += i.length; return o; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), le = class {
};
function ue() { }
function Jt(e) { e.then(ue, ue); }
var Xt = /^\)\]\}',?\n/;
var ge = (() => { class e {
    xhrFactory;
    tracingService = v(Mt, { optional: !0 });
    constructor(t) { this.xhrFactory = t; }
    maybePropagateTrace(t) { return this.tracingService?.propagate ? this.tracingService.propagate(t) : t; }
    handle(t) { if (t.method === "JSONP")
        throw new A(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.\u0275loadImpl ? Ft(n.\u0275loadImpl()) : Be(null)).pipe(It(() => new pe(s => { let i = n.build(); if (i.open(t.method, t.urlWithParams), t.withCredentials && (i.withCredentials = !0), t.headers.forEach((c, u) => i.setRequestHeader(c, u.join(","))), t.headers.has(H) || i.setRequestHeader(H, Xe), !t.headers.has(X)) {
        let c = t.detectContentTypeHeader();
        c !== null && i.setRequestHeader(X, c);
    } if (t.timeout && (i.timeout = t.timeout), t.responseType) {
        let c = t.responseType.toLowerCase();
        i.responseType = c !== "json" ? c : "text";
    } let d = t.serializeBody(), a = null, l = () => { if (a !== null)
        return a; let c = i.statusText || "OK", u = new M(i.getAllResponseHeaders()), m = i.responseURL || t.url; return a = new V({ headers: u, status: i.status, statusText: c, url: m }), a; }, p = this.maybePropagateTrace(() => { let { headers: c, status: u, statusText: m, url: P } = l(), g = null; u !== Bt && (g = typeof i.response > "u" ? i.responseText : i.response), u === 0 && (u = g ? ye : 0); let O = u >= 200 && u < 300; if (t.responseType === "json" && typeof g == "string") {
        let w = g;
        g = g.replace(Xt, "");
        try {
            g = g !== "" ? JSON.parse(g) : null;
        }
        catch (x) {
            g = w, O && (O = !1, g = { error: x, text: g });
        }
    } O ? (s.next(new _({ body: g, headers: c, status: u, statusText: m, url: P || void 0 })), s.complete()) : s.error(new N({ error: g, headers: c, status: u, statusText: m, url: P || void 0 })); }), f = this.maybePropagateTrace(c => { let { url: u } = l(), m = new N({ error: c, status: i.status || 0, statusText: i.statusText || "Unknown Error", url: u || void 0 }); s.error(m); }), T = f; t.timeout && (T = this.maybePropagateTrace(c => { let { url: u } = l(), m = new N({ error: new DOMException("Request timed out", "TimeoutError"), status: i.status || 0, statusText: i.statusText || "Request timeout", url: u || void 0 }); s.error(m); })); let b = !1, R = this.maybePropagateTrace(c => { b || (s.next(l()), b = !0); let u = { type: D.DownloadProgress, loaded: c.loaded }; c.lengthComputable && (u.total = c.total), t.responseType === "text" && i.responseText && (u.partialText = i.responseText), s.next(u); }), y = this.maybePropagateTrace(c => { let u = { type: D.UploadProgress, loaded: c.loaded }; c.lengthComputable && (u.total = c.total), s.next(u); }); return i.addEventListener("load", p), i.addEventListener("error", f), i.addEventListener("timeout", T), i.addEventListener("abort", f), t.reportProgress && (i.addEventListener("progress", R), d !== null && i.upload && i.upload.addEventListener("progress", y)), i.send(d), s.next({ type: D.Sent }), () => { i.removeEventListener("error", f), i.removeEventListener("abort", f), i.removeEventListener("load", p), i.removeEventListener("timeout", T), t.reportProgress && (i.removeEventListener("progress", R), d !== null && i.upload && i.upload.removeEventListener("progress", y)), i.readyState !== i.DONE && i.abort(); }; }))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(De)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Ge(e, r) { return r(e); }
function Vt(e, r) { return (t, n) => r.intercept(t, { handle: o => e(o, n) }); }
function $t(e, r, t) { return (n, o) => fe(t, () => r(n, s => e(s, o))); }
var me = new F(""), $ = new F("", { factory: () => [] }), Te = new F(""), be = new F("", { factory: () => !0 });
function Gt() { let e = null; return (r, t) => { e === null && (e = (v(me, { optional: !0 }) ?? []).reduceRight(Vt, Ge)); let n = v(Ue); if (v(be)) {
    let s = n.add();
    return e(r, t).pipe(Le(s));
}
else
    return e(r, t); }; }
var G = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = h.\u0275\u0275inject(ge), o; }, providedIn: "root" });
} return e; })();
var ee = (() => { class e {
    backend;
    injector;
    chain = null;
    pendingTasks = v(Ue);
    contributeToStability = v(be);
    constructor(t, n) { this.backend = t, this.injector = n; }
    handle(t) { if (this.chain === null) {
        let n = Array.from(new Set([...this.injector.get($), ...this.injector.get(Te, [])]));
        this.chain = n.reduceRight((o, s) => $t(o, s, this.injector), Ge);
    } if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(t, o => this.backend.handle(o)).pipe(Le(n));
    }
    else
        return this.chain(t, n => this.backend.handle(n)); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(G), h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), re = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = h.\u0275\u0275inject(ee), o; }, providedIn: "root" });
} return e; })();
function ce(e, r) { return { body: r, headers: e.headers, context: e.context, observe: e.observe, params: e.params, reportProgress: e.reportProgress, responseType: e.responseType, withCredentials: e.withCredentials, credentials: e.credentials, transferCache: e.transferCache, timeout: e.timeout, keepalive: e.keepalive, priority: e.priority, cache: e.cache, mode: e.mode, redirect: e.redirect, integrity: e.integrity, referrer: e.referrer, referrerPolicy: e.referrerPolicy }; }
var ve = (() => { class e {
    handler;
    constructor(t) { this.handler = t; }
    request(t, n, o = {}) { let s; if (t instanceof L)
        s = t;
    else {
        let a;
        o.headers instanceof M ? a = o.headers : a = new M(o.headers);
        let l;
        o.params && (o.params instanceof I ? l = o.params : l = new I({ fromObject: o.params })), s = new L(t, n, o.body !== void 0 ? o.body : null, { headers: a, context: o.context, params: l, reportProgress: o.reportProgress, responseType: o.responseType || "json", withCredentials: o.withCredentials, transferCache: o.transferCache, keepalive: o.keepalive, priority: o.priority, cache: o.cache, mode: o.mode, redirect: o.redirect, credentials: o.credentials, referrer: o.referrer, referrerPolicy: o.referrerPolicy, integrity: o.integrity, timeout: o.timeout });
    } let i = Be(s).pipe(kt(a => this.handler.handle(a))); if (t instanceof L || o.observe === "events")
        return i; let d = i.pipe(_t(a => a instanceof _)); switch (o.observe || "body") {
        case "body": switch (s.responseType) {
            case "arraybuffer": return d.pipe(K(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new A(2806, !1); return a.body; }));
            case "blob": return d.pipe(K(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new A(2807, !1); return a.body; }));
            case "text": return d.pipe(K(a => { if (a.body !== null && typeof a.body != "string")
                throw new A(2808, !1); return a.body; }));
            default: return d.pipe(K(a => a.body));
        }
        case "response": return d;
        default: throw new A(2809, !1);
    } }
    delete(t, n = {}) { return this.request("DELETE", t, n); }
    get(t, n = {}) { return this.request("GET", t, n); }
    head(t, n = {}) { return this.request("HEAD", t, n); }
    jsonp(t, n) { return this.request("JSONP", t, { params: new I().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(t, n = {}) { return this.request("OPTIONS", t, n); }
    patch(t, n, o = {}) { return this.request("PATCH", t, ce(o, n)); }
    post(t, n, o = {}) { return this.request("POST", t, ce(o, n)); }
    put(t, n, o = {}) { return this.request("PUT", t, ce(o, n)); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(re)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Wt = 0, Fe, Kt = "JSONP injected script did not invoke callback.";
var te = class {
};
function Yt() { return typeof window == "object" ? window : {}; }
var we = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    nonce = v(Ot, { optional: !0 });
    constructor(t, n) { this.callbackMap = t, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${Wt++}`; }
    handle(t) { if (t.method !== "JSONP")
        throw new A(2810, !1); if (t.responseType !== "json")
        throw new A(2811, !1); if (t.headers.keys().length > 0)
        throw new A(2812, !1); if (!this.isAllowedJsonpUrl(t.urlWithParams))
        throw new A(2826, !1); return new pe(n => { let o = this.nextCallback(), s = t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${o}$1`), i = this.document.createElement("script"); i.src = s, this.nonce && i.setAttribute("nonce", this.nonce); let d = null, a = !1; this.callbackMap[o] = T => { delete this.callbackMap[o], d = T, a = !0; }; let l = () => { i.removeEventListener("load", p), i.removeEventListener("error", f), i.remove(), delete this.callbackMap[o]; }, p = () => { this.resolvedPromise.then(() => { if (l(), !a) {
        n.error(new N({ url: s, status: 0, statusText: "JSONP Error", error: new Error(Kt) }));
        return;
    } n.next(new _({ body: d, status: ye, statusText: "OK", url: s })), n.complete(); }); }, f = T => { l(), n.error(new N({ error: T, status: 0, statusText: "JSONP Error", url: s })); }; return i.addEventListener("load", p), i.addEventListener("error", f), this.document.body.appendChild(i), n.next({ type: D.Sent }), () => { a || this.removeListeners(i), l(); }; }); }
    removeListeners(t) { Fe ??= this.document.implementation.createHTMLDocument(), Fe.adoptNode(t); }
    isAllowedJsonpUrl(t) { return /^https?:\/\//i.test(t); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(te), h.\u0275\u0275inject(je)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function We(e, r) { return e.method === "JSONP" ? v(we).handle(e) : r(e); }
var Zt = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return fe(this.injector, () => We(t, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Ee = new F("", { factory: () => !0 }), Ke = "XSRF-TOKEN", Ye = new F("", { factory: () => Ke }), Ze = "X-XSRF-TOKEN", Qe = new F("", { factory: () => Ze }), qe = (() => { class e {
    cookieName = v(Ye);
    doc = v(je);
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let t = this.doc.cookie || ""; return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Oe(t, this.cookieName), this.lastCookieString = t), this.lastToken; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Re = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = h.\u0275\u0275inject(qe), o; }, providedIn: "root" });
} return e; })();
function He(e, r) { if (!v(Ee) || e.method === "GET" || e.method === "HEAD")
    return r(e); try {
    let o = v(Me).href, { origin: s } = new URL(o), { origin: i } = new URL(e.url, s);
    if (s !== i)
        return r(e);
}
catch {
    return r(e);
} let t = v(Re).getToken(), n = v(Qe); return t != null && !e.headers.has(n) && (e = e.clone({ headers: e.headers.set(n, t) })), r(e); }
var Ce = (() => { class e {
    injector = v(Dt);
    intercept(t, n) { return fe(this.injector, () => He(t, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), C = (function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e; })(C || {});
function B(e, r) { return { \u0275kind: e, \u0275providers: r }; }
function et(...e) { let r = [ve, ee, { provide: re, useExisting: ee }, { provide: G, useFactory: () => v($e, { optional: !0 }) ?? v(ge) }, { provide: $, useValue: He, multi: !0 }]; for (let t of e)
    r.push(...t.\u0275providers); return At(r); }
function Qt(e) { return B(C.Interceptors, e.map(r => ({ provide: $, useValue: r, multi: !0 }))); }
var Se = new F("");
function tt() { return B(C.LegacyInterceptors, [{ provide: Se, useFactory: Gt }, { provide: $, useExisting: Se, multi: !0 }]); }
function he({ cookieName: e, headerName: r }) { let t = []; return e !== void 0 && t.push({ provide: Ye, useValue: e }), r !== void 0 && t.push({ provide: Qe, useValue: r }), B(C.CustomXsrfConfiguration, t); }
function rt() { return B(C.NoXsrfProtection, [{ provide: Ee, useValue: !1 }]); }
function nt() { return B(C.JsonpSupport, [we, { provide: te, useFactory: Yt }, { provide: $, useValue: We, multi: !0 }]); }
function qt() { return B(C.RequestsMadeViaParent, [{ provide: G, useFactory: () => v(re, { skipSelf: !0, optional: !0 }) }]); }
function Ht() { return B(C.Fetch, [Z, { provide: $e, useExisting: Z }, { provide: G, useExisting: Z }]); }
var er = (() => { class e {
    static disable() { return { ngModule: e, providers: [rt().\u0275providers] }; }
    static withOptions(t = {}) { return { ngModule: e, providers: he(t).\u0275providers }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [Ce, { provide: me, useExisting: Ce, multi: !0 }, { provide: Re, useClass: qe }, he({ cookieName: Ke, headerName: Ze }).\u0275providers, { provide: Ee, useValue: !0 }] });
} return e; })(), tr = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [et(tt())] });
} return e; })(), rr = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [nt().\u0275providers] });
} return e; })();
import { InjectionToken as at, APP_BOOTSTRAP_LISTENER as nr, \u0275performanceMarkFeature as or, inject as J, ApplicationRef as sr, TransferState as ct, makeStateKey as ir, \u0275RuntimeError as dt, \u0275truncateMiddle as Lr, \u0275formatRuntimeError as Br, Injector as ar, signal as lt, \u0275ResourceImpl as cr, linkedSignal as Pe, computed as dr, \u0275encapsulateResourceError as lr } from "@angular/core";
import { of as ur } from "rxjs";
import { tap as hr } from "rxjs/operators";
var ut = new at(""), ht = "b", ft = "h", pt = "s", yt = "st", gt = "u", mt = "rt", oe = new at(""), fr = ["GET", "HEAD"];
function Tt(e, r) { let i = r, { isCacheActive: t } = i, n = Ne(i, ["isCacheActive"]), { transferCache: o, method: s } = e; return !(!t || o === !1 || mr(e) || s === "POST" && !n.includePostRequests && !o || s !== "POST" && !fr.includes(s) || !n.includeRequestsWithAuthHeaders && gr(e) || vt(e.headers) || br(e.cache) || n.filter?.(e) === !1); }
function pr(e, r) { return typeof r == "object" && r.includeHeaders ? r.includeHeaders : e.includeHeaders; }
function bt(e, r, t, n, o, s = !1) { if (!s && !Tt(e, r))
    return null; if (typeof ngServerMode < "u" && !ngServerMode && n)
    throw new dt(2803, !1); if (!o) {
    let y = typeof ngServerMode < "u" && ngServerMode && n ? Et(e.url, n) : e.url;
    o = wt(e, y);
} let i = t.get(o, null); if (!i)
    return null; let { [ht]: d, [mt]: a, [ft]: l, [pt]: p, [yt]: f, [gt]: T } = i, b = d; switch (a) {
    case "arraybuffer":
        b = st(d);
        break;
    case "blob":
        b = new Blob([st(d)]);
        break;
} let R = new M(l); return new _({ body: b, headers: R, status: p, statusText: f, url: T }); }
function yr(e, r) { let t = J(oe); if (!Tt(e, t))
    return r(e); let n = J(ct), o = J(ut, { optional: !0 }), s = typeof ngServerMode < "u" && ngServerMode && o ? Et(e.url, o) : e.url, i = wt(e, s), d = bt(e, t, n, null, i, !0); if (d)
    return ur(d); let a = r(e); return typeof ngServerMode < "u" && ngServerMode ? a.pipe(hr(l => { if (l instanceof _) {
    let { headers: p, body: f, status: T, statusText: b } = l;
    if (vt(p))
        return;
    let { transferCache: R, responseType: y } = e, c = pr(t, R);
    n.set(i, { [ht]: y === "arraybuffer" || y === "blob" ? wr(f) : f, [ft]: vr(p, c), [pt]: T, [yt]: b, [gt]: s, [mt]: y });
} })) : a; }
function gr(e) { let r = e.headers; return r.has("authorization") || r.has("proxy-authorization") || r.has("cookie"); }
function mr(e) { let { withCredentials: r, credentials: t } = e; return r || t === "include" || t === "same-origin"; }
var Tr = new Set(["no-store", "private", "no-cache"]);
function vt(e) { let r = e.get("cache-control"); return r ? r.split(",").some(t => { let n = t.split("=", 1)[0].trim().toLowerCase(); return Tr.has(n); }) : !1; }
function br(e) { return e === "no-cache" || e === "no-store"; }
function vr(e, r) { if (!r)
    return {}; let t = {}; for (let n of r) {
    let o = e.getAll(n);
    o !== null && (t[n] = o);
} return t; }
function ot(e) { return [...e.keys()].sort().map(r => `${r}=${e.getAll(r)}`).join("&"); }
function wt(e, r) { let { params: t, method: n, responseType: o } = e, s = ot(t), i = e.serializeBody(); i instanceof URLSearchParams ? i = ot(i) : typeof i != "string" && (i = ""); let d = [n, o, r, i, s].join("|"), a = Rr(d); return ir(a); }
function wr(e) { let r = new Uint8Array(e), t = 32768, n = ""; for (let o = 0; o < r.length; o += t) {
    let s = r.subarray(o, o + t);
    n += String.fromCharCode.apply(null, s);
} return btoa(n); }
function st(e) { let r = atob(e); return Uint8Array.from(r, n => n.charCodeAt(0)).buffer; }
function Vr(e) { return [{ provide: oe, useFactory: () => (or("NgHttpTransferCache"), W({ isCacheActive: !0 }, e)) }, { provide: Te, useValue: yr, multi: !0 }, { provide: nr, multi: !0, useFactory: () => { let r = J(sr), t = J(oe); return () => { r.whenStable().then(() => { t.isCacheActive = !1; }); }; } }]; }
function Et(e, r) { let t = new URL(e, "resolve://").origin, n = r[t]; return n ? e.replace(t, n) : e; }
var Er = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), it;
function Rr(e) { it ??= new TextEncoder; let r = it.encode(e), t = 1779033703, n = 3144134277, o = 1013904242, s = 2773480762, i = 1359893119, d = 2600822924, a = 528734635, l = 1541459225, p = r.length * 8, f = (r.length + 8 >> 6) + 1 << 6, T = new Uint8Array(f); T.set(r), T[r.length] = 128; let b = new DataView(T.buffer), R = p >>> 0, y = p / 4294967296 >>> 0; b.setUint32(f - 8, y, !1), b.setUint32(f - 4, R, !1); let c = new Uint32Array(64); for (let u = 0; u < f; u += 64) {
    for (let E = 0; E < 16; E++)
        c[E] = b.getUint32(u + E * 4, !1);
    for (let E = 16; E < 64; E++) {
        let j = c[E - 15], se = ((j >>> 7 | j << 25) ^ (j >>> 18 | j << 14) ^ j >>> 3) >>> 0, S = c[E - 2], ie = ((S >>> 17 | S << 15) ^ (S >>> 19 | S << 13) ^ S >>> 10) >>> 0;
        c[E] = c[E - 16] + se + c[E - 7] + ie >>> 0;
    }
    let m = t, P = n, g = o, O = s, w = i, x = d, k = a, U = l;
    for (let E = 0; E < 64; E++) {
        let j = ((w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7)) >>> 0, se = (w & x ^ ~w & k) >>> 0, S = U + j + se + Er[E] + c[E] >>> 0, ie = ((m >>> 2 | m << 30) ^ (m >>> 13 | m << 19) ^ (m >>> 22 | m << 10)) >>> 0, Rt = (m & P ^ m & g ^ P & g) >>> 0, Pt = ie + Rt >>> 0;
        U = k, k = x, x = w, w = O + S >>> 0, O = g, g = P, P = m, m = S + Pt >>> 0;
    }
    t = t + m >>> 0, n = n + P >>> 0, o = o + g >>> 0, s = s + O >>> 0, i = i + w >>> 0, d = d + x >>> 0, a = a + k >>> 0, l = l + U >>> 0;
} return [t, n, o, s, i, d, a, l].map(u => u.toString(16).padStart(8, "0")).join(""); }
var $r = (() => { let e = ne("json"); return e.arrayBuffer = ne("arraybuffer"), e.blob = ne("blob"), e.text = ne("text"), e; })();
function ne(e) { return function (t, n) { let o = n?.injector ?? J(ar), s = o.get(oe, null, { optional: !0 }), i = o.get(ct, null, { optional: !0 }), d = o.get(ut, null, { optional: !0 }), a = l => { if (s && i && l) {
    let p = bt(l, s, i, d);
    if (p)
        try {
            let f = p.body, T = n?.parse ? n.parse(f) : f;
            return lt({ value: T });
        }
        catch { }
} }; return new xe(o, () => Pr(t, e), n?.defaultValue, n?.debugName, n?.parse, n?.equal, a); }; }
function Pr(e, r) { let t = typeof e == "function" ? e() : e; if (t === void 0)
    return; typeof t == "string" && (t = { url: t }); let n = t.headers instanceof M ? t.headers : new M(t.headers), o = t.params instanceof I ? t.params : new I({ fromObject: t.params }); return new L(t.method ?? "GET", t.url, t.body ?? null, { headers: n, params: o, reportProgress: t.reportProgress, withCredentials: t.withCredentials, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, responseType: r, context: t.context, transferCache: t.transferCache, credentials: t.credentials, referrer: t.referrer, referrerPolicy: t.referrerPolicy, integrity: t.integrity, timeout: t.timeout }); }
var xe = class extends cr {
    client;
    _headers = Pe({ source: this.extRequest, computation: () => { } });
    _progress = Pe({ source: this.extRequest, computation: () => { } });
    _statusCode = Pe({ source: this.extRequest, computation: () => { } });
    headers = dr(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(r, t, n, o, s, i, d) { super(t, ({ params: a, abortSignal: l }) => { let p, f = () => p.unsubscribe(); l.addEventListener("abort", f); let T = lt({ value: void 0 }), b, R = new Promise(c => b = c), y = c => { T.set(c), b?.(T), b = void 0; }; return p = this.client.request(a).subscribe({ next: c => { switch (c.type) {
            case D.Response:
                this._headers.set(c.headers), this._statusCode.set(c.status);
                try {
                    y({ value: s ? s(c.body) : c.body });
                }
                catch (u) {
                    y({ error: lr(u) });
                }
                break;
            case D.DownloadProgress:
                this._progress.set(c);
                break;
        } }, error: c => { c instanceof N && (this._headers.set(c.headers), this._statusCode.set(c.status)), y({ error: c }), l.removeEventListener("abort", f); }, complete: () => { b && y({ error: new dt(991, !1) }), l.removeEventListener("abort", f); } }), R; }, n, i, o, r, d), this.client = r.get(ve); }
    set(r) { super.set(r), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
};
export { Z as FetchBackend, me as HTTP_INTERCEPTORS, ut as HTTP_TRANSFER_CACHE_ORIGIN_MAP, G as HttpBackend, ve as HttpClient, rr as HttpClientJsonpModule, tr as HttpClientModule, er as HttpClientXsrfModule, Q as HttpContext, de as HttpContextToken, N as HttpErrorResponse, D as HttpEventType, C as HttpFeatureKind, re as HttpHandler, V as HttpHeaderResponse, M as HttpHeaders, I as HttpParams, L as HttpRequest, _ as HttpResponse, z as HttpResponseBase, Ve as HttpStatusCode, q as HttpUrlEncodingCodec, ge as HttpXhrBackend, Re as HttpXsrfTokenExtractor, we as JsonpClientBackend, Zt as JsonpInterceptor, $r as httpResource, et as provideHttpClient, Ht as withFetch, Qt as withInterceptors, tt as withInterceptorsFromDi, nt as withJsonpSupport, rt as withNoXsrfProtection, qt as withRequestsMadeViaParent, he as withXsrfConfiguration, Te as \u0275HTTP_ROOT_INTERCEPTOR_FNS, ee as \u0275HttpInterceptingHandler, be as \u0275REQUESTS_CONTRIBUTE_TO_STABILITY, Vr as \u0275withHttpTransferCache };
/*! Bundled license information:

@angular/common/fesm2022/_module-chunk.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v21.2.17
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
