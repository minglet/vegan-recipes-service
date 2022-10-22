import csv
from urllib.request import urlopen, Request
import urllib.parse
from bs4 import BeautifulSoup
import pandas as pd

# 파일 load : image가 있는 url csv파일
df = pd.read_csv('./img_url.csv')
df_url = df["img_url"]

# 빈 리스트 (url_list) 생성
url_list = [["urls"]]

# Beautifulsoup 이용해서 img_url 크롤링
for i in range(837):
    temp = []
    url = df_url[i]
    req = Request(url, headers={'User-Agent': 'Mozila/5.0'})
    html = urlopen(req).read()
    soup = BeautifulSoup(html, 'html.parser')

    # img src가 들어있는 class : here__img
    title = soup.find(class_='hero__img')
    img_url = title.attrs['src']

    temp.append(img_url)
    url_list.append(temp)
    print("완료: ", i)


# 리스트를 csv 파일로 만들기
f = open('crawling.csv', 'w', encoding='utf-8', newline='')
csvWriter = csv.writer(f)
for i in url_list:
    csvWriter.writerow(i)
f.close()

print("크롤링 완료")
