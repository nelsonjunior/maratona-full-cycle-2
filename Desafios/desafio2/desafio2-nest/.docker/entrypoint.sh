#!/bin/bash

npm config set cache /home/node/app/.npm-cache --global

cd /home/node/app/

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

# npm install
# npm run build
# npm install sqlite3 --save
npm run start:prod