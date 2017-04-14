#!/usr/bin/env bash

while [ ! -f ./dist/server/server.js ]
do
    sleep 2
done
node ./dist/server/server.js