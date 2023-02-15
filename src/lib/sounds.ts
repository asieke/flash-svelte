import type { CardType } from '../data/types';
import { Howl } from 'howler';

//create a new class that extends Howl
export class SuperHowl extends Howl {
	play(delay = 0): number {
		setTimeout(() => {
			super.play();
		}, delay);

		return 0;
	}
}

type SoundMap = { [key: string]: SuperHowl };

export const getSounds = (cards: CardType[]) => {
	const staticSounds = ['flip', 'match', 'shuffle'];

	const sounds: SoundMap = {};

	staticSounds.forEach((sound) => {
		sounds[sound] = new SuperHowl({
			src: [`/sounds/${sound}.mp3`],
			preload: true
		});
	});

	cards.forEach((card) => {
		sounds[card.name] = new SuperHowl({
			src: [`/card-sounds/${card.audio}`],
			preload: true
		});
	});

	return sounds;
};
