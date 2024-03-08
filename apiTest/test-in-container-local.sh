#!/bin/bash

docker container run \
  --rm \
  --mount type=bind,source="$(pwd)",target=/home/mount \
  -e TEST_ENV="container" \
  -e STOCKSERVICE_HOST="http://host.docker.internal" \
  -e STOCKSERVICE_PORT=8901
  -e BACKENDSEVER_PORT=3101
  qiaoogan/nodejestenv:0.0.1 \
  bash /home/mount/tests-entry.sh