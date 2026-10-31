(function () {
  'use strict';
  const dictionaries = {
    ru: {
      skip:'Перейти к содержанию',navProjects:'Проекты',navApproach:'Подход',navStack:'Технологии',navContact:'На связи',
      heroEyebrow:'AI-NATIVE OPERATIONS / LINUX / AUTOMATION',heroLine1:'Агенты делают',heroLine2:'реальную работу.',heroLine3:'Инженер отвечает.',
      heroLead:'Собираю продукты и автоматизации, которые работают для людей: Linux-серверы, Docker, PostgreSQL, Telegram и ИИ-агенты. За доступы, безопасность, проверки и итоговый результат отвечаю сам.',
      ctaProjects:'Смотреть проекты',ctaApproach:'Как я работаю',factProjects:'выбранных проекта',factInfra:'серверная практика',factAgents:'агенты и контроль',
      terminalPlan:'Сформулировать задачу',terminalBuild:'Реализовать через агента',terminalReview:'Проверить код и тесты',terminalDeploy:'Подготовить к развёртыванию',terminalStatus:'reviewed',
      projectsTitle:'Три проекта.<br/><span>Реальная инженерная практика.</span>',projectsLead:'Продукты, Telegram-автоматизации и VPN-инфраструктура — с фокусом на данных, доступах, проверяемом результате и пользе для людей.',
      beerStatus:'Демо доступно',beerCategory:'WEB PLATFORM / BUSINESS',beerDesc:'Цифровое присутствие магазина: современная витрина, продуманный пользовательский сценарий и база для дальнейших онлайн-сервисов.',openDemo:'Открыть демо',
      workStatus:'Проектная разработка',workCategory:'TELEGRAM MINI APP / HR TECH',workDesc:'Платформа для автоматизации рекрутинга: вакансии, кандидаты, роли рекрутера и администратора, структурированные данные и рабочие процессы.',workNote:'Кейс / архитектура продукта',
      vpnStatus:'Разработка архитектуры',vpnCategory:'NETWORKING / INFRASTRUCTURE',vpnDesc:'Проект VPN-сервиса с управлением подключениями и серверной инфраструктурой. Фокус на архитектуре, автоматизации развёртывания и контроле доступов.',vpnNote:'Кейс / инфраструктура',
      visualDisclaimer:'Все три проекта показаны мобильными экранами из GitHub-работ. simple-dimple снят в dev-сборке без запущенного backend.',
      approachTitle:'Агент работает.<br/><span>Инженер отвечает.</span>',approachIntro:'Выбираю, что отдать агенту целиком, что вести по шагам, а что сделать самому. Инструкции, проверки и доступы должны помогать системе работать надёжно, а не добавлять лишнюю сложность.',
      processTitle1:'Задача',processDesc1:'Контекст, ограничения, ожидаемый результат и критерии приёмки.',processTitle2:'Агент',processDesc2:'Codex помогает реализовывать решения и разбирать существующий код.',processTitle3:'Проверка',processDesc3:'Ревью изменений, тесты, сборка и проверка важных сценариев.',processTitle4:'Результат',processDesc4:'Развёртывание, наблюдение за работой и улучшения по обратной связи.',
      opsLinux:'Управление серверной инфраструктурой через терминал, SSH и практическая работа с командами Linux.',opsGit:'Контроль изменений, автоматизированные проверки и внимание к качеству результата работы агента.',opsData:'Роли, доступы, данные и API; развиваю практику бэкапов, восстановления и устойчивости систем.',
      stackTitle:'Мой рабочий<br/><span>инструментарий.</span>',stackIntro:'Инструменты, с которыми работаю, и области, в которых продолжаю наращивать практику. Без искусственных уровней «эксперт по всему».',stackGroup1:'Инфраструктура',stackGroup2:'Разработка и данные',stackGroup3:'AI и автоматизация',stackGroup4:'Углубляю практику',
      contactTitle:'Давайте создавать<br/><span>полезные системы.</span>',contactText:'Интересны проекты на стыке инфраструктуры, AI-агентов и автоматизации реальных бизнес-процессов.',contactFallback:'Для связи используйте площадку, на которой размещено резюме. Контактные ссылки можно добавить в config.js.',footerLine:'Продукты. Инфраструктура. Проверяемый результат.'
    },
    en: {
      skip:'Skip to content',navProjects:'Projects',navApproach:'Approach',navStack:'Toolbox',navContact:'Get in touch',
      heroEyebrow:'AI-NATIVE OPERATIONS / LINUX / AUTOMATION',heroLine1:'Agents do',heroLine2:'real work.',heroLine3:'Engineers own it.',
      heroLead:'I build products and automations that help people work: Linux servers, Docker, PostgreSQL, Telegram and AI agents. Access, security, validation and outcomes remain my responsibility.',
      ctaProjects:'Explore projects',ctaApproach:'My process',factProjects:'selected projects',factInfra:'infrastructure practice',factAgents:'agents and validation',
      terminalPlan:'Define the task',terminalBuild:'Implement with an agent',terminalReview:'Review code and tests',terminalDeploy:'Prepare for deployment',terminalStatus:'reviewed',
      projectsTitle:'Three projects.<br/><span>Real engineering practice.</span>',projectsLead:'Products, Telegram automation and VPN infrastructure — with attention to data, access, verifiable outcomes and usefulness for people.',
      beerStatus:'Live demo',beerCategory:'WEB PLATFORM / BUSINESS',beerDesc:'A digital storefront for a retail brand: contemporary presentation, a clear user journey, and a foundation for future online services.',openDemo:'Visit live demo',
      workStatus:'In development',workCategory:'TELEGRAM MINI APP / HR TECH',workDesc:'Recruitment automation platform: job listings, candidates, recruiter and admin roles, structured data and operational workflows.',workNote:'Case study / product architecture',
      vpnStatus:'Architecture in progress',vpnCategory:'NETWORKING / INFRASTRUCTURE',vpnDesc:'A VPN service project centered on connection management and server infrastructure. Focus on architecture, deployment automation and access control.',vpnNote:'Case study / infrastructure',
      visualDisclaimer:'All three projects use mobile screens from the GitHub work. The simple-dimple capture is a dev build without the backend running.',
      approachTitle:'Agents work.<br/><span>Engineers own it.</span>',approachIntro:'I decide what an agent can own end-to-end, what needs a guided workflow, and what should be done manually. Instructions, checks and access controls should make systems safer and simpler.',
      processTitle1:'Define',processDesc1:'Requirements, context, constraints, expected outcomes and acceptance criteria.',processTitle2:'Build',processDesc2:'Use Codex to implement features and understand existing code.',processTitle3:'Verify',processDesc3:'Review changes, run tests, validate builds and critical flows.',processTitle4:'Deliver',processDesc4:'Prepare deployments, observe behavior and iterate on feedback.',
      opsLinux:'Managing server infrastructure via terminal, SSH and practical Linux commands.',opsGit:'Tracking changes, automated checks, and taking ownership of agent-generated work quality.',opsData:'Roles, permissions, data and APIs; building deeper practice in backups, recovery and reliability.',
      stackTitle:'My working<br/><span>toolbox.</span>',stackIntro:'Tools I use and areas where I am actively building more hands-on experience. No inflated expert claims.',stackGroup1:'Infrastructure',stackGroup2:'Development & data',stackGroup3:'AI & automation',stackGroup4:'Building depth',
      contactTitle:'Let’s build<br/><span>useful systems.</span>',contactText:'Interested in infrastructure, AI agents, and automating real business workflows.',contactFallback:'Please reach me through the platform where you found my résumé. Contact links can be added in config.js.',footerLine:'Products. Infrastructure. Verifiable outcomes.'
    }
  };
  const config = window.PORTFOLIO_CONFIG || {};
  const normUrl = value => typeof value === 'string' && /^https:\/\/[\w.-]+(?:[:/]|$)/i.test(value) ? value : '';
  const contactLinks = document.getElementById('contact-links');
  const contactFallback = document.getElementById('contact-fallback');
  const contacts = [
    ['GitHub', normUrl(config.github)],
    ['Telegram', normUrl(config.telegram)],
    ['Email', typeof config.email === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(config.email) ? 'mailto:' + config.email : '']
  ].filter(c => Boolean(c[1]));
  for (const [name,url] of contacts) {
    const a=document.createElement('a'); a.className='contact-link'; a.href=url; a.textContent=name+' ↗';
    if (!url.startsWith('mailto:')) {a.target='_blank';a.rel='noopener noreferrer';}
    contactLinks.appendChild(a);
  }
  if (contacts.length) contactFallback.hidden=true;
  const name = typeof config.displayName === 'string' ? config.displayName.trim() : '';
  if (name) {
    const initial = name.slice(0,1).toUpperCase();
    document.getElementById('brand-mark').innerHTML = '';
    document.getElementById('brand-mark').append(document.createTextNode(initial));
    const dot=document.createElement('span');dot.className='brand-dot';dot.textContent='.';document.getElementById('brand-mark').append(dot);
    document.getElementById('footer-mark').textContent=initial+'.';
    document.title=name+' — AI Infrastructure / DevOps Portfolio';
  }
  document.getElementById('footer-year').textContent=String(new Date().getFullYear());
  let lang = 'ru';
  function render(next) {
    lang = next === 'en' ? 'en' : 'ru';
    document.documentElement.lang=lang;
    for (const node of document.querySelectorAll('[data-i18n]')) {
      const key=node.getAttribute('data-i18n');
      const translation=dictionaries[lang][key];
      if (translation === undefined) continue;
      if (['projectsTitle','approachTitle','stackTitle','contactTitle'].includes(key)) node.innerHTML=translation;
      else node.textContent=translation;
    }
    for (const btn of document.querySelectorAll('.lang-btn')) {
      const active=btn.dataset.lang===lang;
      btn.classList.toggle('active',active); btn.setAttribute('aria-pressed',String(active));
    }
    if (contacts.length) contactFallback.hidden=true;
  }
  for (const btn of document.querySelectorAll('.lang-btn')) btn.addEventListener('click',()=>render(btn.dataset.lang));
  render('ru');
  // Keep all content visible immediately: reliable printing, previews and accessibility.
})();
