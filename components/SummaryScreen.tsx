
import React from 'react';
import { Difficulty } from '../types';

interface SummaryScreenProps {
  score: number;
  total: number;
  onStartNewGame: (difficulty: Difficulty) => void;
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({ score, total, onStartNewGame }) => {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  let summaryText = "";
  if (percentage >= 80) {
    summaryText = "太棒了！您對 AI 與人類智能之間的細微差別有著深刻的理解。";
  } else if (percentage >= 50) {
    summaryText = "做得好！您正在成為神經網絡專家的路上。";
  } else {
    summaryText = "一個很好的開始！人工智慧和神經科學的世界非常複雜。再玩一次以了解更多！";
  }

  return (
    <div className="text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
      <h2 className="text-4xl font-display font-bold text-cyan-300 mb-4">遊戲結束！</h2>
      <p className="text-xl text-gray-300 mb-2">您的最終得分</p>
      <p className="text-7xl font-display font-bold text-white my-4">{score} / {total}</p>
      <p className="max-w-xl mx-auto text-gray-400 mb-8">{summaryText}</p>
      
      <div className="mt-10 pt-6 border-t border-cyan-500/20">
        <h3 className="text-2xl font-display text-gray-200 mb-4">再玩一次？</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onStartNewGame(Difficulty.Easy)}
            className="px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
          >
            簡單
          </button>
          <button
            onClick={() => onStartNewGame(Difficulty.Medium)}
            className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold text-lg rounded-full hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30"
          >
            中等
          </button>
          <button
            onClick={() => onStartNewGame(Difficulty.Hard)}
            className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30"
          >
            困難
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;
