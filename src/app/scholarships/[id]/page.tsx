import Image from 'next/image';

import Capsule from '@/components/ui/Capsule';
import Button from '@/components/ui/Button';
import MessageDotsIcon from '@/components/ui/icon/MessageDotsIcon';
import ScholarshipTabSection from '@/components/scholarship/detail/section/ScholarshipTabSection';
import BackButtonHeader from '@/components/ui/BackButtonHeader';
import { fetchScholarship } from '@/api/scholarship';

const ScholarshipDetailPage = async ({
  params,
}: {
  params: { id: number };
}) => {
  // const scholarship = await fetchScholarship(params.id);

  // console.log(scholarship);

  const conditionList: { name: string; isTrue: boolean }[] = [
    { name: '3분위 이내', isTrue: true },
    { name: '서울 거주', isTrue: true },
    { name: '생활비 장학금', isTrue: false },
    { name: '3.5학점 이상', isTrue: true },
  ];

  return (
    <div className="pb-8">
      <BackButtonHeader
        as="header"
        backButton={{ label: '장학금 공고', backUrl: '-1' }}
        fixed
      />
      <main className="px-4">
        <div className="mx-auto flex max-w-screen-lg flex-col md:flex-row md:gap-2">
          <section className="flex-1">
            <div className="relative aspect-square w-full md:aspect-auto md:h-full">
              <Image
                src="/images/placeholders/placeholder-image.png"
                alt="장학금 임시 이미지"
                fill
                objectFit="cover"
              />
              <Capsule
                variant="primary"
                size="lg"
                className="absolute bottom-4 left-4"
              >
                D-12
              </Capsule>
            </div>
          </section>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <section className="flex flex-col gap-4 p-4">
                <div className="title-sm-200 text-gray-40">재단명</div>
                <div className="flex flex-col gap-2">
                  <h1 className="title-sm-200 text-gray-80">
                    월곡주얼리장학생
                  </h1>
                  <div className="title-md-300 text-gray-90">200만원</div>
                  <div className="text-md-200 text-gray-40">
                    YYYY.MM.DD ~ YYYY.MM.DD
                  </div>
                </div>
                <div className="text-lg-200 flex gap-2 text-primary">
                  {['중복수혜가능', '중복수혜가능'].map((label, index) => (
                    <span key={index}>#{label}</span>
                  ))}
                </div>
              </section>
              <section className="border-t border-gray-10 p-4">
                <h2 className="text-lg-200">지원조건</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {conditionList.map((condition, index) => (
                    <Capsule
                      key={index}
                      variant={
                        condition.isTrue ? 'stroke-primary' : 'stroke-default'
                      }
                      size="sm"
                    >
                      {condition.name}
                    </Capsule>
                  ))}
                </div>
              </section>
            </div>
            <section className="flex flex-col gap-4 px-4 py-6 md:pb-0">
              <Button>지원하기</Button>
              <Button variant="light-primary">
                <span className="text-lg-300 flex gap-1 text-gray-80">
                  <span className="text-[1.25rem]">
                    <MessageDotsIcon />
                  </span>
                  <span>재단 후기 모아보기</span>
                  <span className="text-primary">15</span>
                </span>
              </Button>
            </section>
          </div>
        </div>
        <ScholarshipTabSection />
      </main>
    </div>
  );
};

export default ScholarshipDetailPage;
