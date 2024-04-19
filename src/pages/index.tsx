import React from 'react';
import 'aos/dist/aos.css';
import { Layout } from '../components/Layout';
// import PostTemplate from '../components/Content';
import ContentBlock from '../components/ContentBlock';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

// export const query = graphql`
// query {
//   mdx(slug: { eq: "1" }) {
//     frontmatter {
//       title
//     }
//   }
// }
// `;

function IndexPage() {
  // const { mdx } = data;
  // console.log("??뭔데이게??", mdx);

  return (
    <Layout>
      <Header />
      <main>
        <div>루트페이지</div>
        {/* <h1>{mdx.frontmatter.title}</h1> */}
        {/* <ContentBlock content={contentData} /> */}
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}

export default IndexPage; 