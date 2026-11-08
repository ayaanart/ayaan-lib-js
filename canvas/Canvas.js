import { throwNonFiniteNumber } from "../errorThrower/throwNonFiniteNumber.js";
/**
 * A canvas on the page that you can draw on.
 * @param {Object} [options]
 * @param {number} [options.width=300] Width of the canvas in CSS pixels.
 * @param {number} [options.height=150] Height of the canvas in CSS pixels.
 * @param {HTMLElement} [options.parent=document.body] Element the canvas is added to.
 * @throws {TypeError} If parent is not an HTMLElement, or width or height are not numbers.
 * @throws {RangeError} If width or height are numbers but not finite.
 * @example
 * const game = new Canvas({ width: 400, height: 300 });
 * game.ctx.fillRect(10, 10, 50, 50);
 */
export class Canvas {
	constructor({ width = 300, height = 150, parent = document.body } = {}) {
		if (!Number.isFinite(width) || !Number.isFinite(height)) {
			throwNonFiniteNumber({ width, height }, "Canvas");
		}
		if (!(parent instanceof HTMLElement)) {
			throw new TypeError(`Canvas: parent must be an HTMLElement. Got: "${String(parent)}" type ${typeof parent}`);
		}

		const dpr = window.devicePixelRatio || 1;

		this.element = document.createElement("canvas");
		this.element.width = Math.round(width * dpr);
		this.element.height = Math.round(height * dpr);
		this.element.style.width = `${width}px`;
		this.element.style.height = `${height}px`;

		this.width = width;
		this.height = height;

		this.ctx = this.element.getContext("2d");
		this.ctx.scale(dpr, dpr);

		parent.appendChild(this.element);
	}
}
