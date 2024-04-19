exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.mdx?$/, // .mdx 확장자 파일 처리
            use: [
              loaders.js(), // 이를 통해 babel-loader 설정을 상속
              {
                loader: '@mdx-js/loader', // MDX 로더 사용
                options: {
                  /* MDX 로더 옵션 설정 가능 */
                }
              }
            ] 
          },
        ],
      },
    });
  };
  
  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type === `Mdx`) {
      const value = createFilePath({ node, getNode });
      
      createNodeField({
        name: `slug`,
        node,
        value: `/contents/${value}`,
      });
    }
  };