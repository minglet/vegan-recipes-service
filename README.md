# 🌱Just One Meal
"하루 한끼 채식으로 환경 보호에 동참하세요!"

식품별 온실가스 배출량에 대한 데이터 분석 결과,
소고기와 양고기, 그리고 유제품 순으로 온실가스를 많이 배출합니다.
따라서 육류 소비를 줄이기 위해 하루 한끼 채식을 함으로써,
일상 생활에서 환경 보호에 기여하기 위한 레시피 제공 서비스입니다.


## 1. 프로젝트 소개

### 사용한 데이터
  - [Vegan Recipes](https://www.kaggle.com/datasets/rodrigoazs/vegan-recipes): 비건 레시피 데이터  
  - [EDGARFoodEmissions](https://www.kaggle.com/datasets/amandaroseknudsen/edgarfoodemissions): 식품 시스템에서 배출되는 GHG의 글로벌 배출량 인벤토리
  

### 기술 스택

1. 프론트엔드
    - MUI (Material UI)
    - react
    - axios
    - recharts

2. 백엔드
    - TypeScript (언어)
    - jupyter notebook (IDE)
    - mongoDB (DB)
    - express 
    - nodeJS (Server)
    - Postman (IDE)
    - Lucidchart : ERD 작성 프로그램

### 웹서비스 개요

1. 회원 / 비회원 공통 기능

* 레시피 서비스를 제공합니다.
* 식재료를 검색해 원하는 레시피를 찾는 것이 가능합니다.

2. 회원 기능

* 원하는 레시피를 스크랩 해서 스크랩한 레시피들만 모아 보는 것이 가능합니다. 


## 2. 프로젝트 목표

#####  메인 목표

* 육식을 줄임으로서 일상 속에서 환경 보호를 실천합니다.
* 채식에 동참할 수 있도록 비건 레시피 정보 제공합니다.


## 3. 프로젝트 기능 설명
 
  - 비건 레시피 
  image.png

  - 재료별 검색 기능 
  image.png

  - 레시피 스크랩 기능 
  image.png


## 4. 프로젝트 구성도
  - [Just One Meal 와이어프레임](https://www.figma.com/file/r6mFOZSp9lTZD4vuxyUzBm/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0%3A1)


## 5. ERD
https://media.discordapp.net/attachments/1024485977068150805/1032911740565999666/Just_One_Meal_ERD.png?width=875&height=676



## 6. 프로젝트 팀원 역할 분담
| 이름   | 담당 업무                        |
| ------ | ------------------------------- |
| 권휘동 | 프론트엔드 개발 / 발표           |
| 이지혜 | 프론트엔드 개발                  |
| 전보경 | 백엔드 개발                      |
| 김민아 | 백엔드 개발 및 데이터 분석 / 발표 |
| 김혜주 | 백엔드 개발 |


**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정