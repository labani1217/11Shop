
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


(function () {
    var pp = document.createElement('script'),
        ppr = document.getElementsByTagName('script')[0];
    stid = 'TkQ1ODJzajMrbjFBNXVkblFnenRzdz09';
    pp.type = 'text/javascript'; pp.async = true;
    pp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/';
    ppr.parentNode.insertBefore(pp, ppr);
})();


// <!-- Start of Async Drift Code -->

            // "use strict";
            
            // !function() {
            // var t = window.driftt = window.drift = window.driftt || [];
            // if (!t.init) {
            //     if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            //     t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            //     t.factory = function(e) {
            //     return function() {
            //         var n = Array.prototype.slice.call(arguments);
            //         return n.unshift(e), t.push(n), t;
            //     };
            //     }, t.methods.forEach(function(e) {
            //     t[e] = t.factory(e);
            //     }), t.load = function(t) {
            //     var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            //     o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            //     var i = document.getElementsByTagName("script")[0];
            //     i.parentNode.insertBefore(o, i);
            //     };
            // }
            // }();
            // drift.SNIPPET_VERSION = '0.3.1';
            // drift.load('5wb6tcfexd8r');
        
    // <!-- End of Async Drift Code -->