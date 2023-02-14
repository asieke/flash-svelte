//create typescript interface for data
import type { DataType } from './types';

export const db: DataType = {
	cards: [
		{ name: 'A', category: 'uppercase', img: 'apple', audio: 'A' },
		{ name: 'B', category: 'uppercase', img: 'bird', audio: 'B' },
		{ name: 'C', category: 'uppercase', img: 'cat', audio: 'C' },
		{ name: 'D', category: 'uppercase', img: 'dog', audio: 'D' },
		{ name: 'E', category: 'uppercase', img: 'elephantbaby', audio: 'E' },
		{ name: 'F', category: 'uppercase', img: 'frog', audio: 'F' },
		{ name: 'G', category: 'uppercase', img: 'giraffe', audio: 'G' },
		{ name: 'H', category: 'uppercase', img: 'hippo', audio: 'H' },
		{ name: 'I', category: 'uppercase', img: 'icecreamcone', audio: 'I' },
		{ name: 'J', category: 'uppercase', img: 'jellyfish', audio: 'J' },
		{ name: 'K', category: 'uppercase', img: 'kite', audio: 'K' },
		{ name: 'L', category: 'uppercase', img: 'lizard', audio: 'L' },
		{ name: 'M', category: 'uppercase', img: 'monkey', audio: 'M' },
		{ name: 'N', category: 'uppercase', img: 'nest', audio: 'N' },
		{ name: 'O', category: 'uppercase', img: 'oranges', audio: 'O' },
		{ name: 'P', category: 'uppercase', img: 'pig', audio: 'P' },
		{ name: 'Q', category: 'uppercase', img: 'queen', audio: 'Q' },
		{ name: 'R', category: 'uppercase', img: 'rabbits', audio: 'R' },
		{ name: 'S', category: 'uppercase', img: 'snake', audio: 'S' },
		{ name: 'T', category: 'uppercase', img: 'train', audio: 'T' },
		{ name: 'U', category: 'uppercase', img: 'unicorn', audio: 'U' },
		{ name: 'V', category: 'uppercase', img: 'volcano', audio: 'V' },
		{ name: 'W', category: 'uppercase', img: 'whale', audio: 'W' },
		{ name: 'X', category: 'uppercase', img: 'xylophone', audio: 'X' },
		{ name: 'Y', category: 'uppercase', img: 'yoyo', audio: 'Y' },
		{ name: 'Z', category: 'uppercase', img: 'zebra', audio: 'Z' }
	],
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
	}
};
