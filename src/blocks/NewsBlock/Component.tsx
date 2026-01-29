import React from 'react'
import Link from 'next/link'

const newsItems = [
  {
    category: '政策解读',
    date: '2024年11月02日',
    title: '解读：新时代下政府绩效评估的数字化转型趋势',
    description: '探讨如何利用大数据手段提升预算绩效评价的精准度与实效性。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZs_6gHH5WlDaD7qtd48uG8b4ZXyWsOISUvkb5nsCvc0mMJgnMIo0pQbdt3g3_25IgP-giQR66KReLXEgC5ftwennez5znkyVeX_wHEkOz4VeSk7kqwG-4_bXVKhcLezB9mk7Hh150eest4TF7COWep0da5m2hxflc5OfKCboF8l3FQO9kbORKZoViVc8pNwCiik0aDthO9vt3BGlLysUnE0jRCgdEA7DFOhli8XauNhP1sFHIo2IIRlALXCi6GfCC-796MEXGqBw',
  },
  {
    category: '行业交流',
    date: '2024年10月28日',
    title: '闰政咨询受邀参加全国公共绩效管理论坛',
    description: '与会专家共同探讨第三方机构在政府职能转变中的桥梁作用。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDF3dvfLmUi7TzoTaca-aUxD0RQ6nW8R-kQLxybmsYqO4ZgczCKakzJvT4eF06rudKtmKwPI8yuYlvdSPO5454rL3XP4vV4dEO1cyyXmRxx19bl5wpAzQsV1EAI66X-yba5bt6Fu_eQ90Blw-MQC1VyQZrpfjuNh4ivdcCZHbjVOj4SvScn4jx_BVwP9DEYtXmTfCTXjEfavYksXaUTibCjz2g5R8qtfKTvSzWaNR-99uguJcxKpSK6eK3TQcEh8VzHbqrzqTohLuTK',
  },
  {
    category: '典型案例',
    date: '2024年10月15日',
    title: '某市财政专项资金整体支出绩效评价顺利结项',
    description: '本次评价成果为下年度预算安排提供了科学的决策参考依据。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDlgHnTC3MRyi66a90lp2TwH3C2tCxhuNftpzfjhj-WMlNJ6LSE4ynzHtQTkuhvblYs-NRcBE1458uQPBdV2WKdfWAiF2xvQ6rZP-aTjW08ktKU5Dankf5sg-IGdjVi5sHxgjj52tKl643KzQZrmOLwv5NRXq0ym-tHjBzVGH8TESHVAIYe6IlR7IZypzjY3NqvxvZ2pD4w6zqByFZLoW-iWEW5BKJwqm_xqXoWpaKhtLhSB7Yb43ziscmj_stBxnvChOWmofxlRAI',
  },
]

export const NewsBlock: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 border-b border-gray-100 pb-8">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">
              最新动态
            </span>
            <h2 className="text-4xl font-black tracking-tight text-charcoal">绩效动态</h2>
          </div>
          <Link
            href="/news"
            className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all"
          >
            进入新闻中心
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newsItems.map((item, index) => (
            <Link key={index} href={`/news/${index + 1}`} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="absolute bottom-0 left-0 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                  {item.category}
                </div>
              </div>
              <span className="text-xs text-gray-400 font-bold tracking-wider">{item.date}</span>
              <h3 className="text-xl font-black mt-3 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
