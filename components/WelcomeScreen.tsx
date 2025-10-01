
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
      <h1 className="text-5xl md:text-6xl font-display font-bold text-cyan-300 mb-4">
        神經連結
      </h1>
      <p className="text-xl text-gray-300 mb-2 font-display">大腦 vs 人工智慧</p>
      <p className="max-w-2xl mx-auto text-gray-400 mb-8">
        測試您對生物智能與人工智能之間迷人差異的了解。將卡片拖到正確的類別中，看看誰能贏得這場心智之戰。
      </p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-cyan-500 text-gray-900 font-bold text-lg rounded-full hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
      >
        開始遊戲
      </button>
    </div>
  );
};

export default WelcomeScreen;
