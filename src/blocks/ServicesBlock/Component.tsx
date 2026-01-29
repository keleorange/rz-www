import React from 'react'
import Link from 'next/link'

const services = [
  {
    icon: 'analytics',
    title: '预算绩效评价',
    description: '事前评估、事中监控、事后评价，确保财政资金使用提质增效。',
    link: '/services/budget-performance',
  },
  {
    icon: 'rule',
    title: '营商环境评价',
    description: '对标国际及国内先进标准，对政务环境、法治环境进行深度剖析。',
    link: '/services/business-environment',
  },
  {
    icon: 'query_stats',
    title: '民生实事评估',
    description: '围绕社会治理及公共服务，客观测评群众获得感与满意度。',
    link: '/services/public-welfare',
  },
  {
    icon: 'account_balance',
    title: '行政事业咨询',
    description: '内部控制建设、成本核算、政府综合财务报告编制咨询服务。',
    link: '/services/administrative-consulting',
  },
]

export const ServicesBlock: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black text-charcoal mb-6 tracking-tight">核心业务体系</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            专注于政府绩效全生命周期管理，提供从规划到反馈的全链条专业咨询。
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-12 hover:bg-primary group transition-all duration-300"
            >
              <div className="size-16 border-2 border-primary text-primary mb-8 flex items-center justify-center group-hover:border-white group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-white transition-all"
              >
                详情介绍 <span className="material-symbols-outlined text-sm">chevron_right</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
