'use client';

import clsx from 'clsx';
import { useState } from 'react';
import DetailContentTab from '../tab-content/DetailContentTab';
import SubmissionTab from '../tab-content/SubmissionTab';
import FoundationTab from '../tab-content/FoundationTab';

const ScholarshipTabSection = () => {
  const [tabActiveIndex, setTabActiveIndex] = useState<number>(0);

  const tabMenuList = ['상세내용', '제출서류', '재단정보', '댓글'];

  const handleTabClick = (index: number) => {
    setTabActiveIndex(index);
  };

  return (
    <section>
      <ul className="flex px-4">
        {tabMenuList.map((tab, index) => (
          <li
            key={index}
            className={clsx(
              'text-md-200 flex flex-1 cursor-pointer items-center justify-center border-b-2 py-4 ',
              {
                'border-primary text-gray-90': tabActiveIndex === index,
                'border-transparent text-gray-40': tabActiveIndex !== index,
              },
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      {tabActiveIndex === 0 ? (
        <DetailContentTab />
      ) : tabActiveIndex === 1 ? (
        <SubmissionTab />
      ) : (
        tabActiveIndex === 2 && <FoundationTab />
      )}
    </section>
  );
};

export default ScholarshipTabSection;
