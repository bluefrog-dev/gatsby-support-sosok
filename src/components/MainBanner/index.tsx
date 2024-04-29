import { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import * as S from './styled';

type MainBannerProps = {
  author: Author;
};

const MainBanner: React.FC<MainBannerProps> = ({ author }) => {
  const { stack, social, name, nickname, dropdown } = author;

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          {/* <ReactRotatingText items={stack} /> */}
          No.1 멤버십 &nbsp;
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <br />
          <br />
          <strong>
            <div style={{ fontWeight: 600 }}> sosok &nbsp;</div>
          </strong>
          에서 만나 보세요.
        </S.Title>




        {/* <Image alt='thumbnail' src='thumbnail.png' /> */}

        {/* <S.SocialWrapper>
          {Object.keys(social).map(
            (link, index) =>
              social[link as keyof typeof social] && (
                <S.SocialButton key={index} target='_blank' href={social[link as keyof typeof social]}>
                  {link}
                </S.SocialButton>
              ),
          )}
          <div />
          <S.DropdownButton onMouseLeave={() => setIsDropdownOpened(false)}>
            <div onMouseEnter={() => setIsDropdownOpened(true)}>etc.</div>
            {isDropdownOpened && (
              <S.Dropdown>
                {Object.keys(dropdown).map(
                  (link, index) =>
                    dropdown[link as keyof typeof dropdown] && (
                      <S.SocialButton key={index} target='_blank' href={dropdown[link as keyof typeof dropdown]}>
                        {link}
                      </S.SocialButton>
                    ),
                )}
              </S.Dropdown>
            )}
          </S.DropdownButton>
        </S.SocialWrapper> */}
      </S.IntroWrapper>

      {/* <S.BuyMeACoffeeWrapper>
        <BuyMeACoffee />
      </S.BuyMeACoffeeWrapper> */}
    </S.Wrapper>
  );
};

export default MainBanner;
