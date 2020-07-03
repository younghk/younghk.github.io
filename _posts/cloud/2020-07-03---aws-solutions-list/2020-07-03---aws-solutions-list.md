---
draft: false
title: AWS Solutions List
datetime: 2020-07-03 11:01:30
layout: post
category: Cloud
tags: 
  - AWS
description: "AWS의 product들에 대해 간략히 정리해보자"
toc: true
toc-not-sticky: true
---

최종 수정일 : 2020-07-03

AWS(Amazon Web Services) 는 2006년 EC2와 S3를 시작으로 제공된 클라우드 서비스이다.  
현재 대표적인 클라우스 서비스로 자리매김 되어있으며 아주 다양한 솔루션들을 제공하고 있다.  

어떤 서비스들을 제공하는지 대표적인 서비스들을 중심으로 간략히 정리해보자.

---

## Application Integration

### AWS SQS

> Amazon Simple Queue Service

- 매니지드 서비스로 제공되는 메시지 큐 서비스(Azure : Queue Storage / Google Cloud : Pub/Sub)
- SQS 에서는 최소 1번 전달을 보장하는 표준 대기열과 메시지가 전달된 순서대로 정확히 한 번 처리하는 것을 보장하는 FIFO 대기열을 지원

## Container

### AWS ECS

> Amazon Elastic Container Service

- AWS 의 매니지드 컨테이너 오케스트레이션 서비스(Azure : Container Instances / Google Cloud : Google Kubernetes Engine)
- ECS 에 클러스터를 생성하고 EC2 인스턴스를 등록할 수도 있음
- Service 와 Task 로 Docker Container 를 운영, 클러스터에 등록되어 있는 EC2 인스턴스들 위에 Docker Container 를 스케쥴링

### AWS EKS

> Amazon Elastic Kubernetes Service

- 아마존 웹 서비스의 매니지드 쿠버네티스 서비스(Azure : Kubernetes Service / Google Cloud : Google Kubernetes Engine)
- ECS 라는 아마존의 독자 서비스가 있지만 구글의 노하우가 담긴 Kubernetes 를 이용한 또 다른 오케스트레이션 서비스를 제공함

### AWS Fargate

> Amazon Fargate

- 서버 또는 클러스터를 관리할 필요 없이 컨테이너를 실행 가능(Azure: Container Instances / Google Cloud : Cloud Run)
- ECS 와 EKS 기반으로 제공
- Docker Container 를 EC2 인스턴스 없이 독립적으로 실행할 수 있게 함
- AWS Lambda 와 EC2 기반 ECS Container 중간 쯤 위치한 서비스로 볼 수 있음

## Compute

### Amazon EC2

> Amazon Elastic Compute Cloud

- 리눅스나 윈도우 환경의 컴퓨팅 자원을 가상 서버로 제공.(Microsoft Azure : Virtual Machine, Google Cloud : Google Compute Engine)
- 리눅스 서버의 경우 SSH 로 직접 접속해서 관리하는 것이 가능하기 때문에 기존의 서버 운영 환경과 가장 닮아있는 서비스라고 할 수 있음.
- 너무 다양한 Instance type 을 제공하는 바람에 뭐가 뭔지 알기 어려웠는데 2019년 10월 인스턴스 타입을 검색하고 비교할 수 있는 검색 메뉴가 추가되어서 조금 더 적절한 인스턴스 타입을 선택하는데 편리해짐.
- 대표적인 Instance Type
  - M5 : 컴퓨팅, 메모리, 네트워크 리소스들이 균형있게 제공되는 범용 인스턴스
  - T3 : CPU 가속을 지원하는 범용 인스턴스
  - C5 : 컴퓨팅 특화
  - R5 : 메모리 최적화
  - I3, D2, H1 : 스토리지 최적화
  - P3 : GPU 지원
  - Inf1 : 추론 최적화(Inferentia 칩 사용)
- 부하에 따라 인스턴스 수를 조정하는 Auto Scaling 그룹이나 Elastic Load Balancer(ELB)와 밀접한 관련이 있음

### AWS LightSail

> Amazon LightSail

- 쉽고 가벼운 가상 서버 서비스(Azure : App Service / Google Cloud : Compute Engine)
- 서버 사양만 선택해서 바로 서버를 사용할 수 있는 서비스로, EC2 의 복잡한 인스턴스 선택 및 설정 과정을 넘어갈 수 있음

### AWS EB

> Amazon Elastic Beanstalk

- 웹 애플리케이션 및 서비스를 쉽게 배포하고 scaling 할 수 있는 서비스(Azure : App Engine / Google Cloud : App Engine)
- 코드를 업로드하여 EB 가 용량 provisioning, load balacing, auto-scaling 등을 알아서 수행하여 배포함

### AWS Lambda

> Amazon Lambda

- Serverless 컴퓨팅 서비스(Azure : Functions / Google Cloud : Cloud Functions)
- 사용자가 직접 서버를 운영할 필요 없이 코드만 배포해도 사용이 가능
- 다양한 언어 지원(C#, Java, Go, Python, Ruby, PowerShell, Node.js)하고 그 외 언어들도 커스텀하여 직접 구현 가능
- API Gateway, ELB 등을 연동해 웹 요청에 대한 처리가 가능
- S3, DynamoDB, Kinesis 등을 연동해 컴퓨팅 작업 수행 가능

## Database

### Amazon Aurora

- 아마존의 MySQL 및 PostgreSQL 호환 관계형 데이터베이스(Azure : Database for MySql, Database for PostgreSQL / Google Cloud : Cloud SQL, Cloud Spanner)

### Amazon RDS

> Amazon Relational Database Service

- 클라우드에서 RDB(Relational Database)를 쓸 수 있게 서비스(Azure : SQL Database / Google Cloud : Cloud SQL)
- 하드웨어 프로비저닝, 설정, 패치 및 백업과 같은 작업을 자동화하고 탄력적인 서비스 제공

### Amazon DynamoDB

- Key-Value / Document Database(Azure : Cosmos DB / Google Cloud : Firestore, Cloud Bigtable)
- 다중 리전 / 다중 마스터 데이터베이스로서 내구성이 뛰어나며, 다양한 기능(보안, 백업, 복원, 인 메모리 캐싱 등)을 제공

### AWS ElastiCache

> Amazon ElastiCache

- Redis 와 Memcached를 매니지드 서비스로 제공(Azure : Cache for Redis / Google Cloud : MemoryStore)
- 처리량이 많고 빠른 응답이 필요한 캐시, 세션 스토어 등으로 많이 사용
- 클러스터 구성, 백업, 스케일 업/다운 등의 작업을 쉽게 할 수 있음

## Networking & Content Delivering

### Amazon VPC

> Amazon Virtual Private Cloud

- 계정별로 격리된 네트워크 환경을 구성할 수 있게 도와주는 서비스(Microsoft Azure : Virtual Network, Google Cloud: Google Virtual Private Cloud)
- VPC 를 이용해 VPC, Subnet, Route Table, ACL, Security Group 등을 사용해 논리적인 네트워크 분할 작업을 손쉽게 할 수 있고 계정 안에서나 계정 간에 격리된 네트워크를 연결할 수 있는 다양한 옵션을 제공하고 있음
- 많은 서비스들이 VPC 와 연관되어 있기 때문에 알아두어야 AWS 를 잘 사용할 수 있음

### AWS ELB

> Amazon Elastic Load Balancer

- 들어오는 애플리케이션 트래픽을 target 에 자동으로 분산함(Google Cloud : Cloud Load Balancing)
- Application Load Balancer(Azure : Application Gateway)
  - HTTP/HTTPS 트래픽에 대해 적합
  - microservice 와 container 등 최신 애플리케이션 아키텍처 전달을 위한 고급 요청 라우팅 기능을 제공
  - ___OSI Layer 7 에서 작동(L7 Load Balancing)___
  - 최신 SSL/TLS 프로토콜 사용
- Network Load Balancer(Azure : Load Balancer) 
  - IP protocol data 기반으로 VPC 내의 target(EC2, microservice, container, ...)으로 연결을 routing
  - ___OSI Layer 4 에서 작동(L4 Load Balancing)___
  - 매우 짧은 지연 시간을 유지하면서 초당 수백만 개의 요청 처리 가능
- Classic Load Balancer
  - EC2 인스턴스에서 기본적인 load balancing 을 제공
  - EC2 Classic 네트워크 내에 구축됨
  - VPC 를 사용할 때는 Application Load Balancer(L7) 나 Network Load Balancer(L4) 를 사용하는 것이 좋음

### AWS Route 53

> Amazon Route 53

- 가용성과 확장성이 뛰어난 Cloud Domain Name System(Azure : DNS / Google Cloud : Google Domain, Cloud DNS)
- IP address 를 DNS 로 변경
- IPv6 와 호환

## Security, Identity, Compilance

### AWS IAM

> Amazon Identity and Access Management

- 권한 관리를 지원(Microsoft Azure : Azure Active Directory, Role Based Access Control / Google Cloud : Google Identity and Access Management)
- AWS 계정을 생성하면 root 계정이 생성되고 root 는 해당 계정에 대한 모든 권한을 가지기 때문에 IAM 사용자를 생성하여 권한을 제한시키고 그 권한의 범위 내에서만 작업이 이루어질 수 있도록 해야 함
- Role 이나 Policy 를 통해 AWS 내부에서 서비스에 권한을 위임하는 것도 가능

## Storage

### AWS S3

> Amazon Simple Storage Service

- AWS 에서 제공하는 오브젝트 스토리지 서비스(Microsoft Azure : Blob Storage, Google Cloud : Google Cloud Storage)
- 파일 시스템이 아닌 오브젝트 스토리지 서비스로 모든 파일에 API 로 접근 가능
- 무제한적인 확장성과 높은 가용성 및 내구성을 보장
- 버킷 단위의 사용, 단일 파일 최대 5TB
- 높은 내구성은 필연적으로 많은 cost 가 들기 때문에 S3 standard 부터 Glacier 등 다양한 서비스를 제공

### AWS EBS

> Amazon Elastic Block Store

- 대규모 고성능 블록 스토리지(Azure : Manages disks / Google Cloud : Persistent Disk)
- EBS 볼륨은 쉽게 생각해서 하드디스크 저장소(SSD, HDD) 등을 생각하면 됨

---

참고 자료 :  

[AWS 공식 사이트](https://aws.amazon.com/ko/?nc2=h_lg)  
[Azure 공식 사이트](https://azure.microsoft.com/en-us/solutions/)  
[Google Cloud 공식 사이트](https://cloud.google.com/solutions)  
[44bits](https://www.44bits.io/ko/keyword/amazon-web-service)  
