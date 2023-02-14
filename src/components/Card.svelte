<script lang="ts">
	import { onMount } from 'svelte';
	import type { MatchingCardType } from '../data/types';
	export let card: MatchingCardType;
	export let updater: () => void;

	//run an async function on load
	let png: any = null;
	onMount(async () => {
		const { default: image } = await import(`../lib/assets/card-images/${card.img}.png`);
		png = image;
	});

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
			{#if png}
				<img src={png} alt={card.name} />
			{/if}
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
