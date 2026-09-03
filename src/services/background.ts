import type { CSSProperties } from "react";
import type { NetworkPath, PathPoint, Shape, ShapeType } from "../types/background";

const SHAPE_TYPES: ShapeType[] = ["square", "circle", "triangle"];
const ACCENTS = ["#3b82f6", "#818cf8"];

export function _randomBetween(min: number, max: number) {
	return min + Math.random() * (max - min);
}

export function _clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}

export function _snapToGrid(value: number, gridSize: number, max: number) {
	return _clamp(Math.round(value / gridSize) * gridSize, 0, max);
}

export function _randomGridPoint(columns: number, rows: number, gridSize: number) {
	return {
		x: Math.floor(Math.random() * columns) * gridSize,
		y: Math.floor(Math.random() * rows) * gridSize,
	};
}

export function _isMobileViewport(breakpoint: number) {
	return window.innerWidth < breakpoint;
}

export function _randomShape(id: number, initial: boolean): Shape {
	const rotateMid = _randomBetween(60, 260);

	return {
		id,
		type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
		size: _randomBetween(50, 160),
		top: _randomBetween(0, 100),
		left: _randomBetween(0, 100),
		rotate: _randomBetween(0, 360),
		rotateMid,
		rotateEnd: rotateMid + _randomBetween(60, 260),
		moveMidX: _randomBetween(-50, 50),
		moveMidY: _randomBetween(-50, 50),
		moveEndX: _randomBetween(-60, 60),
		moveEndY: _randomBetween(-60, 60),
		scaleStart: _randomBetween(0.7, 0.95),
		scaleMid: _randomBetween(0.9, 1.35),
		scaleEnd: _randomBetween(0.7, 1),
		peakOpacity: _randomBetween(0.04, 0.09),
		color: ACCENTS[Math.floor(Math.random() * ACCENTS.length)],
		duration: _randomBetween(14, 26),
		delay: initial ? _randomBetween(0, 10) : _randomBetween(0.5, 4),
	};
}

export function _shapeStyle(shape: Shape): CSSProperties {
	const base = {
		position: "absolute",
		top: `${shape.top}%`,
		left: `${shape.left}%`,
		"--rotate": `${shape.rotate}deg`,
		"--rotate-mid": `${shape.rotateMid}deg`,
		"--rotate-end": `${shape.rotateEnd}deg`,
		"--move-mid-x": `${shape.moveMidX}px`,
		"--move-mid-y": `${shape.moveMidY}px`,
		"--move-end-x": `${shape.moveEndX}px`,
		"--move-end-y": `${shape.moveEndY}px`,
		"--scale-start": shape.scaleStart,
		"--scale-mid": shape.scaleMid,
		"--scale-end": shape.scaleEnd,
		"--peak-opacity": shape.peakOpacity,
		animation: `shape-life ${shape.duration}s ease-in-out ${shape.delay}s 1 both`,
	} as CSSProperties;

	if (shape.type === "triangle") {
		const half = shape.size / 2;
		return {
			...base,
			width: 0,
			height: 0,
			borderLeft: `${half}px solid transparent`,
			borderRight: `${half}px solid transparent`,
			borderBottom: `${shape.size * 0.87}px solid ${shape.color}`,
		};
	}

	return {
		...base,
		width: shape.size,
		height: shape.size,
		border: `1.5px solid ${shape.color}`,
		borderRadius: shape.type === "circle" ? "50%" : undefined,
	};
}

export function _buildPath(id: number, initial: boolean, gridSize: number): NetworkPath {
	const columns = Math.max(1, Math.floor(window.innerWidth / gridSize));
	const rows = Math.max(1, Math.floor(window.innerHeight / gridSize));

	const maxX = (columns - 1) * gridSize;
	const maxY = (rows - 1) * gridSize;
	const shortestSide = Math.min(window.innerWidth, window.innerHeight);

	const start = _randomGridPoint(columns, rows, gridSize);

	const angle = _randomBetween(0, Math.PI * 2);
	const reach = _randomBetween(shortestSide * 0.12, shortestSide * 0.28);
	const end: PathPoint = {
		x: _snapToGrid(start.x + Math.cos(angle) * reach, gridSize, maxX),
		y: _snapToGrid(start.y + Math.sin(angle) * reach, gridSize, maxY),
	};

	const dx = end.x - start.x;
	const dy = end.y - start.y;
	const segmentLength = Math.hypot(dx, dy) || 1;
	const perpX = -dy / segmentLength;
	const perpY = dx / segmentLength;

	const waypointCount = 2 + Math.floor(Math.random() * 3);
	const waypoints = Array.from({ length: waypointCount }, () => {
		const t = _randomBetween(0.15, 0.85);
		const jitter = _randomBetween(-segmentLength * 0.3, segmentLength * 0.3);
		return {
			x: _snapToGrid(start.x + dx * t + perpX * jitter, gridSize, maxX),
			y: _snapToGrid(start.y + dy * t + perpY * jitter, gridSize, maxY),
		};
	});

	const lengthSq = dx * dx + dy * dy || 1;
	waypoints.sort((a, b) => {
		const pa = ((a.x - start.x) * dx + (a.y - start.y) * dy) / lengthSq;
		const pb = ((b.x - start.x) * dx + (b.y - start.y) * dy) / lengthSq;
		return pa - pb;
	});

	const points = [start, ...waypoints, end];

	let length = 0;
	for (let i = 1; i < points.length; i++) {
		length += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
	}

	const d = points.map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

	return {
		id,
		d,
		points,
		length,
		color: ACCENTS[Math.floor(Math.random() * ACCENTS.length)],
		duration: _randomBetween(7, 13),
		delay: initial ? _randomBetween(0, 8) : _randomBetween(1, 5),
		peakOpacity: _randomBetween(0.05, 0.12),
	};
}
