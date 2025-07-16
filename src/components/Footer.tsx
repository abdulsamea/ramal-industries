import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('home'), href: '/' },
    { name: t('industries'), href: '/industries' },
    { name: t('products'), href: '/products' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#1089FF] mb-4">Ramal Industries</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footerText')}
            </p>
            {/* Social media icons hidden as requested */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#34699A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#34699A] mt-1 flex-shrink-0" />
                <span className="text-gray-300">+91-70214 83925</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#34699A] mt-1 flex-shrink-0" />
                <span className="text-gray-300">sales@ramalindustries.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#34699A] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Sami Qureshi Chawl, Room No. 7, Group No.2, Hariyali Village (East), Mumbai, India - 400083
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ramal Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;