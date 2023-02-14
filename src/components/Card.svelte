<script lang="ts">
	export let flipped: boolean;
	export let value: string;
	import { animationFlip } from '../lib/animations';

	// set this type to the type returned by setTimeout
	let timeoutId: ReturnType<typeof setTimeout>;
	$: if (flipped) {
		timeoutId = setTimeout(() => {
			flipped = false;
		}, 1500);
	} else {
		clearTimeout(timeoutId);
	}
</script>

<div class="card-container">
	{#if !flipped}
		<div class="card front flex justify-center" transition:animationFlip={{}}>
			<button class="button" on:click={() => (flipped = !flipped)}>
				{value}
			</button>
		</div>
	{:else}
		<div class="card back flex justify-center" transition:animationFlip={{}}>
			<img src="/card-images/{value}.png" alt={value} />
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
