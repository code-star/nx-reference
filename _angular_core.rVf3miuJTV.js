import { a as Pc, b as ot, f as Lc } from "@nf-internal/chunk-SELWPYJI";
import { B as xc, E as Oc, F as gh, G as mh, H as Fc, I as yh, J as vh, K as Eh, L as SM, a as le, b as R, c as bi, f as kc, g as Ai, n as qo, p as Ri, r as ki, s as Lt, w as xi, x as ph, y as hh } from "@nf-internal/chunk-E5FJ2RS5";
import { a as z, b as _e, d as Qe } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as bM, Observable as AM, Subject as RM, Subscription as kM } from "rxjs";
import { setActiveConsumer as Vn } from "@angular/core/primitives/signals";
import { isNotFound as xM } from "@angular/core/primitives/di";
var Pi = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, Vc = new Pi("21.2.17"), Jc = (() => { let e = Vc.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${Vc.major}`}.angular.dev`; })();
var Hi = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", D = class extends Error {
    code;
    constructor(t, n) { super(Jo(t, n)), this.code = t; }
};
function OM(e) { return `NG0${Math.abs(e)}`; }
function Jo(e, t) { return `${OM(e)}${t ? ": " + t : ""}`; }
var be = globalThis;
function j(e) { for (let t in e)
    if (e[t] === j)
        return t; throw Error(""); }
function Nh(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function Xo(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(Xo).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let o = n.indexOf(`
`);
    return o >= 0 ? n.slice(0, o) : n;
}
function Bi(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function PM(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var LM = j({ __forward_ref__: j });
function er(e) { return e.__forward_ref__ = er, e; }
function P(e) { return tr(e) ? e() : e; }
function tr(e) { return typeof e == "function" && e.hasOwnProperty(LM) && e.__forward_ref__ === er; }
function wh(e, t, n) { e != t && Xc(n, e, t, "=="); }
function Xc(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function B(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function nr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function or(e) { return jM(e, Bn); }
function FM(e) { return or(e) !== null; }
function jM(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function VM(e) { let t = e?.[Bn] ?? null; return t || null; }
function Hc(e) { return e && e.hasOwnProperty(zo) ? e[zo] : null; }
var Bn = j({ \u0275prov: j }), zo = j({ \u0275inj: j }), C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = B({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Ih;
function HM(e) { Xc("setInjectorProfilerContext should never be called in production mode"); let t = Ih; return Ih = e, t; }
function el(e) { return e && !!e.\u0275providers; }
var It = j({ \u0275cmp: j }), cn = j({ \u0275dir: j }), rr = j({ \u0275pipe: j }), $i = j({ \u0275mod: j }), rt = j({ \u0275fac: j }), ln = j({ __NG_ELEMENT_ID__: j }), Dh = j({ __NG_ENV_ID__: j });
function un(e) { return Gi(e, "@NgModule"), e[$i] || null; }
function Ui(e) { let t = un(e); if (!t)
    throw new D(915, !1); return t; }
function W(e) { return Gi(e, "@Component"), e[It] || null; }
function Ae(e) { return Gi(e, "@Directive"), e[cn] || null; }
function Ze(e) { return Gi(e, "@Pipe"), e[rr] || null; }
function Gi(e, t) { if (e == null)
    throw new D(-919, !1); }
function ir(e) { let t = W(e) || Ae(e) || Ze(e); return t !== null && t.standalone; }
function b(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Le(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : b(e); }
var _h = j({ ngErrorCode: j }), BM = j({ ngErrorMessage: j }), $M = j({ ngTokenPath: j });
function tl(e, t) { return Sh("", -200, t); }
function qi(e, t) { throw new D(-201, !1); }
function Sh(e, t, n) { let o = new D(t, e); return o[_h] = t, o[BM] = e, n && (o[$M] = n), o; }
function UM(e) { return e[_h]; }
var Bc;
function bh() { return Bc; }
function De(e) { let t = Bc; return Bc = e, t; }
function nl(e, t, n) { let o = or(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; qi(e, ""); }
var GM = {}, on = GM, $c = "__NG_DI_FLAG__", Uc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = rn(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : on, o);
    }
    catch (r) {
        if (Lc(r))
            return r;
        throw r;
    } }
};
function qM(e, t = 0) { let n = Pc(); if (n === void 0)
    throw new D(-203, !1); if (n === null)
    return nl(e, void 0, t); {
    let o = WM(t), r = n.retrieve(e, o);
    if (Lc(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function he(e, t = 0) { return (bh() || qM)(P(e), t); }
function Wi(e) { throw new D(202, !1); }
function v(e, t) { return he(e, rn(t)); }
function rn(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function WM(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Gc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = P(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new D(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = zM(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(he(r, i));
    }
    else
        t.push(he(o));
} return t; }
function $n(e, t) { return e[$c] = t, e.prototype[$c] = t, e; }
function zM(e) { return e[$c]; }
function Ft(e, t) { let n = e.hasOwnProperty(rt); return n ? e[rt] : null; }
function Ah(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Ye(e) { return e.flat(Number.POSITIVE_INFINITY); }
function zi(e, t) { e.forEach(n => Array.isArray(n) ? zi(n, t) : t(n)); }
function ol(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function sr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function ar(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function rl(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function il(e, t, n, o) { let r = e.length; if (r == t)
    e.push(n, o);
else if (r === 1)
    e.push(o, e[0]), e[0] = n;
else {
    for (r--, e.push(e[r - 1], e[r]); r > t;) {
        let i = r - 2;
        e[r] = e[i], r--;
    }
    e[t] = n, e[t + 1] = o;
} }
function cr(e, t, n) { let o = Un(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, il(e, o, t, n)), o; }
function Qi(e, t) { let n = Un(e, t); if (n >= 0)
    return e[n | 1]; }
function Un(e, t) { return QM(e, t, 1); }
function QM(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Fe = {}, F = [], je = new C(""), sl = new C("", -1), al = new C(""), Qo = class {
    get(t, n = on) { if (n === on) {
        let r = Sh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function Ke(e) { return { \u0275providers: e }; }
function Rh(e) { return Ke([{ provide: je, multi: !0, useValue: e }]); }
function kh(...e) { return { \u0275providers: Zi(!0, e), \u0275fromNgModule: !0 }; }
function Zi(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return zi(t, s => { let a = s; Li(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && xh(r, i), n; }
function xh(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    cl(r, i => { t(i, o); });
} }
function Li(e, t, n, o) { if (e = P(e), !e)
    return !1; let r = null, i = Hc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = Hc(c), i)
        r = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    r = e;
} let a = o.has(r); if (s) {
    if (a)
        return !1;
    if (o.add(r), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            Li(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        zi(i.imports, u => { Li(u, t, n, o) && (l ||= [], l.push(u)); }), l !== void 0 && xh(l, t);
    }
    if (!a) {
        let l = Ft(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: F }, r), t({ provide: al, useValue: r, multi: !0 }, r), t({ provide: je, useValue: () => he(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        cl(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function cl(e, t) { for (let n of e)
    el(n) && (n = n.\u0275providers), Array.isArray(n) ? cl(n, t) : t(n); }
var ZM = j({ provide: String, useValue: j });
function Oh(e) { return e !== null && typeof e == "object" && ZM in e; }
function YM(e) { return !!(e && e.useExisting); }
function KM(e) { return !!(e && e.useFactory); }
function sn(e) { return typeof e == "function"; }
function Ph(e) { return !!e.useClass; }
var ll = new C(""), Oi = {}, Th = {}, jc;
function Gn() { return jc === void 0 && (jc = new Qo), jc; }
var Se = class {
}, an = class extends Se {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, Wc(t, s => this.processProvider(s)), this.records.set(sl, Hn(void 0, this)), r.has("environment") && this.records.set(Se, Hn(void 0, this)); let i = this.records.get(ll); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(al, F, { self: !0 })); }
    retrieve(t, n) { let o = rn(n) || 0; try {
        return this.get(t, on, o);
    }
    catch (r) {
        if (xM(r))
            return r;
        throw r;
    } }
    destroy() { Wo(this), this._destroyed = !0; let t = Vn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Vn(t);
    } }
    onDestroy(t) { return Wo(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { Wo(this); let n = ot(this), o = De(void 0), r; try {
        return t();
    }
    finally {
        ot(n), De(o);
    } }
    get(t, n = on, o) { if (Wo(this), t.hasOwnProperty(Dh))
        return t[Dh](this); let r = rn(o), i, s = ot(this), a = De(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = nN(t) && or(t);
                u && this.injectableDefInScope(u) ? l = Hn(qc(t), Oi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? Gn() : this.parent;
        return n = r & 8 && n === on ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = UM(c);
        throw l === -200 || l === -201 ? new D(l, null) : c;
    }
    finally {
        De(a), ot(s);
    } }
    resolveInjectorInitializers() { let t = Vn(null), n = ot(this), o = De(void 0), r; try {
        let i = this.get(je, F, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        ot(n), De(o), Vn(t);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(t) { t = P(t); let n = sn(t) ? t : P(t && t.provide), o = XM(t); if (!sn(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = Hn(void 0, Oi, !0), r.factory = () => Gc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = Vn(null); try {
        if (n.value === Th)
            throw tl("");
        return n.value === Oi && (n.value = Th, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && tN(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        Vn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = P(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function qc(e) { let t = or(e), n = t !== null ? t.factory : Ft(e); if (n !== null)
    return n; if (e instanceof C)
    throw new D(-204, !1); if (e instanceof Function)
    return JM(e); throw new D(-204, !1); }
function JM(e) { if (e.length > 0)
    throw new D(-204, !1); let n = VM(e); return n !== null ? () => n.factory(e) : () => new e; }
function XM(e) { if (Oh(e))
    return Hn(void 0, e.useValue); {
    let t = ul(e);
    return Hn(t, Oi);
} }
function ul(e, t, n) { let o; if (sn(e)) {
    let r = P(e);
    return Ft(r) || qc(r);
}
else if (Oh(e))
    o = () => P(e.useValue);
else if (KM(e))
    o = () => e.useFactory(...Gc(e.deps || []));
else if (YM(e))
    o = (r, i) => he(P(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = P(e && (e.useClass || e.provide));
    if (eN(e))
        o = () => new r(...Gc(e.deps));
    else
        return Ft(r) || qc(r);
} return o; }
function Wo(e) { if (e.destroyed)
    throw new D(-205, !1); }
function Hn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function eN(e) { return !!e.deps; }
function tN(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function nN(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Wc(e, t) { for (let n of e)
    Array.isArray(n) ? Wc(n, t) : n && el(n) ? Wc(n.\u0275providers, t) : t(n); }
function Yi(e, t) { let n; e instanceof an ? (Wo(e), n = e) : n = new Uc(e); let o, r = ot(n), i = De(void 0); try {
    return t();
}
finally {
    ot(r), De(i);
} }
function Ki() { return bh() !== void 0 || Pc() != null; }
function oN(e) { if (!Ki())
    throw new D(-203, !1); }
var $ = 0, m = 1, N = 2, Q = 3, ge = 4, de = 5, fe = 6, Vt = 7, U = 8, L = 9, Ve = 10, w = 11, Ht = 12, lr = 13, dn = 14, te = 15, Bt = 16, fn = 17, it = 18, He = 19, dl = 20, yt = 21, Ji = 22, jt = 23, Re = 24, pn = 25, st = 26, I = 27, fl = 1, ke = 6, Je = 7, ur = 8, hn = 9, q = 10;
function oe(e) { return Array.isArray(e) && typeof e[fl] == "object"; }
function K(e) { return Array.isArray(e) && e[fl] === !0; }
function pl(e) { return (e.flags & 4) !== 0; }
function Te(e) { return e.componentOffset > -1; }
function qn(e) { return (e.flags & 1) === 1; }
function Be(e) { return !!e.template; }
function at(e) { return (e[N] & 512) !== 0; }
function hl(e) { return (e.type & 16) === 16; }
function Lh(e) { return (e[N] & 32) === 32; }
function ct(e) { return (e[N] & 256) === 256; }
var Xi = "svg", es = "math";
function x(e) { for (; Array.isArray(e);)
    e = e[$]; return e; }
function dr(e) { for (; Array.isArray(e);) {
    if (typeof e[fl] == "object")
        return e;
    e = e[$];
} return null; }
function gn(e, t) { return x(t[e]); }
function ae(e, t) { return x(t[e.index]); }
function Fh(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? x(t[n]) : null; }
function $t(e, t) { return e.data[t]; }
function Ut(e, t) { return e[t]; }
function fr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function ve(e, t) { let n = t[e]; return oe(n) ? n : n[$]; }
function jh(e) { return (e[N] & 4) === 4; }
function ts(e) { return (e[N] & 128) === 128; }
function Vh(e) { return K(e[Q]); }
function me(e, t) { return t == null ? null : e[t]; }
function gl(e) { e[fn] = 0; }
function ns(e) { e[N] & 1024 || (e[N] |= 1024, ts(e) && mn(e)); }
function ml(e, t) { for (; e > 0;)
    t = t[dn], e--; return t; }
function Wn(e) { return !!(e[N] & 9216 || e[Re]?.dirty); }
function os(e) { e[Ve].changeDetectionScheduler?.notify(8), e[N] & 64 && (e[N] |= 1024), Wn(e) && mn(e); }
function mn(e) { e[Ve].changeDetectionScheduler?.notify(0); let t = vt(e); for (; t !== null && !(t[N] & 8192 || (t[N] |= 8192, !ts(t)));)
    t = vt(t); }
function pr(e, t) { if (ct(e))
    throw new D(911, !1); e[yt] === null && (e[yt] = []), e[yt].push(t); }
function rs(e, t) { if (e[yt] === null)
    return; let n = e[yt].indexOf(t); n !== -1 && e[yt].splice(n, 1); }
function vt(e) { let t = e[Q]; return K(t) ? t[Q] : t; }
function yl(e) { return e[Vt] ??= []; }
function vl(e) { return e.cleanup ??= []; }
function Hh(e, t, n, o) { let r = yl(t); r.push(n), e.firstCreatePass && vl(e).push(o, r.length - 1); }
var S = { lFrame: Qh(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var zc = !1;
function Bh() { return S.lFrame.elementDepthCount; }
function $h() { S.lFrame.elementDepthCount++; }
function El() { S.lFrame.elementDepthCount--; }
function is() { return S.bindingsEnabled; }
function hr() { return S.skipHydrationRootTNode !== null; }
function Il(e) { return S.skipHydrationRootTNode === e; }
function Dl() { S.bindingsEnabled = !0; }
function Uh(e) { S.skipHydrationRootTNode = e; }
function Tl() { S.bindingsEnabled = !1; }
function Cl() { S.skipHydrationRootTNode = null; }
function g() { return S.lFrame.lView; }
function A() { return S.lFrame.tView; }
function Ml(e) { return S.lFrame.contextLView = e, e[U]; }
function Nl(e) { return S.lFrame.contextLView = null, e; }
function _() { let e = wl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function wl() { return S.lFrame.currentTNode; }
function zn() { let e = S.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function lt(e, t) { let n = S.lFrame; n.currentTNode = e, n.isParent = t; }
function _l() { return S.lFrame.isParent; }
function Sl() { S.lFrame.isParent = !1; }
function bl() { return S.lFrame.contextLView; }
function Al() { return zc; }
function Zo(e) { let t = zc; return zc = e, t; }
function ye() { let e = S.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function ut() { return S.lFrame.bindingIndex; }
function Rl(e) { return S.lFrame.bindingIndex = e; }
function Ee() { return S.lFrame.bindingIndex++; }
function dt(e) { let t = S.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function Gh() { return S.lFrame.inI18n; }
function kl(e) { S.lFrame.inI18n = e; }
function qh(e, t) { let n = S.lFrame; n.bindingIndex = n.bindingRootIndex = e, ss(t); }
function Wh() { return S.lFrame.currentDirectiveIndex; }
function ss(e) { S.lFrame.currentDirectiveIndex = e; }
function as(e) { let t = S.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function cs() { return S.lFrame.currentQueryIndex; }
function gr(e) { S.lFrame.currentQueryIndex = e; }
function rN(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[de] : null; }
function xl(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = rN(i), r === null || (i = i[dn], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = S.lFrame = zh(); return o.currentTNode = t, o.lView = e, !0; }
function ls(e) { let t = zh(), n = e[m]; S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function zh() { let e = S.lFrame, t = e === null ? null : e.child; return t === null ? Qh(e) : t; }
function Qh(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function Zh() { let e = S.lFrame; return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Ol = Zh;
function us() { let e = Zh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function Yh(e) { return (S.lFrame.contextLView = ml(e, S.lFrame.contextLView))[U]; }
function re() { return S.lFrame.selectedIndex; }
function ft(e) { S.lFrame.selectedIndex = e; }
function xe() { let e = S.lFrame; return $t(e.tView, e.selectedIndex); }
function Pl() { S.lFrame.currentNamespace = Xi; }
function Ll() { S.lFrame.currentNamespace = es; }
function Fl() { iN(); }
function iN() { S.lFrame.currentNamespace = null; }
function ds() { return S.lFrame.currentNamespace; }
var Kh = !0;
function mr() { return Kh; }
function Xe(e) { Kh = e; }
function Qc(e, t = null, n = null, o) { let r = jl(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function jl(e, t = null, n = null, o, r = new Set) { let i = [n || F, kh(e)], s; return new an(i, t || Gn(), s || null, r); }
var ue = class e {
    static THROW_IF_NOT_FOUND = on;
    static NULL = new Qo;
    static create(t, n) { if (Array.isArray(t))
        return Qc({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return Qc({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = B({ token: e, providedIn: "any", factory: () => he(sl) });
    static __NG_ELEMENT_ID__ = -1;
}, Gt = new C(""), $e = (() => { class e {
    static __NG_ELEMENT_ID__ = sN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Fi = class extends $e {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return ct(this._lView); }
    onDestroy(t) { let n = this._lView; return pr(n, t), () => rs(n, t); }
};
function sN() { return new Fi(g()); }
var Vl = !1, Hl = new C(""), Dt = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new bM(!1);
    debugTaskTracker = v(Hl, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new AM(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), this.debugTaskTracker?.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.debugTaskTracker?.remove(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Zc = class extends RM {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Ki() && (this.destroyRef = v($e, { optional: !0 }) ?? void 0, this.pendingTasks = v(Dt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof kM && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, mt = Zc;
function ji(...e) { }
function Bl(e) { let t, n; function o() { e = ji; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Jh(e) { return queueMicrotask(() => e()), () => { e = ji; }; }
var $l = "isAngularZone", Yo = $l + "_ID", aN = 0, G = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new mt(!1);
    onMicrotaskEmpty = new mt(!1);
    onStable = new mt(!1);
    onError = new mt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Vl } = t; if (typeof Zone > "u")
        throw new D(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, uN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get($l) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new D(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new D(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, cN, ji, ji); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, cN = {};
function Ul(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function lN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Bl(() => { e.callbackScheduled = !1, Yc(e), e.isCheckStableRunning = !0, Ul(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), Yc(e); }
function uN(e) { let t = () => { lN(e); }, n = aN++; e._inner = e._inner.fork({ name: "angular", properties: { [$l]: !0, [Yo]: n, [Yo + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (dN(c))
        return o.invokeTask(i, s, a, c); try {
        return Ch(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Mh(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Ch(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !fN(c) && t(), Mh(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Yc(e), Ul(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Yc(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Ch(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Mh(e) { e._nesting--, Ul(e); }
var Ko = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new mt;
    onMicrotaskEmpty = new mt;
    onStable = new mt;
    onError = new mt;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function dN(e) { return Xh(e, "__ignore_ng_zone__"); }
function fN(e) { return Xh(e, "__scheduler_tick__"); }
function Xh(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var Et = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, Tt = new C("", { factory: () => { let e = v(G), t = v(Se), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(Et), n.handleError(o)); }); }; } }), Gl = { provide: je, useValue: () => { let e = v(Et, { optional: !0 }); }, multi: !0 }, pN = new C("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = v(Gt).defaultView; if (!e)
        return; let t = v(Tt), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), v($e).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function hN() { return Ke([Rh(() => { v(pN); })]); }
function gN(e) { return null; }
function qt(e, t) { let [n, o, r] = hh(e, t?.equal), i = n, s = i[le]; return i.set = o, i.update = r, i.asReadonly = Qn.bind(i), i; }
function Qn() { let e = this[le]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[le] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function mN(e, t) { if (bi() !== null)
    throw new D(-602, !1); }
var Zn = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = yN;
} return e; })();
function yN() { return new Zn(g(), _()); }
var Pe = class {
}, Yn = new C("", { factory: () => !0 }), vN = new C("", { factory: () => !1 }), fs = new C(""), yr = (() => { class e {
    internalPendingTasks = v(Dt);
    scheduler = v(Pe);
    errorHandler = v(Tt);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), ps = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new Kc });
} return e; })(), Kc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, o = this.queues.get(n); o.has(t) && (o.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let o = this.queues.get(n); o.has(t) || o.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, o] of this.queues)
            n === null ? t ||= this.flushQueue(o) : t ||= n.run(() => this.flushQueue(o));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let o of t)
        o.dirty && (this.dirtyEffectCount--, n = !0, o.run()); return n; }
}, Vi = class {
    [le];
    constructor(t) { this[le] = t; }
    destroy() { this[le].destroy(); }
};
function ql(e, t) { let n = t?.injector ?? v(ue), o = t?.manualCleanup !== !0 ? n.get($e) : null, r, i = n.get(Zn, null, { optional: !0 }), s = n.get(Pe); return i !== null ? (r = DN(i.view, s, e), o instanceof Fi && o._lView === i.view && (o = null)) : r = TN(e, n.get(ps), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new Vi(r); }
var eg = _e(z({}, gh), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = Zo(!1); try {
        mh(this);
    }
    finally {
        Zo(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = R(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], R(e);
    } } }), EN = _e(z({}, eg), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (Lt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), IN = _e(z({}, eg), { consumerMarkedDirty() { this.view[N] |= 8192, mn(this.view), this.notifier.notify(13); }, destroy() { if (Lt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[jt]?.delete(this); } });
function DN(e, t, n) { let o = Object.create(IN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = tg(o, n), e[jt] ??= new Set, e[jt].add(o), o.consumerMarkedDirty(o), o; }
function TN(e, t, n) { let o = Object.create(EN); return o.fn = tg(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function tg(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
import { setActiveConsumer as Xn } from "@angular/core/primitives/signals";
import { Subject as vm, Subscription as CN } from "rxjs";
import { map as MN } from "rxjs/operators";
var Kn = { JSACTION: "jsaction" };
function ht(e) { return { toString: e }.toString(); }
var eo = "__annotations__", to = "__parameters__", no = "__prop__metadata__";
function Xr(e, t, n, o, r) { return ht(() => { let i = Ed(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(eo) ? u[eo] : Object.defineProperty(u, eo, { value: [] })[eo]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function Ed(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Mo(e, t, n) { return ht(() => { let o = Ed(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(to) ? c[to] : Object.defineProperty(c, to, { value: [] })[to]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function St(e, t, n, o) { return ht(() => { let r = Ed(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(no) ? d[no] : Object.defineProperty(d, no, { value: {} })[no]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Em = $n(Mo("Inject", e => ({ token: e })), -1), Im = $n(Mo("Optional"), 8), Dm = $n(Mo("Self"), 2), Tm = $n(Mo("SkipSelf"), 4), Cm = $n(Mo("Host"), 1);
function se(e) { let t = be.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var ng = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: nr, \u0275\u0275inject: he, \u0275\u0275invalidFactoryDep: Wi, resolveForwardRef: P }, Mm = Function;
function Ir(e) { return typeof e == "function"; }
var NN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, wN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, _N = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, SN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function bN(e) { return NN.test(e) || SN.test(e) || wN.test(e) && !_N.test(e); }
var Ls = class {
    _reflect;
    constructor(t) { this._reflect = t || be.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = ar(n.length) : o = ar(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (bN(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Wl(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(to) && t[to], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : ar(t.length); }
    parameters(t) { if (!Ir(t))
        return []; let n = hs(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Wl(t.decorators) : t.hasOwnProperty(eo) ? t[eo] : null; }
    annotations(t) { if (!Ir(t))
        return []; let n = hs(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Wl(o[i]); }), r;
    } return t.hasOwnProperty(no) ? t[no] : null; }
    propMetadata(t) { if (!Ir(t))
        return {}; let n = hs(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Ir(t) ? this._ownPropMetadata(t, hs(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Mm && n in t.prototype; }
};
function Wl(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function hs(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Nm(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Fs = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, wm = (() => { let e = () => _m; return e.ngInherit = !0, e; })();
function _m(e) { return e.type.prototype.ngOnChanges && (e.setInput = RN), AN; }
function AN() { let e = bm(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Fe)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function RN(e, t, n, o, r) { let i = this.declaredInputs[o], s = bm(e) || kN(e, { previous: Fe, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Fs(l && l.currentValue, n, c === Fe), Nm(e, t, r, n); }
var Sm = "__ngSimpleChanges__";
function bm(e) { return e[Sm] || null; }
function kN(e, t) { return e[Sm] = t; }
var og = [];
var V = function (e, t = null, n) { for (let o = 0; o < og.length; o++) {
    let r = og[o];
    r(e, t, n);
} }, O = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(O || {});
function xN(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = _m(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Am(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ns(e, t, n) { Rm(e, t, 3, n); }
function ws(e, t, n, o) { (e[N] & 3) === n && Rm(e, t, n, o); }
function zl(e, t) { let n = e[N]; (n & 3) === t && (n &= 16383, n += 1, e[N] = n); }
function Rm(e, t, n, o) { let r = o !== void 0 ? e[fn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[fn] += 65536), (a < i || i == -1) && (ON(e, n, t, c), e[fn] = (e[fn] & 4294901760) + c + 2), c++; }
function rg(e, t) { V(O.LifecycleHookStart, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), V(O.LifecycleHookEnd, e, t);
} }
function ON(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[N] >> 14 < e[fn] >> 16 && (e[N] & 3) === t && (e[N] += 16384, rg(a, i)) : rg(a, i); }
var so = -1, Cn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function da(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function km(e) { return !!(e.type & 128); }
function PN(e) { return (e.flags & 8) !== 0; }
function LN(e) { return (e.flags & 16) !== 0; }
function FN(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        jN(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function xm(e) { return e === 3 || e === 4 || e === 6; }
function jN(e) { return e.charCodeAt(0) === 64; }
function po(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? ig(e, n, r, null, t[++o]) : ig(e, n, r, null, null));
        }
    } return e; }
function ig(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Om(e) { return e !== so; }
function js(e) { return e & 32767; }
function VN(e) { return e >> 16; }
function Vs(e, t) { let n = VN(e), o = t; for (; n > 0;)
    o = o[dn], n--; return o; }
var mu = !0;
function Hs(e) { let t = mu; return mu = e, t; }
var HN = 256, Pm = HN - 1, Lm = 5, BN = 0, pt = {};
function $N(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(ln) && (o = n[ln]), o == null && (o = n[ln] = BN++); let r = o & Pm, i = 1 << r; t.data[e + (r >> Lm)] |= i; }
function Bs(e, t) { let n = Fm(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Ql(o.data, e), Ql(t, null), Ql(o.blueprint, null)); let r = Id(e, t), i = e.injectorIndex; if (Om(r)) {
    let s = js(r), a = Vs(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Ql(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Fm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Id(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Um(r), o === null)
        return so;
    if (n++, r = r[dn], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return so; }
function yu(e, t, n) { $N(e, t, n); }
function UN(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (xm(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function jm(e, t, n) { if (n & 8 || e !== void 0)
    return e; qi(t, "NodeInjector"); }
function Vm(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[L], i = De(void 0);
    try {
        return r ? r.get(t, o, n & 8) : nl(t, o, n & 8);
    }
    finally {
        De(i);
    }
} return jm(o, t, n); }
function Hm(e, t, n, o = 0, r) { if (e !== null) {
    if (t[N] & 2048 && !(o & 2)) {
        let s = zN(e, t, n, o, pt);
        if (s !== pt)
            return s;
    }
    let i = Bm(e, t, n, o, pt);
    if (i !== pt)
        return i;
} return Vm(t, n, o, r); }
function Bm(e, t, n, o, r) { let i = qN(n); if (typeof i == "function") {
    if (!xl(t, e, o))
        return o & 1 ? jm(r, n, o) : Vm(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            qi(n);
        else
            return s;
    }
    finally {
        Ol();
    }
}
else if (typeof i == "number") {
    let s = null, a = Fm(e, t), c = so, l = o & 1 ? t[te][de] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Id(e, t) : t[a + 8], c === so || !ag(o, !1) ? a = -1 : (s = t[m], a = js(c), t = Vs(c, t))); a !== -1;) {
        let u = t[m];
        if (sg(i, a, u.data)) {
            let d = GN(a, t, n, s, o, l);
            if (d !== pt)
                return d;
        }
        c = t[a + 8], c !== so && ag(o, t[m].data[a + 8] === l) && sg(i, a, t) ? (s = u, a = js(c), t = Vs(c, t)) : a = -1;
    }
} return r; }
function GN(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? Te(a) && mu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = _s(a, s, n, c, l); return u !== null ? xr(t, s, u, a, r) : pt; }
function _s(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && Be(p) && p.type === n)
        return c;
} return null; }
function xr(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Cn) {
    let a = i;
    if (a.resolving)
        throw tl("");
    let c = Hs(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? De(a.injectImpl) : null, f = xl(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && xN(n, s[n], t);
    }
    finally {
        d !== null && De(d), Hs(c), a.resolving = !1, Ol();
    }
} return i; }
function qN(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(ln) ? e[ln] : void 0; return typeof t == "number" ? t >= 0 ? t & Pm : WN : t; }
function sg(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Lm)] & o); }
function ag(e, t) { return !(e & 2) && !(e & 1 && t); }
var Zt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Hm(this._tNode, this._lView, t, rn(o), n); }
};
function WN() { return new Zt(_(), g()); }
function $m(e) { return ht(() => { let t = e.prototype.constructor, n = t[rt] || vu(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[rt] || vu(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function vu(e) { return tr(e) ? () => { let t = vu(P(e)); return t && t(); } : Ft(e); }
function zN(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[N] & 2048 && !at(s);) {
    let a = Bm(i, s, n, o | 2, pt);
    if (a !== pt)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[dl];
        if (l) {
            let u = l.get(n, pt, o & -5);
            if (u !== pt)
                return u;
        }
        c = Um(s), s = s[dn];
    }
    i = c;
} return r; }
function Um(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[de] : null; }
function fa(e) { return UN(_(), e); }
var Gm = Mo("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => fa(e) })), cg = null;
function Dd() { return cg = cg || new Ls; }
function pa(e) { return qm(Dd().parameters(e)); }
function qm(e) { return e.map(t => QN(t)); }
function QN(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Im || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Tm || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Dm || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Cm || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Em)
            t.token = o.token;
        else if (o instanceof Gm) {
            if (o.attributeName === void 0)
                throw new D(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function ZN(e, t) { let n = null, o = null; e.hasOwnProperty(Bn) || Object.defineProperty(e, Bn, { get: () => (n === null && (n = se({ usage: 0, kind: "injectable", type: e }).compileInjectable(ng, `ng:///${e.name}/\u0275prov.js`, XN(e, t))), n) }), e.hasOwnProperty(rt) || Object.defineProperty(e, rt, { get: () => { if (o === null) {
        let r = se({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(ng, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: pa(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var YN = j({ provide: String, useValue: j });
function lg(e) { return e.useClass !== void 0; }
function KN(e) { return YN in e; }
function ug(e) { return e.useFactory !== void 0; }
function JN(e) { return e.useExisting !== void 0; }
function XN(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (lg(n) || ug(n)) && n.deps !== void 0 && (o.deps = qm(n.deps)), lg(n) ? o.useClass = n.useClass : KN(n) ? o.useValue = n.useValue : ug(n) ? o.useFactory = n.useFactory : JN(n) && (o.useExisting = n.useExisting), o; }
var ew = Xr("Injectable", void 0, void 0, void 0, (e, t) => ZN(e, t));
function tw() { return No(_(), g()); }
function No(e, t) { return new ei(ae(e, t)); }
var ei = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = tw;
} return e; })();
function Wm(e) { return e instanceof ei ? e.nativeElement : e; }
function nw() { return this._results[Symbol.iterator](); }
var $s = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new vm; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Ye(t); (this._changesDetected = !Ah(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = nw;
}, xn = "ngSkipHydration", ow = "ngskiphydration";
function Td(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === ow)
        return !0;
} return !1; }
function zm(e) { return e.hasAttribute(xn); }
function Or(e) { return (e.flags & 128) === 128; }
function wo(e) { if (Or(e))
    return !0; let t = e.parent; for (; t;) {
    if (Or(e) || Td(t))
        return !0;
    t = t.parent;
} return !1; }
function Qm(e) { return Or(e) || Td(e) || wo(e); }
var ha = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(ha || {}), ga = new Map, rw = 0;
function iw() { return rw++; }
function sw(e) { ga.set(e[He], e); }
function Zm(e) { return ga.get(e) || null; }
function Eu(e) { ga.delete(e[He]); }
function aw() { return ga; }
var Us = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Zm(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function Ne(e) { let t = Ss(e); if (t) {
    if (oe(t)) {
        let n = t, o, r, i;
        if (Ym(e)) {
            if (o = dw(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (lw(e)) {
            if (o = fw(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Km(o, n);
        }
        else if (o = fg(n, e), o == -1)
            return null;
        let s = x(n[o]), a = Ss(s), c = a && !Array.isArray(a) ? a : dg(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Ue(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ue(i[l], c);
        }
        Ue(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ss(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = fg(i, n);
            if (s >= 0) {
                let a = x(i[s]), c = dg(i, s, a);
                Ue(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function dg(e, t, n) { return new Us(e[He], t, n); }
var Iu = "__ngContext__";
function Ue(e, t) { oe(t) ? (e[Iu] = t[He], sw(t)) : e[Iu] = t; }
function Ss(e) { let t = e[Iu]; return typeof t == "number" ? Zm(t) : t || null; }
function cw(e) { let t = Ss(e); return t ? oe(t) ? t : t.lView : null; }
function Ym(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function lw(e) { return e && e.constructor && e.constructor.\u0275dir; }
function fg(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (x(e[o]) === t)
        return o; return -1; }
function uw(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function dw(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ve(r, e)[U] === t)
            return r;
    }
else if (ve(I, e)[U] === t)
    return I; return -1; }
function fw(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = uw(n);
} return -1; }
function Km(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return F; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Ym(i) || o.push(i);
} return o; }
function pw(e, t) { let n = t[m].data[e]; return Te(n) ? t[n.directiveStart + n.componentOffset] : null; }
function hw(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Jm(e) { return ey(e[Ht]); }
function Xm(e) { return ey(e[ge]); }
function ey(e) { for (; e !== null && !K(e);)
    e = e[ge]; return e; }
function pg(e) { let t = Ne(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = pw(t.nodeIndex, n);
} return t.component; }
function gw(e) { Nw(e); let t = Ne(e), n = t ? t.lView : null; return n === null ? null : n[U]; }
function mw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = vt(n));)
    n = o; return at(n) ? null : n[U]; }
function yw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return ue.NULL; let o = n[m].data[t.nodeIndex]; return new Zt(o, n); }
function vw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    Mw(l) && (l = l.type), i.push(l);
} return i; }
function Ew(e) { if (e instanceof Text)
    return []; let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Km(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var ty = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(ty || {}), ny = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(ny || {});
function Iw(e) { let t = Ne(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = hw(n, t.nodeIndex);
} return t.localRefs || {}; }
function Dw(e) { return Ne(e).native; }
function Tw(e) { let t = Ne(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Vt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = x(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(Cw), s; }
function Cw(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function Mw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function Nw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Du;
function ww(e) { Du = e; }
function ma() { if (Du !== void 0)
    return Du; if (typeof document < "u")
    return document; throw new D(210, !1); }
var bt = new C("", { factory: () => _w }), _w = "ng";
var Cd = new C(""), Sw = new C("", { providedIn: "platform", factory: () => "unknown" }), bw = new C(""), Aw = new C("", { factory: () => v(Gt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), oy = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, Rw = new C("", { factory: () => oy });
function kw(e) { return e; }
var _o = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = ry(v(Gt), v(bt))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function ry(e, t) { let n = e.getElementById(t + "-state"); if (n?.tagName === "SCRIPT" && n.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Md = "h", Nd = "b", iy = "f", sy = "n", ti = "e", ya = "t", So = "c", ni = "x", wt = "r", va = "i", oi = "n", bo = "d", Ea = "l", Ia = "di", ri = "s", wd = "p", ii = "t", On = new C(""), ay = !1, _d = new C("", { factory: () => ay }), Sd = new C(""), Da = new C(""), bd = !1, cy = new C("", { factory: () => [] }), Ad = new C(""), si = new C("", { factory: () => new Map }), xw = new C(""), Gs = { passive: !0, capture: !0 }, Zl = new WeakMap, Yl = new WeakMap, Qt = new WeakMap, qs = ["click", "keydown"], Ws = ["mouseenter", "mouseover", "focusin"], gs = new Map, Pr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function ly(e, t) { let n = Yl.get(e); if (!n) {
    n = new Pr, Yl.set(e, n);
    for (let o of qs)
        e.addEventListener(o, n.listener, Gs);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Yl.delete(e);
    for (let i of qs)
        e.removeEventListener(i, r, Gs);
} }; }
function uy(e, t) { let n = Zl.get(e); if (!n) {
    n = new Pr, Zl.set(e, n);
    for (let o of Ws)
        e.addEventListener(o, n.listener, Gs);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Ws)
        e.removeEventListener(i, r, Gs);
    Zl.delete(e);
} }; }
function Ow(e) { let t = dy(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Qt.has(o.target) && Qt.get(o.target)?.get(t)?.listener(); }, e); }
function Pw(e, t, n, o) { let r = dy(o), i = Qt.get(e)?.get(r); gs.has(r) || gs.set(r, { observer: n(o), count: 0 }); let s = gs.get(r); if (!i) {
    i = new Pr, s.observer.observe(e);
    let a = Qt.get(e);
    a ? a.set(r, i) : (a = new Map, Qt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Qt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Qt.get(e);
        a && (a.delete(r), a.size === 0 && Qt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), gs.delete(r));
} }; }
function dy(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Ao = "ngb";
function Rd(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Kn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Kn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Ao, i); }
var fy = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, kd = (e, t) => { let n = e, o = n.getAttribute(Ao) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function Lw(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(xd);
} }
var xd = e => { e.removeAttribute(Kn.JSACTION), e.removeAttribute(Ao), e.__jsaction_fns = void 0; }, Od = new C("", { factory: () => ({}) }), Tu = new WeakMap;
function Fw(e, t) { if (e == null || typeof e != "object")
    return; let n = Tu.get(e); n || (n = new WeakSet, Tu.set(e, n)), n.add(t); }
function Pd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected) && !(t && Tu.get(e)?.has(t)))
    for (let o of n)
        o(e); }
var Cu = new Map;
function py(e, t) { return Cu.set(e, t), () => Cu.delete(e); }
var hg = !1, hy = (e, t, n, o) => { };
function jw(e, t, n, o) { hy(e, t, n, o); }
function gy() { hg || (hy = (e, t, n, o) => { let r = e[L].get(bt); Cu.get(r)?.(t, n, o); }, hg = !0); }
var At = new C(""), my = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = v(si);
    contract = v(Od);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { Lw(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Ro(e) { return (e.flags & 32) === 32; }
var yy = "__nghData__", Ta = yy, vy = "__nghDeferData__", Ca = vy;
function Vw(e) { return e === yy || e === vy; }
var ao = "ngh", Ey = "nghm", Iy = () => null;
function Hw(e, t, n = !1) { let o = e.getAttribute(ao); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(_o, null, { optional: !0 });
    u !== null && (c = u.get(Ta, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ma(l, 0, e.nextSibling)), a ? e.setAttribute(ao, a) : e.removeAttribute(ao), l; }
function Dy() { Iy = Hw; }
function Ty(e, t, n = !1) { return Iy(e, t, n); }
function Ld(e) { let t = e._lView; return t[m].type === 2 ? null : (at(t) && (t = t[I]), t); }
function Bw(e) { return e.textContent?.replace(/\s/gm, ""); }
function $w(e) { let t = ma(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = Bw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Cy = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Cy || {}), Uw = "__ngDebugHydrationInfo__";
function Gw(e) { return e[Uw] ?? null; }
function Ma(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Mu(e, t) { return e.segmentHeads?.[t] ?? null; }
function ai(e) { return e.get(Ad, !1, { optional: !0 }); }
var qw = !1;
function Ww() { qw = !1; }
function My(e, t) { let n = e.data, o = n[ti]?.[t] ?? null; return o === null && n[So]?.[t] && (o = Fd(e, t)), o; }
function zw(e, t) { return e.data[ti]?.[t] !== void 0; }
function Ny(e, t) { return e.data[So]?.[t] ?? null; }
function Fd(e, t) { let n = Ny(e, t) ?? [], o = 0; for (let r of n)
    o += r[wt] * (r[ni] ?? 1); return o; }
function wy(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[bo];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Na(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[bo];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!wy(e)?.has(t); }
function wa(e, t) { let n = e[fe]; return n !== null && !hr() && !Ro(t) && !Na(n, t.index - I); }
function jd(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function _y(e) { let t = []; return e !== null && (e.has(4) && t.push(...Ws), e.has(3) && t.push(...qs)), t; }
function Qw(e, t) { let n = t.get(At), r = t.get(_o).get(Ca, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][wd];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function Zw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Ws.join(":;"), qs.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Sy(e, t) { let n = Zw(e), o = t.get(si); for (let r of n)
    kd(r, o); }
var by = () => ({});
function Yw(e) { let t = e.get(_o, null, { optional: !0 }); return t !== null ? t.get(Ca, {}) : {}; }
function Ay() { by = Yw; }
function Kw(e) { return by(e); }
function Jw(e) { return typeof e == "object" && e.trigger === 5; }
function Xw(e) { return e[ii]?.find(n => Jw(n))?.delay ?? null; }
function e_(e) { let t = e[ii]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function gg(e, t) { return e[ii]?.includes(t) ?? !1; }
function t_(e) { return { data: e, hydrate: { idle: gg(e, 0), immediate: gg(e, 1), timer: Xw(e), viewport: e_(e) } }; }
function Ry(e) { let t = Kw(e), n = new Map; for (let o in t)
    n.set(o, t_(t[o])); return n; }
function Kl(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Ey; }
function mg(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function ky(e) { for (let o of e.body.childNodes)
    if (Kl(o))
        return; let t = mg(e.body.previousSibling); if (Kl(t))
    return; let n = mg(e.head.lastChild); if (!Kl(n))
    throw new D(-507, !1); }
function xy(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                gr(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function Nu(e, t, n) { gr(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function Vd(e, t, n) { if (pl(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var Ge = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Ge || {}), n_ = { name: "custom-elements" }, o_ = { name: "no-errors-schema" }, Oy = !1;
function r_(e) { Oy = e; }
function i_() { return Oy; }
var Py = !1;
function s_(e) { Py = e; }
function a_() { return Py; }
var ms;
function Ly() { if (ms === void 0 && (ms = null, be.trustedTypes))
    try {
        ms = be.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ms; }
function ko(e) { return Ly()?.createHTML(e) || e; }
function c_(e) { return Ly()?.createScriptURL(e) || e; }
var ys;
function Hd() { if (ys === void 0 && (ys = null, be.trustedTypes))
    try {
        ys = be.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ys; }
function yg(e) { return Hd()?.createHTML(e) || e; }
function vg(e) { return Hd()?.createScript(e) || e; }
function Eg(e) { return Hd()?.createScriptURL(e) || e; }
var _t = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Hi})`; }
}, wu = class extends _t {
    getTypeName() { return "HTML"; }
}, _u = class extends _t {
    getTypeName() { return "Style"; }
}, Su = class extends _t {
    getTypeName() { return "Script"; }
}, bu = class extends _t {
    getTypeName() { return "URL"; }
}, Au = class extends _t {
    getTypeName() { return "ResourceURL"; }
};
function Rt(e) { return e instanceof _t ? e.changingThisBreaksApplicationSecurity : e; }
function xo(e, t) { let n = Fy(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Hi})`);
} return n === t; }
function Fy(e) { return e instanceof _t && e.getTypeName() || null; }
function l_(e) { return new wu(e); }
function u_(e) { return new _u(e); }
function d_(e) { return new Su(e); }
function f_(e) { return new bu(e); }
function p_(e) { return new Au(e); }
function jy(e) { let t = new ku(e); return h_() ? new Ru(t) : t; }
var Ru = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(ko(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, ku = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = ko(t), n; }
};
function h_() { try {
    return !!new window.DOMParser().parseFromString(ko(""), "text/html");
}
catch {
    return !1;
} }
var g_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function _a(e) { return e = String(e), e.match(g_) ? e : "unsafe:" + e; }
function kt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ci(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Vy = kt("area,br,col,hr,img,wbr"), Hy = kt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), By = kt("rp,rt"), m_ = ci(By, Hy), y_ = ci(Hy, kt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), v_ = ci(By, kt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), xu = ci(Vy, y_, v_, m_), $y = kt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), E_ = kt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), I_ = kt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Ou = ci($y, E_, I_), D_ = kt("script,style,template"), Pu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = M_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = C_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Ig(t).toLowerCase(); if (!xu.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !D_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Ou.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        $y[a] && (c = _a(c)), this.buf.push(" ", s, '="', Dg(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Ig(t).toLowerCase(); xu.hasOwnProperty(n) && !Vy.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Dg(t)); }
};
function T_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function C_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Uy(t); return t; }
function M_(e) { let t = e.firstChild; if (t && T_(e, t))
    throw Uy(t); return t; }
function Ig(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Uy(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var N_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, w_ = /([^\#-~ |!])/g;
function Dg(e) { return e.replace(/&/g, "&amp;").replace(N_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(w_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var vs;
function Gy(e, t) { let n = null; try {
    vs = vs || jy(e);
    let o = t ? String(t) : "";
    n = vs.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = vs.getInertBodyElement(o);
    } while (o !== i);
    let a = new Pu().sanitizeChildren(Lu(n) || n);
    return ko(a);
}
finally {
    if (n) {
        let o = Lu(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Lu(e) { return "content" in e && __(e) ? e.content : null; }
function __(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var S_ = /^>|^->|<!--|-->|--!>|<!-$/g, b_ = /(<|>)/g, A_ = "\u200B$1\u200B";
function R_(e) { return e.replace(S_, t => t.replace(b_, A_)); }
function Bd(e, t) { return e.createText(t); }
function qy(e, t, n) { e.setValue(t, n); }
function $d(e, t) { return e.createComment(R_(t)); }
function Sa(e, t, n) { return e.createElement(t, n); }
function Mn(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Wy(e, t, n) { e.appendChild(t, n); }
function Tg(e, t, n, o, r) { o !== null ? Mn(e, t, n, o, r) : Wy(e, t, n); }
function li(e, t, n, o) { e.removeChild(null, t, n, o); }
function zy(e) { e.textContent = ""; }
function k_(e, t, n) { e.setAttribute(t, "style", n); }
function x_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Qy(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && FN(e, t, o), r !== null && x_(e, t, r), i !== null && k_(e, t, i); }
function O_(e) { let t = g(); e.src = "", e.srcdoc = ko(""), li(t[w], e); }
var J = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e; })(J || {}), bs, Cg = "svg", P_ = "math";
function L_() { return bs || (bs = {}, Wt(J.HTML, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), Wt(J.STYLE, void 0, [["*", ["style"]]]), Wt(J.URL, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), Wt(J.URL, P_, [["annotation", ["href", "xlink:href"]], ["annotation-xml", ["href", "xlink:href"]], ["maction", ["href", "xlink:href"]], ["malignmark", ["href", "xlink:href"]], ["math", ["href", "xlink:href"]], ["mroot", ["href", "xlink:href"]], ["msqrt", ["href", "xlink:href"]], ["merror", ["href", "xlink:href"]], ["mfrac", ["href", "xlink:href"]], ["mglyph", ["href", "xlink:href"]], ["msub", ["href", "xlink:href"]], ["msup", ["href", "xlink:href"]], ["msubsup", ["href", "xlink:href"]], ["mmultiscripts", ["href", "xlink:href"]], ["mprescripts", ["href", "xlink:href"]], ["mi", ["href", "xlink:href"]], ["mn", ["href", "xlink:href"]], ["mo", ["href", "xlink:href"]], ["mpadded", ["href", "xlink:href"]], ["mphantom", ["href", "xlink:href"]], ["mrow", ["href", "xlink:href"]], ["ms", ["href", "xlink:href"]], ["mspace", ["href", "xlink:href"]], ["mstyle", ["href", "xlink:href"]], ["mtable", ["href", "xlink:href"]], ["mtd", ["href", "xlink:href"]], ["mtr", ["href", "xlink:href"]], ["mtext", ["href", "xlink:href"]], ["mover", ["href", "xlink:href"]], ["munder", ["href", "xlink:href"]], ["munderover", ["href", "xlink:href"]], ["semantics", ["href", "xlink:href"]], ["none", ["href", "xlink:href"]]]), Wt(J.RESOURCE_URL, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), Wt(J.URL, Cg, [["a", ["href", "xlink:href"]]]), Wt(J.ATTRIBUTE_NO_BINDING, Cg, [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), Wt(J.ATTRIBUTE_NO_BINDING, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]]])), bs; }
function Wt(e, t, n) { for (let [o, r] of n) {
    let i = t && o !== "*" && o !== "unknown" ? `:${t}:${o}` : o;
    i = i.toLowerCase();
    for (let s of r)
        bs[`${i}|${s.toLowerCase()}`] = e;
} }
function Ud(e) { let t = ui(); return t ? yg(t.sanitize(J.HTML, e) || "") : xo(e, "HTML") ? yg(Rt(e)) : Gy(ma(), b(e)); }
function Gd(e) { let t = ui(); return t ? t.sanitize(J.STYLE, e) || "" : xo(e, "Style") ? Rt(e) : b(e); }
function qd(e) { let t = ui(); return t ? t.sanitize(J.URL, e) || "" : xo(e, "URL") ? Rt(e) : _a(b(e)); }
function ba(e) { let t = ui(); if (t)
    return Eg(t.sanitize(J.RESOURCE_URL, e) || ""); if (xo(e, "ResourceURL"))
    return Eg(Rt(e)); throw new D(904, !1); }
function Wd(e) { let t = ui(); if (t)
    return vg(t.sanitize(J.SCRIPT, e) || ""); if (xo(e, "Script"))
    return vg(Rt(e)); throw new D(905, !1); }
function Zy(e) { return ko(e[0]); }
function Yy(e) { return c_(e[0]); }
var F_ = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function j_(e, t) { return F_[e.toLowerCase()]?.[t.toLowerCase()] === !0 ? ba : qd; }
function Ky(e, t, n) { return j_(t, n)(e); }
function ui() { let e = g(); return e && e[Ve].sanitizer; }
var Es = new Set(["href", "xlink:href"]), V_ = ["attributeName", "attributename"], H_ = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, ":svg:animate": { attributename: !0, to: Es, values: Es, from: Es }, ":svg:set": { attributename: !0, to: Es }, ":svg:animatemotion": { attributename: !0 }, ":svg:animatetransform": { attributename: !0 } };
function zd(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(), s = re() === -1 ? null : xe(); if (s && s.type !== 2)
    return e; let a = o[0] !== ":" && s?.namespace ? `:${s.namespace}:${o}` : o, c = H_[a]?.[r]; if (!c)
    return e; let l = g(); if (s && o === "iframe") {
    let f = ae(s, l);
    O_(f);
} let u = t[0] === ":" ? t.split(":").pop() : t; if (typeof c != "boolean") {
    if (!s)
        throw new D(-910, !1);
    let f = ae(s, l);
    if (B_(f, c))
        throw new D(-910, !1);
    return e;
} let d = !1; throw new D(-910, d); }
function B_(e, t) { for (let n of V_) {
    let o = e.getAttribute(n);
    if (o !== null && t.has(o.toLowerCase()))
        return o;
} return null; }
function $_() { return Ke([]); }
function Jy(e) { return e.ownerDocument.defaultView; }
function Xy(e) { return e.ownerDocument; }
function Qd(e) { return e.ownerDocument.body; }
var U_ = "\uFFFD";
function oo(e) { return e instanceof Function ? e() : e; }
function G_(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var ev = "ng-template";
function q_(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && G_(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Zd(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Zd(e) { return e.type === 4 && e.value !== ev; }
function W_(e, t, n) { let o = e.type === 4 && !n ? ev : e.value; return t === o; }
function z_(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? Y_(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !et(o) && !et(c))
            return !1;
        if (s && et(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !W_(e, c, n) || c === "" && t.length === 1) {
                if (et(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !q_(e, r, c, n)) {
                if (et(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = Q_(c, r, Zd(e), n);
            if (u === -1) {
                if (et(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (et(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return et(o) || s; }
function et(e) { return (e & 1) === 0; }
function Q_(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return K_(t, e); }
function tv(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (z_(e, t[o], n))
        return !0; return !1; }
function Z_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function Y_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (xm(n))
        return t;
} return e.length; }
function K_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function J_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Mg(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function X_(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !et(s) && (t += Mg(i, r), r = ""), o = s, i = i || !et(o);
    n++;
} return r !== "" && (t += Mg(i, r)), t; }
function eS(e) { return e.map(X_).join(","); }
function tS(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!et(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var H = {};
function Yd(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = nS(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function nS(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : H); return n; }
function nv(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Yd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Aa(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[$] = r, d[N] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[N] & 2048) && (d[N] |= 2048), gl(d), d[Q] = d[dn] = e, d[U] = n, d[Ve] = s || e && e[Ve], d[w] = a || e && e[w], d[L] = c || e && e[L] || null, d[de] = i, d[He] = iw(), d[fe] = u, d[dl] = l, d[te] = t.type == 2 ? e[te] : d, d; }
function oS(e, t, n) { let o = ae(t, e), r = nv(n), i = e[Ve].rendererFactory, s = Jd(e, Aa(e, r, null, Kd(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Kd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function di(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Jd(e, t) { return e[Ht] ? e[lr][ge] = t : e[Ht] = t, e[lr] = t, t; }
function ov(e = 1) { rv(A(), g(), re() + e, !1); }
function rv(e, t, n, o) { if (!o)
    if ((t[N] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ns(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && ws(t, i, 0, n);
    } ft(n); }
var Ra = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ra || {});
function Yt(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ra.SignalBased) !== 0 && (c = t[i][le]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Nm(t, c, i, o);
}
finally {
    R(r);
} }
var zs = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(zs || {}), Fu;
function Xd(e, t) { return Fu(e, t); }
function rS(e) { Fu === void 0 && (Fu = e()); }
var iv = new C("", { factory: () => !1 }), sv = new C("", { factory: () => iS }), iS = 4e3, sS = !1, Pn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function ka(e) { return e[L].get(iv, sS); }
function aS(e, t, n) { let o = ho.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    ho.set(e, { classList: t, cleanupFns: n }); }
function ef(e) { let t = ho.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    ho.delete(e);
} Tn.delete(e); }
var cS = () => { }, ho = new WeakMap, Tn = new WeakMap, Lr = new WeakMap, Dr = new WeakSet;
function ju(e, t) { let n = Lr.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Lr.delete(e); }
function lS(e, t) { let n = Lr.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Dr.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function tf(e, t) { let n = Lr.get(e); n ? n.includes(t) || n.push(t) : Lr.set(e, [t]); }
function Qs(e) { let t = e[st] ??= {}; return t.enter ??= new Map; }
function Nn(e) { let t = e[st] ??= {}; return t.leave ??= new Map; }
function av(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function uS(e, t) { if (!Pn)
    return; let n = ho.get(e); if (n && n.classList.length > 0 && dS(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); ef(e); }
function dS(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function Fr(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function nf(e, t) { let n = Tn.get(t); return n === void 0 ? !0 : t === Fr(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function xa(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Vu(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Hu(e, t) { let n = Nn(e).get(t.index); n && (n.resolvers = void 0); }
function Is(e, t, n, o, r) { ju(t, n), Vu(o, r), Hu(e, t); }
function Zs(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function In(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function fS(e) { let t = In(e, "transition-property"), n = In(e, "transition-duration"), o = In(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Zs(o[i]) + Zs(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function pS(e) { let t = In(e, "animation-name"), n = In(e, "animation-delay"), o = In(e, "animation-duration"), r = In(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = Zs(n[s]) + Zs(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function cv(e, t) { return e !== void 0 && e.duration > t.duration; }
function lv(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function hS(e, t) { let n = getComputedStyle(e), o = pS(n), r = fS(n), i = o.duration > r.duration ? o : r; cv(t.get(e), i) || lv(i) && t.set(e, i); }
function uv(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? hS(e, t) : gS(e, t, o); }
function gS(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} cv(t.get(e), o) || lv(o) && t.set(e, o); }
var wn = new Set, Oa = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Oa || {}), Ln = new C(""), Ng = new Set;
function X(e) { Ng.has(e) || (Ng.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Pa = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), of = [0, 1, 2, 3], rf = (() => { class e {
    ngZone = v(G);
    scheduler = v(Pe);
    errorHandler = v(Et, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { v(Ln, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(O.AfterRenderHooksStart), this.executing = !0; for (let o of of)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(O.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[pn] ??= []).push(n), mn(o), o[N] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Oa.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), jr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[pn]; t && (this.view[pn] = t.filter(n => n !== this)); }
};
function dv(e, t) { let n = t?.injector ?? v(ue); return typeof ngServerMode < "u" && ngServerMode ? La : (X("NgAfterRender"), fv(e, n, t, !1)); }
function sf(e, t) { let n = t?.injector ?? v(ue); return typeof ngServerMode < "u" && ngServerMode ? La : (X("NgAfterNextRender"), fv(e, n, t, !0)); }
function mS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function fv(e, t, n, o) { let r = t.get(Pa); r.impl ??= t.get(rf); let i = t.get(Ln, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get($e) : null, a = t.get(Zn, null, { optional: !0 }), c = new jr(r.impl, mS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var La = { destroy() { } }, Fa = new C("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: v(Se) }) });
function pv(e, t, n) { let o = e.get(Fa); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function yS(e, t) { let n = e.get(Fa); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function vS(e) { let t = e.get(Fa); t.isScheduled || (sf(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function ja(e) { let t = e.get(Fa); t.scheduler = vS, t.scheduler(e); }
function af(e, t) { for (let [n, o] of t)
    pv(e, o.animateFns); }
function wg(e, t, n, o) { let r = e?.[st]?.enter; t !== null && r && r.has(n.index) && af(o, r); }
function ro(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    K(r) ? c = r : oe(r) && (l = !0, r = r[$]);
    let u = x(r);
    e === 0 && o !== null ? (wg(a, o, i, n), s == null ? Wy(t, o, u) : Mn(t, o, u, s || null, !0)) : e === 1 && o !== null ? (wg(a, o, i, n), Mn(t, o, u, s || null, !0), lS(i, u)) : e === 2 ? (a?.[st]?.leave?.has(i.index) && tf(i, u), Dr.delete(u), _g(a, i, n, d => { if (Dr.has(u)) {
        Dr.delete(u);
        return;
    } li(t, u, l, d); })) : e === 3 && (Dr.delete(u), _g(a, i, n, () => { t.destroyNode(u); })), c != null && NS(t, e, n, c, i, o, s);
} }
function hv(e, t) { gv(e, t), t[$] = null, t[de] = null; }
function ES(e, t, n, o, r, i) { o[$] = r, o[de] = t, Va(e, o, n, 1, r, i); }
function gv(e, t) { t[Ve].changeDetectionScheduler?.notify(9), Va(e, t, t[w], 2, null, null); }
function IS(e) { let t = e[Ht]; if (!t)
    return Jl(e[m], e); for (; t;) {
    let n = null;
    if (oe(t))
        n = t[Ht];
    else {
        let o = t[q];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ge] && t !== e;)
            oe(t) && Jl(t[m], t), t = t[Q];
        t === null && (t = e), oe(t) && Jl(t[m], t), n = t && t[ge];
    }
    t = n;
} }
function cf(e, t) { let n = e[hn], o = n.indexOf(t); n.splice(o, 1); }
function fi(e, t) { if (ct(t))
    return; let n = t[w]; n.destroyNode && Va(e, t, n, 3, null, null), IS(t); }
function Jl(e, t) { if (ct(t))
    return; let n = R(null); try {
    t[N] &= -129, t[N] |= 256, t[Re] && Lt(t[Re]), CS(e, t), TS(e, t), t[m].type === 1 && t[w].destroy();
    let o = t[Bt];
    if (o !== null && K(t[Q])) {
        o !== t[Q] && cf(o, t);
        let r = t[it];
        r !== null && r.detachView(e);
    }
    Eu(t);
}
finally {
    R(n);
} }
function _g(e, t, n, o) { let r = e?.[st]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && wn.add(e[He]), pv(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), DS(e, o);
}
else
    e && wn.delete(e[He]), o(!1); }, r); }
function DS(e, t) { let n = e[st]?.running; if (n) {
    n.then(() => { e[st].running = void 0, wn.delete(e[He]), t(!0); });
    return;
} t(!1); }
function TS(e, t) { let n = e.cleanup, o = t[Vt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Vt] = null); let r = t[yt]; if (r !== null) {
    t[yt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[jt]; if (i !== null) {
    t[jt] = null;
    for (let s of i)
        s.destroy();
} }
function CS(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Cn)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(O.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(O.LifecycleHookEnd, a, c);
                    }
                }
            else {
                V(O.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(O.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function lf(e, t, n) { return mv(e, t.parent, n); }
function mv(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[$]; if (Te(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Ge.None || r === Ge.Emulated)
        return null;
} return ae(o, n); }
function yv(e, t, n) { return Ev(e, t, n); }
function vv(e, t, n) { return e.type & 40 ? ae(e, n) : null; }
var Ev = vv, Bu;
function Iv(e, t) { Ev = e, Bu = t; }
function uf(e, t, n, o) { let r = lf(e, o, t), i = t[w], s = o.parent || t[de], a = yv(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Tg(i, r, n[c], a, !1);
    else
        Tg(i, r, n, a, !1); Bu !== void 0 && Bu(i, o, t, n, r); }
function Dn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ae(t, e);
    if (n & 4)
        return $u(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Dn(e, o);
        {
            let r = e[t.index];
            return K(r) ? $u(-1, r) : x(r);
        }
    }
    else {
        if (n & 128)
            return Dn(e, t.next);
        if (n & 32)
            return Xd(t, e)() || x(e[t.index]);
        {
            let o = Dv(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = vt(e[te]);
                return Dn(r, o);
            }
            else
                return Dn(e, t.next);
        }
    }
} return null; }
function Dv(e, t) { if (t !== null) {
    let o = e[te][de], r = t.projection;
    return o.projection[r];
} return null; }
function $u(e, t) { let n = q + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return Dn(o, r);
} return t[Je]; }
function df(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[L];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Ue(x(c), o), n.flags |= 2), !Ro(n))
        if (l & 8)
            df(e, t, n.child, o, r, i, !1), ro(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Xd(n, o), d;
            for (; d = u();)
                ro(t, e, a, r, d, n, i, o);
            ro(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Tv(e, t, o, n, r, i) : ro(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Va(e, t, n, o, r, i) { df(n, o, e.firstChild, t, r, i, !1); }
function MS(e, t, n) { let o = t[w], r = lf(e, n, t), i = n.parent || t[de], s = yv(i, n, t); Tv(o, 0, t, n, r, s); }
function Tv(e, t, n, o, r, i) { let s = n[te], c = s[de].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        ro(t, e, n[L], r, u, o, i, n);
    }
else {
    let l = c, u = s[Q];
    Or(o) && (l.flags |= 128), df(e, t, l, u, r, i, !0);
} }
function NS(e, t, n, o, r, i, s) { let a = o[Je], c = x(o); a !== c && ro(t, e, n, i, a, r, s); for (let l = q; l < o.length; l++) {
    let u = o[l];
    Va(u[m], u, e, t, i, a);
} }
function wS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : zs.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= zs.Important), e.setStyle(n, o, r, i));
} }
function Cv(e, t, n, o, r) { let i = re(), s = o & 2; try {
    ft(-1), s && t.length > I && rv(e, t, I, !1);
    let a = s ? O.TemplateUpdateStart : O.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    ft(i);
    let a = s ? O.TemplateUpdateEnd : O.TemplateCreateEnd;
    V(a, r, n);
} }
function Ha(e, t, n) { RS(e, t, n), (n.flags & 64) === 64 && kS(e, t, n); }
function Oo(e, t, n = ae) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function _S(e, t, n, o) { let i = o.get(_d, ay) || n === Ge.ShadowDom || n === Ge.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); if (s.tagName.toLowerCase() === "script")
    throw new D(905, !1); return SS(s), s; }
function SS(e) { Mv(e); }
var Mv = () => null;
function bS(e) { zm(e) ? zy(e) : $w(e); }
function Nv() { Mv = bS; }
function AS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function ff(e, t, n, o, r, i) { let s = t[m]; if (Ga(e, s, t, n, o)) {
    Te(e) && wv(t, e.index);
    return;
} e.type & 3 && (n = AS(n)), pf(e, t, n, o, r, i); }
function pf(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ae(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function wv(e, t) { let n = ve(t, e); n[N] & 16 || (n[N] |= 64); }
function RS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; Te(n) && oS(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Bs(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = xr(t, e, s, n);
    if (Ue(c, t), i !== null && PS(t, s - o, c, a, n, i), Be(a)) {
        let l = ve(n.index, t);
        l[U] = xr(t, e, s, n);
    }
} }
function kS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Wh(); try {
    ft(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        ss(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && xS(c, l);
    }
}
finally {
    ft(-1), ss(s);
} }
function xS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function hf(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        tv(t, i.selectors, !1) && (o ??= [], Be(i) ? o.unshift(i) : o.push(i));
    } return o; }
function OS(e, t, n, o, r, i) { let s = ae(e, t); Ba(t[w], s, i, e.value, n, o, r); }
function Ba(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? b(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function PS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Yt(o, n, c, l);
    } }
function $a(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, lt(e, !0); let c = e.type === 2; return c ? (Qy(t[w], a, e), (Bh() === 0 || qn(e)) && Ue(a, t), $h()) : Ue(a, t), mr() && (!c || !Ro(e)) && uf(s, t, a, e), e; }
function Ua(e) { let t = e; return _l() ? Sl() : (t = t.parent, lt(t, !1)), t; }
function _v(e, t, n) { return (e === null || Be(e)) && (n = dr(n[t.index])), n[w]; }
function gf(e, t) { let n = e[L]; if (!n)
    return; let o; try {
    o = n.get(Tt, null);
}
catch {
    o = null;
} o?.(t); }
function Ga(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Yt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Yt(u, l, o, r), a = !0;
    } return a; }
function LS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            Yt(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Yt(o, n[s], r, i), l = !0), l; }
function FS(e, t) { let n = ve(t, e), o = n[m]; jS(o, n); let r = n[$]; r !== null && n[fe] === null && (n[fe] = Ty(r, n[L])), V(O.ComponentStart); try {
    qa(o, n, n[U]);
}
finally {
    V(O.ComponentEnd, n[U]);
} }
function jS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function qa(e, t, n) { ls(t); try {
    let o = e.viewQuery;
    o !== null && Nu(1, o, n);
    let r = e.template;
    r !== null && Cv(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[it]?.finishViewCreation(e), e.staticContentQueries && xy(e, t), e.staticViewQueries && Nu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && VS(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[N] &= -5, us();
} }
function VS(e, t) { for (let n = 0; n < t.length; n++)
    FS(e, t[n]); }
function Po(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[N] & 4096 ? 4096 : 16, c = Aa(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Bt] = l;
    let u = e[it];
    return u !== null && (c[it] = u.createEmbeddedView(i)), qa(i, c, n), c;
}
finally {
    R(r);
} }
function _n(e, t) { return !t || t.firstChild === null || Or(e); }
function go(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(x(i)), K(i) && Wa(i, o);
    let s = n.type;
    if (s & 8)
        go(e, t, n.child, o);
    else if (s & 32) {
        let a = Xd(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Dv(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = vt(t[te]);
            go(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Wa(e, t) { for (let n = q; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && go(o[m], o, r, t);
} e[Je] !== e[$] && t.push(e[Je]); }
function Sv(e) { if (e[pn] !== null) {
    for (let t of e[pn])
        t.impl.addSequence(t);
    e[pn].length = 0;
} }
var bv = [];
function HS(e) { return e[Re] ?? BS(e); }
function BS(e) { let t = bv.pop() ?? Object.create(US); return t.lView = e, t; }
function $S(e) { e.lView[Re] !== e && (e.lView = null, bv.push(e)); }
var US = _e(z({}, kc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { mn(e.lView); }, consumerOnSignalRead() { this.lView[Re] = this; } });
function GS(e) { let t = e[Re] ?? Object.create(qS); return t.lView = e, t; }
var qS = _e(z({}, kc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = vt(e.lView); for (; t && !Av(t[m]);)
        t = vt(t); t && ns(t); }, consumerOnSignalRead() { this.lView[Re] = this; } });
function Av(e) { return e.type !== 2; }
function Rv(e) { if (e[jt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[jt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[N] & 8192);
} }
var WS = 100;
function kv(e, t = 0) { let o = e[Ve].rendererFactory, r = !1; r || o.begin?.(); try {
    zS(e, t);
}
finally {
    r || o.end?.();
} }
function zS(e, t) { let n = Al(); try {
    Zo(!0), Uu(e, t);
    let o = 0;
    for (; Wn(e);) {
        if (o === WS)
            throw new D(103, !1);
        o++, Uu(e, 1);
    }
}
finally {
    Zo(n);
} }
function xv(e, t, n, o) { if (ct(t))
    return; let r = t[N], i = !1, s = !1; ls(t); let a = !0, c = null, l = null; i || (Av(e) ? (l = HS(t), c = qo(l)) : bi() === null ? (a = !1, l = GS(t), c = qo(l)) : t[Re] && (Lt(t[Re]), t[Re] = null)); try {
    gl(t), Rl(e.bindingStartIndex), n !== null && Cv(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ns(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && ws(t, p, 0, null), zl(t, 0);
        }
    if (s || QS(t), Rv(t), Ov(t, 0), e.contentQueries !== null && xy(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ns(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && ws(t, p, 1), zl(t, 1);
        }
    YS(e, t);
    let d = e.components;
    d !== null && Lv(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Nu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ns(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && ws(t, p, 2), zl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Ji]) {
        for (let p of t[Ji])
            p();
        t[Ji] = null;
    }
    i || (Sv(t), t[N] &= -73);
}
catch (u) {
    throw i || mn(t), u;
}
finally {
    l !== null && (Ri(l, c), a && $S(l)), us();
} }
function Ov(e, t) { for (let n = Jm(e); n !== null; n = Xm(n))
    for (let o = q; o < n.length; o++) {
        let r = n[o];
        Pv(r, t);
    } }
function QS(e) { for (let t = Jm(e); t !== null; t = Xm(t)) {
    if (!(t[N] & 2))
        continue;
    let n = t[hn];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ns(r);
    }
} }
function ZS(e, t, n) { V(O.ComponentStart); let o = ve(t, e); try {
    Pv(o, n);
}
finally {
    V(O.ComponentEnd, o[U]);
} }
function Pv(e, t) { ts(e) && Uu(e, t); }
function Uu(e, t) { let o = e[m], r = e[N], i = e[Re], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && ki(i)), s ||= !1, i && (i.dirty = !1), e[N] &= -9217, s)
    xv(o, e, o.template, e[U]);
else if (r & 8192) {
    let a = R(null);
    try {
        Rv(e), Ov(e, 1);
        let c = o.components;
        c !== null && Lv(e, c, 1), Sv(e);
    }
    finally {
        R(a);
    }
} }
function Lv(e, t, n) { for (let o = 0; o < t.length; o++)
    ZS(e, t[o], n); }
function YS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                ft(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                qh(s, i);
                let c = t[i];
                V(O.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    V(O.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        ft(-1);
    } }
function pi(e, t) { let n = Al() ? 64 : 1088; for (e[Ve].changeDetectionScheduler?.notify(t); e;) {
    e[N] |= n;
    let o = vt(e);
    if (at(e) && !o)
        return e;
    e = o;
} return null; }
function Fv(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function jv(e, t) { let n = q + t; if (n < e.length)
    return e[n]; }
function Lo(e, t, n, o = !0) { let r = t[m]; if (KS(r, t, e, n), o) {
    let s = $u(n, e), a = t[w], c = a.parentNode(e[Je]);
    c !== null && ES(r, e[de], a, t, c, s);
} let i = t[fe]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function mf(e, t) { let n = Vr(e, t); return n !== void 0 && fi(n[m], n), n; }
function Vr(e, t) { if (e.length <= q)
    return; let n = q + t, o = e[n]; if (o) {
    let r = o[Bt];
    r !== null && r !== e && cf(r, o), t > 0 && (e[n - 1][ge] = o[ge]);
    let i = sr(e, q + t);
    hv(o[m], o);
    let s = i[it];
    s !== null && s.detachView(i[m]), o[Q] = null, o[ge] = null, o[N] &= -129;
} return o; }
function KS(e, t, n, o) { let r = q + o, i = n.length; o > 0 && (n[r - 1][ge] = t), o < i - q ? (t[ge] = n[r], ol(n, q + o, t)) : (n.push(t), t[ge] = null), t[Q] = n; let s = t[Bt]; s !== null && n !== s && Vv(s, t); let a = t[it]; a !== null && a.insertView(e), os(t), t[N] |= 128; }
function Vv(e, t) { let n = e[hn], o = t[Q]; if (oe(o))
    e[N] |= 2;
else {
    let r = o[Q][te];
    t[te] !== r && (e[N] |= 2);
} n === null ? e[hn] = [t] : n.push(t); }
var Jt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return go(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[U]; }
    set context(t) { this._lView[U] = t; }
    get destroyed() { return ct(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Q];
        if (K(t)) {
            let n = t[ur], o = n ? n.indexOf(this) : -1;
            o > -1 && (Vr(t, o), sr(n, o));
        }
        this._attachedToViewContainer = !1;
    } fi(this._lView[m], this._lView); }
    onDestroy(t) { pr(this._lView, t); }
    markForCheck() { pi(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[N] &= -129; }
    reattach() { os(this._lView), this._lView[N] |= 128; }
    detectChanges() { this._lView[N] |= 1024, kv(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new D(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = at(this._lView), n = this._lView[Bt]; n !== null && !t && cf(n, this._lView), gv(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new D(902, !1); this._appRef = t; let n = at(this._lView), o = this._lView[Bt]; o !== null && !n && Vv(o, this._lView), os(this._lView); }
};
function JS(e) { return Wn(e._lView) || !!(e._lView[N] & 64); }
function XS(e) { ns(e._lView); }
var Hr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = eb;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Po(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Jt(i); }
} return e; })();
function eb() { return za(_(), g()); }
function za(e, t) { return e.type & 4 ? new Hr(t, e, No(e, t)) : null; }
var Gu = "<-- AT THIS LOCATION", tb = "/guide/hydration#third-party-scripts-with-dom-manipulation";
function nb(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function ob(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${ab(e, t, !1)}

`, r = lb();
    throw new D(-502, n + o + r);
}
function Hv(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${cb(e)}

`, o = t + n + ub();
    return new D(-503, o);
}
function rb(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Ys(r)}"`);
    } return t.join(" "); }
var ib = new Set(["ngh", "ng-version", "ng-server-context"]);
function sb(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    ib.has(o.name) || t.push(`${o.name}="${Ys(o.value)}"`);
} return t.join(" "); }
function Xl(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = rb(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${nb(e.type)})`;
} }
function As(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = sb(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Ys(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Ys(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function ab(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Xl(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Xl(t) + `
`, r += `  <!-- container -->  ${Gu}
`) : r += "  " + Xl(t) + `  ${Gu}
`, r += `  \u2026
`;
    let i = t.type ? lf(e[m], t, e) : null;
    return i && (r = As(i, `
` + r)), r;
}
function cb(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + As(o.previousSibling) + `
`), n += "  " + As(o) + `  ${Gu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = As(o.parentNode, `
` + n)), n;
}
function lb(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * check if there are any third-party scripts that manipulate the DOM. More info: ${Jc}${tb}
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function ub() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function db(e) { return e.replace(/\s+/gm, ""); }
function Ys(e, t = 50) { return e ? (e = db(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Bv(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? vv(e, t, n) : x(n[r]); }
function $v(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Mn(e, s, l, a, !1);
        }
} }
function Fn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = yf(e, t, n, o, r), Gh() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = zn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return lt(i, !0), i; }
function yf(e, t, n, o, r) { let i = wl(), s = _l(), a = s ? i : i && i.parent, c = e.data[t] = pb(e, a, n, t, o, r); return fb(e, c, i, s), c; }
function fb(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function pb(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return hr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, namespace: ds(), attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Uv(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Gv(o) || hb(o, t) && gb(o) === null && mb(o, t.index);
    } }
function Gv(e) { return !(e.type & 64); }
function hb(e, t) { return Gv(t) || e.index > t.index; }
function gb(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function mb(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Iv(Bv, $v), e.insertBeforeIndex = t); }
function Cr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function yb(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function vb(e, t) { let n = e.insertBeforeIndex; n === null ? (Iv(Bv, $v), n = e.insertBeforeIndex = [null, t]) : (wh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function Eb(e, t, n) { let o = yf(e, n, 64, null, null); return Uv(t, o), o; }
function Qa(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function Ib(e) { return e >>> 17; }
function Db(e) { return (e & 131070) >>> 1; }
function Tb(e, t, n) { return e | t << 17 | n << 1; }
function qv(e) { return e === -1; }
function vf(e, t, n) { e.index = 0; let o = Qa(t, n); o !== null ? e.removes = t.remove[o] : e.removes = F; }
function Ks(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return vf(e, o, e.lView), Ks(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Ks(e)); }
function Cb() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return vf(e, n.value, o), Ks.bind(null, e); } return t; }
function Mb(e, t) { let n = { stack: [], index: -1, lView: t }; return vf(n, e, t), Ks.bind(null, n); }
var Nb = new RegExp(`^(\\d+)*(${Nd}|${Md})*(.*)`);
function wb(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function _b(e) { let t = e.match(Nb), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function Sb(e) { return !e.prev && e.parent?.type === 8; }
function eu(e) { return e.index - I; }
function Fo(e, t) { return !(e.type & 144) && !!t[e.index] && Wv(x(t[e.index])); }
function Wv(e) { return !!e && !e.isConnected; }
function zv(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function bb(e, t, n) { let r = e.data[oi]?.[n]; return r ? Qv(r, t) : null; }
function hi(e, t, n, o) { let r = eu(o), i = zv(e, r); if (i === void 0) {
    let s = e.data[oi];
    if (s?.[r])
        i = Qv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (Sb(o)) {
            let l = eu(o.parent);
            i = Mu(e, l);
        }
        else {
            let l = ae(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = eu(c), d = Mu(e, u);
                if (c.type === 2 && d) {
                    let p = Fd(e, u) + 1;
                    i = Za(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Za(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function Ab(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case iy:
                n = n.firstChild;
                break;
            case sy:
                n = n.nextSibling;
                break;
        }
} return n; }
function Qv(e, t) { let [n, ...o] = _b(e), r; if (n === Md)
    r = t[te][$];
else if (n === Nd)
    r = Qd(t[te][$]);
else {
    let i = Number(n);
    r = x(t[i + I]);
} return Ab(r, o); }
function qu(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return Rb(e, t); {
    let n = t.parentElement, o = qu(e, n), r = qu(n.firstChild, t);
    return !o || !r ? null : [...o, iy, ...r];
} }
function Rb(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(sy); return o == null ? null : n; }
function Sg(e, t, n) { let o = qu(e, t); return o === null ? null : wb(n, o); }
function Zv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Fo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Md, i = t[te][$]) : (r = o.index, i = x(t[r]), s = b(r - I)); let a = x(t[e.index]); if (e.type & 44) {
    let l = Dn(t, e);
    l && (a = l);
} let c = Sg(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Sg(l, a, Nd), c === null)
        throw ob(t, e);
} return c; }
function Yv(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: kb }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function kb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Kv = !1, Jv = () => { };
function Ef(e) { Kv = e; }
function Ya() { return Kv; }
function xb(e, t, n, o) { Jv(e, t, n, o); }
function Xv() { Jv = jb; }
function eE(e) { return e = e ?? v(ue), e.get(Sd, !1); }
function tE(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Ob(e), t.i18nChildren.set(e, n)), n; }
function Ob(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function nE(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && Qm(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Wu(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Wu(e, t, n, o) { let r = null; for (let i of o) {
    let s = Lb(e, t, n, i);
    s && (Pb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function Pb(e, t) { return e && e.nextSibling !== t; }
function Lb(e, t, n, o) { let r = x(e[o.index]); if (!r || Wv(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        jd(n, i);
        break;
    }
    case 1:
    case 2: {
        Wu(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Wu(e, t, n, o.cases[a]);
        }
        break;
    }
} return Fb(e, o); }
function Fb(e, t) { let o = e[m].data[t.index]; return da(o) ? Dn(e, o) : t.kind === 3 ? Mb(o, e)() ?? x(e[t.index]) : x(e[t.index]) ?? null; }
function yn(e, t) { e.currentNode = t; }
function vr(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function tu(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function nu(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function jb(e, t, n, o) { let r = e[fe]; if (!r || !Ya() || n && (Qm(n) || Na(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (qv(o)) {
    let p = hi(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = wy(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Ea]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; Jn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Jn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = bb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = nu(t, i)), Jn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = vr(e, t, n);
            yn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Jn(e, nu(t, t.currentNode?.firstChild ?? null), n.children);
            let o = vr(e, t, n);
            yn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = My(r, o);
            switch (n.type) {
                case 0: {
                    let s = vr(e, t, n);
                    if (zw(r, o)) {
                        Jn(e, t, n.children);
                        let a = tu(t, 1);
                        yn(t, a);
                    }
                    else if (Jn(e, nu(t, t.currentNode?.firstChild ?? null), n.children), yn(t, s?.nextSibling ?? null), i !== null) {
                        let a = tu(t, i + 1);
                        yn(t, a);
                    }
                    break;
                }
                case 1: {
                    vr(e, t, n);
                    let s = tu(t, i + 1);
                    yn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Jn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = vr(e, t, n);
            yn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var oE = () => { };
function Vb(e, t, n) { oE(e, t, n); }
function rE() { oE = Hb; }
function Hb(e, t, n) { let o = e[fe]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Bb(e) { let t = e[fe]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[w];
        for (let i of o.values())
            $b(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function $b(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && li(e, r, !1);
} }
function Ka(e) { let t = e[ke] ?? [], o = e[Q][w], r = []; for (let i of t)
    i.data[Ia] !== void 0 ? r.push(i) : iE(i, o); e[ke] = r; }
function Ub(e) { let { lContainer: t } = e, n = t[ke]; if (n === null)
    return; let r = t[Q][w]; for (let i of n)
    iE(i, r); }
function iE(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[wt];
    for (; n < r;) {
        let i = o.nextSibling;
        li(t, o, !1), o = i, n++;
    }
} }
function Ja(e) { Ka(e); let t = e[$]; oe(t) && Br(t); for (let n = q; n < e.length; n++)
    Br(e[n]); }
function Br(e) { Bb(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        Ja(o);
    }
    else
        oe(e[n]) && Br(e[n]); }
function If(e) { let t = e._views; for (let n of t) {
    let o = Ld(n);
    o !== null && o[$] !== null && (oe(o) ? Br(o) : Ja(o));
} }
function Gb(e, t, n, o) { e !== null && (n.cleanup(t), Ja(e.lContainer), If(o)); }
function qb(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[ni] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[wt] > 0 && (i.firstChild = e, e = Za(o[wt], e)), n.push(i);
    } return [e, n]; }
var sE = () => null, aE = () => null;
function cE() { sE = Wb, aE = zb; }
function Wb(e, t) { return uE(e, t) ? e[ke].shift() : (Ka(e), null); }
function $r(e, t) { return sE(e, t); }
function zb(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = $r(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && Qb(n, t), o; }
function lE(e, t, n) { return aE(e, t, n); }
function Qb(e, t) { let n = t; for (; n;) {
    if (bg(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (bg(e, n))
        return;
    n = n.next;
} }
function uE(e, t) { let n = e[ke]; return !t || n === null || n.length === 0 ? !1 : n[0].data[va] === t; }
function bg(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && uE(o, n) ? (Ka(o), !0) : !1; }
var dE = class {
}, Xa = class {
}, zu = class {
    resolveComponentFactory(t) { throw new D(917, !1); }
}, gi = class {
    static NULL = new zu;
}, Ur = class {
}, Zb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Yb();
} return e; })();
function Yb() { let e = g(), t = _(), n = ve(t.index, e); return (oe(n) ? n : e)[w]; }
var fE = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Df(e) { return e.ngModule !== void 0; }
function vn(e) { return !!un(e); }
function Ds(e) { return !!Ze(e); }
function Ag(e) { return !!Ae(e); }
function Mr(e) { return !!W(e); }
function Kb(e) { return W(e) ? "component" : Ae(e) ? "directive" : Ze(e) ? "pipe" : "type"; }
function Jb(e, t) { if (tr(e) && (e = P(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Le(t)}", to return a standalone entity or NgModule but got "${Le(e) || e}".`); if (un(e) == null) {
    let n = W(e) || Ae(e) || Ze(e);
    if (n != null) {
        if (!n.standalone) {
            let o = Kb(e);
            throw new Error(`The "${Le(e)}" ${o}, imported from "${Le(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw Df(e) ? new Error(`A module with providers was imported from "${Le(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Le(e)}" type, imported from "${Le(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Qu = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = un(t);
            if (n?.declarations)
                for (let o of oo(n.declarations))
                    Mr(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!vn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Ui(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of oo(n.imports))
        if (vn(r)) {
            let i = this.getNgModuleScope(r);
            zt(i.exported.directives, o.compilation.directives), zt(i.exported.pipes, o.compilation.pipes);
        }
        else if (ir(r))
            if (Ag(r) || Mr(r))
                o.compilation.directives.add(r);
            else if (Ds(r))
                o.compilation.pipes.add(r);
            else
                throw new D(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of oo(n.declarations)) {
            if (vn(r) || ir(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Ds(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of oo(n.exports))
        if (vn(r)) {
            let i = this.getNgModuleScope(r);
            zt(i.exported.directives, o.exported.directives), zt(i.exported.pipes, o.exported.pipes), zt(i.exported.directives, o.compilation.directives), zt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Ds(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ye(n ?? [])) {
        let i = P(r);
        try {
            Jb(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (vn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            zt(s.exported.directives, o.compilation.directives), zt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Ds(i))
            o.compilation.pipes.add(i);
        else if (Ag(i) || Mr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function zt(e, t) { for (let n of e)
    t.add(n); }
var mo = new Qu, Rs = {}, co = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Rs, o); return r !== Rs || n === Rs ? r : this.parentInjector.get(t, n, o); }
};
function Js(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Bi(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Bi(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function jo(e, t = 0) { let n = g(); if (n === null)
    return he(e, t); let o = _(); return Hm(o, n, P(e), t); }
function pE() { let e = "invalid"; throw new Error(e); }
function hE(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    tA(e, t, n, a, i, c, l);
} i !== null && o !== null && Xb(n, o, i); }
function Xb(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new D(-301, !1);
    o.push(t[r], i);
} }
function eA(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function tA(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && Be(p) && (c = p, eA(e, n, f)), yu(Bs(n, t), e, p.type);
} aA(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = di(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = po(n.mergedAttrs, p.hostAttrs), oA(e, n, t, d, p), sA(d, p, r), s !== null && s.has(p)) {
        let [y, E] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, E + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} nA(e, n, i); }
function nA(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Rg(0, t, r, o), Rg(1, t, r, o), xg(t, o, !1);
    else {
        let i = n.get(r);
        kg(0, t, i, o), kg(1, t, i, o), xg(t, o, !0);
    }
} }
function Rg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), gE(t, i);
    } }
function kg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), gE(t, s);
    } }
function gE(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function xg(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Zd(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function oA(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Ft(r.type, !0)), s = new Cn(i, Be(r), jo, null); e.blueprint[o] = s, n[o] = s, rA(e, t, o, di(e, n, r.hostVars, H), r); }
function rA(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    iA(s) != a && s.push(a), s.push(n, o, i);
} }
function iA(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function sA(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    Be(t) && (n[""] = e);
} }
function aA(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function Tf(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = me(l, s), d = Fn(c, e, n, o, u); return i && hE(c, t, d, me(l, a), r), d.mergedAttrs = po(d.mergedAttrs, d.attrs), d.attrs !== null && Js(d, d.attrs, !1), d.mergedAttrs !== null && Js(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Cf(e, t) { Am(e, t), pl(t) && e.queries.elementEnd(t); }
function mE(e, t, n, o, r, i) { let s = t.consts, a = me(s, r), c = Fn(t, e, n, o, a); if (c.mergedAttrs = po(c.mergedAttrs, c.attrs), i != null) {
    let l = me(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Js(c, c.attrs, !1), c.mergedAttrs !== null && Js(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Gr(e) { return ec(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function cA(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function yE(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ec(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function vE(e, t) { let n = Gr(e), o = Gr(t); return n && o ? cA(e, t, vE) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function tt(e, t, n) { return e[t] = n; }
function Vo(e, t) { return e[t]; }
function Y(e, t, n) { if (n === H)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Sn(e, t, n, o) { let r = Y(e, t, n); return Y(e, t + 1, o) || r; }
function tc(e, t, n, o, r) { let i = Sn(e, t, n, o); return Y(e, t + 2, r) || i; }
function qe(e, t, n, o, r, i) { let s = Sn(e, t, n, o); return Sn(e, t + 2, r, i) || s; }
function Kt(e, t, n) { return function o(r) { let i = o.__ngNativeEl__; i !== void 0 && Fw(r, i); let s = Te(e) ? ve(e.index, t) : t; pi(s, 5); let a = t[U], c = Og(t, a, n, r), l = o.__ngNextListenerFn__; for (; l;)
    c = Og(t, a, l, r) && c, l = l.__ngNextListenerFn__; return c; }; }
function Og(e, t, n, o) { let r = Xn(null); try {
    return V(O.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return gf(e, i), !1;
}
finally {
    V(O.OutputEnd, t, n), Xn(r);
} }
function Mf(e, t, n, o, r, i, s, a) { let c = qn(e), l = !1, u = null; if (!o && c && (u = uA(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ae(e, n), f = o ? o(d) : d;
    jw(n, f, i, a), o || (a.__ngNativeEl__ = d);
    let p = r.listen(f, i, a);
    if (!lA(i)) {
        let h = o ? y => o(x(y[e.index])) : e.index;
        EE(h, t, n, i, a, p, !1);
    }
} return l; }
function lA(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function uA(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Vt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function EE(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? vl(t) : null, c = yl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function dA(e, t, n, o, r) { let i = Kt(e, t, n), s = fA(e, t, o, r, i); }
function fA(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, yo(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, yo(e, t, i, o, o, r)), c; }
function yo(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); EE(e.index, a, t, r, i, d, !0); }
function IE() { DE(); }
function DE() { let e = g(), t = A(), n = _(); if (t.firstCreatePass && pA(t, n), n.controlDirectiveIndex === -1)
    return; X("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new Xs(e, t, n)); }
function TE() { CE(); }
function CE() { let e = g(), t = A(), n = xe(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new Xs(e, t, n)); }
var Xs = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { ME(this.tView.data[this.tNode.customControlIndex], t) && yo(this.tNode, this.lView, this.tNode.customControlIndex, t, t, Kt(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; yo(this.tNode, this.lView, this.tNode.customControlIndex, n, n, Kt(this.tNode, this.lView, t)); }
    listenToDom(t, n) { Mf(this.tNode, this.tView, this.lView, void 0, this.lView[w], t, n, Kt(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            Yt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            Yt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; Yt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function pA(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} hA(e, t); }
function hA(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (Pg(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (Pg(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function Pg(e, t) { return gA(e, t) && ME(e, t + "Change"); }
function gA(e, t) { return t in e.inputs; }
function ME(e, t) { return t in e.outputs; }
var Nt = Symbol("BINDING"), Lg = { kind: "input", requiredVars: 1 }, mA = { kind: "output", requiredVars: 0 };
function Fg(e, t, n) { let o = g(), r = Ee(); if (Y(o, r, n)) {
    let i = o[m], s = xe(), a = ve(s.index, o);
    pi(a, 1);
    let c = i.directiveRegistry[e], l = LS(s, i, o, c, t, n);
} }
function NE(e, t) { if (e === "formField") {
    let o = { [Nt]: Lg, create: () => { DE(); }, update: () => { Fg(o.targetIdx, e, t()), CE(); } };
    return o;
} let n = { [Nt]: Lg, update: () => Fg(n.targetIdx, e, t()) }; return n; }
function wE(e, t) { let n = { [Nt]: mA, create: () => { let o = g(), r = _(), s = o[m].directiveRegistry[n.targetIdx]; dA(r, o, t, s, e); } }; return n; }
function yA(e, t) { let n = NE(e, t), o = wE(e + "Change", i => t.set(i)); return { [Nt]: { kind: "twoWay", requiredVars: n[Nt].requiredVars + o[Nt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function vA(e) { let t = e; for (; t;) {
    let n = cw(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!oe(r) && !K(r) || r[$] !== t)
                continue;
            let i = n[m], s = $t(i, o);
            if (Te(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = Nf(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function Nf(e) { return e.debugInfo?.className || e.type.name || null; }
var ea = class extends gi {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Xt(n, this.ngModule); }
};
function EA(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Ra.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function IA(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function DA(e, t, n) { let o = t instanceof Se ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new co(n, o) : n; }
function TA(e) { let t = e.get(Ur, null); if (t === null)
    throw new D(407, !1); let n = e.get(fE, null), o = e.get(Pe, null), r = e.get(Ln, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function CA(e, t) { let n = _E(e); return Sa(t, n, n === "svg" ? Xi : n === "math" ? es : null); }
function _E(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Xt = class extends Xa {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= EA(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= IA(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = eS(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(O.DynamicComponentStart); let a = R(null); try {
        let c = this.componentDef, l = DA(c, r || this.ngModule, t), u = TA(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(Nf(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        R(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = MA(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? _S(l, r, a.encapsulation, n) : CA(a, l), d = s?.some(jg) || i?.some(h => typeof h != "function" && h.bindings.some(jg)), f = Aa(null, c, null, 512 | Kd(a), null, null, t, l, n, null, Ty(u, n, !0)); f[I] = u, ls(f); let p = null; try {
        let h = Tf(I, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        Qy(l, u, h), Ue(u, f), Ha(c, f, h), Vd(c, h, f), Cf(c, h), o !== void 0 && wA(h, this.ngContentSelectors, o), p = ve(h.index, f), f[U] = p[U], qa(c, f, null);
    }
    catch (h) {
        throw p !== null && Eu(p), Eu(f), h;
    }
    finally {
        V(O.DynamicComponentEnd), us();
    } return new ta(this.componentType, f, !!d); }
};
function MA(e, t, n, o) { let r = e ? ["ng-version", "21.2.17"] : tS(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Nt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Nt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ae(d);
        c.push(f);
    } return Yd(0, null, NA(i, s), 1, a, c, null, null, null, [r], null); }
function NA(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function jg(e) { let t = e[Nt].kind; return t === "input" || t === "twoWay"; }
var ta = class extends dE {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = $t(n[m], I), this.location = No(this._tNode, n), this.instance = ve(this._tNode.index, n)[U], this.hostView = this.changeDetectorRef = new Jt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Ga(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = ve(o.index, r); pi(s, 1); }
    get injector() { return new Zt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function wA(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var nc = (() => { class e {
    static __NG_ELEMENT_ID__ = _A;
} return e; })();
function _A() { let e = _(); return SE(e, g()); }
var Zu = class e extends nc {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return No(this._hostTNode, this._hostLView); }
    get injector() { return new Zt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Id(this._hostTNode, this._hostLView); if (Om(t)) {
        let n = Vs(t, this._hostLView), o = js(t), r = n[m].data[o + 8];
        return new Zt(r, n);
    }
    else
        return new Zt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Vg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - q; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = $r(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, _n(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Ir(t), l; if (c)
        l = n;
    else {
        let E = n || {};
        l = E.index, o = E.injector, r = E.projectableNodes, i = E.environmentInjector || E.ngModuleRef, s = E.directives, a = E.bindings;
    } let u = c ? t : new Xt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let T = (c ? d : this.parentInjector).get(Se, null);
        T && (i = T);
    } let f = W(u.componentType ?? {}), p = $r(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, _n(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Vh(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Q], l = new e(c, c[de], c[Q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Lo(s, r, i, o), t.attachToViewContainerRef(), ol(ou(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Vg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Vr(this._lContainer, n); o && (sr(ou(this._lContainer), n), fi(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Vr(this._lContainer, n); return o && sr(ou(this._lContainer), n) != null ? new Jt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Vg(e) { return e[ur]; }
function ou(e) { return e[ur] || (e[ur] = []); }
function SE(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = Fv(o, t, null, e), t[e.index] = n, Jd(t, n)), bE(n, t, e, o), new Zu(n, e, t); }
function SA(e, t) { let n = e[w], o = n.createComment(""), r = ae(t, e), i = n.parentNode(r); return Mn(n, i, o, n.nextSibling(r), !1), o; }
var bE = RE, wf = () => !1;
function AE(e, t, n) { return wf(e, t, n); }
function RE(e, t, n, o) { if (e[Je])
    return; let r; n.type & 8 ? r = x(o) : r = SA(t, n), e[Je] = r; }
function bA(e, t, n) { if (e[Je] && e[ke])
    return !0; let o = n[fe], r = t.index - I; if (!o || wo(t) || Na(o, r))
    return !1; let s = Mu(o, r), a = o.data[So]?.[r]; if (a === void 0)
    return !1; let [c, l] = qb(s, a); return e[Je] = c, e[ke] = l, !0; }
function AA(e, t, n, o) { wf(e, n, t) || RE(e, t, n, o); }
function kE() { bE = AA, wf = bA; }
var Yu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Ku = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        Sf(t, n).matches !== null && this.queries[n].setDirty(); }
}, na = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = PA(t) : this.predicate = t; }
}, Ju = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Xu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, RA(n, i)), this.matchTNodeWithReadOption(t, n, _s(n, t, i, !1, !1));
        }
    else
        o === Hr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, _s(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === ei || r === nc || r === Hr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = _s(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function RA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function kA(e, t) { return e.type & 11 ? No(e, t) : e.type & 4 ? za(e, t) : null; }
function xA(e, t, n, o) { return n === -1 ? kA(t, e) : n === -2 ? OA(e, t, o) : xr(e, e[m], n, t); }
function OA(e, t, n) { if (n === ei)
    return No(t, e); if (n === Hr)
    return za(t, e); if (n === nc)
    return SE(t, e); }
function xE(e, t, n, o) { let r = t[it].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(xA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function ed(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = xE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = q; d < u.length; d++) {
                let f = u[d];
                f[Bt] === f[Q] && ed(f[m], f, l, o);
            }
            if (u[hn] !== null) {
                let d = u[hn];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    ed(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function _f(e, t) { return e[it].queries[t].queryList; }
function OE(e, t, n) { let o = new $s((n & 4) === 4); return Hh(e, t, o, o.destroy), (t[it] ??= new Ku).queries.push(new Yu(o)) - 1; }
function PE(e, t, n) { let o = A(); return o.firstCreatePass && (FE(o, new na(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), OE(o, g(), t); }
function LE(e, t, n, o) { let r = A(); if (r.firstCreatePass) {
    let i = _();
    FE(r, new na(t, n, o), i.index), LA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return OE(r, g(), n); }
function PA(e) { return e.split(",").map(t => t.trim()); }
function FE(e, t, n) { e.queries === null && (e.queries = new Ju), e.queries.track(new Xu(t, n)); }
function LA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Sf(e, t) { return e.queries.getByIndex(t); }
function jE(e, t) { let n = e[m], o = Sf(n, t); return o.crossesNgTemplate ? ed(n, e, t, []) : xE(n, e, o, t); }
function bf(e, t, n) { let o, r = xi(() => { o._dirtyCounter(); let i = FA(o, e); if (t && i === void 0)
    throw new D(-951, !1); return i; }); return o = r[le], o._dirtyCounter = qt(0), o._flatValue = void 0, r; }
function Af(e) { return bf(!0, !1, e); }
function Rf(e) { return bf(!0, !0, e); }
function kf(e) { return bf(!1, !1, e); }
function VE(e, t) { let n = e[le]; n._lView = g(), n._queryIndex = t, n._queryList = _f(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function FA(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[N] & 4)
    return t ? void 0 : F; let r = _f(n, o), i = jE(n, o); return r.reset(i, Wm), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var bn = new Map, qr = new Set;
function HE(e) { return Qe(this, null, function* () { let t = bn; bn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => $A(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => Qe(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), qr.delete(i); })); yield Promise.all(r); }); }
function jA(e, t) { BE(t) && (bn.set(e, t), qr.add(e)); }
function VA(e) { return qr.has(e); }
function BE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function HA() { let e = bn; return bn = new Map, e; }
function BA(e) { qr.clear(); for (let t of e.keys())
    qr.add(t); bn = e; }
function $E() { return bn.size === 0; }
function $A(e, t) { return Qe(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new D(918, !1); return t.text(); }); }
var td = new Map, UE = !0;
function UA(e, t, n) { if (t && t !== n && UE)
    throw new D(921, !1); }
function xf(e, t) { let n = td.get(t) || null; UA(t, n, e), td.set(t, e); }
function Of(e) { return td.get(e); }
function GA(e) { UE = !e; }
var vo = class {
}, GE = class {
};
function qE(e, t) { return new Eo(e, t ?? null, []); }
var qA = qE, Eo = class extends vo {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new ea(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = un(t); this._bootstrapComponents = oo(i.bootstrap), this._r3Injector = jl(t, n, [{ provide: vo, useValue: this }, { provide: gi, useValue: this.componentFactoryResolver }, ...o], Xo(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Io = class extends GE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Eo(this.moduleType, t, []); }
};
function WE(e, t, n) { return new Eo(e, t, n, !1); }
var Wr = class extends vo {
    injector;
    componentFactoryResolver = new ea(this);
    instance = null;
    constructor(t) { super(); let n = new an([...t.providers, { provide: vo, useValue: this }, { provide: gi, useValue: this.componentFactoryResolver }], t.parent || Gn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Pf(e, t, n = null) { return new Wr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var WA = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Zi(!1, n.type), r = o.length > 0 ? Pf([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(he(Se)) });
} return e; })();
function zE(e) { return ht(() => { let t = KE(e), n = _e(z({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === ha.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(WA).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Ge.Emulated, styles: e.styles || F, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && X("NgStandalone"), JE(n); let o = e.dependencies; return n.directiveDefs = oa(o, QE), n.pipeDefs = oa(o, Ze), n.id = YA(n), n; }); }
function QE(e) { return W(e) || Ae(e); }
function Lf(e) { return ht(() => ({ type: e.type, bootstrap: e.bootstrap || F, declarations: e.declarations || F, imports: e.imports || F, exports: e.exports || F, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function zA(e, t) { if (e == null)
    return Fe; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Ra.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function QA(e) { if (e == null)
    return Fe; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function ZE(e) { return ht(() => { let t = KE(e); return JE(t), t; }); }
function YE(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function KE(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Fe, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || F, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: zA(e.inputs, t), outputs: QA(e.outputs), debugInfo: null }; }
function JE(e) { e.features?.forEach(t => t(e)); }
function oa(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var ZA = new Map;
function YA(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function XE(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function eI(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = KA, n.hostDirectives = o ? e.map(nd) : [e]) : o ? n.hostDirectives.unshift(...e.map(nd)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function KA(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, tI(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && Be(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function tI(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Hg(nd(i), t, n);
        }
        else
            Hg(o, t, n); }
function Hg(e, t, n) { let o = Ae(e.directive); JA(o.declaredInputs, e.inputs), tI(o, t, n), n.set(o, e), t.push(o); }
function nd(e) { return typeof e == "function" ? { directive: P(e), inputs: Fe, outputs: Fe } : { directive: P(e.directive), inputs: Bg(e.inputs), outputs: Bg(e.outputs) }; }
function Bg(e) { if (e === void 0 || e.length === 0)
    return Fe; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function JA(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function XA(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Ff(e) { let t = XA(e.type), n = !0, o = [e]; for (; t && t !== Function.prototype && t !== Object.prototype;) {
    let r, i = Object.hasOwn(t, It) ? t[It] : void 0, s = Object.hasOwn(t, cn) ? t[cn] : void 0;
    if (Be(e))
        r = i ?? s;
    else {
        if (i)
            throw new D(903, !1);
        r = s;
    }
    if (r) {
        if (n) {
            o.push(r);
            let c = e;
            c.inputs = ru(e.inputs), c.declaredInputs = ru(e.declaredInputs), c.outputs = ru(e.outputs);
            let l = r.hostBindings;
            l && rR(e, l);
            let u = r.viewQuery, d = r.contentQueries;
            if (u && nR(e, u), d && oR(e, d), eR(e, r), Nh(e.outputs, r.outputs), Be(r) && r.data.animation) {
                let f = e.data;
                f.animation = (f.animation || []).concat(r.data.animation);
            }
        }
        let a = r.features;
        if (a)
            for (let c = 0; c < a.length; c++) {
                let l = a[c];
                l && l.ngInherit && l(e), l === Ff && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} tR(o); }
function eR(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function tR(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = po(r.hostAttrs, n = po(n, r.hostAttrs));
} }
function ru(e) { return e === Fe ? {} : e === F ? [] : e; }
function nR(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function oR(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function rR(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function nI(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = po(e.mergedAttrs, e.attrs);
    let u = e.tView = Yd(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), lt(e, !1); let c = oI(n, t, e, o); mr() && uf(n, t, c, e), Ue(c, t); let l = Fv(c, t, c, e); t[o + I] = l, Jd(t, l), AE(l, e, t); }
function iR(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = Fn(t, d, 4, s || null, a || null), is() && hE(t, e, f, me(t.consts, l), hf), Am(t, f)) : f = t.data[d], nI(f, e, t, n, o, r, i, c), qn(f) && Ha(t, e, f), l != null && Oo(e, f, u), f; }
function An(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = Fn(t, d, 4, s || null, a || null), l != null) {
        let p = me(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return nI(f, e, t, n, o, r, i, c), l != null && Oo(e, f, u), f; }
function jf(e, t, n, o, r, i, s, a) { let c = g(), l = A(), u = me(l.consts, i); return iR(c, l, e, t, n, o, r, u, void 0, s, a), jf; }
function Vf(e, t, n, o, r, i, s, a) { let c = g(), l = A(), u = me(l.consts, i); return An(c, l, e, t, n, o, r, u, void 0, s, a), Vf; }
var oI = rI;
function rI(e, t, n, o) { return Xe(!0), t[w].createComment(""); }
function sR(e, t, n, o) { let r = !wa(t, n); Xe(r); let i = t[fe]?.data[ya]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return rI(e, t); let s = t[fe], a = hi(s, e, t, n); Ma(s, o, a); let c = Fd(s, o); return Za(c, a); }
function iI() { oI = sR; }
var ie = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(ie || {}), $g = 0, aR = 1, Z = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Z || {}), zr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(zr || {}), lo = 0, xt = 1, Tr = 2, Ts = 3, cR = 4, lR = 5, oc = 6, uR = 7, uo = 8, dR = 9, Hf = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Hf || {});
function mi(e, t, n) { let o = aI(e); t[o] === null && (t[o] = []), t[o].push(n); }
function ks(e, t) { let n = aI(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function sI(e) { ks(1, e), ks(0, e), ks(2, e); }
function aI(e) { let t = cR; return e === 1 ? t = lR : e === 2 && (t = dR), t; }
function yi(e) { return e + 1; }
function Ce(e, t) { let n = e[m], o = yi(t.index); return e[o]; }
function fR(e, t, n) { let o = e[m], r = yi(t); e[r] = n; }
function pe(e, t) { let n = yi(t.index); return e.data[n]; }
function pR(e, t, n) { let o = yi(t); e.data[o] = n; }
function hR(e, t, n) { let o = t[m], r = pe(o, n); switch (e) {
    case Z.Complete: return r.primaryTmplIndex;
    case Z.Loading: return r.loadingTmplIndex;
    case Z.Error: return r.errorTmplIndex;
    case Z.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function od(e, t) { return t === Z.Placeholder ? e.placeholderBlockConfig?.[$g] ?? null : t === Z.Loading ? e.loadingBlockConfig?.[$g] ?? null : null; }
function cI(e) { return e.loadingBlockConfig?.[aR] ?? null; }
function Ug(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function gR(e, t) { let n = t.primaryTmplIndex + I; return $t(e, n); }
function lI(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function uI(e, t) { let n = null, o = yi(t.index); return I < o && o < e.bindingStartIndex && (n = pe(e, t)), !!n && lI(n); }
function Bf(e, t, n, o) { let r = n.get(G); return Pw(e, () => r.run(t), i => r.runOutsideAngular(() => Ow(i)), o); }
function mR(e, t, n) { return n == null ? e : n >= 0 ? ml(n, e) : e[t.index][q] ?? null; }
function yR(e, t) { return gn(I + t, e); }
function Ho(e, t, n, o, r, i, s, a) { let c = e[L], l = c.get(G), u; function d() { if (ct(e)) {
    u.destroy();
    return;
} let f = Ce(e, t), p = f[xt]; if (p !== zr.Initial && p !== Z.Placeholder) {
    u.destroy();
    return;
} let h = mR(e, t, o); if (!h || (u.destroy(), ct(h)))
    return; let y = yR(h, n), E = r(y, () => { l.run(() => { e !== h && rs(h, E), i(); }); }, c, a); e !== h && pr(h, E), mi(s, f, E); } u = dv({ read: d }, { injector: c }); }
function rc(e, t) { let n = t.get(IR), o = () => n.remove(e); return n.add(e), o; }
var vR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, ER = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, IR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = v(G);
    requestIdleCallbackFn = vR().bind(globalThis);
    cancelIdleCallbackFn = ER().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function ic(e) { return (t, n) => dI(e, t, n); }
function dI(e, t, n) { let o = n.get(fI), r = n.get(G), i = () => o.remove(t); return o.add(e, t, r), i; }
var fI = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } il(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && rl(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && rl(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), DR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? Pf(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), TR = new C("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), pI = new C("");
function iu(e, t, n) { return e.get(DR).getOrCreateInjector(t, e, n, ""); }
function CR(e, t, n) { if (e instanceof co) {
    let r = e.injector, i = e.parentInjector, s = iu(i, t, n);
    return new co(r, s);
} let o = e.get(Se); if (o !== e) {
    let r = iu(o, t, n);
    return new co(e, r);
} return iu(e, t, n); }
function Mt(e, t, n, o = !1) { let r = n[Q], i = r[m]; if (ct(r))
    return; let s = Ce(r, t), a = s[xt], c = s[uR]; if (!(c !== null && e < c) && qg(a, e) && qg(s[lo] ?? -1, e)) {
    let l = pe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (cI(l) !== null || od(l, Z.Loading) !== null || od(l, Z.Placeholder)) ? rd : hI;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        gf(r, f);
    }
} }
function MR(e, t) { let n = e[ke]?.findIndex(r => r.data[ri] === t[xt]) ?? -1; return { dehydratedView: n > -1 ? e[ke][n] : null, dehydratedViewIx: n }; }
function hI(e, t, n, o, r) { V(O.DeferBlockStateStart); let i = hR(e, r, o); if (i !== null) {
    t[xt] = e;
    let s = r[m], a = i + I, c = $t(s, a), l = 0;
    mf(n, l);
    let u;
    if (e === Z.Complete) {
        let h = pe(s, o), y = h.providers;
        y && y.length > 0 && (u = CR(r[L], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = MR(n, t), p = Po(r, c, null, { injector: u, dehydratedView: d });
    if (Lo(n, p, l, _n(c, d)), pi(p, 2), f > -1 && n[ke]?.splice(f, 1), (e === Z.Complete || e === Z.Error) && Array.isArray(t[uo])) {
        for (let h of t[uo])
            h();
        t[uo] = null;
    }
} V(O.DeferBlockStateEnd); }
function NR(e, t, n, o, r) { let i = Date.now(), s = r[m], a = pe(s, o); if (t[Tr] === null || t[Tr] <= i) {
    t[Tr] = null;
    let c = cI(a), l = t[Ts] !== null;
    if (e === Z.Loading && c !== null && !l) {
        t[lo] = e;
        let u = Gg(c, t, o, n, r);
        t[Ts] = u;
    }
    else {
        e > Z.Loading && l && (t[Ts](), t[Ts] = null, t[lo] = null), hI(e, t, n, o, r);
        let u = od(a, e);
        u !== null && (t[Tr] = i + u, Gg(u, t, o, n, r));
    }
}
else
    t[lo] = e; }
function Gg(e, t, n, o, r) { return dI(e, () => { let s = t[lo]; t[Tr] = null, t[lo] = null, s !== null && Mt(s, n, o); }, r[L]); }
function qg(e, t) { return e < t; }
function Bo(e, t) { let n = e[t.index]; Mt(Z.Placeholder, t, n); }
function Wg(e, t, n) { e.loadingPromise.then(() => { e.loadingState === ie.COMPLETE ? Mt(Z.Complete, t, n) : e.loadingState === ie.FAILED && Mt(Z.Error, t, n); }); }
var rd = null;
function gI(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = me(r, n)), o != null && (t.loadingBlockConfig = me(r, o)), rd === null && (rd = NR); }
var xs = "__ngAsyncComponentMetadataFn__";
function wR(e) { return e[xs] ?? null; }
function mI(e, t, n) { let o = e; return o[xs] = () => Promise.all(t()).then(r => (n(...r), o[xs] = null, r)), o[xs]; }
function $f(e, t, n, o) { return ht(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = z(z({}, r.propDecorators), o) : r.propDecorators = o); }); }
var _R = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Uf(e) { return typeof e == "function" && e[le] !== void 0; }
function Gf(e) { return Uf(e) && typeof e.set == "function"; }
function Os(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = pe(n, s);
            if (lI(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        oe(r[$]) && Os(r[$], t);
        for (let s = q; s < r.length; s++)
            Os(r[s], t);
    }
    else
        oe(e[o]) && Os(e[o], t); }
function SR() { return X("Chrome DevTools profiling"), () => { }; }
function bR(e) { let t = e.get(Gt), n = e.get(bt), o = ry(t, n), r = {}; for (let [i, s] of Object.entries(o))
    Vw(i) || (r[i] = s); return r; }
var zg = "ng";
function AR(e, t) { RR(e, t); }
function RR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = be;
    n[zg] ??= {}, n[zg][e] = t;
} }
var yI = new C(""), vI = new C(""), kR = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Ki() && (this._destroyRef = v($e, { optional: !0 }) ?? void 0), qf || (II(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { G.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(he(G), he(EI), he(vI)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), EI = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return qf?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function II(e) { qf = e; }
var qf;
function Wf(e) { return !!e && typeof e.then == "function"; }
function DI(e) { return !!e && typeof e.subscribe == "function"; }
var zf = new C("");
function TI(e) { return Ke([{ provide: zf, multi: !0, useValue: e }]); }
var Qf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = v(zf, { optional: !0 }) ?? [];
    injector = v(ue);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Yi(this.injector, r);
        if (Wf(i))
            n.push(i);
        else if (DI(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), vi = new C("");
function Zf() { ph(() => { let e = ""; throw new D(600, e); }); }
function CI(e) { return e.isBoundToModule; }
var xR = 10;
function Yf(e, t) { return Array.isArray(t) ? t.reduce(Yf, e) : z(z({}, e), t); }
var We = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = v(Tt);
    afterRenderManager = v(Pa);
    zonelessEnabled = v(Yn);
    rootEffectScheduler = v(ps);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new vm;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = v(Dt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(MN(n => !n)); }
    constructor() { v(Ln, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = v(Se);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = ue.NULL) { return this._injector.get(G).run(() => { V(O.BootstrapComponentStart); let s = n instanceof Xa; if (!this._injector.get(Qf).done) {
        let h = "";
        throw new D(405, h);
    } let c; s ? c = n : c = this._injector.get(gi).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = CI(c) ? void 0 : this._injector.get(vo), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(yI, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Nr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(O.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(O.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Oa.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(O.ChangeDetectionEnd), new D(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), V(O.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Ur, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < xR;) {
        V(O.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            V(O.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Wn(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            kv(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Wn(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Nr(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(vi, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Nr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new D(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Nr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function sc() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function MI(e) { let t = g(), n = _(); if (Bo(t, n), !_I(0, t))
    return; let o = t[L], r = Ce(t, n), i = e(() => Me(0, t, n), o); mi(0, r, i); }
function NI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[L], o = _(), r = t[m], i = pe(r, o); if (i.loadingState === ie.NOT_STARTED) {
    let s = Ce(t, o), c = e(() => Ei(i, t, o), n);
    mi(1, s, c);
} }
function wI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[L], r = Ce(t, n), i = r[oc], s = e(() => Ot(o, i), o); mi(2, r, s); }
function Ei(e, t, n) { ac(e, t, n); }
function ac(e, t, n) { let o = t[L], r = t[m]; if (e.loadingState !== ie.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Ce(t, n), s = gR(r, e); e.loadingState = ie.IN_PROGRESS, ks(1, i); let a = e.dependencyResolverFn, c = o.get(yr).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = null, f = [], p = []; for (let h = 0; h < l.length; h++) {
    let y = l[h];
    if (y.status === "fulfilled") {
        let E = y.value, T = W(E) || Ae(E);
        if (T)
            f.push(T);
        else {
            let k = Ze(E);
            k && p.push(k);
        }
    }
    else {
        u = !0, d = y.reason instanceof Error ? y.reason : new Error(String(y.reason));
        break;
    }
} if (u) {
    if (e.loadingState = ie.FAILED, e.errorTmplIndex === null) {
        let y = "", E = new D(-750, y);
        gf(t, E);
    }
}
else {
    e.loadingState = ie.COMPLETE;
    let h = s.tView;
    if (f.length > 0) {
        h.directiveRegistry = Ug(h.directiveRegistry, f);
        let y = f.map(T => T.type), E = Zi(!1, ...y);
        e.providers = E;
    }
    p.length > 0 && (h.pipeRegistry = Ug(h.pipeRegistry, p));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = ie.COMPLETE, c(); }), e.loadingPromise); }
function _I(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[L].get(pI, null, { optional: !0 })?.behavior === Hf.Manual); }
function Me(e, t, n) { let o = t[m], r = t[n.index]; if (!_I(e, t))
    return; let i = Ce(t, n), s = pe(o, n); switch (sI(i), s.loadingState) {
    case ie.NOT_STARTED:
        Mt(Z.Loading, n, r), ac(s, t, n), s.loadingState === ie.IN_PROGRESS && Wg(s, n, r);
        break;
    case ie.IN_PROGRESS:
        Mt(Z.Loading, n, r), Wg(s, n, r);
        break;
    case ie.COMPLETE:
        Mt(Z.Complete, n, r);
        break;
    case ie.FAILED:
        Mt(Z.Error, n, r);
        break;
    default:
} }
function Ot(e, t, n) { return Qe(this, null, function* () { let o = e.get(At); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = Qw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), LR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Qg(e, s, n) : o.awaitParentBlock(a, () => Qe(null, null, function* () { return yield Qg(e, s, n); })); }); }
function Qg(e, t, n) { return Qe(this, null, function* () { let o = e.get(At), r = o.hydrating, i = e.get(Dt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield jR(u), yield FR(e), OR(u)) {
            Ub(u), Zg(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        PR(c, t, o), Zg(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), Gb(o.get(a), t, o, e.get(We)); }); }
function OR(e) { return Ce(e.lView, e.tNode)[xt] === Z.Error; }
function PR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Ja(r.lContainer); }
function Zg(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function LR(e, t) { for (let n of t)
    e.hydrating.set(n, sc()); }
function FR(e) { return new Promise(t => sf(t, { injector: e })); }
function jR(e) { return Qe(this, null, function* () { let { tNode: t, lView: n } = e, o = Ce(n, t); return new Promise(r => { VR(o, r), Me(2, n, t); }); }); }
function VR(e, t) { Array.isArray(e[uo]) || (e[uo] = []), e[uo].push(t); }
function ee(e, t, n) { return e === 0 ? Yg(t, n) : e === 2 ? !Yg(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function HR(e) { return e != null && (e & 1) === 1; }
function Yg(e, t) { let n = e[L], o = pe(e[m], t), r = ai(n), i = HR(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Ce(e, t)[oc] !== null; return !(i && a && r); }
function en(e, t) { let n = pe(e, t); return n.hydrateTriggers ??= new Map; }
function SI(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[wt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} BR(e, o), GR(e, s), $R(e, i), UR(e, r); }
function BR(e, t) { for (let n of t) {
    let o = e.get(At), i = rc(() => Ot(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function $R(e, t) { if (t.length > 0) {
    let n = e.get(At);
    for (let o of t) {
        let r = Bf(o.el, () => Ot(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function UR(e, t) { for (let n of t) {
    let o = e.get(At), r = () => Ot(e, n.blockName), s = ic(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function GR(e, t) { for (let n of t)
    Ot(e, n.blockName); }
function bI(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = A(), f = e + I, p = An(u, d, e, null, 0, 0), h = u[L], y = ai(h); if (d.firstCreatePass) {
    X("NgDefer");
    let gt = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: ie.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, gt, a, s), pR(d, f, gt);
} let E = u[f]; AE(E, p, u); let T = null, k = null; if (E[ke]?.length > 0) {
    let gt = E[ke][0].data;
    k = gt[Ia] ?? null, T = gt[ri];
} let ne = [null, zr.Initial, null, null, null, null, k, T, null, null]; fR(u, f, ne); let ze = null; k !== null && y && (ze = h.get(At), ze.add(k, { lView: u, tNode: p, lContainer: E })); let Oe = () => { sI(ne), k !== null && ze?.cleanup([k]); }; mi(0, ne, () => rs(u, Oe)), pr(u, Oe); }
function AI(e) { let t = g(), n = xe(); if (!ee(0, t, n))
    return; let o = Ee(); if (Y(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = Ce(t, n)[xt];
        i === !1 && a === zr.Initial ? Bo(t, n) : i === !0 && (a === zr.Initial || a === Z.Placeholder) && Me(0, t, n);
    }
    finally {
        R(r);
    }
} }
function RI(e) { let t = g(), n = xe(); if (!ee(1, t, n))
    return; let o = Ee(); if (Y(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[m], a = pe(s, n);
        i === !0 && a.loadingState === ie.NOT_STARTED && Ei(a, t, n);
    }
    finally {
        R(r);
    }
} }
function kI(e) { let t = g(), n = xe(); if (!ee(2, t, n))
    return; let o = Ee(), r = A(); if (en(r, n).set(6, null), Y(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Me(2, t, n);
    else {
        let s = t[L], a = R(null);
        try {
            if (!!e === !0) {
                let u = Ce(t, n)[oc];
                Ot(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function xI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; en(A(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Me(2, e, t); }
function OI() { let e = g(), t = _(); ee(0, e, t) && MI(rc); }
function PI() { let e = g(), t = _(); ee(1, e, t) && NI(rc); }
function LI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; en(A(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Me(2, e, t) : wI(rc, e, t); }
function FI() { let e = g(), t = _(); if (!ee(0, e, t))
    return; pe(e[m], t).loadingTmplIndex === null && Bo(e, t), Me(0, e, t); }
function jI() { let e = g(), t = _(); if (!ee(1, e, t))
    return; let n = e[m], o = pe(n, t); o.loadingState === ie.NOT_STARTED && ac(o, e, t); }
function VI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; if (en(A(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Me(2, e, t);
else {
    let o = e[L], i = Ce(e, t)[oc];
    Ot(o, i);
} }
function HI(e) { let t = g(), n = _(); ee(0, t, n) && MI(ic(e)); }
function BI(e) { let t = g(), n = _(); ee(1, t, n) && NI(ic(e)); }
function $I(e) { let t = g(), n = _(); if (!ee(2, t, n))
    return; en(A(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? Me(2, t, n) : wI(ic(e), t, n); }
function UI(e, t) { let n = g(), o = _(); ee(0, n, o) && (Bo(n, o), typeof ngServerMode < "u" && ngServerMode || Ho(n, o, e, t, uy, () => Me(0, n, o), 0)); }
function GI(e, t) { let n = g(), o = _(); if (!ee(1, n, o))
    return; let r = n[m], i = pe(r, o); i.loadingState === ie.NOT_STARTED && Ho(n, o, e, t, uy, () => Ei(i, n, o), 1); }
function qI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; en(A(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Me(2, e, t); }
function WI(e, t) { let n = g(), o = _(); ee(0, n, o) && (Bo(n, o), typeof ngServerMode < "u" && ngServerMode || Ho(n, o, e, t, ly, () => Me(0, n, o), 0)); }
function zI(e, t) { let n = g(), o = _(); if (!ee(1, n, o))
    return; let r = n[m], i = pe(r, o); i.loadingState === ie.NOT_STARTED && Ho(n, o, e, t, ly, () => Ei(i, n, o), 1); }
function QI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; en(A(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Me(2, e, t); }
function ZI(e, t, n) { let o = g(), r = _(); ee(0, o, r) && (Bo(o, r), typeof ngServerMode < "u" && ngServerMode || Ho(o, r, e, t, Bf, () => Me(0, o, r), 0, n)); }
function YI(e, t, n) { let o = g(), r = _(); if (!ee(1, o, r))
    return; let i = o[m], s = pe(i, r); s.loadingState === ie.NOT_STARTED && Ho(o, r, e, t, Bf, () => Ei(s, o, r), 1, n); }
function KI(e) { let t = g(), n = _(); if (!ee(2, t, n))
    return; en(A(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && Me(2, t, n); }
function Kf(e, t) { let n = g(), o = Ee(); if (Y(n, o, t)) {
    let r = A(), i = xe();
    if (Ga(i, r, n, e, t))
        Te(i) && wv(n, i.index);
    else {
        let a = ae(i, n);
        Ba(n[w], a, null, i.value, e, t, null);
    }
} return Kf; }
function Jf(e, t, n, o) { let r = g(), i = Ee(); if (Y(r, i, t)) {
    let s = A(), a = xe();
    OS(a, r, e, t, n, o);
} return Jf; }
function wr(e) { if (X("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Pn)
    return wr; let t = g(); if (ka(t))
    return wr; let n = _(), o = t[L].get(G); return xa(Qs(t), n, () => qR(t, n, e, o)), ja(t[L]), af(t[L], Qs(t)), wr; }
function qR(e, t, n, o) { let r = ae(t, e), i = e[w], s = av(n), a = [], c = !1, l = d => { if (Fr(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { Fr(d) === r && (nf(d, r) && (c = !0), WR(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), aS(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (uv(r, Tn, Pn), !Tn.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        ef(r);
    } }); });
} }
function WR(e, t, n) { let o = ho.get(t); if (!(Fr(e) !== t || !o) && nf(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    ef(t);
} }
function _r(e) { if (X("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Pn)
    return _r; let t = g(); if (ka(t))
    return _r; let n = _(); return xa(Qs(t), n, () => zR(t, n, e)), ja(t[L]), af(t[L], Qs(t)), _r; }
function zR(e, t, n) { let o = ae(t, e); n.call(e[U], { target: o, animationComplete: cS }); }
function Sr(e) { if (X("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Pn)
    return Sr; let t = g(); if (ka(t))
    return Sr; let o = _(), r = t[L].get(G); return xa(Nn(t), o, () => QR(t, o, e, r)), ja(t[L]), Sr; }
function QR(e, t, n, o) { let { promise: r, resolve: i } = sc(), s = ae(t, e), a = e[w]; wn.add(e[He]), (Nn(e).get(t.index).resolvers ??= []).push(i); let c = av(n); return c && c.length > 0 ? ZR(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function ZR(e, t, n, o, r, i) { uS(e, r); let s = [], a = Nn(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(Fr(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || nf(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), Tn.delete(e), ju(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    Vu(a, s), Hu(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), tf(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; uv(e, Tn, Pn); let d = Tn.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (ju(t, e), Vu(a, s), Hu(n, t)); }); }); }
function ra(e) { if (X("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Pn)
    return ra; let t = g(), n = _(); wn.add(t[He]); let o = t[L].get(G), r = t[L].get(sv); return xa(Nn(t), n, () => YR(t, n, e, o, r)), ja(t[L]), ra; }
function YR(e, t, n, o, r) { let { promise: i, resolve: s } = sc(), a = ae(t, e), c = [], l = e[w], u = ka(e); (Nn(e).get(t.index).resolvers ??= []).push(s); let d = Nn(e).get(t.index)?.resolvers; if (u)
    Is(e, t, a, d, c);
else {
    let f = setTimeout(() => Is(e, t, a, d, c), r), p = { target: a, animationComplete: () => { Is(e, t, a, d, c), clearTimeout(f); } };
    tf(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { Is(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[U], p);
} return { promise: i, resolve: s }; }
function JI() { return g()[te][U]; }
var id = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function su(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function KR(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Xn(o);
    let l = t.length - 1;
    for (Xn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = su(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = su(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let E = n(s, u), T = n(a, p), k = n(s, d);
        if (Object.is(k, T)) {
            let ne = n(l, h);
            Object.is(ne, E) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new ia, i ??= Jg(e, s, a, n), sd(e, r, s, k))
            e.updateValue(s, d), s++, a++;
        else if (i.has(k))
            r.set(E, e.detach(s)), a--;
        else {
            let ne = e.create(s, t[s]);
            e.attach(s, ne), s++, a++;
        }
    }
    for (; s <= l;)
        Kg(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Xn(o);
    let l = t[Symbol.iterator]();
    Xn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = su(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new ia, i ??= Jg(e, s, a, n);
            let h = n(s, f);
            if (sd(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        Kg(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function sd(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Kg(e, t, n, o, r) { if (sd(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Jg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var ia = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function XI(e, t, n, o, r, i, s, a) { X("NgControlFlow"); let c = g(), l = A(), u = me(l.consts, i); return An(c, l, e, t, n, o, r, u, 256, s, a), cc; }
function cc(e, t, n, o, r, i, s, a) { X("NgControlFlow"); let c = g(), l = A(), u = me(l.consts, i); return An(c, l, e, t, n, o, r, u, 512, s, a), cc; }
function eD(e, t) { X("NgControlFlow"); let n = g(), o = Ee(), r = n[o] !== H ? n[o] : -1, i = r !== -1 ? sa(n, I + r) : void 0, s = 0; if (Y(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && mf(i, s), e !== -1) {
            let c = I + e, l = sa(n, c), u = ud(n[m], c), d = lE(l, u, n), f = Po(n, u, t, { dehydratedView: d });
            Lo(l, f, s, _n(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = jv(i, s);
    a !== void 0 && (a[U] = t);
} }
var ad = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - q; }
};
function tD(e) { return e; }
function nD(e, t) { return t; }
var cd = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function oD(e, t, n, o, r, i, s, a, c, l, u, d, f) { X("NgControlFlow"); let p = g(), h = A(), y = c !== void 0, E = g(), T = a ? s.bind(E[te][U]) : s, k = new cd(y, T); E[I + e] = k, An(p, h, e + 1, t, n, o, r, me(h.consts, i), 256), y && An(p, h, e + 2, c, l, u, d, me(h.consts, f), 512); }
var ld = class extends id {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - q; }
    at(t) { return this.getLView(t)[U].$implicit; }
    attach(t, n) { let o = n[fe]; this.needsIndexUpdate ||= t !== this.length, Lo(this.lContainer, n, t, _n(this.templateTNode, o)), JR(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, XR(this.lContainer, t), ek(this.lContainer, t); }
    create(t, n) { let o = $r(this.lContainer, this.templateTNode.tView.ssrId); return Po(this.hostLView, this.templateTNode, new ad(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { fi(t[m], t); }
    updateValue(t, n) { this.getLView(t)[U].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[U].$index = t; }
    getLView(t) { return tk(this.lContainer, t); }
};
function rD(e) { let t = R(null), n = re(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = sa(o, s);
    if (i.liveCollection === void 0) {
        let l = ud(r, s);
        i.liveCollection = new ld(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (KR(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = Ee(), u = c.length === 0;
        if (Y(o, l, u)) {
            let d = n + 2, f = sa(o, d);
            if (u) {
                let p = ud(r, d), h = lE(f, p, o), y = Po(o, p, void 0, { dehydratedView: h });
                Lo(f, y, 0, _n(p, h));
            }
            else
                r.firstUpdatePass && Ka(f), mf(f, 0);
        }
    }
}
finally {
    R(t);
} }
function sa(e, t) { return e[t]; }
function JR(e, t) { if (e.length <= q)
    return; let n = q + t, o = e[n], r = o ? o[st] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[L];
    yS(i, r), wn.delete(o[He]), r.detachedLeaveAnimationFns = void 0;
} }
function XR(e, t) { if (e.length <= q)
    return; let n = q + t, o = e[n], r = o ? o[st] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function ek(e, t) { return Vr(e, t); }
function tk(e, t) { return jv(e, t); }
function ud(e, t) { return $t(e, t); }
function Xf(e, t, n) { let o = g(), r = Ee(); if (Y(o, r, t)) {
    let i = A(), s = xe();
    ff(s, o, e, t, o[w], n);
} return Xf; }
function dd(e, t, n, o, r) { Ga(t, e, n, r ? "class" : "style", o); }
function Qr(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? Tf(s, r, 2, t, hf, is(), n, o) : i.data[s]; if (Te(a)) {
    let c = r[Ve].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(Nf(l), () => (Xg(e, t, r, a, o), Qr));
    }
} return Xg(e, t, r, a, o), Qr; }
function Xg(e, t, n, o, r) { if ($a(o, n, e, t, np), qn(o)) {
    let i = n[m];
    Ha(i, n, o), Vd(i, o, n);
} r != null && Oo(n, o); }
function lc() { let e = A(), t = _(), n = Ua(t); return e.firstCreatePass && Cf(e, n), Il(n) && Cl(), El(), n.classesWithoutHost != null && PN(n) && dd(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && LN(n) && dd(e, n, g(), n.stylesWithoutHost, !1), lc; }
function ep(e, t, n, o) { return Qr(e, t, n, o), lc(), ep; }
function uc(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? mE(s, i, 2, t, n, o) : i.data[s]; return $a(a, r, e, t, np), o != null && Oo(r, a), uc; }
function dc() { let e = _(), t = Ua(e); return Il(t) && Cl(), El(), dc; }
function tp(e, t, n, o) { return uc(e, t, n, o), dc(), tp; }
var np = (e, t, n, o, r) => (Xe(!0), Sa(t[w], o, ds()));
function nk(e, t, n, o, r) { let i = !wa(t, n); if (Xe(i), i)
    return Sa(t[w], o, ds()); let s = t[fe], a = hi(s, e, t, n); return Ny(s, r) && Ma(s, r, a.nextSibling), s && (Td(n) || zm(a)) && Te(n) && (Uh(n), zy(a)), a; }
function iD() { np = nk; }
function fc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? Tf(i, o, 8, "ng-container", hf, is(), t, n) : r.data[i]; if ($a(s, o, e, "ng-container", sp), qn(s)) {
    let a = o[m];
    Ha(a, o, s), Vd(a, s, o);
} return n != null && Oo(o, s), fc; }
function Ii() { let e = A(), t = _(), n = Ua(t); return e.firstCreatePass && Cf(e, n), Ii; }
function op(e, t, n) { return fc(e, t, n), Ii(), op; }
function pc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? mE(i, r, 8, "ng-container", t, n) : r.data[i]; return $a(s, o, e, "ng-container", sp), n != null && Oo(o, s), pc; }
function rp() { let e = _(), t = Ua(e); return Ii; }
function ip(e, t, n) { return pc(e, t, n), rp(), ip; }
var sp = (e, t, n, o, r) => (Xe(!0), $d(t[w], ""));
function ok(e, t, n, o, r) { let i, s = !wa(t, n); if (Xe(s), s)
    return $d(t[w], ""); let a = t[fe], c = hi(a, e, t, n), l = My(a, r); return Ma(a, r, c), i = Za(l, c), i; }
function sD() { sp = ok; }
function aD() { return g(); }
function ap(e, t, n) { let o = g(), r = Ee(); if (Y(o, r, t)) {
    let i = A(), s = xe();
    pf(s, o, e, t, o[w], n);
} return ap; }
function cp(e, t, n) { let o = g(), r = Ee(); if (Y(o, r, t)) {
    let i = A(), s = xe(), a = as(i.data), c = _v(a, s, o);
    pf(s, o, e, t, c, n);
} return cp; }
var Er = void 0;
function rk(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var ik = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Er, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Er, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Er, Er, Er], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", rk], fo = Object.create(null);
function sk(e, t, n) { typeof t != "string" && (n = t, t = e[Do.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), fo[t] = e, n && (fo[t][Do.ExtraData] = n); }
function lp(e) { let t = lk(e), n = em(t); if (n)
    return n; let o = t.split("-")[0]; if (n = em(o), n)
    return n; if (o === "en")
    return ik; throw new D(701, !1); }
function ak(e) { return lp(e)[Do.CurrencyCode] || null; }
function cD(e) { return lp(e)[Do.PluralCase]; }
function em(e) { return e in fo || (fo[e] = be.ng && be.ng.common && be.ng.common.locales && be.ng.common.locales[e]), fo[e]; }
function ck() { fo = Object.create(null); }
var Do = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Do || {});
function lk(e) { return e.toLowerCase().replace(/_/g, "-"); }
var uk = ["zero", "one", "two", "few", "many"];
function dk(e, t) { let n = cD(t)(parseInt(e, 10)), o = uk[n]; return o !== void 0 ? o : "other"; }
var Di = "en-US", fk = "USD", lD = { marker: "element" }, uD = { marker: "ICU" }, Ct = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Ct || {}), dD = Di;
function fD(e) { typeof e == "string" && (dD = e.toLowerCase().replace(/_/g, "-")); }
function pk() { return dD; }
var Zr = 0, br = 0;
function hk(e) { e && (Zr = Zr | 1 << Math.min(br, 31)), br++; }
function gk(e, t, n) { try {
    if (br > 0) {
        let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = ut() - br - 1;
        mD(e, t, r, i, Zr);
    }
}
finally {
    Zr = 0, br = 0;
} }
function pD(e, t, n) { let o = e[w]; switch (n) {
    case Node.COMMENT_NODE: return $d(o, t);
    case Node.TEXT_NODE: return Bd(o, t);
    case Node.ELEMENT_NODE: return Sa(o, t, null);
} }
var Ar = (e, t, n, o) => (Xe(!0), pD(e, n, o));
function mk(e, t, n, o) { let r = e[fe], i = t - I, s = !Ya() || !r || hr() || Na(r, i); return Xe(s), s ? pD(e, n, o) : zv(r, i); }
function hD() { Ar = mk; }
function yk(e, t, n, o) { let r = e[w]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Ct.COMMENT) === Ct.COMMENT, l = (s & Ct.APPEND_EAGERLY) === Ct.APPEND_EAGERLY, u = s >>> Ct.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Ar(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = mr()), l && n !== null && f && Mn(r, n, d, o, !1);
} }
function gD(e, t, n, o) { let r = n[w], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Ar(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = Ib(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = x(n[l])), d !== null) {
                    let y = Db(c), E = n[y];
                    Mn(r, d, E, u, !1);
                    let T = Cr(e, y);
                    if (T !== null && typeof T == "object") {
                        let k = Qa(T, n);
                        k !== null && gD(e, T.create[k], n, n[T.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ba(r, gn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case uD:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Ar(n, u, l, Node.COMMENT_NODE);
                    Ue(p, n);
                }
                break;
            case lD:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Ar(n, f, d, Node.ELEMENT_NODE);
                    Ue(p, n);
                }
                break;
            default:
        }
} }
function mD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += b(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            if (typeof h == "string")
                                Ba(t[w], t[d], null, h, f, c, p);
                            else {
                                let E = re();
                                ft(d);
                                try {
                                    ff(h, t, f, c, t[w], p);
                                }
                                finally {
                                    ft(E);
                                }
                            }
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && qy(t[w], y, c);
                            break;
                        case 2:
                            vk(e, Cr(e, d), t, c);
                            break;
                        case 3:
                            tm(e, Cr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Cr(e, l);
            t[u.currentCaseLViewIndex] < 0 && tm(e, u, o, t);
        }
    }
    i += a;
} }
function tm(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = Zr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), mD(e, o, t.update[r], n, i);
} }
function vk(e, t, n, o) { let r = Ek(t, o); if (Qa(t, n) !== r && (yD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && gD(e, t.create[r], n, s), Vb(n, t.anchorIdx, r);
} }
function yD(e, t, n) { let o = Qa(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = gn(s, n);
            a !== null && li(n[w], a);
        }
        else
            yD(e, Cr(e, ~s), n);
    }
} }
function Ek(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = dk(t, pk());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var aa = /�(\d+):?\d*�/gi, Ik = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, Dk = /�(\d+)�/, vD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Rr = "\uFFFD", Tk = /�\/?\*(\d+:\d+)�/gi, Ck = /�(\/?[#*]\d+):?\d*�/gi, Mk = /\uE500/g;
function Nk(e) { return e.replace(Mk, " "); }
function wk(e, t, n, o, r, i) { let s = zn(), a = [], c = [], l = [[]], u = [[]]; r = Ak(r, i); let d = Nk(r).split(Ck); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = fd(p);
        for (let y = 0; y < h.length; y++) {
            let E = h[y];
            if ((y & 1) === 0) {
                let T = E;
                T !== "" && _k(u[0], e, s, l[0], a, c, n, T);
            }
            else {
                let T = E;
                if (typeof T != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let ne = ED(e, s, l[0], n, a, "", !0).index;
                DD(u[0], e, n, c, t, T, ne);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), E = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), lt(zn(), !1);
        else {
            let T = Eb(e, l[0], E);
            l.unshift([]), lt(T, !0);
            let k = { kind: 2, index: E, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(k), u.unshift(k.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function ED(e, t, n, o, r, i, s) { let a = di(e, o, 1, null), c = a << Ct.SHIFT, l = zn(); t === l && (l = null), l === null && (c |= Ct.APPEND_EAGERLY), s && (c |= Ct.COMMENT, rS(Cb)), r.push(c, i === null ? "" : i); let u = yf(e, a, s ? 32 : 1, i === null ? "" : i, null); Uv(n, u); let d = u.index; return lt(u, !1), l !== null && t !== l && vb(l, d), u; }
function _k(e, t, n, o, r, i, s, a) { let c = a.match(aa), u = ED(t, n, o, s, r, c ? null : a, !1).index; c && ca(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function Sk(e, t, n) { let o = _(), r = o.index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (Ik.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            let l = o.namespace ? `:${o.namespace}:${o.value}` : o.value;
            ca(i, c, r, a, bk(i), pd(a, l));
        }
    }
    e.data[t] = i;
} }
function ca(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(aa), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | ID(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function bk(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function ID(e) { return 1 << Math.min(e, 31); }
function nm(e) { let t, n = "", o = 0, r = !1, i; for (; (t = Tk.exec(e)) !== null;)
    r ? t[0] === `${Rr}/*${i}${Rr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function Ak(e, t) { if (qv(t))
    return nm(e); {
    let n = e.indexOf(`:${t}${Rr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Rr}\\/\\*\\d+:${t}${Rr}`));
    return nm(e.substring(n, o));
} }
function DD(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: di(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; Ok(o, i, s), yb(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let E = f[y];
        if (typeof E != "string") {
            let T = p.push(E) - 1;
            f[y] = `<!--\uFFFD${T}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = kk(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && Pk(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function Rk(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(vD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = fd(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = fd(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function fd(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            vD.test(c) ? o.push(Rk(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function kk(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = jy(ma()).getInertBodyElement(a), h = Lu(p) || p; return h ? TD(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function TD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = di(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, E = y.tagName.toLowerCase();
            if (xu.hasOwnProperty(E)) {
                au(i, lD, E, l, h), t.data[h] = E;
                let ze = y.attributes;
                for (let gt = 0; gt < ze.length; gt++) {
                    let nn = ze.item(gt), Si = nn.name.toLowerCase(), wM = !!nn.value.match(aa), dh = y.namespaceURI, fh = dh === "http://www.w3.org/2000/svg" ? `:svg:${E}` : dh === "http://www.w3.org/1998/Math/MathML" ? `:math:${E}` : E;
                    if (wM)
                        Ou.hasOwnProperty(Si) && ca(a, nn.value, h, nn.name, 0, pd(Si, fh));
                    else if (Ou[Si]) {
                        let _M = nn.value;
                        pd(Si, fh) ? rm(i, h, nn.name, "unsafe:blocked") : rm(i, h, nn.name, _M);
                    }
                }
                let Oe = { kind: 1, index: h, children: [] };
                e.push(Oe), f = TD(Oe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, om(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let T = p.textContent || "", k = T.match(aa);
            au(i, null, k ? "" : T, l, h), om(s, h, d), k && (f = ca(a, T, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ne = Dk.exec(p.textContent || "");
            if (ne) {
                let ze = parseInt(ne[1], 10), Oe = u[ze];
                au(i, uD, "", l, h), DD(e, t, o, r, l, Oe, h), xk(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function om(e, t, n) { n === 0 && e.push(t); }
function xk(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function Ok(e, t, n) { e.push(ID(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function Pk(e, t, n) { e.push(t, 1, n << 2 | 3); }
function au(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, Tb(0, o, r)); }
function rm(e, t, n, o) { e.push(t << 1 | 1, n, o); }
function Lk(e, t = !0) { if (e[0] != ":")
    return [null, e]; let n = e.indexOf(":", 1); if (n === -1) {
    if (t)
        throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
} return [e.slice(1, n), e.slice(n + 1)]; }
function Fk(e) { let t = e.toLowerCase(), [n, o] = Lk(t, !1); return n === Xi || n === es ? `:${n}:${o}` : o; }
function pd(e, t) { let n = e.toLowerCase(), o = t ? Fk(t) : "*", r = L_(); switch (r[`${o}|${n}`] || r[`*|${n}`] || J.NONE) {
    case J.HTML: return Ud;
    case J.STYLE: return Gd;
    case J.SCRIPT: return Wd;
    case J.URL: return _a;
    case J.RESOURCE_URL: return ba;
    case J.ATTRIBUTE_NO_BINDING: return zd;
    default: return null;
} }
var im = 0, jk = /\[(�.+?�?)\]/, Vk = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, Hk = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, Bk = /{([A-Z0-9_]+)}/g, $k = /�I18N_EXP_(ICU(_\d+)?)�/g, Uk = /\/\*/, Gk = /\d+\:(\d+)/;
function qk(e, t = {}) { let n = e; if (jk.test(e)) {
    let o = {}, r = [im];
    n = n.replace(Vk, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let E = y.match(Gk), T = E ? parseInt(E[1], 10) : im, k = Uk.test(y); l.push([T, k, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(Hk, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(Bk, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace($k, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function up(e, t, n = -1) { let o = A(), r = g(), i = I + e, s = me(o.consts, t), a = zn(); if (o.firstCreatePass && wk(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[te];
    f[N] |= 32;
}
else
    r[N] |= 32; let c = o.data[i], l = a === r[de] ? null : a, u = mv(o, l, r), d = a && a.type & 8 ? r[a.index] : null; xb(r, i, a, n), yk(r, c.create, u, d), kl(!0); }
function dp() { kl(!1); }
function CD(e, t, n) { up(e, t, n), dp(); }
function MD(e, t) { let n = A(), o = me(n.consts, t); Sk(n, e + I, o); }
function fp(e) { let t = g(); return hk(Y(t, Ee(), e)), fp; }
function ND(e) { gk(A(), g(), e + I); }
function wD(e, t = {}) { return qk(e, t); }
function pp(e, t, n) { let o = g(), r = A(), i = _(); return mp(r, o, o[w], i, e, t, n), pp; }
function hp(e, t) { let n = _(), o = g(), r = A(), i = as(r.data), s = _v(i, n, o); return mp(r, o, s, n, e, t), hp; }
function gp(e, t, n) { let o = g(), r = A(), i = _(); return (i.type & 3 || n) && Mf(i, r, o, n, o[w], e, t, Kt(i, o, t)), gp; }
function mp(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Kt(o, t, i), Mf(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Kt(o, t, i), yo(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Kt(o, t, i), yo(o, t, d, r, r, c);
} }
function _D(e = 1) { return Yh(e); }
function Wk(e, t) { let n = null, o = Z_(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? tv(e, i, !0) : J_(o, i))
        return r;
} return n; }
function SD(e) { let t = g()[te][de]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = ar(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? Wk(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function bD(e, t = 0, n, o, r, i) { let s = g(), a = A(), c = o ? e + 1 : null; c !== null && An(s, a, c, o, r, i, null, n); let l = Fn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), Sl(); let d = !s[fe] || hr(); s[te][de].projection[l.projection] === null && c !== null ? zk(s, a, c) : d && !Ro(l) && MS(a, s, l); }
function zk(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = $r(i, r.tView.ssrId), a = Po(e, r, void 0, { dehydratedView: s }); Lo(i, a, 0, _n(r, s)); }
function yp(e, t, n, o) { return LE(e, t, n, o), yp; }
function vp(e, t, n) { return PE(e, t, n), vp; }
function AD(e) { let t = g(), n = A(), o = cs(); gr(o + 1); let r = Sf(n, o); if (e.dirty && jh(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = jE(t, o);
        e.reset(i, Wm), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function RD() { return _f(g(), cs()); }
function Ep(e, t, n, o, r) { return VE(t, LE(e, n, o, r)), Ep; }
function Ip(e, t, n, o) { return VE(e, PE(t, n, o)), Ip; }
function kD(e = 1) { gr(cs() + e); }
function xD(e) { let t = bl(); return Ut(t, I + e); }
function Cs(e, t) { return e << 17 | t << 2; }
function Rn(e) { return e >> 17 & 32767; }
function Qk(e) { return (e & 2) == 2; }
function Zk(e, t) { return e & 131071 | t << 17; }
function hd(e) { return e | 2; }
function To(e) { return (e & 131068) >> 2; }
function cu(e, t) { return e & -131069 | t << 2; }
function Yk(e) { return (e & 1) === 1; }
function gd(e) { return e | 1; }
function Kk(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Rn(s), c = To(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Un(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Rn(e[a + 1]);
        e[o + 1] = Cs(f, a), f !== 0 && (e[f + 1] = cu(e[f + 1], o)), e[a + 1] = Zk(e[a + 1], o);
    }
    else
        e[o + 1] = Cs(a, 0), a !== 0 && (e[a + 1] = cu(e[a + 1], o)), a = o;
else
    e[o + 1] = Cs(c, 0), a === 0 ? a = o : e[c + 1] = cu(e[c + 1], o), c = o; l && (e[o + 1] = hd(e[o + 1])), sm(e, u, o, !0), sm(e, u, o, !1), Jk(t, u, e, o, i), s = Cs(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function Jk(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Un(i, t) >= 0 && (n[o + 1] = gd(n[o + 1])); }
function sm(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Rn(r) : To(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    Xk(c, t) && (a = !0, e[s + 1] = o ? gd(l) : hd(l)), s = o ? Rn(l) : To(l);
} a && (e[n + 1] = o ? hd(r) : gd(r)); }
function Xk(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Un(e, t) >= 0 : !1; }
var ce = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function OD(e) { return e.substring(ce.key, ce.keyEnd); }
function ex(e) { return e.substring(ce.value, ce.valueEnd); }
function tx(e) { return FD(e), PD(e, Co(e, 0, ce.textEnd)); }
function PD(e, t) { let n = ce.textEnd; return n === t ? -1 : (t = ce.keyEnd = ox(e, ce.key = t, n), Co(e, t, n)); }
function nx(e) { return FD(e), LD(e, Co(e, 0, ce.textEnd)); }
function LD(e, t) { let n = ce.textEnd, o = ce.key = Co(e, t, n); return n === o ? -1 : (o = ce.keyEnd = rx(e, o, n), o = am(e, o, n, 58), o = ce.value = Co(e, o, n), o = ce.valueEnd = ix(e, o, n), am(e, o, n, 59)); }
function FD(e) { ce.key = 0, ce.keyEnd = 0, ce.value = 0, ce.valueEnd = 0, ce.textEnd = e.length; }
function Co(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function ox(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function rx(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function am(e, t, n, o) { return t = Co(e, t, n), t < n && t++, t; }
function ix(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = cm(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = cm(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function cm(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Dp(e, t, n) { return HD(e, t, n, !1), Dp; }
function Tp(e, t) { return HD(e, t, null, !0), Tp; }
function jD(e) { BD(GD, sx, e, !1); }
function sx(e, t) { for (let n = nx(t); n >= 0; n = LD(t, n))
    GD(e, OD(t), ex(t)); }
function VD(e) { BD(px, ax, e, !0); }
function ax(e, t) { for (let n = tx(t); n >= 0; n = PD(t, n))
    cr(e, OD(t), !0); }
function HD(e, t, n, o) { let r = g(), i = A(), s = dt(2); if (i.firstUpdatePass && UD(i, e, s, o), t !== H && Y(r, s, t)) {
    let a = i.data[re()];
    qD(i, a, r, r[w], e, r[s + 1] = gx(t, n), o, s);
} }
function BD(e, t, n, o) { let r = A(), i = dt(2); r.firstUpdatePass && UD(r, null, i, o); let s = g(); if (n !== H && Y(s, i, n)) {
    let a = r.data[re()];
    if (WD(a, o) && !$D(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Bi(c, n || "")), dd(r, a, s, n, o);
    }
    else
        hx(r, a, s, s[w], s[i + 1], s[i + 1] = fx(e, t, n), o, i);
} }
function $D(e, t) { return t >= e.expandoStartIndex; }
function UD(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[re()], s = $D(e, n);
    WD(i, o) && t === null && !s && (t = !1), t = cx(r, i, t, o), Kk(r, i, t, n, s, o);
} }
function cx(e, t, n, o) { let r = as(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = lu(null, e, t, n, o), n = Yr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = lu(r, e, t, n, o), i === null) {
            let c = lx(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = lu(null, e, t, c[1], o), c = Yr(c, t.attrs, o), ux(e, t, o, c));
        }
        else
            i = dx(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function lx(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (To(o) !== 0)
    return e[Rn(o)]; }
function ux(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Rn(r)] = o; }
function dx(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = Yr(o, s, n);
} return Yr(o, t.attrs, n); }
function lu(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = Yr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function Yr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), cr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function fx(e, t, n) { if (n == null || n === "")
    return F; let o = [], r = Rt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function GD(e, t, n) { cr(e, t, Rt(n)); }
function px(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && cr(e, o, n); }
function hx(e, t, n, o, r, i, s, a) { r === H && (r = F); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && qD(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function qD(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = Yk(l) ? lm(c, t, n, r, To(l), s) : void 0; if (!la(u)) {
    la(i) || Qk(l) && (i = lm(c, null, n, r, a, s));
    let d = gn(re(), n);
    wS(o, s, d, r, i);
} }
function lm(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === H && (f = d ? F : void 0);
    let p = d ? Qi(f, o) : u === o ? f : void 0;
    if (l && !la(p) && (p = Qi(c, o)), la(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Rn(h) : To(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Qi(c, o));
} return a; }
function la(e) { return e !== void 0; }
function gx(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Xo(Rt(e)))), e; }
function WD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function zD(e, t = "") { let n = g(), o = A(), r = e + I, i = o.firstCreatePass ? Fn(o, r, 1, t, null) : o.data[r], s = QD(o, n, i, t); n[r] = s, mr() && uf(o, n, s, i), lt(i, !1); }
var QD = (e, t, n, o) => (Xe(!0), Bd(t[w], o));
function mx(e, t, n, o) { let r = !wa(t, n); if (Xe(r), r)
    return Bd(t[w], o); let i = t[fe]; return hi(i, e, t, n); }
function ZD() { QD = mx; }
function YD(e, t) { let n = !1, o = ut(); for (let i = 1; i < t.length; i += 2)
    n = Y(e, o++, t[i]) || n; if (Rl(o), !n)
    return H; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += b(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function KD(e, t, n, o = "") { return Y(e, Ee(), n) ? t + b(n) + o : H; }
function JD(e, t, n, o, r, i = "") { let s = ut(), a = Sn(e, s, n, r); return dt(2), a ? t + b(n) + o + b(r) + i : H; }
function XD(e, t, n, o, r, i, s, a = "") { let c = ut(), l = tc(e, c, n, r, s); return dt(3), l ? t + b(n) + o + b(r) + i + b(s) + a : H; }
function eT(e, t, n, o, r, i, s, a, c, l = "") { let u = ut(), d = qe(e, u, n, r, s, c); return dt(4), d ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l : H; }
function tT(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = ut(), p = qe(e, f, n, r, s, c); return p = Y(e, f + 4, u) || p, dt(5), p ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d : H; }
function nT(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = ut(), y = qe(e, h, n, r, s, c); return y = Sn(e, h + 4, u, f) || y, dt(6), y ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p : H; }
function oT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let E = ut(), T = qe(e, E, n, r, s, c); return T = tc(e, E + 4, u, f, h) || T, dt(7), T ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + y : H; }
function rT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E, T = "") { let k = ut(), ne = qe(e, k, n, r, s, c); return ne = qe(e, k + 4, u, f, h, E) || ne, dt(8), ne ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + y + b(E) + T : H; }
function Cp(e) { return hc("", e), Cp; }
function hc(e, t, n) { let o = g(), r = KD(o, e, t, n); return r !== H && Pt(o, re(), r), hc; }
function Mp(e, t, n, o, r) { let i = g(), s = JD(i, e, t, n, o, r); return s !== H && Pt(i, re(), s), Mp; }
function Np(e, t, n, o, r, i, s) { let a = g(), c = XD(a, e, t, n, o, r, i, s); return c !== H && Pt(a, re(), c), Np; }
function wp(e, t, n, o, r, i, s, a, c) { let l = g(), u = eT(l, e, t, n, o, r, i, s, a, c); return u !== H && Pt(l, re(), u), wp; }
function _p(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = tT(d, e, t, n, o, r, i, s, a, c, l, u); return f !== H && Pt(d, re(), f), _p; }
function Sp(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = nT(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== H && Pt(p, re(), h), Sp; }
function bp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), E = oT(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return E !== H && Pt(y, re(), E), bp; }
function Ap(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E) { let T = g(), k = rT(T, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); return k !== H && Pt(T, re(), k), Ap; }
function Rp(e) { let t = g(), n = YD(t, e); return n !== H && Pt(t, re(), n), Rp; }
function Pt(e, t, n) { let o = gn(t, e); qy(e[w], o, n); }
function kp(e, t, n) { Gf(t) && (t = t()); let o = g(), r = Ee(); if (Y(o, r, t)) {
    let i = A(), s = xe();
    ff(s, o, e, t, o[w], n);
} return kp; }
function iT(e, t) { let n = Gf(e); return n && e.set(t), n; }
function xp(e, t) { let n = g(), o = A(), r = _(); return mp(o, n, n[w], r, e, t), xp; }
var sT = {};
function Op(e) { X("NgLet"); let t = A(), n = g(), o = e + I, r = Fn(t, o, 128, null, null); return lt(r, !1), fr(t, n, o, sT), Op; }
function aT(e) { let t = A(), n = g(), o = re(); return fr(t, n, o, e), e; }
function cT(e) { let t = bl(), n = Ut(t, I + e); if (n === sT)
    throw new D(314, !1); return n; }
function lT(e, t) { let n = A(), o = g(), r = o[w], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = $t(n, s + I), d = gn(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function uT(e) { return Y(g(), Ee(), e) ? b(e) : H; }
function dT(e, t, n = "") { return KD(g(), e, t, n); }
function fT(e, t, n, o, r = "") { return JD(g(), e, t, n, o, r); }
function pT(e, t, n, o, r, i, s = "") { return XD(g(), e, t, n, o, r, i, s); }
function hT(e, t, n, o, r, i, s, a, c = "") { return eT(g(), e, t, n, o, r, i, s, a, c); }
function gT(e, t, n, o, r, i, s, a, c, l, u = "") { return tT(g(), e, t, n, o, r, i, s, a, c, l, u); }
function mT(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return nT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function yT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return oT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function vT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E = "") { return rT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); }
function ET(e) { return YD(g(), e); }
function IT(e, t, n) { let o = ye() + e, r = g(); return r[o] === H ? tt(r, o, t(n, r)) : Vo(r, o); }
function um(e, t, n) { let o = A(); o.firstCreatePass && DT(t, o.data, o.blueprint, Be(e), n); }
function DT(e, t, n, o, r) { if (e = P(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        DT(e[i], t, n, o, r);
else {
    let i = A(), s = g(), a = _(), c = sn(e) ? e : P(e.provide), l = ul(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (sn(e) || !e.multi) {
        let p = new Cn(l, r, jo, null), h = du(c, t, r ? u : u + f, d);
        h === -1 ? (yu(Bs(a, s), i, c), uu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = du(c, t, u + f, d), h = du(c, t, u, u + f), y = p >= 0 && n[p], E = h >= 0 && n[h];
        if (r && !E || !r && !y) {
            yu(Bs(a, s), i, c);
            let T = Ex(r ? vx : yx, n.length, r, o, l, e);
            !r && E && (n[h].providerFactory = T), uu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(T), s.push(T);
        }
        else {
            let T = TT(n[r ? h : p], l, !r && o);
            uu(i, e, p > -1 ? p : h, T);
        }
        !r && o && E && n[h].componentProviders++;
    }
} }
function uu(e, t, n, o) { let r = sn(t), i = Ph(t); if (r || i) {
    let c = (i ? P(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function TT(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function du(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function yx(e, t, n, o, r) { return md(this.multi, []); }
function vx(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = xr(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), md(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], md(i, s); return s; }
function md(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function Ex(e, t, n, o, r, i) { let s = new Cn(e, n, jo, null); return s.multi = [], s.index = t, s.componentProviders = 0, TT(s, r, o && !n), s; }
function CT(e, t) { return n => { n.providersResolver = (o, r) => um(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => um(o, r ? r(t) : t, !0)); }; }
function MT(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function NT(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = oa(t, QE), o.pipeDefs = oa(n, Ze); }
function wT(e, t) { return ht(() => { let n = Ui(e); n.declarations = Ms(t.declarations || F), n.imports = Ms(t.imports || F), n.exports = Ms(t.exports || F), t.bootstrap && (n.bootstrap = Ms(t.bootstrap)), mo.registerNgModule(e, t); }); }
function Ms(e) { if (typeof e == "function")
    return e; let t = Ye(e); return t.some(tr) ? () => t.map(P).map(dm) : t.map(dm); }
function dm(e) { return Df(e) ? e.ngModule : e; }
function _T(e, t) { let n = ye() + e, o = g(); return o[n] === H ? tt(o, n, t()) : Vo(o, n); }
function ST(e, t, n) { return FT(g(), ye(), e, t, n); }
function bT(e, t, n, o) { return jT(g(), ye(), e, t, n, o); }
function AT(e, t, n, o, r) { return VT(g(), ye(), e, t, n, o, r); }
function RT(e, t, n, o, r, i, s) { return HT(g(), ye(), e, t, n, o, r, i); }
function kT(e, t, n, o, r, i, s) { let a = ye() + e, c = g(), l = qe(c, a, n, o, r, i); return Y(c, a + 4, s) || l ? tt(c, a + 5, t(n, o, r, i, s)) : Vo(c, a + 5); }
function xT(e, t, n, o, r, i, s, a) { let c = ye() + e, l = g(), u = qe(l, c, n, o, r, i); return Sn(l, c + 4, s, a) || u ? tt(l, c + 6, t(n, o, r, i, s, a)) : Vo(l, c + 6); }
function OT(e, t, n, o, r, i, s, a, c) { let l = ye() + e, u = g(), d = qe(u, l, n, o, r, i); return tc(u, l + 4, s, a, c) || d ? tt(u, l + 7, t(n, o, r, i, s, a, c)) : Vo(u, l + 7); }
function PT(e, t, n, o, r, i, s, a, c, l) { let u = ye() + e, d = g(), f = qe(d, u, n, o, r, i); return qe(d, u + 4, s, a, c, l) || f ? tt(d, u + 8, t(n, o, r, i, s, a, c, l)) : Vo(d, u + 8); }
function LT(e, t, n) { return BT(g(), ye(), e, t, n); }
function Ti(e, t) { let n = e[t]; return n === H ? void 0 : n; }
function FT(e, t, n, o, r, i) { let s = t + n; return Y(e, s, r) ? tt(e, s + 1, i ? o.call(i, r) : o(r)) : Ti(e, s + 1); }
function jT(e, t, n, o, r, i, s) { let a = t + n; return Sn(e, a, r, i) ? tt(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Ti(e, a + 2); }
function VT(e, t, n, o, r, i, s, a) { let c = t + n; return tc(e, c, r, i, s) ? tt(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Ti(e, c + 3); }
function HT(e, t, n, o, r, i, s, a, c) { let l = t + n; return qe(e, l, r, i, s, a) ? tt(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Ti(e, l + 4); }
function BT(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    Y(e, s++, r[c]) && (a = !0); return a ? tt(e, s, o.apply(i, r)) : Ti(e, s); }
function $T(e, t) { let n = A(), o, r = e + I; n.firstCreatePass ? (o = Ix(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Ft(o.type, !0)), s, a = De(jo); try {
    let c = Hs(!1), l = i();
    return Hs(c), fr(n, g(), r, l), l;
}
finally {
    De(a);
} }
function Ix(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function UT(e, t, n) { let o = e + I, r = g(), i = Ut(r, o); return Ci(r, o) ? FT(r, ye(), t, i.transform, n, i) : i.transform(n); }
function GT(e, t, n, o) { let r = e + I, i = g(), s = Ut(i, r); return Ci(i, r) ? jT(i, ye(), t, s.transform, n, o, s) : s.transform(n, o); }
function qT(e, t, n, o, r) { let i = e + I, s = g(), a = Ut(s, i); return Ci(s, i) ? VT(s, ye(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function WT(e, t, n, o, r, i) { let s = e + I, a = g(), c = Ut(a, s); return Ci(a, s) ? HT(a, ye(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function zT(e, t, n) { let o = e + I, r = g(), i = Ut(r, o); return Ci(r, o) ? BT(r, ye(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Ci(e, t) { return e[m].data[t].pure; }
function QT(e, t) { return za(e, t); }
function ZT(e, t) { return () => { try {
    return mo.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function YT(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function KT(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function JT(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = Dx(s, W(e)); if (e[It] = a, c.tView) {
    let l = aw().values();
    for (let u of l)
        at(u) && u[Q] === null && Ps(r, i, a, c, u);
} }
function Dx(e, t) { let n = z({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Ps(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    Cx(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        oe(a[$]) && Ps(e, t, n, o, a[$]);
        for (let c = q; c < a.length; c++)
            Ps(e, t, n, o, a[c]);
    }
    else
        oe(a) && Ps(e, t, n, o, a);
} }
function Tx(e, t) { e.componentReplaced?.(t.id); }
function Cx(e, t, n, o, r) { let i = r[U], s = r[$], a = r[Q], c = r[de], l = r[L].get(G, null), u = () => { if (o.encapsulation === Ge.ShadowDom || o.encapsulation === Ge.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = nv(n), f = Aa(a, d, i, Kd(n), s, c, null, null, null, null, null); Mx(a, r, f, c.index), fi(r[m], r), Br(r); let p = r[Ve].rendererFactory; Tx(p, o), f[w] = p.createRenderer(s, n), hv(r[m], r), Nx(c), qa(d, f, i), xv(d, f, d.template, i); }; l === null ? fm(e, t, u) : l.run(() => fm(e, t, u)); }
function fm(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function Mx(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((oe(i) || K(i)) && i[ge] === t) {
        i[ge] = n;
        break;
    }
} e[Ht] === t && (e[Ht] = n), e[lr] === t && (e[lr] = n), n[ge] = t[ge], t[ge] = null, e[o] = n; }
function Nx(e) { if (e.projection !== null) {
    for (let t of e.projection)
        da(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var Ie = { \u0275\u0275animateEnter: wr, \u0275\u0275animateEnterListener: _r, \u0275\u0275animateLeave: Sr, \u0275\u0275animateLeaveListener: ra, \u0275\u0275attribute: Jf, \u0275\u0275defineComponent: zE, \u0275\u0275defineDirective: ZE, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: nr, \u0275\u0275defineNgModule: Lf, \u0275\u0275definePipe: YE, \u0275\u0275directiveInject: jo, \u0275\u0275getInheritedFactory: $m, \u0275\u0275inject: he, \u0275\u0275injectAttribute: fa, \u0275\u0275invalidFactory: pE, \u0275\u0275invalidFactoryDep: Wi, \u0275\u0275templateRefExtractor: QT, \u0275\u0275resetView: Nl, \u0275\u0275HostDirectivesFeature: eI, \u0275\u0275NgOnChangesFeature: wm, \u0275\u0275ControlFeature: XE, \u0275\u0275ProvidersFeature: CT, \u0275\u0275InheritDefinitionFeature: Ff, \u0275\u0275ExternalStylesFeature: MT, \u0275\u0275nextContext: _D, \u0275\u0275namespaceHTML: Fl, \u0275\u0275namespaceMathML: Ll, \u0275\u0275namespaceSVG: Pl, \u0275\u0275enableBindings: Dl, \u0275\u0275disableBindings: Tl, \u0275\u0275elementStart: Qr, \u0275\u0275elementEnd: lc, \u0275\u0275element: ep, \u0275\u0275elementContainerStart: fc, \u0275\u0275elementContainerEnd: Ii, \u0275\u0275domElement: tp, \u0275\u0275domElementStart: uc, \u0275\u0275domElementEnd: dc, \u0275\u0275domElementContainer: ip, \u0275\u0275domElementContainerStart: pc, \u0275\u0275domElementContainerEnd: rp, \u0275\u0275domTemplate: Vf, \u0275\u0275domListener: gp, \u0275\u0275elementContainer: op, \u0275\u0275pureFunction0: _T, \u0275\u0275pureFunction1: ST, \u0275\u0275pureFunction2: bT, \u0275\u0275pureFunction3: AT, \u0275\u0275pureFunction4: RT, \u0275\u0275pureFunction5: kT, \u0275\u0275pureFunction6: xT, \u0275\u0275pureFunction7: OT, \u0275\u0275pureFunction8: PT, \u0275\u0275pureFunctionV: LT, \u0275\u0275getCurrentView: aD, \u0275\u0275restoreView: Ml, \u0275\u0275listener: pp, \u0275\u0275projection: bD, \u0275\u0275syntheticHostProperty: cp, \u0275\u0275syntheticHostListener: hp, \u0275\u0275pipeBind1: UT, \u0275\u0275pipeBind2: GT, \u0275\u0275pipeBind3: qT, \u0275\u0275pipeBind4: WT, \u0275\u0275pipeBindV: zT, \u0275\u0275projectionDef: SD, \u0275\u0275domProperty: ap, \u0275\u0275ariaProperty: Kf, \u0275\u0275property: Xf, \u0275\u0275control: TE, \u0275\u0275controlCreate: IE, \u0275\u0275pipe: $T, \u0275\u0275queryRefresh: AD, \u0275\u0275queryAdvance: kD, \u0275\u0275viewQuery: vp, \u0275\u0275viewQuerySignal: Ip, \u0275\u0275loadQuery: RD, \u0275\u0275contentQuery: yp, \u0275\u0275contentQuerySignal: Ep, \u0275\u0275reference: xD, \u0275\u0275classMap: VD, \u0275\u0275styleMap: jD, \u0275\u0275styleProp: Dp, \u0275\u0275classProp: Tp, \u0275\u0275advance: ov, \u0275\u0275template: jf, \u0275\u0275conditional: eD, \u0275\u0275conditionalCreate: XI, \u0275\u0275conditionalBranchCreate: cc, \u0275\u0275defer: bI, \u0275\u0275deferWhen: AI, \u0275\u0275deferOnIdle: OI, \u0275\u0275deferOnImmediate: FI, \u0275\u0275deferOnTimer: HI, \u0275\u0275deferOnHover: UI, \u0275\u0275deferOnInteraction: WI, \u0275\u0275deferOnViewport: ZI, \u0275\u0275deferPrefetchWhen: RI, \u0275\u0275deferPrefetchOnIdle: PI, \u0275\u0275deferPrefetchOnImmediate: jI, \u0275\u0275deferPrefetchOnTimer: BI, \u0275\u0275deferPrefetchOnHover: GI, \u0275\u0275deferPrefetchOnInteraction: zI, \u0275\u0275deferPrefetchOnViewport: YI, \u0275\u0275deferHydrateWhen: kI, \u0275\u0275deferHydrateNever: xI, \u0275\u0275deferHydrateOnIdle: LI, \u0275\u0275deferHydrateOnImmediate: VI, \u0275\u0275deferHydrateOnTimer: $I, \u0275\u0275deferHydrateOnHover: qI, \u0275\u0275deferHydrateOnInteraction: QI, \u0275\u0275deferHydrateOnViewport: KI, \u0275\u0275deferEnableTimerScheduling: gI, \u0275\u0275repeater: rD, \u0275\u0275repeaterCreate: oD, \u0275\u0275repeaterTrackByIndex: tD, \u0275\u0275repeaterTrackByIdentity: nD, \u0275\u0275componentInstance: JI, \u0275\u0275text: zD, \u0275\u0275textInterpolate: Cp, \u0275\u0275textInterpolate1: hc, \u0275\u0275textInterpolate2: Mp, \u0275\u0275textInterpolate3: Np, \u0275\u0275textInterpolate4: wp, \u0275\u0275textInterpolate5: _p, \u0275\u0275textInterpolate6: Sp, \u0275\u0275textInterpolate7: bp, \u0275\u0275textInterpolate8: Ap, \u0275\u0275textInterpolateV: Rp, \u0275\u0275i18n: CD, \u0275\u0275i18nAttributes: MD, \u0275\u0275i18nExp: fp, \u0275\u0275i18nStart: up, \u0275\u0275i18nEnd: dp, \u0275\u0275i18nApply: ND, \u0275\u0275i18nPostprocess: wD, \u0275\u0275resolveWindow: Jy, \u0275\u0275resolveDocument: Xy, \u0275\u0275resolveBody: Qd, \u0275\u0275setComponentScope: NT, \u0275\u0275setNgModuleScope: wT, \u0275\u0275registerNgModuleType: xf, \u0275\u0275getComponentDepsFactory: ZT, \u0275setClassDebugInfo: YT, \u0275\u0275declareLet: Op, \u0275\u0275storeLet: aT, \u0275\u0275arrowFunction: IT, \u0275\u0275readContextLet: cT, \u0275\u0275attachSourceLocations: lT, \u0275\u0275interpolate: uT, \u0275\u0275interpolate1: dT, \u0275\u0275interpolate2: fT, \u0275\u0275interpolate3: pT, \u0275\u0275interpolate4: hT, \u0275\u0275interpolate5: gT, \u0275\u0275interpolate6: mT, \u0275\u0275interpolate7: yT, \u0275\u0275interpolate8: vT, \u0275\u0275interpolateV: ET, \u0275\u0275sanitizeHtml: Ud, \u0275\u0275sanitizeStyle: Gd, \u0275\u0275sanitizeResourceUrl: ba, \u0275\u0275sanitizeScript: Wd, \u0275\u0275validateAttribute: zd, \u0275\u0275sanitizeUrl: qd, \u0275\u0275sanitizeUrlOrResourceUrl: Ky, \u0275\u0275trustConstantHtml: Zy, \u0275\u0275trustConstantResourceUrl: Yy, forwardRef: er, resolveForwardRef: P, \u0275\u0275twoWayProperty: kp, \u0275\u0275twoWayBindingSet: iT, \u0275\u0275twoWayListener: xp, \u0275\u0275replaceMetadata: JT, \u0275\u0275getReplaceMetadataURL: KT }, io = null;
function XT(e) { io !== null && (e.defaultEncapsulation !== io.defaultEncapsulation || e.preserveWhitespaces !== io.preserveWhitespaces) || (io = e); }
function wx() { return io; }
function _x() { io = null; }
var kr = [];
function Sx(e, t) { kr.push({ moduleType: e, ngModule: t }); }
var fu = !1;
function eC() { if (!fu) {
    fu = !0;
    try {
        for (let e = kr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = kr[e];
            n.declarations && n.declarations.every(tC) && (kr.splice(e, 1), xx(t, n));
        }
    }
    finally {
        fu = !1;
    }
} }
function tC(e) { return Array.isArray(e) ? e.every(tC) : !!P(e); }
function nC(e, t = {}) { oC(e, t), t.id !== void 0 && xf(e, t.id), Sx(e, t); }
function oC(e, t, n = !1) { let o = Ye(t.declarations || F), r = null; Object.defineProperty(e, $i, { configurable: !0, get: () => (r === null && (r = se({ usage: 0, kind: "NgModule", type: e }).compileNgModule(Ie, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ye(t.bootstrap || F).map(P), declarations: o.map(P), imports: Ye(t.imports || F).map(P).map(pm), exports: Ye(t.exports || F).map(P).map(pm), schemas: t.schemas ? Ye(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, rt, { get: () => { if (i === null) {
        let a = se({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(Ie, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: pa(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, zo, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || F, imports: [(t.imports || F).map(P), (t.exports || F).map(P)] };
        s = se({ usage: 0, kind: "NgModule", type: e }).compileInjector(Ie, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function bx(e, t) { let n = `Unexpected "${Le(e)}" found in the "declarations" array of the`, o = `"${Le(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var Ax = new WeakMap, Rx = new WeakMap;
function kx() { Ax = new WeakMap, Rx = new WeakMap, kr.length = 0, ZA.clear(); }
function xx(e, t) { let n = Ye(t.declarations || F), o = Lp(e); n.forEach(r => { if (r = P(r), r.hasOwnProperty(It)) {
    let s = W(r);
    Pp(s, o);
}
else
    !r.hasOwnProperty(cn) && !r.hasOwnProperty(rr) && (r.ngSelectorScope = e); }); }
function Pp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(It) ? W(n) : Ae(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Ze(n)), e.schemas = t.schemas, e.tView = null; }
function Lp(e) { if (vn(e)) {
    let t = mo.getNgModuleScope(e), n = Ui(e);
    return z({ schemas: n.schemas || null }, t);
}
else if (ir(e)) {
    if ((W(e) || Ae(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Ze(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function pm(e) { return Df(e) ? e.ngModule : e; }
var pu = 0;
function rC(e, t) {
    let n = null;
    jA(e, t), sC(e, t), Object.defineProperty(e, It, { get: () => {
            if (n === null) {
                let o = se({ usage: 0, kind: "component", type: e });
                if (BE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = wx(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Ge.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = aC(e, t), l = _e(z({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || F, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                pu++;
                try {
                    if (l.usesInheritance && cC(e), n = o.compileComponent(Ie, a, l), l.isStandalone) {
                        let u = Ye(t.imports || F), { directiveDefs: d, pipeDefs: f } = Ox(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(P);
                    }
                }
                finally {
                    pu--;
                }
                if (pu === 0 && eC(), Px(e)) {
                    let u = Lp(e.ngSelectorScope);
                    Pp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Le(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function Ox(e, t) { return { directiveDefs: () => Mr(e) ? [...mo.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Ae(i)).filter(i => i !== null) : [], pipeDefs: () => Mr(e) ? [...mo.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Ze(i)).filter(i => i !== null) : [] }; }
function Px(e) { return e.ngSelectorScope !== void 0; }
function Fp(e, t) { let n = null; sC(e, t || {}), Object.defineProperty(e, cn, { get: () => { if (n === null) {
        let o = iC(e, t || {});
        n = se({ usage: 0, kind: "directive", type: e }).compileDirective(Ie, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function iC(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = se({ usage: 0, kind: "directive", type: e }), i = aC(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && cC(e), { metadata: i, sourceMapUrl: o }; }
function sC(e, t) { let n = null; Object.defineProperty(e, rt, { get: () => { if (n === null) {
        let o = iC(e, t), r = se({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(Ie, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: pa(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function Lx(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function aC(e, t) { let n = Dd(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Fe, propMetadata: o, inputs: t.inputs || F, outputs: t.outputs || F, queries: hm(e, o, lC), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !Lx(e), exportAs: Vx(t.exportAs), providers: t.providers || null, viewQueries: hm(e, o, uC), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function cC(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ae(n) && !W(n) && Bx(n) && Fp(n, null), n = Object.getPrototypeOf(n); }
function Fx(e) { return typeof e == "string" ? fC(e) : P(e); }
function jx(e, t) { return { propertyName: e, predicate: Fx(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function hm(e, t, n) { let o = [], r = []; for (let i in t)
    if (t.hasOwnProperty(i)) {
        let s = t[i];
        s.forEach(a => { if (n(a)) {
            if (!a.selector)
                throw new Error(`Can't construct a query for the property "${i}" of "${Le(e)}" since the query selector wasn't defined.`);
            if (s.some(dC))
                throw new Error("Cannot combine @Input decorators with query decorators");
            let c = jx(i, a);
            c.isSignal ? o.push(c) : r.push(c);
        } });
    } return [...o, ...r]; }
function Vx(e) { return e === void 0 ? null : fC(e); }
function lC(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function uC(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function dC(e) { return e.ngMetadataName === "Input"; }
function fC(e) { return e.split(",").map(t => t.trim()); }
var Hx = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function Bx(e) { let t = Dd(); if (Hx.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (dC(s) || lC(s) || uC(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function pC(e, t) { let n = null, o = null; Object.defineProperty(e, rt, { get: () => { if (o === null) {
        let r = gm(e, t), i = se({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(Ie, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: pa(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, rr, { get: () => { if (n === null) {
        let r = gm(e, t);
        n = se({ usage: 0, kind: "pipe", type: r.type }).compilePipe(Ie, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function gm(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var hC = Xr("Directive", (e = {}) => e, void 0, void 0, (e, t) => Fp(e, t)), $x = Xr("Component", (e = {}) => z({ changeDetection: ha.Eager }, e), hC, void 0, (e, t) => rC(e, t)), Ux = Xr("Pipe", e => z({ pure: !0 }, e), void 0, void 0, (e, t) => pC(e, t)), Gx = St("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), qx = St("Output", e => ({ alias: e })), Wx = St("HostBinding", e => ({ hostPropertyName: e })), zx = St("HostListener", (e, t) => ({ eventName: e, args: t })), Qx = Xr("NgModule", e => e, void 0, void 0, (e, t) => nC(e, t)), ua = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, Zx = (() => { class e {
    compileModuleSync(n) { return new Io(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = un(n), i = oo(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Xt(c)), s; }, []); return new ua(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), gC = new C(""), yd = class {
};
var mC = (() => { class e {
    applicationErrorHandler = v(Tt);
    appRef = v(We);
    taskService = v(Dt);
    ngZone = v(G);
    zonelessEnabled = v(Yn);
    tracing = v(Ln, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new CN;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Yo) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (v(fs, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Jh : Bl; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Yo + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Yx() { return X("NgZoneless"), Ke([...gc(), []]); }
function gc() { return [{ provide: Pe, useExisting: mC }, { provide: G, useClass: Ko }, { provide: Yn, useValue: !0 }]; }
function Kx() { return typeof $localize < "u" && $localize.locale || Di; }
var jp = new C("", { factory: () => v(jp, { optional: !0, skipSelf: !0 }) || Kx() }), Jx = new C("", { factory: () => fk }), Xx = new C(""), eO = new C(""), yC = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(yC || {}), vd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function tO(e) { return e.map(t => t.nativeElement); }
var Kr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new kn(t) : null; }
    get injector() { return yw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (pg(t) || mw(t)); }
    get context() { return pg(this.nativeNode) || gw(this.nativeNode); }
    get listeners() { return Tw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return Iw(this.nativeNode); }
    get providerTokens() { return vw(this.nativeNode); }
}, kn = class extends Kr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Ne(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Ne(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return nO(this.nativeElement, i), rO(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = Ne(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(Jr(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Jr(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return mm(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return mm(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function nO(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                oO(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function oO(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function mm(e, t, n, o) { let r = Ne(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    En(s, i, t, n, o, e.nativeNode);
}
else
    Vp(e.nativeNode, t, n, o); }
function En(e, t, n, o, r, i) { let s = Fh(e, t); if (e.type & 11) {
    if (hu(s, n, o, r, i), Te(e)) {
        let c = ve(e.index, t);
        c && c[m].firstChild && En(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && En(e.child, t, n, o, r, i), s && Vp(s, n, o, r);
    let a = t[e.index];
    K(a) && ym(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    hu(a[Je], n, o, r, i), ym(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[te], l = a[de].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            hu(u, n, o, r, i);
    else if (l) {
        let u = a[Q], d = u[m].data[l.index];
        En(d, u, n, o, r, i);
    }
}
else
    e.child && En(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && En(a, t, n, o, r, i);
} }
function ym(e, t, n, o, r) { for (let i = q; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && En(a, s, t, n, o, r);
} }
function hu(e, t, n, o, r) { if (r !== e) {
    let i = Jr(e);
    if (!i)
        return;
    (o && i instanceof kn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Vp(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Jr(a);
    c && ((o && c instanceof kn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Vp(a, t, n, o));
} }
function rO(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(U_), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += b(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var gu = "__ng_debug__";
function Jr(e) { return e instanceof Node ? (e.hasOwnProperty(gu) || (e[gu] = e.nodeType == Node.ELEMENT_NODE ? new kn(e) : new Kr(e)), e[gu]) : null; }
var Mi = class {
    destroyed = !1;
    listeners = null;
    errorHandler = v(Et, { optional: !0 });
    destroyRef = v($e);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new D(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Jo(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = R(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        R(n);
    } }
};
function iO(e) { return e.destroyRef; }
function nt(e) { return Eh(e); }
function we(e, t) { return xi(e, t?.equal); }
var sO = e => e;
function Hp(e, t) { if (typeof e == "function") {
    let n = Fc(e, sO, t?.equal);
    return vC(n, t?.debugName);
}
else {
    let n = Fc(e.source, e.computation, e.equal);
    return vC(n, e.debugName);
} }
function vC(e, t) { let n = e[le], o = e; return o.set = r => yh(n, r), o.update = r => vh(n, r), o.asReadonly = Qn.bind(e), o; }
function aO(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new mc(n, lO(e), e.defaultValue, e.equal ? cO(e.equal) : void 0, e.debugName, e.injector ?? v(ue)); }
var Bp = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = Qn, this.isLoading = we(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = we(() => this.status() === "error");
    update(t) { this.set(t(nt(this.value))); }
    isValueDefined = we(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= we(() => { let t = this.status(); return t === "error" ? { status: "error", error: this.error() } : { status: t, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, mc = class extends Bp {
    loaderFn;
    equal;
    debugName;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    constructor(t, n, o, r, i, s, a) { super(we(() => { let c = this.state().stream?.(); if (!c || this.state().status === "loading" && this.error())
        return o; if (!$p(c))
        throw new Ni(this.error()); return c.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = Hp({ source: t, computation: c => ({ request: c, reload: 0 }) }), this.state = Hp({ source: this.extRequest, computation: (c, l) => { if (l) {
            let u = c.request === void 0 ? "idle" : "loading";
            return { extRequest: c, status: u, previousStatus: EC(l.value), stream: l.value.extRequest.request === c.request ? l.value.stream : void 0 };
        }
        else {
            let u = a?.(c.request);
            a = void 0;
            let d = c.request === void 0 ? "idle" : u ? "resolved" : "loading";
            return { extRequest: c, status: d, previousStatus: "idle", stream: u };
        } } }), this.effectRef = ql(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(yr), this.unregisterOnDestroy = s.get($e).onDestroy(() => this.destroy()), this.status = we(() => EC(this.state()), void 0), this.error = we(() => { let c = this.state().stream?.(); return c && !$p(c) ? c.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = nt(this.error), o = nt(this.state); if (!n) {
        let r = nt(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: qt({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = nt(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return Qe(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = nt(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield nt(() => this.loaderFn({ params: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || nt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || nt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: qt({ error: Gp(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { nt(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function cO(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function lO(e) { return uO(e) ? e.stream : t => Qe(null, null, function* () { try {
    return qt({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return qt({ error: Gp(n) }, void 0);
} }); }
function uO(e) { return !!e.stream; }
function EC(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return $p(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function $p(e) { return e.error === void 0; }
function Gp(e) { return dO(e) ? e : new Up(e); }
function dO(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Ni = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Up = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
import { Subscription as qO } from "rxjs";
var Zp = { JSACTION: "__jsaction", OWNER: "__owner" }, CC = {};
function fO(e) { return e[Zp.JSACTION]; }
function IC(e, t) { e[Zp.JSACTION] = t; }
function pO(e) { return CC[e]; }
function hO(e, t) { CC[e] = t; }
var M = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, gO = [M.MOUSEENTER, M.MOUSELEAVE, "pointerenter", "pointerleave"], mO = [M.CLICK, M.DBLCLICK, M.FOCUSIN, M.FOCUSOUT, M.KEYDOWN, M.KEYUP, M.KEYPRESS, M.MOUSEOVER, M.MOUSEOUT, M.SUBMIT, M.TOUCHSTART, M.TOUCHEND, M.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], MC = [M.FOCUS, M.BLUR, M.ERROR, M.LOAD, M.TOGGLE], Tc = e => MC.indexOf(e) >= 0, yO = mO.concat(MC), NC = e => yO.indexOf(e) >= 0;
function vO(e) { return e === M.MOUSEENTER ? M.MOUSEOVER : e === M.MOUSELEAVE ? M.MOUSEOUT : e === M.POINTERENTER ? M.POINTEROVER : e === M.POINTERLEAVE ? M.POINTEROUT : e; }
function EO(e, t, n, o) { let r = !1; Tc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function IO(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function DO(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var DC = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function TO(e) { return e.which === 2 || e.which == null && e.button === 4; }
function CO(e) { return DC && e.metaKey || !DC && e.ctrlKey || TO(e) || e.shiftKey; }
function MO(e, t, n) { let o = e.relatedTarget; return (e.type === M.MOUSEOVER && t === M.MOUSEENTER || e.type === M.MOUSEOUT && t === M.MOUSELEAVE || e.type === M.POINTEROVER && t === M.POINTERENTER || e.type === M.POINTEROUT && t === M.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function NO(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === M.MOUSEOVER ? n.type = M.MOUSEENTER : e.type === M.MOUSEOUT ? n.type = M.MOUSELEAVE : e.type === M.POINTEROVER ? n.type = M.POINTERENTER : n.type = M.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var Ic = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { this.handlerInfos.push(EO(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        IO(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, wO = { EVENT_ACTION_SEPARATOR: ":" };
function tn(e) { return e.eventType; }
function Yp(e, t) { e.eventType = t; }
function vc(e) { return e.event; }
function wC(e, t) { e.event = t; }
function _C(e) { return e.targetElement; }
function SC(e, t) { e.targetElement = t; }
function bC(e) { return e.eic; }
function _O(e, t) { e.eic = t; }
function SO(e) { return e.timeStamp; }
function bO(e, t) { e.timeStamp = t; }
function Ec(e) { return e.eia; }
function AC(e, t, n) { e.eia = [t, n]; }
function qp(e) { e.eia = void 0; }
function yc(e) { return e[1]; }
function AO(e) { return e.eirp; }
function RC(e, t) { e.eirp = t; }
function kC(e) { return e.eir; }
function xC(e, t) { e.eir = t; }
function OC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function RO(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Wp = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return tn(this.eventInfo); }
    setEventType(t) { Yp(this.eventInfo, t); }
    getEvent() { return vc(this.eventInfo); }
    setEvent(t) { wC(this.eventInfo, t); }
    getTargetElement() { return _C(this.eventInfo); }
    setTargetElement(t) { SC(this.eventInfo, t); }
    getContainer() { return bC(this.eventInfo); }
    setContainer(t) { _O(this.eventInfo, t); }
    getTimestamp() { return SO(this.eventInfo); }
    setTimestamp(t) { bO(this.eventInfo, t); }
    getAction() { let t = Ec(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        qp(this.eventInfo);
        return;
    } AC(this.eventInfo, t.name, t.element); }
    getIsReplay() { return AO(this.eventInfo); }
    setIsReplay(t) { RC(this.eventInfo, t); }
    getResolved() { return kC(this.eventInfo); }
    setResolved(t) { xC(this.eventInfo, t); }
    clone() { return new e(OC(this.eventInfo)); }
}, kO = {}, xO = /\s*;\s*/, OO = M.CLICK, zp = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && tn(t) === M.CLICK && CO(vc(t)) ? Yp(t, M.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { kC(t) || (this.populateAction(t, _C(t)), xC(t, !0)); }
    resolveParentAction(t) { let n = Ec(t), o = n && yc(n); qp(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== bC(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Ec(t));)
        o = this.getParentNode(o); let r = Ec(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (tn(t) === M.MOUSEENTER || tn(t) === M.MOUSELEAVE || tn(t) === M.POINTERENTER || tn(t) === M.POINTERLEAVE)))
        if (MO(vc(t), tn(t), yc(r))) {
            let i = NO(vc(t), yc(r));
            wC(t, i), SC(t, yc(r));
        }
        else
            qp(t); }
    getParentNode(t) { let n = t[Zp.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[tn(n)]; r !== void 0 && AC(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = fO(t); if (!n) {
        let o = t.getAttribute(Kn.JSACTION);
        if (!o)
            n = kO, IC(t, n);
        else {
            if (n = pO(o), !n) {
                n = {};
                let r = o.split(xO);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(wO.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : OO, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                hO(o, n);
            }
            IC(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, PC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(PC || {}), Qp = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Wp(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && PO(o.element, n) && DO(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function PO(e, t) { return e.tagName === "A" && (t.getEventType() === M.CLICK || t.getEventType() === M.CLICKMOD); }
var LC = Symbol.for("propagationStopped"), Kp = { REPLAY: 101 };
var LO = "`preventDefault` called during event replay.";
var FO = "`composedPath` called during event replay.", Dc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new zp({ clickModSupport: n }), this.dispatcher = new Qp(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && HO(t), jO(t); t.getAction();) {
        if (BO(t), Tc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), VO(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function jO(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[LC] = !0, n(); }; jn(t, "stopPropagation", o), jn(t, "stopImmediatePropagation", o); }
function VO(e) { return !!e.getEvent()[LC]; }
function HO(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); jn(t, "target", n), jn(t, "eventPhase", Kp.REPLAY), jn(t, "preventDefault", () => { throw o(), new Error(LO + ""); }), jn(t, "composedPath", () => { throw new Error(FO + ""); }); }
function BO(e) { let t = e.getEvent(), n = e.getAction()?.element; n && jn(t, "currentTarget", n, { configurable: !0 }); }
function jn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function FC(e, t) { e.ecrd(n => { t.dispatch(n); }, PC.I_AM_THE_JSACTION_FRAMEWORK); }
function $O(e) { return e?.q ?? []; }
function UO(e) { e && (TC(e.c, e.et, e.h), TC(e.c, e.etc, e.h, !0)); }
function TC(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var GO = !1, jC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = GO;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = RO(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        RC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && gO.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = vO(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), UO(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = OC(r);
            Yp(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function VC(e, t = window) { return $O(t._ejsas?.[e]); }
function Jp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "rxjs/operators";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var bc = Symbol("InputSignalNode#UNSET"), sM = _e(z({}, Oc), { transformFn: void 0, applyValueToInputSignal(e, t) { xc(e, t); } }), LF = Symbol();
function aM(e, t) { let n = Object.create(sM); n.value = e, n.transformFn = t?.transform; function o() { if (Ai(n), n.value === bc) {
    let r = null;
    throw new D(-950, r);
} return n.value; } return o[le] = n, o; }
var $o = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })($o || {});
var WO = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(WO || {}), HC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => fa(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, FF = (() => { let e = new C(""); return e.__NG_ELEMENT_ID__ = t => { let n = _(); if (n === null)
    throw new D(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new D(-204, !1); }, e; })();
function jF(e) { return new Mi; }
function BC(e, t) { return aM(e, t); }
function zO(e) { return aM(bc, e); }
var VF = (BC.required = zO, BC);
function $C(e, t) { return Af(t); }
function QO(e, t) { return Rf(t); }
var HF = ($C.required = QO, $C);
function BF(e, t) { return kf(t); }
function UC(e, t) { return Af(t); }
function ZO(e, t) { return Rf(t); }
var $F = (UC.required = ZO, UC);
function UF(e, t) { return kf(t); }
function cM(e, t) { let n = Object.create(sM), o = new Mi; n.value = e; function r() { return Ai(n), GC(n.value), n.value; } return r[le] = n, r.asReadonly = Qn.bind(r), r.set = i => { n.equal(n.value, i) || (xc(n, i), o.emit(i)); }, r.update = i => { GC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function GC(e) { if (e === bc)
    throw new D(952, !1); }
function qC(e, t) { return cM(e, t); }
function YO(e) { return cM(bc, e); }
var GF = (qC.required = YO, qC), lM = !0, Go = class {
}, qF = St("ContentChildren", (e, t = {}) => z({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: lM }, t), Go), WF = St("ContentChild", (e, t = {}) => z({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), Go), zF = St("ViewChildren", (e, t = {}) => z({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: lM }, t), Go), QF = St("ViewChild", (e, t) => z({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), Go);
function KO(e, t, n) { let o = new Io(n); return Promise.resolve(o); }
function WC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var JO = (() => { class e {
    zone = v(G);
    changeDetectionScheduler = v(Pe);
    applicationRef = v(We);
    applicationErrorHandler = v(Tt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), XO = new C("", { factory: () => !1 });
function eP({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new G(_e(z({}, uM()), { scheduleInRootZone: t })), [{ provide: Yn, useValue: !1 }, { provide: G, useFactory: e }, { provide: je, multi: !0, useFactory: () => { let n = v(JO, { optional: !0 }); return () => n.initialize(); } }, { provide: je, multi: !0, useFactory: () => { let n = v(tP); return () => { n.initialize(); }; } }, { provide: fs, useValue: t ?? Vl }]; }
function ZF(e) { let t = e?.scheduleInRootZone, n = eP({ ngZoneFactory: () => { let o = uM(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && X("NgZone_CoalesceEvent"), new G(o); }, scheduleInRootZone: t }); return Ke([{ provide: XO, useValue: !0 }, n]); }
function uM(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var tP = (() => { class e {
    subscription = new qO;
    initialized = !1;
    zone = v(G);
    pendingTasks = v(Dt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { G.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { G.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Mc = new C(""), nP = new C("");
function wi(e) { return !e.moduleRef; }
function dM(e) { let t = wi(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(G); return n.run(() => { wi(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Tt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), wi(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Mc);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Mc);
    s.add(i), e.moduleRef.onDestroy(() => { Nr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return rP(o, n, () => { let i = t.get(Dt), s = i.add(), a = t.get(Qf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(jp, Di); if (fD(c || Di), !t.get(nP, !0))
    return wi(e) ? t.get(We) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (wi(e)) {
    let u = t.get(We);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return fM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var fM;
function zC() { fM = oP; }
function oP(e, t) { let n = e.injector.get(We); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new D(-403, !1); t.push(e); }
function rP(e, t, n) { try {
    let o = n();
    return Wf(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var pM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [gc(), ...o?.applicationProviders ?? [], Gl], i = WE(n.moduleType, this.injector, r); return zC(), dM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Yf({}, o); return zC(), KO(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new D(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Mc, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(he(ue)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), Uo = null;
function iP(e) { if (Ac())
    throw new D(400, !1); Zf(), Uo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(pM); return gM(e), t; }
function sP(e, t, n = []) { let o = `Platform: ${t}`, r = new C(o); return (i = []) => { let s = Ac(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? iP(hM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : aP(r); }; }
function hM(e = [], t) { return ue.create({ name: t, providers: [{ provide: ll, useValue: "platform" }, { provide: Mc, useValue: new Set([() => Uo = null]) }, ...e] }); }
function aP(e) { let t = Ac(); if (!t)
    throw new D(-401, !1); return t; }
function Ac() { return typeof ngServerMode < "u" && ngServerMode ? null : Uo?.get(pM) ?? null; }
function YF() { Ac()?.destroy(); }
function cP(e = []) { if (Uo)
    return Uo; let t = hM(e); return (typeof ngServerMode > "u" || !ngServerMode) && (Uo = t), Zf(), gM(t), t; }
function KF(e) { return { provide: Cd, useValue: e, multi: !0 }; }
function gM(e) { let t = e.get(Cd, null); Yi(e, () => { t?.forEach(n => n()); }); }
function JF(e) { return Ke([]); }
function XF() { return !1; }
function e1() { }
var Cc = new WeakSet, QC = "";
function ZC(e) { return e.get(Da, bd); }
function lP() { let e = [{ provide: Da, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = v(bt);
            t = !!window._ejsas?.[n];
        } return t && X("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: je, useValue: () => { let t = v(We), { injector: n } = t; if (!Cc.has(t)) {
        let o = v(si);
        if (ZC(n)) {
            gy();
            let r = n.get(bt), i = py(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (fy(s, a, c), kd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: vi, useFactory: () => { let t = v(We), { injector: n } = t; return () => { if (!ZC(n) || Cc.has(t))
        return; Cc.add(t); let o = n.get(bt); t.onDestroy(() => { Cc.delete(t), typeof ngServerMode < "u" && !ngServerMode && Jp(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Od); uP(r, n); let i = n.get(si); i.get(QC)?.forEach(xd), i.delete(QC); let s = r.instance; ai(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var uP = (e, t) => { let n = t.get(bt), o = window._ejsas[n], r = e.instance = new jC(new Ic(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = VC(n); r.replayEarlyEventInfos(i), Jp(n); let s = new Dc(a => { fP(t, a, a.currentTarget); }); FC(r, s); };
function dP(e, t, n) { let o = new Map, r = t[Vt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!NC(l))
        continue;
    Tc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = x(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function fP(e, t, n) { let o = (n && n.getAttribute(Ao)) ?? ""; /d\d+/.test(o) ? pP(o, e, t, n) : t.eventPhase === Kp.REPLAY && Pd(t, n); }
function pP(e, t, n, o) { let r = t.get(cy); r.push({ event: n, currentTarget: o }), Ot(t, e, hP(r)); }
function hP(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(Ao);
    n.has(s) ? Pd(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var YC = !1, KC = !1, JC = !1, gP = 1e4;
function mP() { YC || (YC = !0, Dy(), iD(), ZD(), sD(), iI(), kE(), cE(), Nv()); }
function yP() { KC || (KC = !0, hD(), Xv(), rE()); }
function vP() { JC || (JC = !0, Ay()); }
function EP(e) { return e.whenStable(); }
var t1 = "ngcm";
function n1() { let e = [{ provide: On, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!v(_o, { optional: !0 })?.get(Ta, null)), t && X("NgHydration"), t; } }, { provide: je, useValue: () => { if (Ef(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = v(Gt); v(On) && (ky(t), mP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: _d, useFactory: () => v(On) }, { provide: vi, useFactory: () => { let t = v(Pe); if (v(On)) {
        let n = v(We);
        return () => { EP(n).then(() => { n.destroyed || (If(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), Ke(e); }
function o1() { return [{ provide: Sd, useFactory: () => v(On) }, { provide: je, useValue: () => { v(On) && (yP(), Ef(!0), X("NgI18nHydration")); }, multi: !0 }]; }
function r1() { let e = [lP(), { provide: Ad, useValue: !0 }, { provide: At, useClass: my }, { provide: je, useValue: () => { vP(), X("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: vi, useFactory: () => { let t = v(ue), n = v(Gt); return () => { let o = Ry(t), r = Yv(n, n.body); SI(t, o, r), Sy(n, t); }; }, multi: !0 }), e; }
var XC = gP - 1e3, th = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function i1() { let e = new th, { openTasks: t } = e; return Ke([{ provide: Hl, useValue: e }, TI(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = v(G), o = v(We), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${XC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, XC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function s1(e) { let t = Of(e); if (!t)
    throw mM(e); return new Io(t); }
function a1(e) { let t = Of(e); if (!t)
    throw mM(e); return t; }
function mM(e) { return new D(920, !1); }
var IP = (() => { class e {
    static __NG_ELEMENT_ID__ = DP;
} return e; })();
function DP(e) { return TP(_(), g(), (e & 16) === 16); }
function TP(e, t, n) { if (Te(e) && !n) {
    let o = ve(e.index, t);
    return new Jt(o, o);
}
else if (e.type & 175) {
    let o = t[te];
    return new Jt(o, t);
} return null; }
var nh = class extends IP {
}, eM = class extends nh {
}, Nc = class {
    supports(t) { return Gr(t); }
    create(t) { return new oh(t); }
}, CP = (e, t) => t, oh = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || CP; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < tM(o, r, i) ? n : o, a = tM(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Gr(t))
        throw new D(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, yE(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new rh(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new wc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new wc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, rh = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, ih = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, wc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new ih, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function tM(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var _c = class {
    supports(t) { return t instanceof Map || ec(t); }
    create() { return new sh; }
}, sh = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ec(t)))
        throw new D(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new ah(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, ah = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function nM() { return new yM([new Nc]); }
var yM = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: nM });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = v(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || nM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new D(901, !1); }
} return e; })();
function oM() { return new vM([new _c]); }
var vM = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: oM });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = v(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || oM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new D(901, !1); }
} return e; })(), MP = [new _c], NP = [new Nc], c1 = new yM(NP), l1 = new vM(MP), u1 = sP(null, "core", []), d1 = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(he(We)); };
    static \u0275mod = Lf({ type: e });
    static \u0275inj = nr({});
} return e; })();
function f1(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(O.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new D(-401, !1); try {
    let i = r?.injector ?? cP(o), s = [gc(), Gl, ...n || []], a = new Wr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return dM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(O.BootstrapApplicationEnd);
} }
var ch = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, wP = 0;
function EM(e) { return e.ssrId || (e.ssrId = `t${wP++}`), e.ssrId; }
function IM(e, t, n) { let o = []; return go(e, t, n, o), o.length; }
function _P(e) { let t = []; return Wa(e, t), t.length; }
function DM(e, t) { let n = e[$]; return n && !n.hasAttribute(xn) ? Sc(n, e, null, t) : null; }
function TM(e, t) { let n = dr(e[$]), o = DM(n, t); if (o === null)
    return; let r = x(n[$]), i = e[Q], s = Sc(r, i, null, t), a = n[w], c = `${o}|${s}`; a.setAttribute(r, ao, c); }
function p1(e, t) { let n = e.injector, o = eE(n), r = ai(n), i = new ch, s = new Map, a = e._views, c = n.get(Da, bd), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(bt); for (let p of a) {
    let h = Ld(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        K(h) ? TM(h, y) : DM(h, y), kP(s, t);
    }
} let d = i.getAll(), f = n.get(_o); if (f.set(Ta, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(Ca, p);
} return l; }
function SP(e, t, n, o, r) { let i = [], s = ""; for (let a = q; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (at(c) && (c = c[I], K(c))) {
        u = _P(c) + 1, TM(c, r);
        let p = dr(c[$]);
        d = { [va]: p[m].ssrId, [wt]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = EM(p), u = IM(p, c, p.firstChild)), d = { [va]: l, [wt]: u };
        let h = !1;
        if (uI(n[m], t)) {
            let y = Ce(n, t), E = pe(n[m], t);
            if (r.isIncrementalHydrationEnabled && E.hydrateTriggers !== null) {
                let T = `d${r.deferBlocks.size}`;
                E.hydrateTriggers.has(7) && (h = !0);
                let k = [];
                Wa(e, k);
                let ne = { [wt]: k.length, [ri]: y[xt] }, ze = bP(E.hydrateTriggers);
                ze.length > 0 && (ne[ii] = ze), o !== null && (ne[wd] = o), r.deferBlocks.set(T, ne);
                let Oe = x(e);
                Oe !== void 0 ? Oe.nodeType === Node.COMMENT_NODE && rM(Oe, T) : rM(Oe, T), h || OP(E, k, T, r), o = T, d[Ia] = T;
            }
            d[ri] = y[xt];
        }
        if (!h) {
            let y = x(c[$]);
            (c[m].type !== 1 || y === null || !y.hasAttribute(xn)) && Object.assign(d, CM(e[a], o, r));
        }
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[ni] ??= 1, p[ni]++;
    }
    else
        s = f, i.push(d);
} return i; }
function bP(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function _i(e, t, n, o) { let r = t.index - I; e[oi] ??= {}, e[oi][r] ??= Zv(t, n, o); }
function Xp(e, t) { let n = typeof t == "number" ? t : t.index - I; e[bo] ??= [], e[bo].includes(n) || e[bo].push(n); }
function CM(e, t = null, n) { let o = {}, r = e[m], i = tE(r, n), s = n.shouldReplayEvents ? dP(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = nE(e, a, n);
    if (u) {
        o[Ea] ??= {}, o[Ea][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Xp(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            _i(o, f, e, i);
        }
        continue;
    }
    if (da(c) && !Ro(c)) {
        if (K(e[a]) && c.tView && (o[ya] ??= {}, o[ya][l] = EM(c.tView)), Fo(c, e) && xP(c)) {
            Xp(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !hl(d) && !wo(d) && (Fo(d, e) ? Xp(o, d) : _i(o, d, e, i));
                    else
                        throw Hv(x(e[a]));
        }
        if (AP(o, c, e, i), K(e[a])) {
            let d = e[a][$];
            if (Array.isArray(d)) {
                let f = x(d);
                f.hasAttribute(xn) || Sc(f, d, t, n);
            }
            o[So] ??= {}, o[So][l] = SP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !km(c)) {
            let d = x(e[a][$]);
            d.hasAttribute(xn) || Sc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[ti] ??= {}, o[ti][l] = IM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !wo(d) && _i(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = x(e[a]);
            jd(n, d);
        }
        if (s && c.type & 2) {
            let d = x(e[a]);
            s.has(d) && Rd(d, s.get(d), t);
        }
    }
} return o; }
function AP(e, t, n, o) { hl(t) || (t.projectionNext && t.projectionNext !== t.next && !wo(t.projectionNext) && _i(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Fo(t.parent, n) && !Fo(t, n) && _i(e, t, n, o)); }
function RP(e) { let t = e[U]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Ge.ShadowDom || n?.encapsulation === Ge.ExperimentalIsolatedShadowDom; }
function Sc(e, t, n, o) { let r = t[w]; if (Lh(t) && !Ya() || RP(t))
    return r.setAttribute(e, xn, ""), null; {
    let i = CM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, ao, s.toString()), s;
} }
function rM(e, t) { e.textContent = `ngh=${t}`; }
function kP(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function xP(e) { let t = e; for (; t != null;) {
    if (Te(t))
        return !0;
    t = t.parent;
} return !1; }
function OP(e, t, n, o) { let r = _y(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Rd(s, r, n);
} }
function h1(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function g1(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var PP = "\u{1F170}\uFE0F", Rc = !1;
function m1(e) { if (!Rc)
    return; let { startLabel: t } = MM(e); performance.mark(t); }
function y1(e) { if (!Rc)
    return; let { startLabel: t, labelName: n, endLabel: o } = MM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function MM(e) { let t = `${PP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var iM = !1;
function v1() { if (!iM && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    iM = !0, console.warn("Performance API is not supported on this platform");
    return;
} Rc = !0; }
function E1() { Rc = !1; }
function I1(e) { }
function D1(e) { return se({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(Ie, `ng:///${e.type.name}/\u0275fac.js`, e); }
function T1(e) { $f(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function C1(e) { mI(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); $f(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function M1(e) { return se({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(Ie, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function N1(e) { return se({ usage: 1, kind: LP(e.target), type: e.type }).compileFactoryDeclaration(Ie, `ng:///${e.type.name}/\u0275fac.js`, e); }
function LP(e) { switch (e) {
    case $o.Directive: return "directive";
    case $o.Component: return "component";
    case $o.Injectable: return "injectable";
    case $o.Pipe: return "pipe";
    case $o.NgModule: return "NgModule";
} }
function w1(e) { return se({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(Ie, `ng:///${e.type.name}/\u0275prov.js`, e); }
function _1(e) { return se({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(Ie, `ng:///${e.type.name}/\u0275inj.js`, e); }
function S1(e) { return se({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(Ie, `ng:///${e.type.name}/\u0275mod.js`, e); }
function b1(e) { return se({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(Ie, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var eh = Symbol("NOT_SET"), NM = new Set, FP = _e(z({}, Oc), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: eh, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== eh && !ki(this))
        return this.signal; try {
        for (let r of this.cleanup ?? NM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = qo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Ri(this, n);
    } return (this.value === eh || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), lh = class extends jr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get($e), s), this.scheduler = r; for (let a of of) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(FP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Ai(l), l.value), l.signal[le] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? NM)
                    n();
            }
            finally {
                Lt(t);
            } }
};
function A1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return La; let n = t?.injector ?? v(ue), o = n.get(Pe), r = n.get(Pa), i = n.get(Ln, null, { optional: !0 }); r.impl ??= n.get(rf); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(Zn, null, { optional: !0 }), c = new lh(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function R1(e) { return new uh(Uf(e) ? e : we(e)); }
var uh = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = we(() => { if (this.state.status === "error")
        throw new Ni(this.state.error); return this.state.value; });
    status = we(() => this.state.status);
    error = we(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = we(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = we(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function k1(e, t) { let n = W(e), o = t.elementInjector || Gn(); return new Xt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function x1(e) { let t = W(e); if (!t)
    return null; let n = new Xt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function O1(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var P1 = new C("", { providedIn: "platform", factory: () => null }), L1 = new C("", { providedIn: "platform", factory: () => null }), F1 = new C("", { providedIn: "platform", factory: () => null });
export { bw as ANIMATION_MODULE_TYPE, vi as APP_BOOTSTRAP_LISTENER, bt as APP_ID, zf as APP_INITIALIZER, Qf as ApplicationInitStatus, d1 as ApplicationModule, We as ApplicationRef, Gm as Attribute, gC as COMPILER_OPTIONS, Aw as CSP_NONCE, n_ as CUSTOM_ELEMENTS_SCHEMA, ha as ChangeDetectionStrategy, IP as ChangeDetectorRef, Zx as Compiler, yd as CompilerFactory, $x as Component, Xa as ComponentFactory, gi as ComponentFactoryResolver, dE as ComponentRef, WF as ContentChild, qF as ContentChildren, Jx as DEFAULT_CURRENCY_CODE, Gt as DOCUMENT, kn as DebugElement, vd as DebugEventListener, Kr as DebugNode, oh as DefaultIterableDiffer, $e as DestroyRef, hC as Directive, je as ENVIRONMENT_INITIALIZER, ei as ElementRef, eM as EmbeddedViewRef, Se as EnvironmentInjector, Et as ErrorHandler, mt as EventEmitter, FF as HOST_TAG_NAME, Cm as Host, HC as HostAttributeToken, Wx as HostBinding, zx as HostListener, sl as INJECTOR, Em as Inject, ew as Injectable, C as InjectionToken, ue as Injector, Gx as Input, yM as IterableDiffers, vM as KeyValueDiffers, jp as LOCALE_ID, sv as MAX_ANIMATION_TIMEOUT, yC as MissingTranslationStrategy, ua as ModuleWithComponentFactories, o_ as NO_ERRORS_SCHEMA, Qx as NgModule, GE as NgModuleFactory, vo as NgModuleRef, G as NgZone, Im as Optional, qx as Output, Mi as OutputEmitterRef, Sw as PLATFORM_ID, Cd as PLATFORM_INITIALIZER, yr as PendingTasks, Ux as Pipe, pM as PlatformRef, Go as Query, $s as QueryList, P1 as REQUEST, F1 as REQUEST_CONTEXT, L1 as RESPONSE_INIT, Zb as Renderer2, Ur as RendererFactory2, zs as RendererStyleFlags2, fE as Sanitizer, J as SecurityContext, Dm as Self, Fs as SimpleChange, Tm as SkipSelf, Xx as TRANSLATIONS, eO as TRANSLATIONS_FORMAT, Hr as TemplateRef, kR as Testability, EI as TestabilityRegistry, _o as TransferState, Mm as Type, Vc as VERSION, Pi as Version, QF as ViewChild, zF as ViewChildren, nc as ViewContainerRef, Ge as ViewEncapsulation, nh as ViewRef, dv as afterEveryRender, sf as afterNextRender, A1 as afterRenderEffect, tO as asNativeElements, oN as assertInInjectionContext, mN as assertNotInReactiveContext, aP as assertPlatform, h1 as booleanAttribute, we as computed, $F as contentChild, UF as contentChildren, k1 as createComponent, Pf as createEnvironmentInjector, qE as createNgModule, qA as createNgModuleRef, iP as createPlatform, sP as createPlatformFactory, YF as destroyPlatform, ql as effect, e1 as enableProdMode, SR as enableProfiling, er as forwardRef, Jr as getDebugNode, s1 as getModuleFactory, a1 as getNgModuleById, Ac as getPlatform, kh as importProvidersFrom, v as inject, VF as input, NE as inputBinding, XF as isDevMode, Uf as isSignal, ir as isStandalone, Gf as isWritableSignal, Hp as linkedSignal, Ke as makeEnvironmentProviders, kw as makeStateKey, O1 as mergeApplicationConfig, GF as model, g1 as numberAttribute, jF as output, wE as outputBinding, u1 as platformCore, TI as provideAppInitializer, hN as provideBrowserGlobalErrorListeners, JF as provideCheckNoChangesConfig, Rh as provideEnvironmentInitializer, $_ as provideNgReflectAttributes, KF as providePlatformInitializer, i1 as provideStabilityDebugging, ZF as provideZoneChangeDetection, Yx as provideZonelessChangeDetection, x1 as reflectComponentType, P as resolveForwardRef, aO as resource, R1 as resourceFromSnapshots, Yi as runInInjectionContext, II as setTestabilityGetter, qt as signal, yA as twoWayBinding, nt as untracked, HF as viewChild, BF as viewChildren, iv as \u0275ANIMATIONS_DISABLED, ty as \u0275AcxChangeDetectionStrategy, ny as \u0275AcxViewEncapsulation, Pa as \u0275AfterRenderManager, t1 as \u0275CLIENT_RENDER_MODE_FLAG, q as \u0275CONTAINER_HEADER_OFFSET, Pe as \u0275ChangeDetectionScheduler, Xa as \u0275ComponentFactory, _R as \u0275Console, Di as \u0275DEFAULT_LOCALE_ID, pI as \u0275DEFER_BLOCK_CONFIG, TR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, At as \u0275DEHYDRATED_BLOCK_REGISTRY, Hf as \u0275DeferBlockBehavior, Z as \u0275DeferBlockState, nP as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, cy as \u0275EVENT_REPLAY_QUEUE, ps as \u0275EffectScheduler, WO as \u0275Framework, Cy as \u0275HydrationStatus, Rw as \u0275IMAGE_CONFIG, oy as \u0275IMAGE_CONFIG_DEFAULTS, ll as \u0275INJECTOR_SCOPE, LF as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Tt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, xw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, On as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Ad as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, si as \u0275JSACTION_BLOCK_ELEMENT_MAP, Od as \u0275JSACTION_EVENT_CONTRACT, Us as \u0275LContext, Do as \u0275LocaleDataIndex, It as \u0275NG_COMP_DEF, cn as \u0275NG_DIR_DEF, ln as \u0275NG_ELEMENT_ID, zo as \u0275NG_INJ_DEF, $i as \u0275NG_MOD_DEF, rr as \u0275NG_PIPE_DEF, Bn as \u0275NG_PROV_DEF, Rs as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, H as \u0275NO_CHANGE, Io as \u0275NgModuleFactory, Ko as \u0275NoopNgZone, PP as \u0275PERFORMANCE_MARK_PREFIX, XO as \u0275PROVIDED_NG_ZONE, vN as \u0275PROVIDED_ZONELESS, Dt as \u0275PendingTasksInternal, O as \u0275ProfilerEvent, an as \u0275R3Injector, Ls as \u0275ReflectionCapabilities, Xt as \u0275Render3ComponentFactory, ta as \u0275Render3ComponentRef, Eo as \u0275Render3NgModuleRef, mc as \u0275ResourceImpl, D as \u0275RuntimeError, le as \u0275SIGNAL, Ey as \u0275SSR_CONTENT_INTEGRITY_MARKER, yI as \u0275TESTABILITY, vI as \u0275TESTABILITY_GETTER, fI as \u0275TimerScheduler, Oa as \u0275TracingAction, Ln as \u0275TracingService, Jt as \u0275ViewRef, Hi as \u0275XSS_SECURITY_URL, Yn as \u0275ZONELESS_ENABLED, Gy as \u0275_sanitizeHtml, _a as \u0275_sanitizeUrl, wn as \u0275allLeavingAnimations, xo as \u0275allowSanitizationBypassAndThrow, p1 as \u0275annotateForHydration, I1 as \u0275assertType, l_ as \u0275bypassSanitizationTrustHtml, p_ as \u0275bypassSanitizationTrustResourceUrl, d_ as \u0275bypassSanitizationTrustScript, u_ as \u0275bypassSanitizationTrustStyle, f_ as \u0275bypassSanitizationTrustUrl, HA as \u0275clearResolutionOfComponentResourcesQueue, rC as \u0275compileComponent, Fp as \u0275compileDirective, nC as \u0275compileNgModule, oC as \u0275compileNgModuleDefs, KO as \u0275compileNgModuleFactory, pC as \u0275compilePipe, rn as \u0275convertToBitFlags, Qc as \u0275createInjector, cP as \u0275createOrReusePlatformInjector, c1 as \u0275defaultIterableDiffers, l1 as \u0275defaultKeyValueDiffers, mo as \u0275depsTracker, vE as \u0275devModeEqual, E1 as \u0275disableProfiling, v1 as \u0275enableProfiling, Gp as \u0275encapsulateResourceError, lp as \u0275findLocaleData, eC as \u0275flushModuleScopingQueueAsMuchAsPossible, Jo as \u0275formatRuntimeError, bx as \u0275generateStandaloneInDeclarationsError, wR as \u0275getAsyncClassMetadataFn, vA as \u0275getClosestComponentName, W as \u0275getComponentDef, Os as \u0275getDeferBlocks, Ew as \u0275getDirectives, ma as \u0275getDocument, Dw as \u0275getHostElement, or as \u0275getInjectableDef, Ne as \u0275getLContext, ak as \u0275getLocaleCurrencyCode, cD as \u0275getLocalePluralCase, iO as \u0275getOutputDestroyRef, Fy as \u0275getSanitizationBypassType, bR as \u0275getTransferState, i_ as \u0275getUnknownElementStrictMode, a_ as \u0275getUnknownPropertyStrictMode, be as \u0275global, _E as \u0275inferTagNameFromDefinition, DP as \u0275injectChangeDetectorRef, f1 as \u0275internalCreateApplication, eP as \u0275internalProvideZoneChangeDetection, CI as \u0275isBoundToModule, VA as \u0275isComponentDefPendingResolution, el as \u0275isEnvironmentProviders, FM as \u0275isInjectable, vn as \u0275isNgModule, Wf as \u0275isPromise, DI as \u0275isSubscribable, JS as \u0275isViewDirty, XS as \u0275markForRefresh, ht as \u0275noSideEffects, Pp as \u0275patchComponentDefWithScope, X as \u0275performanceMarkFeature, sc as \u0275promiseWithResolvers, gc as \u0275provideZonelessChangeDetectionInternal, AR as \u0275publishExternalGlobalUtil, Gw as \u0275readHydrationInfo, sk as \u0275registerLocaleData, Mt as \u0275renderDeferBlockState, kx as \u0275resetCompiledComponents, Ww as \u0275resetIncrementalHydrationEnabledWarnedForTests, _x as \u0275resetJitOptions, HE as \u0275resolveComponentResources, BA as \u0275restoreComponentResolutionQueue, GA as \u0275setAllowDuplicateNgModuleIdsForTest, SM as \u0275setAlternateWeakRefImpl, YT as \u0275setClassDebugInfo, $f as \u0275setClassMetadata, mI as \u0275setClassMetadataAsync, ot as \u0275setCurrentInjector, ww as \u0275setDocument, HM as \u0275setInjectorProfilerContext, fD as \u0275setLocaleId, r_ as \u0275setUnknownElementStrictMode, s_ as \u0275setUnknownPropertyStrictMode, m1 as \u0275startMeasuring, y1 as \u0275stopMeasuring, fr as \u0275store, Xo as \u0275stringify, Lp as \u0275transitiveScopesFor, ac as \u0275triggerResourceLoading, PM as \u0275truncateMiddle, ck as \u0275unregisterLocaleData, Rt as \u0275unwrapSafeValue, gN as \u0275unwrapWritableSignal, n1 as \u0275withDomHydration, lP as \u0275withEventReplay, o1 as \u0275withI18nSupport, r1 as \u0275withIncrementalHydration, XE as \u0275\u0275ControlFeature, MT as \u0275\u0275ExternalStylesFeature, $o as \u0275\u0275FactoryTarget, eI as \u0275\u0275HostDirectivesFeature, Ff as \u0275\u0275InheritDefinitionFeature, wm as \u0275\u0275NgOnChangesFeature, CT as \u0275\u0275ProvidersFeature, ov as \u0275\u0275advance, wr as \u0275\u0275animateEnter, _r as \u0275\u0275animateEnterListener, Sr as \u0275\u0275animateLeave, ra as \u0275\u0275animateLeaveListener, Kf as \u0275\u0275ariaProperty, IT as \u0275\u0275arrowFunction, lT as \u0275\u0275attachSourceLocations, Jf as \u0275\u0275attribute, VD as \u0275\u0275classMap, Tp as \u0275\u0275classProp, JI as \u0275\u0275componentInstance, eD as \u0275\u0275conditional, cc as \u0275\u0275conditionalBranchCreate, XI as \u0275\u0275conditionalCreate, yp as \u0275\u0275contentQuery, Ep as \u0275\u0275contentQuerySignal, TE as \u0275\u0275control, IE as \u0275\u0275controlCreate, Op as \u0275\u0275declareLet, bI as \u0275\u0275defer, gI as \u0275\u0275deferEnableTimerScheduling, xI as \u0275\u0275deferHydrateNever, qI as \u0275\u0275deferHydrateOnHover, LI as \u0275\u0275deferHydrateOnIdle, VI as \u0275\u0275deferHydrateOnImmediate, QI as \u0275\u0275deferHydrateOnInteraction, $I as \u0275\u0275deferHydrateOnTimer, KI as \u0275\u0275deferHydrateOnViewport, kI as \u0275\u0275deferHydrateWhen, UI as \u0275\u0275deferOnHover, OI as \u0275\u0275deferOnIdle, FI as \u0275\u0275deferOnImmediate, WI as \u0275\u0275deferOnInteraction, HI as \u0275\u0275deferOnTimer, ZI as \u0275\u0275deferOnViewport, GI as \u0275\u0275deferPrefetchOnHover, PI as \u0275\u0275deferPrefetchOnIdle, jI as \u0275\u0275deferPrefetchOnImmediate, zI as \u0275\u0275deferPrefetchOnInteraction, BI as \u0275\u0275deferPrefetchOnTimer, YI as \u0275\u0275deferPrefetchOnViewport, RI as \u0275\u0275deferPrefetchWhen, AI as \u0275\u0275deferWhen, zE as \u0275\u0275defineComponent, ZE as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, nr as \u0275\u0275defineInjector, Lf as \u0275\u0275defineNgModule, YE as \u0275\u0275definePipe, jo as \u0275\u0275directiveInject, Tl as \u0275\u0275disableBindings, tp as \u0275\u0275domElement, ip as \u0275\u0275domElementContainer, rp as \u0275\u0275domElementContainerEnd, pc as \u0275\u0275domElementContainerStart, dc as \u0275\u0275domElementEnd, uc as \u0275\u0275domElementStart, gp as \u0275\u0275domListener, ap as \u0275\u0275domProperty, Vf as \u0275\u0275domTemplate, ep as \u0275\u0275element, op as \u0275\u0275elementContainer, Ii as \u0275\u0275elementContainerEnd, fc as \u0275\u0275elementContainerStart, lc as \u0275\u0275elementEnd, Qr as \u0275\u0275elementStart, Dl as \u0275\u0275enableBindings, ZT as \u0275\u0275getComponentDepsFactory, aD as \u0275\u0275getCurrentView, $m as \u0275\u0275getInheritedFactory, KT as \u0275\u0275getReplaceMetadataURL, CD as \u0275\u0275i18n, ND as \u0275\u0275i18nApply, MD as \u0275\u0275i18nAttributes, dp as \u0275\u0275i18nEnd, fp as \u0275\u0275i18nExp, wD as \u0275\u0275i18nPostprocess, up as \u0275\u0275i18nStart, he as \u0275\u0275inject, fa as \u0275\u0275injectAttribute, uT as \u0275\u0275interpolate, dT as \u0275\u0275interpolate1, fT as \u0275\u0275interpolate2, pT as \u0275\u0275interpolate3, hT as \u0275\u0275interpolate4, gT as \u0275\u0275interpolate5, mT as \u0275\u0275interpolate6, yT as \u0275\u0275interpolate7, vT as \u0275\u0275interpolate8, ET as \u0275\u0275interpolateV, pE as \u0275\u0275invalidFactory, Wi as \u0275\u0275invalidFactoryDep, pp as \u0275\u0275listener, RD as \u0275\u0275loadQuery, Fl as \u0275\u0275namespaceHTML, Ll as \u0275\u0275namespaceMathML, Pl as \u0275\u0275namespaceSVG, _D as \u0275\u0275nextContext, T1 as \u0275\u0275ngDeclareClassMetadata, C1 as \u0275\u0275ngDeclareClassMetadataAsync, M1 as \u0275\u0275ngDeclareComponent, D1 as \u0275\u0275ngDeclareDirective, N1 as \u0275\u0275ngDeclareFactory, w1 as \u0275\u0275ngDeclareInjectable, _1 as \u0275\u0275ngDeclareInjector, S1 as \u0275\u0275ngDeclareNgModule, b1 as \u0275\u0275ngDeclarePipe, $T as \u0275\u0275pipe, UT as \u0275\u0275pipeBind1, GT as \u0275\u0275pipeBind2, qT as \u0275\u0275pipeBind3, WT as \u0275\u0275pipeBind4, zT as \u0275\u0275pipeBindV, bD as \u0275\u0275projection, SD as \u0275\u0275projectionDef, Xf as \u0275\u0275property, _T as \u0275\u0275pureFunction0, ST as \u0275\u0275pureFunction1, bT as \u0275\u0275pureFunction2, AT as \u0275\u0275pureFunction3, RT as \u0275\u0275pureFunction4, kT as \u0275\u0275pureFunction5, xT as \u0275\u0275pureFunction6, OT as \u0275\u0275pureFunction7, PT as \u0275\u0275pureFunction8, LT as \u0275\u0275pureFunctionV, kD as \u0275\u0275queryAdvance, AD as \u0275\u0275queryRefresh, cT as \u0275\u0275readContextLet, xD as \u0275\u0275reference, xf as \u0275\u0275registerNgModuleType, rD as \u0275\u0275repeater, oD as \u0275\u0275repeaterCreate, nD as \u0275\u0275repeaterTrackByIdentity, tD as \u0275\u0275repeaterTrackByIndex, JT as \u0275\u0275replaceMetadata, Nl as \u0275\u0275resetView, Qd as \u0275\u0275resolveBody, Xy as \u0275\u0275resolveDocument, Jy as \u0275\u0275resolveWindow, Ml as \u0275\u0275restoreView, Ud as \u0275\u0275sanitizeHtml, ba as \u0275\u0275sanitizeResourceUrl, Wd as \u0275\u0275sanitizeScript, Gd as \u0275\u0275sanitizeStyle, qd as \u0275\u0275sanitizeUrl, Ky as \u0275\u0275sanitizeUrlOrResourceUrl, NT as \u0275\u0275setComponentScope, wT as \u0275\u0275setNgModuleScope, aT as \u0275\u0275storeLet, jD as \u0275\u0275styleMap, Dp as \u0275\u0275styleProp, hp as \u0275\u0275syntheticHostListener, cp as \u0275\u0275syntheticHostProperty, jf as \u0275\u0275template, QT as \u0275\u0275templateRefExtractor, zD as \u0275\u0275text, Cp as \u0275\u0275textInterpolate, hc as \u0275\u0275textInterpolate1, Mp as \u0275\u0275textInterpolate2, Np as \u0275\u0275textInterpolate3, wp as \u0275\u0275textInterpolate4, _p as \u0275\u0275textInterpolate5, Sp as \u0275\u0275textInterpolate6, bp as \u0275\u0275textInterpolate7, Ap as \u0275\u0275textInterpolate8, Rp as \u0275\u0275textInterpolateV, Zy as \u0275\u0275trustConstantHtml, Yy as \u0275\u0275trustConstantResourceUrl, iT as \u0275\u0275twoWayBindingSet, xp as \u0275\u0275twoWayListener, kp as \u0275\u0275twoWayProperty, zd as \u0275\u0275validateAttribute, vp as \u0275\u0275viewQuery, Ip as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_effect-chunk2.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.17
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
