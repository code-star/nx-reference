import { A as _, B as R, C as B, D as G, E as V, F as q, G as z, H, I as J, J as K, K as Q, L as X, a as s, b, c as v, d as p, e as E, f as m, g as k, h as D, i as N, j as P, k as j, l as g, m as w, n as y, o as T, p as F, q as O, r as h, s as S, t as x, u as I, v as L, w as W, x as $, y as M, z as U } from "@nf-internal/chunk-E5FJ2RS5";
import { a as l, b as u } from "@nf-internal/chunk-4CLCTAJ7";
var f = { header: (e, o) => { if (!c(e) || o?.ngSkipFormatting)
        return null; let r; try {
        r = e();
    }
    catch (i) {
        return ["span", `Signal(\u26A0\uFE0F Error)${i.message ? `: ${i.message}` : ""}`];
    } let n = "computation" in e[s] ? "Computed" : "Signal", a = r === null || !Array.isArray(r) && typeof r != "object"; return ["span", {}, ["span", {}, `${n}(`], c(r) ? f.header(r, o) : a && r !== void 0 && typeof r != "function" ? ["object", { object: r }] : Y(r), ["span", {}, ")"]]; }, hasBody: (e, o) => { if (!c(e))
        return !1; try {
        e();
    }
    catch {
        return !1;
    } return !o?.ngSkipFormatting; }, body: (e, o) => { let r = "var(--sys-color-primary)"; return ["div", { style: "background: #FFFFFF10; padding-left: 4px; padding-top: 2px; padding-bottom: 2px;" }, ["div", { style: `color: ${r}` }, "Signal value: "], ["div", { style: "padding-left: .5rem;" }, ["object", { object: e(), config: o }]], ["div", { style: `color: ${r}` }, "Signal function: "], ["div", { style: "padding-left: .5rem;" }, ["object", { object: e, config: u(l({}, o), { ngSkipFormatting: !0 }) }]]]; } };
function Y(e) { if (e === null)
    return "null"; if (Array.isArray(e))
    return `Array(${e.length})`; if (e instanceof Element)
    return `<${e.tagName.toLowerCase()}>`; if (e instanceof URL)
    return "URL"; switch (typeof e) {
    case "undefined": return "undefined";
    case "function": return "prototype" in e ? "class" : "() => {\u2026}";
    case "object": return e.constructor.name === "Object" ? "{\u2026}" : `${e.constructor.name} {}`;
    default: return ["object", { object: e, config: { ngSkipFormatting: !0 } }];
} }
function c(e) { return e[s] !== void 0; }
function ne() { globalThis.devtoolsFormatters ??= [], globalThis.devtoolsFormatters.some(e => e === f) || globalThis.devtoolsFormatters.push(f); }
function re(e, o, r) { let n = Object.create(Z); r && (n.consumerAllowSignalWrites = !0), n.fn = e, n.schedule = o; let a = t => { n.cleanupFn = t; }; function i(t) { return t.fn === null && t.schedule === null; } function C(t) { i(t) || (S(t), t.cleanupFn(), t.fn = null, t.schedule = null, t.cleanupFn = d); } let A = () => { if (n.fn === null)
    return; if (p())
    throw new Error(""); if (n.dirty = !1, n.version > 0 && !h(n))
    return; n.version++; let t = y(n); try {
    n.cleanupFn(), n.cleanupFn = d, n.fn(a);
}
finally {
    F(n, t);
} }; return n.ref = { notify: () => g(n), run: A, cleanup: () => n.cleanupFn(), destroy: () => C(n), [s]: n }, n.ref; }
var d = () => { }, Z = u(l({}, m), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !1, consumerMarkedDirty: e => { e.schedule !== null && e.schedule(e.ref); }, cleanupFn: d });
export { q as BASE_EFFECT_NODE, m as REACTIVE_NODE, s as SIGNAL, V as SIGNAL_NODE, F as consumerAfterComputation, y as consumerBeforeComputation, S as consumerDestroy, g as consumerMarkDirty, h as consumerPollProducersForChange, W as createComputed, H as createLinkedSignal, M as createSignal, re as createWatch, L as defaultEquals, O as finalizeConsumerAfterComputation, v as getActiveConsumer, ne as installDevToolsSignalFormatter, p as isInNotificationPhase, E as isReactive, J as linkedSignalSetFn, K as linkedSignalUpdateFn, k as producerAccessed, D as producerIncrementEpoch, w as producerMarkClean, P as producerNotifyConsumers, N as producerUpdateValueVersion, j as producerUpdatesAllowed, T as resetConsumerBeforeComputation, z as runEffect, x as runPostProducerCreatedFn, G as runPostSignalSetFn, b as setActiveConsumer, X as setAlternateWeakRefImpl, I as setPostProducerCreatedFn, U as setPostSignalSetFn, $ as setThrowInvalidWriteToSignalError, _ as signalGetFn, R as signalSetFn, B as signalUpdateFn, Q as untracked };
/*! Bundled license information:

@angular/core/fesm2022/primitives-signals.mjs:
  (**
   * @license Angular v21.2.17
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
