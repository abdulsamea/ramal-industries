import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../styles/colors';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const features = [
    {
      icon: <Award className="h-8 w-8" style={{ color: colors.primary.main }} />,
      title: 'Quality Assurance',
      description: 'ISO certified manufacturing processes ensuring the highest quality standards'
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: colors.primary.main }} />,
      title: 'Expert Team',
      description: 'Experienced professionals with decades of industry expertise'
    },
    {
      icon: <Zap className="h-8 w-8" style={{ color: colors.primary.main }} />,
      title: 'Quick Delivery',
      description: 'Fast turnaround times with efficient supply chain management'
    }
  ];

  const heroSlides = [
    {
      title: 'Metal Flexible Hoses',
      subtitle: 'High-performance metal hoses for extreme conditions',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Metallschl%C3%A4uche.jpg'
    },
    {
      title: 'Food Grade Hoses',
      subtitle: 'Safe and hygienic hoses for food industry applications',
      image: 'https://5.imimg.com/data5/TV/YL/UK/SELLER-5417651/food-grade-hose-pipe-500x500.jpg'
    },
    {
      title: 'Composite Tanker Hoses',
      subtitle: 'Durable composite hoses for tanker applications',
      image: 'https://4.imimg.com/data4/SA/DD/MY-4968245/tanker-composite-hose-500x500.jpg'
    },
    {
      title: 'Stainless Steel Bellows',
      subtitle: 'Precision-engineered expansion joints for industrial use',
      image: 'https://ssflexhose.com/wp-content/uploads/2022/03/ss-expansion-joint-bellows-2.jpg'
    },
    {
      title: 'Rubber Expansion Bellows',
      subtitle: 'Flexible rubber bellows for vibration absorption',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/1/478060981/MU/RF/OM/82221264/rubber-expansion-bellows-250x250.jpeg'
    },
    {
      title: 'PTFE Bellow Joints',
      subtitle: 'Chemical resistant PTFE expansion joints',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/391627709/PF/AF/DZ/134605945/ptfe-bellow-expansion-joint-500x500.png'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      title: t('flexibleHose'),
      description: 'High-quality flexible hoses for various industrial applications',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Metallschl%C3%A4uche.jpg'
    },
    {
      title: t('bellowSolutions'),
      description: 'Precision-engineered bellow systems for specialized requirements',
      image: 'https://ssflexhose.com/wp-content/uploads/2022/03/ss-expansion-joint-bellows-2.jpg'
    },
    {
      title: t('endFittings'),
      description: 'Comprehensive range of end fittings including flanges and couplings',
      image: 'https://5.imimg.com/data5/TV/YL/UK/SELLER-5417651/food-grade-hose-pipe-500x500.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
            </div>
          ))}
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  style={{ color: colors.primary.main }}
                >
                  {t('learnMore')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
                  style={{ 
                    '--hover-color': colors.primary.main 
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.primary.main;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.white;
                  }}
                >
                  {t('getQuote')}
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Current Slide Info */}
          <div className="absolute bottom-20 left-8 z-20 text-white">
            <h3 className="text-2xl font-bold mb-2">{heroSlides[currentSlide].title}</h3>
            <p className="text-lg opacity-90">{heroSlides[currentSlide].subtitle}</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of industrial hose solutions and fittings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="font-semibold hover:opacity-80 transition-colors inline-flex items-center"
                    style={{ color: colors.primary.main }}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ramal Industries?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, quality, and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: colors.primary.main }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for customized solutions that meet your specific industrial requirements
          </p>
          <Link
            to="/contact"
            className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            style={{ color: colors.primary.main }}
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;