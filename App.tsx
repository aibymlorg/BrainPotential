import React, { useState, useCallback, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';
import SummaryScreen from './components/SummaryScreen';
import FeedbackModal from './components/FeedbackModal';
import { CHALLENGES } from './constants';
import type { Challenge } from './types';
import { GameState, Target } from './types';

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [score, setScore] = useState(0);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean; explanation: string } | null>(null);
  const [shuffledChallenges, setShuffledChallenges] = useState<Challenge[]>([]);

  const shuffleChallenges = useCallback(() => {
    setShuffledChallenges([...CHALLENGES].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    shuffleChallenges();
  }, [shuffleChallenges]);

  const startGame = useCallback(() => {
    setScore(0);
    setCurrentChallengeIndex(0);
    shuffleChallenges();
    setGameState(GameState.Playing);
  }, [shuffleChallenges]);

  const handleAnswer = useCallback((challengeId: number, droppedOn: Target) => {
    const challenge = shuffledChallenges.find(c => c.id === challengeId);
    if (!challenge) return;

    const isCorrect = challenge.target === droppedOn;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setFeedback({
      show: true,
      correct: isCorrect,
      explanation: challenge.explanation
    });
  }, [shuffledChallenges]);

  const handleNext = useCallback(() => {
    setFeedback(null);
    if (currentChallengeIndex < shuffledChallenges.length - 1) {
      setCurrentChallengeIndex(prev => prev + 1);
    } else {
      setGameState(GameState.Summary);
    }
  }, [currentChallengeIndex, shuffledChallenges.length]);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.Playing:
        if (shuffledChallenges.length === 0) return null;
        return (
          <GameScreen
            challenge={shuffledChallenges[currentChallengeIndex]}
            onAnswer={handleAnswer}
            progress={{ current: currentChallengeIndex + 1, total: shuffledChallenges.length }}
          />
        );
      case GameState.Summary:
        return (
          <SummaryScreen
            score={score}
            total={shuffledChallenges.length}
            onPlayAgain={startGame}
          />
        );
      case GameState.Welcome:
      default:
        return <WelcomeScreen onStart={startGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="z-10 w-full max-w-4xl mx-auto">
            {renderGameState()}
        </div>

        {feedback?.show && (
            <FeedbackModal
                isCorrect={feedback.correct}
                explanation={feedback.explanation}
                onNext={handleNext}
            />
        )}
    </div>
  );
}

export default App;
