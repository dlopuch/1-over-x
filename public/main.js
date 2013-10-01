// common configuration
require(["/sketchbook_config.js"], function() {

// sketch configuration
require(
  ["jquery", "plot/AgeTimeline.js",
   "bootstrap"],
  function($, AgeTimelineView) {
    window.ageTimeline = new AgeTimelineView({el: "#age-plot"});
});
});