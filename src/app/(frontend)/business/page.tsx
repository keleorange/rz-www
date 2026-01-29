import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'

const services = [
  {
    icon: 'fact_check',
    title: '事前绩效评估',
    items: ['重大政策与项目入库评审', '立项必要性与投入经济性分析', '绩效目标设置合理性审核'],
  },
  {
    icon: 'target',
    title: '绩效目标管理',
    items: ['指标体系构建与标准化', '中期财政规划绩效目标编审', '年度预算绩效目标申报指导'],
  },
  {
    icon: 'monitoring',
    title: '绩效跟踪监控',
    items: ['运行情况"双监控"评估', '预算执行偏离度预警分析', '动态纠偏与调整建议咨询'],
  },
  {
    icon: 'account_balance',
    title: '部门整体支出评价',
    items: ['履职效能与管理水平综合评价', '核心产出与社会效益深度量化', '资产管理与财务合规性审计'],
  },
  {
    icon: 'assignment_turned_in',
    title: '项目绩效评价',
    items: ['重大专项支出后评价', '转移支付资金使用效益评估', '第三方满意度调查及证据链复核'],
  },
  {
    icon: 'more_horiz',
    title: '延伸咨询服务',
    items: ['内部控制体系建设咨询', '政府财务报告编制服务', '绩效考核系统定制化开发'],
    dark: true,
  },
]

const processSteps = [
  {
    number: '01',
    title: '前期准备',
    subtitle: 'Preparation',
    description: '组建专家组，制定评价方案，明确指标体系与权重。',
  },
  {
    number: '02',
    title: '实地调研',
    subtitle: 'Investigation',
    description: '数据采集、现场核查、访谈记录、问卷调查。',
  },
  {
    number: '03',
    title: '综合评价',
    subtitle: 'Evaluation',
    description: '多维数据分析，量化分值测算，定性深度剖析。',
  },
  {
    number: '04',
    title: '成果报告',
    subtitle: 'Reporting',
    description: '撰写评价报告，提出改进建议，完成结果反馈。',
    active: true,
  },
]

export default function BusinessPage() {
  return (
    <>
      {/* 页面标题区 */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: '首页', href: '/' }, { label: '业务体系' }]} />
          <h1 className="text-5xl font-black tracking-tight text-charcoal mb-4">业务体系</h1>
          <div className="h-1.5 w-20 bg-primary"></div>
          <p className="mt-8 text-gray-500 max-w-2xl text-lg leading-relaxed">
            基于全生命周期绩效管理逻辑，为政府机构提供"事前、事中、事后"闭环评估方案，以专业深度助力行政效能提升。
          </p>
        </div>
      </section>

      {/* 服务网格 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-12 transition-colors hover:bg-gray-50 ${
                  service.dark ? 'bg-charcoal text-white' : 'bg-white'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-5xl mb-8 ${
                    service.dark ? 'text-primary' : 'text-primary'
                  }`}
                >
                  {service.icon}
                </span>
                <h3 className={`text-2xl font-black mb-6 ${service.dark ? 'text-white' : ''}`}>
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span
                        className={`size-1.5 mt-2 flex-shrink-0 ${
                          service.dark ? 'bg-primary' : 'bg-primary'
                        }`}
                      ></span>
                      <span
                        className={`text-sm font-medium ${
                          service.dark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
              Methodology
            </span>
            <h2 className="text-4xl font-black text-charcoal tracking-tight">服务流程</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className={`size-14 mb-6 flex items-center justify-center ${
                      step.active
                        ? 'bg-primary border-2 border-primary'
                        : 'bg-white border-2 border-primary'
                    }`}
                  >
                    <span
                      className={`font-black text-xl ${step.active ? 'text-white' : 'text-primary'}`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-lg font-black mb-3 text-charcoal">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-gray-500 max-w-[200px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
