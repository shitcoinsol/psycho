
// Minimal interactivity for meme vibes (no external libs)
const copyBtns = document.querySelectorAll('[data-copy]');
copyBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.querySelector(btn.dataset.copy);
    if (!target) return;
    navigator.clipboard.writeText(target.innerText.trim()).then(()=>{
      btn.innerText = 'Copied!';
      setTimeout(()=>btn.innerText='Copy', 1000);
    });
  });
});

// Click pops: little 'haha' bubbles
document.addEventListener('click',(e)=>{
  const bubble = document.createElement('div');
  bubble.textContent = ['hehe','haha','smile','ok','lol'][Math.floor(Math.random()*5)];
  Object.assign(bubble.style, {
    position:'fixed', left: e.clientX+'px', top:e.clientY+'px',
    fontWeight:'900', fontSize:'14px', pointerEvents:'none'
  });
  document.body.appendChild(bubble);
  let y=0, id=setInterval(()=>{
    y+=1; bubble.style.transform = `translate(-50%, -${y}px)`; bubble.style.opacity = (20-y)/20;
    if(y>20){clearInterval(id); bubble.remove();}
  }, 16);
});

// Copypasta generator
const input = document.querySelector('#paste-input');
const output = document.querySelector('#paste-output');
const gen = document.querySelector('#gen');
if(gen){
  gen.addEventListener('click',()=>{
    const msg = (input.value || 'I smile because I can.').trim();
    
    const templates = [
      `> ${msg}
no thoughts head full of teeth.`,
      `${msg} — signed, P S Y C H O.`,
      `BREAKING: ${msg.toUpperCase()} (sources: trust me bro)`,
      `local man says "${msg}", refuses to elaborate further.`,
      `[ALERT] ${msg}. this is fine.`,
      `chart red, smile wide. "${msg}".`,
      `we are so back: ${msg}`,
      `this is not a top. ${msg}`,
      `copium report: ${msg}`,
      `exit liquidity? never heard of her. ${msg}`,
      `if (${msg}) then number go up; else number go up later.`,
      `i did the research: "${msg}"`,
      `diamond smiles > diamond hands. ${msg}`,
      `-60%? tutorial level. ${msg}`,
      `my tp is the sun. ${msg}`,
      `ok bears, listen: ${msg}`,
      `ape together strong. also ${msg}`,
      `psychologically long since birth. ${msg}`
    ];

    output.innerText = templates[Math.floor(Math.random()*templates.length)];
  });
}


// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks){
  navToggle.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Improve bubble feedback on touch
document.addEventListener('touchstart',(e)=>{
  const t = e.touches[0];
  if(!t) return;
  const bubble = document.createElement('div');
  bubble.textContent = ['hehe','haha','smile','ok','lol'][Math.floor(Math.random()*5)];
  Object.assign(bubble.style, {
    position:'fixed', left: t.clientX+'px', top:t.clientY+'px',
    fontWeight:'900', fontSize:'14px', pointerEvents:'none'
  });
  document.body.appendChild(bubble);
  let y=0, id=setInterval(()=>{
    y+=1; bubble.style.transform = `translate(-50%, -${y}px)`; bubble.style.opacity = (20-y)/20;
    if(y>20){clearInterval(id); bubble.remove();}
  }, 16);
}, {passive:true});
