#!/bin/bash

docker run \
  --rm \
  --mount type=bind,source="$(pwd)",target=/home/mount \
  -e TEST_ENV="container" \
  -e STOCKSERVICE_HOST="http://host.docker.internal" \
  -e STOCKSERVICE_PORT=8901 \
  -e BACKENDSEVER_PORT=3101 \
  nodejestenv:0.0.1 \
  bash /home/mount/apiTest/tests-entry.sh