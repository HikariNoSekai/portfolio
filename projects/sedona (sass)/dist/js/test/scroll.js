$(".gallery__link").click(function() {
    if ($("div.gallery__popup:visible").size() > 0) {
        $("html").css("overflow-y","hidden");
    } else {
        $("html").css("overflow-y","scroll");
    }
});

$(".gallery__overlay").click(function() {
	$("html").css("overflow-y","scroll");
});

$(".gallery__close").click(function() {
	$("html").css("overflow-y","scroll");
});