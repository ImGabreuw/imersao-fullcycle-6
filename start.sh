#!/bin/bash

docker-compose -f kafka/docker-compose.yaml up -d
docker-compose -f nextjs/docker-compose.yaml up -d
docker-compose -f nestjs/docker-compose.yaml up -d
docker-compose -f golang/docker-compose.yaml up -d