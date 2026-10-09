import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import hero from './photos/hero.jpg';
import cushions from './photos/cushions.jpg';
import blinds from './photos/blinds.jpg';
import curtains from './photos/curtains.jpg';
import shading from './photos/shading.jpg';
import motor from './photos/motor.jpg';
import repair from './photos/repair.jpg';
import './style.css';

const NUMBERS = [
    { label: '067 816 8344', wa: '27678168344' },
    { label: '063 598 4670', wa: '27635984670' },
];
const EMAIL = 'Charlesmurangariri84@gmail.com';

const services = [
    { name: 'Cushions', detail: 'Indoor and outdoor cushions, made to refresh your space.', photo: cushions, alt: 'Outdoor seating with cushions', number: '01' },
    { name: 'Blinds', detail: 'Practical window and door blinds for your home.', photo: blinds, alt: 'Window fitted with blinds', number: '02' },
    { name: 'Curtains', detail: 'A considered finishing touch for your rooms.', photo: curtains, alt: 'Curtains in a living room', number: '03' },
    { name: 'Garage shading', detail: 'Shade solutions for garages and outdoor areas.', photo: shading, alt: 'Shade sails over an outdoor area', number: '04' },
    { name: 'Motor trimming', detail: 'Careful trimming for car seats and interiors.', photo: motor, alt: 'Upholstered car interior', number: '05' },
    { name: 'Furniture repair', detail: 'Give chairs, couches and other furniture a new lease on life.', photo: repair, alt: 'Furniture being repaired', number: '06' },
];

function QuoteForm({ initialService }: { initialService: string }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState(services[0].name);
    const [details, setDetails] = useState('');
    const [error, setError] = useState('');
    useEffect(() => setService(initialService), [initialService]);
    const message = `Hi ProCraft Solutions, I'd like a quote.\nName: ${name.trim()}\nPhone: ${phone.trim()}\nService: ${service}\nDetails: ${details.trim() || 'Not provided'}`;
    const whatsappUrl = `https://wa.me/${NUMBERS[0].wa}?text=${encodeURIComponent(message)}`;
    const emailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${service}`)}&body=${encodeURIComponent(message)}`;
    const validate = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!name.trim() || !phone.trim()) {
            event.preventDefault();
            setError('Please add your name and phone number so we can follow up.');
        } else {
            setError('');
        }
    };

    return <div className="form-wrap">
        <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-row">
                <label>Your name <span aria-hidden="true">*</span><input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="e.g. Alex Mokoena" required /></label>
                <label>Phone number <span aria-hidden="true">*</span><input value={phone} onChange={(event) => setPhone(event.target.value)} inputMode="tel" autoComplete="tel" placeholder="e.g. 082 123 4567" required /></label>
            </div>
            <label>What do you need?
                <select id="service-select" value={service} onChange={(event) => setService(event.target.value)}>
                    {services.map((item) => <option key={item.name}>{item.name}</option>)}
                    <option>Something else</option>
                </select>
            </label>
            <label>Tell us a little more <span className="optional">(optional)</span><textarea rows={4} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="What needs doing, approximate sizes, and your area" /></label>
            <p className="form-hint">Your message opens in WhatsApp or your email app for you to send.</p>
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="form-actions">
                <a className="btn primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={validate}>Send quote request <span aria-hidden="true">↗</span></a>
                <a className="email-link" href={emailUrl} onClick={validate}>Prefer email?</a>
            </div>
        </form>
    </div>;
}

export function App() {
    const [selectedService, setSelectedService] = useState(services[0].name);
    return <div className="site">
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="top">
            <a href="#top" className="brand" aria-label="ProCraft Solutions home"><img src={logo} alt="ProCraft Solutions" /></a>
            <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#about">About</a><a className="nav-cta" href="#quote">Get a quote <span aria-hidden="true">↗</span></a></nav>
        </header>

        <main id="main">
            <section className="hero" id="top">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="eyebrow-line" /> Upholstery · Home finishes · Repairs</p>
                    <h1>Make your space feel <em>like yours.</em></h1>
                    <p className="hero-intro">Cushions, blinds, curtains, shading and furniture repairs—thoughtful practical work for homes and vehicles in Kempton Park.</p>
                    <div className="cta">
                        <a className="btn primary" href="#quote">Tell us what you need <span aria-hidden="true">↗</span></a>
                        <a className="text-link" href={`https://wa.me/${NUMBERS[0].wa}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
                    </div>
                    <p className="hero-location"><span aria-hidden="true">⌖</span> Kempton Park, Johannesburg</p>
                </div>
                <div className="hero-visual">
                    <img className="hero-img" src={hero} alt="Hands carefully working with upholstery fabric" fetchPriority="high" />
                    <div className="image-caption"><span className="caption-mark">P</span><span>Made for everyday living<br /><b>ProCraft Solutions</b></span></div>
                </div>
            </section>

            <section className="intro-strip" id="about" aria-label="About ProCraft Solutions">
                <p><span className="strip-number">01</span><span><b>Made to fit your space</b><small>Practical finishes for home and vehicle</small></span></p>
                <p><span className="strip-number">02</span><span><b>Repair, refresh, re-use</b><small>Furniture repair and upholstery work</small></span></p>
                <p><span className="strip-number">03</span><span><b>Locally based</b><small>Proudly serving Kempton Park</small></span></p>
            </section>

            <section className="sec services-section" id="services">
                <div className="section-heading"><div><p className="eyebrow">What we can help with</p><h2>Crafted for the details<br /><em>that make a difference.</em></h2></div><p className="section-note">Have a project in mind? Choose a service to get started, or tell us about something else.</p></div>
                <ul className="list">
                    {services.map((item) => <li key={item.name}>
                        <a className="service-card" href="#quote" onClick={() => { setSelectedService(item.name); setTimeout(() => document.getElementById('service-select')?.focus(), 0); }} aria-label={`Ask about ${item.name}`}>
                            <div className="service-image"><img src={item.photo} alt={item.alt} loading="lazy" /><span className="service-number">{item.number}</span></div>
                            <div className="service-copy"><div><h3>{item.name}</h3><p>{item.detail}</p></div><span className="service-arrow" aria-hidden="true">↗</span></div>
                        </a>
                    </li>)}
                </ul>
                <p className="more">Not seeing what you need? <a href="#quote">Ask us about your project <span aria-hidden="true">↗</span></a></p>
            </section>

            <section className="quote-section" id="quote">
                <div className="quote-inner">
                    <div className="quote-heading"><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Let’s make a plan<br /><em>for your project.</em></h2><p>Share a few details and we’ll get back to you with the next steps.</p>
                        <div className="contact-mini"><span className="contact-icon" aria-hidden="true">↗</span><span>Rather talk it through?<br /><a href={`tel:+${NUMBERS[0].wa}`}>Call {NUMBERS[0].label}</a></span></div>
                    </div>
                    <div className="quote-card"><QuoteForm initialService={selectedService} /></div>
                </div>
            </section>

            <section className="contact-band" aria-label="Contact information"><div><p className="eyebrow">Good work starts with a conversation</p><h2>We’re here to help.</h2></div><div className="contact-options"><a href={`tel:+${NUMBERS[0].wa}`}><small>Call us</small>{NUMBERS[0].label}</a><a href={`https://wa.me/${NUMBERS[1].wa}`} target="_blank" rel="noopener noreferrer"><small>WhatsApp</small>{NUMBERS[1].label}</a><a href={`mailto:${EMAIL}`}><small>Email</small>{EMAIL}</a></div></section>
        </main>

        <footer className="foot"><a href="#top" className="footer-brand"><img src={logo} alt="ProCraft Solutions" /></a><p>Thoughtful craft for home, vehicle and everyday living. Photos shown are examples.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} ProCraft Solutions</span><span>Kempton Park · Johannesburg</span><a href="#top">Back to top ↑</a></div></footer>
    </div>;
}
