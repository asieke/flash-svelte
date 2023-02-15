<script lang="ts">
	import type { MatchingCardType } from '../data/types';
	export let card: MatchingCardType;
	export let updater: () => void;

	import { animationFlip } from '../lib/animations';
</script>

<div class="card-container">
	{#if card.state === 'back'}
		<!-- Rewrite this div by removing the img moving the img to be a background image -->

		<div class="card front" transition:animationFlip={{ duration: 500 }}>
			<button class="button" on:click={updater} />
		</div>
	{:else}
		<div
			class="card back"
			transition:animationFlip={{ duration: 500 }}
			style="background-image: url('/card-images/{card.img}')"
		>
			{card.name}
		</div>
	{/if}
</div>

<style>
	.front {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background-image: url('/images/pattern.png');
	}
	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}
	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-shadow: 0 0 6px black;
		font-weight: bold;
		font-size: 8rem;
		background-size: cover;
		background-position: center;
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		will-change: transform;
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
