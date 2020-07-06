---
draft: false
title: \[Design Pattern\] 디자인 패턴 개요
datetime: 2020-07-06 14:12:19
layout: post
category: Software-Engineering
tags: 
 - Design Pattern
description: "소프트웨어 공학에서 객체 지향 프로그래밍 설계를 할 때 자주 발생하는 문제들을 피하기 위해 사용되는 패턴인 디자인 패턴에 대해서 간략히 정리합니다."
toc: true
---

## 디자인 패턴이란

소프트웨어 공학에서 말하는 디자인 패턴이란 아래와 같다.  

> A software design pattern is a general, reusable solution to a commonly occuring problem within a given context in software design.

즉, `공통적으로 발생하는 문제를 해결하기 위한 재사용 가능한 솔루션` 이라고 볼 수 있다.  

위의 말은, 생각해보면 좋은 코드를 말하고 있다고 생각할 수 있다.  
설계가 잘 되어서 확장과 수정에 용이하며, 이는 유지 보수의 cost 가 적다는 말이기도 하다.  

현대의 코드들이 객체지향 코드를 지향하기 때문에 추구해야할 설계의 방향은

- 가독성
- 간결성
- 모호하지 않은 코드
- 하나의 메소드 내에서 한 가지의 기능을 수행
- DRY(Do not Repeat Yourself)
- 확장성
- ...

등등 다양하고 복잡하다.

디자인 패턴은 소프트웨어를 설계할 때 공통적으로 사용될 수 있는 유사한 부분들을 일컫는 것이고, 이에 따라 다양한 상황에서 다양한 방식이 적용될 수 있다.  

### SOLID 원칙(객체지향 5대 원칙)

과거부터(아마 80년대) 소프트웨어 설계 원칙에 대해 토론되어져서 하나로 정리된 5가지 객체지향 원칙에 대해 간단히 살펴보자.

#### SRP(Single Responsibility Priciple, 단일 책임 원칙)

> A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.  
> 한 클래스는 한 가지의 변경 이유만을 가진다.  
> 하나의 모듈은 하나의 액터에 대해서만 책임진다.  

클래스를 변경하기 위해 한 가지 이상의 이유가 있게 된다면, 그 클래스는 한 가지 이상의 책임을 가지고 있다고 볼 수 있고, 이런 것이 좋지 못하다는 의미이다.

#### OCP(Open-Closed Principle, 개방-폐쇄 원칙)

> Software entities ... should be open for extension, but closed for modification.
> 소프트웨어 개체는 확장에는 열려있고, 변경에는 닫혀 있어야 한다.

시스템을 확장하기 쉬우면서 변경으로 인해 시스템이 영향을 많이 받지 않도록 해야 한다. 이를 위해 시스템을 컴포넌트 단위로 분리하고, 저수준의 변경이 고수준에 영향을 미칠 수 없도록 의존성 계층 구조를 띄도록 해야 한다.

#### LSP(Liskov Substitution Principle, 리스코프 치환 원칙)

> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.

자식 클래스는 부모 클래스에서 가능한 행위를 수행할 수 있어야 하고, 파생 클래스를 만들 때의 상속 관계에 대해 올바르도록 설계해야 한다는 의미이다.

#### ISP(Interface Segregation Principle, 인터페이스 분리 원칙)

> Many client-specific interfaces are better than one general-purpose interface.
> 클라이언트는 자신이 이용하는 메서드에만 의존해야 한다.

클라이언트에서 사용하고 있지 않은 메소드가 변경이 되었을 때 해당 클라이언트에 영향을 주지 않도록 분리된 인터페이스를 사용해야 한다는 의미이다.

#### DIP(Dependency Inversion Principle, 의존 역전 원칙)

> One should depend upon abstractions, \[not\] concretions.
> 상위 수준의 모듈은 하위 수준의 모듈에 의존하지 않고, 둘 다 추상화에 의존한다.  

구체적인 사항에 의존하지 않고, 추상화에 의존하라는 의미이다.

---

_음,,, 잘 와닿지가 않는데,,,?_  

그렇다면 우선 큰 틀에서 디자인 패턴을 알아보기 위해 그 구조를 하나씩 살펴보자.

## 디자인 패턴 구조

아래는 목적에 따라 패턴을 나누어 본 것이다.

### Creational pattern(생성 패턴)

> Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
> 인스턴스를 만드는 절차를 추상화하는 패턴

- 객체를 생성/합성하는 방법이나 객체의 표현 방법과 시스템을 분리
- 1. 생성 패턴 시스템이 어떤 구체 클래스를 사용하는 지에 대한 정보를 캡슐화
- 2. 생성 패턴은 이들 클래스의 인스턴스들이 어떻게 만들고 서로 맞붙는지 완전히 가림

⇒ `무엇`이 생성되고, `누가` 이것을 생성하고, `어떻게` 생성되며, `언제` 생성할 것인지 결정하는데 유연성을 확보하게 됨

### Structural Pattern(구조 패턴)

> Ease the design by identifying a simple way to realize relationships among entities.  
> 개체들간의 관계를 파악해 더 큰 구조를 만드는 패턴

- 두 개의 객체를 묶어 하나의 인터페이스로 만들거나, 새로운 기능을 제공하는 패턴

### Behavioral Pattern(동작 패턴)

> Identify common communication patterns among objects and realize these patterns.
> 객체들간의 알고리즘이나 책임과 관련한 패턴

- 혼자 수행할 수 없는 작업을 여러 개의 객체로 분배하면서 객체 사이의 결합도를 최소화 하도록 함

### Concurrency Pattern(동시성 패턴)

> Deal with the multi-threaded programming paradigm.
> 멀티쓰레드 프로그래밍의 동시성을 위한 패턴

- 동시 실행의 경우 고려해야할 점들을 생각한 패턴
- 흔히 말하는 위의 세 패턴(생성, 구조, 동작)은 GoF 라 부르는 디자인 패턴이고, 동시성 패턴은 GoF 에 속하지는 않는다.

---

> 소프트웨어 공학을 학습하면서 정리한 포스트 입니다.  
> 잘못된 것이 있다면 댓글로 알려주세요!  
> 감사합니다 :)