---
name: git
description: 'Git and release hygiene conventions. Use when creating commits, branches, or release-related changes.'
applyTo: '**/*'
---
Use these Git and release hygiene conventions in this project.

## Branch naming

1. Use `type/short-description` branch names.
1. Keep branch names lowercase and use hyphens to separate words.
1. Use one of these allowed branch types when branch validation is enabled:
   `feature`, `bugfix`, `hotfix`, `release`, `chore`, `feat`, `fix`, `docs`,
   `refactor`, `perf`, `test`, `ci`, `build`, `style`, `opt`, `patch`, `dependabot`.

## Commit messages

1. Use Conventional Commits: `type(optional-scope)!: short summary`.
1. Keep commit subjects clear, imperative, and within repository limits.
1. Keep the commit subject at 100 characters or fewer when commit policy CI enforces this limit.
1. Include `!` or a `BREAKING CHANGE:` footer when behavior changes are breaking.
1. Keep commit type and scope aligned with repository policy.

## SemVer alignment

1. Treat commit messages as release inputs when the repository uses semantic version automation.
1. Ensure major, minor, and patch intent is reflected in the commit type and breaking markers.
1. Do not merge release-impacting changes with ambiguous commit messages.

## Security and credentials

1. Never ask users to paste passphrases, tokens, API keys, or private keys into chat.
1. Never echo or log secrets from terminal prompts, command output, or environment variables.
1. Never place credentials in commit messages, source files, workflow files, or documentation.
1. Prefer existing secure authentication flows (for example SSH agent, OS keychain, `gh auth`).

## Safe Git operations

1. Avoid force pushes and destructive history rewrites unless explicitly requested and approved.
1. Keep commits focused and reviewable.
1. Prefer local verification before pushing release-impacting changes.

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"git","artifact_type":"instruction","artifact_version":"20260421001","generator":"vstack","vstack_version":"3.5.1"} -->
