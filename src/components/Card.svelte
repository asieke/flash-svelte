<script lang="ts">
	import type { MatchingCardType } from '../data/types';
	export let card: MatchingCardType;
	export let updater: () => void;

	import { animationFlip } from '../lib/animations';
</script>

<div class="card-container">
	{#if card.state === 'back'}
		<div class="card front flex justify-center" transition:animationFlip={{}}>
			<button class="button" on:click={updater}>
				{card.name}
			</button>
		</div>
	{:else}
		<div class="card back flex justify-center" transition:animationFlip={{}}>
			<img src="/card-images/{card.img}" alt={card.name} />
		</div>
	{/if}
</div>

<style>
	.front {
		background-color: green;
	}
	.back {
		background-color: red;
		backface-visibility: hidden;
	}
	.card {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.card-container {
		position: relative;
		width: 100%;
		height: 20vh;
	}
	.button {
		width: 100%;
		height: 100%;
	}
</style>
