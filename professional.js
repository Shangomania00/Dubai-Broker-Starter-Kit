const $=id=>document.getElementById(id);
const money=n=>new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(Number(n||0))+' AED';

function calc(){
  const p=+$('price').value||0, dp=p*(+$('dp').value||0)/100, dld=p*(+$('dld').value||0)/100,
  mortgage=$('mortgage')?.checked?p*.0025:0, extra=+$('extra').value||0;
  $('rDp').textContent=money(dp);$('rDld').textContent=money(dld);$('rMortgage').textContent=money(mortgage);$('rTotal').textContent=money(dp+dld+mortgage+extra)
}
['price','dp','dld','extra'].forEach(id=>$(id)?.addEventListener('input',calc));$('mortgage')?.addEventListener('change',calc);calc();

document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-tab]').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');$(btn.dataset.tab)?.classList.add('active')
}));

['developerSearch','glossarySearch'].forEach(id=>{
  $(id)?.addEventListener('input',e=>{
    const q=e.target.value.toLowerCase(), cls=id==='developerSearch'?'.dev':'.gloss';
    document.querySelectorAll(cls).forEach(x=>x.style.display=(x.dataset.key+' '+x.innerText).toLowerCase().includes(q)?'block':'none')
  })
});

const mistakesAR=[
['إرسال المشاريع قبل التأهيل','إذا لم تعرف هدف العميل وميزانيته والسيولة المتاحة، تتحول المحادثة إلى كتالوج بدل استشارة.'],
['بيع العائد كضمان','اشرح السيناريوهات والافتراضات والمخاطر. العائد المتوقع ليس وعداً ثابتاً.'],
['التركيز على الدفعة الأولى فقط','راجع كامل جدول الدفع، خصوصاً الدفعات الكبيرة قبل التسليم.'],
['إهمال المتابعة','Lead جيد بدون Follow-up واضح غالباً يضيع. حدد الخطوة القادمة وموعدها.'],
['التشتت بين مئات المشاريع','التخصص في مناطق ومنتجات محددة يبني ثقة أسرع من المعرفة السطحية بكل شيء.']
];
const mistakesEN=[
['Sending projects before qualification','If you do not know the client’s goal, budget and available cash, the conversation becomes a catalogue instead of a consultation.'],
['Presenting returns as guaranteed','Explain scenarios, assumptions and risks. An expected return is not a fixed promise.'],
['Focusing only on the initial payment','Review the full payment schedule, especially large instalments before handover.'],
['Neglecting follow-up','A strong lead without a clear follow-up process is often lost. Set the next action and follow-up date.'],
['Trying to cover hundreds of projects','Specializing in selected areas and products builds trust faster than shallow knowledge of everything.']
];
let mi=0;const mistakes=document.documentElement.lang==='ar'?mistakesAR:mistakesEN;
function renderMistake(){if(!$('mistakeContent'))return;$('mistakeContent').innerHTML=`<h3>${mistakes[mi][0]}</h3><p>${mistakes[mi][1]}</p>`}
$('prevMistake')?.addEventListener('click',()=>{mi=(mi-1+mistakes.length)%mistakes.length;renderMistake()});
$('nextMistake')?.addEventListener('click',()=>{mi=(mi+1)%mistakes.length;renderMistake()});renderMistake();

const checks=[...document.querySelectorAll('[data-save]')];
function progress(){
 let n=0;checks.forEach(c=>{const k='broker_'+c.dataset.save;localStorage.setItem(k,c.checked?'1':'0');if(c.checked)n++});
 const pct=checks.length?Math.round(n/checks.length*100):0;if($('progressBar'))$('progressBar').style.width=pct+'%';if($('progressText'))$('progressText').textContent=pct+'% · '+n+'/'+checks.length
}
checks.forEach(c=>{c.checked=localStorage.getItem('broker_'+c.dataset.save)==='1';c.addEventListener('change',progress)});progress();

const quizAR=[
{q:'ما أول سؤال مهم قبل إرسال المشاريع؟',a:['ما لون المبنى؟','ما هدفك وميزانيتك؟','كم عدد الإعلانات؟'],ok:1,why:'التأهيل يبدأ بالهدف والميزانية والسيولة قبل الترشيح.'},
{q:'هل العائد المتوقع يعتبر ضماناً؟',a:['نعم دائماً','لا، هو سيناريو تقديري','فقط في Off-plan'],ok:1,why:'العائد يعتمد على افتراضات السوق والإشغال والتكاليف.'},
{q:'ما الذي يجب مراجعته في خطة الدفع؟',a:['الدفعة الأولى فقط','كل جدول الدفعات','اسم المشروع فقط'],ok:1,why:'الضغط المالي قد يأتي من دفعات لاحقة كبيرة.'}
];
const quizEN=[
{q:'What is the first important question before sending projects?',a:['What colour is the building?','What is your goal and budget?','How many ads are there?'],ok:1,why:'Qualification starts with the goal, budget and available cash.'},
{q:'Is an expected return a guarantee?',a:['Yes, always','No, it is an estimate','Only in off-plan'],ok:1,why:'Returns depend on assumptions about the market, occupancy and costs.'},
{q:'What should you review in a payment plan?',a:['Only the first payment','The full payment schedule','Only the project name'],ok:1,why:'Financial pressure may come from large later instalments.'}
];
let qi=0,quiz=document.documentElement.lang==='ar'?quizAR:quizEN;
function renderQuiz(){
 if(!$('quizQ'))return;const q=quiz[qi];$('quizQ').textContent=q.q;$('quizFeedback').textContent='';$('quizAnswers').innerHTML='';
 q.a.forEach((t,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=t;b.onclick=()=>{[...$('quizAnswers').children].forEach(x=>x.disabled=true);b.classList.add(i===q.ok?'correct':'wrong');if(i!==q.ok)$('quizAnswers').children[q.ok].classList.add('correct');$('quizFeedback').textContent=q.why;setTimeout(()=>{qi=(qi+1)%quiz.length;renderQuiz()},1700)};$('quizAnswers').appendChild(b)})
}renderQuiz();

$('consultBtn')?.addEventListener('click',()=>{
 const en=document.documentElement.lang==='en', g=$('goal').value||'-',b=$('budget').value||'-',c=$('cash').value||'-',a=$('area').value||'-',n=$('notes').value||'-';
 const msg=(en?'Hi Saif, I would like a free real estate consultation.':'مرحبا سيف، أريد استشارة عقارية مجانية.')+
 '\n\n'+(en?'Goal':'الهدف')+': '+g+'\n'+(en?'Budget':'الميزانية')+': '+b+' AED\n'+(en?'Available cash':'السيولة الحالية')+': '+c+' AED\n'+(en?'Preferred area':'المنطقة المفضلة')+': '+a+'\n'+(en?'Notes':'ملاحظات')+': '+n;
 window.open('https://wa.me/971508800104?text='+encodeURIComponent(msg),'_blank')
});