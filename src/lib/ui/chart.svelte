<script lang="ts" context="module">
	export interface ChartDatum {
		x: number;
		y: number;
	}

	export type ChartInput = Array<ChartDatum>;
</script>

<script lang="ts">
	// The library provides a main wrapper component
	// and a bunch empty layout components...
	import { LayerCake, Svg, Html, Canvas } from 'layercake';

	// ...that you fill with your own chart components,
	// that live inside your project and which you
	// can copy and paste from here as starting points.
	import AxisX from './AxisX.svelte';
	import AxisY from './AxisY.svelte';
	import Line from './Line.svelte';
	// import Scatter from './Scatter.svelte';
	// import Labels from './Labels.svelte';

	export let data: ChartInput = [
		{ x: 0, y: 1 },
		{ x: 1, y: 2 },
		{ x: 2, y: 3 }
	];
</script>

<!--  -->

<div class="chart-container">
	<LayerCake x="x" y="y" {data}>
		<Svg>
			<AxisX />
			<AxisY />
			<Line stroke="#f0c" />
		</Svg>

		<!-- <Canvas>
			<Scatter stroke="#0fc" />
		</Canvas> -->

		<!-- <Html>
			<Labels />
		</Html> -->
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 300px;
	}
</style>
