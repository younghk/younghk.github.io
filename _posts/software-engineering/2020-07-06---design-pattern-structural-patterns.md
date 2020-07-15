---
draft: false
title: \[Design Pattern\] 구조 패턴 - Structural Patterns
datetime: 2020-07-06 18:18:22
layout: post
category: Software-Engineering
tags:
  - Design Pattern
  - Structural Pattern
description: "디자인 패턴 중 구조 패턴(Structural Pattern)의 유형에 대해 간략히 정리합니다."
toc: true
---

## 구조 패턴

> ease the design by identifying a simple way to realize relationships among entities.

구조 패턴(Structural Pattern)은 개체들간의 관계(책임)를 파악해서 설계하는 방법이다.

## 구조 패턴 유형

디자인 패턴 중 `구조 패턴`의 유형들에 대해 알아보자.

### Adapter

> allows the interface of an existing class to be used as another interface.  
> 기존 인터페이스에 다른 인터페이스를 사용할 수 있도록 허용

```
Client -----> Adapter -----> Adaptee
      request        translated
                     request
```

- 인터페이스가 호환되지 않는 클래스들을 함께 이용할 수 있도록 해줌

이는 존재하는 클래스가 다른 것들과 함께 작동(호환)할 수 있도록 하는데 사용되는데, 이 때 소스 코드를 수정하지 않고 하는 것이다.

그렇기 때문에, 기존의 것을 재사용하거나 라이브러리를 수정할 수 없을 때 사용하게 된다.

위에서 간략하게 표시한 것처럼, 서로 다른 두 클래스(Client, Adaptee)를 그대로 두고(소스 코드 수정 x) 둘의 인터페이스를 연결하고자 Adapter class 를 만들어서 사용하는 구조를 의미한다.

### Bridge

> "decouple an abstraction from its implementation so that the two can vary independently"  
> 추상화와 구현을 분리해 둘을 독립적으로 사용함

이렇게 추상화와 구현을 분리하면 독립적으로 다양성을 가질 수 있게 되는데, 이는 둘 간의 지속적인 종속 관계를 피할 수 있게 한다.  
이를 통해 확장성이 커지기도 하며, 구현 세부 사항을 사용자에게서 숨길 수 있다.

### Composite

> describes a group of objects that are treated the same way as a single instance of the same type of object.  
> 객체들의 집합을 동일한 객체 타입의 한 인스턴스로 표현

- 부분-전체 구조로 여러 객체들을 트리 구조로 모아서 표현(소유 개념을 표현)
- 0개, 1개 혹은 그 이상의 객체를 묶어 하나의 객체로 이용할 수 있다.

파일-디렉토리 구조를 생각해보면, 파일은 그 자체로 파일이지만, 디렉토리는 파일을 포함할 수도 있고 (다른)디렉토리도 포함할 수가 있다.  
이렇게 여러 클래스가 큰 틀에서는 같은 요소에 속하지만 그 안의 어떤 클래스가 자기 자신 또는 다른 클래스를 가지는 구조를 의미한다.

### Decorator

> allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.  
> 주어진 상황 및 용도에 따라 어떤 객체에 책임을 덧붙이는 패턴

- 기존 객체의 메서드에 새로운 행동을 추가하거나 오버라이드 할 수 있다.

각각의 기능을 담당하는 클래스와 이 기능을 적용할 클래스를 분리하여 필요에 따라 동적으로 기능을 적용하는 구조를 의미한다.

이는 주요 기능에 추가적인 기능을 넣거나 뺄 때 사용하게 된다.

### Facade

> an object that serves as a front-facing interface masking more complex underlying or structural code  
> 복잡한 구조 코드에 대한 간략화된 인터페이스를 제공하는 객체

- 많은 분량의 코드에 접근할 수 있는 단순한 인터페이스를 제공한다.

### Proxy

> a class functioning as an interface to something else  
> 다른 무언가를 해주는 인터페이스

어떤 클래스에 접근해 주요 기능이 수행되기 전에, 부가적인 전처리 단계를 수행해주는 구조를 짤 때 사용된다.

이는 다양한 분야에서 사용이 되는데(ex. 네트워크) proxy 라는 이름에서 알 수 있듯이 각 분야에 대해 그러한 작업들을 수행한다.

- 접근 조절, 비용 절감, 복잡도 감소를 위해 접근이 힘든 객체에 대한 대역을 제공

---

References :  
https://en.wikipedia.org/wiki/Structural_pattern  
https://en.wikipedia.org/wiki/Adapter_pattern  
https://en.wikipedia.org/wiki/Bridge_pattern  
https://en.wikipedia.org/wiki/Composite_pattern  
https://en.wikipedia.org/wiki/Decorator_pattern  
https://en.wikipedia.org/wiki/Facade_pattern  
https://en.wikipedia.org/wiki/Proxy_pattern

> 소프트웨어 공학을 학습하면서 정리한 포스트 입니다.  
> 잘못된 것이 있다면 댓글로 알려주세요!  
> 감사합니다 :)
