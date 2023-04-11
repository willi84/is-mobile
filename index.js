
// Write Javascript code!
const userAgent = navigator.userAgent;
var isIOS = /(iPhone|iPod|iPad|Macintosh)/.test(navigator.userAgent);
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h2> test userAgent</h2>
navigator: ${userAgent}<br /><br />
<b>isIOS:</b> ${isIOS}<br />
<b>Android:</b> ${isAndroid}
`