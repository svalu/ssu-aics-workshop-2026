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

## 공유 저장소 (인원체크 · 장보기 데이터)
`assets/data.js`의 `storage.provider`로 선택합니다. 어느 쪽이든 로그인 없이 누구나 읽고 쓰고, 15초마다 자동 새로고침됩니다.
연결이 안 될 때는 내 기기에 저장해 두고, 연결되면 자동으로 올립니다.

| provider | 설명 | 설정 |
|---|---|---|
| `kvdb` (기본) | [kvdb.io](https://kvdb.io) 무료 버킷 | `storage.kvdb.bucket` 에 버킷 ID |
| `firebase` | Firebase Realtime Database (가장 안정적) | `storage.firebase.databaseURL` 에 DB 주소, 규칙 read/write true |
| `local` | 공유 안 함, 내 기기만 (테스트용) | – |

kvdb.io 버킷은 만든 이메일을 한 번 인증해야 쓰기가 열립니다: https://kvdb.io/login 에서 이메일 입력 → 메일의 링크 클릭.
새 버킷 만들기:

```bash
curl -d "email=you@example.com" https://kvdb.io
```

배포는 `deploy.ps1` (사전에 `gh auth login`).

## 로컬에서 보기

```bash
python -m http.server 8080
```

브라우저에서 http://localhost:8080 접속.
