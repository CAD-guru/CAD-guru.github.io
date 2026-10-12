const $=(s)=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=d=>new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
const card=p=>`<a class="card" href="post.html?p=${p.slug}"><div class="th">${p.videoId?`<img src="https://i.ytimg.com/vi/${esc(p.videoId)}/hqdefault.jpg" alt="" loading="lazy">`:`<span class="ph">${esc(p.commands[0])}</span>`}</div><div class="cb"><span class="cat"><i style="background:${CATS[p.category]}"></i>${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></div></a>`;
function chrome(){
 const yt=SITE.youtube?`<a href="${esc(SITE.youtube)}" rel="noopener">YouTube</a>`:'';
 $('#top').innerHTML=`<a class="brand" href="index.html"><img src="mark.svg" alt="" width="38" height="38"><span>CAD<b>guru</b></span></a><nav><a href="index.html">Tips</a><a href="about.html">About and contact</a>${yt}</nav>`;
 $('#foot').innerHTML=`<div class="tb"><div><small>Sheet</small>CADguru</div><div><small>Subject</small>AutoCAD tips and tricks</div><div><small>Copyright</small>${new Date().getFullYear()} CADguru</div></div>`;
}
function typer(){
 const el=$('#cmd span'),cs=POSTS.map(p=>p.commands[0]);
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=cs[0];return}
 let i=0,j=0,del=false;
 (function t(){const w=cs[i];el.textContent=w.slice(0,j);
  if(!del&&j<w.length){j++;setTimeout(t,90)}else if(!del){del=true;setTimeout(t,1400)}
  else if(j>0){j--;setTimeout(t,40)}else{del=false;i=(i+1)%cs.length;setTimeout(t,300)}})();
}
function home(){
 typer();
 const cats=Object.keys(CATS),grid=$('#grid'),box=$('#layers');
 const show=c=>{grid.innerHTML=POSTS.filter(p=>!c||p.category===c).map(card).join('');
  box.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.c||'')===(c||''))))};
 box.innerHTML=[''].concat(cats).map(c=>`<button data-c="${esc(c)}">${c?`<i style="background:${CATS[c]}"></i>${esc(c)}`:'All tips'}<small>${c?POSTS.filter(p=>p.category===c).length:POSTS.length}</small></button>`).join('');
 box.onclick=e=>{const b=e.target.closest('button');if(b)show(b.dataset.c)};
 show('');
}
function post(){
 const p=POSTS.find(x=>x.slug===new URLSearchParams(location.search).get('p')),el=$('#post');
 if(!p){el.innerHTML='<h1>Tip not found</h1><p><a href="index.html">Back to all tips</a></p>';return}
 document.title=p.title+' | CADguru';
 const v=p.videoId?`<div class="vid${p.vertical?' v':''}"><iframe src="https://www.youtube-nocookie.com/embed/${esc(p.videoId)}" title="${esc(p.title)}" loading="lazy" allowfullscreen allow="encrypted-media; picture-in-picture"></iframe></div>`:'<div class="vid soon"><span>Video coming soon</span></div>';
 el.innerHTML=`<p><a href="index.html">All tips</a></p><span class="cat"><i style="background:${CATS[p.category]}"></i>${esc(p.category)}</span><h1>${esc(p.title)}</h1><p class="date">${fmt(p.date)}</p>${v}<p class="lead">${esc(p.summary)}</p><h2>Commands</h2><p>${p.commands.map(c=>`<code>${esc(c)}</code>`).join(' ')}</p><h2>Steps</h2><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><p class="tip"><b>Good to know:</b> ${esc(p.tip)}</p>`;
}
chrome();
({home,post}[document.body.dataset.page]||(()=>{}))();
