## **1. 데모 영상**

![(https://ifh.cc/g/p0k9dY.jpg)]

👉 [영상 보러가기](https://ifh.cc/v/oppC60.mp4)

## **2. 프로젝트 소개**

- [마이라얼트립](https://www.myrealtrip.com/) 사이트 클론 프로젝트
- '국내 숙소' 카테고리를 한정으로 구현하였습니다.
- 배경으로 video태그를 사용하여 동영상 효과를 구현하였습니다.
- querystring을 이용해 필터링기능을 구현하였습니다.
- react library를 사용해 컴포넌트 형태로 다양한 기능(모달창, slider, carousel, calendar, rate 등)을 구현하였습니다.
- 카카오 API를 통한 소셜로그인 기능을 구현하였습니다.

### **1) 프로젝트 선정이유**

- 세세한 기능이 많은 사이트이다.
- 다양한 UI, 기능, 통신 등을 구현할 수 있어 성장에 도움이 될 것이라고 판단했다.

### **2) 개발 인원 및 기간**

- 개발기간 : 2022/07/04 ~ 2022/07/15
- 개발 인원

  - 프론트엔드(4명) : 김인태, 정현준, 조예지 , 장류광
  - 백엔드(2명) : 박민하, 정진관

- 담당파트
  - 김인태 : 로그인 회원가입 / 장바구니
  - 정현준 : 상세페이지
  - 조예지 : 검색 리스트 페이지
  - 장류광 : Nav / footer / Main 페이지
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/34-2nd-Fake-Trip-backend)

## **3. 적용 기술 및 구현 기능**

### **적용 기술**

- Front-End : HTML, Styled-component, Javascript , React , React Router, Slider, Carousel, antd, axios, Rangepicker, calender, dropdown

### **구현 기능**
#### 1. 검색창 구현
![Jul-23-2022 16-54-06](https://user-images.githubusercontent.com/100185602/189517838-9c3e8938-061b-4ed2-9669-8eb5b5eaa9bf.gif)

1) 검색 기능
 - input창이 onFocus일 때 모달창이 열리도록 구현.
 - 검색창에 입력한 값을 state에 저장
2) 날짜 선택: 캘린더 라이브러리를 이용해 구현
- 검색창 UI에 맞게 style값 조정
- 시작날짜와 끝날짜를 배열의 형태로 state에 저장
3) 인원수 선택
- 어른과 아이의 인원수를 각각 조정할 수 있도록 하고, 총 인원수를 state에 저장.
<br/><br/>

#### 2. querystring을 활용한 필터링 기능 구현
![Jul-24-2022 15-24-17](https://user-images.githubusercontent.com/100185602/189518368-8ad82413-053b-4578-9bcc-d5b4547192c5.gif)

- 숙소 카테고리, 가격, 호텔 등급, 호텔 내부시설 등을 선택할 수 있는 부분을 각각 구현 -> state에 저장
- 백엔드에서 넘겨준 end point를 query string으로 연결
<br/><br/>

### 프로젝트 회고록 주소
https://velog.io/@dumibell/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-myfaketrip


## **Reference**

- 이 프로젝트는 [마이리얼트립](https://www.myrealtrip.com/) 사이트를 참조하여 학습 목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
