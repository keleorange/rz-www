import React from 'react'
import Link from 'next/link'

export const ValuesBlock: React.FC = () => {
  return (
    <section className="relative py-28 bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        <div
          className="h-full w-full bg-cover bg-fixed opacity-30 grayscale"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRberEwKFHmlS_8o47lvnzo2WzdIGIMa34S_2Ou9WDZkbQKU1swQ0BcpE9Lv_vFbVU2f8NDbAhSk6f2VivK2ET8ZYR7Ql1qjcd2C6ut5t9H07uUcLkGJHHvdZF5CptV5BDuLrAgdvW25VBZtoDs9koBEOrtCOYSfDlTxI1Y9DE3D9AUgknz2wsemTg8HQyX1WJujKCl2eMwaO8RhJ4nLeHhH5Tb3mlEmrC1M7K40B-M1A0s-6FKSS93QEG95qIrgXxVQx9GG0Nwm9k')",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
          核心价值观
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
          恪守专业诚信，促进政府善治
        </h2>
        <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
          作为第三方专业机构，我们深知责任之重。我们通过科学的评价指标体系，反馈真实、客观的绩效结果，为政府决策提供最坚实的专业支撑。
        </p>
        <Link
          href="/about"
          className="px-12 py-5 bg-primary text-white font-bold rounded-sm hover:bg-primary-dark transition-all uppercase tracking-widest text-xs"
        >
          了解我们的评估准则
        </Link>
      </div>
    </section>
  )
}
