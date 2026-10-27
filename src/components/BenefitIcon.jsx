import React from 'react';
const icons = import.meta.glob('../assets/benefits/*.svg', { eager: true, query: '?url', import: 'default' });
export default function BenefitIcon({ name }) {
  return <img className="benefit-icon" src={icons[`../assets/benefits/${name}.svg`]} width="28" height="28" alt="" aria-hidden="true"/>;
}
