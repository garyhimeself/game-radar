import React from 'react';
import Link from 'next/link';

/**
 * 页脚组件
 * 
 * 网站底部区域，包含导航链接、版权信息等
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050914] border-t border-[#2D3748]/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo和简介 */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 relative mr-2">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#7B42F6]"></div>
                <div className="absolute inset-1 rounded-full bg-[#050914] flex items-center justify-center">
                  <span className="text-[#00C2FF] text-lg font-bold">G</span>
                </div>
              </div>
              <span className="text-white text-lg font-bold">
                Game<span className="text-[#00C2FF]">Radar</span>
              </span>
            </div>
            <p className="text-[#A0AEC0] text-sm mb-4">
              您的宇宙游戏中心，随时畅玩各种免费在线游戏。无需下载，直接开始游戏体验！
            </p>
            <div className="flex space-x-4">
              {/* 社交媒体图标 */}
              <a
                href="#"
                className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.076c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.96 3.66 9.09 8.44 9.84v-6.96h-2.53v-2.88h2.53v-2.2c0-2.5 1.5-3.91 3.77-3.91 1.2 0 2.37.21 2.37.21v2.61h-1.33c-1.3 0-1.7.81-1.7 1.63v1.96h2.89l-.45 2.88h-2.44v6.96C18.34 21.166 22 16.967 22 12.076z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* 游戏分类 */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold mb-4">游戏分类</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/action" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  动作游戏
                </Link>
              </li>
              <li>
                <Link href="/category/puzzle" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  解谜游戏
                </Link>
              </li>
              <li>
                <Link href="/category/strategy" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  策略游戏
                </Link>
              </li>
              <li>
                <Link href="/category/arcade" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  街机游戏
                </Link>
              </li>
              <li>
                <Link href="/category/casual" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  休闲游戏
                </Link>
              </li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  关于GameRadar
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  使用条款
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#A0AEC0] hover:text-[#00C2FF] transition-colors duration-200 text-sm">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>

          {/* 订阅信息 */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-bold mb-4">获取最新资讯</h3>
            <p className="text-[#A0AEC0] text-sm mb-4">
              订阅我们的通讯，了解最新游戏和特别优惠。
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="您的邮箱地址"
                  className="bg-[#0B1433]/50 text-white text-sm py-2 px-4 rounded-l-md w-full border border-[#7B42F6]/30 focus:border-[#00C2FF]/70 focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#00C2FF] to-[#7B42F6] text-white py-2 px-4 rounded-r-md font-medium text-sm hover:opacity-90 transition-opacity duration-200"
                >
                  订阅
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7B42F6]/30 to-transparent my-6"></div>

        {/* 版权信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#A0AEC0] text-sm">
          <p>© {new Date().getFullYear()} GameRadar. 保留所有权利。</p>
          <p className="mt-2 md:mt-0">
            设计与开发：<a href="#" className="text-[#00C2FF] hover:underline">AI工程团队</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 