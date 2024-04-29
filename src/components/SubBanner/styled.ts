import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { hoverUnderline, MOBILE_MEDIA_QUERY, contentMaxWidth } from '@/src/styles/const';
import { Link } from 'gatsby';

const blinkingCursor = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  min-height: 270px;
  padding: 20px;
  position: relative;
  bottom: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.gray40};
  font-family: SUIT-Bold, sans-serif;

  @media ${MOBILE_MEDIA_QUERY} {
    min-height: 200px;
    padding: 10px;
    font-size: 13px;
    height: 40px;
  }
`;

export const inner = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  max-width: 690px;
  padding: 54px 0;
  
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black60};
  max-width: inherit;
  font-size: 24px;
  text-align: left; 
  margin-bottom: 8px;
  

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 20px auto;
  left : 0;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const ContactLink = styled(Link)`
  cursor: pointer;
  position: relative;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: -40px;

  @media ${MOBILE_MEDIA_QUERY} {
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 0px;
    justify-content: center;
    align-items: center;
  }
`;

