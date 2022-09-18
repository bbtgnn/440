<script lang="ts" context="module">
	export interface ChartDatum {
		x: number;
		y: number;
	}

	export type ChartInput = Array<ChartDatum>;
</script>

<script lang="ts">
	import { LayerCake } from 'layercake';

	export let data: ChartInput;
</script>

<!--  -->

<div class="chart-container">
	<LayerCake {data} x="x" y="y">
		<!-- Components go here -->
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 300px;
	}
</style>
