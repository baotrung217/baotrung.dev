// comback to full text content search?: replace 2 "keywords" with "content"
!function(){function e(e,n,t){t=t||2*n.length;for(var i,r=e.split(" "),o=n.toLowerCase().indexOf(e.toLowerCase()),l=e.length,s=0;s<r.length&&!(o>=0);s++)o=n.toLowerCase().indexOf(r[s].toLowerCase()),l=r[s].length;if(o>=0){var a=o-t/2,d=a>0?o+l+t/2:t;i=n.substring(a,d).trim(),a>0&&(i="..."+i),d<n.length&&(i+="..."),i=i.replace(new RegExp("("+r.join("|")+")","gi"),"<mark>$1</mark>")}else i=n.substring(0,t).trim()+(n.length>t?"...":"");return i}window.index=lunr(function(){this.field("id"),this.field("title",{boost:10}),this.field("categories"),this.field("url"),this.field("keywords")});var n=decodeURIComponent((function(e){for(var n=window.location.search.substring(1).split("&"),t=0;t<n.length;t++){var i=n[t].split("=");if(i[0]===e)return i[1]}}("q")||"").replace(/\+/g,"%20")),t=document.getElementById("search-query-container"),i=document.getElementById("search-query");for(var r in i.innerText=n,t.style.display="inline",window.data)window.index.add(window.data[r]);!function(n,t){var i=document.getElementById("search-results"),r=document.getElementById("search-process");if(n.length){var o="";n.forEach(function(n){var i=window.data[n.ref],r=e(t,i.keywords,170),l=e(t,i.title);o+="<li><h4><a href='"+i.url.trim()+"'>"+l+"</a></h4><p><small>"+r+"</small></p></li>"}),i.innerHTML=o,r.innerText="The search results for keyword "}else i.style.display="none",r.innerText="There is no result for keyword "}(window.index.search(n),n)}();