import { quadInOut } from 'svelte/easing';

export const animationFlip = (node: HTMLElement, { delay = 0, duration = 2000 }) => {
	return {
		delay,
		duration,
		css: (t: number, u: number) => {
			const progress = quadInOut(u);
			return `
        transform: rotateY(${1 - progress * 180}deg);
        opacity: ${1 - progress};
      `;
		}
	};
};

export const animationSlide = (node: HTMLElement, { delay = 0, duration = 2000, tilt = 5 }) => {
	//generate a random integer from -5 to 5
	return {
		delay,
		duration,
		css: (t: number, u: number) => {
			const progress = quadInOut(u);
			return `
        transform: rotateY(${1 - progress * 180}deg) rotate(${tilt * (1 - progress)}deg);
        opacity: ${1 - progress};
      `;
		}
	};
};
