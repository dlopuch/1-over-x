/**
 * Common Sketchbook Configurations.
 *
 * This require file allows for the extension of the JamJS-generated configuration file with common definitions to be
 * shared amongst all experiments.
 *
 * See /_sketch_boilerplate/main.js for an example of how to use this.
 */
require.config({

  baseUrl: "/", // needed b/c experiment index.html's reference their local main.js as the main-data (and main-data is used as default baseUrl)

  paths: {
    // paths can be used to shorten/alias certain modules:
    "boilerplate": "/_sketch_boilerplate_"

    // or assign the sketch's name to a stable version of an experiment.
    // for example: "madExperiment": "/madExperiment/v2"
  },

  shim: {
    // Put shims here.
  }

});
