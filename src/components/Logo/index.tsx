import Link from 'next/link'
import React from 'react'

interface LogoProps {
  variant?: 'default' | 'footer'
  href?: string
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', href = '/' }) => {
  const logoContent = (
    <div className="flex items-center gap-3">
      <div className={`bg-primary ${variant === 'footer' ? 'p-1' : 'p-1.5'} rounded-sm`}>
        <svg
          className={`${variant === 'footer' ? 'size-8' : 'size-10'} text-white`}
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={`${
            variant === 'footer' ? 'text-xl' : 'text-2xl'
          } font-black tracking-tighter text-charcoal ${variant === 'footer' ? 'text-white' : ''} leading-none`}
        >
          闰政咨询
        </span>
        <span
          className={`${
            variant === 'footer' ? 'text-[8px]' : 'text-[10px]'
          } font-bold tracking-[0.3em] text-primary`}
        >
          RUNZHENG
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
