import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, ChevronUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { colors } from "../styles/colors";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t("home"), href: "/" },
    {
      name: t("products"),
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: t("Hoses"), href: "/products/hoses" },
        { name: t("Bellows"), href: "/products/bellows" },
        { name: t("End Fittings"), href: "/products/fittings" },
      ],
    },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/products") {
      return (
        location.pathname === path || location.pathname.startsWith("/products/")
      );
    }
    return location.pathname === path;
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div
        className="text-white py-2"
        style={{ backgroundColor: colors.primary.main }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 +91-70214 83925</span>
              <span>✉️ sales@ramalindustries.com</span>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                aria-label={t("language")}
              >
                <Globe size={16} />
                <span>{language === "en" ? "English" : "العربية"}</span>
                <ChevronDown size={16} />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsLanguageOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("ar");
                      setIsLanguageOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold"
              style={{ color: colors.secondary.main }}
            >
              Ramal Industries
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsProductsOpen(true)}
                      // onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <button
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                          isActive(item.href)
                            ? "text-white"
                            : "text-gray-700 hover:text-white"
                        }`}
                        style={
                          isActive(item.href)
                            ? { backgroundColor: colors.secondary.main }
                            : {}
                        }
                        onMouseEnter={(e) => {
                          if (!isActive(item.href)) {
                            // e.currentTarget.style.backgroundColor =
                            //   colors.primary.main;
                            // e.currentTarget.style.color = colors.white;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(item.href)) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = colors.gray[700];
                          }
                        }}
                        aria-expanded={isProductsOpen}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isProductsOpen && (
                        <div
                          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border"
                          onMouseEnter={() => setIsProductsOpen(true)}
                          onMouseLeave={() => setIsProductsOpen(false)}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  colors.primary.main;
                                // e.currentTarget.style.color = colors.white;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                                e.currentTarget.style.color = colors.gray[700];
                              }}
                              onClick={closeAllMenus}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-gray-700 hover:text-white"
                      }`}
                      style={
                        isActive(item.href)
                          ? { backgroundColor: colors.secondary.main }
                          : {}
                      }
                      onMouseEnter={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.backgroundColor =
                            colors.primary.main;
                          // e.currentTarget.style.color = colors.white;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = colors.gray[700];
                        }
                      }}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={closeAllMenus}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset"
              style={
                {
                  "--focus-ring-color": colors.secondary.main,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary.main;
                // e.currentTarget.style.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = colors.gray[700];
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.secondary.main}`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setIsMobileProductsOpen(!isMobileProductsOpen)
                        }
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-white"
                            : "text-gray-700 hover:text-white"
                        }`}
                        style={
                          isActive(item.href)
                            ? { backgroundColor: colors.secondary.main }
                            : {}
                        }
                        onMouseEnter={(e) => {
                          if (!isActive(item.href)) {
                            e.currentTarget.style.backgroundColor =
                              colors.primary.main;
                            // e.currentTarget.style.color = colors.white;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(item.href)) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = colors.gray[700];
                          }
                        }}
                        aria-expanded={isMobileProductsOpen}
                        aria-haspopup="true"
                      >
                        {item.name}
                        {isMobileProductsOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      {isMobileProductsOpen && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-white transition-colors"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  colors.primary.main;
                                // e.currentTarget.style.color = colors.white;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                                e.currentTarget.style.color = colors.gray[600];
                              }}
                              onClick={closeAllMenus}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-gray-700 hover:text-white"
                      }`}
                      style={
                        isActive(item.href)
                          ? { backgroundColor: colors.secondary.main }
                          : {}
                      }
                      onMouseEnter={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.backgroundColor =
                            colors.primary.main;
                          // e.currentTarget.style.color = colors.white;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = colors.gray[700];
                        }
                      }}
                      onClick={closeAllMenus}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
