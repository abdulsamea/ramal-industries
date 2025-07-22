import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { colors } from '../../styles/colors';

const Bellows: React.FC = () => {
  const { t } = useLanguage();

  const bellowTypes = [
    {
      title: 'Stainless Steel Expansion Bellows',
      description: 'High-quality stainless steel bellows for thermal expansion and vibration absorption',
      image: 'https://ssflexhose.com/wp-content/uploads/2022/03/ss-expansion-joint-bellows-2.jpg',
      features: [
        'Corrosion resistant stainless steel construction',
        'High temperature resistance up to 600°C',
        'Excellent fatigue life',
        'Custom designs available',
        'Various end connections'
      ],
      applications: [
        'Power plants',
        'Petrochemical industries',
        'HVAC systems',
        'Steam pipelines'
      ]
    },
    {
      title: 'Rubber Expansion Bellows',
      description: 'Flexible rubber bellows designed for vibration isolation and thermal movement',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/1/478060981/MU/RF/OM/82221264/rubber-expansion-bellows-250x250.jpeg',
      features: [
        'Excellent vibration absorption',
        'Chemical resistant rubber compounds',
        'Easy installation and maintenance',
        'Cost-effective solution',
        'Wide range of sizes'
      ],
      applications: [
        'Water treatment plants',
        'Pumping systems',
        'HVAC applications',
        'Industrial piping'
      ]
    },
    {
      title: 'PTFE Bellow Expansion Joints',
      description: 'Chemical resistant PTFE bellows for aggressive chemical environments',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/391627709/PF/AF/DZ/134605945/ptfe-bellow-expansion-joint-500x500.png',
      features: [
        'Exceptional chemical resistance',
        'Non-stick surface properties',
        'Temperature range: -200°C to +260°C',
        'FDA approved materials',
        'Low friction coefficient'
      ],
      applications: [
        'Chemical processing',
        'Pharmaceutical industry',
        'Food processing',
        'Semiconductor manufacturing'
      ]
    },
    {
      title: 'High Temperature Fabric Bellow',
      description: 'Specialized fabric bellows designed for high-temperature applications and thermal insulation',
      image: 'https://images.squarespace-cdn.com/content/v1/5bcea0563560c3270c50e32d/8a8d87be-01f7-4808-90f7-d5c4a8c3ef6a/flexible-fabric-bellows-4.jpg',
      features: [
        'Exceptional high temperature resistance up to 1000°C',
        'Lightweight construction',
        'Superior thermal insulation properties',
        'Custom fabric materials for specific applications',
        'Large axial and lateral movement capability',
        'Excellent chemical resistance'
      ],
      applications: [
        'High-temperature ducting systems',
        'Industrial furnaces and kilns',
        'Power plant boiler connections',
        'Steel mill applications',
        'Cement plant equipment',
        'Gas turbine exhaust systems'
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
              {t('bellowSolutionsTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {t('bellowSolutionsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Bellow Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {bellowTypes.map((bellow, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1">
                  <img 
                    src={bellow.image} 
                    alt={bellow.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {t(bellow.title.replace('Stainless Steel Expansion Bellows', 'stainlessBellows').replace('Rubber Expansion Bellows', 'rubberBellows').replace('PTFE Bellow Expansion Joints', 'ptfeBellows').replace('High Temperature Fabric Bellow', 'fabricBellows'))}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {t(bellow.description.replace('High-quality stainless steel bellows for thermal expansion and vibration absorption', 'stainlessBellowDesc').replace('Flexible rubber bellows designed for vibration isolation and thermal movement', 'rubberBellowDesc').replace('Chemical resistant PTFE bellows for aggressive chemical environments', 'ptfeBellowDesc').replace('Specialized fabric bellows designed for high-temperature applications and thermal insulation', 'fabricBellowDesc'))}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('language') === 'ar' ? 'الميزات الرئيسية:' : 'Key Features:'}</h3>
                    <ul className="space-y-2">
                      {bellow.features.map((feature, featureIndex) => {
                        let translatedFeature = feature;
                        if (t('language') === 'ar') {
                          if (index === 0) { // Stainless Steel Expansion Bellows
                            const stainlessFeatures = [
                              t('stainlessBellowFeature1'),
                              t('stainlessBellowFeature2'),
                              t('stainlessBellowFeature3'),
                              t('stainlessBellowFeature4'),
                              t('stainlessBellowFeature5')
                            ];
                            translatedFeature = stainlessFeatures[featureIndex] || feature;
                          } else if (index === 1) { // Rubber Expansion Bellows
                            const rubberFeatures = [
                              t('rubberBellowFeature1'),
                              t('rubberBellowFeature2'),
                              t('rubberBellowFeature3'),
                              t('rubberBellowFeature4'),
                              t('rubberBellowFeature5')
                            ];
                            translatedFeature = rubberFeatures[featureIndex] || feature;
                          } else if (index === 2) { // PTFE Bellow Expansion Joints
                            const ptfeFeatures = [
                              t('ptfeBellowFeature1'),
                              t('ptfeBellowFeature2'),
                              t('ptfeBellowFeature3'),
                              t('ptfeBellowFeature4'),
                              t('ptfeBellowFeature5')
                            ];
                            translatedFeature = ptfeFeatures[featureIndex] || feature;
                          } else if (index === 3) { // High Temperature Fabric Bellow
                            const fabricFeatures = [
                              t('fabricBellowFeature1'),
                              t('fabricBellowFeature2'),
                              t('fabricBellowFeature3'),
                              t('fabricBellowFeature4'),
                              t('fabricBellowFeature5'),
                              t('fabricBellowFeature6')
                            ];
                            translatedFeature = fabricFeatures[featureIndex] || feature;
                          }
                        }
                        return (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: colors.primary.main }} />
                          <span className="text-gray-700">{translatedFeature}</span>
                        </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('language') === 'ar' ? 'التطبيقات:' : 'Applications:'}</h3>
                    <ul className="space-y-2">
                      {bellow.applications.map((application, appIndex) => {
                        let translatedApplication = application;
                        if (t('language') === 'ar') {
                          if (index === 0) { // Stainless Steel Expansion Bellows
                            const stainlessApps = [
                              t('stainlessBellowApp1'),
                              t('stainlessBellowApp2'),
                              t('stainlessBellowApp3'),
                              t('stainlessBellowApp4')
                            ];
                            translatedApplication = stainlessApps[appIndex] || application;
                          } else if (index === 1) { // Rubber Expansion Bellows
                            const rubberApps = [
                              t('rubberBellowApp1'),
                              t('rubberBellowApp2'),
                              t('rubberBellowApp3'),
                              t('rubberBellowApp4')
                            ];
                            translatedApplication = rubberApps[appIndex] || application;
                          } else if (index === 2) { // PTFE Bellow Expansion Joints
                            const ptfeApps = [
                              t('ptfeBellowApp1'),
                              t('ptfeBellowApp2'),
                              t('ptfeBellowApp3'),
                              t('ptfeBellowApp4')
                            ];
                            translatedApplication = ptfeApps[appIndex] || application;
                          } else if (index === 3) { // High Temperature Fabric Bellow
                            const fabricApps = [
                              t('fabricBellowApp1'),
                              t('fabricBellowApp2'),
                              t('fabricBellowApp3'),
                              t('fabricBellowApp4'),
                              t('fabricBellowApp5'),
                              t('fabricBellowApp6')
                            ];
                            translatedApplication = fabricApps[appIndex] || application;
                          }
                        }
                        return (
                        <li key={appIndex} className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: colors.primary.main }} />
                          <span className="text-gray-700">{translatedApplication}</span>
                        </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseBellows')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('bellowBenefitsDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.main }}>
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('thermalCompensation')}</h3>
              <p className="text-gray-600">{t('thermalDesc')}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.main }}>
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('vibrationIsolation')}</h3>
              <p className="text-gray-600">{t('vibrationDesc')}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.main }}>
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('misalignmentCorrection')}</h3>
              <p className="text-gray-600">{t('misalignmentDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: colors.primary.main }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('needCustomBellow')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('customBellowDesc')}
          </p>
          <Link
            to="/contact"
            className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            style={{ color: colors.primary.main }}
          >
            {t('contactEngineers')} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Bellows;