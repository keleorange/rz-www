import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/Logo'

const footerLinks = {
  aboutUs: [
    { name: '公司简介', href: '/about/company' },
    { name: '专家团队', href: '/about/team' },
    { name: '资质荣誉', href: '/about/honors' },
    { name: '服务承诺', href: '/about/commitment' },
  ],
  services: [
    { name: '业务体系', href: '/business' },
    { name: '绩效动态', href: '/news' },
    { name: '典型案例', href: '/cases' },
    { name: '政策法规', href: '/policies' },
  ],
  contact: [
    { name: '在线留言', href: '/contact/message' },
    { name: '招贤纳士', href: '/careers' },
    { name: '廉洁举报', href: '/report' },
    { name: '法律条款', href: '/legal' },
  ],
}

export const FooterStatic: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Logo variant="footer" />
            </div>
            <p className="max-w-xs mb-10 text-sm leading-relaxed">
              提供科学、公正、独立的政府第三方绩效评价服务。闰政咨询，助力公共行政效能提升。
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">domain</span>
              </a>
              <a
                className="size-10 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">description</span>
              </a>
              <a
                className="size-10 bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-8">
              关于我们
            </h5>
            <ul className="space-y-4 text-xs">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-8">
              服务导航
            </h5>
            <ul className="space-y-4 text-xs">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-8">
              联系我们
            </h5>
            <ul className="space-y-4 text-xs">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2024 闰政咨询 (Runzheng Consulting) 版权所有。</p>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">
              隐私政策
            </a>
            <a className="hover:text-white" href="#">
              法律声明
            </a>
            <a className="hover:text-white" href="#">
              网站地图
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
