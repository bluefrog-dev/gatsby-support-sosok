import FaQClass from '@/src/models/faq';
import React from 'react';

type CategoryButtonProps = {
    faq?: FaQClass[];
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ faq }) => {

    return (
        <div>
            {/* {faq.map((faq,index) => (
                <div key={index}>{faq.author}</div>
            ))} */}
            테스트 중입니다.
        </div>
    );
};

export default CategoryButton;