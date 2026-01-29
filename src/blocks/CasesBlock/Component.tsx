import React from 'react'
import { CaseCard } from '@/components/CaseCard'

const caseStudies = [
  {
    title: '某市财政专项资金整体支出绩效评价',
    client: '某市财政局',
    date: '2024年10月',
    category: '预算绩效评价',
    description:
      '本次评价对某市2023年度财政专项资金使用情况进行了全面评估，涵盖教育、医疗、基础设施等多个领域，评价成果为下年度预算安排提供了科学的决策参考依据。',
    tags: ['预算绩效', '专项资金', '财政评估'],
  },
  {
    title: '某省营商环境第三方评估项目',
    client: '某省发展改革委',
    date: '2024年9月',
    category: '营商环境评价',
    description:
      '对标世界银行营商环境评价指标体系，对该省营商环境进行全方位评估，提出了具有针对性的改进建议，助力优化营商环境。',
    tags: ['营商环境', '对标评估', '政策建议'],
  },
  {
    title: '某市民生实事项目绩效评价',
    client: '某市人民政府',
    date: '2024年8月',
    category: '民生实事评估',
    description:
      '针对某市年度十大民生实事项目开展绩效评价，通过问卷调查、实地走访等方式，客观评估项目实施效果和群众满意度。',
    tags: ['民生实事', '满意度调查', '社会效益'],
  },
  {
    title: '某部委内部控制体系建设咨询',
    client: '某中央部委',
    date: '2024年7月',
    category: '行政事业咨询',
    description: '协助某部委建立健全内部控制体系，规范业务流程，提升管理效能，确保权力规范运行。',
    tags: ['内部控制', '流程优化', '风险管理'],
  },
]

export const CasesBlock: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-charcoal text-center mb-12">
          典型案例
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseItem, index) => (
            <CaseCard key={index} {...caseItem} />
          ))}
        </div>
      </div>
    </section>
  )
}
