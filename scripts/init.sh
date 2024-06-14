#!/bin/bash

# Set profile to "default" if no argument is provided
PROFILE_NAME="${1:-default}"
SOURCE_DIR="./profiles/$PROFILE_NAME"
DEST_DIR="."

# Check if the directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Profile directory '$SOURCE_DIR' does not exist."
    exit 1
fi

# Copy contents of the profile directory to the new-setup directory
cp -r "$SOURCE_DIR"/app "$DEST_DIR/app" &&
    cp -r "$SOURCE_DIR"/public "$DEST_DIR" &&
    cp -r "$SOURCE_DIR"/styles "$DEST_DIR" &&
    cp -r "$SOURCE_DIR"/config.json "$DEST_DIR/config.json" &&
    cp -r "$SOURCE_DIR"/tailwind.config.js "$DEST_DIR/tailwind.config.js" &&
    echo "Profile '$PROFILE_NAME' has been successfully initialized." ||
    echo "Error: Failed to initialize profile '$PROFILE_NAME'."
