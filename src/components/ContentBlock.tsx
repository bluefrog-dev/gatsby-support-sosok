import React from 'react';

const ContentBlock = ({ content }:any) => {

    console.log("content컴포넌트 파라미터값", content);

    return (
        <div> 
            {content.map((block:any, index:any) => {
                console.log(`블록 ${index}:`, block); // 각 블록의 데이터 로깅
                switch (block.type) {
                    case 'header':
                        return <h3 key={block.id}>{block.data.text}</h3>;
                    case 'paragraph':
                        return <p key={block.id}>{block.data.text}</p>;
                    case 'image':
                        const imageUrl = block.data.file.url;
                        return (
                            <img
                                key={block.id}
                                src={imageUrl}
                                alt={block.data.file.alternativeText || 'image'}
                                style={{ width: '100%' }}
                                onError={(e) => { console.error("이미지 로드 실패:", e); }}
                            />
                        );
                    case 'delimiter':
                        return <hr key={block.id} />;
                    default:
                        console.error("처리되지 않은 블록 유형:", block.type);
                        return null;
                }
            })}
        </div>
    );
};

export default ContentBlock;
