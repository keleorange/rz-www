'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Logo } from '@/components/Logo'
import { Search, Gavel } from 'lucide-react'

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于闰政', href: '/about' },
  { name: '业务体系', href: '/business' },
  { name: '绩效动态', href: '/news' },
  { name: '典型案例', href: '/cases' },
  { name: '政策法规', href: '/policies' },
]

export const HeaderStatic: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-12">
            <Logo />
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-bold tracking-wider transition-colors ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden xl:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search size={20} />
              </span>
              <input
                className="w-48 bg-gray-50 border border-gray-200 rounded-sm pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="搜索政策或案例..."
              />
            </div>
            <Link
              href="/official"
              className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-1.5 rounded-sm text-xs font-bold tracking-widest transition-all"
            >
              <Gavel size={18} />
              <span>官方入口</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
