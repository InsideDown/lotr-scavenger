/**
 * Carousel
 *
 * @description This is supposed to be a carousel widget.
 */

class Carousel {
	constructor() {
		this.initialize();
	}

	//uses slick carousel that is automatically bundled into the vendor.js file - could also try bundling on the fly here via require to save space
	initialize() {
		$('.single-item').slick({
			infinite: true
		});
	}
}

export default Carousel;
