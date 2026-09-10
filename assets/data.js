/* ============================================================
   워크샵 사이트 설정 + 기본 데이터
   - 날짜/장소/인원/장보기 초기 목록은 여기서 수정하면 됩니다.
   - 공유 저장소(bins): 누구나 읽고 쓸 수 있는 JSON 저장소 ID.
     다른 저장소로 옮기려면 ID만 바꾸세요.
   ============================================================ */
window.WK_CONFIG = {
  title: "2026 하반기 SSU AICS 워크샵",
  subtitle: "1박 2일 · 15명 · 곤지암",
  // 워크샵 당일 (예: "2026-09-19"). 비워두면 D-day 표시가 숨겨집니다.
  date: "",
  meetTime: "12:00",
  // 공유 저장소 설정 -------------------------------------------------
  // provider: "kvdb" | "firebase" | "local"
  //  - kvdb    : https://kvdb.io 버킷 (무료, 로그인 없이 읽기/쓰기). bucket 값만 넣으면 끝.
  //  - firebase: Firebase Realtime Database 주소 (규칙에서 read/write true). 가장 안정적.
  //  - local   : 공유 안 함. 내 기기에만 저장 (테스트용)
  storage: {
    provider: "kvdb",
    pollMs: 15000,
    kvdb: { base: "https://kvdb.io", bucket: "9PNGYdjXrs8vFQW4uMo95C" },
    firebase: { databaseURL: "", root: "workshop" }
  },
  people: [
    "민경윤","이진수","이민우","김성우","정택수","이기원","장유석","방희태",
    "이상묵","정종호","전병수","최창현","오대성","이현행","류해원"
  ],
  // 엑셀 '차량' 칸 기준 기본 이동 정보 (본인이 수정 가능)
  defaultRide: {
    "민경윤": "🚗 운전 (방희태·오대성 동승)",
    "이진수": "🚗 운전 (류해원 동승)",
    "이기원": "🚗 운전 (김성우·이상묵 동승)",
    "장유석": "🚗 운전",
    "전병수": "🚗 운전 (이현행 동승)",
    "최창현": "🚗 운전",
    "방희태": "민경윤 차 동승",
    "오대성": "민경윤 차 동승",
    "류해원": "이진수 차 동승",
    "김성우": "이기원 차 동승",
    "이상묵": "이기원 차 동승",
    "이현행": "전병수 차 동승"
  },
  shoppers: ["장유석", "이기원"],
  shopperNote: "전병수: \"난 빼줘\" 🙅",
  places: {
    restaurant: {
      name: "동동국수 본점",
      category: "국수 · 육칼 맛집",
      address: "경기 광주시 곤지암읍 도척로 20 (곤지암읍 삼리)",
      phone: "031-798-4224",
      hours: "매일 09:00 ~ 21:00 (라스트오더 20:00)",
      rating: "4.2", reviews: "152",
      tags: ["단체석 있음", "근처 공터 주차", "카카오페이", "휠체어 이용 가능"],
      lat: 37.34960034757409, lng: 127.33573721780994,
      kakaoId: "1490392668",
      kko: "https://kko.to/L5QhZ-P3Ys",
      aiSummary: "다양한 국수 메뉴, 특히 육개장칼국수(육칼)와 명태막국수가 인기. 매장 넓고 쾌적, 기본 반찬은 셀프바.",
      menu: [
        { name: "육칼", price: 12000, hot: true, desc: "사골육수 얼큰 육개장 + 칼국수 + 밥까지" },
        { name: "명태막국수", price: 11000, hot: true, desc: "명태회 듬뿍, 새콤매콤 비빔막국수" },
        { name: "소고기육전 (한접시)", price: 15000, hot: true, desc: "국수랑 같이 먹으면 최고" },
        { name: "청양육칼", price: 12000 },
        { name: "육개장", price: 11000 },
        { name: "청양육개장", price: 11000 },
        { name: "진사골국수", price: 11000 },
        { name: "만둣국", price: 11000, desc: "고기 / 김치 / 반반" },
        { name: "김치말이국수 (냉)", price: 10000 },
        { name: "콩국수 (계절)", price: 11000 },
        { name: "교자만두 (6p)", price: 6000, desc: "고기 / 김치 / 반반" }
      ]
    },
    pension: {
      name: "오빌펜션",
      category: "펜션 · 단체룸 · 바베큐장",
      address: "경기 광주시 도척면 독고개길 311 (도척면 도웅리 262)",
      phone: "",
      tags: ["단체룸", "바베큐장 🔥", "식당에서 차로 약 7분 (2.9km)"],
      lat: 37.339038320769134, lng: 127.30590752146999,
      kakaoId: "1063567070",
      kko: "https://kko.to/LmliuY9siY"
    }
  },
  // 저녁/아침 메뉴 계획 (엑셀 '메뉴 및 장보기' 시트)
  mealPlan: {
    dinner: [
      { name: "BBQ 🔥", by: "장유석" },
      { name: "항정 김치찜" },
      { name: "오파게티", memo: "짜파게티 + 오징어짬뽕" },
      { name: "오뎅탕" },
      { name: "계란말이" },
      { name: "들기름 에그프라이" },
      { name: "닭도리탕", memo: "택수가 감자 못 먹어서 감자 빼고 고구마로!" },
      { name: "두부김치" },
      { name: "회", memo: "올푸드마트 사장님 회에 진심 (유석)" }
    ],
    breakfast: [
      { name: "콩나물 북어 해장국" },
      { name: "들기름 에그프라이" }
    ]
  },
  categories: [
    { id: "bbq",   label: "저녁 BBQ",   emoji: "🥩" },
    { id: "drink", label: "주류·음료",  emoji: "🍺" },
    { id: "snack", label: "간식·야식",  emoji: "🍿" },
    { id: "gift",  label: "상품·선물",  emoji: "🎁" },
    { id: "etc",   label: "기타",       emoji: "✨" }
  ],
  // 장보기 초기 목록 (엑셀 기준). 사이트에서 추가/수정/삭제 가능.
  seedItems: [
    { cat: "drink", name: "생수 500ml" },
    { cat: "drink", name: "소주", memo: "참이슬·진로·새로 섞어서" },
    { cat: "drink", name: "맥주" },
    { cat: "drink", name: "탄산음료", memo: "콜라, 사이다 등" },
    { cat: "bbq", name: "묵은지 5kg + 총각김치 1kg" },
    { cat: "bbq", name: "삼겹살·목살 5kg" },
    { cat: "bbq", name: "항정살 1.5kg", memo: "가능하면 통으로?? (병수 쏘굿)" },
    { cat: "bbq", name: "숯 5개" },
    { cat: "bbq", name: "계란 두 판 (특란)" },
    { cat: "bbq", name: "일회용품", memo: "종이컵, 숟가락, 젓가락, 그릇 등" },
    { cat: "bbq", name: "야채", memo: "마늘 필수! 상추, 고추, 깻잎, 무, 당근, 고구마" },
    { cat: "bbq", name: "짜파게티 묶음 1 + 오징어짬뽕 묶음 1", memo: "농심 · 오파게티용" },
    { cat: "bbq", name: "생물 오징어", memo: "양념해서 구울 예정" },
    { cat: "bbq", name: "콩나물 3봉" },
    { cat: "bbq", name: "두부 3모" },
    { cat: "bbq", name: "들기름 2병" },
    { cat: "bbq", name: "부탄가스" },
    { cat: "bbq", name: "냉동새우 or 칵테일새우", memo: "좀 큰 걸로" },
    { cat: "bbq", name: "마트 회", memo: "올푸드마트 사장님 회에 진심이심 [유석]" },
    { cat: "bbq", name: "북어", memo: "아침 해장국용" },
    { cat: "bbq", name: "햇반 한 박스" },
    { cat: "bbq", name: "닭도리탕용 닭 3마리 + 양념", memo: "감자 빼고 고구마" },
    { cat: "snack", name: "과자" },
    { cat: "snack", name: "아이스크림" },
    { cat: "snack", name: "컵라면" },
    { cat: "gift", name: "레크리에이션 선물", memo: "닌텐도??" }
  ]
};
