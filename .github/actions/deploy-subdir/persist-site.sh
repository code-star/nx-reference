#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://x-access-token:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
SLOT="${TARGET_SUBDIR:-/ (shell)}"

cd _site
rm -rf .git
git init -q
git add -A
git -c user.name="github-actions[bot]" \
    -c user.email="41898282+github-actions[bot]@users.noreply.github.com" \
    commit -q -m "deploy: update ${SLOT} (${GITHUB_SHA})" || {
      echo "Nothing to persist."; exit 0;
    }
git branch -M "$STORAGE_BRANCH"
git push -f "$REPO_URL" "$STORAGE_BRANCH"
