function windowLoad(){function n(n){var e=n||document.querySelectorAll("[data-digits-counter]");e&&e.forEach((function(n){!function(n){var e=null,t=parseInt(n.dataset.digitsCounter)?parseInt(n.dataset.digitsCounter):1e3,o=parseInt(n.innerHTML),r=0,i=function(a){e||(e=a);var c=Math.min((a-e)/t,1);n.innerHTML=Math.floor(c*(r+o)),c<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}(n)}))}var e=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var o=e.target,r=o.querySelectorAll(" [data-digits-counter ]");r.length&&n(r),t.unobserve(o)}}))}),{threshold:1}),t=document.querySelectorAll(".page__section");t.length&&t.forEach((function(n){e.observe(n)}))}window.addEventListener("load",windowLoad);
//# sourceMappingURL=index.37d781c8.js.map