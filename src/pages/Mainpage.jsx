import * as S from "../styles/ClubStyle";
import logoPng from "../assets/FIRE.jpg";

const CLUB_DATA = [
  {
    id: 1,
    name: "멋쟁이사자처럼",
    desc: "아이디어를 실제 서비스로 구현하는 IT 동아리입니다. \n (사실 저희 홍보하려고 이거 만들었어요 🥺)",
    tag: "모집 중",
    field: "IT/창업",
    link: "https://everytime.kr/418891/v/400593967",
  },
  {
    id: 2,
    name: "동아리명",
    desc: "동아리 설명",
    tag: "모집 중",
    field: "동아리 분야",
    link: "https://everytime.kr/418891/v/400593967",
  },
];

function MainPage() {
  return (
    <S.MobileContainer>
      <S.TopBar>
        <h1>
          <S.LogoImage src={logoPng} alt="로고" /> 모집 중인 동아리 링크 모음
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
            <strong>26.01.01 이후 올라온 홍보글만 정리하고 있습니다.</strong>
            <br />
            이외에도 모집 중인 동아리가 있을 수 있으니 어디까지나 참고용으로
            이용해주세요!
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

      <S.ListWrapper>
        {CLUB_DATA.map((club) => (
          <S.ClubCard key={club.id}>
            <S.BadgeRow>
              <S.StatusBadge>{club.tag}</S.StatusBadge>
              <S.StatusBadge isField>{club.field}</S.StatusBadge>
            </S.BadgeRow>
            <S.Title>{club.name}</S.Title>
            <S.SubText>{club.desc}</S.SubText>
            <S.ActionButton href={club.link} target="_blank">
              공고 자세히 보기
            </S.ActionButton>
          </S.ClubCard>
        ))}
      </S.ListWrapper>

      <S.Footer>
        <S.CreditTag>
          <strong>Developed by 멋쟁이사자처럼 인천대학교 🦁</strong>
          <span>© 2026 LIKELION INU. All rights reserved.</span>
          <p style={{ marginTop: "10px" }}>
            저희 동아리도 많은 지원 부탁드립니다 흑흑
          </p>
        </S.CreditTag>
      </S.Footer>
    </S.MobileContainer>
  );
}

export default MainPage;
