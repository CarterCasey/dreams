var image = undefined;
var frame = 0;

$(document).ready(function () {
	$("body").keydown(navigate);

	$(".dream_link").each(function () {
		$(this).click(function () {
			image = $(this).text().toLowerCase();
			frame = 0;
			loadDream();
		});
	});
});

function loadDream () {
	var path = "images/";
	if (!image) {
		return;
	} else if (!frame) {
		path += image + ".jpg";
	} else {
		path += image + "-frames/" + frame + ".jpg";
	}

	var dream = $("<img id='image'/>").attr("src", path)
		.load(function () { $("#dream > #image").replaceWith(dream); })
		.error(function () { frame = 0; loadDream(); });
}

function navigate (event) {
	if (event.keyCode == 39) {
		frame++;
		loadDream();
	} else if (event.keyCode == 37) {
		if (frame) {
			frame--;
		}
		loadDream();
	}
}
