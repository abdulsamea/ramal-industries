import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { colors } from '../styles/colors';

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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    // Check if environment variables are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('Email service is not configured. Please contact us directly at sales@ramalindustries.com');
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
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    })
    .catch(() => {
      setError('Sorry, there was an error sending your message. Please try again later.');
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" style={{ color: colors.primary.main }} />,
      title: t('phone'),
      details: ['+91-70214 83925'],
      link: 'tel:+917021483925'
    },
    {
      icon: <Mail className="h-6 w-6" style={{ color: colors.primary.main }} />,
      title: t('email'),
      details: ['sales@ramalindustries.com'],
      link: 'mailto:sales@ramalindustries.com'
    },
    {
      icon: <MapPin className="h-6 w-6" style={{ color: colors.primary.main }} />,
      title: t('address'),
      details: [
        'Sami Qureshi Chawl, Room No. 7,',
        'Group No.2, Hariyali Village (East),',
        'Mumbai, India - 400083'
      ]
    },
    {
      icon: <Clock className="h-6 w-6" style={{ color: colors.primary.main }} />,
      title: t('businessHours'),
      details: [
        t('mondayToSaturday'),
        t('sundayClosed')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r text-white py-16" style={{ 
        background: `linear-gradient(to right, ${colors.primary.main}, ${colors.primary[700]}, ${colors.primary[300]})`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {t('contactSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('getInTouchTitle')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('getInTouchDesc')}
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="hover:opacity-80 transition-colors"
                          style={{ color: colors.primary.main }}
                        >
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-600">
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('sendMessage')}</h2>
              
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <p className="text-green-700">Thank you for your message! We will get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <p className="text-red-700">{error.includes('Email service is not configured') ? t('emailNotConfigured') : t('errorMessage')}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('namePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                    style={{ 
                      '--focus-ring-color': colors.primary.main 
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('emailAddress')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                    onFocus={(e) => {
                      e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                    onFocus={(e) => {
                      e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('subjectPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                    onFocus={(e) => {
                      e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-vertical transition-colors"
                    onFocus={(e) => {
                      e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: colors.primary.main }}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We'll respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('visitLocation')}</h2>
            <p className="text-lg text-gray-600">
              {t('locationDesc')}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: colors.primary.main }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ramal Industries</h3>
                <p className="text-gray-600">
                  Sami Qureshi Chawl, Room No. 7, Group No.2,<br />
                  Hariyali Village (East), Mumbai, India - 400083
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;