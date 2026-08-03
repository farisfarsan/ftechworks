/* ─── THEME ─── */
var H=document.documentElement;
function applyTheme(t){H.setAttribute('data-theme',t);try{localStorage.setItem('gpy-t',t)}catch(e){}}
function toggleTheme(){applyTheme(H.getAttribute('data-theme')==='dark'?'light':'dark')}

/* ─── CURSOR ─── */
var cur=document.getElementById('cursor');
var ring=document.getElementById('cursor-ring');
var mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button,.svc-card,.wcard,.pstep,.pso,.stat,.brand-case,.brand-gallery img').forEach(function(el){
  el.addEventListener('mouseenter',function(){document.body.classList.add('cursor-big')});
  el.addEventListener('mouseleave',function(){document.body.classList.remove('cursor-big')});
});

/* ─── MOB MENU ─── */
var mobOpen=false;
function toggleMob(){mobOpen?closeMob():openMob()}
function openMob(){document.getElementById('mob').classList.add('open');document.getElementById('burger').classList.add('open');document.body.style.overflow='hidden';mobOpen=true}
function closeMob(){document.getElementById('mob').classList.remove('open');document.getElementById('burger').classList.remove('open');document.body.style.overflow='';mobOpen=false}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mobOpen)closeMob()});

/* ─── SCROLL REVEAL ─── */
var rObs=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');rObs.unobserve(e.target)}})},{threshold:.07});
document.querySelectorAll('.r').forEach(function(el){rObs.observe(el)});

/* ─── PROGRESS + NAV + BACK-TOP ─── */
var pb=document.getElementById('pgbar'),btt=document.getElementById('btt'),nav=document.getElementById('nav');
window.addEventListener('scroll',function(){
  var pct=(scrollY/(document.body.scrollHeight-innerHeight))*100;
  pb.style.width=pct+'%';
  nav.classList.toggle('scrolled',scrollY>40);
  btt.classList.toggle('show',scrollY>400);
  updateSpy();
},{passive:true});

/* ─── SCROLLSPY (in-page sections) ─── */
var spySections=['home','why','services','process','contact'];
function updateSpy(){
  var cur='home';
  spySections.forEach(function(id){var el=document.getElementById(id);if(el&&scrollY>=el.offsetTop-120)cur=id});
  if(scrollY+innerHeight>=document.documentElement.scrollHeight-2)cur=spySections[spySections.length-1];
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function(a){
    var h=a.getAttribute('href').replace('#','');
    a.classList.toggle('active',h===cur);
  });
}

/* ─── ACTIVE NAV FOR SEPARATE SERVICE PAGES ─── */
(function(){
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a[href], .mob-lnk[href]').forEach(function(a){
    var href=a.getAttribute('href');
    if(href&&href.indexOf('#')===-1&&href===path){
      a.classList.add('active');
      var drop=a.closest('.nav-drop');
      if(drop){var t=drop.querySelector('.nav-drop-toggle');if(t)t.classList.add('active')}
    }
  });
})();

/* ─── COUNTER ─── */
function runCount(el){
  var t=parseInt(el.dataset.count)||0,sf=el.dataset.suffix||'',dur=1300,step=16,steps=dur/step,inc=t/steps,v=0;
  var id=setInterval(function(){v+=inc;if(v>=t){v=t;clearInterval(id)}el.textContent=Math.round(v)+sf},step);
}
var cObs=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){runCount(e.target);cObs.unobserve(e.target)}})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(function(el){cObs.observe(el)});

/* ─── SMOOTH ANCHORS (same-page only) ─── */
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var id=this.getAttribute('href');if(id==='#')return;
    var t=document.querySelector(id);if(!t)return;
    e.preventDefault();
    window.scrollTo({top:t.getBoundingClientRect().top+scrollY-68,behavior:'smooth'});
  });
});

/* ─── 3D TILT (desktop only) ─── */
if(innerWidth>768){
  document.querySelectorAll('.wcard,.svc-card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var x=((e.clientX-r.left)/r.width-.5)*10;
      var y=((e.clientY-r.top)/r.height-.5)*-8;
      card.style.transform='translateY(-7px) rotateY('+x+'deg) rotateX('+y+'deg)';
      card.style.transition='transform .08s';
    });
    card.addEventListener('mouseleave',function(){
      card.style.transform='';card.style.transition='transform .45s ease';
    });
  });
  document.querySelectorAll('.brand-case').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var x=((e.clientX-r.left)/r.width-.5)*3;
      var y=((e.clientY-r.top)/r.height-.5)*-2.4;
      card.style.transform='translateY(-4px) rotateY('+x+'deg) rotateX('+y+'deg)';
      card.style.transition='transform .08s';
    });
    card.addEventListener('mouseleave',function(){
      card.style.transform='';card.style.transition='transform .45s ease';
    });
  });
}

/* ─── AUTO-SCROLL GALLERIES ─── */
document.querySelectorAll('.brand-gallery,.landing-gallery').forEach(function(gal){
  var dir=1,speed=0.5,paused=false;
  gal.addEventListener('click',function(){paused=!paused});
  function tick(){
    var max=gal.scrollWidth-gal.clientWidth;
    if(!paused&&max>0){
      gal.scrollLeft+=speed*dir;
      if(gal.scrollLeft>=max)dir=-1;
      else if(gal.scrollLeft<=0)dir=1;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});

/* ─── WORK FILTERS ─── */
document.querySelectorAll('.wfilter').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.wfilter').forEach(function(b){b.classList.remove('active')});
    btn.classList.add('active');
    var f=btn.dataset.filter,idx=0;
    document.querySelectorAll('[data-cat]').forEach(function(item){
      var show=(f==='all'||item.dataset.cat===f);
      item.style.display=show?'':'none';
      if(show&&item.classList.contains('wcard')){
        var n=item.querySelector('.wcard-num');
        if(n)n.textContent=String(++idx).padStart(2,'0');
      }
    });
  });
});

/* ─── INQUIRY FORM → WHATSAPP ─── */
var inquiryForm=document.getElementById('inquiryForm');
if(inquiryForm){
  inquiryForm.addEventListener('submit',function(e){
    e.preventDefault();
    var f=new FormData(inquiryForm);
    var lines=[
      "Hi Team Ftechworks! I'd like to discuss a project.",
      "",
      "Name: "+f.get('name'),
      "Email: "+f.get('email'),
      "Phone: "+(f.get('phone')||'—'),
      "Service: "+f.get('service'),
      "Budget: "+f.get('budget'),
      "",
      "Project details:",
      f.get('message')
    ];
    var msg=encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/919061894005?text='+msg,'_blank');
  });
}

/* ─── RIPPLE ON BUTTONS ─── */
document.querySelectorAll('.btn-solid,.btn-ghost,.hire-btn').forEach(function(btn){
  btn.addEventListener('click',function(e){
    var r=btn.getBoundingClientRect();
    var rip=document.createElement('span');
    var sz=Math.max(r.width,r.height);
    rip.style.cssText='position:absolute;width:'+sz+'px;height:'+sz+'px;border-radius:50%;background:rgba(255,255,255,.25);transform:scale(0);animation:ripple .55s ease;left:'+(e.clientX-r.left-sz/2)+'px;top:'+(e.clientY-r.top-sz/2)+'px;pointer-events:none;z-index:10';
    btn.style.position='relative';btn.style.overflow='hidden';
    btn.appendChild(rip);setTimeout(function(){rip.remove()},600);
  });
});
var rs=document.createElement('style');rs.textContent='@keyframes ripple{to{transform:scale(2.5);opacity:0}}';document.head.appendChild(rs);
