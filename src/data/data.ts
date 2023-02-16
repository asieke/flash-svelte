//create typescript interface for data
import type { DataType } from './types';
import cards from './cards.json';

export const db: DataType = {
	cards: cards, //imported cards

	getCards: (category, numCards, doubleCards = false) => {
		// Get all the cards from the specified category
		const allCards = db.cards.filter((card) => card.category === category);

		// Calculate the number of cards to return
		const numCardsToReturn = Math.min(numCards, allCards.length);

		// Shuffle the indices of the cards array
		const shuffledIndices = [];
		for (let i = 0; i < allCards.length; i++) {
			shuffledIndices.push(i);
		}
		shuffledIndices.sort(() => Math.random() - 0.5);

		// Pick the first n cards from the shuffled array
		const selectedCards = [];
		for (let i = 0; i < numCardsToReturn; i++) {
			selectedCards.push(allCards[shuffledIndices[i]]);
		}

		// Double the cards and shuffle the array again if requested
		if (doubleCards) {
			selectedCards.push(...selectedCards);
			selectedCards.sort(() => Math.random() - 0.5);
		}

		return selectedCards;
	},

	getFlashCards: (category, numCards, doubleCards = false) => {
		return db.getCards(category, numCards, doubleCards).map((card, i) => ({
			...card,
			state: 'deck',
			z: numCards - i,
			x: 0,
			tilt: Math.round(Math.random() * 10 - 5)
		}));
	}
};
