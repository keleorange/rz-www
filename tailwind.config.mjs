/** @type {import('tailwindcss').Config} */
/**
 * Tailwind CSS 配置
 *
 * 注意：在 Tailwind CSS v4 中，colors 和 borderRadius 应该在 globals.css 的 @theme inline 中定义
 * 这里的配置会被 globals.css 中的 CSS 变量覆盖
 *
 * 此文件主要用于：
 * - fontFamily 配置
 * - typography 插件配置
 * - 其他不通过 CSS 变量管理的配置
 */
const config = {
  theme: {
    extend: {
      // 颜色和 borderRadius 在 globals.css 的 @theme inline 中定义
      // 这里保留注释作为参考，实际生效的是 CSS 变量
      // colors: { primary: '#B22222', ... } // 定义在 globals.css
      // borderRadius: { DEFAULT: '0', ... } // 定义在 globals.css

      fontFamily: {
        display: ['Noto Sans SC', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
