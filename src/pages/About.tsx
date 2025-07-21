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
        background: `linear-gradient(to right, ${colors.primary.main}, ${colors.secondary.main})`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Leading supplier of flexible hose solutions and industrial fittings
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
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutText')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located in Mumbai, India, we serve customers across the nation with our comprehensive range of flexible hose solutions, bellow systems, and end fittings including flanges, quick release couplings, camlock couplings, and tricolor fittings.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and customer satisfaction has made us a trusted partner for industries ranging from manufacturing to water treatment, power generation, and beyond.
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and define our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
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
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that showcase our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: colors.primary.main }} />
                <span className="text-gray-700 font-medium">{achievement}</span>
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
                Our Mission
              </h2>
              <p className="text-lg opacity-90">
                To provide high-quality, innovative flexible hose solutions and industrial fittings that exceed customer expectations while maintaining the highest standards of safety, reliability, and performance.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-lg opacity-90">
                To be the leading Supplier of flexible hose solutions in India, recognized for our commitment to quality, innovation, and customer satisfaction across all industries we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;