/**
 * VendorTest
 *
 * @description This is to test including vendor files from node_modules that aren't an npm package.
 */

//import Constants from 'scripts/config/Constants';

class ScavengerHunt {
	constructor() {
    this.ui = {
    }
    console.log($);

		this.initialize();
	}

  checkGeolocation() {
    if(navigator.geolocation) {
      console.log("geolocaiton allowed");
    }
  }

	initialize() {
		this.checkGeolocation();
	}
}

export default ScavengerHunt;
