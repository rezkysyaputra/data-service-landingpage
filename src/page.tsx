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
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";
import { FaDatabase } from "react-icons/fa";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurementId = "G-QTCCTZ1ECP";
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 font-poppins">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/70 shadow-sm sticky top-0 z-50 border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a
                href="/"
                className="text-2xl font-extrabold text-gray-900 tracking-tight"
              >
                TriByte
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {/* <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                onClick={() => {
                  ReactGA.event("navigation_click", {
                    menu: "Home",
                    device: "desktop",
                  });
                }}
              >
                Home
              </a> */}
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                onClick={() => {
                  ReactGA.event("navigation_click", {
                    menu: "About",
                    device: "desktop",
                  });
                }}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                onClick={() => {
                  ReactGA.event("navigation_click", {
                    menu: "Services",
                    device: "desktop",
                  });
                }}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                onClick={() => {
                  ReactGA.event("navigation_click", {
                    menu: "Portfolio",
                    device: "desktop",
                  });
                }}
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                onClick={() => {
                  ReactGA.event("navigation_click", {
                    menu: "Pricing",
                    device: "desktop",
                  });
                }}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                onClick={() => {
                  ReactGA.event("navigation_click", {
                    menu: "Contact",
                    device: "desktop",
                  });
                }}
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="hidden md:block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold shadow-lg rounded-full px-6 py-2 transition-all duration-200"
                onClick={() => {
                  ReactGA.event("header_contact_click", { device: "desktop" });
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
                {/* <a
                  href="#home"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                  onClick={() => {
                    ReactGA.event("navigation_click", {
                      menu: "Home",
                      device: "mobile",
                    });
                  }}
                >
                  Home
                </a> */}
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                  onClick={() => {
                    ReactGA.event("navigation_click", {
                      menu: "About",
                      device: "mobile",
                    });
                  }}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                  onClick={() => {
                    ReactGA.event("navigation_click", {
                      menu: "Services",
                      device: "mobile",
                    });
                  }}
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                  onClick={() => {
                    ReactGA.event("navigation_click", {
                      menu: "Portfolio",
                      device: "mobile",
                    });
                  }}
                >
                  Portfolio
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                  onClick={() => {
                    ReactGA.event("navigation_click", {
                      menu: "Pricing",
                      device: "mobile",
                    });
                  }}
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium tracking-wide"
                  onClick={() => {
                    ReactGA.event("navigation_click", {
                      menu: "Contact",
                      device: "mobile",
                    });
                  }}
                >
                  Contact
                </a>
                <Button
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-200 w-full"
                  onClick={() => {
                    ReactGA.event("header_contact_click", { device: "mobile" });
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
        className="py-16 bg-gradient-to-br from-green-100 via-white to-blue-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="inline-block bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full mb-4 text-xs tracking-widest uppercase">
                Jasa Data Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Ubah Data Menjadi{" "}
                <span className="text-green-600">Keputusan Cerdas</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                Layanan Data Terintegrasi untuk Bisnis Anda
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl lg:mx-0 font-medium">
                Analisis data, visualisasi, dan machine learning dengan data
                scientist berpengalaman untuk mengoptimalkan bisnis Anda.
              </p>
              <Button
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-200 group"
                onClick={() => {
                  ReactGA.event("mulai_sekarang_click", {
                    location: "hero_section",
                    device: "desktop",
                  });
                }}
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
              {/* Gambar hero dari Unsplash */}
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Data Analytics Hero"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-green-200 via-white to-blue-100 relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-green-300/30 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            {/* Gambar about dari Unsplash */}
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
              alt="Teamwork About"
              className="w-64 md:w-80 drop-shadow-2xl rounded-xl object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full mb-4 text-xs tracking-widest uppercase">
              Tentang Kami
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Data Service: Platform Layanan Data Profesional
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Data Service adalah platform yang menyediakan layanan pencucian
              dan visualisasi data. Kami membantu perusahaan dalam
              mengoptimalkan data secara cepat dan efisien. Layanan ini
              dirancang untuk membantu perusahaan meningkatkan berbagai aspek
              dengan teknologi terdepan.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center bg-white shadow px-4 py-2 rounded-lg text-green-700 font-semibold text-sm">
                <FaDatabase className="mr-2 text-green-500" /> Data Cleaning
              </span>
              <span className="inline-flex items-center bg-white shadow px-4 py-2 rounded-lg text-blue-700 font-semibold text-sm">
                <BarChart3 className="mr-2 text-blue-500" /> Visualization
              </span>
              <span className="inline-flex items-center bg-white shadow px-4 py-2 rounded-lg text-purple-700 font-semibold text-sm">
                <CheckCircle className="mr-2 text-purple-500" /> Custom Solution
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Client
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
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
                <Card className="text-center bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-green-100 shadow-md">
                        <client.icon className="w-10 h-10 text-blue-600" />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-blue-900">
                      {client.title}
                    </h3>
                    <p className="text-gray-600 font-medium flex-1">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Tools Section */}
      <motion.section
        className="py-16 bg-white bg-gradient-to-b from-blue-50/60 to-white overflow-hidden"
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
                        className="cursor-pointer hover:scale-110 transition-transform border-2 border-blue-100 rounded-xl shadow-md bg-white p-3"
                        onClick={() => {
                          ReactGA.event("tools_click", {
                            tool: tool.name,
                            device: "desktop",
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
        id="services"
        className="py-16 bg-gradient-to-br from-green-100 via-blue-50 to-blue-200 overflow-hidden"
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
              {/* Gambar services dari Unsplash */}
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                alt="Services"
                className="rounded-xl shadow-lg object-cover"
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
                  <li
                    key={index}
                    className="flex items-center space-x-3 group bg-white/80 rounded-lg shadow px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-semibold">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Us Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-purple-100 via-blue-50 to-blue-100 overflow-hidden"
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
              {/* Gambar why us dari Unsplash */}
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Why Us"
                className="rounded-xl shadow-lg object-cover"
              />
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
                  <li
                    key={index}
                    className="flex items-start space-x-3 bg-white/80 rounded-lg shadow px-4 py-3"
                  >
                    <CheckCircle
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        index % 2 === 0 ? "text-purple-500" : "text-blue-500"
                      }`}
                    />
                    <span className="text-gray-700 font-semibold">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-16 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Portfolio TriByte
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gambar portfolio dari Unsplash */}
            {[
              {
                title: "Using Excel For Cleaning Data",
                img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Using Tableau For Visualization",
                img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Using Google Colab For Cleaning Data",
                img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100 rounded-2xl bg-white/90">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover rounded-t-2xl"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-2 font-bold">
                        Order Now
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {project.title}
                      </h3>
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
        className="py-16 bg-gradient-to-br from-blue-100 via-green-50 to-green-200 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            <span className="text-green-600">WORKFLOW</span>
            <br />
            TRIBYTE DATA SERVICES
          </h2>
          <div className="flex justify-center">
            {/* Gambar workflow dari Unsplash */}
            <img
              src="/static/images/workflow.png"
              alt="Workflow Services"
              className="max-w-xl w-full"
            />
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-16 bg-white overflow-hidden"
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
                        ReactGA.event("pricing_choose_plan", {
                          plan: plan.name,
                          device: "desktop",
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

          {/* <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              Siap bawa bisnis Anda ke level berikutnya dengan data?
            </p>
            <a
              href="#"
              className="underline text-green-600 hover:text-blue-600"
              onClick={() => {
                ReactGA.event("pricing_contact_click", { device: "desktop" });
              }}
            >
              Hubungi sekarang!
            </a>
          </div> */}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-gradient-to-br from-white via-blue-50 to-green-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Ingin konsultasi atau tanya layanan? Kirim pesan ke TriByte, kami
            siap membantu Anda!
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 justify-center bg-white/80 rounded-lg shadow px-6 py-4 w-full max-w-md mx-auto transition-all">
              <Mail className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-700">Email:</span>
              <a
                href="mailto:rahmatfauzi@email.com"
                className="text-green-700 hover:text-blue-600 underline underline-offset-4 transition-colors font-medium"
                onClick={() =>
                  ReactGA.event("contact_click", { type: "email" })
                }
              >
                rahmatfauzi@email.com
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center bg-white/80 rounded-lg shadow px-6 py-4 w-full max-w-md mx-auto transition-all">
              <Phone className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-700">WhatsApp:</span>
              <a
                href="https://wa.me/6281234567890"
                className="text-green-700 hover:text-blue-600 underline underline-offset-4 transition-colors font-medium"
                onClick={() =>
                  ReactGA.event("contact_click", { type: "whatsapp" })
                }
              >
                +62 812-3456-7890
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center bg-white/80 rounded-lg shadow px-6 py-4 w-full max-w-md mx-auto transition-all">
              <Linkedin className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-gray-700">LinkedIn:</span>
              <a
                href="#"
                className="text-green-700 hover:text-blue-600 underline underline-offset-4 transition-colors font-medium"
                onClick={() =>
                  ReactGA.event("contact_click", { type: "linkedin" })
                }
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-2">TriByte</h3>
              <p className="text-gray-400 mb-4">
                Jasa data services profesional oleh{" "}
                <span className="font-semibold text-white">
                  Rahmat Fauzi Abu Bakar
                </span>
                . Data cleaning, visualisasi, integrasi, dan machine learning
                untuk bisnis dan personal.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="mailto:rahmatfauzi@email.com"
                  className="hover:text-green-400 transition-colors"
                  aria-label="Email"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1m8 0V7a4 4 0 00-8 0v5"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="hover:text-green-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.72 11.06a6.5 6.5 0 10-5.66 5.66l2.12.53a1 1 0 001.18-1.18l-.53-2.12z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {/* <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li> */}
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                Email:{" "}
                <a
                  href="mailto:rahmatfauzi@email.com"
                  className="hover:text-white"
                >
                  rahmatfauzi@email.com
                </a>
              </p>
              <p className="text-gray-400 mb-2">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6281234567890"
                  className="hover:text-white"
                >
                  +62 812-3456-7890
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TriByte by Rahmat Fauzi Abu Bakar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
