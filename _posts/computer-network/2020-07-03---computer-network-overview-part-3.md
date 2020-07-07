---
draft: false
title: Computer Network Overview Part 3
datetime: 2020-07-03 13:42:33
layout: post
category: Computer-Network
tags:
  - IP Routing Protocol
  - TCP Connection
  - Flow Control
  - Congestion Control
description: "컴퓨터 네트워크를 개략적으로 공부하고 정리한 포스트 입니다. IP Routing Protocol, TCP Connection, Flow Control, Congestion Control 등을 다룹니다."
toc: true
---

지난 [포스트](https://younghk.github.io/computer-network/computer-network-overview-part-2/)에 이어서 컴퓨터 네트워크와 관련해 개략적으로 알아보자.  
이번 포스트에서 다룰 것들은 다음과 같다.

## IP Routing Protocol

routing protocol 은 간단하게 설명하면 network topology information 에 대해 routing table 을 작성하는 것이라고 볼 수 있다.  
이를 통해 나중에 forwarding 될 때 경로로 사용하도록 한다.

핵심적으로는 hop-by-hop routing 이 진행되게 되고, 두 가지 알고리즘에 대해 학습해보자.

### Distance Vector Algorithm

거리와 방향을 함께 가지고 있는 방법으로 예를 들면 R3 입장에서 R2->R1 으로 패킷을 전송하고 싶으면 나를 거칠 때 8만큼의 cost 가 필요하다고 알려주는 방식이다.  
이를 위해 routing table 에는 best distance 와 the route(next hop) 을 기록하고 있게 된다.

간단한 예를 보면 다음과 같다.  
C 에서 각 행을 가는데 각 열을 거쳐서 가는 cost 를 구하면

![distance vector algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image56.png)

그런데 여기서 link cost 가 변경될 수도 있다.

![distance vector algorithm link cost change](/assets/images/2019-12-11---computer-network-overview-part-2/image57.png)

위에서 볼 수 있듯이 지속적으로 table 이 수정되게 되는데, 이는 z->x 로 가상의 경로(cost=5)가 생긴줄 착각해서 나타나는 현상이다.  
이 현상의 근본적인 원인은 어디를 거쳐서 해당 cost 가 필요한지를 모르기 때문이다.(거리 + 방향만 있을 뿐)

실제 routing table 이 어떤식으로 작성되는지 아래의 예제를 통해 확인해보자.

![distance vector algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image58.png)

여기서 처음으로 router A 에 대해서는 다음과 같이 진행된다.

![distance vector algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image59.png)

처음 router B 에 대해서 다음과 같이 진행된다.

![distance vector algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image60.png)

처음 router C 에 대해서 다음과 같이 진행된다.

![distance vector algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image61.png)

두 번째로 다시 router A 에 대해서 다음과 같이 추가적으로 진행된다.

![distance vector algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image62.png)

쉽게 채워볼 수 있을 것이다.

### Link-State Algorithm

_Distance Vector Algorithm_ 은 잠깐 보았던 경로 착각의 문제가 있었다.  
이를 해결할 수 있는 방법인 _Link-State Algorithm_ 에 대해 알아보자.

이는 구조적으로 현재 노드에 대해서 tree 를 구성하게 되며, shortest path algorithm(e.g., Dijkstra's algorithm) 을 활용하게 된다.

![link state algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image63.png)

![link state algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image64.png)

![link state algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image65.png)

![link state algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image66.png)

![link state algorithm example](/assets/images/2019-12-11---computer-network-overview-part-2/image67.png)

최종적으로 router A 에 대해서 위와 같은 tree 가 만들어지게 된다.

## TCP Connection

일전에 배웠던 TCP 를 잠깐 복습해보고 가자.  
TCP 는 transparently reliable 한 통신을 할 수 있도록 해주는 protocol 로, packet 손실, 중복, flow / congestion control 등의 이슈를 다른 쪽(application programmer)에서 신경쓰지 않도록 해준다.

통신은 socket 을 통해 이루어지는데, TCP 는 stream socket 을 이용한다.

여기서 Connection 이란 무엇을 의미할까?  
이는 application 의 socket 이 connected 된 상태를 의미하는데, 이것은 socket address 의 쌍(host, peer)으로 정의된다.

![what is a connection](/assets/images/2019-12-11---computer-network-overview-part-2/image68.png)

다시 한 번 상기하자면, 서버에 대한 정보는 well-known 이라 쉽게 알 수 있는 정보이다.

### Socket

통신에 쓰이는 socket 에 대해 간략히 알아보자.  
다음은 socket 과 관련된 함수들이다.

- Create  
  소켓의 형식에는 PF-INET(protocol family), AF-INET(address family) 두 가지가 있다. 이는 소켓이 디자인될 때 하나의 protocol 이 아니라 여러 protocol 을 지원할 수 있도록 하려했기 때문이다. 그러나 뭘 써도 상관은 없는 요즘이다.
- Bind  
  서버측에서 port 를 random 하게 생성할텐데 client 가 아는걸로 나의 주소와 port 를 일치시켜줘야 client 입장에서 통신이 가능해진다. 이를 위한 것이 _Bind_ 작업이다.  
  Bind 함수를 이용해 특정 IP 와 포트 번호를 연결할 수 있게 된다.  
  이 때, 서버에서만 bind function 을 호출하게 되는데, client-server 통신 모델에서 항상 서버 프로그램이 먼저 수행되고 있어야 하고, 서버는 socket 을 호출하여 통신에 사용할 소켓을 하나 만들고 이때 return 된 소켓 번호와 자신의 소켓 주소를 bind 로 연결시키게 된다.  
  서버에서 bind 가 필요한 이유는 소켓 번호는 응용 프로그램이 알고 있는 통신 창구 번호이고, 소켓 주소는 네트워크 시스템(TCP/IP)이 알고 있는 주소이므로 이들의 관계를 묶어 두어야 응용 프로세스와 네트워크 시스템 간의 패킷 전달이 가능하기 때문이다.
- Connect  
  이 함수는 client 가 서버에 연결을 요청할 때 사용하는데, 서버측에서는 이 요청을 listen 으로 기다리고 있다.
- Accept  
  서버가 client 의 요청을 수락하게 된다.  
  서버는 접속 요청을 허락하고 client 와 통신하기 위해 커널이 자동으로 소켓을 생성하도록 한다.  
  이 수락 요청의 과정은 3-way handshake 로 진행된다.

### Layout of TCP header

TCP 는 손실 없이 packet 을 받게 되고, 이를 reliable 한 통신이라고 하게 된다.  
이러한 reliable 한 통신을 위해 sequence number 와 acknowledgment number 가 필요하다.

![layout of tcp header](/assets/images/2019-12-11---computer-network-overview-part-2/image69.png)

TCP Header 는 위와 같이 구성되게 된다.

- Sequence Number

  ![sequence number](/assets/images/2019-12-11---computer-network-overview-part-2/image70.png)

  통신을 하는데 있어서 sequence number 는 connection 때 미리 만들게 된다. 이 때 보통 추적을 피하기 위해 random 으로 생성하게 되고, 각각의 Initial Sequence Number(ISN) 을 유지하게 된다.

- Acknowledgement Number

  ![acknowledgement number](/assets/images/2019-12-11---computer-network-overview-part-2/image71.png)

  ACK 는 receiver 가 어떤 packet 을 받은 다음에 받아야할 packet 을 알리는 것으로, packet 1,2,3,4 를 받았다면 ACK=5 를 sender 에게 보내게 된다.

- TCP Header Length

  ![tcp header length](/assets/images/2019-12-11---computer-network-overview-part-2/image72.png)

  TCP header length 는 IP header 에서 처럼 32-bit(4 bytes)로 표현이 되며 최솟값은 5이다. 이 경우에는 어떠한 TCP Option 도 존재하지 않는 경우이다.

- Control Flags
  - 0 : FIN = Terminate the connection
  - 1 : SYN = Synchronize sequence numbers
  - 2 : RST = Reset the connection
  - 3 : PSH = Push the data
  - 4 : ACK = The value in the acknowledgement field is valid
  - 5 : URG = The value in the urgent pointer field is valid
    - 이는 남는 위치에 특정한 data 를 넣은 후 tcp 에 알려주는 것이다. 이렇게 되면 원래 data flow 와 다르게 되는데 급한 경우에 사용되는 것이다.

### 3-Way Handshake

이제 connection 을 연결하는 3-way handshake 에 대해서 간략하게 살펴보자.

![3 way handshake](/assets/images/2019-12-11---computer-network-overview-part-2/image73.png)

1. client 는 server 에게 접속 요청 메시지(SYN)를 전송하고 SYN_SENT 상태
2. server 는 SYN 요청을 받고 client 에 요청을 수락(SYN+ACK) 하고 SYN_RECEIVED 상태
3. client 는 server 에게 수락 확인(ACK)을 보내고 server 는 ESTABLISHED 상태

아주 간단하다!

### 4-Way Handshake

connection 을 해제하는 과정도 살펴보자.

![4 way handshake](/assets/images/2019-12-11---computer-network-overview-part-2/image74.png)

<small>필기..ㅎㅎ</small>

1. 최초에 client-server 모두 ESTABLISHED 상태
2. client 에서 FIN=1 을 보내고 소켓의 FIN_WAIT_1 상태로 변경
3. server 에서 FIN=1 을 받고 CLOSE_WAIT 상태로 변경, ACK 를 보내고 client 가 이를 수신하면 FIN_WAIT_2 상태로 변경
4. server 에서 연결 종료를 위해 FIN 을 보냄, LASK_ACK 상태로 변경
5. client 에서 FIN 을 받고 TIME_WAIT 상태로 돌입, ACK 를 전송
6. server 에서 마지막 ACK 를 받으면 CLOSED 상태로 연결 종료, 시간이 지나면 client 도 CLOSED 상태로 연결 종료

## Flow Control

Flow Control 은 쉽게 말해 router 는 멀쩡한데 end node 에서의 처리가 느려서 송신 속도를 줄이도록 하는 것이다.  
이는 TCP Sliding Window 로 조절되는데, 이 window size 만큼의 패킷을 한 번에 보낼 수 있게 된다. 이 사이즈가 조절되면 한 번에 전송되고 있는 패킷의 양이 바뀌게 되고, 이로 인해 flow control 이 동작하게 된다.

### Sliding Window

이 _sliding window_ 는 sender 와 receiver 두 군데에서 모두 운용된다.

![sliding window](/assets/images/2019-12-11---computer-network-overview-part-2/image75.png)

window size=7 인 상황에서 sender-receiver 가 각 패킷을 전송하면서 일어나는 window 의 변화를 위에서 확인해 볼 수 있다.

![example operation](/assets/images/2019-12-11---computer-network-overview-part-2/image76.png)

이번에는 실제 패킷을 보면서 확인해보자.

- packet 181 : win=0, 즉 더 보낼 수 없다는 것이다.
- packet 182 : win=22656 으로 더 보낼 수 있게 되었다는 것이다.
- packet 183-197 : 더 보낼 수 있는 만큼 packet 을 쪼개서 전송하고 있다.
  - 여기서 총 보내게 된 Bytes 는 20736B 이다. 따라서 남은 window size 는 1920B 이다.
    ![example operation](/assets/images/2019-12-11---computer-network-overview-part-2/image77.png)
- packet 198 : 여기서 Ack=4109684389 로 받은 것이 바로 처음 packet 183 을 받았다는 것을 의미하게 된다.(다음을 저부분서부터 원하는 것이니까) 이는 앞서 설명했듯이 client/server seq. no. 이 다르기 때문이다. 또한 win=22272 이므로 4109684389 에서 부터 22272B 만큼 전송을 할 수 있다는 의미다.
  ![exmample operation](/assets/images/2019-12-11---computer-network-overview-part-2/image78.png)

### Silly Window Syndrome

이러한 sliding window 기법을 이용할 때의 문제점이 무엇이 있을까?

![silly window syndrome](/assets/images/2019-12-11---computer-network-overview-part-2/image79.png)

sender 입장에서 data 를 빠르게 생성할 경우에 위와 같이 하나씩 window 가 이동하는 모습을 볼 수 있게 된다. 즉 작은 packet 이 하나씩 전달되어 sliding window 가 의미가 퇴색되게 되는 경우이다.

- Nagle's Algorithm  
  최대한 한 번에 많은 양을 보내도록 기다렸다가 보내는 방법이다.  
  이를 위해 Maximum Segement Size(MSS) 를 이용하고, MSS 보다 window 가 작으면 보내지 않거나, 너무 오래 window 를 기다리고 있으면(timer) 현재 window 크기 만큼 보내는 방법이다.  
  timer 는 서버가 보낸 data 가 있으면 언젠가 ACK 가 올 것이라고 가정하고 이를 시발점으로 생각해 시간을 재게 된다.

  이 때, receiver 는 receive window size 가 충분히 크지 않다면 0 을 보내다가 MSS 이상일 경우 제대로된 window size 를 알려주는 방식으로 해 줄 수 있다.

- Delayed Acknowledgement  
  receiver 가 packet 을 받고 나서 ACK 를 보내는데 여러 ACK 를 보내지 않고 효율적으로(적게) 보내는 방법이다. delayed ack 가 만료될 때까지 새로운 패킷을 받지 못하면 ACK 를 보내거나, 만료 전 새로운 packet 이 온다면 ACK 를 보내는 방식이다.  
  sender 측에서 Nagle's algorithm 을 쓰고 있을 경우 오래 기다리게 되는 경우가 생길 수 있다.

### Retransmissions in TCP

ACK 가 timeout 되거나 multiple ACKs(3 ACKs) 를 받게 될 경우 _retransmission_ 이 일어나게 된다. 어딘가에 문제가 생겼다고 생각하기 때문!

![receiving duplicate acks](/assets/images/2019-12-11---computer-network-overview-part-2/image80.png)

위의 도식은 중복된 ACK 를 수신하는 경우이다.  
이처럼 3개의 같은 ACK 를 받게 되면 해당 SeqNo 부터의 패킷을 재전송 하게 된다.  
아마도 손실되거나 유실되었다고 생각을 하게 되기 때문!

- Retransmission Timer :  
  적당한 기간의 timer 를 설정해서 ACK 가 안오는 경우에 다시 보내주도록 한다.

  ![rto](/assets/images/2019-12-11---computer-network-overview-part-2/image81.png)
  round-trip time(RTT)를 이용해 시간을 측정하고 이를 바탕으로 RTO(retransmission timeout) 값을 정한다.

  ![setting the rto value](/assets/images/2019-12-11---computer-network-overview-part-2/image82.png)
  RTO 를 정하는데 측정되는 RTT 값을 exponential moving average(EMA) 로 구해주게 된다.

  이 때, retransmission 된 패킷의 경우에 RTT 값을 update 하지 않도록 해서 모호함을 제거하는 방식이 Karn's algorithm 이다.

## Congestion Control

간단하게 _Congestion Control_ 에 대해 설명하면, 네트워크가 너무 혼잡해서 보내는 양을 줄여야할 때 필요한 것이다.  
<small>_Flow Control_ 과 주의해서 구분할 수 있도록 하자!</small>

여기서는 _Congestion Window_ 가 이용되게 된다.

![tcp congestion window](/assets/images/2019-12-11---computer-network-overview-part-2/image83.png)

위와 같이 생각을 할 수 있으며 network 의 상황을 보고 sender 가 알아서 바꾸게 된다.

### TCP AIMD & Slow Start

congestion window 의 크기는 시간이 지날 수록 증가하게 되는데, drop 이 일어날 경우(timeout or 3 duplicated ACKs) window 의 크기를 반으로 줄이게 된다.

timeout 이 일어날 경우 window 크기를 엄청 줄인다(=1)

TCP Slow Start 는 window size 가 지수적으로 증가하는 것을 의미한다.

### TCP Congestion Policy

![tcp congestion policy](/assets/images/2019-12-11---computer-network-overview-part-2/image84.png)

policy 는 4가지가 있다.

1. slow start : 최초에 지수적으로 증가
2. congestion avoidance : 천천히 window 가 커짐
3. fast retransmission : 3-ACK 가 발생했을 때 window 사이즈를 반으로 줄이고 재전송하게 되는 것이다.
4. fast recovery : 반으로 깎인 상태에서 다시 linear 하게 증가하는 모습을 의미한다.

위의 푸른색 영역이 slow start, 노란색 영역이 congestion avoidance 가 된다.

### TCP Window Control - Tahoe / Reno

TCP congestion window 를 control 하는 방식은 여러 개가 있는데 그 중 2개를 살펴보자.

- Tahoe :
  - initial threshold 크게 잡음
  - timeout 이 발생하면 window 를 아주 작게(=1) 한다.
  - 3-ACK 의 경우 fast retransmit 을 실행한다. 이 때 threshold 는 절반으로 줄인다. window 를 아주 작게(=1)로 한 뒤 threshold 까지 slow start 이후 linear 하게 증가 시킨다.
    ![tahoe](/assets/images/2019-12-11---computer-network-overview-part-2/image85.png)
- Reno :
  - 3-ACK 가 발생할 경우 fast retransmit 을 실행한다. window 를 반으로만 줄이고 linear 하게 증가
  - timeout 의 경우 window 크기를 아주 작게(=1) 하고 slow start 이후 fast recovery(linear 한 증가) 에 진입한다.
    ![reno](/assets/images/2019-12-11---computer-network-overview-part-2/image86.png)

<small>threshold 가 반으로 되는 기준점은 timeout 또는 3-ACK 가 발생한 시점의 window size 라고 보면 된다.</small>
