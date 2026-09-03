import { useRef, useState } from "react";
import { _buildPath, _isMobileViewport, _randomShape, _shapeStyle } from "../services/background";
import type { NetworkPath, Shape } from "../types/background";
import type { CSSProperties } from "react";

const SHAPE_COUNT = 4;
const MOBILE_SHAPE_COUNT = 2;

const PATH_COUNT = 2;
const MOBILE_PATH_COUNT = 0;
const MOBILE_BREAKPOINT = 768;
const GRID_SIZE = 28;

export default function Background() {
	const nextShapeId = useRef(0);
	const nextPathId = useRef(0);
	const [shapes, setShapes] = useState<Shape[]>(() => {
		const count = _isMobileViewport(MOBILE_BREAKPOINT) ? MOBILE_SHAPE_COUNT : SHAPE_COUNT;
		return Array.from({ length: count }, () => _randomShape(nextShapeId.current++, true));
	});
	const [paths, setPaths] = useState<NetworkPath[]>(() => {
		const count = _isMobileViewport(MOBILE_BREAKPOINT) ? MOBILE_PATH_COUNT : PATH_COUNT;
		return Array.from({ length: count }, () => _buildPath(nextPathId.current++, true, GRID_SIZE));
	});

	const handleShapeAnimationEnd = (id: number) => {
		setShapes((prev) =>
			prev.map((shape) => (shape.id === id ? _randomShape(nextShapeId.current++, false) : shape)),
		);
	};

	const handlePathAnimationEnd = (id: number) => {
		setPaths((prev) =>
			prev.map((path) => (path.id === id ? _buildPath(nextPathId.current++, false, GRID_SIZE) : path)),
		);
	};

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			<div className="bg-grid absolute inset-0" />

			<svg className="absolute inset-0 h-full w-full">
				{paths.map((path) => (
					<g key={path.id}>
						<path
							className="bg-network-path"
							d={path.d}
							fill="none"
							stroke={path.color}
							strokeWidth={1}
							strokeLinecap="round"
							strokeLinejoin="round"
							style={
								{
									"--path-length": path.length,
									"--peak-opacity": path.peakOpacity,
									strokeDasharray: path.length,
									animation: `path-life ${path.duration}s ease-in-out ${path.delay}s 1 both`,
								} as CSSProperties
							}
							onAnimationEnd={() => handlePathAnimationEnd(path.id)}
						/>
						{path.points.map((point, i) => {
							const isEnd = i === path.points.length - 1;
							return (
								<circle
									key={i}
									className={isEnd ? "bg-network-end" : "bg-network-path"}
									cx={point.x}
									cy={point.y}
									r={i === 0 || isEnd ? 2 : 1.3}
									fill={path.color}
									style={
										{
											"--peak-opacity": path.peakOpacity,
											animation: `${isEnd ? "path-end-life" : "path-life"} ${path.duration}s ease-in-out ${path.delay}s 1 both`,
										} as CSSProperties
									}
								/>
							);
						})}
					</g>
				))}
			</svg>

			{shapes.map((shape) => (
				<span
					key={shape.id}
					className="bg-shape"
					style={_shapeStyle(shape)}
					onAnimationEnd={() => handleShapeAnimationEnd(shape.id)}
				/>
			))}
		</div>
	);
}
