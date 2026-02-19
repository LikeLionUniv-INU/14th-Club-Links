import React, { useState } from "react";
import * as S from "../styles/ClubStyle";
import logoPng from "../assets/FIRE.png";

const CATEGORIES = [
  "전체",
  "취미전시",
  "체육",
  "교양학술",
  "종교",
  "봉사",
  "문화",
];

// 디데이, 상태 계산 함수
const getStatus = (deadline) => {
  if (deadline === "always") return { text: "상시 모집", type: "always" };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(deadline);
  target.setHours(0, 0, 0, 0);

  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return { text: `D-${diffDays}`, type: "recruiting" };
  if (diffDays === 0) return { text: "오늘 마감", type: "today" };
  return { text: "모집 마감", type: "closed" };
};

const CLUB_DATA = [
  {
    id: 1,
    name: "멋쟁이사자처럼",
    desc: "인천대 중앙 IT 동아리 (이거 저희가 만들었어요 🥹)",
    category: "교양학술",
    deadline: "2026-03-06",
    link: "https://everytime.kr/418891/v/400593967",
  },
  {
    id: 2,
    name: "싸우라비",
    desc: "인천대 중앙 태권도 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400783687",
  },
  {
    id: 3,
    name: "DT",
    desc: "인천대 중앙 독서토론 동아리",
    category: "교양학술",
    deadline: "2026-02-25",
    link: "https://everytime.kr/418891/v/400753903",
  },
  {
    id: 4,
    name: "로타랙트",
    desc: "인천대 중앙 연합 봉사 동아리",
    category: "봉사",
    deadline: "2026-03-19",
    link: "https://everytime.kr/418891/v/400740161",
  },
  {
    id: 5,
    name: "아임",
    desc: "인천대 중앙 마케팅 동아리",
    category: "교양학술",
    deadline: "2026-03-06",
    link: "https://everytime.kr/418891/v/400697083",
  },
  {
    id: 6,
    name: "세치혀",
    desc: "인천대 중앙 시사토론 동아리",
    category: "교양학술",
    deadline: "2026-02-28",
    link: "https://everytime.kr/418891/v/400600629",
  },
  {
    id: 7,
    name: "효월검우회",
    desc: "인천대 중앙 검도 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400534237",
  },
  {
    id: 8,
    name: "보인다",
    desc: "인천대 중앙 보드게임 동아리",
    category: "취미전시",
    deadline: "2026-02-28",
    link: "https://everytime.kr/418891/v/400377609",
  },
  {
    id: 9,
    name: "아르고나우츠",
    desc: "인천대 중앙 투자 동아리",
    category: "교양학술",
    deadline: "2026-03-01",
    link: "https://everytime.kr/418891/v/400373448",
  },
  {
    id: 10,
    name: "기우회",
    desc: " 인천대 중앙 바둑 동아리",
    category: "취미전시",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400348603",
  },
  {
    id: 11,
    name: "한아랑",
    desc: "인천대 중앙 만화 동아리",
    category: "취미전시",
    deadline: "2026-03-08",
    link: "https://everytime.kr/418891/v/400036275",
  },
  {
    id: 12,
    name: "다크호스",
    desc: "인천대 중앙 탁구 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/399560337",
  },
  {
    id: 13,
    name: "젊은영상",
    desc: "인천대 중앙 영화 동아리",
    category: "문화",
    deadline: "2026-02-28",
    link: "https://everytime.kr/418891/v/400215705",
  },
  {
    id: 14,
    name: "TEDxIncheonU",
    desc: "인천대 중앙 강연기획 동아리",
    category: "교양학술",
    deadline: "2026-02-28",
    link: "https://everytime.kr/418891/v/400689045",
  },
  {
    id: 15,
    name: "산악부(UIAC)",
    desc: "인천대 중앙 산악 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400604191",
  },
  {
    id: 16,
    name: "인유공방",
    desc: "인천대 중앙 DIY 동아리",
    category: "취미전시",
    deadline: "2026-03-06",
    link: "https://everytime.kr/418891/v/400596005",
  },
  {
    id: 17,
    name: "하늬울림",
    desc: "인천대 중앙 클래식기타 동아리",
    category: "문화",
    deadline: "2026-03-05",
    link: "https://everytime.kr/418891/v/400540892",
  },
  {
    id: 18,
    name: "BOSS",
    desc: "인천대 중앙 보드 동아리",
    category: "체육",
    deadline: "2026-03-13",
    link: "https://everytime.kr/418891/v/400480501",
  },
  {
    id: 19,
    name: "죠이선교회(JOY)",
    desc: "인천대 중앙 기독교 동아리",
    category: "종교",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400464556",
  },
  {
    id: 20,
    name: "느을사랑",
    desc: "인천대 중앙 유기견봉사 동아리",
    category: "봉사",
    deadline: "2026-02-27",
    link: "https://everytime.kr/418891/v/400395339",
  },
  {
    id: 21,
    name: "퍼펙트",
    desc: "인천대 중앙 볼링 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400181603",
  },
  {
    id: 22,
    name: "울림",
    desc: "인천대 중앙 풍물패 동아리",
    category: "문화",
    deadline: "always",
    link: "https://everytime.kr/418891/v/400141970",
  },
  {
    id: 23,
    name: "PANG",
    desc: "인천대 중앙 스쿼시 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/399867555",
  },
  {
    id: 24,
    name: "CCC",
    desc: "인천대 중앙 기독교 동아리",
    category: "종교",
    deadline: "always",
    link: "https://everytime.kr/418891/v/398791768",
  },
  {
    id: 25,
    name: "바이킹",
    desc: "인천대 중앙 야구 동아리",
    category: "체육",
    deadline: "always",
    link: "https://everytime.kr/418891/v/398714757",
  },
];

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 필터링 로직
  const filteredClubs =
    selectedCategory === "전체"
      ? CLUB_DATA
      : CLUB_DATA.filter((club) => club.category === selectedCategory);

  return (
    <S.MobileContainer>
      <S.TopBar>
        <h1>
          <S.LogoImage src={logoPng} alt="로고" /> 모집 중인 중앙동아리 공고
          모음
        </h1>
      </S.TopBar>

      <S.InfoBox>
        <S.InfoItem>
          <div>📢</div>
          <div>해당 사이트는 모바일에 최적화되어 있습니다.</div>
        </S.InfoItem>

        <S.InfoItem>
          <div>⚠️</div>
          <div>
            <strong>
              26.01.01 이후 '동아리게시판'에 모집 공고가 올라온 동아리만
              정리하고 있습니다.{" "}
            </strong>
            <br />
            이외에도 모집 중인 곳이 있을 수 있으니 어디까지나 참고용으로
            이용해주세요!
            <br />
            <strong style={{ color: "red" }}>
              * 26.02.19 기준 25/48개 등록됨
            </strong>
          </div>
        </S.InfoItem>

        <S.InfoItem>
          <div>🔗</div>
          <div>
            전체 중앙동아리 목록은 {""}
            <S.InstaLink
              href="https://www.instagram.com/inu_yiyeon/"
              target="_blank"
            >
              @총동아리연합회 인스타그램
            </S.InstaLink>
            을 참고해주세요.
          </div>
        </S.InfoItem>
      </S.InfoBox>

      <S.CategoryContainer>
        {CATEGORIES.map((cat) => (
          <S.CategoryButton
            key={cat}
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </S.CategoryButton>
        ))}
      </S.CategoryContainer>

      <S.ListWrapper>
        {filteredClubs.map((club) => {
          const status = getStatus(club.deadline);
          const isClosed = status.type === "closed";

          return (
            <S.ClubCard key={club.id} isClosed={isClosed}>
              <S.BadgeRow>
                <S.StatusBadge type={status.type}>{status.text}</S.StatusBadge>
                <S.StatusBadge isField>{club.category}</S.StatusBadge>
              </S.BadgeRow>
              <S.Title>{club.name}</S.Title>
              <S.SubText>{club.desc}</S.SubText>
              <S.ActionButton
                href={isClosed ? "#" : club.link}
                target={isClosed ? "_self" : "_blank"}
                isClosed={isClosed}
              >
                {isClosed ? "모집이 종료되었습니다" : "에브리타임 공고로 이동"}
              </S.ActionButton>
            </S.ClubCard>
          );
        })}
      </S.ListWrapper>

      <S.Footer>
        <S.CreditTag>
          <strong>Developed by 멋쟁이사자처럼 인천대학교 🦁</strong>
          <span>© 2026 LIKELION INU. All rights reserved.</span>
          <p style={{ marginTop: "10px" }}>
            저희 동아리도 많은 지원 부탁드립니다 🫠
          </p>
        </S.CreditTag>
      </S.Footer>
    </S.MobileContainer>
  );
}

export default MainPage;
