const categories = {
    isFirst: true,
    update: {label: '업데이트', contents : []},
    system: {label: '시스템', contents : []},
    guideline: {label: '육성', contents : []},
    tip: {label: '팁', contents : []},
    child: {label: '차일드', contents : []},
    item: {label: '아이템', contents : []},
    pvp: {label: 'PVP', contents : []},
    raids: {label: '레이드', contents : []},
    ignition: {label: '이그니션', contents : []},
}
const levels = {
    isFirst: true,
    season: {label: '시즌 컨텐츠 편', contents: []},
    dejungja: {label: '데정자 편', contents: []},
    derini: {label: '데리니 편', contents: []},
    dechungnyun: {label: '데청년 편', contents: []},
}

const contents = [
    {seqno:2165371, level:'season', category: 'update', title: '[MAX의 알림] 4/9 점검전까지 해야할 일', author: 'CYTOMAX', summary: 'null', registered: '2020.04.06.'},
    {seqno:2151591, level:'dejungja', category: 'guideline', title: '신규 유저인데 어떻게 하면 좋을까요? ', author: '타각', summary: 'null', registered: '2020.03.15.'},
    {seqno:1552371, level:'dejungja', category: 'guideline', title: '데스티니 차일드가 처음인데, 무엇을 해야 할까요? (2018년 1월 3일 업데이트 반영) ', author: '마리이', summary: 'null', registered: '2018.01.03.'},
    {seqno:2069846, level:'dejungja', category: 'system', title: '차일드 어딨는지 모르겠다 할 때(미세 tip) ', author: '하얀치즈', summary: 'null', registered: '2019.11.25.'},

    {seqno:2109196, level:'derini', category: 'child', title: '[차일드]★차일드 등급표(티어표) Ver 1.61 Date: 20200114', author: 'FD3SVI', summary: 'null', registered: '2020.01.13.'},
    {seqno:1793920, level:'derini', category: 'item', title: '장비 히든 포함 종합스탯', author: '2웨딩없찐 란지', summary: 'null', registered: '2020.03.14.'},
    {seqno:2151337, level:'derini', category: 'tip', title: '리자의숙제(일일퀘스트) 일반던전 10회 돌기 미세 꿀팁 ', author: '아령하세여', summary: 'null', registered: '2020.03.14.'},
    {seqno:2156597, level:'derini', category: 'tip', title: '뉴비 재화 사용법 ', author: '자다가게임설치', summary: 'null', registered: '2020.03.23.'},
    {seqno:2152396, level:'derini', category: 'tip', title: '완전 뉴비들이 럼블, 듀얼, 앙듀얼 제일 빨리 크는 방법. ', author: '네이팜비트', summary: 'null', registered: '2020.03.16.'},
    {seqno:2149971, level:'derini', category: 'child', title: '[차일드 선택박스] 2019 차일드 추천 공략 (재업) (feat. 노젓) ', author: '데이에', summary: 'null', registered: '2020.03.13.'},
    {seqno:2145557, level:'derini', category: 'system', title: '공격형 차일드의 공격력 순위를 조절하는 이유 ', author: '타각', summary: 'null', registered: '2020.03.09.'},
    {seqno:2134500, level:'derini', category: 'tip', title: '제 크리스탈 사용 방법 공유합니다 ', author: '피부미남되자', summary: 'null', registered: '2020.02.21.'},
    
    {seqno:2142750, level:'derini', category: 'ignition', title: '이그니션 시스템(코어,증폭) - 헤파이스토스의 대장간 안내 - ', author: '러블리악마 혁', summary: 'null', registered: '2020.03.04.'},
    {seqno:2152215, level:'derini', category: 'ignition', title: '단어배치로 보는 코어 구분법 ', author: '옆집이브누나', summary: 'null', registered: '2020.03.15.'},
    
    {seqno:2095634, level:'derini', category: 'raids', title: '[NightD]데린이들을 위한 레이드 최소 데미지 1% 숟딜에 관한 내용', author: 'NightD', summary: 'null', registered: '2019.12.29.'},
    {seqno:2041539, level:'derini', category: 'raids', title: '[레이드 처음인 뉴비 필독!] 라그나 기본 매너 ', author: 'Averuncus', summary: 'null', registered: '2019.10.27.'},
    {seqno:2156864, level:'derini', category: 'raids', title: '데린이를 위한 간단 레이드 구성 ', author: '필승', summary: 'null', registered: '2020.03.24.'},
    {seqno:2156519, level:'derini', category: 'raids', title: '라그나 브레이크 컨텐츠 대비하기? ', author: '타각', summary: 'null', registered: '2020.03.23.'},
    
    {seqno:2064099, level:'dechungnyun', category: 'pvp', title: '고인물 컨텐츠 듀얼을 해보자 -증폭 후 변경점- (19.12.05 수정) ', author: '짭블루', summary: 'null', registered: '2019.11.18.'},
    {seqno:2137987, level:'dechungnyun', category: 'system', title: '골상에서 스테미너는 평균적으로 얼마나 나올까?(소소한 팁) ', author: '닉할찐', summary: 'null', registered: '2020.02.26.'},
    {seqno:2143329, level:'dechungnyun', category: 'system', title: '1턴은 몇 초일까? 차일드 오토 스킬 설정은? ', author: 'alphagu', summary: 'null', registered: '2020.03.05.'},
    
    {seqno:2146948, level:'dechungnyun', category: 'item', title: '세공 등급별 확률 및 옵션 종류 (환기성) ', author: '투박냥', summary: 'null', registered: '2020.03.11.'},
    {seqno:1962886, level:'dechungnyun', category: 'item', title: '세공 확률업 이벤트 이것만은 꼭 알고 부여합시다', author: '타각', summary: 'null', registered: '2020.04.09.'},
    {seqno:2152249, level:'dechungnyun', category: 'item', title: '[세공]아이템 세공 순위 정리 및 티어 ★Ver 1.21 ', author: 'FD3SVI', summary: 'null', registered: '2020.03.15.'},
    
    {seqno:2152915, level:'dechungnyun', category: 'ignition', title: '[이그니션]유효타 코어 정리 공략 Ver 1.10 ', author: 'FD3SVI', summary: 'null', registered: '2020.03.16.'},
    {seqno:2156469, level:'dechungnyun', category: 'ignition', title: '퍼댐딜러의 코어별 효율을 알아보자 ', author: '비흑운', summary: 'null', registered: '2020.03.23.'},
    {seqno:2155282, level:'dechungnyun', category: 'ignition', title: '[증폭 코어] 스탯 활용 공략 - 증폭스탯, 일반스탯 ', author: '데이에', summary: 'null', registered: '2020.03.21.'},
    {seqno:2153940, level:'dechungnyun', category: 'ignition', title: '증폭치명타가 치명타 힐량에 영향을 미칠까? ', author: '이뿐꺼니', summary: 'null', registered: '2020.03.18.'},
    {seqno:2150642, level:'dechungnyun', category: 'ignition', title: '증공은 과연 공순위에 영향을 줄까? ', author: '이뿐꺼니', summary: 'null', registered: '2020.03.14.'},
]
/**
{seqno:2157473, level:'season', category: 'update', title: '[NightD]업데이트 내용 요약 정리(2020.02.26) ', author: 'NightD', summary: 'null', registered: '2020.03.25.'},
 {seqno:123, level:'dechungnyun', category: 'ㅁㅇㄹ', title: 'ㅁㅇㄹ ', author: 'ㅁㅇㄹ', summary: 'null', registered: '2020.03.16.'}
 **/
