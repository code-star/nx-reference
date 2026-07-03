---
name: markdown
description: 'Markdown authoring conventions for documentation, README files, ADRs, and other hand-authored prose. Use when writing or reviewing any Markdown file.'
applyTo: '**/*.md'
---

Use these Markdown conventions in this project.

## Structure and headings

1. Keep heading levels sequential — do not skip levels (e.g. from `##` to `####`).
1. Prefer flat heading structures; rarely go deeper than `####`.
1. Keep headings short and descriptive.

## Prose and tone

1. Write in clear, direct language — prefer active voice over passive voice.
1. Keep sentences short; split complex ideas across multiple sentences rather than commas and semicolons.
1. Be consistent with terminology throughout the file; introduce a term once and reuse it.
1. Avoid filler phrases such as "please note", "it is important to", and "simply".

## Lists and tables

1. Use numbered lists for ordered steps; use unordered lists for non-ordered items.
1. Keep list items parallel in grammar and structure.
1. Prefer a table over nested unordered lists when presenting structured comparisons.
1. Keep table columns to what is necessary; remove columns with no meaningful content.

## Code blocks and inline code

1. Specify a language identifier on fenced code blocks where a language can be determined.
1. Use inline code for file names, paths, commands, identifiers, and literal values.
1. Do not put prose in a code block; reserve code blocks for commands, source code, and literal output.

## Links and references

1. Use descriptive link text — avoid bare URLs and text like "click here" or "this link".
1. Prefer relative links for documents within the same repository.
1. Verify that section anchors match actual heading text before committing.

## Diagrams

1. Use Mermaid for process, flow, interaction, lifecycle, and decision diagrams when the target environment renders it (GitHub, VS Code, compatible docs tools).
1. Fall back to ASCII or plain-text descriptions when Mermaid rendering cannot be guaranteed (e.g. PyPI, email, plain-text viewers).
1. Use ASCII or text trees for directory layouts and file hierarchies regardless of environment.
1. Do not embed a diagram where a simple sentence or table communicates the same information.

## Maintenance

1. Update documentation in the same change as the behavior or interface it describes.
1. Remove outdated content rather than leaving it with a "TODO: update" comment.
1. Keep examples accurate and runnable — a broken example is worse than no example.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"markdown","artifact_type":"instruction","artifact_version":"20260502002","generator":"vstack","vstack_version":"3.5.1"} -->
