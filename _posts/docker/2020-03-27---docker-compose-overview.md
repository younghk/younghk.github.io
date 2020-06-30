---
draft: true
title: Docker Compose Overview
datetime: 2020-03-27 16:48:51
layout: post
category: Docker
toc: true
---

## Docker Compose

Docker 를 이용한 개발 환경 구성은 많은 장점을 가지고 오나, 개발 서버를 실행할 때마다 긴 도커 명령어의 옵션들을 적기 귀찮다는 문제가 있다.  
그리고 헷갈리기도 하며 까먹고 안 적는 경우도 생기게 된다. 결국 이는 문서화를 해서 해소할 수 있는 부분인데 이러한 불편함을 해소할 수 있는 방법으로 Docker Compose 가 나타났다.  

- 추가적으로, 서로 다른 컨테이너들의 실행 순서 역시 중요한 이슈 중 하나였다.  

## docker-compose.yml

Docker Compose 를 이용하여 빌드 수행  
이미 있는 이미지를 활용할 경우 skipping

```bash
docker-compose build
```

Docker Compose 를 이용하여 컨테이너 생성 및 실행

```bash
docker-compose up \
                -d # Background 에서 실행
```

```bash
docker-compose down
```