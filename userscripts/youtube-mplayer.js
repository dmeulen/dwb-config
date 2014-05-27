#!javascript 

var hoverUri;
var regex = new RegExp("https?://www.youtube.com/watch\\?(.*&)*v=.*");

Signal.connectWebView("hovering-over-link", function(w, title, uri) { 
  hoverUri = uri;
});

bind(";ym", function() {
  var uri = hoverUri || tabs.current.uri;
  if (regex.test(uri)) {
    system.spawn("sh -c 'quvi " + uri + " --exec \"mplayer %u\"'");
    io.notify("Playing in mplayer");
  }
});
