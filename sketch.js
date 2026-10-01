const r = require("raylib");

const window = {
	width: 800,
	height: 600,
	title: "Find the Closer Target",
};

const FPS = 60;

const source = {
	x: 290,
	y: 80,
	radius: 50,
	color: r.BLUE,
};

const targetOne = {
	x: 350,
	y: 230,
	radius: 40,
	color: r.RED,
};

const targetTwo = {
	x: 200,
	y: 290,
	radius: 60,
	color: r.GREEN,
};

const lineColor = r.BLACK;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(window.width, window.height, window.title);
	r.SetTargetFPS(FPS);
}

function update() { }

function drawCircleObject(object) {
	if (!object) return;
	r.DrawCircleV(object, object.radius, object.color);
}

function drawTargets(targetOne, targetTwo) {
	drawCircleObject(targetOne);
	drawCircleObject(targetTwo);
}

function drawSource(source) {
	drawCircleObject(source);
}

function drawConnector(source, targetOne, targetTwo, lineColor) {
	const distanceOne = r.Vector2Distance(source, targetOne);
	const distanceTwo = r.Vector2Distance(source, targetTwo);

	let targetX = targetOne.x;
	let targetY = targetOne.y;

	if (distanceOne > distanceTwo) {
		targetX = targetTwo.x;
		targetY = targetTwo.y;
	}

	r.DrawLineV(source, { x: targetX, y: targetY }, lineColor);
}

function draw() {
	r.BeginDrawing();

	r.ClearBackground(r.WHITE);

	drawSource(source);

	drawTargets(targetOne, targetTwo);

	drawConnector(source, targetOne, targetTwo, lineColor);

	r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
	running,
	setup,
	update,
	draw,
	teardown,
}