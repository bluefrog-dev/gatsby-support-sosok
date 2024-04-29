import { navigate } from 'gatsby';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import Seo from '@/src/components/Seo';
import Layout from '@/src/layout';
import SearchInput from '@/src/components/SearchInput'
import FaQClass from '@/src/models/post';
import { AllMarkdownRemark } from '@/src/type';
import CategoryButton from '@/src/components/CategoryButton';
import PostCard from '@/src/components/PostCard';

import * as S from './styled';

type FaqTemplateProps = {
    location: Location;
    pageContext: {
      currentCategory: string;
      categories: string[];
      edges: AllMarkdownRemark['edges'];
    };
  };

const FaqTemplate: React.FC<FaqTemplateProps> = ({ location, pageContext }) => {

  const { edges, currentCategory, categories } = pageContext;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  const faq = edges?.map(({ node }) => new FaQClass(node));
  
  const currentTabIndex = useMemo(
    () => categories?.findIndex((category) => category === currentCategory),
    [categories, currentCategory],
  );

  useEffect(() => {
    if (searchTerm) {
      const searchTerms = edges
      .map(({ node }) => new FaQClass(node))
      .filter(faq => 
        faq.title.includes(searchTerm) || 
        faq.excerpt.includes(searchTerm)
      );
      setFilteredFaqs(searchTerms);
    } else {
      setFilteredFaqs([]);
    }
    console.log("filteredFaqs", filteredFaqs);
  }, [searchTerm, edges]);
  
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  console.log("Data", faq);

  return(
    <Layout location={location}>
      <Seo title={'질문하기'} />

      <S.SearchWrapper>
        <SearchInput handleSearchChange={handleSearchChange}/>
      </S.SearchWrapper>

      {searchTerm ? (
        <S.DropDown>
          {filteredFaqs.map(faq => (
            <S.DropDownItem
            key={faq.id}
            onClick={() => navigate("/")} // 아이템 클릭 시 상세 페이지로 이동
          >
            {faq.title}
          </S.DropDownItem>
          ))}
        </S.DropDown>
      ) : (
        <S.DropDown style={{ padding: 20 }}>
          검색어를 입력해주세요.
        </S.DropDown>
      )}

    </Layout>
  )
}

export default FaqTemplate;

