'use strict';

var X = 100;
var Y = 10;
var WIDTH = 420;
var HEIGHT = 270;
var INTERLINE = 20;

window.renderStatistics = function (ctx, names, times) {
  var textOffsetLeft = X + 20;
  var textOffsetTop = Y + 30;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(X + 10, Y + 10, WIDTH, HEIGHT);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(X, Y, WIDTH, HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', textOffsetLeft, textOffsetTop);
  ctx.fillText('Список результатов:', textOffsetLeft, textOffsetTop + INTERLINE);

  drawColumns(ctx, names, times);
};

var getMaxOfArray = function (arr) {
  return Math.max.apply(null, arr);
};

var drawColumns = function (ctx, names, times) {
  var chartHeight = 150;
  var maxTime = getMaxOfArray(times);
  var proportion = chartHeight / maxTime;

  for (var i = 0; i < names.length; i++) {
    drawColumn(ctx, i, names[i], times[i], times[i] * proportion);
  }
};

var drawColumn = function (ctx, index, name, time, height) {
  var columnWidth = 40;
  var columnOffset = 50;
  var columnOuterWidth = columnWidth + columnOffset;
  var chartOffsetLeft = X + 50;
  var chartOffsetBottom = Y + 20;
  var x = chartOffsetLeft + columnOuterWidth * index;
  var y = HEIGHT - chartOffsetBottom - height;
  var timeY = y - 5;
  var nameY = HEIGHT - (chartOffsetBottom - INTERLINE);
  var saturate = Math.round(Math.random() * 100);
  var randomColor = 'hsl(240, ' + saturate + '%, 50%)';

  ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomColor;
  ctx.fillRect(x, y, columnWidth, height);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(Math.round(time), x, timeY, columnOuterWidth);
  ctx.fillText(name, x, nameY, columnOuterWidth);
};
