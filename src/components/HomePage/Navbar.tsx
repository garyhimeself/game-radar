'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COLORS, SHADOWS } from './theme';

// 分类接口
interface Category {
  id: string;
  name: string;
  count?: number;
}

// 导航栏Props接口
interface NavbarProps {
  categories: Category[];
  onSearch?: (query: string) => void;
}

/**
 * 导航栏组件
 * 
 * 网站顶部导航，包含Logo、游戏分类和搜索功能
 */
const Navbar: React.FC<NavbarProps> = ({ categories, onSearch }) => {
  // 搜索查询状态
  const [searchQuery, setSearchQuery] = useState('');
  // 是否显示移动菜单
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // 是否滚动
  const [isScrolled, setIsScrolled] = useState(false);

  // 处理搜索提交
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050914]/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      style={{ 
        boxShadow: isScrolled ? SHADOWS.navShadow : 'none' 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-36 md:h-10 md:w-44">
              {/* 替换为实际Logo */}
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-10 md:w-10 relative mr-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#7B42F6] animate-pulse-slow"></div>
                  <div className="absolute inset-1 rounded-full bg-[#050914] flex items-center justify-center">
                    <span className="text-[#00C2FF] text-lg md:text-xl font-bold">G</span>
                  </div>
                </div>
                <span className="text-white text-lg md:text-2xl font-bold">
                  Game<span className="text-[#00C2FF]">Radar</span>
                </span>
              </div>
            </div>
          </Link>

          {/* 桌面导航 - 仅在中等及以上屏幕显示 */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* 分类链接 */}
            <div className="flex space-x-4">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="text-[#A0AEC0] hover:text-white transition-colors duration-200 text-sm py-1 px-2 relative group"
                >
                  <span>{category.name}</span>
                  {/* 悬停时显示的底部线条 */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00C2FF] to-[#7B42F6] group-hover:w-full transition-all duration-300"></span>
                  {/* 可选：显示游戏数量 */}
                  {category.count && (
                    <span className="ml-1 text-xs text-[#00C2FF]">({category.count})</span>
                  )}
                </Link>
              ))}
              {/* 如果分类太多，添加"更多"下拉菜单 */}
              {categories.length > 5 && (
                <div className="relative group">
                  <button className="text-[#A0AEC0] hover:text-white transition-colors duration-200 text-sm py-1 px-2 flex items-center">
                    更多
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* 下拉菜单 */}
                  <div className="absolute left-0 mt-2 w-48 bg-[#0B1433] rounded-md shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 border border-[#7B42F6]/30">
                    {categories.slice(5).map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.id}`}
                        className="block px-4 py-2 text-sm text-[#A0AEC0] hover:bg-[#7B42F6]/20 hover:text-white transition-colors duration-150"
                      >
                        {category.name}
                        {category.count && (
                          <span className="ml-1 text-xs text-[#00C2FF]">({category.count})</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 搜索框 */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="搜索游戏..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#0B1433]/50 text-white text-sm py-2 pl-10 pr-4 rounded-full w-52 focus:w-64 transition-all duration-300 border border-[#7B42F6]/30 focus:border-[#00C2FF]/70 focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0AEC0]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden bg-[#050914]/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          showMobileMenu ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* 移动端搜索框 */}
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <input
              type="text"
              placeholder="搜索游戏..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0B1433]/50 text-white text-sm py-2 pl-10 pr-4 rounded-full w-full border border-[#7B42F6]/30 focus:border-[#00C2FF]/70 focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0AEC0]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>

          {/* 移动端分类链接 */}
          <div className="grid grid-cols-2 gap-2 pb-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                onClick={() => setShowMobileMenu(false)}
                className="text-[#A0AEC0] hover:text-white transition-colors duration-200 text-sm py-2 px-4 rounded-md hover:bg-[#0B1433]/50"
              >
                {category.name}
                {category.count && (
                  <span className="ml-1 text-xs text-[#00C2FF]">({category.count})</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 