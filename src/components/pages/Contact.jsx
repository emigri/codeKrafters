import React, { useState, useEffect} from 'react';
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
    <div className="w-full mx-auto contact">
      <div>We are always happy to hear from our customers. Please complete the following:</div>
      <form className="mx-auto max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Your Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-800" id="inline-full-name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-email">
              Your E-Mail
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-800" id="inline-full-email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-phone">
              Your Phone
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-800" id="inline-full-phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-message">
              Your Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-800" id="inline-full-message" type="textarea" value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-800 font-bold">
            <input className="mr-2 leading-tight" type="checkbox"/>
            <span className="text-sm">
              Send me your newsletter!
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-teal-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div>
      <h1>Alternatively, you can email us at support@codekrafters.co.uk or call us at +44 7444 555 666</h1></div>
    </div>
  </>
  );
  
}

export default Contact;
