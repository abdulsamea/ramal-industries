import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Fittings: React.FC = () => {
  const { t } = useLanguage();

  const fittingTypes = [
    {
      title: 'Flanges',
      description: 'High-quality flanges for secure and reliable pipe connections',
      image: 'https://5.imimg.com/data5/TV/YL/UK/SELLER-5417651/food-grade-hose-pipe-500x500.jpg',
      features: [
        'Various materials: SS, CS, Alloy Steel',
        'Standard sizes from 1/2" to 48"',
        'ANSI, DIN, JIS standards',
        'Raised face and flat face options',
        'Custom drilling patterns available'
      ],
      types: [
        'Weld Neck Flanges',
        'Slip-On Flanges',
        'Blind Flanges',
        'Socket Weld Flanges',
        'Threaded Flanges'
      ]
    },
    {
      title: 'Quick Release Couplings',
      description: 'Fast and secure connections for easy assembly and disassembly',
      image: 'https://4.imimg.com/data4/SA/DD/MY-4968245/tanker-composite-hose-500x500.jpg',
      features: [
        'One-handed operation',
        'Leak-proof sealing',
        'Corrosion resistant materials',
        'High pressure capability',
        'Various end connections'
      ],
      types: [
        'Hydraulic Quick Couplings',
        'Pneumatic Quick Couplings',
        'Water Quick Couplings',
        'Chemical Quick Couplings',
        'Steam Quick Couplings'
      ]
    },
    {
      title: 'Camlock Couplings',
      description: 'Cam and groove couplings for rapid connection and disconnection',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/1/478060981/MU/RF/OM/82221264/rubber-expansion-bellows-250x250.jpeg',
      features: [
        'Quick connect/disconnect',
        'Self-sealing design',
        'Multiple material options',
        'Standard and metric sizes',
        'Dust caps and plugs available'
      ],
      types: [
        'Type A - Adapter with External Thread',
        'Type B - Coupler with Internal Thread',
        'Type C - Coupler with Hose Shank',
        'Type D - Coupler with Female Thread',
        'Type E - Adapter with Hose Shank'
      ]
    },
    {
      title: 'Tricolor Fittings',
      description: 'Specialized color-coded fittings for easy identification and safety',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/391627709/PF/AF/DZ/134605945/ptfe-bellow-expansion-joint-500x500.png',
      features: [
        'Color-coded for easy identification',
        'High-grade materials',
        'Leak-proof connections',
        'Easy installation',
        'Compliance with safety standards'
      ],
      types: [
        'Medical Gas Fittings',
        'Laboratory Fittings',
        'Industrial Gas Fittings',
        'Compressed Air Fittings',
        'Vacuum System Fittings'
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
              End Fittings
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Comprehensive range of end fittings for secure and reliable connections
            </p>
          </div>
        </div>
      </section>

      {/* Fitting Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {fittingTypes.map((fitting, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1">
                  <img 
                    src={fitting.image} 
                    alt={fitting.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {fitting.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {fitting.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {fitting.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#34699A] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Types:</h3>
                    <ul className="space-y-2">
                      {fitting.types.map((type, typeIndex) => (
                        <li key={typeIndex} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-[#34699A] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{type}</span>
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

      {/* Material Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer fittings in various materials to suit different applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold">SS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stainless Steel</h3>
              <p className="text-gray-600 text-sm">Corrosion resistant, high strength</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold">CS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Carbon Steel</h3>
              <p className="text-gray-600 text-sm">Cost-effective, high strength</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold">AL</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aluminum</h3>
              <p className="text-gray-600 text-sm">Lightweight, corrosion resistant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#34699A] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold">BR</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brass</h3>
              <p className="text-gray-600 text-sm">Excellent machinability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our fittings comply with international standards and specifications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#34699A] text-white rounded-lg p-4 mb-3">
                <span className="text-xl font-bold">ANSI</span>
              </div>
              <p className="text-gray-600">American National Standards</p>
            </div>
            <div className="text-center">
              <div className="bg-[#34699A] text-white rounded-lg p-4 mb-3">
                <span className="text-xl font-bold">DIN</span>
              </div>
              <p className="text-gray-600">German Industrial Standards</p>
            </div>
            <div className="text-center">
              <div className="bg-[#34699A] text-white rounded-lg p-4 mb-3">
                <span className="text-xl font-bold">JIS</span>
              </div>
              <p className="text-gray-600">Japanese Industrial Standards</p>
            </div>
            <div className="text-center">
              <div className="bg-[#34699A] text-white rounded-lg p-4 mb-3">
                <span className="text-xl font-bold">BS</span>
              </div>
              <p className="text-gray-600">British Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#34699A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Fittings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We can manufacture custom fittings according to your specifications and requirements
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#34699A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Fittings;