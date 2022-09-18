<script lang="ts">
	import Button from '$lib/ui/button.svelte';

	const kings = 4;
	const cards = 40;

	let currentKings = kings;
	let currentCards = cards;

	let ratio: number;
	$: ratio = roundDecimals(currentKings / currentCards, 3);

	let restart = false;
	$: restart = currentCards == 0 || currentKings == 0;

	//

	function decreaseKings() {
		currentKings -= 1;
	}

	function decreaseCards() {
		currentCards -= 1;
	}

	function doRestart() {
		currentKings = kings;
		currentCards = cards;
	}

	//

	function doPass() {
		decreaseCards();
	}

	function doFail() {
		decreaseCards();
		decreaseKings();
	}

	//

	function roundDecimals(number: number, decimals: number): number {
		const BASE = 10;
		const FACTOR = Math.pow(BASE, decimals);
		return Math.round(number * FACTOR) / FACTOR;
	}
</script>

<!--  -->

<main
	class="w-screen h-screen flex flex-col flex-nowrap items-stretch justify-start overflow-hidden"
>
	<!-- Data -->
	<div class="p-8 grow basis-1 flex flex-col flex-nowrap items-center justify-center space-y-4">
		<p class="text-8xl font-bold">{currentKings} / {currentCards}</p>
		<p class="text-8xl font-bold">{ratio}</p>
	</div>

	<!-- Controls -->
	<div class="p-8 bg-slate-400 flex flex-row flex-nowrap justify-around items-center space-x-8">
		{#if !restart}
			<Button on:click={doPass}>Ok</Button>
			<Button on:click={doFail}>Re</Button>
		{:else}
			<Button on:click={doRestart}>Restart</Button>
		{/if}
	</div>
</main>
