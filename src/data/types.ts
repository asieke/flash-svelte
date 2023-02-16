export interface DataType {
	cards: CardType[];
	getCards: (category: string, num: number, double?: boolean) => CardType[];
	getFlashCards: (category: string, num: number, double?: boolean) => FlashCardType[];
}

export interface CardType {
	name: string;
	category: string;
	img: string;
	audio: string;
}

export interface MatchingCardType extends CardType {
	state: 'back' | 'front' | 'matched';
}

export interface FlashCardType extends CardType {
	state: 'deck' | 'correct' | 'incorrect';
	z: number;
	x: number;
	tilt: number;
}
