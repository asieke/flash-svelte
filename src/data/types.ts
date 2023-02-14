export interface DataType {
	cards: CardType[];
	getCards: (category: string, num: number, double?: boolean) => CardType[];
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
