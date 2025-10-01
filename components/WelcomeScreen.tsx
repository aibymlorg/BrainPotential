
import React, { useState } from 'react';
import { Difficulty, ChallengeCategory } from '../types';
import type { FilterCategory } from '../types';

interface WelcomeScreenProps {
  onStart: (difficulty: Difficulty, category: FilterCategory) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  const getCategoryButtonClass = (category: FilterCategory) => {
    const baseClass = "px-6 py-2 font-semibold text-sm rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105";
    if (selectedCategory === category) {
      return `${baseClass} bg-cyan-500 text-gray-900 focus:ring-cyan-400 shadow-lg shadow-cyan-500/30`;
    }
    return `${baseClass} bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-500`;
  };

  return (
    <div className="text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
      <h1 className="text-5xl md:text-6xl font-display font-bold text-cyan-300 mb-4">
        神經連結
      </h1>
      <p className="text-xl text-gray-300 mb-2 font-display">大腦 vs 人工智慧</p>
      <p className="max-w-2xl mx-auto text-gray-400 mb-8">
        測試您對生物智能與人工智能之間迷人差異的了解。將卡片拖到正確的類別中，看看誰能贏得這場心智之戰。
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-display text-gray-200 mb-4">篩選類別</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={getCategoryButtonClass('all')}
            aria-pressed={selectedCategory === 'all'}
          >
            全部
          </button>
          <button
            onClick={() => setSelectedCategory(ChallengeCategory.Fact)}
            className={getCategoryButtonClass(ChallengeCategory.Fact)}
            aria-pressed={selectedCategory === ChallengeCategory.Fact}
          >
            事實
          </button>
          <button
            onClick={() => setSelectedCategory(ChallengeCategory.UseCase)}
            className={getCategoryButtonClass(ChallengeCategory.UseCase)}
            aria-pressed={selectedCategory === ChallengeCategory.UseCase}
          >
            應用場景
          </button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-display text-gray-200 mb-4">選擇難度</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onStart(Difficulty.Easy, selectedCategory)}
            className="px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
          >
            簡單 (僅限事實)
          </button>
          <button
            onClick={() => onStart(Difficulty.Medium, selectedCategory)}
            className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold text-lg rounded-full hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30"
          >
            中等
          </button>
          <button
            onClick={() => onStart(Difficulty.Hard, selectedCategory)}
            className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30"
          >
            困難
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;