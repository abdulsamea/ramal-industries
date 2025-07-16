import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Hoses: React.FC = () => {
  const { t } = useLanguage();

  const hoseTypes = [
    {
      title: 'Metal Flexible Hoses',
      description: 'High-performance metal hoses designed for extreme temperature and pressure conditions',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Metallschl%C3%A4uche.jpg',
      features: [
        'Temperature range: -200°C to +800°C',
        'High pressure resistance up to 250 bar',
        'Corrosion resistant stainless steel construction',
        'Flexible design for complex installations',
        'Available in various diameters'
      ],
      applications: [
        'Steam and hot water systems',
        'Chemical processing',
        'Power generation',
        'Automotive exhaust systems'
      ]
    },
    {
      title: 'Food Grade Hoses',
      description: 'FDA approved hoses specifically designed for food and beverage industry applications',
      image: 'https://5.imimg.com/data5/TV/YL/UK/SELLER-5417651/food-grade-hose-pipe-500x500.jpg',
      features: [
        'FDA and USDA approved materials',
        'Non-toxic and odorless construction',
        'Easy to clean and sanitize',
        'Temperature resistant up to 120°C',
        'Smooth inner surface prevents contamination'
      ],
      applications: [
        'Food processing plants',
        'Beverage manufacturing',
        'Dairy industry',
        'Pharmaceutical applications'
      ]
    },
    {
      title: 'Composite Tanker Hoses',
      description: 'Heavy-duty composite hoses for marine and industrial tanker applications',
      image: 'https://4.imimg.com/data4/SA/DD/MY-4968245/tanker-composite-hose-500x500.jpg',
      features: [
        'Multi-layer construction for durability',
        'Chemical resistant inner lining',
        'Reinforced with high-strength fibers',
        'Floating capability for marine use',
        'Large diameter options available'
      ],
      applications: [
        'Oil and gas transfer',
        'Marine fuel loading',
        'Chemical tanker operations',
        'Industrial bulk liquid transfer'
      ]
    },
    {
      title: 'Industrial Rubber Hoses',
      description: 'Versatile rubber hoses for general industrial applications',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/1/478060981/MU/RF/OM/82221264/rubber-expansion-bellows-250x250.jpeg',
      features: [
        'Flexible rubber construction',
        'Oil and chemical resistant',
        'Wide temperature range',
        'Various pressure ratings',
        'Cost-effective solution'
      ],
      applications: [
        'Hydraulic systems',
        'Pneumatic applications',
        'Water transfer',
        'General industrial use'
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
              Flexible Hoses
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              High-quality flexible hoses for diverse industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Hose Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {hoseTypes.map((hose, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1">
                  <img 
                    src={hose.image} 
                    alt={hose.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {hose.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {hose.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {hose.features.map((feature, featureIndex) => (
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
                      {hose.applications.map((application, appIndex) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-[#34699A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Hose Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our experts for customized hose solutions tailored to your specific requirements
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#34699A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hoses;