'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FilterTabs } from '@/components/FilterTabs'

const industryCategories = [
  '全部分类',
  '教育事业',
  '医疗卫生',
  '基础设施',
  '农业水利',
  '社会保障',
  '科技环保',
]
const serviceTypes = ['全部类型', '事前评价', '部门整体评价', '政策绩效评价', '全过程跟踪']

const caseStudies = [
  {
    id: 1,
    industry: '教育事业',
    serviceType: '整体评价',
    title: 'XX省教育厅年度整体支出绩效评价项目',
    description:
      '该项目通过对省教育厅年度数亿元支出的全面梳理，建立了包含3个一级指标、12个二级指标的评价体系，成功发现并优化了资金分配中的重复投入问题。',
    date: '2023.10.15',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxSthG1wcKarfU5CVpyI7D6lTBG1oQeY0fzsqCmcsYtvj1bfVrDMa9l68o12hZAZvb03hOybhjrBbXNcBy0Swm7oyk0OYPkWSuwNMCCYUv2H7AjRKWitzrB_Rc77pmMCVRjNZFSMtRLfWfToKxpeN2kWZvJMT0TmOU1dvPfkerhUHyGes_838XS2eDvtVgKTrCK8cdD_lKOYhq-tNo156pd3fVD_YGk-4FWw6Qy29gAn_S-QVvbKWIJYpM-UyXhqI9HDz7yVUWKgsF',
  },
  {
    id: 2,
    industry: '医疗卫生',
    serviceType: '事前评价',
    title: '市级智慧医疗服务平台建设项目事前评估',
    description:
      '针对拟投入的数千万级智慧医疗项目进行事前可行性与绩效目标评审，从技术领先性、公众获益度及运维可持续性三个维度提供专业评审意见。',
    date: '2023.08.22',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnPdzJSaBbB8eCEYWLYFTOfhvBCZHpFftewhiAqk3XVLbkjUykgMLpYwT6MFEQVpk3eseLY9STpFZWCG_gEG2Pgk_BMt9ZgwzhE789WA94mKmRORjPeMzarPKjTMwzMrj3OMTqT3iom_R7JyUS04T86uNT_x4-jOVTBCwLJe0ZAydZQTsoyRsGYJpvdUJK7nT7TgFRydY-19gC0qSBYp_Rc0nuXoyy_mdvlQhJ5XQdZ04Z5my7sIa04nN2ublMKNNwTw3tArNl3sEW',
  },
  {
    id: 3,
    industry: '基础设施',
    serviceType: '全过程跟踪',
    title: '临港开发区道路配套设施PPP项目跟踪评估',
    description:
      '对为期三年的基建项目进行动态监控与年度绩效考核，建立闭环反馈机制，确保公共资金在工程进度与质量管控中发挥最大效益。',
    date: '2023.05.11',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCo6OouKqRr7dJfKMGNbEsgOKXLk4JtH_fhNGqJ7odysolzobE9j0UYW2q5rBY7w1KNPRmbr4u-F_I5iTtL15jKxrdInnPkBzTjIrrlCUL-F8ktce76lN9mUB1QKIjyOF2Br-vySYFbw2QDupgHSVd-69UVg3L5jT3ncI59yMxCJxxOjPLA6qy9mA-9la341nfvw0eVzkyljUIus_-WxGvJtjLhoQIpLBg0Wieh6t3JruA2Ba633vyqlaaU3prN5y0lxrElzODOsD2C',
  },
  {
    id: 4,
    industry: '科技环保',
    serviceType: '政策评价',
    title: '某省"蓝天行动"专项资金政策绩效审计评价',
    description:
      '深度评估环保补贴政策对工业减排的实际驱动力，分析政策边际效益，为下一年度政策微调提供量化数据支撑。',
    date: '2022.12.05',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLZyLGhqjZghFPZpxWZtgYfpwoDtvwUVjpzsAQNQT4gb02n6lE7-h5I2gGqaO9M7iM4PgpGDyTVvkR85ERJWG6jjeiyfkvyU8sHTsDNFH0FAKifjdk8QHR_Bcw5RlCQ6RcsZFTLZU8B8X0uUipAy539SbgYgP5xTxCgzKpO1GuToYcHyRIzzsKq_fxCt195AwqIa9QKj33NaSM_lV4uFTnCeMX-xcZ_HIJeOPQmTN-IIwyxKP8TKXAwJN30Y8iOgfpLIusc7F0Gil',
  },
  {
    id: 5,
    industry: '农业水利',
    serviceType: '实地调查',
    title: '高标准农田建设补助资金绩效抽查项目',
    description:
      '深入基层，通过5000+份问卷调查与实地工程核查，真实还原财政补助资金在农户增收与土地改良方面的实际产出。',
    date: '2022.09.28',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWfPGEiqD5Qssc4GEx_AkyvJ-P5qsaL0PHW618GRW4hIsqcesqKmd_ATsMnCKBa_x9NhAGMTIoED4duqS_wRF6MWXnslmh1VwyYr3Z9WBBAkKAMa0u7RgLykUWXjNEipB-hmQHKLQIz6D_07xymtlHoHhTr4Cok8cZXLUOjy7GSL5dk1rlb88zngOpM8ACuwXeiwaOAGUhG7onZdSoKLsSabc_qupC16uLRASlUNyfi0Z39tglv-db2DHP9ium2g_RjnTXgOhGkocF',
  },
]

export default function CasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('全部分类')
  const [selectedServiceType, setSelectedServiceType] = useState('全部类型')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredCases = caseStudies.filter((caseItem) => {
    if (selectedIndustry !== '全部分类' && caseItem.industry !== selectedIndustry) return false
    if (selectedServiceType !== '全部类型' && caseItem.serviceType !== selectedServiceType)
      return false
    return true
  })

  return (
    <>
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-black tracking-tight text-charcoal mb-4">典型案例</h2>
          <p className="text-[#886363] text-lg max-w-2xl leading-relaxed">
            专业、透明、高效的第三方政府绩效评价成果展示，助力政府治理现代化与公共资源精准投放。
          </p>
        </div>

        {/* Success Metrics Bar */}
        <section className="mb-16 border-y border-[#eeeeee] py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
                完成项目总数 / TOTAL PROJECTS
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">500+</span>
                <span className="text-green-600 text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>15%
                </span>
              </div>
              <p className="text-xs opacity-50">覆盖全国20余个省市自治区</p>
            </div>
            <div className="flex flex-col gap-2 border-x border-[#eeeeee] px-8">
              <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
                服务部门机构 / DEPARTMENTS
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">50+</span>
                <span className="text-green-600 text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>5%
                </span>
              </div>
              <p className="text-xs opacity-50">长期合作各级财政及职能部门</p>
            </div>
            <div className="flex flex-col gap-2 px-8 md:px-0">
              <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
                行业沉淀经验 / YEARS EXPERTISE
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">10+</span>
                <span className="text-sm opacity-50">YEARS</span>
              </div>
              <p className="text-xs opacity-50">核心团队深耕绩效评估领域十年</p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-12 bg-background-light border border-[#eeeeee] p-6 space-y-6">
          <FilterTabs
            categories={industryCategories}
            selectedCategory={selectedIndustry}
            onCategoryChange={setSelectedIndustry}
            label="行业领域"
          />
          <div className="flex flex-wrap items-start gap-4 pt-4 border-t border-dashed border-[#eeeeee]">
            <FilterTabs
              categories={serviceTypes}
              selectedCategory={selectedServiceType}
              onCategoryChange={setSelectedServiceType}
              label="服务类型"
            />
          </div>
        </section>

        {/* Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <article
              key={caseItem.id}
              className="group border border-[#eeeeee] hover:border-primary transition-all flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${caseItem.image}')` }}
                ></div>
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 border border-primary text-primary uppercase">
                    {caseItem.industry}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-[#f4f0f0] text-[#886363] uppercase">
                    {caseItem.serviceType}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-[#886363] line-clamp-3 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-[#eeeeee] pt-4">
                  <span className="text-xs opacity-50">{caseItem.date}</span>
                  <Link
                    href={`/cases/${caseItem.id}`}
                    className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    查看详情{' '}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
          {/* Empty/Add state variant */}
          <article className="border border-dashed border-[#dddddd] flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="size-16 rounded-full bg-[#f4f0f0] flex items-center justify-center text-[#886363] mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <h3 className="text-lg font-bold mb-2">更多案例整理中</h3>
            <p className="text-xs opacity-50">如有特定行业项目展示需求，请联系咨询</p>
          </article>
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="size-10 flex items-center justify-center border border-[#eeeeee] hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`size-10 flex items-center justify-center border border-[#eeeeee] hover:border-primary transition-colors ${
                currentPage === 1 ? 'bg-primary text-white' : ''
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`size-10 flex items-center justify-center border border-[#eeeeee] hover:border-primary transition-colors ${
                currentPage === 2 ? 'bg-primary text-white' : ''
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`size-10 flex items-center justify-center border border-[#eeeeee] hover:border-primary transition-colors ${
                currentPage === 3 ? 'bg-primary text-white' : ''
              }`}
            >
              3
            </button>
            <span className="px-2 opacity-50">...</span>
            <button
              onClick={() => setCurrentPage(12)}
              className={`size-10 flex items-center justify-center border border-[#eeeeee] hover:border-primary transition-colors ${
                currentPage === 12 ? 'bg-primary text-white' : ''
              }`}
            >
              12
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(12, currentPage + 1))}
              className="size-10 flex items-center justify-center border border-[#eeeeee] hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        </div>
      </main>
    </>
  )
}
