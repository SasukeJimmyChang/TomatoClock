(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,n,e){t.exports=e(56)},40:function(t,n,e){},41:function(t,n,e){},42:function(t,n,e){t.exports=e.p+"static/media/logo.5d5d9eef.svg"},56:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(7),i=e.n(o),c=(e(40),e(41),e(16)),u=e(17),l=e(20),s=e(18),m=e(21),p=(e(42),e(9)),f=e(70),S=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(s.a)(n).call(this,t)))._startTimer=function(){console.log("MTFK _startTimer"),e.interval=setInterval(function(){e._updateTimer()},1e3)},e._stopTimer=function(){clearInterval(e.interval),console.log("MTFK _stopTimer")},e._updateTimer=function(){var t=e.state,n=t.currentMin,a=t.currentSec,r=t.initMin,o=t.initSec,i=t.isPlaying,c=t.isStop;console.log("MTFK _updateTimer"),0===a?i&&n>0?e.setState(function(t){return Object(p.a)({},t,{currentMin:n-1,currentSec:59})}):(!0===c?e.setState(function(t){return Object(p.a)({},t,{isPlaying:!1})}):e.setState(function(t){return Object(p.a)({},t,{isPlaying:!1,currentMin:r,currentSec:o})}),e._stopTimer()):e.setState(function(t){return Object(p.a)({},t,{currentSec:a-1})})},e._handlePlayButton=function(){e.state.isPlaying?e.setState(function(t){return Object(p.a)({},t,{isPlaying:!1,playButtonText:"Start"})},function(){return e._stopTimer()}):e.setState(function(t){return Object(p.a)({},t,{isPlaying:!0,playButtonText:"Pause"})},function(){return e._startTimer()})},e._handleStopButton=function(){var t=e.state,n=t.initMin,a=t.initSec;console.log("MTFK _handleStopButton"),e.setState(function(t){return Object(p.a)({},t,{isPlaying:!1,isStop:!0,playButtonText:"Start",currentMin:n,currentSec:a})},function(){return e._stopTimer()})},e.state={initMin:1,initSec:0,currentMin:1,currentSec:0,isPlaying:!1,isStop:!1,playButtonText:"Start"},e}return Object(m.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("MTFK componentDidMount"),this._startTimer()}},{key:"componentWillUnmount",value:function(){console.log("MTFK componentWillUnmount"),clearInterval(this.interval)}},{key:"render",value:function(){var t=this,n=this.state,e=(n.isPlaying,n.isStop,n.currentMin),a=n.currentSec,o=(n.initMin,n.initSec,n.playButtonText);return console.log(" render() currentMin:".concat(e,", currentSec:").concat(a)),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"timerText"},e,":",a),r.a.createElement(f.a,{size:"large","aria-label":"Start",className:"button buttonCircle"},"Start"),r.a.createElement("button",{className:"button buttonCircle",onClick:function(){return t._handlePlayButton()}},o),r.a.createElement("button",{className:"button buttonCircle",onClick:function(){return t._handleStopButton()}},"Stop")))}}]),n}(r.a.Component),d=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(s.a)(n).call(this,t))).state={},e}return Object(m.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement(S,null)}}]),n}(r.a.Component);var b=function(){return r.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.a924e72f.chunk.js.map