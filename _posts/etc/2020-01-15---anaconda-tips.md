---
draft: false
title: 'Anaconda Tips'
date: '2020-01-15 09:13:42'
layout: post
#path:      "/posts/anaconda-tips/"
category: 'ETC'
tags:
  - Anaconda
  - Python
description: 'Anaconda 관련 정리 포스트입니다.'
toc: true
---

Anaconda 관련해서 자주 사용하고 필요한 것들을 정리해보자.

## Create Virtual Environment

특정 파이썬 버전으로 가상 환경을 구축하고 싶을 때

```bash
conda create -n venv_name python=x.x anaconda
```

## List up virtual environment

```bash
conda env list
```

## Install additional Python packagets to a virtual environment

특정 가상 환경에 파이썬 패키지를 추가로 설치하고 싶을 때

```bash
conda install -n venv_name package_name
```

## Activate/Deactivate a virtual environment

생성한 가상환경을 실행/종료시키고 싶을 때

```bash
conda activate venv_name # 실행
conda deactivate # 종료, 가상환경이 실행되고 있을 때만
```
