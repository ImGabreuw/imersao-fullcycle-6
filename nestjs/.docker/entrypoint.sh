#!/bin/sh

if [ ! -f ".env"]; then
  cp .env.example .env
fi

npm i

npm run start:dev