import { graphql } from 'gatsby';
import React from 'react';
import { AllMarkdownRemark, SiteMetadata } from '../type';
import Layout from '../layout';
import Seo from '../components/Seo';
import SubBanner from '../components/SubBanner';
import CategoryButton from '../components/CatgoryButton';
import FaQClass from '../models/faq';

type FaqProps = {
    data: {
        site: { siteMetadata: SiteMetadata };
        allMarkdownRemark: AllMarkdownRemark;
    };
    location: Location;
    
}

const Faq: React.FC<FaqProps> = ({ location, data }) => {
    const faq = data.allMarkdownRemark.edges.map(({ node }) => new FaQClass(node));
   
    return (
        <>
            <Layout location={location}>
                <Seo title='자주 묻는 질문' />
                <CategoryButton faq={faq} />
            </Layout>
        </>
    )
}
export default Faq; 



export const pageQuery = graphql`
  query ($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        emoji
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        emoji
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        emoji
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;

console.log("pageQuery", pageQuery);