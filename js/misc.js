
function subscribe_result(data) {
	$('#loading').hide();
	if (data.error) {
		display_message(data.error);
	} else {
		display_message(data.info, 'info')
	}
	$('#subscribe_button').removeAttr("disabled");
}

function display_message(msg, type) {

	if (!type) type = 'error';

	if (type == 'error') {
		$('#error_message').html(msg).fadeIn('slow');
		setTimeout('hide_error()', 4000);
	} else {
		$('#error_message').hide();
		$('#info_message').html(msg).fadeIn('slow');
	}
}

function hide_error() {
	$('#error_message').fadeOut('slow');
}
