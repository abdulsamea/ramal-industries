import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    hoses: 'Hoses',
    bellows: 'Bellows',
    fittings: 'Fittings',
    about: 'About Us',
    contact: 'Contact Us',
    language: 'Language',
    
    // Home Page
    heroTitle: 'Leading Supplier of Flexible Hose Solutions',
    heroSubtitle: 'Specializing in Flexible Hoses, Bellow Solutions, and Premium End Fittings for Industrial Applications',
    learnMore: 'Learn More',
    getQuote: 'Get Quote',
    
    // Products
    flexibleHose: 'Flexible Hose',
    bellowSolutions: 'Bellow Solutions',
    endFittings: 'End Fittings',
    flanges: 'Flanges',
    quickRelease: 'Quick Release Coupling',
    camlock: 'Camlock Coupling',
    triclover: 'Tri Clover Fittings',
    
    // About
    aboutTitle: 'About Ramal Industries',
    aboutText: 'Ramal Industries is a leading supplier of high-quality flexible hose solutions, bellow systems, and end fittings. With years of experience in the industry, we provide reliable and durable products that meet the highest standards of quality and performance.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our team',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    
    // Footer
    footerText: 'Leading supplier of flexible hose solutions and end fittings',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    
    // Industries
    industriesTitle: 'Industries We Serve',
    industriesSubtitle: 'Our products serve a wide range of industries with specialized solutions'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    hoses: 'الخراطيم',
    bellows: 'المنافيخ',
    fittings: 'التركيبات',
    about: 'معلومات عنا',
    contact: 'اتصل بنا',
    language: 'اللغة',
    
    // Home Page
    heroTitle: 'الشركة الرائدة في تصنيع حلول الخراطيم المرنة',
    heroSubtitle: 'متخصصون في الخراطيم المرنة وحلول المنفاخ وتركيبات الطرف المتميزة للتطبيقات الصناعية',
    learnMore: 'تعلم أكثر',
    getQuote: 'احصل على عرض أسعار',
    
    // Products
    flexibleHose: 'الخراطيم المرنة',
    bellowSolutions: 'حلول المنفاخ',
    endFittings: 'تركيبات الطرف',
    flanges: 'الشفاه',
    quickRelease: 'وصلة التحرير السريع',
    camlock: 'وصلة كاملوك',
    triclover: 'تركيبات تري كلوفر',
    
    // About
    aboutTitle: 'حول رمال الصناعات',
    aboutText: 'رمال الصناعات هي شركة رائدة في تصنيع حلول الخراطيم المرنة عالية الجودة وأنظمة المنفاخ وتركيبات الطرف. مع سنوات من الخبرة في الصناعة، نقدم منتجات موثوقة ومتينة تلبي أعلى معايير الجودة والأداء.',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'تواصل مع فريقنا',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    
    // Footer
    footerText: 'الشركة الرائدة في تصنيع حلول الخراطيم المرنة وتركيبات الطرف',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
    followUs: 'تابعنا',
    
    // Industries
    industriesTitle: 'الصناعات التي نخدمها',
    industriesSubtitle: 'منتجاتنا تخدم مجموعة واسعة من الصناعات بحلول متخصصة'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};