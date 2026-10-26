import React from 'react';
import Logo from './Logo.jsx';
import { directionDetails } from '../directionDetails.js';

export default function DirectionDialogContent({ language, cards, index, onChange, onClose, closeLabel }) {
  const card = cards[index];
  const detail = directionDetails[language][index];
  return <>
    <header className="direction-dialog-header">
      <div className="direction-dialog-toolbar"><Logo linked={false}/><button className="dialog-close direction-dialog-close" type="button" aria-label={closeLabel} onClick={onClose} autoFocus><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg></button></div>
      <div className="direction-select-wrap"><select aria-label={language === 'uk' ? 'Напрямок' : 'Expertise'} className="direction-select" value={index} onChange={event => onChange(Number(event.target.value))}>
        {cards.map((item, itemIndex) => <option key={item.title} value={itemIndex}>{item.title}</option>)}
      </select><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m8 10 4 4 4-4"/></svg></div>
      <h2 id="dialog-title">{card.title}</h2><p className="direction-dialog-tags">{card.tags}</p>
    </header>
    <div className="direction-dialog-body">
      <p className="direction-dialog-lead">{detail.lead}</p>
      <div className="direction-dialog-description">{detail.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
      <h3 className="direction-benefits-heading"><i aria-hidden="true"/>{language === 'uk' ? 'ПЕРЕВАГИ' : 'OUR STRENGTHS'}</h3>
      <ul className="dialog-benefits">{detail.benefits.map(([title, body]) => <li key={title}><h4>{title}</h4><p>{body}</p></li>)}</ul>
    </div>
  </>;
}
