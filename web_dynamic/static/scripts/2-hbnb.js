$(document).ready(init);

function init () {
  const objAmenity = {};
  $('.amenities .popover input').on("change",function () {
    if ($(this).is(':checked')) {
      objAmenity[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete objAmenity[$(this).attr('data-name')];
    }
    const names = Object.keys(objAmenity);
    $('.amenities h4').text(names.sort().join(', '));
  });
const request = require('request');
	let url = 'http://0.0.0.0:5001/api/v1/status/';

	request(url, (error, response, body) => {
		if( response === 'OK'){
			$('div#api_status').addClass('available');
		}
		else {
			$('div#api_status').removeClass(available);
		}
	});
