import React, { useState, useEffect } from 'react';
import { 
  Terminal, BarChart2, Activity, Tv, ShoppingBag, Database, 
  ChevronRight, ExternalLink, Mail, Phone, Github, Linkedin, 
  MapPin, Code, LineChart, Briefcase, Cpu, FileText, Download, X
} from 'lucide-react';
import fiftoDashboardImg from './assets/projects/fifto-dashboard.png';
import fiftoScannerImg from './assets/projects/fifto-scanner.png';
import tradingStrategyImg from './assets/projects/trading-strategy-app.png';
import liveTvAnywhereImg from './assets/projects/live-tv-anywhere.png';
import anjaneyaBorewellsImg from './assets/projects/anjaneya-borewells.png';
import eyasDrapistImg from './assets/projects/eyas-drapist-ecommerce.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
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
  ];

  const featuredProjects = [
    {
      title: 'FiFTO Trading Dashboard',
      description: 'Comprehensive equity trading dashboard with real-time tracking, closed trade review, and portfolio analytics.',
      href: 'https://fifto-eq-trade.lovable.app/',
      image: fiftoDashboardImg,
      icon: BarChart2,
      accent: 'emerald',
      tag: 'Trading Dashboard',
    },
    {
      title: 'FiFTO Scanner',
      description: 'Zone breakout detection engine with momentum analytics, watchlists, and instant Telegram-based reporting.',
      href: 'https://fifto-scanner.onrender.com/',
      image: fiftoScannerImg,
      icon: Activity,
      accent: 'blue',
      tag: 'Scanner Engine',
    },
    {
      title: 'Trading Strategy App',
      description: 'Performance-driven strategy platform focused on wealth management presentation, trust, and live tracking.',
      href: 'https://fifto.netlify.app/',
      image: tradingStrategyImg,
      icon: LineChart,
      accent: 'purple',
      tag: 'Strategy Platform',
    },
    {
      title: 'Live TV Anywhere',
      description: 'Remote-friendly live TV browsing experience with channel navigation, language filters, and display control.',
      href: 'https://live-view-anywhere.lovable.app',
      image: liveTvAnywhereImg,
      icon: Tv,
      accent: 'rose',
      tag: 'Media Control',
    },
    {
      title: 'Anjaneya Borewells',
      description: 'Modern business website for borewell drilling services with service highlights, trust signals, and CTA flow.',
      href: 'https://anjaneyaborewells.com/',
      image: anjaneyaBorewellsImg,
      icon: MapPin,
      accent: 'cyan',
      tag: 'Owner Project',
    },
    {
      title: 'Eyas Drapist E-commerce',
      description: 'Premium draping-service storefront with bold branding, booking-focused CTAs, and elegant dark presentation.',
      href: 'https://eyasdrapist.shop/',
      image: eyasDrapistImg,
      icon: ShoppingBag,
      accent: 'amber',
      tag: 'E-commerce',
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
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${activeSection === link.id ? 'text-emerald-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors border border-slate-700"
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

          <div className="relative z-10 flex min-h-[calc(85vh-7rem)] items-start sm:min-h-[calc(85vh-8rem)] sm:items-center md:min-h-[calc(85vh-10rem)]">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-xs font-medium text-emerald-400 animate-pulse">
                <Activity size={12} />
                <span>Available for new opportunities</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
                  Mani Raja
                </h1>
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-400">
                    Trading System Developer
                  </h2>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400">
                    Python | UI/UX | Automation
                  </h3>
                </div>
              </div>

              <p className="max-w-xl border-l-2 border-emerald-500/80 pl-4 py-2 text-base italic font-medium leading-relaxed text-slate-300 sm:pl-6 sm:text-lg md:text-xl">
                "Building intelligent trading systems & real-time applications"
              </p>

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
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-slate-900 rounded-lg text-emerald-400"><Terminal size={24} /></div>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="max-w-3xl">
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                My journey into system development is deeply rooted in practical problem-solving. For over 5 years, I managed operations for my Borewell business utilizing Google Sheets.
              </p>
              <p className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl relative overflow-hidden">
                <span className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></span>
                Before AI tools became popular, I independently designed and built a <strong className="text-emerald-400">Borewell Management System</strong> using Google Sheets and AppSheet. This original idea allowed me to manage complex operations and generate instant billing directly from the field.
              </p>
              <p>
                This hands-on experience forged my strong real-world problem-solving and system design skills. Today, I channel that same innovative spirit into building <strong className="text-white">advanced trading systems, automation tools, and modern web dashboards.</strong>
              </p>
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

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-slate-800/50 pb-32">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl shadow-emerald-900/10">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-500/10 rounded-2xl mb-4">
                <Activity size={32} className="text-emerald-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Great</h2>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                Whether you need a custom algorithmic trading system, an operational automation tool, or a high-performance web dashboard, I'm ready to collaborate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <a href="mailto:manirajankg@gmail.com" className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="p-3 bg-slate-800 group-hover:bg-emerald-500/20 rounded-full transition-colors mb-3">
                  <Mail size={24} className="text-slate-300 group-hover:text-emerald-400" />
                </div>
                <span className="font-medium text-lg text-slate-300 group-hover:text-emerald-300 mb-1">Email Me</span>
                <span className="text-sm text-slate-500 group-hover:text-emerald-500">manirajankg@gmail.com</span>
              </a>
              
              <a href="tel:+919159036301" className="group flex flex-col items-center justify-center p-6 bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="p-3 bg-slate-800 group-hover:bg-emerald-500/20 rounded-full transition-colors mb-3">
                  <Phone size={24} className="text-slate-300 group-hover:text-emerald-400" />
                </div>
                <span className="font-medium text-lg text-slate-300 group-hover:text-emerald-300 mb-1">Call Me</span>
                <span className="text-sm text-slate-500 group-hover:text-emerald-500">+91-91590 36301</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-8 border-t border-slate-800">
              <a href="https://github.com/maniraja5599" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href="https://in.linkedin.com/in/maniraja5599" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-[#0A66C2] hover:bg-slate-700 hover:shadow-lg hover:shadow-[#0A66C2]/20 transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-900 text-center text-slate-500 text-sm print:hidden">
        <p>© {new Date().getFullYear()} Mani Raja. Trading System Developer & Automation Specialist.</p>
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
                  onClick={() => window.print()}
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
            <div className="p-6 sm:p-10 overflow-y-auto text-slate-300 space-y-8 bg-slate-950 print:bg-white print:text-black print:overflow-visible print:p-0">
               
               {/* Resume Header */}
               <div className="border-b border-slate-800 pb-6 print:border-gray-300">
                 <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black mb-2">MANI RAJA</h1>
                 <p className="text-emerald-400 print:text-gray-800 font-bold text-lg mb-4">Trading System Developer | Python | UI/UX | Automation</p>
                 <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 print:text-gray-600">
                   <span>📞 +91-91590 36301</span>
                   <span>✉️ manirajankg@gmail.com</span>
                   <span>📍 Namakkal, Tamil Nadu, India</span>
                 </div>
               </div>

               {/* Summary */}
               <section>
                 <h2 className="text-xl font-bold text-white print:text-black border-l-4 border-emerald-500 pl-3 mb-4">PROFESSIONAL SUMMARY</h2>
                 <p className="leading-relaxed text-slate-400 print:text-gray-700">
                   Innovative and solutions-driven Trading System Developer with a strong foundation in practical problem-solving and system architecture. Leveraged early technical skills to independently build a comprehensive business management system using Google Sheets and AppSheet before modern AI adoption. Currently specializing in developing advanced algorithmic trading systems, real-time web dashboards, API integrations, and automated operational tools for financial markets.
                 </p>
               </section>

               {/* Skills */}
               <section>
                 <h2 className="text-xl font-bold text-white print:text-black border-l-4 border-emerald-500 pl-3 mb-4">TECHNICAL SKILLS</h2>
                 <ul className="space-y-3 text-slate-400 print:text-gray-700 list-disc list-inside">
                   <li><strong className="text-slate-300 print:text-black">Technical Languages & Tech:</strong> Python, Pine Script, API Integration, HTML, CSS, AppSheet, Google Sheets, WebSocket.</li>
                   <li><strong className="text-slate-300 print:text-black">Trading Logic & Strategies:</strong> Options Trading, Supply & Demand, VWAP, Momentum, Math-based Entries, Algorithmic Automation.</li>
                   <li><strong className="text-slate-300 print:text-black">Tools & Platforms:</strong> TradingView, MetaTrader 5, VS Code, GitHub, Telegram Bots, Render, Netlify.</li>
                 </ul>
               </section>

               {/* Experience */}
               <section>
                 <h2 className="text-xl font-bold text-white print:text-black border-l-4 border-emerald-500 pl-3 mb-4">PROFESSIONAL EXPERIENCE</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-slate-200 print:text-black">Independent System Developer <span className="text-emerald-400 print:text-gray-500 text-sm font-normal">| Trading Dashboards & Automation</span></h3>
                       <span className="text-sm font-mono text-slate-500 print:text-gray-500">Ongoing</span>
                     </div>
                     <ul className="list-disc list-inside text-slate-400 print:text-gray-700 space-y-1 ml-2 text-sm">
                       <li>Architect and build highly functional, real-time trading dashboards and robust API integrations across multiple platforms.</li>
                       <li>Automate daily token generation and execute math-based entry algorithms for precise market positioning.</li>
                       <li>Develop real-time Telegram alert bots to provide immediate, automated trade signaling and notifications.</li>
                     </ul>
                   </div>

                   <div>
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-slate-200 print:text-black">Founder & Lead Educator <span className="text-emerald-400 print:text-gray-500 text-sm font-normal">| FiFTO Trading Community</span></h3>
                       <span className="text-sm font-mono text-slate-500 print:text-gray-500">Ongoing</span>
                     </div>
                     <ul className="list-disc list-inside text-slate-400 print:text-gray-700 space-y-1 ml-2 text-sm">
                       <li>Lead an educational Portfolio Management Service (PMS) model named "FiFTO".</li>
                       <li>Provide structured mentorship, real-time market analysis, and educate community members on systematic, mathematics-based trading strategies.</li>
                     </ul>
                   </div>

                   <div>
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-slate-200 print:text-black">Owner & Founder <span className="text-emerald-400 print:text-gray-500 text-sm font-normal">| Anjaneya Borewells, Namakkal</span></h3>
                       <span className="text-sm font-mono text-slate-500 print:text-gray-500">2019 – Present</span>
                     </div>
                     <ul className="list-disc list-inside text-slate-400 print:text-gray-700 space-y-1 ml-2 text-sm">
                       <li>Manage and operate the latest borewell drilling services in Namakkal.</li>
                       <li>Independently designed and deployed a full-scale Borewell Management System using Google Sheets and AppSheet.</li>
                     </ul>
                   </div>

                   <div>
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-slate-200 print:text-black">Borewell Manager <span className="text-emerald-400 print:text-gray-500 text-sm font-normal">| Operations & Management</span></h3>
                       <span className="text-sm font-mono text-slate-500 print:text-gray-500">2016 – 2018</span>
                     </div>
                     <ul className="list-disc list-inside text-slate-400 print:text-gray-700 space-y-1 ml-2 text-sm">
                       <li>Managed end-to-end field logistics, crew operations, and client relationships for borewell drilling services.</li>
                     </ul>
                   </div>

                   <div>
                     <div className="flex justify-between items-start mb-1">
                       <h3 className="text-lg font-bold text-slate-200 print:text-black">Networking Engineer <span className="text-emerald-400 print:text-gray-500 text-sm font-normal">| ICE Networking</span></h3>
                       <span className="text-sm font-mono text-slate-500 print:text-gray-500">2015 – 2016 (6 Months)</span>
                     </div>
                     <ul className="list-disc list-inside text-slate-400 print:text-gray-700 space-y-1 ml-2 text-sm">
                       <li>Built foundational technical skills by configuring real-time systems, designing initial dashboard concepts, and implementing internal automation tools.</li>
                     </ul>
                   </div>
                 </div>
               </section>

               {/* Projects */}
               <section className="print:break-inside-avoid">
                 <h2 className="text-xl font-bold text-white print:text-black border-l-4 border-emerald-500 pl-3 mb-4">FEATURED PROJECTS</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400 print:text-gray-700">
                   <div>• <strong>FiFTO Trading Dashboard</strong> - Real-time equity tracking</div>
                   <div>• <strong>FiFTO Scanner</strong> - Breakout detection & Telegram alerts</div>
                   <div>• <strong>Trading Strategy App</strong> - Web app for backtesting</div>
                   <div>• <strong>Live TV Anywhere</strong> - QR Remote Control System</div>
                   <div>• <strong>Borewell Management System</strong> - Legacy Sheets/AppSheet system</div>
                   <div>• <strong>Eyas Drapist E-commerce</strong> - Retail storefront</div>
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
