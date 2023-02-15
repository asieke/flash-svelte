<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';

	import Card from '../../../components/Card.svelte';
	import { db } from '../../../data/data';
	import type { MatchingCardType } from '../../../data/types';

	import { getSounds } from '../../../lib/sounds';

	let boardShowing = false;
	let frozen = false;
	let cards: MatchingCardType[] = db.getCards('uppercase', 8, true).map((card) => {
		return {
			...card,
			state: 'back'
		};
	});
	const sounds = getSounds(cards);
	$: preloaded = cards.map((card) => '/card-images/' + card.img);
	$: matches = cards.filter((card) => card.state === 'matched').length;

	let flipped: number[] = [];

	const startGame = () => {
		sounds.shuffle.play(0);
		setTimeout(() => {
			boardShowing = true;
		}, 0);
	};

	const flipCard = (i: number) => {
		if (frozen === true) return;

		sounds.flip.play();
		sounds[cards[i].name].play(300);

		cards[i].state = 'front';
		flipped.push(i);
		if (flipped.length === 2) {
			const [j, k] = flipped;
			if (cards[j].name === cards[k].name) {
				sounds.match.play(300);
				cards[j].state = 'matched';
				cards[k].state = 'matched';
			} else {
				frozen = true;
				setTimeout(() => {
					cards[j].state = 'back';
					cards[k].state = 'back';
					frozen = false;
				}, 2000);
			}
			flipped = [];
		}
	};

	afterUpdate(() => {
		console.log(matches);
	});
</script>

<svelte:head>
	{#each preloaded as image}
		<link rel="preload" as="image" href={image} />
	{/each}
	<link rel="preload" as="image" href="/images/pattern.png" />
</svelte:head>

{#if boardShowing}
	<div class="matching">
		<div class="mx-auto grid grid-cols-4 w-full gap-4 p-10">
			{#each cards as card, i}
				<Card bind:card updater={() => flipCard(i)} />
			{/each}
		</div>
	</div>
{:else}
	<div class="w-full h-full flex align-middle justify-center items-center ">
		<button
			class="w-64 h-64 rounded-xl bg-slate-600 text-white hover:bg-slate-800"
			on:click={() => startGame()}
		>
			Start Game
		</button>
	</div>
{/if}
