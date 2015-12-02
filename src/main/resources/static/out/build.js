/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.4'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.4'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.4'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.4'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.4'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.4'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.4'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

define("bootstrap", ["jquery"], function(){});

/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.3.2
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}

/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.AdminLTE.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //General animation speed for JS animated elements such as box collapse/expand and
  //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
  //'fast', 'normal', or 'slow'
  animationSpeed: 500,
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before AdminLTE's app.js
  enableFastclick: true,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      collapse: 'fa-minus',
      //Open icon
      open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  "use strict";

  //Fix for IE page transitions
  $("body").removeClass("hold-transition");

  //Extend options if external options exist
  if (typeof AdminLTEOptions !== "undefined") {
    $.extend(true,
        $.AdminLTE.options,
        AdminLTEOptions);
  }

  //Easy access to options
  var o = $.AdminLTE.options;

  //Set up the object
  _init();

  //Activate the layout maker
  $.AdminLTE.layout.activate();

  //Enable sidebar tree view controls
  $.AdminLTE.tree('.sidebar');

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.AdminLTE.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
    $('body').tooltip({
      selector: o.BSTooltipSelector
    });
  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.AdminLTE.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {
  'use strict';
  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.AdminLTE.layout.activate()
   *        $.AdminLTE.layout.fix()
   *        $.AdminLTE.layout.fixSidebar()
   */
  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimscroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
   */
  $.AdminLTE.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.AdminLTE.options.screenSizes;

      //Enable sidebar toggle
      $(document).on('click', toggleBtn, function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.AdminLTE.options.sidebarExpandOnHover
          || ($('body').hasClass('fixed')
          && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
            && $("body").hasClass('sidebar-collapse')
            && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
            && $('body').hasClass('sidebar-expanded-on-hover')
            && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   */
  $.AdminLTE.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.AdminLTE.options.animationSpeed;
    $(menu).on('click', 'li a', function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
          //Fix the layout in case the sidebar stretches over the height of the window
          //_this.layout.fix();
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");

        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          //Fix the layout in case the sidebar stretches over the height of the window
          _this.layout.fix();
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.AdminLTE.controlSidebar.activate(options)
   */
  $.AdminLTE.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.AdminLTE.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open')
            && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        $(window).resize(function () {
          _this._fix(sidebar);
        });
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   */
  $.AdminLTE.boxWidget = {
    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.AdminLTE.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; // activate all boxes per default
      }
      //Listen for collapse event triggers
      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
            .removeClass(_this.icons.collapse)
            .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first")
            .removeClass(_this.icons.open)
            .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
        return box;
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
        return box;
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };

})(jQuery);

 /*
 * EXPLICIT BOX CONTROLS
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 * @usage $("#box-widget").toggleBox();
 * @usage $("#box-widget").removeBox();
 */
(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.AdminLTE.boxWidget.activate(this);
  };

  $.fn.toggleBox = function(){
    var button = $($.AdminLTE.boxWidget.selectors.collapse, this);
    $.AdminLTE.boxWidget.collapse(button);
  };

  $.fn.removeBox = function(){
    var button = $($.AdminLTE.boxWidget.selectors.remove, this);
    $.AdminLTE.boxWidget.remove(button);
  };

})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function ($) {

  'use strict';

  $.fn.todolist = function (options) {
    // Render options
    var settings = $.extend({
      //When the user checks the input
      onCheck: function (ele) {
        return ele;
      },
      //When the user unchecks the input
      onUncheck: function (ele) {
        return ele;
      }
    }, options);

    return this.each(function () {

      if (typeof $.fn.iCheck != 'undefined') {
        $('input', this).on('ifChecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });

        $('input', this).on('ifUnchecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onUncheck.call(ele);
        });
      } else {
        $('input', this).on('change', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          if ($('input', ele).is(":checked")) {
            settings.onCheck.call(ele);
          } else {
            settings.onUncheck.call(ele);
          }
        });
      }
    });
  };
}(jQuery));

define("adminlte", ["jquery","bootstrap"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.adminlte;
    };
}(this)));

/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,X,u){'use strict';function G(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function za(a){if(null==a||Xa(a))return!1;if(I(a)||E(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||za(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Td(){return++nb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],r=g[m];d&&H(r)?da(r)?a[m]=new Date(r.valueOf()):Ma(r)?a[m]=new RegExp(r):r.nodeName?a[m]=r.cloneNode(!0):
Nb(r)?a[m]=r.clone():(H(a[m])||(a[m]=I(r)?[]:{}),Mb(a[m],[r],!0)):a[m]=r}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function M(a){return Mb(a,ra.call(arguments,1),!1)}function Ud(a){return Mb(a,ra.call(arguments,1),!0)}function ea(a){return parseInt(a,10)}function Ob(a,b){return M(Object.create(a),b)}function x(){}function Ya(a){return a}function na(a){return function(){return a}}function qc(a){return z(a.toString)&&a.toString!==sa}function q(a){return"undefined"===typeof a}function y(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function E(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function da(a){return"[object Date]"===sa.call(a)}function z(a){return"function"===typeof a}function Ma(a){return"[object RegExp]"===sa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&Q(a.length)&&
Vd.test(sa.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Wd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return F(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)qa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Aa("cpws");var b=!1,c;I(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):da(a)?c=new Date(a.getTime()):Ma(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):z(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Aa("cpta");
if(a===b)throw Aa("cpi");I(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function ia(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(I(a)){if(!I(b))return!1;if((d=a.length)==b.length){for(c=
0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?ma(a.getTime(),b.getTime()):!1;if(Ma(a))return Ma(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||I(b)||da(b)||Ma(b))return!1;d=$();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!z(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(ra.call(b,d))}function tc(a,b){var d=2<arguments.length?ra.call(arguments,2):
[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Xd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;Q(b)||(b=b?2:null);return JSON.stringify(a,Xd,b)}function uc(a){return E(a)?JSON.parse(a):a}function vc(a,
b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function ua(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?F(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(c){return F(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,qa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];n(a,function(a,c){I(a)?n(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Yd(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,E(d=a.getAttribute(d)))return d;return null}function Zd(a,b){var d,c,e={};n(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==Yd(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){H(d)||(d={});d=M({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===X?"document":ua(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(d.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return c();S.name=S.name.replace(f,"");fa.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};z(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function $d(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}
function ae(a){a=fa.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(be,function(a,c){return(c?b:"")+a.toLowerCase()})}function ce(){var a;if(!Ac){var b=pb();(oa=q(b)?S.jQuery:b?S[b]:u)&&oa.fn.on?(B=oa,M(oa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
oa._data(f,"events"))&&c.$destroy&&oa(f).triggerHandler("$destroy");a(b)}):B=N;fa.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);qb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
z(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ra.call(a,0,e))),c.push(b);return c||a}function $(){return Object.create(null)}function de(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return v}}function b(a,d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return v}}if(!g)throw d("nomod",f);var c=[],e=[],t=[],A=a("$injector","invoke","push",e),v={_invokeQueue:c,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:A,run:function(a){t.push(a);return this}};h&&A(h);return v})}})}function ee(a){M(a,{bootstrap:yc,copy:bb,extend:M,merge:Ud,equals:ma,element:B,forEach:n,injector:eb,noop:x,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:q,isDefined:y,isString:E,isFunction:z,isObject:H,isNumber:Q,isElement:Nb,isArray:I,
version:fe,isDate:da,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:G,$$csp:Ba,reloadWithDebugInfo:$d});Sb=de(S);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function fb(a){return a.replace(Af,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Bf,"Moz$1")}function Kc(a){a=a.nodeType;
return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Cf.exec(a)||["",""])[1].toLowerCase();c=ka[c]||ka._default;d.innerHTML=c[1]+a.replace(Df,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function N(a){if(a instanceof N)return a;var b;E(a)&&(a=U(a),
b=!0);if(!(this instanceof N)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new N(a)}if(b){b=X;var d;a=(d=Ef.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Mc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||vb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)vb(d[c])}function Nc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&ab(c||[],d);y(d)&&c&&0<c.length||
(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function vb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Nc(a)),delete gb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Ff,d=gb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Kc(a)){var c=y(d),e=!c&&b&&!H(b),f=!b;a=(a=wb(a,
!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];M(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",U((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(b.split(" "),
function(a){a=U(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",U(d))}}function Mc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Oc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&
a.host}}function Pc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Gf(a,b){b=b||S;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Qc(a,b){var d=Cb[b.toLowerCase()];return d&&Rc[ta(a)]&&d}function Hf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(q(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||If;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function If(a,b,d){d.call(a,b)}function Jf(a,b,d){var c=b.relatedTarget;c&&(c===a||Kf.call(a,c))||d.call(a,b)}function xf(){this.$get=function(){return M(N,
{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Td)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Lf(a){return(a=a.toString().replace(Sc,"").match(Tc))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(H(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||I(b))b=t.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(q(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(q(a)||I(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(t.invoke(a)):I(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,t;m=0;for(l=k.length;m<l;m++){t=k[m];if("string"!==typeof t)throw Da("itkn",t);h.push(f&&f.hasOwnProperty(t)?f[t]:d(t,g))}I(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((I(a)?a[a.length-1]:a).prototype||
null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return r.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),r={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,na(b),!1)}),constant:d(function(a,b){Ra(a,"constant");r[a]=b;A[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=
v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},t=r.$injector=h(r,function(a,b){fa.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),A={},v=A.$injector=h(A,function(a,b){var c=t.get(a+"Provider",b);return v.invoke(c.$get,c,u,a)});n(g(a),function(a){a&&v.invoke(a)});return v}function Qe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=
a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Gf(function(){c.$evalAsync(g)})});
return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function Mf(a){E(a)&&(a=a.split(" "));var b=$();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ea(a){return H(a)?a:{}}function Nf(a,b,d,c){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(v--,0===v)for(;T.length;)try{T.pop()()}catch(b){d.error(b)}}}function f(){L=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=q(p)?
null:p;ma(p,J)&&(p=J);J=p}function h(){if(w!==k.url()||C!==p)w=k.url(),C=p,n(aa,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,r=a.setTimeout,t=a.clearTimeout,A={};k.isMock=!1;var v=0,T=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){0===v?a():T.push(a)};var p,C,w=l.href,ga=b.find("base"),L=null;g();C=p;k.url=function(b,d,e){q(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=
C===e;if(w===b&&(!c.history||f))return k;var h=w&&Fa(w)===Fa(b);w=b;C=e;if(!c.history||h&&f){if(!h||L)L=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(L=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),C=p;return k}return L||l.href.replace(/%27/g,"'")};k.state=function(){return p};var aa=[],D=!1,J=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);D=!0}aa.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",
f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ga.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;v++;c=r(function(){delete A[c];e(a)},b||0);A[c]=!0;return c};k.defer.cancel=function(a){return A[a]?(delete A[a],t(a),e(x),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Nf(a,c,b,d)}]}function We(){this.$get=function(){function a(a,c){function e(a){a!=r&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,r),r=a,
r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=M({},c,{id:a}),k=$(),l=c&&c.capacity||Number.MAX_VALUE,m=$(),r=null,t=null;return b[a]={put:function(a,b){if(!q(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(t.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==t&&
(t=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=$();g=0;m=$();r=t=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return M({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function rf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);
if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function t(b,f){Ra(b,"directive");
E(b)?(c(b),qb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);z(h)?h={compile:na(h)}:!h.compile&&h.link&&(h.compile=na(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,t={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(t.bindToController=d(l.scope,
m,!0),t.isolateScope={}):t.isolateScope=d(l.scope,m,!1));H(l.bindToController)&&(t.bindToController=d(l.bindToController,m,!0));if(H(t.bindToController)){var v=l.controller,R=l.controllerAs;if(!v)throw ha("noctrl",m);var V;a:if(R&&E(R))V=R;else{if(E(v)){var n=Uc.exec(v);if(n){V=n[3];break a}}V=void 0}if(!V)throw ha("noident",m);}var s=k.$$bindings=t;H(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(u){c(u)}});return f}])),e[b].push(f)):n(b,pc(t));
return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,
b,c,d,p,C,w,ga,L,aa,D){function J(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e){a instanceof B||(a=B(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);K.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=
d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Yb(g,B("<div>").append(a).html())):c?Pa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);K.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,t,w,D;if(p)for(D=Array(c.length),m=0;m<h.length;m+=3)f=h[m],D[f]=c[f];else D=c;m=0;for(t=h.length;m<t;)k=D[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),K.$$addScopeInfo(B(k),
l)):l=a,w=c.transcludeOnThisElement?R(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?R(a,b):null,c(f,l,k,d,w)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,t,p,w=0;w<a.length;w++){k=new fa;l=V(a[w],[],k,0===w?d:u,e);(f=l.length?Z(l,a[w],k,b,c,null,[],[],f):null)&&f.scope&&K.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[w].childNodes)||!m.length?null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(w,f,k),t=!0,p=p||f;f=null}return t?g:null}function R(a,
b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function V(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:P(b,va(ta(a)),"E",d,e);for(var l,m,t,p=a.attributes,w=0,D=p&&p.length;w<D;w++){var K=!1,A=!1;l=p[w];k=l.name;m=U(l.value);l=va(k);if(t=ka.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(la))&&G(l[1])&&(K=k,A=k.substr(0,k.length-
5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(t||!c.hasOwnProperty(l))c[l]=m,Qc(a,l)&&(c[l]=!0);W(a,b,m,l,t);P(b,l,"A",d,e,K,A)}a=a.className;H(a)&&(a=a.animVal);if(E(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),P(b,l,"C",d,e)&&(c[l]=U(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);N(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=
va(k[1]),P(b,l,"M",d,e)&&(c[l]=U(k[2]))}catch(R){}}b.sort(Ia);return b}function Ta(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ta(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,d,e,f,g,h,l,m){function t(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=q.require;a.directiveName=x;if(O===
q||q.$$isolateScope)a=ca(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=q.require;b.directiveName=x;if(O===q||q.$$isolateScope)b=ca(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;if(E(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||
null}function w(a,b,c,d,e,f){var g=$(),h;for(h in d){var k=d[h],l={$scope:k===O||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=C(m,l,!0,k.controllerAs);g[k.name]=l;aa||a.data("$"+k.name+"Controller",l.instance)}return g}function D(a,c,e,f,g){function k(a,b,c){var d;Za(a)||(c=b,b=a,a=u);aa&&(d=v);c||(c=aa?V.parent():V);return g(a,b,d,c,Ta)}var m,t,A,v,C,V,Ga;b===e?(f=d,V=d.$$element):(V=B(e),f=new fa(V,d));A=c;O?t=c.$new(!0):R&&(A=c.$parent);g&&(C=k,
C.$$boundTransclude=g);T&&(v=w(V,f,C,T,t,c));O&&(K.$$addScopeInfo(V,t,!0,!(J&&(J===O||J===O.$$originalDirective))),K.$$addScopeClass(V,!0),t.$$isolateBindings=O.$$isolateBindings,(Ga=ba(c,f,t,t.$$isolateBindings,O))&&t.$on("$destroy",Ga));for(var n in v){Ga=T[n];var ga=v[n],L=Ga.$$bindings.bindToController;ga.identifier&&L&&(m=ba(A,f,ga.instance,L,Ga));var q=ga();q!==ga.instance&&(ga.instance=q,V.data("$"+Ga.name+"Controller",q),m&&m(),m=ba(A,f,ga.instance,L,Ga))}F=0;for(M=h.length;F<M;F++)m=h[F],
ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C);var Ta=c;O&&(O.template||null===O.templateUrl)&&(Ta=t);a&&a(Ta,e.childNodes,u,g);for(F=l.length-1;0<=F;F--)m=l[F],ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C)}m=m||{};for(var A=-Number.MAX_VALUE,R=m.newScopeDirective,T=m.controllerDirectives,O=m.newIsolateScopeDirective,J=m.templateDirective,n=m.nonTlbTranscludeDirective,ga=!1,L=!1,aa=m.hasElementTranscludeDirective,Z=d.$$element=B(b),q,x,P,Ia=
e,G,F=0,M=a.length;F<M;F++){q=a[F];var N=q.$$start,Q=q.$$end;N&&(Z=Ta(b,N,Q));P=u;if(A>q.priority)break;if(P=q.scope)q.templateUrl||(H(P)?(Ua("new/isolated scope",O||R,q,Z),O=q):Ua("new/isolated scope",O,q,Z)),R=R||q;x=q.name;!q.templateUrl&&q.controller&&(P=q.controller,T=T||$(),Ua("'"+x+"' controller",T[x],q,Z),T[x]=q);if(P=q.transclude)ga=!0,q.$$tlb||(Ua("transclusion",n,q,Z),n=q),"element"==P?(aa=!0,A=q.priority,P=Z,Z=d.$$element=B(X.createComment(" "+x+": "+d[x]+" ")),b=Z[0],Y(f,ra.call(P,0),
b),Ia=K(P,e,A,g&&g.name,{nonTlbTranscludeDirective:n})):(P=B(Vb(b)).contents(),Z.empty(),Ia=K(P,e,u,u,{needsNewScope:q.$$isolateScope||q.$$newScope}));if(q.template)if(L=!0,Ua("template",J,q,Z),J=q,P=z(q.template)?q.template(Z,d):q.template,P=ja(P),q.replace){g=q;P=Tb.test(P)?Xc(Yb(q.templateNamespace,U(P))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ha("tplrt",x,"");Y(f,Z,b);P={$attr:{}};var Wc=V(b,[],P),W=a.splice(F+1,a.length-(F+1));(O||R)&&y(Wc,O,R);a=a.concat(Wc).concat(W);S(d,P);M=a.length}else Z.html(P);
if(q.templateUrl)L=!0,Ua("template",J,q,Z),J=q,q.replace&&(g=q),D=Of(a.splice(F,a.length-F),Z,d,f,ga&&Ia,h,l,{controllerDirectives:T,newScopeDirective:R!==q&&R,newIsolateScopeDirective:O,templateDirective:J,nonTlbTranscludeDirective:n}),M=a.length;else if(q.compile)try{G=q.compile(Z,d,Ia),z(G)?t(null,G,N,Q):G&&t(G.pre,G.post,N,Q)}catch(da){c(da,ua(Z))}q.terminal&&(D.terminal=!0,A=Math.max(A,q.priority))}D.scope=R&&!0===R.scope;D.transcludeOnThisElement=ga;D.templateOnThisElement=L;D.transclude=Ia;
m.hasElementTranscludeDirective=aa;return D}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function P(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,w=d.length;p<w;p++)try{m=d[p],(q(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Ob(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(D){c(D)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
c[d],b.multiElement)return!0;return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(J(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Of(a,b,c,e,f,g,h,k){var l=[],m,t,p=b[0],w=a.shift(),D=Ob(w,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:w}),A=z(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,K=w.templateNamespace;b.empty();d(A).then(function(d){var T,v;d=ja(d);if(w.replace){d=Tb.test(d)?Xc(Yb(K,U(d))):[];T=d[0];if(1!=d.length||1!==T.nodeType)throw ha("tplrt",w.name,A);d={$attr:{}};Y(e,b,T);var C=V(T,[],d);H(w.scope)&&y(C,!0);a=C.concat(a);S(c,d)}else T=p,b.html(d);a.unshift(D);m=Z(a,T,c,f,b,w,g,h,k);n(e,function(a,c){a==T&&(e[c]=b[0])});for(t=O(b[0].childNodes,f);l.length;){d=l.shift();
v=l.shift();var ga=l.shift(),L=l.shift(),C=b[0];if(!d.$$destroyed){if(v!==p){var q=v.className;k.hasElementTranscludeDirective&&w.replace||(C=Vb(T));Y(ga,B(v),C);J(B(C),q)}v=m.transcludeOnThisElement?R(d,m.transclude,L):L;m(t,d,C,e,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=R(b,m.transclude,e)),m(t,b,c,d,a)))}}function Ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,
b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function N(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&K.$$addBindingClass(a);return function(a,c){var e=c.parent();b||K.$$addBindingClass(e);K.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return L.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function W(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===ta(a))throw ha("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=$());if(l.test(e))throw ha("nodomevents");
var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);
B.hasData(d)&&(B.data(c,B.data(d)),oa?(Rb=!0,oa.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ca(a,b){return M(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ba(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,t,w,D;switch(e.mode){case "@":l||qa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){E(a)&&
(d[h]=a)});c.$$observers[k].$$scope=a;E(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!qa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;t=p(c[k]);D=t.literal?ma:function(a,b){return a===b||a!==a&&b!==b};w=t.assign||function(){m=d[h]=t(a);throw ha("nonassign",c[k],f.name);};m=d[h]=t(a);l=function(b){D(b,d[h])||(D(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,t.literal);g.push(l);break;case "&":t=c.hasOwnProperty(k)?p(c[k]):
x;if(t===x&&l)break;d[h]=function(b){return t(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var fa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};fa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&aa.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&aa.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Yc(a,b);c&&c.length&&aa.addClass(this.$$element,
c);(c=Yc(b,a))&&c.length&&aa.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Qc(this.$$element[0],a),g=Zc[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=ta(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<
k;l++)var m=2*l,f=f+D(U(g[m]),!0),f=f+(" "+U(g[m+1]));g=U(g[2*l]).split(/\s/);f+=D(U(g[0]),!0);2===g.length&&(f+=" "+U(g[1]));this[a]=b=f}!1!==d&&(null===b||q(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=$()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||q(c[a])||b(c[a])});return function(){ab(e,b)}}};var da=b.startSymbol(),
ia=b.endSymbol(),ja="{{"==da||"}}"==ia?Ya:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ia)},ka=/^ngAttr[A-Z]/,la=/^(.+)Start$/;K.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;K.$$addBindingClass=m?function(a){J(a,"ng-binding")}:x;K.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;K.$$addScopeClass=m?function(a,b){J(a,b?"ng-isolate-scope":"ng-scope")}:x;return K}]}function va(a){return fb(a.replace(Vc,
""))}function Yc(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Pf.call(a,b,1);return a}function Xe(){var a={},b=!1;this.register=function(b,c){Ra(b,"controller");H(b)?M(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!H(a.$scope))throw G("$controller")("noscp",
d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,r;h=!0===h;k&&E(k)&&(r=k);if(E(f)){k=f.match(Uc);if(!k)throw Qf("ctrlfmt",f);m=k[1];r=r||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Qa(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),r&&e(g,r,l,m||f.name),M(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,r&&e(g,r,l,m||f.name));return l},{instance:l,identifier:r});l=d.instantiate(f,g,m);r&&e(g,r,l,m||f.name);return l}}]}function Ye(){this.$get=
["$window",function(a){return B(a.document)}]}function Ze(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return H(a)?da(a)?a.toISOString():db(a):a}function df(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||q(a)||(I(a)?n(a,function(a,d){b.push(ja(c)+"="+ja(Zb(a)))}):b.push(ja(c)+"="+ja(Zb(a))))});return b.join("&")}}}function ef(){this.$get=function(){return function(a){function b(a,e,f){null===a||q(a)||
(I(a)?n(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!da(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(E(a)){var d=a.replace(Rf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf($c))||(c=(c=d.match(Sf))&&Tf[c[0]].test(d));c&&(a=uc(d))}}return a}function ad(a){var b=$(),d;E(a)?n(a.split("\n"),function(a){d=a.indexOf(":");var e=F(U(a.substr(0,d)));a=U(a.substr(d+1));e&&
(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&n(a,function(a,d){var f=F(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function bd(a){var b;return function(d){b||(b=ad(a));return d?(d=b[F(d)],void 0===d&&(d=null),d):b}}function cd(a,b,d,c){if(z(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function cf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a){var b=M({},a);b.data=cd(a.data,a.headers,a.status,f.transformResponse);
a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!fa.isObject(b))throw G("$http")("badreq",b);var f=M({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=M({},b.headers),f,g,h,c=M({},c.common,c[F(b.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);
f.method=sb(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=cd(b.data,bd(d),u,b.transformRequest);q(e)&&n(d,function(a,b){"content-type"===F(b)&&delete d[b]});q(b.withCredentials)&&!q(a.withCredentials)&&(b.withCredentials=a.withCredentials);return r(b,e).then(c,c)},u],h=k.when(f);for(n(v,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=
g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=dd("success"),h.error=dd("error"));return h}function r(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}J&&(200<=a&&300>a?J.put(R,[a,c,ad(d),e]):J.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?n.resolve:
n.reject)({data:a,status:b,headers:bd(d),config:c,statusText:e})}function r(a){l(a.data,a.status,ia(a.headers()),a.statusText)}function v(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var n=k.defer(),D=n.promise,J,K,O=c.headers,R=t(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);D.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=H(c.cache)?c.cache:H(a.cache)?a.cache:A);J&&(K=J.get(R),y(K)?K&&z(K.then)?K.then(r,r):I(K)?l(K[1],
K[0],ia(K[2]),K[3]):l(K,200,{},"OK"):J.put(R,D));q(K)&&((K=ed(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||a.xsrfHeaderName]=K),e(c.method,R,d,g,O,c.timeout,c.withCredentials,c.responseType));return D}function t(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var A=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];n(c,function(a){v.unshift(E(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,
function(a){m[a]=function(b,c){return m(M({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(M({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function gf(){this.$get=function(){return function(){return new S.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Uf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Uf(a,b,d,
c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,A="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),A=a.type,g="error"===a.type?404:200);d&&d(g,A)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,r,t,A){function v(){C&&C();w&&w.abort()}
function T(b,c,e,f,g){y(L)&&d.cancel(L);C=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(x)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==F(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var C=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){T(l,a,c[p].data,"",b);c[p]=x})}else{var w=b(e,h);w.open(e,h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==wa(h).protocol?404:0);T(l,c,b,w.getAllResponseHeaders(),a)};e=function(){T(l,-1,null,null,"")};w.onerror=e;w.onabort=e;t&&(w.withCredentials=!0);if(A)try{w.responseType=A}catch(ga){if("json"!==A)throw ga;}w.send(q(k)?null:k)}if(0<r)var L=d(v,r);else r&&z(r.then)&&r.then(v)}}function af(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(f,h,m,r){function p(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var d;if(r&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}r=!!r;for(var C,w,n=0,L=[],s=[],D=f.length,J=[],K=[];n<D;)if(-1!=(C=f.indexOf(a,n))&&-1!=(w=f.indexOf(b,C+k)))n!==C&&J.push(g(f.substring(n,C))),n=f.substring(C+
k,w),L.push(n),s.push(d(n,p)),n=w+l,K.push(J.length),J.push("");else{n!==D&&J.push(g(f.substring(n)));break}m&&1<J.length&&Ja.throwNoconcat(f);if(!h||L.length){var O=function(a){for(var b=0,c=L.length;b<c;b++){if(r&&q(a[b]))return;J[K[b]]=a[b]}return J.join("")};return M(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=s[b](a);return O(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:L,$$watchDelegate:function(a,b){var c;return a.$watchGroup(s,function(d,e){var f=O(d);z(b)&&b.call(this,
f,d!==e?c:f,a);c=f})}})}}var k=a.length,l=b.length,m=new RegExp(a.replace(/./g,f),"g"),r=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,l){var m=4<arguments.length,r=m?ra.call(arguments,4):[],t=b.setInterval,A=b.clearInterval,v=0,n=y(l)&&!l,p=(n?c:d).defer(),C=p.promise;k=y(k)?k:0;C.then(null,null,m?function(){e.apply(null,r)}:e);C.$$intervalId=
t(function(){p.notify(v++);0<k&&v>=k&&(p.resolve(v),A(C.$$intervalId),delete f[C.$$intervalId]);n||a.$apply()},h);f[C.$$intervalId]=p;return C}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function fd(a,b){var d=wa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||Vf[d.protocol]||
null}function gd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=wa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function pa(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Fa(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function ib(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
fd(a,this);this.$$parse=function(a){var d=pa(b,a);if(!E(d))throw Db("ipthprfx",a,b);gd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=pa(a,c))?(g=f,g=y(f=pa(d,f))?b+(pa("/",f)||f):a+g):y(f=pa(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
return!!g}}function dc(a,b,d){fd(a,this);this.$$parse=function(c){var e=pa(a,c)||pa(b,c),f;q(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",q(e)&&(a=c,this.replace())):(f=pa(d,e),q(f)&&(f=e));gd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Fa(a)==Fa(b)?(this.$$parse(b),!0):!1}}function hd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Fa(c)?f=c:(g=pa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Eb(a){return function(){return this[a]}}
function id(a,b){return function(d){if(q(d))return this[a];this[a]=b(d);this.$$compose();return this}}function hf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):H(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var r=c.url(),t;if(b.enabled){if(!m&&b.requireBase)throw Db("nobase");t=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?cc:hd}else t=Fa(r),m=dc;var A=t.substr(0,Fa(t).lastIndexOf("/")+1);l=new m(t,A,"#"+a);l.$$parseLinkUrl(r,r);l.$$state=
c.state();var v=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=wa(h.animVal).href);v.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});ib(l.absUrl())!=ib(r)&&c.url(l.absUrl(),!0);var n=!0;c.onUrlChange(function(a,b){q(pa(A,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=ib(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(n=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=ib(c.url()),b=ib(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(n||
m)n=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function jf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw ba("isecfld",b);return a}function jd(a,b){a+="";if(!E(a))throw ba("iseccst",b);return a}function xa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function kd(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===Wf||a===Xf||a===Yf)throw ba("isecff",b);}}function ld(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function Zf(a,b){return"undefined"!==typeof a?a:b}function md(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function W(a,b){var d,c;switch(a.type){case s.Program:d=!0;n(a.body,function(a){W(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:W(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:W(a.test,b);W(a.alternate,b);W(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:W(a.object,b);a.computed&&W(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];n(a.elements,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];n(a.properties,function(a){W(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function nd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}
function od(a){return a.type===s.Identifier||a.type===s.MemberExpression}function pd(a){if(1===a.body.length&&od(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function rd(a,b){this.astBuilder=a;this.$filter=b}function sd(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return z(a.valueOf)?a.valueOf():$f.call(a)}function kf(){var a=$(),b=$();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],r=0,n=
g.length;r<n;r++)l[r]=c,m[r]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=
e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Ba().noUnsafeEval,m={csp:l,expensiveChecks:!1},r={csp:l,expensiveChecks:!0};return function(c,l,v){var n,p,q;switch(typeof c){case "string":q=c=c.trim();var w=v?b:a;n=w[q];n||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),v=v?r:m,n=new fc(v),n=(new gc(n,d,v)).parse(c),n.constant?n.$$watchDelegate=h:p?n.$$watchDelegate=n.literal?g:f:n.inputs&&(n.$$watchDelegate=e),w[q]=n);return k(n,l);case "function":return k(c,l);default:return x}}}]}
function mf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return td(function(b){a.$evalAsync(b)},b)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(a,b){return td(function(b){a.defer(b)},b)}]}function td(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,
d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);M(c.prototype,{then:function(a,b,c){if(q(a)&&q(b)&&q(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];
this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});M(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(H(a)||z(a))c=a&&a.then;z(c)?(this.promise.$$state.status=
-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?
a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function A(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof A))return new A(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.resolve=m;r.all=function(a){var b=new g,c=0,d=I(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function wf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function lf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function l(a){a.currentScope.$$destroyed=!0}function m(a){9===Ha&&(a.$$childHead&&m(a.$$childHead),a.$$nextSibling&&m(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function r(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function t(a){if(w.$$phase)throw d("inprog",w.$$phase);w.$$phase=a}function A(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function v(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function p(){for(;aa.length;)try{aa.shift()()}catch(a){g(a)}e=null}function C(){null===e&&(e=k.defer(function(){w.$apply(p)}))}r.prototype={constructor:r,
$new:function(b,c){var d;c=c||this;b?(d=new r,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",l);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=x);k||
(k=g.$$watchers=[]);k.unshift(l);A(this,1);return function(){0<=ab(k,l)&&A(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!q(e)){if(H(e))if(za(e))for(f!==r&&(f=r,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==t&&(f=t={},n=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)qa.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=
h(a,c),r=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(za(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)qa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,r,n=b,A,q=[],v,C;t("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),p());c=null;do{r=!1;for(A=this;u.length;){try{C=u.shift(),C.scope.$eval(C.expression,C.locals)}catch(aa){g(aa)}c=null}a:do{if(l=A.$$watchers)for(m=l.length;m--;)try{if(a=
l[m])if((f=a.get(A))!==(h=a.last)&&!(a.eq?ma(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,c=a,a.last=a.eq?bb(f,null):f,a.fn(f,h===s?f:h,A),5>n&&(v=4-n,q[v]||(q[v]=[]),q[v].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){r=!1;break a}}catch(y){g(y)}if(!(l=A.$$watchersCount&&A.$$childHead||A!==this&&A.$$nextSibling))for(;A!==this&&!(l=A.$$nextSibling);)A=A.$parent}while(A=l);if((r||u.length)&&!n--)throw w.$$phase=null,d("infdig",
b,q);}while(r||u.length);for(w.$$phase=null;L.length;)try{L.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();A(this,-this.$$watchersCount);for(var b in this.$$listenerCount)v(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$$nextSibling=null;m(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||u.length||k.defer(function(){u.length&&w.$digest()});u.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){L.push(a)},$apply:function(a){try{t("$apply");
try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&aa.push(b);C()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,v(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h=
{name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};
if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new r,u=w.$$asyncQueue=[],L=w.$$postDigestQueue=[],aa=w.$$applyAsyncQueue=[];return w}]}function ge(){var a=/^\s*(https?|ftp|mailto|tel|file):/,
b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=wa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ag(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=ud(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Ma(a))return new RegExp("^"+
a.source+"$");throw ya("imatcher");}function vd(a){var b=[];y(a)&&n(a,function(a){b.push(ag(a))});return b}function pf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=vd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=vd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=
new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||q(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",
a);return new c(b)},getTrusted:function(d,e){if(null===e||q(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=wa(e.toString()),r,t,n=!1;r=0;for(t=a.length;r<t;r++)if(c(a[r],g)){n=!0;break}if(n)for(r=0,t=b.length;r<t;r++)if(c(b[r],g)){n=!1;break}if(n)return e;throw ya("insecurl",e.toString());}if(d===la.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
function of(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw ya("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(la,function(a,
b){var d=F(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function qf(){this.$get=["$window","$document",function(a,b){var d={},c=ea((/android (\d+)/.exec(F((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var r in k)if(l=h.exec(r)){g=l[0];g=g.substr(0,1).toUpperCase()+
g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=E(k.webkitTransition),m=E(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(q(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",
function(a,b,d,c){function e(f,g){e.totalPendingRequests++;E(f)&&a.get(f)||(f=c.getTrustedResourceUrl(f));var h=b.defaults&&b.defaults.transformResponse;I(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ha("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope",
"$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=fa.element(a).data("$binding");c&&n(c,function(c){d?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},
setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function uf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=x);var m=ra.call(arguments,3),r=y(l)&&!l,t=(r?c:d).defer(),n=t.promise,q;q=b.defer(function(){try{t.resolve(f.apply(null,m))}catch(b){t.reject(b),e(b)}finally{delete g[n.$$timeoutId]}r||a.$apply()},k);n.$$timeoutId=q;g[q]=t;return n}var g={};
f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function wa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function ed(a){a=
E(a)?wa(a):a;return a.protocol===wd.protocol&&a.host===wd.host}function vf(){this.$get=na(S)}function xd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),q(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function zf(){this.$get=xd}function Jc(a){function b(d,c){if(H(d)){var e={};n(d,function(a,c){e[c]=
b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",yd);b("date",zd);b("filter",bg);b("json",cg);b("limitTo",dg);b("lowercase",eg);b("number",Ad);b("orderBy",Bd);b("uppercase",fg)}function bg(){return function(a,b,d){if(!za(a)){if(null==a)return a;throw G("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=
gg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function gg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=ma:z(b)||(b=function(a,b){if(q(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(I(a))return a.some(function(a){return Ka(a,b,d,c)});
switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!q(e)&&(f="$"===h,!Ka(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function yd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){q(c)&&(c=b.CURRENCY_SYM);q(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Cd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,
e).replace(/\u00A4/g,c)}}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Cd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Cd(a,b,d,c,e){if(H(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;
q(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",r=0,t=b.lgSize,n=b.gSize;if(h.length>=t+n)for(r=h.length-t,l=0;l<r;l++)0===(r-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=r;l<h.length;l++)0===(h.length-l)%t&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Gb(a,b,d){var c="";
0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function ca(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=sb(b?"SHORT"+a:a);return c[f][e]}}function Dd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Ed(a){return function(b){var d=Dd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function zd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));h.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;h=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=hg.test(c)?ea(c):b(c));Q(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ig.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(b){k=jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function cg(){return function(a,b){q(b)&&(b=2);return db(a,b)}}function dg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!I(a)&&!E(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Bd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(z(b))h=b;else if(E(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!za(a))return a;I(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&
(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return na(a)}function Fd(a,b,d,c,e){var f=this,g=[];f.$error=
{};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Ib};Gd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};
f.$setPristine=function(){c.setClass(a,Wa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=F(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});
b.on("compositionend",function(){h=!1;k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",k);c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(da(d))return d;if(E(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(kg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,
mm:0,ss:0,sss:0},n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)&&!da(a)?d(a)||u:a}Hd(e,f,g,h);jb(e,f,g,h,k,l);var A=h&&h.$options&&h.$options.timezone,v;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,v),A&&(a=Pb(a,A)),a):u});h.$formatters.push(function(a){if(a&&
!da(a))throw lb("datefmt",a);if(r(a))return(v=a)&&A&&(v=Pb(v,A,!0)),m("date")(a,c,A);v=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!r(a)||q(s)||d(a)>=s};g.$observe("min",function(a){s=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!r(a)||q(p)||d(a)<=p};g.$observe("max",function(a){p=n(a);h.$validate()})}}}function Hd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
return c.badInput&&!c.typeMismatch?u:a})}function Id(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return I(a)?(n(a,function(a){b=b.concat(e(a))}),b):E(a)?a.split(" "):H(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||$(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!ma(a,m)){var q=e(m),n=c(l,q),l=c(q,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=ia(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==
a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Gd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Jd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Jd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){q(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Kd(c.$pending)&&(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Ld,!0),c.$valid=c.$invalid=u,d("",null)):(b(Ld,!1),c.$valid=Kd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Kd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var lg=/^\/(.+)\/([a-z]*)$/,
F=function(a){return E(a)?a.toLowerCase():a},qa=Object.prototype.hasOwnProperty,sb=function(a){return E(a)?a.toUpperCase():a},Ha,B,oa,ra=[].slice,Pf=[].splice,mg=[].push,sa=Object.prototype.toString,rc=Object.getPrototypeOf,Aa=G("ng"),fa=S.angular||(S.angular={}),Sb,nb=0;Ha=X.documentMode;x.$inject=[];Ya.$inject=[];var I=Array.isArray,Vd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,U=function(a){return E(a)?a.trim():a},ud=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!y(Ba.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},pb=function(){if(y(pb.name_))return pb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<
d;++b)if(c=Oa[b],a=X.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Rb,Na=3,fe={full:"1.4.8",major:1,minor:4,dot:8,codeName:"ice-manipulation"};N.expando="ng339";var gb=N.cache={},Ff=1;N._data=function(a){return this.cache[a[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=G("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,
Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Kf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Pa=N.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),N(S).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:mg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[F(a)]=a});var Rc={};n("input select option textarea button form details".split(" "),
function(a){Rc[a]=!0});var Zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:vb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1}},function(a,b){N[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return B.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Oc,injector:function(a){return Bb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=F(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||x).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
text:function(){function a(a,d){if(q(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(q(b)){if(a.multiple&&"select"===ta(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(q(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Pc},function(a,b){N.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Pc&&q(2==a.length&&a!==yb&&a!==Oc?
b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=q(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:vb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Kc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Hf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Jf),h(b,u,!0)):h(b)}},off:Nc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);n(new N(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
a.nodeType;if(1===d||11===d){b=new N(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new N(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=B(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new N(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;q(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:f,target:a},b.type&&(c=M(c,b)),b=ia(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){N.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)q(f)?(f=a(this[g],b,c,e),y(f)&&(f=B(f))):Mc(f,a(this[g],b,c,e));return y(f)?f:this};N.prototype.bind=N.prototype.on;
N.prototype.unbind=N.prototype.off});Sa.prototype={put:function(a,b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var yf=[function(){this.$get=[function(){return Sa}]}],Tc=/^[^\(]*\(\s*([^\)]*)\)/m,ng=/,/,og=/^\s*(_?)(\S+?)\1\s*$/,Sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=G("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&
d||(d=a.name||Lf(a)),Da("strictdi",d);b=a.toString().replace(Sc,"");b=b.match(Tc);n(b[1].split(ng),function(a){a.replace(og,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Md=G("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Te=function(){var a=
new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Mf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:x,on:x,off:x,pin:x,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Re=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ea(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ea(h))},leave:function(b,c){return a.push(b,"leave",Ea(c),function(){b.remove()})},addClass:function(b,c,g){g=Ea(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ea(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ea(h);h.addClass=hb(h.addClass,
c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ea(k);k.from=k.from?M(k.from,c):c;k.to=k.to?M(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
null);var g,h=new d;return{start:f,end:f}}}]},ha=G("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Qf=G("$controller"),Uc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},$c="application/json",ac={"Content-Type":$c+";charset=utf-8"},Sf=/^\[|^\{(?!\{)/,Tf={"[":/]$/,"{":/}$/},Rf=/^\)\]\}',?\n/,pg=G("$http"),dd=function(a){return function(){throw pg("legacy",
a);}},Ja=fa.$interpolateMinErr=G("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var qg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Vf={http:80,https:443,ftp:21},Db=G("$location"),rg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(q(a))return this.$$url;var b=qg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Eb("$$protocol"),
host:Eb("$$host"),port:Eb("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(H(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Db("isrcharg");break;default:q(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:id("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([hd,dc,cc],function(a){a.prototype=Object.create(rg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Db("nostate");this.$$state=q(b)?null:b;return this}});var ba=G("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,Yf=Function.prototype.bind,Lb=$();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var sg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=sg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal=
"Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,
body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,
operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},
throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:u},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};W(c,d.$filter);var e="",f;this.stage="assign";if(f=pd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=nd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,xa,kd,jd,ld,Zf,md,a);this.state=this.stage=u;e.literal=qd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
d,c,e,f){var g,h,k=this,l,m;c=c||x;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!od(a.left))throw ba("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;W(c,d.$filter);var e,f;if(e=pd(c))f=this.recurse(e);e=nd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=qd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var r=[],n=0;n<g.length;++n)r.push(g[n](a,c,d,f));a=e.apply(u,r,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,m){var r=e(a,c,d,m),n;if(null!=r.value){xa(r.context,f.expression);kd(r.value,f.expression);n=[];for(var q=0;q<g.length;++q)n.push(xa(g[q](a,c,d,m),f.expression));n=xa(r.value.apply(r.context,n),f.expression)}return b?{value:n}:n};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);xa(n.value,f.expression);ld(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=md(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&xa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=jd(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],xa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Fb(b))&&xa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,b):new rd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};$();$();var $f=Object.prototype.valueOf,ya=G("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),Y=X.createElement("a"),wd=wa(S.location.href);
xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var ic=".",jg={yyyy:ca("FullYear",4),yy:ca("FullYear",2,0,!0),y:ca("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,b){return 12>
a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ig=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,hg=/^\-?\d+$/;zd.$inject=["$locale"];var eg=na(F),fg=na(sb);Bd.$inject=["$parse"];var he=na({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===sa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});n(Zc,function(a,b){tb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(lg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=va("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Ib={$addControl:x,$$renameControl:function(a,b){a.$name=b},$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x,$setSubmitted:x};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||x}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Fd,compile:function(d,f){d.addClass(Wa).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):x;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,u),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
s(a,u);M(n,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),kg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,tg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,ug=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,vg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,
Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,b){if(da(a))return a;if(E(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Dd(c),e=7*(e-1);b&&(d=b.getHours(),f=
b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hd(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:vg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
q(g)||a>=g};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||q(h)||a<=h};d.$observe("max",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||tg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);
c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||ug.test(d)}},radio:function(a,b,d,c){q(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Id(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Id(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:x,button:x,submit:x,reset:x,file:x},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Sd[F(g.type)]||Sd.text)(e,f,g,h[0],b,a,d,c)}}}}],wg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,
b){return wg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=q(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=q(a)?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Me=na({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=La({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},xg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var s=0,v,u,p,C=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
b()},u=++s;f?(a(f,!0).then(function(a){if(u===s){var b=c.$new();n.template=a;a=q(b,function(a){C();d.enter(a,null,e).then(m)});v=b;p=a;v.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){u===s&&(C(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(C(),n.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,X).childNodes)(b,function(a){d.append(a)},
{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],ze=La({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!q(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){return I(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Jd="ng-invalid",Wa="ng-pristine",Jb="ng-dirty",Ld="ng-pending",lb=G("ngModel"),yg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Ib;var m=e(d.ngModel),r=m.assign,t=m,s=r,v=null,B,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");t=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!m.assign)throw lb("nonassign",d.ngModel,ua(c));};this.$render=x;this.$isEmpty=
function(a){return q(a)||""===a||null===a||a!==a};var C=0;Gd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,Jb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=
!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=
!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw lb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},x):g(!0)}function f(a,b){h===C&&p.$setValidity(a,b)}function g(a){h===C&&c(a)}C++;var h=C;(function(){var a=p.$$parserName||"parse";if(q(B))f(a,
null);else return B||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(B=q(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),
q(b)){B=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=t(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=
a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=t(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;B=u;for(var c=p.$formatters,
d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,x))}return b})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:yg,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,
a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],zg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?
(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(zg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=La({terminal:!0,priority:1E3}),Ag=G("ngOptions"),Bg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,
b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&za(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Bg);if(!m)throw Ag("iexp",a,ua(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];c=b(m[2]?m[1]:n);var v=a&&b(a)||c,u=s&&b(s),p=s?function(a,b){return u(d,b)}:function(a){return Ca(a)},C=function(a,b){return p(a,z(a,b))},w=b(m[2]||
m[1]),y=b(m[3]||""),B=b(m[4]||""),x=b(m[8]),D={},z=q?function(a,b){D[q]=b;D[n]=a;return D}:function(a){D[n]=a;return D};return{trackBy:s,getTrackByValue:C,getWatchables:b(x,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=z(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=B(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=x(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],r=z(c[n],n),q=v(d,r),n=p(q,r),t=w(d,
r),u=y(d,r),r=B(d,r),q=new e(n,q,t,u,r);a.push(q);b[n]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[C(a)]},getViewValueFromOption:function(a){return s?fa.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=x},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&F(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function r(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=z&&z[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function s(){var a=D&&u.readValue();D=E.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);D.items.forEach(function(a){var f,h;a.group?
(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){r(b[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var f=u.readValue();(E.trackBy?ma(a,f):a===f)||(v.$setViewValue(f),v.$render())}}var v=k[1];if(v){var u=k[0];k=
h.multiple;for(var p,C=0,w=g.children(),y=w.length;C<y;C++)if(""===w[C].value){p=w.eq(C);break}var x=!!p,z=B(c.cloneNode(!1));z.val("?");var D,E=d(h.ngOptions,g,b);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=D.selectValueMap[a])&&!a.disabled&&b.push(D.getViewValueFromOption(a))});
return b},E.trackBy&&b.$watchCollection(function(){if(I(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var b=D.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(z.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(z.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(z),
g.val("?"),z.prop("selected",!0),z.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),z.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&b.$watch(function(){return E.getTrackByValue(v.$viewValue)},function(){v.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=B(c.cloneNode(!1));s();b.$watchCollection(E.getWatchables,s)}}}}}],Be=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,s=f.$eval(m)||{},u={},v=b.startSymbol(),y=b.endSymbol(),p=v+l+"-"+r+y,C=fa.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+F(c[2]),s[c]=g.attr(h.$attr[b]))});n(s,function(a,d){u[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-r));c===w||e&&Q(w)&&isNaN(w)||(C(),e=u[c],q(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
m),C=x,k()):C=f.$watch(e,k),w=c)})}}}],Ce=["$parse","$animate",function(a,b){var d=G("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var l=k[1],m=k[2],r=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var s=k[3]||k[1],v=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var x,p,y,w,z={$id:Ca};q?x=a(q):(y=function(a,b){return Ca(b)},w=function(a){return a});return function(a,e,f,k,l){x&&(p=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=
d;return x(a,z)});var q=$();a.$watchCollection(m,function(f){var k,m,t=e[0],x,z=$(),D,E,H,F,I,G,J;r&&(a[r]=f);if(za(f))I=f,m=p||y;else for(J in m=p||w,I=[],f)qa.call(f,J)&&"$"!==J.charAt(0)&&I.push(J);D=I.length;J=Array(D);for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],F=m(E,H,k),q[F])G=q[F],delete q[F],z[F]=G,J[k]=G;else{if(z[F])throw n(J,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,H);J[k]={id:F,scope:u,clone:u};z[F]=!0}for(x in q){G=q[x];F=rb(G.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
m;k++)F[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],G=J[k],G.scope){x=t;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);G.clone[0]!=x&&b.move(rb(G.clone),null,B(t));t=G.clone[G.clone.length-1];c(G.scope,k,s,H,v,E,D)}else l(function(a,d){G.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,B(t));t=e;G.clone=a;z[G.id]=G;c(G.scope,k,s,H,v,E,D)});q=z})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=La(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var q=rb(g[c].clone);k[c].$destroy();(h[c]=a.leave(q)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Ge=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),He=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Je=La({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw G("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Cg={$setViewValue:x,$render:x},Dg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Sa;c.ngModelCtrl=Cg;c.unknownOption=B(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=x});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Ra(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=
!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],ke=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Dg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==
e.$viewValue||ma(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],le=na({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
q(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};S.angular.bootstrap?
console.log("WARNING: Tried to load angular more than once."):(ce(),ee(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",
negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(X).ready(function(){Zd(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
define("angular", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.angular;
    };
}(this)));

/**
 * @license AngularJS v1.4.8
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider),
    $routeMinErr = angular.$$minErr('ngRoute');

/**
 * @ngdoc provider
 * @name $routeProvider
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – An identifier name for a reference to the controller.
   *      If present, the controller will be published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = angular.copy(route);
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      path && pathRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] == '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route change has happened successfully.
     * The `resolve` dependencies are now available in the `current.locals` property.
     *
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current/previous route information.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(function() {
              // Don't support cancellation of a reload for now...
              prepareRoute();
              commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              // interpolate modifies newParams, only query params are left
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route when with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
          && !preparedRoute.reloadOnSearch && !forceReload;

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;
        if (nextRoute) {
          if (nextRoute.redirectTo) {
            if (angular.isString(nextRoute.redirectTo)) {
              $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
                       .replace();
            } else {
              $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(nextRoute).
          then(function() {
            if (nextRoute) {
              var locals = angular.extend({}, nextRoute.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = nextRoute.template)) {
                if (angular.isFunction(template)) {
                  template = template(nextRoute.params);
                }
              } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(nextRoute.params);
                }
                if (angular.isDefined(templateUrl)) {
                  nextRoute.loadedTemplateUrl = $sce.valueOf(templateUrl);
                  template = $templateRequest(templateUrl);
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          then(function(locals) {
            // after route change
            if (nextRoute == $route.current) {
              if (nextRoute) {
                nextRoute.locals = locals;
                angular.copy(nextRoute.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
            }
          }, function(error) {
            if (nextRoute == $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.then(function() {
              previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);

define("angular/angularRoute", ["angular"], function(){});

/**
 * @license AngularJS v1.4.8
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/* jshint ignore:start */
// this code is in the core, but not in angular-messages.js
var isArray = angular.isArray;
var forEach = angular.forEach;
var isString = angular.isString;
var jqLite = angular.element;
/* jshint ignore:end */

/**
 * @ngdoc module
 * @name ngMessages
 * @description
 *
 * The `ngMessages` module provides enhanced support for displaying messages within templates
 * (typically within forms or when rendering message objects that return key/value data).
 * Instead of relying on JavaScript code and/or complex ng-if statements within your form template to
 * show and hide error messages specific to the state of an input field, the `ngMessages` and
 * `ngMessage` directives are designed to handle the complexity, inheritance and priority
 * sequencing based on the order of how the messages are defined in the template.
 *
 * Currently, the ngMessages module only contains the code for the `ngMessages`, `ngMessagesInclude`
 * `ngMessage` and `ngMessageExp` directives.
 *
 * # Usage
 * The `ngMessages` directive listens on a key/value collection which is set on the ngMessages attribute.
 * Since the {@link ngModel ngModel} directive exposes an `$error` object, this error object can be
 * used with `ngMessages` to display control error messages in an easier way than with just regular angular
 * template directives.
 *
 * ```html
 * <form name="myForm">
 *   <label>
 *     Enter text:
 *     <input type="text" ng-model="field" name="myField" required minlength="5" />
 *   </label>
 *   <div ng-messages="myForm.myField.$error" role="alert">
 *     <div ng-message="required">You did not enter a field</div>
 *     <div ng-message="minlength, maxlength">
 *       Your email must be between 5 and 100 characters long
 *     </div>
 *   </div>
 * </form>
 * ```
 *
 * Now whatever key/value entries are present within the provided object (in this case `$error`) then
 * the ngMessages directive will render the inner first ngMessage directive (depending if the key values
 * match the attribute value present on each ngMessage directive). In other words, if your errors
 * object contains the following data:
 *
 * ```javascript
 * <!-- keep in mind that ngModel automatically sets these error flags -->
 * myField.$error = { minlength : true, required : true };
 * ```
 *
 * Then the `required` message will be displayed first. When required is false then the `minlength` message
 * will be displayed right after (since these messages are ordered this way in the template HTML code).
 * The prioritization of each message is determined by what order they're present in the DOM.
 * Therefore, instead of having custom JavaScript code determine the priority of what errors are
 * present before others, the presentation of the errors are handled within the template.
 *
 * By default, ngMessages will only display one error at a time. However, if you wish to display all
 * messages then the `ng-messages-multiple` attribute flag can be used on the element containing the
 * ngMessages directive to make this happen.
 *
 * ```html
 * <!-- attribute-style usage -->
 * <div ng-messages="myForm.myField.$error" ng-messages-multiple>...</div>
 *
 * <!-- element-style usage -->
 * <ng-messages for="myForm.myField.$error" multiple>...</ng-messages>
 * ```
 *
 * ## Reusing and Overriding Messages
 * In addition to prioritization, ngMessages also allows for including messages from a remote or an inline
 * template. This allows for generic collection of messages to be reused across multiple parts of an
 * application.
 *
 * ```html
 * <script type="text/ng-template" id="error-messages">
 *   <div ng-message="required">This field is required</div>
 *   <div ng-message="minlength">This field is too short</div>
 * </script>
 *
 * <div ng-messages="myForm.myField.$error" role="alert">
 *   <div ng-messages-include="error-messages"></div>
 * </div>
 * ```
 *
 * However, including generic messages may not be useful enough to match all input fields, therefore,
 * `ngMessages` provides the ability to override messages defined in the remote template by redefining
 * them within the directive container.
 *
 * ```html
 * <!-- a generic template of error messages known as "my-custom-messages" -->
 * <script type="text/ng-template" id="my-custom-messages">
 *   <div ng-message="required">This field is required</div>
 *   <div ng-message="minlength">This field is too short</div>
 * </script>
 *
 * <form name="myForm">
 *   <label>
 *     Email address
 *     <input type="email"
 *            id="email"
 *            name="myEmail"
 *            ng-model="email"
 *            minlength="5"
 *            required />
 *   </label>
 *   <!-- any ng-message elements that appear BEFORE the ng-messages-include will
 *        override the messages present in the ng-messages-include template -->
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <!-- this required message has overridden the template message -->
 *     <div ng-message="required">You did not enter your email address</div>
 *
 *     <!-- this is a brand new message and will appear last in the prioritization -->
 *     <div ng-message="email">Your email address is invalid</div>
 *
 *     <!-- and here are the generic error messages -->
 *     <div ng-messages-include="my-custom-messages"></div>
 *   </div>
 * </form>
 * ```
 *
 * In the example HTML code above the message that is set on required will override the corresponding
 * required message defined within the remote template. Therefore, with particular input fields (such
 * email addresses, date fields, autocomplete inputs, etc...), specialized error messages can be applied
 * while more generic messages can be used to handle other, more general input errors.
 *
 * ## Dynamic Messaging
 * ngMessages also supports using expressions to dynamically change key values. Using arrays and
 * repeaters to list messages is also supported. This means that the code below will be able to
 * fully adapt itself and display the appropriate message when any of the expression data changes:
 *
 * ```html
 * <form name="myForm">
 *   <label>
 *     Email address
 *     <input type="email"
 *            name="myEmail"
 *            ng-model="email"
 *            minlength="5"
 *            required />
 *   </label>
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <div ng-message="required">You did not enter your email address</div>
 *     <div ng-repeat="errorMessage in errorMessages">
 *       <!-- use ng-message-exp for a message whose key is given by an expression -->
 *       <div ng-message-exp="errorMessage.type">{{ errorMessage.text }}</div>
 *     </div>
 *   </div>
 * </form>
 * ```
 *
 * The `errorMessage.type` expression can be a string value or it can be an array so
 * that multiple errors can be associated with a single error message:
 *
 * ```html
 *   <label>
 *     Email address
 *     <input type="email"
 *            ng-model="data.email"
 *            name="myEmail"
 *            ng-minlength="5"
 *            ng-maxlength="100"
 *            required />
 *   </label>
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <div ng-message-exp="'required'">You did not enter your email address</div>
 *     <div ng-message-exp="['minlength', 'maxlength']">
 *       Your email must be between 5 and 100 characters long
 *     </div>
 *   </div>
 * ```
 *
 * Feel free to use other structural directives such as ng-if and ng-switch to further control
 * what messages are active and when. Be careful, if you place ng-message on the same element
 * as these structural directives, Angular may not be able to determine if a message is active
 * or not. Therefore it is best to place the ng-message on a child element of the structural
 * directive.
 *
 * ```html
 * <div ng-messages="myForm.myEmail.$error" role="alert">
 *   <div ng-if="showRequiredError">
 *     <div ng-message="required">Please enter something</div>
 *   </div>
 * </div>
 * ```
 *
 * ## Animations
 * If the `ngAnimate` module is active within the application then the `ngMessages`, `ngMessage` and
 * `ngMessageExp` directives will trigger animations whenever any messages are added and removed from
 * the DOM by the `ngMessages` directive.
 *
 * Whenever the `ngMessages` directive contains one or more visible messages then the `.ng-active` CSS
 * class will be added to the element. The `.ng-inactive` CSS class will be applied when there are no
 * messages present. Therefore, CSS transitions and keyframes as well as JavaScript animations can
 * hook into the animations whenever these classes are added/removed.
 *
 * Let's say that our HTML code for our messages container looks like so:
 *
 * ```html
 * <div ng-messages="myMessages" class="my-messages" role="alert">
 *   <div ng-message="alert" class="some-message">...</div>
 *   <div ng-message="fail" class="some-message">...</div>
 * </div>
 * ```
 *
 * Then the CSS animation code for the message container looks like so:
 *
 * ```css
 * .my-messages {
 *   transition:1s linear all;
 * }
 * .my-messages.ng-active {
 *   // messages are visible
 * }
 * .my-messages.ng-inactive {
 *   // messages are hidden
 * }
 * ```
 *
 * Whenever an inner message is attached (becomes visible) or removed (becomes hidden) then the enter
 * and leave animation is triggered for each particular element bound to the `ngMessage` directive.
 *
 * Therefore, the CSS code for the inner messages looks like so:
 *
 * ```css
 * .some-message {
 *   transition:1s linear all;
 * }
 *
 * .some-message.ng-enter {}
 * .some-message.ng-enter.ng-enter-active {}
 *
 * .some-message.ng-leave {}
 * .some-message.ng-leave.ng-leave-active {}
 * ```
 *
 * {@link ngAnimate Click here} to learn how to use JavaScript animations or to learn more about ngAnimate.
 */
angular.module('ngMessages', [])

   /**
    * @ngdoc directive
    * @module ngMessages
    * @name ngMessages
    * @restrict AE
    *
    * @description
    * `ngMessages` is a directive that is designed to show and hide messages based on the state
    * of a key/value object that it listens on. The directive itself complements error message
    * reporting with the `ngModel` $error object (which stores a key/value state of validation errors).
    *
    * `ngMessages` manages the state of internal messages within its container element. The internal
    * messages use the `ngMessage` directive and will be inserted/removed from the page depending
    * on if they're present within the key/value object. By default, only one message will be displayed
    * at a time and this depends on the prioritization of the messages within the template. (This can
    * be changed by using the `ng-messages-multiple` or `multiple` attribute on the directive container.)
    *
    * A remote template can also be used to promote message reusability and messages can also be
    * overridden.
    *
    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression" role="alert">
    *   <ANY ng-message="stringValue">...</ANY>
    *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
    *   <ANY ng-message-exp="expressionValue">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression" role="alert">
    *   <ng-message when="stringValue">...</ng-message>
    *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
    *   <ng-message when-exp="expressionValue">...</ng-message>
    * </ng-messages>
    * ```
    *
    * @param {string} ngMessages an angular expression evaluating to a key/value object
    *                 (this is typically the $error object on an ngModel instance).
    * @param {string=} ngMessagesMultiple|multiple when set, all messages will be displayed with true
    *
    * @example
    * <example name="ngMessages-directive" module="ngMessagesExample"
    *          deps="angular-messages.js"
    *          animations="true" fixBase="true">
    *   <file name="index.html">
    *     <form name="myForm">
    *       <label>
    *         Enter your name:
    *         <input type="text"
    *                name="myName"
    *                ng-model="name"
    *                ng-minlength="5"
    *                ng-maxlength="20"
    *                required />
    *       </label>
    *       <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>
    *
    *       <div ng-messages="myForm.myName.$error" style="color:maroon" role="alert">
    *         <div ng-message="required">You did not enter a field</div>
    *         <div ng-message="minlength">Your field is too short</div>
    *         <div ng-message="maxlength">Your field is too long</div>
    *       </div>
    *     </form>
    *   </file>
    *   <file name="script.js">
    *     angular.module('ngMessagesExample', ['ngMessages']);
    *   </file>
    * </example>
    */
   .directive('ngMessages', ['$animate', function($animate) {
     var ACTIVE_CLASS = 'ng-active';
     var INACTIVE_CLASS = 'ng-inactive';

     return {
       require: 'ngMessages',
       restrict: 'AE',
       controller: ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {
         var ctrl = this;
         var latestKey = 0;
         var nextAttachId = 0;

         this.getAttachId = function getAttachId() { return nextAttachId++; };

         var messages = this.messages = {};
         var renderLater, cachedCollection;

         this.render = function(collection) {
           collection = collection || {};

           renderLater = false;
           cachedCollection = collection;

           // this is true if the attribute is empty or if the attribute value is truthy
           var multiple = isAttrTruthy($scope, $attrs.ngMessagesMultiple) ||
                          isAttrTruthy($scope, $attrs.multiple);

           var unmatchedMessages = [];
           var matchedKeys = {};
           var messageItem = ctrl.head;
           var messageFound = false;
           var totalMessages = 0;

           // we use != instead of !== to allow for both undefined and null values
           while (messageItem != null) {
             totalMessages++;
             var messageCtrl = messageItem.message;

             var messageUsed = false;
             if (!messageFound) {
               forEach(collection, function(value, key) {
                 if (!messageUsed && truthy(value) && messageCtrl.test(key)) {
                   // this is to prevent the same error name from showing up twice
                   if (matchedKeys[key]) return;
                   matchedKeys[key] = true;

                   messageUsed = true;
                   messageCtrl.attach();
                 }
               });
             }

             if (messageUsed) {
               // unless we want to display multiple messages then we should
               // set a flag here to avoid displaying the next message in the list
               messageFound = !multiple;
             } else {
               unmatchedMessages.push(messageCtrl);
             }

             messageItem = messageItem.next;
           }

           forEach(unmatchedMessages, function(messageCtrl) {
             messageCtrl.detach();
           });

           unmatchedMessages.length !== totalMessages
              ? $animate.setClass($element, ACTIVE_CLASS, INACTIVE_CLASS)
              : $animate.setClass($element, INACTIVE_CLASS, ACTIVE_CLASS);
         };

         $scope.$watchCollection($attrs.ngMessages || $attrs['for'], ctrl.render);

         this.reRender = function() {
           if (!renderLater) {
             renderLater = true;
             $scope.$evalAsync(function() {
               if (renderLater) {
                 cachedCollection && ctrl.render(cachedCollection);
               }
             });
           }
         };

         this.register = function(comment, messageCtrl) {
           var nextKey = latestKey.toString();
           messages[nextKey] = {
             message: messageCtrl
           };
           insertMessageNode($element[0], comment, nextKey);
           comment.$$ngMessageNode = nextKey;
           latestKey++;

           ctrl.reRender();
         };

         this.deregister = function(comment) {
           var key = comment.$$ngMessageNode;
           delete comment.$$ngMessageNode;
           removeMessageNode($element[0], comment, key);
           delete messages[key];
           ctrl.reRender();
         };

         function findPreviousMessage(parent, comment) {
           var prevNode = comment;
           var parentLookup = [];
           while (prevNode && prevNode !== parent) {
             var prevKey = prevNode.$$ngMessageNode;
             if (prevKey && prevKey.length) {
               return messages[prevKey];
             }

             // dive deeper into the DOM and examine its children for any ngMessage
             // comments that may be in an element that appears deeper in the list
             if (prevNode.childNodes.length && parentLookup.indexOf(prevNode) == -1) {
               parentLookup.push(prevNode);
               prevNode = prevNode.childNodes[prevNode.childNodes.length - 1];
             } else {
               prevNode = prevNode.previousSibling || prevNode.parentNode;
             }
           }
         }

         function insertMessageNode(parent, comment, key) {
           var messageNode = messages[key];
           if (!ctrl.head) {
             ctrl.head = messageNode;
           } else {
             var match = findPreviousMessage(parent, comment);
             if (match) {
               messageNode.next = match.next;
               match.next = messageNode;
             } else {
               messageNode.next = ctrl.head;
               ctrl.head = messageNode;
             }
           }
         }

         function removeMessageNode(parent, comment, key) {
           var messageNode = messages[key];

           var match = findPreviousMessage(parent, comment);
           if (match) {
             match.next = messageNode.next;
           } else {
             ctrl.head = messageNode.next;
           }
         }
       }]
     };

     function isAttrTruthy(scope, attr) {
      return (isString(attr) && attr.length === 0) || //empty attribute
             truthy(scope.$eval(attr));
     }

     function truthy(val) {
       return isString(val) ? val.length : !!val;
     }
   }])

   /**
    * @ngdoc directive
    * @name ngMessagesInclude
    * @restrict AE
    * @scope
    *
    * @description
    * `ngMessagesInclude` is a directive with the purpose to import existing ngMessage template
    * code from a remote template and place the downloaded template code into the exact spot
    * that the ngMessagesInclude directive is placed within the ngMessages container. This allows
    * for a series of pre-defined messages to be reused and also allows for the developer to
    * determine what messages are overridden due to the placement of the ngMessagesInclude directive.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression" role="alert">
    *   <ANY ng-messages-include="remoteTplString">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression" role="alert">
    *   <ng-messages-include src="expressionValue1">...</ng-messages-include>
    * </ng-messages>
    * ```
    *
    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
    *
    * @param {string} ngMessagesInclude|src a string value corresponding to the remote template.
    */
   .directive('ngMessagesInclude',
     ['$templateRequest', '$document', '$compile', function($templateRequest, $document, $compile) {

     return {
       restrict: 'AE',
       require: '^^ngMessages', // we only require this for validation sake
       link: function($scope, element, attrs) {
         var src = attrs.ngMessagesInclude || attrs.src;
         $templateRequest(src).then(function(html) {
           $compile(html)($scope, function(contents) {
             element.after(contents);

             // the anchor is placed for debugging purposes
             var anchor = jqLite($document[0].createComment(' ngMessagesInclude: ' + src + ' '));
             element.after(anchor);

             // we don't want to pollute the DOM anymore by keeping an empty directive element
             element.remove();
           });
         });
       }
     };
   }])

   /**
    * @ngdoc directive
    * @name ngMessage
    * @restrict AE
    * @scope
    *
    * @description
    * `ngMessage` is a directive with the purpose to show and hide a particular message.
    * For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
    * must be situated since it determines which messages are visible based on the state
    * of the provided key/value map that `ngMessages` listens on.
    *
    * More information about using `ngMessage` can be found in the
    * {@link module:ngMessages `ngMessages` module documentation}.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression" role="alert">
    *   <ANY ng-message="stringValue">...</ANY>
    *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression" role="alert">
    *   <ng-message when="stringValue">...</ng-message>
    *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
    * </ng-messages>
    * ```
    *
    * @param {expression} ngMessage|when a string value corresponding to the message key.
    */
  .directive('ngMessage', ngMessageDirectiveFactory('AE'))


   /**
    * @ngdoc directive
    * @name ngMessageExp
    * @restrict AE
    * @scope
    *
    * @description
    * `ngMessageExp` is a directive with the purpose to show and hide a particular message.
    * For `ngMessageExp` to operate, a parent `ngMessages` directive on a parent DOM element
    * must be situated since it determines which messages are visible based on the state
    * of the provided key/value map that `ngMessages` listens on.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression">
    *   <ANY ng-message-exp="expressionValue">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression">
    *   <ng-message when-exp="expressionValue">...</ng-message>
    * </ng-messages>
    * ```
    *
    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
    *
    * @param {expression} ngMessageExp|whenExp an expression value corresponding to the message key.
    */
  .directive('ngMessageExp', ngMessageDirectiveFactory('A'));

function ngMessageDirectiveFactory(restrict) {
  return ['$animate', function($animate) {
    return {
      restrict: 'AE',
      transclude: 'element',
      terminal: true,
      require: '^^ngMessages',
      link: function(scope, element, attrs, ngMessagesCtrl, $transclude) {
        var commentNode = element[0];

        var records;
        var staticExp = attrs.ngMessage || attrs.when;
        var dynamicExp = attrs.ngMessageExp || attrs.whenExp;
        var assignRecords = function(items) {
          records = items
              ? (isArray(items)
                    ? items
                    : items.split(/[\s,]+/))
              : null;
          ngMessagesCtrl.reRender();
        };

        if (dynamicExp) {
          assignRecords(scope.$eval(dynamicExp));
          scope.$watchCollection(dynamicExp, assignRecords);
        } else {
          assignRecords(staticExp);
        }

        var currentElement, messageCtrl;
        ngMessagesCtrl.register(commentNode, messageCtrl = {
          test: function(name) {
            return contains(records, name);
          },
          attach: function() {
            if (!currentElement) {
              $transclude(scope, function(elm) {
                $animate.enter(elm, null, element);
                currentElement = elm;

                // Each time we attach this node to a message we get a new id that we can match
                // when we are destroying the node later.
                var $$attachId = currentElement.$$attachId = ngMessagesCtrl.getAttachId();

                // in the event that the parent element is destroyed
                // by any other structural directive then it's time
                // to deregister the message from the controller
                currentElement.on('$destroy', function() {
                  if (currentElement && currentElement.$$attachId === $$attachId) {
                    ngMessagesCtrl.deregister(commentNode);
                    messageCtrl.detach();
                  }
                });
              });
            }
          },
          detach: function() {
            if (currentElement) {
              var elm = currentElement;
              currentElement = null;
              $animate.leave(elm);
            }
          }
        });
      }
    };
  }];

  function contains(collection, key) {
    if (collection) {
      return isArray(collection)
          ? collection.indexOf(key) >= 0
          : collection.hasOwnProperty(key);
    }
  }
}


})(window, window.angular);

define("angular/angularMessages", ["angular"], function(){});

/*
 * ngDialog - easy modals and popup windows
 * http://github.com/likeastore/ngDialog
 * (c) 2013-2015 MIT License, https://likeastore.com
 */

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        if (typeof angular === 'undefined') {
            module.exports = factory(require('angular'));
        } else {
            module.exports = factory(angular);
        }
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define('angular/ngDialog',['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    var m = angular.module('ngDialog', []);

    var $el = angular.element;
    var isDef = angular.isDefined;
    var style = (document.body || document.documentElement).style;
    var animationEndSupport = isDef(style.animation) || isDef(style.WebkitAnimation) || isDef(style.MozAnimation) || isDef(style.MsAnimation) || isDef(style.OAnimation);
    var animationEndEvent = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend';
    var focusableElementSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    var disabledAnimationClass = 'ngdialog-disabled-animation';
    var forceElementsReload = { html: false, body: false };
    var scopes = {};
    var openIdStack = [];
    var keydownIsBound = false;

    m.provider('ngDialog', function () {
        var defaults = this.defaults = {
            className: 'ngdialog-theme-default',
            disableAnimation: false,
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            closeByNavigation: false,
            appendTo: false,
            preCloseCallback: false,
            overlay: true,
            cache: true,
            trapFocus: true,
            preserveFocus: true,
            ariaAuto: true,
            ariaRole: null,
            ariaLabelledById: null,
            ariaLabelledBySelector: null,
            ariaDescribedById: null,
            ariaDescribedBySelector: null
        };

        this.setForceHtmlReload = function (_useIt) {
            forceElementsReload.html = _useIt || false;
        };

        this.setForceBodyReload = function (_useIt) {
            forceElementsReload.body = _useIt || false;
        };

        this.setDefaults = function (newDefaults) {
            angular.extend(defaults, newDefaults);
        };

        var globalID = 0, dialogsCount = 0, closeByDocumentHandler, defers = {};

        this.$get = ['$document', '$templateCache', '$compile', '$q', '$http', '$rootScope', '$timeout', '$window', '$controller', '$injector',
            function ($document, $templateCache, $compile, $q, $http, $rootScope, $timeout, $window, $controller, $injector) {
                var $elements = [];

                angular.forEach(
                    ['html', 'body'],
                    function(elementName) {
                        $elements[elementName] = $document.find(elementName);
                        if (forceElementsReload[elementName]) {
                            var eventName = privateMethods.getRouterLocationEventName();
                            $rootScope.$on(eventName, function () {
                                $elements[elementName] = $document.find(elementName);
                            });
                        }
                    }
                );

                var privateMethods = {
                    onDocumentKeydown: function (event) {
                        if (event.keyCode === 27) {
                            publicMethods.close('$escape');
                        }
                    },

                    activate: function($dialog) {
                        var options = $dialog.data('$ngDialogOptions');

                        if (options.trapFocus) {
                            $dialog.on('keydown', privateMethods.onTrapFocusKeydown);

                            // Catch rogue changes (eg. after unfocusing everything by clicking a non-focusable element)
                            $elements.body.on('keydown', privateMethods.onTrapFocusKeydown);
                        }
                    },

                    deactivate: function ($dialog) {
                        $dialog.off('keydown', privateMethods.onTrapFocusKeydown);
                        $elements.body.off('keydown', privateMethods.onTrapFocusKeydown);
                    },

                    deactivateAll: function () {
                        angular.forEach(function(el) {
                            var $dialog = angular.element(el);
                            privateMethods.deactivate($dialog);
                        });
                    },

                    setBodyPadding: function (width) {
                        var originalBodyPadding = parseInt(($elements.body.css('padding-right') || 0), 10);
                        $elements.body.css('padding-right', (originalBodyPadding + width) + 'px');
                        $elements.body.data('ng-dialog-original-padding', originalBodyPadding);
                    },

                    resetBodyPadding: function () {
                        var originalBodyPadding = $elements.body.data('ng-dialog-original-padding');
                        if (originalBodyPadding) {
                            $elements.body.css('padding-right', originalBodyPadding + 'px');
                        } else {
                            $elements.body.css('padding-right', '');
                        }
                    },

                    performCloseDialog: function ($dialog, value) {
                        var options = $dialog.data('$ngDialogOptions');
                        var id = $dialog.attr('id');
                        var scope = scopes[id];

                        if (!scope) {
                            // Already closed
                            return;
                        }

                        if (typeof $window.Hammer !== 'undefined') {
                            var hammerTime = scope.hammerTime;
                            hammerTime.off('tap', closeByDocumentHandler);
                            hammerTime.destroy && hammerTime.destroy();
                            delete scope.hammerTime;
                        } else {
                            $dialog.unbind('click');
                        }

                        if (dialogsCount === 1) {
                            $elements.body.unbind('keydown', privateMethods.onDocumentKeydown);
                        }

                        if (!$dialog.hasClass('ngdialog-closing')){
                            dialogsCount -= 1;
                        }

                        var previousFocus = $dialog.data('$ngDialogPreviousFocus');
                        if (previousFocus) {
                            previousFocus.focus();
                        }

                        $rootScope.$broadcast('ngDialog.closing', $dialog, value);
                        dialogsCount = dialogsCount < 0 ? 0 : dialogsCount;
                        if (animationEndSupport && !options.disableAnimation) {
                            scope.$destroy();
                            $dialog.unbind(animationEndEvent).bind(animationEndEvent, function () {
                                privateMethods.closeDialogElement($dialog, value);
                            }).addClass('ngdialog-closing');
                        } else {
                            scope.$destroy();
                            privateMethods.closeDialogElement($dialog, value);
                        }
                        if (defers[id]) {
                            defers[id].resolve({
                                id: id,
                                value: value,
                                $dialog: $dialog,
                                remainingDialogs: dialogsCount
                            });
                            delete defers[id];
                        }
                        if (scopes[id]) {
                            delete scopes[id];
                        }
                        openIdStack.splice(openIdStack.indexOf(id), 1);
                        if (!openIdStack.length) {
                            $elements.body.unbind('keydown', privateMethods.onDocumentKeydown);
                            keydownIsBound = false;
                        }
                    },

                    closeDialogElement: function($dialog, value) {
                        $dialog.remove();
                        if (dialogsCount === 0) {
                            $elements.html.removeClass('ngdialog-open');
                            $elements.body.removeClass('ngdialog-open');
                            privateMethods.resetBodyPadding();
                        }
                        $rootScope.$broadcast('ngDialog.closed', $dialog, value);
                    },

                    closeDialog: function ($dialog, value) {
                        var preCloseCallback = $dialog.data('$ngDialogPreCloseCallback');

                        if (preCloseCallback && angular.isFunction(preCloseCallback)) {

                            var preCloseCallbackResult = preCloseCallback.call($dialog, value);

                            if (angular.isObject(preCloseCallbackResult)) {
                                if (preCloseCallbackResult.closePromise) {
                                    preCloseCallbackResult.closePromise.then(function () {
                                        privateMethods.performCloseDialog($dialog, value);
                                    });
                                } else {
                                    preCloseCallbackResult.then(function () {
                                        privateMethods.performCloseDialog($dialog, value);
                                    }, function () {
                                        return;
                                    });
                                }
                            } else if (preCloseCallbackResult !== false) {
                                privateMethods.performCloseDialog($dialog, value);
                            }
                        } else {
                            privateMethods.performCloseDialog($dialog, value);
                        }
                    },

                    onTrapFocusKeydown: function(ev) {
                        var el = angular.element(ev.currentTarget);
                        var $dialog;

                        if (el.hasClass('ngdialog')) {
                            $dialog = el;
                        } else {
                            $dialog = privateMethods.getActiveDialog();

                            if ($dialog === null) {
                                return;
                            }
                        }

                        var isTab = (ev.keyCode === 9);
                        var backward = (ev.shiftKey === true);

                        if (isTab) {
                            privateMethods.handleTab($dialog, ev, backward);
                        }
                    },

                    handleTab: function($dialog, ev, backward) {
                        var focusableElements = privateMethods.getFocusableElements($dialog);

                        if (focusableElements.length === 0) {
                            if (document.activeElement) {
                                document.activeElement.blur();
                            }
                            return;
                        }

                        var currentFocus = document.activeElement;
                        var focusIndex = Array.prototype.indexOf.call(focusableElements, currentFocus);

                        var isFocusIndexUnknown = (focusIndex === -1);
                        var isFirstElementFocused = (focusIndex === 0);
                        var isLastElementFocused = (focusIndex === focusableElements.length - 1);

                        var cancelEvent = false;

                        if (backward) {
                            if (isFocusIndexUnknown || isFirstElementFocused) {
                                focusableElements[focusableElements.length - 1].focus();
                                cancelEvent = true;
                            }
                        } else {
                            if (isFocusIndexUnknown || isLastElementFocused) {
                                focusableElements[0].focus();
                                cancelEvent = true;
                            }
                        }

                        if (cancelEvent) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    },

                    autoFocus: function($dialog) {
                        var dialogEl = $dialog[0];

                        // Browser's (Chrome 40, Forefix 37, IE 11) don't appear to honor autofocus on the dialog, but we should
                        var autoFocusEl = dialogEl.querySelector('*[autofocus]');
                        if (autoFocusEl !== null) {
                            autoFocusEl.focus();

                            if (document.activeElement === autoFocusEl) {
                                return;
                            }

                            // Autofocus element might was display: none, so let's continue
                        }

                        var focusableElements = privateMethods.getFocusableElements($dialog);

                        if (focusableElements.length > 0) {
                            focusableElements[0].focus();
                            return;
                        }

                        // We need to focus something for the screen readers to notice the dialog
                        var contentElements = privateMethods.filterVisibleElements(dialogEl.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span'));

                        if (contentElements.length > 0) {
                            var contentElement = contentElements[0];
                            $el(contentElement).attr('tabindex', '-1').css('outline', '0');
                            contentElement.focus();
                        }
                    },

                    getFocusableElements: function ($dialog) {
                        var dialogEl = $dialog[0];

                        var rawElements = dialogEl.querySelectorAll(focusableElementSelector);

                        // Ignore untabbable elements, ie. those with tabindex = -1
                        var tabbableElements = privateMethods.filterTabbableElements(rawElements);

                        return privateMethods.filterVisibleElements(tabbableElements);
                    },

                    filterTabbableElements: function (els) {
                        var tabbableFocusableElements = [];

                        for (var i = 0; i < els.length; i++) {
                            var el = els[i];

                            if ($el(el).attr('tabindex') !== '-1') {
                                tabbableFocusableElements.push(el);
                            }
                        }

                        return tabbableFocusableElements;
                    },

                    filterVisibleElements: function (els) {
                        var visibleFocusableElements = [];

                        for (var i = 0; i < els.length; i++) {
                            var el = els[i];

                            if (el.offsetWidth > 0 || el.offsetHeight > 0) {
                                visibleFocusableElements.push(el);
                            }
                        }

                        return visibleFocusableElements;
                    },

                    getActiveDialog: function () {
                        var dialogs = document.querySelectorAll('.ngdialog');

                        if (dialogs.length === 0) {
                            return null;
                        }

                        // TODO: This might be incorrect if there are a mix of open dialogs with different 'appendTo' values
                        return $el(dialogs[dialogs.length - 1]);
                    },

                    applyAriaAttributes: function ($dialog, options) {
                        if (options.ariaAuto) {
                            if (!options.ariaRole) {
                                var detectedRole = (privateMethods.getFocusableElements($dialog).length > 0) ?
                                    'dialog' :
                                    'alertdialog';

                                options.ariaRole = detectedRole;
                            }

                            if (!options.ariaLabelledBySelector) {
                                options.ariaLabelledBySelector = 'h1,h2,h3,h4,h5,h6';
                            }

                            if (!options.ariaDescribedBySelector) {
                                options.ariaDescribedBySelector = 'article,section,p';
                            }
                        }

                        if (options.ariaRole) {
                            $dialog.attr('role', options.ariaRole);
                        }

                        privateMethods.applyAriaAttribute(
                            $dialog, 'aria-labelledby', options.ariaLabelledById, options.ariaLabelledBySelector);

                        privateMethods.applyAriaAttribute(
                            $dialog, 'aria-describedby', options.ariaDescribedById, options.ariaDescribedBySelector);
                    },

                    applyAriaAttribute: function($dialog, attr, id, selector) {
                        if (id) {
                            $dialog.attr(attr, id);
                        }

                        if (selector) {
                            var dialogId = $dialog.attr('id');

                            var firstMatch = $dialog[0].querySelector(selector);

                            if (!firstMatch) {
                                return;
                            }

                            var generatedId = dialogId + '-' + attr;

                            $el(firstMatch).attr('id', generatedId);

                            $dialog.attr(attr, generatedId);

                            return generatedId;
                        }
                    },

                    detectUIRouter: function() {
                        //Detect if ui-router module is installed if not return false
                        try {
                            angular.module("ui.router");
                            return true;
                        } catch(err) {
                            return false;
                        }
                    },

                    getRouterLocationEventName: function() {
                        if(privateMethods.detectUIRouter()) {
                            return '$stateChangeSuccess';
                        }
                        return '$locationChangeSuccess';
                    }
                };

                var publicMethods = {

                    /*
                     * @param {Object} options:
                     * - template {String} - id of ng-template, url for partial, plain string (if enabled)
                     * - plain {Boolean} - enable plain string templates, default false
                     * - scope {Object}
                     * - controller {String}
                     * - controllerAs {String}
                     * - className {String} - dialog theme class
                     * - disableAnimation {Boolean} - set to true to disable animation
                     * - showClose {Boolean} - show close button, default true
                     * - closeByEscape {Boolean} - default true
                     * - closeByDocument {Boolean} - default true
                     * - preCloseCallback {String|Function} - user supplied function name/function called before closing dialog (if set)
                     *
                     * @return {Object} dialog
                     */
                    open: function (opts) {
                        var options = angular.copy(defaults);
                        var localID = ++globalID;
                        var dialogID = 'ngdialog' + localID;
                        openIdStack.push(dialogID);

                        opts = opts || {};
                        angular.extend(options, opts);

                        var defer;
                        defers[dialogID] = defer = $q.defer();

                        var scope;
                        scopes[dialogID] = scope = angular.isObject(options.scope) ? options.scope.$new() : $rootScope.$new();

                        var $dialog, $dialogParent;

                        var resolve = angular.extend({}, options.resolve);

                        angular.forEach(resolve, function (value, key) {
                            resolve[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value, null, null, key);
                        });

                        $q.all({
                            template: loadTemplate(options.template || options.templateUrl),
                            locals: $q.all(resolve)
                        }).then(function (setup) {
                            var template = setup.template,
                                locals = setup.locals;

                            if (options.showClose) {
                                template += '<div class="ngdialog-close"></div>';
                            }

                            $dialog = $el('<div id="ngdialog' + localID + '" class="ngdialog"></div>');
                            $dialog.html((options.overlay ?
                                '<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">' + template + '</div>' :
                                '<div class="ngdialog-content" role="document">' + template + '</div>'));

                            $dialog.data('$ngDialogOptions', options);

                            scope.ngDialogId = dialogID;

                            if (options.data && angular.isString(options.data)) {
                                var firstLetter = options.data.replace(/^\s*/, '')[0];
                                scope.ngDialogData = (firstLetter === '{' || firstLetter === '[') ? angular.fromJson(options.data) : options.data;
                                scope.ngDialogData.ngDialogId = dialogID;
                            } else if (options.data && angular.isObject(options.data)) {
                                scope.ngDialogData = options.data;
                                scope.ngDialogData.ngDialogId = dialogID;
                            }

                            if (options.controller && (angular.isString(options.controller) || angular.isArray(options.controller) || angular.isFunction(options.controller))) {

                                var label;

                                if (options.controllerAs && angular.isString(options.controllerAs)) {
                                    label = options.controllerAs;
                                }

                                var controllerInstance = $controller(options.controller, angular.extend(
                                    locals,
                                    {
                                        $scope: scope,
                                        $element: $dialog
                                    }),
                                    null,
                                    label
                                );
                                $dialog.data('$ngDialogControllerController', controllerInstance);
                            }

                            if (options.className) {
                                $dialog.addClass(options.className);
                            }

                            if (options.disableAnimation) {
                                $dialog.addClass(disabledAnimationClass);
                            }

                            if (options.appendTo && angular.isString(options.appendTo)) {
                                $dialogParent = angular.element(document.querySelector(options.appendTo));
                            } else {
                                $dialogParent = $elements.body;
                            }

                            privateMethods.applyAriaAttributes($dialog, options);

                            if (options.preCloseCallback) {
                                var preCloseCallback;

                                if (angular.isFunction(options.preCloseCallback)) {
                                    preCloseCallback = options.preCloseCallback;
                                } else if (angular.isString(options.preCloseCallback)) {
                                    if (scope) {
                                        if (angular.isFunction(scope[options.preCloseCallback])) {
                                            preCloseCallback = scope[options.preCloseCallback];
                                        } else if (scope.$parent && angular.isFunction(scope.$parent[options.preCloseCallback])) {
                                            preCloseCallback = scope.$parent[options.preCloseCallback];
                                        } else if ($rootScope && angular.isFunction($rootScope[options.preCloseCallback])) {
                                            preCloseCallback = $rootScope[options.preCloseCallback];
                                        }
                                    }
                                }

                                if (preCloseCallback) {
                                    $dialog.data('$ngDialogPreCloseCallback', preCloseCallback);
                                }
                            }

                            scope.closeThisDialog = function (value) {
                                privateMethods.closeDialog($dialog, value);
                            };

                            $timeout(function () {
                                var $activeDialogs = document.querySelectorAll('.ngdialog');
                                privateMethods.deactivateAll($activeDialogs);

                                $compile($dialog)(scope);
                                var widthDiffs = $window.innerWidth - $elements.body.prop('clientWidth');
                                $elements.html.addClass('ngdialog-open');
                                $elements.body.addClass('ngdialog-open');
                                var scrollBarWidth = widthDiffs - ($window.innerWidth - $elements.body.prop('clientWidth'));
                                if (scrollBarWidth > 0) {
                                    privateMethods.setBodyPadding(scrollBarWidth);
                                }
                                $dialogParent.append($dialog);

                                privateMethods.activate($dialog);

                                if (options.trapFocus) {
                                    privateMethods.autoFocus($dialog);
                                }

                                if (options.name) {
                                    $rootScope.$broadcast('ngDialog.opened', {dialog: $dialog, name: options.name});
                                } else {
                                    $rootScope.$broadcast('ngDialog.opened', $dialog);
                                }
                            });

                            if (!keydownIsBound) {
                                $elements.body.bind('keydown', privateMethods.onDocumentKeydown);
                                keydownIsBound = true;
                            }

                            if (options.closeByNavigation) {
                                var eventName = privateMethods.getRouterLocationEventName();
                                $rootScope.$on(eventName, function () {
                                    privateMethods.closeDialog($dialog);
                                });
                            }

                            if (options.preserveFocus) {
                                $dialog.data('$ngDialogPreviousFocus', document.activeElement);
                            }

                            closeByDocumentHandler = function (event) {
                                var isOverlay = options.closeByDocument ? $el(event.target).hasClass('ngdialog-overlay') : false;
                                var isCloseBtn = $el(event.target).hasClass('ngdialog-close');

                                if (isOverlay || isCloseBtn) {
                                    publicMethods.close($dialog.attr('id'), isCloseBtn ? '$closeButton' : '$document');
                                }
                            };

                            if (typeof $window.Hammer !== 'undefined') {
                                var hammerTime = scope.hammerTime = $window.Hammer($dialog[0]);
                                hammerTime.on('tap', closeByDocumentHandler);
                            } else {
                                $dialog.bind('click', closeByDocumentHandler);
                            }

                            dialogsCount += 1;

                            return publicMethods;
                        });

                        return {
                            id: dialogID,
                            closePromise: defer.promise,
                            close: function (value) {
                                privateMethods.closeDialog($dialog, value);
                            }
                        };

                        function loadTemplateUrl (tmpl, config) {
                            $rootScope.$broadcast('ngDialog.templateLoading', tmpl);
                            return $http.get(tmpl, (config || {})).then(function(res) {
                                $rootScope.$broadcast('ngDialog.templateLoaded', tmpl);
                                return res.data || '';
                            });
                        }

                        function loadTemplate (tmpl) {
                            if (!tmpl) {
                                return 'Empty template';
                            }

                            if (angular.isString(tmpl) && options.plain) {
                                return tmpl;
                            }

                            if (typeof options.cache === 'boolean' && !options.cache) {
                                return loadTemplateUrl(tmpl, {cache: false});
                            }

                            return loadTemplateUrl(tmpl, {cache: $templateCache});
                        }
                    },

                    /*
                     * @param {Object} options:
                     * - template {String} - id of ng-template, url for partial, plain string (if enabled)
                     * - plain {Boolean} - enable plain string templates, default false
                     * - name {String}
                     * - scope {Object}
                     * - controller {String}
                     * - controllerAs {String}
                     * - className {String} - dialog theme class
                     * - showClose {Boolean} - show close button, default true
                     * - closeByEscape {Boolean} - default false
                     * - closeByDocument {Boolean} - default false
                     * - preCloseCallback {String|Function} - user supplied function name/function called before closing dialog (if set); not called on confirm
                     *
                     * @return {Object} dialog
                     */
                    openConfirm: function (opts) {
                        var defer = $q.defer();

                        var options = {
                            closeByEscape: false,
                            closeByDocument: false
                        };
                        angular.extend(options, opts);

                        options.scope = angular.isObject(options.scope) ? options.scope.$new() : $rootScope.$new();
                        options.scope.confirm = function (value) {
                            defer.resolve(value);
                            var $dialog = $el(document.getElementById(openResult.id));
                            privateMethods.performCloseDialog($dialog, value);
                        };

                        var openResult = publicMethods.open(options);
                        openResult.closePromise.then(function (data) {
                            if (data) {
                                return defer.reject(data.value);
                            }
                            return defer.reject();
                        });

                        return defer.promise;
                    },

                    isOpen: function(id) {
                        var $dialog = $el(document.getElementById(id));
                        return $dialog.length > 0;
                    },

                    /*
                     * @param {String} id
                     * @return {Object} dialog
                     */
                    close: function (id, value) {
                        var $dialog = $el(document.getElementById(id));

                        if ($dialog.length) {
                            privateMethods.closeDialog($dialog, value);
                        } else {
                            if (id === '$escape') {
                                var topDialogId = openIdStack[openIdStack.length - 1];
                                $dialog = $el(document.getElementById(topDialogId));
                                if ($dialog.data('$ngDialogOptions').closeByEscape) {
                                    privateMethods.closeDialog($dialog, value);
                                }
                            } else {
                                publicMethods.closeAll(value);
                            }
                        }

                        return publicMethods;
                    },

                    closeAll: function (value) {
                        var $all = document.querySelectorAll('.ngdialog');

                        // Reverse order to ensure focus restoration works as expected
                        for (var i = $all.length - 1; i >= 0; i--) {
                            var dialog = $all[i];
                            privateMethods.closeDialog($el(dialog), value);
                        }
                    },

                    getOpenDialogs: function() {
                        return openIdStack;
                    },

                    getDefaults: function () {
                        return defaults;
                    }
                };

                return publicMethods;
            }];
    });

    m.directive('ngDialog', ['ngDialog', function (ngDialog) {
        return {
            restrict: 'A',
            scope: {
                ngDialogScope: '='
            },
            link: function (scope, elem, attrs) {
                elem.on('click', function (e) {
                    e.preventDefault();

                    var ngDialogScope = angular.isDefined(scope.ngDialogScope) ? scope.ngDialogScope : 'noScope';
                    angular.isDefined(attrs.ngDialogClosePrevious) && ngDialog.close(attrs.ngDialogClosePrevious);

                    var defaults = ngDialog.getDefaults();

                    ngDialog.open({
                        template: attrs.ngDialog,
                        className: attrs.ngDialogClass || defaults.className,
                        controller: attrs.ngDialogController,
                        controllerAs: attrs.ngDialogControllerAs,
                        bindToController: attrs.ngDialogBindToController,
                        scope: ngDialogScope,
                        data: attrs.ngDialogData,
                        showClose: attrs.ngDialogShowClose === 'false' ? false : (attrs.ngDialogShowClose === 'true' ? true : defaults.showClose),
                        closeByDocument: attrs.ngDialogCloseByDocument === 'false' ? false : (attrs.ngDialogCloseByDocument === 'true' ? true : defaults.closeByDocument),
                        closeByEscape: attrs.ngDialogCloseByEscape === 'false' ? false : (attrs.ngDialogCloseByEscape === 'true' ? true : defaults.closeByEscape),
                        overlay: attrs.ngDialogOverlay === 'false' ? false : (attrs.ngDialogOverlay === 'true' ? true : defaults.overlay),
                        preCloseCallback: attrs.ngDialogPreCloseCallback || defaults.preCloseCallback
                    });
                });
            }
        };
    }]);

    return m;
}));

/** 
* @version 2.1.4
* @license MIT
*/
!function(t,e){"use strict";t.module("smart-table",[]).run(["$templateCache",function(t){t.put("template/smart-table/pagination.html",'<nav ng-if="numPages && pages.length >= 2"><ul class="pagination"><li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a ng-click="selectPage(page)">{{page}}</a></li></ul></nav>')}]),t.module("smart-table").constant("stConfig",{pagination:{template:"template/smart-table/pagination.html",itemsByPage:10,displayedPages:5},search:{delay:400,inputEvent:"input"},select:{mode:"single",selectedClass:"st-selected"},sort:{ascentClass:"st-sort-ascent",descentClass:"st-sort-descent",skipNatural:!1,delay:300},pipe:{delay:100}}),t.module("smart-table").controller("stTableController",["$scope","$parse","$filter","$attrs",function(a,n,s,i){function r(t){return t?[].concat(t):[]}function l(){b=r(o(a)),S===!0&&v.pipe()}function c(t,e){if(-1!=e.indexOf(".")){var a=e.split("."),s=a.pop(),i=a.join("."),r=n(i)(t);delete r[s],0==Object.keys(r).length&&c(t,i)}else delete t[e]}var o,u,p,g=i.stTable,f=n(g),d=f.assign,m=s("orderBy"),h=s("filter"),b=r(f(a)),P={sort:{},search:{},pagination:{start:0,totalItemCount:0}},S=!0,v=this;i.stSafeSrc&&(o=n(i.stSafeSrc),a.$watch(function(){var t=o(a);return t?t.length:0},function(t){t!==b.length&&l()}),a.$watch(function(){return o(a)},function(t,e){t!==e&&(P.pagination.start=0,l())})),this.sortBy=function(e,a){return P.sort.predicate=e,P.sort.reverse=a===!0,t.isFunction(e)?P.sort.functionName=e.name:delete P.sort.functionName,P.pagination.start=0,this.pipe()},this.search=function(e,a){var s=P.search.predicateObject||{},i=a?a:"$";return e=t.isString(e)?e.trim():e,n(i).assign(s,e),e||c(s,i),P.search.predicateObject=s,P.pagination.start=0,this.pipe()},this.pipe=function(){var t,n=P.pagination;u=P.search.predicateObject?h(b,P.search.predicateObject):b,P.sort.predicate&&(u=m(u,P.sort.predicate,P.sort.reverse)),n.totalItemCount=u.length,n.number!==e&&(n.numberOfPages=u.length>0?Math.ceil(u.length/n.number):1,n.start=n.start>=u.length?(n.numberOfPages-1)*n.number:n.start,t=u.slice(n.start,n.start+parseInt(n.number))),d(a,t||u)},this.select=function(t,n){var s=r(f(a)),i=s.indexOf(t);-1!==i&&("single"===n?(t.isSelected=t.isSelected!==!0,p&&(p.isSelected=!1),p=t.isSelected===!0?t:e):s[i].isSelected=!s[i].isSelected)},this.slice=function(t,e){return P.pagination.start=t,P.pagination.number=e,this.pipe()},this.tableState=function(){return P},this.getFilteredCollection=function(){return u||b},this.setFilterFunction=function(t){h=s(t)},this.setSortFunction=function(t){m=s(t)},this.preventPipeOnWatch=function(){S=!1}}]).directive("stTable",function(){return{restrict:"A",controller:"stTableController",link:function(t,e,a,n){a.stSetFilter&&n.setFilterFunction(a.stSetFilter),a.stSetSort&&n.setSortFunction(a.stSetSort)}}}),t.module("smart-table").directive("stSearch",["stConfig","$timeout","$parse",function(t,e,a){return{require:"^stTable",link:function(n,s,i,r){var l=r,c=null,o=i.stDelay||t.search.delay,u=i.stInputEvent||t.search.inputEvent;i.$observe("stSearch",function(t,e){var a=s[0].value;t!==e&&a&&(r.tableState().search={},l.search(a,t))}),n.$watch(function(){return r.tableState().search},function(t){var e=i.stSearch||"$";t.predicateObject&&a(e)(t.predicateObject)!==s[0].value&&(s[0].value=a(e)(t.predicateObject)||"")},!0),s.bind(u,function(t){t=t.originalEvent||t,null!==c&&e.cancel(c),c=e(function(){l.search(t.target.value,i.stSearch||""),c=null},o)})}}}]),t.module("smart-table").directive("stSelectRow",["stConfig",function(t){return{restrict:"A",require:"^stTable",scope:{row:"=stSelectRow"},link:function(e,a,n,s){var i=n.stSelectMode||t.select.mode;a.bind("click",function(){e.$apply(function(){s.select(e.row,i)})}),e.$watch("row.isSelected",function(e){e===!0?a.addClass(t.select.selectedClass):a.removeClass(t.select.selectedClass)})}}}]),t.module("smart-table").directive("stSort",["stConfig","$parse","$timeout",function(a,n,s){return{restrict:"A",require:"^stTable",link:function(i,r,l,c){function o(){f++;var e;p=t.isFunction(g(i))?g(i):l.stSort,f%3===0&&!!b!=!0?(f=0,c.tableState().sort={},c.tableState().pagination.start=0,e=c.pipe.bind(c)):e=c.sortBy.bind(c,p,f%2===0),null!==P&&s.cancel(P),P=s(e,S)}var u,p=l.stSort,g=n(p),f=0,d=l.stClassAscent||a.sort.ascentClass,m=l.stClassDescent||a.sort.descentClass,h=[d,m],b=l.stSkipNatural!==e?l.stSkipNatural:a.sort.skipNatural,P=null,S=l.stDelay||a.sort.delay;l.stSortDefault&&(u=i.$eval(l.stSortDefault)!==e?i.$eval(l.stSortDefault):l.stSortDefault),r.bind("click",function(){p&&o()}),u&&(f="reverse"===u?1:0,o()),i.$watch(function(){return c.tableState().sort},function(t){t.predicate!==p?(f=0,r.removeClass(d).removeClass(m)):(f=t.reverse===!0?2:1,r.removeClass(h[f%2]).addClass(h[f-1]))},!0)}}}]),t.module("smart-table").directive("stPagination",["stConfig",function(t){return{restrict:"EA",require:"^stTable",scope:{stItemsByPage:"=?",stDisplayedPages:"=?",stPageChange:"&"},templateUrl:function(e,a){return a.stTemplate?a.stTemplate:t.pagination.template},link:function(e,a,n,s){function i(){var t,a,n=s.tableState().pagination,i=1,r=e.currentPage;for(e.totalItemCount=n.totalItemCount,e.currentPage=Math.floor(n.start/n.number)+1,i=Math.max(i,e.currentPage-Math.abs(Math.floor(e.stDisplayedPages/2))),t=i+e.stDisplayedPages,t>n.numberOfPages&&(t=n.numberOfPages+1,i=Math.max(1,t-e.stDisplayedPages)),e.pages=[],e.numPages=n.numberOfPages,a=i;t>a;a++)e.pages.push(a);r!==e.currentPage&&e.stPageChange({newPage:e.currentPage})}e.stItemsByPage=e.stItemsByPage?+e.stItemsByPage:t.pagination.itemsByPage,e.stDisplayedPages=e.stDisplayedPages?+e.stDisplayedPages:t.pagination.displayedPages,e.currentPage=1,e.pages=[],e.$watch(function(){return s.tableState().pagination},i,!0),e.$watch("stItemsByPage",function(t,a){t!==a&&e.selectPage(1)}),e.$watch("stDisplayedPages",i),e.selectPage=function(t){t>0&&t<=e.numPages&&s.slice((t-1)*e.stItemsByPage,e.stItemsByPage)},s.tableState().pagination.number||s.slice(0,e.stItemsByPage)}}}]),t.module("smart-table").directive("stPipe",["stConfig","$timeout",function(e,a){return{require:"stTable",scope:{stPipe:"="},link:{pre:function(n,s,i,r){var l=null;t.isFunction(n.stPipe)&&(r.preventPipeOnWatch(),r.pipe=function(){return null!==l&&a.cancel(l),l=a(function(){n.stPipe(r.tableState(),r)},e.pipe.delay)})},post:function(t,e,a,n){n.pipe()}}}}])}(angular);
//# sourceMappingURL=smart-table.min.js.map;
define("angular/smart-table", ["angular"], function(){});

/*! angular-flash - v1.0.0 - 2015-03-19
* https://github.com/sachinchoolur/angular-flash
* Copyright (c) 2015 Sachin; Licensed MIT */
!function(){"use strict";var a=angular.module("flash",[]);a.run(["$rootScope",function(a){a.flash={},a.flash.text="",a.flash.type="",a.flash.timeout=5e3,a.hasFlash=!1}]),a.directive("dynamic",["$compile",function(a){return{restrict:"A",replace:!0,link:function(b,c,d){b.$watch(d.dynamic,function(d){c.html(d),a(c.contents())(b)})}}}]),a.directive("closeFlash",["$compile","Flash",function(a,b){return{link:function(a,c){c.on("click",function(){b.dismiss()})}}}]),a.directive("flashMessage",["$compile","$rootScope",function(a,b){return{restrict:"A",template:'<div role="alert" ng-show="hasFlash" class="alert {{flash.addClass}} alert-{{flash.type}} alert-dismissible ng-hide alertIn alertOut "> <span dynamic="flash.text"></span> <button type="button" class="close" close-flash><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> </div>',link:function(a,c,d){b.flash.timeout=parseInt(d.flashMessage,10)}}}]),a.factory("Flash",["$rootScope","$timeout",function(a,b){var c,d={};return d.create=function(d,e,f){var g=this;b.cancel(c),a.flash.type=d,a.flash.text=e,a.flash.addClass=f,b(function(){a.hasFlash=!0},100),c=b(function(){g.dismiss()},a.flash.timeout)},d.pause=function(){b.cancel(c)},d.dismiss=function(){b.cancel(c),b(function(){a.hasFlash=!1})},d}])}();
define("angular/angular-flash-alert", ["angular"], function(){});

/*! 9.0.19 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="9.0.19",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function g(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&f?{loaded:a.loaded+d._start,total:d._file.size,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){f&&d._chunkSize&&!d._finished?(g({loaded:d._end,total:d._file.size,config:d,type:"progress"}),e.upload(d)):(d._finished&&delete d._finished,j.resolve(a))},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a instanceof XMLHttpRequest&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,g(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,g(h(a)))},!1))}}),f?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,i()},function(a){throw a}):i():i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},k}var e=this;this.isResumeSupported=function(){return window.Blob&&Blob instanceof Function&&(new Blob).slice};var f=this.isResumeSupported();this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.upload=function(a){function b(a){return null!=a&&(a instanceof Blob||a.flashId&&a.name&&a.size)}function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&f){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function g(d,e,f){if(void 0!==e)if(angular.isDate(e)&&(e=e.toISOString()),angular.isString(e))d.append(f,e);else if(b(e)){var h=c(e,d),i=f.split(",");i[1]&&(h.ngfName=i[1].replace(/^\s+|\s+$/g,""),f=i[0]),a._fileKey=a._fileKey||f,d.append(f,h,h.ngfName||h.name)}else if(angular.isObject(e)){if(e.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+f;e.$$ngfCircularDetection=!0;try{for(var j in e)if(e.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;e.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),g(d,e[j],f+k.replace(/[ik]/g,j))}}finally{delete e.$$ngfCircularDetection}}else d.append(f,e)}function h(){a._chunkSize=e.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):g(d,e,c)}return d})}return a._isDigested||(a._isDigested=!0,h()),d(a)},this.http=function(b){return b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=e.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1e3*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1e6*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1e9*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","UploadResize",function(a,b,c,d){function e(a,b,c,d){var e=g.attrGetter("ngfResize",b,c);if(!e||!g.isResizeSupported()||!a.length)return d();if(!e.width||!e.height)throw"width and height are mandatory for ngf-resize";for(var f=a.length,h=function(){f--,0===f&&d()},i=function(b){return function(c){a.splice(b,1,c),h()}},j=function(a){return function(b){h(),a.$error="resize",a.$errorParam=(b?(b.message?b.message:b)+": ":"")+(a&&a.name)}},k=0;k<a.length;k++){var l=a[k];0===l.type.indexOf("image")?g.resize(l,e.width,e.height,e.quality).then(i(k),j(l)):h()}}function f(a,b,c,d){var e=[],f=g.attrGetter("ngfKeep",c,d);if(f){var h=!1;if("distinct"===f||g.attrGetter("ngfKeepDistinct",c,d)===!0){var i=b.length;if(a)for(var j=0;j<a.length;j++){for(var k=0;i>k;k++)if(a[j].name===b[k].name){e.push(a[j]);break}k===i&&(b.push(a[j]),h=!0)}a=b}else a=b.concat(a||[])}return{files:a,dupFiles:e,keep:f}}var g=d;return g.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=g.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},g.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},g.shouldUpdateOn=function(a,b,c){var d=g.attrGetter("ngModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},g.updateModel=function(c,d,h,i,j,k,l){function m(e,f,j,l,m){var n=e&&e.length?e[0]:null;c&&(g.applyModelValidation(c,e),c.$ngfModelChange=!0,c.$setViewValue(m?n:e)),i&&a(i)(h,{$files:e,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:f,$event:k});var o=g.attrGetter("ngfModelInvalid",d);o&&b(function(){a(o).assign(h,f)}),b(function(){})}var n=j,o=(c&&c.$modelValue||d.$$ngfPrevFiles||[]).slice(0),p=f(j,o,d,h);j=p.files;var q=p.dupFiles,r=!g.attrGetter("ngfMultiple",d,h)&&!g.attrGetter("multiple",d)&&!p.keep;if(d.$$ngfPrevFiles=j,!p.keep||n&&n.length){g.validate(n,c,d,h,function(){if(l)m(j,[],n,q,r);else{var a=g.attrGetter("ngModelOptions",d,h);if(!a||!a.allowInvalid){var c=[],f=[];angular.forEach(j,function(a){a.$error?f.push(a):c.push(a)}),j=c}e(j,d,h,function(){b(function(){m(j,f,n,q,r)},a&&a.debounce?a.debounce.change||a.debounce:0)})}});for(var s=o.length;s--;){var t=o[s];window.URL&&t.blobUrl&&(URL.revokeObjectURL(t.blobUrl),delete t.blobUrl)}}},g}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){for(var e=b.__files_||b.target&&b.target.files,f=[],g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a){if(b!==a)for(var c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];"type"!==d.name&&"class"!==d.name&&"id"!==d.name&&"style"!==d.name&&((null==d.value||""===d.value)&&("required"===d.name&&(d.value="required"),"multiple"===d.name&&(d.value="multiple")),a.attr(d.name,d.value))}}function o(){if(k())return b;var a=angular.element('<input type="file">');return n(a),a.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),g.push({el:b,ref:a}),document.body.appendChild(a[0]),a}function p(c){if(b.attr("disabled")||t("ngfSelectDisabled",a))return!1;var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(w[0])||(g.push({el:b,ref:w}),document.body.appendChild(w[0]),w.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){w[0].click()},0):w[0].click(),!1}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if("touchstart"===a.type)return v=b?b[0].clientY:0,!0;if(a.stopPropagation(),a.preventDefault(),"touchend"===a.type){var c=b?b[0].clientY:0;if(Math.abs(c-v)>20)return!1}}function r(b){j.shouldUpdateOn("click",c,a)&&w.val()&&(w.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(w&&!w.attr("__ngf_ie10_Fix_")){if(!w[0].parentNode)return void(w=null);a.preventDefault(),a.stopPropagation(),w.unbind("click");var b=w.clone();return w.replaceWith(b),w=b,w.attr("__ngf_ie10_Fix_","true"),w.bind("change",m),w.bind("click",s),w[0].click(),!1}w.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];u.push(a.$watch(t("ngfMultiple"),function(){w.attr("multiple",t("ngfMultiple",a))})),u.push(a.$watch(t("ngfCapture"),function(){w.attr("capture",t("ngfCapture",a))})),c.$observe("accept",function(){w.attr("accept",t("accept"))}),u.push(function(){c.$$observers&&delete c.$$observers.accept});var v=0,w=b;k()||(w=o()),w.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&w.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&w.val()&&w.val(null),a}),a.$on("$destroy",function(){k()||w.remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,w,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ngf-hide"):e.addClass("ngf-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var d=h;if("ngfThumbnail"===g&&(d||(d={width:e[0].clientWidth,height:e[0].clientHeight}),0===d.width&&window.getComputedStyle)){var f=getComputedStyle(e[0]);d={width:parseInt(f.width.slice(0,-2)),height:parseInt(f.height.slice(0,-2))}}return angular.isString(c)?(e.removeClass("ngf-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ngf-hide"):d&&b.isResizeSupported()?b.resize(c,d.width,d.height,d.quality).then(function(a){j(a)},function(a){throw a}):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,d){if(d&&null!=a.$ngfDataUrl||!d&&null!=a.$ngfBlobUrl){var e=c.defer();return b(function(){e.resolve(d?a.$ngfDataUrl:a.$ngfBlobUrl,a)}),e.promise}var f=d?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!d){var e;try{e=c.createObjectURL(a)}catch(f){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){a.$ngfBlobUrl=e,e&&g.resolve(e,a)})}else{var h=new FileReader;h.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a)})},h.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},h.readAsDataURL(a)}}else b(function(){a[d?"dataUrl":"blobUrl"]="",g.reject()})}),f=d?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[d?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]);var c=angular.element("<style>.ngf-hide{display:none !important}</style>");document.getElementsByTagName("head")[0].appendChild(c[0]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){a.$ngfModelChange?a.$ngfModelChange=!1:f.validate(d,a,b,c,function(){f.applyModelValidation(a,d)})})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.validate=function(a,b,c,d,e){function g(c,d,e){if(a){for(var f="ngf"+c[0].toUpperCase()+c.substr(1),g=a.length,h=null;g--;){var j=a[g],k=i(f,{$file:j});null==k&&(k=d(i("ngfValidate")||{}),h=null==h?!0:h),null!=k&&(e(j,k)||(j.$error=c,j.$errorParam=k,a.splice(g,1),h=!1))}null!==h&&b.$ngfValidations.push({name:c,valid:h})}}function h(c,d,f,g,h){if(a){var k=0,l=!1,m="ngf"+c[0].toUpperCase()+c.substr(1);a=void 0===a.length?[a]:a,angular.forEach(a,function(a){if(f&&(null==a.type||0!==a.type.search(f)))return!0;var n=i(m,{$file:a})||d(i("ngfValidate",{$file:a})||{});n&&(j++,k++,g(a,n).then(function(b){h(b,n)||(a.$error=c,a.$errorParam=n,l=!0)},function(){i("ngfValidateForce",{$file:a})&&(a.$error=c,a.$errorParam=n,l=!0)})["finally"](function(){j--,k--,k||b.$ngfValidations.push({name:c,valid:!l}),j||e.call(b,b.$ngfValidations)}))})}}b=b||{},b.$ngfValidations=b.$ngfValidations||[],angular.forEach(b.$ngfValidations,function(a){a.valid=!0});var i=function(a,b){return f.attrGetter(a,c,d,b)};if(null==a||0===a.length)return void e.call(b);if(a=void 0===a.length?[a]:a.slice(0),g("pattern",function(a){return a.pattern},f.validatePattern),g("minSize",function(a){return a.size&&a.size.min},function(a,b){return a.size>=f.translateScalars(b)}),g("maxSize",function(a){return a.size&&a.size.max},function(a,b){return a.size<=f.translateScalars(b)}),g("validateFn",function(){return null},function(a,b){return b===!0||null===b||""===b}),!a.length)return void e.call(b,b.$ngfValidations);var j=0;h("maxHeight",function(a){return a.height&&a.height.max},/image/,this.imageDimensions,function(a,b){return a.height<=b}),h("minHeight",function(a){return a.height&&a.height.min},/image/,this.imageDimensions,function(a,b){return a.height>=b}),h("maxWidth",function(a){return a.width&&a.width.max},/image/,this.imageDimensions,function(a,b){return a.width<=b}),h("minWidth",function(a){return a.width&&a.width.min},/image/,this.imageDimensions,function(a,b){return a.width>=b}),h("ratio",function(a){return a.ratio},/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++){var f=c[e],g=f.search(/x/i);f=g>-1?parseFloat(f.substring(0,g))/parseFloat(f.substring(g+1)):parseFloat(f),Math.abs(a.width/a.height-f)<1e-4&&(d=!0)}return d}),h("maxDuration",function(a){return a.duration&&a.duration.max},/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)}),h("minDuration",function(a){return a.duration&&a.duration.min},/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)}),h("validateAsyncFn",function(){return null},null,function(a,b){return b},function(a){return a===!0||null===a||""===a}),j||e.call(b,b.$ngfValidations)},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].clientWidth,c=h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q","$timeout",function(a,b,c){var d=a,e=function(a,b,c,d){var e=Math.min(c/a,d/b);return{width:a*e,height:b*e}},f=function(a,c,d,f,g){var h=b.defer(),i=document.createElement("canvas"),j=document.createElement("img");return j.onload=function(){try{c||(c=j.width,d=j.height);var a=e(j.width,j.height,c,d);i.width=a.width,i.height=a.height;var b=i.getContext("2d");b.drawImage(j,0,0,a.width,a.height),h.resolve(i.toDataURL(g||"image/WebP",f||1))}catch(k){h.reject(k)}},j.onerror=function(){h.reject()},j.src=a,h.promise};return d.dataUrltoBlob=function(a){for(var b=a.split(","),c=b[0].match(/:(.*?);/)[1],d=atob(b[1]),e=d.length,f=new Uint8Array(e);e--;)f[e]=d.charCodeAt(e);return new Blob([f],{type:c})},d.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")},d.isResizeSupported()&&Object.defineProperty(Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),d.resize=function(a,e,g,h){var i=b.defer();return 0!==a.type.indexOf("image")?(c(function(){i.resolve("Only images are allowed for resizing!")}),i.promise):(d.dataUrl(a,!0).then(function(b){f(b,e,g,h,a.type).then(function(b){var c=d.dataUrltoBlob(b);c.name=a.name,i.resolve(c)},function(){i.reject()})},function(){i.reject()}),i.promise)},d}]),function(){function a(a,c,d,e,f,g,h,i,j){function k(){return c.attr("disabled")||o("ngfDropDisabled",a)}function l(a,b,c,d){var e=o("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(s=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||o("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function m(a,b,c,d){function e(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;a.push({name:b.name,type:"directory",path:d});var f=b.createReader(),g=[];i++;var h=function(){f.readEntries(function(d){try{if(d.length)g=g.concat(Array.prototype.slice.call(d||[],0)),h();else{for(var f=0;f<g.length;f++)e(a,g[f],(c?c:"")+b.name+"/");i--}}catch(j){i--,console.error(j)}},function(){i--})};h()}else i++,b.file(function(b){try{i--,b.path=(c?c:"")+b.name,a.push(b)}catch(d){i--,console.error(d)}},function(){i--})}var f=[],i=0,j=a.dataTransfer.items;if(j&&j.length>0&&"file"!==h.protocol())for(var k=0;k<j.length;k++){if(j[k].webkitGetAsEntry&&j[k].webkitGetAsEntry()&&j[k].webkitGetAsEntry().isDirectory){var l=j[k].webkitGetAsEntry();if(l.isDirectory&&!c)continue;null!=l&&e(f,l)}else{var m=j[k].getAsFile();null!=m&&f.push(m)}if(!d&&f.length>0)break}else{var n=a.dataTransfer.files;if(null!=n)for(var o=0;o<n.length&&(f.push(n.item(o)),d||!(f.length>0));o++);}var p=0;!function q(a){g(function(){if(i)10*p++<2e4&&q(10);else{if(!d&&f.length>1){for(k=0;"directory"===f[k].type;)k++;f=[f[k]]}b(f)}},a||0)}()}var n=b(),o=function(a,b,c){return i.attrGetter(a,d,b,c)};if(o("dropAvailable")&&g(function(){a[o("dropAvailable")]?a[o("dropAvailable")].value=n:a[o("dropAvailable")]=n}),!n)return void(o("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==o("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var p,q=null,r=f(o("ngfStopPropagation")),s=1;c[0].addEventListener("dragover",function(b){if(!k()){if(b.preventDefault(),r(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(q),p||(p="C",l(a,d,b,function(d){p=d,c.addClass(p),o("ngfDrag",a,{$isDragging:!0,$class:p,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){k()||(b.preventDefault(),r(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){k()||(b.preventDefault(),r(a)&&b.stopPropagation(),q=g(function(){p&&c.removeClass(p),p=null,o("ngfDrag",a,{$isDragging:!1,$event:b})},s||100))},!1),c[0].addEventListener("drop",function(b){if(!k()&&i.shouldUpdateOn("drop",d,a)){b.preventDefault(),r(a)&&b.stopPropagation(),p&&c.removeClass(p),p=null;var f;try{f=b.dataTransfer&&b.dataTransfer.getData&&b.dataTransfer.getData("text/html")}catch(g){}if(f){var h;f.replace(/<img .*src *=\"([^\"]*)\"/,function(a,b){h=b}),h&&j({url:h,method:"get",responseType:"arraybuffer"}).then(function(c){var f=new Uint8Array(c.data),g=c.headers("content-type")||"image/jpg",h=new Blob([f],{type:g});i.updateModel(e,d,a,o("ngfChange")||o("ngfDrop"),[h],b)})}else m(b,function(c){i.updateModel(e,d,a,o("ngfChange")||o("ngfDrop"),c,b)},o("ngfAllowDir",a)!==!1,o("multiple")||o("ngfMultiple",a))}},!1),c[0].addEventListener("paste",function(b){if(!k()&&i.shouldUpdateOn("paste",d,a)){var c=[],f=b.clipboardData||b.originalEvent.clipboardData;if(f&&f.items){for(var g=0;g<f.items.length;g++)-1!==f.items[g].type.indexOf("image")&&c.push(f.items[g].getAsFile());i.updateModel(e,d,a,o("ngfChange")||o("ngfDrop"),c,b)}}},!1)}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location","Upload","$http",function(b,c,d,e,f){return{restrict:"AEC",require:"?ngModel",link:function(g,h,i,j){a(g,h,i,j,b,c,d,e,f)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}();
define("angular/ng-file-upload", ["angular"], function(){});

/**
 * Checklist-model
 * AngularJS directive for list of checkboxes
 * https://github.com/vitalets/checklist-model
 * License: MIT http://opensource.org/licenses/MIT
 */

angular.module('checklist-model', [])
.directive('checklistModel', ['$parse', '$compile', function($parse, $compile) {
  // contains
  function contains(arr, item, comparator) {
    if (angular.isArray(arr)) {
      for (var i = arr.length; i--;) {
        if (comparator(arr[i], item)) {
          return true;
        }
      }
    }
    return false;
  }

  // add
  function add(arr, item, comparator) {
    arr = angular.isArray(arr) ? arr : [];
      if(!contains(arr, item, comparator)) {
          arr.push(item);
      }
    return arr;
  }  

  // remove
  function remove(arr, item, comparator) {
    if (angular.isArray(arr)) {
      for (var i = arr.length; i--;) {
        if (comparator(arr[i], item)) {
          arr.splice(i, 1);
          break;
        }
      }
    }
    return arr;
  }

  // http://stackoverflow.com/a/19228302/1458162
  function postLinkFn(scope, elem, attrs) {
     // exclude recursion, but still keep the model
    var checklistModel = attrs.checklistModel;
    attrs.$set("checklistModel", null);
    // compile with `ng-model` pointing to `checked`
    $compile(elem)(scope);
    attrs.$set("checklistModel", checklistModel);

    // getter / setter for original model
    var getter = $parse(checklistModel);
    var setter = getter.assign;
    var checklistChange = $parse(attrs.checklistChange);

    // value added to list
    var value = attrs.checklistValue ? $parse(attrs.checklistValue)(scope.$parent) : attrs.value;


    var comparator = angular.equals;

    if (attrs.hasOwnProperty('checklistComparator')){
      if (attrs.checklistComparator[0] == '.') {
        var comparatorExpression = attrs.checklistComparator.substring(1);
        comparator = function (a, b) {
          return a[comparatorExpression] === b[comparatorExpression];
        }
        
      } else {
        comparator = $parse(attrs.checklistComparator)(scope.$parent);
      }
    }

    // watch UI checked change
    scope.$watch(attrs.ngModel, function(newValue, oldValue) {
      if (newValue === oldValue) { 
        return;
      } 
      var current = getter(scope.$parent);
      if (angular.isFunction(setter)) {
        if (newValue === true) {
          setter(scope.$parent, add(current, value, comparator));
        } else {
          setter(scope.$parent, remove(current, value, comparator));
        }
      }

      if (checklistChange) {
        checklistChange(scope);
      }
    });
    
    // declare one function to be used for both $watch functions
    function setChecked(newArr, oldArr) {
        scope[attrs.ngModel] = contains(newArr, value, comparator);
    }

    // watch original model change
    // use the faster $watchCollection method if it's available
    if (angular.isFunction(scope.$parent.$watchCollection)) {
        scope.$parent.$watchCollection(checklistModel, setChecked);
    } else {
        scope.$parent.$watch(checklistModel, setChecked, true);
    }
  }

  return {
    restrict: 'A',
    priority: 1000,
    terminal: true,
    scope: true,
    compile: function(tElement, tAttrs) {
      if ((tElement[0].tagName !== 'INPUT' || tAttrs.type !== 'checkbox')
          && (tElement[0].tagName !== 'MD-CHECKBOX')
          && (!tAttrs.btnCheckbox)) {
        throw 'checklist-model should be applied to `input[type="checkbox"]` or `md-checkbox`.';
      }

      if (!tAttrs.checklistValue && !tAttrs.value) {
        throw 'You should provide `value` or `checklist-value`.';
      }

      // by default ngModel is 'checked', so we set it if not specified
      if (!tAttrs.ngModel) {
        // local scope var storing individual checkbox model
        tAttrs.$set("ngModel", "checked");
      }

      return postLinkFn;
    }
  };
}]);

define("angular/checklist-model", ["angular"], function(){});

/** @license
 * RequireJS plugin for async dependency load like JSONP and Google Maps
 * Author: Miller Medeiros
 * Version: 0.1.2 (2014/02/24)
 * Released under the MIT license
 */
define('async',[],function(){

    var DEFAULT_PARAM_NAME = 'callback',
        _uid = 0;

    function injectScript(src){
        var s, t;
        s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = src;
        t = document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s,t);
    }

    function formatUrl(name, id){
        var paramRegex = /!(.+)/,
            url = name.replace(paramRegex, ''),
            param = (paramRegex.test(name))? name.replace(/.+!/, '') : DEFAULT_PARAM_NAME;
        url += (url.indexOf('?') < 0)? '?' : '&';
        return url + param +'='+ id;
    }

    function uid() {
        _uid += 1;
        return '__async_req_'+ _uid +'__';
    }

    return{
        load : function(name, req, onLoad, config){
            if(config.isBuild){
                onLoad(null); //avoid errors on the optimizer
            }else{
                var id = uid();
                //create a global variable that stores onLoad so callback
                //function can define new module after async load
                window[id] = onLoad;
                injectScript(formatUrl(req.toUrl(name), id));
            }
        }
    };
});


/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define('lodash',[],function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/**
 *  angular-simple-logger
 *
 * @version: 0.0.4
 * @author: Nicholas McCready
 * @date: Tue Sep 22 2015 17:09:12 GMT-0400 (EDT)
 * @license: MIT
 */var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular.module('nemLogging', []).provider('nemSimpleLogger', function() {
  var LEVELS, Logger, _fns, maybeExecLevel;
  _fns = ['log', 'info', 'debug', 'warn', 'error'];
  LEVELS = {
    log: 1,
    info: 2,
    debug: 3,
    warn: 4,
    error: 5
  };
  maybeExecLevel = function(level, current, fn) {
    if (level >= current) {
      return fn();
    }
  };
  Logger = (function() {
    function Logger($log1) {
      var logFns;
      this.$log = $log1;
      this.spawn = bind(this.spawn, this);
      if (!this.$log) {
        throw 'internalLogger undefined';
      }
      this.doLog = true;
      logFns = {};
      _fns.forEach((function(_this) {
        return function(level) {
          return logFns[level] = function(msg) {
            if (_this.doLog) {
              return maybeExecLevel(LEVELS[level], _this.currentLevel, function() {
                return _this.$log[level](msg);
              });
            }
          };
        };
      })(this));
      this.LEVELS = LEVELS;
      this.currentLevel = LEVELS.error;
      _fns.forEach((function(_this) {
        return function(fnName) {
          return _this[fnName] = logFns[fnName];
        };
      })(this));
    }

    Logger.prototype.spawn = function(newInternalLogger) {
      return new Logger(newInternalLogger || this.$log);
    };

    return Logger;

  })();
  this.decorator = [
    '$log', function($delegate) {
      var log;
      log = new Logger($delegate);
      log.currentLevel = LEVELS.log;
      return log;
    }
  ];
  this.$get = [
    '$log', function($log) {
      return new Logger($log);
    }
  ];
  return this;
});

define("angular/simpleLogger", ["angular"], function(){});

/*! angular-google-maps 2.2.1 2015-09-11
 *  AngularJS directives for Google Maps
 *  git: https://github.com/angular-ui/angular-google-maps.git
 */
!function(a,b,c){"use strict";(function(){b.module("uiGmapgoogle-maps.providers",["nemLogging"]),b.module("uiGmapgoogle-maps.wrapped",[]),b.module("uiGmapgoogle-maps.extensions",["uiGmapgoogle-maps.wrapped","uiGmapgoogle-maps.providers"]),b.module("uiGmapgoogle-maps.directives.api.utils",["uiGmapgoogle-maps.extensions"]),b.module("uiGmapgoogle-maps.directives.api.managers",[]),b.module("uiGmapgoogle-maps.directives.api.options",["uiGmapgoogle-maps.directives.api.utils"]),b.module("uiGmapgoogle-maps.directives.api.options.builders",[]),b.module("uiGmapgoogle-maps.directives.api.models.child",["uiGmapgoogle-maps.directives.api.utils","uiGmapgoogle-maps.directives.api.options","uiGmapgoogle-maps.directives.api.options.builders"]),b.module("uiGmapgoogle-maps.directives.api.models.parent",["uiGmapgoogle-maps.directives.api.managers","uiGmapgoogle-maps.directives.api.models.child","uiGmapgoogle-maps.providers"]),b.module("uiGmapgoogle-maps.directives.api",["uiGmapgoogle-maps.directives.api.models.parent"]),b.module("uiGmapgoogle-maps",["uiGmapgoogle-maps.directives.api","uiGmapgoogle-maps.providers"])}).call(this),function(){b.module("uiGmapgoogle-maps.providers").factory("uiGmapMapScriptLoader",["$q","uiGmapuuid",function(c,d){var e,f,g,h;return h=void 0,e=function(a){return a.china?"http://maps.google.cn/maps/api/js?":"auto"===a.transport?"//maps.googleapis.com/maps/api/js?":a.transport+"://maps.googleapis.com/maps/api/js?"},f=function(a){var b,c,f;return b=["transport","isGoogleMapsForWork","china"],a.isGoogleMapsForWork&&b.push("key"),c=_.map(_.omit(a,b),function(a,b){return b+"="+a}),h&&document.getElementById(h).remove(),c=c.join("&"),f=document.createElement("script"),f.id=h="ui_gmap_map_load_"+d.generate(),f.type="text/javascript",f.src=e(a)+c,document.body.appendChild(f)},g=function(){return b.isDefined(a.google)&&b.isDefined(a.google.maps)},{load:function(b){var d,e;return d=c.defer(),g()?(d.resolve(a.google.maps),d.promise):(e=b.callback="onGoogleMapsReady"+Math.round(1e3*Math.random()),a[e]=function(){a[e]=null,d.resolve(a.google.maps)},a.navigator.connection&&a.Connection&&a.navigator.connection.type===a.Connection.NONE?document.addEventListener("online",function(){return g()?void 0:f(b)}):f(b),d.promise)}}}]).provider("uiGmapGoogleMapApi",function(){return this.options={transport:"https",isGoogleMapsForWork:!1,china:!1,v:"3",libraries:"",language:"en",sensor:"false"},this.configure=function(a){b.extend(this.options,a)},this.$get=["uiGmapMapScriptLoader",function(a){return function(b){return b.load(a.options)}}(this)],this})}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.extensions").service("uiGmapExtendGWin",function(){return{init:_.once(function(){var b;if(google||("undefined"!=typeof google&&null!==google?google.maps:void 0)||null!=google.maps.InfoWindow)return google.maps.InfoWindow.prototype._open=google.maps.InfoWindow.prototype.open,google.maps.InfoWindow.prototype._close=google.maps.InfoWindow.prototype.close,google.maps.InfoWindow.prototype._isOpen=!1,google.maps.InfoWindow.prototype.open=function(a,b,c){null==c&&(this._isOpen=!0,this._open(a,b,!0))},google.maps.InfoWindow.prototype.close=function(a){null==a&&(this._isOpen=!1,this._close(!0))},google.maps.InfoWindow.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},a.InfoBox&&(a.InfoBox.prototype._open=a.InfoBox.prototype.open,a.InfoBox.prototype._close=a.InfoBox.prototype.close,a.InfoBox.prototype._isOpen=!1,a.InfoBox.prototype.open=function(a,b){this._isOpen=!0,this._open(a,b)},a.InfoBox.prototype.close=function(){this._isOpen=!1,this._close()},a.InfoBox.prototype.isOpen=function(a){return null==a&&(a=void 0),null==a?this._isOpen:this._isOpen=a},b=function(b){function e(b){this.getOrigCloseBoxImg_=c(this.getOrigCloseBoxImg_,this),this.getCloseBoxDiv_=c(this.getCloseBoxDiv_,this);var d;d=new a.InfoBox(b),_.extend(this,d),null!=b.closeBoxDiv&&(this.closeBoxDiv_=b.closeBoxDiv)}return d(e,b),e.prototype.getCloseBoxDiv_=function(){return this.closeBoxDiv_},e.prototype.getCloseBoxImg_=function(){var a,b;return a=this.getCloseBoxDiv_(),b=this.getOrigCloseBoxImg_(),a||b},e.prototype.getOrigCloseBoxImg_=function(){var a;return a="",""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},e}(a.InfoBox),a.uiGmapInfoBox=b),a.MarkerLabel_?a.MarkerLabel_.prototype.setContent=function(){var a;a=this.marker_.get("labelContent"),a&&!_.isEqual(this.oldContent,a)&&("undefined"==typeof(null!=a?a.nodeType:void 0)?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML,this.oldContent=a):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.labelDiv_.innerHTML="",this.eventDiv_.appendChild(a),this.oldContent=a))}:void 0})}})}.call(this),function(){b.module("uiGmapgoogle-maps.extensions").service("uiGmapLodash",function(){var a,b,c,d,e,f,g,h;return null==_.get&&(d=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,e=/^\w*$/,f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,g=function(a){return _.isObject(a)?a:Object(a)},b=function(a){return null===a?"":a+""},h=function(a){var c;return _.isArray(a)?a:(c=[],b(a).replace(f,function(a,b,d,e){c.push(d?e.replace(reEscapeChar,"$1"):b||a)}),c)},a=function(a,b,c){var d,e;if(null!==a){void 0!==c&&c in g(a)&&(b=[c]),d=0,e=b.length;for(;!_.isUndefined(a)&&e>d;)a=a[b[d++]];return d&&d===e?a:void 0}},c=function(b,c,d){var e;return e=null===b?void 0:a(b,h(c),c+""),void 0===e?d:e},_.get=c),this.intersectionObjects=function(a,b,c){var d;return null==c&&(c=void 0),d=_.map(a,function(a){return function(a){return _.find(b,function(b){return null!=c?c(a,b):_.isEqual(a,b)})}}(this)),_.filter(d,function(a){return null!=a})},this.containsObject=_.includeObject=function(a,b,c){return null==c&&(c=void 0),null===a?!1:_.any(a,function(a){return function(a){return null!=c?c(a,b):_.isEqual(a,b)}}(this))},this.differenceObjects=function(a,b,c){return null==c&&(c=void 0),_.filter(a,function(a){return function(d){return!a.containsObject(b,d,c)}}(this))},this.withoutObjects=this.differenceObjects,this.indexOfObject=function(a,b,c,d){var e,f;if(null==a)return-1;if(e=0,f=a.length,d){if("number"!=typeof d)return e=_.sortedIndex(a,b),a[e]===b?e:-1;e=0>d?Math.max(0,f+d):d}for(;f>e;){if(null!=c){if(c(a[e],b))return e}else if(_.isEqual(a[e],b))return e;e++}return-1},this.isNullOrUndefined=function(a){return _.isNull(a||_.isUndefined(a))},this})}.call(this),function(){b.module("uiGmapgoogle-maps.extensions").factory("uiGmapString",function(){return function(a){return this.contains=function(b,c){return-1!==a.indexOf(b,c)},this}})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmap_sync",[function(){return{fakePromise:function(){var a;return a=void 0,{then:function(b){return a=b},resolve:function(){return a.apply(void 0,arguments)}}}}}]).service("uiGmap_async",["$timeout","uiGmapPromise","uiGmapLogger","$q","uiGmapDataStructures","uiGmapGmapUtil",function(a,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;return y=c.promiseTypes,r=c.isInProgress,x=c.promiseStatus,h=c.ExposedPromise,j=c.SniffedPromise,s=function(a,b){var c;return c=a.promise(),c.promiseType=a.promiseType,c.$$state&&d.debug("promiseType: "+c.promiseType+", state: "+x(c.$$state.status)),c.cancelCb=b,c},o=function(a,b){return a.promiseType===y.create&&b.promiseType!==y["delete"]&&b.promiseType!==y.init?(d.debug("lastPromise.promiseType "+b.promiseType+", newPromiseType: "+a.promiseType+", SKIPPED MUST COME AFTER DELETE ONLY"),!0):!1},w=function(a,b,c){var e;return b.promiseType===y["delete"]&&c.promiseType!==y["delete"]&&null!=c.cancelCb&&_.isFunction(c.cancelCb)&&r(c)&&(d.debug("promiseType: "+b.promiseType+", CANCELING LAST PROMISE type: "+c.promiseType),c.cancelCb("cancel safe"),e=a.peek(),null!=e&&r(e))?e.hasOwnProperty("cancelCb")&&_.isFunction(e.cancelCb)?(d.debug("promiseType: "+e.promiseType+", CANCELING FIRST PROMISE type: "+e.promiseType),e.cancelCb("cancel safe")):d.warn("first promise was not cancelable"):void 0},i=function(a,b,c){var d,e;if(a.existingPieces){if(d=_.last(a.existingPieces._content),o(b,d))return;return w(a.existingPieces,b,d),e=h(d["finally"](function(){return s(b,c)})),e.cancelCb=c,e.promiseType=b.promiseType,a.existingPieces.enqueue(e),d["finally"](function(){return a.existingPieces.dequeue()})}return a.existingPieces=new f.Queue,a.existingPieces.enqueue(s(b,c))},u=function(a,b,c,e,f){var g;return null==c&&(c=""),g=function(a){return d.debug(a+": "+a),null!=e&&_.isFunction(e)?e(a):void 0},i(a,j(f,b),g)},m=80,q={value:null},z=function(a,b,c){var d;try{return a.apply(b,c)}catch(e){return d=e,q.value=d,q}},t=function(a,b,c,e){var f,g;return g=z(a,b,e),g===q&&(f="error within chunking iterator: "+q.value,d.error(f),c.reject(f)),"cancel safe"===g?!1:!0},l=function(a,b,c){var d,e;return d=a===b,e=b[c],d?e:a[e]},k=function(a,c,d,e){var f;return b.isArray(a)?f=a:(f=c?c:Object.keys(_.omit(a,["length","forEach","map"])),c=f),null==e&&(e=d),b.isArray(f)&&(void 0===f||(null!=f?f.length:void 0)<=0)&&e!==d?d():e(f,c)},n=function(c,d,e,f,g,h,i,j){return k(c,j,function(j,k){var m,o,p,q;for(m=d&&d<j.length?d:j.length,o=i,p=!0;p&&m--&&o<(j?j.length:o+1);)q=l(c,j,o),p=b.isFunction(q)?!0:t(f,void 0,h,[q,o]),++o;if(j){if(!(p&&o<j.length))return h.resolve();if(i=o,d)return null!=g&&_.isFunction(g)&&t(g,void 0,h,[]),a(function(){return n(c,d,e,f,g,h,i,k)},e,!1)}})},p=function(a,b,e,f,g,h,i){var j,l,o;return null==e&&(e=m),null==g&&(g=0),null==h&&(h=1),o=void 0,l=c.defer(),o=l.promise,h?k(a,i,function(){return l.resolve(),o},function(c,d){return n(a,e,h,b,f,l,g,d),o}):(j="pause (delay) must be set from _async!",d.error(j),l.reject(j),o)},v=function(a,b,d,e,f,g,h){var i;return i=[],k(a,h,function(){return c.resolve(i)},function(c,h){return p(a,function(a){return i.push(b(a))},d,e,f,g,h).then(function(){return i})})},{each:p,map:v,managePromiseQueue:u,promiseLock:u,defaultChunkSize:m,chunkSizeFrom:function(a,b){return null==b&&(b=void 0),_.isNumber(a)&&(b=a),(g.isFalse(a)||a===!1)&&(b=!1),b}}}])}.call(this),function(){var a=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapBaseObject",function(){var b,c;return c=["extended","included"],b=function(){function b(){}return b.extend=function(b){var d,e,f;for(d in b)f=b[d],a.call(c,d)<0&&(this[d]=f);return null!=(e=b.extended)&&e.apply(this),this},b.include=function(b){var d,e,f;for(d in b)f=b[d],a.call(c,d)<0&&(this.prototype[d]=f);return null!=(e=b.included)&&e.apply(this),this},b}()})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChildEvents",function(){return{onChildCreation:function(a){}}})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapCtrlHandle",["$q",function(a){var b;return b={handle:function(c,d){return c.$on("$destroy",function(){return b.handle(c)}),c.deferred=a.defer(),{getScope:function(){return c}}},mapPromise:function(a,b){var c;return c=b.getScope(),c.deferred.promise.then(function(b){return a.map=b}),c.deferred.promise}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapEventsHelper",["uiGmapLogger",function(a){var c,d;return d=function(a){return b.isDefined(a.events)&&null!=a.events&&b.isObject(a.events)},c=function(a,b){return d(a)?a:d(b)?b:void 0},{setEvents:function(a,d,e,f){var g;return g=c(d,e),null!=g?_.compact(_.map(g.events,function(c,h){var i;return f&&(i=_(f).contains(h)),g.events.hasOwnProperty(h)&&b.isFunction(g.events[h])&&!i?google.maps.event.addListener(a,h,function(){return d.$evalAsync||(d.$evalAsync=function(){}),d.$evalAsync(c.apply(d,[a,h,e,arguments]))}):void 0})):void 0},removeEvents:function(a){var b,c;if(a)for(b in a)c=a[b],c&&google.maps.event.removeListener(c)}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapFitHelper",["uiGmapLogger",function(a){return{fit:function(a,b){var c,d,e,f,g;if(b&&(null!=a?a.length:void 0)){c=new google.maps.LatLngBounds,d=!1;for(e in a)f=a[e],f&&(d||(d=!0),g=_.isFunction(f.getPosition)?f.getPosition():f),c.extend(g);if(d)return b.fitBounds(c)}}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapGmapUtil",["uiGmapLogger","$compile",function(a,c){var d,e,f,g,h,i;return e=function(a,b,c){return a===b||-1!==c.indexOf(a)},d=function(a){return e(a,!1,["false","FALSE",0,"n","N","no","NO"])},g=function(a){return Array.isArray(a)&&2===a.length?a[1]:b.isDefined(a.type)&&"Point"===a.type?a.coordinates[1]:a.latitude},h=function(a){return Array.isArray(a)&&2===a.length?a[0]:b.isDefined(a.type)&&"Point"===a.type?a.coordinates[0]:a.longitude},f=function(a){return a?Array.isArray(a)&&2===a.length?new google.maps.LatLng(a[1],a[0]):b.isDefined(a.type)&&"Point"===a.type?new google.maps.LatLng(a.coordinates[1],a.coordinates[0]):new google.maps.LatLng(a.latitude,a.longitude):void 0},i=function(a){if(b.isUndefined(a))return!1;if(_.isArray(a)){if(2===a.length)return!0}else if(null!=a&&(null!=a?a.type:void 0)&&"Point"===a.type&&_.isArray(a.coordinates)&&2===a.coordinates.length)return!0;return a&&b.isDefined((null!=a?a.latitude:void 0)&&b.isDefined(null!=a?a.longitude:void 0))?!0:!1},{setCoordsFromEvent:function(a,c){return a?(Array.isArray(a)&&2===a.length?(a[1]=c.lat(),a[0]=c.lng()):b.isDefined(a.type)&&"Point"===a.type?(a.coordinates[1]=c.lat(),a.coordinates[0]=c.lng()):(a.latitude=c.lat(),a.longitude=c.lng()),a):void 0},getLabelPositionPoint:function(a){var b,c;return void 0===a?void 0:(a=/^([-\d\.]+)\s([-\d\.]+)$/.exec(a),b=parseFloat(a[1]),c=parseFloat(a[2]),null!=b&&null!=c?new google.maps.Point(b,c):void 0)},createWindowOptions:function(d,e,g,h){var i;return null!=g&&null!=h&&null!=c?(i=b.extend({},h,{content:this.buildContent(e,h,g),position:null!=h.position?h.position:b.isObject(d)?d.getPosition():f(e.coords)}),null!=d&&null==(null!=i?i.pixelOffset:void 0)&&(null==i.boxClass||(i.pixelOffset={height:0,width:-2})),i):h?h:(a.error("infoWindow defaults not defined"),g?void 0:a.error("infoWindow content not defined"))},buildContent:function(a,b,d){var e,f;return null!=b.content?f=b.content:null!=c?(d=d.replace(/^\s+|\s+$/g,""),e=""===d?"":c(d)(a),e.length>0&&(f=e[0])):f=d,f},defaultDelay:50,isTrue:function(a){return e(a,!0,["true","TRUE",1,"y","Y","yes","YES"])},isFalse:d,isFalsy:function(a){return e(a,!1,[void 0,null])||d(a)},getCoords:f,validateCoords:i,equalCoords:function(a,b){return g(a)===g(b)&&h(a)===h(b)},validatePath:function(a){var c,d,e,f;if(d=0,b.isUndefined(a.type)){if(!Array.isArray(a)||a.length<2)return!1;for(;d<a.length;){if(!(b.isDefined(a[d].latitude)&&b.isDefined(a[d].longitude)||"function"==typeof a[d].lat&&"function"==typeof a[d].lng))return!1;d++}return!0}if(b.isUndefined(a.coordinates))return!1;if("Polygon"===a.type){if(a.coordinates[0].length<4)return!1;c=a.coordinates[0]}else if("MultiPolygon"===a.type){if(f={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},f),e=a.coordinates[f.index],c=e[0],c.length<4)return!1}else{if("LineString"!==a.type)return!1;if(a.coordinates.length<2)return!1;c=a.coordinates}for(;d<c.length;){if(2!==c[d].length)return!1;d++}return!0},convertPathPoints:function(a){var c,d,e,f,g;if(d=0,f=new google.maps.MVCArray,b.isUndefined(a.type))for(;d<a.length;)b.isDefined(a[d].latitude)&&b.isDefined(a[d].longitude)?e=new google.maps.LatLng(a[d].latitude,a[d].longitude):"function"==typeof a[d].lat&&"function"==typeof a[d].lng&&(e=a[d]),f.push(e),d++;else for("Polygon"===a.type?c=a.coordinates[0]:"MultiPolygon"===a.type?(g={max:0,index:0},_.forEach(a.coordinates,function(a,b){return a[0].length>this.max?(this.max=a[0].length,this.index=b):void 0},g),c=a.coordinates[g.index][0]):"LineString"===a.type&&(c=a.coordinates);d<c.length;)f.push(new google.maps.LatLng(c[d][1],c[d][0])),d++;return f},getPath:function(a,b){var c;return null!=b&&_.isString(b)?(c=a,_.each(b.split("."),function(a){return c?c=c[a]:void 0}),c):b},validateBoundPoints:function(a){return b.isUndefined(a.sw.latitude)||b.isUndefined(a.sw.longitude)||b.isUndefined(a.ne.latitude)||b.isUndefined(a.ne.longitude)?!1:!0},convertBoundPoints:function(a){var b;return b=new google.maps.LatLngBounds(new google.maps.LatLng(a.sw.latitude,a.sw.longitude),new google.maps.LatLng(a.ne.latitude,a.ne.longitude))},fitMapBounds:function(a,b){return a.fitBounds(b)}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapIsReady",["$q","$timeout",function(a,b){var c,d,e,f;return d=0,f=[],e=function(){return a.all(f)},c=function(a,f,g){return b(function(){return 0>=g?void a.reject("Your maps are not found we have checked the maximum amount of times. :)"):void(d!==f?c(a,f,g-1):a.resolve(e()))},100)},{spawn:function(){var b;return b=a.defer(),f.push(b.promise),d+=1,{instance:d,deferred:b}},promises:e,instances:function(){return d},promise:function(b,d){var e;return null==b&&(b=1),null==d&&(d=50),e=a.defer(),c(e,b,d),e.promise},reset:function(){d=0,f.length=0},decrement:function(){d>0&&(d-=1),f.length&&(f.length-=1)}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapLinked",["uiGmapBaseObject",function(b){var c;return c=function(b){function c(a,b,c,d){this.scope=a,this.element=b,this.attrs=c,this.ctrls=d}return a(c,b),c}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapLogger",["nemSimpleLogger",function(a){return a.spawn()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapModelKey",["uiGmapBaseObject","uiGmapGmapUtil","uiGmapPromise","$q","$timeout",function(d,e,f,g,h){var i;return i=function(d){function f(b){this.scope=b,this.modelsLength=a(this.modelsLength,this),this.updateChild=a(this.updateChild,this),this.destroy=a(this.destroy,this),this.onDestroy=a(this.onDestroy,this),this.setChildScope=a(this.setChildScope,this),this.getChanges=a(this.getChanges,this),this.getProp=a(this.getProp,this),this.setIdKey=a(this.setIdKey,this),this.modelKeyComparison=a(this.modelKeyComparison,this),f.__super__.constructor.call(this),this["interface"]={},this["interface"].scopeKeys=[],this.defaultIdKey="id",this.idKey=void 0}return c(f,d),f.prototype.evalModelHandle=function(a,b){return null!=a&&null!=b?"self"===b?a:(_.isFunction(b)&&(b=b()),e.getPath(a,b)):void 0},f.prototype.modelKeyComparison=function(a,b){var c,d,f;if(c=_.contains(this["interface"].scopeKeys,"coords"),(c&&null!=this.scope.coords||!c)&&(f=this.scope),null==f)throw"No scope set!";return c&&(d=e.equalCoords(this.scopeOrModelVal("coords",f,a),this.scopeOrModelVal("coords",f,b)),!d)?d:d=_.every(_.without(this["interface"].scopeKeys,"coords"),function(c){return function(d){return c.scopeOrModelVal(f[d],f,a)===c.scopeOrModelVal(f[d],f,b)}}(this))},f.prototype.setIdKey=function(a){return this.idKey=null!=a.idKey?a.idKey:this.defaultIdKey},f.prototype.setVal=function(a,b,c){var d;return d=this.modelOrKey(a,b),d=c,a},f.prototype.modelOrKey=function(a,b){return null!=b?"self"!==b?e.getPath(a,b):a:void 0},f.prototype.getProp=function(a,b,c){return this.scopeOrModelVal(a,b,c)},f.prototype.getChanges=function(a,b,c){var d,e,f;c&&(b=_.pick(b,c),a=_.pick(a,c)),e={},f={},d={};for(f in a)b&&b[f]===a[f]||(_.isArray(a[f])?e[f]=a[f]:_.isObject(a[f])?(d=this.getChanges(a[f],b?b[f]:null),_.isEmpty(d)||(e[f]=d)):e[f]=a[f]);return e},f.prototype.scopeOrModelVal=function(a,b,c,d){var e,f,g,h;return null==d&&(d=!1),e=function(a,b,c){return null==c&&(c=!1),c?{isScope:a,value:b}:b},h=_.get(b,a),_.isFunction(h)?e(!0,h(c),d):_.isObject(h)?e(!0,h,d):_.isString(h)?(f=h,g=f?"self"===f?c:_.get(c,f):_.get(c,a),_.isFunction(g)?e(!1,g(),d):e(!1,g,d)):e(!0,h,d)},f.prototype.setChildScope=function(a,b,c){var d,e,f,g;for(e in a)f=a[e],d=this.scopeOrModelVal(f,b,c,!0),null!=(null!=d?d.value:void 0)&&(g=d.value,g!==b[f]&&(b[f]=g));return b.model=c},f.prototype.onDestroy=function(a){},f.prototype.destroy=function(a){var b;return null==a&&(a=!1),null==this.scope||(null!=(b=this.scope)?b.$$destroyed:void 0)||!this.needToManualDestroy&&!a?this.clean():this.scope.$destroy()},f.prototype.updateChild=function(a,b){return null==b[this.idKey]?void this.$log.error("Model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):a.updateModel(b)},f.prototype.modelsLength=function(a){var c,d;return null==a&&(a=void 0),c=0,d=a?a:this.scope.models,null==d?c:c=b.isArray(d)||null!=d.length?d.length:Object.keys(d).length},f}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapModelsWatcher",["uiGmapLogger","uiGmap_async","$q","uiGmapPromise",function(a,b,c,d){return{didQueueInitPromise:function(a,c){return 0===c.models.length?(b.promiseLock(a,d.promiseTypes.init,null,null,function(a){return function(){return d.resolve()}}(this)),!0):!1},figureOutState:function(b,c,d,e,f){var g,h,i,j,k;return g=[],i={},j=[],k=[],c.models.forEach(function(f){var h;return null==f[b]?a.error(" id missing for model #{m.toString()},\ncan not use do comparison/insertion"):(i[f[b]]={},null==d.get(f[b])?g.push(f):(h=d.get(f[b]),e(f,h.clonedModel,c)?void 0:k.push({model:f,child:h})))}),h=d.values(),h.forEach(function(c){var d;return null==c?void a.error("child undefined in ModelsWatcher."):null==c.model?void a.error("child.model undefined in ModelsWatcher."):(d=c.model[b],null==i[d]?j.push(c):void 0)}),{adds:g,removals:j,updates:k}}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapPromise",["$q","$timeout","uiGmapLogger",function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;return l={create:"create",update:"update","delete":"delete",init:"init"},k={IN_PROGRESS:0,RESOLVED:1,REJECTED:2},n=function(){var a;return a={},a[""+k.IN_PROGRESS]="in-progress",a[""+k.RESOLVED]="resolved",a[""+k.REJECTED]="rejected",a}(),g=function(a){return a.$$state?a.$$state.status===k.IN_PROGRESS:a.hasOwnProperty("$$v")?void 0:!0},h=function(a){return a.$$state?a.$$state.status===k.RESOLVED:a.hasOwnProperty("$$v")?!0:void 0},j=function(a){return n[a]||"done w error"},d=function(b){var c,d,e;return c=a.defer(),d=a.all([b,c.promise]),e=a.defer(),b.then(c.resolve,function(){},function(a){return c.notify(a),e.notify(a)}),d.then(function(a){return e.resolve(a[0]||a[1])},function(a){return e.reject(a)}),e.promise.cancel=function(a){return null==a&&(a="canceled"),c.reject(a)},e.promise.notify=function(a){return null==a&&(a="cancel safe"),e.notify(a),b.hasOwnProperty("notify")?b.notify(a):void 0},null!=b.promiseType&&(e.promise.promiseType=b.promiseType),e.promise},e=function(a,b){return{promise:a,promiseType:b}},f=function(){return a.defer()},m=function(){var b;return b=a.defer(),b.resolve.apply(void 0,arguments),b.promise},i=function(d){var e;return _.isFunction(d)?(e=a.defer(),b(function(){var a;return a=d(),e.resolve(a)}),e.promise):void c.error("uiGmapPromise.promise() only accepts functions")},{defer:f,promise:i,resolve:m,promiseTypes:l,isInProgress:g,isResolved:h,promiseStatus:j,ExposedPromise:d,SniffedPromise:e}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropMap",function(){var b;return b=function(){function b(){this.removeAll=a(this.removeAll,this),this.slice=a(this.slice,this),this.push=a(this.push,this),this.keys=a(this.keys,this),this.values=a(this.values,this),this.remove=a(this.remove,this),this.put=a(this.put,this),this.stateChanged=a(this.stateChanged,this),this.get=a(this.get,this),this.length=0,this.dict={},this.didValsStateChange=!1,this.didKeysStateChange=!1,this.allVals=[],this.allKeys=[]}return b.prototype.get=function(a){return this.dict[a]},b.prototype.stateChanged=function(){return this.didValsStateChange=!0,this.didKeysStateChange=!0},b.prototype.put=function(a,b){return null==this.get(a)&&this.length++,this.stateChanged(),this.dict[a]=b},b.prototype.remove=function(a,b){var c;return null==b&&(b=!1),b&&!this.get(a)?void 0:(c=this.dict[a],delete this.dict[a],this.length--,this.stateChanged(),c)},b.prototype.valuesOrKeys=function(a){var b,c;return null==a&&(a="Keys"),this["did"+a+"StateChange"]?(c=[],b=[],_.each(this.dict,function(a,d){return c.push(a),b.push(d)}),this.didKeysStateChange=!1,this.didValsStateChange=!1,this.allVals=c,this.allKeys=b,this["all"+a]):this["all"+a]},b.prototype.values=function(){return this.valuesOrKeys("Vals")},b.prototype.keys=function(){return this.valuesOrKeys()},b.prototype.push=function(a,b){return null==b&&(b="key"),this.put(a[b],a)},b.prototype.slice=function(){return this.keys().map(function(a){return function(b){return a.remove(b)}}(this))},b.prototype.removeAll=function(){return this.slice()},b.prototype.each=function(a){return _.each(this.dict,function(b,c){return a(b)})},b.prototype.map=function(a){return _.map(this.dict,function(b,c){return a(b)})},b}()})}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapPropertyAction",["uiGmapLogger",function(a){var b;return b=function(a){return this.setIfChange=function(b,c){var d;return d=this.exp,_.isEqual(c,b)?void 0:a(d,b)},this.sic=this.setIfChange,this}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapClustererMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap","uiGmapEventsHelper",function(c,d,e,f){var g;return g=function(){function g(b,d,f,h){null==d&&(d={}),this.opt_options=null!=f?f:{},this.opt_events=h,this.checkSync=a(this.checkSync,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.attachEvents=a(this.attachEvents,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=g.type,this.clusterer=new NgMapMarkerClusterer(b,d,this.opt_options),this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.clusterer.setIgnoreHidden(!0),this.noDrawOnSingleAddRemoves=!0,c.info(this)}return g.type="ClustererMarkerManager",g.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",c.error(b)):void 0},g.prototype.add=function(a){return this.checkKey(a),this.clusterer.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},g.prototype.update=function(a){return this.remove(a),this.add(a)},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(this.clusterer.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},g.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){return this.clusterer.repaint()},g.prototype.clear=function(){return this.removeMany(this.getGMarkers()),this.clusterer.repaint()},g.prototype.attachEvents=function(a,d){var e,f,g;if(this.listeners=[],b.isDefined(a)&&null!=a&&b.isObject(a)){g=[];for(f in a)e=a[f],a.hasOwnProperty(f)&&b.isFunction(a[f])?(c.info(d+": Attaching event: "+f+" to clusterer"),g.push(this.listeners.push(google.maps.event.addListener(this.clusterer,f,a[f])))):g.push(void 0);return g}},g.prototype.clearEvents=function(){return f.removeEvents(this.listeners),this.listeners=[]},g.prototype.destroy=function(){return this.clearEvents(),this.clear()},g.prototype.fit=function(){return d.fit(this.getGMarkers(),this.clusterer.getMap())},g.prototype.getGMarkers=function(){return this.clusterer.getMarkers().values()},g.prototype.checkSync=function(){},g}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap",function(b,c,d){var e;return e=function(){function e(c,f,g){this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.handleOptDraw=a(this.handleOptDraw,this),this.clear=a(this.clear,this),this.destroy=a(this.destroy,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=e.type,this.gMap=c,this.gMarkers=new d,this.$log=b,this.$log.info(this)}return e.type="MarkerManager",e.prototype.add=function(a,c){var d,e;if(null==c&&(c=!0),null==a.key)throw e="gMarker.key undefined and it is REQUIRED!!",b.error(e),e;return d=this.gMarkers.get(a.key),d?void 0:(this.handleOptDraw(a,c,!0),this.gMarkers.put(a.key,a))},e.prototype.update=function(a,b){return null==b&&(b=!0),this.remove(a,b),this.add(a,b)},e.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},e.prototype.remove=function(a,b){return null==b&&(b=!0),this.handleOptDraw(a,b,!1),this.gMarkers.get(a.key)?this.gMarkers.remove(a.key):void 0},e.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},e.prototype.draw=function(){var a;return a=[],this.gMarkers.each(function(b){return function(c){return c.isDrawn?void 0:c.doAdd?(c.setMap(b.gMap),c.isDrawn=!0):a.push(c)}}(this)),a.forEach(function(a){return function(b){return b.isDrawn=!1,a.remove(b,!0)}}(this))},e.prototype.destroy=function(){return this.clear()},e.prototype.clear=function(){return this.gMarkers.each(function(a){return a.setMap(null)}),delete this.gMarkers,this.gMarkers=new d},e.prototype.handleOptDraw=function(a,b,c){return b===!0?(c?a.setMap(this.gMap):a.setMap(null),a.isDrawn=!0):(a.isDrawn=!1,a.doAdd=c)},e.prototype.fit=function(){return c.fit(this.getGMarkers(),this.gMap)},e.prototype.getGMarkers=function(){return this.gMarkers.values()},e}()}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapSpiderfierMarkerManager",["uiGmapLogger","uiGmapFitHelper","uiGmapPropMap","uiGmapMarkerSpiderfier",function(c,d,e,f){var g;return g=function(){function g(b,d,h,i,j){null==d&&(d={}),this.opt_options=null!=h?h:{},this.opt_events=i,this.scope=j,this.checkSync=a(this.checkSync,this),this.isSpiderfied=a(this.isSpiderfied,this),this.getGMarkers=a(this.getGMarkers,this),this.fit=a(this.fit,this),this.destroy=a(this.destroy,this),this.attachEvents=a(this.attachEvents,this),this.clear=a(this.clear,this),this.draw=a(this.draw,this),this.removeMany=a(this.removeMany,this),this.remove=a(this.remove,this),this.addMany=a(this.addMany,this),this.update=a(this.update,this),this.add=a(this.add,this),this.type=g.type,this.markerSpiderfier=new f(b,this.opt_options),
this.propMapGMarkers=new e,this.attachEvents(this.opt_events,"opt_events"),this.noDrawOnSingleAddRemoves=!0,c.info(this)}return g.type="SpiderfierMarkerManager",g.prototype.checkKey=function(a){var b;return null==a.key?(b="gMarker.key undefined and it is REQUIRED!!",c.error(b)):void 0},g.prototype.add=function(a){return a.setMap(this.markerSpiderfier.map),this.checkKey(a),this.markerSpiderfier.addMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.put(a.key,a),this.checkSync()},g.prototype.update=function(a){return this.remove(a),this.add(a)},g.prototype.addMany=function(a){return a.forEach(function(a){return function(b){return a.add(b)}}(this))},g.prototype.remove=function(a){var b;return this.checkKey(a),b=this.propMapGMarkers.get(a.key),b&&(a.setMap(null),this.markerSpiderfier.removeMarker(a,this.noDrawOnSingleAddRemoves),this.propMapGMarkers.remove(a.key)),this.checkSync()},g.prototype.removeMany=function(a){return a.forEach(function(a){return function(b){return a.remove(b)}}(this))},g.prototype.draw=function(){},g.prototype.clear=function(){return this.removeMany(this.getGMarkers())},g.prototype.attachEvents=function(a,d){return b.isDefined(a)&&null!=a&&b.isObject(a)?_.each(a,function(e){return function(f,g){return a.hasOwnProperty(g)&&b.isFunction(a[g])?(c.info(d+": Attaching event: "+g+" to markerSpiderfier"),e.markerSpiderfier.addListener(g,function(){return"spiderfy"===g||"unspiderfy"===g?e.scope.$evalAsync(a[g].apply(a,arguments)):e.scope.$evalAsync(a[g].apply(a,[arguments[0],g,arguments[0].model,arguments]))})):void 0}}(this)):void 0},g.prototype.clearEvents=function(a,d){var e,f;if(b.isDefined(a)&&null!=a&&b.isObject(a))for(f in a)e=a[f],a.hasOwnProperty(f)&&b.isFunction(a[f])&&(c.info(d+": Clearing event: "+f+" to markerSpiderfier"),this.markerSpiderfier.clearListeners(f))},g.prototype.destroy=function(){return this.clearEvents(this.opt_events,"opt_events"),this.clear()},g.prototype.fit=function(){return d.fit(this.getGMarkers(),this.markerSpiderfier.map)},g.prototype.getGMarkers=function(){return this.markerSpiderfier.getMarkers()},g.prototype.isSpiderfied=function(){return _.find(this.getGMarkers(),function(a){return null!=(null!=a?a._omsData:void 0)})},g.prototype.checkSync=function(){},g}()}])}.call(this),function(){b.module("uiGmapgoogle-maps").factory("uiGmapadd-events",["$timeout",function(a){var c,d;return c=function(b,c,d){return google.maps.event.addListener(b,c,function(){return d.apply(this,arguments),a(function(){},!0)})},d=function(a,d,e){var f;return e?c(a,d,e):(f=[],b.forEach(d,function(b,d){return f.push(c(a,d,b))}),function(){return b.forEach(f,function(a){return google.maps.event.removeListener(a)}),f=null})}}])}.call(this),function(){b.module("uiGmapgoogle-maps").factory("uiGmaparray-sync",["uiGmapadd-events",function(a){return function(c,d,e,f){var g,h,i,j,k,l,m,n,o;return j=!1,n=d.$eval(e),d["static"]||(k={set_at:function(a){var b;if(!j&&(b=c.getAt(a)))return b.lng&&b.lat?(n[a].latitude=b.lat(),n[a].longitude=b.lng()):n[a]=b},insert_at:function(a){var b;if(!j&&(b=c.getAt(a)))return b.lng&&b.lat?n.splice(a,0,{latitude:b.lat(),longitude:b.lng()}):n.splice(a,0,b)},remove_at:function(a){return j?void 0:n.splice(a,1)}},"Polygon"===n.type?g=n.coordinates[0]:"LineString"===n.type&&(g=n.coordinates),h={set_at:function(a){var b;if(!j&&(b=c.getAt(a),b&&b.lng&&b.lat))return g[a][1]=b.lat(),g[a][0]=b.lng()},insert_at:function(a){var b;if(!j&&(b=c.getAt(a),b&&b.lng&&b.lat))return g.splice(a,0,[b.lng(),b.lat()])},remove_at:function(a){return j?void 0:g.splice(a,1)}},m=a(c,b.isUndefined(n.type)?k:h)),l=function(a){var b,d,e,g,h,i,k,l;if(j=!0,i=c,b=!1,a){for(d=0,k=i.getLength(),g=a.length,e=Math.min(k,g),h=void 0;e>d;)l=i.getAt(d),h=a[d],"function"==typeof h.equals?h.equals(l)||(i.setAt(d,h),b=!0):(l.lat()!==h.latitude||l.lng()!==h.longitude)&&(i.setAt(d,new google.maps.LatLng(h.latitude,h.longitude)),b=!0),d++;for(;g>d;)h=a[d],"function"==typeof h.lat&&"function"==typeof h.lng?i.push(h):i.push(new google.maps.LatLng(h.latitude,h.longitude)),b=!0,d++;for(;k>d;)i.pop(),b=!0,d++}return j=!1,b?f(i):void 0},i=function(a){var b,d,e,g,h,i,k,l,m;if(j=!0,k=c,d=!1,a){for("Polygon"===n.type?b=a.coordinates[0]:"LineString"===n.type&&(b=a.coordinates),e=0,l=k.getLength(),h=b.length,g=Math.min(l,h),i=void 0;g>e;)m=k.getAt(e),i=b[e],(m.lat()!==i[1]||m.lng()!==i[0])&&(k.setAt(e,new google.maps.LatLng(i[1],i[0])),d=!0),e++;for(;h>e;)i=b[e],k.push(new google.maps.LatLng(i[1],i[0])),d=!0,e++;for(;l>e;)k.pop(),d=!0,e++}return j=!1,d?f(k):void 0},d["static"]||(o=b.isUndefined(n.type)?d.$watchCollection(e,l):d.$watch(e,i,!0)),function(){return m&&(m(),m=null),o?(o(),o=null):void 0}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChromeFixes",["$timeout",function(a){return{maybeRepaint:function(b){return b?(b.style.opacity=.9,a(function(){return b.style.opacity=1})):void 0}}}])}.call(this),function(){b.module("uiGmapgoogle-maps").service("uiGmapObjectIterators",function(){var a,b,c,d;return a=["length","forEach","map"],b=[],c=function(b){return b.forEach=function(c){return _.each(_.omit(b,a),function(a){return _.isFunction(a)?void 0:c(a)})},b},b.push(c),d=function(b){return b.map=function(c){return _.map(_.omit(b,a),function(a){return _.isFunction(a)?void 0:c(a)})},b},b.push(d),{slapMap:d,slapForEach:c,slapAll:function(a){return b.forEach(function(b){return b(a)}),a}}})}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.options.builders").service("uiGmapCommonOptionsBuilder",["uiGmapBaseObject","uiGmapLogger","uiGmapModelKey",function(d,e,f){var g;return g=function(d){function f(){return this.watchProps=a(this.watchProps,this),this.buildOpts=a(this.buildOpts,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.props=["clickable","draggable","editable","visible",{prop:"stroke",isColl:!0}],f.prototype.getCorrectModel=function(a){return b.isDefined(null!=a?a.model:void 0)?a.model:a},f.prototype.buildOpts=function(a,c,d){var f,g,h;return null==a&&(a={}),null==d&&(d={}),this.scope?this.map?(f=this.getCorrectModel(this.scope),h=this.scopeOrModelVal("stroke",this.scope,f),g=b.extend(a,this.DEFAULTS,{map:this.map,strokeColor:null!=h?h.color:void 0,strokeOpacity:null!=h?h.opacity:void 0,strokeWeight:null!=h?h.weight:void 0}),b.forEach(b.extend(d,{clickable:!0,draggable:!1,editable:!1,"static":!1,fit:!1,visible:!0,zIndex:0,icons:[]}),function(a){return function(d,e){var h;return h=c?c[e]:a.scopeOrModelVal(e,a.scope,f),b.isUndefined(h)?g[e]=d:g[e]=f[e]}}(this)),g["static"]&&(g.editable=!1),g):void e.error("this.map not defined in CommonOptionsBuilder can not buildOpts"):void e.error("this.scope not defined in CommonOptionsBuilder can not buildOpts")},f.prototype.watchProps=function(a){return null==a&&(a=this.props),a.forEach(function(a){return function(b){return null!=a.attrs[b]||null!=a.attrs[null!=b?b.prop:void 0]?(null!=b?b.isColl:void 0)?a.scope.$watchCollection(b.prop,a.setMyOptions):a.scope.$watch(b,a.setMyOptions):void 0}}(this))},f}(f)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.options.builders").factory("uiGmapPolylineOptionsBuilder",["uiGmapCommonOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{path:a},b,{geodesic:!1})},c}(b)}]).factory("uiGmapShapeOptionsBuilder",["uiGmapCommonOptionsBuilder",function(c){var d;return d=function(c){function d(){return d.__super__.constructor.apply(this,arguments)}return a(d,c),d.prototype.buildOpts=function(a,c,e){var f,g;return g=this.getCorrectModel(this.scope),f=c?c.fill:this.scopeOrModelVal("fill",this.scope,g),a=b.extend(a,{fillColor:null!=f?f.color:void 0,fillOpacity:null!=f?f.opacity:void 0}),d.__super__.buildOpts.call(this,a,c,e)},d}(c)}]).factory("uiGmapPolygonOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{path:a},b,{geodesic:!1})},c}(b)}]).factory("uiGmapRectangleOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b){return c.__super__.buildOpts.call(this,{bounds:a},b)},c}(b)}]).factory("uiGmapCircleOptionsBuilder",["uiGmapShapeOptionsBuilder",function(b){var c;return c=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c.prototype.buildOpts=function(a,b,d){return c.__super__.buildOpts.call(this,{center:a,radius:b},d)},c}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.options").service("uiGmapMarkerOptions",["uiGmapLogger","uiGmapGmapUtil",function(a,c){return _.extend(c,{createOptions:function(a,d,e,f){var g;return null==e&&(e={}),g=b.extend({},e,{position:null!=e.position?e.position:c.getCoords(a),visible:null!=e.visible?e.visible:c.validateCoords(a)}),(null!=e.icon||null!=d)&&(g=b.extend(g,{icon:null!=e.icon?e.icon:d})),null!=f&&(g.map=f),g},isLabel:function(a){return null==a?!1:null!=a.labelContent||null!=a.labelAnchor||null!=a.labelClass||null!=a.labelStyle||null!=a.labelVisible}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapBasePolyChildModel",["uiGmapLogger","$timeout","uiGmaparray-sync","uiGmapGmapUtil","uiGmapEventsHelper",function(d,e,f,g,h){return function(d,e){var i;return i=function(d){function i(c,d,g,i,j,k){var l;this.scope=c,this.attrs=d,this.map=g,this.defaults=i,this.model=j,this.clean=a(this.clean,this),this.clonedModel=_.clone(this.model,!0),this.isDragging=!1,this.internalEvents={dragend:function(a){return function(){return _.defer(function(){return a.isDragging=!1})}}(this),dragstart:function(a){return function(){return a.isDragging=!0}}(this)},l=function(a){return function(){var c;if(!a.isDragging)return a.pathPoints=a.convertPathPoints(a.scope.path),null!=a.gObject&&a.clean(),null!=a.scope.model&&(c=a.scope),a.pathPoints.length>0&&(a.gObject=e(a.buildOpts(a.pathPoints,c))),a.gObject?(f(a.gObject.getPath(),a.scope,"path",function(b){return a.pathPoints=b,null!=k?k():void 0}),b.isDefined(a.scope.events)&&b.isObject(a.scope.events)&&(a.listeners=a.model?h.setEvents(a.gObject,a.scope,a.model):h.setEvents(a.gObject,a.scope,a.scope)),a.internalListeners=a.model?h.setEvents(a.gObject,{events:a.internalEvents},a.model):h.setEvents(a.gObject,{events:a.internalEvents},a.scope)):void 0}}(this),l(),this.scope.$watch("path",function(a){return function(b,c){return _.isEqual(b,c)&&a.gObject?void 0:l()}}(this),!0),!this.scope["static"]&&b.isDefined(this.scope.editable)&&this.scope.$watch("editable",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setEditable(b):void 0):void 0}}(this),!0),b.isDefined(this.scope.draggable)&&this.scope.$watch("draggable",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setDraggable(b):void 0):void 0}}(this),!0),b.isDefined(this.scope.visible)&&this.scope.$watch("visible",function(a){return function(b,c){var d;return b!==c&&(b=!a.isFalse(b)),null!=(d=a.gObject)?d.setVisible(b):void 0}}(this),!0),b.isDefined(this.scope.geodesic)&&this.scope.$watch("geodesic",function(a){return function(b,c){var d;return b!==c?(b=!a.isFalse(b),null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.weight)&&this.scope.$watch("stroke.weight",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.color)&&this.scope.$watch("stroke.color",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.stroke)&&b.isDefined(this.scope.stroke.opacity)&&this.scope.$watch("stroke.opacity",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),b.isDefined(this.scope.icons)&&this.scope.$watch("icons",function(a){return function(b,c){var d;return b!==c&&null!=(d=a.gObject)?d.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this),!0),this.scope.$on("$destroy",function(a){return function(){return a.clean(),a.scope=null}}(this)),b.isDefined(this.scope.fill)&&b.isDefined(this.scope.fill.color)&&this.scope.$watch("fill.color",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this)),b.isDefined(this.scope.fill)&&b.isDefined(this.scope.fill.opacity)&&this.scope.$watch("fill.opacity",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this)),b.isDefined(this.scope.zIndex)&&this.scope.$watch("zIndex",function(a){return function(b,c){return b!==c?a.gObject.setOptions(a.buildOpts(a.gObject.getPath())):void 0}}(this))}return c(i,d),i.include(g),i.prototype.clean=function(){var a;return h.removeEvents(this.listeners),h.removeEvents(this.internalListeners),null!=(a=this.gObject)&&a.setMap(null),this.gObject=null},i}(d)}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapDrawFreeHandChildModel",["uiGmapLogger","$q",function(a,b){var c,d;return c=function(a,b,c){var d,e;return e=new google.maps.Polyline({map:a,clickable:!1}),d=google.maps.event.addListener(a,"mousemove",function(a){return e.getPath().push(a.latLng)}),void google.maps.event.addListenerOnce(a,"mouseup",function(f){var g;return google.maps.event.removeListener(d),g=e.getPath(),e.setMap(null),b.push(new google.maps.Polygon({map:a,path:g})),e=null,google.maps.event.clearListeners(a.getDiv(),"mousedown"),c()})},d=function(d,e){var f,g;return this.map=d,f=function(b){return function(){var c;return c={draggable:!1,disableDefaultUI:!0,scrollwheel:!1,disableDoubleClickZoom:!1},a.info("disabling map move"),b.map.setOptions(c)}}(this),g=function(a){return function(){var b,c;return b={draggable:!0,disableDefaultUI:!1,scrollwheel:!0,disableDoubleClickZoom:!0},null!=(c=a.deferred)&&c.resolve(),_.defer(function(){return a.map.setOptions(_.extend(b,e.options))})}}(this),this.engage=function(d){return function(e){return d.polys=e,d.deferred=b.defer(),f(),a.info("DrawFreeHandChildModel is engaged (drawing)."),google.maps.event.addDomListener(d.map.getDiv(),"mousedown",function(a){return c(d.map,d.polys,g)}),d.deferred.promise}}(this),this}}])}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapMarkerChildModel",["uiGmapModelKey","uiGmapGmapUtil","uiGmapLogger","uiGmapEventsHelper","uiGmapPropertyAction","uiGmapMarkerOptions","uiGmapIMarker","uiGmapMarkerManager","uiGmapPromise",function(b,e,f,g,h,i,j,k,l){var m;return m=function(b){function m(a,b,d,e,g,i,j,k,o,p){var q;this.model=b,this.keys=d,this.gMap=e,this.defaults=g,this.doClick=i,this.gManager=j,this.doDrawSelf=null!=k?k:!0,this.trackModel=null!=o?o:!0,this.needRedraw=null!=p?p:!1,this.internalEvents=c(this.internalEvents,this),this.setLabelOptions=c(this.setLabelOptions,this),this.setOptions=c(this.setOptions,this),this.setIcon=c(this.setIcon,this),this.setCoords=c(this.setCoords,this),this.isNotValid=c(this.isNotValid,this),this.maybeSetScopeValue=c(this.maybeSetScopeValue,this),this.createMarker=c(this.createMarker,this),this.setMyScope=c(this.setMyScope,this),this.updateModel=c(this.updateModel,this),this.handleModelChanges=c(this.handleModelChanges,this),this.destroy=c(this.destroy,this),this.clonedModel=_.clone(this.model,!0),this.deferred=l.defer(),_.each(this.keys,function(a){return function(b,c){var d;return d=a.keys[c],null!=d&&!_.isFunction(d)&&_.isString(d)?a[c+"Key"]=d:void 0}}(this)),this.idKey=this.idKeyKey||"id",null!=this.model[this.idKey]&&(this.id=this.model[this.idKey]),m.__super__.constructor.call(this,a),this.scope.getGMarker=function(a){return function(){return a.gObject}}(this),this.firstTime=!0,this.trackModel?(this.scope.model=this.model,this.scope.$watch("model",function(a){return function(b,c){return b!==c?a.handleModelChanges(b,c):void 0}}(this),!0)):(q=new h(function(b){return function(c,d){return b.firstTime?void 0:b.setMyScope(c,a)}}(this),!1),_.each(this.keys,function(b,c){return a.$watch(c,q.sic,!0)})),this.scope.$on("$destroy",function(a){return function(){return n(a)}}(this)),this.createMarker(this.model),f.info(this)}var n;return d(m,b),m.include(e),m.include(g),m.include(i),n=function(a){return null!=(null!=a?a.gObject:void 0)&&(a.removeEvents(a.externalListeners),a.removeEvents(a.internalListeners),null!=a?a.gObject:void 0)?(a.removeFromManager&&a.gManager.remove(a.gObject),a.gObject.setMap(null),a.gObject=null):void 0},m.prototype.destroy=function(a){return null==a&&(a=!0),this.removeFromManager=a,this.scope.$destroy()},m.prototype.handleModelChanges=function(a,b){var c,d,e;return c=this.getChanges(a,b,j.keys),this.firstTime?void 0:(d=0,e=_.keys(c).length,_.each(c,function(c){return function(f,g){var h;return d+=1,h=e===d,c.setMyScope(g,a,b,!1,!0,h),c.needRedraw=!0}}(this)))},m.prototype.updateModel=function(a){return this.clonedModel=_.clone(a,!0),this.setMyScope("all",a,this.model)},m.prototype.renderGMarker=function(b,c){var d,e,g;if(null==b&&(b=!0),d=this.getProp("coords",this.scope,this.model),null!=(null!=(g=this.gManager)?g.isSpiderfied:void 0)&&(e=this.gManager.isSpiderfied()),null!=d){if(!this.validateCoords(d))return void f.debug("MarkerChild does not have coords yet. They may be defined later.");if(null!=c&&c(),b&&this.gObject&&this.gManager.add(this.gObject),e)return this.gManager.markerSpiderfier.spiderListener(this.gObject,a.event)}else if(b&&this.gObject)return this.gManager.remove(this.gObject)},m.prototype.setMyScope=function(a,b,c,d,e){var f;switch(null==c&&(c=void 0),null==d&&(d=!1),null==e&&(e=!0),null==b?b=this.model:this.model=b,this.gObject||(this.setOptions(this.scope,e),f=!0),a){case"all":return _.each(this.keys,function(a){return function(f,g){return a.setMyScope(g,b,c,d,e)}}(this));case"icon":return this.maybeSetScopeValue("icon",b,c,this.iconKey,this.evalModelHandle,d,this.setIcon,e);case"coords":return this.maybeSetScopeValue("coords",b,c,this.coordsKey,this.evalModelHandle,d,this.setCoords,e);case"options":if(!f)return this.createMarker(b,c,d,e)}},m.prototype.createMarker=function(a,b,c,d){return null==b&&(b=void 0),null==c&&(c=!1),null==d&&(d=!0),this.maybeSetScopeValue("options",a,b,this.optionsKey,this.evalModelHandle,c,this.setOptions,d),this.firstTime=!1},m.prototype.maybeSetScopeValue=function(a,b,c,d,e,f,g,h){return null==g&&(g=void 0),null==h&&(h=!0),null!=g?g(this.scope,h):void 0},m.doDrawSelf&&doDraw&&m.gManager.draw(),m.prototype.isNotValid=function(a,b){var c,d;return null==b&&(b=!0),d=b?void 0===this.gObject:!1,c=this.trackModel?!1:a.$id!==this.scope.$id,c||d},m.prototype.setCoords=function(a,b){return null==b&&(b=!0),this.isNotValid(a)||null==this.gObject?void 0:this.renderGMarker(b,function(b){return function(){var c,d,e;return d=b.getProp("coords",a,b.model),c=b.getCoords(d),e=b.gObject.getPosition(),null==e||null==c||c.lng()!==e.lng()||c.lat()!==e.lat()?(b.gObject.setPosition(c),b.gObject.setVisible(b.validateCoords(d))):void 0}}(this))},m.prototype.setIcon=function(a,b){return null==b&&(b=!0),this.isNotValid(a)||null==this.gObject?void 0:this.renderGMarker(b,function(b){return function(){var c,d,e;return e=b.gObject.getIcon(),d=b.getProp("icon",a,b.model),e!==d?(b.gObject.setIcon(d),c=b.getProp("coords",a,b.model),b.gObject.setPosition(b.getCoords(c)),b.gObject.setVisible(b.validateCoords(c))):void 0}}(this))},m.prototype.setOptions=function(a,b){var c;if(null==b&&(b=!0),!this.isNotValid(a,!1)){if(this.renderGMarker(b,function(b){return function(){var c,d,e;return d=b.getProp("coords",a,b.model),e=b.getProp("icon",a,b.model),c=b.getProp("options",a,b.model),b.opts=b.createOptions(d,e,c),b.isLabel(b.gObject)!==b.isLabel(b.opts)&&null!=b.gObject&&(b.gManager.remove(b.gObject),b.gObject=void 0),null!=b.gObject&&b.gObject.setOptions(b.setLabelOptions(b.opts)),b.gObject||(b.isLabel(b.opts)?b.gObject=new MarkerWithLabel(b.setLabelOptions(b.opts)):b.opts.content?(b.gObject=new RichMarker(b.opts),b.gObject.getIcon=b.gObject.getContent,b.gObject.setIcon=b.gObject.setContent):b.gObject=new google.maps.Marker(b.opts),_.extend(b.gObject,{model:b.model})),b.externalListeners&&b.removeEvents(b.externalListeners),b.internalListeners&&b.removeEvents(b.internalListeners),b.externalListeners=b.setEvents(b.gObject,b.scope,b.model,["dragend"]),b.internalListeners=b.setEvents(b.gObject,{events:b.internalEvents(),$evalAsync:function(){}},b.model),null!=b.id?b.gObject.key=b.id:void 0}}(this)),this.gObject&&(this.gObject.getMap()||this.gManager.type!==k.type))this.deferred.resolve(this.gObject);else{if(!this.gObject)return this.deferred.reject("gObject is null");(null!=(c=this.gObject)?c.getMap():0)&&this.gManager.type===k.type||(f.debug("gObject has no map yet"),this.deferred.resolve(this.gObject))}return this.model[this.fitKey]?this.gManager.fit():void 0}},m.prototype.setLabelOptions=function(a){return a.labelAnchor&&(a.labelAnchor=this.getLabelPositionPoint(a.labelAnchor)),a},m.prototype.internalEvents=function(){return{dragend:function(a){return function(b,c,d,e){var f,g,h;return g=a.trackModel?a.scope.model:a.model,h=a.setCoordsFromEvent(a.modelOrKey(g,a.coordsKey),a.gObject.getPosition()),g=a.setVal(d,a.coordsKey,h),f=a.scope.events,null!=(null!=f?f.dragend:void 0)&&f.dragend(b,c,g,e),a.scope.$apply()}}(this),click:function(a){return function(b,c,d,e){var f;return f=a.getProp("click",a.scope,a.model),a.doClick&&null!=f?a.scope.$evalAsync(f(b,c,a.model,e)):void 0}}(this)}},m}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygonChildModel",["uiGmapBasePolyChildModel","uiGmapPolygonOptionsBuilder",function(b,c){var d,e,f;return f=function(a){return new google.maps.Polygon(a)},e=new b(c,f),d=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c}(e)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolylineChildModel",["uiGmapBasePolyChildModel","uiGmapPolylineOptionsBuilder",function(b,c){var d,e,f;return f=function(a){return new google.maps.Polyline(a)},e=b(c,f),d=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return a(c,b),c}(e)}])}.call(this),function(){var c=function(a,b){return function(){return a.apply(b,arguments)}},d=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},e={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.child").factory("uiGmapWindowChildModel",["uiGmapBaseObject","uiGmapGmapUtil","uiGmapLogger","$compile","$http","$templateCache","uiGmapChromeFixes","uiGmapEventsHelper",function(e,f,g,h,i,j,k,l){var m;return m=function(e){function m(a,b,d,e,f,h,i,j,k){var l;this.model=a,this.scope=b,this.opts=d,this.isIconVisibleOnClick=e,this.mapCtrl=f,this.markerScope=h,this.element=i,this.needToManualDestroy=null!=j?j:!1,this.markerIsVisibleAfterWindowClose=null!=k?k:!0,this.updateModel=c(this.updateModel,this),this.destroy=c(this.destroy,this),this.remove=c(this.remove,this),this.getLatestPosition=c(this.getLatestPosition,this),this.hideWindow=c(this.hideWindow,this),this.showWindow=c(this.showWindow,this),this.handleClick=c(this.handleClick,this),this.watchOptions=c(this.watchOptions,this),this.watchCoords=c(this.watchCoords,this),this.createGWin=c(this.createGWin,this),this.watchElement=c(this.watchElement,this),this.watchAndDoShow=c(this.watchAndDoShow,this),this.doShow=c(this.doShow,this),this.clonedModel=_.clone(this.model,!0),this.getGmarker=function(){var a,b;return null!=(null!=(a=this.markerScope)?a.getGMarker:void 0)&&null!=(b=this.markerScope)?b.getGMarker():void 0},this.listeners=[],this.createGWin(),l=this.getGmarker(),null!=l&&l.setClickable(!0),this.watchElement(),this.watchOptions(),this.watchCoords(),this.watchAndDoShow(),this.scope.$on("$destroy",function(a){return function(){return a.destroy()}}(this)),g.info(this)}return d(m,e),m.include(f),m.include(l),m.prototype.doShow=function(a){return this.scope.show===!0||a?this.showWindow():this.hideWindow()},m.prototype.watchAndDoShow=function(){return null!=this.model.show&&(this.scope.show=this.model.show),this.scope.$watch("show",this.doShow,!0),this.doShow()},m.prototype.watchElement=function(){return this.scope.$watch(function(a){return function(){var b,c;if(a.element||a.html)return a.html!==a.element.html()&&a.gObject?(null!=(b=a.opts)&&(b.content=void 0),c=a.gObject.isOpen(),a.remove(),a.createGWin(c)):void 0}}(this))},m.prototype.createGWin=function(b){var c,d,e,f,g;return null==b&&(b=!1),e=this.getGmarker(),d={},null!=this.opts&&(this.scope.coords&&(this.opts.position=this.getCoords(this.scope.coords)),d=this.opts),this.element&&(this.html=_.isObject(this.element)?this.element.html():this.element),c=this.scope.options?this.scope.options:d,this.opts=this.createWindowOptions(e,this.markerScope||this.scope,this.html,c),null!=this.opts?(this.gObject||(this.opts.boxClass&&a.InfoBox&&"function"==typeof a.InfoBox?this.gObject=new a.InfoBox(this.opts):this.gObject=new google.maps.InfoWindow(this.opts),this.listeners.push(google.maps.event.addListener(this.gObject,"domready",function(){return k.maybeRepaint(this.content)})),this.listeners.push(google.maps.event.addListener(this.gObject,"closeclick",function(a){return function(){return e&&(e.setAnimation(a.oldMarkerAnimation),a.markerIsVisibleAfterWindowClose&&_.delay(function(){return e.setVisible(!1),e.setVisible(a.markerIsVisibleAfterWindowClose)},250)),a.gObject.close(),a.model.show=!1,null!=a.scope.closeClick?a.scope.$evalAsync(a.scope.closeClick()):a.scope.$evalAsync()}}(this)))),this.gObject.setContent(this.opts.content),this.handleClick((null!=(f=this.scope)&&null!=(g=f.options)?g.forceClick:void 0)||b),this.doShow(this.gObject.isOpen())):void 0},m.prototype.watchCoords=function(){var a;return a=null!=this.markerScope?this.markerScope:this.scope,a.$watch("coords",function(a){return function(b,c){var d;if(b!==c){if(null==b)a.hideWindow();else if(!a.validateCoords(b))return void g.error("WindowChildMarker cannot render marker as scope.coords as no position on marker: "+JSON.stringify(a.model));if(d=a.getCoords(b),a.doShow(),a.gObject.setPosition(d),a.opts)return a.opts.position=d}}}(this),!0)},m.prototype.watchOptions=function(){return this.scope.$watch("options",function(a){return function(b,c){if(b!==c&&(a.opts=b,null!=a.gObject)){if(a.gObject.setOptions(a.opts),null!=a.opts.visible&&a.opts.visible)return a.showWindow();if(null!=a.opts.visible)return a.hideWindow()}}}(this),!0)},m.prototype.handleClick=function(a){var b,c;if(null!=this.gObject)return c=this.getGmarker(),b=function(a){return function(){return null==a.gObject&&a.createGWin(),a.showWindow(),null!=c?(a.initialMarkerVisibility=c.getVisible(),a.oldMarkerAnimation=c.getAnimation(),c.setVisible(a.isIconVisibleOnClick)):void 0}}(this),a&&b(),c?this.listeners=this.listeners.concat(this.setEvents(c,{events:{click:b}},this.model)):void 0},m.prototype.showWindow=function(){var a,c,d;return null!=this.gObject?(c=function(a){return function(){var b,c,d;if(!a.gObject.isOpen()){if(c=a.getGmarker(),null!=a.gObject&&null!=a.gObject.getPosition&&(d=a.gObject.getPosition()),c&&(d=c.getPosition()),!d)return;if(a.gObject.open(a.mapCtrl,c),b=a.gObject.isOpen(),a.model.show!==b)return a.model.show=b}}}(this),this.scope.templateUrl?i.get(this.scope.templateUrl,{cache:j}).then(function(a){return function(d){var e,f;return f=a.scope.$new(),b.isDefined(a.scope.templateParameter)&&(f.parameter=a.scope.templateParameter),e=h(d.data)(f),a.gObject.setContent(e[0]),c()}}(this)):this.scope.template?(d=this.scope.$new(),b.isDefined(this.scope.templateParameter)&&(d.parameter=this.scope.templateParameter),a=h(this.scope.template)(d),this.gObject.setContent(a[0]),c()):c()):void 0},m.prototype.hideWindow=function(){return null!=this.gObject&&this.gObject.isOpen()?this.gObject.close():void 0},m.prototype.getLatestPosition=function(a){var b;return b=this.getGmarker(),null==this.gObject||null==b||a?a?this.gObject.setPosition(a):void 0:this.gObject.setPosition(b.getPosition())},m.prototype.remove=function(){return this.hideWindow(),this.removeEvents(this.listeners),this.listeners.length=0,delete this.gObject,delete this.opts},m.prototype.destroy=function(a){var b;return null==a&&(a=!1),this.remove(),null==this.scope||(null!=(b=this.scope)?b.$$destroyed:void 0)||!this.needToManualDestroy&&!a?void 0:this.scope.$destroy()},m.prototype.updateModel=function(a){return this.clonedModel=_.clone(a,!0),_.extend(this.model,this.clonedModel)},m}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapBasePolysParentModel",["$timeout","uiGmapLogger","uiGmapModelKey","uiGmapModelsWatcher","uiGmapPropMap","uiGmap_async","uiGmapPromise","uiGmapFitHelper",function(d,e,f,g,h,i,j,k){return function(d,l,m){var n;return n=function(f){function n(b,c,f,g,i){this.element=c,this.attrs=f,this.gMap=g,this.defaults=i,this.maybeFit=a(this.maybeFit,this),this.createChild=a(this.createChild,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),this.watchDestroy=a(this.watchDestroy,this),this.onDestroy=a(this.onDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),n.__super__.constructor.call(this,b),this["interface"]=d,this.$log=e,this.plurals=new h,_.each(d.scopeKeys,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.models=void 0,this.firstTime=!0,this.$log.info(this),this.createChildScopes()}return c(n,f),n.include(g),n.prototype.watchModels=function(a){return a.$watch("models",function(b){return function(c,d){return c!==d?b.doINeedToWipe(c)||a.doRebuildAll?b.rebuildAll(a,!0,!0):b.createChildScopes(!1):void 0;
}}(this),!0)},n.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},n.prototype.rebuildAll=function(a,b,c){return this.onDestroy(c).then(function(a){return function(){return b?a.createChildScopes():void 0}}(this))},n.prototype.onDestroy=function(a){return n.__super__.onDestroy.call(this,this.scope),i.promiseLock(this,j.promiseTypes["delete"],void 0,void 0,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy(!0)},i.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){var b;return null!=(b=a.plurals)?b.removeAll():void 0})}}(this))},n.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.rebuildAll(a,!1,!0)}}(this))},n.prototype.createChildScopes=function(a){return null==a&&(a=!0),b.isUndefined(this.scope.models)?void this.$log.error("No models to create "+m+"s from! I Need direct models!"):null!=this.gMap&&null!=this.scope.models?(this.watchIdKey(this.scope),a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1)):void 0},n.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},n.prototype.createAllNew=function(a,b){var c;return null==b&&(b=!1),this.models=a.models,this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.didQueueInitPromise(this,a)?void 0:(c=null,i.promiseLock(this,j.promiseTypes.create,"createAllNew",function(a){return c=a},function(b){return function(){return i.map(a.models,function(a){var d;return d=b.createChild(a,b.gMap),c&&(e.debug("createNew should fall through safely"),d.isEnabled=!1),d.pathPoints.getArray()},i.chunkSizeFrom(a.chunk)).then(function(a){return b.maybeFit(a),b.firstTime=!1})}}(this)))},n.prototype.pieceMeal=function(a,b){var c,d;return null==b&&(b=!0),a.$$destroyed?void 0:(c=null,d=null,this.models=a.models,null!=a&&this.modelsLength()&&this.plurals.length?i.promiseLock(this,j.promiseTypes.update,"pieceMeal",function(a){return c=a},function(b){return function(){return j.promise(function(){return b.figureOutState(b.idKey,a,b.plurals,b.modelKeyComparison)}).then(function(e){return d=e,d.updates.length&&i.each(d.updates,function(a){return _.extend(a.child.scope,a.model),a.child.model=a.model}),i.each(d.removals,function(a){return null!=a?(a.destroy(),b.plurals.remove(a.model[b.idKey]),c):void 0},i.chunkSizeFrom(a.chunk))}).then(function(){return i.each(d.adds,function(a){return c&&e.debug("pieceMeal should fall through safely"),b.createChild(a,b.gMap),c},i.chunkSizeFrom(a.chunk)).then(function(){return b.maybeFit()})})}}(this)):(this.inProgress=!1,this.rebuildAll(this.scope,!0,!0)))},n.prototype.createChild=function(a,b){var c,e;return e=this.scope.$new(!1),this.setChildScope(d.scopeKeys,e,a),e.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(e,b):void 0}}(this),!0),e["static"]=this.scope["static"],c=new l(e,this.attrs,b,this.defaults,a,function(a){return function(){return a.maybeFit()}}(this)),null==a[this.idKey]?void this.$log.error(m+" model has no id to assign a child to.\nThis is required for performance. Please assign id,\nor redirect id to a different key."):(this.plurals.put(a[this.idKey],c),c)},n.prototype.maybeFit=function(a){return null==a&&(a=this.plurals.map(function(a){return a.pathPoints})),this.scope.fit?(a=_.flatten(a),k.fit(a,this.gMap)):void 0},n}(f)}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapCircleParentModel",["uiGmapLogger","$timeout","uiGmapGmapUtil","uiGmapEventsHelper","uiGmapCircleOptionsBuilder",function(c,d,e,f,g){var h,i;return i=function(a,b){return a.settingFromDirective=!0,b(),d(function(){return a.settingFromDirective=!1})},h=function(d){function g(a,d,f,g,h){var j,k,l;this.attrs=f,this.map=g,this.DEFAULTS=h,this.scope=a,l=null,j=function(a){return function(){return l=null,null!=a.listeners?(a.removeEvents(a.listeners),a.listeners=void 0):void 0}}(this),k=new google.maps.Circle(this.buildOpts(e.getCoords(a.center),a.radius)),this.setMyOptions=function(b){return function(c,d){return a.settingFromDirective?void 0:_.isEqual(c,d)?void 0:k.setOptions(b.buildOpts(e.getCoords(a.center),a.radius))}}(this),this.props=this.props.concat([{prop:"center",isColl:!0},{prop:"fill",isColl:!0},"radius","zIndex"]),this.watchProps(),null!=this.scope.control&&(this.scope.control.getCircle=function(){return k}),j(),this.listeners=this.setEvents(k,a,a,["radius_changed"])||[],this.listeners.push(google.maps.event.addListener(k,"radius_changed",function(){var c,d;return c=k.getRadius(),c!==l?(l=c,d=function(){return i(a,function(){var b,d;return c!==a.radius&&(a.radius=c),(null!=(b=a.events)?b.radius_changed:void 0)&&_.isFunction(null!=(d=a.events)?d.radius_changed:void 0)?a.events.radius_changed(k,"radius_changed",a,arguments):void 0})},b.mock?d():a.$evalAsync(function(){return d()})):void 0})),this.listeners.push(google.maps.event.addListener(k,"center_changed",function(){return a.$evalAsync(function(){return i(a,function(){return b.isDefined(a.center.type)?(a.center.coordinates[1]=k.getCenter().lat(),a.center.coordinates[0]=k.getCenter().lng()):(a.center.latitude=k.getCenter().lat(),a.center.longitude=k.getCenter().lng())})})})),a.$on("$destroy",function(a){return function(){return j(),k.setMap(null)}}(this)),c.info(this)}return a(g,d),g.include(e),g.include(f),g}(g)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapDrawingManagerParentModel",["uiGmapLogger","$timeout","uiGmapBaseObject","uiGmapEventsHelper",function(b,c,d,e){var f;return f=function(b){function c(a,b,c,d){var e,f;this.scope=a,this.attrs=c,this.map=d,e=new google.maps.drawing.DrawingManager(this.scope.options),e.setMap(this.map),f=void 0,null!=this.scope.control&&(this.scope.control.getDrawingManager=function(){return e}),!this.scope["static"]&&this.scope.options&&this.scope.$watch("options",function(a){return null!=e?e.setOptions(a):void 0},!0),null!=this.scope.events&&(f=this.setEvents(e,this.scope,this.scope),this.scope.$watch("events",function(a){return function(b,c){return _.isEqual(b,c)?void 0:(null!=f&&a.removeEvents(f),f=a.setEvents(e,a.scope,a.scope))}}(this))),this.scope.$on("$destroy",function(a){return function(){return null!=f&&a.removeEvents(f),e.setMap(null),e=null}}(this))}return a(c,b),c.include(e),c}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIMarkerParentModel",["uiGmapModelKey","uiGmapLogger",function(d,e){var f;return f=function(d){function f(c,d,g,h){if(this.scope=c,this.element=d,this.attrs=g,this.map=h,this.onWatch=a(this.onWatch,this),this.watch=a(this.watch,this),this.validateScope=a(this.validateScope,this),f.__super__.constructor.call(this,this.scope),this.$log=e,!this.validateScope(this.scope))throw new String("Unable to construct IMarkerParentModel due to invalid scope");this.doClick=b.isDefined(this.attrs.click),null!=this.scope.options&&(this.DEFAULTS=this.scope.options),this.watch("coords",this.scope),this.watch("icon",this.scope),this.watch("options",this.scope),this.scope.$on("$destroy",function(a){return function(){return a.onDestroy(a.scope)}}(this))}return c(f,d),f.prototype.DEFAULTS={},f.prototype.validateScope=function(a){var b;return null==a?(this.$log.error(this.constructor.name+": invalid scope used"),!1):(b=null!=a.coords,b?b:(this.$log.error(this.constructor.name+": no valid coords attribute found"),!1))},f.prototype.watch=function(a,b,c){return null==c&&(c=!0),b.$watch(a,function(c){return function(d,e){return _.isEqual(d,e)?void 0:c.onWatch(a,b,d,e)}}(this),c)},f.prototype.onWatch=function(a,b,c,d){},f}(d)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIWindowParentModel",["uiGmapModelKey","uiGmapGmapUtil","uiGmapLogger",function(b,c,d){var e;return e=function(b){function e(a,b,c,f,g,h,i,j){e.__super__.constructor.call(this,a),this.$log=d,this.$timeout=g,this.$compile=h,this.$http=i,this.$templateCache=j,this.DEFAULTS={},null!=a.options&&(this.DEFAULTS=a.options)}return a(e,b),e.include(c),e.prototype.getItem=function(a,b,c){return"models"===b?a[b][c]:a[b].get(c)},e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapLayerParentModel",["uiGmapBaseObject","uiGmapLogger","$timeout",function(d,e,f){var g;return g=function(d){function f(c,d,f,g,h,i){return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.onLayerCreated=null!=h?h:void 0,this.$log=null!=i?i:e,this.createGoogleLayer=a(this.createGoogleLayer,this),null==this.attrs.type?void this.$log.info("type attribute for the layer directive is mandatory. Layer creation aborted!!"):(this.createGoogleLayer(),this.doShow=!0,b.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.gObject.setMap(this.gMap),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.gObject.setMap(a.gMap):a.gObject.setMap(null)):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return b!==c&&a.doShow?a.gObject.setOptions(b):void 0}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.gObject.setMap(null)}}(this)))}return c(f,d),f.prototype.createGoogleLayer=function(){var a;return null==this.attrs.options?this.gObject=void 0===this.attrs.namespace?new google.maps[this.attrs.type]:new google.maps[this.attrs.namespace][this.attrs.type]:this.gObject=void 0===this.attrs.namespace?new google.maps[this.attrs.type](this.scope.options):new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options),null!=this.gObject&&this.doShow&&this.gObject.setMap(this.gMap),null!=this.gObject&&null!=this.onLayerCreated&&"function"==typeof(a=this.onLayerCreated(this.scope,this.gObject))?a(this.gObject):void 0},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMapTypeParentModel",["uiGmapBaseObject","uiGmapLogger",function(d,e){var f;return f=function(d){function f(c,d,f,g,h){return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.$log=null!=h?h:e,this.hideOverlay=a(this.hideOverlay,this),this.showOverlay=a(this.showOverlay,this),this.refreshMapType=a(this.refreshMapType,this),this.createMapType=a(this.createMapType,this),null==this.attrs.options?void this.$log.info("options attribute for the map-type directive is mandatory. Map type creation aborted!!"):(this.id=this.gMap.overlayMapTypesCount=this.gMap.overlayMapTypesCount+1||0,this.doShow=!0,this.createMapType(),b.isDefined(this.attrs.show)&&(this.doShow=this.scope.show),this.doShow&&null!=this.gMap&&this.showOverlay(),this.scope.$watch("show",function(a){return function(b,c){return b!==c?(a.doShow=b,b?a.showOverlay():a.hideOverlay()):void 0}}(this),!0),this.scope.$watch("options",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),b.isDefined(this.attrs.refresh)&&this.scope.$watch("refresh",function(a){return function(b,c){return _.isEqual(b,c)?void 0:a.refreshMapType()}}(this),!0),void this.scope.$on("$destroy",function(a){return function(){return a.hideOverlay(),a.mapType=null}}(this)))}return c(f,d),f.prototype.createMapType=function(){if(null!=this.scope.options.getTile)this.mapType=this.scope.options;else{if(null==this.scope.options.getTileUrl)return void this.$log.info("options should provide either getTile or getTileUrl methods. Map type creation aborted!!");this.mapType=new google.maps.ImageMapType(this.scope.options)}return this.attrs.id&&this.scope.id&&(this.gMap.mapTypes.set(this.scope.id,this.mapType),b.isDefined(this.attrs.show)||(this.doShow=!1)),this.mapType.layerId=this.id},f.prototype.refreshMapType=function(){return this.hideOverlay(),this.mapType=null,this.createMapType(),this.doShow&&null!=this.gMap?this.showOverlay():void 0},f.prototype.showOverlay=function(){return this.gMap.overlayMapTypes.push(this.mapType)},f.prototype.hideOverlay=function(){var a;return a=!1,this.gMap.overlayMapTypes.forEach(function(b){return function(c,d){a||c.layerId!==b.id||(a=!0,b.gMap.overlayMapTypes.removeAt(d))}}(this))},f}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMarkersParentModel",["uiGmapIMarkerParentModel","uiGmapModelsWatcher","uiGmapPropMap","uiGmapMarkerChildModel","uiGmap_async","uiGmapClustererMarkerManager","uiGmapMarkerManager","$timeout","uiGmapIMarker","uiGmapPromise","uiGmapGmapUtil","uiGmapLogger","uiGmapSpiderfierMarkerManager",function(d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r;return r=function(a,b){return b.plurals=new f,b.scope.plurals=b.plurals,b},q=function(d){function k(b,c,d,e){this.maybeExecMappedEvent=a(this.maybeExecMappedEvent,this),this.onDestroy=a(this.onDestroy,this),this.newChildMarker=a(this.newChildMarker,this),this.pieceMeal=a(this.pieceMeal,this),this.rebuildAll=a(this.rebuildAll,this),this.createAllNew=a(this.createAllNew,this),this.bindToTypeEvents=a(this.bindToTypeEvents,this),this.createChildScopes=a(this.createChildScopes,this),this.validateScope=a(this.validateScope,this),this.onWatch=a(this.onWatch,this);var g;k.__super__.constructor.call(this,b,c,d,e),this["interface"]=l,g=this,r(new f,this),this.scope.pluralsUpdate={updateCtr:0},this.$log.info(this),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,this.setIdKey(this.scope),this.scope.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.modelsLength()||(this.modelsRendered=!1),this.scope.$watch("models",function(a){return function(b,c){if(!_.isEqual(b,c)||!a.modelsRendered){if(0===b.length&&0===c.length)return;return a.modelsRendered=!0,a.onWatch("models",a.scope,b,c)}}}(this),!this.isTrue(d.modelsbyref)),this.watch("doCluster",this.scope),this.watch("type",this.scope),this.watch("clusterOptions",this.scope),this.watch("clusterEvents",this.scope),this.watch("typeOptions",this.scope),this.watch("typeEvents",this.scope),this.watch("fit",this.scope),this.watch("idKey",this.scope),this.gManager=void 0,this.createAllNew(this.scope)}return c(k,d),k.include(n),k.include(e),k.prototype.onWatch=function(a,b,c,d){return"idKey"===a&&c!==d&&(this.idKey=c),this.doRebuildAll||"doCluster"===a||"type"===a?this.rebuildAll(b):this.pieceMeal(b)},k.prototype.validateScope=function(a){var c;return c=b.isUndefined(a.models)||void 0===a.models,c&&this.$log.error(this.constructor.name+": no valid models attribute found"),k.__super__.validateScope.call(this,a)||c},k.prototype.createChildScopes=function(a){return null!=this.gMap&&null!=this.scope.models?a?this.createAllNew(this.scope,!1):this.pieceMeal(this.scope,!1):void 0},k.prototype.bindToTypeEvents=function(a,c){var d,e;return null==c&&(c=["click","mouseout","mouseover"]),e=this,this.origTypeEvents?b.extend(a,this.origTypeEvents):(this.origTypeEvents={},_.each(c,function(b){return function(c){return b.origTypeEvents[c]=null!=a?a[c]:void 0}}(this))),d={},_.each(c,function(a){return function(a){return d[a]=function(b){return e.maybeExecMappedEvent(b,a)}}}(this)),b.extend(a,d)},k.prototype.createAllNew=function(a){var b,c,d,e;return null!=this.gManager&&(this.gManager instanceof p&&(b=this.gManager.isSpiderfied()),this.gManager.clear(),delete this.gManager),d=a.typeEvents||a.clusterEvents,e=a.typeOptions||a.clusterOptions,a.doCluster||"cluster"===a.type?(null!=d&&this.bindToTypeEvents(d),this.gManager=new i(this.map,void 0,e,d)):"spider"===a.type?(null!=d&&this.bindToTypeEvents(d,["spiderfy","unspiderfy"]),this.gManager=new p(this.map,void 0,e,d,this.scope),b&&this.gManager.spiderfy()):this.gManager=new j(this.map),this.didQueueInitPromise(this,a)?void 0:(c=null,h.promiseLock(this,m.promiseTypes.create,"createAllNew",function(a){return c=a},function(b){return function(){return h.each(a.models,function(d){return b.newChildMarker(d,a),c},h.chunkSizeFrom(a.chunk)).then(function(){return b.modelsRendered=!0,a.fit&&b.gManager.fit(),b.gManager.draw(),b.scope.pluralsUpdate.updateCtr+=1},h.chunkSizeFrom(a.chunk))}}(this)))},k.prototype.rebuildAll=function(a){var b;if(a.doRebuild||void 0===a.doRebuild)return(null!=(b=this.scope.plurals)?b.length:void 0)?this.onDestroy(a).then(function(b){return function(){return b.createAllNew(a)}}(this)):this.createAllNew(a)},k.prototype.pieceMeal=function(a){var b,c;if(!a.$$destroyed)return b=null,c=null,this.modelsLength()&&this.scope.plurals.length?h.promiseLock(this,m.promiseTypes.update,"pieceMeal",function(a){return b=a},function(d){return function(){return m.promise(function(){return d.figureOutState(d.idKey,a,d.scope.plurals,d.modelKeyComparison)}).then(function(e){return c=e,h.each(c.removals,function(a){return null!=a?(null!=a.destroy&&a.destroy(),d.scope.plurals.remove(a.id),b):void 0},h.chunkSizeFrom(a.chunk))}).then(function(){return h.each(c.adds,function(c){return d.newChildMarker(c,a),b},h.chunkSizeFrom(a.chunk))}).then(function(){return h.each(c.updates,function(a){return d.updateChild(a.child,a.model),b},h.chunkSizeFrom(a.chunk))}).then(function(){return(c.adds.length>0||c.removals.length>0||c.updates.length>0)&&(a.plurals=d.scope.plurals,a.fit&&d.gManager.fit(),d.gManager.draw()),d.scope.pluralsUpdate.updateCtr+=1})}}(this)):(this.inProgress=!1,this.rebuildAll(a))},k.prototype.newChildMarker=function(a,b){var c,d,e,f;return null==a[this.idKey]?void this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.$log.info("child",c,"markers",this.scope.markerModels),d=b.$new(!1),d.events=b.events,f={},l.scopeKeys.forEach(function(a){return f[a]=b[a]}),c=new g(d,a,f,this.map,this.DEFAULTS,this.doClick,this.gManager,e=!1),this.scope.plurals.put(a[this.idKey],c),c)},k.prototype.onDestroy=function(a){return k.__super__.onDestroy.call(this,a),h.promiseLock(this,m.promiseTypes["delete"],void 0,void 0,function(a){return function(){return h.each(a.scope.plurals.values(),function(a){return null!=a?a.destroy(!1):void 0},h.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){return null!=a.gManager&&a.gManager.destroy(),a.plurals.removeAll(),a.plurals!==a.scope.plurals&&console.error("plurals out of sync for MarkersParentModel"),a.scope.pluralsUpdate.updateCtr+=1})}}(this))},k.prototype.maybeExecMappedEvent=function(a,b){var c,d;if(!this.scope.$$destroyed)return d=this.scope.typeEvents||this.scope.clusterEvents,_.isFunction(null!=d?d[b]:void 0)&&(c=this.mapTypeToPlurals(a),this.origTypeEvents[b])?this.origTypeEvents[b](c.group,c.mapped):void 0},k.prototype.mapTypeToPlurals=function(a){var b,c,d;return _.isArray(a)?b=a:_.isFunction(a.getMarkers)&&(b=a.getMarkers()),null==b?void o.error("Unable to map event as we cannot find the array group to map"):(c=(null!=(d=this.scope.plurals.values())?d.length:void 0)?b.map(function(a){return function(b){return a.scope.plurals.get(b.key).model}}(this)):[],{cluster:a,mapped:c,group:a})},k.prototype.getItem=function(a,b,c){return"models"===b?a[b][c]:a[b].get(c)},k}(d)}])}.call(this),function(){["Polygon","Polyline"].forEach(function(a){return b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmap"+a+"sParentModel",["uiGmapBasePolysParentModel","uiGmap"+a+"ChildModel","uiGmapI"+a,function(b,c,d){return b(d,c,a)}])})}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapRectangleParentModel",["uiGmapLogger","uiGmapGmapUtil","uiGmapEventsHelper","uiGmapRectangleOptionsBuilder",function(b,c,d,e){var f;return f=function(e){function f(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;this.scope=a,this.attrs=d,this.map=e,this.DEFAULTS=f,g=void 0,j=!1,o=[],n=void 0,k=function(a){return function(){return a.isTrue(a.attrs.fit)?a.fitMapBounds(a.map,g):void 0}}(this),i=function(a){return function(){var c,d,e;return null!=a.scope.bounds&&null!=(null!=(c=a.scope.bounds)?c.sw:void 0)&&null!=(null!=(d=a.scope.bounds)?d.ne:void 0)&&a.validateBoundPoints(a.scope.bounds)?(g=a.convertBoundPoints(a.scope.bounds),b.info("new new bounds created: "+JSON.stringify(g))):null!=a.scope.bounds.getNorthEast&&null!=a.scope.bounds.getSouthWest?g=a.scope.bounds:null!=a.scope.bounds?b.error("Invalid bounds for newValue: "+JSON.stringify(null!=(e=a.scope)?e.bounds:void 0)):void 0}}(this),i(),l=new google.maps.Rectangle(this.buildOpts(g)),b.info("gObject (rectangle) created: "+l),p=!1,q=function(a){return function(){var b,c,d;return b=l.getBounds(),c=b.getNorthEast(),d=b.getSouthWest(),p?void 0:a.scope.$evalAsync(function(a){return null!=a.bounds&&null!=a.bounds.sw&&null!=a.bounds.ne&&(a.bounds.ne={latitude:c.lat(),longitude:c.lng()},a.bounds.sw={latitude:d.lat(),longitude:d.lng()}),null!=a.bounds.getNorthEast&&null!=a.bounds.getSouthWest?a.bounds=b:void 0})}}(this),m=function(a){return function(){return k(),a.removeEvents(o),o.push(google.maps.event.addListener(l,"dragstart",function(){return j=!0})),o.push(google.maps.event.addListener(l,"dragend",function(){return j=!1,q()})),o.push(google.maps.event.addListener(l,"bounds_changed",function(){return j?void 0:q()}))}}(this),h=function(a){return function(){return a.removeEvents(o),null!=n&&a.removeEvents(n),l.setMap(null)}}(this),null!=g&&m(),this.scope.$watch("bounds",function(a,b){var c;if(!(_.isEqual(a,b)&&null!=g||j))return p=!0,null==a?void h():(null==g?c=!0:k(),i(),l.setBounds(g),p=!1,c&&null!=g?m():void 0)},!0),this.setMyOptions=function(a){return function(b,c){return _.isEqual(b,c)||null==g||null==b?void 0:l.setOptions(a.buildOpts(g))}}(this),this.props.push("bounds"),this.watchProps(this.props),null!=this.attrs.events&&(n=this.setEvents(l,this.scope,this.scope),this.scope.$watch("events",function(a){return function(b,c){return _.isEqual(b,c)?void 0:(null!=n&&a.removeEvents(n),n=a.setEvents(l,a.scope,a.scope))}}(this))),this.scope.$on("$destroy",function(a){return function(){return h()}}(this)),b.info(this)}return a(f,e),f.include(c),f.include(d),f}(e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapSearchBoxParentModel",["uiGmapBaseObject","uiGmapLogger","uiGmapEventsHelper","$timeout","$http","$templateCache",function(d,e,f,g,h,i){var j;return j=function(d){function g(c,d,f,g,h,i,j){var k;return this.scope=c,this.element=d,this.attrs=f,this.gMap=g,this.ctrlPosition=h,this.template=i,this.$log=null!=j?j:e,this.setVisibility=a(this.setVisibility,this),this.getBounds=a(this.getBounds,this),this.setBounds=a(this.setBounds,this),this.createSearchBox=a(this.createSearchBox,this),this.addToParentDiv=a(this.addToParentDiv,this),this.addAsMapControl=a(this.addAsMapControl,this),this.init=a(this.init,this),null==this.attrs.template?void this.$log.error("template attribute for the search-box directive is mandatory. Places Search Box creation aborted!!"):(b.isUndefined(this.scope.options)&&(this.scope.options={},this.scope.options.visible=!0),b.isUndefined(this.scope.options.visible)&&(this.scope.options.visible=!0),b.isUndefined(this.scope.options.autocomplete)&&(this.scope.options.autocomplete=!1),this.visible=this.scope.options.visible,this.autocomplete=this.scope.options.autocomplete,k=b.element("<div></div>"),k.append(this.template),this.input=k.find("input")[0],void this.init())}return c(g,d),g.include(f),g.prototype.init=function(){return this.createSearchBox(),this.scope.$watch("options",function(a){return function(c,d){return b.isObject(c)&&(null!=c.bounds&&a.setBounds(c.bounds),null!=c.visible&&a.visible!==c.visible)?a.setVisibility(c.visible):void 0}}(this),!0),null!=this.attrs.parentdiv?this.addToParentDiv():this.addAsMapControl(),this.visible||this.setVisibility(this.visible),this.autocomplete?this.listener=google.maps.event.addListener(this.gObject,"place_changed",function(a){return function(){return a.places=a.gObject.getPlace()}}(this)):this.listener=google.maps.event.addListener(this.gObject,"places_changed",function(a){return function(){return a.places=a.gObject.getPlaces()}}(this)),this.listeners=this.setEvents(this.gObject,this.scope,this.scope),this.$log.info(this),this.scope.$on("$destroy",function(a){return function(){return a.gObject=null}}(this))},g.prototype.addAsMapControl=function(){return this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input)},g.prototype.addToParentDiv=function(){return this.parentDiv=b.element(document.getElementById(this.scope.parentdiv)),this.parentDiv.append(this.input)},g.prototype.createSearchBox=function(){return this.autocomplete?this.gObject=new google.maps.places.Autocomplete(this.input,this.scope.options):this.gObject=new google.maps.places.SearchBox(this.input,this.scope.options)},g.prototype.setBounds=function(a){if(b.isUndefined(a.isEmpty))this.$log.error("Error: SearchBoxParentModel setBounds. Bounds not an instance of LatLngBounds.");else if(a.isEmpty()===!1&&null!=this.gObject)return this.gObject.setBounds(a)},g.prototype.getBounds=function(){return this.gObject.getBounds()},g.prototype.setVisibility=function(a){return null!=this.attrs.parentdiv?a===!1?this.parentDiv.addClass("ng-hide"):this.parentDiv.removeClass("ng-hide"):a===!1?this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].clear():this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input),this.visible=a},g}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapWindowsParentModel",["uiGmapIWindowParentModel","uiGmapModelsWatcher","uiGmapPropMap","uiGmapWindowChildModel","uiGmapLinked","uiGmap_async","uiGmapLogger","$timeout","$compile","$http","$templateCache","$interpolate","uiGmapPromise","uiGmapIWindow","uiGmapGmapUtil",function(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s;return s=function(d){function s(b,c,d,e,g,i){this.gMap=g,this.markersScope=i,this.modelKeyComparison=a(this.modelKeyComparison,this),this.interpolateContent=a(this.interpolateContent,this),this.setChildScope=a(this.setChildScope,this),this.createWindow=a(this.createWindow,this),this.setContentKeys=a(this.setContentKeys,this),this.pieceMeal=a(this.pieceMeal,this),this.createAllNew=a(this.createAllNew,this),this.watchIdKey=a(this.watchIdKey,this),this.createChildScopes=a(this.createChildScopes,this),this.watchOurScope=a(this.watchOurScope,this),this.watchDestroy=a(this.watchDestroy,this),this.onDestroy=a(this.onDestroy,this),this.rebuildAll=a(this.rebuildAll,this),this.doINeedToWipe=a(this.doINeedToWipe,this),this.watchModels=a(this.watchModels,this),this.go=a(this.go,this),s.__super__.constructor.call(this,b,c,d,e,k,l,m,n),this["interface"]=q,this.plurals=new f,_.each(q.scopeKeys,function(a){return function(b){return a[b+"Key"]=void 0}}(this)),this.linked=new h(b,c,d,e),this.contentKeys=void 0,this.isIconVisibleOnClick=void 0,this.firstTime=!0,this.firstWatchModels=!0,this.$log.info(self),this.parentScope=void 0,this.go(b)}return c(s,d),s.include(e),s.prototype.go=function(a){return this.watchOurScope(a),this.doRebuildAll=null!=this.scope.doRebuildAll?this.scope.doRebuildAll:!1,a.$watch("doRebuildAll",function(a){return function(b,c){return b!==c?a.doRebuildAll=b:void 0}}(this)),this.createChildScopes()},s.prototype.watchModels=function(a){var b;return b=null!=this.markersScope?"pluralsUpdate":"models",a.$watch(b,function(b){return function(c,d){var e;return!_.isEqual(c,d)||b.firstWatchModels?(b.firstWatchModels=!1,b.doRebuildAll||b.doINeedToWipe(a.models)?b.rebuildAll(a,!0,!0):(e=0===b.plurals.length,null!=b.existingPieces?_.last(b.existingPieces._content).then(function(){return b.createChildScopes(e)}):b.createChildScopes(e))):void 0}}(this),!0)},s.prototype.doINeedToWipe=function(a){var b;return b=null!=a?0===a.length:!0,this.plurals.length>0&&b},s.prototype.rebuildAll=function(a,b,c){return this.onDestroy(c).then(function(a){return function(){return b?a.createChildScopes():void 0}}(this))},s.prototype.onDestroy=function(a){return s.__super__.onDestroy.call(this,this.scope),i.promiseLock(this,p.promiseTypes["delete"],void 0,void 0,function(a){return function(){return i.each(a.plurals.values(),function(a){return a.destroy()},i.chunkSizeFrom(a.scope.cleanchunk,!1)).then(function(){var b;return null!=(b=a.plurals)?b.removeAll():void 0})}}(this))},s.prototype.watchDestroy=function(a){return a.$on("$destroy",function(b){return function(){return b.firstWatchModels=!0,b.firstTime=!0,b.rebuildAll(a,!1,!0)}}(this))},s.prototype.watchOurScope=function(a){return _.each(q.scopeKeys,function(b){return function(c){var d;return d=c+"Key",b[d]="function"==typeof a[c]?a[c]():a[c]}}(this))},s.prototype.createChildScopes=function(a){var c,d,e;return null==a&&(a=!0),this.isIconVisibleOnClick=!0,b.isDefined(this.linked.attrs.isiconvisibleonclick)&&(this.isIconVisibleOnClick=this.linked.scope.isIconVisibleOnClick),c=b.isUndefined(this.linked.scope.models),!c||void 0!==this.markersScope&&void 0!==(null!=(d=this.markersScope)?d.plurals:void 0)&&void 0!==(null!=(e=this.markersScope)?e.models:void 0)?null!=this.gMap?null!=this.linked.scope.models?(this.watchIdKey(this.linked.scope),a?this.createAllNew(this.linked.scope,!1):this.pieceMeal(this.linked.scope,!1)):(this.parentScope=this.markersScope,this.watchIdKey(this.parentScope),a?this.createAllNew(this.markersScope,!0,"plurals",!1):this.pieceMeal(this.markersScope,!0,"plurals",!1)):void 0:void this.$log.error("No models to create windows from! Need direct models or models derived from markers!")},s.prototype.watchIdKey=function(a){return this.setIdKey(a),a.$watch("idKey",function(b){return function(c,d){return c!==d&&null==c?(b.idKey=c,b.rebuildAll(a,!0,!0)):void 0}}(this))},s.prototype.createAllNew=function(a,b,c,d){
var e;return null==c&&(c="models"),null==d&&(d=!1),this.firstTime&&(this.watchModels(a),this.watchDestroy(a)),this.setContentKeys(a.models),this.didQueueInitPromise(this,a)?void 0:(e=null,i.promiseLock(this,p.promiseTypes.create,"createAllNew",function(a){return e=a},function(d){return function(){return i.each(a.models,function(f){var g,h;return g=b&&null!=(h=d.getItem(a,c,f[d.idKey]))?h.gObject:void 0,e||(!g&&d.markersScope&&j.error("Unable to get gMarker from markersScope!"),d.createWindow(f,g,d.gMap)),e},i.chunkSizeFrom(a.chunk)).then(function(){return d.firstTime=!1})}}(this)))},s.prototype.pieceMeal=function(a,b,c,d){var e,f;return null==c&&(c="models"),null==d&&(d=!0),a.$$destroyed?void 0:(e=null,f=null,null!=a&&this.modelsLength()&&this.plurals.length?i.promiseLock(this,p.promiseTypes.update,"pieceMeal",function(a){return e=a},function(b){return function(){return p.promise(function(){return b.figureOutState(b.idKey,a,b.plurals,b.modelKeyComparison)}).then(function(c){return f=c,i.each(f.removals,function(a){return null!=a?(b.plurals.remove(a.id),null!=a.destroy&&a.destroy(!0),e):void 0},i.chunkSizeFrom(a.chunk))}).then(function(){return i.each(f.adds,function(d){var f,g;if(f=null!=(g=b.getItem(a,c,d[b.idKey]))?g.gObject:void 0,!f)throw"Gmarker undefined";return b.createWindow(d,f,b.gMap),e})}).then(function(){return i.each(f.updates,function(a){return b.updateChild(a.child,a.model),e},i.chunkSizeFrom(a.chunk))})}}(this)):(j.debug("pieceMeal: rebuildAll"),this.rebuildAll(this.scope,!0,!0)))},s.prototype.setContentKeys=function(a){return this.modelsLength(a)?this.contentKeys=Object.keys(a[0]):void 0},s.prototype.createWindow=function(a,b,c){var d,e,f,h,i,j;return e=this.linked.scope.$new(!1),this.setChildScope(e,a),e.$watch("model",function(a){return function(b,c){return b!==c?a.setChildScope(e,b):void 0}}(this),!0),f={html:function(b){return function(){return b.interpolateContent(b.linked.element.html(),a)}}(this)},this.DEFAULTS=this.scopeOrModelVal(this.optionsKey,this.scope,a)||{},h=this.createWindowOptions(b,e,f.html(),this.DEFAULTS),d=new g(a,e,h,this.isIconVisibleOnClick,c,null!=(i=this.markersScope)&&null!=(j=i.plurals.get(a[this.idKey]))?j.scope:void 0,f,!1,!0),null==a[this.idKey]?void this.$log.error("Window model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key."):(this.plurals.put(a[this.idKey],d),d)},s.prototype.setChildScope=function(a,b){return _.each(q.scopeKeys,function(c){return function(d){var e,f;return e=d+"Key",f="self"===c[e]?b:b[c[e]],f!==a[d]?a[d]=f:void 0}}(this)),a.model=b},s.prototype.interpolateContent=function(a,b){var c,d,e,f,g,h;if(void 0!==this.contentKeys&&0!==this.contentKeys.length){for(c=o(a),e={},h=this.contentKeys,d=0,g=h.length;g>d;d++)f=h[d],e[f]=b[f];return c(e)}},s.prototype.modelKeyComparison=function(a,b){var c,d;if(d=null!=this.scope.coords?this.scope:this.parentScope,null==d)throw"No scope or parentScope set!";return(c=r.equalCoords(this.evalModelHandle(a,d.coords),this.evalModelHandle(b,d.coords)))?c=_.every(_.without(this["interface"].scopeKeys,"coords"),function(c){return function(e){return c.evalModelHandle(a,d[e])===c.evalModelHandle(b,d[e])}}(this)):c},s}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapCircle",["uiGmapICircle","uiGmapCircleParentModel",function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new b(a,c,d,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapControl",["uiGmapIControl","$http","$templateCache","$compile","$controller","uiGmapGoogleMapApi",function(d,e,f,g,h,i){var j;return j=function(j){function k(){this.link=a(this.link,this),k.__super__.constructor.call(this)}return c(k,j),k.prototype.link=function(a,c,j,k){return i.then(function(c){return function(i){var j,l;return b.isUndefined(a.template)?void c.$log.error("mapControl: could not find a valid template property"):(j=b.isDefined(a.index&&!isNaN(parseInt(a.index)))?parseInt(a.index):void 0,l=b.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_CENTER",i.ControlPosition[l]?d.mapPromise(a,k).then(function(d){var i,k;return i=void 0,k=b.element("<div></div>"),e.get(a.template,{cache:f}).success(function(c){var d,e;return e=a.$new(),k.append(c),b.isDefined(a.controller)&&(d=h(a.controller,{$scope:e}),k.children().data("$ngControllerController",d)),i=g(k.children())(e),j?i[0].index=j:void 0}).error(function(a){return c.$log.error("mapControl: template could not be found")}).then(function(){return d.controls[google.maps.ControlPosition[l]].push(i[0])})}):void c.$log.error("mapControl: invalid position property"))}}(this))},k}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapDragZoom",["uiGmapCtrlHandle","uiGmapPropertyAction",function(a,b){return{restrict:"EMA",transclude:!0,template:'<div class="angular-google-map-dragzoom" ng-transclude style="display: none"></div>',require:"^uiGmapGoogleMap",scope:{keyboardkey:"=",options:"=",spec:"="},controller:["$scope","$element",function(b,c){return b.ctrlType="uiGmapDragZoom",_.extend(this,a.handle(b,c))}],link:function(c,d,e,f){return a.mapPromise(c,f).then(function(a){var d,e,f;return d=function(b){return a.enableKeyDragZoom(b),c.spec?c.spec.enableKeyDragZoom(b):void 0},e=new b(function(a,b){return b?d({key:b}):d()}),f=new b(function(a,b){return b?d(b):void 0}),c.$watch("keyboardkey",e.sic),e.sic(c.keyboardkey),c.$watch("options",f.sic),f.sic(c.options)})}}}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapDrawingManager",["uiGmapIDrawingManager","uiGmapDrawingManagerParentModel",function(a,b){return _.extend(a,{link:function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return new b(a,c,d,e)})}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapApiFreeDrawPolygons",["uiGmapLogger","uiGmapBaseObject","uiGmapCtrlHandle","uiGmapDrawFreeHandChildModel","uiGmapLodash",function(b,d,e,f,g){var h;return h=function(d){function h(){return this.link=a(this.link,this),h.__super__.constructor.apply(this,arguments)}return c(h,d),h.include(e),h.prototype.restrict="EMA",h.prototype.replace=!0,h.prototype.require="^uiGmapGoogleMap",h.prototype.scope={polygons:"=",draw:"="},h.prototype.link=function(a,c,d,e){return this.mapPromise(a,e).then(function(c){return function(c){var d,h;return a.polygons?_.isArray(a.polygons)?(d=new f(c,e.getScope()),h=void 0,a.draw=function(){return"function"==typeof h&&h(),d.engage(a.polygons).then(function(){var b;return b=!0,h=a.$watchCollection("polygons",function(a,c){var d;return b||a===c?void(b=!1):(d=g.differenceObjects(c,a),d.forEach(function(a){return a.setMap(null)}))})})}):b.error("Free Draw Polygons must be of type Array!"):b.error("No polygons to bind to!")}}(this))},h}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapICircle",[function(){var a;return a={},{restrict:"EA",replace:!0,require:"^uiGmapGoogleMap",scope:{center:"=center",radius:"=radius",stroke:"=stroke",fill:"=fill",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=icons",visible:"=",events:"=",control:"=",zIndex:"=zindex"}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIControl",["uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d){var e;return e=function(b){function e(){this.restrict="EA",this.replace=!0,this.require="^uiGmapGoogleMap",this.scope={template:"@template",position:"@position",controller:"@controller",index:"@index"},this.$log=c}return a(e,b),e.extend(d),e.prototype.link=function(a,b,c,d){throw new Exception("Not implemented!!")},e}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapIDrawingManager",[function(){return{restrict:"EA",replace:!0,require:"^uiGmapGoogleMap",scope:{"static":"@",control:"=",options:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIMarker",["uiGmapBaseObject","uiGmapCtrlHandle",function(b,c){var d;return d=function(b){function d(){this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.replace=!0,this.scope=_.extend(this.scope||{},d.scope)}return a(d,b),d.scope={coords:"=coords",icon:"=icon",click:"&click",options:"=options",events:"=events",fit:"=fit",idKey:"=idkey",control:"=control"},d.scopeKeys=_.keys(d.scope),d.keys=d.scopeKeys,d.extend(c),d}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIPolygon",["uiGmapGmapUtil","uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d,e){var f;return f=function(c){function f(){}return a(f,c),f.scope={path:"=path",stroke:"=stroke",clickable:"=",draggable:"=",editable:"=",geodesic:"=",fill:"=",icons:"=icons",visible:"=","static":"=",events:"=",zIndex:"=zindex",fit:"=",control:"=control"},f.scopeKeys=_.keys(f.scope),f.include(b),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^uiGmapGoogleMap",f.prototype.scope=f.scope,f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIPolyline",["uiGmapGmapUtil","uiGmapBaseObject","uiGmapLogger","uiGmapCtrlHandle",function(b,c,d,e){var f;return f=function(c){function f(){}return a(f,c),f.scope={path:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=",visible:"=","static":"=",fit:"=",events:"=",zIndex:"=zindex"},f.scopeKeys=_.keys(f.scope),f.include(b),f.extend(e),f.prototype.restrict="EMA",f.prototype.replace=!0,f.prototype.require="^uiGmapGoogleMap",f.prototype.scope=f.scope,f.prototype.DEFAULTS={},f.prototype.$log=d,f}(c)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapIRectangle",[function(){var a;return a={},{restrict:"EMA",require:"^uiGmapGoogleMap",replace:!0,scope:{bounds:"=",stroke:"=",clickable:"=",draggable:"=",editable:"=",fill:"=",visible:"=",events:"="}}}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapIWindow",["uiGmapBaseObject","uiGmapChildEvents","uiGmapCtrlHandle",function(b,c,d){var e;return e=function(b){function e(){this.restrict="EMA",this.template=void 0,this.transclude=!0,this.priority=-100,this.require="^uiGmapGoogleMap",this.replace=!0,this.scope=_.extend(this.scope||{},e.scope)}return a(e,b),e.scope={coords:"=coords",template:"=template",templateUrl:"=templateurl",templateParameter:"=templateparameter",isIconVisibleOnClick:"=isiconvisibleonclick",closeClick:"&closeclick",options:"=options",control:"=control",show:"=show"},e.scopeKeys=_.keys(e.scope),e.include(c),e.extend(d),e}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMap",["$timeout","$q","uiGmapLogger","uiGmapGmapUtil","uiGmapBaseObject","uiGmapCtrlHandle","uiGmapIsReady","uiGmapuuid","uiGmapExtendGWin","uiGmapExtendMarkerClusterer","uiGmapGoogleMapsUtilV3","uiGmapGoogleMapApi","uiGmapEventsHelper",function(d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r,s;return q=void 0,s=[n,l,m],r=function(e){function h(){this.link=a(this.link,this);var b,c;b=function(a){var b,c;return c=void 0,a.$on("$destroy",function(){return j.decrement()}),b=i.handle(a),a.ctrlType="Map",a.deferred.promise.then(function(){return s.forEach(function(a){return a.init()})}),b.getMap=function(){return a.map},c=_.extend(this,b)},this.controller=["$scope",b],c=this}return c(h,e),h.include(g),h.prototype.restrict="EMA",h.prototype.transclude=!0,h.prototype.replace=!1,h.prototype.template='<div class="angular-google-map"><div class="angular-google-map-container">\n</div><div ng-transclude style="display: none"></div></div>',h.prototype.scope={center:"=",zoom:"=",dragging:"=",control:"=",options:"=",events:"=",eventOpts:"=",styles:"=",bounds:"=",update:"="},h.prototype.link=function(a,c,e){var g,h;return g=[],a.$on("$destroy",function(){return p.removeEvents(g)}),a.idleAndZoomChanged=!1,null==a.center?void(h=a.$watch("center",function(b){return function(){return a.center?(h(),b.link(a,c,e)):void 0}}(this))):o.then(function(h){return function(i){var l,m,n,o,r,s,t,u,v,w,x,y,z,A,B,C,D;if(q={mapTypeId:i.MapTypeId.ROADMAP},A=j.spawn(),y=function(){return A.deferred.resolve({instance:A.instance,map:l})},!h.validateCoords(a.center))return void f.error("angular-google-maps: could not find a valid center property");if(!b.isDefined(a.zoom))return void f.error("angular-google-maps: map zoom property not set");if(r=b.element(c),r.addClass("angular-google-map"),w={options:{}},e.options&&(w.options=a.options),e.styles&&(w.styles=a.styles),e.type&&(B=e.type.toUpperCase(),google.maps.MapTypeId.hasOwnProperty(B)?w.mapTypeId=google.maps.MapTypeId[e.type.toUpperCase()]:f.error("angular-google-maps: invalid map type '"+e.type+"'")),u=b.extend({},q,w,{center:h.getCoords(a.center),zoom:a.zoom,bounds:a.bounds}),l=new google.maps.Map(r.find("div")[1],u),l.uiGmap_id=k.generate(),o=!1,g.push(google.maps.event.addListenerOnce(l,"idle",function(){return a.deferred.resolve(l),y()})),n=e.events&&null!=(null!=(x=a.events)?x.blacklist:void 0)?a.events.blacklist:[],_.isString(n)&&(n=[n]),v=function(b,c,d){return _.contains(n,b)?void 0:(d&&d(),g.push(google.maps.event.addListener(l,b,function(){var b;return(null!=(b=a.update)?b.lazy:void 0)?void 0:c()})))},_.contains(n,"all")||(v("dragstart",function(){return o=!0,a.$evalAsync(function(a){return null!=a.dragging?a.dragging=o:void 0})}),v("dragend",function(){return o=!1,a.$evalAsync(function(a){return null!=a.dragging?a.dragging=o:void 0})}),C=function(c,d){if(null==c&&(c=l.center),null==d&&(d=a),!_.contains(n,"center"))if(b.isDefined(d.center.type)){if(d.center.coordinates[1]!==c.lat()&&(d.center.coordinates[1]=c.lat()),d.center.coordinates[0]!==c.lng())return d.center.coordinates[0]=c.lng()}else if(d.center.latitude!==c.lat()&&(d.center.latitude=c.lat()),d.center.longitude!==c.lng())return d.center.longitude=c.lng()},z=!1,v("idle",function(){var b,c,d;return b=l.getBounds(),c=b.getNorthEast(),d=b.getSouthWest(),z=!0,a.$evalAsync(function(b){return C(),_.isUndefined(b.bounds)||_.contains(n,"bounds")||(b.bounds.northeast={latitude:c.lat(),longitude:c.lng()},b.bounds.southwest={latitude:d.lat(),longitude:d.lng()}),_.contains(n,"zoom")||(b.zoom=l.zoom,a.idleAndZoomChanged=!a.idleAndZoomChanged),z=!1})})),b.isDefined(a.events)&&null!==a.events&&b.isObject(a.events)){t=function(b){return function(){return a.events[b].apply(a,[l,b,arguments])}},m=[];for(s in a.events)a.events.hasOwnProperty(s)&&b.isFunction(a.events[s])&&m.push(google.maps.event.addListener(l,s,t(s)));g.concat(m)}return l.getOptions=function(){return u},a.map=l,null!=e.control&&null!=a.control&&(a.control.refresh=function(a){var b,c,d;if(null!=l)return null!=("undefined"!=typeof google&&null!==google&&null!=(c=google.maps)&&null!=(d=c.event)?d.trigger:void 0)&&null!=l&&google.maps.event.trigger(l,"resize"),null!=(null!=a?a.latitude:void 0)&&null!=(null!=a?a.longitude:void 0)?(b=h.getCoords(a),h.isTrue(e.pan)?l.panTo(b):l.setCenter(b)):void 0},a.control.getGMap=function(){return l},a.control.getMapOptions=function(){return u},a.control.getCustomEventListeners=function(){return m},a.control.removeEvents=function(a){return p.removeEvents(a)}),a.$watch("center",function(b,c){var d,g;if(b!==c&&!z&&(d=h.getCoords(a.center),d.lat()!==l.center.lat()||d.lng()!==l.center.lng()))return g=!0,o||(h.validateCoords(b)||f.error("Invalid center for newValue: "+JSON.stringify(b)),h.isTrue(e.pan)&&a.zoom===l.zoom?l.panTo(d):l.setCenter(d)),g=!1},!0),D=null,a.$watch("zoom",function(b,c){var e,f,g;if(null!=b&&!_.isEqual(b,c)&&(null!=l?l.getZoom():void 0)!==(null!=a?a.zoom:void 0)&&!z)return g=!0,null!=D&&d.cancel(D),D=d(function(){return l.setZoom(b),g=!1},(null!=(e=a.eventOpts)&&null!=(f=e.debounce)?f.zoomMs:void 0)+20,!1)}),a.$watch("bounds",function(a,b){var c,d,e,g,h,i,j;if(a!==b)return null==(null!=a&&null!=(e=a.northeast)?e.latitude:void 0)||null==(null!=a&&null!=(g=a.northeast)?g.longitude:void 0)||null==(null!=a&&null!=(h=a.southwest)?h.latitude:void 0)||null==(null!=a&&null!=(i=a.southwest)?i.longitude:void 0)?void f.error("Invalid map bounds for new value: "+JSON.stringify(a)):(d=new google.maps.LatLng(a.northeast.latitude,a.northeast.longitude),j=new google.maps.LatLng(a.southwest.latitude,a.southwest.longitude),c=new google.maps.LatLngBounds(j,d),l.fitBounds(c))}),["options","styles"].forEach(function(b){return a.$watch(b,function(a,b){var c;return c=this.exp,_.isEqual(a,b)?void 0:("options"===c?w.options=a:w.options[c]=a,null!=l?l.setOptions(w):void 0)},!0)})}}(this))},h}(h)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarker",["uiGmapIMarker","uiGmapMarkerChildModel","uiGmapMarkerManager","uiGmapLogger",function(b,d,e,f){var g;return g=function(g){function h(){this.link=a(this.link,this),h.__super__.constructor.call(this),this.template='<span class="angular-google-map-marker" ng-transclude></span>',f.info(this)}return c(h,g),h.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Marker",_.extend(this,b.handle(a,c))}],h.prototype.link=function(a,c,f,g){var h;return h=b.mapPromise(a,g),h.then(function(c){return function(c){var f,g,h,i,j,k;return h=new e(c),i=_.object(b.keys,b.keys),j=new d(a,a,i,c,{},f=!0,h,g=!1,k=!1),j.deferred.promise.then(function(b){return a.deferred.resolve(b)}),null!=a.control?a.control.getGMarkers=h.getGMarkers:void 0}}(this)),a.$on("$destroy",function(a){return function(){var a;return"undefined"!=typeof a&&null!==a&&a.clear(),a=null}}(this))},h}(b)}])}.call(this),function(){var a=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarkers",["uiGmapIMarker","uiGmapPlural","uiGmapMarkersParentModel","uiGmap_sync","uiGmapLogger",function(b,c,d,e,f){var g;return g=function(e){function g(){g.__super__.constructor.call(this),this.template='<span class="angular-google-map-markers" ng-transclude></span>',c.extend(this,{doCluster:"=?docluster",clusterOptions:"=clusteroptions",clusterEvents:"=clusterevents",modelsByRef:"=modelsbyref",type:"=?type",typeOptions:"=?typeoptions",typeEvents:"=?typeevents"}),f.info(this)}return a(g,e),g.prototype.controller=["$scope","$element",function(a,c){return a.ctrlType="Markers",_.extend(this,b.handle(a,c))}],g.prototype.link=function(a,e,f,g){var h,i;return h=void 0,i=function(){return a.deferred.resolve()},b.mapPromise(a,g).then(function(b){var j;return j=g.getScope(),j.$watch("idleAndZoomChanged",function(){return _.defer(h.gManager.draw)}),h=new d(a,e,f,b),c.link(a,h),null!=a.control&&(a.control.getGMarkers=function(){var a;return null!=(a=h.gManager)?a.getGMarkers():void 0},a.control.getChildMarkers=function(){return h.plurals}),_.last(h.existingPieces._content).then(function(){return i()})})},g}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").service("uiGmapPlural",[function(){var a;return a=function(a,b){return null!=a.control?(a.control.updateModels=function(c){return a.models=c,b.createChildScopes(!1)},a.control.newModels=function(c){return a.models=c,b.rebuildAll(a,!0,!0)},a.control.clean=function(){return b.rebuildAll(a,!1,!0)},a.control.getPlurals=function(){return b.plurals},a.control.getManager=function(){return b.gManager},a.control.hasManager=function(){return null!=b.gManager==!0},a.control.managerDraw=function(){var b;return a.control.hasManager()&&null!=(b=a.control.getManager())?b.draw():void 0}):void 0},{extend:function(a,b){return _.extend(a.scope||{},b||{},{idKey:"=idkey",doRebuildAll:"=dorebuildall",models:"=models",chunk:"=chunk",cleanchunk:"=cleanchunk",control:"=control"})},link:function(b,c){return a(b,c)}}}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygon",["uiGmapIPolygon","$timeout","uiGmapPolygonChildModel",function(b,d,e){var f;return f=function(d){function f(){return this.link=a(this.link,this),f.__super__.constructor.apply(this,arguments)}return c(f,d),f.prototype.link=function(a,c,d,f){var g,h;return g=[],h=b.mapPromise(a,f),null!=a.control&&(a.control.getInstance=this,a.control.polygons=g,a.control.promise=h),h.then(function(b){return function(c){return g.push(new e(a,d,c,b.DEFAULTS))}}(this))},f}(b)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolygons",["uiGmapIPolygon","$timeout","uiGmapPolygonsParentModel","uiGmapPlural",function(d,e,f,g){var h;return h=function(d){function e(){this.link=a(this.link,this),e.__super__.constructor.call(this),g.extend(this),this.$log.info(this)}return c(e,d),e.prototype.link=function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(h){return(b.isUndefined(a.path)||null===a.path)&&e.$log.warn("polygons: no valid path attribute found"),a.models||e.$log.warn("polygons: no models found to create from"),g.link(a,new f(a,c,d,h,e.DEFAULTS))}}(this))},e}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolyline",["uiGmapIPolyline","$timeout","uiGmapPolylineChildModel",function(d,e,f){var g;return g=function(e){function g(){return this.link=a(this.link,this),g.__super__.constructor.apply(this,arguments)}return c(g,e),g.prototype.link=function(a,c,e,g){return d.mapPromise(a,g).then(function(c){return function(d){return(b.isUndefined(a.path)||null===a.path||!c.validatePath(a.path))&&c.$log.warn("polyline: no valid path attribute found"),new f(a,e,d,c.DEFAULTS)}}(this))},g}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapPolylines",["uiGmapIPolyline","$timeout","uiGmapPolylinesParentModel","uiGmapPlural",function(d,e,f,g){var h;return h=function(d){function e(){this.link=a(this.link,this),e.__super__.constructor.call(this),g.extend(this),this.$log.info(this)}return c(e,d),e.prototype.link=function(a,c,d,e){return e.getScope().deferred.promise.then(function(e){return function(h){return(b.isUndefined(a.path)||null===a.path)&&e.$log.warn("polylines: no valid path attribute found"),a.models||e.$log.warn("polylines: no models found to create from"),g.link(a,new f(a,c,d,h,e.DEFAULTS))}}(this))},e}(d)}])}.call(this),function(){b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapRectangle",["uiGmapLogger","uiGmapGmapUtil","uiGmapIRectangle","uiGmapRectangleParentModel",function(a,b,c,d){return _.extend(c,{link:function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new d(a,b,c,e)}}(this))}})}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindow",["uiGmapIWindow","uiGmapGmapUtil","uiGmapWindowChildModel","uiGmapLodash","uiGmapLogger",function(d,e,f,g,h){var i;return i=function(i){function j(){this.link=a(this.link,this),j.__super__.constructor.call(this),this.require=["^uiGmapGoogleMap","^?uiGmapMarker"],this.template='<span class="angular-google-maps-window" ng-transclude></span>',h.debug(this),this.childWindows=[]}return c(j,i),j.include(e),j.prototype.link=function(a,c,e,f){var g,h;return g=f.length>1&&null!=f[1]?f[1]:void 0,h=null!=g?g.getScope():void 0,this.mapPromise=d.mapPromise(a,f[0]),this.mapPromise.then(function(d){return function(f){var i;return i=!0,b.isDefined(e.isiconvisibleonclick)&&(i=a.isIconVisibleOnClick),g?h.deferred.promise.then(function(b){return d.init(a,c,i,f,h)}):void d.init(a,c,i,f)}}(this))},j.prototype.init=function(a,b,c,d,e){var h,i,j,k,l;return i=null!=a.options?a.options:{},k=null!=a&&this.validateCoords(a.coords),null!=(null!=e?e.getGMarker:void 0)&&(j=e.getGMarker()),l=k?this.createWindowOptions(j,a,b.html(),i):i,null!=d&&(h=new f({},a,l,c,d,e,b),this.childWindows.push(h),a.$on("$destroy",function(a){return function(){return a.childWindows=g.withoutObjects(a.childWindows,[h],function(a,b){return a.scope.$id===b.scope.$id}),a.childWindows.length=0}}(this))),null!=a.control&&(a.control.getGWindows=function(a){return function(){return a.childWindows.map(function(a){return a.gObject})}}(this),a.control.getChildWindows=function(a){return function(){return a.childWindows}}(this),a.control.getPlurals=a.control.getChildWindows,a.control.showWindow=function(a){return function(){return a.childWindows.map(function(a){return a.showWindow()})}}(this),a.control.hideWindow=function(a){return function(){return a.childWindows.map(function(a){return a.hideWindow()})}}(this)),null!=this.onChildCreation&&null!=h?this.onChildCreation(h):void 0},j}(d)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},c=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},d={}.hasOwnProperty;b.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindows",["uiGmapIWindow","uiGmapPlural","uiGmapWindowsParentModel","uiGmapPromise","uiGmapLogger",function(b,d,e,f,g){var h;return h=function(b){function h(){this.init=a(this.init,this),this.link=a(this.link,this),h.__super__.constructor.call(this),this.require=["^uiGmapGoogleMap","^?uiGmapMarkers"],this.template='<span class="angular-google-maps-windows" ng-transclude></span>',d.extend(this),g.debug(this)}return c(h,b),h.prototype.link=function(a,b,c,d){var e,g,h;return e=d[0].getScope(),g=d.length>1&&null!=d[1]?d[1]:void 0,h=null!=g?g.getScope():void 0,e.deferred.promise.then(function(e){return function(g){var i,j;return i=(null!=h&&null!=(j=h.deferred)?j.promise:void 0)||f.resolve(),i.then(function(){var f,i;return f=null!=(i=e.parentModel)?i.existingPieces:void 0,f?f.then(function(){return e.init(a,b,c,d,g,h)}):e.init(a,b,c,d,g,h)})}}(this))},h.prototype.init=function(a,b,c,f,g,h){var i;return i=new e(a,b,c,f,g,h),d.link(a,i),null!=a.control?(a.control.getGWindows=function(a){return function(){return i.plurals.map(function(a){return a.gObject})}}(this),a.control.getChildWindows=function(a){return function(){return i.plurals}}(this)):void 0},h}(b)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapGoogleMap",["uiGmapMap",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMarker",["$timeout","uiGmapMarker",function(a,b){return new b(a)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMarkers",["$timeout","uiGmapMarkers",function(a,b){return new b(a)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolygon",["uiGmapPolygon",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapCircle",["uiGmapCircle",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolyline",["uiGmapPolyline",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolylines",["uiGmapPolylines",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapRectangle",["uiGmapLogger","uiGmapRectangle",function(a,b){return b}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapWindow",["$timeout","$compile","$http","$templateCache","uiGmapWindow",function(a,b,c,d,e){return new e(a,b,c,d)}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapWindows",["$timeout","$compile","$http","$templateCache","$interpolate","uiGmapWindows",function(a,b,c,d,e,f){return new f(a,b,c,d,e)}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapLayer",["$timeout","uiGmapLogger","uiGmapLayerParentModel",function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template="<span class='angular-google-map-layer' ng-transclude></span>",this.replace=!0,this.scope={show:"=show",type:"=type",namespace:"=namespace",options:"=options",onCreated:"&oncreated"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return null!=a.onCreated?new d(a,b,c,e,a.onCreated):new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapMapControl",["uiGmapControl",function(a){return new a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapDragZoom",["uiGmapDragZoom",function(a){return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapDrawingManager",["uiGmapDrawingManager",function(a){
return a}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapFreeDrawPolygons",["uiGmapApiFreeDrawPolygons",function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapMapType",["$timeout","uiGmapLogger","uiGmapMapTypeParentModel",function(b,c,d){var e;return new(e=function(){function b(){this.link=a(this.link,this),this.$log=c,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template='<span class="angular-google-map-layer" ng-transclude></span>',this.replace=!0,this.scope={show:"=show",options:"=options",refresh:"=refresh",id:"@"}}return b.prototype.link=function(a,b,c,e){return e.getScope().deferred.promise.then(function(e){return function(e){return new d(a,b,c,e)}}(this))},b}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapPolygons",["uiGmapPolygons",function(a){return new a}])}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};b.module("uiGmapgoogle-maps").directive("uiGmapSearchBox",["uiGmapGoogleMapApi","uiGmapLogger","uiGmapSearchBoxParentModel","$http","$templateCache","$compile",function(c,d,e,f,g,h){var i;return new(i=function(){function i(){this.link=a(this.link,this),this.$log=d,this.restrict="EMA",this.require="^uiGmapGoogleMap",this.priority=-1,this.transclude=!0,this.template="<span class='angular-google-map-search' ng-transclude></span>",this.replace=!0,this.scope={template:"=template",events:"=events",position:"=?position",options:"=?options",parentdiv:"=?parentdiv",ngModel:"=?"}}return i.prototype.require="ngModel",i.prototype.link=function(a,d,i,j){return c.then(function(c){return function(k){return null==a.template&&(g.put("uigmap-searchbox-default.tpl.html",'<input type="text">'),a.template="uigmap-searchbox-default.tpl.html"),f.get(a.template,{cache:g}).success(function(f){return b.isUndefined(a.events)?void c.$log.error("searchBox: the events property is required"):j.getScope().deferred.promise.then(function(g){var j;return j=b.isDefined(a.position)?a.position.toUpperCase().replace(/-/g,"_"):"TOP_LEFT",k.ControlPosition[j]?new e(a,d,i,g,j,h(f)(a)):void c.$log.error("searchBox: invalid position property")})})}}(this))},i}())}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapShow",["$animate","uiGmapLogger",function(a,c){return{scope:{uiGmapShow:"=",uiGmapAfterShow:"&",uiGmapAfterHide:"&"},link:function(d,e){var f,g,h;return f=function(b,c){return a[b](e,"ng-hide").then(function(){return c()})},g=function(b,c){return a[b](e,"ng-hide",c)},h=function(a,d){return b.version.major>1?c.error("uiGmapShow is not supported for Angular Major greater than 1.\nYour Major is "+b.version.major+'"'):1===b.version.major&&b.version.minor<3?g(a,d):f(a,d)},d.$watch("uiGmapShow",function(a){return a&&h("removeClass",d.uiGmapAfterShow),a?void 0:h("addClass",d.uiGmapAfterHide)})}}}])}.call(this),function(){b.module("uiGmapgoogle-maps").directive("uiGmapStreetViewPanorama",["uiGmapGoogleMapApi","uiGmapLogger","uiGmapGmapUtil","uiGmapEventsHelper",function(a,c,d,e){var f;return f="uiGmapStreetViewPanorama",{restrict:"EMA",template:'<div class="angular-google-map-street-view-panorama"></div>',replace:!0,scope:{focalcoord:"=",radius:"=?",events:"=?",options:"=?",control:"=?",povoptions:"=?",imagestatus:"="},link:function(g,h,i){return a.then(function(a){return function(a){var i,j,k,l,m,n,o,p,q,r;return p=void 0,r=void 0,k=!1,n=void 0,o=null,q=null,i=function(){return e.removeEvents(n),null!=p&&(p.unbind("position"),p.setVisible(!1)),null!=r?(null!=(null!=r?r.setVisible:void 0)&&r.setVisible(!1),r=void 0):void 0},m=function(a,c){var d;return d=google.maps.geometry.spherical.computeHeading(a,c),k=!0,g.radius=g.radius||50,q=b.extend({heading:d,zoom:1,pitch:0},g.povoptions||{}),o=o=b.extend({navigationControl:!1,addressControl:!1,linksControl:!1,position:a,pov:q,visible:!0},g.options||{}),k=!1},j=function(){var a;return g.focalcoord?g.radius?(i(),null==r&&(r=new google.maps.StreetViewService),g.events&&(n=e.setEvents(r,g,g)),a=d.getCoords(g.focalcoord),r.getPanoramaByLocation(a,g.radius,function(b,c){var d,e,f;return null!=g.imagestatus&&(g.imagestatus=c),null!=(null!=(f=g.events)?f.image_status_changed:void 0)&&g.events.image_status_changed(r,"image_status_changed",g,c),"OK"===c?(e=b.location.latLng,m(e,a),d=h[0],p=new google.maps.StreetViewPanorama(d,o)):void 0})):void c.error(f+": needs a radius to set the camera view from its focal target."):void c.error(f+": focalCoord needs to be defined")},null!=g.control&&(g.control.getOptions=function(){return o},g.control.getPovOptions=function(){return q},g.control.getGObject=function(){return r},g.control.getGPano=function(){return p}),g.$watch("options",function(a,b){return a===b||a===o||k?void 0:j()}),l=!0,g.$watch("focalcoord",function(a,b){return a===b&&!l||null==a?void 0:(l=!1,j())}),g.$on("$destroy",function(){return i()})}}(this))}}}])}.call(this),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapuuid",function(){function a(){}return a.generate=function(){var b=a._gri,c=a._ha;return c(b(32),8)+"-"+c(b(16),4)+"-"+c(16384|b(12),4)+"-"+c(32768|b(14),4)+"-"+c(b(48),12)},a._gri=function(a){return 0>a?NaN:30>=a?0|Math.random()*(1<<a):53>=a?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<a-30)):NaN},a._ha=function(a,b){for(var c=a.toString(16),d=b-c.length,e="0";d>0;d>>>=1,e+=e)1&d&&(c=e+c);return c},a}),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapGoogleMapsUtilV3",function(){return{init:_.once(function(){function b(a){a=a||{},google.maps.OverlayView.apply(this,arguments),this.content_=a.content||"",this.disableAutoPan_=a.disableAutoPan||!1,this.maxWidth_=a.maxWidth||0,this.pixelOffset_=a.pixelOffset||new google.maps.Size(0,0),this.position_=a.position||new google.maps.LatLng(0,0),this.zIndex_=a.zIndex||null,this.boxClass_=a.boxClass||"infoBox",this.boxStyle_=a.boxStyle||{},this.closeBoxMargin_=a.closeBoxMargin||"2px",this.closeBoxURL_=a.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===a.closeBoxURL&&(this.closeBoxURL_=""),this.infoBoxClearance_=a.infoBoxClearance||new google.maps.Size(1,1),"undefined"==typeof a.visible&&("undefined"==typeof a.isHidden?a.visible=!0:a.visible=!a.isHidden),this.isHidden_=!a.visible,this.alignBottom_=a.alignBottom||!1,this.pane_=a.pane||"floatPane",this.enableEventPropagation_=a.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null}function d(a,b){a.getMarkerClusterer().extend(d,google.maps.OverlayView),this.cluster_=a,this.className_=a.getMarkerClusterer().getClusterClass(),this.styles_=b,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(a.getMap())}function e(a){this.markerClusterer_=a,this.map_=a.getMap(),this.gridSize_=a.getGridSize(),this.minClusterSize_=a.getMinimumClusterSize(),this.averageCenter_=a.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new d(this,a.getStyles())}function f(a,b,d){this.extend(f,google.maps.OverlayView),b=b||[],d=d||{},this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.gridSize_=d.gridSize||60,this.minClusterSize_=d.minimumClusterSize||2,this.maxZoom_=d.maxZoom||null,this.styles_=d.styles||[],this.title_=d.title||"",this.zoomOnClick_=!0,d.zoomOnClick!==c&&(this.zoomOnClick_=d.zoomOnClick),this.averageCenter_=!1,d.averageCenter!==c&&(this.averageCenter_=d.averageCenter),this.ignoreHidden_=!1,d.ignoreHidden!==c&&(this.ignoreHidden_=d.ignoreHidden),this.enableRetinaIcons_=!1,d.enableRetinaIcons!==c&&(this.enableRetinaIcons_=d.enableRetinaIcons),this.imagePath_=d.imagePath||f.IMAGE_PATH,this.imageExtension_=d.imageExtension||f.IMAGE_EXTENSION,this.imageSizes_=d.imageSizes||f.IMAGE_SIZES,this.calculator_=d.calculator||f.CALCULATOR,this.batchSize_=d.batchSize||f.BATCH_SIZE,this.batchSizeIE_=d.batchSizeIE||f.BATCH_SIZE_IE,this.clusterClass_=d.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(b,!0),this.setMap(a)}function g(a,b){function c(){}c.prototype=b.prototype,a.superClass_=b.prototype,a.prototype=new c,a.prototype.constructor=a}function h(a,b,c){this.marker_=a,this.handCursorURL_=a.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.setAttribute("onselectstart","return false;"),this.eventDiv_.setAttribute("ondragstart","return false;"),this.crossDiv_=h.getSharedCross(b)}function i(a){a=a||{},a.labelContent=a.labelContent||"",a.labelAnchor=a.labelAnchor||new google.maps.Point(0,0),a.labelClass=a.labelClass||"markerLabels",a.labelStyle=a.labelStyle||{},a.labelInBackground=a.labelInBackground||!1,"undefined"==typeof a.labelVisible&&(a.labelVisible=!0),"undefined"==typeof a.raiseOnDrag&&(a.raiseOnDrag=!0),"undefined"==typeof a.clickable&&(a.clickable=!0),"undefined"==typeof a.draggable&&(a.draggable=!1),"undefined"==typeof a.optimized&&(a.optimized=!1),a.crossImage=a.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",a.handCursor=a.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",a.optimized=!1,this.label=new h(this,a.crossImage,a.handCursor),google.maps.Marker.apply(this,arguments)}function j(a){var b=a||{};this.ready_=!1,this.dragging_=!1,a.visible==c&&(a.visible=!0),a.shadow==c&&(a.shadow="7px -3px 5px rgba(88,88,88,0.7)"),a.anchor==c&&(a.anchor=k.BOTTOM),this.setValues(b)}b.prototype=new google.maps.OverlayView,b.prototype.createInfoBoxDiv_=function(){var a,b,c,d=this,e=function(a){a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},f=function(a){a.returnValue=!1,a.preventDefault&&a.preventDefault(),d.enableEventPropagation_||e(a)};if(!this.div_){if(this.div_=document.createElement("div"),this.setBoxStyle_(),"undefined"==typeof this.content_.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:0!==this.maxWidth_&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.div_.style.overflow="auto",this.fixedWidthSet_=!0):(c=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-c.left-c.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_),!this.enableEventPropagation_){for(this.eventListeners_=[],b=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],a=0;a<b.length;a++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,b[a],e));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(a){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",f),google.maps.event.trigger(this,"domready")}},b.prototype.getCloseBoxImg_=function(){var a="";return""!==this.closeBoxURL_&&(a="<img",a+=" src='"+this.closeBoxURL_+"'",a+=" align=right",a+=" style='",a+=" position: relative;",a+=" cursor: pointer;",a+=" margin: "+this.closeBoxMargin_+";",a+="'>"),a},b.prototype.addClickHandler_=function(){var a;""!==this.closeBoxURL_?(a=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(a,"click",this.getCloseClickHandler_())):this.closeListener_=null},b.prototype.getCloseClickHandler_=function(){var a=this;return function(b){b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation(),google.maps.event.trigger(a,"closeclick"),a.close()}},b.prototype.panBox_=function(a){var b,c,d=0,e=0;if(!a&&(b=this.getMap(),b instanceof google.maps.Map)){b.getBounds().contains(this.position_)||b.setCenter(this.position_),c=b.getBounds();var f=b.getDiv(),g=f.offsetWidth,h=f.offsetHeight,i=this.pixelOffset_.width,j=this.pixelOffset_.height,k=this.div_.offsetWidth,l=this.div_.offsetHeight,m=this.infoBoxClearance_.width,n=this.infoBoxClearance_.height,o=this.getProjection().fromLatLngToContainerPixel(this.position_);if(o.x<-i+m?d=o.x+i-m:o.x+k+i+m>g&&(d=o.x+k+i+m-g),this.alignBottom_?o.y<-j+n+l?e=o.y+j-n-l:o.y+j+n>h&&(e=o.y+j+n-h):o.y<-j+n?e=o.y+j-n:o.y+l+j+n>h&&(e=o.y+l+j+n-h),0!==d||0!==e){b.getCenter();b.panBy(d,e)}}},b.prototype.setBoxStyle_=function(){var a,b;if(this.div_){this.div_.className=this.boxClass_,this.div_.style.cssText="",b=this.boxStyle_;for(a in b)b.hasOwnProperty(a)&&(this.div_.style[a]=b[a]);this.div_.style.WebkitTransform="translateZ(0)","undefined"!=typeof this.div_.style.opacity&&""!==this.div_.style.opacity&&(this.div_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*this.div_.style.opacity+')"',this.div_.style.filter="alpha(opacity="+100*this.div_.style.opacity+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",null!==this.zIndex_&&(this.div_.style.zIndex=this.zIndex_)}},b.prototype.getBoxWidths_=function(){var a,b={top:0,bottom:0,left:0,right:0},c=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(a=c.ownerDocument.defaultView.getComputedStyle(c,""),a&&(b.top=parseInt(a.borderTopWidth,10)||0,b.bottom=parseInt(a.borderBottomWidth,10)||0,b.left=parseInt(a.borderLeftWidth,10)||0,b.right=parseInt(a.borderRightWidth,10)||0)):document.documentElement.currentStyle&&c.currentStyle&&(b.top=parseInt(c.currentStyle.borderTopWidth,10)||0,b.bottom=parseInt(c.currentStyle.borderBottomWidth,10)||0,b.left=parseInt(c.currentStyle.borderLeftWidth,10)||0,b.right=parseInt(c.currentStyle.borderRightWidth,10)||0),b},b.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},b.prototype.draw=function(){this.createInfoBoxDiv_();var a=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=a.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(a.y+this.pixelOffset_.height)+"px":this.div_.style.top=a.y+this.pixelOffset_.height+"px",this.isHidden_?this.div_.style.visibility="hidden":this.div_.style.visibility="visible"},b.prototype.setOptions=function(a){"undefined"!=typeof a.boxClass&&(this.boxClass_=a.boxClass,this.setBoxStyle_()),"undefined"!=typeof a.boxStyle&&(this.boxStyle_=a.boxStyle,this.setBoxStyle_()),"undefined"!=typeof a.content&&this.setContent(a.content),"undefined"!=typeof a.disableAutoPan&&(this.disableAutoPan_=a.disableAutoPan),"undefined"!=typeof a.maxWidth&&(this.maxWidth_=a.maxWidth),"undefined"!=typeof a.pixelOffset&&(this.pixelOffset_=a.pixelOffset),"undefined"!=typeof a.alignBottom&&(this.alignBottom_=a.alignBottom),"undefined"!=typeof a.position&&this.setPosition(a.position),"undefined"!=typeof a.zIndex&&this.setZIndex(a.zIndex),"undefined"!=typeof a.closeBoxMargin&&(this.closeBoxMargin_=a.closeBoxMargin),"undefined"!=typeof a.closeBoxURL&&(this.closeBoxURL_=a.closeBoxURL),"undefined"!=typeof a.infoBoxClearance&&(this.infoBoxClearance_=a.infoBoxClearance),"undefined"!=typeof a.isHidden&&(this.isHidden_=a.isHidden),"undefined"!=typeof a.visible&&(this.isHidden_=!a.visible),"undefined"!=typeof a.enableEventPropagation&&(this.enableEventPropagation_=a.enableEventPropagation),this.div_&&this.draw()},b.prototype.setContent=function(a){this.content_=a,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),"undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px","undefined"==typeof a.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+a:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(a))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},b.prototype.setPosition=function(a){this.position_=a,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},b.prototype.setZIndex=function(a){this.zIndex_=a,this.div_&&(this.div_.style.zIndex=a),google.maps.event.trigger(this,"zindex_changed")},b.prototype.setVisible=function(a){this.isHidden_=!a,this.div_&&(this.div_.style.visibility=this.isHidden_?"hidden":"visible")},b.prototype.getContent=function(){return this.content_},b.prototype.getPosition=function(){return this.position_},b.prototype.getZIndex=function(){return this.zIndex_},b.prototype.getVisible=function(){var a;return a="undefined"==typeof this.getMap()||null===this.getMap()?!1:!this.isHidden_},b.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},b.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},b.prototype.open=function(a,b){var c=this;b&&(this.position_=b.getPosition(),this.moveListener_=google.maps.event.addListener(b,"position_changed",function(){c.setPosition(this.getPosition())})),this.setMap(a),this.div_&&this.panBox_()},b.prototype.close=function(){var a;if(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.eventListeners_){for(a=0;a<this.eventListeners_.length;a++)google.maps.event.removeListener(this.eventListeners_[a]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)},function(){function b(a,b){var c=this,d=new google.maps.OverlayView;d.onAdd=function(){c.init_(a,b)},d.draw=function(){},d.onRemove=function(){},d.setMap(a),this.prjov_=d}var c=function(a){var b;switch(a){case"thin":b="2px";break;case"medium":b="4px";break;case"thick":b="6px";break;default:b=a}return b},d=function(a){var b,d={};if(document.defaultView&&document.defaultView.getComputedStyle){if(b=a.ownerDocument.defaultView.getComputedStyle(a,""))return d.top=parseInt(b.borderTopWidth,10)||0,d.bottom=parseInt(b.borderBottomWidth,10)||0,d.left=parseInt(b.borderLeftWidth,10)||0,d.right=parseInt(b.borderRightWidth,10)||0,d}else if(document.documentElement.currentStyle&&a.currentStyle)return d.top=parseInt(c(a.currentStyle.borderTopWidth),10)||0,d.bottom=parseInt(c(a.currentStyle.borderBottomWidth),10)||0,d.left=parseInt(c(a.currentStyle.borderLeftWidth),10)||0,d.right=parseInt(c(a.currentStyle.borderRightWidth),10)||0,d;return d.top=parseInt(a.style["border-top-width"],10)||0,d.bottom=parseInt(a.style["border-bottom-width"],10)||0,d.left=parseInt(a.style["border-left-width"],10)||0,d.right=parseInt(a.style["border-right-width"],10)||0,d},e={x:0,y:0},f=function(a){e.x="undefined"!=typeof document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft,e.y="undefined"!=typeof document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop};f();var g=function(b){var c=0,d=0;return b=b||a.event,"undefined"!=typeof b.pageX?(c=b.pageX,d=b.pageY):"undefined"!=typeof b.clientX&&(c=b.clientX+e.x,d=b.clientY+e.y),{left:c,top:d}},h=function(b){for(var c=b.offsetLeft,d=b.offsetTop,e=b.offsetParent;null!==e;){e!==document.body&&e!==document.documentElement&&(c-=e.scrollLeft,d-=e.scrollTop);var f=e,g=f.offsetLeft,h=f.offsetTop;if(!g&&!h&&a.getComputedStyle){var i=document.defaultView.getComputedStyle(f,null).MozTransform||document.defaultView.getComputedStyle(f,null).WebkitTransform;if(i&&"string"==typeof i){var j=i.split(",");g+=parseInt(j[4],10)||0,h+=parseInt(j[5],10)||0}}c+=g,d+=h,e=e.offsetParent}return{left:c,top:d}},i=function(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},j=function(a,b){"undefined"!=typeof b&&(a.style.opacity=b),"undefined"!=typeof a.style.opacity&&""!==a.style.opacity&&(a.style.filter="alpha(opacity="+100*a.style.opacity+")")};b.prototype.init_=function(b,c){var e,g=this;for(this.map_=b,c=c||{},this.key_=c.key||"shift",this.key_=this.key_.toLowerCase(),this.borderWidths_=d(this.map_.getDiv()),this.veilDiv_=[],e=0;4>e;e++)this.veilDiv_[e]=document.createElement("div"),this.veilDiv_[e].onselectstart=function(){return!1},i(this.veilDiv_[e].style,{backgroundColor:"gray",opacity:.25,cursor:"crosshair"}),i(this.veilDiv_[e].style,c.paneStyle),i(this.veilDiv_[e].style,c.veilStyle),i(this.veilDiv_[e].style,{position:"absolute",overflow:"hidden",display:"none"}),"shift"===this.key_&&(this.veilDiv_[e].style.MozUserSelect="none"),j(this.veilDiv_[e]),"transparent"===this.veilDiv_[e].style.backgroundColor&&(this.veilDiv_[e].style.backgroundColor="white",j(this.veilDiv_[e],0)),this.map_.getDiv().appendChild(this.veilDiv_[e]);this.noZoom_=c.noZoom||!1,this.visualEnabled_=c.visualEnabled||!1,this.visualClass_=c.visualClass||"",this.visualPosition_=c.visualPosition||google.maps.ControlPosition.LEFT_TOP,this.visualPositionOffset_=c.visualPositionOffset||new google.maps.Size(35,0),this.visualPositionIndex_=c.visualPositionIndex||null,this.visualSprite_=c.visualSprite||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/mapfiles/ftr/controls/dragzoom_btn.png",this.visualSize_=c.visualSize||new google.maps.Size(20,20),this.visualTips_=c.visualTips||{},this.visualTips_.off=this.visualTips_.off||"Turn on drag zoom mode",this.visualTips_.on=this.visualTips_.on||"Turn off drag zoom mode",this.boxDiv_=document.createElement("div"),i(this.boxDiv_.style,{border:"4px solid #736AFF"}),i(this.boxDiv_.style,c.boxStyle),i(this.boxDiv_.style,{position:"absolute",display:"none"}),j(this.boxDiv_),this.map_.getDiv().appendChild(this.boxDiv_),this.boxBorderWidths_=d(this.boxDiv_),this.listeners_=[google.maps.event.addDomListener(document,"keydown",function(a){g.onKeyDown_(a)}),google.maps.event.addDomListener(document,"keyup",function(a){g.onKeyUp_(a)}),google.maps.event.addDomListener(this.veilDiv_[0],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[1],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[2],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(this.veilDiv_[3],"mousedown",function(a){g.onMouseDown_(a)}),google.maps.event.addDomListener(document,"mousedown",function(a){g.onMouseDownDocument_(a)}),google.maps.event.addDomListener(document,"mousemove",function(a){g.onMouseMove_(a)}),google.maps.event.addDomListener(document,"mouseup",function(a){g.onMouseUp_(a)}),google.maps.event.addDomListener(a,"scroll",f)],this.hotKeyDown_=!1,this.mouseDown_=!1,this.dragging_=!1,this.startPt_=null,this.endPt_=null,this.mapWidth_=null,this.mapHeight_=null,this.mousePosn_=null,this.mapPosn_=null,this.visualEnabled_&&(this.buttonDiv_=this.initControl_(this.visualPositionOffset_),null!==this.visualPositionIndex_&&(this.buttonDiv_.index=this.visualPositionIndex_),this.map_.controls[this.visualPosition_].push(this.buttonDiv_),this.controlIndex_=this.map_.controls[this.visualPosition_].length-1)},b.prototype.initControl_=function(a){var b,c,d=this;return b=document.createElement("div"),b.className=this.visualClass_,b.style.position="relative",b.style.overflow="hidden",b.style.height=this.visualSize_.height+"px",b.style.width=this.visualSize_.width+"px",b.title=this.visualTips_.off,c=document.createElement("img"),c.src=this.visualSprite_,c.style.position="absolute",c.style.left=-(2*this.visualSize_.width)+"px",c.style.top="0px",b.appendChild(c),b.onclick=function(a){d.hotKeyDown_=!d.hotKeyDown_,d.hotKeyDown_?(d.buttonDiv_.firstChild.style.left=-(0*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.on,d.activatedByControl_=!0,google.maps.event.trigger(d,"activate")):(d.buttonDiv_.firstChild.style.left=-(2*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.off,google.maps.event.trigger(d,"deactivate")),d.onMouseMove_(a)},b.onmouseover=function(){d.buttonDiv_.firstChild.style.left=-(1*d.visualSize_.width)+"px"},b.onmouseout=function(){d.hotKeyDown_?(d.buttonDiv_.firstChild.style.left=-(0*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.on):(d.buttonDiv_.firstChild.style.left=-(2*d.visualSize_.width)+"px",d.buttonDiv_.title=d.visualTips_.off)},b.ondragstart=function(){return!1},i(b.style,{cursor:"pointer",marginTop:a.height+"px",marginLeft:a.width+"px"}),b},b.prototype.isHotKeyDown_=function(b){var c;if(b=b||a.event,c=b.shiftKey&&"shift"===this.key_||b.altKey&&"alt"===this.key_||b.ctrlKey&&"ctrl"===this.key_,!c)switch(b.keyCode){case 16:"shift"===this.key_&&(c=!0);break;case 17:"ctrl"===this.key_&&(c=!0);break;case 18:"alt"===this.key_&&(c=!0)}return c},b.prototype.isMouseOnMap_=function(){var a=this.mousePosn_;if(a){var b=this.mapPosn_,c=this.map_.getDiv();return a.left>b.left&&a.left<b.left+c.offsetWidth&&a.top>b.top&&a.top<b.top+c.offsetHeight}return!1},b.prototype.setVeilVisibility_=function(){var a;if(this.map_&&this.hotKeyDown_&&this.isMouseOnMap_()){var b=this.map_.getDiv();if(this.mapWidth_=b.offsetWidth-(this.borderWidths_.left+this.borderWidths_.right),this.mapHeight_=b.offsetHeight-(this.borderWidths_.top+this.borderWidths_.bottom),this.activatedByControl_){var c=parseInt(this.buttonDiv_.style.left,10)+this.visualPositionOffset_.width,d=parseInt(this.buttonDiv_.style.top,10)+this.visualPositionOffset_.height,e=this.visualSize_.width,f=this.visualSize_.height;for(this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.width=c+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",this.veilDiv_[1].style.top="0px",this.veilDiv_[1].style.left=c+e+"px",this.veilDiv_[1].style.width=this.mapWidth_-(c+e)+"px",this.veilDiv_[1].style.height=this.mapHeight_+"px",this.veilDiv_[2].style.top="0px",this.veilDiv_[2].style.left=c+"px",this.veilDiv_[2].style.width=e+"px",this.veilDiv_[2].style.height=d+"px",this.veilDiv_[3].style.top=d+f+"px",this.veilDiv_[3].style.left=c+"px",this.veilDiv_[3].style.width=e+"px",this.veilDiv_[3].style.height=this.mapHeight_-(d+f)+"px",a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="block"}else{for(this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.width=this.mapWidth_+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",a=1;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.width="0px",this.veilDiv_[a].style.height="0px";for(a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="block"}}else for(a=0;a<this.veilDiv_.length;a++)this.veilDiv_[a].style.display="none"},b.prototype.onKeyDown_=function(a){this.map_&&!this.hotKeyDown_&&this.isHotKeyDown_(a)&&(this.mapPosn_=h(this.map_.getDiv()),this.hotKeyDown_=!0,this.activatedByControl_=!1,this.setVeilVisibility_(),google.maps.event.trigger(this,"activate"))},b.prototype.getMousePoint_=function(a){var b=g(a),c=new google.maps.Point;return c.x=b.left-this.mapPosn_.left-this.borderWidths_.left,c.y=b.top-this.mapPosn_.top-this.borderWidths_.top,c.x=Math.min(c.x,this.mapWidth_),c.y=Math.min(c.y,this.mapHeight_),c.x=Math.max(c.x,0),c.y=Math.max(c.y,0),c},b.prototype.onMouseDown_=function(a){if(this.map_&&this.hotKeyDown_){this.mapPosn_=h(this.map_.getDiv()),this.dragging_=!0,this.startPt_=this.endPt_=this.getMousePoint_(a),this.boxDiv_.style.width=this.boxDiv_.style.height="0px";var b=this.prjov_.getProjection(),c=b.fromContainerPixelToLatLng(this.startPt_);google.maps.event.trigger(this,"dragstart",c)}},b.prototype.onMouseDownDocument_=function(a){this.mouseDown_=!0},b.prototype.onMouseMove_=function(a){if(this.mousePosn_=g(a),this.dragging_){this.endPt_=this.getMousePoint_(a);var b=Math.min(this.startPt_.x,this.endPt_.x),c=Math.min(this.startPt_.y,this.endPt_.y),d=Math.abs(this.startPt_.x-this.endPt_.x),e=Math.abs(this.startPt_.y-this.endPt_.y),f=Math.max(0,d-(this.boxBorderWidths_.left+this.boxBorderWidths_.right)),i=Math.max(0,e-(this.boxBorderWidths_.top+this.boxBorderWidths_.bottom));this.veilDiv_[0].style.top="0px",this.veilDiv_[0].style.left="0px",this.veilDiv_[0].style.width=b+"px",this.veilDiv_[0].style.height=this.mapHeight_+"px",this.veilDiv_[1].style.top="0px",this.veilDiv_[1].style.left=b+d+"px",this.veilDiv_[1].style.width=this.mapWidth_-(b+d)+"px",this.veilDiv_[1].style.height=this.mapHeight_+"px",this.veilDiv_[2].style.top="0px",this.veilDiv_[2].style.left=b+"px",this.veilDiv_[2].style.width=d+"px",this.veilDiv_[2].style.height=c+"px",this.veilDiv_[3].style.top=c+e+"px",this.veilDiv_[3].style.left=b+"px",this.veilDiv_[3].style.width=d+"px",this.veilDiv_[3].style.height=this.mapHeight_-(c+e)+"px",this.boxDiv_.style.top=c+"px",this.boxDiv_.style.left=b+"px",this.boxDiv_.style.width=f+"px",this.boxDiv_.style.height=i+"px",this.boxDiv_.style.display="block",google.maps.event.trigger(this,"drag",new google.maps.Point(b,c+e),new google.maps.Point(b+d,c),this.prjov_.getProjection())}else this.mouseDown_||(this.mapPosn_=h(this.map_.getDiv()),this.setVeilVisibility_())},b.prototype.onMouseUp_=function(a){var b,c=this;if(this.mouseDown_=!1,this.dragging_){if(this.getMousePoint_(a).x===this.startPt_.x&&this.getMousePoint_(a).y===this.startPt_.y)return void this.onKeyUp_(a);var d=Math.min(this.startPt_.x,this.endPt_.x),e=Math.min(this.startPt_.y,this.endPt_.y),f=Math.abs(this.startPt_.x-this.endPt_.x),g=Math.abs(this.startPt_.y-this.endPt_.y),h=!0;h&&(d+=this.borderWidths_.left,e+=this.borderWidths_.top);var i=this.prjov_.getProjection(),j=i.fromContainerPixelToLatLng(new google.maps.Point(d,e+g)),k=i.fromContainerPixelToLatLng(new google.maps.Point(d+f,e)),l=new google.maps.LatLngBounds(j,k);if(this.noZoom_)this.boxDiv_.style.display="none";else{b=this.map_.getZoom(),this.map_.fitBounds(l),this.map_.getZoom()<b&&this.map_.setZoom(b);var m=i.fromLatLngToContainerPixel(j),n=i.fromLatLngToContainerPixel(k);h&&(m.x-=this.borderWidths_.left,m.y-=this.borderWidths_.top,n.x-=this.borderWidths_.left,n.y-=this.borderWidths_.top),this.boxDiv_.style.left=m.x+"px",this.boxDiv_.style.top=n.y+"px",this.boxDiv_.style.width=Math.abs(n.x-m.x)-(this.boxBorderWidths_.left+this.boxBorderWidths_.right)+"px",this.boxDiv_.style.height=Math.abs(n.y-m.y)-(this.boxBorderWidths_.top+this.boxBorderWidths_.bottom)+"px",setTimeout(function(){c.boxDiv_.style.display="none"},1e3)}this.dragging_=!1,this.onMouseMove_(a),google.maps.event.trigger(this,"dragend",l),this.isHotKeyDown_(a)||this.onKeyUp_(a)}},b.prototype.onKeyUp_=function(a){var b,c,d,e,f,g,h,i,j=null;if(this.map_&&this.hotKeyDown_){for(this.hotKeyDown_=!1,this.dragging_&&(this.boxDiv_.style.display="none",this.dragging_=!1,c=Math.min(this.startPt_.x,this.endPt_.x),d=Math.min(this.startPt_.y,this.endPt_.y),e=Math.abs(this.startPt_.x-this.endPt_.x),f=Math.abs(this.startPt_.y-this.endPt_.y),g=this.prjov_.getProjection(),h=g.fromContainerPixelToLatLng(new google.maps.Point(c,d+f)),i=g.fromContainerPixelToLatLng(new google.maps.Point(c+e,d)),j=new google.maps.LatLngBounds(h,i)),b=0;b<this.veilDiv_.length;b++)this.veilDiv_[b].style.display="none";this.visualEnabled_&&(this.buttonDiv_.firstChild.style.left=-(2*this.visualSize_.width)+"px",this.buttonDiv_.title=this.visualTips_.off,this.buttonDiv_.style.display=""),google.maps.event.trigger(this,"deactivate",j)}},google.maps.Map.prototype.enableKeyDragZoom=function(a){this.dragZoom_=new b(this,a)},google.maps.Map.prototype.disableKeyDragZoom=function(){var a,b=this.dragZoom_;if(b){for(a=0;a<b.listeners_.length;++a)google.maps.event.removeListener(b.listeners_[a]);for(this.getDiv().removeChild(b.boxDiv_),a=0;a<b.veilDiv_.length;a++)this.getDiv().removeChild(b.veilDiv_[a]);b.visualEnabled_&&this.controls[b.visualPosition_].removeAt(b.controlIndex_),b.prjov_.setMap(null),this.dragZoom_=null;
}},google.maps.Map.prototype.keyDragZoomEnabled=function(){return null!==this.dragZoom_},google.maps.Map.prototype.getDragZoomObject=function(){return this.dragZoom_}}(),d.prototype.onAdd=function(){var a,b,c=this;this.div_=document.createElement("div"),this.div_.className=this.className_,this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",function(){b=a}),google.maps.event.addDomListener(this.div_,"mousedown",function(){a=!0,b=!1}),google.maps.event.addDomListener(this.div_,"click",function(d){if(a=!1,!b){var e,f,g=c.cluster_.getMarkerClusterer();google.maps.event.trigger(g,"click",c.cluster_),google.maps.event.trigger(g,"clusterclick",c.cluster_),g.getZoomOnClick()&&(f=g.getMaxZoom(),e=c.cluster_.getBounds(),g.getMap().fitBounds(e),setTimeout(function(){g.getMap().fitBounds(e),null!==f&&g.getMap().getZoom()>f&&g.getMap().setZoom(f+1)},100)),d.cancelBubble=!0,d.stopPropagation&&d.stopPropagation()}}),google.maps.event.addDomListener(this.div_,"mouseover",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseover",c.cluster_)}),google.maps.event.addDomListener(this.div_,"mouseout",function(){var a=c.cluster_.getMarkerClusterer();google.maps.event.trigger(a,"mouseout",c.cluster_)})},d.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},d.prototype.draw=function(){if(this.visible_){var a=this.getPosFromLatLng_(this.center_);this.div_.style.top=a.y+"px",this.div_.style.left=a.x+"px"}},d.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},d.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",this.cluster_.getMarkerClusterer().enableRetinaIcons_||(a+="clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);"),a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>","undefined"==typeof this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},d.prototype.useStyle=function(a){this.sums_=a;var b=Math.max(0,a.index-1);b=Math.min(this.styles_.length-1,b);var c=this.styles_[b];this.url_=c.url,this.height_=c.height,this.width_=c.width,this.anchorText_=c.anchorText||[0,0],this.anchorIcon_=c.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)],this.textColor_=c.textColor||"black",this.textSize_=c.textSize||11,this.textDecoration_=c.textDecoration||"none",this.fontWeight_=c.fontWeight||"bold",this.fontStyle_=c.fontStyle||"normal",this.fontFamily_=c.fontFamily||"Arial,sans-serif",this.backgroundPosition_=c.backgroundPosition||"0 0"},d.prototype.setCenter=function(a){this.center_=a},d.prototype.createCss=function(a){var b=[];return b.push("cursor: pointer;"),b.push("position: absolute; top: "+a.y+"px; left: "+a.x+"px;"),b.push("width: "+this.width_+"px; height: "+this.height_+"px;"),b.join("")},d.prototype.getPosFromLatLng_=function(a){var b=this.getProjection().fromLatLngToDivPixel(a);return b.x-=this.anchorIcon_[1],b.y-=this.anchorIcon_[0],b.x=parseInt(b.x,10),b.y=parseInt(b.y,10),b},e.prototype.getSize=function(){return this.markers_.length},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getCenter=function(){return this.center_},e.prototype.getMap=function(){return this.map_},e.prototype.getMarkerClusterer=function(){return this.markerClusterer_},e.prototype.getBounds=function(){var a,b=new google.maps.LatLngBounds(this.center_,this.center_),c=this.getMarkers();for(a=0;a<c.length;a++)b.extend(c[a].getPosition());return b},e.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},e.prototype.addMarker=function(a){var b,c,d;if(this.isMarkerAlreadyAdded_(a))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();if(a.isAdded=!0,this.markers_.push(a),c=this.markers_.length,d=this.markerClusterer_.getMaxZoom(),null!==d&&this.map_.getZoom()>d)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c<this.minClusterSize_)a.getMap()!==this.map_&&a.setMap(this.map_);else if(c===this.minClusterSize_)for(b=0;c>b;b++)this.markers_[b].setMap(null);else a.setMap(null);return this.updateIcon_(),!0},e.prototype.isMarkerInClusterBounds=function(a){return this.bounds_.contains(a.getPosition())},e.prototype.calculateBounds_=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(a)},e.prototype.updateIcon_=function(){var a=this.markers_.length,b=this.markerClusterer_.getMaxZoom();if(null!==b&&this.map_.getZoom()>b)return void this.clusterIcon_.hide();if(a<this.minClusterSize_)return void this.clusterIcon_.hide();var c=this.markerClusterer_.getStyles().length,d=this.markerClusterer_.getCalculator()(this.markers_,c);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(d),this.clusterIcon_.show()},e.prototype.isMarkerAlreadyAdded_=function(a){var b;if(this.markers_.indexOf)return-1!==this.markers_.indexOf(a);for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b])return!0;return!1},f.prototype.onAdd=function(){var a=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",function(){a.resetViewport_(!1),(this.getZoom()===(this.get("minZoom")||0)||this.getZoom()===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")}),google.maps.event.addListener(this.getMap(),"idle",function(){a.redraw_()})]},f.prototype.onRemove=function(){var a;for(a=0;a<this.markers_.length;a++)this.markers_[a].getMap()!==this.activeMap_&&this.markers_[a].setMap(this.activeMap_);for(a=0;a<this.clusters_.length;a++)this.clusters_[a].remove();for(this.clusters_=[],a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},f.prototype.draw=function(){},f.prototype.setupStyles_=function(){var a,b;if(!(this.styles_.length>0))for(a=0;a<this.imageSizes_.length;a++)b=this.imageSizes_[a],this.styles_.push({url:this.imagePath_+(a+1)+"."+this.imageExtension_,height:b,width:b})},f.prototype.fitMapToMarkers=function(){var a,b=this.getMarkers(),c=new google.maps.LatLngBounds;for(a=0;a<b.length;a++)c.extend(b[a].getPosition());this.getMap().fitBounds(c)},f.prototype.getGridSize=function(){return this.gridSize_},f.prototype.setGridSize=function(a){this.gridSize_=a},f.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},f.prototype.setMinimumClusterSize=function(a){this.minClusterSize_=a},f.prototype.getMaxZoom=function(){return this.maxZoom_},f.prototype.setMaxZoom=function(a){this.maxZoom_=a},f.prototype.getStyles=function(){return this.styles_},f.prototype.setStyles=function(a){this.styles_=a},f.prototype.getTitle=function(){return this.title_},f.prototype.setTitle=function(a){this.title_=a},f.prototype.getZoomOnClick=function(){return this.zoomOnClick_},f.prototype.setZoomOnClick=function(a){this.zoomOnClick_=a},f.prototype.getAverageCenter=function(){return this.averageCenter_},f.prototype.setAverageCenter=function(a){this.averageCenter_=a},f.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},f.prototype.setIgnoreHidden=function(a){this.ignoreHidden_=a},f.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},f.prototype.setEnableRetinaIcons=function(a){this.enableRetinaIcons_=a},f.prototype.getImageExtension=function(){return this.imageExtension_},f.prototype.setImageExtension=function(a){this.imageExtension_=a},f.prototype.getImagePath=function(){return this.imagePath_},f.prototype.setImagePath=function(a){this.imagePath_=a},f.prototype.getImageSizes=function(){return this.imageSizes_},f.prototype.setImageSizes=function(a){this.imageSizes_=a},f.prototype.getCalculator=function(){return this.calculator_},f.prototype.setCalculator=function(a){this.calculator_=a},f.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},f.prototype.setBatchSizeIE=function(a){this.batchSizeIE_=a},f.prototype.getClusterClass=function(){return this.clusterClass_},f.prototype.setClusterClass=function(a){this.clusterClass_=a},f.prototype.getMarkers=function(){return this.markers_},f.prototype.getTotalMarkers=function(){return this.markers_.length},f.prototype.getClusters=function(){return this.clusters_},f.prototype.getTotalClusters=function(){return this.clusters_.length},f.prototype.addMarker=function(a,b){this.pushMarkerTo_(a),b||this.redraw_()},f.prototype.addMarkers=function(a,b){var c;for(c in a)a.hasOwnProperty(c)&&this.pushMarkerTo_(a[c]);b||this.redraw_()},f.prototype.pushMarkerTo_=function(a){if(a.getDraggable()){var b=this;google.maps.event.addListener(a,"dragend",function(){b.ready_&&(this.isAdded=!1,b.repaint())})}a.isAdded=!1,this.markers_.push(a)},f.prototype.removeMarker=function(a,b){var c=this.removeMarker_(a);return!b&&c&&this.repaint(),c},f.prototype.removeMarkers=function(a,b){var c,d,e=!1;for(c=0;c<a.length;c++)d=this.removeMarker_(a[c]),e=e||d;return!b&&e&&this.repaint(),e},f.prototype.removeMarker_=function(a){var b,c=-1;if(this.markers_.indexOf)c=this.markers_.indexOf(a);else for(b=0;b<this.markers_.length;b++)if(a===this.markers_[b]){c=b;break}return-1===c?!1:(a.setMap(null),this.markers_.splice(c,1),!0)},f.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},f.prototype.repaint=function(){var a=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout(function(){var b;for(b=0;b<a.length;b++)a[b].remove()},0)},f.prototype.getExtendedBounds=function(a){var b=this.getProjection(),c=new google.maps.LatLng(a.getNorthEast().lat(),a.getNorthEast().lng()),d=new google.maps.LatLng(a.getSouthWest().lat(),a.getSouthWest().lng()),e=b.fromLatLngToDivPixel(c);e.x+=this.gridSize_,e.y-=this.gridSize_;var f=b.fromLatLngToDivPixel(d);f.x-=this.gridSize_,f.y+=this.gridSize_;var g=b.fromDivPixelToLatLng(e),h=b.fromDivPixelToLatLng(f);return a.extend(g),a.extend(h),a},f.prototype.redraw_=function(){this.createClusters_(0)},f.prototype.resetViewport_=function(a){var b,c;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();for(this.clusters_=[],b=0;b<this.markers_.length;b++)c=this.markers_[b],c.isAdded=!1,a&&c.setMap(null)},f.prototype.distanceBetweenPoints_=function(a,b){var c=6371,d=(b.lat()-a.lat())*Math.PI/180,e=(b.lng()-a.lng())*Math.PI/180,f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(a.lat()*Math.PI/180)*Math.cos(b.lat()*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),h=c*g;return h},f.prototype.isMarkerInBounds_=function(a,b){return b.contains(a.getPosition())},f.prototype.addToClosestCluster_=function(a){var b,c,d,f,g=4e4,h=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],f=d.getCenter(),f&&(c=this.distanceBetweenPoints_(f,a.getPosition()),g>c&&(g=c,h=d));h&&h.isMarkerInClusterBounds(a)?h.addMarker(a):(d=new e(this),d.addMarker(a),this.clusters_.push(d))},f.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length);for(b=a;g>b;b++)c=this.markers_[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);g<this.markers_.length?this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0):(delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this))}},f.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)this.prototype[b]=a.prototype[b];return this}.apply(a,[b])},f.CALCULATOR=function(a,b){for(var c=0,d="",e=a.length.toString(),f=e;0!==f;)f=parseInt(f/10,10),c++;return c=Math.min(c,b),{text:e,index:c,title:d}},f.BATCH_SIZE=2e3,f.BATCH_SIZE_IE=500,f.IMAGE_PATH="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m",f.IMAGE_EXTENSION="png",f.IMAGE_SIZES=[53,56,66,78,90],g(h,google.maps.OverlayView),h.getSharedCross=function(a){var b;return"undefined"==typeof h.getSharedCross.crossDiv&&(b=document.createElement("img"),b.style.cssText="position: absolute; z-index: 1000002; display: none;",b.style.marginLeft="-8px",b.style.marginTop="-9px",b.src=a,h.getSharedCross.crossDiv=b),h.getSharedCross.crossDiv},h.prototype.onAdd=function(){var a,b,c,d,e,f,g,i=this,j=!1,k=!1,l=20,m="url("+this.handCursorURL_+")",n=function(a){a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()},o=function(){i.marker_.setAnimation(null)};this.getPanes().overlayImage.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),"undefined"==typeof h.getSharedCross.processed&&(this.getPanes().overlayImage.appendChild(this.crossDiv_),h.getSharedCross.processed=!0),this.listeners_=[google.maps.event.addDomListener(this.eventDiv_,"mouseover",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(this.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseover",a))}),google.maps.event.addDomListener(this.eventDiv_,"mouseout",function(a){!i.marker_.getDraggable()&&!i.marker_.getClickable()||k||(this.style.cursor=i.marker_.getCursor(),google.maps.event.trigger(i.marker_,"mouseout",a))}),google.maps.event.addDomListener(this.eventDiv_,"mousedown",function(a){k=!1,i.marker_.getDraggable()&&(j=!0,this.style.cursor=m),(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"mousedown",a),n(a))}),google.maps.event.addDomListener(document,"mouseup",function(b){var c;if(j&&(j=!1,i.eventDiv_.style.cursor="pointer",google.maps.event.trigger(i.marker_,"mouseup",b)),k){if(e){c=i.getProjection().fromLatLngToDivPixel(i.marker_.getPosition()),c.y+=l,i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(c));try{i.marker_.setAnimation(google.maps.Animation.BOUNCE),setTimeout(o,1406)}catch(f){}}i.crossDiv_.style.display="none",i.marker_.setZIndex(a),d=!0,k=!1,b.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragend",b)}}),google.maps.event.addListener(i.marker_.getMap(),"mousemove",function(d){var h;j&&(k?(d.latLng=new google.maps.LatLng(d.latLng.lat()-b,d.latLng.lng()-c),h=i.getProjection().fromLatLngToDivPixel(d.latLng),e&&(i.crossDiv_.style.left=h.x+"px",i.crossDiv_.style.top=h.y+"px",i.crossDiv_.style.display="",h.y-=l),i.marker_.setPosition(i.getProjection().fromDivPixelToLatLng(h)),e&&(i.eventDiv_.style.top=h.y+l+"px"),google.maps.event.trigger(i.marker_,"drag",d)):(b=d.latLng.lat()-i.marker_.getPosition().lat(),c=d.latLng.lng()-i.marker_.getPosition().lng(),a=i.marker_.getZIndex(),f=i.marker_.getPosition(),g=i.marker_.getMap().getCenter(),e=i.marker_.get("raiseOnDrag"),k=!0,i.marker_.setZIndex(1e6),d.latLng=i.marker_.getPosition(),google.maps.event.trigger(i.marker_,"dragstart",d)))}),google.maps.event.addDomListener(document,"keydown",function(a){k&&27===a.keyCode&&(e=!1,i.marker_.setPosition(f),i.marker_.getMap().setCenter(g),google.maps.event.trigger(document,"mouseup",a))}),google.maps.event.addDomListener(this.eventDiv_,"click",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(d?d=!1:(google.maps.event.trigger(i.marker_,"click",a),n(a)))}),google.maps.event.addDomListener(this.eventDiv_,"dblclick",function(a){(i.marker_.getDraggable()||i.marker_.getClickable())&&(google.maps.event.trigger(i.marker_,"dblclick",a),n(a))}),google.maps.event.addListener(this.marker_,"dragstart",function(a){k||(e=this.get("raiseOnDrag"))}),google.maps.event.addListener(this.marker_,"drag",function(a){k||e&&(i.setPosition(l),i.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))}),google.maps.event.addListener(this.marker_,"dragend",function(a){k||e&&i.setPosition(0)}),google.maps.event.addListener(this.marker_,"position_changed",function(){i.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){i.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){i.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){i.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){i.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){i.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){i.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){i.setStyles()})]},h.prototype.onRemove=function(){var a;for(this.labelDiv_.parentNode.removeChild(this.labelDiv_),this.eventDiv_.parentNode.removeChild(this.eventDiv_),a=0;a<this.listeners_.length;a++)google.maps.event.removeListener(this.listeners_[a])},h.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},h.prototype.setContent=function(){var a=this.marker_.get("labelContent");"undefined"==typeof a.nodeType?(this.labelDiv_.innerHTML=a,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML):(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(a),a=a.cloneNode(!0),this.eventDiv_.innerHTML="",this.eventDiv_.appendChild(a))},h.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},h.prototype.setStyles=function(){var a,b;this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",b=this.marker_.get("labelStyle");for(a in b)b.hasOwnProperty(a)&&(this.labelDiv_.style[a]=b[a],this.eventDiv_.style[a]=b[a]);this.setMandatoryStyles()},h.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden","undefined"!=typeof this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},h.prototype.setAnchor=function(){var a=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-a.x+"px",this.labelDiv_.style.marginTop=-a.y+"px",this.eventDiv_.style.marginLeft=-a.x+"px",this.eventDiv_.style.marginTop=-a.y+"px"},h.prototype.setPosition=function(a){var b=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());"undefined"==typeof a&&(a=0),this.labelDiv_.style.left=Math.round(b.x)+"px",this.labelDiv_.style.top=Math.round(b.y-a)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},h.prototype.setZIndex=function(){var a=this.marker_.get("labelInBackground")?-1:1;"undefined"==typeof this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+a,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},h.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none",this.eventDiv_.style.display=this.labelDiv_.style.display},g(i,google.maps.Marker),i.prototype.setMap=function(a){google.maps.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(a)},j.prototype=new google.maps.OverlayView,a.RichMarker=j,j.prototype.getVisible=function(){return this.get("visible")},j.prototype.getVisible=j.prototype.getVisible,j.prototype.setVisible=function(a){this.set("visible",a)},j.prototype.setVisible=j.prototype.setVisible,j.prototype.visible_changed=function(){this.ready_&&(this.markerWrapper_.style.display=this.getVisible()?"":"none",this.draw())},j.prototype.visible_changed=j.prototype.visible_changed,j.prototype.setFlat=function(a){this.set("flat",!!a)},j.prototype.setFlat=j.prototype.setFlat,j.prototype.getFlat=function(){return this.get("flat")},j.prototype.getFlat=j.prototype.getFlat,j.prototype.getWidth=function(){return this.get("width")},j.prototype.getWidth=j.prototype.getWidth,j.prototype.getHeight=function(){return this.get("height")},j.prototype.getHeight=j.prototype.getHeight,j.prototype.setShadow=function(a){this.set("shadow",a),this.flat_changed()},j.prototype.setShadow=j.prototype.setShadow,j.prototype.getShadow=function(){return this.get("shadow")},j.prototype.getShadow=j.prototype.getShadow,j.prototype.flat_changed=function(){this.ready_&&(this.markerWrapper_.style.boxShadow=this.markerWrapper_.style.webkitBoxShadow=this.markerWrapper_.style.MozBoxShadow=this.getFlat()?"":this.getShadow())},j.prototype.flat_changed=j.prototype.flat_changed,j.prototype.setZIndex=function(a){this.set("zIndex",a)},j.prototype.setZIndex=j.prototype.setZIndex,j.prototype.getZIndex=function(){return this.get("zIndex")},j.prototype.getZIndex=j.prototype.getZIndex,j.prototype.zIndex_changed=function(){this.getZIndex()&&this.ready_&&(this.markerWrapper_.style.zIndex=this.getZIndex())},j.prototype.zIndex_changed=j.prototype.zIndex_changed,j.prototype.getDraggable=function(){return this.get("draggable")},j.prototype.getDraggable=j.prototype.getDraggable,j.prototype.setDraggable=function(a){this.set("draggable",!!a)},j.prototype.setDraggable=j.prototype.setDraggable,j.prototype.draggable_changed=function(){this.ready_&&(this.getDraggable()?this.addDragging_(this.markerWrapper_):this.removeDragListeners_())},j.prototype.draggable_changed=j.prototype.draggable_changed,j.prototype.getPosition=function(){return this.get("position")},j.prototype.getPosition=j.prototype.getPosition,j.prototype.setPosition=function(a){this.set("position",a)},j.prototype.setPosition=j.prototype.setPosition,j.prototype.position_changed=function(){this.draw()},j.prototype.position_changed=j.prototype.position_changed,j.prototype.getAnchor=function(){return this.get("anchor")},j.prototype.getAnchor=j.prototype.getAnchor,j.prototype.setAnchor=function(a){this.set("anchor",a)},j.prototype.setAnchor=j.prototype.setAnchor,j.prototype.anchor_changed=function(){this.draw()},j.prototype.anchor_changed=j.prototype.anchor_changed,j.prototype.htmlToDocumentFragment_=function(a){var b=document.createElement("DIV");if(b.innerHTML=a,1==b.childNodes.length)return b.removeChild(b.firstChild);for(var c=document.createDocumentFragment();b.firstChild;)c.appendChild(b.firstChild);return c},j.prototype.removeChildren_=function(a){if(a)for(var b;b=a.firstChild;)a.removeChild(b)},j.prototype.setContent=function(a){this.set("content",a)},j.prototype.setContent=j.prototype.setContent,j.prototype.getContent=function(){return this.get("content")},j.prototype.getContent=j.prototype.getContent,j.prototype.content_changed=function(){if(this.markerContent_){this.removeChildren_(this.markerContent_);var a=this.getContent();if(a){"string"==typeof a&&(a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1"),a=this.htmlToDocumentFragment_(a)),this.markerContent_.appendChild(a);for(var b,c=this,d=this.markerContent_.getElementsByTagName("IMG"),e=0;b=d[e];e++)google.maps.event.addDomListener(b,"mousedown",function(a){c.getDraggable()&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1)}),google.maps.event.addDomListener(b,"load",function(){c.draw()});google.maps.event.trigger(this,"domready")}this.ready_&&this.draw()}},j.prototype.content_changed=j.prototype.content_changed,j.prototype.setCursor_=function(a){if(this.ready_){var b="";-1!==navigator.userAgent.indexOf("Gecko/")?("dragging"==a&&(b="-moz-grabbing"),"dragready"==a&&(b="-moz-grab"),"draggable"==a&&(b="pointer")):(("dragging"==a||"dragready"==a)&&(b="move"),"draggable"==a&&(b="pointer")),this.markerWrapper_.style.cursor!=b&&(this.markerWrapper_.style.cursor=b)}},j.prototype.startDrag=function(a){if(this.getDraggable()&&!this.dragging_){this.dragging_=!0;var b=this.getMap();this.mapDraggable_=b.get("draggable"),b.set("draggable",!1),this.mouseX_=a.clientX,this.mouseY_=a.clientY,this.setCursor_("dragready"),this.markerWrapper_.style.MozUserSelect="none",this.markerWrapper_.style.KhtmlUserSelect="none",this.markerWrapper_.style.WebkitUserSelect="none",this.markerWrapper_.unselectable="on",this.markerWrapper_.onselectstart=function(){return!1},this.addDraggingListeners_(),google.maps.event.trigger(this,"dragstart")}},j.prototype.stopDrag=function(){this.getDraggable()&&this.dragging_&&(this.dragging_=!1,this.getMap().set("draggable",this.mapDraggable_),this.mouseX_=this.mouseY_=this.mapDraggable_=null,this.markerWrapper_.style.MozUserSelect="",this.markerWrapper_.style.KhtmlUserSelect="",this.markerWrapper_.style.WebkitUserSelect="",this.markerWrapper_.unselectable="off",this.markerWrapper_.onselectstart=function(){},this.removeDraggingListeners_(),this.setCursor_("draggable"),google.maps.event.trigger(this,"dragend"),this.draw())},j.prototype.drag=function(a){if(!this.getDraggable()||!this.dragging_)return void this.stopDrag();var b=this.mouseX_-a.clientX,c=this.mouseY_-a.clientY;this.mouseX_=a.clientX,this.mouseY_=a.clientY;var d=parseInt(this.markerWrapper_.style.left,10)-b,e=parseInt(this.markerWrapper_.style.top,10)-c;this.markerWrapper_.style.left=d+"px",this.markerWrapper_.style.top=e+"px";var f=this.getOffset_(),g=new google.maps.Point(d-f.width,e-f.height),h=this.getProjection();this.setPosition(h.fromDivPixelToLatLng(g)),this.setCursor_("dragging"),google.maps.event.trigger(this,"drag")},j.prototype.removeDragListeners_=function(){this.draggableListener_&&(google.maps.event.removeListener(this.draggableListener_),delete this.draggableListener_),this.setCursor_("")},j.prototype.addDragging_=function(a){if(a){var b=this;this.draggableListener_=google.maps.event.addDomListener(a,"mousedown",function(a){b.startDrag(a)}),this.setCursor_("draggable")}},j.prototype.addDraggingListeners_=function(){var b=this;this.markerWrapper_.setCapture?(this.markerWrapper_.setCapture(!0),this.draggingListeners_=[google.maps.event.addDomListener(this.markerWrapper_,"mousemove",function(a){b.drag(a)},!0),google.maps.event.addDomListener(this.markerWrapper_,"mouseup",function(){b.stopDrag(),b.markerWrapper_.releaseCapture()},!0)]):this.draggingListeners_=[google.maps.event.addDomListener(a,"mousemove",function(a){b.drag(a)},!0),google.maps.event.addDomListener(a,"mouseup",function(){b.stopDrag()},!0)]},j.prototype.removeDraggingListeners_=function(){if(this.draggingListeners_){for(var a,b=0;a=this.draggingListeners_[b];b++)google.maps.event.removeListener(a);this.draggingListeners_.length=0}},j.prototype.getOffset_=function(){var a=this.getAnchor();if("object"==typeof a)return a;var b=new google.maps.Size(0,0);if(!this.markerContent_)return b;var c=this.markerContent_.offsetWidth,d=this.markerContent_.offsetHeight;switch(a){case k.TOP_LEFT:break;case k.TOP:b.width=-c/2;break;case k.TOP_RIGHT:b.width=-c;break;case k.LEFT:b.height=-d/2;break;case k.MIDDLE:b.width=-c/2,b.height=-d/2;break;case k.RIGHT:b.width=-c,b.height=-d/2;break;case k.BOTTOM_LEFT:b.height=-d;break;case k.BOTTOM:b.width=-c/2,b.height=-d;break;case k.BOTTOM_RIGHT:b.width=-c,b.height=-d}return b},j.prototype.onAdd=function(){if(this.markerWrapper_||(this.markerWrapper_=document.createElement("DIV"),this.markerWrapper_.style.position="absolute"),this.getZIndex()&&(this.markerWrapper_.style.zIndex=this.getZIndex()),this.markerWrapper_.style.display=this.getVisible()?"":"none",!this.markerContent_){this.markerContent_=document.createElement("DIV"),this.markerWrapper_.appendChild(this.markerContent_);var a=this;google.maps.event.addDomListener(this.markerContent_,"click",function(b){google.maps.event.trigger(a,"click")}),google.maps.event.addDomListener(this.markerContent_,"mouseover",function(b){google.maps.event.trigger(a,"mouseover")}),google.maps.event.addDomListener(this.markerContent_,"mouseout",function(b){google.maps.event.trigger(a,"mouseout")})}this.ready_=!0,this.content_changed(),this.flat_changed(),this.draggable_changed();var b=this.getPanes();b&&b.overlayMouseTarget.appendChild(this.markerWrapper_),google.maps.event.trigger(this,"ready")},j.prototype.onAdd=j.prototype.onAdd,j.prototype.draw=function(){if(this.ready_&&!this.dragging_){var a=this.getProjection();if(a){var b=this.get("position"),c=a.fromLatLngToDivPixel(b),d=this.getOffset_();this.markerWrapper_.style.top=c.y+d.height+"px",this.markerWrapper_.style.left=c.x+d.width+"px";var e=this.markerContent_.offsetHeight,f=this.markerContent_.offsetWidth;f!=this.get("width")&&this.set("width",f),e!=this.get("height")&&this.set("height",e)}}},j.prototype.draw=j.prototype.draw,j.prototype.onRemove=function(){this.markerWrapper_&&this.markerWrapper_.parentNode&&this.markerWrapper_.parentNode.removeChild(this.markerWrapper_),this.removeDragListeners_()},j.prototype.onRemove=j.prototype.onRemove;var k={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};a.RichMarkerPosition=k,a.InfoBox=b,a.Cluster=e,a.ClusterIcon=d,a.MarkerClusterer=f,a.MarkerLabel_=h,a.MarkerWithLabel=i,a.RichMarker=j})}}),function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,c,d){b.module("uiGmapgoogle-maps.wrapped").service("uiGmapDataStructures",function(){return{Graph:d(1).Graph,Queue:d(1).Queue}})},function(a,b,c){(function(){a.exports={Graph:c(2),Heap:c(3),LinkedList:c(4),Map:c(5),Queue:c(6),RedBlackTree:c(7),Trie:c(8)}}).call(this)},function(a,b){(function(){var b,c={}.hasOwnProperty;b=function(){function a(){this._nodes={},this.nodeSize=0,this.edgeSize=0}return a.prototype.addNode=function(a){return this._nodes[a]?void 0:(this.nodeSize++,this._nodes[a]={_outEdges:{},_inEdges:{}})},a.prototype.getNode=function(a){return this._nodes[a]},a.prototype.removeNode=function(a){var b,d,e,f,g;if(d=this._nodes[a]){f=d._outEdges;for(e in f)c.call(f,e)&&this.removeEdge(a,e);g=d._inEdges;for(b in g)c.call(g,b)&&this.removeEdge(b,a);return this.nodeSize--,delete this._nodes[a],d}},a.prototype.addEdge=function(a,b,c){var d,e,f;return null==c&&(c=1),
!this.getEdge(a,b)&&(e=this._nodes[a],f=this._nodes[b],e&&f)?(d={weight:c},e._outEdges[b]=d,f._inEdges[a]=d,this.edgeSize++,d):void 0},a.prototype.getEdge=function(a,b){var c,d;return c=this._nodes[a],d=this._nodes[b],c&&d?c._outEdges[b]:void 0},a.prototype.removeEdge=function(a,b){var c,d,e;return d=this._nodes[a],e=this._nodes[b],(c=this.getEdge(a,b))?(delete d._outEdges[b],delete e._inEdges[a],this.edgeSize--,c):void 0},a.prototype.getInEdgesOf=function(a){var b,d,e,f;e=this._nodes[a],d=[],f=null!=e?e._inEdges:void 0;for(b in f)c.call(f,b)&&d.push(this.getEdge(b,a));return d},a.prototype.getOutEdgesOf=function(a){var b,d,e,f;b=this._nodes[a],d=[],f=null!=b?b._outEdges:void 0;for(e in f)c.call(f,e)&&d.push(this.getEdge(a,e));return d},a.prototype.getAllEdgesOf=function(a){var b,c,d,e,f,g,h;if(c=this.getInEdgesOf(a),d=this.getOutEdgesOf(a),0===c.length)return d;for(e=this.getEdge(a,a),b=f=0,g=c.length;g>=0?g>f:f>g;b=g>=0?++f:--f)if(c[b]===e){h=[c[c.length-1],c[b]],c[b]=h[0],c[c.length-1]=h[1],c.pop();break}return c.concat(d)},a.prototype.forEachNode=function(a){var b,d,e;e=this._nodes;for(b in e)c.call(e,b)&&(d=e[b],a(d,b))},a.prototype.forEachEdge=function(a){var b,d,e,f,g,h;g=this._nodes;for(d in g)if(c.call(g,d)){e=g[d],h=e._outEdges;for(f in h)c.call(h,f)&&(b=h[f],a(b))}},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e;b=function(){function a(a){var b,c,d,e,f,g;for(null==a&&(a=[]),this._data=[void 0],d=0,f=a.length;f>d;d++)c=a[d],null!=c&&this._data.push(c);if(this._data.length>1)for(b=e=2,g=this._data.length;g>=2?g>e:e>g;b=g>=2?++e:--e)this._upHeap(b);this.size=this._data.length-1}return a.prototype.add=function(a){return null!=a?(this._data.push(a),this._upHeap(this._data.length-1),this.size++,a):void 0},a.prototype.removeMin=function(){var a;if(1!==this._data.length)return this.size--,2===this._data.length?this._data.pop():(a=this._data[1],this._data[1]=this._data.pop(),this._downHeap(),a)},a.prototype.peekMin=function(){return this._data[1]},a.prototype._upHeap=function(a){var b,c;for(b=this._data[a];this._data[a]<this._data[d(a)]&&a>1;)c=[this._data[d(a)],this._data[a]],this._data[a]=c[0],this._data[d(a)]=c[1],a=d(a)},a.prototype._downHeap=function(){var a,b,d;for(a=1;c(a<this._data.length)&&(b=c(a),b<this._data.length-1&&this._data[e(a)]<this._data[b]&&(b=e(a)),this._data[b]<this._data[a]);)d=[this._data[a],this._data[b]],this._data[b]=d[0],this._data[a]=d[1],a=b},a}(),d=function(a){return a>>1},c=function(a){return a<<1},e=function(a){return(a<<1)+1},a.exports=b}).call(this)},function(a,b){(function(){var b;b=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this.head={prev:void 0,value:void 0,next:void 0},this.tail={prev:void 0,value:void 0,next:void 0},this.size=0,c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.at=function(a){var b,c,d,e,f;if(-this.size<=a&&a<this.size){if(a=this._adjust(a),2*a<this.size)for(b=this.head,c=d=1;a>=d;c=d+=1)b=b.next;else for(b=this.tail,c=e=1,f=this.size-a-1;f>=e;c=e+=1)b=b.prev;return b}},a.prototype.add=function(a,b){var c,d,e,f,g;return null==b&&(b=this.size),-this.size<=b&&b<=this.size?(d={value:a},b=this._adjust(b),0===this.size?this.head=d:0===b?(e=[d,this.head,d],this.head.prev=e[0],d.next=e[1],this.head=e[2]):(c=this.at(b-1),f=[c.next,d,d,c],d.next=f[0],null!=(g=c.next)?g.prev=f[1]:void 0,c.next=f[2],d.prev=f[3]),b===this.size&&(this.tail=d),this.size++,a):void 0},a.prototype.removeAt=function(a){var b,c,d;return null==a&&(a=this.size-1),-this.size<=a&&a<this.size&&0!==this.size?(a=this._adjust(a),1===this.size?(c=this.head.value,this.head.value=this.tail.value=void 0):0===a?(c=this.head.value,this.head=this.head.next,this.head.prev=void 0):(b=this.at(a),c=b.value,b.prev.next=b.next,null!=(d=b.next)&&(d.prev=b.prev),a===this.size-1&&(this.tail=b.prev)),this.size--,c):void 0},a.prototype.remove=function(a){var b;if(null!=a){for(b=this.head;b&&b.value!==a;)b=b.next;if(b)return 1===this.size?this.head.value=this.tail.value=void 0:b===this.head?(this.head=this.head.next,this.head.prev=void 0):b===this.tail?(this.tail=this.tail.prev,this.tail.next=void 0):(b.prev.next=b.next,b.next.prev=b.prev),this.size--,a}},a.prototype.indexOf=function(a,b){var c,d;if(null==b&&(b=0),null==this.head.value&&!this.head.next||b>=this.size)return-1;for(b=Math.max(0,this._adjust(b)),c=this.at(b),d=b;c&&c.value!==a;)c=c.next,d++;return d===this.size?-1:d},a.prototype._adjust=function(a){return 0>a?this.size+a:a},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e,f={}.hasOwnProperty;c="_mapId_",b=function(){function a(b){var c,d;this._content={},this._itemId=0,this._id=a._newMapId(),this.size=0;for(c in b)f.call(b,c)&&(d=b[c],this.set(c,d))}return a._mapIdTracker=0,a._newMapId=function(){return this._mapIdTracker++},a.prototype.hash=function(a,b){var f,g;return null==b&&(b=!1),g=d(a),e(a)?(f=c+this._id,b&&!a[f]&&(a[f]=this._itemId++),f+"_"+a[f]):g+"_"+a},a.prototype.set=function(a,b){return this.has(a)||this.size++,this._content[this.hash(a,!0)]=[b,a],b},a.prototype.get=function(a){var b;return null!=(b=this._content[this.hash(a)])?b[0]:void 0},a.prototype.has=function(a){return this.hash(a)in this._content},a.prototype["delete"]=function(a){var b;return b=this.hash(a),b in this._content?(delete this._content[b],e(a)&&delete a[c+this._id],this.size--,!0):!1},a.prototype.forEach=function(a){var b,c,d;d=this._content;for(b in d)f.call(d,b)&&(c=d[b],a(c[1],c[0]))},a}(),e=function(a){var b,c,e,f,g;for(b=["Boolean","Number","String","Undefined","Null","RegExp","Function"],e=d(a),f=0,g=b.length;g>f;f++)if(c=b[f],e===c)return!1;return!0},d=function(a){return Object.prototype.toString.apply(a).match(/\[object (.+)\]/)[1]},a.exports=b}).call(this)},function(a,b){(function(){var b;b=function(){function a(a){null==a&&(a=[]),this._content=a,this._dequeueIndex=0,this.size=this._content.length}return a.prototype.enqueue=function(a){return this.size++,this._content.push(a),a},a.prototype.dequeue=function(){var a;if(0!==this.size)return this.size--,a=this._content[this._dequeueIndex],this._dequeueIndex++,2*this._dequeueIndex>this._content.length&&(this._content=this._content.slice(this._dequeueIndex),this._dequeueIndex=0),a},a.prototype.peek=function(){return this._content[this._dequeueIndex]},a}(),a.exports=b}).call(this)},function(a,b){(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=0,d=1,e=2,h=3,f=1,b=2,g=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this._root,this.size=0,c=0,d=a.length;d>c;c++)b=a[c],null!=b&&this.add(b)}return a.prototype.add=function(a){var g,l,m,n;if(null!=a){if(this.size++,m={value:a,_color:f},this._root){if(l=i(this._root,function(b){return a===b.value?c:a<b.value?b._left?d:(m._parent=b,b._left=m,h):b._right?e:(m._parent=b,b._right=m,h)}),null!=l)return}else this._root=m;for(g=m;;){if(g===this._root){g._color=b;break}if(g._parent._color===b)break;{if((null!=(n=p(g))?n._color:void 0)!==f){!k(g)&&k(g._parent)?(this._rotateLeft(g._parent),g=g._left):k(g)&&!k(g._parent)&&(this._rotateRight(g._parent),g=g._right),g._parent._color=b,j(g)._color=f,k(g)?this._rotateRight(j(g)):this._rotateLeft(j(g));break}g._parent._color=b,p(g)._color=b,j(g)._color=f,g=j(g)}}return a}},a.prototype.has=function(a){var b;return b=i(this._root,function(b){return a===b.value?c:a<b.value?d:e}),b?!0:!1},a.prototype.peekMin=function(){var a;return null!=(a=n(this._root))?a.value:void 0},a.prototype.peekMax=function(){var a;return null!=(a=m(this._root))?a.value:void 0},a.prototype.remove=function(a){var b;return(b=i(this._root,function(b){return a===b.value?c:a<b.value?d:e}))?(this._removeNode(this._root,b),this.size--,a):void 0},a.prototype.removeMin=function(){var a,b;return(a=n(this._root))?(b=a.value,this._removeNode(this._root,a),b):void 0},a.prototype.removeMax=function(){var a,b;return(a=m(this._root))?(b=a.value,this._removeNode(this._root,a),b):void 0},a.prototype._removeNode=function(a,c){var d,e,g,h,i,j,m,p,q,r;if(c._left&&c._right&&(e=n(c._right),c.value=e.value,c=e),e=c._left||c._right,e||(e={color:b,_right:void 0,_left:void 0,isLeaf:!0}),e._parent=c._parent,null!=(g=c._parent)&&(g[l(c)]=e),c._color===b)if(e._color===f)e._color=b,e._parent||(this._root=e);else for(;;){if(!e._parent){e.isLeaf?this._root=void 0:this._root=e;break}if(d=o(e),(null!=d?d._color:void 0)===f&&(e._parent._color=f,d._color=b,k(e)?this._rotateLeft(e._parent):this._rotateRight(e._parent)),d=o(e),e._parent._color!==b||d&&(d._color!==b||d._left&&d._left._color!==b||d._right&&d._right._color!==b)){if(!(e._parent._color!==f||d&&(d._color!==b||d._left&&(null!=(h=d._left)?h._color:void 0)!==b||d._right&&(null!=(i=d._right)?i._color:void 0)!==b))){null!=d&&(d._color=f),e._parent._color=b;break}if((null!=d?d._color:void 0)===b){!k(e)||d._right&&d._right._color!==b||(null!=(j=d._left)?j._color:void 0)!==f?k(e)||d._left&&d._left._color!==b||(null!=(p=d._right)?p._color:void 0)!==f||(d._color=f,null!=(q=d._right)&&(q._color=b),this._rotateLeft(d)):(d._color=f,null!=(m=d._left)&&(m._color=b),this._rotateRight(d));break}d=o(e),d._color=e._parent._color,k(e)?(d._right._color=b,this._rotateRight(e._parent)):(d._left._color=b,this._rotateLeft(e._parent))}else null!=d&&(d._color=f),e.isLeaf&&(e._parent[l(e)]=void 0),e=e._parent}return e.isLeaf&&null!=(r=e._parent)?r[l(e)]=void 0:void 0},a.prototype._rotateLeft=function(a){var b,c;return null!=(b=a._parent)&&(b[l(a)]=a._right),a._right._parent=a._parent,a._parent=a._right,a._right=a._right._left,a._parent._left=a,null!=(c=a._right)&&(c._parent=a),null==a._parent._parent?this._root=a._parent:void 0},a.prototype._rotateRight=function(a){var b,c;return null!=(b=a._parent)&&(b[l(a)]=a._left),a._left._parent=a._parent,a._parent=a._left,a._left=a._left._right,a._parent._right=a,null!=(c=a._left)&&(c._parent=a),null==a._parent._parent?this._root=a._parent:void 0},a}(),k=function(a){return a===a._parent._left},l=function(a){return k(a)?"_left":"_right"},i=function(a,b){var f,g,i;for(g=a,i=void 0;g;){if(f=b(g),f===c){i=g;break}if(f===d)g=g._left;else if(f===e)g=g._right;else if(f===h)break}return i},n=function(a){return i(a,function(a){return a._left?d:c})},m=function(a){return i(a,function(a){return a._right?e:c})},j=function(a){var b;return null!=(b=a._parent)?b._parent:void 0},p=function(a){return j(a)?k(a._parent)?j(a)._right:j(a)._left:void 0},o=function(a){return k(a)?a._parent._right:a._parent._left},a.exports=g}).call(this)},function(a,b,c){(function(){var b,d,e,f,g={}.hasOwnProperty;b=c(6),e="end",d=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this._root={},this.size=0,c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.add=function(a){var b,c,d,f;if(null!=a){for(this.size++,b=this._root,d=0,f=a.length;f>d;d++)c=a[d],null==b[c]&&(b[c]={}),b=b[c];return b[e]=!0,a}},a.prototype.has=function(a){var b,c,d,f;if(null==a)return!1;for(b=this._root,d=0,f=a.length;f>d;d++){if(c=a[d],null==b[c])return!1;b=b[c]}return b[e]?!0:!1},a.prototype.longestPrefixOf=function(a){var b,c,d,e,f;if(null==a)return"";for(b=this._root,d="",e=0,f=a.length;f>e&&(c=a[e],null!=b[c]);e++)d+=c,b=b[c];return d},a.prototype.wordsWithPrefix=function(a){var c,d,f,h,i,j,k,l,m,n;if(null==a)return[];for(null!=a||(a=""),k=[],d=this._root,l=0,m=a.length;m>l;l++)if(f=a[l],d=d[f],null==d)return[];for(i=new b,i.enqueue([d,""]);0!==i.size;){n=i.dequeue(),h=n[0],c=n[1],h[e]&&k.push(a+c);for(f in h)g.call(h,f)&&(j=h[f],i.enqueue([j,c+f]))}return k},a.prototype.remove=function(a){var b,c,d,g,h,i,j,k;if(null!=a){for(b=this._root,g=[],h=0,j=a.length;j>h;h++){if(d=a[h],null==b[d])return;b=b[d],g.push([d,b])}if(b[e]){if(this.size--,delete b[e],f(b,1))return a;for(c=i=k=g.length-1;(1>=k?1>=i:i>=1)&&!f(g[c][1],1);c=1>=k?++i:--i)delete g[c-1][1][g[c][0]];return f(this._root[g[0][0]],1)||delete this._root[g[0][0]],a}}},a}(),f=function(a,b){var c,d;if(0===b)return!0;d=0;for(c in a)if(g.call(a,c)&&(d++,d>=b))return!0;return!1},a.exports=d}).call(this)}]),b.module("uiGmapgoogle-maps.wrapped").service("uiGmapMarkerSpiderfier",["uiGmapGoogleMapApi",function(b){var c=this,d={}.hasOwnProperty,e=[].slice;return this.OverlappingMarkerSpiderfier=function(){function b(a,b){var e,f,g,h,i,j;this.map=a,null==b&&(b={});for(f in b)d.call(b,f)&&(j=b[f],this[f]=j);for(this.projHelper=new this.constructor.ProjHelper(this.map),this.initMarkerArrays(),this.listeners={},i=["click","zoom_changed","maptypeid_changed"],g=0,h=i.length;h>g;g++)e=i[g],c.addListener(this.map,e,function(a){return function(){return a.unspiderfy()}}(this))}var c,f,g,h,i,j,k,l,m,n,o;for(l=b.prototype,m=[b,l],g=0,j=m.length;j>g;g++)o=m[g],o.VERSION="0.3.3";return f=void 0,c=void 0,k=void 0,n=2*Math.PI,l.keepSpiderfied=!1,l.markersWontHide=!1,l.markersWontMove=!1,l.nearbyDistance=20,l.circleSpiralSwitchover=9,l.circleFootSeparation=23,l.circleStartAngle=n/12,l.spiralFootSeparation=26,l.spiralLengthStart=11,l.spiralLengthFactor=4,l.spiderfiedZIndex=1e3,l.usualLegZIndex=10,l.highlightedLegZIndex=20,l.event="click",l.minZoomLevel=!1,l.legWeight=1.5,l.legColors={usual:{},highlighted:{}},i=l.legColors.usual,h=l.legColors.highlighted,b.initializeGoogleMaps=function(a){return f=a.maps,c=f.event,k=f.MapTypeId,i[k.HYBRID]=i[k.SATELLITE]="#fff",h[k.HYBRID]=h[k.SATELLITE]="#f00",i[k.TERRAIN]=i[k.ROADMAP]="#444",h[k.TERRAIN]=h[k.ROADMAP]="#f00",this.ProjHelper=function(a){return this.setMap(a)},this.ProjHelper.prototype=new f.OverlayView,this.ProjHelper.prototype.draw=function(){}},l.initMarkerArrays=function(){return this.markers=[],this.markerListenerRefs=[]},l.addMarker=function(a){var b;return null!=a._oms?this:(a._oms=!0,b=[c.addListener(a,this.event,function(b){return function(c){return b.spiderListener(a,c)}}(this))],this.markersWontHide||b.push(c.addListener(a,"visible_changed",function(b){return function(){return b.markerChangeListener(a,!1)}}(this))),this.markersWontMove||b.push(c.addListener(a,"position_changed",function(b){return function(){return b.markerChangeListener(a,!0)}}(this))),this.markerListenerRefs.push(b),this.markers.push(a),this)},l.markerChangeListener=function(a,b){return null==a._omsData||!b&&a.getVisible()||null!=this.spiderfying||null!=this.unspiderfying?void 0:this.unspiderfy(b?a:null)},l.getMarkers=function(){return this.markers.slice(0)},l.removeMarker=function(a){var b,d,e,f,g;if(null!=a._omsData&&this.unspiderfy(),b=this.arrIndexOf(this.markers,a),0>b)return this;for(g=this.markerListenerRefs.splice(b,1)[0],d=0,e=g.length;e>d;d++)f=g[d],c.removeListener(f);return delete a._oms,this.markers.splice(b,1),this},l.clearMarkers=function(){var a,b,d,e,f,g,h,i,j;for(this.unspiderfy(),j=this.markers,a=b=0,d=j.length;d>b;a=++b){for(h=j[a],g=this.markerListenerRefs[a],i=0,e=g.length;e>i;i++)f=g[i],c.removeListener(f);delete h._oms}return this.initMarkerArrays(),this},l.addListener=function(a,b){var c;return(null!=(c=this.listeners)[a]?c[a]:c[a]=[]).push(b),this},l.removeListener=function(a,b){var c;return c=this.arrIndexOf(this.listeners[a],b),0>c||this.listeners[a].splice(c,1),this},l.clearListeners=function(a){return this.listeners[a]=[],this},l.trigger=function(){var a,b,c,d,f,g,h,i;for(b=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],h=null!=(g=this.listeners[b])?g:[],i=[],d=0,f=h.length;f>d;d++)c=h[d],i.push(c.apply(null,a));return i},l.generatePtsCircle=function(a,b){var c,d,e,g,h,i,j,k;for(e=this.circleFootSeparation*(2+a),i=e/n,d=n/a,k=[],g=h=0,j=a;j>=0?j>h:h>j;g=j>=0?++h:--h)c=this.circleStartAngle+g*d,k.push(new f.Point(b.x+i*Math.cos(c),b.y+i*Math.sin(c)));return k},l.generatePtsSpiral=function(a,b){var c,d,e,g,h,i,j;for(g=this.spiralLengthStart,c=0,j=[],d=e=0,i=a;i>=0?i>e:e>i;d=i>=0?++e:--e)c+=this.spiralFootSeparation/g+5e-4*d,h=new f.Point(b.x+g*Math.cos(c),b.y+g*Math.sin(c)),g+=n*this.spiralLengthFactor/c,j.push(h);return j},l.spiderListener=function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,q;if(k=null!=b._omsData,k&&this.keepSpiderfied||("mouseover"===this.event?(d=this,e=function(){return d.unspiderfy()},a.clearTimeout(l.timeout),l.timeout=setTimeout(e,3e3)):this.unspiderfy()),k||this.map.getStreetView().getVisible()||"GoogleEarthAPI"===this.map.getMapTypeId())return this.trigger("click",b,c);for(n=[],o=[],m=this.nearbyDistance,p=m*m,j=this.llToPt(b.position),q=this.markers,f=0,g=q.length;g>f;f++)h=q[f],null!=h.map&&h.getVisible()&&(i=this.llToPt(h.position),this.ptDistanceSq(i,j)<p?n.push({marker:h,markerPt:i}):o.push(h));return 1===n.length?this.trigger("click",b,c):this.spiderfy(n,o)},l.markersNearMarker=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(null==b&&(b=!1),null==this.projHelper.getProjection())throw"Must wait for 'idle' event on map before calling markersNearMarker";for(i=this.nearbyDistance,j=i*i,g=this.llToPt(a.position),h=[],k=this.markers,c=0,d=k.length;d>c&&(e=k[c],!(e!==a&&null!=e.map&&e.getVisible()&&(f=this.llToPt(null!=(l=null!=(m=e._omsData)?m.usualPosition:void 0)?l:e.position),this.ptDistanceSq(f,g)<j&&(h.push(e),b))));c++);return h},l.markersNearAnyOtherMarker=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;if(null==this.projHelper.getProjection())throw"Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";for(o=this.nearbyDistance,p=o*o,m=function(){var a,b,c,d,e,f;for(c=this.markers,f=[],a=0,b=c.length;b>a;a++)h=c[a],f.push({pt:this.llToPt(null!=(d=null!=(e=h._omsData)?e.usualPosition:void 0)?d:h.position),willSpiderfy:!1});return f}.call(this),r=this.markers,b=d=0,e=r.length;e>d;b=++d)if(i=r[b],null!=i.map&&i.getVisible()&&(j=m[b],!j.willSpiderfy))for(s=this.markers,c=n=0,f=s.length;f>n;c=++n)if(k=s[c],c!==b&&null!=k.map&&k.getVisible()&&(l=m[c],(!(b>c)||l.willSpiderfy)&&this.ptDistanceSq(j.pt,l.pt)<p)){j.willSpiderfy=l.willSpiderfy=!0;break}for(t=this.markers,u=[],a=q=0,g=t.length;g>q;a=++q)h=t[a],m[a].willSpiderfy&&u.push(h);return u},l.makeHighlightListenerFuncs=function(a){return{highlight:function(b){return function(){return a._omsData.leg.setOptions({strokeColor:b.legColors.highlighted[b.map.mapTypeId],zIndex:b.highlightedLegZIndex})}}(this),unhighlight:function(b){return function(){return a._omsData.leg.setOptions({strokeColor:b.legColors.usual[b.map.mapTypeId],zIndex:b.usualLegZIndex})}}(this)}},l.spiderfy=function(a,b){var d,e,g,h,i,j,k,l,m,n,o;return this.minZoomLevel&&this.map.getZoom()<this.minZoomLevel?!1:(this.spiderfying=!0,n=a.length,d=this.ptAverage(function(){var b,c,d;for(d=[],b=0,c=a.length;c>b;b++)l=a[b],d.push(l.markerPt);return d}()),h=n>=this.circleSpiralSwitchover?this.generatePtsSpiral(n,d).reverse():this.generatePtsCircle(n,d),o=function(){var b,d,l;for(l=[],b=0,d=h.length;d>b;b++)g=h[b],e=this.ptToLl(g),m=this.minExtract(a,function(a){return function(b){return a.ptDistanceSq(b.markerPt,g)}}(this)),k=m.marker,j=new f.Polyline({map:this.map,path:[k.position,e],strokeColor:this.legColors.usual[this.map.mapTypeId],strokeWeight:this.legWeight,zIndex:this.usualLegZIndex}),k._omsData={usualPosition:k.position,leg:j},this.legColors.highlighted[this.map.mapTypeId]!==this.legColors.usual[this.map.mapTypeId]&&(i=this.makeHighlightListenerFuncs(k),k._omsData.hightlightListeners={highlight:c.addListener(k,"mouseover",i.highlight),unhighlight:c.addListener(k,"mouseout",i.unhighlight)}),k.setPosition(e),k.setZIndex(Math.round(this.spiderfiedZIndex+g.y)),l.push(k);return l}.call(this),delete this.spiderfying,this.spiderfied=!0,this.trigger("spiderfy",o,b))},l.unspiderfy=function(a){var b,d,e,f,g,h,i;if(null==a&&(a=null),null==this.spiderfied)return this;for(this.unspiderfying=!0,i=[],g=[],h=this.markers,b=0,d=h.length;d>b;b++)f=h[b],null!=f._omsData?(f._omsData.leg.setMap(null),f!==a&&f.setPosition(f._omsData.usualPosition),f.setZIndex(null),e=f._omsData.hightlightListeners,null!=e&&(c.removeListener(e.highlight),c.removeListener(e.unhighlight)),delete f._omsData,i.push(f)):g.push(f);return delete this.unspiderfying,delete this.spiderfied,this.trigger("unspiderfy",i,g),this},l.ptDistanceSq=function(a,b){var c,d;return c=a.x-b.x,d=a.y-b.y,c*c+d*d},l.ptAverage=function(a){var b,c,d,e,g,h;for(g=h=0,b=0,c=a.length;c>b;b++)e=a[b],g+=e.x,h+=e.y;return d=a.length,new f.Point(g/d,h/d)},l.llToPt=function(a){return this.projHelper.getProjection().fromLatLngToDivPixel(a)},l.ptToLl=function(a){return this.projHelper.getProjection().fromDivPixelToLatLng(a)},l.minExtract=function(a,b){var c,d,e,f,g,h,i;for(e=g=0,h=a.length;h>g;e=++g)f=a[e],i=b(f),("undefined"==typeof c||null===c||d>i)&&(d=i,c=e);return a.splice(c,1)[0]},l.arrIndexOf=function(a,b){var c,d,e,f;if(null!=a.indexOf)return a.indexOf(b);for(c=d=0,e=a.length;e>d;c=++d)if(f=a[c],f===b)return c;return-1},b}(),b.then(function(){c.OverlappingMarkerSpiderfier.initializeGoogleMaps(a.google)}),this.OverlappingMarkerSpiderfier}]),b.module("uiGmapgoogle-maps.extensions").service("uiGmapExtendMarkerClusterer",["uiGmapLodash","uiGmapPropMap",function(b,c){return{init:_.once(function(){(function(){var d={}.hasOwnProperty,e=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};a.NgMapCluster=function(a){function d(a){d.__super__.constructor.call(this,a),this.markers_=new c}return e(d,a),d.prototype.addMarker=function(a){var b,c;if(this.isMarkerAlreadyAdded_(a)){var d=this.markers_.get(a.key);if(d.getPosition().lat()==a.getPosition().lat()&&d.getPosition().lon()==a.getPosition().lon())return!1}if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,f=(this.center_.lat()*(e-1)+a.getPosition().lat())/e,g=(this.center_.lng()*(e-1)+a.getPosition().lng())/e;this.center_=new google.maps.LatLng(f,g),this.calculateBounds_()}}else this.center_=a.getPosition(),this.calculateBounds_();return a.isAdded=!0,this.markers_.push(a),b=this.markers_.length,c=this.markerClusterer_.getMaxZoom(),null!==c&&this.map_.getZoom()>c?a.getMap()!==this.map_&&a.setMap(this.map_):b<this.minClusterSize_?a.getMap()!==this.map_&&a.setMap(this.map_):b===this.minClusterSize_?this.markers_.each(function(a){a.setMap(null)}):a.setMap(null),!0},d.prototype.isMarkerAlreadyAdded_=function(a){return b.isNullOrUndefined(this.markers_.get(a.key))},d.prototype.getBounds=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);return this.getMarkers().each(function(b){a.extend(b.getPosition())}),a},d.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=new c,delete this.markers_},d}(Cluster),a.NgMapMarkerClusterer=function(a){function b(a,d,e){b.__super__.constructor.call(this,a,d,e),this.markers_=new c}return e(b,a),b.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=new c},b.prototype.removeMarker_=function(a){return this.markers_.get(a.key)?(a.setMap(null),this.markers_.remove(a.key),!0):!1},b.prototype.createClusters_=function(a){var b,c,d,e=this;if(this.ready_){0===a&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),d=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var f=this.getExtendedBounds(d),g=Math.min(a+this.batchSize_,this.markers_.length),h=this.markers_.values();for(b=a;g>b;b++)c=h[b],!c.isAdded&&this.isMarkerInBounds_(c,f)&&(!this.ignoreHidden_||this.ignoreHidden_&&c.getVisible())&&this.addToClosestCluster_(c);if(g<this.markers_.length)this.timerRefStatic=setTimeout(function(){e.createClusters_(g)},0);else{for(b=0;b<this.clusters_.length;b++)this.clusters_[b].updateIcon_();delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this)}}},b.prototype.addToClosestCluster_=function(a){var b,c,d,e,f=4e4,g=null;for(b=0;b<this.clusters_.length;b++)d=this.clusters_[b],e=d.getCenter(),e&&(c=this.distanceBetweenPoints_(e,a.getPosition()),f>c&&(f=c,g=d));g&&g.isMarkerInClusterBounds(a)?g.addMarker(a):(d=new NgMapCluster(this),d.addMarker(a),this.clusters_.push(d))},b.prototype.redraw_=function(){this.createClusters_(0)},b.prototype.resetViewport_=function(a){var b;for(b=0;b<this.clusters_.length;b++)this.clusters_[b].remove();this.clusters_=[],this.markers_.each(function(b){b.isAdded=!1,a&&b.setMap(null)})},b.prototype.extend=function(a,b){return function(a){var b;for(b in a.prototype)"constructor"!==b&&(this.prototype[b]=a.prototype[b]);return this}.apply(a,[b])},ClusterIcon.prototype.show=function(){if(this.div_){var a="",b=this.backgroundPosition_.split(" "),c=parseInt(b[0].trim(),10),d=parseInt(b[1].trim(),10),e=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(e),a="<img src='"+this.url_+"' style='position: absolute; top: "+d+"px; left: "+c+"px; ",a+=this.cluster_.getMarkerClusterer().enableRetinaIcons_?"width: "+this.width_+"px;height: "+this.height_+"px;":"clip: rect("+-1*d+"px, "+(-1*c+this.width_)+"px, "+(-1*d+this.height_)+"px, "+-1*c+"px);",a+="'>",this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>","undefined"==typeof this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},b}(MarkerClusterer)}).call(this)})}}])}(window,angular);
define("angular/googleMaps", ["angular"], function(){});

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
define("angular/ui-router", ["angular"], function(){});

define('config/Routes',[],function () {

    function Route($stateProvider, $urlRouterProvider) {

        'use strict';

        var templateDirectory = './js/views/';

        $stateProvider
            // Parent Template for forms
            .state('common', {
                abstract: true,
                templateUrl: templateDirectory + 'common.html'
            })

            //User
            .state('user-create', {
                parent: 'common',
                url: '/users/create',
                templateUrl: templateDirectory + 'user/user-create.html'
            })
            .state('user-list', {
                parent: 'common',
                url: '/users/list',
                templateUrl: templateDirectory + 'user/user-list.html'
            })
            .state('user-update', {
                parent: 'common',
                url: '/users/update',
                templateUrl: templateDirectory + 'user/user-update.html'
            })

            //MAP
            .state('map', {
                parent: 'common',
                url: '/maps/map',
                templateUrl: templateDirectory + 'map/gmap.html'
            });

            //redirect to homepage if no url mapping found
            $urlRouterProvider.otherwise('/users/create');
    };

    return ['$stateProvider', '$urlRouterProvider', Route];

});


define('controllers/Sidebar',[],function() {
    'use strict';

    var SidebarController = function($scope, $location) {

        console.log('Sidebar Controller');

        $scope.isActive = function(viewLocation) {
            var active = ($location.path().indexOf(viewLocation) === 0);
            return active;
        }

    };

    return ['$scope', '$location', SidebarController];

});
define('config/ServerConfig',[],function () {
    'use strict';

    var ServerConfig = {

         URL_SERVER: 'http://localhost:8080',
         URL_S3_FILEUPLOAD: 'https://angular-file-upload-cors-srv.appspot.com/upload'

    };

    return ServerConfig;

});
define('controllers/UserController',['config/ServerConfig'], function (ServerConfig) {
    'use strict';

    var UserController = function ($scope, $filter, $location, restService, ngDialog, Flash, imageUploadService) {

        /**
         * SAVE A NEW RECORD
         */
        $scope.createRecord = function () {

            if ($scope.form.$valid) {

                ngDialog.openConfirm({

                    template: '<br/><p>Do you want to save this record?</p><br/>\
                                     <div class="ngdialog-buttons">\
                                     <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                                     <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm()">Yes</button>\
                                     </div>',
                    plain: true
                }).then(function (confirm) {

                    //API CALL
                    var url = ServerConfig.URL_SERVER + '/user/save';
                    var params = {
                        name: $scope.name,
                        address: $scope.address,
                        description: $scope.description,
                        storeId: $scope.store.storeId
                    };

                    console.log("UserController createRecord params = " + JSON.stringify(params));

                    restService.post(url, params,
                        function (data) {

                            var message = '<strong> Well done!</strong>  You have successfully saved the record.';
                            Flash.create('success', message, 'custom-class');

                            //clear form fields
                            $scope.resetForm();
                        },
                        function (response) {
                            console.log("error");
                        }
                    );

                }, function (close) {

                    console.log("Dialog close.");

                });

            }
        },

        //delete a record by passing an id
        $scope.deleteRecord = function (row) {

            ngDialog.openConfirm({

                template: '<br/><p>Do you want to delete this record?</p><br/>\
                                 <div class="ngdialog-buttons">\
                                 <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                                 <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm()">Yes</button>\
                                 </div>',
                plain: true
            }).then(function (confirm) {

                //API CALL
                var url = ServerConfig.URL_SERVER + '/user/delete';

                var params = {
                    id: row.userId
                };

                restService.delete(url, params,

                    function (data) {

                        //delete row
                        $scope.rowCollection.splice( $scope.rowCollection.indexOf(row), 1);

                        var message = '<strong> Great!</strong>  You have successfully deleted the record.';
                        Flash.create('success', message, 'custom-class');
                    },
                    function (response) {
                        console.log("error");
                    }
                );

            }, function (close) {

                console.log("Dialog close.");

            });
        },

        /**
         * GET RECORD BY PASSING ID - Use in Loading values in Update Form
         */
        $scope.getRecord = function () {

            var paramId = $location.search().id;

            //API CALL
            var url = ServerConfig.URL_SERVER + '/user/update';

            var params = {
                id: paramId
            };

            console.log("UserController getRecord params = " + JSON.stringify(params));

            restService.get(url, params,

                function (data) {

                    //Load Data here from the API
                    $scope.name = 'My Name';
                    $scope.address = "My Address";
                    $scope.description = "Description";
                    $scope.store =  {
                        storeId: 1,
                        storeName: "Cotton ON",
                        adddress: "Store Update"
                    };


                },
                function (response) {
                    console.log("error");
                }
            );
        };

        /**
         *  UPDATE A RECORD
         */
        $scope.updateRecord = function () {

            if ($scope.form.$valid) {

                ngDialog.openConfirm({

                    template: '<br/><p>Do you want to update this record?</p><br/>\
                                     <div class="ngdialog-buttons">\
                                     <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                                     <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm()">Yes</button>\
                                     </div>',
                    plain: true
                }).then(function (confirm) {

                    //API CALL
                    var url = ServerConfig.URL_SERVER + '/user/save';

                    var params = {
                        name: $scope.name,
                        address: $scope.address,
                        description: $scope.description,
                        storeId: $scope.store.storeId
                    };

                    console.log("UserController updateRecord params = " + JSON.stringify(params));

                    restService.post(url, params,
                        function (data) {

                            var message = '<strong> Well done!</strong>  You have successfully updated the record.';
                            Flash.create('info', message, 'custom-class');
                        },
                        function (response) {
                            console.log("error");
                        }
                    );

                }, function (close) {

                    console.log("Dialog close.");

                });

            }
        };

        $scope.resetForm = function () {

            //form fields only
            $scope.name = '';
            $scope.address = '';
            $scope.description = '';
            $scope.imageList = [];
            imageUploadService.imageList = [];

            $scope.formImage = '';

            //default - remove validation errors
            $scope.form.$setUntouched();
        },

        /**
         *
         * Functionalities for image upload
         */

        $scope.imageList = [];

        $scope.uploadImage = function(file) {

            imageUploadService.uploadImage(file);

            $scope.imageList = imageUploadService.imageList;
        };

        $scope.rowCollection = [

            { userId: 1, name: 'User 1', address: 'Boston', description: "Good" },
            { userId: 2, name: 'User 2', address: 'New York', description: "Great" },
            { userId: 3, name: 'User 3', address: 'California', description: "Best" }

        ];

        /**
         * Functionalities for stores to user
         */

        $scope.storeSearchList = [];

        $scope.searchStore = function() {

            ngDialog.open({
                template: './js/views/templates/store-search.html',
                scope: $scope
            });

        };

        $scope.storeCheck = function(value, checked) {

            var idx = $scope.storeSearchList.indexOf(value);
            if (idx >= 0 && !checked) {
                $scope.storeSearchList.splice(idx, 1);
            }
            if (idx < 0 && checked) {
                $scope.storeSearchList.push(value);
            }

            $scope.store = $scope.storeSearchList;
        };

        $scope.storeCollection = [

            {storeId: 1, storeName: 'Cotton ON', address: 'Bugis'},
            {storeId: 2, storeName: 'TopMan', address: 'HarbourFront'},
            {storeId: 3, storeName: 'HNM', address: 'Jurong East'}
        ];

    };

    return ['$scope', '$filter', '$location', 'restService', 'ngDialog', 'Flash', 'imageUploadService', UserController];

});
define('controllers/MapController',[],function() {
   'use strict';


   var MapController = function($scope, uiGmapGoogleMapApi) {

      uiGmapGoogleMapApi.options = {

         transport: 'https',
         isGoogleMapsForWork: false,
         china: false,
         v: '3',
         libraries: 'places',
         language: 'en',
         sensor: 'false'
      };

      $scope.map = {

         center: {
            latitude: 0,
            longitude: 0
         },
         zoom: 20,
         options: {
            scrollwheel: false
         }
      };

      //marker
      $scope.marker = {
         id: 0,
         coords: {
            latitude: 0,
            longitude: 0
         }
      };

      var events = {

         places_changed: function (searchBox) {

            var searchPlace = searchBox.getPlaces()[0];
            var lat = searchPlace.geometry.location.lat();
            var lng = searchPlace.geometry.location.lng();

            $scope.marker.coords = {
               latitude: lat,
               longitude: lng
            }

            $scope.map.center = {
               latitude: lat,
               longitude: lng
            }
            $scope.map.zoom = 20;

            //set latitude and longitude fields
            $scope.latitude = lat;
            $scope.longitude = lng;
         }
      };

      $scope.searchbox = {
         template: './js/views/templates/google-searchbox.html',
         events: events,
         position: 'top-right'
      };

   };

   return ['$scope', 'uiGmapGoogleMapApi', MapController];

});
define('config/Controllers',['require','controllers/Sidebar','controllers/UserController','controllers/MapController'],function(require) {
   'use strict';

    function Controllers($controllerProvider) {

        $controllerProvider.register('SidebarController', require('controllers/Sidebar'));
        $controllerProvider.register('UserController', require('controllers/UserController'));
        $controllerProvider.register('MapController', require('controllers/MapController'));

    };

    return ['$controllerProvider', Controllers];

});
define('services/RestService',[],function() {
   'use strict';

    var RestService = function($http) {

        var _this = this;

        //get
        _this.get = function(url, params, returnSuccess, returnError) {

            var strParam = [];

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    strParam.push(key + '=' + encodeURIComponent(params[key]));
                }
            }

            if (strParam.length > 0) {
                url += '?' + strParam.join('&');
            }

            $http.get(url, params).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService GET:: " + url);
        };

        //post
        _this.post = function(url, params, returnSuccess, returnError) {

            $http.post(url, params).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService POST:: " + url);

        };

        //patch
        _this.patch = function(url, params, returnSuccess, returnError) {

            $http.patch(url, params).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService PATCH:: " + url);

        };

        //delete
        _this.delete = function(url, params, returnSuccess, returnError) {

            var strParam = [];

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    strParam.push(key + '=' + encodeURIComponent(params[key]));
                }
            }

            if (strParam.length > 0) {
                url += '?' + strParam.join('&');
            }

            $http.delete(url).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService DELETE:: " + url);

        };

    };

    return ['$http', RestService];

});
define('services/ImageUploadService',['config/ServerConfig'], function(ServerConfig) {
    'use strict';

    var ImageUploadService = function($timeout, Upload) {

        var _this = this;

        _this.imageList = [];

        _this.uploadImage = function(file) {

            file.upload = Upload.upload({
                url: ServerConfig.URL_S3_FILEUPLOAD,
                data: {file: file},
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    console.log(file.result);

                    _this.imageList.push("Image URL Here..");
                });
            }, function (response) {
                if (response.status > 0) {
                    var errorMsg = response.status + ': ' + response.data;
                    console.log("error Message = " + errorMsg);
                }
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

        };

    };

    return ['$timeout', 'Upload', ImageUploadService];

});
define('config/Services',['require','services/RestService','services/ImageUploadService'],function (require) {
   'use strict';

    function Services($provide) {

        $provide.service('restService', require('services/RestService'));
        $provide.service('imageUploadService', require('services/ImageUploadService'));

    }

    return ['$provide', Services];
});
define('directives/UserDirective',[],function() {
    'use strict';

    var UserDirective = function($timeout) {

        return {

            link: function(scope, element, attrs) {

                var activateChildElement = function() {

                    console.log("Dom Manipulation here.. (User directive)");
                }

                $timeout(activateChildElement, 0);
            }
        }

    };

    return ['$timeout', UserDirective];

});
define('config/Directives',['require','directives/UserDirective'],function(require) {
    'use strict';

    function Directives($compileProvider) {

        $compileProvider.directive('userdirective', require('directives/UserDirective'));

    };

    return ['$compileProvider', Directives];

});
require.config({
    paths: {
        'async': '../bower_components/requirejs-plugins/src/async',
        'lodash': '../bower_components/lodash/lodash.min',
        'angular': '../bower_components/angular/angular.min',
        'angular/angularRoute': '../bower_components/angular-route/angular-route',
        'angular/angularMessages': '../bower_components/angular-messages/angular-messages',
        'angular/ngDialog':'../bower_components/ng-dialog/js/ngDialog',
        'angular/angular-flash-alert': '../bower_components/angular-flash-alert/dist/angular-flash.min',
        'angular/smart-table': '../bower_components/angular-smart-table/dist/smart-table.min',
        'angular/ng-file-upload': '../bower_components/ng-file-upload/ng-file-upload.min',
        'angular/checklist-model': '../bower_components/checklist-model/checklist-model',
        'angular/simpleLogger': '../bower_components/angular-simple-logger/dist/angular-simple-logger',
        'angular/googleMaps': '../bower_components/angular-google-maps/dist/angular-google-maps.min',
        'angular/ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'text': '../bower_components/requirejs-text/text',
        'jquery': '../bower_components/admin-lte/plugins/jQuery/jQuery-2.1.4.min',
        'bootstrap': '../bower_components/admin-lte/bootstrap/js/bootstrap',
        'adminlte': '../bower_components/admin-lte/dist/js/app',
        'config/ServerConfig': './config/ServerConfig'
    },
    shim: {
        'angular': {
          'exports': 'angular'
        },
        'angular/angularRoute': ['angular'],
        'angular/angularMessages': {
            'deps': ['angular']
        },
        'angular/ngDialog': {
            'deps': ['angular'],
            'exports': 'ngDialog'
        },
        'angular/smart-table': {
            'deps': ['angular']
        },
        'angular/angular-flash-alert': {
            'deps': ['angular']
        },
        'angular/ng-tags-input': {
            'deps': ['angular']
        },
        'angular/ng-file-upload': {
            'deps': ['angular']
        },
        'angular/checklist-model': {
            'deps': ['angular']
        },
        'angular/simpleLogger': {
            'deps': ['angular']
        },
        'angular/googleMaps': {
            'deps': ['angular']
        },
        'angular/ui-router': {
            'deps': ['angular']
        },
        'adminlte': {
            'deps': ['jquery', 'bootstrap'],
            'exports': 'adminlte'
        },
        'bootstrap': {
            deps: ["jquery"]
        }
    }
});

define('app', ['require','jquery','bootstrap','adminlte','angular','angular/angularRoute','angular/angularMessages','angular/ngDialog','angular/smart-table','angular/angular-flash-alert','angular/ng-file-upload','angular/checklist-model','async!http://maps.google.com/maps/api/js?libraries=places&sensor=false','lodash','angular/simpleLogger','angular/googleMaps','angular/ui-router','config/Routes','config/Controllers','config/Services','config/Directives'],function(require) {
    'use strict';

    //import admin template (bootstrap)
    require('jquery');
    require('bootstrap');
    require('adminlte');

    //angular modules
    require('angular');
    require('angular/angularRoute');
    require('angular/angularMessages');
    require('angular/ngDialog');
    require('angular/smart-table');
    require('angular/angular-flash-alert');
    require('angular/ng-file-upload');
    require('angular/checklist-model');

    //Google Map Modules
    require('async!http://maps.google.com/maps/api/js?libraries=places&sensor=false');
    require('lodash');
    require('angular/simpleLogger');
    require('angular/googleMaps');
    require('angular/ui-router');

    var app = angular.module('angular-boot', ['ui.router', 'ngMessages', 'ngDialog',
                                            'smart-table', 'flash', 'ngFileUpload', 'checklist-model', 'uiGmapgoogle-maps']);

    app.config(require('config/Routes'));
    app.config(require('config/Controllers'));
    app.config(require('config/Services'));
    app.config(require('config/Directives'));

    return app;

});

//start of application - main logic
require(['angular', 'app'], function(angular, app) {
        'use strict';

        angular.element(document).ready(function() {
            angular.bootstrap(document, ['angular-boot']);
        });
    }
);
