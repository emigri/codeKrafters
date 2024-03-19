import React, { useState } from 'react';
import '../../../public/assets/css/style.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
    <br/>
    <p>We are always happy to hear from our customers. Please complete the following:</p>
    <br/>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Your name:</p>
        <input type="text" className="input-field" id="name-input" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <p>Your email:</p>
        <input type="email" className="input-field" id="email-input" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-control">
        <p>Your phone number:</p>
        <input type="phone" className="input-field" id="phone-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-control">
        <p>Your message:</p>
        <textarea className="input-field" rows="4" id="message-input" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit" className="c-btn">Submit</button>
    </form>
    <br/>
    <h1>Alternatively, you can email us at support@codekrafters.co.uk or call us at +44 7444 555 666</h1>
  </>
  );
  
}

export default Contact;
