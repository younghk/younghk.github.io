---
draft: false
title: Graph Neural Networks 2
date: 2019-12-14 12:53:57
layout: post
path:       "/machine-learning/2019-12-14---graph-neural-networks-2/2019-12-14---graph-neural-networks-2/"
category: Machine Learning
toc: true
---

## Graph Pooling  

- Global Pooling : summarize graph into fixed-size representation  
  ![global pooling](/assets/images/2019-12-14---graph-neural-networks-2/image1.png)  
- Hierarchical Pooling : Learn hierarchical representation  
  ![hierarchical pooling](/assets/images/2019-12-14---graph-neural-networks-2/image2.png)

### Global Pooling  

- Simple Readout : Average / Max / Min / ...  
  ![simple readout](/assets/images/2019-12-14---graph-neural-networks-2/image3.png)  
- Neural Networks for Readout : GG-NN / Set2Set / SortPool  
  ![nn for readout](/assets/images/2019-12-14---graph-neural-networks-2/image4.png)  
  SortPool 은 각 node 에 대해 feature 별로 sorting 한 후 몇 개의 node 만 선택하는 방법
  
### Hierarchical Pooling  

- DiffPool(Differentiable Pooling) : softly assign node from bottom to higher  
  ![diffpool](/assets/images/2019-12-14---graph-neural-networks-2/image5.png)  
- gPool(Graph Pooling)  
  ![gpool](/assets/images/2019-12-14---graph-neural-networks-2/image6.png)  
- SAGPool(Self-Attention Graph Pooling)  
  ![sagpool](/assets/images/2019-12-14---graph-neural-networks-2/image7.png)  
  - 여기서 $\tilde{A} \in \mathbb{R}^{N\times N}$ 는 Adjacency matrix  
  - $\tilde{D} \in \mathbb{R}^{N\times N}$ 는 degree matrix of $\tilde{A}$  
  - $X \in \mathbb{R}^{N\times F}$ 는 N 개의 node 의 F dimensional feature 를 가진 input graph feature  
  - SAGPool 에서 parameter 는 $\Theta_{att} \in \mathbb{R}^{F \times 1}$ 뿐이다.  
  - pooling 결과는 graph feature 와 topology 에 기반하며, graph convolution 을 이용해 self-attention score 를 얻는다.  
  - node selection method 은 다양한 크기와 구조의 입력에 대해서도 입력 그래프의 노드 일부를 유지할 수 있도록 함.
  - 
- EdgePool  
  ![edgepool](/assets/images/2019-12-14---graph-neural-networks-2/image8.png)

## Scene graph learning  

![scene graph learning pipeline](/assets/images/2019-12-14---graph-neural-networks-2/image9.png)

Visual relationships of an image as a graph :  
Predicate detection <=> Object detection

Multi-relational tensor 를 사용함.  
\[\[Object, Predicate, Object \]\] 로 쌍을 만들어 냄

Ground Truth 를 어떻게 해야하는지에 대한 고민이 많이 필요하다.  
(이렇게 저렇게 여러가지 방향으로 해석이 가능하므로)

## Graph Transformer Networks(GTN)

- Spatial Transformer Networks  
  ![spatial transformer network](/assets/images/2019-12-14---graph-neural-networks-2/image10.png)

- meta-path : multi-hop 관계를 새로운 path 로 보고 새롭게 네트워크를 구성할 수 있게 함.  
  ![meta path](/assets/images/2019-12-14---graph-neural-networks-2/image11.png)

- graph transformer layer : learn a soft selection of edge types and composite relations for generating useful multi-hop connections(meta-paths)  
  ![graph transformer layer](/assets/images/2019-12-14---graph-neural-networks-2/image12.png)
  위의 예제는 2-hop relationship 을 보고 있는 것이다. 마지막에는 meta-path 만 나타난다.

이 때, meta-path 의 길이가 늘어날 수록(hop 이 많아질 수록) 문제점이 발생할 수 있다.  

> 경로가 중복이 되는 문제일까?  
