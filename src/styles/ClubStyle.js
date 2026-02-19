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
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border-radius: 6px;
  object-fit: cover;
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
  background: ${(props) => (props.isField ? "#f2f4f6" : "#fff0f0")};
  color: ${(props) => (props.isField ? "#4e5968" : "#c62917")};
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 8px;
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
  background: #191f28;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
  font-size: 15px;
  font-weight: 700;
  transition: background 0.2s;

  &:hover {
    background: #333d4b;
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
