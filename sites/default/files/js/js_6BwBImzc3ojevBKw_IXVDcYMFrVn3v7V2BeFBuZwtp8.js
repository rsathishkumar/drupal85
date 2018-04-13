/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          case '!':
            processedArgs[key] = args[key];
            break;

          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(drupalSettings.path.currentPath);
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push($(this).attr('data-contextual-id'));
      });

      var uncachedIDs = _.filter(ids, function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID + '"]'), html);
          });
          return false;
        }
        return true;
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], { model: Drupal.contextual.StateModel });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.$el.attr('role', 'form');

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  var autocomplete = void 0;

  function autocompleteSplitValues(value) {
    var result = [];
    var quote = false;
    var current = '';
    var valueLength = value.length;
    var character = void 0;

    for (var i = 0; i < valueLength; i++) {
      character = value.charAt(i);
      if (character === '"') {
        current += character;
        quote = !quote;
      } else if (character === ',' && !quote) {
        result.push(current.trim());
        current = '';
      } else {
        current += character;
      }
    }
    if (value.length > 0) {
      result.push($.trim(current));
    }

    return result;
  }

  function extractLastTerm(terms) {
    return autocomplete.splitValues(terms).pop();
  }

  function searchHandler(event) {
    var options = autocomplete.options;

    if (options.isComposing) {
      return false;
    }

    var term = autocomplete.extractLastTerm(event.target.value);

    if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) {
      return false;
    }

    return term.length >= options.minLength;
  }

  function sourceData(request, response) {
    var elementId = this.element.attr('id');

    if (!(elementId in autocomplete.cache)) {
      autocomplete.cache[elementId] = {};
    }

    function showSuggestions(suggestions) {
      var tagged = autocomplete.splitValues(request.term);
      var il = tagged.length;
      for (var i = 0; i < il; i++) {
        var index = suggestions.indexOf(tagged[i]);
        if (index >= 0) {
          suggestions.splice(index, 1);
        }
      }
      response(suggestions);
    }

    function sourceCallbackHandler(data) {
      autocomplete.cache[elementId][term] = data;

      showSuggestions(data);
    }

    var term = autocomplete.extractLastTerm(request.term);

    if (autocomplete.cache[elementId].hasOwnProperty(term)) {
      showSuggestions(autocomplete.cache[elementId][term]);
    } else {
      var options = $.extend({ success: sourceCallbackHandler, data: { q: term } }, autocomplete.ajax);
      $.ajax(this.element.attr('data-autocomplete-path'), options);
    }
  }

  function focusHandler() {
    return false;
  }

  function selectHandler(event, ui) {
    var terms = autocomplete.splitValues(event.target.value);

    terms.pop();

    terms.push(ui.item.value);

    event.target.value = terms.join(', ');

    return false;
  }

  function renderItem(ul, item) {
    return $('<li>').append($('<a>').html(item.label)).appendTo(ul);
  }

  Drupal.behaviors.autocomplete = {
    attach: function attach(context) {
      var $autocomplete = $(context).find('input.form-autocomplete').once('autocomplete');
      if ($autocomplete.length) {
        var blacklist = $autocomplete.attr('data-autocomplete-first-character-blacklist');
        $.extend(autocomplete.options, {
          firstCharacterBlacklist: blacklist || ''
        });

        $autocomplete.autocomplete(autocomplete.options).each(function () {
          $(this).data('ui-autocomplete')._renderItem = autocomplete.options.renderItem;
        });

        $autocomplete.on('compositionstart.autocomplete', function () {
          autocomplete.options.isComposing = true;
        });
        $autocomplete.on('compositionend.autocomplete', function () {
          autocomplete.options.isComposing = false;
        });
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('input.form-autocomplete').removeOnce('autocomplete').autocomplete('destroy');
      }
    }
  };

  autocomplete = {
    cache: {},

    splitValues: autocompleteSplitValues,
    extractLastTerm: extractLastTerm,

    options: {
      source: sourceData,
      focus: focusHandler,
      search: searchHandler,
      select: selectHandler,
      renderItem: renderItem,
      minLength: 1,

      firstCharacterBlacklist: '',

      isComposing: false
    },
    ajax: {
      dataType: 'json'
    }
  };

  Drupal.autocomplete = autocomplete;
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.entityContentDetailsSummaries = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.entity-content-form-revision-information').drupalSetSummary(function (context) {
        var $revisionContext = $(context);
        var revisionCheckbox = $revisionContext.find('.js-form-item-revision input');

        if (revisionCheckbox.is(':checked') || !revisionCheckbox.length && $revisionContext.find('.js-form-item-revision-log textarea').length) {
          return Drupal.t('New revision');
        }

        return Drupal.t('No revision');
      });

      $context.find('details.entity-translation-options').drupalSetSummary(function (context) {
        var $translationContext = $(context);
        var translate = void 0;
        var $checkbox = $translationContext.find('.js-form-item-translation-translate input');

        if ($checkbox.length) {
          translate = $checkbox.is(':checked') ? Drupal.t('Needs to be updated') : Drupal.t('Does not need to be updated');
        } else {
          $checkbox = $translationContext.find('.js-form-item-translation-retranslate input');
          translate = $checkbox.is(':checked') ? Drupal.t('Flag other translations as outdated') : Drupal.t('Do not flag other translations as outdated');
        }

        return translate;
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.nodeDetailsSummaries = {
    attach: function attach(context) {
      var $context = $(context);

      $context.find('.node-form-author').drupalSetSummary(function (context) {
        var $authorContext = $(context);
        var name = $authorContext.find('.field--name-uid input').val();
        var date = $authorContext.find('.field--name-created input').val();

        if (name && date) {
          return Drupal.t('By @name on @date', { '@name': name, '@date': date });
        } else if (name) {
          return Drupal.t('By @name', { '@name': name });
        } else if (date) {
          return Drupal.t('Authored on @date', { '@date': date });
        }
      });

      $context.find('.node-form-options').drupalSetSummary(function (context) {
        var $optionsContext = $(context);
        var vals = [];

        if ($optionsContext.find('input').is(':checked')) {
          $optionsContext.find('input:checked').next('label').each(function () {
            vals.push(Drupal.checkPlain($.trim($(this).text())));
          });
          return vals.join(', ');
        }

        return Drupal.t('Not promoted');
      });
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.detailsAria = {
    attach: function attach() {
      $('body').once('detailsAria').on('click.detailsAria', 'summary', function (event) {
        var $summary = $(event.currentTarget);
        var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';

        $summary.attr({
          'aria-expanded': open,
          'aria-pressed': open
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Modernizr, Drupal) {
  function CollapsibleDetails(node) {
    this.$node = $(node);
    this.$node.data('details', this);

    var anchor = location.hash && location.hash !== '#' ? ', ' + location.hash : '';
    if (this.$node.find('.error' + anchor).length) {
      this.$node.attr('open', true);
    }

    this.setupSummary();

    this.setupLegend();
  }

  $.extend(CollapsibleDetails, {
    instances: []
  });

  $.extend(CollapsibleDetails.prototype, {
    setupSummary: function setupSummary() {
      this.$summary = $('<span class="summary"></span>');
      this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated');
    },
    setupLegend: function setupLegend() {
      var $legend = this.$node.find('> summary');

      $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($legend).after(document.createTextNode(' '));

      $('<a class="details-title"></a>').attr('href', '#' + this.$node.attr('id')).prepend($legend.contents()).appendTo($legend);

      $legend.append(this.$summary).on('click', $.proxy(this.onLegendClick, this));
    },
    onLegendClick: function onLegendClick(e) {
      this.toggle();
      e.preventDefault();
    },
    onSummaryUpdated: function onSummaryUpdated() {
      var text = $.trim(this.$node.drupalGetSummary());
      this.$summary.html(text ? ' (' + text + ')' : '');
    },
    toggle: function toggle() {
      var _this = this;

      var isOpen = !!this.$node.attr('open');
      var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');
      if (isOpen) {
        $summaryPrefix.html(Drupal.t('Show'));
      } else {
        $summaryPrefix.html(Drupal.t('Hide'));
      }

      setTimeout(function () {
        _this.$node.attr('open', !isOpen);
      }, 0);
    }
  });

  Drupal.behaviors.collapse = {
    attach: function attach(context) {
      if (Modernizr.details) {
        return;
      }
      var $collapsibleDetails = $(context).find('details').once('collapse').addClass('collapse-processed');
      if ($collapsibleDetails.length) {
        for (var i = 0; i < $collapsibleDetails.length; i++) {
          CollapsibleDetails.instances.push(new CollapsibleDetails($collapsibleDetails[i]));
        }
      }
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };

  $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);

  Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../version","../keycode"],a):a(jQuery)}(function(a){function b(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.on("mouseout",c,function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",c,e)}function e(){a.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))}function f(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.12.1"}});var g;return a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return f(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.off("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.on("focus",this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.on("click",function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,g){var h,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),f(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty(),g===e&&(g=null))},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,g,h,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),g=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),f(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,g),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(c){if(c=c.target||c,"input"!==c.nodeName.toLowerCase()&&(c=a("input",c.parentNode)[0]),!a.datepicker._isDisabledDatepicker(c)&&a.datepicker._lastInput!==c){var d,e,g,h,i,j,k;d=a.datepicker._getInst(c),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),g=e?e.apply(c,[c,d]):{},g!==!1&&(f(d.settings,g),d.lastVal=null,a.datepicker._lastInput=c,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(c.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(c),a.datepicker._pos[1]+=c.offsetHeight),h=!1,a(c).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,d.dpDiv.empty(),d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",b(a(c))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.trigger("focus"),a.datepicker._curInst=d))}},_updateDatepicker:function(b){this.maxRows=4,g=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),f=d[1],h=17,i=b.dpDiv.find("."+this._dayOverClass+" a");i.length>0&&e.apply(i.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",h*f+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.trigger("focus"),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).val(e))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getFullYear()%100<10?"0":"")+b.getFullYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).on(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{
for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.selectedYear+("Y"===c?b:0),e=a.selectedMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).on("mousedown",a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.12.1",a.datepicker});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Modernizr, Drupal) {
  Drupal.behaviors.date = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (Modernizr.inputtypes.date === true) {
        return;
      }
      $context.find('input[data-drupal-date-format]').once('datePicker').each(function () {
        var $input = $(this);
        var datepickerSettings = {};
        var dateFormat = $input.data('drupalDateFormat');

        datepickerSettings.dateFormat = dateFormat.replace('Y', 'yy').replace('m', 'mm').replace('d', 'dd');

        if ($input.attr('min')) {
          datepickerSettings.minDate = $input.attr('min');
        }
        if ($input.attr('max')) {
          datepickerSettings.maxDate = $input.attr('max');
        }
        $input.datepicker(datepickerSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('input[data-drupal-date-format]').findOnce('datePicker').datepicker('destroy');
      }
    }
  };
})(jQuery, Modernizr, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};

        element_settings.progress = { type: 'throbber' };

        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialogRenderer = $(this).data('dialog-renderer');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        element_settings.url = $(this.form).attr('action');

        element_settings.setClick = true;

        element_settings.event = 'click';

        element_settings.progress = { type: 'throbber' };
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var pathText = void 0;
    var responseText = void 0;
    var readyStateText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', { '!statusText': $.trim(xmlhttp.statusText) });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', { '!responseText': $.trim(xmlhttp.responseText) });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', { '!readyState': xmlhttp.readyState }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', { '!customMessage': customMessage }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = element_settings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function beforeSubmit(form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (element_settings.dialogType || 'ajax');
    if (element_settings.dialogRenderer) {
      wrapper += '.' + element_settings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', { '!url': ajax.url }));
      }
      return ajax.eventResponse(this, event);
    });

    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.element_settings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response, status) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = void 0;

      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      $wrapper[method]($new_content);

      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      if ($new_content.parents('html').length > 0) {
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target),d=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&d.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var c=a(b.target).closest(".ui-menu-item"),d=a(b.currentTarget);c[0]===d[0]&&(this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(b,d))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){var c=!a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]));c&&this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){var b=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),c=b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),c.children().each(function(){var b=a(this);b.data("ui-menu-submenu-caret")&&b.remove()})},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",f=!1,e=b.keyCode>=96&&b.keyCode<=105?(b.keyCode-96).toString():String.fromCharCode(b.keyCode),clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c,d,e,f,g=this,h=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),d=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.prev(),d=a("<span>").data("ui-menu-submenu-caret",!0);g._addClass(d,"ui-menu-icon","ui-icon "+h),c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),this._addClass(d,"ui-menu","ui-widget ui-widget-content ui-front"),b=i.add(this.element),c=b.find(this.options.items),c.not(".ui-menu-item").each(function(){var b=a(this);g._isDivider(b)&&g._addClass(b,"ui-menu-divider","ui-widget-content")}),e=c.not(".ui-menu-item, .ui-menu-divider"),f=e.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(e,"ui-menu-item")._addClass(f,"ui-menu-item-wrapper"),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",String(a)),this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){var c,d,e;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),e=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(e,null,"ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=f||!g&&this._isContentEditable(this.element),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==a.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(b,c){var d,e;return this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)})):(e=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",b,{item:e})&&b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(e.value),d=c.item.attr("aria-label")||e.value,void(d&&a.trim(d).length&&(this.liveRegion.children().hide(),a("<div>").text(d).appendTo(this.liveRegion))))},menuselect:function(b,c){var d=c.item.data("ui-autocomplete-item"),e=this.previous;this.element[0]!==a.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=e,this._delay(function(){this.previous=e,this.selectedItem=d})),!1!==this._trigger("select",b,{item:d})&&this._value(d.value),this.term=this._value(),this.close(b),this.selectedItem=d}}),this.liveRegion=a("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(b){var c=this.menu.element[0];return b.target===this.element[0]||b.target===c||a.contains(c,b.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front, dialog")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;b&&(!b||c||d)||(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var b=++this.requestIndex;return a.proxy(function(a){b===this.requestIndex&&this.__response(a),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({},b,{label:b.label||b.value,value:b.value||b.label})})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<div>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),b.preventDefault())},_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(b){var c;this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),a("<div>").text(c).appendTo(this.liveRegion))}}),a.ui.autocomplete});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.pathDetailsSummaries = {
    attach: function attach(context) {
      $(context).find('.path-form').drupalSetSummary(function (context) {
        var path = $('.js-form-item-path-0-alias input').val();

        return path ? Drupal.t('Alias: @alias', { '@alias': path }) : Drupal.t('No alias');
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.menuUiDetailsSummaries = {
    attach: function attach(context) {
      $(context).find('.menu-link-form').drupalSetSummary(function (context) {
        var $context = $(context);
        if ($context.find('.js-form-item-menu-enabled input').is(':checked')) {
          return Drupal.checkPlain($context.find('.js-form-item-menu-title input').val());
        }

        return Drupal.t('Not in menu');
      });
    }
  };

  Drupal.behaviors.menuUiLinkAutomaticTitle = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.menu-link-form').each(function () {
        var $this = $(this);

        var $checkbox = $this.find('.js-form-item-menu-enabled input');
        var $link_title = $context.find('.js-form-item-menu-title input');
        var $title = $this.closest('form').find('.js-form-item-title-0-value input');

        if (!($checkbox.length && $link_title.length && $title.length)) {
          return;
        }

        if ($checkbox.is(':checked') && $link_title.val().length) {
          $link_title.data('menuLinkAutomaticTitleOverridden', true);
        }

        $link_title.on('keyup', function () {
          $link_title.data('menuLinkAutomaticTitleOverridden', true);
        });

        $checkbox.on('change', function () {
          if ($checkbox.is(':checked')) {
            if (!$link_title.data('menuLinkAutomaticTitleOverridden')) {
              $link_title.val($title.val());
            }
          } else {
            $link_title.val('');
            $link_title.removeData('menuLinkAutomaticTitleOverridden');
          }
          $checkbox.closest('.vertical-tabs-pane').trigger('summaryUpdated');
          $checkbox.trigger('formUpdated');
        });

        $title.on('keyup', function () {
          if (!$link_title.data('menuLinkAutomaticTitleOverridden') && $checkbox.is(':checked')) {
            $link_title.val($title.val());
            $link_title.val($title.val()).trigger('formUpdated');
          }
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  var states = Drupal.states = {
    postponed: []
  };

  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var config = void 0;
      var state = void 0;
      var il = $states.length;
      for (var i = 0; i < il; i++) {
        config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        for (state in config) {
          if (config.hasOwnProperty(state)) {
            new states.Dependent({
              element: $($states[i]),
              state: states.State.sanitize(state),
              constraints: config[state]
            });
          }
        }
      }

      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };

  states.Dependent = function (args) {
    $.extend(this, { values: {}, oldValue: null }, args);

    this.dependees = this.getDependees();
    for (var selector in this.dependees) {
      if (this.dependees.hasOwnProperty(selector)) {
        this.initializeDependee(selector, this.dependees[selector]);
      }
    }
  };

  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };

  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var state = void 0;
      var self = this;

      function stateEventHandler(e) {
        self.update(e.data.selector, e.data.state, e.value);
      }

      this.values[selector] = {};

      for (var i in dependeeStates) {
        if (dependeeStates.hasOwnProperty(i)) {
          state = dependeeStates[i];

          if ($.inArray(state, dependeeStates) === -1) {
            continue;
          }

          state = states.State.sanitize(state);

          this.values[selector][state.name] = null;

          $(selector).on('state:' + state, { selector: selector, state: state }, stateEventHandler);

          new states.Trigger({ selector: selector, state: state });
        }
      }
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }

      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);

      if (value !== this.oldValue) {
        this.oldValue = value;

        value = invert(value, this.state.invert);

        this.element.trigger({ type: 'state:' + this.state, value: value, trigger: true });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result = void 0;
      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;
        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);

            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
          for (var n in constraints) {
            if (constraints.hasOwnProperty(n)) {
              result = ternary(result, this.checkConstraints(constraints[n], selector, n));

              if (result === false) {
                return false;
              }
            }
          }
        }
      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }

      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }

      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};

      var _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };

      this.verifyConstraints(this.constraints);

      this.compare = _compare;

      return cache;
    }
  };

  states.Trigger = function (args) {
    $.extend(this, args);

    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);

      if (!this.element.data('trigger:' + this.state)) {
        this.initialize();
      }
    }
  };

  states.Trigger.prototype = {
    initialize: function initialize() {
      var trigger = states.Trigger.states[this.state];

      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        for (var event in trigger) {
          if (trigger.hasOwnProperty(event)) {
            this.defaultTrigger(event, trigger[event]);
          }
        }
      }

      this.element.data('trigger:' + this.state, true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);

      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);

        if (oldValue !== value) {
          this.element.trigger({ type: 'state:' + this.state, value: value, oldValue: oldValue });
          oldValue = value;
        }
      }, this));

      states.postponed.push($.proxy(function () {
        this.element.trigger({ type: 'state:' + this.state, value: oldValue, oldValue: null });
      }, this));
    }
  };

  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      }
    },

    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');

          return !checked;
        });
        return checked;
      }
    },

    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      }
    },

    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };

  states.State = function (state) {
    this.pristine = this.name = state;

    var process = true;
    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }

      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };

  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }

    return new states.State(state);
  };

  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };

  states.State.prototype = {
    invert: false,

    toString: function toString() {
      return this.name;
    }
  };

  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });

  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = 'label' + (e.target.id ? '[for=' + e.target.id + ']' : '');
        var $label = $(e.target).attr({ required: 'required', 'aria-required': 'aria-required' }).closest('.js-form-item, .js-form-wrapper').find(label);

        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });

  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });

  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).prop('checked', e.value);
    }
  });

  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });

  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    } else if (typeof b === 'undefined') {
      return a;
    }

    return a && b;
  }

  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }

  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }

    return typeof a === 'undefined' || typeof b === 'undefined';
  }
})(jQuery, Drupal);;
try {
  window.H5PIntegration = drupalSettings.h5p.H5PIntegration;
}
catch (err) {
  console.error('Missing H5PIntegration settings.');
}
;
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

// Snap this specific version of jQuery into H5P. jQuery.noConflict will
// revert the globals to what they were before this file was loaded.
var H5P = H5P || {};

/**
 * jQuery v1.9.1
 *
 * @member
 */
H5P.jQuery = jQuery.noConflict(true);
;
/*jshint multistr: true */
// TODO: Should we split up the generic parts needed by the editor(and others), and the parts needed to "run" H5Ps?

/** @namespace */
var H5P = H5P || {};

/**
 * Tells us if we're inside of an iframe.
 * @member {boolean}
 */
H5P.isFramed = (window.self !== window.parent);

/**
 * jQuery instance of current window.
 * @member {H5P.jQuery}
 */
H5P.$window = H5P.jQuery(window);

/**
 * List over H5P instances on the current page.
 * @member {Array}
 */
H5P.instances = [];

// Detect if we support fullscreen, and what prefix to use.
if (document.documentElement.requestFullScreen) {
  /**
   * Browser prefix to use when entering fullscreen mode.
   * undefined means no fullscreen support.
   * @member {string}
   */
  H5P.fullScreenBrowserPrefix = '';
}
else if (document.documentElement.webkitRequestFullScreen) {
  H5P.safariBrowser = navigator.userAgent.match(/version\/([.\d]+)/i);
  H5P.safariBrowser = (H5P.safariBrowser === null ? 0 : parseInt(H5P.safariBrowser[1]));

  // Do not allow fullscreen for safari < 7.
  if (H5P.safariBrowser === 0 || H5P.safariBrowser > 6) {
    H5P.fullScreenBrowserPrefix = 'webkit';
  }
}
else if (document.documentElement.mozRequestFullScreen) {
  H5P.fullScreenBrowserPrefix = 'moz';
}
else if (document.documentElement.msRequestFullscreen) {
  H5P.fullScreenBrowserPrefix = 'ms';
}

/**
 * Keep track of when the H5Ps where started.
 *
 * @type {Object[]}
 */
H5P.opened = {};

/**
 * Initialize H5P content.
 * Scans for ".h5p-content" in the document and initializes H5P instances where found.
 *
 * @param {Object} target DOM Element
 */
H5P.init = function (target) {
  // Useful jQuery object.
  if (H5P.$body === undefined) {
    H5P.$body = H5P.jQuery(document.body);
  }

  // Determine if we can use full screen
  if (H5P.fullscreenSupported === undefined) {
    /**
     * Use this variable to check if fullscreen is supported. Fullscreen can be
     * restricted when embedding since not all browsers support the native
     * fullscreen, and the semi-fullscreen solution doesn't work when embedded.
     * @type {boolean}
     */
    H5P.fullscreenSupported = !(H5P.isFramed && H5P.externalEmbed !== false) || !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled);
    // We should consider document.msFullscreenEnabled when they get their
    // element sizing corrected. Ref. https://connect.microsoft.com/IE/feedback/details/838286/ie-11-incorrectly-reports-dom-element-sizes-in-fullscreen-mode-when-fullscreened-element-is-within-an-iframe
  }

  // Deprecated variable, kept to maintain backwards compatability
  if (H5P.canHasFullScreen === undefined) {
    /**
     * @deprecated since version 1.11
     * @type {boolean}
     */
    H5P.canHasFullScreen = H5P.fullscreenSupported;
  }

  // H5Ps added in normal DIV.
  var $containers = H5P.jQuery('.h5p-content:not(.h5p-initialized)', target).each(function () {
    var $element = H5P.jQuery(this).addClass('h5p-initialized');
    var $container = H5P.jQuery('<div class="h5p-container"></div>').appendTo($element);
    var contentId = $element.data('content-id');
    var contentData = H5PIntegration.contents['cid-' + contentId];
    if (contentData === undefined) {
      return H5P.error('No data for content id ' + contentId + '. Perhaps the library is gone?');
    }
    var library = {
      library: contentData.library,
      params: JSON.parse(contentData.jsonContent)
    };

    H5P.getUserData(contentId, 'state', function (err, previousState) {
      if (previousState) {
        library.userDatas = {
          state: previousState
        };
      }
      else if (previousState === null && H5PIntegration.saveFreq) {
        // Content has been reset. Display dialog.
        delete contentData.contentUserData;
        var dialog = new H5P.Dialog('content-user-data-reset', 'Data Reset', '<p>' + H5P.t('contentChanged') + '</p><p>' + H5P.t('startingOver') + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>', $container);
        H5P.jQuery(dialog).on('dialog-opened', function (event, $dialog) {

          var closeDialog = function (event) {
            if (event.type === 'click' || event.which === 32) {
              dialog.close();
              H5P.deleteUserData(contentId, 'state', 0);
            }
          };

          $dialog.find('.h5p-dialog-ok-button').click(closeDialog).keypress(closeDialog);
        });
        dialog.open();
      }
      // If previousState is false we don't have a previous state
    });

    // Create new instance.
    var instance = H5P.newRunnable(library, contentId, $container, true, {standalone: true});

    // Check if we should add and display a fullscreen button for this H5P.
    if (contentData.fullScreen == 1 && H5P.fullscreenSupported) {
      H5P.jQuery(
        '<div class="h5p-content-controls">' +
          '<div role="button" ' +
                'tabindex="0" ' +
                'class="h5p-enable-fullscreen" ' +
                'title="' + H5P.t('fullscreen') + '">' +
          '</div>' +
        '</div>')
        .prependTo($container)
          .children()
          .click(function () {
            H5P.fullScreen($container, instance);
          })
        .keydown(function (e) {
          if (e.which === 32 || e.which === 13) {
            H5P.fullScreen($container, instance);
            return false;
          }
        })
      ;
    }

    /**
     * Create action bar
     */
    var displayOptions = contentData.displayOptions;
    var displayFrame = false;
    if (displayOptions.frame) {
      // Special handling of copyrights
      if (displayOptions.copyright) {
        var copyrights = H5P.getCopyrights(instance, library.params, contentId);
        if (!copyrights) {
          displayOptions.copyright = false;
        }
      }

      // Create action bar
      var actionBar = new H5P.ActionBar(displayOptions);
      var $actions = actionBar.getDOMElement();

      actionBar.on('download', function () {
        window.location.href = contentData.exportUrl;
        instance.triggerXAPI('downloaded');
      });
      actionBar.on('copyrights', function () {
        var dialog = new H5P.Dialog('copyrights', H5P.t('copyrightInformation'), copyrights, $container);
        dialog.open();
        instance.triggerXAPI('accessed-copyright');
      });
      actionBar.on('embed', function () {
        H5P.openEmbedDialog($actions, contentData.embedCode, contentData.resizeCode, {
          width: $element.width(),
          height: $element.height()
        });
        instance.triggerXAPI('accessed-embed');
      });

      if (actionBar.hasActions()) {
        displayFrame = true;
        $actions.insertAfter($container);
      }
    }

    $element.addClass(displayFrame ? 'h5p-frame' : 'h5p-no-frame');

    // Keep track of when we started
    H5P.opened[contentId] = new Date();

    // Handle events when the user finishes the content. Useful for logging exercise results.
    H5P.on(instance, 'finish', function (event) {
      if (event.data !== undefined) {
        H5P.setFinished(contentId, event.data.score, event.data.maxScore, event.data.time);
      }
    });

    // Listen for xAPI events.
    H5P.on(instance, 'xAPI', H5P.xAPICompletedListener);

    // Auto save current state if supported
    if (H5PIntegration.saveFreq !== false && (
        instance.getCurrentState instanceof Function ||
        typeof instance.getCurrentState === 'function')) {

      var saveTimer, save = function () {
        var state = instance.getCurrentState();
        if (state !== undefined) {
          H5P.setUserData(contentId, 'state', state, {deleteOnChange: true});
        }
        if (H5PIntegration.saveFreq) {
          // Continue autosave
          saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1000);
        }
      };

      if (H5PIntegration.saveFreq) {
        // Start autosave
        saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1000);
      }

      // xAPI events will schedule a save in three seconds.
      H5P.on(instance, 'xAPI', function (event) {
        var verb = event.getVerb();
        if (verb === 'completed' || verb === 'progressed') {
          clearTimeout(saveTimer);
          saveTimer = setTimeout(save, 3000);
        }
      });
    }

    if (H5P.isFramed) {
      var resizeDelay;
      if (H5P.externalEmbed === false) {
        // Internal embed
        // Make it possible to resize the iframe when the content changes size. This way we get no scrollbars.
        var iframe = window.frameElement;
        var resizeIframe = function () {
          if (window.parent.H5P.isFullscreen) {
            return; // Skip if full screen.
          }

          // Retain parent size to avoid jumping/scrolling
          var parentHeight = iframe.parentElement.style.height;
          iframe.parentElement.style.height = iframe.parentElement.clientHeight + 'px';

          // Reset iframe height, in case content has shrinked.
          iframe.style.height = '1px';

          // Resize iframe so all content is visible.
          iframe.style.height = (iframe.contentDocument.body.scrollHeight) + 'px';

          // Free parent
          iframe.parentElement.style.height = parentHeight;
        };

        H5P.on(instance, 'resize', function () {
          // Use a delay to make sure iframe is resized to the correct size.
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function () {
            resizeIframe();
          }, 1);
        });
      }
      else if (H5P.communicator) {
        // External embed
        var parentIsFriendly = false;

        // Handle that the resizer is loaded after the iframe
        H5P.communicator.on('ready', function () {
          H5P.communicator.send('hello');
        });

        // Handle hello message from our parent window
        H5P.communicator.on('hello', function () {
          // Initial setup/handshake is done
          parentIsFriendly = true;

          // Make iframe responsive
          document.body.style.height = 'auto';

          // Hide scrollbars for correct size
          document.body.style.overflow = 'hidden';

          // Content need to be resized to fit the new iframe size
          H5P.trigger(instance, 'resize');
        });

        // When resize has been prepared tell parent window to resize
        H5P.communicator.on('resizePrepared', function (data) {
          H5P.communicator.send('resize', {
            scrollHeight: document.body.scrollHeight
          });
        });

        H5P.communicator.on('resize', function () {
          H5P.trigger(instance, 'resize');
        });

        H5P.on(instance, 'resize', function () {
          if (H5P.isFullscreen) {
            return; // Skip iframe resize
          }

          // Use a delay to make sure iframe is resized to the correct size.
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function () {
            // Only resize if the iframe can be resized
            if (parentIsFriendly) {
              H5P.communicator.send('prepareResize', {
                scrollHeight: document.body.scrollHeight,
                clientHeight: document.body.clientHeight
              });
            }
            else {
              H5P.communicator.send('hello');
            }
          }, 0);
        });
      }
    }

    if (!H5P.isFramed || H5P.externalEmbed === false) {
      // Resize everything when window is resized.
      H5P.jQuery(window.parent).resize(function () {
        if (window.parent.H5P.isFullscreen) {
          // Use timeout to avoid bug in certain browsers when exiting fullscreen. Some browser will trigger resize before the fullscreenchange event.
          H5P.trigger(instance, 'resize');
        }
        else {
          H5P.trigger(instance, 'resize');
        }
      });
    }

    H5P.instances.push(instance);

    // Resize content.
    H5P.trigger(instance, 'resize');
  });

  // Insert H5Ps that should be in iframes.
  H5P.jQuery('iframe.h5p-iframe:not(.h5p-initialized)', target).each(function () {
    var contentId = H5P.jQuery(this).addClass('h5p-initialized').data('content-id');
    this.contentDocument.open();
    this.contentDocument.write('<!doctype html><html class="h5p-iframe"><head>' + H5P.getHeadTags(contentId) + '</head><body><div class="h5p-content" data-content-id="' + contentId + '"/></body></html>');
    this.contentDocument.close();
  });
};

/**
 * Loop through assets for iframe content and create a set of tags for head.
 *
 * @private
 * @param {number} contentId
 * @returns {string} HTML
 */
H5P.getHeadTags = function (contentId) {
  var createStyleTags = function (styles) {
    var tags = '';
    for (var i = 0; i < styles.length; i++) {
      tags += '<link rel="stylesheet" href="' + styles[i] + '">';
    }
    return tags;
  };

  var createScriptTags = function (scripts) {
    var tags = '';
    for (var i = 0; i < scripts.length; i++) {
      tags += '<script src="' + scripts[i] + '"></script>';
    }
    return tags;
  };

  return '<base target="_parent">' +
         createStyleTags(H5PIntegration.core.styles) +
         createStyleTags(H5PIntegration.contents['cid-' + contentId].styles) +
         createScriptTags(H5PIntegration.core.scripts) +
         createScriptTags(H5PIntegration.contents['cid-' + contentId].scripts) +
         '<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;</script>';
};

/**
 * When embedded the communicator helps talk to the parent page.
 *
 * @type {Communicator}
 */
H5P.communicator = (function () {
  /**
   * @class
   * @private
   */
  function Communicator() {
    var self = this;

    // Maps actions to functions
    var actionHandlers = {};

    // Register message listener
    window.addEventListener('message', function receiveMessage(event) {
      if (window.parent !== event.source || event.data.context !== 'h5p') {
        return; // Only handle messages from parent and in the correct context
      }

      if (actionHandlers[event.data.action] !== undefined) {
        actionHandlers[event.data.action](event.data);
      }
    } , false);


    /**
     * Register action listener.
     *
     * @param {string} action What you are waiting for
     * @param {function} handler What you want done
     */
    self.on = function (action, handler) {
      actionHandlers[action] = handler;
    };

    /**
     * Send a message to the all mighty father.
     *
     * @param {string} action
     * @param {Object} [data] payload
     */
    self.send = function (action, data) {
      if (data === undefined) {
        data = {};
      }
      data.context = 'h5p';
      data.action = action;

      // Parent origin can be anything
      window.parent.postMessage(data, '*');
    };
  }

  return (window.postMessage && window.addEventListener ? new Communicator() : undefined);
})();

/**
 * Enter semi fullscreen for the given H5P instance
 *
 * @param {H5P.jQuery} $element Content container.
 * @param {Object} instance
 * @param {function} exitCallback Callback function called when user exits fullscreen.
 * @param {H5P.jQuery} $body For internal use. Gives the body of the iframe.
 */
H5P.semiFullScreen = function ($element, instance, exitCallback, body) {
  H5P.fullScreen($element, instance, exitCallback, body, true);
};

/**
 * Enter fullscreen for the given H5P instance.
 *
 * @param {H5P.jQuery} $element Content container.
 * @param {Object} instance
 * @param {function} exitCallback Callback function called when user exits fullscreen.
 * @param {H5P.jQuery} $body For internal use. Gives the body of the iframe.
 * @param {Boolean} forceSemiFullScreen
 */
H5P.fullScreen = function ($element, instance, exitCallback, body, forceSemiFullScreen) {
  if (H5P.exitFullScreen !== undefined) {
    return; // Cannot enter new fullscreen until previous is over
  }

  if (H5P.isFramed && H5P.externalEmbed === false) {
    // Trigger resize on wrapper in parent window.
    window.parent.H5P.fullScreen($element, instance, exitCallback, H5P.$body.get(), forceSemiFullScreen);
    H5P.isFullscreen = true;
    H5P.exitFullScreen = function () {
      window.parent.H5P.exitFullScreen();
    };
    H5P.on(instance, 'exitFullScreen', function () {
      H5P.isFullscreen = false;
      H5P.exitFullScreen = undefined;
    });
    return;
  }

  var $container = $element;
  var $classes, $iframe;
  if (body === undefined)  {
    $body = H5P.$body;
  }
  else {
    // We're called from an iframe.
    $body = H5P.jQuery(body);
    $classes = $body.add($element.get());
    var iframeSelector = '#h5p-iframe-' + $element.parent().data('content-id');
    $iframe = H5P.jQuery(iframeSelector);
    $element = $iframe.parent(); // Put iframe wrapper in fullscreen, not container.
  }

  $classes = $element.add(H5P.$body).add($classes);

  /**
   * Prepare for resize by setting the correct styles.
   *
   * @private
   * @param {string} classes CSS
   */
  var before = function (classes) {
    $classes.addClass(classes);

    if ($iframe !== undefined) {
      // Set iframe to its default size(100%).
      $iframe.css('height', '');
    }
  };

  /**
   * Gets called when fullscreen mode has been entered.
   * Resizes and sets focus on content.
   *
   * @private
   */
  var entered = function () {
    // Do not rely on window resize events.
    H5P.trigger(instance, 'resize');
    H5P.trigger(instance, 'focus');
    H5P.trigger(instance, 'enterFullScreen');
  };

  /**
   * Gets called when fullscreen mode has been exited.
   * Resizes and sets focus on content.
   *
   * @private
   * @param {string} classes CSS
   */
  var done = function (classes) {
    H5P.isFullscreen = false;
    $classes.removeClass(classes);

    // Do not rely on window resize events.
    H5P.trigger(instance, 'resize');
    H5P.trigger(instance, 'focus');

    H5P.exitFullScreen = undefined;
    if (exitCallback !== undefined) {
      exitCallback();
    }

    H5P.trigger(instance, 'exitFullScreen');
  };

  H5P.isFullscreen = true;
  if (H5P.fullScreenBrowserPrefix === undefined || forceSemiFullScreen === true) {
    // Create semi fullscreen.

    if (H5P.isFramed) {
      return; // TODO: Should we support semi-fullscreen for IE9 & 10 ?
    }

    before('h5p-semi-fullscreen');
    var $disable = H5P.jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + H5P.t('disableFullscreen') + '"></div>').appendTo($container.find('.h5p-content-controls'));
    var keyup, disableSemiFullscreen = H5P.exitFullScreen = function () {
      if (prevViewportContent) {
        // Use content from the previous viewport tag
        h5pViewport.content = prevViewportContent;
      }
      else {
        // Remove viewport tag
        head.removeChild(h5pViewport);
      }
      $disable.remove();
      $body.unbind('keyup', keyup);
      done('h5p-semi-fullscreen');
    };
    keyup = function (event) {
      if (event.keyCode === 27) {
        disableSemiFullscreen();
      }
    };
    $disable.click(disableSemiFullscreen);
    $body.keyup(keyup);

    // Disable zoom
    var prevViewportContent, h5pViewport;
    var metaTags = document.getElementsByTagName('meta');
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].name === 'viewport') {
        // Use the existing viewport tag
        h5pViewport = metaTags[i];
        prevViewportContent = h5pViewport.content;
        break;
      }
    }
    if (!prevViewportContent) {
      // Create a new viewport tag
      h5pViewport = document.createElement('meta');
      h5pViewport.name = 'viewport';
    }
    h5pViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    if (!prevViewportContent) {
      // Insert the new viewport tag
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(h5pViewport);
    }

    entered();
  }
  else {
    // Create real fullscreen.

    before('h5p-fullscreen');
    var first, eventName = (H5P.fullScreenBrowserPrefix === 'ms' ? 'MSFullscreenChange' : H5P.fullScreenBrowserPrefix + 'fullscreenchange');
    document.addEventListener(eventName, function () {
      if (first === undefined) {
        // We are entering fullscreen mode
        first = false;
        entered();
        return;
      }

      // We are exiting fullscreen
      done('h5p-fullscreen');
      document.removeEventListener(eventName, arguments.callee, false);
    });

    if (H5P.fullScreenBrowserPrefix === '') {
      $element[0].requestFullScreen();
    }
    else {
      var method = (H5P.fullScreenBrowserPrefix === 'ms' ? 'msRequestFullscreen' : H5P.fullScreenBrowserPrefix + 'RequestFullScreen');
      var params = (H5P.fullScreenBrowserPrefix === 'webkit' && H5P.safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : undefined);
      $element[0][method](params);
    }

    // Allows everone to exit
    H5P.exitFullScreen = function () {
      if (H5P.fullScreenBrowserPrefix === '') {
        document.exitFullscreen();
      }
      else if (H5P.fullScreenBrowserPrefix === 'moz') {
        document.mozCancelFullScreen();
      }
      else {
        document[H5P.fullScreenBrowserPrefix + 'ExitFullscreen']();
      }
    };
  }
};

/**
 * Find the path to the content files based on the id of the content.
 * Also identifies and returns absolute paths.
 *
 * @param {string} path
 *   Relative to content folder or absolute.
 * @param {number} contentId
 *   ID of the content requesting the path.
 * @returns {string}
 *   Complete URL to path.
 */
H5P.getPath = function (path, contentId) {
  var hasProtocol = function (path) {
    return path.match(/^[a-z0-9]+:\/\//i);
  };

  if (hasProtocol(path)) {
    return path;
  }

  var prefix;
  var isTmpFile = (path.substr(-4,4) === '#tmp');
  if (contentId !== undefined && !isTmpFile) {
    // Check for custom override URL
    if (H5PIntegration.contents !== undefined &&
        H5PIntegration.contents['cid-' + contentId]) {
      prefix = H5PIntegration.contents['cid-' + contentId].contentUrl;
    }
    if (!prefix) {
      prefix = H5PIntegration.url + '/content/' + contentId;
    }
  }
  else if (window.H5PEditor !== undefined) {
    prefix = H5PEditor.filesPath;
  }
  else {
    return;
  }

  if (!hasProtocol(prefix)) {
    // Use absolute urls
    prefix = window.location.protocol + "//" + window.location.host + prefix;
  }

  return prefix + '/' + path;
};

/**
 * THIS FUNCTION IS DEPRECATED, USE getPath INSTEAD
 * Will be remove march 2016.
 *
 * Find the path to the content files folder based on the id of the content
 *
 * @deprecated
 *   Will be removed march 2016.
 * @param contentId
 *   Id of the content requesting the path
 * @returns {string}
 *   URL
 */
H5P.getContentPath = function (contentId) {
  return H5PIntegration.url + '/content/' + contentId;
};

/**
 * Get library class constructor from H5P by classname.
 * Note that this class will only work for resolve "H5P.NameWithoutDot".
 * Also check out {@link H5P.newRunnable}
 *
 * Used from libraries to construct instances of other libraries' objects by name.
 *
 * @param {string} name Name of library
 * @returns {Object} Class constructor
 */
H5P.classFromName = function (name) {
  var arr = name.split(".");
  return this[arr[arr.length - 1]];
};

/**
 * A safe way of creating a new instance of a runnable H5P.
 *
 * @param {Object} library
 *   Library/action object form params.
 * @param {number} contentId
 *   Identifies the content.
 * @param {H5P.jQuery} [$attachTo]
 *   Element to attach the instance to.
 * @param {boolean} [skipResize]
 *   Skip triggering of the resize event after attaching.
 * @param {Object} [extras]
 *   Extra parameters for the H5P content constructor
 * @returns {Object}
 *   Instance.
 */
H5P.newRunnable = function (library, contentId, $attachTo, skipResize, extras) {
  var nameSplit, versionSplit, machineName;
  try {
    nameSplit = library.library.split(' ', 2);
    machineName = nameSplit[0];
    versionSplit = nameSplit[1].split('.', 2);
  }
  catch (err) {
    return H5P.error('Invalid library string: ' + library.library);
  }

  if ((library.params instanceof Object) !== true || (library.params instanceof Array) === true) {
    H5P.error('Invalid library params for: ' + library.library);
    return H5P.error(library.params);
  }

  // Find constructor function
  var constructor;
  try {
    nameSplit = nameSplit[0].split('.');
    constructor = window;
    for (var i = 0; i < nameSplit.length; i++) {
      constructor = constructor[nameSplit[i]];
    }
    if (typeof constructor !== 'function') {
      throw null;
    }
  }
  catch (err) {
    return H5P.error('Unable to find constructor for: ' + library.library);
  }

  if (extras === undefined) {
    extras = {};
  }
  if (library.subContentId) {
    extras.subContentId = library.subContentId;
  }

  if (library.userDatas && library.userDatas.state && H5PIntegration.saveFreq) {
    extras.previousState = library.userDatas.state;
  }

  // Makes all H5P libraries extend H5P.ContentType:
  var standalone = extras.standalone || false;
  // This order makes it possible for an H5P library to override H5P.ContentType functions!
  constructor.prototype = H5P.jQuery.extend({}, H5P.ContentType(standalone).prototype, constructor.prototype);

  var instance;
  // Some old library versions have their own custom third parameter.
  // Make sure we don't send them the extras.
  // (they will interpret it as something else)
  if (H5P.jQuery.inArray(library.library, ['H5P.CoursePresentation 1.0', 'H5P.CoursePresentation 1.1', 'H5P.CoursePresentation 1.2', 'H5P.CoursePresentation 1.3']) > -1) {
    instance = new constructor(library.params, contentId);
  }
  else {
    instance = new constructor(library.params, contentId, extras);
  }

  if (instance.$ === undefined) {
    instance.$ = H5P.jQuery(instance);
  }

  if (instance.contentId === undefined) {
    instance.contentId = contentId;
  }
  if (instance.subContentId === undefined && library.subContentId) {
    instance.subContentId = library.subContentId;
  }
  if (instance.parent === undefined && extras && extras.parent) {
    instance.parent = extras.parent;
  }
  if (instance.libraryInfo === undefined) {
    instance.libraryInfo = {
      versionedName: library.library,
      versionedNameNoSpaces: machineName + '-' + versionSplit[0] + '.' + versionSplit[1],
      machineName: machineName,
      majorVersion: versionSplit[0],
      minorVersion: versionSplit[1]
    };
  }

  if ($attachTo !== undefined) {
    $attachTo.toggleClass('h5p-standalone', standalone);
    instance.attach($attachTo);
    H5P.trigger(instance, 'domChanged', {
      '$target': $attachTo,
      'library': machineName,
      'key': 'newLibrary'
    }, {'bubbles': true, 'external': true});

    if (skipResize === undefined || !skipResize) {
      // Resize content.
      H5P.trigger(instance, 'resize');
    }
  }
  return instance;
};

/**
 * Used to print useful error messages. (to JavaScript error console)
 *
 * @param {*} err Error to print.
 */
H5P.error = function (err) {
  if (window.console !== undefined && console.error !== undefined) {
    console.error(err.stack ? err.stack : err);
  }
};

/**
 * Translate text strings.
 *
 * @param {string} key
 *   Translation identifier, may only contain a-zA-Z0-9. No spaces or special chars.
 * @param {Object} [vars]
 *   Data for placeholders.
 * @param {string} [ns]
 *   Translation namespace. Defaults to H5P.
 * @returns {string}
 *   Translated text
 */
H5P.t = function (key, vars, ns) {
  if (ns === undefined) {
    ns = 'H5P';
  }

  if (H5PIntegration.l10n[ns] === undefined) {
    return '[Missing translation namespace "' + ns + '"]';
  }

  if (H5PIntegration.l10n[ns][key] === undefined) {
    return '[Missing translation "' + key + '" in "' + ns + '"]';
  }

  var translation = H5PIntegration.l10n[ns][key];

  if (vars !== undefined) {
    // Replace placeholder with variables.
    for (var placeholder in vars) {
      translation = translation.replace(placeholder, vars[placeholder]);
    }
  }

  return translation;
};

/**
 * Creates a new popup dialog over the H5P content.
 *
 * @class
 * @param {string} name
 *   Used for html class.
 * @param {string} title
 *   Used for header.
 * @param {string} content
 *   Displayed inside the dialog.
 * @param {H5P.jQuery} $element
 *   Which DOM element the dialog should be inserted after.
 */
H5P.Dialog = function (name, title, content, $element) {
  /** @alias H5P.Dialog# */
  var self = this;
  var $dialog = H5P.jQuery('<div class="h5p-popup-dialog h5p-' + name + '-dialog">\
                              <div class="h5p-inner">\
                                <h2>' + title + '</h2>\
                                <div class="h5p-scroll-content">' + content + '</div>\
                                <div class="h5p-close" role="button" tabindex="0" title="' + H5P.t('close') + '">\
                              </div>\
                            </div>')
    .insertAfter($element)
    .click(function () {
      self.close();
    })
    .children('.h5p-inner')
      .click(function () {
        return false;
      })
      .find('.h5p-close')
        .click(function () {
          self.close();
        })
        .end()
      .find('a')
        .click(function (e) {
          e.stopPropagation();
        })
      .end()
    .end();

  /**
   * Opens the dialog.
   */
  self.open = function () {
    setTimeout(function () {
      $dialog.addClass('h5p-open'); // Fade in
      // Triggering an event, in case something has to be done after dialog has been opened.
      H5P.jQuery(self).trigger('dialog-opened', [$dialog]);
    }, 1);
  };

  /**
   * Closes the dialog.
   */
  self.close = function () {
    $dialog.removeClass('h5p-open'); // Fade out
    setTimeout(function () {
      $dialog.remove();
    }, 200);
  };
};

/**
 * Gather copyright information for the given content.
 *
 * @param {Object} instance
 *   H5P instance to get copyright information for.
 * @param {Object} parameters
 *   Parameters of the content instance.
 * @param {number} contentId
 *   Identifies the H5P content
 * @returns {string} Copyright information.
 */
H5P.getCopyrights = function (instance, parameters, contentId) {
  var copyrights;

  if (instance.getCopyrights !== undefined) {
    try {
      // Use the instance's own copyright generator
      copyrights = instance.getCopyrights();
    }
    catch (err) {
      // Failed, prevent crashing page.
    }
  }

  if (copyrights === undefined) {
    // Create a generic flat copyright list
    copyrights = new H5P.ContentCopyrights();
    H5P.findCopyrights(copyrights, parameters, contentId);
  }

  if (copyrights !== undefined) {
    // Convert to string
    copyrights = copyrights.toString();
  }
  return copyrights;
};

/**
 * Gather a flat list of copyright information from the given parameters.
 *
 * @param {H5P.ContentCopyrights} info
 *   Used to collect all information in.
 * @param {(Object|Array)} parameters
 *   To search for file objects in.
 * @param {number} contentId
 *   Used to insert thumbnails for images.
 */
H5P.findCopyrights = function (info, parameters, contentId) {
  // Cycle through parameters
  for (var field in parameters) {
    if (!parameters.hasOwnProperty(field)) {
      continue; // Do not check
    }

    /**
     * @deprecated This hack should be removed after 2017-11-01
     * The code that was using this was removed by HFP-574
     */
    if (field === 'overrideSettings') {
      console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used.");
      console.warn(parameters);
      continue;
    }

    var value = parameters[field];

    if (value instanceof Array) {
      // Cycle through array
      H5P.findCopyrights(info, value, contentId);
    }
    else if (value instanceof Object) {
      // Check if object is a file with copyrights
      if (value.copyright === undefined ||
          value.copyright.license === undefined ||
          value.path === undefined ||
          value.mime === undefined) {

        // Nope, cycle throught object
        H5P.findCopyrights(info, value, contentId);
      }
      else {
        // Found file, add copyrights
        var copyrights = new H5P.MediaCopyright(value.copyright);
        if (value.width !== undefined && value.height !== undefined) {
          copyrights.setThumbnail(new H5P.Thumbnail(H5P.getPath(value.path, contentId), value.width, value.height));
        }
        info.addMedia(copyrights);
      }
    }
  }
};

/**
 * Display a dialog containing the embed code.
 *
 * @param {H5P.jQuery} $element
 *   Element to insert dialog after.
 * @param {string} embedCode
 *   The embed code.
 * @param {string} resizeCode
 *   The advanced resize code
 * @param {Object} size
 *   The content's size.
 * @param {number} size.width
 * @param {number} size.height
 */
H5P.openEmbedDialog = function ($element, embedCode, resizeCode, size) {
  var fullEmbedCode = embedCode + resizeCode;
  var dialog = new H5P.Dialog('embed', H5P.t('embed'), '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' + H5P.t('size') + ': <input type="text" value="' + Math.ceil(size.width) + '" class="h5p-embed-size"/> × <input type="text" value="' + Math.ceil(size.height) + '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' + H5P.t('showAdvanced') + '</div><div class="h5p-expander-content"><p>' + H5P.t('advancedHelp') + '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' + resizeCode + '</textarea></div>', $element);

  // Selecting embed code when dialog is opened
  H5P.jQuery(dialog).on('dialog-opened', function (event, $dialog) {
    var $inner = $dialog.find('.h5p-inner');
    var $scroll = $inner.find('.h5p-scroll-content');
    var diff = $scroll.outerHeight() - $scroll.innerHeight();
    var positionInner = function () {
      var height = $inner.height();
      if ($scroll[0].scrollHeight + diff > height) {
        $inner.css('height', ''); // 100%
      }
      else {
        $inner.css('height', 'auto');
        height = $inner.height();
      }
      $inner.css('marginTop', '-' + (height / 2) + 'px');
    };

    // Handle changing of width/height
    var $w = $dialog.find('.h5p-embed-size:eq(0)');
    var $h = $dialog.find('.h5p-embed-size:eq(1)');
    var getNum = function ($e, d) {
      var num = parseFloat($e.val());
      if (isNaN(num)) {
        return d;
      }
      return Math.ceil(num);
    };
    var updateEmbed = function () {
      $dialog.find('.h5p-embed-code-container:first').val(fullEmbedCode.replace(':w', getNum($w, size.width)).replace(':h', getNum($h, size.height)));
    };

    $w.change(updateEmbed);
    $h.change(updateEmbed);
    updateEmbed();

    // Select text and expand textareas
    $dialog.find('.h5p-embed-code-container').each(function(index, value) {
      H5P.jQuery(this).css('height', this.scrollHeight + 'px').focus(function() {
          H5P.jQuery(this).select();
        });
    });
    $dialog.find('.h5p-embed-code-container').eq(0).select();
    positionInner();

    // Expand advanced embed
    var expand = function () {
      var $expander = H5P.jQuery(this);
      var $content = $expander.next();
      if ($content.is(':visible')) {
        $expander.removeClass('h5p-open').text(H5P.t('showAdvanced'));
        $content.hide();
      }
      else {
        $expander.addClass('h5p-open').text(H5P.t('hideAdvanced'));
        $content.show();
      }
      $dialog.find('.h5p-embed-code-container').each(function(index, value) {
        H5P.jQuery(this).css('height', this.scrollHeight + 'px');
      });
      positionInner();
    };
    $dialog.find('.h5p-expander').click(expand).keypress(function (event) {
      if (event.keyCode === 32) {
        expand.apply(this);
      }
    });
  });

  dialog.open();
};

/**
 * Copyrights for a H5P Content Library.
 *
 * @class
 */
H5P.ContentCopyrights = function () {
  var label;
  var media = [];
  var content = [];

  /**
   * Set label.
   *
   * @param {string} newLabel
   */
  this.setLabel = function (newLabel) {
    label = newLabel;
  };

  /**
   * Add sub content.
   *
   * @param {H5P.MediaCopyright} newMedia
   */
  this.addMedia = function (newMedia) {
    if (newMedia !== undefined) {
      media.push(newMedia);
    }
  };

  /**
   * Add sub content.
   *
   * @param {H5P.ContentCopyrights} newContent
   */
  this.addContent = function (newContent) {
    if (newContent !== undefined) {
      content.push(newContent);
    }
  };

  /**
   * Print content copyright.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    var html = '';

    // Add media rights
    for (var i = 0; i < media.length; i++) {
      html += media[i];
    }

    // Add sub content rights
    for (i = 0; i < content.length; i++) {
      html += content[i];
    }


    if (html !== '') {
      // Add a label to this info
      if (label !== undefined) {
        html = '<h3>' + label + '</h3>' + html;
      }

      // Add wrapper
      html = '<div class="h5p-content-copyrights">' + html + '</div>';
    }

    return html;
  };
};

/**
 * A ordered list of copyright fields for media.
 *
 * @class
 * @param {Object} copyright
 *   Copyright information fields.
 * @param {Object} [labels]
 *   Translation of labels.
 * @param {Array} [order]
 *   Order of the fields.
 * @param {Object} [extraFields]
 *   Add extra copyright fields.
 */
H5P.MediaCopyright = function (copyright, labels, order, extraFields) {
  var thumbnail;
  var list = new H5P.DefinitionList();

  /**
   * Get translated label for field.
   *
   * @private
   * @param {string} fieldName
   * @returns {string}
   */
  var getLabel = function (fieldName) {
    if (labels === undefined || labels[fieldName] === undefined) {
      return H5P.t(fieldName);
    }

    return labels[fieldName];
  };

  /**
   * Get humanized value for the license field.
   *
   * @private
   * @param {string} license
   * @param {string} [version]
   * @returns {string}
   */
  var humanizeLicense = function (license, version) {
    var copyrightLicense = H5P.copyrightLicenses[license];

    // Build license string
    var value = '';
    if (!(license === 'PD' && version)) {
      // Add license label
      value += (copyrightLicense.hasOwnProperty('label') ? copyrightLicense.label : copyrightLicense);
    }

    // Check for version info
    var versionInfo;
    if (copyrightLicense.versions) {
      if (copyrightLicense.versions.default && (!version || !copyrightLicense.versions[version])) {
        version = copyrightLicense.versions.default;
      }
      if (version && copyrightLicense.versions[version]) {
        versionInfo = copyrightLicense.versions[version];
      }
    }

    if (versionInfo) {
      // Add license version
      if (value) {
        value += ' ';
      }
      value += (versionInfo.hasOwnProperty('label') ? versionInfo.label : versionInfo);
    }

    // Add link if specified
    var link;
    if (copyrightLicense.hasOwnProperty('link')) {
      link = copyrightLicense.link.replace(':version', copyrightLicense.linkVersions ? copyrightLicense.linkVersions[version] : version);
    }
    else if (versionInfo && copyrightLicense.hasOwnProperty('link')) {
      link = versionInfo.link
    }
    if (link) {
      value = '<a href="' + link + '" target="_blank">' + value + '</a>';
    }

    // Generate parenthesis
    var parenthesis = '';
    if (license !== 'PD' && license !== 'C') {
      parenthesis += license;
    }
    if (version && version !== 'CC0 1.0') {
      if (parenthesis && license !== 'GNU GPL') {
        parenthesis += ' ';
      }
      parenthesis += version;
    }
    if (parenthesis) {
      value += ' (' + parenthesis + ')';
    }
    if (license === 'C') {
      value += ' &copy;';
    }

    return value;
  };

  if (copyright !== undefined) {
    // Add the extra fields
    for (var field in extraFields) {
      if (extraFields.hasOwnProperty(field)) {
        copyright[field] = extraFields[field];
      }
    }

    if (order === undefined) {
      // Set default order
      order = ['title', 'author', 'year', 'source', 'license'];
    }

    for (var i = 0; i < order.length; i++) {
      var fieldName = order[i];
      if (copyright[fieldName] !== undefined) {
        var humanValue = copyright[fieldName];
        if (fieldName === 'license') {
          humanValue = humanizeLicense(copyright.license, copyright.version);
        }
        list.add(new H5P.Field(getLabel(fieldName), humanValue));
      }
    }
  }

  /**
   * Set thumbnail.
   *
   * @param {H5P.Thumbnail} newThumbnail
   */
  this.setThumbnail = function (newThumbnail) {
    thumbnail = newThumbnail;
  };

  /**
   * Checks if this copyright is undisclosed.
   * I.e. only has the license attribute set, and it's undisclosed.
   *
   * @returns {boolean}
   */
  this.undisclosed = function () {
    if (list.size() === 1) {
      var field = list.get(0);
      if (field.getLabel() === getLabel('license') && field.getValue() === humanizeLicense('U')) {
        return true;
      }
    }
    return false;
  };

  /**
   * Print media copyright.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    var html = '';

    if (this.undisclosed()) {
      return html; // No need to print a copyright with a single undisclosed license.
    }

    if (thumbnail !== undefined) {
      html += thumbnail;
    }
    html += list;

    if (html !== '') {
      html = '<div class="h5p-media-copyright">' + html + '</div>';
    }

    return html;
  };
};

/**
 * A simple and elegant class for creating thumbnails of images.
 *
 * @class
 * @param {string} source
 * @param {number} width
 * @param {number} height
 */
H5P.Thumbnail = function (source, width, height) {
  var thumbWidth, thumbHeight = 100;
  if (width !== undefined) {
    thumbWidth = Math.round(thumbHeight * (width / height));
  }

  /**
   * Print thumbnail.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    return '<img src="' + source + '" alt="' + H5P.t('thumbnail') + '" class="h5p-thumbnail" height="' + thumbHeight + '"' + (thumbWidth === undefined ? '' : ' width="' + thumbWidth + '"') + '/>';
  };
};

/**
 * Simple data structure class for storing a single field.
 *
 * @class
 * @param {string} label
 * @param {string} value
 */
H5P.Field = function (label, value) {
  /**
   * Public. Get field label.
   *
   * @returns {String}
   */
  this.getLabel = function () {
    return label;
  };

  /**
   * Public. Get field value.
   *
   * @returns {String}
   */
  this.getValue = function () {
    return value;
  };
};

/**
 * Simple class for creating a definition list.
 *
 * @class
 */
H5P.DefinitionList = function () {
  var fields = [];

  /**
   * Add field to list.
   *
   * @param {H5P.Field} field
   */
  this.add = function (field) {
    fields.push(field);
  };

  /**
   * Get Number of fields.
   *
   * @returns {number}
   */
  this.size = function () {
    return fields.length;
  };

  /**
   * Get field at given index.
   *
   * @param {number} index
   * @returns {H5P.Field}
   */
  this.get = function (index) {
    return fields[index];
  };

  /**
   * Print definition list.
   *
   * @returns {string} HTML.
   */
  this.toString = function () {
    var html = '';
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      html += '<dt>' + field.getLabel() + '</dt><dd>' + field.getValue() + '</dd>';
    }
    return (html === '' ? html : '<dl class="h5p-definition-list">' + html + '</dl>');
  };
};

/**
 * THIS FUNCTION/CLASS IS DEPRECATED AND WILL BE REMOVED.
 *
 * Helper object for keeping coordinates in the same format all over.
 *
 * @deprecated
 *   Will be removed march 2016.
 * @class
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 */
H5P.Coords = function (x, y, w, h) {
  if ( !(this instanceof H5P.Coords) )
    return new H5P.Coords(x, y, w, h);

  /** @member {number} */
  this.x = 0;
  /** @member {number} */
  this.y = 0;
  /** @member {number} */
  this.w = 1;
  /** @member {number} */
  this.h = 1;

  if (typeof(x) === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.w = x.w;
    this.h = x.h;
  } else {
    if (x !== undefined) {
      this.x = x;
    }
    if (y !== undefined) {
      this.y = y;
    }
    if (w !== undefined) {
      this.w = w;
    }
    if (h !== undefined) {
      this.h = h;
    }
  }
  return this;
};

/**
 * Parse library string into values.
 *
 * @param {string} library
 *   library in the format "machineName majorVersion.minorVersion"
 * @returns {Object}
 *   library as an object with machineName, majorVersion and minorVersion properties
 *   return false if the library parameter is invalid
 */
H5P.libraryFromString = function (library) {
  var regExp = /(.+)\s(\d+)\.(\d+)$/g;
  var res = regExp.exec(library);
  if (res !== null) {
    return {
      'machineName': res[1],
      'majorVersion': res[2],
      'minorVersion': res[3]
    };
  }
  else {
    return false;
  }
};

/**
 * Get the path to the library
 *
 * @param {string} library
 *   The library identifier in the format "machineName-majorVersion.minorVersion".
 * @returns {string}
 *   The full path to the library.
 */
H5P.getLibraryPath = function (library) {
  return (H5PIntegration.libraryUrl !== undefined ? H5PIntegration.libraryUrl + '/' : H5PIntegration.url + '/libraries/') + library;
};

/**
 * Recursivly clone the given object.
 *
 * @param {Object|Array} object
 *   Object to clone.
 * @param {boolean} [recursive]
 * @returns {Object|Array}
 *   A clone of object.
 */
H5P.cloneObject = function (object, recursive) {
  // TODO: Consider if this needs to be in core. Doesn't $.extend do the same?
  var clone = object instanceof Array ? [] : {};

  for (var i in object) {
    if (object.hasOwnProperty(i)) {
      if (recursive !== undefined && recursive && typeof object[i] === 'object') {
        clone[i] = H5P.cloneObject(object[i], recursive);
      }
      else {
        clone[i] = object[i];
      }
    }
  }

  return clone;
};

/**
 * Remove all empty spaces before and after the value.
 *
 * @param {string} value
 * @returns {string}
 */
H5P.trim = function (value) {
  return value.replace(/^\s+|\s+$/g, '');

  // TODO: Only include this or String.trim(). What is best?
  // I'm leaning towards implementing the missing ones: http://kangax.github.io/compat-table/es5/
  // So should we make this function deprecated?
};

/**
 * Check if JavaScript path/key is loaded.
 *
 * @param {string} path
 * @returns {boolean}
 */
H5P.jsLoaded = function (path) {
  H5PIntegration.loadedJs = H5PIntegration.loadedJs || [];
  return H5P.jQuery.inArray(path, H5PIntegration.loadedJs) !== -1;
};

/**
 * Check if styles path/key is loaded.
 *
 * @param {string} path
 * @returns {boolean}
 */
H5P.cssLoaded = function (path) {
  H5PIntegration.loadedCss = H5PIntegration.loadedCss || [];
  return H5P.jQuery.inArray(path, H5PIntegration.loadedCss) !== -1;
};

/**
 * Shuffle an array in place.
 *
 * @param {Array} array
 *   Array to shuffle
 * @returns {Array}
 *   The passed array is returned for chaining.
 */
H5P.shuffleArray = function (array) {
  // TODO: Consider if this should be a part of core. I'm guessing very few libraries are going to use it.
  if (!(array instanceof Array)) {
    return;
  }

  var i = array.length, j, tempi, tempj;
  if ( i === 0 ) return false;
  while ( --i ) {
    j       = Math.floor( Math.random() * ( i + 1 ) );
    tempi   = array[i];
    tempj   = array[j];
    array[i] = tempj;
    array[j] = tempi;
  }
  return array;
};

/**
 * Post finished results for user.
 *
 * @deprecated
 *   Do not use this function directly, trigger the finish event instead.
 *   Will be removed march 2016
 * @param {number} contentId
 *   Identifies the content
 * @param {number} score
 *   Achieved score/points
 * @param {number} maxScore
 *   The maximum score/points that can be achieved
 * @param {number} [time]
 *   Reported time consumption/usage
 */
H5P.setFinished = function (contentId, score, maxScore, time) {
  var validScore = typeof score === 'number' || score instanceof Number;
  if (validScore && H5PIntegration.postUserStatistics === true) {
    /**
     * Return unix timestamp for the given JS Date.
     *
     * @private
     * @param {Date} date
     * @returns {Number}
     */
    var toUnix = function (date) {
      return Math.round(date.getTime() / 1000);
    };

    // Post the results
    H5P.jQuery.post(H5PIntegration.ajax.setFinished, {
      contentId: contentId,
      score: score,
      maxScore: maxScore,
      opened: toUnix(H5P.opened[contentId]),
      finished: toUnix(new Date()),
      time: time
    });
  }
};

// Add indexOf to browsers that lack them. (IEs)
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (needle) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === needle) {
        return i;
      }
    }
    return -1;
  };
}

// Need to define trim() since this is not available on older IEs,
// and trim is used in several libs
if (String.prototype.trim === undefined) {
  String.prototype.trim = function () {
    return H5P.trim(this);
  };
}

/**
 * Trigger an event on an instance
 *
 * Helper function that triggers an event if the instance supports event handling
 *
 * @param {Object} instance
 *   Instance of H5P content
 * @param {string} eventType
 *   Type of event to trigger
 * @param {*} data
 * @param {Object} extras
 */
H5P.trigger = function (instance, eventType, data, extras) {
  // Try new event system first
  if (instance.trigger !== undefined) {
    instance.trigger(eventType, data, extras);
  }
  // Try deprecated event system
  else if (instance.$ !== undefined && instance.$.trigger !== undefined) {
    instance.$.trigger(eventType);
  }
};

/**
 * Register an event handler
 *
 * Helper function that registers an event handler for an event type if
 * the instance supports event handling
 *
 * @param {Object} instance
 *   Instance of H5P content
 * @param {string} eventType
 *   Type of event to listen for
 * @param {H5P.EventCallback} handler
 *   Callback that gets triggered for events of the specified type
 */
H5P.on = function (instance, eventType, handler) {
  // Try new event system first
  if (instance.on !== undefined) {
    instance.on(eventType, handler);
  }
  // Try deprecated event system
  else if (instance.$ !== undefined && instance.$.on !== undefined) {
    instance.$.on(eventType, handler);
  }
};

/**
 * Generate random UUID
 *
 * @returns {string} UUID
 */
H5P.createUUID = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
    var random = Math.random()*16|0, newChar = char === 'x' ? random : (random&0x3|0x8);
    return newChar.toString(16);
  });
};

/**
 * Create title
 *
 * @param {string} rawTitle
 * @param {number} maxLength
 * @returns {string}
 */
H5P.createTitle = function (rawTitle, maxLength) {
  if (!rawTitle) {
    return '';
  }
  if (maxLength === undefined) {
    maxLength = 60;
  }
  var title = H5P.jQuery('<div></div>')
    .text(
      // Strip tags
      rawTitle.replace(/(<([^>]+)>)/ig,"")
    // Escape
    ).text();
  if (title.length > maxLength) {
    title = title.substr(0, maxLength - 3) + '...';
  }
  return title;
};

// Wrap in privates
(function ($) {

  /**
   * Creates ajax requests for inserting, updateing and deleteing
   * content user data.
   *
   * @private
   * @param {number} contentId What content to store the data for.
   * @param {string} dataType Identifies the set of data for this content.
   * @param {string} subContentId Identifies sub content
   * @param {function} [done] Callback when ajax is done.
   * @param {object} [data] To be stored for future use.
   * @param {boolean} [preload=false] Data is loaded when content is loaded.
   * @param {boolean} [invalidate=false] Data is invalidated when content changes.
   * @param {boolean} [async=true]
   */
  function contentUserDataAjax(contentId, dataType, subContentId, done, data, preload, invalidate, async) {
    if (H5PIntegration.user === undefined) {
      // Not logged in, no use in saving.
      done('Not signed in.');
      return;
    }

    var options = {
      url: H5PIntegration.ajax.contentUserData.replace(':contentId', contentId).replace(':dataType', dataType).replace(':subContentId', subContentId ? subContentId : 0),
      dataType: 'json',
      async: async === undefined ? true : async
    };
    if (data !== undefined) {
      options.type = 'POST';
      options.data = {
        data: (data === null ? 0 : data),
        preload: (preload ? 1 : 0),
        invalidate: (invalidate ? 1 : 0)
      };
    }
    else {
      options.type = 'GET';
    }
    if (done !== undefined) {
      options.error = function (xhr, error) {
        done(error);
      };
      options.success = function (response) {
        if (!response.success) {
          done(response.message);
          return;
        }

        if (response.data === false || response.data === undefined) {
          done();
          return;
        }

        done(undefined, response.data);
      };
    }

    $.ajax(options);
  }

  /**
   * Get user data for given content.
   *
   * @param {number} contentId
   *   What content to get data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {function} done
   *   Callback with error and data parameters.
   * @param {string} [subContentId]
   *   Identifies which data belongs to sub content.
   */
  H5P.getUserData = function (contentId, dataId, done, subContentId) {
    if (!subContentId) {
      subContentId = 0; // Default
    }

    H5PIntegration.contents = H5PIntegration.contents || {};
    var content = H5PIntegration.contents['cid-' + contentId] || {};
    var preloadedData = content.contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId] !== undefined) {
      if (preloadedData[subContentId][dataId] === 'RESET') {
        done(undefined, null);
        return;
      }
      try {
        done(undefined, JSON.parse(preloadedData[subContentId][dataId]));
      }
      catch (err) {
        done(err);
      }
    }
    else {
      contentUserDataAjax(contentId, dataId, subContentId, function (err, data) {
        if (err || data === undefined) {
          done(err, data);
          return; // Error or no data
        }

        // Cache in preloaded
        if (content.contentUserData === undefined) {
          content.contentUserData = preloadedData = {};
        }
        if (preloadedData[subContentId] === undefined) {
          preloadedData[subContentId] = {};
        }
        preloadedData[subContentId][dataId] = data;

        // Done. Try to decode JSON
        try {
          done(undefined, JSON.parse(data));
        }
        catch (e) {
          done(e);
        }
      });
    }
  };

  /**
   * Async error handling.
   *
   * @callback H5P.ErrorCallback
   * @param {*} error
   */

  /**
   * Set user data for given content.
   *
   * @param {number} contentId
   *   What content to get data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {Object} data
   *   The data that is to be stored.
   * @param {Object} [extras]
   *   Extra properties
   * @param {string} [extras.subContentId]
   *   Identifies which data belongs to sub content.
   * @param {boolean} [extras.preloaded=true]
   *   If the data should be loaded when content is loaded.
   * @param {boolean} [extras.deleteOnChange=false]
   *   If the data should be invalidated when the content changes.
   * @param {H5P.ErrorCallback} [extras.errorCallback]
   *   Callback with error as parameters.
   * @param {boolean} [extras.async=true]
   */
  H5P.setUserData = function (contentId, dataId, data, extras) {
    var options = H5P.jQuery.extend(true, {}, {
      subContentId: 0,
      preloaded: true,
      deleteOnChange: false,
      async: true
    }, extras);

    try {
      data = JSON.stringify(data);
    }
    catch (err) {
      if (options.errorCallback) {
        options.errorCallback(err);
      }
      return; // Failed to serialize.
    }

    var content = H5PIntegration.contents['cid-' + contentId];
    if (content === undefined) {
      content = H5PIntegration.contents['cid-' + contentId] = {};
    }
    if (!content.contentUserData) {
      content.contentUserData = {};
    }
    var preloadedData = content.contentUserData;
    if (preloadedData[options.subContentId] === undefined) {
      preloadedData[options.subContentId] = {};
    }
    if (data === preloadedData[options.subContentId][dataId]) {
      return; // No need to save this twice.
    }

    preloadedData[options.subContentId][dataId] = data;
    contentUserDataAjax(contentId, dataId, options.subContentId, function (error, data) {
      if (options.errorCallback && error) {
        options.errorCallback(error);
      }
    }, data, options.preloaded, options.deleteOnChange, options.async);
  };

  /**
   * Delete user data for given content.
   *
   * @param {number} contentId
   *   What content to remove data for.
   * @param {string} dataId
   *   Identifies the set of data for this content.
   * @param {string} [subContentId]
   *   Identifies which data belongs to sub content.
   */
  H5P.deleteUserData = function (contentId, dataId, subContentId) {
    if (!subContentId) {
      subContentId = 0; // Default
    }

    // Remove from preloaded/cache
    var preloadedData = H5PIntegration.contents['cid-' + contentId].contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId]) {
      delete preloadedData[subContentId][dataId];
    }

    contentUserDataAjax(contentId, dataId, subContentId, undefined, null);
  };

  // Init H5P when page is fully loadded
  $(document).ready(function () {

    var ccVersions = {
      'default': '4.0',
      '4.0': H5P.t('licenseCC40'),
      '3.0': H5P.t('licenseCC30'),
      '2.5': H5P.t('licenseCC25'),
      '2.0': H5P.t('licenseCC20'),
      '1.0': H5P.t('licenseCC10'),
    };

    /**
     * Maps copyright license codes to their human readable counterpart.
     *
     * @type {Object}
     */
    H5P.copyrightLicenses = {
      'U': H5P.t('licenseU'),
      'CC BY': {
        label: H5P.t('licenseCCBY'),
        link: 'http://creativecommons.org/licenses/by/:version/legalcode',
        versions: ccVersions
      },
      'CC BY-SA': {
        label: H5P.t('licenseCCBYSA'),
        link: 'http://creativecommons.org/licenses/by-sa/:version/legalcode',
        versions: ccVersions
      },
      'CC BY-ND': {
        label: H5P.t('licenseCCBYND'),
        link: 'http://creativecommons.org/licenses/by-nd/:version/legalcode',
        versions: ccVersions
      },
      'CC BY-NC': {
        label: H5P.t('licenseCCBYNC'),
        link: 'http://creativecommons.org/licenses/by-nc/:version/legalcode',
        versions: ccVersions
      },
      'CC BY-NC-SA': {
        label: H5P.t('licenseCCBYNCSA'),
        link: 'http://creativecommons.org/licenses/by-nc-sa/:version/legalcode',
        versions: ccVersions
      },
      'CC BY-NC-ND': {
        label: H5P.t('licenseCCBYNCND'),
        link: 'http://creativecommons.org/licenses/by-nc-nd/:version/legalcode',
        versions: ccVersions
      },
      'GNU GPL': {
        label: H5P.t('licenseGPL'),
        link: 'http://www.gnu.org/licenses/gpl-:version-standalone.html',
        linkVersions: {
          'v3': '3.0',
          'v2': '2.0',
          'v1': '1.0'
        },
        versions: {
          'default': 'v3',
          'v3': H5P.t('licenseV3'),
          'v2': H5P.t('licenseV2'),
          'v1': H5P.t('licenseV1')
        }
      },
      'PD': {
        label: H5P.t('licensePD'),
        versions: {
          'CC0 1.0': {
            label: H5P.t('licenseCC010'),
            link: 'https://creativecommons.org/publicdomain/zero/1.0/'
          },
          'CC PDM': {
            label: H5P.t('licensePDM'),
            link: 'https://creativecommons.org/publicdomain/mark/1.0/'
          }
        }
      },
      'ODC PDDL': '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
      'CC PDM': H5P.t('licensePDM'),
      'C': H5P.t('licenseC'),
    };

    /**
     * Indicates if H5P is embedded on an external page using iframe.
     * @member {boolean} H5P.externalEmbed
     */

    // Relay events to top window. This must be done before H5P.init
    // since events may be fired on initialization.
    if (H5P.isFramed && H5P.externalEmbed === false) {
      H5P.externalDispatcher.on('*', function (event) {
        window.parent.H5P.externalDispatcher.trigger.call(this, event);
      });
    }

    /**
     * Prevent H5P Core from initializing. Must be overriden before document ready.
     * @member {boolean} H5P.preventInit
     */
    if (!H5P.preventInit) {
      // Note that this start script has to be an external resource for it to
      // load in correct order in IE9.
      H5P.init(document.body);
    }

    if (H5PIntegration.saveFreq !== false) {
      // When was the last state stored
      var lastStoredOn = 0;
      // Store the current state of the H5P when leaving the page.
      var storeCurrentState = function () {
        // Make sure at least 250 ms has passed since last save
        var currentTime = new Date().getTime();
        if (currentTime - lastStoredOn > 250) {
          lastStoredOn = currentTime;
          for (var i = 0; i < H5P.instances.length; i++) {
            var instance = H5P.instances[i];
            if (instance.getCurrentState instanceof Function ||
                typeof instance.getCurrentState === 'function') {
              var state = instance.getCurrentState();
              if (state !== undefined) {
                // Async is not used to prevent the request from being cancelled.
                H5P.setUserData(instance.contentId, 'state', state, {deleteOnChange: true, async: false});
              }
            }
          }
        }
      };
      // iPad does not support beforeunload, therefore using unload
      H5P.$window.one('beforeunload unload', function () {
        // Only want to do this once
        H5P.$window.off('pagehide beforeunload unload');
        storeCurrentState();
      });
      // pagehide is used on iPad when tabs are switched
      H5P.$window.on('pagehide', storeCurrentState);
    }
  });

})(H5P.jQuery);
;
var H5P = H5P || {};

/**
 * The Event class for the EventDispatcher.
 *
 * @class
 * @param {string} type
 * @param {*} data
 * @param {Object} [extras]
 * @param {boolean} [extras.bubbles]
 * @param {boolean} [extras.external]
 */
H5P.Event = function(type, data, extras) {
  this.type = type;
  this.data = data;
  var bubbles = false;

  // Is this an external event?
  var external = false;

  // Is this event scheduled to be sent externally?
  var scheduledForExternal = false;

  if (extras === undefined) {
    extras = {};
  }
  if (extras.bubbles === true) {
    bubbles = true;
  }
  if (extras.external === true) {
    external = true;
  }

  /**
   * Prevent this event from bubbling up to parent
   */
  this.preventBubbling = function() {
    bubbles = false;
  };

  /**
   * Get bubbling status
   *
   * @returns {boolean}
   *   true if bubbling false otherwise
   */
  this.getBubbles = function() {
    return bubbles;
  };

  /**
   * Try to schedule an event for externalDispatcher
   *
   * @returns {boolean}
   *   true if external and not already scheduled, otherwise false
   */
  this.scheduleForExternal = function() {
    if (external && !scheduledForExternal) {
      scheduledForExternal = true;
      return true;
    }
    return false;
  };
};

/**
 * Callback type for event listeners.
 *
 * @callback H5P.EventCallback
 * @param {H5P.Event} event
 */

H5P.EventDispatcher = (function () {

  /**
   * The base of the event system.
   * Inherit this class if you want your H5P to dispatch events.
   *
   * @class
   * @memberof H5P
   */
  function EventDispatcher() {
    var self = this;

    /**
     * Keep track of listeners for each event.
     *
     * @private
     * @type {Object}
     */
    var triggers = {};

    /**
     * Add new event listener.
     *
     * @throws {TypeError}
     *   listener must be a function
     * @param {string} type
     *   Event type
     * @param {H5P.EventCallback} listener
     *   Event listener
     * @param {Object} [thisArg]
     *   Optionally specify the this value when calling listener.
     */
    this.on = function (type, listener, thisArg) {
      if (typeof listener !== 'function') {
        throw TypeError('listener must be a function');
      }

      // Trigger event before adding to avoid recursion
      self.trigger('newListener', {'type': type, 'listener': listener});

      var trigger = {'listener': listener, 'thisArg': thisArg};
      if (!triggers[type]) {
        // First
        triggers[type] = [trigger];
      }
      else {
        // Append
        triggers[type].push(trigger);
      }
    };

    /**
     * Add new event listener that will be fired only once.
     *
     * @throws {TypeError}
     *   listener must be a function
     * @param {string} type
     *   Event type
     * @param {H5P.EventCallback} listener
     *   Event listener
     * @param {Object} thisArg
     *   Optionally specify the this value when calling listener.
     */
    this.once = function (type, listener, thisArg) {
      if (!(listener instanceof Function)) {
        throw TypeError('listener must be a function');
      }

      var once = function (event) {
        self.off(event.type, once);
        listener.call(this, event);
      };

      self.on(type, once, thisArg);
    };

    /**
     * Remove event listener.
     * If no listener is specified, all listeners will be removed.
     *
     * @throws {TypeError}
     *   listener must be a function
     * @param {string} type
     *   Event type
     * @param {H5P.EventCallback} listener
     *   Event listener
     */
    this.off = function (type, listener) {
      if (listener !== undefined && !(listener instanceof Function)) {
        throw TypeError('listener must be a function');
      }

      if (triggers[type] === undefined) {
        return;
      }

      if (listener === undefined) {
        // Remove all listeners
        delete triggers[type];
        self.trigger('removeListener', type);
        return;
      }

      // Find specific listener
      for (var i = 0; i < triggers[type].length; i++) {
        if (triggers[type][i].listener === listener) {
          triggers[type].splice(i, 1);
          self.trigger('removeListener', type, {'listener': listener});
          break;
        }
      }

      // Clean up empty arrays
      if (!triggers[type].length) {
        delete triggers[type];
      }
    };

    /**
     * Try to call all event listeners for the given event type.
     *
     * @private
     * @param {string} Event type
     */
    var call = function (type, event) {
      if (triggers[type] === undefined) {
        return;
      }

      // Clone array (prevents triggers from being modified during the event)
      var handlers = triggers[type].slice();

      // Call all listeners
      for (var i = 0; i < handlers.length; i++) {
        var trigger = handlers[i];
        var thisArg = (trigger.thisArg ? trigger.thisArg : this);
        trigger.listener.call(thisArg, event);
      }
    };

    /**
     * Dispatch event.
     *
     * @param {string|H5P.Event} event
     *   Event object or event type as string
     * @param {*} [eventData]
     *   Custom event data(used when event type as string is used as first
     *   argument).
     * @param {Object} [extras]
     * @param {boolean} [extras.bubbles]
     * @param {boolean} [extras.external]
     */
    this.trigger = function (event, eventData, extras) {
      if (event === undefined) {
        return;
      }
      if (event instanceof String || typeof event === 'string') {
        event = new H5P.Event(event, eventData, extras);
      }
      else if (eventData !== undefined) {
        event.data = eventData;
      }

      // Check to see if this event should go externally after all triggering and bubbling is done
      var scheduledForExternal = event.scheduleForExternal();

      // Call all listeners
      call.call(this, event.type, event);

      // Call all * listeners
      call.call(this, '*', event);

      // Bubble
      if (event.getBubbles() && self.parent instanceof H5P.EventDispatcher &&
          (self.parent.trigger instanceof Function || typeof self.parent.trigger === 'function')) {
        self.parent.trigger(event);
      }

      if (scheduledForExternal) {
        H5P.externalDispatcher.trigger.call(this, event);
      }
    };
  }

  return EventDispatcher;
})();
;
var H5P = H5P || {};

/**
 * Used for xAPI events.
 *
 * @class
 * @extends H5P.Event
 */
H5P.XAPIEvent = function () {
  H5P.Event.call(this, 'xAPI', {'statement': {}}, {bubbles: true, external: true});
};

H5P.XAPIEvent.prototype = Object.create(H5P.Event.prototype);
H5P.XAPIEvent.prototype.constructor = H5P.XAPIEvent;

/**
 * Set scored result statements.
 *
 * @param {number} score
 * @param {number} maxScore
 * @param {object} instance
 * @param {boolean} completion
 * @param {boolean} success
 */
H5P.XAPIEvent.prototype.setScoredResult = function (score, maxScore, instance, completion, success) {
  this.data.statement.result = {};

  if (typeof score !== 'undefined') {
    if (typeof maxScore === 'undefined') {
      this.data.statement.result.score = {'raw': score};
    }
    else {
      this.data.statement.result.score = {
        'min': 0,
        'max': maxScore,
        'raw': score
      };
      if (maxScore > 0) {
        this.data.statement.result.score.scaled = Math.round(score / maxScore * 10000) / 10000;
      }
    }
  }

  if (typeof completion === 'undefined') {
    this.data.statement.result.completion = (this.getVerb() === 'completed' || this.getVerb() === 'answered');
  }
  else {
    this.data.statement.result.completion = completion;
  }

  if (typeof success !== 'undefined') {
    this.data.statement.result.success = success;
  }

  if (instance && instance.activityStartTime) {
    var duration = Math.round((Date.now() - instance.activityStartTime ) / 10) / 100;
    // xAPI spec allows a precision of 0.01 seconds

    this.data.statement.result.duration = 'PT' + duration + 'S';
  }
};

/**
 * Set a verb.
 *
 * @param {string} verb
 *   Verb in short form, one of the verbs defined at
 *   {@link http://adlnet.gov/expapi/verbs/|ADL xAPI Vocabulary}
 *
 */
H5P.XAPIEvent.prototype.setVerb = function (verb) {
  if (H5P.jQuery.inArray(verb, H5P.XAPIEvent.allowedXAPIVerbs) !== -1) {
    this.data.statement.verb = {
      'id': 'http://adlnet.gov/expapi/verbs/' + verb,
      'display': {
        'en-US': verb
      }
    };
  }
  else if (verb.id !== undefined) {
    this.data.statement.verb = verb;
  }
};

/**
 * Get the statements verb id.
 *
 * @param {boolean} full
 *   if true the full verb id prefixed by http://adlnet.gov/expapi/verbs/
 *   will be returned
 * @returns {string}
 *   Verb or null if no verb with an id has been defined
 */
H5P.XAPIEvent.prototype.getVerb = function (full) {
  var statement = this.data.statement;
  if ('verb' in statement) {
    if (full === true) {
      return statement.verb;
    }
    return statement.verb.id.slice(31);
  }
  else {
    return null;
  }
};

/**
 * Set the object part of the statement.
 *
 * The id is found automatically (the url to the content)
 *
 * @param {Object} instance
 *   The H5P instance
 */
H5P.XAPIEvent.prototype.setObject = function (instance) {
  if (instance.contentId) {
    this.data.statement.object = {
      'id': this.getContentXAPIId(instance),
      'objectType': 'Activity',
      'definition': {
        'extensions': {
          'http://h5p.org/x-api/h5p-local-content-id': instance.contentId
        }
      }
    };
    if (instance.subContentId) {
      this.data.statement.object.definition.extensions['http://h5p.org/x-api/h5p-subContentId'] = instance.subContentId;
      // Don't set titles on main content, title should come from publishing platform
      if (typeof instance.getTitle === 'function') {
        this.data.statement.object.definition.name = {
          "en-US": instance.getTitle()
        };
      }
    }
    else {
      if (H5PIntegration && H5PIntegration.contents && H5PIntegration.contents['cid-' + instance.contentId].title) {
        this.data.statement.object.definition.name = {
          "en-US": H5P.createTitle(H5PIntegration.contents['cid-' + instance.contentId].title)
        };
      }
    }
  }
};

/**
 * Set the context part of the statement.
 *
 * @param {Object} instance
 *   The H5P instance
 */
H5P.XAPIEvent.prototype.setContext = function (instance) {
  if (instance.parent && (instance.parent.contentId || instance.parent.subContentId)) {
    var parentId = instance.parent.subContentId === undefined ? instance.parent.contentId : instance.parent.subContentId;
    this.data.statement.context = {
      "contextActivities": {
        "parent": [
          {
            "id": this.getContentXAPIId(instance.parent),
            "objectType": "Activity"
          }
        ]
      }
    };
  }
  if (instance.libraryInfo) {
    if (this.data.statement.context === undefined) {
      this.data.statement.context = {"contextActivities":{}};
    }
    this.data.statement.context.contextActivities.category = [
      {
        "id": "http://h5p.org/libraries/" + instance.libraryInfo.versionedNameNoSpaces,
        "objectType": "Activity"
      }
    ];
  }
};

/**
 * Set the actor. Email and name will be added automatically.
 */
H5P.XAPIEvent.prototype.setActor = function () {
  if (H5PIntegration.user !== undefined) {
    this.data.statement.actor = {
      'name': H5PIntegration.user.name,
      'mbox': 'mailto:' + H5PIntegration.user.mail,
      'objectType': 'Agent'
    };
  }
  else {
    var uuid;
    try {
      if (localStorage.H5PUserUUID) {
        uuid = localStorage.H5PUserUUID;
      }
      else {
        uuid = H5P.createUUID();
        localStorage.H5PUserUUID = uuid;
      }
    }
    catch (err) {
      // LocalStorage and Cookies are probably disabled. Do not track the user.
      uuid = 'not-trackable-' + H5P.createUUID();
    }
    this.data.statement.actor = {
      'account': {
        'name': uuid,
        'homePage': H5PIntegration.siteUrl
      },
      'objectType': 'Agent'
    };
  }
};

/**
 * Get the max value of the result - score part of the statement
 *
 * @returns {number}
 *   The max score, or null if not defined
 */
H5P.XAPIEvent.prototype.getMaxScore = function() {
  return this.getVerifiedStatementValue(['result', 'score', 'max']);
};

/**
 * Get the raw value of the result - score part of the statement
 *
 * @returns {number}
 *   The score, or null if not defined
 */
H5P.XAPIEvent.prototype.getScore = function() {
  return this.getVerifiedStatementValue(['result', 'score', 'raw']);
};

/**
 * Get content xAPI ID.
 *
 * @param {Object} instance
 *   The H5P instance
 */
H5P.XAPIEvent.prototype.getContentXAPIId = function (instance) {
  var xAPIId;
  if (instance.contentId && H5PIntegration && H5PIntegration.contents) {
    xAPIId =  H5PIntegration.contents['cid-' + instance.contentId].url;
    if (instance.subContentId) {
      xAPIId += '?subContentId=' +  instance.subContentId;
    }
  }
  return xAPIId;
};

/**
 * Check if this event is sent from a child (i.e not from grandchild)
 *
 * @return {Boolean}
 */
H5P.XAPIEvent.prototype.isFromChild = function () {
  var parentId = this.getVerifiedStatementValue(['context', 'contextActivities', 'parent', 0, 'id']);
  return !parentId || parentId.indexOf('subContentId') === -1;
}

/**
 * Figure out if a property exists in the statement and return it
 *
 * @param {string[]} keys
 *   List describing the property we're looking for. For instance
 *   ['result', 'score', 'raw'] for result.score.raw
 * @returns {*}
 *   The value of the property if it is set, null otherwise.
 */
H5P.XAPIEvent.prototype.getVerifiedStatementValue = function(keys) {
  var val = this.data.statement;
  for (var i = 0; i < keys.length; i++) {
    if (val[keys[i]] === undefined) {
      return null;
    }
    val = val[keys[i]];
  }
  return val;
};

/**
 * List of verbs defined at {@link http://adlnet.gov/expapi/verbs/|ADL xAPI Vocabulary}
 *
 * @type Array
 */
H5P.XAPIEvent.allowedXAPIVerbs = [
  'answered',
  'asked',
  'attempted',
  'attended',
  'commented',
  'completed',
  'exited',
  'experienced',
  'failed',
  'imported',
  'initialized',
  'interacted',
  'launched',
  'mastered',
  'passed',
  'preferred',
  'progressed',
  'registered',
  'responded',
  'resumed',
  'scored',
  'shared',
  'suspended',
  'terminated',
  'voided',

  // Custom verbs used for action toolbar below content
  'downloaded',
  'accessed-embed',
  'accessed-copyright'
];
;
var H5P = H5P || {};

/**
 * The external event dispatcher. Others, outside of H5P may register and
 * listen for H5P Events here.
 *
 * @type {H5P.EventDispatcher}
 */
H5P.externalDispatcher = new H5P.EventDispatcher();

// EventDispatcher extensions

/**
 * Helper function for triggering xAPI added to the EventDispatcher.
 *
 * @param {string} verb
 *   The short id of the verb we want to trigger
 * @param {Oject} [extra]
 *   Extra properties for the xAPI statement
 */
H5P.EventDispatcher.prototype.triggerXAPI = function (verb, extra) {
  this.trigger(this.createXAPIEventTemplate(verb, extra));
};

/**
 * Helper function to create event templates added to the EventDispatcher.
 *
 * Will in the future be used to add representations of the questions to the
 * statements.
 *
 * @param {string} verb
 *   Verb id in short form
 * @param {Object} [extra]
 *   Extra values to be added to the statement
 * @returns {H5P.XAPIEvent}
 *   Instance
 */
H5P.EventDispatcher.prototype.createXAPIEventTemplate = function (verb, extra) {
  var event = new H5P.XAPIEvent();

  event.setActor();
  event.setVerb(verb);
  if (extra !== undefined) {
    for (var i in extra) {
      event.data.statement[i] = extra[i];
    }
  }
  if (!('object' in event.data.statement)) {
    event.setObject(this);
  }
  if (!('context' in event.data.statement)) {
    event.setContext(this);
  }
  return event;
};

/**
 * Helper function to create xAPI completed events
 *
 * DEPRECATED - USE triggerXAPIScored instead
 *
 * @deprecated
 *   since 1.5, use triggerXAPIScored instead.
 * @param {number} score
 *   Will be set as the 'raw' value of the score object
 * @param {number} maxScore
 *   will be set as the "max" value of the score object
 * @param {boolean} success
 *   will be set as the "success" value of the result object
 */
H5P.EventDispatcher.prototype.triggerXAPICompleted = function (score, maxScore, success) {
  this.triggerXAPIScored(score, maxScore, 'completed', true, success);
};

/**
 * Helper function to create scored xAPI events
 *
 * @param {number} score
 *   Will be set as the 'raw' value of the score object
 * @param {number} maxScore
 *   Will be set as the "max" value of the score object
 * @param {string} verb
 *   Short form of adl verb
 * @param {boolean} completion
 *   Is this a statement from a completed activity?
 * @param {boolean} success
 *   Is this a statement from an activity that was done successfully?
 */
H5P.EventDispatcher.prototype.triggerXAPIScored = function (score, maxScore, verb, completion, success) {
  var event = this.createXAPIEventTemplate(verb);
  event.setScoredResult(score, maxScore, this, completion, success);
  this.trigger(event);
};

H5P.EventDispatcher.prototype.setActivityStarted = function() {
  if (this.activityStartTime === undefined) {
    // Don't trigger xAPI events in the editor
    if (this.contentId !== undefined &&
        H5PIntegration.contents !== undefined &&
        H5PIntegration.contents['cid-' + this.contentId] !== undefined) {
      this.triggerXAPI('attempted');
    }
    this.activityStartTime = Date.now();
  }
};

/**
 * Internal H5P function listening for xAPI completed events and stores scores
 *
 * @param {H5P.XAPIEvent} event
 */
H5P.xAPICompletedListener = function (event) {
  if ((event.getVerb() === 'completed' || event.getVerb() === 'answered') && !event.getVerifiedStatementValue(['context', 'contextActivities', 'parent'])) {
    var score = event.getScore();
    var maxScore = event.getMaxScore();
    var contentId = event.getVerifiedStatementValue(['object', 'definition', 'extensions', 'http://h5p.org/x-api/h5p-local-content-id']);
    H5P.setFinished(contentId, score, maxScore);
  }
};
;
/**
 * H5P.ContentType is a base class for all content types. Used by newRunnable()
 *
 * Functions here may be overridable by the libraries. In special cases,
 * it is also possible to override H5P.ContentType on a global level.
 *
 * NOTE that this doesn't actually 'extend' the event dispatcher but instead
 * it creates a single instance which all content types shares as their base
 * prototype. (in some cases this may be the root of strange event behavior)
 *
 * @class
 * @augments H5P.EventDispatcher
 */
H5P.ContentType = function (isRootLibrary, library) {

  function ContentType() {}

  // Inherit from EventDispatcher.
  ContentType.prototype = new H5P.EventDispatcher();

  /**
   * Is library standalone or not? Not beeing standalone, means it is
   * included in another library
   *
   * @return {Boolean}
   */
  ContentType.prototype.isRoot = function () {
    return isRootLibrary;
  };

  /**
   * Returns the file path of a file in the current library
   * @param  {string} filePath The path to the file relative to the library folder
   * @return {string} The full path to the file
   */
  ContentType.prototype.getLibraryFilePath = function (filePath) {
    return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + '/' + filePath;
  };

  return ContentType;
};
;
/*global H5P*/
H5P.ConfirmationDialog = (function (EventDispatcher) {
  "use strict";

  /**
   * Create a confirmation dialog
   *
   * @param [options] Options for confirmation dialog
   * @param [options.instance] Instance that uses confirmation dialog
   * @param [options.headerText] Header text
   * @param [options.dialogText] Dialog text
   * @param [options.cancelText] Cancel dialog button text
   * @param [options.confirmText] Confirm dialog button text
   * @constructor
   */
  function ConfirmationDialog(options) {
    EventDispatcher.call(this);
    var self = this;

    // Make sure confirmation dialogs have unique id
    H5P.ConfirmationDialog.uniqueId += 1;
    var uniqueId = H5P.ConfirmationDialog.uniqueId;

    // Default options
    options = options || {};
    options.headerText = options.headerText || H5P.t('confirmDialogHeader');
    options.dialogText = options.dialogText || H5P.t('confirmDialogBody');
    options.cancelText = options.cancelText || H5P.t('cancelLabel');
    options.confirmText = options.confirmText || H5P.t('confirmLabel');

    /**
     * Handle confirming event
     * @param {Event} e
     */
    function dialogConfirmed(e) {
      self.hide();
      self.trigger('confirmed');
      e.preventDefault();
    }

    /**
     * Handle dialog canceled
     * @param {Event} e
     */
    function dialogCanceled(e) {
      self.hide();
      self.trigger('canceled');
      e.preventDefault();
    }

    /**
     * Flow focus to element
     * @param {HTMLElement} element Next element to be focused
     * @param {Event} e Original tab event
     */
    function flowTo(element, e) {
      element.focus();
      e.preventDefault();
    }

    // Offset of exit button
    var exitButtonOffset = 2 * 16;
    var shadowOffset = 8;

    // Determine if we are too large for our container and must resize
    var resizeIFrame = false;

    // Create background
    var popupBackground = document.createElement('div');
    popupBackground.classList
      .add('h5p-confirmation-dialog-background', 'hidden', 'hiding');

    // Create outer popup
    var popup = document.createElement('div');
    popup.classList.add('h5p-confirmation-dialog-popup', 'hidden');
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-labelledby', 'h5p-confirmation-dialog-dialog-text-' + uniqueId);
    popupBackground.appendChild(popup);
    popup.addEventListener('keydown', function (e) {
      if (e.which === 27) {// Esc key
        // Exit dialog
        dialogCanceled(e);
      }
    });

    // Popup header
    var header = document.createElement('div');
    header.classList.add('h5p-confirmation-dialog-header');
    popup.appendChild(header);

    // Header text
    var headerText = document.createElement('div');
    headerText.classList.add('h5p-confirmation-dialog-header-text');
    headerText.innerHTML = options.headerText;
    header.appendChild(headerText);

    // Popup body
    var body = document.createElement('div');
    body.classList.add('h5p-confirmation-dialog-body');
    popup.appendChild(body);

    // Popup text
    var text = document.createElement('div');
    text.classList.add('h5p-confirmation-dialog-text');
    text.innerHTML = options.dialogText;
    text.id = 'h5p-confirmation-dialog-dialog-text-' + uniqueId;
    body.appendChild(text);

    // Popup buttons
    var buttons = document.createElement('div');
    buttons.classList.add('h5p-confirmation-dialog-buttons');
    body.appendChild(buttons);

    // Cancel button
    var cancelButton = document.createElement('button');
    cancelButton.classList.add('h5p-core-cancel-button');
    cancelButton.textContent = options.cancelText;

    // Confirm button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('h5p-core-button');
    confirmButton.classList.add('h5p-confirmation-dialog-confirm-button');
    confirmButton.textContent = options.confirmText;

    // Exit button
    var exitButton = document.createElement('button');
    exitButton.classList.add('h5p-confirmation-dialog-exit');
    exitButton.setAttribute('aria-hidden', 'true');
    exitButton.tabIndex = -1;
    exitButton.title = options.cancelText;

    // Cancel handler
    cancelButton.addEventListener('click', dialogCanceled);
    cancelButton.addEventListener('keydown', function (e) {
      if (e.which === 32) { // Space
        dialogCanceled(e);
      }
      else if (e.which === 9 && e.shiftKey) { // Shift-tab
        flowTo(confirmButton, e);
      }
    });
    buttons.appendChild(cancelButton);

    // Confirm handler
    confirmButton.addEventListener('click', dialogConfirmed);
    confirmButton.addEventListener('keydown', function (e) {
      if (e.which === 32) { // Space
        dialogConfirmed(e);
      }
      else if (e.which === 9 && !e.shiftKey) { // Tab
        flowTo(cancelButton, e);
      }
    });
    buttons.appendChild(confirmButton);

    // Exit handler
    exitButton.addEventListener('click', dialogCanceled);
    exitButton.addEventListener('keydown', function (e) {
      if (e.which === 32) { // Space
        dialogCanceled(e);
      }
    });
    popup.appendChild(exitButton);

    // Wrapper element
    var wrapperElement;

    // Focus capturing
    var focusPredator;

    // Maintains hidden state of elements
    var wrapperSiblingsHidden = [];
    var popupSiblingsHidden = [];

    // Element with focus before dialog
    var previouslyFocused;

    /**
     * Set parent of confirmation dialog
     * @param {HTMLElement} wrapper
     * @returns {H5P.ConfirmationDialog}
     */
    this.appendTo = function (wrapper) {
      wrapperElement = wrapper;
      return this;
    };

    /**
     * Capture the focus element, send it to confirmation button
     * @param {Event} e Original focus event
     */
    var captureFocus = function (e) {
      if (!popupBackground.contains(e.target)) {
        e.preventDefault();
        confirmButton.focus();
      }
    };

    /**
     * Hide siblings of element from assistive technology
     *
     * @param {HTMLElement} element
     * @returns {Array} The previous hidden state of all siblings
     */
    var hideSiblings = function (element) {
      var hiddenSiblings = [];
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        // Preserve hidden state
        hiddenSiblings[i] = siblings[i].getAttribute('aria-hidden') ?
          true : false;

        if (siblings[i] !== element) {
          siblings[i].setAttribute('aria-hidden', true);
        }
      }
      return hiddenSiblings;
    };

    /**
     * Restores assistive technology state of element's siblings
     *
     * @param {HTMLElement} element
     * @param {Array} hiddenSiblings Hidden state of all siblings
     */
    var restoreSiblings = function (element, hiddenSiblings) {
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        if (siblings[i] !== element && !hiddenSiblings[i]) {
          siblings[i].removeAttribute('aria-hidden');
        }
      }
    };

    /**
     * Start capturing focus of parent and send it to dialog
     */
    var startCapturingFocus = function () {
      focusPredator = wrapperElement.parentNode || wrapperElement;
      focusPredator.addEventListener('focus', captureFocus, true);
    };

    /**
     * Clean up event listener for capturing focus
     */
    var stopCapturingFocus = function () {
      focusPredator.removeAttribute('aria-hidden');
      focusPredator.removeEventListener('focus', captureFocus, true);
    };

    /**
     * Hide siblings in underlay from assistive technologies
     */
    var disableUnderlay = function () {
      wrapperSiblingsHidden = hideSiblings(wrapperElement);
      popupSiblingsHidden = hideSiblings(popupBackground);
    };

    /**
     * Restore state of underlay for assistive technologies
     */
    var restoreUnderlay = function () {
      restoreSiblings(wrapperElement, wrapperSiblingsHidden);
      restoreSiblings(popupBackground, popupSiblingsHidden);
    };

    /**
     * Fit popup to container. Makes sure it doesn't overflow.
     * @params {number} [offsetTop] Offset of popup
     */
    var fitToContainer = function (offsetTop) {
      var popupOffsetTop = parseInt(popup.style.top, 10);
      if (offsetTop) {
        popupOffsetTop = offsetTop;
      }

      // Overflows height
      if (popupOffsetTop + popup.offsetHeight > wrapperElement.offsetHeight) {
        popupOffsetTop = wrapperElement.offsetHeight - popup.offsetHeight - shadowOffset;
      }

      if (popupOffsetTop - exitButtonOffset <= 0) {
        popupOffsetTop = exitButtonOffset + shadowOffset;

        // We are too big and must resize
        resizeIFrame = true;
      }
      popup.style.top = popupOffsetTop + 'px';
    };

    /**
     * Show confirmation dialog
     * @params {number} offsetTop Offset top
     * @returns {H5P.ConfirmationDialog}
     */
    this.show = function (offsetTop) {
      // Capture focused item
      previouslyFocused = document.activeElement;
      wrapperElement.appendChild(popupBackground);
      startCapturingFocus();
      disableUnderlay();
      popupBackground.classList.remove('hidden');
      fitToContainer(offsetTop);
      setTimeout(function () {
        popup.classList.remove('hidden');
        popupBackground.classList.remove('hiding');

        setTimeout(function () {
          // Focus confirm button
          confirmButton.focus();

          // Resize iFrame if necessary
          if (resizeIFrame && options.instance) {
            var minHeight = parseInt(popup.offsetHeight, 10) +
              exitButtonOffset + (2 * shadowOffset);
            self.setViewPortMinimumHeight(minHeight);
            options.instance.trigger('resize');
            resizeIFrame = false;
          }
        }, 100);
      }, 0);

      return this;
    };

    /**
     * Hide confirmation dialog
     * @returns {H5P.ConfirmationDialog}
     */
    this.hide = function () {
      popupBackground.classList.add('hiding');
      popup.classList.add('hidden');

      // Restore focus
      stopCapturingFocus();
      previouslyFocused.focus();
      restoreUnderlay();
      setTimeout(function () {
        popupBackground.classList.add('hidden');
        wrapperElement.removeChild(popupBackground);
        self.setViewPortMinimumHeight(null);
      }, 100);

      return this;
    };

    /**
     * Sets the minimum height of the view port
     *
     * @param {number|null} minHeight
     */
    this.setViewPortMinimumHeight = function(minHeight) {
      var container = document.querySelector('.h5p-container') || document.body;
      container.style.minHeight = (typeof minHeight === 'number') ? (minHeight + 'px') : minHeight;
    };
  }

  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;

  return ConfirmationDialog;

}(H5P.EventDispatcher));

H5P.ConfirmationDialog.uniqueId = -1;
;
/**
 * @class
 * @augments H5P.EventDispatcher
 * @param {Object} displayOptions
 * @param {boolean} displayOptions.export Triggers the display of the 'Download' button
 * @param {boolean} displayOptions.copyright Triggers the display of the 'Copyright' button
 * @param {boolean} displayOptions.embed Triggers the display of the 'Embed' button
 * @param {boolean} displayOptions.icon Triggers the display of the 'H5P icon' link
 */
H5P.ActionBar = (function ($, EventDispatcher) {
  "use strict";

  function ActionBar(displayOptions) {
    EventDispatcher.call(this);

    /** @alias H5P.ActionBar# */
    var self = this;

    var hasActions = false;

    // Create action bar
    var $actions = H5P.jQuery('<ul class="h5p-actions"></ul>');

    /**
     * Helper for creating action bar buttons.
     *
     * @private
     * @param {string} type
     * @param {string} customClass Instead of type class
     */
    var addActionButton = function (type, customClass) {
      /**
       * Handles selection of action
       */
      var handler = function () {
        self.trigger(type);
      };
      H5P.jQuery('<li/>', {
        'class': 'h5p-button h5p-noselect h5p-' + (customClass ? customClass : type),
        role: 'button',
        tabindex: 0,
        title: H5P.t(type + 'Description'),
        html: H5P.t(type),
        on: {
          click: handler,
          keypress: function (e) {
            if (e.which === 32) {
              handler();
              e.preventDefault(); // (since return false will block other inputs)
            }
          }
        },
        appendTo: $actions
      });

      hasActions = true;
    };

    // Register action bar buttons
    if (displayOptions.export) {
      // Add export button
      addActionButton('download', 'export');
    }
    if (displayOptions.copyright) {
      addActionButton('copyrights');
    }
    if (displayOptions.embed) {
      addActionButton('embed');
    }
    if (displayOptions.icon) {
      // Add about H5P button icon
      H5P.jQuery('<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' + H5P.t('h5pDescription') + '"></a></li>').appendTo($actions);
      hasActions = true;
    }

    /**
     * Returns a reference to the dom element
     *
     * @return {H5P.jQuery}
     */
    self.getDOMElement = function () {
      return $actions;
    };

    /**
     * Does the actionbar contain actions?
     *
     * @return {Boolean}
     */
    self.hasActions = function () {
      return hasActions;
    };
  }

  ActionBar.prototype = Object.create(EventDispatcher.prototype);
  ActionBar.prototype.constructor = ActionBar;

  return ActionBar;

})(H5P.jQuery, H5P.EventDispatcher);
;
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t,n){"use strict";e.exports=n(23)},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(34)()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return o(e,null,[{key:"init",value:function(t){e.dictionary=t}},{key:"get",value:function(t,n){var r=e.dictionary[t];if(void 0===r)return"Key not found in dictionary: "+t;for(var o in n)n[o]&&(r=r.replace(o,n[o]));return r}}]),e}();t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(2),p=r(d);n(46);var h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"createTroubleshootingURL",value:function(e){return e?"https://h5p.org/documentation/troubleshooting#"+e:void 0}},{key:"render",value:function(){var e=this,t="h5p-hub-message "+this.props.severity+(this.props.onClose?" dismissible":""),n=this.props.message;n&&!Array.isArray(n)&&(n=[n]);var r=n?n.map(function(t,n){var r=t.message||t,o=e.createTroubleshootingURL(t.code);return s.default.createElement("p",{key:n,className:"message-body"},s.default.createElement("span",{dangerouslySetInnerHTML:{__html:r}}),o&&s.default.createElement("a",{className:"get-help",target:"_blank",href:o},"Get help"))}):null;return s.default.createElement("div",{className:t,role:"alert"},this.props.onClose&&s.default.createElement("button",{className:"message-close",tabIndex:"0","aria-label":p.default.get("closeButtonLabel"),onClick:this.props.onClose}),s.default.createElement("div",{className:"message-content"},s.default.createElement("h2",null,this.props.title),r),this.props.children)}}]),t}(s.default.Component);h.propTypes={severity:f.default.oneOf(["info","warning","error"]).isRequired,title:f.default.string.isRequired,message:f.default.oneOfType([f.default.string,f.default.array]),onClose:f.default.func,children:f.default.oneOfType([f.default.object,f.default.array])},t.default=h},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(6);var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(e,t){return fetch(e,{method:void 0===t?"GET":"POST",credentials:"include",body:t}).then(function(e){return e.json().catch(function(){throw{title:e.statusText+" ("+e.status+")",message:[o.default.get("unableToInterpretError"),o.default.get("unableToInterpretSolution")]}})}).then(function(e){if(!1===e.success)throw{title:e.message,message:e.details};return e})};t.default=a},function(e,t,n){"use strict";(function(e){!function(t){function n(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function o(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function a(e){this.map={},e instanceof a?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new e(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function u(e){var t=new FileReader,n=l(t);return t.readAsArrayBuffer(e),n}function s(e){var t=new FileReader,n=l(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&w(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!C(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(e){var t=e.toUpperCase();return E.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var n=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new a(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new a(t.headers)),this.method=p(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function m(e){var t=new a;return e.replace(/\r?\n[\t ]+/," ").split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new a(t.headers),this.url=t.url||"",this._initBody(e)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},C=ArrayBuffer.isView||function(e){return e&&g.indexOf(Object.prototype.toString.call(e))>-1};a.prototype.append=function(e,t){e=n(e),t=r(t);var o=this.map[e];this.map[e]=o?o+","+t:t},a.prototype.delete=function(e){delete this.map[n(e)]},a.prototype.get=function(e){return e=n(e),this.has(e)?this.map[e]:null},a.prototype.has=function(e){return this.map.hasOwnProperty(n(e))},a.prototype.set=function(e,t){this.map[n(e)]=r(t)},a.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},a.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),o(e)},a.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),o(e)},a.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),o(e)},v.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},d.call(h.prototype),d.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];b.redirect=function(e,t){if(-1===T.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},t.Headers=a,t.Request=h,t.Response=b,t.fetch=function(t,n){return new e(function(e,r){var o=new h(t,n),a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:m(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;e(new b(n,t))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.open(o.method,o.url,!0),"include"===o.credentials&&(a.withCredentials=!0),"responseType"in a&&v.blob&&(a.responseType="blob"),o.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:void 0)}).call(t,n(37))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.cloneChild=function(e){return e?s.default.cloneElement(e,e.props.id?{className:(e.props.className?e.props.className+" ":"")+(n.state.selected?e.props.id===n.state.selected?"hightlight":"":n.count?"":"highlight"),tabIndex:n.state.focused?e.props.id===n.state.focused?0:-1:n.count++?-1:0,role:-1!==["a","button"].indexOf(e.type)?void 0:e.props.role||"button",onClick:function(t){return n.handleClick(t,e.props.id)},onKeyDown:function(t){return n.handleKeyDown(t,e.props.id)},ref:function(e){return e?n.items.push(e):void 0}}:void 0,!e.props.id&&e.props.children?s.default.Children.map(e.props.children,n.cloneChild):e.props.children):null},n.state={selected:e.selected,focused:e.selected},n}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({selected:e.selected,focused:e.selected}),e.setFocus!==this.props.setFocus&&this.setState({focusOnRender:!0})}},{key:"select",value:function(e){this.props.onChange(e),this.setState({selected:e})}},{key:"focus",value:function(e,t){e&&(this.setState({focused:e,focusOnRender:!t}),this.props.onFocus&&this.props.onFocus(e))}},{key:"getSiblingIdFor",value:function(e,t){for(var n=0;n<this.items.length;n++)if(e===this.items[n].id){var r=this.items[n+t];if(r)return r.id}}},{key:"handleClick",value:function(e,t){e.defaultPrevented||(this.select(t),"A"===e.target.tagName&&e.preventDefault())}},{key:"handleKeyDown",value:function(e,t){if(!e.defaultPrevented)switch(e.which){case 37:case 38:this.focus(this.getSiblingIdFor(t,-1)),e.preventDefault();break;case 39:case 40:this.focus(this.getSiblingIdFor(t,1)),e.preventDefault();break;case 32:case 13:this.select(t),e.preventDefault()}}},{key:"componentDidUpdate",value:function(){if(this.state.focusOnRender)if(delete this.state.focusOnRender,this.state.focused)for(var e=0;e<this.items.length;e++)this.state.focused===this.items[e].id&&this.items[e].focus();else this.items[0]&&this.items[0].focus()}},{key:"render",value:function(){return this.items=[],this.count=0,s.default.Children.map(this.props.children,this.cloneChild)}}]),t}(s.default.Component);d.propTypes={selected:f.default.string,setFocus:f.default.bool,onChange:f.default.func.isRequired,onFocus:f.default.func,onScrollIntoView:f.default.func},t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.nonEmptyString=function(e,t,n){if(void 0===e[t]||0===e[t].length)return new Error("Non empty string for prop "+t+" in "+n)},t.stopPropagation=function(e){return e.stopPropagation()},t.onSpaceOrEnterEvent=function(e,t){-1!==[32,13].indexOf(e.which)&&(e.preventDefault(),t())}},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(o({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,o,u=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)i.call(n,c)&&(u[c]=n[c]);if(a){o=a(n);for(var f=0;f<o.length;f++)l.call(n,o[f])&&(u[o[f]]=n[o[f]])}}return u}},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";function r(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}r(),e.exports=n(24)},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjI1Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgIGZpbGw6IG5vbmU7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMiB7DQogICAgICBmaWxsOiAjYzZjNmM3Ow0KICAgICAgfQ0KDQogICAgICAuY2xzLTMsIC5jbHMtNCB7DQogICAgICBmaWxsOiAjZmZmOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTMgew0KICAgICAgb3BhY2l0eTogMC43Ow0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHRpdGxlPmNvbnRlbnQgdHlwZSBwbGFjZWhvbGRlcl8yPC90aXRsZT4NCiAgPGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+DQogICAgPGcgaWQ9ImNvbnRlbnRfdHlwZV9wbGFjZWhvbGRlci0xX2NvcHkiIGRhdGEtbmFtZT0iY29udGVudCB0eXBlIHBsYWNlaG9sZGVyLTEgY29weSI+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1Ii8+DQogICAgICA8cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjExMi41MSIgeT0iNDMuNDEiIHdpZHRoPSIxNzYuOTYiIGhlaWdodD0iMTM1LjQ1IiByeD0iMTAiIHJ5PSIxMCIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxMzYuNjYiIGN5PSI2MS45OCIgcj0iNC44MSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxNTEuNDkiIGN5PSI2MS45OCIgcj0iNC44MSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxNjYuMSIgY3k9IjYxLjk4IiByPSI0LjgxIi8+DQogICAgICA8ZyBpZD0iX0dyb3VwXyIgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7Ij4NCiAgICAgICAgPGcgaWQ9Il9Hcm91cF8yIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiPg0KICAgICAgICAgIDxwYXRoIGlkPSJfQ29tcG91bmRfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O0NvbXBvdW5kIFBhdGgmZ3Q7IiBjbGFzcz0iY2xzLTQiIGQ9Ik0yNjMuMjgsOTUuMjFDMjYwLDkyLjA3LDI1NSw5MS41LDI0OC40Myw5MS41SDIyN3Y4SDE5OS41bC0yLjE3LDEwLjI0YTI1Ljg0LDI1Ljg0LDAsMCwxLDExLjQ4LTEuNjMsMTkuOTMsMTkuOTMsMCwwLDEsMTQuMzksNS41NywxOC4yNiwxOC4yNiwwLDAsMSw1LjUyLDEzLjYsMjMuMTEsMjMuMTEsMCwwLDEtMi44NCwxMS4wNSwxOC42NSwxOC42NSwwLDAsMS04LjA2LDcuNzksOSw5LDAsMCwxLTQuMTIsMS4zN0gyMzZ2LTIxaDEwLjQyYzcuMzYsMCwxMi44My0xLjYxLDE2LjQyLTVzNS4zOC03LjQ4LDUuMzgtMTMuNDRDMjY4LjIyLDEwMi4yOSwyNjYuNTcsOTguMzUsMjYzLjI4LDk1LjIxWm0tMTUsMTdjLTEuNDIsMS4yMi0zLjksMS4yNS03LjQxLDEuMjVIMjM2di0xNGg1LjYyYTkuNTcsOS41NywwLDAsMSw3LDIuOTMsNy4wNSw3LjA1LDAsMCwxLDEuODUsNC45MkE2LjMzLDYuMzMsMCwwLDEsMjQ4LjMxLDExMi4yNVoiLz4NCiAgICAgICAgICA8cGF0aCBpZD0iX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy00IiBkPSJNMjAyLjksMTE5LjExYTguMTIsOC4xMiwwLDAsMC03LjI4LDQuNTJsLTE2LTEuMjIsNy4yMi0zMC45MkgxNzR2MjJIMTUzdi0yMkgxMzZ2NTZoMTd2LTIxaDIxdjIxaDIwLjMxYy0yLjcyLDAtNS0xLjUzLTctM2ExOS4xOSwxOS4xOSwwLDAsMS00LjczLTQuODMsMjMuNTgsMjMuNTgsMCwwLDEtMy02LjZsMTYtMi4yNmE4LjExLDguMTEsMCwxLDAsNy4yNi0xMS43MloiLz4NCiAgICAgICAgPC9nPg0KICAgICAgPC9nPg0KICAgICAgPHJlY3QgY2xhc3M9ImNscy0zIiB4PSIxNzcuNjYiIHk9IjU3LjY2IiB3aWR0aD0iOTIuMjgiIGhlaWdodD0iOS4zOCIgcng9IjMuNSIgcnk9IjMuNSIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo="},function(e,t,n){"use strict";function r(e,t){var n=t.major>e.h5pMajorVersion||t.major===e.h5pMajorVersion&&t.minor>=e.h5pMinorVersion;return!e.isUpToDate&&e.installed&&e.canInstall&&n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e.offsetWidth<=0&&e.offsetHeight<=0||"none"===e.style.display}function o(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}function a(e,t){var n=e.nodeName.toLowerCase();return(u.test(n)&&!e.disabled||("a"===n?e.href||t:t))&&o(e)}function i(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}function l(e){return[].slice.call(e.querySelectorAll("*"),0).filter(i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
var u=/input|select|textarea|button|object/;e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function o(e){var t=e;if("string"==typeof t){var n=document.querySelectorAll(t);r(n,t),t="length"in n?n[0]:n}return f=t||f}function a(){return!(!document||!document.body)&&(o(document.body),!0)}function i(e){if(!e&&!f&&!a())throw new Error(["react-modal: Cannot fallback to `document.body`, because it is not","ready or available. If you are doing server-side rendering, use this","function to defined an element. `Modal.setAppElement(el)` to make","this accessible"].join(" "))}function l(e){i(e),(e||f).setAttribute("aria-hidden","true")}function u(e){i(e),(e||f).removeAttribute("aria-hidden")}function s(){f=null}function c(){f=document.body}Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=r,t.setElement=o,t.tryForceFallback=a,t.validateElement=i,t.hide=l,t.show=u,t.documentNotReadyOrSSRTesting=s,t.resetForTesting=c;var f=null},function(e,t,n){"use strict";function r(){return l}function o(e){return l[e]||(l[e]=0),l[e]+=1,e}function a(e){return l[e]&&(l[e]-=1),e}function i(){return Object.keys(l).reduce(function(e,t){return e+l[t]},0)}Object.defineProperty(t,"__esModule",{value:!0}),t.get=r,t.add=o,t.remove=a,t.totalCount=i;var l={}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var r=n(63),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=o.default,i=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=i},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(1),d=r(f),p=n(8),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props.type||"div";return c.default.createElement(t,l({},this.props.buttonProps,{role:"button",tabIndex:"0",onClick:function(){return e.props.onButtonClick()},onKeyPress:function(t){return(0,p.onSpaceOrEnterEvent)(t,e.props.onButtonClick)}}),this.props.children)}}]),t}(c.default.Component);h.propTypes={onButtonClick:d.default.func,buttonProps:d.default.object,type:d.default.string},t.default=h},function(e,t,n){"use strict";n(21),H5P=H5P||{},H5P.HubClient=n(22).default},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),l=r(i),u=n(11),s=r(u),c=n(33),f=r(c),d=n(2),p=r(d),h=n(85),y=function e(t,n){o(this,e),a(this,(0,h.Eventful)());var r=this,i=document.createElement("div");p.default.init(n);var u=function(){s.default.render(l.default.createElement(f.default,{title:t.title,contentId:parseInt(t.contentId),contentTypes:t.contentTypes,selected:t.selected,getAjaxUrl:t.getAjaxUrl,onResize:r.trigger.bind(r,"resize"),onUse:r.trigger.bind(r,"select"),onUpload:r.trigger.bind(r,"upload"),onUpdate:r.trigger.bind(r,"update")}),i)};this.setPanelTitle=function(e){t.title=e,u()},this.getElement=function(){return i},u()};t.default=y},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||E}function a(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||E}function i(){}function l(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||E}function u(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:x,type:e,key:a,ref:i,props:o,_owner:_.current}}function s(e){return"object"===(void 0===e?"undefined":v(e))&&null!==e&&e.$$typeof===x}function c(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function f(e,t,n,r){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function d(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function p(e,t,n,o){var a=void 0===e?"undefined":v(e);if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===I||"object"===a&&e.$$typeof===N)return n(o,e,""===t?"."+h(e,0):t),1;var i=0;if(t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){a=e[l];var u=t+h(a,l);i+=p(a,u,n,o)}else if("function"==typeof(u=P&&e[P]||e["@@iterator"]))for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=t+h(a,l++),i+=p(a,u,n,o);else"object"===a&&(n=""+e,r("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function h(e,t){return"object"===(void 0===e?"undefined":v(e))&&null!==e&&null!=e.key?c(e.key):t.toString(36)}function y(e,t){e.func.call(e.context,t,e.count++)}function m(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?b(e,r,n,C.thatReturnsArgument):null!=e&&(s(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n,e={$$typeof:x,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function b(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(M,"$&/")+"/"),t=f(t,a,r,o),null==e||p(e,"",m,t),d(t)}/** @license React v16.1.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=n(9),w=n(10),C=n(4),E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!==(void 0===e?"undefined":v(e))&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var T=a.prototype=new i;T.constructor=a,g(T,o.prototype),T.isPureReactComponent=!0;var S=l.prototype=new i;S.constructor=l,g(S,o.prototype),S.unstable_isAsyncReactComponent=!0,S.render=function(){return this.props.children};var _={current:null},O=Object.prototype.hasOwnProperty,x="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,k={key:!0,ref:!0,__self:!0,__source:!0},P="function"==typeof Symbol&&Symbol.iterator,I="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,N="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,M=/\/+/g,j=[];"function"==typeof Symbol&&Symbol.for&&Symbol.for("react.fragment");var R={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return b(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=f(null,null,t,n),null==e||p(e,"",y,t),d(t)},count:function(e){return null==e?0:p(e,"",C.thatReturnsNull,null)},toArray:function(e){var t=[];return b(e,t,null,C.thatReturnsArgument),t},only:function(e){return s(e)||r("143"),e}},Component:o,PureComponent:a,unstable_AsyncComponent:l,createElement:u,cloneElement:function(e,t,n){var r=g({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)O.call(t,u)&&!k.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:x,type:e.type,key:o,ref:a,props:r,_owner:i}},createFactory:function(e){var t=u.bind(null,e);return t.type=e,t},isValidElement:s,version:"16.1.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:g}},D=Object.freeze({default:R}),A=D&&R||D;e.exports=A.default?A.default:A},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function o(e,t){return(e&t)===t}function a(e,t){if(Pn.hasOwnProperty(e)||2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))return!1;if(null===t)return!0;switch(void 0===t?"undefined":vn(t)){case"boolean":return Pn.hasOwnProperty(e)?e=!0:(t=i(e))?e=t.hasBooleanValue||t.hasStringBooleanValue||t.hasOverloadedBooleanValue:(e=e.toLowerCase().slice(0,5),e="data-"===e||"aria-"===e),e;case"undefined":case"number":case"string":case"object":return!0;default:return!1}}function i(e){return Nn.hasOwnProperty(e)?Nn[e]:null}function l(e){return e[1].toUpperCase()}function u(e,t,n,r,o,a,i,l,u){qn._hasCaughtError=!1,qn._caughtError=null;var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){qn._caughtError=e,qn._hasCaughtError=!0}}function s(){if(qn._hasRethrowError){var e=qn._rethrowError;throw qn._rethrowError=null,qn._hasRethrowError=!1,e}}function c(){if(Wn)for(var e in Kn){var t=Kn[e],n=Wn.indexOf(e);if(-1<n||r("96",e),!Gn[n]){t.extractEvents||r("97",e),Gn[n]=t,n=t.eventTypes;for(var o in n){var a=void 0,i=n[o],l=t,u=o;Yn.hasOwnProperty(u)&&r("99",u),Yn[u]=i;var s=i.phasedRegistrationNames;if(s){for(a in s)s.hasOwnProperty(a)&&f(s[a],l,u);a=!0}else i.registrationName?(f(i.registrationName,l,u),a=!0):a=!1;a||r("98",o,e)}}}}function f(e,t,n){Qn[e]&&r("100",e),Qn[e]=t,Zn[e]=t.eventTypes[n].dependencies}function d(e){Wn&&r("101"),Wn=Array.prototype.slice.call(e),c()}function p(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var o=e[t];Kn.hasOwnProperty(t)&&Kn[t]===o||(Kn[t]&&r("102",t),Kn[t]=o,n=!0)}n&&c()}function h(e,t,n,r){t=e.type||"unknown-event",e.currentTarget=er(r),qn.invokeGuardedCallbackAndCatchFirstError(t,n,void 0,e),e.currentTarget=null}function y(e,t){return null==t&&r("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function m(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function b(e,t){if(e){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)h(e,t,n[o],r[o]);else n&&h(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function v(e){return b(e,!0)}function g(e){return b(e,!1)}function w(e,t){var n=e.stateNode;if(!n)return null;var o=Xn(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(o=!o.disabled)||(e=e.type,o=!("button"===e||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&r("231",t,void 0===n?"undefined":vn(n)),n)}function C(e,t,n,r){for(var o,a=0;a<Gn.length;a++){var i=Gn[a];i&&(i=i.extractEvents(e,t,n,r))&&(o=y(o,i))}return o}function E(e){e&&(tr=y(tr,e))}function T(e){var t=tr;tr=null,e?m(t,v):m(t,g),tr&&r("95"),qn.rethrowCaughtError()}function S(e){if(e[ar])return e[ar];for(var t=[];!e[ar];){if(t.push(e),!e.parentNode)return null;e=e.parentNode}var n=void 0,r=e[ar];if(5===r.tag||6===r.tag)return r;for(;e&&(r=e[ar]);e=t.pop())n=r;return n}function _(e){if(5===e.tag||6===e.tag)return e.stateNode;r("33")}function O(e){return e[ir]||null}function x(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function k(e,t,n){for(var r=[];e;)r.push(e),e=x(e);for(e=r.length;0<e--;)t(r[e],"captured",n);for(e=0;e<r.length;e++)t(r[e],"bubbled",n)}function P(e,t,n){(t=w(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=y(n._dispatchListeners,t),n._dispatchInstances=y(n._dispatchInstances,e))}function I(e){e&&e.dispatchConfig.phasedRegistrationNames&&k(e._targetInst,P,e)}function N(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst;t=t?x(t):null,k(t,P,e)}}function M(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=w(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=y(n._dispatchListeners,t),n._dispatchInstances=y(n._dispatchInstances,e))}function j(e){e&&e.dispatchConfig.registrationName&&M(e._targetInst,null,e)}function R(e){m(e,I)}function D(e,t,n,r){if(n&&r)e:{for(var o=n,a=r,i=0,l=o;l;l=x(l))i++;l=0;for(var u=a;u;u=x(u))l++;for(;0<i-l;)o=x(o),i--;for(;0<l-i;)a=x(a),l--;for(;i--;){if(o===a||o===a.alternate)break e;o=x(o),a=x(a)}o=null}else o=null;for(a=o,o=[];n&&n!==a&&(null===(i=n.alternate)||i!==a);)o.push(n),n=x(n);for(n=[];r&&r!==a&&(null===(i=r.alternate)||i!==a);)n.push(r),r=x(r);for(r=0;r<o.length;r++)M(o[r],"bubbled",e);for(e=n.length;0<e--;)M(n[e],"captured",t)}function A(){return!sr&&wn.canUseDOM&&(sr="textContent"in document.documentElement?"textContent":"innerText"),sr}function L(){if(cr._fallbackText)return cr._fallbackText;var e,t,n=cr._startText,r=n.length,o=U(),a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return cr._fallbackText=o.slice(e,1<t?1-t:void 0),cr._fallbackText}function U(){return"value"in cr._root?cr._root.value:cr._root[A()]}function F(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):"target"===o?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?En.thatReturnsTrue:En.thatReturnsFalse,this.isPropagationStopped=En.thatReturnsFalse,this}function H(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function B(e){e instanceof this||r("223"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function z(e){e.eventPool=[],e.getPooled=H,e.release=B}function V(e,t,n,r){return F.call(this,e,t,n,r)}function q(e,t,n,r){return F.call(this,e,t,n,r)}function W(e,t){switch(e){case"topKeyUp":return-1!==pr.indexOf(t.keyCode);case"topKeyDown":return 229!==t.keyCode;case"topKeyPress":case"topMouseDown":case"topBlur":return!0;default:return!1}}function K(e){return e=e.detail,"object"===(void 0===e?"undefined":vn(e))&&"data"in e?e.data:null}function G(e,t){switch(e){case"topCompositionEnd":return K(t);case"topKeyPress":return 32!==t.which?null:(Tr=!0,Cr);case"topTextInput":return e=t.data,e===Cr&&Tr?null:e;default:return null}}function Y(e,t){if(Sr)return"topCompositionEnd"===e||!hr&&W(e,t)?(e=L(),cr._root=null,cr._startText=null,cr._fallbackText=null,Sr=!1,e):null;switch(e){case"topPaste":return null;case"topKeyPress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"topCompositionEnd":return wr?null:t.data;default:return null}}function Q(e){if(e=Jn(e)){Or&&"function"==typeof Or.restoreControlledState||r("194");var t=Xn(e.stateNode);Or.restoreControlledState(e.stateNode,e.type,t)}}function Z(e){xr?kr?kr.push(e):kr=[e]:xr=e}function $(){if(xr){var e=xr,t=kr;if(kr=xr=null,Q(e),t)for(e=0;e<t.length;e++)Q(t[e])}}function X(e,t){return e(t)}function J(e,t){if(Nr)return X(e,t);Nr=!0;try{return X(e,t)}finally{Nr=!1,$()}}function ee(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Mr[e.type]:"textarea"===t}function te(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ne(e,t){if(!wn.canUseDOM||t&&!("addEventListener"in document))return!1;t="on"+e;var n=t in document;return n||(n=document.createElement("div"),n.setAttribute(t,"return;"),n="function"==typeof n[t]),!n&&vr&&"wheel"===e&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}function re(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function oe(e){var t=re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"function"==typeof n.get&&"function"==typeof n.set)return Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:!0,get:function(){return n.get.call(this)},set:function(e){r=""+e,n.set.call(this,e)}}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}function ae(e){e._valueTracker||(e._valueTracker=oe(e))}function ie(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=re(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function le(e,t,n){return e=F.getPooled(jr.change,e,t,n),e.type="change",Z(n),R(e),e}function ue(e){E(e),T(!1)}function se(e){if(ie(_(e)))return e}function ce(e,t){if("topChange"===e)return t}function fe(){Rr&&(Rr.detachEvent("onpropertychange",de),Dr=Rr=null)}function de(e){"value"===e.propertyName&&se(Dr)&&(e=le(Dr,e,te(e)),J(ue,e))}function pe(e,t,n){"topFocus"===e?(fe(),Rr=t,Dr=n,Rr.attachEvent("onpropertychange",de)):"topBlur"===e&&fe()}function he(e){if("topSelectionChange"===e||"topKeyUp"===e||"topKeyDown"===e)return se(Dr)}function ye(e,t){if("topClick"===e)return se(t)}function me(e,t){if("topInput"===e||"topChange"===e)return se(t)}function be(e,t,n,r){return F.call(this,e,t,n,r)}function ve(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Ur[e])&&!!t[e]}function ge(){return ve}function we(e,t,n,r){return F.call(this,e,t,n,r)}function Ce(e){return e=e.type,"string"==typeof e?e:"function"==typeof e?e.displayName||e.name:null}function Ee(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(t=t.return,0!=(2&t.effectTag))return 1}return 3===t.tag?2:3}function Te(e){return!!(e=e._reactInternalFiber)&&2===Ee(e)}function Se(e){2!==Ee(e)&&r("188")}function _e(e){var t=e.alternate;if(!t)return t=Ee(e),3===t&&r("188"),1===t?null:e;for(var n=e,o=t;;){var a=n.return,i=a?a.alternate:null;if(!a||!i)break;if(a.child===i.child){for(var l=a.child;l;){if(l===n)return Se(a),e;if(l===o)return Se(a),t;l=l.sibling}r("188")}if(n.return!==o.return)n=a,o=i;else{l=!1;for(var u=a.child;u;){if(u===n){l=!0,n=a,o=i;break}if(u===o){l=!0,o=a,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,o=a;break}if(u===o){l=!0,o=i,n=a;break}u=u.sibling}l||r("189")}}n.alternate!==o&&r("190")}return 3!==n.tag&&r("188"),n.stateNode.current===n?e:t}function Oe(e){if(!(e=_e(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function xe(e){if(!(e=_e(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child&&4!==t.tag)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ke(e){var t=e.targetInst;do{if(!t){e.ancestors.push(t);break}var n;for(n=t;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;e.ancestors.push(t),t=S(n)}while(t);for(n=0;n<e.ancestors.length;n++)t=e.ancestors[n],qr(e.topLevelType,t,e.nativeEvent,te(e.nativeEvent))}function Pe(e){Vr=!!e}function Ie(e,t,n){return n?Tn.listen(n,t,Me.bind(null,e)):null}function Ne(e,t,n){return n?Tn.capture(n,t,Me.bind(null,e)):null}function Me(e,t){if(Vr){var n=te(t);if(n=S(n),null===n||"number"!=typeof n.tag||2===Ee(n)||(n=null),zr.length){var r=zr.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{J(ke,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>zr.length&&zr.push(e)}}}function je(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function Re(e){if(Gr[e])return Gr[e];if(!Kr[e])return e;var t,n=Kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Yr)return Gr[e]=n[t];return""}function De(e){return Object.prototype.hasOwnProperty.call(e,Xr)||(e[Xr]=$r++,Zr[e[Xr]]={}),Zr[e[Xr]]}function Ae(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Le(e,t){var n=Ae(e);e=0;for(var r;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ae(n)}}function Ue(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)}function Fe(e,t){if(oo||null==to||to!==Sn())return null;var n=to;return"selectionStart"in n&&Ue(n)?n={start:n.selectionStart,end:n.selectionEnd}:window.getSelection?(n=window.getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}):n=void 0,ro&&_n(ro,n)?null:(ro=n,e=F.getPooled(eo.select,no,e,t),e.type="select",e.target=to,R(e),e)}function He(e,t,n,r){return F.call(this,e,t,n,r)}function Be(e,t,n,r){return F.call(this,e,t,n,r)}function ze(e,t,n,r){return F.call(this,e,t,n,r)}function Ve(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,32<=e||13===e?e:0}function qe(e,t,n,r){return F.call(this,e,t,n,r)}function We(e,t,n,r){return F.call(this,e,t,n,r)}function Ke(e,t,n,r){return F.call(this,e,t,n,r)}function Ge(e,t,n,r){return F.call(this,e,t,n,r)}function Ye(e,t,n,r){return F.call(this,e,t,n,r)}function Qe(e){0>po||(e.current=fo[po],fo[po]=null,po--)}function Ze(e,t){po++,fo[po]=e.current,e.current=t}function $e(e){return Je(e)?wo:vo.current}function Xe(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return 2===e.tag&&null!=e.type.childContextTypes}function et(e){Je(e)&&(Qe(go,e),Qe(vo,e))}function tt(e,t,n){null!=vo.cursor&&r("168"),Ze(vo,t,e),Ze(go,n,e)}function nt(e,t){var n=e.stateNode,o=e.type.childContextTypes;if("function"!=typeof n.getChildContext)return t;n=n.getChildContext();for(var a in n)a in o||r("108",Ce(e)||"Unknown",a);return Cn({},t,n)}function rt(e){if(!Je(e))return!1;var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||kn,wo=vo.current,Ze(vo,t,e),Ze(go,go.current,e),!0}function ot(e,t){var n=e.stateNode;if(n||r("169"),t){var o=nt(e,wo);n.__reactInternalMemoizedMergedChildContext=o,Qe(go,e),Qe(vo,e),Ze(vo,o,e)}else Qe(go,e);Ze(go,t,e)}function at(e,t,n){this.tag=e,this.key=t,this.stateNode=this.type=null,this.sibling=this.child=this.return=null,this.index=0,this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null,this.internalContextTag=n,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.expirationTime=0,this.alternate=null}function it(e,t,n){var r=e.alternate;return null===r?(r=new at(e.tag,e.key,e.internalContextTag),r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.expirationTime=n,r.pendingProps=t,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lt(e,t,n){var o=void 0,a=e.type,i=e.key;return"function"==typeof a?(o=a.prototype&&a.prototype.isReactComponent?new at(2,i,t):new at(0,i,t),o.type=a,o.pendingProps=e.props):"string"==typeof a?(o=new at(5,i,t),o.type=a,o.pendingProps=e.props):"object"===(void 0===a?"undefined":vn(a))&&null!==a&&"number"==typeof a.tag?(o=a,o.pendingProps=e.props):r("130",null==a?a:void 0===a?"undefined":vn(a),""),o.expirationTime=n,o}function ut(e,t,n,r){return t=new at(10,r,t),t.pendingProps=e,t.expirationTime=n,t}function st(e,t,n){return t=new at(6,null,t),t.pendingProps=e,t.expirationTime=n,t}function ct(e,t,n){return t=new at(7,e.key,t),t.type=e.handler,t.pendingProps=e,t.expirationTime=n,t}function ft(e,t,n){return e=new at(9,null,t),e.expirationTime=n,e}function dt(e,t,n){return t=new at(4,e.key,t),t.pendingProps=e.children||[],t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pt(e){return function(t){try{return e(t)}catch(e){}}}function ht(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Co=pt(function(e){return t.onCommitFiberRoot(n,e)}),Eo=pt(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}return!0}function yt(e){"function"==typeof Co&&Co(e)}function mt(e){"function"==typeof Eo&&Eo(e)}function bt(e){return{baseState:e,expirationTime:0,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1}}function vt(e,t){null===e.last?e.first=e.last=t:(e.last.next=t,e.last=t),(0===e.expirationTime||e.expirationTime>t.expirationTime)&&(e.expirationTime=t.expirationTime)}function gt(e,t){var n=e.alternate,r=e.updateQueue;null===r&&(r=e.updateQueue=bt(null)),null!==n?null===(e=n.updateQueue)&&(e=n.updateQueue=bt(null)):e=null,e=e!==r?e:null,null===e?vt(r,t):null===r.last||null===e.last?(vt(r,t),vt(e,t)):(vt(r,t),e.last=t)}function wt(e,t,n,r){return e=e.partialState,"function"==typeof e?e.call(t,n,r):e}function Ct(e,t,n,r,o,a){null!==e&&e.updateQueue===n&&(n=t.updateQueue={baseState:n.baseState,expirationTime:n.expirationTime,first:n.first,last:n.last,isInitialized:n.isInitialized,callbackList:null,hasForceUpdate:!1}),n.expirationTime=0,n.isInitialized?e=n.baseState:(e=n.baseState=t.memoizedState,n.isInitialized=!0);for(var i=!0,l=n.first,u=!1;null!==l;){var s=l.expirationTime;if(s>a){var c=n.expirationTime;(0===c||c>s)&&(n.expirationTime=s),u||(u=!0,n.baseState=e)}else u||(n.first=l.next,null===n.first&&(n.last=null)),l.isReplace?(e=wt(l,r,e,o),i=!0):(s=wt(l,r,e,o))&&(e=i?Cn({},e,s):Cn(e,s),i=!1),l.isForced&&(n.hasForceUpdate=!0),null!==l.callback&&(s=n.callbackList,null===s&&(s=n.callbackList=[]),s.push(l));l=l.next}return null!==n.callbackList?t.effectTag|=32:null!==n.first||n.hasForceUpdate||(t.updateQueue=null),u||(n.baseState=e),e}function Et(e,t){var n=e.callbackList;if(null!==n)for(e.callbackList=null,e=0;e<n.length;e++){var o=n[e],a=o.callback;o.callback=null,"function"!=typeof a&&r("191",a),a.call(t)}}function Tt(e,t,n,o){function a(e,t){t.updater=i,e.stateNode=t,t._reactInternalFiber=e}var i={isMounted:Te,enqueueSetState:function(n,r,o){n=n._reactInternalFiber,o=void 0===o?null:o;var a=t(n);gt(n,{expirationTime:a,partialState:r,callback:o,isReplace:!1,isForced:!1,nextCallback:null,next:null}),e(n,a)},enqueueReplaceState:function(n,r,o){n=n._reactInternalFiber,o=void 0===o?null:o;var a=t(n);gt(n,{expirationTime:a,partialState:r,callback:o,isReplace:!0,isForced:!1,nextCallback:null,next:null}),e(n,a)},enqueueForceUpdate:function(n,r){n=n._reactInternalFiber,r=void 0===r?null:r;var o=t(n);gt(n,{expirationTime:o,partialState:null,callback:r,isReplace:!1,isForced:!0,nextCallback:null,next:null}),e(n,o)}};return{adoptClassInstance:a,constructClassInstance:function(e,t){var n=e.type,r=$e(e),o=2===e.tag&&null!=e.type.contextTypes,i=o?Xe(e,r):kn;return t=new n(t,i),a(e,t),o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t},mountClassInstance:function(e,t){var n=e.alternate,o=e.stateNode,a=o.state||null,l=e.pendingProps;l||r("158");var u=$e(e);o.props=l,o.state=e.memoizedState=a,o.refs=kn,o.context=Xe(e,u),null!=e.type&&null!=e.type.prototype&&!0===e.type.prototype.unstable_isAsyncReactComponent&&(e.internalContextTag|=1),"function"==typeof o.componentWillMount&&(a=o.state,o.componentWillMount(),a!==o.state&&i.enqueueReplaceState(o,o.state,null),null!==(a=e.updateQueue)&&(o.state=Ct(n,e,a,o,l,t))),"function"==typeof o.componentDidMount&&(e.effectTag|=4)},updateClassInstance:function(e,t,a){var l=t.stateNode;l.props=t.memoizedProps,l.state=t.memoizedState;var u=t.memoizedProps,s=t.pendingProps;s||null==(s=u)&&r("159");var c=l.context,f=$e(t);if(f=Xe(t,f),"function"!=typeof l.componentWillReceiveProps||u===s&&c===f||(c=l.state,l.componentWillReceiveProps(s,f),l.state!==c&&i.enqueueReplaceState(l,l.state,null)),c=t.memoizedState,a=null!==t.updateQueue?Ct(e,t,t.updateQueue,l,s,a):c,!(u!==s||c!==a||go.current||null!==t.updateQueue&&t.updateQueue.hasForceUpdate))return"function"!=typeof l.componentDidUpdate||u===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),!1;var d=s;if(null===u||null!==t.updateQueue&&t.updateQueue.hasForceUpdate)d=!0;else{var p=t.stateNode,h=t.type;d="function"==typeof p.shouldComponentUpdate?p.shouldComponentUpdate(d,a,f):!h.prototype||!h.prototype.isPureReactComponent||(!_n(u,d)||!_n(c,a))}return d?("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(s,a,f),"function"==typeof l.componentDidUpdate&&(t.effectTag|=4)):("function"!=typeof l.componentDidUpdate||u===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),n(t,s),o(t,a)),l.props=s,l.state=a,l.context=f,d}}}function St(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:To,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function _t(e){return null===e||void 0===e?null:(e=_o&&e[_o]||e["@@iterator"],"function"==typeof e?e:null)}function Ot(e,t){var n=t.ref;if(null!==n&&"function"!=typeof n){if(t._owner){t=t._owner;var o=void 0;t&&(2!==t.tag&&r("110"),o=t.stateNode),o||r("147",n);var a=""+n;return null!==e&&null!==e.ref&&e.ref._stringRef===a?e.ref:(e=function(e){var t=o.refs===kn?o.refs={}:o.refs;null===e?delete t[a]:t[a]=e},e._stringRef=a,e)}"string"!=typeof n&&r("148"),t._owner||r("149",n)}return n}function xt(e,t){"textarea"!==e.type&&r("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function kt(e,t){function n(n,r){if(t){if(!e){if(null===r.alternate)return;r=r.alternate}var o=n.lastEffect;null!==o?(o.nextEffect=r,n.lastEffect=r):n.firstEffect=n.lastEffect=r,r.nextEffect=null,r.effectTag=8}}function o(e,r){if(!t)return null;for(;null!==r;)n(e,r),r=r.sibling;return null}function a(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(t,n,r){return e?(t=it(t,n,r),t.index=0,t.sibling=null,t):(t.expirationTime=r,t.effectTag=0,t.index=0,t.sibling=null,t.pendingProps=n,t)}function l(e,n,r){return e.index=r,t?null!==(r=e.alternate)?(r=r.index,r<n?(e.effectTag=2,n):r):(e.effectTag=2,n):n}function u(e){return t&&null===e.alternate&&(e.effectTag=2),e}function s(e,t,n,r){return null===t||6!==t.tag?(t=st(n,e.internalContextTag,r),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function c(e,t,n,r){return null!==t&&t.type===n.type?(r=i(t,n.props,r),r.ref=Ot(t,n),r.return=e,r):(r=lt(n,e.internalContextTag,r),r.ref=Ot(t,n),r.return=e,r)}function f(e,t,n,r){return null===t||7!==t.tag?(t=ct(n,e.internalContextTag,r),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function d(e,t,n,r){return null===t||9!==t.tag?(t=ft(n,e.internalContextTag,r),t.type=n.value,t.return=e,t):(t=i(t,null,r),t.type=n.value,t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=dt(n,e.internalContextTag,r),t.return=e,t):(t=i(t,n.children||[],r),t.return=e,t)}function h(e,t,n,r,o){return null===t||10!==t.tag?(t=ut(n,e.internalContextTag,r,o),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function y(e,t,n){if("string"==typeof t||"number"==typeof t)return t=st(""+t,e.internalContextTag,n),t.return=e,t;if("object"===(void 0===t?"undefined":vn(t))&&null!==t){switch(t.$$typeof){case ho:return t.type===bo?(t=ut(t.props.children,e.internalContextTag,n,t.key),t.return=e,t):(n=lt(t,e.internalContextTag,n),n.ref=Ot(null,t),n.return=e,n);case yo:return t=ct(t,e.internalContextTag,n),t.return=e,t;case mo:return n=ft(t,e.internalContextTag,n),n.type=t.value,n.return=e,n;case To:return t=dt(t,e.internalContextTag,n),t.return=e,t}if(So(t)||_t(t))return t=ut(t,e.internalContextTag,n,null),t.return=e,t;xt(e,t)}return null}function m(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===(void 0===n?"undefined":vn(n))&&null!==n){switch(n.$$typeof){case ho:return n.key===o?n.type===bo?h(e,t,n.props.children,r,o):c(e,t,n,r):null;case yo:return n.key===o?f(e,t,n,r):null;case mo:return null===o?d(e,t,n,r):null;case To:return n.key===o?p(e,t,n,r):null}if(So(n)||_t(n))return null!==o?null:h(e,t,n,r,null);xt(e,n)}return null}function b(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return e=e.get(n)||null,s(t,e,""+r,o);if("object"===(void 0===r?"undefined":vn(r))&&null!==r){switch(r.$$typeof){case ho:return e=e.get(null===r.key?n:r.key)||null,r.type===bo?h(t,e,r.props.children,o,r.key):c(t,e,r,o);case yo:return e=e.get(null===r.key?n:r.key)||null,f(t,e,r,o);case mo:return e=e.get(n)||null,d(t,e,r,o);case To:return e=e.get(null===r.key?n:r.key)||null,p(t,e,r,o)}if(So(r)||_t(r))return e=e.get(n)||null,h(t,e,r,o,null);xt(t,r)}return null}function v(e,r,i,u){for(var s=null,c=null,f=r,d=r=0,p=null;null!==f&&d<i.length;d++){f.index>d?(p=f,f=null):p=f.sibling;var h=m(e,f,i[d],u);if(null===h){null===f&&(f=p);break}t&&f&&null===h.alternate&&n(e,f),r=l(h,r,d),null===c?s=h:c.sibling=h,c=h,f=p}if(d===i.length)return o(e,f),s;if(null===f){for(;d<i.length;d++)(f=y(e,i[d],u))&&(r=l(f,r,d),null===c?s=f:c.sibling=f,c=f);return s}for(f=a(e,f);d<i.length;d++)(p=b(f,e,d,i[d],u))&&(t&&null!==p.alternate&&f.delete(null===p.key?d:p.key),r=l(p,r,d),null===c?s=p:c.sibling=p,c=p);return t&&f.forEach(function(t){return n(e,t)}),s}function g(e,i,u,s){var c=_t(u);"function"!=typeof c&&r("150"),null==(u=c.call(u))&&r("151");for(var f=c=null,d=i,p=i=0,h=null,v=u.next();null!==d&&!v.done;p++,v=u.next()){d.index>p?(h=d,d=null):h=d.sibling;var g=m(e,d,v.value,s);if(null===g){d||(d=h);break}t&&d&&null===g.alternate&&n(e,d),i=l(g,i,p),null===f?c=g:f.sibling=g,f=g,d=h}if(v.done)return o(e,d),c;if(null===d){for(;!v.done;p++,v=u.next())null!==(v=y(e,v.value,s))&&(i=l(v,i,p),null===f?c=v:f.sibling=v,f=v);return c}for(d=a(e,d);!v.done;p++,v=u.next())null!==(v=b(d,e,p,v.value,s))&&(t&&null!==v.alternate&&d.delete(null===v.key?p:v.key),i=l(v,i,p),null===f?c=v:f.sibling=v,f=v);return t&&d.forEach(function(t){return n(e,t)}),c}return function(e,t,a,l){var s="object"===(void 0===a?"undefined":vn(a))&&null!==a;if(s)switch(a.$$typeof){case ho:e:{var c=a.key;for(s=t;null!==s;){if(s.key===c){if(10===s.tag?a.type===bo:s.type===a.type){o(e,s.sibling),t=i(s,a.type===bo?a.props.children:a.props,l),t.ref=Ot(s,a),t.return=e,e=t;break e}o(e,s);break}n(e,s),s=s.sibling}a.type===bo?(a=ut(a.props.children,e.internalContextTag,l,a.key),a.return=e,e=a):(l=lt(a,e.internalContextTag,l),l.ref=Ot(t,a),l.return=e,e=l)}return u(e);case yo:e:{for(s=a.key;null!==t;){if(t.key===s){if(7===t.tag){o(e,t.sibling),a=i(t,a,l),a.return=e,e=a;break e}o(e,t);break}n(e,t),t=t.sibling}a=ct(a,e.internalContextTag,l),a.return=e,e=a}return u(e);case mo:e:{if(null!==t){if(9===t.tag){o(e,t.sibling),t=i(t,null,l),t.type=a.value,t.return=e,e=t;break e}o(e,t)}t=ft(a,e.internalContextTag,l),t.type=a.value,t.return=e,e=t}return u(e);case To:e:{for(s=a.key;null!==t;){if(t.key===s){if(4===t.tag&&t.stateNode.containerInfo===a.containerInfo&&t.stateNode.implementation===a.implementation){o(e,t.sibling),a=i(t,a.children||[],l),a.return=e,e=a;break e}o(e,t);break}n(e,t),t=t.sibling}a=dt(a,e.internalContextTag,l),a.return=e,e=a}return u(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==t&&6===t.tag?(o(e,t.sibling),a=i(t,a,l)):(o(e,t),a=st(a,e.internalContextTag,l)),a.return=e,e=a,u(e);if(So(a))return v(e,t,a,l);if(_t(a))return g(e,t,a,l);if(s&&xt(e,a),void 0===a)switch(e.tag){case 2:case 1:a=e.type,r("152",a.displayName||a.name||"Component")}return o(e,t)}}function Pt(e,t,n,o,a){function i(e,t,n){l(e,t,n,t.expirationTime)}function l(e,t,n,r){t.child=null===e?ko(t,t.child,n,r):e.child===t.child?Oo(t,t.child,n,r):xo(t,t.child,n,r)}function u(e,t){var n=t.ref;null===n||e&&e.ref===n||(t.effectTag|=128)}function s(e,t,n,r){if(u(e,t),!n)return r&&ot(t,!1),f(e,t);n=t.stateNode,Br.current=t;var o=n.render();return t.effectTag|=1,i(e,t,o),t.memoizedState=n.state,t.memoizedProps=n.props,r&&ot(t,!0),t.child}function c(e){var t=e.stateNode;t.pendingContext?tt(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tt(e,t.context,!1),b(e,t.containerInfo)}function f(e,t){if(null!==e&&t.child!==e.child&&r("153"),null!==t.child){e=t.child;var n=it(e,e.pendingProps,e.expirationTime);for(t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,n=n.sibling=it(e,e.pendingProps,e.expirationTime),n.return=t;n.sibling=null}return t.child}function d(e,t){switch(t.tag){case 3:c(t);break;case 2:rt(t);break;case 4:b(t,t.stateNode.containerInfo)}return null}var p=e.shouldSetTextContent,h=e.useSyncScheduling,y=e.shouldDeprioritizeSubtree,m=t.pushHostContext,b=t.pushHostContainer,v=n.enterHydrationState,g=n.resetHydrationState,w=n.tryToClaimNextHydratableInstance;e=Tt(o,a,function(e,t){e.memoizedProps=t},function(e,t){e.memoizedState=t});var C=e.adoptClassInstance,E=e.constructClassInstance,T=e.mountClassInstance,S=e.updateClassInstance;return{beginWork:function(e,t,n){if(0===t.expirationTime||t.expirationTime>n)return d(e,t);switch(t.tag){case 0:null!==e&&r("155");var o=t.type,a=t.pendingProps,l=$e(t);return l=Xe(t,l),o=o(a,l),t.effectTag|=1,"object"===(void 0===o?"undefined":vn(o))&&null!==o&&"function"==typeof o.render?(t.tag=2,a=rt(t),C(t,o),T(t,n),t=s(e,t,!0,a)):(t.tag=1,i(e,t,o),t.memoizedProps=a,t=t.child),t;case 1:e:{if(a=t.type,n=t.pendingProps,o=t.memoizedProps,go.current)null===n&&(n=o);else if(null===n||o===n){t=f(e,t);break e}o=$e(t),o=Xe(t,o),a=a(n,o),t.effectTag|=1,i(e,t,a),t.memoizedProps=n,t=t.child}return t;case 2:return a=rt(t),o=void 0,null===e?t.stateNode?r("153"):(E(t,t.pendingProps),T(t,n),o=!0):o=S(e,t,n),s(e,t,o,a);case 3:return c(t),a=t.updateQueue,null!==a?(o=t.memoizedState,a=Ct(e,t,a,null,null,n),o===a?(g(),t=f(e,t)):(o=a.element,l=t.stateNode,(null===e||null===e.child)&&l.hydrate&&v(t)?(t.effectTag|=2,t.child=ko(t,t.child,o,n)):(g(),i(e,t,o)),t.memoizedState=a,t=t.child)):(g(),t=f(e,t)),t;case 5:m(t),null===e&&w(t),a=t.type;var _=t.memoizedProps;return o=t.pendingProps,null===o&&null===(o=_)&&r("154"),l=null!==e?e.memoizedProps:null,go.current||null!==o&&_!==o?(_=o.children,p(a,o)?_=null:l&&p(a,l)&&(t.effectTag|=16),u(e,t),2147483647!==n&&!h&&y(a,o)?(t.expirationTime=2147483647,t=null):(i(e,t,_),t.memoizedProps=o,t=t.child)):t=f(e,t),t;case 6:return null===e&&w(t),e=t.pendingProps,null===e&&(e=t.memoizedProps),t.memoizedProps=e,null;case 8:t.tag=7;case 7:return a=t.pendingProps,go.current?null===a&&null===(a=e&&e.memoizedProps)&&r("154"):null!==a&&t.memoizedProps!==a||(a=t.memoizedProps),o=a.children,t.stateNode=null===e?ko(t,t.stateNode,o,n):e.child===t.child?Oo(t,t.stateNode,o,n):xo(t,t.stateNode,o,n),t.memoizedProps=a,t.stateNode;case 9:return null;case 4:e:{if(b(t,t.stateNode.containerInfo),a=t.pendingProps,go.current)null===a&&null==(a=e&&e.memoizedProps)&&r("154");else if(null===a||t.memoizedProps===a){t=f(e,t);break e}null===e?t.child=xo(t,t.child,a,n):i(e,t,a),t.memoizedProps=a,t=t.child}return t;case 10:e:{if(n=t.pendingProps,go.current)null===n&&(n=t.memoizedProps);else if(null===n||t.memoizedProps===n){t=f(e,t);break e}i(e,t,n),t.memoizedProps=n,t=t.child}return t;default:r("156")}},beginFailedWork:function(e,t,n){switch(t.tag){case 2:rt(t);break;case 3:c(t);break;default:r("157")}return t.effectTag|=64,null===e?t.child=null:t.child!==e.child&&(t.child=e.child),0===t.expirationTime||t.expirationTime>n?d(e,t):(t.firstEffect=null,t.lastEffect=null,l(e,t,null,n),2===t.tag&&(e=t.stateNode,t.memoizedProps=e.props,t.memoizedState=e.state),t.child)}}}function It(e,t,n){function o(e){e.effectTag|=4}var a=e.createInstance,i=e.createTextInstance,l=e.appendInitialChild,u=e.finalizeInitialChildren,s=e.prepareUpdate,c=e.persistence,f=t.getRootHostContainer,d=t.popHostContext,p=t.getHostContext,h=t.popHostContainer,y=n.prepareToHydrateHostInstance,m=n.prepareToHydrateHostTextInstance,b=n.popHydrationState,v=void 0,g=void 0,w=void 0;return e.mutation?(v=function(){},g=function(e,t,n){(t.updateQueue=n)&&o(t)},w=function(e,t,n,r){n!==r&&o(t)}):r(c?"235":"236"),{completeWork:function(e,t,n){var c=t.pendingProps;switch(null===c?c=t.memoizedProps:2147483647===t.expirationTime&&2147483647!==n||(t.pendingProps=null),t.tag){case 1:return null;case 2:return et(t),null;case 3:return h(t),Qe(go,t),Qe(vo,t),c=t.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==e&&null!==e.child||(b(t),t.effectTag&=-3),v(t),null;case 5:d(t),n=f();var C=t.type;if(null!==e&&null!=t.stateNode){var E=e.memoizedProps,T=t.stateNode,S=p();T=s(T,C,E,c,n,S),g(e,t,T,C,E,c,n),e.ref!==t.ref&&(t.effectTag|=128)}else{if(!c)return null===t.stateNode&&r("166"),null;if(e=p(),b(t))y(t,n,e)&&o(t);else{e=a(C,c,n,e,t);e:for(E=t.child;null!==E;){if(5===E.tag||6===E.tag)l(e,E.stateNode);else if(4!==E.tag&&null!==E.child){E.child.return=E,E=E.child;continue}if(E===t)break;for(;null===E.sibling;){if(null===E.return||E.return===t)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}u(e,C,c,n)&&o(t),t.stateNode=e}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)w(e,t,e.memoizedProps,c);else{if("string"!=typeof c)return null===t.stateNode&&r("166"),null;e=f(),n=p(),b(t)?m(t)&&o(t):t.stateNode=i(c,e,n,t)}return null;case 7:(c=t.memoizedProps)||r("165"),t.tag=8,C=[];e:for((E=t.stateNode)&&(E.return=t);null!==E;){if(5===E.tag||6===E.tag||4===E.tag)r("247");else if(9===E.tag)C.push(E.type);else if(null!==E.child){E.child.return=E,E=E.child;continue}for(;null===E.sibling;){if(null===E.return||E.return===t)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}return E=c.handler,c=E(c.props,C),t.child=Oo(t,null!==e?e.child:null,c,n),t.child;case 8:return t.tag=7,null;case 9:case 10:return null;case 4:return h(t),v(t),null;case 0:r("167");default:r("156")}}}}function Nt(e,t){function n(e){var n=e.ref;if(null!==n)try{n(null)}catch(n){t(e,n)}}function o(e){switch("function"==typeof mt&&mt(e),e.tag){case 2:n(e);var r=e.stateNode;if("function"==typeof r.componentWillUnmount)try{r.props=e.memoizedProps,r.state=e.memoizedState,r.componentWillUnmount()}catch(n){t(e,n)}break;case 5:n(e);break;case 7:a(e.stateNode);break;case 4:s&&l(e)}}function a(e){for(var t=e;;)if(o(t),null===t.child||s&&4===t.tag){if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}else t.child.return=t,t=t.child}function i(e){return 5===e.tag||3===e.tag||4===e.tag}function l(e){for(var t=e,n=!1,i=void 0,l=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&r("160"),n.tag){case 5:i=n.stateNode,l=!1;break e;case 3:case 4:i=n.stateNode.containerInfo,l=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag)a(t),l?g(i,t.stateNode):v(i,t.stateNode);else if(4===t.tag?i=t.stateNode.containerInfo:o(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return,4===t.tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}var u=e.getPublicInstance,s=e.mutation;e=e.persistence,s||r(e?"235":"236");var c=s.commitMount,f=s.commitUpdate,d=s.resetTextContent,p=s.commitTextUpdate,h=s.appendChild,y=s.appendChildToContainer,m=s.insertBefore,b=s.insertInContainerBefore,v=s.removeChild,g=s.removeChildFromContainer;return{commitResetTextContent:function(e){d(e.stateNode)},commitPlacement:function(e){e:{for(var t=e.return;null!==t;){if(i(t)){var n=t;break e}t=t.return}r("160"),n=void 0}var o=t=void 0;switch(n.tag){case 5:t=n.stateNode,o=!1;break;case 3:case 4:t=n.stateNode.containerInfo,o=!0;break;default:r("161")}16&n.effectTag&&(d(t),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||i(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var a=e;;){if(5===a.tag||6===a.tag)n?o?b(t,a.stateNode,n):m(t,a.stateNode,n):o?y(t,a.stateNode):h(t,a.stateNode);else if(4!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},commitDeletion:function(e){l(e),e.return=null,e.child=null,e.alternate&&(e.alternate.child=null,e.alternate.return=null)},commitWork:function(e,t){switch(t.tag){case 2:break;case 5:var n=t.stateNode;if(null!=n){var o=t.memoizedProps;e=null!==e?e.memoizedProps:o;var a=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&f(n,i,a,e,o,t)}break;case 6:null===t.stateNode&&r("162"),n=t.memoizedProps,p(t.stateNode,null!==e?e.memoizedProps:n,n);break;case 3:break;default:r("163")}},commitLifeCycles:function(e,t){switch(t.tag){case 2:var n=t.stateNode;if(4&t.effectTag)if(null===e)n.props=t.memoizedProps,n.state=t.memoizedState,n.componentDidMount();else{var o=e.memoizedProps;e=e.memoizedState,n.props=t.memoizedProps,n.state=t.memoizedState,n.componentDidUpdate(o,e)}t=t.updateQueue,null!==t&&Et(t,n);break;case 3:n=t.updateQueue,null!==n&&Et(n,null!==t.child?t.child.stateNode:null);break;case 5:n=t.stateNode,null===e&&4&t.effectTag&&c(n,t.type,t.memoizedProps,t);break;case 6:case 4:break;default:r("163")}},commitAttachRef:function(e){var t=e.ref;if(null!==t){var n=e.stateNode;switch(e.tag){case 5:t(u(n));break;default:t(n)}}},commitDetachRef:function(e){null!==(e=e.ref)&&e(null)}}}function Mt(e){function t(e){return e===Po&&r("174"),e}var n=e.getChildHostContext,o=e.getRootHostContext,a={current:Po},i={current:Po},l={current:Po};return{getHostContext:function(){return t(a.current)},getRootHostContainer:function(){return t(l.current)},popHostContainer:function(e){Qe(a,e),Qe(i,e),Qe(l,e)},popHostContext:function(e){i.current===e&&(Qe(a,e),Qe(i,e))},pushHostContainer:function(e,t){Ze(l,t,e),t=o(t),Ze(i,e,e),Ze(a,t,e)},pushHostContext:function(e){var r=t(l.current),o=t(a.current);r=n(o,e.type,r),o!==r&&(Ze(i,e,e),Ze(a,r,e))},resetHostContainer:function(){a.current=Po,l.current=Po}}}function jt(e){function t(e,t){var n=new at(5,null,0);n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function n(e,t){switch(e.tag){case 5:return null!==(t=i(t,e.type,e.pendingProps))&&(e.stateNode=t,!0);case 6:return null!==(t=l(t,e.pendingProps))&&(e.stateNode=t,!0);default:return!1}}function o(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag;)e=e.return;d=e}var a=e.shouldSetTextContent;if(!(e=e.hydration))return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){r("175")},prepareToHydrateHostTextInstance:function(){r("176")},popHydrationState:function(){return!1}};var i=e.canHydrateInstance,l=e.canHydrateTextInstance,u=e.getNextHydratableSibling,s=e.getFirstHydratableChild,c=e.hydrateInstance,f=e.hydrateTextInstance,d=null,p=null,h=!1;return{enterHydrationState:function(e){return p=s(e.stateNode.containerInfo),d=e,h=!0},resetHydrationState:function(){p=d=null,h=!1},tryToClaimNextHydratableInstance:function(e){if(h){var r=p;if(r){if(!n(e,r)){if(!(r=u(r))||!n(e,r))return e.effectTag|=2,h=!1,void(d=e);t(d,p)}d=e,p=s(r)}else e.effectTag|=2,h=!1,d=e}},prepareToHydrateHostInstance:function(e,t,n){return t=c(e.stateNode,e.type,e.memoizedProps,t,n,e),e.updateQueue=t,null!==t},prepareToHydrateHostTextInstance:function(e){return f(e.stateNode,e.memoizedProps,e)},popHydrationState:function(e){if(e!==d)return!1;if(!h)return o(e),h=!0,!1;var n=e.type;if(5!==e.tag||"head"!==n&&"body"!==n&&!a(n,e.memoizedProps))for(n=p;n;)t(e,n),n=u(n);return o(e),p=d?u(e.stateNode):null,!0}}}function Rt(e){function t(e){re=G=!0;var t=e.stateNode;if(t.current===e&&r("177"),t.isReadyForCommit=!1,Br.current=null,1<e.effectTag)if(null!==e.lastEffect){e.lastEffect.nextEffect=e;var n=e.firstEffect}else n=e;else n=e.firstEffect;for(z(),$=n;null!==$;){var o=!1,a=void 0;try{for(;null!==$;){var i=$.effectTag;if(16&i&&M($),128&i){var l=$.alternate;null!==l&&U(l)}switch(-242&i){case 2:j($),$.effectTag&=-3;break;case 6:j($),$.effectTag&=-3,D($.alternate,$);break;case 4:D($.alternate,$);break;case 8:oe=!0,R($),oe=!1}$=$.nextEffect}}catch(e){o=!0,a=e}o&&(null===$&&r("178"),u($,a),null!==$&&($=$.nextEffect))}for(V(),t.current=e,$=n;null!==$;){n=!1,o=void 0;try{for(;null!==$;){var s=$.effectTag;if(36&s&&A($.alternate,$),128&s&&L($),64&s)switch(a=$,i=void 0,null!==X&&(i=X.get(a),X.delete(a),null==i&&null!==a.alternate&&(a=a.alternate,i=X.get(a),X.delete(a))),null==i&&r("184"),a.tag){case 2:a.stateNode.componentDidCatch(i.error,{componentStack:i.componentStack});break;case 3:null===te&&(te=i.error);break;default:r("157")}var c=$.nextEffect;$.nextEffect=null,$=c}}catch(e){n=!0,o=e}n&&(null===$&&r("178"),u($,o),null!==$&&($=$.nextEffect))}return G=re=!1,"function"==typeof yt&&yt(e.stateNode),ee&&(ee.forEach(y),ee=null),null!==te&&(e=te,te=null,E(e)),t=t.current.expirationTime,0===t&&(J=X=null),t}function n(e){for(;;){var t=N(e.alternate,e,Z),n=e.return,r=e.sibling,o=e;if(2147483647===Z||2147483647!==o.expirationTime){if(2!==o.tag&&3!==o.tag)var a=0;else a=o.updateQueue,a=null===a?0:a.expirationTime;for(var i=o.child;null!==i;)0!==i.expirationTime&&(0===a||a>i.expirationTime)&&(a=i.expirationTime),i=i.sibling;o.expirationTime=a}if(null!==t)return t;if(null!==n&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e)),null!==r)return r;if(null===n){e.stateNode.isReadyForCommit=!0;break}e=n}return null}function o(e){var t=P(e.alternate,e,Z);return null===t&&(t=n(e)),Br.current=null,t}function a(e){var t=I(e.alternate,e,Z);return null===t&&(t=n(e)),Br.current=null,t}function i(e){if(null!==X){if(!(0===Z||Z>e))if(Z<=W)for(;null!==Y;)Y=s(Y)?a(Y):o(Y);else for(;null!==Y&&!C();)Y=s(Y)?a(Y):o(Y)}else if(!(0===Z||Z>e))if(Z<=W)for(;null!==Y;)Y=o(Y);else for(;null!==Y&&!C();)Y=o(Y)}function l(e,t){if(G&&r("243"),G=!0,e.isReadyForCommit=!1,e!==Q||t!==Z||null===Y){for(;-1<po;)fo[po]=null,po--;wo=kn,vo.current=kn,go.current=!1,x(),Q=e,Z=t,Y=it(Q.current,null,t)}var n=!1,o=null;try{i(t)}catch(e){n=!0,o=e}for(;n;){if(ne){te=o;break}var l=Y;if(null===l)ne=!0;else{var s=u(l,o);if(null===s&&r("183"),!ne){try{for(n=s,o=t,s=n;null!==l;){switch(l.tag){case 2:et(l);break;case 5:O(l);break;case 3:_(l);break;case 4:_(l)}if(l===s||l.alternate===s)break;l=l.return}Y=a(n),i(o)}catch(e){n=!0,o=e;continue}break}}}return t=te,ne=G=!1,te=null,null!==t&&E(t),e.isReadyForCommit?e.current.alternate:null}function u(e,t){var n=Br.current=null,r=!1,o=!1,a=null;if(3===e.tag)n=e,c(e)&&(ne=!0);else for(var i=e.return;null!==i&&null===n;){if(2===i.tag?"function"==typeof i.stateNode.componentDidCatch&&(r=!0,a=Ce(i),n=i,o=!0):3===i.tag&&(n=i),c(i)){if(oe||null!==ee&&(ee.has(i)||null!==i.alternate&&ee.has(i.alternate)))return null;n=null,o=!1}i=i.return}if(null!==n){null===J&&(J=new Set),J.add(n);var l="";i=e;do{e:switch(i.tag){case 0:case 1:case 2:case 5:var u=i._debugOwner,s=i._debugSource,f=Ce(i),d=null;u&&(d=Ce(u)),u=s,f="\n    in "+(f||"Unknown")+(u?" (at "+u.fileName.replace(/^.*[\\\/]/,"")+":"+u.lineNumber+")":d?" (created by "+d+")":"");break e;default:f=""}l+=f,i=i.return}while(i);i=l,e=Ce(e),null===X&&(X=new Map),t={componentName:e,componentStack:i,error:t,errorBoundary:r?n.stateNode:null,errorBoundaryFound:r,errorBoundaryName:a,willRetry:o},X.set(n,t);try{console.error(t.error)}catch(e){console.error(e)}return re?(null===ee&&(ee=new Set),ee.add(n)):y(n),n}return null===te&&(te=t),null}function s(e){return null!==X&&(X.has(e)||null!==e.alternate&&X.has(e.alternate))}function c(e){return null!==J&&(J.has(e)||null!==e.alternate&&J.has(e.alternate))}function f(){return 20*(1+((m()+100)/20|0))}function d(e){return 0!==K?K:G?re?1:Z:!B||1&e.internalContextTag?f():1}function p(e,t){return h(e,t,!1)}function h(e,t){for(;null!==e;){if((0===e.expirationTime||e.expirationTime>t)&&(e.expirationTime=t),null!==e.alternate&&(0===e.alternate.expirationTime||e.alternate.expirationTime>t)&&(e.alternate.expirationTime=t),null===e.return){if(3!==e.tag)break;var n=e.stateNode;!G&&n===Q&&t<=Z&&(Y=Q=null,Z=0);var o=t;if(ve>be&&r("185"),null===n.nextScheduledRoot)n.remainingExpirationTime=o,null===ie?(ae=ie=n,n.nextScheduledRoot=n):(ie=ie.nextScheduledRoot=n,ie.nextScheduledRoot=ae);else{var a=n.remainingExpirationTime;(0===a||o<a)&&(n.remainingExpirationTime=o)}ue||(ye?me&&w(n,1):1===o?g(1,null):le||(le=!0,H(v)))}e=e.return}}function y(e){h(e,1,!0)}function m(){return W=2+((F()-q)/10|0)}function b(){var e=0,t=null;if(null!==ie)for(var n=ie,o=ae;null!==o;){var a=o.remainingExpirationTime;if(0===a){if((null===n||null===ie)&&r("244"),o===o.nextScheduledRoot){ae=ie=o.nextScheduledRoot=null;break}if(o===ae)ae=a=o.nextScheduledRoot,ie.nextScheduledRoot=a,o.nextScheduledRoot=null;else{if(o===ie){ie=n,ie.nextScheduledRoot=ae,o.nextScheduledRoot=null;break}n.nextScheduledRoot=o.nextScheduledRoot,o.nextScheduledRoot=null}o=n.nextScheduledRoot}else{if((0===e||a<e)&&(e=a,t=o),o===ie)break;n=o,o=o.nextScheduledRoot}}n=se,null!==n&&n===t?ve++:ve=0,se=t,ce=e}function v(e){g(0,e)}function g(e,t){for(he=t,b();null!==se&&0!==ce&&(0===e||ce<=e)&&!fe;)w(se,ce),b();if(null!==he&&(le=!1),null===se||le||(le=!0,H(v)),he=null,fe=!1,ve=0,de)throw e=pe,pe=null,de=!1,e}function w(e,n){if(ue&&r("245"),ue=!0,n<=m()){var o=e.finishedWork;null!==o?(e.finishedWork=null,e.remainingExpirationTime=t(o)):(e.finishedWork=null,null!==(o=l(e,n))&&(e.remainingExpirationTime=t(o)))}else o=e.finishedWork,null!==o?(e.finishedWork=null,e.remainingExpirationTime=t(o)):(e.finishedWork=null,null!==(o=l(e,n))&&(C()?e.finishedWork=o:e.remainingExpirationTime=t(o)));ue=!1}function C(){return!(null===he||he.timeRemaining()>ge)&&(fe=!0)}function E(e){null===se&&r("246"),se.remainingExpirationTime=0,de||(de=!0,pe=e)}var T=Mt(e),S=jt(e),_=T.popHostContainer,O=T.popHostContext,x=T.resetHostContainer,k=Pt(e,T,S,p,d),P=k.beginWork,I=k.beginFailedWork,N=It(e,T,S).completeWork;T=Nt(e,u);var M=T.commitResetTextContent,j=T.commitPlacement,R=T.commitDeletion,D=T.commitWork,A=T.commitLifeCycles,L=T.commitAttachRef,U=T.commitDetachRef,F=e.now,H=e.scheduleDeferredCallback,B=e.useSyncScheduling,z=e.prepareForCommit,V=e.resetAfterCommit,q=F(),W=2,K=0,G=!1,Y=null,Q=null,Z=0,$=null,X=null,J=null,ee=null,te=null,ne=!1,re=!1,oe=!1,ae=null,ie=null,le=!1,ue=!1,se=null,ce=0,fe=!1,de=!1,pe=null,he=null,ye=!1,me=!1,be=1e3,ve=0,ge=1;return{computeAsyncExpiration:f,computeExpirationForFiber:d,scheduleWork:p,batchedUpdates:function(e,t){var n=ye;ye=!0;try{return e(t)}finally{(ye=n)||ue||g(1,null)}},unbatchedUpdates:function(e){if(ye&&!me){me=!0;try{return e()}finally{me=!1}}return e()},flushSync:function(e){var t=ye;ye=!0;try{e:{var n=K;K=1;try{var o=e();break e}finally{K=n}o=void 0}return o}finally{ye=t,ue&&r("187"),g(1,null)}},deferredUpdates:function(e){var t=K;K=f();try{return e()}finally{K=t}}}}function Dt(e){function t(e){return e=Oe(e),null===e?null:e.stateNode}var n=e.getPublicInstance;e=Rt(e);var o=e.computeAsyncExpiration,a=e.computeExpirationForFiber,i=e.scheduleWork;return{createContainer:function(e,t){var n=new at(3,null,0);return e={current:n,containerInfo:e,pendingChildren:null,remainingExpirationTime:0,isReadyForCommit:!1,finishedWork:null,context:null,pendingContext:null,hydrate:t,nextScheduledRoot:null},n.stateNode=e},updateContainer:function(e,t,n,l){var u=t.current;if(n){n=n._reactInternalFiber;var s;e:{for(2===Ee(n)&&2===n.tag||r("170"),s=n;3!==s.tag;){if(Je(s)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}(s=s.return)||r("171")}s=s.stateNode.context}n=Je(n)?nt(n,s):s}else n=kn;null===t.context?t.context=n:t.pendingContext=n,t=l,t=void 0===t?null:t,l=null!=e&&null!=e.type&&null!=e.type.prototype&&!0===e.type.prototype.unstable_isAsyncReactComponent?o():a(u),gt(u,{expirationTime:l,partialState:{element:e},callback:t,isReplace:!1,isForced:!1,nextCallback:null,next:null}),i(u,l)},batchedUpdates:e.batchedUpdates,unbatchedUpdates:e.unbatchedUpdates,deferredUpdates:e.deferredUpdates,flushSync:e.flushSync,getPublicRootInstance:function(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return n(e.child.stateNode);default:return e.child.stateNode}},findHostInstance:t,findHostInstanceWithNoPortals:function(e){return e=xe(e),null===e?null:e.stateNode},injectIntoDevTools:function(e){var n=e.findFiberByHostInstance;return ht(Cn({},e,{findHostInstanceByFiber:function(e){return t(e)},findFiberByHostInstance:function(e){return n?n(e):null}}))}}}function At(e){return!!Go.hasOwnProperty(e)||!Ko.hasOwnProperty(e)&&(Wo.test(e)?Go[e]=!0:(Ko[e]=!0,!1))}function Lt(e,t,n){var r=i(t);if(r&&a(t,n)){var o=r.mutationMethod;o?o(e,n):null==n||r.hasBooleanValue&&!n||r.hasNumericValue&&isNaN(n)||r.hasPositiveNumericValue&&1>n||r.hasOverloadedBooleanValue&&!1===n?Ft(e,t):r.mustUseProperty?e[r.propertyName]=n:(t=r.attributeName,(o=r.attributeNamespace)?e.setAttributeNS(o,t,""+n):r.hasBooleanValue||r.hasOverloadedBooleanValue&&!0===n?e.setAttribute(t,""):e.setAttribute(t,""+n))}else Ut(e,t,a(t,n)?n:null)}function Ut(e,t,n){At(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))}function Ft(e,t){var n=i(t);n?(t=n.mutationMethod)?t(e,void 0):n.mustUseProperty?e[n.propertyName]=!n.hasBooleanValue&&"":e.removeAttribute(n.attributeName):e.removeAttribute(t)}function Ht(e,t){var n=t.value,r=t.checked;return Cn({type:void 0,step:void 0,min:void 0,max:void 0},t,{defaultChecked:void 0,defaultValue:void 0,value:null!=n?n:e._wrapperState.initialValue,checked:null!=r?r:e._wrapperState.initialChecked})}function Bt(e,t){var n=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function zt(e,t){var n=t.checked;null!=n&&Lt(e,"checked",n||!1),n=t.value,null!=n?0===n&&""===e.value?e.value="0":"number"===t.type?(t=parseFloat(e.value)||0,(n!=t||n==t&&e.value!=n)&&(e.value=""+n)):e.value!==""+n&&(e.value=""+n):(null==t.value&&null!=t.defaultValue&&e.defaultValue!==""+t.defaultValue&&(e.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked))}function Vt(e,t){switch(t.type){case"submit":case"reset":break;case"color":case"date":case"datetime":case"datetime-local":case"month":case"time":case"week":e.value="",e.value=e.defaultValue;break;default:e.value=e.value}t=e.name,""!==t&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!e.defaultChecked,""!==t&&(e.name=t)}function qt(e){var t="";return gn.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}function Wt(e,t){return e=Cn({children:void 0},t),(t=qt(t.children))&&(e.children=t),e}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+n,t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function Gt(e,t){var n=t.value;e._wrapperState={initialValue:null!=n?n:t.defaultValue,wasMultiple:!!t.multiple}}function Yt(e,t){return null!=t.dangerouslySetInnerHTML&&r("91"),Cn({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qt(e,t){var n=t.value,o=n;null==n&&(n=t.defaultValue,t=t.children,null!=t&&(null!=n&&r("92"),Array.isArray(t)&&(1>=t.length||r("93"),t=t[0]),n=""+t),null==n&&(n=""),o=n),e._wrapperState={initialValue:""+o}}function Zt(e,t){var n=t.value;null!=n&&(n=""+n,n!==e.value&&(e.value=n),null==t.defaultValue&&(e.defaultValue=n)),null!=t.defaultValue&&(e.defaultValue=t.defaultValue)}function $t(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}function Xt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jt(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Xt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function tn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=n,a=t[n];o=null==a||"boolean"==typeof a||""===a?"":r||"number"!=typeof a||0===a||Jo.hasOwnProperty(o)&&Jo[o]?(""+a).trim():a+"px","float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function nn(e,t,n){t&&(ta[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&r("137",e,n()),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&r("60"),"object"===vn(t.dangerouslySetInnerHTML)&&"__html"in t.dangerouslySetInnerHTML||r("61")),null!=t.style&&"object"!==vn(t.style)&&r("62",n()))}function rn(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function on(e,t){e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument;var n=De(e);t=Zn[t];for(var r=0;r<t.length;r++){var o=t[r];n.hasOwnProperty(o)&&n[o]||("topWheel"===o?ne("wheel")?Ie("topWheel","wheel",e):ne("mousewheel")?Ie("topWheel","mousewheel",e):Ie("topWheel","DOMMouseScroll",e):"topScroll"===o?Ne("topScroll","scroll",e):"topFocus"===o||"topBlur"===o?(Ne("topFocus","focus",e),Ne("topBlur","blur",e),n.topBlur=!0,n.topFocus=!0):"topCancel"===o?(ne("cancel",!0)&&Ne("topCancel","cancel",e),n.topCancel=!0):"topClose"===o?(ne("close",!0)&&Ne("topClose","close",e),n.topClose=!0):Qr.hasOwnProperty(o)&&Ie(o,Qr[o],e),n[o]=!0)}}function an(e,t,n,r){return n=9===n.nodeType?n:n.ownerDocument,r===na&&(r=Xt(e)),r===na?"script"===e?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):e="string"==typeof t.is?n.createElement(e,{is:t.is}):n.createElement(e):e=n.createElementNS(r,e),e}function ln(e,t){return(9===t.nodeType?t:t.ownerDocument).createTextNode(e)}function un(e,t,n,r){var o=rn(t,n);switch(t){case"iframe":case"object":Ie("topLoad","load",e);var a=n;break;case"video":case"audio":for(a in oa)oa.hasOwnProperty(a)&&Ie(a,oa[a],e);a=n;break;case"source":Ie("topError","error",e),a=n;break;case"img":case"image":Ie("topError","error",e),Ie("topLoad","load",e),a=n;break;case"form":Ie("topReset","reset",e),Ie("topSubmit","submit",e),a=n;break;case"details":Ie("topToggle","toggle",e),a=n;break;case"input":Bt(e,n),a=Ht(e,n),Ie("topInvalid","invalid",e),on(r,"onChange");break;case"option":a=Wt(e,n);break;case"select":Gt(e,n),a=Cn({},n,{value:void 0}),Ie("topInvalid","invalid",e),on(r,"onChange");break;case"textarea":Qt(e,n),a=Yt(e,n),Ie("topInvalid","invalid",e),on(r,"onChange");break;default:a=n}nn(t,a,ra);var i,l=a;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];"style"===i?tn(e,u,ra):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&Zo(e,u):"children"===i?"string"==typeof u?("textarea"!==t||""!==u)&&Xo(e,u):"number"==typeof u&&Xo(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(Qn.hasOwnProperty(i)?null!=u&&on(r,i):o?Ut(e,i,u):null!=u&&Lt(e,i,u))}switch(t){case"input":ae(e),Vt(e,n);break;case"textarea":ae(e),$t(e,n);break;case"option":null!=n.value&&e.setAttribute("value",n.value);break;case"select":e.multiple=!!n.multiple,t=n.value,null!=t?Kt(e,!!n.multiple,t,!1):null!=n.defaultValue&&Kt(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=En)}}function sn(e,t,n,r,o){var a=null;switch(t){case"input":n=Ht(e,n),r=Ht(e,r),a=[];break;case"option":n=Wt(e,n),r=Wt(e,r),a=[];break;case"select":n=Cn({},n,{value:void 0}),r=Cn({},r,{value:void 0}),a=[];break;case"textarea":n=Yt(e,n),r=Yt(e,r),a=[];break;default:"function"!=typeof n.onClick&&"function"==typeof r.onClick&&(e.onclick=En)}nn(t,r,ra);var i,l;e=null;for(i in n)if(!r.hasOwnProperty(i)&&n.hasOwnProperty(i)&&null!=n[i])if("style"===i)for(l in t=n[i])t.hasOwnProperty(l)&&(e||(e={}),e[l]="");else"dangerouslySetInnerHTML"!==i&&"children"!==i&&"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(Qn.hasOwnProperty(i)?a||(a=[]):(a=a||[]).push(i,null));for(i in r){var u=r[i];if(t=null!=n?n[i]:void 0,r.hasOwnProperty(i)&&u!==t&&(null!=u||null!=t))if("style"===i)if(t){for(l in t)!t.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(e||(e={}),e[l]="");for(l in u)u.hasOwnProperty(l)&&t[l]!==u[l]&&(e||(e={}),e[l]=u[l])}else e||(a||(a=[]),a.push(i,e)),e=u;else"dangerouslySetInnerHTML"===i?(u=u?u.__html:void 0,t=t?t.__html:void 0,null!=u&&t!==u&&(a=a||[]).push(i,""+u)):"children"===i?t===u||"string"!=typeof u&&"number"!=typeof u||(a=a||[]).push(i,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&(Qn.hasOwnProperty(i)?(null!=u&&on(o,i),a||t===u||(a=[])):(a=a||[]).push(i,u))}return e&&(a=a||[]).push("style",e),a}function cn(e,t,n,r,o){rn(n,r),r=rn(n,o);for(var a=0;a<t.length;a+=2){var i=t[a],l=t[a+1];"style"===i?tn(e,l,ra):"dangerouslySetInnerHTML"===i?Zo(e,l):"children"===i?Xo(e,l):r?null!=l?Ut(e,i,l):e.removeAttribute(i):null!=l?Lt(e,i,l):Ft(e,i)}switch(n){case"input":zt(e,o),ie(e);break;case"textarea":Zt(e,o);break;case"select":e._wrapperState.initialValue=void 0,t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!o.multiple,n=o.value,null!=n?Kt(e,!!o.multiple,n,!1):t!==!!o.multiple&&(null!=o.defaultValue?Kt(e,!!o.multiple,o.defaultValue,!0):Kt(e,!!o.multiple,o.multiple?[]:"",!1))}}function fn(e,t,n,r,o){switch(t){case"iframe":case"object":Ie("topLoad","load",e);break;case"video":case"audio":for(var a in oa)oa.hasOwnProperty(a)&&Ie(a,oa[a],e);break;case"source":Ie("topError","error",e);break;case"img":case"image":Ie("topError","error",e),Ie("topLoad","load",e);break;case"form":Ie("topReset","reset",e),Ie("topSubmit","submit",e);break;case"details":Ie("topToggle","toggle",e);break;case"input":Bt(e,n),Ie("topInvalid","invalid",e),on(o,"onChange");break;case"select":Gt(e,n),Ie("topInvalid","invalid",e),on(o,"onChange");break;case"textarea":Qt(e,n),Ie("topInvalid","invalid",e),on(o,"onChange")}nn(t,n,ra),r=null;for(var i in n)n.hasOwnProperty(i)&&(a=n[i],"children"===i?"string"==typeof a?e.textContent!==a&&(r=["children",a]):"number"==typeof a&&e.textContent!==""+a&&(r=["children",""+a]):Qn.hasOwnProperty(i)&&null!=a&&on(o,i));switch(t){case"input":ae(e),Vt(e,n);break;case"textarea":ae(e),$t(e,n);break;case"select":case"option":break;default:"function"==typeof n.onClick&&(e.onclick=En)}return r}function dn(e,t){return e.nodeValue!==t}function pn(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function hn(e){return!(!(e=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==e.nodeType||!e.hasAttribute("data-reactroot"))}function yn(e,t,n,o,a){pn(n)||r("200");var i=n._reactRootContainer;if(i)ua.updateContainer(t,i,e,a);else{if(!(o=o||hn(n)))for(i=void 0;i=n.lastChild;)n.removeChild(i);var l=ua.createContainer(n,o);i=n._reactRootContainer=l,ua.unbatchedUpdates(function(){ua.updateContainer(t,l,e,a)})}return ua.getPublicRootInstance(i)}function mn(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return pn(t)||r("200"),St(e,t,null,n)}function bn(e,t){this._reactRootContainer=ua.createContainer(e,t)}/** @license React v16.1.1
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gn=n(0),wn=n(25),Cn=n(9),En=n(4),Tn=n(26),Sn=n(27),_n=n(28),On=n(29),xn=n(32),kn=n(10);gn||r("227");var Pn={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0},In={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=In,n=e.Properties||{},a=e.DOMAttributeNamespaces||{},i=e.DOMAttributeNames||{};e=e.DOMMutationMethods||{};for(var l in n){Nn.hasOwnProperty(l)&&r("48",l);var u=l.toLowerCase(),s=n[l];u={attributeName:u,attributeNamespace:null,propertyName:l,mutationMethod:null,mustUseProperty:o(s,t.MUST_USE_PROPERTY),hasBooleanValue:o(s,t.HAS_BOOLEAN_VALUE),hasNumericValue:o(s,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:o(s,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:o(s,t.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:o(s,t.HAS_STRING_BOOLEAN_VALUE)},1>=u.hasBooleanValue+u.hasNumericValue+u.hasOverloadedBooleanValue||r("50",l),i.hasOwnProperty(l)&&(u.attributeName=i[l]),a.hasOwnProperty(l)&&(u.attributeNamespace=a[l]),e.hasOwnProperty(l)&&(u.mutationMethod=e[l]),Nn[l]=u}}},Nn={},Mn=In,jn=Mn.MUST_USE_PROPERTY,Rn=Mn.HAS_BOOLEAN_VALUE,Dn=Mn.HAS_NUMERIC_VALUE,An=Mn.HAS_POSITIVE_NUMERIC_VALUE,Ln=Mn.HAS_OVERLOADED_BOOLEAN_VALUE,Un=Mn.HAS_STRING_BOOLEAN_VALUE,Fn={Properties:{allowFullScreen:Rn,async:Rn,autoFocus:Rn,autoPlay:Rn,capture:Ln,checked:jn|Rn,cols:An,contentEditable:Un,controls:Rn,default:Rn,defer:Rn,disabled:Rn,download:Ln,draggable:Un,formNoValidate:Rn,hidden:Rn,loop:Rn,multiple:jn|Rn,muted:jn|Rn,noValidate:Rn,open:Rn,playsInline:Rn,readOnly:Rn,required:Rn,reversed:Rn,rows:An,rowSpan:Dn,scoped:Rn,seamless:Rn,selected:jn|Rn,size:An,start:Dn,span:An,spellCheck:Un,style:0,tabIndex:0,itemScope:Rn,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:Un},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t)}}},Hn=Mn.HAS_STRING_BOOLEAN_VALUE,Bn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},zn={Properties:{autoReverse:Hn,externalResourcesRequired:Hn,preserveAlpha:Hn},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:Bn.xlink,xlinkArcrole:Bn.xlink,xlinkHref:Bn.xlink,xlinkRole:Bn.xlink,xlinkShow:Bn.xlink,xlinkTitle:Bn.xlink,xlinkType:Bn.xlink,xmlBase:Bn.xml,xmlLang:Bn.xml,xmlSpace:Bn.xml}},Vn=/[\-\:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(e){var t=e.replace(Vn,l);zn.Properties[t]=0,zn.DOMAttributeNames[t]=e}),Mn.injectDOMPropertyConfig(Fn),Mn.injectDOMPropertyConfig(zn);var qn={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(e){"function"!=typeof e.invokeGuardedCallback&&r("197"),u=e.invokeGuardedCallback}},invokeGuardedCallback:function(e,t,n,r,o,a,i,l,s){u.apply(qn,arguments)},invokeGuardedCallbackAndCatchFirstError:function(e,t,n,r,o,a,i,l,u){if(qn.invokeGuardedCallback.apply(this,arguments),qn.hasCaughtError()){var s=qn.clearCaughtError();qn._hasRethrowError||(qn._hasRethrowError=!0,qn._rethrowError=s)}},rethrowCaughtError:function(){return s.apply(qn,arguments)},hasCaughtError:function(){return qn._hasCaughtError},clearCaughtError:function(){if(qn._hasCaughtError){var e=qn._caughtError;return qn._caughtError=null,qn._hasCaughtError=!1,e}r("198")}},Wn=null,Kn={},Gn=[],Yn={},Qn={},Zn={},$n=Object.freeze({plugins:Gn,eventNameDispatchConfigs:Yn,registrationNameModules:Qn,registrationNameDependencies:Zn,possibleRegistrationNames:null,injectEventPluginOrder:d,injectEventPluginsByName:p}),Xn=null,Jn=null,er=null,tr=null,nr={injectEventPluginOrder:d,injectEventPluginsByName:p},rr=Object.freeze({injection:nr,getListener:w,extractEvents:C,enqueueEvents:E,processEventQueue:T}),or=Math.random().toString(36).slice(2),ar="__reactInternalInstance$"+or,ir="__reactEventHandlers$"+or,lr=Object.freeze({precacheFiberNode:function(e,t){t[ar]=e},getClosestInstanceFromNode:S,getInstanceFromNode:function(e){return e=e[ar],!e||5!==e.tag&&6!==e.tag?null:e},getNodeFromInstance:_,getFiberCurrentPropsFromNode:O,updateFiberProps:function(e,t){e[ir]=t}}),ur=Object.freeze({accumulateTwoPhaseDispatches:R,accumulateTwoPhaseDispatchesSkipTarget:function(e){m(e,N)},accumulateEnterLeaveDispatches:D,accumulateDirectDispatches:function(e){m(e,j)}}),sr=null,cr={_root:null,_startText:null,_fallbackText:null},fr="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),dr={type:null,target:null,currentTarget:En.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};Cn(F.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=En.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=En.thatReturnsTrue)},persist:function(){this.isPersistent=En.thatReturnsTrue},isPersistent:En.thatReturnsFalse,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;for(t=0;t<fr.length;t++)this[fr[t]]=null}}),F.Interface=dr,F.augmentClass=function(e,t){function n(){}n.prototype=this.prototype;var r=new n;Cn(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=Cn({},this.Interface,t),e.augmentClass=this.augmentClass,z(e)},z(F),F.augmentClass(V,{data:null}),F.augmentClass(q,{data:null});var pr=[9,13,27,32],hr=wn.canUseDOM&&"CompositionEvent"in window,yr=null;wn.canUseDOM&&"documentMode"in document&&(yr=document.documentMode);var mr;if(mr=wn.canUseDOM&&"TextEvent"in window&&!yr){var br=window.opera;mr=!("object"===(void 0===br?"undefined":vn(br))&&"function"==typeof br.version&&12>=parseInt(br.version(),10))}var vr,gr=mr,wr=wn.canUseDOM&&(!hr||yr&&8<yr&&11>=yr),Cr=String.fromCharCode(32),Er={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},Tr=!1,Sr=!1,_r={eventTypes:Er,extractEvents:function(e,t,n,r){var o;if(hr)e:{switch(e){case"topCompositionStart":var a=Er.compositionStart;break e;case"topCompositionEnd":a=Er.compositionEnd;break e;case"topCompositionUpdate":a=Er.compositionUpdate;break e}a=void 0}else Sr?W(e,n)&&(a=Er.compositionEnd):"topKeyDown"===e&&229===n.keyCode&&(a=Er.compositionStart);return a?(wr&&(Sr||a!==Er.compositionStart?a===Er.compositionEnd&&Sr&&(o=L()):(cr._root=r,cr._startText=U(),Sr=!0)),a=V.getPooled(a,t,n,r),o?a.data=o:null!==(o=K(n))&&(a.data=o),R(a),o=a):o=null,(e=gr?G(e,n):Y(e,n))?(t=q.getPooled(Er.beforeInput,t,n,r),t.data=e,R(t)):t=null,[o,t]}},Or=null,xr=null,kr=null,Pr={injectFiberControlledHostComponent:function(e){Or=e}},Ir=Object.freeze({injection:Pr,enqueueStateRestore:Z,restoreStateIfNeeded:$}),Nr=!1,Mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};wn.canUseDOM&&(vr=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var jr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}},Rr=null,Dr=null,Ar=!1;wn.canUseDOM&&(Ar=ne("input")&&(!document.documentMode||9<document.documentMode));var Lr={eventTypes:jr,_isInputEventSupported:Ar,extractEvents:function(e,t,n,r){var o=t?_(t):window,a=o.nodeName&&o.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===o.type)var i=ce;else if(ee(o))if(Ar)i=me;else{i=he;var l=pe}else!(a=o.nodeName)||"input"!==a.toLowerCase()||"checkbox"!==o.type&&"radio"!==o.type||(i=ye);if(i&&(i=i(e,t)))return le(i,n,r);l&&l(e,o,t),"topBlur"===e&&null!=t&&(e=t._wrapperState||o._wrapperState)&&e.controlled&&"number"===o.type&&(e=""+o.value,o.getAttribute("value")!==e&&o.setAttribute("value",e))}};F.augmentClass(be,{view:null,detail:null});var Ur={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};be.augmentClass(we,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ge,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)}});var Fr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},Hr={eventTypes:Fr,extractEvents:function(e,t,n,r){if("topMouseOver"===e&&(n.relatedTarget||n.fromElement)||"topMouseOut"!==e&&"topMouseOver"!==e)return null;var o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window;if("topMouseOut"===e?(e=t,t=(t=n.relatedTarget||n.toElement)?S(t):null):e=null,e===t)return null;var a=null==e?o:_(e);o=null==t?o:_(t);var i=we.getPooled(Fr.mouseLeave,e,n,r);return i.type="mouseleave",i.target=a,i.relatedTarget=o,n=we.getPooled(Fr.mouseEnter,t,n,r),n.type="mouseenter",n.target=o,n.relatedTarget=a,D(i,n,e,t),[i,n]}},Br=gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zr=[],Vr=!0,qr=void 0,Wr=Object.freeze({get _enabled(){return Vr},get _handleTopLevel(){return qr},setHandleTopLevel:function(e){qr=e},setEnabled:Pe,isEnabled:function(){return Vr},trapBubbledEvent:Ie,trapCapturedEvent:Ne,dispatchEvent:Me}),Kr={animationend:je("Animation","AnimationEnd"),animationiteration:je("Animation","AnimationIteration"),animationstart:je("Animation","AnimationStart"),transitionend:je("Transition","TransitionEnd")},Gr={},Yr={};wn.canUseDOM&&(Yr=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);var Qr={topAbort:"abort",topAnimationEnd:Re("animationend")||"animationend",topAnimationIteration:Re("animationiteration")||"animationiteration",topAnimationStart:Re("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:Re("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Zr={},$r=0,Xr="_reactListenersID"+(""+Math.random()).slice(2),Jr=wn.canUseDOM&&"documentMode"in document&&11>=document.documentMode,eo={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},to=null,no=null,ro=null,oo=!1,ao={eventTypes:eo,extractEvents:function(e,t,n,r){var o,a=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(o=!a)){e:{a=De(a),o=Zn.onSelect;for(var i=0;i<o.length;i++){var l=o[i];if(!a.hasOwnProperty(l)||!a[l]){a=!1;break e}}a=!0}o=!a}if(o)return null;switch(a=t?_(t):window,e){case"topFocus":(ee(a)||"true"===a.contentEditable)&&(to=a,no=t,ro=null);break;case"topBlur":ro=no=to=null;break;case"topMouseDown":oo=!0;break;case"topContextMenu":case"topMouseUp":return oo=!1,Fe(n,r);case"topSelectionChange":if(Jr)break;case"topKeyDown":case"topKeyUp":return Fe(n,r)}return null}};F.augmentClass(He,{animationName:null,elapsedTime:null,pseudoElement:null}),F.augmentClass(Be,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),be.augmentClass(ze,{relatedTarget:null});var io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};be.augmentClass(qe,{key:function(e){if(e.key){var t=io[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?(e=Ve(e),13===e?"Enter":String.fromCharCode(e)):"keydown"===e.type||"keyup"===e.type?lo[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ge,charCode:function(e){return"keypress"===e.type?Ve(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ve(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),we.augmentClass(We,{dataTransfer:null}),be.augmentClass(Ke,{touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ge}),F.augmentClass(Ge,{propertyName:null,elapsedTime:null,pseudoElement:null}),we.augmentClass(Ye,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null});var uo={},so={};"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(e){var t=e[0].toUpperCase()+e.slice(1),n="on"+t;t="top"+t,n={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[t]},uo[e]=n,so[t]=n});var co={eventTypes:uo,extractEvents:function(e,t,n,r){var o=so[e];if(!o)return null;switch(e){case"topKeyPress":if(0===Ve(n))return null;case"topKeyDown":case"topKeyUp":e=qe;break;case"topBlur":case"topFocus":e=ze;break;case"topClick":if(2===n.button)return null;case"topDoubleClick":case"topMouseDown":case"topMouseMove":case"topMouseUp":case"topMouseOut":case"topMouseOver":case"topContextMenu":e=we;break;case"topDrag":case"topDragEnd":case"topDragEnter":case"topDragExit":case"topDragLeave":case"topDragOver":case"topDragStart":case"topDrop":e=We;break;case"topTouchCancel":case"topTouchEnd":case"topTouchMove":case"topTouchStart":e=Ke;break;case"topAnimationEnd":case"topAnimationIteration":case"topAnimationStart":e=He;break;case"topTransitionEnd":e=Ge;break;case"topScroll":e=be;break;case"topWheel":e=Ye;break;case"topCopy":case"topCut":case"topPaste":e=Be;break;default:e=F}return t=e.getPooled(o,t,n,r),R(t),t}};qr=function(e,t,n,r){e=C(e,t,n,r),E(e),T(!1)},nr.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),Xn=lr.getFiberCurrentPropsFromNode,Jn=lr.getInstanceFromNode,er=lr.getNodeFromInstance,nr.injectEventPluginsByName({SimpleEventPlugin:co,EnterLeaveEventPlugin:Hr,ChangeEventPlugin:Lr,SelectEventPlugin:ao,BeforeInputEventPlugin:_r});var fo=[],po=-1;new Set;var ho,yo,mo,bo,vo={current:kn},go={current:!1},wo=kn,Co=null,Eo=null,To="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.portal")||60106,So=Array.isArray,_o="function"==typeof Symbol&&Symbol.iterator;"function"==typeof Symbol&&Symbol.for?(ho=Symbol.for("react.element"),yo=Symbol.for("react.call"),mo=Symbol.for("react.return"),bo=Symbol.for("react.fragment")):(ho=60103,yo=60104,mo=60105,bo=60107);var Oo=kt(!0,!0),xo=kt(!1,!0),ko=kt(!1,!1),Po={},Io=Object.freeze({default:Dt}),No=Io&&Dt||Io,Mo=No.default?No.default:No,jo="object"===("undefined"==typeof performance?"undefined":vn(performance))&&"function"==typeof performance.now,Ro=void 0;Ro=jo?function(){return performance.now()}:function(){return Date.now()};var Do=void 0;if(wn.canUseDOM)if("function"!=typeof requestIdleCallback){var Ao,Lo=null,Uo=!1,Fo=!1,Ho=0,Bo=33,zo=33;Ao=jo?{timeRemaining:function(){return Ho-performance.now()}}:{timeRemaining:function(){return Ho-Date.now()}};var Vo="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){e.source===window&&e.data===Vo&&(Uo=!1,e=Lo,Lo=null,null!==e&&e(Ao))},!1);var qo=function(e){Fo=!1;var t=e-Ho+zo;t<zo&&Bo<zo?(8>t&&(t=8),zo=t<Bo?Bo:t):Bo=t,Ho=e+zo,Uo||(Uo=!0,window.postMessage(Vo,"*"))};Do=function(e){return Lo=e,Fo||(Fo=!0,requestAnimationFrame(qo)),0}}else Do=requestIdleCallback;else Do=function(e){return setTimeout(function(){e({timeRemaining:function(){return 1/0}})}),0};var Wo=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ko={},Go={},Yo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},Qo=void 0,Zo=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if(e.namespaceURI!==Yo.svg||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}),$o=/["'&<>]/;wn.canUseDOM&&("textContent"in document.documentElement||(en=function(e,t){if(3===e.nodeType)e.nodeValue=t;else{if("boolean"==typeof t||"number"==typeof t)t=""+t;else{t=""+t;var n=$o.exec(t);if(n){var r,o="",a=0;for(r=n.index;r<t.length;r++){switch(t.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==r&&(o+=t.substring(a,r)),a=r+1,o+=n}t=a!==r?o+t.substring(a,r):o}}Zo(e,t)}}));var Xo=en,Jo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ea=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(e){ea.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jo[t]=Jo[e]})});var ta=Cn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),na=Yo.html,ra=En.thatReturns(""),oa={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},aa=Object.freeze({createElement:an,createTextNode:ln,setInitialProperties:un,diffProperties:sn,updateProperties:cn,diffHydratedProperties:fn,diffHydratedText:dn,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(e,t,n){switch(t){case"input":if(zt(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=O(o);a||r("90"),zt(o,a)}}}break;case"textarea":Zt(e,n);break;case"select":null!=(t=n.value)&&Kt(e,!!n.multiple,t,!1)}}});Pr.injectFiberControlledHostComponent(aa);var ia=null,la=null,ua=Mo({getRootHostContext:function(e){var t=e.nodeType;switch(t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jt(null,"");break;default:t=8===t?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jt(e,t)}return e},getChildHostContext:function(e,t){return Jt(e,t)},getPublicInstance:function(e){return e},prepareForCommit:function(){ia=Vr;var e=Sn();if(Ue(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=window.getSelection&&window.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{t.nodeType,o.nodeType}catch(e){t=null;break e}var a=0,i=-1,l=-1,u=0,s=0,c=e,f=null;t:for(;;){for(var d;c!==t||0!==r&&3!==c.nodeType||(i=a+r),c!==o||0!==n&&3!==c.nodeType||(l=a+n),3===c.nodeType&&(a+=c.nodeValue.length),null!==(d=c.firstChild);)f=c,c=d;for(;;){if(c===e)break t;if(f===t&&++u===r&&(i=a),f===o&&++s===n&&(l=a),null!==(d=c.nextSibling))break;c=f,f=c.parentNode}c=d}t=-1===i||-1===l?null:{start:i,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;la={focusedElem:e,selectionRange:t},Pe(!1)},resetAfterCommit:function(){var e=la,t=Sn(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&On(document.documentElement,n)){if(Ue(n))if(t=r.start,e=r.end,void 0===e&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(window.getSelection){t=window.getSelection();var o=n[A()].length;e=Math.min(r.start,o),r=void 0===r.end?e:Math.min(r.end,o),!t.extend&&e>r&&(o=r,r=e,e=o),o=Le(n,e);var a=Le(n,r);if(o&&a&&(1!==t.rangeCount||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)){var i=document.createRange();i.setStart(o.node,o.offset),t.removeAllRanges(),e>r?(t.addRange(i),t.extend(a.node,a.offset)):(i.setEnd(a.node,a.offset),t.addRange(i))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(xn(n),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}la=null,Pe(ia),ia=null},createInstance:function(e,t,n,r,o){return e=an(e,t,n,r),e[ar]=o,e[ir]=t,e},appendInitialChild:function(e,t){e.appendChild(t)},finalizeInitialChildren:function(e,t,n,r){un(e,t,n,r);e:{switch(t){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e}e=!1}return e},prepareUpdate:function(e,t,n,r,o){return sn(e,t,n,r,o)},shouldSetTextContent:function(e,t){return"textarea"===e||"string"==typeof t.children||"number"==typeof t.children||"object"===vn(t.dangerouslySetInnerHTML)&&null!==t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(e,t){return!!t.hidden},createTextInstance:function(e,t,n,r){return e=ln(e,t),e[ar]=r,e},now:Ro,mutation:{commitMount:function(e){e.focus()},commitUpdate:function(e,t,n,r,o){e[ir]=o,cn(e,t,n,r,o)},resetTextContent:function(e){e.textContent=""},commitTextUpdate:function(e,t,n){e.nodeValue=n},appendChild:function(e,t){e.appendChild(t)},appendChildToContainer:function(e,t){8===e.nodeType?e.parentNode.insertBefore(t,e):e.appendChild(t)},insertBefore:function(e,t,n){e.insertBefore(t,n)},insertInContainerBefore:function(e,t,n){8===e.nodeType?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},removeChildFromContainer:function(e,t){8===e.nodeType?e.parentNode.removeChild(t):e.removeChild(t)}},hydration:{canHydrateInstance:function(e,t){return 1!==e.nodeType||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e},canHydrateTextInstance:function(e,t){return""===t||3!==e.nodeType?null:e},getNextHydratableSibling:function(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e},getFirstHydratableChild:function(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e},hydrateInstance:function(e,t,n,r,o,a){return e[ar]=a,e[ir]=n,fn(e,t,n,o,r)},hydrateTextInstance:function(e,t,n){return e[ar]=n,dn(e,t)},didNotMatchHydratedContainerTextInstance:function(){},didNotMatchHydratedTextInstance:function(){},didNotHydrateContainerInstance:function(){},didNotHydrateInstance:function(){},didNotFindHydratableContainerInstance:function(){},didNotFindHydratableContainerTextInstance:function(){},didNotFindHydratableInstance:function(){},didNotFindHydratableTextInstance:function(){}},scheduleDeferredCallback:Do,useSyncScheduling:!0});X=ua.batchedUpdates,bn.prototype.render=function(e,t){ua.updateContainer(e,this._reactRootContainer,null,t)},bn.prototype.unmount=function(e){ua.updateContainer(null,this._reactRootContainer,null,e)};var sa={createPortal:mn,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(t)return ua.findHostInstance(t);"function"==typeof e.render?r("188"):r("213",Object.keys(e))},hydrate:function(e,t,n){return yn(null,e,t,!0,n)},render:function(e,t,n){return yn(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,o){return(null==e||void 0===e._reactInternalFiber)&&r("38"),yn(e,t,n,!1,o)},unmountComponentAtNode:function(e){return pn(e)||r("40"),!!e._reactRootContainer&&(ua.unbatchedUpdates(function(){yn(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:mn,unstable_batchedUpdates:J,unstable_deferredUpdates:ua.deferredUpdates,flushSync:ua.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:rr,EventPluginRegistry:$n,EventPropagators:ur,ReactControlledComponent:Ir,ReactDOMComponentTree:lr,ReactDOMEventListener:Wr}};ua.injectIntoDevTools({findFiberByHostInstance:S,bundleType:0,version:"16.1.1",rendererPackageName:"react-dom"});var ca=Object.freeze({default:sa}),fa=ca&&sa||ca;e.exports=fa.default?fa.default:fa},function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},function(e,t,n){"use strict";var r=n(4),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};e.exports=o},function(e,t,n){"use strict";function r(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}e.exports=r},function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function o(e,t){if(r(e,t))return!0;if("object"!==(void 0===e?"undefined":a(e))||null===e||"object"!==(void 0===t?"undefined":a(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var l=0;l<n.length;l++)if(!i.call(t,n[l])||!r(e[n[l]],t[n[l]]))return!1;return!0}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.prototype.hasOwnProperty;e.exports=o},function(e,t,n){"use strict";function r(e,t){return!(!e||!t)&&(e===t||!o(e)&&(o(t)?r(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}var o=n(30);e.exports=r},function(e,t,n){"use strict";function r(e){return o(e)&&3==e.nodeType}var o=n(31);e.exports=r},function(e,t,n){"use strict";function r(e){var t=e?e.ownerDocument||e:document,n=t.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"===(void 0===e?"undefined":o(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=r},function(e,t,n){"use strict";function r(e){try{e.focus()}catch(e){}}e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(1),d=r(f),p=n(2),h=r(p),y=n(5),m=r(y),b=n(41),v=r(b),g=n(43),w=r(g),C=n(45),E=r(C),T=n(80),S=r(T),_=n(3),O=r(_);n(84);var x=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleUse=function(e){n.setState({expanded:!1,title:e.title||e.machineName,infoMessage:null}),n.props.onUse(e)},n.handleUpload=function(e){var t=e.h5p.mainLibrary;e.contentTypes.libraries.forEach(function(n){n.machineName===e.h5p.mainLibrary&&(t=n.title)}),n.setState({expanded:!1,title:t,contentTypes:e.contentTypes,infoMessage:{title:h.default.get("uploadSuccess").replace(":title",t),message:e.contentTypes.details}}),n.props.onUpload(e)},n.handleUpdate=function(e){n.props.onUpdate(e),n.setState({contentTypes:e})},n.handleReload=function(){(0,m.default)(n.props.getAjaxUrl("content-type-cache")).then(function(e){return n.handleUpdate(e)}).catch(function(e){return n.setState({error:e})})},n.handleInfoDismiss=function(){n.setState({infoMessage:null})},n.handleTabPanelSelect=function(e){n.setState({section:e})},n.state={expanded:!1,section:"content-types",selected:e.selected,title:e.title,contentTypes:e.contentTypes},n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props.title&&(this.state.title=e.title,this.state.expanded=!0)}},{key:"componentDidUpdate",value:function(){this.props.onResize()}},{key:"render",value:function(){var e=this;return c.default.createElement("section",{className:"h5p-hub"},c.default.createElement("div",{className:"panel h5p-section-"+this.state.section+(this.state.expanded?" open":"")},c.default.createElement(v.default,{title:this.state.title||h.default.get("hubPanelLabel"),sectionId:this.state.section,isExpanded:this.state.expanded,togglePanel:function(){return e.setState({expanded:!e.state.expanded})}}),c.default.createElement("div",{id:"panel-body-"+this.state.section,role:"region",className:this.state.expanded?"":"hidden"},c.default.createElement(w.default,{selected:this.state.section,onSelect:this.handleTabPanelSelect},c.default.createElement(E.default,{id:"content-types",title:h.default.get("createContentTabLabel"),contentTypes:this.state.contentTypes,setFocus:this.state.expanded&&"content-types"===this.state.section,getAjaxUrl:this.props.getAjaxUrl,error:this.state.error,onUse:this.handleUse,onInstall:this.handleUpdate,onReload:this.handleReload}),c.default.createElement(S.default,{id:"upload",title:h.default.get("uploadTabLabel"),getAjaxUrl:this.props.getAjaxUrl,contentId:this.props.contentId,setFocus:this.state.expanded&&"upload"===this.state.section,onUpload:this.handleUpload})))),!!this.state.infoMessage&&c.default.createElement(O.default,l({},this.state.infoMessage,{severity:"info",onClose:this.handleInfoDismiss})))}}]),t}(c.default.Component);x.propTypes={title:d.default.string,contentId:d.default.number,contentTypes:d.default.object.isRequired,selected:d.default.string,getAjaxUrl:d.default.func.isRequired,onResize:d.default.func.isRequired,onUse:d.default.func.isRequired,onUpload:d.default.func.isRequired},t.default=x},function(e,t,n){"use strict";var r=n(4),o=n(35),a=n(36);e.exports=function(){function e(e,t,n,r,i,l){l!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e,t,n,r,a,i,l,u){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,i,l,u],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(r,o){var a,i,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
!function(r,o){"object"===l(t)&&void 0!==e?e.exports=o():(a=o,void 0!==(i="function"==typeof a?a.call(t,n,t,e):a)&&(e.exports=i))}(0,function(){function e(e){var t=void 0===e?"undefined":l(e);return null!==e&&("object"===t||"function"===t)}function t(e){return"function"==typeof e}function a(e){K=e}function i(e){G=e}function u(){return void 0!==W?function(){W(c)}:s()}function s(){var e=setTimeout;return function(){return e(c,1)}}function c(){for(var e=0;e<q;e+=2){(0,J[e])(J[e+1]),J[e]=void 0,J[e+1]=void 0}q=0}function f(e,t){var n=arguments,r=this,o=new this.constructor(p);void 0===o[te]&&M(o);var a=r._state;return a?function(){var e=n[a-1];G(function(){return P(a,o,e,r._result)})}():_(r,o,e,t),o}function d(e){var t=this;if(e&&"object"===(void 0===e?"undefined":l(e))&&e.constructor===t)return e;var n=new t(p);return C(n,e),n}function p(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function y(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(e){return ae.error=e,ae}}function b(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function v(e,t,n){G(function(e){var r=!1,o=b(n,t,function(n){r||(r=!0,t!==n?C(e,n):T(e,n))},function(t){r||(r=!0,S(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,S(e,o))},e)}function g(e,t){t._state===re?T(e,t._result):t._state===oe?S(e,t._result):_(t,void 0,function(t){return C(e,t)},function(t){return S(e,t)})}function w(e,n,r){n.constructor===e.constructor&&r===f&&n.constructor.resolve===d?g(e,n):r===ae?(S(e,ae.error),ae.error=null):void 0===r?T(e,n):t(r)?v(e,n,r):T(e,n)}function C(t,n){t===n?S(t,h()):e(n)?w(t,n,m(n)):T(t,n)}function E(e){e._onerror&&e._onerror(e._result),O(e)}function T(e,t){e._state===ne&&(e._result=t,e._state=re,0!==e._subscribers.length&&G(O,e))}function S(e,t){e._state===ne&&(e._state=oe,e._result=t,G(E,e))}function _(e,t,n,r){var o=e._subscribers,a=o.length;e._onerror=null,o[a]=t,o[a+re]=n,o[a+oe]=r,0===a&&e._state&&G(O,e)}function O(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,a=e._result,i=0;i<t.length;i+=3)r=t[i],o=t[i+n],r?P(n,r,o,a):o(a);e._subscribers.length=0}}function x(){this.error=null}function k(e,t){try{return e(t)}catch(e){return ie.error=e,ie}}function P(e,n,r,o){var a=t(r),i=void 0,l=void 0,u=void 0,s=void 0;if(a){if(i=k(r,o),i===ie?(s=!0,l=i.error,i.error=null):u=!0,n===i)return void S(n,y())}else i=o,u=!0;n._state!==ne||(a&&u?C(n,i):s?S(n,l):e===re?T(n,i):e===oe&&S(n,i))}function I(e,t){try{t(function(t){C(e,t)},function(t){S(e,t)})}catch(t){S(e,t)}}function N(){return le++}function M(e){e[te]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function j(e,t){this._instanceConstructor=e,this.promise=new e(p),this.promise[te]||M(this.promise),V(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&T(this.promise,this._result))):S(this.promise,R())}function R(){return new Error("Array Methods must be provided an Array")}function D(e){return new j(this,e).promise}function A(e){var t=this;return new t(V(e)?function(n,r){for(var o=e.length,a=0;a<o;a++)t.resolve(e[a]).then(n,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function L(e){var t=this,n=new t(p);return S(n,e),n}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(e){this[te]=N(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&U(),this instanceof H?I(this,e):F())}function B(){var e=void 0;if(void 0!==o)e=o;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=H}var z=void 0;z=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var V=z,q=0,W=void 0,K=void 0,G=function(e,t){J[q]=e,J[q+1]=t,2===(q+=2)&&(K?K(c):ee())},Y="undefined"!=typeof window?window:void 0,Q=Y||{},Z=Q.MutationObserver||Q.WebKitMutationObserver,$="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,J=new Array(1e3),ee=void 0;ee=$?function(){return function(){return r.nextTick(c)}}():Z?function(){var e=0,t=new Z(c),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}():X?function(){var e=new MessageChannel;return e.port1.onmessage=c,function(){return e.port2.postMessage(0)}}():void 0===Y?function(){try{var e=n(40);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return s()}}():s();var te=Math.random().toString(36).substring(16),ne=void 0,re=1,oe=2,ae=new x,ie=new x,le=0;return j.prototype._enumerate=function(e){for(var t=0;this._state===ne&&t<e.length;t++)this._eachEntry(e[t],t)},j.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===d){var o=m(e);if(o===f&&e._state!==ne)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===H){var a=new n(p);w(a,e,o),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},j.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===ne&&(this._remaining--,e===oe?S(r,n):this._result[t]=n),0===this._remaining&&T(r,this._result)},j.prototype._willSettleAt=function(e,t){var n=this;_(e,void 0,function(e){return n._settledAt(re,t,e)},function(e){return n._settledAt(oe,t,e)})},H.all=D,H.race=A,H.resolve=d,H.reject=L,H._setScheduler=a,H._setAsap=i,H._asap=G,H.prototype={constructor:H,then:f,catch:function(e){return this.then(null,e)}},H.polyfill=B,H.Promise=H,H})}).call(t,n(38),n(39))},function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function l(){m&&h&&(m=!1,h.length?y=h.concat(y):b=-1,y.length&&u())}function u(){if(!m){var e=a(l);m=!0;for(var t=y.length;t;){for(h=y,y=[];++b<t;)h&&h[b].run();b=-1,t=y.length}h=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,d,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var h,y=[],m=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new s(e,t)),1!==y.length||m||a(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),l=r(i);n(42);var u=function(e){var t=e.togglePanel,n=e.isExpanded,r=e.sectionId,o=e.title,i=function(e){13!==e.which&&32!==e.which||t()};return a.default.createElement("div",{className:"h5p-hub-client-drop-down","aria-level":"1",role:"heading"},a.default.createElement("div",{className:"icon-hub-icon",role:"button",onClick:t,onKeyUp:i,"aria-expanded":n.toString(),"aria-controls":"panel-body-"+r,tabIndex:"0"},a.default.createElement("span",{className:"h5p-hub-description"},"H5P Hub."),a.default.createElement("span",{className:"h5p-hub-selected"},o)))};u.propTypes={togglePanel:l.default.func.isRequired,isExpanded:l.default.bool.isRequired,sectionId:l.default.string.isRequired,title:l.default.string.isRequired},t.default=u},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c);n(44);var d=n(7),p=r(d),h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSelect=function(e){n.setState({selected:e}),n.props.onSelect(e)},n.state={selected:e.selected},n}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=s.default.Children.map(this.props.children,function(t){return s.default.createElement("li",{className:"tab-button","aria-selected":e.state.selected===t.props.id,"aria-controls":"tab-panel-"+t.props.id,role:"tab",key:t.props.id},s.default.createElement("a",{id:t.props.id,href:"#"},t.props.title))}),n=s.default.Children.map(this.props.children,function(t){return s.default.createElement("div",{className:"tabpanel"+(e.state.selected===t.props.id?"":" hidden"),id:"tab-panel-"+t.props.id,"aria-labelledby":t.props.id,role:"tabpanel"},t)});return s.default.createElement("div",{className:"tab-panel"},s.default.createElement("nav",null,s.default.createElement("ul",{role:"tablist"},s.default.createElement(p.default,{selected:this.props.children[0].props.id,onChange:this.handleSelect},t))),n)}}]),t}(s.default.Component);h.propTypes={selected:f.default.string.isRequired,onSelect:f.default.func.isRequired},t.default=h},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(3),p=r(d),h=n(47),y=r(h),m=n(49),b=r(m),v=n(51),g=r(v),w=n(55),C=r(w),E=n(78),T=r(E),S=n(79),_=r(S),O=n(2),x=r(O),k=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.handleDetailClose=function(){n.setState(function(e){return{detailViewActive:!1,setFocus:!e.setFocus}})},n.handleDetailUse=function(e){n.handleDetailClose(),n.props.onUse(e)},n.handleListSelect=function(e){n.setState({library:e,detailViewActive:!0})},n.handleFilterOn=function(e){n.setState({contentTypes:(0,_.default)(n.props.contentTypes,e,n.state.orderBy),filterOn:e,focused:null,detailViewActive:!1})},n.handleOrderBy=function(e){n.setState({contentTypes:(0,_.default)(n.props.contentTypes,null,e),orderBy:e,filterOn:"",focused:null})},n.handleFocus=function(e){n.setState({focused:e})},n.handleFocusMove=function(e){for(var t=n.state.focused||n.state.contentTypes[0],r=0;r<n.state.contentTypes.length;r++)if(t===n.state.contentTypes[r])return void(n.state.contentTypes[r+e]&&n.setState({focused:n.state.contentTypes[r+e]}))},n.handleSearchSelect=function(){var e=n.state.focused||n.state.contentTypes[0];e&&(e.installed?n.props.onUse(e):n.handleListSelect(e))},n.handleWarningClose=function(){n.setState({warnOutdated:!1})},n.handleRetry=function(){n.setState({retrying:!0}),n.props.onReload()};return n.state={orderBy:"recently",contentTypes:(0,_.default)(e.contentTypes,null,"recently"),detailViewActive:!1,warnOutdated:n.props.contentTypes.outdated},n}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(function(t){var n=void 0;if(t.library)for(var r=0;r<e.contentTypes.libraries.length;r++){var o=e.contentTypes.libraries[r];o.machineName===t.library.machineName&&(n=o)}return{contentTypes:(0,_.default)(e.contentTypes,t.filterOn,t.orderBy),retrying:void 0,library:n}})}},{key:"render",value:function(){return this.props.contentTypes.libraries&&this.props.contentTypes.libraries.length?s.default.createElement("div",{className:"content-type-section-view loaded"},s.default.createElement(y.default,{value:this.state.filterOn,auto:!this.state.detailViewActive,setFocus:this.props.setFocus,onFilter:this.handleFilterOn,onNavigate:this.handleFocusMove,onSelect:this.handleSearchSelect}),!!this.state.warnOutdated&&s.default.createElement(p.default,{severity:"warning",title:x.default.get("contentTypeCacheOutdated"),message:x.default.get("contentTypeCacheOutdatedDesc"),onClose:this.handleWarningClose}),s.default.createElement("div",{className:"content-type-section"+(this.state.warnOutdated?" height-limit":"")+(this.state.filterOn?" filtering":"")},s.default.createElement(b.default,{hits:this.state.contentTypes.length,selected:this.state.orderBy,onChange:this.handleOrderBy,hasRecentlyUsed:!(!this.props.contentTypes.recentlyUsed||!this.props.contentTypes.recentlyUsed.length),searching:!!this.state.filterOn,visible:!this.state.detailViewActive}),s.default.createElement(g.default,{contentTypes:this.state.contentTypes,apiVersion:this.props.contentTypes.apiVersion,focused:this.state.focused,setFocus:!this.state.setFocus,visible:!this.state.detailViewActive,onUse:this.props.onUse,onSelect:this.handleListSelect,onFocus:this.handleFocus}),s.default.createElement(C.default,{library:this.state.library,apiVersion:this.props.contentTypes.apiVersion,visible:this.state.detailViewActive,onUse:this.handleDetailUse,onClose:this.handleDetailClose,getAjaxUrl:this.props.getAjaxUrl,onInstall:this.props.onInstall}))):s.default.createElement(T.default,{throbbing:this.state.retrying,details:this.props.error,onRetry:this.handleRetry})}}]),t}(s.default.Component);k.propTypes={contentTypes:f.default.object.isRequired,setFocus:f.default.bool,getAjaxUrl:f.default.func.isRequired,onUse:f.default.func.isRequired,onInstall:f.default.func.isRequired},t.default=k},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(2),p=r(d);n(48);var h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){var t=e.target;t.value!==n.state.value&&(n.setState({value:t.value}),n.props.auto&&!n.searchTimer&&(n.searchTimer=setTimeout(function(){n.props.onFilter(t.value),n.searchTimer=null},40)))},n.handleKeyDown=function(e){switch(e.which){case 38:n.props.onNavigate(-1),e.preventDefault();break;case 40:n.props.onNavigate(1),e.preventDefault();break;case 13:n.props.auto?n.props.onSelect():n.props.onFilter(e.target.value),e.preventDefault()}},n.state={value:""},n}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value}),e.setFocus!==this.props.setFocus&&this.setState({focusOnRender:e.setFocus})}},{key:"componentDidUpdate",value:function(){this.state.focusOnRender&&(delete this.state.focusOnRender,this.input.focus())}},{key:"render",value:function(){var e=this,t=p.default.get("contentTypeSearchFieldPlaceholder");return s.default.createElement("div",{className:"search-wrapper",role:"search"},s.default.createElement("div",{className:"border-wrap"},s.default.createElement("input",{id:"hub-search-bar",type:"text",value:this.state.value||"","aria-label":t,placeholder:t,onInput:this.handleInput,onKeyDown:function(t){return e.handleKeyDown(t)},ref:function(t){return e.input=t}}),s.default.createElement("div",{className:"icon-search"})))}}]),t}(s.default.Component);h.propTypes={value:f.default.string,auto:f.default.bool.isRequired,onFilter:f.default.func.isRequired,onNavigate:f.default.func.isRequired,onSelect:f.default.func.isRequired},t.default=h},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),l=r(i),u=n(7),s=r(u),c=n(2),f=r(c);n(50);var d=function(e){var t=e.hits,n=e.selected,r=e.onChange,o=e.hasRecentlyUsed,i=e.searching,l=e.visible;return a.default.createElement("div",{className:"navbar"+(l?"":" hidden")},a.default.createElement("div",{className:"result-header"},i?f.default.get("searchResults"):f.default.get("contentTypeSectionAll"),a.default.createElement("span",{className:"result-hits"},"(",f.default.get("numResults").replace(":num",t),")")),!i&&a.default.createElement("div",{id:"sort-by",className:"sort-by-header"},f.default.get("show"),":"),!i&&a.default.createElement("ul",{className:"sort-by-list","aria-labelledby":"sort-by"},a.default.createElement(s.default,{selected:n,onChange:r},a.default.createElement("li",null,a.default.createElement("a",{href:"#",id:"recently"},f.default.get(o?"recentlyUsedFirst":"popularFirst"))),a.default.createElement("li",null,a.default.createElement("a",{href:"#",id:"newest"},f.default.get("newestFirst"))),a.default.createElement("li",null,a.default.createElement("a",{href:"#",id:"a-to-z"},f.default.get("aToZ"))))))};d.propTypes={hits:l.default.number.isRequired,selected:l.default.string.isRequired,onChange:l.default.func.isRequired,hasRecentlyUsed:l.default.bool.isRequired,searching:l.default.bool.isRequired,visible:l.default.bool.isRequired},t.default=d},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(52),p=r(d),h=n(7),y=r(h),m=n(2),b=r(m);n(54);var v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getLibrary=function(e){for(var t=0;t<n.props.contentTypes.length;t++){var r=n.props.contentTypes[t];if(r.machineName.toLocaleLowerCase().replace(".","-")===e)return r}},n.handleFocus=function(e){n.props.onFocus(n.getLibrary(e))},n.handleSelect=function(e){var t=n.getLibrary(e);t.installed?n.props.onUse(t):(n.props.onSelect(t),n.props.onFocus(t))},n.scrollIntoView=function(e){var t=n.choose.items[0].offsetTop;if(e.offsetTop-t<n.list.scrollTop)return void(n.list.scrollTop=e.offsetTop-t);var r=e.offsetTop-t+e.clientHeight;if(r>n.list.scrollTop+n.list.clientHeight){var o=window.getComputedStyle(n.listElement);n.list.scrollTop=r-n.list.clientHeight+parseFloat(o.marginTop)+parseFloat(o.marginBottom)}},n}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){e.contentTypes!==this.props.contentTypes&&this.setState({resetScroll:!0})}},{key:"componentDidUpdate",value:function(){if(this.state&&this.state.resetScroll)delete this.state.resetScroll,this.list.scrollTop=0;else if(this.props.focused&&this.choose&&this.choose.items)for(var e=this.props.focused.machineName.toLocaleLowerCase().replace(".","-"),t=0;t<this.choose.items.length;t++)if(e===this.choose.items[t].id){this.scrollIntoView(this.choose.items[t]);break}}},{key:"render",value:function(){var e=this,t=this.props.contentTypes.map(function(t,n){return s.default.createElement("li",{key:n,id:t.machineName.toLocaleLowerCase().replace(".","-"),className:"media"},s.default.createElement(p.default,{contentType:t,apiVersion:e.props.apiVersion,tabindex:e.props.focused?e.props.focused===t?0:-1:0===n?0:-1,onSelect:e.props.onSelect}))});return s.default.createElement("div",{className:"content-type-list","aria-hidden":!this.props.visible,ref:function(t){return e.list=t}},this.props.contentTypes.length?s.default.createElement("ol",{ref:function(t){return e.listElement=t}},s.default.createElement(y.default,{selected:this.props.focused?this.props.focused.machineName.toLocaleLowerCase().replace(".","-"):null,setFocus:this.props.setFocus,onChange:this.handleSelect,onFocus:this.handleFocus,ref:function(t){return e.choose=t}},t)):s.default.createElement("div",{className:"no-results"},s.default.createElement("div",{className:"no-results-title"},b.default.get("noResultsFound")),s.default.createElement("div",{className:"no-results-desc"},b.default.get("noResultsFoundDesc"))))}}]),t}(s.default.Component);v.propTypes={contentTypes:f.default.array.isRequired,apiVersion:f.default.object.isRequired,focused:f.default.object,visible:f.default.bool,setFocus:f.default.bool,onUse:f.default.func.isRequired,onSelect:f.default.func.isRequired,onFocus:f.default.func.isRequired},t.default=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),l=r(i),u=n(12),s=r(u),c=n(2),f=r(c),d=n(13),p=r(d);n(53);var h=function(e){var t=e.contentType,n=e.apiVersion,r=e.tabindex,o=e.onSelect,i=t.title||t.machineName,l=(0,p.default)(t,n),u=function(e){o(t),e.preventDefault()},c=function(e){13!==e.which&&32!==e.which||u(e)};return a.default.createElement("div",null,a.default.createElement("div",{className:"media-left"},a.default.createElement("img",{className:"media-object",src:t.icon||s.default,alt:i+" "+f.default.get("contentTypeIconAltText")})),a.default.createElement("div",{className:"media-body"},a.default.createElement("div",{className:"h4 media-heading"},i),t.installed?a.default.createElement("button",{type:"button",className:"button button-primary",tabIndex:r,onClick:u,onKeyDown:c},f.default.get("contentTypeDetailButtonLabel")):a.default.createElement("button",{type:"button",className:"button button-inverse-primary button-install",tabIndex:r},f.default.get("contentTypeGetButtonLabel")),a.default.createElement("div",{className:"content-type-update-info"+(l?"":" hidden")},f.default.get("contentTypeUpdateAvailable")),a.default.createElement("div",{className:"description"},t.summary||"")))};h.propTypes={contentType:l.default.object.isRequired,apiVersion:l.default.object.isRequired,tabindex:l.default.number.isRequired,onSelect:l.default.func.isRequired},t.default=h},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(1),d=r(f),p=n(2),h=r(p),y=n(13),m=r(y),b=n(8);n(6);var v=n(5),g=r(v),w=n(12),C=r(w),E=n(3),T=r(E),S=n(56),_=r(S),O=n(65),x=r(O),k=n(71),P=r(k),I=n(73),N=r(I),M=n(75),j=r(M);n(77);var R={},D=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onTransitionEnd=function(){!n.state.visible&&n.state.showImageSlider?n.setState({showImageSlider:!1}):n.state.visible&&n.setState({focusUseButton:n.state.visible})},n.onImageSelect=function(e){n.setState({modalType:"screenshots",selectedScreenshot:e})},n.onModalClose=function(){n.setState({modalType:void 0,licenseDetails:void 0})},n.handleInstall=function(){n.setState({installing:!0,errorMessage:null,infoMessage:null}),(0,g.default)(n.props.getAjaxUrl("library-install",{id:n.props.library.machineName}),"").then(function(e){n.props.onInstall(e.data);var t=n.props.installed?"contentTypeUpdateSuccess":"contentTypeInstallSuccess",r=n.props.library.title||n.props.library.machineName;n.setState({installed:!0,installing:!1,infoMessage:{title:h.default.get(t,{":contentType":r}),message:e.data.details}})}).catch(function(e){n.setState({updating:!1,installing:!1,errorMessage:e})})},n.handleClose=function(e){e.preventDefault(),n.props.onClose()},n.handleUse=function(){n.props.onUse(n.props.library)},n.handleShowLicenseDetails=function(){var e=n.props.library.license.id,t=R[e];t?n.setState({licenseDetails:t}):fetch("https://api.h5p.org/v1/licenses/"+n.props.library.license.id).then(function(e){return e.json()}).then(function(r){t=!1===r.success?h.default.get("licenseFetchDetailsFailed"):R[e]=r.description.replace(":owner",n.props.library.owner).replace(":year",(new Date).getFullYear()),n.setState({licenseDetails:t})}).catch(function(){n.setState({licenseDetails:h.default.get("licenseFetchDetailsFailed")})}),n.setState({modalType:"license"})},n.handleErrorDismiss=function(){n.setState({errorMessage:null})},n.handleInfoDismiss=function(){n.setState({infoMessage:null})},n.handleBackKeyPress=function(e){32===e.which&&n.handleClose(e)},n.openExampleUrl=function(){window.open(n.props.library.example,"_blank")},n.state={visible:!1,selectedScreenshot:0,modalType:void 0,installed:!1,canInstall:!1,updatable:!1,installing:!1,showImageSlider:!0,message:void 0,opened:!1},n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){e.library&&(this.props.library!==e.library&&this.setState({errorMessage:null,infoMessage:null}),!this.props.visible&&e.visible?this.setState({opened:!0}):this.setState({opened:!1}),this.setState({installed:e.library.installed,canInstall:e.library.canInstall,updatable:(0,m.default)(e.library,e.apiVersion),installing:!1,visible:e.visible,showImageSlider:!0}))}},{key:"render",value:function(){var e=this,t="content-type-detail"+(this.state.visible?" show":""),n="content-type-detail-view-title";if(!this.props.library)return c.default.createElement("div",{className:t,id:"content-type-detail"});var r=function(){return"screenshots"===e.state.modalType?c.default.createElement(P.default,{images:e.props.library.screenshots,imagesToShow:1,showProgress:!0,selected:e.state.selectedScreenshot}):"license"===e.state.modalType?c.default.createElement("div",null,c.default.createElement("div",{className:"modal-header"},h.default.get("licenseModalTitle")),c.default.createElement("div",{className:"modal-content"},c.default.createElement("h5",{id:"license-details-id",className:"modal-title"},e.props.library.license.id),c.default.createElement("div",{id:"license-details-description",className:e.state.licenseDetails?void 0:"loading",dangerouslySetInnerHTML:{__html:e.state.licenseDetails}}))):null},o={};return"screenshots"===this.state.modalType&&(o.label=h.default.get("imageLightboxTitle")),"license"===this.state.modalType&&this.state.licenseDetails&&(o.labelledby="license-details-id",o.describedby="license-details-description"),c.default.createElement("div",{className:t,id:"content-type-detail",role:"region",tabIndex:"-1","aria-labelledby":n,onTransitionEnd:this.onTransitionEnd},c.default.createElement("a",{href:"#",className:"back-button icon-arrow-thick","aria-label":h.default.get("contentTypeBackButtonLabel"),onClick:this.handleClose,onKeyPress:this.handleBackKeyPress}),c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"image-wrapper"},c.default.createElement("img",{className:"img-responsive content-type-image",src:this.props.library.icon||C.default})),c.default.createElement("div",{className:"text-details"},c.default.createElement("h2",{id:n,className:"title",tabIndex:"-1"},this.props.library.title||this.props.library.machineName),c.default.createElement("div",{className:"owner"},this.props.library.owner),c.default.createElement(j.default,{text:this.props.library.description,maxLength:285}),this.props.library.example&&c.default.createElement("a",{className:"button demo-button",target:"_blank",href:this.props.library.example||"#",onKeyPress:function(t){return(0,b.onSpaceOrEnterEvent)(t,e.openExampleUrl)}},h.default.get("contentTypeDemoButtonLabel")))),this.state.showImageSlider&&this.props.library.screenshots&&c.default.createElement(P.default,{images:this.props.library.screenshots,onImageSelect:this.onImageSelect,showProgress:!1,selected:this.state.selectedScreenshot}),c.default.createElement("hr",null),!!this.state.errorMessage&&c.default.createElement(T.default,l({},this.state.errorMessage,{severity:"error",onClose:this.handleErrorDismiss})),!!this.state.infoMessage&&c.default.createElement(T.default,l({},this.state.infoMessage,{severity:"info",onClose:this.handleInfoDismiss})),c.default.createElement(N.default,{installed:this.state.installed,canInstall:this.state.canInstall,updatable:this.state.updatable,installing:this.state.installing,onInstall:this.handleInstall,onUse:this.handleUse,opened:this.state.opened}),c.default.createElement(x.default,{id:this.props.library.license?this.props.library.license.id:"Unspecified",attributes:this.props.library.license?this.props.library.license.attributes:void 0,onShowLicenseDetails:this.handleShowLicenseDetails}),c.default.createElement(_.default,{visible:void 0!==this.state.modalType,onClose:this.onModalClose,className:this.state.modalType||"",aria:o},c.default.createElement(r,null)))}}]),t}(c.default.Component);D.propTypes={visible:d.default.bool.isRequired,onInstall:d.default.func.isRequired,onUse:d.default.func.isRequired,onClose:d.default.func.isRequired,getAjaxUrl:d.default.func.isRequired,library:d.default.shape({installed:d.default.bool.isRequired,canInstall:d.default.bool.isRequired,isUpToDate:d.default.bool.isRequired,example:d.default.string,title:d.default.string,description:d.default.string.isRequired,machineName:d.default.string.isRequired,screenshots:d.default.arrayOf(d.default.shape({url:b.nonEmptyString,alt:b.nonEmptyString})),owner:d.default.string.isRequired,icon:d.default.string,license:d.default.shape({id:d.default.string.isRequired,attributes:d.default.shape({canHoldLiable:d.default.bool.isRequired,useCommercially:d.default.bool,modifiable:d.default.bool,distributable:d.default.bool,sublicensable:d.default.bool,mustIncludeCopyright:d.default.bool,mustIncludeLicense:d.default.bool})})})},t.default=D},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(57),f=r(c),d=n(1),p=r(d),h=n(19),y=r(h),m=n(2),b=r(m);n(64);var v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.closeModal=function(){document.querySelector(".h5p-section-content-types").removeAttribute("aria-hidden"),n.props.onClose()},n.getParent=function(){return document.querySelector(".h5p-hub")},f.default.setAppElement(".h5p-section-content-types"),n.state={modalIsOpen:!1},n}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({modalIsOpen:e.visible})}},{key:"render",value:function(){var e={className:"lightbox-close","aria-label":b.default.get("close")};return s.default.createElement(f.default,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,contentLabel:this.props.label,parentSelector:this.getParent,className:"lightbox-inner "+this.props.className,overlayClassName:"lightbox",aria:this.props.aria},s.default.createElement(y.default,{buttonProps:e,onButtonClick:this.closeModal}),this.props.children)}}]),t}(s.default.Component);v.propTypes={onClose:p.default.func.isRequired,aria:p.default.shape({label:p.default.string,labelledby:p.default.string,describedby:p.default.string}),className:p.default.string.isRequired},t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return e()}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),d=r(f),p=n(11),h=r(p),y=n(1),m=r(y),b=n(59),v=r(b),g=n(15),w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(g),C=n(17),E=r(C),T=t.portalClassName="ReactModalPortal",S=t.bodyOpenClassName="ReactModal__Body--open",_=void 0!==h.default.createPortal,O=_?h.default.createPortal:h.default.unstable_renderSubtreeIntoContainer,x=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.removePortal=function(){!_&&h.default.unmountComponentAtNode(r.node),l(r.props.parentSelector).removeChild(r.node)},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=O(r,d.default.createElement(v.default,s({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},i=n,a(r,i)}return i(t,e),c(t,[{key:"componentDidMount",value:function(){if(C.canUseDOM){_||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName;l(this.props.parentSelector).appendChild(this.node),!_&&this.renderPortal(this.props)}}},{key:"componentWillReceiveProps",value:function(e){if(C.canUseDOM){var t=e.isOpen;if(this.props.isOpen||t){var n=l(this.props.parentSelector),r=l(e.parentSelector);r!==n&&(n.removeChild(this.node),r.appendChild(this.node)),!_&&this.renderPortal(e)}}}},{key:"componentWillUpdate",value:function(e){C.canUseDOM&&e.portalClassName!==this.props.portalClassName&&(this.node.className=e.portalClassName)}},{key:"componentWillUnmount",value:function(){if(C.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return C.canUseDOM&&_?(!this.node&&_&&(this.node=document.createElement("div")),O(d.default.createElement(v.default,s({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){w.setElement(e)}}]),t}(f.Component);x.propTypes={isOpen:m.default.bool.isRequired,style:m.default.shape({content:m.default.object,overlay:m.default.object}),portalClassName:m.default.string,bodyOpenClassName:m.default.string,className:m.default.oneOfType([m.default.string,m.default.shape({base:m.default.string.isRequired,afterOpen:m.default.string.isRequired,beforeClose:m.default.string.isRequired})]),overlayClassName:m.default.oneOfType([m.default.string,m.default.shape({base:m.default.string.isRequired,afterOpen:m.default.string.isRequired,beforeClose:m.default.string.isRequired})]),appElement:m.default.instanceOf(E.default),onAfterOpen:m.default.func,onRequestClose:m.default.func,closeTimeoutMS:m.default.number,ariaHideApp:m.default.bool,shouldFocusAfterRender:m.default.bool,shouldCloseOnOverlayClick:m.default.bool,shouldReturnFocusAfterClose:m.default.bool,parentSelector:m.default.func,aria:m.default.object,role:m.default.string,contentLabel:m.default.string,shouldCloseOnEsc:m.default.bool},x.defaultProps={isOpen:!1,portalClassName:T,bodyOpenClassName:S,ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},x.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},t.default=x},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c="function"==typeof Symbol&&"symbol"===u(Symbol.iterator)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":u(e)},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),p=o(d),h=n(1),y=o(h),m=n(60),b=r(m),v=n(61),g=o(v),w=n(15),C=r(w),E=n(16),T=r(E),S=n(62),_=r(S),O=n(17),x=o(O),k={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},P=9,I=27,N=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setFocusAfterRender=function(e){n.focusAfterRender=n.props.shouldFocusAfterRender&&e},n.setOverlayRef=function(e){n.overlay=e},n.setContentRef=function(e){n.content=e},n.afterClose=function(){_.remove(n.props.bodyOpenClassName),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(b.returnFocus(),b.teardownScopedFocus()):b.popWithoutFocus())},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(b.setupScopedFocus(n.node),b.markForFocusLater()),n.setState({isOpen:!0},function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen()}))},n.close=function(){n.beforeClose(),n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){e.keyCode===P&&(0,g.default)(n.content,e),n.props.shouldCloseOnEsc&&e.keyCode===I&&(e.preventDefault(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null,n.moveFromContentToOverlay=null},n.handleOverlayOnMouseUp=function(){null===n.moveFromContentToOverlay&&(n.shouldClose=!1)},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(){n.moveFromContentToOverlay=!1},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1,n.moveFromContentToOverlay=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===(void 0===t?"undefined":c(t))?t:{base:k[e],afterOpen:k[e]+"--after-open",beforeClose:k[e]+"--before-close"},o=r.base;return n.state.afterOpen&&(o=o+" "+r.afterOpen),n.state.beforeClose&&(o=o+" "+r.beforeClose),"string"==typeof t&&t?o+" "+t:o},n.ariaAttributes=function(e){return Object.keys(e).reduce(function(t,n){return t["aria-"+n]=e[n],t},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&(this.setFocusAfterRender(!0),this.open())}},{key:"componentWillReceiveProps",value:function(e){!this.props.isOpen&&e.isOpen?(this.setFocusAfterRender(!0),this.open()):this.props.isOpen&&!e.isOpen&&this.close()}},{key:"componentDidUpdate",value:function(){this.focusAfterRender&&(this.focusContent(),this.setFocusAfterRender(!1))}},{key:"componentWillUnmount",value:function(){_.remove(this.props.bodyOpenClassName),this.beforeClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.bodyOpenClassName;_.add(r),n&&C.hide(t)}},{key:"beforeClose",value:function(){var e=this.props,t=e.appElement;e.ariaHideApp&&T.totalCount()<1&&C.show(t)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayClassName,r=e.defaultStyles,o=t?{}:r.content,a=n?{}:r.overlay;return this.shouldBeClosed()?null:p.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",n),style:s({},a,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown,onMouseUp:this.handleOverlayOnMouseUp},p.default.createElement("div",s({ref:this.setContentRef,style:s({},o,this.props.style.content),className:this.buildClassName("content",t),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.ariaAttributes(this.props.aria||{})),this.props.children))}}]),t}(d.Component);N.defaultProps={style:{overlay:{},content:{}}},N.propTypes={isOpen:y.default.bool.isRequired,defaultStyles:y.default.shape({content:y.default.object,overlay:y.default.object}),style:y.default.shape({content:y.default.object,overlay:y.default.object}),className:y.default.oneOfType([y.default.string,y.default.object]),overlayClassName:y.default.oneOfType([y.default.string,y.default.object]),bodyOpenClassName:y.default.string,ariaHideApp:y.default.bool,appElement:y.default.instanceOf(x.default),onAfterOpen:y.default.func,onRequestClose:y.default.func,closeTimeoutMS:y.default.number,shouldFocusAfterRender:y.default.bool,shouldCloseOnOverlayClick:y.default.bool,shouldReturnFocusAfterClose:y.default.bool,role:y.default.string,contentLabel:y.default.string,aria:y.default.object,children:y.default.node,shouldCloseOnEsc:y.default.bool},t.default=N,e.exports=t.default},function(e,t,n){"use strict";function r(){h=!0}function o(){if(h){if(h=!1,!p)return;setTimeout(function(){if(!p.contains(document.activeElement)){((0,f.default)(p)[0]||p).focus()}},0)}}function a(){d.push(document.activeElement)}function i(){var e=null;try{return e=d.pop(),void e.focus()}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function l(){d.length>0&&d.pop()}function u(e){p=e,window.addEventListener?(window.addEventListener("blur",r,!1),document.addEventListener("focus",o,!0)):(window.attachEvent("onBlur",r),document.attachEvent("onFocus",o))}function s(){p=null,window.addEventListener?(window.removeEventListener("blur",r),document.removeEventListener("focus",o)):(window.detachEvent("onBlur",r),document.detachEvent("onFocus",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=r,t.handleFocus=o,t.markForFocusLater=a,t.returnFocus=i,t.popWithoutFocus=l,t.setupScopedFocus=u,t.teardownScopedFocus=s;var c=n(14),f=function(e){return e&&e.__esModule?e:{default:e}}(c),d=[],p=null,h=!1},function(e,t,n){"use strict";function r(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var r=t.shiftKey,o=n[0],i=n[n.length-1];if(e!==document.activeElement){var l;if(i!==document.activeElement||r||(l=o),o===document.activeElement&&r&&(l=i),l)return t.preventDefault(),void l.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=u&&"Chrome"!=u[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var s=n.indexOf(document.activeElement);s>-1&&(s+=r?-1:1),t.preventDefault(),n[s].focus()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(14),a=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports=t.default},function(e,t,n){"use strict";function r(e){e.split(" ").map(i.add).forEach(function(e){return document.body.classList.add(e)})}function o(e){var t=i.get();e.split(" ").map(i.remove).filter(function(e){return 0===t[e]}).forEach(function(e){return document.body.classList.remove(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.add=r,t.remove=o;var a=n(16),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a)},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){var a=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};"object"===o(n(18))&&n(18)?void 0!==(r=function(){return i}.call(t,n,t,e))&&(e.exports=r):void 0!==e&&e.exports?e.exports=i:window.ExecutionEnvironment=i}()},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),l=r(i),u=n(2),s=r(u),c=n(66),f=r(c),d=n(68),p=r(d);n(70);var h=function(e){var t=e.id,n=e.attributes,r=e.onShowLicenseDetails;return a.default.createElement(f.default,null,a.default.createElement(p.default,{header:s.default.get("contentTypeLicensePanelTitle"),id:t,attributes:n,onShowLicenseDetails:r}))};h.propTypes={id:l.default.string,onShowLicenseDetails:l.default.func,attributes:l.default.shape({canHoldLiable:l.default.bool,useCommercially:l.default.bool,modifiable:l.default.bool,distributable:l.default.bool,sublicensable:l.default.bool,mustIncludeCopyright:l.default.bool,mustIncludeLicense:l.default.bool})},t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(19),f=r(c);n(67);var d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={expanded:e.expanded},n}return i(t,e),l(t,[{key:"handleToggle",value:function(e){this.setState({expanded:this.state.expanded===e.props.id?void 0:e.props.id})}},{key:"render",value:function(){var e=this,t=s.default.Children.map(this.props.children,function(t){var n={className:"h5p-hub-accordion-toggler","aria-expanded":e.state.expanded===t.props.id};return s.default.createElement("div",null,s.default.createElement("dt",{"aria-level":"2",role:"heading",className:"h5p-hub-accordion-heading"},s.default.createElement(f.default,{buttonProps:n,onButtonClick:function(){return e.handleToggle(t)}},s.default.createElement("span",{className:"icon-accordion-arrow"}),s.default.createElement("span",null,t.props.header))),s.default.createElement("dl",{role:"region",className:"h5p-hub-accordion-region"+(e.state.expanded==t.props.id?"":" hidden")},s.default.createElement("div",{className:"panel-body"},t)))});return s.default.createElement("dl",{className:"h5p-hub-accordion"},t)}}]),t}(s.default.Component);t.default=d},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(2),p=r(d);n(69);var h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"renderSection",value:function(e){return e?s.default.createElement("div",{className:"short-license-info"},s.default.createElement("h3",null,this.props.id),s.default.createElement("button",{type:"button",className:"short-license-read-more","aria-label":p.default.get("readMore"),onClick:this.props.onShowLicenseDetails}),s.default.createElement("p",null,p.default.get("licenseDescription")),s.default.createElement("ul",{className:"ul small"},s.default.createElement("li",null,p.default.get(this.props.attributes.canHoldLiable?"licenseCanHoldLiable":"licenseCannotHoldLiable")),this.props.attributes.useCommercially&&s.default.createElement("li",null,p.default.get("licenseCanUseCommercially")),this.props.attributes.modifiable&&s.default.createElement("li",null,p.default.get("licenseCanModify")),this.props.attributes.distributable&&s.default.createElement("li",null,p.default.get("licenseCanDistribute")),this.props.attributes.sublicensable&&s.default.createElement("li",null,p.default.get("licenseCanSublicense")),this.props.attributes.mustIncludeCopyright&&s.default.createElement("li",null,p.default.get("licenseMustIncludeCopyright")),this.props.attributes.mustIncludeLicense&&s.default.createElement("li",null,p.default.get("licenseMustIncludeLicense")))):s.default.createElement("div",{className:"short-license-info"},s.default.createElement("p",null,p.default.get("licenseUnspecified")))}},{key:"render",value:function(){return this.renderSection("Unspecified"!==this.props.id)}}]),t}(s.default.Component);h.propTypes={id:f.default.string,onShowLicenseDetails:f.default.func,attributes:f.default.shape({canHoldLiable:f.default.bool,useCommercially:f.default.bool,modifiable:f.default.bool,distributable:f.default.bool,sublicensable:f.default.bool,mustIncludeCopyright:f.default.bool,mustIncludeLicense:f.default.bool})},t.default=h},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(2),p=r(d),h=n(8);n(72);var y=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return m.call(n),n.state={imagesToShow:n.props.imagesToShow||5,offset:n.props.selected||0,selected:n.props.selected||0,modalIsOpen:!1,focusOnRender:!1},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.imagesToShow||window.addEventListener("resize",this.onWindowResized)}},{key:"componentWillUnmount",value:function(){this.props.imagesToShow||window.removeEventListener("resize",this.onWindowResized)}},{key:"shouldComponentUpdate",value:function(e,t){return!(this.state.focusOnRender&&!t.focusOnRender)}},{key:"moveFocus",value:function(e){var t=this;this.setState(function(n){var r=n.selected+e;if(r>=0&&r<t.props.images.length){var o=n.offset;return r<n.offset?o=n.offset-1:r>=n.offset+n.imagesToShow&&(o=n.offset+1),{selected:r,focusOnRender:!0,offset:o}}})}},{key:"componentWillReceiveProps",value:function(e){this.setState({selected:e.selected||0,offset:0})}},{key:"componentDidUpdate",value:function(){this.state.focusOnRender&&(this.items[this.state.selected].focus(),this.scroller.scrollLeft=0,this.setState({focusOnRender:!1}))}},{key:"handleKeyDown",value:function(e,t){if(!e.defaultPrevented){var n=!1;switch(e.which){case 37:case 38:this.moveFocus(-1),n=!0;break;case 39:case 40:this.moveFocus(1),n=!0;break;case 32:case 13:this.handleImageSelected(t),n=!0}n&&(e.stopPropagation(),e.preventDefault())}}},{key:"render",value:function(){var e=this,t=this.props.images;if(!t||!t.length)return null;var n=this.state.imagesToShow,r=t.length,o={width:100/r+"%"},a=100*r/n,i={width:a+"%",marginLeft:"-"+this.state.offset*(a/r)+"%"};this.items=[];var l=t.map(function(t,n){return s.default.createElement("li",{key:n,style:o,tabIndex:n===e.state.selected?0:-1,onKeyDown:function(t){return e.handleKeyDown(t,n)},onClick:function(){return e.handleImageSelected(n)},ref:function(t){return t?e.items.push(t):void 0}},s.default.createElement("img",{src:t.url,alt:t.alt,className:e.props.onImageSelect?"selectable":""}))}),u=0===this.state.offset,c=this.state.imagesToShow+this.state.offset>=r,f=r>this.state.imagesToShow;return s.default.createElement("div",{className:"carousel",role:"region","aria-label":p.default.get("screenshots"),ref:function(t){return e.carousel=t},onKeyDown:this.handleGlobalKeyDown},f&&s.default.createElement(v,{type:"prev",label:p.default.get("previousImage"),onClick:this.previousSlide,disabled:u}),s.default.createElement("nav",{className:"scroller",ref:function(t){return e.scroller=t}},s.default.createElement("ul",{style:i,onTransitionEnd:h.stopPropagation},l)),f&&s.default.createElement(v,{type:"next",label:p.default.get("nextImage"),onClick:this.nextSlide,disabled:c}),this.props.showProgress&&s.default.createElement("div",{className:"progress",role:"alert"},p.default.get("imageLightBoxProgress").replace(":num",this.state.offset+1).replace(":total",r)))}}]),t}(s.default.Component),m=function(){var e=this;this.onWindowResized=function(){if(e.carousel){for(var t=e.carousel.offsetWidth,n=5,r=0;r<b.length;r++)if(t<b[r].breakpoint){n=b[r].imagesToShow;break}e.state.imagesToShow!=n&&e.setState({imagesToShow:n,offset:0,selected:0})}},this.handleImageSelected=function(t){e.props.onImageSelect&&e.props.onImageSelect(t)},this.previousSlide=function(){e.setState(function(e){var t=e.offset-1;if(t>=0)return{offset:t,selected:t}})},this.nextSlide=function(){e.setState(function(e,t){var n=e.offset+1;if(n<t.images.length)return{offset:n,selected:n}})},this.handleGlobalKeyDown=function(t){39===t.which?e.nextSlide():37===t.which&&e.previousSlide()}},b=[{breakpoint:576,imagesToShow:2},{breakpoint:768,imagesToShow:3},{breakpoint:992,imagesToShow:4}],v=function(e){var t=e.onClick,n=e.type,r=e.disabled,o=e.label;return s.default.createElement("button",{className:"navigation "+n,"aria-disabled":r,"aria-label":o,disabled:r,onClick:t})};y.propTypes={onImageSelect:f.default.func,imagesToShow:f.default.number,showProgress:f.default.bool.isRequired,selected:f.default.number,images:f.default.arrayOf(f.default.shape({url:h.nonEmptyString,alt:h.nonEmptyString})).isRequired},t.default=y},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c),d=n(2),p=r(d);n(74);var h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={focusOnRender:!0},n}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){e.opened!==this.props.opened&&this.setState({focusOnRender:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state===t}},{key:"componentDidUpdate",value:function(){this.state.focusOnRender&&(this.useButton?this.useButton.focus():this.installButton.focus()),delete this.state.focusOnRender}},{key:"render",value:function(){var e=this,t=void 0,n=!1,r=this.props.installed&&!this.props.installing;return this.props.installed&&this.props.updatable?(t=this.props.installing?"Updating":"Update",n=this.props.installing):this.props.installed||(t=this.props.installing?"Installing":"Install",n=this.props.installing),s.default.createElement("div",{className:"h5p-hub-content-type-detail-button-bar"},t&&s.default.createElement("button",{type:"button",className:"button button-inverse-primary button-"+t.toLowerCase(),disabled:n,onClick:this.props.installing?void 0:this.props.onInstall,ref:function(t){return e.installButton=t}},p.default.get("contentType"+t+"ButtonLabel")),r&&s.default.createElement("button",{type:"button",className:"button button-primary button-use",onClick:this.props.onUse,ref:function(t){return e.useButton=t}},p.default.get("contentTypeUseButtonLabel")))}}]),t}(s.default.Component);h.propTypes={canInstall:f.default.bool.isRequired,installed:f.default.bool.isRequired,installing:f.default.bool.isRequired,updatable:f.default.bool.isRequired,onInstall:f.default.func.isRequired,onUse:f.default.func.isRequired,opened:f.default.bool.isRequired},t.default=h},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(2),f=r(c);n(76);var d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleToggle=function(e){e.preventDefault(),n.setState({expanded:!n.state.expanded})},n.handleKeyPress=function(e){32===e.which&&n.handleToggle(e)},n.state={expanded:!1},n}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.text;if(void 0===e||0===e.length)return null;var t=e.length>this.props.maxLength,n=t?e.substr(0,this.props.maxLength):e,r=t?e.substr(this.props.maxLength):"";return t&&!this.state.expanded&&(n+="…"),s.default.createElement("p",{className:"small"},s.default.createElement("span",{tabIndex:"-1"},n),t&&[s.default.createElement("span",{key:"part-two",tabIndex:"-1",className:this.state.expanded?"":"hidden"},r),s.default.createElement("a",{href:"#",key:"button",className:"link "+(this.state.expanded?"read-less":"read-more"),onClick:this.handleToggle,onKeyPress:this.handleKeyPress},f.default.get(this.state.expanded?"readLess":"readMore"))])}}]),t}(s.default.Component);t.default=d},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),l=r(i),u=n(3),s=r(u),c=n(2),f=r(c),d=function(e){var t=e.throbbing,n=e.details,r=e.onRetry,o=[f.default.get("noContentTypesAvailableDesc")];return n&&n.title&&(o.push(n.title),n.details&&(o=o.concat(n.details))),a.default.createElement(s.default,{severity:"error",title:f.default.get("noContentTypesAvailable"),message:o},a.default.createElement("button",{type:"button",className:"button button-primary retry-button",tabIndex:"0",onClick:r,disabled:t},f.default.get("tryAgain")))};d.propTypes={throbbing:l.default.bool,details:l.default.object,onRetry:l.default.func.isRequired},d.defaultProps={throbbing:!1},t.default=d},function(e,t,n){"use strict";function r(e,t,n){if(t){var r=e.libraries.map(function(e){return{contentType:e,score:u(t,e)}}).filter(function(t){return t.score>0&&!l(t.contentType,e.apiVersion)});return f(r)}var o=[a[n]];if("recently"===n)if(e.recentlyUsed&&e.recentlyUsed.length){for(var i=0;i<e.recentlyUsed.length;i++)for(var s=e.recentlyUsed[i],c=0;c<e.libraries.length;c++){var d=e.libraries[c];d.machineName===s&&(d.recently=i+1)}o.push("popularity")}else o=["popularity"];else"newest"===n&&o.splice(0,0,"installed");return f(e.libraries.filter(function(t){return!l(t,e.apiVersion)}),o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=[{name:"title",max:1e3,min:100},{name:"summary",max:50,min:25},{name:"description",max:50,min:25},{name:"keywords",max:50,min:25},{name:"machineName",max:1,min:.5}],a={recently:"recently",newest:"createdAt","a-to-z":"title"},i=["createdAt","updatedAt"],l=function(e,t){var n=!(t.major>e.h5pMajorVersion||t.major===e.h5pMajorVersion&&t.minor>=e.h5pMinorVersion);return e.restricted||!e.installed&&n},u=function(e,t){var n=e.split(" ").filter(function(e){return""!==e}),r=n.map(function(e){return s(e,t)});return r.indexOf(0)>-1?0:r.reduce(function(e,t){return e+t},0)},s=function(e,t){e=e.trim();for(var n=0;n<o.length;n++){var r=o[n],a=c(e,t[r.name],r.max,r.min);if(-1!==a)return a}return 0},c=function e(t,n,r,o){if(!n)return-1;if(n instanceof Array){for(var a=0;a<n.length;a++){var i=e(t,n[a],r,o);if(-1!==i)return i}return-1}var l=n.toLowerCase().indexOf(t.toLowerCase());return-1===l?-1:(r-o)*((n.length-l)/n.length)+o},f=t.multiSort=function(e,t){return e.map(function(e){return e.hasOwnProperty("score")&&e.hasOwnProperty("contentType")?e:{contentType:e,score:.1}}).sort(function(e,n){return t?d(e,n,t[0],t.slice(1)):p(e,n)}).map(function(e){return e.contentType})},d=function e(t,n,r,o){if(!t.contentType.hasOwnProperty(r))return 1;if(!n.contentType.hasOwnProperty(r))return-1;var a=-1===i.indexOf(r)?1:-1;return t.contentType[r]>n.contentType[r]?1*a:t.contentType[r]<n.contentType[r]?-1*a:o.length?e(t,n,o[0],o.slice(1)):0},p=function(e,t){return t.score!==e.score?t.score-e.score:t.contentType.popularity-e.contentType.popularity}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(1),d=r(f);n(81);var p=n(5),h=r(p),y=n(2),m=r(y),b=n(3),v=r(b),g=n(82),w=r(g),C=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleErrorDismiss=function(){n.setState({error:null})},n.state={fileSelected:!1,filePath:"",fileUploading:!1,error:void 0,uploadData:{}},n.handleValidation=n.handleValidation.bind(n),n.handleUpload=n.handleUpload.bind(n),n}return i(t,e),u(t,[{key:"handleValidation",value:function(e){if(this.setState({error:void 0}),0!==e.target.files.length){var t=e.target.files[0].name;"h5p"!==this.getFileExtension(t)?this.setState({fileSelected:!1,filePath:"",error:{title:m.default.get("h5pFileWrongExtensionTitle"),message:m.default.get("h5pFileWrongExtensionContent")}}):(this.setState({fileSelected:!0,filePath:t,fileUploading:!1,uploadData:e.target.files[0]}),e.stopPropagation())}}},{key:"handleUpload",value:function(){var e=this;this.setState({fileSelected:!0,fileUploading:!0});var t=new FormData;t.append("h5p",this.state.uploadData),t.append("contentId",this.props.contentId),(0,h.default)(this.props.getAjaxUrl("library-upload"),t).then(function(t){e.props.onUpload(t.data),e.setState({fileSelected:!1,fileUploading:!1,filePath:"",uploadData:{}})}).catch(function(t){e.setState({fileSelected:!1,fileUploading:!1,error:t,filePath:"",uploadData:{}})})}},{key:"getFileExtension",value:function(e){return e.replace(/^.*\./,"")}},{key:"render",value:function(){return c.default.createElement("div",{className:"upload-wrapper"},!!this.state.error&&c.default.createElement(v.default,l({},this.state.error,{severity:"error",onClose:this.handleErrorDismiss})),c.default.createElement("div",{className:"upload-throbber"+(this.state.fileUploading?"":" hidden"),"aria-label":m.default.get("uploadingThrobber")}),c.default.createElement("h1",{className:"upload-instruction-header"},m.default.get("uploadInstructionsTitle")),c.default.createElement(w.default,{fileSelected:this.state.fileSelected,fileUploading:this.state.fileUploading,filePath:this.state.filePath,setFocus:this.props.setFocus,onValidate:this.handleValidation,onUpload:this.handleUpload}),c.default.createElement("p",{className:"upload-instruction-description",dangerouslySetInnerHTML:{__html:m.default.get("uploadInstructionsContent")}}))}}]),t}(c.default.Component);C.propTypes={contentId:d.default.number.isRequired,onUpload:d.default.func.isRequired,getAjaxUrl:d.default.func.isRequired,setFocus:d.default.bool.isRequired},t.default=C},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),f=r(c);n(83),n(6);var d=n(2),p=r(d),h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.clickFileField=n.clickFileField.bind(n),n.componentDidUpdate=n.componentDidUpdate.bind(n),n}return i(t,e),l(t,[{key:"componentDidUpdate",value:function(){this.props.fileSelected?this.useButton.focus():this.fileField.value="",this.props.setFocus&&this.uploadButton.focus()}},{key:"clickFileField",value:function(){this.fileField.click()}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"upload-form"},s.default.createElement("input",{className:"upload-path",placeholder:this.props.fileSelected||this.props.fileUploading?this.props.filePath:p.default.get("uploadPlaceholder"),onClick:this.clickFileField,tabIndex:"-1",disabled:this.props.fileUploading,readOnly:!0}),s.default.createElement("button",{type:"button",ref:function(t){e.useButton=t},className:"button use-button","aria-hidden":this.props.fileSelected?"":"true",disabled:this.props.fileUploading,onClick:this.props.onUpload},p.default.get("contentTypeUseButtonLabel")),s.default.createElement("div",{className:"input-wrapper"},s.default.createElement("input",{type:"file",accept:".h5p","aria-hidden":"true",ref:function(t){e.fileField=t},onChange:this.props.onValidate}),s.default.createElement("button",{type:"button",ref:function(t){return e.uploadButton=t},className:"button upload-button",onClick:this.clickFileField,disabled:this.props.fileUploading,tabIndex:"0"},this.props.fileSelected?p.default.get("uploadFileButtonChangeLabel"):p.default.get("uploadFileButtonLabel"))))}}]),t}(s.default.Component);h.propTypes={fileSelected:f.default.bool.isRequired,fileUploading:f.default.bool.isRequired,filePath:f.default.string.isRequired,setFocus:f.default.bool.isRequired,onValidate:f.default.func.isRequired,onUpload:f.default.func.isRequired},t.default=h},function(e,t){},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Eventful=function(){return{listeners:{},on:function(e,t,n){var r={listener:t,scope:n};return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(r),this},trigger:function(e,t){return(this.listeners[e]||[]).every(function(e){return!1!==e.listener.call(e.scope||this,t)})},propagate:function(e,t,n){var r=this;e.forEach(function(e){return t.on(e,function(t){return r.trigger(n||e,t)})})}}}}]);;
var H5PEditor = H5PEditor || {};
var ns = H5PEditor;

/**
 * @class
 * @alias H5PEditor.SelectorHub
 */
ns.SelectorHub = function (libraries, selectedLibrary, changeLibraryDialog) {
  var self = this;

  H5P.EventDispatcher.call(this);

  /**
   * Looks up content type object
   *
   * @param {string} machineName
   * @return {object}
   */
  this.getContentType = function (machineName) {
    for (var i = 0; i < libraries.libraries.length; i++) {
      var contentType = libraries.libraries[i];

      if (contentType.machineName === machineName) {
        return contentType;
      }
    }
  };

  var state = {
    contentId: H5PEditor.contentId || 0,
    contentTypes: libraries,
    getAjaxUrl: H5PEditor.getAjaxUrl
  };

  if (selectedLibrary) {
    var contentType = this.getContentType(selectedLibrary.split(' ')[0]);
    state.title = contentType ? contentType.title || contentType.machineName : selectedLibrary.split(' ')[0];
  }

  // Initialize hub client
  this.client = new H5P.HubClient(state, H5PEditor.language.core);

  // Default to nothing selected and empty params
  this.currentLibrary = selectedLibrary;

  // Listen for content type selection
  this.client.on('select', function (event) {
    var contentType = event;

    // Already selected library
    if (contentType.machineName === self.currentLibrary.split(' ')[0]) {
      return;
    }

    if (!self.currentLibrary) {
      self.currentLibrary = self.createContentTypeId(contentType, true);
      self.trigger('selected');
      return;
    }

    self.currentLibrary = self.createContentTypeId(contentType, true);
    delete self.currentParams;
    changeLibraryDialog.show(ns.$(self.getElement()).offset().top);
  }, this);

  // Listen for uploads
  this.client.on('upload', function (event) {
    libraries = event.contentTypes;
    var previousLibrary = self.currentLibrary;

    // Use version from event data
    const uploadedVersion = event.h5p.preloadedDependencies
      .filter(function (dependency) {
        return dependency.machineName === event.h5p.mainLibrary;
      });
    self.currentLibrary = self.createContentTypeId(uploadedVersion[0]);
    self.currentParams = event.content;

    // Change library immediately or show confirmation dialog
    if (!previousLibrary) {
      self.trigger('selected');
    }
    else {
      changeLibraryDialog.show(ns.$(self.getElement()).offset().top);
    }

  }, this);

  this.client.on('update', function (event) {
    // Handle update to the content type cache
    libraries = event;
  });

  this.client.on('resize', function () {
    self.trigger('resize');
  });
};

// Extends the event dispatcher
ns.SelectorHub.prototype = Object.create(H5P.EventDispatcher.prototype);
ns.SelectorHub.prototype.constructor = ns.SelectorHub;

/**
 * Reset current library to the provided library.
 *
 * @param {string} library Full library name
 * @param {Object} params Library parameters
 */
ns.SelectorHub.prototype.resetSelection = function (library, params) {
  this.currentLibrary = library;
  this.currentParams = params;

  var contentType = this.getContentType(library.split(' ')[0]);
  this.client.setPanelTitle(contentType.title || contentType.machineName);
};

/**
 * Get currently selected library
 *
 * @param {function} next Callback
 */
ns.SelectorHub.prototype.getSelectedLibrary = function (next) {
  var selected = {
    uberName: this.currentLibrary
  };

  var contentType = this.getContentType(this.currentLibrary.split(' ')[0]);
  if (contentType) {
    selected.tutorialUrl = contentType.tutorial;
    selected.exampleUrl = contentType.example;
  }

  return next(selected);
};

/**
 * Get params connected with the currently selected library
 *
 * @returns {string} Parameters connected to the selected library
 */
ns.SelectorHub.prototype.getParams = function () {
  return this.currentParams;
};

/**
 * Returns the html element for the hub
 *
 * @public
 * @return {HTMLElement}
 */
ns.SelectorHub.prototype.getElement = function(){
  return this.client.getElement();
};

/**
 * Takes a content type, and extracts the full id (ubername)
 *
 * @param {ContentType} contentType
 * @param {boolean} [useLocalVersion] Decides if we should use local version or cached version
 *
 * @private
 * @return {string}
 */
ns.SelectorHub.prototype.createContentTypeId = function (contentType, useLocalVersion) {
  var id = contentType.machineName;
  if (useLocalVersion) {
    id += ' ' + contentType.localMajorVersion + '.' + contentType.localMinorVersion;
  }
  else {
    id += ' ' + contentType.majorVersion + '.' + contentType.minorVersion;
  }

  return id;
};
;
/**
 * @namespace
 */
var H5PEditor = (H5PEditor || {});
var ns = H5PEditor;

/**
 * Construct the editor.
 *
 * @class H5PEditor.Editor
 * @param {string} library
 * @param {Object} defaultParams
 * @param {Element} replace
 * @param {Function} iframeLoaded
 */
ns.Editor = function (library, defaultParams, replace, iframeLoaded) {
  var self = this;

  // Library may return "0", make sure this doesn't return true in checks
  library = library && library != 0 ? library : '';

  // Define iframe DOM Element through jQuery
  var $iframe = ns.$('<iframe/>', {
    'css': {
      display: 'block',
      width: '100%',
      height: '3em',
      border: 'none',
      zIndex: 101,
      top: 0,
      left: 0
    },
    'class': 'h5p-editor-iframe',
    'frameBorder': '0'
  });

  // The DOM element is often used directly
  var iframe = $iframe.get(0);

  /**
   * Set the iframe content and start loading the necessary assets
   *
   * @private
   */
  var populateIframe = function () {
    iframe.contentDocument.open();
    iframe.contentDocument.write(
      '<!doctype html><html>' +
      '<head>' +
      ns.wrap('<link rel="stylesheet" href="', ns.assets.css, '">') +
      ns.wrap('<script src="', ns.assets.js, '"></script>') +
      '</head><body>' +
      '<div class="h5p-editor h5peditor">' + ns.t('core', 'loading') + '</div>' +
      '</body></html>');
    iframe.contentDocument.close();
    iframe.contentDocument.documentElement.style.overflow = 'hidden';
  };

  /**
   * Wrapper for binding iframe unload event to a callback for multiple
   * devices.
   *
   * @private
   * @param {jQuery} $window of iframe
   * @param {function} action callback on unload
   */
  var onUnload = function ($window, action) {
    $window.one('beforeunload unload', function () {
      $window.off('pagehide beforeunload unload');
      action();
    });
    $window.on('pagehide', action);
  };

  /**
   * Checks if iframe needs resizing, and then resize it.
   *
   * @private
   */
  var resize = function () {
    if (!iframe.contentDocument.body) {
      return; // Prevent crashing when iframe is unloaded
    }
    if (iframe.clientHeight === iframe.contentDocument.body.scrollHeight &&
      iframe.contentDocument.body.scrollHeight === iframe.contentWindow.document.body.clientHeight) {
      return; // Do not resize unless page and scrolling differs
    }

    // Retain parent size to avoid jumping/scrolling
    var parentHeight = iframe.parentElement.style.height;
    iframe.parentElement.style.height = iframe.parentElement.clientHeight + 'px';

    // Reset iframe height, in case content has shrinked.
    iframe.style.height = iframe.contentWindow.document.body.clientHeight + 'px';

    // Resize iframe so all content is visible. Use scrollHeight to make sure we get everything
    iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';

    // Free parent
    iframe.parentElement.style.height = parentHeight;
  };

  // Register loaded event handler for iframe
  $iframe.load(function () {
    if (!iframe.contentWindow.H5P) {
      // The iframe has probably been reloaded, losing its content
      setTimeout(function () {
        // Wait for next tick as a new 'load' can't be triggered recursivly
        populateIframe();
      }, 0);
      return;
    }

    // Trigger loaded callback. Could this have been an event?
    if (iframeLoaded) {
      iframeLoaded.call(this.contentWindow);
    }

    var LibrarySelector = this.contentWindow.H5PEditor.LibrarySelector;
    var $ = this.contentWindow.H5P.jQuery;
    var $container = $('body > .h5p-editor');

    this.contentWindow.H5P.$body = $(this.contentDocument.body);

    // Load libraries data
    $.ajax({
      url: this.contentWindow.H5PEditor.getAjaxUrl(H5PIntegration.hubIsEnabled ? 'content-type-cache' : 'libraries')
    }).fail(function () {
      $container.html('Error, unable to load libraries.');
    }).done(function (data) {
      if (data.success === false) {
        $container.html(data.message + ' (' + data.errorCode  + ')');
        return;
      }

      // Create library selector
      self.selector = new LibrarySelector(data, library, defaultParams);
      self.selector.appendTo($container.html(''));

      // Resize iframe when selector resizes
      self.selector.on('resize', resize);

      /**
       * Event handler for exposing events
       *
       * @private
       * @param {H5P.Event} event
       */
      var relayEvent = function (event) {
        H5P.externalDispatcher.trigger(event);
      };
      self.selector.on('editorload', relayEvent);
      self.selector.on('editorloaded', relayEvent);

      // Set library if editing
      if (library) {
        self.selector.setLibrary(library);
      }
    });

    // Start resizing the iframe
    if (iframe.contentWindow.MutationObserver !== undefined) {
      // If supported look for changes to DOM elements. This saves resources.
      var running;
      var limitedResize = function (mutations) {
        if (!running) {
          running = setTimeout(function () {
            resize();
            running = null;
          }, 40); // 25 fps cap
        }
      };

      new iframe.contentWindow.MutationObserver(limitedResize).observe(iframe.contentWindow.document.body, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: false,
        characterDataOldValue: false
      });

      H5P.$window.resize(limitedResize);
      resize();
    }
    else {
      // Use an interval for resizing the iframe
      (function resizeInterval() {
        resize();
        setTimeout(resizeInterval, 40); // No more than 25 times per second
      })();
    }

    // Handle iframe being reloaded
    onUnload($(iframe.contentWindow), function () {
      if (self.formSubmitted) {
        return;
      }

      // Keep track of previous state
      library = self.getLibrary();
      defaultParams = JSON.stringify(self.getParams(true));
    });
  });

  // Insert iframe into DOM
  $iframe.replaceAll(replace);

  // Populate iframe with the H5P Editor
  populateIframe();
};

/**
 * Find out which library is used/selected.
 *
 * @alias H5PEditor.Editor#getLibrary
 * @returns {string} Library name
 */
ns.Editor.prototype.getLibrary = function () {
  if (this.selector !== undefined) {
    return this.selector.getCurrentLibrary();
  }
  else if(this.selectedContentTypeId) {
    return this.selectedContentTypeId;
  }
  else {
    console.warn('no selector defined for "getLibrary"');
  }
};

/**
 * Get parameters needed to start library.
 *
 * @alias H5PEditor.Editor#getParams
 * @returns {Object} Library parameters
 */
ns.Editor.prototype.getParams = function (notFormSubmit) {
  if (!notFormSubmit) {
    this.formSubmitted = true;
  }
  if (this.selector !== undefined) {
    return this.selector.getParams();
  }
  else if(this.form){
    return this.form.params;
  }
  else {
    console.warn('no selector defined for "getParams"');
  }
};

/**
 * Editor translations index by library name or "core".
 *
 * @member {Object} H5PEditor.language
 */
ns.language = {};

/**
 * Translate text strings.
 *
 * @method H5PEditor.t
 * @param {string} library The library name(machineName), or "core".
 * @param {string} key Translation string identifier.
 * @param {Object} [vars] Placeholders and values to replace in the text.
 * @returns {string} Translated string, or a text if string translation is missing.
 */
ns.t = function (library, key, vars) {
  if (ns.language[library] === undefined) {
    return 'Missing translations for library ' + library;
  }

  var translation;
  if (library === 'core') {
    if (ns.language[library][key] === undefined) {
      return 'Missing translation for ' + key;
    }
    translation = ns.language[library][key];
  }
  else {
    if (ns.language[library].libraryStrings === undefined || ns.language[library].libraryStrings[key] === undefined) {
      return ns.t('core', 'missingTranslation', {':key': key});
    }
    translation = ns.language[library].libraryStrings[key];
  }

  // Replace placeholder with variables.
  for (var placeholder in vars) {
    if (vars[placeholder] === undefined) {
      continue;
    }
    translation = translation.replace(placeholder, vars[placeholder]);
  }

  return translation;
};

/**
 * Wraps multiple content between a prefix and a suffix.
 *
 * @method H5PEditor.wrap
 * @param {string} prefix Inserted before the content.
 * @param {Array} content List of content to be wrapped.
 * @param {string} suffix Inserted after the content.
 * @returns {string} All content put together with prefix and suffix.
 */
ns.wrap = function (prefix, content, suffix) {
  var result = '';
  for (var i = 0; i < content.length; i++) {
    result += prefix + content[i] + suffix;
  }
  return result;
};
;
(function ($, Drupal, H5P, H5PEditor) {
  var initialized;
  var submitHandlers = [];

  /**
   * One time setup of the H5PEditor
   *
   * @param Object settings from drupal
   */
  H5PEditor.init = function (settings) {
    if (initialized) {
      return; // Prevent multi init
    }
    initialized = true;

    // Set up editor settings
    H5PEditor.$ = H5P.jQuery;
    H5PEditor.baseUrl = drupalSettings.path.baseUrl;
    H5PEditor.basePath = drupalSettings.h5peditor.libraryPath;
    mapProperties(H5PEditor, drupalSettings.h5peditor,
      ['contentId', 'fileIcon', 'relativeUrl', 'contentRelUrl', 'editorRelUrl', 'apiVersion', 'copyrightSemantics', 'assets']);
  };

  // Init editors
  Drupal.behaviors.H5PEditor = {
    attach: function (context, settings) {
      $('.h5p-editor', context).once('H5PEditor').each(function () {
        H5PEditor.init(settings);

        // Grab data values specifc for editor instance
        var $this = $(this);
        var parametersFieldId = $this.data('parametersid');
        var libraryFieldId = $this.data('libraryid');
        var contentId = $this.data('contentId');
        var $form = $this.parents('form');

        // Locate parameters field
        var $params = $('#' + parametersFieldId, context);

        // Locate library field
        var $library = $('#' + libraryFieldId, context);

        // Create form submit handler
        var submit = {
          element: null,
          handler: function () {
            var params = h5peditor.getParams();

            if (params !== undefined) {
              $library.val(h5peditor.getLibrary());
              $params.val(JSON.stringify(params));
            }
          }
        };
        submitHandlers.push(submit);

        // Create new editor
        var h5peditor = new ns.Editor($library.val(), $params.val(), this, function () {
          submit.element = this.frameElement; // Update frame element
          var iframeH5PEditor = this.H5PEditor;
          iframeH5PEditor.contentId = (contentId ? contentId : undefined);
          iframeH5PEditor.ajaxPath = settings.h5peditor.ajaxPath.replace(':contentId', (contentId ? contentId : 0));
          iframeH5PEditor.filesPath = settings.h5peditor.filesPath + '/editor';

          /**
           * Help build URLs for AJAX requests
           */
          iframeH5PEditor.getAjaxUrl = function (action, parameters) {
            var url = iframeH5PEditor.ajaxPath + action;

            if (parameters !== undefined) {
              for (var key in parameters) {
                url += '/' + parameters[key];
              }
            }

            return url;
          };
        });

        $form.submit(submit.handler);
      });
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'serialize') {
        $('.h5p-editor-iframe', context).once('H5PEditor').each(function () {
          for (var i = 0; i < submitHandlers.length; i++) {
            if (submitHandlers[i].element === this) {
              // Trigger submit handler
              submitHandlers[i].handler();
            }
          }
        });
      }
    }
  };

  /**
   * Map properties from one object to the other
   * @private
   * @param {Object} to
   * @param {Object} from
   * @param {Array} props
   */
  var mapProperties = function (to, from, props) {
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      to[prop] = from[prop];
    }
  };

})(jQuery, Drupal, H5P, H5PEditor);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.filterGuidelines = {
    attach: function attach(context) {
      function updateFilterGuidelines(event) {
        var $this = $(event.target);
        var value = $this.val();
        $this.closest('.filter-wrapper').find('.filter-guidelines-item').hide().filter('.filter-guidelines-' + value).show();
      }

      $(context).find('.filter-guidelines').once('filter-guidelines').find(':header').hide().closest('.filter-wrapper').find('select.filter-list').on('change.filterGuidelines', updateFilterGuidelines).trigger('change.filterGuidelines');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  function displace(broadcast) {
    offsets = Drupal.displace.offsets = calculateOffsets();
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function show() {
        openDialog({ modal: false });
      },
      showModal: function showModal() {
        openDialog({ modal: true });
      },

      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var $buttons = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function findFieldForFormatSelector($formatSelector) {
    var field_id = $formatSelector.attr('data-editor-for');

    return $('#' + field_id).get(0);
  }

  function changeTextEditor(field, newFormatID) {
    var previousFormatID = field.getAttribute('data-editor-active-text-format');

    if (drupalSettings.editor.formats[previousFormatID]) {
      Drupal.editorDetach(field, drupalSettings.editor.formats[previousFormatID]);
    } else {
        $(field).off('.editor');
      }

    if (drupalSettings.editor.formats[newFormatID]) {
      var format = drupalSettings.editor.formats[newFormatID];
      filterXssWhenSwitching(field, format, previousFormatID, Drupal.editorAttach);
    }

    field.setAttribute('data-editor-active-text-format', newFormatID);
  }

  function onTextFormatChange(event) {
    var $select = $(event.target);
    var field = event.data.field;
    var activeFormatID = field.getAttribute('data-editor-active-text-format');
    var newFormatID = $select.val();

    if (newFormatID === activeFormatID) {
      return;
    }

    var supportContentFiltering = drupalSettings.editor.formats[newFormatID] && drupalSettings.editor.formats[newFormatID].editorSupportsContentFiltering;

    var hasContent = field.value !== '';
    if (hasContent && supportContentFiltering) {
      var message = Drupal.t('Changing the text format to %text_format will permanently remove content that is not allowed in that text format.<br><br>Save your changes before switching the text format to avoid losing data.', {
        '%text_format': $select.find('option:selected').text()
      });
      var confirmationDialog = Drupal.dialog('<div>' + message + '</div>', {
        title: Drupal.t('Change text format?'),
        dialogClass: 'editor-change-text-format-modal',
        resizable: false,
        buttons: [{
          text: Drupal.t('Continue'),
          class: 'button button--primary',
          click: function click() {
            changeTextEditor(field, newFormatID);
            confirmationDialog.close();
          }
        }, {
          text: Drupal.t('Cancel'),
          class: 'button',
          click: function click() {
            $select.val(activeFormatID);
            confirmationDialog.close();
          }
        }],

        closeOnEscape: false,
        create: function create() {
          $(this).parent().find('.ui-dialog-titlebar-close').remove();
        },

        beforeClose: false,
        close: function close(event) {
          $(event.target).remove();
        }
      });

      confirmationDialog.showModal();
    } else {
      changeTextEditor(field, newFormatID);
    }
  }

  Drupal.editors = {};

  Drupal.behaviors.editor = {
    attach: function attach(context, settings) {
      if (!settings.editor) {
        return;
      }

      $(context).find('[data-editor-for]').once('editor').each(function () {
        var $this = $(this);
        var field = findFieldForFormatSelector($this);

        if (!field) {
          return;
        }

        var activeFormatID = $this.val();
        field.setAttribute('data-editor-active-text-format', activeFormatID);

        if (settings.editor.formats[activeFormatID]) {
          Drupal.editorAttach(field, settings.editor.formats[activeFormatID]);
        }

        $(field).on('change.editor keypress.editor', function () {
          field.setAttribute('data-editor-value-is-changed', 'true');

          $(field).off('.editor');
        });

        if ($this.is('select')) {
          $this.on('change.editorAttach', { field: field }, onTextFormatChange);
        }

        $this.parents('form').on('submit', function (event) {
          if (event.isDefaultPrevented()) {
            return;
          }

          if (settings.editor.formats[activeFormatID]) {
            Drupal.editorDetach(field, settings.editor.formats[activeFormatID], 'serialize');
          }
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      var editors = void 0;

      if (trigger === 'serialize') {
        editors = $(context).find('[data-editor-for]').findOnce('editor');
      } else {
        editors = $(context).find('[data-editor-for]').removeOnce('editor');
      }

      editors.each(function () {
        var $this = $(this);
        var activeFormatID = $this.val();
        var field = findFieldForFormatSelector($this);
        if (field && activeFormatID in settings.editor.formats) {
          Drupal.editorDetach(field, settings.editor.formats[activeFormatID], trigger);
        }
      });
    }
  };

  Drupal.editorAttach = function (field, format) {
    if (format.editor) {
      Drupal.editors[format.editor].attach(field, format);

      Drupal.editors[format.editor].onChange(field, function () {
        $(field).trigger('formUpdated');

        field.setAttribute('data-editor-value-is-changed', 'true');
      });
    }
  };

  Drupal.editorDetach = function (field, format, trigger) {
    if (format.editor) {
      Drupal.editors[format.editor].detach(field, format, trigger);

      if (field.getAttribute('data-editor-value-is-changed') === 'false') {
        field.value = field.getAttribute('data-editor-value-original');
      }
    }
  };

  function filterXssWhenSwitching(field, format, originalFormatID, callback) {
    if (format.editor.isXssSafe) {
      callback(field, format);
    } else {
        $.ajax({
          url: Drupal.url('editor/filter_xss/' + format.format),
          type: 'POST',
          data: {
            value: field.value,
            original_format_id: originalFormatID
          },
          dataType: 'json',
          success: function success(xssFilteredValue) {
            if (xssFilteredValue !== false) {
              field.value = xssFilteredValue;
            }
            callback(field, format);
          }
        });
      }
  }
})(jQuery, Drupal, drupalSettings);;
