캐나다 여행 웹앱 프로젝트 이어서 작업.

# 캐나다 여행 웹앱 프로젝트

## 프로젝트 목표
가족 여행을 위한 오프라인 여행 가이드 웹앱 제작

---

# 프로젝트 원칙

- Day1~Day8 구조는 변경하지 않는다.
- 체크리스트 구조는 변경하지 않는다.
- 새로운 기능은 별도 폴더에서 개발한다.
- Day 페이지에는 링크 버튼만 추가한다.
- 기존 디자인 스타일을 유지한다.
- 코드에는 학습용 주석을 충분히 넣는다.
- 답변은 코드 위주로 하고 긴 설명은 최소화한다.
- 긴 코드는 4~6부로 나누어 제공한다.

---

# 맛집 페이지 표준 (2026-08-02 확정)

모든 맛집 페이지는 아래 형식으로 통일한다.

1. 카테고리
2. 식당명
3. 평점
4. 한 줄 추천 설명
5. 대표 메뉴 / 가격 / 추천도
6. Google Maps 버튼(실제 링크)
7. ← 맛집 모음 버튼

Google Maps 버튼은 아래 형식을 사용한다.

```html
<a href="실제 Google Maps 링크"
   target="_blank"
   class="map-button">

    📍 Google Maps

</a>
```

---

# 완료

## Day
- Day1 ~ Day8 완료

## Checklist
- 완료

## Voucher
- 완료

## Restaurants (리뉴얼 완료)

- Calgary
- Granville Island
- Downtown (숙소 주변)
- English Bay

모든 페이지에
- 한 줄 추천 설명
- Google Maps 버튼
- 동일한 카드 디자인 적용 완료

---

# 작업 기록 (2026-08-03)

## 완료

### 트래킹 상세 페이지 완료
- Emerald Lake
- Sunshine Meadows (4개 코스 구성)
- Grassi Lakes
- Marble Canyon
- Highway 93 Scenic Stops

# 코딩 스타일

- 기존 파일 구조 유지
- CSS는 기존 스타일 최대한 재사용
- HTML은 주석 포함
- 디자인 통일
- 복붙하기 쉽게 코드 제공
- 긴 코드는 여러 부로 분할

  ## 다음 작업

### 여행도구 > 지도(Map)

Google My Maps를 활용하여 여행 전용 지도를 제작한다.

예정 내용
- Google My Maps 사용법 익히기
- 여행 일정별 레이어 구성
- 관광지, 숙소, 식당, 주차장, 마트 등 분류
- 동선 및 이동 경로 정리
- 웹앱(Map 메뉴)과 연동 방식 검토






  voucher/images/ 파일명

icn-cgy-seyoung.jpg
icn-cgy-seoyun.jpg

cgy-yvr-seyoung.jpg
cgy-yvr-seoyun.jpg

yvr-icn-seyoung.jpg
yvr-icn-seoyun.jpg

rental-voucher.jpg

moraine-voucher.jpg

gondola-voucher.jpg

cruise-voucher.jpg