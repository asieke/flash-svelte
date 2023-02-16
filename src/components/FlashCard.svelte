<script lang="ts">
	import type { FlashCardType } from '../data/types';
	import { animationSlide } from '../lib/animations';

	export let card: FlashCardType;
</script>

<div class="card-container {card.state}" style="z-index: {card.z};">
	{#if card.state === 'correct' || card.state === 'incorrect'}
		<div
			class="card front"
			transition:animationSlide={{ duration: 500, tilt: card.tilt }}
			style="transform: rotate({card.tilt}deg)"
		/>
	{:else}
		<div
			class="card back"
			transition:animationSlide={{ duration: 500, tilt: card.tilt }}
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
		transition-property: transform;
		transition-duration: 500ms;
		/* add a 3px light gray border */
		border: 3px solid #ccc;
	}

	.card-container {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.button {
		width: 100%;
		height: 100%;
	}

	.correct {
		transform: translateX(45vh) !important;
		transition-property: transform;
		transition-duration: 500ms;
	}

	.incorrect {
		transform: translateX(-45vh) !important;
		transition-property: transform;
		transition-duration: 500ms;
	}
</style>
