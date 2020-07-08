---
draft: false
title: \[C++\] Pointer Overview
datetime: 2020-07-08 14:28:45
layout: post
category: Programming-Language
tags: 
  - C++
  - Pointer
description: "C++ 의 포인터 개념에 대해서 정리합니다."
toc: true
---

## C언어 어렵잖아?

많은 사람들이 C언어(C, C++)가 어렵다고(또는 멍청하다고) 이야기한다.  
이는 C언어를 다루기 위해서는 세세한 부분들을 직접 다 지정해줘야하는 특성 때문인데 이 때문에 고급언어이지만 low level 언어라고 부르기도 한다.  

특히 pointer 를 사용해 메모리에 __직접__ 접근할 수가 있는데 이는 아주 세세한 설정이 가능하다는 의미이다.<small>SpaceX 의 우주선도 C++로 개발되었다고 한다. 우주의 언어 C++...</small>  

위와 같은 특성으로 메모리나 성능이 중요한 것들은 C, C++로 개발을 많이 한다.(특히 하드웨어라던가)

## 그래서 포인터?

포인터는 `다른 변수(variable)의 위치(주소)를 가리키는 변수`이다.  

포인터를 사용하는 데 있어서 두 가지 연산자(`*`, `&`)가 사용되는데 각각은 아래와 같다.

- \* : 역참조 연산자. 해당 변수의 주소에 저장된 값에 접근할 수 있음
- & : 주소 연산자. 변수에 할당된 메모리 주소를 확인할 수 있음  

```c++
#include <iostream>

using namespace std;

int main(){
  int x = 1;
  cout << x << endl;    // 1
  cout << *&x << endl;  // 1
  cout << &x << endl;   // 0x7ffeeea92688

  return 0;
}
```

포인터 변수의 선언은 일반 변수와 비슷하다.

```c++
int* ptr; // int형 포인터
int* ptr1, ptr2; // int형 포인터, int형 변수
```

포인터는 메모리 주소만 저장하게 되므로 포인터에 값을 할당할 때 그 값은 주소여야 한다.  

```c++
int value = 1;
int *ptr = &value; // value 변수의 주소값으로 ptr 를 초기화
```

즉, ptr 는 `value 변수를 가리키는 값`이라고 볼 수 있다.

```c++
#include <iostream>

using namespace std;

int main(){
  int x = 1;
  int *ptr = &x;
  cout << &x << endl;    // 0x7ffee7c1a688
  cout << ptr << endl;   // 0x7ffee7c1a688

  return 0;
}
```  

포인터 변수의 자료형은 가리키는 변수의 자료형과 같아야 한다.

```c++
#include <iostream>

using namespace std;

int main(){
  int iValue = 1;
  double dValue = 0.1;
  
  int *iPtr = &iValue;      // Ok
  double *dPtr = &dValue;   // Ok

  iPtr = &dValue;           // error: assigning to 'int *' from incompatible type 'double *'
  dPtr = &iValue;           // error: assigning to 'double *' from incompatible type 'int *'

  return 0;
}
```  
