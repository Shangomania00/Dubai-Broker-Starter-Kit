const app = {
  lang: localStorage.getItem('brokerKitLang') || 'ar',
  marketYear: '2025',
  ecosystemFilter: 'all',
  mistakeIndex: 0,
  quizAnswered: false,
};

const t = {
  ar: {
    skip: 'تجاوز إلى المحتوى', brandText: 'SMT × الحمودي', navOverview: 'النظرة العامة', navProcess: 'خطوات الصفقة', navDevelopers: 'المطورون', navTools: 'أدوات AI', navChecklist: 'قائمة المهام', navCalculator: 'حاسبة الصفقة',
    heroEyebrow: 'دليل تفاعلي للوسطاء الجدد في دبي', heroTitle: 'دليل وسيط العقارات في دبي', heroLead: 'موقع تدريبي كامل، سهل، ثنائي اللغة، يجمع السوق، القوانين، المصطلحات، خطوات الإغلاق، أخطاء الوسطاء، المطورين، المناطق الواعدة، وأدوات الذكاء الاصطناعي في تجربة واحدة.', startNow: 'ابدأ الآن', viewSources: 'مصادر البيانات',
    stat2025Label: 'قيمة معاملات 2025', statDealsLabel: 'معاملة عقارية', statLangLabel: 'عربي / English', dashboardTitle: 'لوحة الوسيط الذكي', liveChip: 'تفاعلي', flowLead: 'عميل', flowView: 'معاينة', flowMou: 'MOU', flowTransfer: 'نقل ملكية',
    overviewKicker: 'الملخص حسب الفئات', overviewTitle: 'كل ما يحتاجه الوسيط الجديد في مكان واحد', overviewBody: 'صممناه كمنتج تدريبي حقيقي: أرقام سوق، إجراءات، أسرار مهنية، قوائم مهام، وحاسبات عملية تساعد الوسيط يتعلم ويطبق بسرعة.',
    marketKicker: 'بيانات السوق', marketTitle: 'لقطة دبي العقارية بأرقام بسيطة', marketBody: 'الأرقام الرسمية تستخدم لتعليم الوسيط كيف يتحدث بثقة، لا للمبالغة. دائماً حدّث الأرقام قبل عرضها على العميل.', marketNote: 'ملاحظة: الأرقام مأخوذة من بيانات منشورة رسمياً، ويجب تحديثها عند الاستخدام التجاري.',
    ecosystemKicker: 'فهم المنظومة', ecosystemTitle: 'من هو المسؤول عن ماذا؟', ecosystemBody: 'هذه البطاقات تشرح الكلمات التي يسمعها الوسيط يومياً: DLD، RERA، Trakheesi، Oqood، Ejari، NOC وغيرها.',
    processKicker: 'من Lead إلى Commission', processTitle: 'طريقة إغلاق الصفقة بدون تعقيد', calcKicker: 'حاسبة سريعة', calcTitle: 'احسب تكلفة صفقة بيع في دبي', calcBody: 'أدخل السعر ونوع العقار. الحاسبة تعليمية وتوضح الرسوم الأساسية، وليست بديلاً عن موظف التسجيل أو المستشار القانوني.', priceLabel: 'سعر العقار بالدرهم', buyerPaysLabel: 'المشتري يدفع 4% كاملة حسب الاتفاق التجاري', mortgageLabel: 'إضافة رسم رهن 0.25%',
    devKicker: 'المطورون', devTitle: 'كيف تفهم كل مطور بسرعة؟', devBody: 'لا تحفظ أسماء فقط. افهم USP، نوع العميل المناسب، ونقطة الحذر قبل ما ترشح مشروع.', searchDeveloper: 'ابحث عن مطور أو USP',
    gemsKicker: 'Hidden Gems', gemsTitle: 'مناطق واعدة لا تبيعها كضمان', gemsBody: 'المنطقة الواعدة تعني وجود محركات نمو، وليس وعد ربح مؤكد. الوسيط المحترف يشرح الفرصة والمخاطر معاً.',
    natKicker: 'الجنسيات والشرائح', natTitle: 'كيف تتعامل مع شرائح المشترين؟', natBody: 'بيانات DLD العامة لا تعرض جنسية كل مشتري داخل جدول المعاملات. لذلك يظهر هذا الجزء كذكاء سوقي عام، وليس رقم رسمي نهائي.',
    mistakesKicker: 'الأسرار والإخفاقات', mistakesTitle: 'أخطاء تكلف الوسطاء صفقات حقيقية', toolsKicker: 'AI Broker Stack', toolsTitle: 'أدوات تساعد الوسيط يشتغل أسرع وأذكى', toolsBody: 'الأداة لا تغني عن الخبرة، لكنها تختصر وقت البحث، التصميم، المتابعة، والتحليل.', glossaryKicker: 'قاموس الوسيط', glossaryTitle: 'مصطلحات لازم تعرفها', searchGlossary: 'ابحث عن مصطلح',
    checkKicker: 'خطة تنفيذ', checkTitle: 'قائمة مهام أول 30 يوم', checkBody: 'اختر المهام التي أنجزتها. يتم حفظ التقدم على نفس المتصفح.', quizKicker: 'اختبار سريع', quizTitle: 'هل أنت جاهز لأول صفقة؟', quizBody: 'جاوب على سؤال واحد كل مرة، وتعلم من الإجابة فوراً.',
    sourcesKicker: 'مصادر ودقة', sourcesTitle: 'مصادر البيانات المستخدمة', sourcesBody: 'هذا الموقع تعليمي. استخدم الروابط الرسمية لتحديث الأرقام والرسوم قبل أي عرض أو تدريب.', footerText: 'دليل تدريبي تفاعلي للوسطاء الجدد في دبي — مبني بأسلوب فاخر وسهل الفهم.',
    why: 'لماذا يهم؟', example: 'مثال', watch: 'انتبه', bestFor: 'مناسب لـ', usp: 'USP', source: 'المصدر', openSource: 'فتح المصدر', total: 'الإجمالي التقريبي', reset: 'إعادة الاختبار', correct: 'صحيح', wrong: 'غير صحيح', progress: 'تم إنجاز', of: 'من', tasks: 'مهام'
  },
  en: {
    skip: 'Skip to content', brandText: 'SMT × Al Hamoudi', navOverview: 'Overview', navProcess: 'Deal Flow', navDevelopers: 'Developers', navTools: 'AI Tools', navChecklist: 'Checklist', navCalculator: 'Deal Calculator',
    heroEyebrow: 'Interactive starter kit for new Dubai brokers', heroTitle: 'Dubai Real Estate Broker Starter Kit', heroLead: 'A complete bilingual training website covering market data, rules, keywords, closing steps, broker mistakes, developers, hidden-gem areas, and AI tools in one easy experience.', startNow: 'Start now', viewSources: 'Data sources',
    stat2025Label: '2025 transaction value', statDealsLabel: 'real estate transactions', statLangLabel: 'Arabic / English', dashboardTitle: 'Smart Broker Dashboard', liveChip: 'Interactive', flowLead: 'Lead', flowView: 'Viewing', flowMou: 'MOU', flowTransfer: 'Transfer',
    overviewKicker: 'Summary by category', overviewTitle: 'Everything a new broker needs in one place', overviewBody: 'Built like a real training product: market numbers, procedures, practical secrets, checklists, and calculators that help brokers learn and execute faster.',
    marketKicker: 'Market data', marketTitle: 'Dubai property snapshot in simple numbers', marketBody: 'Official numbers help brokers speak with confidence, not exaggeration. Always update the data before presenting it to clients.', marketNote: 'Note: numbers are taken from published official sources and should be refreshed for commercial use.',
    ecosystemKicker: 'Ecosystem basics', ecosystemTitle: 'Who does what?', ecosystemBody: 'These cards explain daily broker keywords: DLD, RERA, Trakheesi, Oqood, Ejari, NOC, and more.',
    processKicker: 'From lead to commission', processTitle: 'How to close a deal without confusion', calcKicker: 'Quick calculator', calcTitle: 'Estimate the cost of a Dubai sale deal', calcBody: 'Enter the property price. This calculator is educational and highlights key costs; it does not replace a registration trustee or legal advisor.', priceLabel: 'Property price in AED', buyerPaysLabel: 'Buyer pays full 4% by commercial agreement', mortgageLabel: 'Add 0.25% mortgage registration fee',
    devKicker: 'Developers', devTitle: 'Understand each developer fast', devBody: 'Do not memorize names only. Understand the USP, ideal buyer, and watch-out before recommending any project.', searchDeveloper: 'Search developer or USP',
    gemsKicker: 'Hidden Gems', gemsTitle: 'Promising areas are not guaranteed profits', gemsBody: 'A hidden gem means there are growth drivers, not a promised return. A professional broker explains opportunity and risk together.',
    natKicker: 'Nationalities & personas', natTitle: 'How to handle buyer segments', natBody: 'Public DLD transaction tables do not show buyer nationality. This section is general market intelligence, not an official final ranking.',
    mistakesKicker: 'Secrets & failures', mistakesTitle: 'Mistakes that cost brokers real deals', toolsKicker: 'AI Broker Stack', toolsTitle: 'Tools that help brokers work faster and smarter', toolsBody: 'Tools do not replace expertise, but they reduce research, design, follow-up, and analysis time.', glossaryKicker: 'Broker glossary', glossaryTitle: 'Keywords you must know', searchGlossary: 'Search a keyword',
    checkKicker: 'Execution plan', checkTitle: 'First 30 days checklist', checkBody: 'Tick completed tasks. Progress is saved in this browser.', quizKicker: 'Quick quiz', quizTitle: 'Ready for your first deal?', quizBody: 'Answer one question at a time and learn immediately.',
    sourcesKicker: 'Sources & accuracy', sourcesTitle: 'Data sources used', sourcesBody: 'This website is educational. Use the official links to refresh figures and fees before any presentation or training.', footerText: 'Interactive training guide for new Dubai brokers — built with a premium, simple, easy-to-learn style.',
    why: 'Why it matters', example: 'Example', watch: 'Watch out', bestFor: 'Best for', usp: 'USP', source: 'Source', openSource: 'Open source', total: 'Approx. total', reset: 'Reset quiz', correct: 'Correct', wrong: 'Wrong', progress: 'Completed', of: 'of', tasks: 'tasks'
  }
};

const content = {
  categories: [
    { icon:'📊', ar:{title:'أرقام السوق', text:'إحصاءات رسمية مختصرة تساعدك تبني ثقة مع العميل.'}, en:{title:'Market numbers', text:'Official headline stats to build client confidence.'}},
    { icon:'🏛️', ar:{title:'القوانين والجهات', text:'DLD، RERA، Trakheesi، Dubai REST، والرسوم بطريقة سهلة.'}, en:{title:'Rules & authorities', text:'DLD, RERA, Trakheesi, Dubai REST, and fees made simple.'}},
    { icon:'🤝', ar:{title:'إغلاق الصفقات', text:'من أول رسالة واتساب إلى نقل الملكية واستلام العمولة.'}, en:{title:'Closing deals', text:'From the first WhatsApp message to transfer and commission.'}},
    { icon:'🏗️', ar:{title:'المطورون', text:'USP، أفضل عميل، أمثلة، ونقاط الحذر لكل مطور.'}, en:{title:'Developers', text:'USP, ideal buyer, examples, and watch-outs per developer.'}},
    { icon:'🗺️', ar:{title:'مناطق واعدة', text:'محركات النمو، المخاطر، ونوع المستثمر المناسب.'}, en:{title:'Hidden gems', text:'Growth drivers, risks, and suitable investor profiles.'}},
    { icon:'🧠', ar:{title:'أسرار الوسيط', text:'عادات بسيطة تمنع ضياع الصفقات وتزيد الثقة.'}, en:{title:'Broker secrets', text:'Simple habits that protect deals and build trust.'}},
    { icon:'🤖', ar:{title:'أدوات AI', text:'بحث، تصميم، CRM، متابعة، محتوى، وعروض تقديمية.'}, en:{title:'AI tools', text:'Research, design, CRM, follow-up, content, and presentations.'}},
    { icon:'✅', ar:{title:'قائمة مهام', text:'خطة أول 30 يوم للوسيط الجديد قابلة للتطبيق.'}, en:{title:'Checklist', text:'A practical first-30-days plan for new brokers.'}},
  ],
  market: {
    '2025': [
      { value:'AED 917B+', ar:'قيمة معاملات القطاع العقاري في 2025', en:'real estate transaction value in 2025' },
      { value:'270K+', ar:'معاملة عقارية خلال 2025', en:'real estate transactions in 2025' },
      { value:'AED 680B+', ar:'استثمارات عقارية عبر 258.6 ألف صفقة', en:'real estate investments across 258.6k deals' },
      { value:'129.6K', ar:'مستثمر جديد تقريباً في السوق', en:'new investors approximately' },
      { value:'56.6%', ar:'نسبة المستثمرين المقيمين من الإجمالي', en:'share of resident investors' },
      { value:'Top Areas', ar:'Business Bay، Dubai Marina، Palm Jumeirah ضمن الأعلى قيمة', en:'Business Bay, Dubai Marina, Palm Jumeirah among top by value' }
    ],
    '2024': [
      { value:'AED 761B', ar:'قيمة المعاملات العقارية في 2024', en:'transaction value in 2024' },
      { value:'226K', ar:'معاملة عقارية في 2024', en:'real estate transactions in 2024' },
      { value:'2.78M', ar:'إجراء عقاري وإيجاري وخدمي', en:'real estate/rental/service procedures' },
      { value:'AED 526B', ar:'استثمارات عقارية في 2024', en:'real estate investments in 2024' },
      { value:'110K', ar:'مستثمر جديد في 2024', en:'new investors in 2024' },
      { value:'+55%', ar:'نمو عدد المستثمرين الجدد', en:'growth in new investors' }
    ]
  },
  ecosystemFilters: [
    {id:'all', ar:'الكل', en:'All'}, {id:'authority', ar:'جهات', en:'Authorities'}, {id:'document', ar:'مستندات', en:'Documents'}, {id:'system', ar:'أنظمة', en:'Systems'}, {id:'fee', ar:'رسوم', en:'Fees'}
  ],
  ecosystem: [
    {cat:'authority', term:'DLD', ar:{title:'دائرة الأراضي والأملاك', body:'الجهة الأساسية لتسجيل الملكيات، نقل الملكية، بيانات السوق، والخدمات العقارية.', why:'بدون DLD لا توجد ملكية رسمية أو نقل قانوني.', example:'عند شراء شقة، يصدر للعميل Title Deed إلكتروني بعد التسجيل.'}, en:{title:'Dubai Land Department', body:'The main authority for ownership registration, title transfer, market data, and real estate services.', why:'Without DLD, there is no official ownership transfer.', example:'When a client buys an apartment, DLD issues the electronic Title Deed.'}},
    {cat:'authority', term:'RERA', ar:{title:'مؤسسة التنظيم العقاري', body:'الذراع التنظيمي المرتبط بالقواعد، الوسطاء، المطورين، الإعلان، وبعض الأنظمة.', why:'تحافظ على تنظيم السوق وتمنع العمل العشوائي.', example:'الوسيط يحتاج ترخيص وبطاقة وسيط وشركة مسجلة.'}, en:{title:'Real Estate Regulatory Agency', body:'The regulatory arm connected to rules, brokers, developers, ads, and compliance systems.', why:'It keeps the market organized and protects transactions.', example:'A broker needs a valid license, broker card, and registered company.'}},
    {cat:'system', term:'Trakheesi', ar:{title:'تراخيصي', body:'نظام لإدارة تراخيص الأنشطة العقارية وتصاريح الإعلانات وبعض خدمات الشركات.', why:'الإعلان بدون تصريح قد يسبب مخالفة.', example:'قبل إعلان عقار، تأكد من التصريح والبيانات الصحيحة.'}, en:{title:'Trakheesi', body:'A system for real estate activity licensing, advertising permits, and company services.', why:'Advertising without proper permits may create violations.', example:'Before advertising a property, verify permit and accurate data.'}},
    {cat:'system', term:'Dubai REST', ar:{title:'تطبيق دبي REST', body:'تطبيق رسمي لخدمات عقارية، عقود، بحث، بيانات، وبعض خطوات الوسيط.', why:'يوفر للوسيط والعميل قناة رقمية موثوقة.', example:'إنشاء Contract B أو Contract F يتم عبر Dubai REST / Dubai Broker.'}, en:{title:'Dubai REST App', body:'Official app for property services, contracts, searches, data, and broker steps.', why:'It gives brokers and clients a trusted digital channel.', example:'Contract B or Contract F can be created through Dubai REST / Dubai Broker.'}},
    {cat:'document', term:'Form A', ar:{title:'عقد الوساطة مع المالك', body:'يوثق علاقة الوسيط مع البائع/المالك وشروط التسويق والعمولة.', why:'يحمي حق الوسيط ويثبت التفويض.', example:'لا تعرض عقار بيع بدون تفويض واضح من المالك.'}, en:{title:'Brokerage agreement with seller', body:'Documents the broker relationship with seller/owner, marketing terms, and commission.', why:'Protects the broker’s right and proves authorization.', example:'Do not advertise a sale listing without clear owner authorization.'}},
    {cat:'document', term:'Form B', ar:{title:'عقد الوساطة مع المشتري', body:'يوثق احتياجات المشتري، العمولة، ومدة العلاقة مع الوسيط.', why:'يعطيك حق واضح عند تمثيل المشتري.', example:'اكتب الميزانية، المنطقة، العمولة، ومدة العقد.'}, en:{title:'Brokerage agreement with buyer', body:'Documents buyer requirements, commission, and broker relationship period.', why:'Gives clear rights when representing a buyer.', example:'Record budget, area, commission, and contract duration.'}},
    {cat:'document', term:'Form F / MOU', ar:{title:'عقد البيع الموحد', body:'اتفاق بين البائع والمشتري يتضمن السعر، الدفعة، الشروط، والمدة.', why:'هو أهم مستند قبل نقل الملكية في السوق الثانوي.', example:'تأكد من الأسماء، الملكية، الشيكات، الشروط، والمواعيد.'}, en:{title:'Unified sale contract / MOU', body:'Agreement between seller and buyer covering price, deposit, terms, and timelines.', why:'The key document before secondary-market transfer.', example:'Check names, ownership, cheques, terms, and dates.'}},
    {cat:'document', term:'Title Deed', ar:{title:'سند الملكية', body:'إثبات الملكية الرسمي للعقار.', why:'لا تعتمد على صور واتساب؛ تحقق من صحة الملكية.', example:'اطلب نسخة حديثة وقارن البيانات مع DLD.'}, en:{title:'Title Deed', body:'Official proof of property ownership.', why:'Do not rely on WhatsApp images; verify ownership.', example:'Request a recent copy and compare it with DLD records.'}},
    {cat:'document', term:'NOC', ar:{title:'عدم ممانعة', body:'خطاب من المطور أو الجهة المعنية يسمح بإكمال نقل الملكية أو التسجيل.', why:'بدونه قد يتوقف النقل.', example:'في resale، يتم طلب NOC من المطور قبل الترانسفر.'}, en:{title:'No Objection Certificate', body:'A letter from the developer or relevant authority allowing transfer or registration.', why:'Without it, transfer may stop.', example:'In resale, NOC is requested from the developer before transfer.'}},
    {cat:'fee', term:'DLD Fee', ar:{title:'رسوم التسجيل', body:'رسم بيع رسمي 2% على البائع و2% على المشتري حسب صفحة DLD، وغالباً يتفق الطرفان تجارياً أن يدفع المشتري 4%.', why:'لازم تشرحها بوضوح من البداية.', example:'عقار 1,500,000 درهم = 60,000 درهم إذا دفع المشتري كامل 4%.'}, en:{title:'Registration fee', body:'Official sale fee: 2% seller and 2% buyer per DLD page; commercially, buyer often pays the full 4% by agreement.', why:'Explain it clearly from the beginning.', example:'AED 1,500,000 property = AED 60,000 if buyer pays full 4%.'}},
    {cat:'system', term:'Ejari', ar:{title:'إيجاري', body:'نظام تسجيل عقود الإيجار في دبي.', why:'مهم للإيجارات والخدمات وربط العقد رسمياً.', example:'المالك والمستأجر يحتاجان عقد Ejari محدث.'}, en:{title:'Ejari', body:'Dubai tenancy contract registration system.', why:'Important for rentals, services, and official contract linkage.', example:'Owner and tenant need an updated Ejari contract.'}},
    {cat:'system', term:'Oqood', ar:{title:'عقود', body:'نظام تسجيل البيع على الخارطة قبل إصدار سند الملكية النهائي.', why:'يحمي حقوق المشتري في off-plan.', example:'عند شراء وحدة قيد الإنشاء، يتم تسجيلها مبدئياً.'}, en:{title:'Oqood', body:'System for registering off-plan sales before final Title Deed issuance.', why:'Protects buyer rights in off-plan transactions.', example:'When buying a unit under construction, it is provisionally registered.'}}
  ],
  processes: [
    {id:'buyer', ar:{title:'صفقة مشتري', warning:'القاعدة الذهبية: لا ترسل 20 خيار. أرسل 3 خيارات قوية مع سبب واضح لكل خيار.', steps:[['تأهيل العميل','اسأل: الميزانية، الغرض، التمويل، وقت الشراء، المنطقة، عدد الغرف.'],['تحديد 3 خيارات','اختر خيارات مختلفة بوضوح: أفضل سعر، أفضل موقع، أفضل خطة دفع.'],['زيارة أو عرض فيديو','ركز على العيوب والمميزات حتى تبني ثقة.'],['عرض السعر والتفاوض','اكتب العرض بشكل واضح: السعر، الدفعة، الشروط، مدة العرض.'],['Form B ثم Form F','وثّق علاقتك بالمشتري ثم أنشئ عقد البيع الموحد.'],['NOC والتحويل','تابع الشيكات، NOC، موعد trustee، ونقل الملكية.']]}, en:{title:'Buyer deal', warning:'Golden rule: do not send 20 options. Send 3 strong options with a clear reason for each.', steps:[['Qualify the client','Ask: budget, purpose, finance, buying timeline, area, and bedrooms.'],['Shortlist 3 options','Choose clearly different options: best price, best location, best payment plan.'],['Viewing or video tour','Show pros and cons to build trust.'],['Offer and negotiation','Write the offer clearly: price, deposit, terms, and offer validity.'],['Form B then Form F','Document your buyer relationship then create the unified sale contract.'],['NOC and transfer','Follow cheques, NOC, trustee appointment, and ownership transfer.']]}},
    {id:'seller', ar:{title:'صفقة بائع', warning:'لا ترفع السعر فقط لإرضاء المالك. السعر الخاطئ يقتل الإعلان ويضيع الوقت.', steps:[['فحص الملكية','تحقق من سند الملكية، الرهن، المستأجر، الخدمة، والمطور.'],['تقييم السعر','قارن آخر معاملات DLD وليس فقط إعلانات portals.'],['Form A','خذ تفويض واضح بالعمولة ومدة التسويق والسعر.'],['تجهيز الإعلان','صور ممتازة، وصف واضح، تصريح، ومعلومات بدون مبالغة.'],['فلترة المشترين','لا تضيع وقت المالك مع مشتري غير مؤهل.'],['تفاوض ونقل','ثبت العرض، الدفعة، Form F، NOC، ثم التحويل.']]}, en:{title:'Seller deal', warning:'Do not overprice only to please the owner. Wrong pricing kills the listing and wastes time.', steps:[['Check ownership','Verify Title Deed, mortgage, tenancy, service charges, and developer.'],['Price correctly','Compare recent DLD transactions, not only portal ads.'],['Form A','Get clear authorization, commission, marketing period, and price.'],['Prepare listing','Strong photos, clear description, permit, and no exaggeration.'],['Filter buyers','Do not waste the owner’s time with unqualified buyers.'],['Negotiate and transfer','Confirm offer, deposit, Form F, NOC, then transfer.']]}},
    {id:'offplan', ar:{title:'بيع على الخارطة', warning:'لا تبيع payment plan فقط. اشرح المطور، escrow، موقع المشروع، موعد التسليم، والخروج المتوقع.', steps:[['فهم المشروع','المطور، الموقع، المساحات، الخدمات، الخطة، الرسوم، وتاريخ التسليم.'],['مقارنة حقيقية','قارن السعر بالقدم مع مشاريع جاهزة وقريبة.'],['تأهيل المستثمر','هل يريد عائد إيجاري، نمو رأسمالي، Golden Visa، أو إعادة بيع قبل التسليم؟'],['EOI أو حجز','اشرح هل المبلغ قابل للاسترداد وما شروطه.'],['SPA ودفعات','راجع جدول الدفعات، الغرامات، ورسوم التسجيل.'],['متابعة بعد البيع','ذكر العميل بالدفعات وتحديثات المشروع حتى التسليم.']]}, en:{title:'Off-plan deal', warning:'Do not sell only the payment plan. Explain developer, escrow, location, handover, and expected exit.', steps:[['Understand the project','Developer, location, sizes, amenities, plan, fees, and handover date.'],['Real comparison','Compare price per sq ft with ready and nearby projects.'],['Qualify investor','Rental yield, capital growth, Golden Visa, or resale before handover?'],['EOI or booking','Explain whether the amount is refundable and under what terms.'],['SPA and payments','Review payment schedule, penalties, and registration fees.'],['After-sale follow-up','Remind client about installments and project updates until handover.']]}},
    {id:'rental', ar:{title:'إيجار', warning:'السر في الإيجار: سرعة الرد + مستندات جاهزة + معرفة سعر السوق.', steps:[['تحديد الطلب','الميزانية، المنطقة، عدد الشيكات، تاريخ الانتقال.'],['تأكيد التوفر','اتصل بالمالك قبل إرسال العقار.'],['المعاينة','كن واضحاً في المواقف، الصيانة، التكييف، وإيجاري.'],['العرض','قيمة الإيجار، عدد الشيكات، التأمين، العمولة.'],['العقد والشيكات','تحقق من الهوية، الملكية، وتفاصيل الدفع.'],['Ejari وتسليم','ساعد العميل في الخطوات النهائية والتسليم.']]}, en:{title:'Rental deal', warning:'Rental secret: fast response + ready documents + market-price knowledge.', steps:[['Define requirement','Budget, area, cheques, move-in date.'],['Confirm availability','Call owner before sending the unit.'],['Viewing','Be clear about parking, maintenance, AC, and Ejari.'],['Offer','Rent, cheques, security deposit, commission.'],['Contract and cheques','Verify ID, ownership, and payment details.'],['Ejari and handover','Help client with final steps and handover.']]}},
    {id:'daily', ar:{title:'روتين الوسيط اليومي', warning:'الوسيط الناجح ليس الأكثر كلاماً؛ هو الأكثر متابعة وتنظيماً.', steps:[['30 دقيقة سوق','راجع معاملات DLD، أخبار المطورين، أسعار المناطق.'],['60 دقيقة CRM','حدّث كل Lead: الحالة، الميزانية، الخطوة القادمة.'],['20 متابعة','رسائل قصيرة ومحددة، لا “هل ما زلت مهتم؟”.'],['محتوى واحد','بوست، ستوري، فيديو قصير، أو مقارنة منطقة.'],['زيارتان أو مكالمتان','هدف يومي واضح.'],['تعلم 20 دقيقة','مصطلح، منطقة، مطور، أو اعتراض جديد.']]}, en:{title:'Daily broker routine', warning:'The successful broker is not the loudest; they are the most consistent and organized.', steps:[['30 min market','Review DLD transactions, developer news, and area prices.'],['60 min CRM','Update every lead: status, budget, next step.'],['20 follow-ups','Short, specific messages, not “still interested?”.'],['One content piece','Post, story, short video, or area comparison.'],['Two viewings or calls','A clear daily target.'],['20 min learning','A term, area, developer, or objection.']]}}
  ],
  developers: [
    {name:'Emaar', ar:{tag:'قوة العلامة والمجتمعات المتكاملة', best:'مستثمر طويل المدى، عائلة، عميل يبحث عن سيولة', usp:['Downtown Dubai وDubai Hills كأمثلة قوية','سمعة تسليم وتسويق عالمية','سيولة إعادة بيع غالباً أعلى في المشاريع المعروفة'], watch:'السعر غالباً أعلى؛ اربط الترشيح بالهدف وليس بالاسم فقط.'}, en:{tag:'Brand power and master communities', best:'Long-term investor, family, liquidity-focused buyer', usp:['Downtown Dubai and Dubai Hills as strong examples','Global delivery and marketing reputation','Often stronger resale liquidity in known projects'], watch:'Usually premium pricing; link recommendation to goals, not brand only.'}},
    {name:'Nakheel', ar:{tag:'وجهات ساحلية ومجتمعات أيقونية', best:'عميل يحب lifestyle، الساحل، والفلل', usp:['Palm Jumeirah وDubai Islands كقصص قوية','مشاريع وجهات وليس مباني فقط','جاذبية سياحية وسكنية'], watch:'راجع الرسوم والخدمات وتفاصيل التسليم لكل مشروع.'}, en:{tag:'Coastal destinations and iconic communities', best:'Lifestyle, waterfront, and villa-focused buyers', usp:['Palm Jumeirah and Dubai Islands as strong stories','Destination projects, not only buildings','Tourism and residential appeal'], watch:'Check service charges and handover details project by project.'}},
    {name:'Dubai Holding / Meraas', ar:{tag:'تصميم حضري وتجربة حياة', best:'عميل end-user أو lifestyle premium', usp:['City Walk، Bluewaters، Jumeirah-style living','تصميم وتجربة مشي ومطاعم','قيمة عاطفية عالية للعميل'], watch:'قد لا يكون أعلى عائد إيجاري دائماً؛ قارن العائد الحقيقي.'}, en:{tag:'Urban design and lifestyle experience', best:'End-user or premium lifestyle buyer', usp:['City Walk, Bluewaters, Jumeirah-style living','Walkability, dining, design-led districts','High emotional value for buyers'], watch:'May not always be highest yield; compare actual returns.'}},
    {name:'DAMAC', ar:{tag:'مجتمعات كبيرة وعروض نشطة', best:'مستثمر يريد خيارات وخطط دفع', usp:['DAMAC Hills وDAMAC Lagoons','حملات بيع قوية وتنوع منتجات','خيارات فيلات وشقق وبراندات'], watch:'افحص الموقع، الجدول، والطلب بعد التسليم بعناية.'}, en:{tag:'Large communities and active offers', best:'Investor seeking options and payment plans', usp:['DAMAC Hills and DAMAC Lagoons','Strong sales campaigns and product variety','Villas, apartments, and branded concepts'], watch:'Check location, schedule, and post-handover demand carefully.'}},
    {name:'Sobha', ar:{tag:'جودة بناء وتشطيب', best:'عميل يهمه التشطيب والثقة بالجودة', usp:['Sobha Hartland كقصة جودة','تركيز على التصميم والتفاصيل','مناسب للعائلات والمستثمر الهادئ'], watch:'السعر قد يكون أعلى؛ وضح فرق الجودة والموقع.'}, en:{tag:'Build quality and finishing', best:'Buyer focused on finishing and trust in quality', usp:['Sobha Hartland as a quality story','Strong focus on design and details','Good for families and calm investors'], watch:'Pricing can be premium; explain quality and location difference.'}},
    {name:'Aldar', ar:{tag:'قوة أبوظبي مع توسع دبي', best:'مستثمر خليجي أو عميل يثق بالعلامات الحكومية الكبيرة', usp:['علامة قوية في أبوظبي ودخول واضح لدبي','ثقة مؤسسية ومشاريع كبيرة','مناسب للتنويع بين الإمارات'], watch:'فرّق للعميل بين مشاريع أبوظبي ودبي من حيث القوانين والطلب.'}, en:{tag:'Abu Dhabi strength with Dubai expansion', best:'GCC investor or buyer trusting large institutional brands', usp:['Strong Abu Dhabi brand with Dubai presence','Institutional trust and large projects','Useful for UAE-wide diversification'], watch:'Explain differences between Abu Dhabi and Dubai projects, rules, and demand.'}},
    {name:'Binghatti', ar:{tag:'تصميم واضح وبراندات فاخرة', best:'مستثمر يحب الشكل المميز والبراند', usp:['تصميم معماري متكرر ومعروف','مشاريع branded في مواقع مركزية','انتشار قوي في السوق'], watch:'قارن السعر بالقدم مع المنافسين في نفس المنطقة.'}, en:{tag:'Distinct design and luxury branding', best:'Investor who likes bold design and brand value', usp:['Recognizable architectural identity','Branded projects in central locations','Strong market visibility'], watch:'Compare price per sq ft with direct area competitors.'}},
    {name:'Ellington', ar:{tag:'Boutique design وتجربة سكنية', best:'عميل ذوق عالي أو end-user', usp:['تصميم داخلي قوي','هوية boutique وليست mass market','جاذبية للمستأجرين الباحثين عن جودة'], watch:'تحقق من السيولة وحجم المجتمع عند الخروج.'}, en:{tag:'Boutique design and residential experience', best:'Taste-driven buyer or end-user', usp:['Strong interior design','Boutique identity, not mass market','Appeal to tenants seeking quality'], watch:'Check liquidity and community scale when planning exit.'}},
    {name:'Danube', ar:{tag:'دخول سهل وخطط دفع مرنة', best:'مشتري أول مرة أو مستثمر بميزانية محدودة', usp:['خطط دفع سهلة','وحدات صغيرة وطلب إيجاري','رسائل تسويقية بسيطة'], watch:'لا تبيع الخطة فقط؛ قارن المساحة والموقع والتسليم.'}, en:{tag:'Easy entry and flexible payment plans', best:'First-time buyer or budget investor', usp:['Accessible payment plans','Smaller units with rental demand','Simple marketing story'], watch:'Do not sell the plan only; compare size, location, and handover.'}},
    {name:'Omniyat', ar:{tag:'Ultra-luxury وبراندات عالمية', best:'HNW buyer، luxury investor', usp:['مستوى فندقي وفاخر','مواقع ومشاريع محدودة','قيمة ندرة وتميز'], watch:'العميل يحتاج ملاءة عالية وفهم واضح للمخاطر والسيولة.'}, en:{tag:'Ultra-luxury and global brands', best:'HNW buyer or luxury investor', usp:['Hotel-level luxury','Limited prime projects','Scarcity and distinction value'], watch:'Buyer needs high capacity and clear understanding of risk/liquidity.'}},
    {name:'Select Group', ar:{tag:'مواقع مائية وشقق استثمارية', best:'مستثمر Airbnb أو عائد إيجاري', usp:['Dubai Marina وBusiness Bay كقصص طلب','منتجات في مناطق نشطة','قابلية تأجير واضحة'], watch:'راجع إدارة المبنى والرسوم قبل حساب العائد.'}, en:{tag:'Waterfront locations and investment apartments', best:'Airbnb or rental-yield investor', usp:['Dubai Marina and Business Bay demand stories','Products in active areas','Clear rental appeal'], watch:'Check building management and fees before yield calculation.'}},
    {name:'Dubai South / Expo City', ar:{tag:'محركات مستقبلية حول المطار والمعارض', best:'مستثمر طويل النفس أو عائلة تبحث عن سعر دخول', usp:['قرب Al Maktoum Airport وExpo ecosystem','أسعار دخول أقل من المناطق المركزية','قصة نمو طويلة المدى'], watch:'السيولة والطلب يتطوران مع الزمن؛ لا تعد بعائد سريع.'}, en:{tag:'Future drivers around airport and expo ecosystem', best:'Patient investor or family seeking entry price', usp:['Near Al Maktoum Airport and Expo ecosystem','Lower entry than central zones','Long-term growth story'], watch:'Liquidity and demand develop over time; do not promise fast returns.'}}
  ],
  gems: [
    {ar:{title:'Dubai South', body:'قصة قوية مرتبطة بالمطار، اللوجستيات، والسكن المتوسط. مناسب لمستثمر طويل النفس. الخطر: بعض المشاريع تحتاج وقت حتى تنضج المنطقة بالكامل.'}, en:{title:'Dubai South', body:'Strong story linked to airport, logistics, and mid-market housing. Good for patient investors. Risk: some projects need time until the area fully matures.'}},
    {ar:{title:'Expo City', body:'هوية عالمية، فعاليات، واستدامة. مناسب لمن يحب المدن المخططة. الخطر: يجب متابعة الأسعار الفعلية وليس الوعود التسويقية.'}, en:{title:'Expo City', body:'Global identity, events, and sustainability. Good for planned-city buyers. Risk: track real prices, not only marketing promises.'}},
    {ar:{title:'Dubai Islands', body:'واجهة بحرية جديدة وقصة lifestyle. مناسب للعميل الباحث عن ندرة ساحلية. الخطر: قارن مراحل البنية التحتية والتسليم.'}, en:{title:'Dubai Islands', body:'New waterfront and lifestyle story. Good for coastal-scarcity buyers. Risk: compare infrastructure phases and handover timeline.'}},
    {ar:{title:'Al Jaddaf Waterfront', body:'قريب من وسط دبي والخور. مناسب للاستثمار السكني والإيجار. الخطر: اختلاف جودة المباني كبير من مشروع لآخر.'}, en:{title:'Al Jaddaf Waterfront', body:'Close to Downtown and the Creek. Good for residential rental investment. Risk: building quality varies heavily project to project.'}},
    {ar:{title:'Dubai Maritime City', body:'واجهة بحرية وقرب من الميناء والمدينة. مناسب لمن يريد موقع مختلف. الخطر: راقب العرض الجديد والسعر بالقدم.'}, en:{title:'Dubai Maritime City', body:'Waterfront with city/port proximity. Good for buyers seeking a distinct location. Risk: monitor new supply and price per sq ft.'}}
  ],
  nationalities: [
    {flag:'🇮🇳', ar:{title:'الهند', hint:'قيمة + مجتمع + سهولة سفر', body:'غالباً يهتمون بالسعر، العائد، سهولة التأجير، والقرب من مناطق الجاليات والأعمال.'}, en:{title:'India', hint:'Value + community + travel ease', body:'Often focused on price, yield, rentability, and proximity to communities/business areas.'}},
    {flag:'🇬🇧', ar:{title:'المملكة المتحدة', hint:'Lifestyle + دخل إيجاري', body:'يفضلون مواقع معروفة، إدارة سهلة، تشريعات واضحة، وفرص تأجير قصيرة أو طويلة.'}, en:{title:'United Kingdom', hint:'Lifestyle + rental income', body:'Often prefer known locations, simple management, clear regulation, and short/long-let potential.'}},
    {flag:'🇷🇺', ar:{title:'روسيا / CIS', hint:'أمان رأس المال + luxury', body:'يهتمون بالجودة، الخصوصية، البحر، والمشاريع الفاخرة أو المناطق العائلية الهادئة.'}, en:{title:'Russia / CIS', hint:'Capital safety + luxury', body:'Often value quality, privacy, waterfront, luxury projects, or calm family areas.'}},
    {flag:'🇨🇳', ar:{title:'الصين', hint:'تنويع + تعليم + موقع', body:'يحبون القصة الاستثمارية الواضحة، المدارس، الربط الجوي، والمطور القوي.'}, en:{title:'China', hint:'Diversification + education + location', body:'Often like clear investment stories, schools, air connectivity, and strong developers.'}},
    {flag:'🇵🇰', ar:{title:'باكستان', hint:'دخول مناسب + عائد', body:'يناسبهم شرح الدفعات، تكلفة التملك الكاملة، والعائد المتوقع بطريقة مباشرة.'}, en:{title:'Pakistan', hint:'Entry price + yield', body:'Explain payment plans, full ownership cost, and expected yield in a direct way.'}},
    {flag:'🇸🇦', ar:{title:'السعودية / GCC', hint:'قرب جغرافي + عقار عطلات', body:'قد يفضلون الفلل، البحر، العقارات العائلية، أو وحدات سهلة الاستخدام عند الزيارات.'}, en:{title:'Saudi / GCC', hint:'Proximity + holiday home', body:'May prefer villas, waterfront, family assets, or easy-use homes for visits.'}},
    {flag:'🇪🇬', ar:{title:'مصر', hint:'استقرار + تعليم + عمل', body:'ركز على المناطق العملية، المدارس، التمويل، وسهولة التأجير للعائلات.'}, en:{title:'Egypt', hint:'Stability + education + work', body:'Focus on practical areas, schools, finance, and family rental demand.'}},
    {flag:'🌍', ar:{title:'أوروبا / أمريكا', hint:'شفافية + عائد بالدولار', body:'قد يطلبون أرقام واضحة، مقارنة عالمية، إدارة عقار، ورسوم مكتوبة.'}, en:{title:'Europe / USA', hint:'Transparency + USD-linked yield', body:'Often ask for clear numbers, global comparison, property management, and written fees.'}}
  ],
  mistakes: [
    {ar:{title:'إرسال 50 عقار للعميل', body:'العميل لا يريد بحر خيارات. يريد قرار أسهل. <strong>أرسل 3 اختيارات</strong>: أفضل سعر، أفضل موقع، أفضل خطة دفع.'}, en:{title:'Sending 50 listings', body:'Clients do not want an ocean of options. They want an easier decision. <strong>Send 3 options</strong>: best price, best location, best payment plan.'}},
    {ar:{title:'الكلام قبل التأهيل', body:'أول 5 دقائق ليست عرض مشروع. هي أسئلة ذكية: لماذا تشتري؟ متى؟ بكم؟ تمويل أم كاش؟'}, en:{title:'Pitching before qualifying', body:'The first 5 minutes are not a project pitch. Ask smart questions: why buy, when, budget, cash or mortgage?'}},
    {ar:{title:'الوعد بعائد مضمون', body:'قل “متوقع” وليس “مضمون”. وضح السيناريو المتفائل والمتوسط والحذر. الثقة أهم من الإقناع السريع.'}, en:{title:'Promising guaranteed returns', body:'Say “expected,” not “guaranteed.” Show optimistic, normal, and cautious scenarios. Trust beats fast persuasion.'}},
    {ar:{title:'إهمال Follow-up', body:'أكثر الصفقات تضيع بعد المعاينة. أرسل ملخصاً، 3 نقاط قرار، وخطوة واضحة خلال ساعة.'}, en:{title:'Ignoring follow-up', body:'Many deals are lost after viewing. Send summary, 3 decision points, and a clear next step within one hour.'}},
    {ar:{title:'عدم فهم الرسوم', body:'إذا تفاجأ العميل بالرسوم، سيشك فيك. اشرح DLD، trustee، العمولة، service charge من البداية.'}, en:{title:'Not understanding fees', body:'If fees surprise the client, they will doubt you. Explain DLD, trustee, commission, and service charges upfront.'}},
    {ar:{title:'بيع اسم المطور فقط', body:'العلامة مهمة، لكنها ليست كافية. اربط المشروع بالهدف: عائد، سكن، خروج، تمويل، أو Golden Visa.'}, en:{title:'Selling only the developer name', body:'Brand matters, but it is not enough. Link the project to the goal: yield, living, exit, finance, or Golden Visa.'}}
  ],
  tools: [
    {ar:{cat:'بحث وتحليل', items:[['DLD Open Data','لمراجعة معاملات، إيجارات، مشاريع، مطورين.'],['Dubai REST','للتحقق من الخدمات والعقود.'],['Perplexity / Gemini','تلخيص أخبار السوق مع روابط.'],['Google Earth','فهم الموقع والطرق والبيئة.']]}, en:{cat:'Research & analysis', items:[['DLD Open Data','Review transactions, rents, projects, developers.'],['Dubai REST','Check services and contracts.'],['Perplexity / Gemini','Summarize market news with links.'],['Google Earth','Understand location, roads, surroundings.']]}},
    {ar:{cat:'محتوى وتسويق', items:[['ChatGPT / Claude','كتابة سكربتات، اعتراضات، رسائل متابعة.'],['Canva','تصميم carousels وبروشورات.'],['CapCut','فيديوهات قصيرة وReels.'],['Gamma','عروض تقديمية للمستثمرين.']]}, en:{cat:'Content & marketing', items:[['ChatGPT / Claude','Scripts, objections, follow-up messages.'],['Canva','Carousels and brochures.'],['CapCut','Short videos and Reels.'],['Gamma','Investor presentations.']]}},
    {ar:{cat:'CRM ومتابعة', items:[['HubSpot / Zoho','إدارة leads والصفقات.'],['Notion','قاعدة معرفة للمناطق والمطورين.'],['Make / n8n','أتمتة رسائل ونماذج.'],['Google Sheets','حاسبات ومقارنات بسيطة.']]}, en:{cat:'CRM & follow-up', items:[['HubSpot / Zoho','Manage leads and deals.'],['Notion','Knowledge base for areas and developers.'],['Make / n8n','Automate messages and forms.'],['Google Sheets','Simple calculators and comparisons.']]}},
    {ar:{cat:'تصميم عروض', items:[['Beautiful.ai','عروض سريعة مرتبة.'],['Napkin AI','تحويل الأفكار إلى مخططات.'],['ElevenLabs','تعليق صوتي للعروض والفيديو.'],['Loom','شرح سريع للعميل بالفيديو.']]}, en:{cat:'Presentation design', items:[['Beautiful.ai','Clean fast presentations.'],['Napkin AI','Turn ideas into diagrams.'],['ElevenLabs','Voiceovers for decks/videos.'],['Loom','Quick client video explanations.']]}}
  ],
  glossary: [
    ['ROI','العائد على الاستثمار','Return on investment: الربح أو الدخل مقارنة بالتكلفة.'],['Yield','العائد الإيجاري','Annual rent divided by property price.'],['Capital Appreciation','نمو رأس المال','Increase in property value over time.'],['SPA','اتفاقية البيع والشراء','Sale and Purchase Agreement.'],['EOI','إبداء اهتمام','Expression of Interest, usually before booking.'],['NOC','عدم ممانعة','No Objection Certificate for transfer or registration.'],['Escrow','حساب ضمان','Protected account for off-plan project payments.'],['Oqood','تسجيل مبدئي','Off-plan preliminary registration.'],['Ejari','تسجيل عقد الإيجار','Official tenancy contract registration.'],['Freehold','تملك حر','Ownership rights in designated areas.'],['Leasehold','حق انتفاع طويل','Long-term lease/usage right, not full freehold.'],['BUA','مساحة البناء','Built-Up Area.'],['GFA','مساحة طابقية إجمالية','Gross Floor Area.'],['Service Charge','رسوم خدمات','Annual building/community maintenance fees.'],['Snagging','فحص التسليم','Inspection before handover to find defects.'],['Handover','تسليم','Developer delivers the unit to buyer.'],['Mortgage LTV','نسبة التمويل','Loan-to-value ratio from bank.'],['Trustee','مركز تسجيل','Authorized registration trustee for transfers.'],['Form A','عقد مع البائع','Broker agreement with seller/owner.'],['Form B','عقد مع المشتري','Broker agreement with buyer.'],['Form F','عقد البيع الموحد','Unified sale contract / MOU.'],['Net to Seller','صافي للبائع','Amount seller wants to receive excluding fees/commission.'],['Cash Buyer','مشتري كاش','Buyer without mortgage dependency.'],['Vacant on Transfer','شاغر عند النقل','Unit will be vacant at transfer date.']
  ],
  checklist: {
    ar:['احفظ أسماء أهم 25 منطقة في دبي مع نوع الطلب في كل منطقة.','افتح ملف CRM بسيط: الاسم، الميزانية، الغرض، الخطوة القادمة.','اكتب سكربت تأهيل من 10 أسئلة.','تعلم DLD، RERA، Trakheesi، Dubai REST، Ejari، Oqood.','احفظ شرح DLD fee والعمولة والـ trustee برسالة واحدة.','اختر 10 مطورين وتعلم USP لكل واحد.','اعمل قائمة 20 مشروع جاهز و20 مشروع off-plan.','صمم بروفايل واتساب احترافي وتوقيع بريد.','انشر محتوى يومي 7 أيام: سؤال، نصيحة، مقارنة، مصطلح.','اتصل أو تابع 20 lead يومياً.','احضر معاينتين أو جولات مشروع أسبوعياً.','تدرب على 10 اعتراضات: غالي، انتظر، أريد خصم، العائد غير واضح.','راجع معاملات DLD لمنطقة واحدة كل صباح.','جهز نموذج مقارنة من 3 خيارات لكل عميل.','راجع قائمة الأخطاء قبل إرسال أي عرض للعميل.'],
    en:['Memorize the top 25 Dubai areas and demand type in each.','Open a simple CRM: name, budget, purpose, next step.','Write a qualification script with 10 questions.','Learn DLD, RERA, Trakheesi, Dubai REST, Ejari, Oqood.','Create one message explaining DLD fee, commission, and trustee fee.','Pick 10 developers and learn the USP of each.','Create a list of 20 ready and 20 off-plan projects.','Build a professional WhatsApp profile and email signature.','Publish daily content for 7 days: question, tip, comparison, keyword.','Call or follow up with 20 leads daily.','Attend two viewings or project tours weekly.','Practice 10 objections: expensive, wait, discount, unclear ROI.','Review DLD transactions for one area every morning.','Prepare a 3-option comparison template for each client.','Review the mistake list before sending any offer to a client.']
  },
  quiz: [
    {q:{ar:'عميل يريد شراء شقة بـ 1.5M ويقول: “أرسل كل الخيارات”. ماذا تفعل؟', en:'A client wants to buy an apartment for AED 1.5M and says: “Send all options.” What do you do?'}, options:[
      {ar:'أرسل 30 عقار حتى يختار', en:'Send 30 listings so they can choose', correct:false},
      {ar:'أرسل 3 خيارات قوية مع سبب لكل خيار', en:'Send 3 strong options with a reason for each', correct:true},
      {ar:'أطلب منه يبحث في البوابة بنفسه', en:'Ask them to search the portal alone', correct:false}
    ], explain:{ar:'العميل يحتاج وضوح لا فوضى. 3 خيارات جيدة تسهل القرار وتظهر خبرتك.', en:'The client needs clarity, not chaos. 3 good options simplify the decision and show expertise.'}},
    {q:{ar:'رسوم البيع الرسمية في صفحة DLD كيف تظهر؟', en:'How does the official DLD sale fee appear on the DLD page?'}, options:[
      {ar:'2% بائع و2% مشتري', en:'2% seller and 2% buyer', correct:true},
      {ar:'10% على المشتري فقط', en:'10% buyer only', correct:false},
      {ar:'لا توجد رسوم', en:'No fees', correct:false}
    ], explain:{ar:'صفحة DLD تعرض 2% على البائع و2% على المشتري، وقد يتفق الطرفان تجارياً أن يدفع المشتري كامل 4%.', en:'DLD shows 2% seller and 2% buyer; commercially the parties may agree that buyer pays the full 4%.'}}
  ],
  sources: [
    {ar:{title:'DLD Open Data', body:'بيانات معاملات، إيجارات، مشاريع، أراضي، مباني، وحدات، وسطاء، ومطورين.'}, en:{title:'DLD Open Data', body:'Transactions, rents, projects, land, buildings, units, brokers, and developers data.'}, url:'https://dubailand.gov.ae/en/open-data/real-estate-data/'},
    {ar:{title:'أداء 2025', body:'إعلان رسمي عن 270 ألف+ معاملة بقيمة 917 مليار درهم في 2025.'}, en:{title:'2025 performance', body:'Official announcement of 270k+ transactions worth AED 917B in 2025.'}, url:'https://dmo.dof.gov.ae/en/news-and-publications/latest-press-releases/dubai-s-real-estate-market-records-new-historic-milestone-with-transactions-exceeding-aed917-billion-usd-2497-bn-in-2025/'},
    {ar:{title:'أداء 2024', body:'DLD: 226 ألف معاملة بقيمة 761 مليار درهم في 2024.'}, en:{title:'2024 performance', body:'DLD: 226k transactions worth AED 761B in 2024.'}, url:'https://dubailand.gov.ae/en/news-media/dubai-s-real-estate-sector-records-aed761-billion-in-transactions-in-2024'},
    {ar:{title:'رسوم تسجيل البيع', body:'صفحة DLD الرسمية للرسوم، المستندات، وقنوات الخدمة.'}, en:{title:'Sale registration fees', body:'Official DLD page for fees, documents, and service channels.'}, url:'https://dubailand.gov.ae/en/eservices/property-sale-registration/'},
    {ar:{title:'Contract B', body:'رحلة الوسيط لإنشاء عقد B عبر Dubai REST / Dubai Broker.'}, en:{title:'Contract B', body:'Broker journey to create Contract B via Dubai REST / Dubai Broker.'}, url:'https://dubailand.gov.ae/media/0n2dbynt/broker-s-journey-to-create-contract-b_en.pdf'},
    {ar:{title:'Contract F', body:'رحلة الوسيط لإنشاء عقد البيع الموحد F.'}, en:{title:'Contract F', body:'Broker journey to create the unified sale contract F.'}, url:'https://dubailand.gov.ae/media/ofeb4lyy/broker-s-journey-to-create-contract-f_en.pdf'}
  ]
};

function tr(key){ return t[app.lang][key] || key; }
function getLocalized(obj){ return obj[app.lang] || obj; }
function formatAED(num){ return new Intl.NumberFormat(app.lang === 'ar' ? 'ar-AE' : 'en-AE', {style:'currency', currency:'AED', maximumFractionDigits:0}).format(num || 0); }

function applyLanguage(){
  document.documentElement.lang = app.lang;
  document.documentElement.dir = app.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = document.documentElement.dir;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = tr(el.dataset.i18nPlaceholder); });
  document.getElementById('languageToggle').textContent = app.lang === 'ar' ? 'EN' : 'عربي';
  renderAll();
}

function renderCategories(){
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = content.categories.map(c => `<article class="category-card reveal"><div class="icon">${c.icon}</div><h3>${c[app.lang].title}</h3><p>${c[app.lang].text}</p></article>`).join('');
}

function renderMarket(){
  const stats = document.getElementById('marketStats');
  stats.innerHTML = content.market[app.marketYear].map(s => `<div class="stat-card"><strong>${s.value}</strong><span>${s[app.lang]}</span></div>`).join('');
  document.querySelectorAll('[data-market-tab]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.marketTab === app.marketYear));
}

function renderEcosystemFilters(){
  const wrap = document.getElementById('ecosystemFilters');
  wrap.innerHTML = content.ecosystemFilters.map(f => `<button class="pill ${app.ecosystemFilter === f.id ? 'is-active' : ''}" data-filter="${f.id}">${f[app.lang]}</button>`).join('');
  wrap.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { app.ecosystemFilter = btn.dataset.filter; renderEcosystemFilters(); renderEcosystem(); }));
}

function renderEcosystem(){
  const grid = document.getElementById('ecosystemGrid');
  const items = content.ecosystem.filter(i => app.ecosystemFilter === 'all' || i.cat === app.ecosystemFilter);
  grid.innerHTML = items.map(i => {
    const l = i[app.lang];
    return `<article class="info-card reveal"><span class="badge">${i.term}</span><h3>${l.title}</h3><p>${l.body}</p><ul><li><strong>${tr('why')}:</strong> ${l.why}</li><li><strong>${tr('example')}:</strong> ${l.example}</li></ul></article>`;
  }).join('');
}

function renderProcess(){
  const tabs = document.getElementById('processTabs');
  if(!tabs.dataset.ready){
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-process]');
      if(!btn) return;
      document.querySelectorAll('[data-process]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderProcessContent(btn.dataset.process);
    });
    tabs.dataset.ready = 'true';
  }
  tabs.innerHTML = content.processes.map((p, idx) => `<button class="process-tab ${idx===0?'is-active':''}" data-process="${p.id}">${p[app.lang].title}</button>`).join('');
  renderProcessContent(content.processes[0].id);
}

function renderProcessContent(id){
  const p = content.processes.find(x => x.id === id) || content.processes[0];
  const l = p[app.lang];
  document.getElementById('processContent').innerHTML = `<h3>${l.title}</h3><div class="timeline">${l.steps.map((s, idx) => `<div class="timeline-step"><span class="num">${idx+1}</span><div><h4>${s[0]}</h4><p>${s[1]}</p></div></div>`).join('')}</div><div class="warning-box"><strong>${tr('watch')}:</strong> ${l.warning}</div>`;
}

function calculateFees(){
  const price = Number(document.getElementById('priceInput').value || 0);
  const buyerFull = document.getElementById('buyerPaysFullDld').checked;
  const mortgage = document.getElementById('includeMortgage').checked;
  const dld = buyerFull ? price * 0.04 : price * 0.02;
  const title = 250;
  const map = 250;
  const knowledge = 20;
  const trusteeBase = price >= 500000 ? 4000 : 2000;
  const trustee = trusteeBase * 1.05;
  const brokerCommission = price * 0.02 * 1.05;
  const mortgageFee = mortgage ? price * 0.0025 : 0;
  const total = dld + title + map + knowledge + trustee + brokerCommission + mortgageFee;
  const rows = [
    [app.lang==='ar'?'رسوم DLD':'DLD registration fee', dld],
    [app.lang==='ar'?'إصدار سند ملكية':'Title deed issuance', title],
    [app.lang==='ar'?'خريطة شقة/فيلا':'Apartment/villa map', map],
    [app.lang==='ar'?'معرفة + ابتكار':'Knowledge + innovation', knowledge],
    [app.lang==='ar'?'رسوم trustee + VAT':'Trustee fee + VAT', trustee],
    [app.lang==='ar'?'عمولة وسيط 2% + VAT':'Broker commission 2% + VAT', brokerCommission]
  ];
  if(mortgage) rows.push([app.lang==='ar'?'رسم رهن 0.25%':'Mortgage fee 0.25%', mortgageFee]);
  document.getElementById('calcResults').innerHTML = rows.map(r => `<div class="calc-row"><span>${r[0]}</span><strong>${formatAED(r[1])}</strong></div>`).join('') + `<div class="calc-row total"><span>${tr('total')}</span><strong>${formatAED(total)}</strong></div>`;
}

function renderDevelopers(){
  const input = document.getElementById('developerSearch');
  const q = (input.value || '').toLowerCase();
  const grid = document.getElementById('developerGrid');
  const filtered = content.developers.filter(d => {
    const l = d[app.lang];
    return [d.name,l.tag,l.best,...l.usp,l.watch].join(' ').toLowerCase().includes(q);
  });
  grid.innerHTML = filtered.map(d => {
    const l = d[app.lang];
    return `<article class="developer-card reveal"><h3>${d.name}</h3><p class="tagline">${l.tag}</p><p><strong>${tr('bestFor')}:</strong> ${l.best}</p><ul>${l.usp.map(u => `<li>${u}</li>`).join('')}</ul><span class="watch"><strong>${tr('watch')}:</strong> ${l.watch}</span></article>`;
  }).join('');
}

function renderGems(){
  const wrap = document.getElementById('gemsAccordion');
  wrap.innerHTML = content.gems.map((g, idx) => `<div class="accordion-item ${idx===0?'open':''}"><button type="button"><span>${g[app.lang].title}</span><span>+</span></button><div class="accordion-body">${g[app.lang].body}</div></div>`).join('');
  wrap.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => btn.closest('.accordion-item').classList.toggle('open')));
}

function renderNationalities(){
  document.getElementById('nationalityGrid').innerHTML = content.nationalities.map(n => `<article class="nationality-card reveal"><div class="flag">${n.flag}</div><h3>${n[app.lang].title}</h3><small>${n[app.lang].hint}</small><p>${n[app.lang].body}</p></article>`).join('');
}

function renderMistake(){
  const m = content.mistakes[app.mistakeIndex][app.lang];
  document.getElementById('mistakeCard').innerHTML = `<h3>${m.title}</h3><p>${m.body}</p>`;
}

function renderTools(){
  document.getElementById('toolsBoard').innerHTML = content.tools.map(group => {
    const l = group[app.lang];
    return `<div class="tool-column reveal"><h3>${l.cat}</h3>${l.items.map(i => `<div class="tool-item"><strong>${i[0]}</strong><span>${i[1]}</span></div>`).join('')}</div>`;
  }).join('');
}

function renderGlossary(){
  const q = (document.getElementById('glossarySearch').value || '').toLowerCase();
  const grid = document.getElementById('glossaryGrid');
  const filtered = content.glossary.filter(([term, ar, en]) => `${term} ${ar} ${en}`.toLowerCase().includes(q));
  grid.innerHTML = filtered.map(([term, ar, en]) => `<article class="glossary-card reveal"><h3>${term}</h3><p>${app.lang === 'ar' ? ar : en}</p><small>${app.lang === 'ar' ? en : ar}</small></article>`).join('');
}

function renderChecklist(){
  const items = content.checklist[app.lang];
  const saved = JSON.parse(localStorage.getItem('brokerKitChecklist') || '{}');
  document.getElementById('checklistItems').innerHTML = items.map((text, idx) => `<label class="check-item"><input type="checkbox" data-check="${idx}" ${saved[idx] ? 'checked' : ''}/><span>${text}</span></label>`).join('');
  document.querySelectorAll('[data-check]').forEach(cb => cb.addEventListener('change', updateChecklist));
  updateChecklist();
}

function updateChecklist(){
  const saved = {};
  document.querySelectorAll('[data-check]').forEach(cb => { saved[cb.dataset.check] = cb.checked; });
  localStorage.setItem('brokerKitChecklist', JSON.stringify(saved));
  const total = Object.keys(saved).length;
  const done = Object.values(saved).filter(Boolean).length;
  const pct = total ? (done / total) * 100 : 0;
  document.getElementById('progressBar').style.width = `${pct}%`;
  document.getElementById('progressText').textContent = `${tr('progress')} ${done} ${tr('of')} ${total} ${tr('tasks')}`;
}

function renderQuiz(){
  const box = document.getElementById('quizBox');
  const q = content.quiz[Math.floor(Date.now()/1000) % content.quiz.length];
  app.quizAnswered = false;
  box.innerHTML = `<h3>${q.q[app.lang]}</h3>${q.options.map((o, idx) => `<button class="quiz-option" data-correct="${o.correct}">${o[app.lang]}</button>`).join('')}<div class="quiz-explain" id="quizExplain"></div>`;
  box.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => {
    if(app.quizAnswered) return;
    app.quizAnswered = true;
    const isCorrect = btn.dataset.correct === 'true';
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    box.querySelectorAll('.quiz-option').forEach(b => { if(b.dataset.correct === 'true') b.classList.add('correct'); });
    document.getElementById('quizExplain').innerHTML = `<strong>${isCorrect ? tr('correct') : tr('wrong')}:</strong> ${q.explain[app.lang]} <br><button class="ghost-button" id="resetQuiz" style="margin-top:12px">${tr('reset')}</button>`;
    document.getElementById('resetQuiz').addEventListener('click', renderQuiz);
  }));
}

function renderSources(){
  document.getElementById('sourcesGrid').innerHTML = content.sources.map(s => `<article class="source-card reveal"><h3>${s[app.lang].title}</h3><p>${s[app.lang].body}</p><a href="${s.url}" target="_blank" rel="noopener">${tr('openSource')} ↗</a></article>`).join('');
}

function renderAll(){
  renderCategories(); renderMarket(); renderEcosystemFilters(); renderEcosystem(); renderProcess(); calculateFees(); renderDevelopers(); renderGems(); renderNationalities(); renderMistake(); renderTools(); renderGlossary(); renderChecklist(); renderQuiz(); renderSources(); observeReveals();
}

function observeReveals(){
  const reveals = document.querySelectorAll('.reveal:not(.show)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('show'); io.unobserve(entry.target); } });
  }, {threshold:.08});
  reveals.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('languageToggle').addEventListener('click', () => { app.lang = app.lang === 'ar' ? 'en' : 'ar'; localStorage.setItem('brokerKitLang', app.lang); applyLanguage(); });
  document.querySelectorAll('[data-market-tab]').forEach(btn => btn.addEventListener('click', () => { app.marketYear = btn.dataset.marketTab; renderMarket(); }));
  ['priceInput','buyerPaysFullDld','includeMortgage'].forEach(id => document.getElementById(id).addEventListener('input', calculateFees));
  document.getElementById('developerSearch').addEventListener('input', renderDevelopers);
  document.getElementById('glossarySearch').addEventListener('input', renderGlossary);
  document.getElementById('prevMistake').addEventListener('click', () => { app.mistakeIndex = (app.mistakeIndex - 1 + content.mistakes.length) % content.mistakes.length; renderMistake(); });
  document.getElementById('nextMistake').addEventListener('click', () => { app.mistakeIndex = (app.mistakeIndex + 1) % content.mistakes.length; renderMistake(); });
  const topBtn = document.getElementById('toTop');
  window.addEventListener('scroll', () => { topBtn.classList.toggle('show', window.scrollY > 800); });
  topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  applyLanguage();
});
