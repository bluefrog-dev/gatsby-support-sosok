import { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import BuyMeACoffee from '../BuyMeACoffee';
import Image from '../Image';
import * as S from './styled';
import { Link } from 'gatsby';

type SubBannerProps = {
  author?: Author;
};

const SubBanner: React.FC<SubBannerProps> = ({
  // author 
}) => {
  // const { stack, social, name, nickname, dropdown } = author;

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <S.Section>
      <S.inner>
        <S.Title>
          소속 고객센터에서 <br />
          24시간 상담받을 수 있어요
        </S.Title>
        <br />
        <S.ImageContainer>
          <S.ImageWrapper>
            <img src='touchphone.webp' alt='touch mobile' style={{ width: '200px' }} />
          </S.ImageWrapper>
          <S.ContactLink to='http://pf.kakao.com/_CFIvxj/chat' target='_blank'>
            <img src='kakaocontact.webp' alt='카카오톡 채널' style={{ width: "328px", left: 0 }} />
          </S.ContactLink>
        </S.ImageContainer>
      </S.inner>
    </S.Section>
  );
};

export default SubBanner;
