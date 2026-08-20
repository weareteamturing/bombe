#!/usr/bin/env bash

# `@teamturing/icons`의 svg 목록을 읽어 Icons.tsx를 생성한다.
#
# 이 스크립트는 `../icons/svg`를 절대 변형하지 않는다. 예전에는 하위 폴더를 발견하면 그 안의
# svg를 전부 `svg/` 바로 아래로 옮기고 폴더를 지웠는데, 그러면 `svg/gpai/`처럼 의도적으로 나눠 둔
# 브랜드별 폴더가 통째로 사라진다. `prepare`에도 걸려 있어서 평범한 `yarn install`만으로도
# 그렇게 된다. 하위 폴더는 이제 정상적인 구조이므로 건드리지 않고 지나간다.
#
# RN은 당분간 루트의 자사 아이콘만 쓴다. gpai 아이콘이 필요해지면 여기서 별도 목록을 만든다
# (같은 파일명이 양쪽에 생길 수 있어 한 파일에 합치면 export 이름이 충돌한다).

# Declare a string array with type
declare -a ICON_DIR_PATH_LIST=("../icons/svg")
ICON_SOURCE_FILE_PATH="./src/component/Icon/Icons.tsx"

# 아래 루프가 `>>`로 덧붙이므로, 이전 실행이 중간에 죽어 남은 파일이 있으면 목록이 두 배가 된다
: > temp_image

for ICON_DIR_PATH in "${ICON_DIR_PATH_LIST[@]}"; do
  # Process svg files in sorted order (LC_ALL=C ensures consistent ordering across all environments)
  # `*.svg` 글롭은 디렉토리를 잡지 않으므로 하위 폴더는 자연히 제외된다
  for f in $(ls "$ICON_DIR_PATH"/*.svg 2>/dev/null | LC_ALL=C sort)
  do
    assetNameWithExtension="${f##*/}" # filename + extension without path (after last '/' in path)
    assetName="${assetNameWithExtension%.*}" # filename without extension

    echo "export { default as $assetName } from '@teamturing/icons/svg/${assetName}.svg';" >> temp_image
  done
done

cp temp_image $ICON_SOURCE_FILE_PATH
rm temp_image
