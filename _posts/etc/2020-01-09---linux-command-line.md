---
draft: false
title: Linux Command Line 명령어 정리
date: 2020-01-09 21:45:24
path:       "/etc/2020-01-09---linux-command-line/2020-01-09---linux-command-line/"
category: ETC
toc: true
---

자주 쓰는 command 정리

## Directory / Files

### mv : Rename

directory 또는 file 의 이름을 변경하려면 아래와 같이 쓸 수 있다.  
이 command 는 -v 로 verbose 를 지원한다.

```bash
mv CURRENT_DIRECTORY NEW_DIRECTORY
mv -v CURRENT_DIRECTORY NEW_DIRECTORY # verbose
```

### rm : Remove

file 의 삭제는 다음과 같다.

```bash
rm FILE
```

rm 은 아래의 다양한 옵션을 가질 수 있다.

-d : directory 삭제  
-r : nom-empty directory 의 모든 파일을 삭제  
-f : (force) write-protected 도 강제로 삭제

### mkdir : Make Directory

### ls : Show list of current directory

```bash
ls
ls -a
ls -al
```

### Copy

```bash
cp ${source} ${destination}
```

## FTP

파일 전송을 위함  

```bash
ftp ${remote ip} ${port}
```

-mput : local file 을 remote 로 전송  

``` bash
ftp> mput filename
mput filename? [yes]/[no]
```

## Command

-!$ : 바로 이전 명령어의 마지막 argument 를 지칭

## ETC

### lsof : Show Process

COMMAND, PID, USER, FD, TYPE, DEVICE, SIZE/OFF, NODE, NAME

-i : ```lsof -i:3000``` 3000 port 를 사용하고 있는 process 확인

### kill : Kill Task

```bash
kill -i 3000
```

### file

해당 파일의 file type 에 대해 알려준다.  

```bash
file filename
```

### wc

해당 파일의 word count(글자수 세기) 를 수행한다.

```bash
$ wc filename
 [number of lines] [number of words] [count by bytes]
```

각각 -l, -w, -c 로 해당하는 것만 뽑아서 볼 수 있다.