import React from 'react'
import { TimelineBlock } from '@/blocks/TimelineBlock/Component'
import { OrgChartBlock } from '@/blocks/OrgChartBlock/Component'
import { LeadershipBlock } from '@/blocks/LeadershipBlock/Component'

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26, 24, 24, 0.85), rgba(26, 24, 24, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVyCDXYoXyxoRRnQwvIx2KZcKC43ZLQ_Ty7_RTPCSMKj0PXgK8Pi5OfjRcQUwqkYul6wM8xAVHoW35r-m5x5M7tulnTLFxxYkySH6ASG0eHiqd8Gu0VfHEurQgQF679Rh6mmjdfzrNl3YMyiHD9qK-3skBUyKJQvHmsai9n9utLgaj4k_JpiDFrXZrhein4JyPHhkA8KlawMrvFQabTQWSrdJ3u7DfRLjmCGAzOsETh0hyGvddFm3It7p4MhoHF6mZ1lwykEYgTVhi')",
          }}
        ></div>
        <div className="relative z-10 max-w-[1000px] text-center px-6">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.3em] text-white uppercase border-l-4 border-primary bg-white/5">
            始创于 2008
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
            企业简介
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            作为独立的第三方专业机构，闰政咨询专注于政府绩效评价。我们以客观、公正的视角，赋能公共事务治理，助力政府提升行政效能与决策质量。
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-24">
        {/* 企业简介区块 */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4">
                Corporate Profile
              </h2>
              <h3 className="text-4xl font-black text-charcoal tracking-tight mb-8">
                独立·客观·专业的第三方评价
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  北京闰政咨询有限公司（简称&ldquo;闰政咨询&rdquo;）是国内领先的政府绩效评价第三方机构。我们始终坚守&ldquo;客观公正、专业严谨&rdquo;的核心价值观，致力于为各级政府部门提供全方位的预算绩效管理、重大项目评估、社会政策评价及管理咨询服务。
                </p>
                <p>
                  作为不涉及利益关联的独立机构，我们构建了科学、标准、量化的评估指标体系，通过深度现场调研、大数据分析与专家论证，揭示公共项目运行的真实成效，为政府优化资源配置提供坚实的数据支撑与决策建议。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-black text-charcoal">1500+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                    评估项目总数
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-black text-charcoal">200+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                    政府合作单位
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">gavel</span>
                <h4 className="font-bold mb-2">行政效能评估</h4>
                <p className="text-xs text-gray-500">科学量化职能履行实效</p>
              </div>
              <div className="bg-charcoal text-white p-8 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  analytics
                </span>
                <h4 className="font-bold mb-2">预算绩效评价</h4>
                <p className="text-xs text-gray-400">事前评审与事后评价</p>
              </div>
              <div className="bg-primary text-white p-8 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-white text-4xl mb-4">policy</span>
                <h4 className="font-bold mb-2">重大政策评估</h4>
                <p className="text-xs text-white/80">政策落地效果深度分析</p>
              </div>
              <div className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">groups</span>
                <h4 className="font-bold mb-2">民意调查服务</h4>
                <p className="text-xs text-gray-500">客观反馈社会治理感知度</p>
              </div>
            </div>
          </div>
        </section>

        {/* 发展历程 */}
        <TimelineBlock />

        {/* 专业资质区块 */}
        <section className="mb-32">
          <div className="bg-charcoal text-white p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4">
                Expertise & Qualifications
              </h2>
              <h3 className="text-4xl font-black mb-12 tracking-tight">专业资质与研究实力</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="border-t border-white/20 pt-8">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    verified_user
                  </span>
                  <h5 className="text-xl font-bold mb-4">官方认证资质</h5>
                  <ul className="text-gray-400 space-y-3 text-sm">
                    <li>• 工程咨询甲级资信（评估咨询）</li>
                    <li>• 政府采购项目绩效评价特级机构</li>
                    <li>• ISO9001质量管理体系认证</li>
                    <li>• 信息安全管理体系认证（ISO27001）</li>
                  </ul>
                </div>
                <div className="border-t border-white/20 pt-8">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    menu_book
                  </span>
                  <h5 className="text-xl font-bold mb-4">核心研究成果</h5>
                  <ul className="text-gray-400 space-y-3 text-sm">
                    <li>• 出版《政府绩效管理实战路径》专著</li>
                    <li>• 拥有30余项软件著作权及评价模型专利</li>
                    <li>• 建立超过50,000条的评价指标数据库</li>
                    <li>• 每年发布《区域政府效能白皮书》</li>
                  </ul>
                </div>
                <div className="border-t border-white/20 pt-8">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    account_balance
                  </span>
                  <h5 className="text-xl font-bold mb-4">学术合作平台</h5>
                  <ul className="text-gray-400 space-y-3 text-sm">
                    <li>• 多所知名高校公共管理学院实训基地</li>
                    <li>• 中国行政管理学会会员单位</li>
                    <li>• 联合智库绩效评价研究中心发起方</li>
                    <li>• 省级财政绩效专家库入库单位</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] opacity-10">
              <span className="material-symbols-outlined text-[400px]">verified</span>
            </div>
          </div>
        </section>

        {/* 组织架构 */}
        <OrgChartBlock />

        {/* 领导寄语 */}
        <LeadershipBlock />
      </div>
    </>
  )
}
