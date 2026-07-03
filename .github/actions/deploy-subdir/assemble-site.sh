#!/usr/bin/env bash
set -euo pipefail

if [ ! -d "$SOURCE_DIR" ]; then
  echo "::error::source-dir '$SOURCE_DIR' does not exist" >&2
  exit 1
fi

REPO_URL="https://x-access-token:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

rm -rf _site _storage
mkdir -p _site

# Pull the current full site from the storage branch (if it exists).
if git ls-remote --exit-code --heads "$REPO_URL" "$STORAGE_BRANCH" >/dev/null 2>&1; then
  git clone --quiet --depth 1 --branch "$STORAGE_BRANCH" "$REPO_URL" _storage
  ( cd _storage && tar -cf - --exclude=.git . ) | ( cd _site && tar -xf - )
  rm -rf _storage
fi

# Overlay the freshly built app into its slot.
if [ -z "$TARGET_SUBDIR" ] || [ "$TARGET_SUBDIR" = "." ]; then
  # Site root (shell): replace root entries but keep sibling micro apps.
  keep=".git .nojekyll $PRESERVE"
  shopt -s dotglob nullglob
  for entry in _site/*; do
    name="$(basename "$entry")"
    case " $keep " in
      *" $name "*) continue ;;
    esac
    rm -rf "$entry"
  done
  shopt -u dotglob nullglob
  cp -R "$SOURCE_DIR"/. _site/
else
  rm -rf "_site/${TARGET_SUBDIR}"
  mkdir -p "_site/${TARGET_SUBDIR}"
  cp -R "$SOURCE_DIR"/. "_site/${TARGET_SUBDIR}/"
fi

# SPA fallback + disable Jekyll processing.
touch _site/.nojekyll
if [ -f _site/index.html ]; then
  cp _site/index.html _site/404.html
fi

echo "Assembled site tree:"
find _site -maxdepth 2 -mindepth 1 | sort
