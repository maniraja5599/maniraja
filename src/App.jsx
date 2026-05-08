import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, BarChart2, Activity, Tv, ShoppingBag, Database, 
  ChevronRight, ExternalLink, Mail, Phone, Github, Linkedin, 
  MapPin, Code, LineChart, Briefcase, Cpu, FileText, Download, X, GraduationCap
} from 'lucide-react';
import html2pdf from 'html2pdf.js';
import fiftoDashboardImg from './assets/projects/fifto-dashboard.png';
import fiftoScannerImg from './assets/projects/fifto-scanner.png';
import tradingStrategyImg from './assets/projects/trading-strategy-app.png';
import liveTvAnywhereImg from './assets/projects/live-tv-anywhere.png';
import anjaneyaBorewellsImg from './assets/projects/anjaneya-borewells.png';
import eyasDrapistImg from './assets/projects/eyas-drapist-ecommerce.png';

const languageColors = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  HTML: 'bg-orange-600',
  Python: 'bg-green-500',
  CSS: 'bg-blue-600',
  PowerShell: 'bg-purple-500',
  Shell: 'bg-gray-600',
  Batchfile: 'bg-gray-500',
  PLpgSQL: 'bg-blue-400',
  Java: 'bg-red-600',
  Dockerfile: 'bg-blue-700',
  VBScript: 'bg-yellow-600',
  Hack: 'bg-cyan-500',
};

const maxBytes = 1345103; // TypeScript value

const LanguageBar = ({ language, bytes, colorClass, maxValue }) => {
  const percentage = (bytes / maxValue) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-300">{language}</span>
        <span className="text-xs text-slate-500 font-mono">{formatBytes(bytes)}</span>
      </div>
      <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const formatBytes = (bytes) => {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  } else if (bytes >= 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${bytes} B`;
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
        const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadPDF = () => {
    const resumeContent = document.getElementById('resume-content');
    if (!resumeContent) return;

    const options = {
      margin: 10,
      filename: 'ManiRaja_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(options)
      .from(resumeContent)
       .save();
   };

   const scrollTo = (id) => {
     const element = document.getElementById(id);
     if (element) {
       window.scrollTo({
         top: element.offsetTop - 80,
         behavior: 'smooth'
       });
     }
   };

   const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
  ];

   const featuredProjects = [
     {
       title: 'FiFTO Trading Dashboard',
       description: 'Real-time equity tracking platform with portfolio analytics, closed trade review, multi-timeframe charts, WebSocket live updates, and performance metrics. Built for systematic traders.',
       href: 'https://fifto-eq-trade.lovable.app/',
       image: fiftoDashboardImg,
       icon: BarChart2,
       accent: 'emerald',
       tag: 'Live Dashboard',
     },
     {
       title: 'FiFTO Scanner',
       description: 'Intelligent zone breakout detection engine with momentum analytics, customizable watchlists, instant Telegram alerts, and automated reporting for options traders.',
       href: 'https://fifto-scanner.onrender.com/',
       image: fiftoScannerImg,
       icon: Activity,
       accent: 'blue',
       tag: 'Scanner Engine',
     },
     {
       title: 'Trading Strategy App',
       description: 'Performance-driven strategy platform focused on wealth management presentation, trust-building features, live trade tracking, and educational resources for traders.',
       href: 'https://fifto.netlify.app/',
       image: tradingStrategyImg,
       icon: LineChart,
       accent: 'purple',
       tag: 'Strategy Platform',
     },
     {
       title: 'Live TV Anywhere',
       description: 'Remote-friendly live TV browsing experience with intelligent channel navigation, language/category filters, display controls, and responsive design for any device.',
       href: 'https://live-view-anywhere.lovable.app',
       image: liveTvAnywhereImg,
       icon: Tv,
       accent: 'rose',
       tag: 'Media Control',
     },
     {
       title: 'Anjaneya Borewells',
       description: 'Modern business website for borewell drilling services featuring service highlights, customer testimonials, trust signals, gallery, and optimized CTA flow for lead generation.',
       href: 'https://anjaneyaborewells.com/',
       image: anjaneyaBorewellsImg,
       icon: MapPin,
       accent: 'cyan',
       tag: 'Business Site',
     },
     {
       title: 'Eyas Drapist E-commerce',
       description: 'Premium draping-service storefront with bold minimalist branding, booking-focused CTAs, elegant dark theme, and seamless service customization experience.',
       href: 'https://eyasdrapist.shop/',
       image: eyasDrapistImg,
       icon: ShoppingBag,
       accent: 'amber',
       tag: 'E-Commerce',
     },
   ];

  const projectAccentClasses = {
    emerald: {
      border: 'hover:border-emerald-500/50',
      shadow: 'hover:shadow-[0_18px_45px_-24px_rgba(16,185,129,0.55)]',
      text: 'group-hover:text-emerald-400',
      icon: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
      badge: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
    },
    blue: {
      border: 'hover:border-blue-500/50',
      shadow: 'hover:shadow-[0_18px_45px_-24px_rgba(59,130,246,0.55)]',
      text: 'group-hover:text-blue-400',
      icon: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
      badge: 'border-blue-500/20 bg-blue-500/10 text-blue-300',
    },
    purple: {
      border: 'hover:border-purple-500/50',
      shadow: 'hover:shadow-[0_18px_45px_-24px_rgba(168,85,247,0.55)]',
      text: 'group-hover:text-purple-400',
      icon: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
      badge: 'border-purple-500/20 bg-purple-500/10 text-purple-300',
    },
    rose: {
      border: 'hover:border-rose-500/50',
      shadow: 'hover:shadow-[0_18px_45px_-24px_rgba(244,63,94,0.55)]',
      text: 'group-hover:text-rose-400',
      icon: 'border-rose-500/20 bg-rose-500/10 text-rose-400',
      badge: 'border-rose-500/20 bg-rose-500/10 text-rose-300',
    },
    cyan: {
      border: 'hover:border-cyan-500/50',
      shadow: 'hover:shadow-[0_18px_45px_-24px_rgba(6,182,212,0.55)]',
      text: 'group-hover:text-cyan-400',
      icon: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400',
      badge: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300',
    },
    amber: {
      border: 'hover:border-amber-500/50',
      shadow: 'hover:shadow-[0_18px_45px_-24px_rgba(245,158,11,0.55)]',
      text: 'group-hover:text-amber-400',
      icon: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
      badge: 'border-amber-500/20 bg-amber-500/10 text-amber-300',
    },
  };

  const supportingProjects = [
    {
      title: 'Borewell Mgmt System',
      description: 'Built pre-AI with Google Sheets + AppSheet for field billing, operations tracking, and workflow management.',
      href: 'https://icewireless.co.in/',
      icon: Database,
      accent: 'indigo',
      badge: 'Legacy System',
    },
    {
      title: 'Daily Trading Automation',
      description: 'Local tools for token generation, math-based entry calculations, and real-time Telegram alert bots.',
      icon: Cpu,
      accent: 'emerald',
      badge: 'Local Execution',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 relative">
      {/* Animated Trading Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated wave effect */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent opacity-50 blur-3xl animate-pulse"></div>
        
        {/* Candlestick visualization */}
        <div className="absolute top-32 right-20 w-80 h-72 opacity-20">
          <svg viewBox="0 0 320 280" className="w-full h-full">
            {/* Green candlestick */}
            <g>
              <line x1="20" y1="120" x2="20" y2="60" stroke="#10b981" strokeWidth="6" />
              <rect x="12" y="80" width="16" height="40" fill="#10b981" />
            </g>
            {/* Cyan candlestick */}
            <g>
              <line x1="60" y1="140" x2="60" y2="50" stroke="#06b6d4" strokeWidth="6" />
              <rect x="52" y="75" width="16" height="65" fill="#06b6d4" />
            </g>
            {/* Blue candlestick */}
            <g>
              <line x1="100" y1="110" x2="100" y2="40" stroke="#3b82f6" strokeWidth="6" />
              <rect x="92" y="65" width="16" height="45" fill="#3b82f6" />
            </g>
            {/* Green candlestick */}
            <g>
              <line x1="140" y1="150" x2="140" y2="55" stroke="#10b981" strokeWidth="6" />
              <rect x="132" y="90" width="16" height="60" fill="#10b981" />
            </g>
            {/* Cyan candlestick */}
            <g>
              <line x1="180" y1="100" x2="180" y2="45" stroke="#06b6d4" strokeWidth="6" />
              <rect x="172" y="65" width="16" height="35" fill="#06b6d4" />
            </g>
            {/* Blue candlestick */}
            <g>
              <line x1="220" y1="130" x2="220" y2="35" stroke="#3b82f6" strokeWidth="6" />
              <rect x="212" y="70" width="16" height="60" fill="#3b82f6" />
            </g>
            {/* Green candlestick */}
            <g>
              <line x1="260" y1="90" x2="260" y2="30" stroke="#10b981" strokeWidth="6" />
              <rect x="252" y="55" width="16" height="35" fill="#10b981" />
            </g>
            {/* Trend line */}
            <path d="M 15 130 Q 80 90 160 70 T 300 40" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="4,4" />
          </svg>
        </div>

        {/* Wavy decoration - left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Wavy decoration - right bottom */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 print:hidden ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-white">
            Mani<span className="text-emerald-400">Raja.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden shadow-xl">
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollTo(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-lg transition-colors hover:bg-slate-800 ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-300'}`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollTo('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-2 px-4 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
          
          {/* Desktop Contact Button */}
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-5 py-2 text-sm font-semibold rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-24 print:hidden">
        
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative isolate min-h-[85vh] overflow-hidden rounded-[1.75rem] border border-cyan-950/40 bg-slate-950/70 px-5 py-14 sm:rounded-[2rem] sm:px-8 sm:py-16 md:px-14 md:py-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.96)_40%,rgba(3,19,31,0.92)_72%,rgba(4,32,43,0.88)_100%)]"></div>
          <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_78%_28%,rgba(34,211,238,0.14),transparent_0%,transparent_48%)] sm:w-2/3"></div>
          <div className="absolute -right-24 top-0 h-full w-72 bg-cyan-400/10 blur-3xl sm:-right-16 sm:w-[28rem]"></div>
          <div className="absolute left-0 top-1/3 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl sm:h-56 sm:w-56"></div>

          <svg
            viewBox="0 0 900 520"
            aria-hidden="true"
            className="chart-drift absolute bottom-[-2rem] right-[-12rem] h-[56%] w-[210%] min-w-[520px] opacity-35 sm:bottom-[-4rem] sm:right-[-10rem] sm:h-[68%] sm:w-[160%] sm:opacity-45 md:right-[-8%] md:top-1/2 md:bottom-auto md:h-[120%] md:w-[72%] md:min-w-[620px] md:-translate-y-1/2 md:opacity-60"
          >
            <path
              d="M0 335 C130 250 250 180 390 195 C515 208 630 288 760 300 C815 305 860 304 900 298 L900 520 L0 520 Z"
              fill="rgba(56,189,248,0.08)"
              className="chart-fill"
            />
            <path
              d="M-20 290 C95 270 175 314 258 350 C326 379 403 378 470 330 C560 264 628 194 718 187 C801 181 857 205 935 130"
              fill="none"
              stroke="rgba(34,211,238,0.14)"
              strokeWidth="18"
              strokeLinecap="round"
              className="chart-line chart-line-soft"
              pathLength="1200"
              strokeDasharray="1200"
            />
            <path
              d="M-20 290 C95 270 175 314 258 350 C326 379 403 378 470 330 C560 264 628 194 718 187 C801 181 857 205 935 130"
              fill="none"
              stroke="rgba(125,211,252,0.32)"
              strokeWidth="6"
              strokeLinecap="round"
              className="chart-line chart-line-main"
              pathLength="1200"
              strokeDasharray="1200"
              strokeDashoffset="1200"
            >
              <animate attributeName="stroke-dashoffset" values="1200;0;0" keyTimes="0;0.72;1" dur="14s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;1;0.8;0.35" dur="14s" begin="0s" repeatCount="indefinite" />
            </path>

            <g fill="rgba(45,212,191,0.22)" stroke="rgba(45,212,191,0.32)" strokeWidth="8" strokeLinecap="round">
              <g opacity="0.75">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -14; 0 3; 0 0" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.72;1;0.72" dur="7s" begin="0s" repeatCount="indefinite" />
                <line x1="255" y1="430" x2="255" y2="320">
                  <animate attributeName="y1" values="430;422;430" dur="7s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="320;312;320" dur="7s" begin="0s" repeatCount="indefinite" />
                </line>
                <rect x="238" y="355" width="34" height="60" rx="12">
                  <animate attributeName="y" values="355;344;362;355" dur="7s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="height" values="60;78;48;60" dur="7s" begin="0s" repeatCount="indefinite" />
                </rect>
              </g>
              <g opacity="0.75">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -16; 0 3; 0 0" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.72;1;0.72" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
                <line x1="345" y1="360" x2="345" y2="250">
                  <animate attributeName="y1" values="360;352;360" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="250;240;250" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
                </line>
                <rect x="328" y="300" width="34" height="90" rx="12">
                  <animate attributeName="y" values="300;286;306;294;300" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
                  <animate attributeName="height" values="90;112;76;96;90" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
                </rect>
              </g>
              <g opacity="0.75">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -12; 0 4; 0 0" dur="6.8s" begin="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.72;1;0.72" dur="6.8s" begin="2.4s" repeatCount="indefinite" />
                <line x1="430" y1="385" x2="430" y2="290">
                  <animate attributeName="y1" values="385;378;385" dur="6.8s" begin="2.4s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="290;282;290" dur="6.8s" begin="2.4s" repeatCount="indefinite" />
                </line>
                <rect x="413" y="338" width="34" height="55" rx="12">
                  <animate attributeName="y" values="338;330;344;336;338" dur="6.8s" begin="2.4s" repeatCount="indefinite" />
                  <animate attributeName="height" values="55;68;46;58;55" dur="6.8s" begin="2.4s" repeatCount="indefinite" />
                </rect>
              </g>
              <g opacity="0.75">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 2; 0 0" dur="7.8s" begin="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.72;1;0.72" dur="7.8s" begin="3.2s" repeatCount="indefinite" />
                <line x1="590" y1="332" x2="590" y2="220">
                  <animate attributeName="y1" values="332;324;332" dur="7.8s" begin="3.2s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="220;210;220" dur="7.8s" begin="3.2s" repeatCount="indefinite" />
                </line>
                <rect x="573" y="275" width="34" height="82" rx="12">
                  <animate attributeName="y" values="275;260;284;270;275" dur="7.8s" begin="3.2s" repeatCount="indefinite" />
                  <animate attributeName="height" values="82;104;66;88;82" dur="7.8s" begin="3.2s" repeatCount="indefinite" />
                </rect>
              </g>
              <g opacity="0.75">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -13; 0 5; 0 0" dur="7.2s" begin="4.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.72;1;0.72" dur="7.2s" begin="4.1s" repeatCount="indefinite" />
                <line x1="700" y1="320" x2="700" y2="210">
                  <animate attributeName="y1" values="320;313;320" dur="7.2s" begin="4.1s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="210;201;210" dur="7.2s" begin="4.1s" repeatCount="indefinite" />
                </line>
                <rect x="683" y="248" width="34" height="76" rx="12">
                  <animate attributeName="y" values="248;236;255;244;248" dur="7.2s" begin="4.1s" repeatCount="indefinite" />
                  <animate attributeName="height" values="76;95;62;82;76" dur="7.2s" begin="4.1s" repeatCount="indefinite" />
                </rect>
              </g>
            </g>

            <g fill="rgba(129,140,248,0.18)" stroke="rgba(167,139,250,0.28)" strokeWidth="8" strokeLinecap="round">
              <g opacity="0.75">
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 4; 0 0" dur="7.1s" begin="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.72;1;0.72" dur="7.1s" begin="1.8s" repeatCount="indefinite" />
                <line x1="515" y1="334" x2="515" y2="205">
                  <animate attributeName="y1" values="334;326;334" dur="7.1s" begin="1.8s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="205;195;205" dur="7.1s" begin="1.8s" repeatCount="indefinite" />
                </line>
                <rect x="498" y="262" width="34" height="84" rx="12">
                  <animate attributeName="y" values="262;248;272;256;262" dur="7.1s" begin="1.8s" repeatCount="indefinite" />
                  <animate attributeName="height" values="84;106;70;90;84" dur="7.1s" begin="1.8s" repeatCount="indefinite" />
                </rect>
              </g>
            </g>
          </svg>

          <div className="relative z-10 flex min-h-[calc(85vh-7rem)] flex-col items-start gap-10 sm:min-h-[calc(85vh-8rem)] sm:items-center md:min-h-[calc(85vh-10rem)] lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-xs font-medium text-emerald-400 animate-pulse">
                <Activity size={12} />
                <span>Available for new opportunities</span>
              </div>

               <div className="space-y-4">
                 <div className="relative inline-block">
                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/30 via-cyan-400/30 to-blue-400/30 blur-xl"></div>
                   <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter leading-none bg-gradient-to-r from-emerald-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                     MANIRAJA NACHIMUTHU
                   </h1>
                 </div>
                 <div className="space-y-2">
                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400">
                     Trading System Developer
                   </h2>
                   <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400">
                     Python | UI/UX | Automation Specialist
                   </h3>
                 </div>
               </div>

               <p className="max-w-xl border-l-2 border-emerald-500/80 pl-4 py-2 text-base italic font-medium leading-relaxed text-slate-300 sm:pl-6 sm:text-lg md:text-xl">
                 "Building intelligent trading systems & real-time applications"
               </p>

               {/* Additional Details */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                   <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-0.5">
                     <BarChart2 size={18} />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-white mb-1">Real-Time Trading</h4>
                     <p className="text-xs text-slate-400">Live dashboards & automated systems</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-0.5">
                     <Activity size={18} />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-white mb-1">Smart Automation</h4>
                     <p className="text-xs text-slate-400">Math-based entry & alert systems</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                   <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 mt-0.5">
                     <Database size={18} />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-white mb-1">API Integrations</h4>
                     <p className="text-xs text-slate-400">Seamless platform connections</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                   <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 mt-0.5">
                     <LineChart size={18} />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-white mb-1">Portfolio Analytics</h4>
                     <p className="text-xs text-slate-400">Performance tracking & insights</p>
                   </div>
                 </div>
               </div>

               <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="justify-center px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_24px_-6px_rgba(16,185,129,0.55)] flex items-center gap-2 group sm:px-8 sm:py-4"
                >
                  View Projects
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="justify-center px-6 py-3.5 rounded-xl bg-slate-900/75 border border-slate-700 text-white font-bold hover:border-slate-500 transition-all sm:px-8 sm:py-4"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => setShowResume(true)}
                  className="justify-center px-6 py-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-all flex items-center gap-2 sm:px-8 sm:py-4"
                >
                  <FileText size={18} />
                  Resume
                </button>
              </div>
            </div>

            <div className="w-full max-w-sm shrink-0">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-950/80 shadow-[0_30px_80px_-38px_rgba(14,165,233,0.45)]">
                <img
                  src="/profile.png"
                  alt="Mani Raja"
                  className="aspect-[4/5] w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = '/profile-placeholder.svg';
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-5 py-4">
                  <p className="text-sm text-slate-300">Hi, I’m Mani Raja — Trading System Developer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><Terminal size={24} /></div>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="max-w-4xl">
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                My journey into system development is deeply rooted in practical problem-solving. For over 5 years, I managed operations for my Borewell business utilizing Google Sheets, where I independently architected a comprehensive <strong className="text-emerald-400">Borewell Management System</strong> before modern AI tools became mainstream.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-5 bg-gradient-to-br from-emerald-900/30 to-transparent border border-emerald-500/20 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Code className="text-emerald-400" size={20} />
                    Core Expertise
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• <strong className="text-white">Python Development:</strong> Trading algorithms, automation scripts, API integrations</li>
                    <li>• <strong className="text-white">Real-Time Systems:</strong> WebSocket connections, live dashboards, alert bots</li>
                    <li>• <strong className="text-white">UI/UX Design:</strong> Intuitive interfaces, responsive layouts, user-centric design</li>
                    <li>• <strong className="text-white">Trading Logic:</strong> Options strategies, VWAP, momentum, math-based entries</li>
                  </ul>
                </div>

                <div className="p-5 bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/20 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <LineChart className="text-blue-400" size={20} />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Built <strong className="text-white">FiFTO Trading Dashboard</strong> - Comprehensive equity tracking platform</li>
                    <li>• Developed <strong className="text-white">FiFTO Scanner</strong> - Zone breakout detection engine</li>
                    <li>• Created <strong className="text-white">Telegram Bot Network</strong> - Real-time trade alerts & automation</li>
                    <li>• Architected <strong className="text-white">Borewell Management System</strong> - Full-stack business solution</li>
                  </ul>
                </div>
              </div>

              <p className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl relative overflow-hidden">
                <span className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500"></span>
                This hands-on experience forged my strong <strong className="text-emerald-400">real-world problem-solving</strong> and <strong className="text-cyan-400">system design</strong> skills. Today, I channel that same innovative spirit into building <strong className="text-white">advanced trading systems, automation tools, and modern web dashboards</strong> that bridge finance and technology.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Algorithmic Trading', 'System Architecture', 'Real-Time Data', 'API Integration', 'Dashboard Design', 'TradingView Pinescript', 'WebSocket Development', 'Telegram Bots', 'React/Next.js', 'Python Automation'].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-800/70 text-slate-300 rounded-md text-xs border border-slate-700 hover:border-emerald-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-slate-800/50">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><Code size={24} /></div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <p className="text-slate-400 max-w-2xl">Hover over the cards to interact. A collection of trading systems, business solutions, and automation scripts.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              const accent = projectAccentClasses[project.accent];

              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 ${accent.border} ${accent.shadow}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-800">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-slate-950/5"></div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <div className={`rounded-xl border p-2.5 backdrop-blur-sm ${accent.icon}`}>
                        <Icon size={18} />
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em] backdrop-blur-sm ${accent.badge}`}>
                        {project.tag}
                      </span>
                    </div>
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/70 p-2 text-slate-300 backdrop-blur-sm transition-colors group-hover:border-white/20">
                      <ExternalLink size={16} />
                    </div>
                  </div>

                  <div className="space-y-3 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-xl font-bold text-white transition-colors ${accent.text}`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-sm font-medium text-slate-300">
                      <span>View Project</span>
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {supportingProjects.map((project) => {
              const Icon = project.icon;
              const accentStyles = project.accent === 'indigo'
                ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400'
                : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400';
              const hoverStyles = project.accent === 'indigo'
                ? 'hover:border-indigo-500/50 hover:shadow-[0_18px_45px_-24px_rgba(99,102,241,0.55)]'
                : 'hover:border-emerald-500/50 hover:shadow-[0_18px_45px_-24px_rgba(16,185,129,0.55)]';

              const cardContent = (
                <div className={`group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-2 ${hoverStyles}`}>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className={`rounded-xl border p-3 ${accentStyles}`}>
                      <Icon size={22} />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${accentStyles}`}>
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                </div>
              );

              return project.href ? (
                <a key={project.title} href={project.href} target="_blank" rel="noreferrer">
                  {cardContent}
                </a>
              ) : (
                <div key={project.title}>{cardContent}</div>
              );
            })}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><Code size={24} /></div>
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal size={20} className="text-emerald-400"/> Technical
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pine Script', 'API Integration', 'HTML', 'CSS', 'AppSheet', 'Google Sheets', 'WebSocket'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <LineChart size={20} className="text-blue-400"/> Trading logic
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Options Trading', 'Supply & Demand', 'VWAP', 'Momentum', 'Math-based Entries', 'Algo Automation'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Database size={20} className="text-purple-400"/> Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TradingView', 'MetaTrader 5', 'VS Code', 'GitHub', 'Telegram Bots', 'Render', 'Netlify'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700 hover:border-purple-500/50 hover:text-purple-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Coding Activity Chart */}
          <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub Coding Activity</h3>
                  <p className="text-sm text-slate-400">Real-time language distribution from public repositories</p>
                </div>
              </div>
              <a 
                href="https://github.com/maniraja5599" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">Languages by Code Volume</h4>
                  <span className="text-xs text-slate-500 font-mono">Total: 30 repos</span>
                </div>
                <div className="space-y-3">
                  {Object.entries({
                    TypeScript: 1345103,
                    JavaScript: 285783,
                    HTML: 145829,
                    Python: 94026,
                    CSS: 85699,
                    PowerShell: 27612,
                    Shell: 11219,
                    Batchfile: 7514,
                    PLpgSQL: 2995,
                    Java: 1298,
                    Dockerfile: 1162,
                    VBScript: 483,
                    Hack: 64
                  })
                    .sort(([,a], [,b]) => b - a)
                    .map(([lang, bytes]) => (
                      <LanguageBar 
                        key={lang}
                        language={lang}
                        bytes={bytes}
                        colorClass={languageColors[lang] || 'bg-gray-500'}
                        maxValue={1345103}
                      />
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-4">GitHub Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                    <div className="text-3xl font-black text-white mb-1">30</div>
                    <div className="text-sm text-slate-400">Public Repositories</div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                    <div className="text-3xl font-black text-white mb-1">0</div>
                    <div className="text-sm text-slate-400">Followers</div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                    <div className="text-3xl font-black text-emerald-400 mb-1">2016</div>
                    <div className="text-sm text-slate-400">Joined GitHub</div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                    <div className="text-3xl font-black text-blue-400 mb-1">TypeScript</div>
                    <div className="text-sm text-slate-400">Primary Language</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                  <h5 className="text-sm font-bold text-white mb-3">Recent Activity</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Updated <strong className="text-slate-300">maniraja</strong> portfolio (May 2026)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>Pushed to <strong className="text-slate-300">FiFTO-WOP-NIFTY-TS</strong> (Apr 2026)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span>Pushed to <strong className="text-slate-300">FiFTO-Legends-NIFTY</strong> (Apr 2026)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><Briefcase size={24} /></div>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-emerald-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Owner & Founder</h3>
                <span className="text-emerald-400 font-mono text-sm">2019 - Present</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4">Anjaneya Borewells, Namakkal</h4>
              <p className="text-slate-400 leading-relaxed">
                Operating the latest borewell drilling services in Namakkal. Independently architected and implemented a comprehensive Borewell Management System (pre-AI era) using Google Sheets and AppSheet to streamline operations, track metrics, and generate instant on-field billing.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-blue-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Independent System Developer</h3>
                <span className="text-blue-400 font-mono text-sm">Ongoing</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4">Trading Dashboards & Automation</h4>
              <p className="text-slate-400 leading-relaxed mb-3">
                Building highly functional, real-time trading systems and dashboards. Creating robust integrations across platforms.
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
                <li>Automated daily token generation for APIs.</li>
                <li>Engineered mathematical calculation-based entry algorithms.</li>
                <li>Developed real-time Telegram alert bots for immediate trade signaling.</li>
              </ul>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-purple-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Founder & Lead Educator</h3>
                <span className="text-purple-400 font-mono text-sm">Ongoing</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4">FiFTO Trading Community</h4>
              <p className="text-slate-400 leading-relaxed">
                Running a specialized group trading activity named "FiFTO". It operates on an educational PMS (Portfolio Management Service) model, providing structured mentorship, real-time market analysis, and educating members on systematic, math-based trading strategies.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-amber-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Borewell Manager</h3>
                <span className="text-amber-400 font-mono text-sm">2016 - 2018</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4">Operations & Management</h4>
              <p className="text-slate-400 leading-relaxed">
                Managed end-to-end field logistics, operations, and client management for borewell drilling services. This hands-on experience laid the groundwork for successfully launching my own borewell business.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-slate-600"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white text-opacity-70">Networking Engineer</h3>
                <span className="text-slate-500 font-mono text-sm">2015 - 2016 (6 months)</span>
              </div>
              <h4 className="text-lg text-slate-500 mb-4">ICE Networking</h4>
              <p className="text-slate-500 leading-relaxed">
                Built foundational technical skills by working on real-time systems, initial dashboard concepts, and internal automation tools. Contributed to building structured business solutions prior to modern AI adoption.
              </p>
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><GraduationCap size={24} /></div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-950 border-4 border-emerald-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">B.Tech Information Technology</h3>
                <span className="text-emerald-400 font-mono text-sm">2010 – 2014</span>
              </div>
              <h4 className="text-lg text-slate-400">Adhiyamaan College Of Engineering</h4>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-12 border-t border-slate-800/50 pb-24">
          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-cyan-950/40 bg-slate-950/70 px-5 py-14 sm:rounded-[2rem] sm:px-8 sm:py-16 md:px-14 md:py-20 max-w-4xl mx-auto shadow-2xl shadow-emerald-900/10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.96)_40%,rgba(3,19,31,0.92)_72%,rgba(4,32,43,0.88)_100%)]"></div>
            <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_78%_28%,rgba(34,211,238,0.14),transparent_0%,transparent_48%)] sm:w-2/3"></div>
            <div className="absolute -right-24 top-0 h-full w-72 bg-cyan-400/10 blur-3xl sm:-right-16 sm:w-[28rem]"></div>
            <div className="absolute left-0 top-1/3 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl sm:h-56 sm:w-56"></div>

            <div className="relative z-10 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's Build Something Great</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto text-base">
                I'm always excited to collaborate on innovative trading systems, automation solutions, or web applications. Whether you need a custom algorithmic trading bot, a real-time dashboard, or a full-stack web platform, let's discuss how we can work together.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <a href="mailto:manirajankg@gmail.com" className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 backdrop-blur-sm">
                <Mail className="mb-3 text-emerald-400 group-hover:text-emerald-300" size={28} />
                <span className="font-semibold text-base text-slate-300 group-hover:text-emerald-300 mb-1">Email Me</span>
                <span className="text-xs text-slate-500 group-hover:text-emerald-500 text-center">manirajankg@gmail.com</span>
              </a>

              <a href="tel:+919159036301" className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-blue-500/10 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm">
                <Phone className="mb-3 text-blue-400 group-hover:text-blue-300" size={28} />
                <span className="font-semibold text-base text-slate-300 group-hover:text-blue-300 mb-1">Call Me</span>
                <span className="text-xs text-slate-500 group-hover:text-blue-500">+91-91590 36301</span>
              </a>

              <a href="https://github.com/maniraja5599" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-purple-500/10 border border-slate-700 hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
                <Github className="mb-3 text-purple-400 group-hover:text-purple-300" size={28} />
                <span className="font-semibold text-base text-slate-300 group-hover:text-purple-300 mb-1">GitHub</span>
                <span className="text-xs text-slate-500 group-hover:text-purple-500">@maniraja5599</span>
              </a>
            </div>

            <div className="relative z-10 flex justify-center gap-5 pt-6 border-t border-slate-800/50">
              <a href="https://github.com/maniraja5599" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-emerald-500/10 rounded-full text-[#f0f0f0] hover:text-emerald-400 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm" title="GitHub Profile">
                <Github size={22} />
              </a>
              <a href="https://in.linkedin.com/in/maniraja5599" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-blue-600/10 rounded-full text-[#0077b5] hover:text-blue-400 border border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm" title="LinkedIn Profile">
                <Linkedin size={22} />
              </a>
              <a href="https://t.me/maniraja5599" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/10 rounded-full text-cyan-400 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm" title="Telegram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-900 text-center text-slate-500 text-sm print:hidden">
        <p>© {new Date().getFullYear()} Maniraja Nachimuthu. Trading System Developer & Automation Specialist.</p>
      </footer>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm print:relative print:inset-auto print:bg-white print:p-0">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-none print:bg-white print:text-black">
            
            {/* Modal Header - Hidden when printing */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md print:hidden">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="text-emerald-400" /> My Resume
              </h2>
              <div className="flex gap-3">
                <button 
                  onClick={downloadPDF}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors flex items-center gap-2 text-sm font-bold"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>
                <button 
                  onClick={() => setShowResume(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-rose-400 hover:bg-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            

             {/* Resume Content - Printable Area */}
             <div id="resume-content" className="p-6 sm:p-10 overflow-y-auto text-slate-300 space-y-8 bg-white text-black print:overflow-visible print:p-0">
                
                 {/* Resume Header */}
                 <div className="border-b border-gray-300 pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                   <img 
                     src="/profile.png" 
                     alt="Maniraja Nachimuthu" 
                     className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border-4 border-gray-300 shadow-lg"
                     onError={(e) => {
                       e.currentTarget.onerror = null;
                       e.currentTarget.src = '/profile-placeholder.svg';
                     }}
                   />
                   <div className="text-center sm:text-left flex-1">
                     <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-2">MANIRAJA NACHIMUTHU</h1>
                     <p className="text-emerald-600 font-bold text-base mb-4">Trading System Developer | Python | UI/UX | Automation Specialist</p>
                     <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-600">
                       <span>📞 +91-91590 36301</span>
                       <span>✉️ manirajankg@gmail.com</span>
                       <span>📍 Namakkal, Tamil Nadu, India</span>
                     </div>
                   </div>
                 </div>

                 {/* Summary */}
                 <section className="bg-gray-50 p-5 rounded-lg border-l-4 border-emerald-500">
                   <h2 className="text-xl font-bold text-black mb-3">PROFESSIONAL SUMMARY</h2>
                   <p className="leading-relaxed text-gray-700">
                     Innovative and solutions-driven <strong className="text-emerald-600">Trading System Developer</strong> with 5+ years of hands-on experience in system architecture, real-time automation, and business operations management. Self-taught pioneer who independently designed and deployed a comprehensive Borewell Management System using Google Sheets and AppSheet before AI adoption, demonstrating exceptional problem-solving and system design capabilities.
                   </p>
                   <p className="leading-relaxed text-gray-700 mt-3">
                     Currently specializing in developing <strong className="text-blue-600">advanced algorithmic trading systems</strong>, real-time web dashboards with WebSocket integrations, API connectors for multiple platforms (TradingView, MetaTrader 5), and automated operational tools. Founder of <strong className="text-purple-600">FiFTO Trading Community</strong>, an educational Portfolio Management Service providing structured mentorship and systematic trading strategies.
                   </p>
                 </section>

                 {/* Skills */}
                 <section>
                   <h2 className="text-xl font-bold text-black border-l-4 border-emerald-500 pl-3 mb-4">TECHNICAL SKILLS</h2>
                   
                   <div className="mb-4">
                     <h3 className="text-lg font-semibold text-black mb-2">Programming & Scripting</h3>
                     <div className="flex flex-wrap gap-2">
                       {['Python (Advanced)', 'Pine Script (TradingView)', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'SQL', 'Bash/Shell'].map((skill, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md text-sm">{skill}</span>
                       ))}
                     </div>
                   </div>

                   <div className="mb-4">
                     <h3 className="text-lg font-semibold text-black mb-2">Trading Systems & Strategies</h3>
                     <div className="flex flex-wrap gap-2">
                       {['Algorithmic Trading', 'Options Trading', 'VWAP & Momentum', 'Supply & Demand Zones', 'Math-Based Entries', 'Real-Time Alerts', 'Telegram Bot Integration', 'WebSocket APIs'].map((skill, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-md text-sm">{skill}</span>
                       ))}
                     </div>
                   </div>

                   <div className="mb-4">
                     <h3 className="text-lg font-semibold text-black mb-2">Tools & Platforms</h3>
                     <div className="flex flex-wrap gap-2">
                       {['TradingView', 'MetaTrader 5', 'React/Next.js', 'Git/GitHub', 'VS Code', 'Render', 'Netlify', 'Vercel', 'Google Sheets/AppSheet', 'Postman'].map((skill, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-purple-50 text-purple-800 border border-purple-200 rounded-md text-sm">{skill}</span>
                       ))}
                     </div>
                   </div>

                   <div className="mb-4">
                     <h3 className="text-lg font-semibold text-black mb-2">Core Competencies</h3>
                     <div className="flex flex-wrap gap-2">
                       {['System Architecture', 'API Integration', 'Real-Time Data Processing', 'Dashboard Design', 'Automation', 'Problem-Solving', 'Full-Stack Development', 'UI/UX Design'].map((skill, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-md text-sm">{skill}</span>
                       ))}
                     </div>
                   </div>
                 </section>

                 {/* Experience */}
                 <section>
                   <h2 className="text-xl font-bold text-black border-l-4 border-emerald-500 pl-3 mb-4">PROFESSIONAL EXPERIENCE</h2>
                   
                   <div className="space-y-6">
                     <div>
                       <div className="flex justify-between items-start mb-1">
                         <h3 className="text-lg font-bold text-black">Independent System Developer <span className="text-emerald-600 text-sm font-normal">| Trading Dashboards & Automation</span></h3>
                         <span className="text-sm font-mono text-gray-500">2020 – Present</span>
                       </div>
                       <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                         <li>Architect and build highly functional, real-time trading dashboards with live data visualization and multi-timeframe analysis.</li>
                         <li>Engineered robust API integrations connecting TradingView, MetaTrader 5, and custom trading platforms for seamless data flow.</li>
                         <li>Automate daily token generation, execute math-based entry algorithms, and deploy real-time Telegram alert bots for instant trade signaling.</li>
                         <li>Developed <strong>FiFTO Trading Dashboard</strong> - comprehensive equity tracking platform with portfolio analytics, closed trade review, and performance metrics.</li>
                         <li>Created <strong>FiFTO Scanner</strong> - zone breakout detection engine with momentum analytics, watchlists, and automated reporting systems.</li>
                       </ul>
                     </div>

                     <div>
                       <div className="flex justify-between items-start mb-1">
                         <h3 className="text-lg font-bold text-black">Founder & Lead Educator <span className="text-emerald-600 text-sm font-normal">| FiFTO Trading Community</span></h3>
                         <span className="text-sm font-mono text-gray-500">2019 – Present</span>
                       </div>
                       <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                         <li>Lead an educational Portfolio Management Service (PMS) model named "FiFTO" with 100+ active members.</li>
                         <li>Provide structured mentorship, real-time market analysis, and educate community members on systematic, mathematics-based trading strategies.</li>
                        <li>Conduct regular webinars, live trading sessions, and strategy reviews to foster a learning-focused trading environment.</li>
                       </ul>
                     </div>

                     <div>
                       <div className="flex justify-between items-start mb-1">
                         <h3 className="text-lg font-bold text-black">Owner & Founder <span className="text-emerald-600 text-sm font-normal">| Anjaneya Borewells, Namakkal</span></h3>
                         <span className="text-sm font-mono text-gray-500">2019 – Present</span>
                       </div>
                       <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                         <li>Operate modern borewell drilling services across Namakkal district with a focus on precision and reliability.</li>
                         <li>Independently designed and deployed a full-scale <strong>Borewell Management System</strong> using Google Sheets + AppSheet with features: real-time billing, operations tracking, client management, inventory control, and automated reports.</li>
                         <li>System reduced administrative overhead by 60% and enabled complete field-to-office data synchronization.</li>
                       </ul>
                     </div>

                     <div>
                       <div className="flex justify-between items-start mb-1">
                         <h3 className="text-lg font-bold text-black">Borewell Manager <span className="text-emerald-600 text-sm font-normal">| Operations & Management</span></h3>
                         <span className="text-sm font-mono text-gray-500">2016 – 2018</span>
                       </div>
                       <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                         <li>Managed end-to-end field logistics, crew operations, equipment maintenance, and client relationships for borewell drilling services.</li>
                         <li>This hands-on experience laid the groundwork for successfully launching my own borewell business and understanding operational workflows.</li>
                       </ul>
                     </div>

                     <div>
                       <div className="flex justify-between items-start mb-1">
                         <h3 className="text-lg font-bold text-black">Networking Engineer <span className="text-emerald-600 text-sm font-normal">| ICE Networking</span></h3>
                         <span className="text-sm font-mono text-gray-500">2015 – 2016 (6 Months)</span>
                       </div>
                       <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2 text-sm">
                         <li>Built foundational technical skills by configuring real-time systems, designing initial dashboard concepts, and implementing internal automation tools.</li>
                         <li>Worked with network infrastructure and data systems, gaining exposure to operational technology that later influenced trading system design.</li>
                       </ul>
                     </div>
                   </div>
                 </section>

                 {/* Education */}
                 <section>
                   <h2 className="text-xl font-bold text-black border-l-4 border-emerald-500 pl-3 mb-4">EDUCATION</h2>
                   <div>
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-black">B.Tech Information Technology</h3>
                       <span className="text-sm font-mono text-gray-500">2010 – 2014</span>
                     </div>
                     <p className="text-sm text-gray-700">Adhiyamaan College Of Engineering</p>
                   </div>
                 </section>

                 {/* Projects */}
                 <section className="print:break-inside-avoid">
                   <h2 className="text-xl font-bold text-black border-l-4 border-emerald-500 pl-3 mb-4">FEATURED PROJECTS</h2>
                   <div className="space-y-4 text-sm">
                     <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                       <div className="flex justify-between items-start mb-1">
                         <strong className="text-black text-base">FiFTO Trading Dashboard</strong>
                         <span className="text-emerald-600 text-xs font-normal uppercase tracking-wide">Live Dashboard</span>
                       </div>
                       <p className="text-gray-700 mb-2">Comprehensive equity trading dashboard with real-time portfolio tracking, closed trade review, performance analytics, and multi-timeframe analysis. Features live WebSocket connections for instant market data updates.</p>
                       <span className="text-emerald-600 text-xs">https://fifto-eq-trade.lovable.app/</span>
                     </div>

                     <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                       <div className="flex justify-between items-start mb-1">
                         <strong className="text-black text-base">FiFTO Scanner</strong>
                         <span className="text-blue-600 text-xs font-normal uppercase tracking-wide">Detection Engine</span>
                       </div>
                       <p className="text-gray-700 mb-2">Zone breakout detection engine with momentum analytics, customizable watchlists, and instant Telegram-based reporting. Identifies potential trading opportunities based on supply/demand zones.</p>
                       <span className="text-blue-600 text-xs">https://fifto-scanner.onrender.com/</span>
                     </div>

                     <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                       <div className="flex justify-between items-start mb-1">
                         <strong className="text-black text-base">Trading Strategy App</strong>
                         <span className="text-purple-600 text-xs font-normal uppercase tracking-wide">Strategy Platform</span>
                       </div>
                       <p className="text-gray-700 mb-2">Performance-driven strategy platform focused on wealth management presentation, trust-building features, and live trade tracking for educational purposes.</p>
                       <span className="text-purple-600 text-xs">https://fifto.netlify.app/</span>
                     </div>

                     <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                       <div className="flex justify-between items-start mb-1">
                         <strong className="text-black text-base">Live TV Anywhere</strong>
                         <span className="text-cyan-600 text-xs font-normal uppercase tracking-wide">Media Control</span>
                       </div>
                       <p className="text-gray-700 mb-2">Remote-friendly live TV browsing experience with channel navigation, language filters, and display control capabilities for streaming platforms.</p>
                       <span className="text-cyan-600 text-xs">https://live-view-anywhere.lovable.app</span>
                     </div>

                     <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                       <div className="flex justify-between items-start mb-1">
                         <strong className="text-black text-base">Anjaneya Borewells</strong>
                         <span className="text-amber-600 text-xs font-normal uppercase tracking-wide">Business Website</span>
                       </div>
                       <p className="text-gray-700 mb-2">Modern business website for borewell drilling services featuring service highlights, customer testimonials, trust signals, and optimized conversion-focused call-to-action flows.</p>
                       <span className="text-amber-600 text-xs">https://anjaneyaborewells.com/</span>
                     </div>

                     <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                       <div className="flex justify-between items-start mb-1">
                         <strong className="text-black text-base">Eyas Drapist E-commerce</strong>
                         <span className="text-rose-600 text-xs font-normal uppercase tracking-wide">E-Commerce</span>
                       </div>
                       <p className="text-gray-700 mb-2">Premium draping-service storefront with bold branding, booking-focused CTAs, elegant dark theme presentation, and integrated service customization features.</p>
                       <span className="text-rose-600 text-xs">https://eyasdrapist.shop/</span>
                     </div>
                   </div>
                 </section>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
