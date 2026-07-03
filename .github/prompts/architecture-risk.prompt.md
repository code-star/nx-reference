---
description: 'Identify architectural risks, tradeoffs, and mitigation priorities for a proposed design.'
name: architecture-risk
argument-hint: '[design doc, ADR, or architecture scope]'
agent: architect
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---

Evaluate the provided architecture for delivery and runtime risk.

Prioritize issues that could cause outages, data loss, severe operability pain, or major rework.
Do not focus on stylistic preferences.

Output exactly in this format:

## High-Severity Risks

List risks that can materially fail production or block safe delivery.

For each risk:

- impacted boundary (service, data, contract, deployment, observability, security)
- why it is risky in one sentence
- mitigation with smallest viable change
- owner role

## Medium Risks

List important but non-blocking risks.

## Tradeoff Notes

List major tradeoffs and what is being optimized.

## Missing Decisions

List decisions that should become ADRs before implementation.

## Recommended Sequence

Provide an ordered mitigation sequence (step 1..N).

## Security Considerations

List security-specific risks not covered above: auth boundaries, sensitive data exposure, trust model assumptions, supply chain concerns.

## Go/No-Go

- go | conditional-go | no-go
- one-sentence rationale

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"architecture-risk","artifact_type":"prompt","artifact_version":"20260502007","generator":"vstack","vstack_version":"3.5.1"} -->
