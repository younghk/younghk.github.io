---
draft: false
title: Cloud Overview
datetime: 2020-07-01 15:00:42
last-modified-at: 2020-07-01 15:44:32
layout: post
category: Cloud
tags: 
  - Cloud
  - AWS
description: "클라우드에 대해서 개략적으로 정리한 포스트입니다."
toc: true
---

## 클라우드 개요

1. 클라우드
    - 물리적인 서버가 없이도 인터넷에 접속하여 다양한 자원을 사용할 수 있게 하는 컴퓨터 리소스 이용형태를 말함
2. 물리 서버와 클라우드 서버의 특징
    - 소유자와 사용자가 다르다는 것이 가장 큰 특징
    - 물리서버의 경우 일반적으로 기업이 서버를 소유하고 있음 (소유자 = 사용자)
    - AWS 같은 경우에는 Amazon 이모든 리소스를 소유하고, 해당 리소스를 서비스로 만든 것. 사용자는 이 리소스만 필요할 때 사용하게 됨
3. 렌탈 서버의 3가지 형태
    - 공용서버 : 1개의 물리서버를 분할한 형태, 다른 사용자의 영향을 받을 수 있음
    - 전용서버 : 1개의 물리서버를 점유하는 형태, 다른 사용자의 영향을 받지 않으나 비쌈
    - 가상전용서버 : 1대의 물리서버 위에 있는 가상 서버를 점유
4. 렌탈서버와 AWS 의 차이
    - AWS 는가상전용서버와 비슷한 형태를 갖고 있음.
    - 그러나 디스크 동적추가, Instance type change, virtual machine 생성및 백업, 복제 등 다양한 기능을 제공
5. Public Cloud vs. Private Cloud
    - 누구에게 서비스를 제공하느냐에 대한 차이가 있음
    - public 은 불특정 다수에게 제공하고, private 은 특정 사용자(기업)에게 제공하는 형태
    - 이 외에도 public + private 인 hybrid cloud 와특정 업종의 기업들이 함께 운영하는 커뮤니티 클라우드 형태도 있음
6. AWS 에서 private cloud 의 의미  
    - A. vpc 를 이용하여 논리적으로 분리된 가상의 네트워크 환경을 생성하는 것을 뜻함  
    - B. 기존 물리서버(on-premise)와 동일한 네트워크 구성이 가능
7. reliable network 가 보장되어야 하며, 직접 소유하고 있는 것이 아니기 때문에 작업을 하는데 컨트롤 하기 어려운 부분이 존재할 수 있다.
8. Multi-tenant Technology : 쉽게 생각하면 공유 인프라를 제공할 수 있는 기술.
    - 클라우드에서는 하나의 물리 서버에 여러 개의 가상화된 서버를 여러명의 유저(tenants)에게 제공할 수 있는 기술을 의미.
9. Snapshot algorithm : 분산환경에서 global state를 알기 위한 방법	
10. 용어 설명
    - High Availability : 고가용성 - 시스템을 운영하면서 장애 없이 서비
    - Scalability : Cloud 에서 workload 가 증가할 시 부하를 감당할 수 있는 resource capacity 를 가지고 있는 능력
    - Elasticity : 막대한 양의 resource 용량에 대해서 순간적으로 할당하고 해제하는 능력, 즉 얼마나 빠르고 효과적으로 할당하는지를 의미

## 서비스의 종류

### IaaS (Infrastructure as a Service)  

`서비스로써의 인프라` 를 의미

- AWS 와 같이 호스트를 할 수 있는 인프라를 제공해주는 것
- 하드웨어를 원격에서 제공해주는 것이라고 볼 수 있음. (Ex. EC2)

### PaaS (Platform as a Service)

`서비스로써의 플랫폼` 을 의미

- 인프라는 구축이 되어 있고 그 곳에 코드등을 빌드해서 바로 배포하고 실행할 수 있는 것
- OS를 원격에서 제공해주는 것이라고 볼 수 있음 (Ex. 이미 node.js 가 설치되어있는 runtime 환경 제공)

### SaaS (Software as a Service)

`서비스로써의 소프트웨어` 를 의미

- 구글독스 같이 바로 접근해서 쓸 수 있는 것.

## Scaling

### Horizontal Scaling

- Allocating or releasing of IT resources that are of the same type
- 동일한 속성을 할당하거나 줄이는 것. 가상 머신을 한대 -> 두대 -> 세대 늘리는 것이라고 볼 수 있음.

### Vertical Scaling

- replacing by another with higher or lower capacity
- 2CPUs -> 4CPUs 처럼 capacity 를 늘리는 것.

### horizontal scaling vs. vertical scaling

|Horizontal|Vertical|
|:---:|:---:|
|less expensive<br />(through commodity hardware components) | more expensive<br />(specialized servers)|
|IT resources instantly available | IT resources normally instantly available|

## Characteristics of Cloud

- On-demand Usage
- Ubiquitous Access : 자유롭게 언제 어디서든 접근
- Multi-tenancy (and Resource Pooling) : 하나가 여럿에게 제공해줄 수 있다. => 각자에게 isolation 제공
  - shared cloud storage device 에서 하나 이상의 cloud service 에게 자원을 할당할 수 있다는 의미
- Elasticity
- Measured Usage
- Resiliency : the capacity to recover quickly from difficulties; toughness

## Broadband Networks and Internet Architecture

- application : HTTP, SMTP, FTP
- transport : TCP, UDP
- internetworking : IP
- data link : data link protocol
- physical : physical protocol

## Network bandwidth and latency issues

:: traffic 문제로 이슈가 발생할 수 있다.

## Virtualization Technology

:: Virtualization is the process of converting a physical IT resource into a virtual IT  resource

- virtual server
- virtual storage device or virtual disk
- vlan
- power - virtual UPSs

roll-back recovery : snapshot 기법을 사용한다.

가상화를 할 경우 여러 layer 를 거치게 되는 경우가 발생 -> performance overhead 발생 가능

