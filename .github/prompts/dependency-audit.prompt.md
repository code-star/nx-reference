---
description: 'Audit dependencies for vulnerabilities, outdated versions, licence risks, and supply chain hygiene.'
name: dependency-audit
argument-hint: '[dependency manifest, lockfile, or package scope]'
agent: tester
model: GPT-5.3-Codex (copilot)
tools:
  - read
  - search
---

Audit the provided dependency manifest or lockfile for vulnerabilities, outdated packages, licence risks, and supply chain hygiene.

Prefer evidence from the manifest itself; flag items that require external verification.

Output exactly in this format:

## Vulnerabilities

List dependencies with known CVEs or security advisories.

For each item:

- package name and version
- CVE or advisory reference if known
- severity: critical | high | medium | low
- recommended action (upgrade, replace, or accept with rationale)

## Outdated Packages

List dependencies that are significantly behind their latest stable release and carry meaningful risk.
Do not list minor version differences without impact.

For each item:

- package name: current version → latest stable
- risk of staying on current version in one sentence

## Licence Risks

List licences that may conflict with the project's distribution model.

For each item:

- package name
- licence identifier
- conflict or concern in one sentence

## Pinning and Version Policy

- all direct dependencies pinned: yes | no | partial
- unpinned transitive dependencies with risk: list or none
- version ranges that allow breaking upgrades: list or none

## Supply Chain Hygiene

List packages with unusual provenance concerns: abandoned maintainers, single-maintainer with no backup, recent ownership transfers, or typosquatting risk.

## Recommended Actions

Ordered list of actions by priority (critical first).

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"dependency-audit","artifact_type":"prompt","artifact_version":"20260502009","generator":"vstack","vstack_version":"3.5.1"} -->
