#!/bin/bash

docker run \
  --rm \
  --mount type=bind,source="$(pwd)",target=/home/mount \
  -e TEST_ENV="container" \
  -e STOCKSERVICE_HOST="192.168.5.143" \
  -e STOCKSERVICE_PORT="31102" \
  qiaoogan/nodejestenv:0.0.1 \
  bash /home/mount/apiTest/tests-entry.sh