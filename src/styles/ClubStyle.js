import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const MobileContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f9fafb;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  padding: 16px 20px;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  h1 {
    margin: 0;
    font-size: 19px;
    font-weight: 800;
    color: #191f28;
    display: flex;
    align-items: center;
    letter-spacing: -0.5px;
  }
`;

export const LogoImage = styled.img`
  width: 40px;
  height: auto;
  margin-right: 6px;
  border-radius: 6px;
`;

export const InfoBox = styled.div`
  background: #fff;
  margin: 20px 16px;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  animation: ${fadeIn} 0.5s ease-out;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #4e5968;
  line-height: 1.6;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
  span {
    font-size: 18px;
  }
  strong {
    color: #191f28;
    font-weight: 600;
  }
`;

export const ClubCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.6s ease-out both;

  &:active {
    transform: scale(0.96);
    background: #f2f4f6;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
`;

export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 8px;

  /* 상태별 색상 분기 */
  ${(props) => {
    if (props.isField) return `background: #f2f4f6; color: #4e5968;`; // 카테고리 배지
    switch (props.type) {
      case "always":
        return `background: #e8f3ff; color: #1b64da;`; // 상시모집 (파랑)
      case "today":
        return `background: #fff0f0; color: #c62917;`; // 오늘마감 (빨강)
      case "closed":
        return `background: #e5e8eb; color: #8b95a1;`; // 마감 (회색)
      default:
        return `background: #e8f3ff; color: #1b64da;`; // 모집중 (파랑)
    }
  }}
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #191f28;
`;

export const SubText = styled.p`
  font-size: 15px;
  color: #4e5968;
  margin: 0 0 20px 0;
  line-height: 1.5;
`;

export const ActionButton = styled.a`
  display: block;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;

  background: ${(props) => (props.isClosed ? "#f2f4f6" : "#191f28")};
  color: ${(props) => (props.isClosed ? "#adb5bd" : "white")};
  cursor: ${(props) => (props.isClosed ? "default" : "pointer")};
  pointer-events: ${(props) => (props.isClosed ? "none" : "auto")};

  &:active {
    transform: ${(props) => (props.isClosed ? "none" : "scale(0.98)")};
  }
`;

export const Footer = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background: #f2f4f6;
  margin-top: 20px;
`;

export const CreditTag = styled.div`
  font-size: 13px;
  color: #8b95a1;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;

  strong {
    color: #4e5968;
    font-size: 14px;
  }
`;

export const InstaLink = styled.a`
  color: #1b64da;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #0048b5;
  }
`;

export const ListWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

// 카테고리 관련
export const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px 20px 16px;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled.button`
  padding: 10px 16px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.active ? "#191f28" : "#e5e8eb")};
  background: ${(props) => (props.active ? "#191f28" : "white")};
  color: ${(props) => (props.active ? "white" : "#4e5968")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &:active {
    transform: scale(0.95);
  }
`;
