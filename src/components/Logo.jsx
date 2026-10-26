import React from 'react';

export default function Logo({ small = false, linked = true }) {
  const className = `logo${small ? ' logo--small' : ''}`;
  const image = <img src={`${import.meta.env.BASE_URL}brand/logo.svg`} alt="expla" width="202" height="44"/>;
  return linked
    ? <a className={className} href="#about" aria-label="expla">{image}</a>
    : <span className={className}>{image}</span>;
}
