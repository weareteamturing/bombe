#!/usr/bin/env bash

# Declare a string array with type
declare -a ICON_DIR_PATH_LIST=("../icons/svg")
ICON_SOURCE_FILE_PATH="./src/component/Icon/Icons.tsx"


for ICON_DIR_PATH in "${ICON_DIR_PATH_LIST[@]}"; do
  for dir in $ICON_DIR_PATH/*/ ; do
    if [ -d "$dir" ]; then
      find "$dir" -type f -name "*.svg" -exec mv {} $ICON_DIR_PATH \;
      rm -rf "$dir"
    fi
  done

  # Remove non-svg files and directories first
  for f in "$ICON_DIR_PATH"/*
  do
    if [[ -d $f ]] ; then
      rm -rf $f
    elif [[ "${f##*.}" != "svg" ]] ; then
      rm $f
    fi
  done

  # Process svg files in sorted order (LC_ALL=C ensures consistent ordering across all environments)
  for f in $(ls "$ICON_DIR_PATH"/*.svg 2>/dev/null | LC_ALL=C sort)
  do
    assetNameWithExtension="${f##*/}" # filename + extension without path (after last '/' in path)
    assetName="${assetNameWithExtension%.*}" # filename without extension

    echo "export { default as $assetName } from '@teamturing/icons/svg/${assetName}.svg';" >> temp_image
  done
done

cp temp_image $ICON_SOURCE_FILE_PATH
rm temp_image
