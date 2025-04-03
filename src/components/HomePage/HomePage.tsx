import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import GameGrid from './GameGrid';
import Footer from './Footer';

// 导入示例数据
import gamesData from './data/games.json';

/**
 * 首页组件
 * 
 * 游戏网站的主页，整合导航栏、游戏展示和页脚
 */
const HomePage: React.FC = () => {
  const { featuredGames, games, categories } = gamesData;
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof games>([]);
  const [showSearch, setShowSearch] = useState(false);

  // 模拟数据加载
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 处理搜索
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearch(true);
    
    // 简单的搜索逻辑，匹配游戏标题和描述
    const results = [...featuredGames, ...games].filter(
      (game) =>
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
  };

  // 清除搜索
  const clearSearch = () => {
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1433] flex flex-col">
      {/* 导航栏 */}
      <Navbar categories={categories} onSearch={handleSearch} />

      {/* 主要内容 */}
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4">
          {/* 页面标题 */}
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              探索<span className="text-[#00C2FF]">宇宙</span>游戏世界
            </h1>
            <p className="text-[#A0AEC0] text-lg max-w-2xl mx-auto">
              即点即玩的免费在线游戏平台，无需下载，畅享游戏乐趣。
            </p>
          </div>

          {/* 搜索结果 */}
          {showSearch && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <div className="h-6 w-1 bg-gradient-to-b from-[#00C2FF] to-[#7B42F6] rounded-full mr-2"></div>
                  搜索：{searchQuery}
                </h2>
                <button
                  onClick={clearSearch}
                  className="text-[#A0AEC0] hover:text-white text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
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
                  清除搜索
                </button>
              </div>
              <GameGrid
                games={searchResults}
                loading={false}
              />
            </div>
          )}

          {/* 主要内容区域（非搜索状态） */}
          {!showSearch && (
            <>
              {/* 特色游戏 */}
              <GameGrid
                title="特色游戏"
                subtitle="我们精选的热门游戏"
                games={featuredGames}
                loading={loading}
              />

              {/* 全部游戏 */}
              <GameGrid
                title="探索更多游戏"
                subtitle="发现更多有趣的游戏体验"
                games={games}
                loading={loading}
                showMore={true}
                onShowMore={() => console.log('加载更多游戏')}
              />

              {/* 游戏分类展示 */}
              <section className="my-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="h-6 w-1 bg-gradient-to-b from-[#00C2FF] to-[#7B42F6] rounded-full mr-2"></div>
                  游戏分类
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <a
                      key={category.id}
                      href={`/category/${category.id}`}
                      className="group relative bg-[#0B1433]/70 border border-[#7B42F6]/20 rounded-lg p-4 transition-all duration-300 hover:border-[#00C2FF]/50 hover:shadow-lg hover:shadow-[#00C2FF]/10"
                    >
                      <h3 className="text-white font-bold mb-1 group-hover:text-[#00C2FF] transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-[#A0AEC0] text-sm">
                        {category.count} 款游戏
                      </p>
                      {/* 右下角图标 */}
                      <div className="absolute bottom-3 right-3 opacity-30 group-hover:opacity-80 transition-opacity duration-300">
                        <svg
                          className="w-6 h-6 text-[#00C2FF]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default HomePage; 