import React, { useEffect, useId, useRef, useState } from 'react';
import Globe from './components/Globe.jsx';
import useReveal from './useReveal.js';
import HeroBackground from './components/HeroBackground.jsx';
import PartnerStrip from './components/PartnerStrip.jsx';
import Logo from './components/Logo.jsx';
import DirectionDialogContent from './components/DirectionDialogContent.jsx';

const copy = {
  uk: {
    nav: ['Про нас', 'Наші напрямки', 'Кар’єра', 'Блог', 'Контакти'],
    title: 'expla топ-100 партнерів', subtitle: 'Meta Ads & Google Ads у Європі',
    directions: 'Наші напрямки', more: 'ДЕТАЛЬНІШЕ',
    cards: [
      { title: 'Social Media Advertising', description: 'Залучаємо користувачів через рекламу в соціальних мережах', tags: 'META ADS · TIKTOK · SNAPCHAT · X' },
      { title: 'PPC Team', description: 'Перетворюємо рекламний клік на реєстрацію чи покупку', tags: 'GOOGLE ADS · MICROSOFT ADS · NATIVE ADS' },
      { title: 'SEO', description: 'Розвиваємо власні сайти та залучаємо користувачів із пошуку Google', tags: 'ОРГАНІЧНИЙ ПОШУК · КОНТЕНТ · АНАЛІТИКА' },
      { title: 'Affiliate Network', description: 'Поєднуємо рекламодавців і афіліатів у партнерську мережу', tags: 'CPAMATICA · 1 000+ ПАРТНЕРІВ' },
    ],
    seen: 'нашу рекламу бачать', online: 'онлайн-користувачів у світі', users: '8 з 10 користувачів',
    zone: 'НАША ЗОНА РОБОТИ', channelsStart: 'Канали, що перетворюють', channelsEnd: 'увагу на', result: 'результат',
    close: 'Закрити', menu: 'Відкрити меню', socialTitle: 'Соціальні мережі expla',
    socialBody: 'Дізнавайтеся більше про команду, ідеї та життя expla.',
    careerTitle: 'Зростай разом з expla', careerBody: 'Наші напрямки — це різні можливості для людей, яких захоплюють маркетинг, технології та аналітика. Обери свій напрямок і познайомся з тим, над чим працює команда.',
    careerAction: 'Дослідити напрямки',
    blogTitle: 'Ідеї, що рухають уперед', blogBody: 'Досліджуємо рекламу, пошукову оптимізацію та партнерський маркетинг. Почни з напрямку, який цікавить тебе найбільше.',
    contactTitle: 'Почнімо з вашої задачі', contactBody: 'Розкажіть, що хочете розвивати. Тут можна підготувати й скопіювати текст вашого звернення.',
    name: 'Ваше ім’я', email: 'Email', message: 'Про вашу задачу', submit: 'Скопіювати звернення', copied: 'Звернення скопійовано. Ви можете надіслати його через звичний канал зв’язку.', copyError: 'Скопіюйте текст із поля нижче.',
    skip: 'Перейти до вмісту', globe: 'Жива планета expla',
  },
  en: {
    nav: ['About us', 'Our expertise', 'Careers', 'Blog', 'Contacts'],
    title: 'expla is a top-100 partner', subtitle: 'for Meta Ads & Google Ads in Europe',
    directions: 'Our expertise', more: 'LEARN MORE',
    cards: [
      { title: 'Social Media Advertising', description: 'Connecting people with brands through social media advertising', tags: 'META ADS · TIKTOK · SNAPCHAT · X' },
      { title: 'PPC Team', description: 'Turning an ad click into a registration or a purchase', tags: 'GOOGLE ADS · MICROSOFT ADS · NATIVE ADS' },
      { title: 'SEO', description: 'Growing our own websites and attracting users from Google search', tags: 'ORGANIC SEARCH · CONTENT · ANALYTICS' },
      { title: 'Affiliate Network', description: 'Bringing advertisers and affiliates together in a partner network', tags: 'CPAMATICA · 1,000+ PARTNERS' },
    ],
    seen: 'our advertising reaches', online: 'of online users worldwide', users: '8 out of 10 users',
    zone: 'WHERE WE WORK', channelsStart: 'Channels that turn', channelsEnd: 'attention into', result: 'results',
    close: 'Close', menu: 'Open menu', socialTitle: 'Find expla on social media', socialBody: 'Get to know our people, ideas, and life at expla.',
    careerTitle: 'Grow with expla', careerBody: 'Our teams offer different paths for people who love marketing, technology, and analytics. Explore a discipline and discover what our team works on.', careerAction: 'Explore our expertise',
    blogTitle: 'Ideas that move us forward', blogBody: 'Explore advertising, search optimization, and affiliate marketing. Start with the discipline that interests you most.',
    contactTitle: 'Let’s start with your challenge', contactBody: 'Tell us what you want to grow. Prepare and copy your inquiry here.',
    name: 'Your name', email: 'Email', message: 'Your challenge', submit: 'Copy inquiry', copied: 'Inquiry copied. You can send it through your preferred contact channel.', copyError: 'Copy the text from the field below.',
    skip: 'Skip to content', globe: 'The live expla globe',
  },
};

function Arrow() { return <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>; }
function ChannelLogo({ name }) {
  if (name === 'Microsoft') return <span className="channel-brand microsoft"><span className="windows" aria-hidden="true"><i/><i/><i/><i/></span>Microsoft</span>;
  if (name === 'Meta') return <span className="channel-brand meta"><svg width="35" height="24" viewBox="0 0 40 25" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 13C15 3 11 0 7 3S0 16 4 21c5 6 10-7 16-13s10-8 14-2 7 15 2 17-10-5-16-10Z"/></svg>Meta</span>;
  if (name === 'TikTok') return <span className="channel-brand tiktok"><svg width="25" height="29" viewBox="0 0 26 30" fill="currentColor" aria-hidden="true"><path d="M16 1h4c.5 4 2 6 6 7v5c-3 0-5-1-7-3v11a9 9 0 1 1-8-9v5a4 4 0 1 0 3 4V1Z"/></svg>TikTok</span>;
  return <span className={`channel-brand ${name === 'Google' ? 'google' : ''}`}>{name}</span>;
}

function ContactForm({ t }) {
  const [status, setStatus] = useState('');
  const [prepared, setPrepared] = useState('');
  async function submit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const text = `${fields.get('name')}\n${fields.get('email')}\n\n${fields.get('message')}`;
    try { await navigator.clipboard.writeText(text); setStatus(t.copied); }
    catch { setPrepared(text); setStatus(t.copyError); }
  }
  return <form className="contact-form" onSubmit={submit}>
    <label>{t.name}<input name="name" autoComplete="name" required maxLength={100}/></label>
    <label>{t.email}<input name="email" type="email" autoComplete="email" required maxLength={200}/></label>
    <label>{t.message}<textarea name="message" rows={4} required maxLength={4000}/></label>
    <button className="primary-button" type="submit">{t.submit}<Arrow/></button>
    {status && <p className="form-status" role="status">{status}</p>}
    {prepared && <textarea readOnly aria-label={t.message} value={prepared} rows={5} onFocus={event => event.target.select()}/>}
  </form>;
}

export default function App() {
  const [language, setLanguage] = useState('uk');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const dialog = useRef(null);
  const [reachRef, reachRevealed] = useReveal();
  const ringGradient = `reach-ring-${useId().replaceAll(':', '')}`;
  const t = copy[language];
  const modalOpen = Boolean(modal);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    if (!modal) return;
    const element = dialog.current;
    const previouslyFocused = document.activeElement;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      element.close(); document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) previouslyFocused.focus({ preventScroll: true });
    };
  }, [modalOpen]);
  function open(value) { setMenuOpen(false); setModal(value); }
  function goToDirections() { setModal(null); document.getElementById('directions').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
  const card = modal?.type === 'direction' ? t.cards[modal.index] : null;
  const modalTitle = card?.title || (modal?.type === 'career' ? t.careerTitle : modal?.type === 'blog' ? t.blogTitle : modal?.type === 'contact' ? t.contactTitle : `${modal?.network || ''} · expla`);
  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="masthead"><HeroBackground/><div className="site-header container">
      <Logo/>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={t.menu} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      <nav id="site-navigation" className={`navigation${menuOpen ? ' is-open' : ''}`} aria-label={language === 'uk' ? 'Основна навігація' : 'Main navigation'}>
        <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
        <a href="#directions" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
        <button onClick={() => open({ type: 'career' })}>{t.nav[2]}</button>
        <button onClick={() => open({ type: 'blog' })}>{t.nav[3]}</button>
        <button onClick={() => open({ type: 'contact' })}>{t.nav[4]}</button>
      </nav>
      <div className="language-switch" aria-label={language === 'uk' ? 'Мова сайту' : 'Website language'}>
        <button lang="uk" aria-pressed={language === 'uk'} onClick={() => setLanguage('uk')}>UA</button><span aria-hidden="true">|</span><button lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
      </div>
    </div><section className="hero container" id="about"><h1>{t.title}</h1><p>{t.subtitle}</p></section></header>
    <main id="main">
      <section className="directions" id="directions" aria-labelledby="directions-title">
        <div className="container"><h2 id="directions-title">{t.directions}</h2>
          <div className="direction-grid">{t.cards.map((item, index) => <article className="direction-card" key={item.title}>
            <h3>{item.title}</h3><p>{item.description}</p><div className="card-bottom"><p className="card-tags">{item.tags}</p><button className="detail-button" aria-haspopup="dialog" onClick={() => open({ type: 'direction', index })} aria-label={`${t.more}: ${item.title}`}>{t.more}<Arrow/></button></div>
          </article>)}</div>
        </div>
      </section>
      <section className={`reach container${reachRevealed ? ' is-revealed' : ''}`} ref={reachRef} aria-label={t.globe}>
        <div className="reach-globe"><svg className="globe-ring" viewBox="0 0 100 100" aria-hidden="true">
          <defs><linearGradient id={ringGradient} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#20c57c"/><stop offset="55%" stopColor="#138353"/><stop offset="100%" stopColor="#06492e"/></linearGradient></defs>
          <circle className="ring-track" cx="50" cy="50" r="49"/><circle className="ring-inner" cx="50" cy="50" r="46.5"/>
          <circle className="ring-progress" cx="50" cy="50" r="49" pathLength="100" stroke={`url(#${ringGradient})`}/>
        </svg><Globe dataUrl={`${import.meta.env.BASE_URL}data/countries.geojson`}/></div>
        <div className="reach-copy"><p className="reach-intro">{t.seen}</p><p className="reach-value">80<span>%</span></p><h2>{t.online}</h2>
          <div className="reach-meter"><span className="meter-blocks" aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <i key={index} className={index < 8 ? 'is-filled' : ''} style={{ '--cube-delay': `${index * 0.26}s` }}/>)}</span><span>{t.users}</span></div>
        </div>
      </section>
      <section className="channels" aria-labelledby="channels-title"><div className="container channels-heading"><p className="section-eyebrow"><i aria-hidden="true"/>{t.zone}</p><h2 id="channels-title">{t.channelsStart}<br/>{t.channelsEnd} <span>{t.result}</span></h2></div>
        <PartnerStrip items={['Google', 'Meta', 'Microsoft', 'Native Ads', 'TikTok', 'Snapchat', 'X', 'SEO', 'Affiliate Network']} renderItem={name => <ChannelLogo name={name}/>} label={language === 'uk' ? 'Рекламні платформи' : 'Advertising platforms'}/>

      </section>
    </main>
    <footer className="site-footer container"><Logo small/><div className="social-links">{['Facebook', 'Instagram', 'LinkedIn'].map(network => <button key={network} onClick={() => open({ type: 'social', network })}>{network}</button>)}</div></footer>
    {modal && <dialog className={`info-dialog${card ? ' direction-dialog' : ''}`} ref={dialog} aria-labelledby="dialog-title" onCancel={event => { event.preventDefault(); setModal(null); }} onClick={event => { if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) setModal(null); } }}>
      {card ? <DirectionDialogContent language={language} cards={t.cards} index={modal.index} closeLabel={t.close} onClose={() => setModal(null)} onChange={index => { setModal({ type: 'direction', index }); dialog.current.scrollTop = 0; }}/>
        : <><button className="dialog-close" type="button" aria-label={t.close} onClick={() => setModal(null)} autoFocus>×</button>
          <h2 id="dialog-title">{modalTitle}</h2>
          {modal.type === 'contact' ? <><p>{t.contactBody}</p><ContactForm t={t}/></> : modal.type === 'career' ? <><p>{t.careerBody}</p><button className="primary-button" onClick={goToDirections}>{t.careerAction}<Arrow/></button></> : modal.type === 'blog' ? <><p>{t.blogBody}</p><div className="dialog-directions">{t.cards.map((item, index) => <button key={item.title} onClick={() => { open({ type: 'direction', index }); dialog.current.scrollTop = 0; }}>{item.title}<Arrow/></button>)}</div></> : <p>{t.socialBody}</p>}
        </>}

    </dialog>}
  </>;
}
