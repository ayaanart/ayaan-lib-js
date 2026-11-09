import { test } from "../../testing-tool/test.js";
import { assertEqual } from "../../testing-tool/assertEqual.js";
import { assertThrow } from "../../testing-tool/assertThrow.js";
import { Canvas } from "../../canvas/Canvas.js";
console.log("Testing Canvas");

// Happy Cases ----------------
test("Adds canvas to parent", () => {
	const parent = document.createElement("div");
	const canvas = new Canvas({ parent });
	assertEqual(canvas.element.parentElement, parent);
});

test("Real pixels use devicePixelRatio", () => {
	const parent = document.createElement("div");
	const canvas = new Canvas({ width: 400, height: 300, parent });
	assertEqual(canvas.element.width, Math.round(400 * window.devicePixelRatio));
});

test("CSS size matches width and height", () => {
	const parent = document.createElement("div");
	const canvas = new Canvas({ width: 400, height: 300, parent });
	assertEqual(canvas.element.style.width, "400px");
	assertEqual(canvas.element.style.height, "300px");
});

test("Saves drawing size", () => {
	const parent = document.createElement("div");
	const canvas = new Canvas({ width: 400, height: 300, parent });
	assertEqual(canvas.width, 400);
	assertEqual(canvas.height, 300);
});

test("Defaults", () => {
	// we have to append to the page unlike the other tests because we are testing the default location
	const canvas = new Canvas();
	assertEqual(canvas.width, 300);
	assertEqual(canvas.height, 150);
	assertEqual(canvas.element.parentElement, document.body);
	canvas.element.remove();
});

// Upset Cases ----------------
test("TypeError for non-HTMLElement parent", () => {
	assertThrow(() => new Canvas({ parent: {} }), TypeError, "parent must be an HTMLElement");
});

test("RangeError for Infinity width", () => {
	assertThrow(() => new Canvas({ width: Infinity }), RangeError, ["width", "Infinity"]);
});

test("RangeError for Negative height", () => {
	assertThrow(() => new Canvas({ height: -10 }), RangeError, "height=-10");
});

test("RangeError for 0 width", () => {
	assertThrow(() => new Canvas({ width: 0 }), RangeError, "width=0");
});

test("TypeError for string for height", () => {
	assertThrow(() => new Canvas({ height: "10" }), TypeError, ["height", "10"]);
});
