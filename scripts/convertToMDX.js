const fs = require('fs');
const axios = require('axios');
const path = require('path');

// // 가정: `data` 변수에는 위에서 언급한 JSON 구조의 데이터가 저장되어 있음
// const data = {
//     "data": [
//         {
//             "id": 1,
//             "attributes": {
//                 "Title": "매장 비치용 QR키트란?",
//                 "Subtitle": "소속 비즈니스에 등록하신 사장님께 제공하는 3종의 제품입니다.",
//                 "Content": `
//                 "{\"time\":1693881291487,\"blocks\":[{\"id\":\"Njr7Q4y3g5\",\"type\":\"header\",\"data\":{\"text\":\"제휴점 스티커\",\"level\":3}},{\"id\":\"0E35i-UOJp\",\"type\":\"paragraph\",\"data\":{\"text\":\"출입구 문 또는 유리창 외부에 붙이는 스티커입니다. 고객들이 사장님의 매장을 지나가다가 소속 제휴점임을 알고 방문을 유도할 수 있습니다\"}},{\"id\":\"JtbTyjVN18\",\"type\":\"image\",\"data\":{\"file\":{\"id\":7,\"name\":\"image.png\",\"alternativeText\":null,\"caption\":null,\"width\":2000,\"height\":2067,\"formats\":{\"large\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/large_image_a755c4b5a2.png\",\"hash\":\"large_image_a755c4b5a2\",\"mime\":\"image/png\",\"name\":\"large_image.png\",\"path\":null,\"size\":115.49,\"width\":968,\"height\":1000},\"small\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/small_image_a755c4b5a2.png\",\"hash\":\"small_image_a755c4b5a2\",\"mime\":\"image/png\",\"name\":\"small_image.png\",\"path\":null,\"size\":33.77,\"width\":484,\"height\":500},\"medium\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/medium_image_a755c4b5a2.png\",\"hash\":\"medium_image_a755c4b5a2\",\"mime\":\"image/png\",\"name\":\"medium_image.png\",\"path\":null,\"size\":68.04,\"width\":726,\"height\":750},\"thumbnail\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail_image_a755c4b5a2.png\",\"hash\":\"thumbnail_image_a755c4b5a2\",\"mime\":\"image/png\",\"name\":\"thumbnail_image.png\",\"path\":null,\"size\":7.57,\"width\":151,\"height\":156}},\"hash\":\"image_a755c4b5a2\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":74.82,\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/image_a755c4b5a2.png\",\"previewUrl\":null,\"provider\":\"aws-s3\",\"provider_metadata\":null,\"folderPath\":\"/\",\"createdAt\":\"2023-08-24T01:05:31.993Z\",\"updatedAt\":\"2023-08-24T01:05:31.993Z\"},\"caption\":\"\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"jj6Q1GEnKW\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"akHVvorVOj\",\"type\":\"header\",\"data\":{\"text\":\"직원교육 스티커\",\"level\":3}},{\"id\":\"a_C8onmiZh\",\"type\":\"paragraph\",\"data\":{\"text\":\"카운터 안쪽에 붙이는 스티커입니다. 직원분들께서 소속 고객이 혜택을 요청했을 때 제공해야 할 혜택이 무엇인지 알 수 있는 스티커입니다.\"}},{\"id\":\"WXesMfRim9\",\"type\":\"image\",\"data\":{\"file\":{\"id\":8,\"name\":\"image.png\",\"alternativeText\":null,\"caption\":null,\"width\":2000,\"height\":2033,\"formats\":{\"large\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/large_image_3edb1eb8b2.png\",\"hash\":\"large_image_3edb1eb8b2\",\"mime\":\"image/png\",\"name\":\"large_image.png\",\"path\":null,\"size\":172.85,\"width\":984,\"height\":1000},\"small\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/small_image_3edb1eb8b2.png\",\"hash\":\"small_image_3edb1eb8b2\",\"mime\":\"image/png\",\"name\":\"small_image.png\",\"path\":null,\"size\":49.32,\"width\":492,\"height\":500},\"medium\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/medium_image_3edb1eb8b2.png\",\"hash\":\"medium_image_3edb1eb8b2\",\"mime\":\"image/png\",\"name\":\"medium_image.png\",\"path\":null,\"size\":101.85,\"width\":738,\"height\":750},\"thumbnail\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail_image_3edb1eb8b2.png\",\"hash\":\"thumbnail_image_3edb1eb8b2\",\"mime\":\"image/png\",\"name\":\"thumbnail_image.png\",\"path\":null,\"size\":10.36,\"width\":153,\"height\":156}},\"hash\":\"image_3edb1eb8b2\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":102.41,\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/image_3edb1eb8b2.png\",\"previewUrl\":null,\"provider\":\"aws-s3\",\"provider_metadata\":null,\"folderPath\":\"/\",\"createdAt\":\"2023-08-24T01:05:47.761Z\",\"updatedAt\":\"2023-08-24T01:05:47.761Z\"},\"caption\":\"\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}},{\"id\":\"IMeqpusr4T\",\"type\":\"delimiter\",\"data\":{}},{\"id\":\"KJchjDnYHD\",\"type\":\"header\",\"data\":{\"text\":\"카운터 QR댕글러\",\"level\":3}},{\"id\":\"QtOrHW9aHF\",\"type\":\"paragraph\",\"data\":{\"text\":\"카운터에 고객 방향으로 세워두는 댕글러입니다. 소속 고객이 소속 앱으로 이 댕글러에 표시된 QR코드를 인식하여 사장님 또는 직원에게 소속 회원임을 증명할 수 있습니다.\"}},{\"id\":\"VfDl1Mg7sn\",\"type\":\"image\",\"data\":{\"file\":{\"id\":9,\"name\":\"image.png\",\"alternativeText\":null,\"caption\":null,\"width\":3024,\"height\":4032,\"formats\":{\"large\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/large_image_f2c9a649be.png\",\"hash\":\"large_image_f2c9a649be\",\"mime\":\"image/png\",\"name\":\"large_image.png\",\"path\":null,\"size\":453.08,\"width\":750,\"height\":1000},\"small\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/small_image_f2c9a649be.png\",\"hash\":\"small_image_f2c9a649be\",\"mime\":\"image/png\",\"name\":\"small_image.png\",\"path\":null,\"size\":133.84,\"width\":375,\"height\":500},\"medium\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/medium_image_f2c9a649be.png\",\"hash\":\"medium_image_f2c9a649be\",\"mime\":\"image/png\",\"name\":\"medium_image.png\",\"path\":null,\"size\":260.1,\"width\":563,\"height\":750},\"thumbnail\":{\"ext\":\".png\",\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail_image_f2c9a649be.png\",\"hash\":\"thumbnail_image_f2c9a649be\",\"mime\":\"image/png\",\"name\":\"thumbnail_image.png\",\"path\":null,\"size\":17.94,\"width\":117,\"height\":156}},\"hash\":\"image_f2c9a649be\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2025.94,\"url\":\"https://strapi-sosok-images-bucket.s3.ap-northeast-2.amazonaws.com/image_f2c9a649be.png\",\"previewUrl\":null,\"provider\":\"aws-s3\",\"provider_metadata\":null,\"folderPath\":\"/\",\"createdAt\":\"2023-08-24T01:06:02.991Z\",\"updatedAt\":\"2023-08-24T01:06:02.991Z\"},\"caption\":\"\",\"withBorder\":false,\"stretched\":false,\"withBackground\":false}}],\"version\":\"2.23.2\"}"
//                 `,
//                 "createdAt": "2023-08-24T01:06:46.007Z",
//                 "updatedAt": "2023-09-05T02:34:58.620Z",
//                 "publishedAt": "2023-08-24T02:17:22.453Z"
//             }
//         },
//     ]
// };

// // MDX 파일 생성 함수
// function createMDXFile(post) {
//     const mdxContent = `---
// title: "${post.attributes.Title}"
// id: ${post.id}
// ---

// ${post.attributes.Content}
// `;

//     fs.writeFileSync(`${__dirname}/contents/${post.id}.mdx`, mdxContent);
// }

// // 모든 게시물에 대해 MDX 파일 생성
// data.data.forEach(post => createMDXFile(post));

// Strapi API 엔드포인트
const STRAPI_API_URL = 'http://localhost:3002/api/getcontent';

// 요청을 보낼 body 데이터
const requestBody = { id: 1 };

// API에서 데이터를 가져오는 함수
async function fetchData() {
  try {
    const response = await axios.post(STRAPI_API_URL, requestBody);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// 가져온 데이터를 MDX 파일로 변환하는 함수
function convertToMDX(data) {
  // 데이터 파싱 및 MDX 포맷으로 변환
  const mdxContent = `---
title: "${data.Title}"
---

${data.Content}
`;
// MDX 파일 저장 경로 지정
const mdxFilePath = path.join(__dirname, 'contents', `${data.id}.mdx`);

// 파일 작성
fs.writeFileSync(mdxFilePath, mdxContent);
console.log(`MDX file created at ${mdxFilePath}`);
}

// 메인 함수
async function main() {
const data = await fetchData();
if (data) {
  convertToMDX(data);
}
}

// 메인 함수 실행
main();