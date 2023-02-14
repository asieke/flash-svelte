//create typescript interface for data
import type { DataType } from './types';

export const db: DataType = {
	cards: [
		{ name: 'A', category: 'uppercase', img: 'apple.png', audio: 'A' },
		{ name: 'B', category: 'uppercase', img: 'bird.png', audio: 'B' },
		{ name: 'C', category: 'uppercase', img: 'cat.png', audio: 'C' },
		{ name: 'D', category: 'uppercase', img: 'dog.png', audio: 'D' },
		{ name: 'E', category: 'uppercase', img: 'elephantbaby.png', audio: 'E' },
		{ name: 'F', category: 'uppercase', img: 'frog.png', audio: 'F' },
		{ name: 'G', category: 'uppercase', img: 'giraffe.png', audio: 'G' },
		{ name: 'H', category: 'uppercase', img: 'hippo.png', audio: 'H' },
		{ name: 'I', category: 'uppercase', img: 'icecreamcone.png', audio: 'I' },
		{ name: 'J', category: 'uppercase', img: 'jellyfish.png', audio: 'J' },
		{ name: 'K', category: 'uppercase', img: 'kite.png', audio: 'K' },
		{ name: 'L', category: 'uppercase', img: 'lizard.png', audio: 'L' },
		{ name: 'M', category: 'uppercase', img: 'monkey.png', audio: 'M' },
		{ name: 'N', category: 'uppercase', img: 'nest.png', audio: 'N' },
		{ name: 'O', category: 'uppercase', img: 'oranges.png', audio: 'O' },
		{ name: 'P', category: 'uppercase', img: 'pig.png', audio: 'P' },
		{ name: 'Q', category: 'uppercase', img: 'queen.png', audio: 'Q' },
		{ name: 'R', category: 'uppercase', img: 'rabbits.png', audio: 'R' },
		{ name: 'S', category: 'uppercase', img: 'snake.png', audio: 'S' },
		{ name: 'T', category: 'uppercase', img: 'train.png', audio: 'T' },
		{ name: 'U', category: 'uppercase', img: 'unicorn.png', audio: 'U' },
		{ name: 'V', category: 'uppercase', img: 'volcano.png', audio: 'V' },
		{ name: 'W', category: 'uppercase', img: 'whale.png', audio: 'W' },
		{ name: 'X', category: 'uppercase', img: 'xylophone.png', audio: 'X' },
		{ name: 'Y', category: 'uppercase', img: 'yoyo.png', audio: 'Y' },
		{ name: 'Z', category: 'uppercase', img: 'zebra.png', audio: 'Z' }
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
