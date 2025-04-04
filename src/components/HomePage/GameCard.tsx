'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 导入主题配置
import { COLORS, TRANSITIONS, SHADOWS } from './theme';

// 游戏卡片接口定义
interface GameCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string;
  rating?: number;
  featured?: boolean;
  plays?: number;
}

/**
 * 游戏卡片组件
 * 
 * 展示游戏缩略图、标题和基本信息，是首页和分类页的基本展示单元
 */
const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  url,
  category,
  rating,
  featured,
  plays
}) => {
  // 使用默认图片作为占位符
  const placeholderImage = '/images/placeholder-game.jpg';
  
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg bg-gradient-to-br from-[#0B1433]/80 to-[#050914]">
      {/* 游戏卡片链接 */}
      <Link 
        href={url} 
        className="block h-full w-full" 
        title={`玩 ${title}`}
      >
        {/* 缩略图容器 */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {/* 游戏缩略图 */}
          <div className="relative h-full w-full">
            {/* 使用Next.js的Image组件进行优化 */}
            <Image
              src={thumbnail || placeholderImage}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={featured}
            />
            
            {/* 分类标签 */}
            <div className="absolute right-2 top-2 rounded bg-[#7B42F6]/90 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
              {category}
            </div>
            
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/90 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"></div>
          </div>
        </div>

        {/* 游戏信息 */}
        <div className="p-3">
          {/* 游戏标题 */}
          <h3 className="mb-1 text-lg font-bold text-white group-hover:text-[#00C2FF] transition-colors duration-300">
            {title}
          </h3>
          
          {/* 游戏评分和游玩次数 */}
          <div className="flex items-center justify-between text-xs text-[#A0AEC0] mb-2">
            {rating && (
              <div className="flex items-center">
                <svg className="mr-1 h-4 w-4 fill-[#ED8936]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{rating.toFixed(1)}</span>
              </div>
            )}
            
            {plays && (
              <div className="flex items-center">
                <svg className="mr-1 h-4 w-4 fill-[#A0AEC0]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span>{plays > 1000 ? `${(plays / 1000).toFixed(1)}k` : plays}</span>
              </div>
            )}
          </div>
          
          {/* 游戏描述（在悬停时显示） */}
          <div className="mt-2 hidden text-sm text-[#E2E8F0]/80 opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100 line-clamp-2">
            {description}
          </div>
        </div>
        
        {/* 悬停时显示的"立即玩"按钮 */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#050914]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="transform rounded-full bg-gradient-to-r from-[#00C2FF] to-[#7B42F6] px-5 py-2 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105">
            立即玩
          </div>
        </div>
        
        {/* 发光边框效果（悬停时显示） */}
        <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
             style={{
               boxShadow: `0 0 15px 2px ${COLORS.neonBlue}, 0 0 20px 5px ${COLORS.neonPurple}/30`,
               pointerEvents: 'none'
             }}>
        </div>
      </Link>
    </div>
  );
};

export default GameCard; 