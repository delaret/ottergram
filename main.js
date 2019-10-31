var detail_image_selector = '[data-image-role="target"]';
var detail_title_selector = '[data-image-role="title"]';
var thumbnail_link_selector = '[data-link-role="title"]';

function setDetails(imageUrl, titleText) {
	'use strict';
	var detailImage = document.querySelector(detail_image_selector);
	detailImage.setAttribute('src', 'imageUrl');

	var detailTitle = document.querySelector(detail_title_selector);
	detailTitle.textContent = 'titleText';
}