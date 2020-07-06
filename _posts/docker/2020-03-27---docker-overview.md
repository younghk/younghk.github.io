---
draft: false
title: Docker Overview
datetime: 2020-03-27 10:21:07
category: Docker
layout: post
description: "Docker 가 무엇인지 간단하게 정리하고, 사용법 위주로 정리"
tags:
  - Docker
  - Container
toc: true
---

## Docker 란

> [What is a Container?](https://www.docker.com/resources/what-container)

![Docker](/assets/images/2020-03-27---docker-overview/image1.png)

{:.image-caption}
*\<image of docker<small>(from Official Site)</small>\>*

도커(Docker)는 컨테이너(container)를 이용해 가상화를 하는 것이다.(가상화 플랫폼)  
OS 가상화는 많이 들어보았을 텐데, 이와 차이를 보이는 점은 바로 소프트웨어적으로 가상화를 진행한다는 것이다.  

Docker의 특징으로는 완벽하게 세팅된 환경을 이미지화할 수 있고, 이 이미지는 속도도 빠를 뿐 아니라 Docker 위에서 완벽하게 돌아가는 것을 보장한다.  

Docker 에 대한 자세한 설명은 따로 추후에 정리해보자!

## 명령어

Docker image 빌드하기  

```bash
docker build --tag [태그 이름] [Dockerfile 위치]
```

생성된 Docker image 를 확인

```bash
docker images
```

생성된 이미지로 컨테이너 만들기  


```bash
docker create --name [컨테이너 이름] -p [외부 포트:컨테이너 내부포트] [이미지명:버전태그]
```

생성된 컨테이너(container) 확인하기

```bash
docker ps # 현재 실행 중(STATUS:Up)인 컨테이너의 목록을 보여준다.
docker ps -a # 실행하지 않는 모든 컨테이너를 보여준다.
```  

컨테이너 실행하기

```bash
docker start [컨테이너 이름]

docker run -d \ # Background 로 실행
            -p [외부 포트:컨테이너 내부포트] \ # port 설정
            --name [컨테이너 이름] \ #컨테이너 이름 설정
            [이미지명:버전태그] # 해당 컨테이너를 구성할 이미지
```  

컨테이너 삭제  

```bash
docker rm -f [컨테이너 이름] # -f 옵션은 실행 중인 컨테이너도 강제로 삭제한다.
```  

컨테이너에 직접 명령(접근)

```bash
docker exec -it [컨테이너 이름] /bin/bash # 실행 중인 컨테이너의 shell 에 접근
```