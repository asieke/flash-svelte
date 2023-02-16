<script lang="ts">
	import { db } from '../../../data/data';
	import type { FlashCardType } from '../../../data/types';
	import FlashCard from '../../../components/FlashCard.svelte';

	import { getSounds } from '../../../lib/sounds';

	// create a deck of 10 cards
	let cards = db.getFlashCards('uppercase', 10);

	// set a svelt reactive variable that keeps track of the maximum z-index
	let maxZ = cards.reduce((acc, card) => {
		return Math.max(acc, card.z);
	}, 0);

	console.log(cards, maxZ);

	let index = 0;

	const handleClick = (state: 'deck' | 'correct' | 'incorrect') => {
		cards[index].state = state;
		cards[index].z = ++maxZ;
		index++;
		if (index >= cards.length) {
			setTimeout(() => {
				let incorrect = cards.filter((card) => card.state === 'incorrect');
				cards = incorrect.map((card, i) => ({ ...card, state: 'deck', z: incorrect.length - i }));
				maxZ = incorrect.length;
				index = 0;
			}, 500);
		}
	};
</script>

<div class="flashcards">
	<div class="stack">
		{#each cards as card (card.name)}
			<FlashCard bind:card />
		{/each}
	</div>
	<div class="flex flex-row">
		<button class="mt-10 w-32 h-24 bg-green-800 mr-2" on:click={() => handleClick('correct')}
			>Correct</button
		>
		<button class="mt-10 w-32 h-24 bg-slate-600 ml-2" on:click={() => handleClick('incorrect')}
			>Incorrect</button
		>
	</div>
</div>

<style>
	.stack {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 60vh;
		width: 40vh;
	}
</style>
