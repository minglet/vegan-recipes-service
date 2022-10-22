import csv
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from nltk.stem import WordNetLemmatizer
import nltk
import string
# nltk.download()

# 데이터 로드
df = pd.read_csv('./add_cluster_label.csv')

# 텍스트 전처리 : 표제어 추출
remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)
lemmar = WordNetLemmatizer()

def LemTokens(tokens):
    return [lemmar.lemmatize(token) for token in tokens]

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))

# Tf-idf 벡터화
tfidf_vect = TfidfVectorizer(tokenizer=LemNormalize,
                            stop_words='english', ngram_range=(1,2),
                            min_df=0.05, max_df=0.50)

# 가장 비슷한 레시피 추출 함수
def get_top_similar_recipe(matrix_df, target_recipe):
    top_recipe_idx = matrix_df[target_recipe].values.argsort()[::-1][1]

    if np.isscalar(top_recipe_idx):
        top_recipe = matrix_df[target_recipe].index[top_recipe_idx]
        return top_recipe
    else:
        top_recipe_idx = top_recipe_idx[0]  # 가장 비슷한 영화가 2개 이상일 경우는 맨 앞 인덱스만 설정
        top_recipe = matrix_df[target_recipe].index[top_recipe_idx]
        return top_recipe

# 클러스터 별로 각 레시피당 가장 비슷한 레시피 추출 함수
recipes = []
def Similarity(cluster_num):
    cluster_n =  df.loc[df[df['cluster_label']==cluster_num].index,['ingredients_list']]

    # ingredients 문서의 feature vector 구하기
    ftr_vect_n = tfidf_vect.fit_transform(cluster_n['ingredients_list'])
    # cosine 유사도를 통해 유사도 수치 구하기
    title_sim_matrix = cosine_similarity(ftr_vect_n, ftr_vect_n)

    # 같은 cluster_num를 가진 모든 레시피 제목의 list
    cluster_n_title = df.loc[df[df['cluster_label'] == cluster_num].index, ['title']]
    titles = cluster_n_title['title'].values

    # 유사도 수치를 matrix로 만들기
    title_sim_matrix_df = pd.DataFrame(data=title_sim_matrix, index=titles, columns=titles)

    # 모든 레시피에 대해서 가장 유사도가 높은 레시피 구하기
    for title in titles:
        result = get_top_similar_recipe(title_sim_matrix_df, title)
        temp = []
        temp.append(title)
        temp.append(result)
        recipes.append(temp)

    return recipes

# 22개의 클러스터 별로 Similarity 함수 실행
for i in range(22):
    Similarity(i)

# list -> DataFrame 만들기
name = ['title', 'sim_recipe']
recipe_df = pd.DataFrame(columns=name, data=recipes)
print(recipe_df)

# csv 파일로 만들기
recipe_df.to_csv('similar_recipe_837.csv', index=False)