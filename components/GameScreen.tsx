
import React, { useState } from 'react';
import type { Challenge } from '../types';
import { Target } from '../types';
import DropZone from './DropZone';
import ChallengeCard from './ChallengeCard';

interface GameScreenProps {
  challenge: Challenge;
  onAnswer: (challengeId: number, droppedOn: Target) => void;
  progress: { current: number; total: number };
}

const GameScreen: React.FC<GameScreenProps> = ({ challenge, onAnswer, progress }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-2">
            <h2 className="font-display text-cyan-400">問題 {progress.current} / {progress.total}</h2>
            <div className="w-1/2 h-2 bg-gray-700 rounded-full">
                <div 
                    className="h-2 bg-cyan-400 rounded-full transition-all duration-500" 
                    style={{ width: `${(progress.current / progress.total) * 100}%` }}>
                </div>
            </div>
        </div>
      </div>
      
      <div className="mb-10 w-full flex justify-center">
        <ChallengeCard
          challenge={challenge}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <DropZone
          target={Target.Brain}
          onDrop={onAnswer}
          isDragging={isDragging}
        />
        <DropZone
          target={Target.LLM}
          onDrop={onAnswer}
          isDragging={isDragging}
        />
      </div>
    </div>
  );
};

export default GameScreen;
