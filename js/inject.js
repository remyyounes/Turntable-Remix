var reset = document.createElement('script');
reset.src = chrome.extension.getURL("js/reset.js?v=1_" + new Date().getTime());
document.body.appendChild(reset);

var now = document.createElement('script');
now.src = 'http://turntableremix.com:3010/nowjs/now.js';
document.body.appendChild(now);

var underscore = document.createElement('script');
underscore.src = chrome.extension.getURL("js/underscore.js?v=1_" + new Date().getTime());
document.body.appendChild(underscore);

var backbone = document.createElement('script');
backbone.src = chrome.extension.getURL("js/backbone.js?v=1_" + new Date().getTime());
document.body.appendChild(backbone);

var script = document.createElement('script');
script.src =  chrome.extension.getURL("js/script.js?v=1_" + new Date().getTime());   
document.body.appendChild(script);

var css = document.createElement('link');
css.rel =  'stylesheet';
css.type = 'text/css';
css.href = chrome.extension.getURL("css/style.css?v=1_" + new Date().getTime());   
document.body.appendChild(css);