import React from 'react';
import { CONTACT_ITEMS } from '../data/portfolioData.js';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="cmd">
        <span className="user">harish</span>
        <span className="sep">@portfolio:~$</span>{' '}
        <span className="command">cat contact.info</span>
      </div>
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {CONTACT_ITEMS.map((item, idx) => (
          <a
            key={idx}
            className="contact-row"
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
          >
            <span className="contact-flag">{item.flag}</span>
            <span className="contact-val">{item.val}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
