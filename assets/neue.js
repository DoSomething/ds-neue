!function(a){a.fn.visible=function(b){var c=a(this),d=a(window),e=d.scrollTop(),f=e+d.height(),g=c.offset().top,h=g+c.height(),i=b===!0?h:g,j=b===!0?g:h;return f>=j&&i>=e},a.fn.real_visible=function(b){var c=a(this),d=a(window),e=d.scrollTop(),f=e+.85*d.height(),g=c.offset().top,h=g+c.height(),i=b===!0?h:g,j=b===!0?g:h;return f>=j&&i>=e}}(jQuery),window.Modernizr=function(a,b,c){function d(a){o.cssText=a}function e(a,b){return typeof a===b}var f,g,h,i="2.6.2",j={},k=!0,l=b.documentElement,m="modernizr",n=b.createElement(m),o=n.style,p=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),q={},r=[],s=r.slice,t=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,n=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:m+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',m,'">',a,"</style>"].join(""),j.id=m,(k?j:n).innerHTML+=f,n.appendChild(j),k||(n.style.background="",n.style.overflow="hidden",i=l.style.overflow,l.style.overflow="hidden",l.appendChild(n)),g=c(j,a),k?j.parentNode.removeChild(j):(n.parentNode.removeChild(n),l.style.overflow=i),!!g},u={}.hasOwnProperty;h=e(u,"undefined")||e(u.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return u.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=s.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(s.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(s.call(arguments)))};return d}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",p.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c};for(var v in q)h(q,v)&&(g=v.toLowerCase(),j[g]=q[v](),r.push((j[g]?"":"no-")+g));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)h(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof k&&k&&(l.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),n=f=null,j._version=i,j._prefixes=p,j.testStyles=t,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(k?" js "+r.join(" "):""),j}(this,this.document),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(a=jQuery,a(function(){var b,c;return c=a(window),b=a(".js-fade-up-on-scroll"),b.each(function(b,c){return c=a(c),c.real_visible(!0)?c.addClass("come-in"):void 0}),a(window).scroll(function(){return b.each(function(b,c){return c=a(c),c.real_visible(!0)?c.addClass("come-in"):void 0})})}),a=jQuery,a(function(){return a(".js-jump-scroll").click(function(b){var c;return b.preventDefault(),c=a(this).attr("href"),a("html,body").animate({scrollTop:a(b.target.hash).offset().top},"slow",function(){return window.location.hash=c})})}),function(a,b){var c,d,e,f;return e=!1,f={},b.initializeLocationFinder=function(b){var c;return e?void 0:(e=!0,c={mode:"default",endpoint:"/example-data.json",validation:/[\s\S]*/,delegate:a(".js-location-finder-delegate")},f=null!=b?a.extend({},c,b):c,a(".no-js-feature-warning").hide(),a(".no-js-hide-feature").show(),a(".js-location-finder-results").hide(),a(".js-location-finder-button").click(function(a){return a.preventDefault(),d()}),a(".js-location-finder-form").submit(function(a){return a.preventDefault(),d()}))},d=function(){var b;return a(this).addClass("loading"),b=a(".js-location-finder-input").val(),b.match(f.validation)?a.get(""+f.endpoint+"?zip="+b,function(d){var e;return a(".js-location-finder-results-zip").text(b),a(".js-location-finder-results .location-list").html(""),a.each(d.results,function(){var b;return b="select"===f.mode?"":"",a(".js-location-finder-results .location-list").append('<li data-id="'+this.id+'">\n  <strong>'+this.name+"</strong><br>\n  "+this.street+", "+this.city+", "+this.state+" "+this.zip+"<br>\n  "+(null!=this.phone?this.phone+"\n":"")+"\n</li>")}),"select"===f.mode&&(e=a(".js-location-finder-results .location-list li"),e.addClass("js-clickable"),e.click(function(){return a(".js-location-finder-results .location-list").find(".js-clickable").removeClass("js-selected"),a(this).addClass("js-selected"),null!=f.delegate?f.delegate.val(a(this).data("id")):console.error("Location finder delegate not set.")})),a(".js-location-finder-form").slideUp(400),a(".js-location-finder-results").slideDown(400),c()}):(a(".js-location-finder-button").removeClass("loading"),a(".js-location-finder-form").append("<div id='js-location-finder-validation-error' class='messages error'>Slow down buddy, that's not a zip code.</div>").slideDown(400),a(".js-location-finder-input").bind("propertychange input keyup",function(){return a("#js-location-finder-validation-error").delay(800).slideUp(400,function(){return a("#js-location-finder-validation-error").remove()})}))},c=function(){return a(".js-location-finder-reset").click(function(b){return b.preventDefault(),a(".js-location-finder-results").slideUp(400),a(".js-location-finder-form").slideDown(400),a(".js-location-finder-results .location-list").html(""),a(".js-location-finder-button").removeClass("loading")})}}(a,window),a=jQuery,a(function(){return a(document).ready(function(){return a(".js-menu-toggle").click(function(){return a(".main-menu").toggleClass("is-visible-mobile")}),a(".search form input[type='search']").focus(function(){return a(".utility-link").addClass("is-hidden-on-phones")}),a(".search form input[type='search']").blur(function(){return a(".utility-link").removeClass("is-hidden-on-phones")})})}),Modernizr.touch){d=/:hover\b/;try{for(o=document.styleSheets,i=0,l=o.length;l>i;i++){for(h=o[i],c=[],p=h.cssRules,b=j=0,m=p.length;m>j;b=++j)e=p[b],e.type===CSSRule.STYLE_RULE&&d.test(e.selectorText)&&c.unshift(b);for(k=0,n=c.length;n>k;k++)b=c[k],h.deleteRule(b)}}catch(q){}}a=jQuery,window.pinToTop=function(){return a(window).scroll(g),g()},g=function(){var b,c;return c=a(window).scrollTop(),b=a("#js-pin-to-top-anchor").offset().top,c>b?a(".js-pin-to-top").addClass("is-stuck"):a(".js-pin-to-top").removeClass("is-stuck")},a=jQuery,a(function(){return a(".js-toggle-video-link").click(function(){return a(".js-toggle-video-link").hide(),a(".scroll-indicator-link").remove(),a(".js-toggle-video-container").html(a(".js-toggle-video-container").data("embed")),a(".js-toggle-video-container").show()})}),window.initializeScrollIndicatorVisibility=function(){return f(),a(window).on("scroll touchmove resize",function(){return f()})},f=function(){var b,c;return c=a(window).scrollTop(),b=a(".js-scroll-indicator-link-killer").offset().top,a(".js-scroll-indicator-link-killer").visible(!0)?a(".scroll-indicator-link").fadeOut(400):b>c?a(".scroll-indicator-link").fadeIn(400):void 0}}.call(this);
//# sourceMappingURL=assets/neue.js.map