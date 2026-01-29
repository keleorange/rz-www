import Link from 'next/link'
import React from 'react'

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-charcoal">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
