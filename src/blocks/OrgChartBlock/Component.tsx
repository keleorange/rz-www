import React from 'react'
import { Scale, Lightbulb, Shield } from 'lucide-react'

export const OrgChartBlock: React.FC = () => {
  return (
    <section className="mb-32 bg-gray-50 p-12 border-t-4 border-primary">
      <div className="text-center mb-20">
        <h2 className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4">
          Governance
        </h2>
        <h3 className="text-4xl font-black text-charcoal tracking-tight mb-6">组织架构</h3>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-charcoal text-white px-10 py-6 w-72 text-center shadow-2xl relative border-b-4 border-primary">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60 mb-2">
            决策管理
          </p>
          <h5 className="font-black text-xl tracking-tight">董事会 / 专家委员会</h5>
          <div className="absolute bottom-0 left-1/2 w-px h-12 bg-primary translate-y-full"></div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="bg-white text-charcoal px-10 py-6 w-72 text-center shadow-xl relative border-2 border-gray-100">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary mb-2">
              执行管理层
            </p>
            <h5 className="font-black text-xl tracking-tight">首席执行官 (CEO)</h5>
            <div className="absolute bottom-0 left-1/2 w-px h-12 bg-gray-300 translate-y-full"></div>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-gray-200 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border-l-4 border-primary shadow-md text-center">
            <Scale className="text-primary mb-4 mx-auto" size={30} />
            <h6 className="font-black text-lg tracking-tight">绩效评价事业部</h6>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed font-semibold">
              预算评价、政策评估、民调分析
            </p>
          </div>
          <div className="bg-white p-8 border-l-4 border-primary shadow-md text-center">
            <Lightbulb className="text-primary mb-4 mx-auto" size={30} />
            <h6 className="font-black text-lg tracking-tight">政策研究与智库部</h6>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed font-semibold">
              体制改革研究、公共政策研发、数据挖掘
            </p>
          </div>
          <div className="bg-white p-8 border-l-4 border-primary shadow-md text-center">
            <Shield className="text-primary mb-4 mx-auto" size={30} />
            <h6 className="font-black text-lg tracking-tight">质量与合规中心</h6>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed font-semibold">
              风控审计、报告内审、标准化管理
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
