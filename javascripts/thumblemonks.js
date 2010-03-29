(function($) {
  $.fn.randomize = function(randomizable) {
    var that = $(this);
    var randomly = function() { return (Math.round(Math.random()) - 0.25); };
    return that.each(function() {
      that.children(randomizable).remove().sort(randomly).each(function() { that.append(this); });
    });
  }
})(jQuery);

$(document).ready(function() {
  $("#who ul").randomize("li");
  
  $("#who li").click(function() {
    $("#who li.selected").removeClass("selected");
    $("#who .bio").hide();

    $(this).addClass("selected");
    $("#who .bio[data-bio=" + $(this).attr("data-bio") + "]").show();
  });
});
