import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

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

export const section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 690px;
  width: 100%;
  margin: 130px 0;
  font-family: SUIT-Regular;

  .react-rotating-text-cursor {
    animation: ${blinkingCursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0 10px;
    margin-top: 80px;
    margin-bottom: 150px;
  }

  .gatsby-image-wrapper {
    position: absolute;
    right: 30px;
    top: -100px;
    width: 300px;
    @media ${MOBILE_MEDIA_QUERY} {
      position: absolute;
      right: 0;
      top: -20px;
      width: 100px;
    }
  }
`;

export const IntroWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-family: SUIT-Bold;
  line-height: 1.2;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }

  strong {
    display: inline-block;
    font-family: SUIT-Regular;
    .react-rotating-text-cursor {
      font-family: SUIT-Regular;
      font-size: 40px;

      @media ${MOBILE_MEDIA_QUERY} {
        font-size: 27px;
      }
    }
  }

  .react-rotating-text-cursor {
    animation: ${blinkingCursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }
`;

export const Title = styled.p`
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 38px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 27px;

    .react-rotating-text-cursor {
      font-size: 27px;
      line-height: 27px;
    }
  }
`;

export const KeywordInput = styled.input`
  display: flex;
  width: 100%; 
  padding: 10px; 
  height: 48px;
  border: 1px solid #cccccc; 
  border-radius: 8px;
  outline: none; 
  
  &:hover {
    outline: 1px solid #36E579;
  }

  &:focus {
    border: 0;
  }
`;
