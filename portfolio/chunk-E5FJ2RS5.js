import { a as d, b as p } from "@nf-internal/chunk-4CLCTAJ7";
var i = null, g = !1, A = 1, h = null, S = Symbol("SIGNAL");
function f(e) { let r = i; return i = e, r; }
function J() { return i; }
function Q() { return g; }
function X(e) { return e[S] !== void 0; }
var E = { version: 0, lastCleanEpoch: 0, dirty: !1, producers: void 0, producersTail: void 0, consumers: void 0, consumersTail: void 0, recomputing: !1, consumerAllowSignalWrites: !1, consumerIsAlwaysLive: !1, kind: "unknown", producerMustRecompute: () => !1, producerRecomputeValue: () => { }, consumerMarkedDirty: () => { }, consumerOnSignalRead: () => { } };
function w(e) { if (g)
    throw new Error(""); if (i === null)
    return; i.consumerOnSignalRead(e); let r = i.producersTail; if (r !== void 0 && r.producer === e)
    return; let n, u = i.recomputing; if (u && (n = r !== void 0 ? r.nextProducer : i.producers, n !== void 0 && n.producer === e)) {
    i.producersTail = n, n.lastReadVersion = e.version;
    return;
} let t = e.consumersTail; if (t !== void 0 && t.consumer === i && (!u || W(t, i)))
    return; let o = v(i), c = { producer: e, consumer: i, nextProducer: n, prevConsumer: t, lastReadVersion: e.version, nextConsumer: void 0 }; i.producersTail = c, r !== void 0 ? r.nextProducer = c : i.producers = c, o && I(e, c); }
function U() { A++; }
function m(e) { if (!(v(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === A)) {
    if (!e.producerMustRecompute(e) && !L(e)) {
        C(e);
        return;
    }
    e.producerRecomputeValue(e), C(e);
} }
function V(e) { if (e.consumers === void 0)
    return; let r = g; g = !0; try {
    for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
        let u = n.consumer;
        u.dirty || G(u);
    }
}
finally {
    g = r;
} }
function k() { return i?.consumerAllowSignalWrites !== !1; }
function G(e) { e.dirty = !0, V(e), e.consumerMarkedDirty?.(e); }
function C(e) { e.dirty = !1, e.lastCleanEpoch = A; }
function T(e) { return e && q(e), f(e); }
function q(e) { e.producersTail = void 0, e.recomputing = !0; }
function D(e, r) { f(r), e && _(e); }
function _(e) { e.recomputing = !1; let r = e.producersTail, n = r !== void 0 ? r.nextProducer : e.producers; if (n !== void 0) {
    if (v(e))
        do
            n = M(n);
        while (n !== void 0);
    r !== void 0 ? r.nextProducer = void 0 : e.producers = void 0;
} }
function L(e) { for (let r = e.producers; r !== void 0; r = r.nextProducer) {
    let n = r.producer, u = r.lastReadVersion;
    if (u !== n.version || (m(n), u !== n.version))
        return !0;
} return !1; }
function Y(e) { if (v(e)) {
    let r = e.producers;
    for (; r !== void 0;)
        r = M(r);
} e.producers = void 0, e.producersTail = void 0, e.consumers = void 0, e.consumersTail = void 0; }
function I(e, r) { let n = e.consumersTail, u = v(e); if (n !== void 0 ? (r.nextConsumer = n.nextConsumer, n.nextConsumer = r) : (r.nextConsumer = void 0, e.consumers = r), r.prevConsumer = n, e.consumersTail = r, !u)
    for (let t = e.producers; t !== void 0; t = t.nextProducer)
        I(t.producer, t); }
function M(e) { let r = e.producer, n = e.nextProducer, u = e.nextConsumer, t = e.prevConsumer; if (e.nextConsumer = void 0, e.prevConsumer = void 0, u !== void 0 ? u.prevConsumer = t : r.consumersTail = t, t !== void 0)
    t.nextConsumer = u;
else if (r.consumers = u, !v(r)) {
    let o = r.producers;
    for (; o !== void 0;)
        o = M(o);
} return n; }
function v(e) { return e.consumerIsAlwaysLive || e.consumers !== void 0; }
function P(e) { h?.(e); }
function Z(e) { let r = h; return h = e, r; }
function W(e, r) { let n = r.producersTail; if (n !== void 0) {
    let u = r.producers;
    do {
        if (u === e)
            return !0;
        if (u === n)
            break;
        u = u.nextProducer;
    } while (u !== void 0);
} return !1; }
function R(e, r) { return Object.is(e, r); }
function ee(e, r) { let n = Object.create($); n.computation = e, r !== void 0 && (n.equal = r); let u = () => { if (m(n), w(n), n.value === s)
    throw n.error; return n.value; }; return u[S] = n, P(n), u; }
var l = Symbol("UNSET"), a = Symbol("COMPUTING"), s = Symbol("ERRORED"), $ = p(d({}, E), { value: l, dirty: !0, error: null, equal: R, kind: "computed", producerMustRecompute(e) { return e.value === l || e.value === a; }, producerRecomputeValue(e) { if (e.value === a)
        throw new Error(""); let r = e.value; e.value = a; let n = T(e), u, t = !1; try {
        u = e.computation(), f(null), t = r !== l && r !== s && u !== s && e.equal(r, u);
    }
    catch (o) {
        u = s, e.error = o;
    }
    finally {
        D(e, n);
    } if (t) {
        e.value = r;
        return;
    } e.value = u, e.version++; } });
function j() { throw new Error; }
var O = j;
function F(e) { O(e); }
function re(e) { O = e; }
var y = null;
function ne(e, r) { let n = Object.create(z); n.value = e, r !== void 0 && (n.equal = r); let u = () => B(n); return u[S] = n, P(n), [u, c => N(n, c), c => x(n, c)]; }
function ue(e) { let r = y; return y = e, r; }
function B(e) { return w(e), e.value; }
function N(e, r) { k() || F(e), e.equal(e.value, r) || (e.value = r, K(e)); }
function x(e, r) { k() || F(e), N(e, r(e.value)); }
function te(e) { y?.(e); }
var z = p(d({}, E), { equal: R, value: void 0, kind: "signal" });
function K(e) { e.version++, U(), V(e), y?.(e); }
var oe = p(d({}, E), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, kind: "effect" });
function ie(e) { if (e.dirty = !1, e.version > 0 && !L(e))
    return; e.version++; let r = T(e); try {
    e.cleanup(), e.fn();
}
finally {
    D(e, r);
} }
function ae(e, r, n) { let u = Object.create(H); u.source = e, u.computation = r, n != null && (u.equal = n); let o = () => { if (m(u), w(u), u.value === s)
    throw u.error; return u.value; }; return o[S] = u, P(u), o; }
function fe(e, r) { m(e), N(e, r), C(e); }
function de(e, r) { if (m(e), e.value === s)
    throw e.error; x(e, r), C(e); }
var H = p(d({}, E), { value: l, dirty: !0, error: null, equal: R, kind: "linkedSignal", producerMustRecompute(e) { return e.value === l || e.value === a; }, producerRecomputeValue(e) { if (e.value === a)
        throw new Error(""); let r = e.value; e.value = a; let n = T(e), u, t = !1; try {
        let o = e.source(), c = r !== l && r !== s, b = c ? { source: e.sourceValue, value: r } : void 0;
        u = e.computation(o, b), e.sourceValue = o, f(null), t = c && u !== s && e.equal(r, u);
    }
    catch (o) {
        u = s, e.error = o;
    }
    finally {
        D(e, n);
    } if (t) {
        e.value = r;
        return;
    } e.value = u, e.version++; } });
function pe(e) { let r = f(null); try {
    return e();
}
finally {
    f(r);
} }
function ge(e) { }
export { S as a, f as b, J as c, Q as d, X as e, E as f, w as g, U as h, m as i, V as j, k, G as l, C as m, T as n, q as o, D as p, _ as q, L as r, Y as s, P as t, Z as u, R as v, ee as w, re as x, ne as y, ue as z, B as A, N as B, x as C, te as D, z as E, oe as F, ie as G, ae as H, fe as I, de as J, pe as K, ge as L };
/*! Bundled license information:

@angular/core/fesm2022/_effect-chunk.mjs:
@angular/core/fesm2022/_untracked-chunk.mjs:
@angular/core/fesm2022/_weak_ref-chunk.mjs:
  (**
   * @license Angular v21.2.17
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
