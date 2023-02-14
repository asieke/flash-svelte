<script lang="ts">
	import Card from '../../../components/Card.svelte';
	const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

	type Board = {
		value: string;
		flipped: boolean;
	};

	const board: Board[] = [];
	for (let i = 0; i < cards.length; i++) {
		board.push({
			value: cards[i],
			flipped: false
		});
	}
</script>

<div class="matching">
	<div class="mx-auto grid grid-cols-4 w-full gap-4">
		{#each board as card}
			<Card bind:flipped={card.flipped} value={card.value} />
		{/each}
	</div>
</div>
