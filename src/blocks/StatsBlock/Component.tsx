import React from 'react'
import Link from 'next/link'

export const StatsBlock: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              专业积淀
            </span>
            <h2 className="text-5xl font-black text-charcoal mb-8 tracking-tight">
              严谨的审计流程
              <br />
              专业的分析视角
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              闰政咨询以"科学、公正、严谨"为信条。我们整合行业专家库，利用多维数据采集系统，为超过200家政府机构提供过高水准的评估报告，助力公共资源精准投放。
            </p>
            <div className="grid grid-cols-2 gap-12 mb-12">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-5xl font-black text-charcoal mb-2">500+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  项目案例
                </div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-5xl font-black text-charcoal mb-2">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  客观独立性
                </div>
              </div>
            </div>
            <Link
              href="/cases"
              className="px-8 py-4 bg-charcoal text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-primary transition-all"
            >
              查看典型案例
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="relative bg-charcoal p-2 shadow-2xl">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center grayscale contrast-125 opacity-80"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDihsZzPx-KyRBD4Ihb4DgVZ7DZCX4SP7_xOByMwHV9-qDCymFYjFr3QuNVBVqUn0tPYbewyfHHFtCf-eoJo9tF3iNXQpJxRGS8HdRBmtAMVawZHTGYCm_S6FIo28Z0WsdQxZyBV_l1rKnbkcL1mtTxaxZwovW-b1pZQ_0OyxsXajCLnTB0Ef5L0X5HAivATaZl7Bc3dvMhDjfyHNf-zEkIS2oVO0YKsugA0JZWxpsXMYz2ZycY3MHZQ2nrPsu3xbcOnyhVVc0ILaqA')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
