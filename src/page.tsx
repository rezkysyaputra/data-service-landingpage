"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Users,
  Building2,
  User,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Star,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurementId = process.env.REACT_APP_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    }
    setIsVisible(true);
  }, []);

  const iconTools = [
    {
      name: "Excel",
      icon: "excel.png",
    },
    {
      name: "Python",
      icon: "python.png",
    },
    {
      name: "Tableau",
      icon: "tableau.png",
    },
    {
      name: "R",
      icon: "r.png",
    },
    {
      name: "Google Colab",
      icon: "colab.png",
    },
  ];

  const services = [
    "Data Cleaning & Preparation",
    "Data Visualization & Reporting",
    "Business Intelligence",
    "Machine Learning Model & Predictive Analysis",
    "Data Integration & Automation",
  ];

  const whyUsPoints = [
    "Tim profesional ahli dari berbagai Data Science & IT",
    "Pengalaman berbagai sektor industri",
    "Solusi custom sesuai kebutuhan bisnis",
    "Jaminan kepuasan data",
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$15",
      features: [
        "2-day delivery",
        "Basic Data Cleaning",
        "Data Formatting",
        "500 Rows",
        "Unlimited Revision",
      ],
    },
    {
      name: "Standard",
      price: "$20",
      popular: true,
      features: [
        "1-day delivery",
        "Standard Data Cleaning",
        "Data Formatting",
        "1500 Rows",
        "Unlimited Revision",
      ],
    },
    {
      name: "Premium",
      price: "$30",
      features: [
        "1-day delivery",
        "Premium Data Cleaning",
        "Data Formatting",
        "2500 Rows",
        "Unlimited Revision",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">DATA SERVICE</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => {
                  ReactGA.event({
                    category: "Navigation",
                    action: "Click",
                    label: "Home",
                  });
                }}
              >
                Home
              </a>
              <a
                href="#resume"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => {
                  ReactGA.event({
                    category: "Navigation",
                    action: "Click",
                    label: "Resume",
                  });
                }}
              >
                Resume
              </a>
              <a
                href="#community"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => {
                  ReactGA.event({
                    category: "Navigation",
                    action: "Click",
                    label: "Community",
                  });
                }}
              >
                Community
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => {
                  ReactGA.event({
                    category: "Navigation",
                    action: "Click",
                    label: "Blog",
                  });
                }}
              >
                Blog
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => {
                  ReactGA.event({
                    category: "Navigation",
                    action: "Click",
                    label: "Pricing",
                  });
                }}
              >
                Pricing
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="hidden md:block bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  ReactGA.event({
                    category: "Header",
                    action: "Click",
                    label: "Hubungi sekarang (desktop)",
                  });
                }}
              >
                Hubungi sekarang
              </Button>

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "Home",
                    });
                  }}
                >
                  Home
                </a>
                <a
                  href="#resume"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "Resume",
                    });
                  }}
                >
                  Resume
                </a>
                <a
                  href="#community"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "Community",
                    });
                  }}
                >
                  Community
                </a>
                <a
                  href="#blog"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "Blog",
                    });
                  }}
                >
                  Blog
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => {
                    ReactGA.event({
                      category: "Navigation",
                      action: "Click",
                      label: "Pricing",
                    });
                  }}
                >
                  Pricing
                </a>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  onClick={() => {
                    ReactGA.event({
                      category: "Header",
                      action: "Click",
                      label: "Contact Now (mobile)",
                    });
                  }}
                >
                  Contact Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-8 md:py-12 lg:py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className={`transform transition-all duration-1000 text-left ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Ubah Data Menjadi Keputusan Cerdas -
                <span className="text-green-600 block mt-2">
                  Layanan Data Terintegrasi untuk Bisnis Anda
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-xl lg:mx-0">
                Analisis data, visualisasi, dan machine learning dengan data
                scientist berpengalaman untuk mengoptimalkan bisnis Anda.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg group"
                onClick={() => {
                  ReactGA.event({
                    category: "Button",
                    action: "Click",
                    label: "Mulai Sekarang",
                  });
                }}
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              className={`transform transition-all duration-1000 delay-300 flex justify-center lg:justify-end ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/static/images/hero-removebg-preview.png"
                alt="Hero Image"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">ABOUT US</h2>
          <p className="text-lg text-green-100 leading-relaxed">
            Data Service adalah platform yang menyediakan layanan pencucian dan
            visualisasi data. Kami membantu perusahaan dalam mengoptimalkan data
            secara cepat dan efisien. Layanan ini dirancang untuk membantu
            perusahaan meningkatkan berbagai aspek. Dengan teknologi terdepan.
          </p>
        </div>
      </section>

      {/* Our Client Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Client
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Student",
                description:
                  "Mahasiswa dan peneliti yang membutuhkan analisis data untuk tugas akhir dan penelitian",
              },
              {
                icon: Building2,
                title: "UMKM",
                description:
                  "Usaha kecil menengah yang ingin mengoptimalkan bisnis dengan data-driven decision",
              },
              {
                icon: User,
                title: "Personal",
                description:
                  "Individu yang memerlukan layanan analisis data untuk keperluan pribadi",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <client.icon className="w-16 h-16 mx-auto mb-4 text-green-600" />
                    <h3 className="text-xl font-semibold mb-4">
                      {client.title}
                    </h3>
                    <p className="text-gray-600">{client.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Tools Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">OUR TOOLS</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <TooltipProvider>
              {iconTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="cursor-pointer hover:scale-110 transition-transform"
                        onClick={() => {
                          ReactGA.event({
                            category: "Tools",
                            action: "Click",
                            label: tool.name,
                          });
                        }}
                      >
                        <img
                          src={`/static/images/${tool.icon}`}
                          alt={tool.name}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tool.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </motion.section>

      {/* Services Offered Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12  items-center">
            <motion.div
              className="flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/static/images/section-services.png"
                alt="services_image"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Services Offered
              </h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Us Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="mx-auto order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img src="/static/images/section-whyus.png" alt="why_us" />
            </motion.div>
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Us?</h2>
              <ul className="space-y-4">
                {whyUsPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Using Excel For Cleaning Data",
              "Using Tableau For Visualization",
              "Using Google Colab For Cleaning Data",
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-gray-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-2">
                        Order Now
                      </div>
                      <h3 className="font-semibold text-gray-900">{project}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Workflow Section */}
      <motion.section
        className="py-16 bg-green-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            <span className="text-green-600">WORKFLOW</span>
            <br />
            THIS SERVICE
          </h2>
          <div className="flex justify-center">
            <img
              src="/static/images/workflow-service.png"
              alt="workflow services"
            />
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Price
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular ? "ring-2 ring-green-600" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardContent
                    className={`p-8 text-center ${plan.popular ? "pt-12" : ""}`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-gray-900 mb-6">
                      {plan.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      } text-white`}
                      onClick={() => {
                        ReactGA.event({
                          category: "Pricing",
                          action: "Choose Plan",
                          label: plan.name,
                        });
                      }}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              Siap bawa bisnis Anda ke level berikutnya dengan data?
            </p>
            <a
              href="#"
              className="underline text-green-600 hover:text-blue-600"
              onClick={() => {
                ReactGA.event({
                  category: "Pricing",
                  action: "Click",
                  label: "Hubungi sekarang! (pricing section)",
                });
              }}
            >
              Hubungi sekarang!
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">RAHMAT FAUZI ABU BAKAR</h3>
              <p className="text-gray-400 mb-4">
                Transforming data into actionable insights for your business
                success.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 bg-gray-700 rounded hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Footer",
                        action: "Click",
                        label: `Social Media Icon ${social}`,
                      });
                    }}
                  >
                    <Star className="w-4 h-4 m-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Rahmat Fauzi Abu Bakar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
