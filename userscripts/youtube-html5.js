//!javascript

Signal.connect("navigation", function(wv, frame, request) {
    if ( frame == wv.mainFrame                          &&
         request.message.uri.host == "www.youtube.com"  &&
         (/watch/.test(request.uri))                    &&
         !(/&html5=1/.test(request.uri)))
    {
        wv.loadUri(request.uri + "&html5=1");
        return true;
    }
});
