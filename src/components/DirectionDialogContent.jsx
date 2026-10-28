import React, { useState, useEffect, useRef, useId } from 'react';
import Logo from './Logo.jsx';
import BenefitIcon from './BenefitIcon.jsx';
import { directionDetails } from '../directionDetails.js';

export default function DirectionDialogContent({ language, cards, index, onChange, onClose, closeLabel }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const selector = useRef(null);
  const menuId = useId(), benefitsId = useId();
  useEffect(() => { setMenuOpen(false); setExpanded(false); }, [index]);
  const card = cards[index];
  const detail = directionDetails[language][index];
  return <>
    <div className="direction-dialog-controls">
      <div className="direction-dialog-toolbar"><Logo linked={false}/><button className="dialog-close direction-dialog-close" type="button" aria-label={closeLabel} onClick={onClose} autoFocus><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg></button></div>
      <nav className="direction-tabs" aria-label={language === 'uk' ? 'Напрямки бізнесу' : 'Business areas'}>{cards.map((item, itemIndex) => <button type="button" key={item.title} aria-current={itemIndex === index ? 'page' : undefined} onClick={() => onChange(itemIndex)}>{item.title}{itemIndex !== index && <span aria-hidden="true">›</span>}</button>)}</nav>
      <div className="direction-select-wrap">
        <button ref={selector} type="button" className="direction-select" aria-label={language === 'uk' ? 'Напрямок' : 'Expertise'} aria-expanded={menuOpen} aria-controls={menuId} onClick={() => setMenuOpen(!menuOpen)}>{card.title}<span aria-hidden="true">{menuOpen ? '⌃' : '⌄'}</span></button>
        {menuOpen && <div id={menuId} className="direction-options">{cards.map((item, itemIndex) => itemIndex !== index && <button type="button" key={item.title} onClick={() => { setMenuOpen(false); onChange(itemIndex); selector.current?.focus(); }}>{item.title}</button>)}</div>}
      </div>
    </div>
    <header className="direction-dialog-header">
      <h2 id="dialog-title">{card.title}</h2><p className="direction-dialog-tags">{detail.tags}</p>
    </header>
    <div className="direction-dialog-body">
      <p className="direction-dialog-lead">{detail.lead}</p>
      <div className="direction-dialog-description">{detail.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
    </div>
    {detail.stats && <section className="direction-stats"><h3 className="direction-benefits-heading"><i aria-hidden="true"/>{language === 'uk' ? 'ПОКАЗНИКИ' : 'KEY FIGURES'}</h3><dl>{detail.stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl></section>}
    <section className="direction-dialog-benefits">
      <h3 className="direction-benefits-heading"><i aria-hidden="true"/>{language === 'uk' ? 'ПЕРЕВАГИ' : 'OUR STRENGTHS'}</h3>
      <ul id={benefitsId} className={`dialog-benefits${detail.stats && !expanded ? ' is-collapsed' : ''}`}>{detail.benefits.map(([title], benefitIndex) => <li key={title}><BenefitIcon name={detail.icons[benefitIndex]}/><h4>{title}</h4></li>)}</ul>
      {detail.stats && <button className="benefits-toggle" type="button" aria-expanded={expanded} aria-controls={benefitsId} onClick={() => setExpanded(!expanded)}>{language === 'uk' ? (expanded ? 'Показати менше' : 'Показати більше') : (expanded ? 'Show less' : 'Show more')}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button>}
    </section>
  </>;
}
