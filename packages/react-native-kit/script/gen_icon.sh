#!/usr/bin/env bash

# Declare a string array with type
declare -a ICON_DIR_PATH_LIST=("../icons/svg" "./src/assets/icons")
ICON_SOURCE_FILE_PATH="./src/component/Icon/Icons.tsx"


for ICON_DIR_PATH in "${ICON_DIR_PATH_LIST[@]}"; do
  for dir in $ICON_DIR_PATH/*/ ; do
    if [ -d "$dir" ]; then
      find "$dir" -type f -name "*.svg" -exec mv {} $ICON_DIR_PATH \;
      rm -rf "$dir"
    fi
  done

  for f in "$ICON_DIR_PATH"/*
  do
    # remove directory
    if [[ -d $f ]] ; then
      rm -rf $f
    fi

    assetExtension="${f##*.}" # extension
    assetNameWithExtension="${f##*/}" # filename + extension without path (after last '/' in path)
    assetName="${assetNameWithExtension%.*}" # filename without extension

    # remove if not *svg
    if [[ $assetExtension != "svg" ]] ; then
      rm $f
    fi

    if command -v grealpath >/dev/null 2>&1; then
        path_cmd="grealpath"
    else
        path_cmd="realpath"
    fi
    relativePath=$($path_cmd --relative-to="$(dirname $ICON_SOURCE_FILE_PATH)" $f)
    echo "export { default as $assetName } from '$relativePath';" >> temp_image
  done
done

cp temp_image $ICON_SOURCE_FILE_PATH
rm temp_image
