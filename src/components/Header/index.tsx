import React from 'react';

import * as S from './styled';
import Image from '../Image';

type HeaderProps = {
  title: string;
  location: Location;
};

const Header: React.FC<HeaderProps> = ({ title, location }) => {
  const { pathname } = location;

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <div className='pc-only'>
            <S.MenuLink to='/' isselected='false'>
              <Image src='sosoklogo.svg' alt='소속 로고' style={{ height: '25.85px' , paddingRight: '10px', marginBottom: '-3px'}} />
              {title}
            </S.MenuLink>
          </div>

          <div className='mobile-only mobile-logo'>
            <S.MenuLink to='/' isselected='false'>
              D
            </S.MenuLink>
          </div>
        </div>
        <S.Menu>
          <S.MenuLink to='/faq' isselected={(pathname === '/faq').toString()}>
            테스트
          </S.MenuLink>
          <S.MenuLink to='/posts' isselected={(pathname === '/posts').toString()}>
            자주 묻는 질문
          </S.MenuLink>
          <S.MenuLink to='/guestbook' isselected={(pathname === '/guestbook').toString()}>
            질문하기
          </S.MenuLink>
          {/* <S.MenuLink to='/playground' isselected={(pathname === '/playground').toString()}>
            playground
          </S.MenuLink> */}
        </S.Menu>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
