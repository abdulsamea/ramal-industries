import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

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
      <section className="bg-gradient-to-r from-[#34699A] to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bellow Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Precision-engineered expansion joints and bellows for industrial applications
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
                    {bellow.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {bellow.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {bellow.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#34699A] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Applications:</h3>
                    <ul className="space-y-2">
                      {bellow.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-[#34699A] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{application}</span>
                        </li>
                      ))}
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
              Why Choose Our Bellows?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our bellows provide superior performance and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thermal Compensation</h3>
              <p className="text-gray-600">Absorbs thermal expansion and contraction in piping systems</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vibration Isolation</h3>
              <p className="text-gray-600">Reduces vibration transmission and noise in systems</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Misalignment Correction</h3>
              <p className="text-gray-600">Compensates for angular and lateral misalignments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#34699A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Bellow Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our engineering team can design custom bellows to meet your specific requirements
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#34699A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contact Engineers <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Bellows;