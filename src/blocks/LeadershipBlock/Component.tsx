import React from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

export const LeadershipBlock: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="flex flex-col lg:flex-row items-stretch bg-white border border-gray-100 shadow-2xl">
        <div className="lg:w-5/12 min-h-[500px] relative">
          <Image
            alt="董事长张闰政"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1mAUlweWEohStbXq04t9B9qaajKGmALqxwrYU6u_9bqtwnOs-6suVjR1q7h4WWFv40fSNBbiImxGo-4Qrr3Z8i0hrjk7k_HNpxrs5koqyVCMMZMNcXa5Y3curWty9Hl4DncSk4N2EoKjW8KSyTfne7iJITb2Ja7Tf-n2ZGgqOXZcqs1MfBLPinyZ1Erog87t13AjdP7TFQbu5jtveph9Z3jNKTX6acQxwpPPkn06lxUNiJMvP7ByIXRYZ15k0JEFjpia82mxcAuXP"
            width={800}
            height={500}
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
        <div className="lg:w-7/12 p-10 md:p-20 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Quote className="text-charcoal" size={120} />
          </div>
          <h2 className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-8">
            Leadership Message
          </h2>
          <h3 className="text-3xl font-black mb-8 text-charcoal leading-tight italic border-l-8 border-primary pl-8">
            用第三方的冷峻视角，助力政府释放治理热度。
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 font-medium">
            &ldquo;在公共治理精细化的今天，第三方的价值在于不偏不倚的&lsquo;显微镜&rsquo;与&lsquo;手术刀&rsquo;。闰政咨询不只是评估报告的制作者，更是政府科学决策的外部守望者。我们深知，每一份评估数据的背后，都关乎公共资源的效率，关乎社会民生的福祉。&rdquo;
          </p>
          <div className="pt-8 border-t border-gray-100">
            <p className="font-black text-2xl tracking-tighter text-charcoal">张闰政</p>
            <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">
              创始人 & 董事长
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="w-16 h-px bg-primary"></div>
              <span className="text-3xl font-serif italic text-primary opacity-90 tracking-tighter">
                张闰政
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
