import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/Layout';
import ContentBlock from '../../components/ContentBlock';

export const query = graphql`
  query ContentBySlug($id: String!) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
      }
    } 
  }
`;

interface ContentTemplateProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const ContentTemplate: React.FC<ContentTemplateProps> = ({ data }) => {

  const { mdx } = data;

  console.log("data?", mdx);


  return (
    // <Layout>
    <>
      <h1>{mdx.frontmatter.title}</h1>
      <ContentBlock content={mdx} />
    </>
    // </Layout>
  );
}

export default ContentTemplate;