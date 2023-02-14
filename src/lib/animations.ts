export const animationFlip = (node: HTMLElement, { delay = 0, duration = 500 }) => {
	return {
		delay,
		duration,
		css: (t: number, u: number) => {
			return `
        transform: rotateY(${1 - u * 180}deg);
        opacity: ${1 - u};
      `;
		}
	};
};
