var store = [{
        "title": "맥에서 VS Code C++ 빌드 설정하기",
        "excerpt":"맥에서 VS Code로 C++ 빌드를 해보자 우선 VS Code 를 열어서 원하는 디렉토리로 이동한다. (Cmd+Shift+E 로 explorer tab 을 열 수 있다.) VS Code에서 C++을 이용하려면 Microsoft에서 제공하는 C/C++ extension을 설치해야한다. 설치가 완료되었으면 연습용 cpp 파일을 만들어서 간단하게 코드를 짜보자. 역시 연습용 코드는 국룰인 hello world /* hello.cpp */ #include...","categories": ["ETC"],
        "tags": ["Mac","VS Code","C++","Configuration"],
        "url": "http://localhost:4000/etc/2019-10-01---vs-code-c++-configuration-for-mac/",
        "teaser": null
      },{
        "title": "[BOJ 17503] 맥주 축제",
        "excerpt":"[BOJ 17503] 맥주 축제 문제 출처 : https://www.acmicpc.net/problem/17503 풀이 문제를 보았을 때 K의 범위가 2^31-1 까지이므로 Parametric Search로 답을 특정하는 방법 우선순위 큐를 이용해서(또는 min-heap) 푸는 방법 2번을 생각해내는게 조금 핵심적인 문제라 생각하는데, N개의 맥주를 무조건 먹어야 하고, M보다 같거나 많이 먹어야 하기 때문에 현재까지 어떤 것을 선택해서 먹고 있는지를...","categories": ["BOJ"],
        "tags": ["PS","Algorithm","C++","BOJ"],
        "url": "http://localhost:4000/boj/2019-10-02---boj-17503/",
        "teaser": null
      },{
        "title": "Markdown을 써보자",
        "excerpt":"Markdown 이란 .md 의 확장자를 지닌 파일이 Markdown 문법으로 작성된 파일이다. 흔히 README.md 로 개발하면서 많이 볼 수 있는 문서! 문법이 간결하고 쉬우면서도 문서를 적당히 꾸밀 수 있다. Markdown은 HTML의 마크업의 일부를 대신한다고 볼 수 있는데, 모든 것을 대신하지는 못하므로 한계가 존재하긴 한다. 그러나 지원하는 플랫폼도 많고(파생 문법들이 많으나 기본...","categories": ["ETC"],
        "tags": ["Markdown"],
        "url": "http://localhost:4000/etc/2019-10-04---markdown-usage/",
        "teaser": null
      },{
        "title": "[BOJ 2125] Mothy",
        "excerpt":"[BOJ 2125] Mothy 문제 출처 : https://www.acmicpc.net/problem/2125 풀이 기하문제이다. 기하문제는 정말이지 즐겁다^^ 기하문제이기 때문에 기본적으로 CCW를 사용하게 되는데, 문제의 조건에 따라 볼록다각형의 테두리는 지나갈 수 있음 그러므로 다각형이 맞닿아 있는 곳도 지나갈 수 있음 을 생각해서 CCW를 구현해 주어야 한다. 뿐만 아니라, 소수점까지 계산해야하는 문제이기에, 정수 또는 소수 처리를 잘...","categories": ["BOJ"],
        "tags": ["PS","Algorithm","C++","BOJ"],
        "url": "http://localhost:4000/boj/2019-10-09---boj-2125/",
        "teaser": null
      },{
        "title": "[BOJ 12886] 돌 그룹",
        "excerpt":"문제 출처 : https://www.acmicpc.net/problem/12886 풀이 이 문제를 BFS 를 이용해 완전 탐색의 기법으로 풀어낼 수 있다. 이 때, $500^3$ 을 배열로 잡을 수가 없어서 헤맬 수 있으나, \\[A+B+C = sum \\\\ C = sum-A-B\\] 이라는 간단한 수학을 이용하면 $500^2$ 의 공간을 가지고 탐색을 진행할 수 있다. 물론 500 만큼만 잡으면...","categories": ["BOJ"],
        "tags": ["PS","Algorithm","C++","BOJ"],
        "url": "http://localhost:4000/boj/2019-10-18---boj-12886/",
        "teaser": null
      },{
        "title": "Netlify 로 github 블로그 이전하기",
        "excerpt":"Netlify   빌드를 로컬에서 하기에는 리소스에 부담되기도 해서 자동 배포가 되는 Netlify 로 이전하기로 하였다.   이전 주소는 https://younghk.netlify.com 이다.   매번 로컬에서 빌드하다가 고통받던 나의 컴퓨터,,,  이제 비행기 이륙은 그만!!      지난 블로그는 https://younghk.github.io 에서 확인할 수 있다.  ","categories": ["ETC"],
        "tags": ["blog","Netlify"],
        "url": "http://localhost:4000/etc/2019-10-30---netlify-migration/",
        "teaser": null
      },{
        "title": "VI VIM Command Line 명령어 정리",
        "excerpt":"저장 및 종료 명령어 설명 :w 저장 :w filename filename 로 저장 :w » filename filename 뒤에 덧붙여서 저장 :q vi 종료 :q! vi 강제 종료 :wq, :x, ZZ 저장 후 종료 :wq! 강제 저장 후 종료 :e filename filename 파일 불러오기 :e 현재 파일 불러오기 :e# 바로 이전에 열었던 파일...","categories": ["ETC"],
        "tags": ["vi","vim","command line"],
        "url": "http://localhost:4000/etc/2020-01-09---vi-vim-command-line/",
        "teaser": null
      },{
        "title": "Linux Command Line 명령어 정리",
        "excerpt":"자주 쓰는 command 정리 Directory / Files mv : Rename directory 또는 file 의 이름을 변경하려면 아래와 같이 쓸 수 있다. 이 command 는 -v 로 verbose 를 지원한다. mv CURRENT_DIRECTORY NEW_DIRECTORY mv -v CURRENT_DIRECTORY NEW_DIRECTORY # verbose rm : Remove file 의 삭제는 다음과 같다. rm FILE rm 은...","categories": ["ETC"],
        "tags": [],
        "url": "http://localhost:4000/etc/2020-01-10---linux-command-line/",
        "teaser": null
      },{
        "title": "[BOJ 17142] 연구소3",
        "excerpt":"문제 출처 : https://www.acmicpc.net/problem/17142 풀이 완전탐색의 전형적인 문제이다. 바이러스의 총 개수와 그 위치를 하나의 item 으로 생각하여, 모든 item 에 대한 경우의 수(M개의 바이러스를 활성화시킬 수 있는 경우의 수)에 대해 고려해주면 된다. 이런 완전탐색 문제에서 combination(또는 permutation) 으로 경우의 수를 빠르게 계산해줄 수도 있으나, 직접 구현하는 경우에 몇 가지 트릭을...","categories": ["BOJ"],
        "tags": ["PS","Algorithm","Python","BOJ"],
        "url": "http://localhost:4000/boj/2020-01-13---boj-17142/",
        "teaser": null
      },{
        "title": "[BOJ 5373] 큐빙",
        "excerpt":"풀이 단순한 구현 문제이나 생각이 꼬이지 않으면서 구현을 잘 해주어야하는 문제이다. 총 6 면(위 아래 앞 뒤 좌 우)의 큐브가 각각 회전하면서 어떻게 되는지를 생각해야하는데, 큐브의 상태를 어떻게 정의하느냐에 따라 구현 난이도가 높아질 수 있다. 아래의 코드는 큐브의 면을 0,1,2,3,4,5 로 번호를 지정하고, 각 면에서 한 타일 당 좌상단부터 0~8...","categories": ["BOJ"],
        "tags": ["PS","Algorithm","C++","BOJ"],
        "url": "http://localhost:4000/boj/2020-01-13---boj-5373/",
        "teaser": null
      },{
        "title": "Anaconda Tips",
        "excerpt":"Anaconda 관련해서 자주 사용하고 필요한 것들을 정리해보자. Create Virtual Environment 특정 파이썬 버전으로 가상 환경을 구축하고 싶을 때 conda create -n venv_name python=x.x anaconda List up virtual environment conda env list Install additional Python packagets to a virtual environment 특정 가상 환경에 파이썬 패키지를 추가로 설치하고 싶을 때 conda install...","categories": ["ETC"],
        "tags": ["Anaconda","Python"],
        "url": "http://localhost:4000/etc/2020-01-15---anaconda-tips/",
        "teaser": null
      },{
        "title": "PostgreSQL 간단 정리",
        "excerpt":"PostgreSQL 이란 PostgreSQL 은 객체관계형 데이터베이스로, 오픈소스로 개발되고 있다. 기능적으로 오픈소스임에도 불구하고 뛰어나서 많은 인기를 끌고 있다.(Oracle, MS SQ, MySQL 다음 급) 명령어 psql -U [유저] -h [호스트] -P [포트] \\list # DB 들에 대한 정보 출력 \\dt # 현재 타겟 DB 내 존재하는 table 출력 오류 모음 버전 문제...","categories": ["ETC"],
        "tags": ["DB","PostgreSQL"],
        "url": "http://localhost:4000/etc/2020-04-01---postgresql-tips/",
        "teaser": null
      }]
