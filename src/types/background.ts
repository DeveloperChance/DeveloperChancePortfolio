export type ShapeType = "square" | "circle" | "triangle";

export type Shape = {
	id: number;
	type: ShapeType;
	size: number;
	top: number;
	left: number;
	rotate: number;
	rotateMid: number;
	rotateEnd: number;
	moveMidX: number;
	moveMidY: number;
	moveEndX: number;
	moveEndY: number;
	scaleStart: number;
	scaleMid: number;
	scaleEnd: number;
	peakOpacity: number;
	color: string;
	duration: number;
	delay: number;
};

export type PathPoint = { x: number; y: number };

export type NetworkPath = {
	id: number;
	d: string;
	points: PathPoint[];
	length: number;
	color: string;
	duration: number;
	delay: number;
	peakOpacity: number;
};
