const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 800;
const windowHeight = 600;
const windowTitle = "Find the Closer Target";

const FPS = 60;

const sourceX = 290;
const sourceY = 80;
const sourceRadius = 50;
const sourceColor = r.BLUE;

const targetOneX = 350;
const targetOneY = 230;
const targetOneRadius = 40;
const targetOneColor = r.RED;

const targetTwoX = 200;
const targetTwoY = 290;
const targetTwoRadius = 60;
const targetTwoColor = r.GREEN;

const lineColor = r.BLACK;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(windowWidth, windowHeight, windowTitle);
	r.SetTargetFPS(FPS);
}

function update() { }

function drawSource() {
	r.DrawCircle(sourceX, sourceY, sourceRadius, sourceColor);
}

function drawTargets() {
	r.DrawCircle(targetOneX, targetOneY, targetOneRadius, targetOneColor);
	r.DrawCircle(targetTwoX, targetTwoY, targetTwoRadius, targetTwoColor);
}

function drawConnector(sourceX, sourceY, targetOneX, targetOneY, targetTwoX, targetTwoY, lineColor) {
	const distanceBetweenSourceAndtargetOne = geometry.getDistance(sourceX, sourceY, targetOneX, targetOneY);
	const distanceBetweenSourceAndtargetTwo = geometry.getDistance(sourceX, sourceY, targetTwoX, targetTwoY);

	let targetX = targetOneX;
	let targetY = targetOneY;

	if (distanceBetweenSourceAndtargetOne > distanceBetweenSourceAndtargetTwo) {
		targetX = targetTwoX;
		targetY = targetTwoY;
	}

	r.DrawLine(sourceX, sourceY, targetX, targetY, lineColor);
}

function draw() {
	r.BeginDrawing();

	r.ClearBackground(r.WHITE);

	drawSource();

	drawTargets();

	drawConnector(sourceX, sourceY, targetOneX, targetOneY, targetTwoX, targetTwoY, lineColor);

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