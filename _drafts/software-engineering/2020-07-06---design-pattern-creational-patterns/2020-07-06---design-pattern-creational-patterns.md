---
draft: true
title: \[Design Pattern\] 생성 패턴 - Creational Patterns
datetime: 2020-07-06 17:14:20
layout: post
category: Software-Engineering
tags: 
  - Design Pattern
  - Creational Pattern
description: ""
toc: true
---

## 생성 패턴

![creational patter class diagram](/assets/images/2020-07-06---design-pattern-creational-patterns/image1.png)

{:.image-caption}
*\<Creational Pattern class diagram\><small>(from Wikipedia)</small>*

생성 패턴(Creational Pattern)은 인스턴스를 만드는 절차를 추상화하는 패턴이다.  
객체를 생성, 합성하는 방법이나 표현하는 방법과 시스템을 분리해준다.  

- 클래스 생성 패턴 : 인스턴스로 만들 클래스를 다양하게 만들기 위한 용도로 상속 사용
- 객체 생성 패턴 : 인스턴스화 작업을 다른 객체에 넘김

## 생성 패턴 유형

디자인 패턴 중 `생성 패턴` 의 유형들에 대해 알아보자.

### 추상 팩토리

> provides an interface for creating related or dependent objects without specifying the objects' concrete classes.  
> 상세화된 서브클래스를 정의하지 않고도 서로 관련성이 있거나 독립적인 여러 객체의 군을 생성하기 위한 인터페이스를 제공  

추상 팩토리(Abstract Factory)는 여러 객체가 하나의 클래스 내에서 선언될 수 있도록 도와준다.

_예시 : 클래스가 직접 객체를 생성하는 것이 아니라 팩토리 객체로부터 필요한 것을 요청하는 경우_

이는 관련된 제품들 사이의 일관성을 유지하면서 제품군을 쉽게 대체할 수 있고, 구체적인 클래스를 분리하여 인터페이스를 노출하도록 사용된다.

### 빌더

> separates the construction of a complex object from its representation so that the same construction process can create different representations.  
> 복잡한 객체를 생성하는 방법과 표현하는 방법을 정의하는 클래스를 별도로 분리하여 서로 다른 표현이라도 이를 생성할 수 있는 동일한 절차를 제공  

객체를 생설할 때 필요한 파라미터가 많은 경우 빌더(Builder)를 통해 파라미터의 의미를 명확히하여 생성하게 된다.

![builder uml class diagram](/assets/images/2020-07-06---design-pattern-creational-patterns/image2.png)

{:.image-caption}
*\<Builder UML Class Diagram\><small>(from Wikipedia)</small>*

_예시 : 파라미터가 많아서 예시 파악이 힘들 때 상세하게 표현하기 위한 경우_

### 팩토리 메소드

> allows a class to defer instantiation to subclasses.  
> 어떤 클래스의 인스턴스를 생설할지에 대한 결정을 서브클래스가 내리도록 허용  

객체를 생성하기 위해 인터페이스를 정의하지만, 어떤 클래스의 인스턴스를 생성할지에 대한 결정은 서브 클래스가 내리도록 한다.

인스턴스를 만들어내는 공장(factory)이 있고, 여기서 찍어내는 형식으로 생각할 수 있다.  

### 프로토타입

> specifies the kind of object to create using a prototypical instance, and creates new objects by cloning this prototype.  
> 기존의 인스턴스를 복제하여 새로운 객체를 생성

보통 프로토타입 객체의 clone 기능을 통해 인스턴스를 복제하게 되는데, 이렇게 생성한 인스턴스는 동일한 객체는 아니지만 내부의 데이터는 같은 값을 가지게 된다.

### 싱글톤

> ensures that a class only has one instance, and provides a global point of access to it.  
> 오직 하나의 클래스 인스턴스만을 갖도록 보장하고, 이에 대한 전역적인 접근점을 제공

유일한 인스턴스가 서브클래싱으로 확장되어야 하며, 사용자는 코드의 수정 없이 서브클래스의 인스턴스를 사용할 때

#### 활용

하나의 인스턴스를 사용하기에 메모리 낭비를 방지할 수 있고, 전역 인스턴스이기에 다른 클래스의 인스턴스들이 데이터를 공유할 수 있다.

#### 단점

싱글톤 인스턴스가 너무 많은 일을 하거나 많은 데이터를 공유할 경우 SOLID 원칙 중 SRP, OCP 에 위배되어 수정과 테스트가 어려워진다.

---

> 소프트웨어 공학을 학습하면서 정리한 포스트 입니다.  
> 잘못된 것이 있다면 댓글로 알려주세요!  
> 감사합니다 :)  
