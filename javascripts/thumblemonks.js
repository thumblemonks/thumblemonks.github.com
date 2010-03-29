$(document).ready(function() {
  $("#who li").click(function() {
    $("#who li.selected").removeClass("selected");
    $("#who .bio").hide();

    $(this).addClass("selected");
    $("#who .bio[data-bio=" + $(this).attr("data-bio") + "]").show();
  });
});
