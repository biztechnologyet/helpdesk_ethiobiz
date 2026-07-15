#!/bin/bash
# =============================================================================
# deploy_desk_assets.sh
# BISMALLAH — Ensures the Helpdesk Desk frontend assets are available to Nginx.
#
# Problem: sites/assets/helpdesk is normally a symlink to
#   ../../apps/helpdesk/helpdesk/public/  which breaks across Docker volumes.
#
# Fix: replace the symlink with a real directory and copy the built assets.
# =============================================================================
set -euo pipefail

SITES_DIR="/home/frappe/frappe-bench/sites"
APP_PUBLIC_DIR="/home/frappe/frappe-bench/apps/helpdesk/helpdesk/public"
ASSETS_LINK="$SITES_DIR/assets/helpdesk"
DESK_BUILD_DIR="$APP_PUBLIC_DIR/desk"
DESK_TARGET="$ASSETS_LINK/desk"

echo "[deploy_desk_assets] Checking desk build output..."

# Step 1: Build the desk frontend if needed
JS_COUNT_SRC=$(find "$DESK_BUILD_DIR/assets" -name 'index-*.js' 2>/dev/null | wc -l)
if [ "$JS_COUNT_SRC" -eq 0 ]; then
    echo "[deploy_desk_assets] Built desk assets not found. Running yarn build..."
    cd /home/frappe/frappe-bench/apps/helpdesk/desk
    yarn build 2>&1
    echo "[deploy_desk_assets] yarn build complete."
else
    echo "[deploy_desk_assets] Built desk assets found at $DESK_BUILD_DIR (${JS_COUNT_SRC} JS bundles)."
fi

# Step 2: Remove symlink (if any) and replace with real directory
if [ -L "$ASSETS_LINK" ]; then
    echo "[deploy_desk_assets] Removing symlink at $ASSETS_LINK"
    rm "$ASSETS_LINK"
fi

if [ ! -d "$ASSETS_LINK" ]; then
    echo "[deploy_desk_assets] Creating directory $ASSETS_LINK"
    mkdir -p "$ASSETS_LINK"
fi

# Step 3: Copy built assets
echo "[deploy_desk_assets] Copying desk assets to $DESK_TARGET"
rm -rf "$DESK_TARGET"
cp -r "$DESK_BUILD_DIR" "$DESK_TARGET"

# Step 4: Verify
JS_COUNT=$(find "$DESK_TARGET/assets" -name '*.js' 2>/dev/null | wc -l)
CSS_COUNT=$(find "$DESK_TARGET/assets" -name '*.css' 2>/dev/null | wc -l)
echo "[deploy_desk_assets] Deployed $JS_COUNT JS files, $CSS_COUNT CSS files"
echo "[deploy_desk_assets] ALHAMDULILLAH. Desk assets deployed successfully."
