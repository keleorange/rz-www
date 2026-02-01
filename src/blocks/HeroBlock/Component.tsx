import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export interface HeroBlockProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export const HeroBlock: React.FC<HeroBlockProps> = ({
  title = '科学评估',
  subtitle = '助力政府绩效提升',
  description = '闰政咨询深耕政府绩效管理领域，提供客观、独立、专业的第三方评估服务，以数据驱动公共行政效率优化。',
  primaryCta = { text: '业务领域', href: '/business' },
  secondaryCta = { text: '了解闰政', href: '/about' },
}) => {
  return (
    <section className="relative h-[720px] flex items-center justify-start overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
        <div
          className="h-full w-full bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmC6cKf0Mgb-X5FY0Hq6vAeWK09y4cLJW1Ws5yRo6cnmAjdLVPp9EeOtU40Ui_G2ot6RNU5QxxIn2NoWzEtXRbVBe7cgQACOcRX1FBoM23tjCVLqE85dszR6RrpfzwkhiMTw3BKb8CHur5RJCeL18h5qdzHjLAW2t8Ljg85xsVSnVmT3C1tH4piQenyYFP4ZqXy-jXB8Pm_u68wYH8jJwc1DzUT-o4poiI_H9eGv8q4wWHFoMf9XGnyeQdXUUr8HWJ5TBqJRfKL-Tj')",
          }}
        ></div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-white text-xs font-bold tracking-[0.4em] uppercase">
              政府第三方绩效评价专家
            </span>
          </div>
          <h1 className="text-white text-6xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
            {title}
            <br />
            <span className="text-primary">{subtitle}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href={primaryCta.href}
              className="px-10 py-5 bg-primary text-white font-bold text-sm tracking-widest uppercase rounded-sm shadow-2xl hover:bg-primary-dark transition-all flex items-center gap-3 group"
            >
              {primaryCta.text}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
            <Link
              href={secondaryCta.href}
              className="px-10 py-5 border border-white/30 text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              {secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
