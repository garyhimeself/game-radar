'use client';
import React from 'react';
import GameCard from './GameCard';

// 游戏数据接口
interface Game {
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

// 组件Props接口
interface GameGridProps {
  games: Game[];
  title?: string;
  subtitle?: string;
  showMore?: boolean;
  onShowMore?: () => void;
  loading?: boolean;
}

/**
 * 游戏网格组件
 * 
 * 展示一组游戏卡片，可以是精选游戏、分类游戏等
 */
const GameGrid: React.FC<GameGridProps> = ({
  games,
  title,
  subtitle,
  showMore = false,
  onShowMore,
  loading = false
}) => {
  return (
    <section className="w-full py-6">
      {/* 标题区域 */}
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center">
              {/* 装饰性元素 */}
              <div className="h-6 w-1 bg-gradient-to-b from-[#00C2FF] to-[#7B42F6] rounded-full mr-2"></div>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[#A0AEC0] text-sm ml-3">{subtitle}</p>
          )}
        </div>
      )}

      {/* 游戏网格 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {loading ? (
          // 加载状态显示骨架屏
          Array(8)
            .fill(0)
            .map((_, index) => (
              <div 
                key={`skeleton-${index}`} 
                className="rounded-lg bg-[#0B1433]/50 overflow-hidden animate-pulse"
              >
                <div className="aspect-[16/9] bg-[#2D3748]/30"></div>
                <div className="p-3">
                  <div className="h-5 bg-[#2D3748]/30 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-[#2D3748]/30 rounded w-1/2"></div>
                </div>
              </div>
            ))
        ) : (
          // 显示游戏卡片
          games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))
        )}
      </div>

      {/* 加载更多按钮 */}
      {showMore && games.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={onShowMore}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00C2FF]/20 to-[#7B42F6]/20 text-white border border-[#7B42F6]/50 hover:from-[#00C2FF]/30 hover:to-[#7B42F6]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,194,255,0.5)] flex items-center space-x-2"
          >
            <span>加载更多游戏</span>
            <svg 
              className="w-4 h-4 fill-current" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      )}

      {/* 空状态 */}
      {!loading && games.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-[#0B1433]/50 rounded-full p-4 mb-4">
            <svg
              className="w-12 h-12 text-[#A0AEC0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">没有找到游戏</h3>
          <p className="text-[#A0AEC0] max-w-md">
            暂时没有符合条件的游戏。请尝试其他分类或者稍后再来查看。
          </p>
        </div>
      )}
    </section>
  );
};

export default GameGrid; 