# 2026 하반기 SSU AICS 워크샵 사이트 🏕️

모바일 우선 3페이지 정적 사이트. GitHub Pages로 배포.

| 페이지 | 내용 |
|---|---|
| `index.html` | 집결 식당(동동국수 본점, 12:00) · 메뉴판 · 숙소(오빌펜션) · 지도/길찾기 |
| `people.html` | 15명 인원체크. 각자 도착 시간·이동 방법 입력 (누구나 수정 가능) |
| `shopping.html` | 장보기 리스트. 구매 체크 · 담당자 지정 · 항목 추가/수정/삭제 |

## 설정 바꾸기
`assets/data.js` 한 파일만 수정하면 됩니다.

- `date`: 워크샵 날짜 (`"2026-09-19"` 형식) → 홈에 D-day 표시
- `meetTime`: 집결 시간
- `people`, `defaultRide`: 참석자, 기본 이동 정보
- `seedItems`: 장보기 초기 목록 (서버가 비어 있을 때 한 번만 사용)
- `places`: 식당/숙소 정보, 메뉴

## 공유 저장소
인원체크·장보기 데이터는 무료 JSON 저장소(extendsclass.com json-storage)에 저장됩니다.
로그인 없이 누구나 읽고 쓰며, 8초마다 자동 새로고침됩니다. 연결이 안 될 때는 내 기기에만 저장되고, 복구되면 자동으로 올라갑니다.

저장소를 초기화하거나 새로 만들려면:

```bash
curl -X POST -H "Content-Type: application/json" -d "{}" https://extendsclass.com/api/json-storage/bin
```

응답의 `id`를 `assets/data.js`의 `storage.bins`에 넣으세요.

## 로컬에서 보기

```bash
python -m http.server 8080
```

브라우저에서 http://localhost:8080 접속.
