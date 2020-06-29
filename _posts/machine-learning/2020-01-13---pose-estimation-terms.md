---
draft: false
title: "Pose Estimation 관련 용어 정리"
date: 2020-01-13 11:00:03
path:       "/machine-learning/2020-01-13---pose-estimation-terms/2020-01-13---pose-estimation-terms/"
category: Machine Learning
tags: 
    - Machine Learning
    - Pose Estimation
    - Terms
description: "Pose Estimation 논문 및 자료들을 학습하고 자주 나오는 용어들을 간단히 정리한 포스트입니다."
toc: true
---

Pose Estimation 관련하여 자주 나오는 용어들에 대해 간략히 정리하고 틈틈히 상기할 수 있도록 해보자.

## Model

__Hourglass Network__  

- 모래시계 모양을 가진 구조의 network
- pose estimation 에 있어서 backbone network 중 하나를 이룬다.

__Bottom-up approach__  

- = Part-based approach

__Top-down approach__  

- = Two-step approach

## Performance

__MOTA__ : Multi-Object Tracking Accuracy

__mAP__ : mean Average Precision

__Precision__ : 분류기의 성능평가지표로 사용하는 정밀도를 의미한다.  
수식으로는 다음과 같다.  

$$
precision = {TP \over TP + FP}
$$

즉, 참이라고 분류한 것 중 실제 참의 비율이다.  
= How many selected item's are relevant

__Recall__ : 마찬가지로 분류기의 성능평가지표에서 재현율을 의미한다.  
수식으로는 다음과 같다.

$$
recall = {TP \over TP + FN}
$$

즉, 실제 참인 것들 중 참이라고 분류한 것의 비율이다.  
= How many relevant item's are selected.

__F1 Score__ : F1 Score 는 위의 precision 과 recall 의 조화평균으로써, 데이터 label 이 불균형 구조일 때, 모델의 성능을 정확하게 평가할 수 있다고 한다.  
수식으로는 다음과 같다.

$$
F1\ score = 2 \times { Precision \times Recall \over Precision + Recall}
$$

즉, 단순 조화평균임을 확인할 수 있다.

__FLOPS__ : FLoating point Operations Per Second  
    초당 부동소수점 연산이라는 의미로 1초동안 수행할 수 있는 부동소수점 연산의 횟수를 기준으로 한다.  
    이는 컴퓨터 하드웨어 관점에서의 Computing power 를 나타내는데 주로 쓰이게 되는데, machine learning 에서 하드웨어의 효율을 계산하기 위에서 종종 사용된다.  
    이 때, GFLOPS(Giga) = BFLOPS(Billions) 를 많이 쓴다.

## Metric

__PCK__ : Detected-joint is considered correct if the distance between the predicted and the true joint is within a certain threshold.  
즉, 특정 threshold 보다 detected-true 간의 차이가 작다면 correct 로 간주하는 평가 지표이다.  
기본적으로 PCK @ 0.2 는 threshold 가 0.2 * torso diameter 로써, 여기서 torso 는 사람의 몸통(팔다리를 제외한 몸 부분)이다.

__PCKh @ 0.5__ : threshold = 50% of the head segment length(head bone link)  
threshold 로써 몸통이 아닌 머리 부분의 길이를 사용한 변형 평가 지표이다.  
보통 PCKh @ 0.5 를 많이 사용하는 추세로 보인다.  

## Dataset

__COCO__ : Common Object in COntext 로 일상생활에서 보여지는 물체들을 데이터셋으로 구성해놓은 것이다.  
[http://cocodataset.org/#home] 에서 자세한 것을 확인할 수 있으며, _Pose Estimation_ 에서는 keypoints dataset 을 이용한다.  
_COCO dataset_ 의 평가지표는 _AP_ 를 사용하는데, 여기서 그냥 _mAP_ 를 사용하는 것이 아닌 다음과 같은 지표를 사용한다.  

- AP@\[.5:.95\] : IoU 의 threshold 를 0.5 부터 0.95 까지 0.05 의 간격으로 달리 줬을 때의 AP 들의 평균을 의미한다.
- AP@0.5 : IoU 의 threshold 가 0.5 일 때 이다.
- AP small, medium, large : object 의 area 크기에 따른 평가 방법이다. 각각 $area \lt 32^2$, $32^2 \lt area \lt 96^2$, $area > 96^2$ 를 의미한다.

## ETC

