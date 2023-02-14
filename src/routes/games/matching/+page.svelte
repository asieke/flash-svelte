<script lang="ts">
	import { afterUpdate } from 'svelte';

	import Card from '../../../components/Card.svelte';
	import { db } from '../../../data/data';
	import type { MatchingCardType } from '../../../data/types';

	// MatchingCard has the same properties as CardType, but with 1 additional "flipped: boolean" property.  Copy the CardType..

	let frozen = false;
	let cards: MatchingCardType[] = db.getCards('uppercase', 8, true).map((card) => {
		return {
			...card,
			state: 'back'
		};
	});
	$: preloaded = cards.map((card) => '/card-images/' + card.img);

	let flipped: number[] = [];
	$: matches = cards.filter((card) => card.state === 'matched').length;

	const flipCard = (i: number) => {
		if (frozen === true) return;
		cards[i].state = 'front';
		flipped.push(i);
		if (flipped.length === 2) {
			const [j, k] = flipped;
			if (cards[j].name === cards[k].name) {
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
</svelte:head>

<div class="matching">
	<div class="mx-auto grid grid-cols-4 w-full gap-4">
		{#each cards as card, i}
			<Card bind:card updater={() => flipCard(i)} />
		{/each}
	</div>
</div>
