import React from 'react';
import { Award, Users, Target, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../styles/colors';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Award className="h-8 w-8" style={{ color: colors.primary.main }} />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our products and services'
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: colors.primary.main }} />,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do'
    },
    {
      icon: <Target className="h-8 w-8" style={{ color: colors.primary.main }} />,
      title: 'Innovation',
      description: 'Continuous improvement and innovation in our products and processes'
    }
  ];

  const achievements = [
    '10+ Years of Experience',
    '100+ Satisfied Customers',
    'ISO Certified Manufacturing',
    '24/7 Customer Support',
    'Pan-India Delivery Network',
    'Custom Solution Expertise'
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
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {t('aboutSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('ourStory')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutText')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutText2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('aboutText3')}
              </p>
            </div>
            <div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Metallschl%C3%A4uche.jpg" 
                alt="Ramal Industries Supplier"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('ourValues')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('valuesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{t(value.title.replace('Quality Excellence', 'qualityExcellence').replace('Customer Focus', 'customerFocus').replace('Innovation', 'innovation'))}</h3>
                <p className="text-gray-600 text-center">{t(value.description.replace('We maintain the highest standards in all our products and services', 'qualityExcellenceDesc').replace('Our customers are at the heart of everything we do', 'customerFocusDesc').replace('Continuous improvement and innovation in our products and processes', 'innovationDesc'))}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('ourAchievements')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('achievementsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: colors.primary.main }} />
                <span className="text-gray-700 font-medium">{t('language') === 'ar' ? (achievement === '10+ Years of Experience' ? '10+ سنوات من الخبرة' : achievement === '100+ Satisfied Customers' ? '100+ عميل راضٍ' : achievement === 'ISO Certified Manufacturing' ? 'تصنيع معتمد من ISO' : achievement === '24/7 Customer Support' ? 'دعم العملاء 24/7' : achievement === 'Pan-India Delivery Network' ? 'شبكة توصيل عبر الهند' : achievement === 'Custom Solution Expertise' ? 'خبرة في الحلول المخصصة' : achievement) : achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 text-white" style={{ backgroundColor: colors.primary.main }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('ourMission')}
              </h2>
              <p className="text-lg opacity-90">
                {t('missionText')}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('ourVision')}
              </h2>
              <p className="text-lg opacity-90">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;