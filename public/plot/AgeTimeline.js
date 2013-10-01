/*  AgeTimeline: Plot of 1-over-x events
 *  Copyright (C) 2012  Daniel Lopuch <dlopuch@gmail.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see [http://www.gnu.org/licenses/].
 */

define([
"jquery", "underscore", "backbone", "d3",
"plot/BasePlot"
], function(
$, _, Backbone, d3,
BasePlotView
) {

  var FULL_HEIGHT = 400,
      FULL_WIDTH = 1200;

  return BasePlotView.extend({

    initialize: function(options) {
      var xScale = d3.scale.linear().domain([0, 85]),
          yScale = d3.scale.linear().domain([0, 100]);
      BasePlotView.prototype.initialize.call(this, _.extend(options, {xScale: xScale, yScale: yScale}));

      console.log("Init'd!");
    }
  });
});