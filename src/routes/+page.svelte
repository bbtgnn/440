<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Chart from '$lib/ui/chart.svelte';
	import type { ChartInput } from '$lib/ui/chart.svelte';

	//

	const kings = 4;
	const cards = 40;

	//

	let currentKings = kings;
	let currentCards = cards;

	let ratio: number;
	$: ratio = currentKings / currentCards;

	let restart = false;
	$: restart = currentCards == 0 || currentKings == 0;
	$: if (restart) {
		history = [];
	}

	let history: Array<number> = [];
	let vizData: ChartInput;

	$: vizData = prepVizData(history);

	//

	function saveHistory() {
		history = [...history, ratio];
	}

	function decreaseKings() {
		currentKings -= 1;
	}

	function decreaseCards() {
		saveHistory();
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

	function prepVizData(history: Array<number>): ChartInput {
		return history.map((v, i) => {
			return {
				x: i,
				y: v
			};
		});
	}
</script>

<!--  -->

<main
	class="w-screen h-screen flex flex-col flex-nowrap items-stretch justify-start overflow-hidden"
>
	<!-- Data -->
	<div class="p-8 grow basis-1 flex flex-col flex-nowrap items-center justify-center space-y-4">
		<p class="text-8xl font-bold">{currentKings} / {currentCards}</p>
		<p class="text-8xl font-bold">{roundDecimals(ratio, 3)}</p>
		{JSON.stringify(history)}
		<!-- Viz -->
		<Chart data={vizData} />
	</div>

	<!-- Controls -->
	<div
		class="p-8 bg-slate-400 flex flex-row flex-nowrap justify-around items-center space-x-8 shrink-0"
	>
		{#if !restart}
			<Button on:click={doPass}>Ok</Button>
			<Button on:click={doFail}>Re</Button>
		{:else}
			<Button on:click={doRestart}>Restart</Button>
		{/if}
	</div>
</main>
