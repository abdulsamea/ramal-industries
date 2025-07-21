import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    
    // Check if environment variables are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert('Email service is not configured. Please contact us directly at sales@ramalindustries.com');
      return;
    }
    
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ... rest of your component

  // Change the submit button to show loading feedback
  return (
    // ... rest of your JSX (unchanged)
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* your form fields */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                  />
                </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent"
                    required
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent resize-vertical"
                    required
                  ></textarea>
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