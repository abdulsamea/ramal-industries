import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Send form with EmailJS
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID, 
      {
        ...formData,
        to_email: "sales@ramalindustries.com"
      },
      PUBLIC_KEY
    )
    .then(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    })
    .catch(() => {
      alert('Sorry, there was an error sending your message. Please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  // ... rest of your component

  // Change the submit button to show loading feedback
  return (
    // ... rest of your JSX (unchanged)
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* your form fields */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#34699A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
      >
        <Send className="h-5 w-5 mr-2" />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
    // ... rest of your JSX
  );
};

export default Contact;
