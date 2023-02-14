<script lang="ts">
	export let flipped: boolean;
	export let value: string;

	function flip(node: HTMLElement, { delay = 0, duration = 500 }) {
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
	}

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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card-container" on:click={() => (flipped = !flipped)}>
	{#if !flipped}
		<div class="card front flex justify-center" transition:flip={{}}>
			{value}
		</div>
	{:else}
		<div class="card back flex justify-center" transition:flip={{}}>
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
</style>
