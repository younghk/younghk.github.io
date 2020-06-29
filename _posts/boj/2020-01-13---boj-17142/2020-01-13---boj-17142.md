---
draft: false
title: '[BOJ 17142] 연구소3'
date: '2020-01-13 15:28:03'
#path: "/posts/boj-17142/"
category: 'BOJ'
description: ''
tags:
  - PS
  - Algorithm
  - Python
  - BOJ
---

문제 출처 : https://www.acmicpc.net/problem/17142

## 풀이

완전탐색의 전형적인 문제이다.  
바이러스의 총 개수와 그 위치를 하나의 item 으로 생각하여, 모든 item 에 대한 경우의 수(M개의 바이러스를 활성화시킬 수 있는 경우의 수)에 대해 고려해주면 된다.

이런 완전탐색 문제에서 combination(또는 permutation) 으로 경우의 수를 빠르게 계산해줄 수도 있으나, 직접 구현하는 경우에 몇 가지 트릭을 적용해 볼 수 있는데, `경우의 수를 조합할 때 이전 index보다 현재 index가 항상 크도록` 경우의 수를 조합하게 된다면 시간적인 측면에서 많은 효율 향상을 가지고 올 수 있다.

아래의 어떤 부분이 해당 트릭이 적용되었는지 생각해보자.

C 로만 짜다가 심심해서 python 으로도 짜보았다.  
앞으로는 python 으로도 종종 짜보게 될 것 같다.

## 코드

```python
import sys
input = sys.stdin.readline

import collections

def input2(N, M):
    L = [[int(x) for x in input().split()] for y in range(N)]
    return L

def virus(N, L):
    virus = []
    vcnt = 0
    nvcnt = 0
    for y in range(N):
        for x in range(N):
            if L[y][x] == 2:
                virus.append([y,x])
                vcnt = vcnt+1
            elif L[y][x] == 0:
                nvcnt += 1
    return virus, vcnt, nvcnt

def bfs(act_virus, N, L, nvcnt):
    visited = [[False]*N for _ in range(N)]
    vc = nvcnt
    q = collections.deque(act_virus)
    dy = [0, 1, 0, -1]
    dx = [1, 0, -1, 0]
    lev = 0
    if vc ==0:
        return 0
    for v in act_virus:
        visited[v[0]][v[1]] = True
    while q:
        lev += 1
        for _ in range(len(q)):
            vi = q.popleft()
            #print(vi[0], vi[1])
            for i in range(4):
                y = vi[0] + dy[i]
                x = vi[1] + dx[i]
                if 0 <= y <= N-1 and 0 <= x <= N-1 and not(visited[y][x]) and L[y][x] != 1:
                    visited[y][x] = True
                    if L[y][x] == 0:
                        vc -= 1
                        if vc == 0:
                            return lev

                    q.append([y, x])
    return -1

def dfs(lev, lim, prev, check, act_virus, virus, vcnt, L, N, nvcnt):
    if lev == lim:
        #print(act_virus)
        val = bfs(act_virus, N, L, nvcnt)
        global ans
        #print(val)
        if val != -1 and ans > val:
            ans = val
        return
    for x in range(prev+1, vcnt):
        if check[x] == 0:
            check[x] = 1
            act_virus[lev] = [virus[x][0], virus[x][1]]
            #print(lev, act_virus)
            dfs(lev+1, lim, x, check, act_virus, virus, vcnt, L, N, nvcnt)
            check[x] = 0
    return


def laboratory3(N, M, L, virus, vcnt):
    check = [int(0) for _ in range(vcnt)]
    act_virus = [[int(-1), int(-1)] for _ in range(M)]
    #print(check)
    dfs(0, M, -1, check, act_virus, virus, vcnt, L, N, nvcnt)
    if ans == 500000:
        print(-1)
    else:
        print(ans)

if __name__ == "__main__":
    # execute only if run as a script
    N, M = map(int,input().split())
    L = input2(N, M)
    virus, vcnt, nvcnt = virus(N, L)
    ans = 500000
    laboratory3(N, M, L, virus, vcnt)
```

## 개선할 점

python 으로 짜니까 좀 느리다.  
그치만 익숙해질 겸 열심히 짜보자.
