/* Five Prime Nigeria Limited - Variation 2 (AgroServ style) */
/* ===== SETTINGS ===== */
const EMAIL='';/* put the business email address here, e.g. 'name@example.com' */
/* WhatsApp number in international format (Nigeria: 234 + number without the leading 0) */
const WA='2348074109054',wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`,H='Hello Five Prime Nigeria Limited. I visited your website and ';
const $=s=>[...document.querySelectorAll(s)];
document.documentElement.classList.add('js');
$('[data-p]').forEach(e=>e.href=wa(H+`would like to enquire about ${e.dataset.p}. Please share details and availability.`));
$('.wa-gen').forEach(e=>e.href=wa(H+'would like to enquire about your agricultural products and availability.'));
$('.wa-bulk').forEach(e=>e.href=wa(H+'would like to make a wholesale / bulk enquiry.'));
$('.wa-quote').forEach(e=>e.href=wa(H+'would like to request a quote for your agricultural products.'));
$('.wa-f,.wa-gen,.wa-bulk,.wa-quote,[data-p]').forEach(e=>{e.target='_blank';e.rel='noopener'});
const mb=document.getElementById('mb'),nav=document.querySelector('nav');
mb.onclick=()=>mb.setAttribute('aria-expanded',nav.classList.toggle('open'));
$('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$('.rv').forEach(e=>io.observe(e));
const lb=document.getElementById('lb'),li=lb.querySelector('img');
$('.gl').forEach(b=>b.onclick=()=>{li.src=b.dataset.src;li.alt=b.dataset.a;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'));
const f=document.getElementById('cf'),s=document.getElementById('st');
f.onsubmit=e=>{e.preventDefault();let ok=true;const v={};
['name','phone','email','subject','message'].forEach(k=>{const i=f.elements[k],x=i.value.trim(),er=i.parentNode.querySelector('.err');let m='';
if(!x&&k!=='email')m='Please fill in this field.';
else if(k==='phone'&&!/^[+\d][\d\s-]{6,}$/.test(x))m='Enter a valid phone number.';
else if(k==='email'&&x&&!/^\S+@\S+\.\S+$/.test(x))m='Enter a valid email address.';
er.textContent=m;if(m)ok=false;v[k]=x});
if(!ok){s.textContent='Please correct the highlighted fields.';s.style.color='#d33';return}
const body=`Name: ${v.name}\nPhone: ${v.phone}\nEmail: ${v.email||'-'}\nSubject: ${v.subject}\n\n${v.message}`;
if(e.submitter&&e.submitter.value==='mail'){
if(!EMAIL){s.style.color='#d33';s.textContent='Email sending is not set up yet. Please use WhatsApp.';return}
s.style.color='var(--g2)';s.textContent='Opening your email app…';
location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;return}
s.style.color='var(--g2)';s.textContent='Opening WhatsApp so you can send your message…';
window.open(wa('Hello Five Prime Nigeria Limited.\n'+body),'_blank','noopener')};
