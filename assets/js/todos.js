// Check off todos by clicking

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		// extract input
		let todoText = $(this).val();
		$(this).val("");
		// enter it in the to do list
		$("ul").append("<li><span><i class="fas fa-ban"></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});