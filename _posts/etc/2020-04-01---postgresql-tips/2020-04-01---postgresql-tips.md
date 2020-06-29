---
draft: false
title: PostgreSQL 간단 정리
datetime: 2020-04-01 12:53:17
category: ETC
tags: 
    - DB
    - PostgreSQL
description: "PostgreSQL에 대해 간략히 정리하고 사용법 및 오류 등에 대해서 정리한 포스트입니다."
---

## PostgreSQL 이란

PostgreSQL 은 객체관계형 데이터베이스로, 오픈소스로 개발되고 있다.  
기능적으로 오픈소스임에도 불구하고 뛰어나서 많은 인기를 끌고 있다.(Oracle, MS SQ, MySQL 다음 급)

## 명령어

```bash
psql -U [유저] -h [호스트] -P [포트]
\list # DB 들에 대한 정보 출력
\dt # 현재 타겟 DB 내 존재하는 table 출력
```

## 오류 모음

### 버전 문제

MacOS 환경에서 오랜만에 psql을 이용해 터미널 환경의 PostgreSQL DB 에 접근하려고 하니 아래와 같은 에러가 떴다.

```bash
❯ psql
psql: error: could not connect to server: could not connect to server: No such file or directory
	Is the server running locally and accepting
	connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
```

`/tmp/.s.PGSQL.5432` 를 찾기 위해  

```bash
sudo find / -name /tmp/.s.PGSQL.5432
```

를 해보았으나 시간낭비일 뿐이었다.  

문제의 원인을 조금 더 찾아보니

```bash
❯ postmaster --help
postmaster is the PostgreSQL server.
```

postmaster 라는 PostgreSQL server 를 찾을 수 있었고, 

```bash
❯ postmaster
postmaster does not know where to find the server configuration file.
You must specify the --config-file or -D invocation option or set the PGDATA environment variable.
```

설정과 관련한 문제가 있음을 찾을 수 있었다.  

```bash
❯ postgres -D /usr/local/var/postgres
2020-04-01 12:48:28.964 KST [38386] FATAL:  database files are incompatible with server
2020-04-01 12:48:28.964 KST [38386] DETAIL:  The data directory was initialized by PostgreSQL version 11, which is not compatible with this version 12.2.
```

버전이 안 맞다고 한다. 현재 `postgres -V` 로 확인한 버전은 `12.2` 이다.  

다행히 쉬운 방법이 있는데,  

```bash
❯ brew postgresql-upgrade-database
```

Homebrew 로 database 를 버전 업 시켜주면 해결이 된다.