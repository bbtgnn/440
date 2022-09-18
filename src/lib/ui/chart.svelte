<script lang="ts" context="module">
	export interface ChartDatum {
		x: number;
		y: number;
	}

	export type ChartInput = Array<ChartDatum>;
</script>

<script lang="ts">
	import { LayerCake, Svg } from 'layercake';
	import AxisX from '$lib/layercake/axisX.svelte';
	import AxisY from '$lib/layercake/axisY.svelte';

	export let data: ChartInput;
</script>

<!--  -->

<div class="chart-container">
	<LayerCake {data} x="x" y="y">
		<!-- Components go here -->
		<Svg>
			<AxisX baseline />
			<AxisY />
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 300px;
	}
</style>
