import React from 'react';
import { FlashCardDeckProps } from '../../types/FlashCard';
import FlashCard from '../FlashCard';
import "./index.css"

const FlashCardDeck: React.FC<FlashCardDeckProps> = ({ flashCards }) => {
  return (
    <div className="layout-column align-items-center justify-content-start">
      <div className="flashcard-deck" data-testid="flashcard-deck">
        <FlashCard key={1} flashCard={flashCards[0]} />
      </div>
      <button onClick={() => {}} data-testid="shuffle-button">Shuffle</button>
    </div>
  );
};

export default FlashCardDeck;
