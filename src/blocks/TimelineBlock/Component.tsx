import React from 'react'

const timelineItems = [
  {
    year: '2008',
    number: '01',
    title: '机构初创',
    description: '闰政咨询在北京成立，核心团队由公共管理专家组成，确立以"政府绩效评价"为主航道。',
    position: 'left',
  },
  {
    year: '2012',
    number: '02',
    title: '重大专项突破',
    description:
      '受托开展某省份"五年规划"中期评估，标志着机构在大规模政府专项评估领域具备成熟实力。',
    position: 'right',
  },
  {
    year: '2018',
    number: '03',
    title: '标准引领',
    description: '参与编写《财政支出绩效评价通用指标体系》，将一线评价实践上升为行业规范标准。',
    position: 'left',
  },
  {
    year: '2024',
    number: '04',
    title: '智库化转型',
    description: '建立"政务大数据研究室"，实现从单一评估向全周期治理顾问与智慧智库的全面跨越。',
    position: 'right',
  },
]

export const TimelineBlock: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-gray-100 pb-8">
        <div>
          <h2 className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4">
            Development History
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-charcoal tracking-tighter">
            发展历程
          </h3>
        </div>
        <p className="text-gray-500 max-w-md mt-6 md:mt-0 font-medium">
          深耕政府绩效领域，记录中国公共管理科学化的每一个里程碑。
        </p>
      </div>
      <div className="relative mt-16">
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 md:-translate-x-1/2"></div>
        <div className="space-y-24">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start md:items-center"
            >
              <div
                className={`md:w-1/2 md:pr-16 md:text-right order-2 md:order-${
                  item.position === 'left' ? '1' : '3'
                } ml-12 md:ml-0`}
              >
                {item.position === 'right' ? (
                  <span className="text-primary font-black text-4xl italic opacity-20">
                    {item.year}
                  </span>
                ) : (
                  <>
                    <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </>
                )}
              </div>
              <div
                className={`absolute left-0 md:left-1/2 w-10 h-10 ${
                  index % 2 === 0 ? 'bg-primary' : 'bg-charcoal border-2 border-primary'
                } flex items-center justify-center text-white z-10 md:-translate-x-1/2 order-1 shadow-lg`}
              >
                <span className="font-bold text-xs">{item.number}</span>
              </div>
              <div
                className={`md:w-1/2 md:pl-16 order-3 ml-12 md:ml-0 ${
                  item.position === 'left' ? 'md:order-3' : 'md:order-2'
                }`}
              >
                {item.position === 'left' ? (
                  <span className="text-primary font-black text-4xl italic opacity-20">
                    {item.year}
                  </span>
                ) : (
                  <>
                    <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
