(function($) {
  $.fn.randomize = function(randomizable) {
    var that = $(this);
    var randomly = function() { return (Math.round(Math.random()) - 0.25); };
    return that.each(function() {
      that.children(randomizable).remove().sort(randomly).each(function() { that.append(this); });
    });
  }

  $.fn.detail_toggle = function(scope, classifier) {
    $(this).click(function() {
      $(scope + " li.selected").removeClass("selected");
      $(scope + " ." + classifier).hide();

      $(this).addClass("selected");
      var commando = "data-" + classifier;
      $(scope + " ." + classifier + "[" + commando + "=" + $(this).attr(commando) + "]").show();
    });
  }
})(jQuery);

$(document).ready(function() {
  $("#buzz li").hover(
    function() {
      var buzz = $(this);
      buzz.addClass("selected");
      $("#buzz_bits .bit[data-buzz=" + buzz.attr("data-buzz") + "]").show();
    },
    function() {
      var buzz = $(this);
      buzz.removeClass("selected");
      $("#buzz_bits .bit[data-buzz=" + buzz.attr("data-buzz") + "]").hide();
    }
  );

  $("#who ul").randomize("li");  
  $("#who li").detail_toggle("#who", "bio");
  $("#projects li").detail_toggle("#projects", "project");
});
