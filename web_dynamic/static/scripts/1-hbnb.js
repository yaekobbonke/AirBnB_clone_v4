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
