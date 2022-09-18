import type { Readable, Writable } from 'svelte/store';
import type { ScaleLinear } from 'd3';

export interface Padding {
	top?: number | undefined;
	right?: number | undefined;
	bottom?: number | undefined;
	left?: number | undefined;
}

export type Range = Function | string[] | number[] | [min: number, max: number];

export interface LayerCakeContext {
	width: Readable<number>;
	height: Readable<number>;
	xScale: Readable<ScaleLinear>;
	yScale: Readable<ScaleLinear>;
	xRange: Readable<Array<number>>;
	yRange: Readable<Array<number>>;
	padding: Readable<Padding>;
}
