/*! (C) 2017 Andrea Giammarchi - @WebReflection - ISC License */
document.addEventListener("click",function(t){var e=t.target.shadowRoot?t.path[0]:t.target,a=(e.closest||function(t){for(;e&&e.nodeName!==t;)e=e.parentNode;return e}).call(e,"A");if(a&&/^(?:_self)?$/i.test(a.target)&&!a.hasAttribute("download")&&"external"!==a.getAttribute("rel")&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&!t.altKey){var n=new URL(a.href),o=location;if(n.origin===o.origin){var r=n.pathname+n.search,i=n.hash,s=!0;if(t.preventDefault(),r===o.pathname+o.search){if(/^#[a-z][a-z0-9.:_-]+$/i.test(i)){var e=document.querySelector(i+',[name="'+i.slice(1)+'"]');e&&(t.preventDefault=function(){s=!1},setTimeout(function(){s&&e.scrollIntoView(!0)}))}history.replaceState(history.state,document.title,r+i)}else{var c=new CustomEvent("pushstate");c.state=o.href,setTimeout(function(){dispatchEvent(c),window.onpushstate&&onpushstate(c)}),history.pushState(c.state,document.title,r+i)}}}},!0);