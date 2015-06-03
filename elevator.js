/*jslint node: true */
'use strict';

module.exports = {

  goto: function(floorSource,floorTarget) {

    if(typeof floorSource !== "number" ||
      typeof floorTarget !== "string" ||
      floorSource < 0 ||
      floorSource >3 ||
      parseInt(floorTarget, 10) <0 ||
      parseInt(floorTarget, 10) >3) {

      return 0;
    }

    var floorTargetInt = parseInt(floorTarget, 10);

    var out = floorTargetInt - floorSource;

    return out;
  }

};
