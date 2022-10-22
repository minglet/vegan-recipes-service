## 데이터 분석
---      
데이터 구성       
- 식품 별 온실가스 배출량
- 레시피 재표 유사도 평가

## 데이터 소개 및 목표
---
### 1. 식품 별 온실가스 배출량   
식품이 생산부터 소비자까지 가는 로드별로 온실가스 배출량을 그래프로 보고, 다른 식품에 비해 육류의 온실가스 배출량을 비교하고자 한다.    

데이터 분석 관련 파일
- 데이터 : Food Product Emission (Kaggle)   
- 분석 파일 : FoodEmissions_team11.ipynb   
- 결과 데이터 : output_df.csv



### 2. 레시피 재료 유사도 평가
레시피의 재료를 문서 유사도 평가를 통해 비슷한 재료를 사용하는 레시피를 추천해주고자 한다.

데이터 분석 관련 파일
- 데이터 : vegan_recipes (Kaggle)
- 분석 파일 
    - 1_Kaggle recipe data 전처리.ipynb
    - 2_이미지 url 컬럼 추가 (크롤링 파일).ipynb
    - 3_유사도 검사 전처리.ipynb
    - 4_문서 유사도 데이터 분석.ipynb
    - 5_최종파일 제작.ipynb
    - crawling.py
    - clustering.py
- 결과 데이터 : rec_recipes_837.csv



