import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  UserCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Share2,
  Copy,
  CheckCheck,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  X,
  Percent,
  Sliders,
  ChevronRight,
  Gift,
  Building2,
  Home,
  FileCheck
} from 'lucide-react';
import { Language, CITIES_DATA, SERVICES_PREVIEW } from '../data/cleaningData';

export const CleaningComingSoon: React.FC = () => {
  const [lang, setLang] = useState<Language>('fi');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [vipCode, setVipCode] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  // Calculator states for the optional modal
  const [apartmentSize, setApartmentSize] = useState<number>(75);
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly' | 'onetime'>('biweekly');

  // 20-Day Countdown logic
  // Stored in localStorage so it ticks down accurately over 20 days
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const STORAGE_KEY = 'lumi_launch_target_timestamp_v2';
    let target = localStorage.getItem(STORAGE_KEY);
    
    // Always guarantee a fresh 20-day countdown if missing or expired
    const TWENTY_DAYS_MS = 20 * 24 * 60 * 60 * 1000;
    if (!target || isNaN(parseInt(target, 10)) || parseInt(target, 10) < Date.now()) {
      const newTarget = Date.now() + TWENTY_DAYS_MS;
      localStorage.setItem(STORAGE_KEY, newTarget.toString());
      target = newTarget.toString();
    }

    const targetTime = parseInt(target, 10);

    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Check existing subscription
  useEffect(() => {
    const saved = localStorage.getItem('lumi_vip_subscribed');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email) {
          setIsSubscribed(true);
          setVipCode(parsed.code || 'LUMI-VIP20');
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    const generatedCode = `LUMI-VIP${Math.floor(1000 + Math.random() * 9000)}`;
    setVipCode(generatedCode);
    setIsSubscribed(true);

    localStorage.setItem(
      'lumi_vip_subscribed',
      JSON.stringify({
        email,
        code: generatedCode,
        date: new Date().toISOString()
      })
    );
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(vipCode || 'LUMI-VIP20');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Lumi Siivous Suomi - Tulossa 20 päivän kuluttua',
        text: 'Liity Lumi Siivouksen VIP-jonoon ja saa -25% ensimmäisestä siivouksesta!',
        url: shareUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  // Tax calculations for the modal
  const hourlyRateRegular = 48; // € / hour
  const taxCreditPercent = 0.60; // 60% Kotitalousvähennys
  const netHourlyRate = hourlyRateRegular * (1 - taxCreditPercent); // 19.20 € / hour

  const getEstimatedHours = (sqm: number) => {
    if (sqm <= 45) return 2.5;
    if (sqm <= 70) return 3;
    if (sqm <= 100) return 4;
    if (sqm <= 140) return 5;
    return 6;
  };

  const estimatedHours = getEstimatedHours(apartmentSize);
  const regularTotal = Math.round(estimatedHours * hourlyRateRegular);
  const netTotal = Math.round(estimatedHours * netHourlyRate);
  const taxSaving = regularTotal - netTotal;

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-[#c9a84c]/30 selection:text-[#f8fafc]">
      {/* Background Mood & Ambient Architectural Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft champagne spotlight at the top center */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[550px] bg-gradient-to-b from-[#c9a84c]/12 via-[#1a2a4a]/20 to-transparent blur-3xl opacity-70" />
        {/* Deep Nordic blue glow in the lower corners */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#0284c7]/8 blur-3xl rounded-full" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-[#c9a84c]/8 blur-3xl rounded-full" />
        
        {/* Subtle architectural floor grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Vignette edge shading for cinematic depth */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#070a12]/60 to-[#070a12]" />
      </div>

      {/* HEADER: Minimalist Top Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3.5 group cursor-default">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1a2639] to-[#0a1220] border border-[#c9a84c]/40 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-[#c9a84c] transition-all">
            <Sparkles className="w-5 h-5 text-[#c9a84c]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-light tracking-[0.22em] text-white font-display">
              LUMI
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a84c] font-semibold">
              Siivous Suomi
            </span>
          </div>
        </div>

        {/* Location & Quick Action Bar */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Finnish Cities Tag */}
          <div className="hidden md:flex items-center space-x-2 text-xs tracking-wider text-slate-400 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Helsinki • Espoo • Vantaa</span>
          </div>

          {/* Services Modal Trigger Button */}
          <button
            onClick={() => setShowServicesModal(true)}
            className="text-xs tracking-wider text-slate-300 hover:text-white px-3 sm:px-4 py-1.5 rounded-full border border-white/15 hover:border-[#c9a84c]/60 bg-white/[0.03] hover:bg-white/[0.08] transition-all flex items-center space-x-1.5 cursor-pointer backdrop-blur-sm"
          >
            <span>{lang === 'fi' ? 'Palvelut & Hinnat' : 'Services & Rates'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]" />
          </button>

          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-white/[0.05] p-1 rounded-full border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setLang('fi')}
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                lang === 'fi'
                  ? 'bg-[#c9a84c] text-[#070a12] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FI
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#c9a84c] text-[#070a12] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* MAIN HERO CONTENT - Minimalist Dark Coming Soon Focus */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 max-w-4xl mx-auto w-full">
        {/* Sub-tag / Launch announcement pill */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#c9a84c]/30 text-xs sm:text-sm tracking-widest text-slate-300 mb-6 sm:mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse shadow-sm shadow-[#c9a84c]" />
          <span className="uppercase font-medium text-[#f0e6cf]">
            {lang === 'fi'
              ? 'Avaamme Suomessa 20 päivän kuluttua'
              : 'Launching in Finland in 20 Days'}
          </span>
        </div>

        {/* Grand Typography: COMING SOON */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.18em] sm:tracking-[0.25em] text-white uppercase font-display leading-tight mb-4 drop-shadow-lg">
          {lang === 'fi' ? 'TULOSSA PIAN' : 'COMING SOON'}
        </h1>

        {/* Refined Descriptive Subtitle */}
        <p className="max-w-2xl text-slate-300 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-4">
          {lang === 'fi'
            ? 'Suomen uusi standardi ylellisessä kodin- ja toimitilasiivouksessa. Vastuulliset pohjoismaiset menetelmät, taustatarkistetut ammattilaiset ja hohtavan puhdas lopputulos.'
            : 'Finland’s premier standard in luxury residential and office cleaning. Nordic eco-certified solutions, thoroughly vetted professionals, and a spotless sanctuary.'}
        </p>

        {/* 60% Kotitalousvähennys Tax Credit Badge */}
        <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/25 px-4 py-1.5 rounded-full mb-8 sm:mb-12 backdrop-blur-sm">
          <Percent className="w-4 h-4 text-[#c9a84c]" />
          <span>
            {lang === 'fi'
              ? '60 % Kotitalousvähennys hyödynnettävissä kaikissa kotipalveluissa'
              : 'Eligible for 60% Finnish Kotitalousvähennys Tax Deduction'}
          </span>
        </div>

        {/* 20-DAY COUNTDOWN TIMER CARDS */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full max-w-xl mb-10 sm:mb-14">
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-[#0c121f]/80 border border-white/10 shadow-xl shadow-black/50 backdrop-blur-md group hover:border-[#c9a84c]/40 transition-all">
            <span className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white font-mono">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a84c] font-medium mt-1.5">
              {lang === 'fi' ? 'Päivää' : 'Days'}
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-[#0c121f]/80 border border-white/10 shadow-xl shadow-black/50 backdrop-blur-md group hover:border-[#c9a84c]/40 transition-all">
            <span className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white font-mono">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a84c] font-medium mt-1.5">
              {lang === 'fi' ? 'Tuntia' : 'Hours'}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-[#0c121f]/80 border border-white/10 shadow-xl shadow-black/50 backdrop-blur-md group hover:border-[#c9a84c]/40 transition-all">
            <span className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white font-mono">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a84c] font-medium mt-1.5">
              {lang === 'fi' ? 'Minuuttia' : 'Minutes'}
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl bg-[#0c121f]/80 border border-white/10 shadow-xl shadow-black/50 backdrop-blur-md group hover:border-[#c9a84c]/40 transition-all">
            <span className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-[#f1dd9f] font-mono animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a84c] font-medium mt-1.5">
              {lang === 'fi' ? 'Sekuntia' : 'Seconds'}
            </span>
          </div>
        </div>

        {/* SUBSCRIBE / VIP WAITLIST INPUT FORM - Pill-Shaped Luxury Design */}
        <div className="w-full max-w-lg mb-6">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row items-center">
              <div className="w-full relative flex items-center bg-[#0d1424]/90 border border-white/15 focus-within:border-[#c9a84c] rounded-full p-1.5 sm:p-2 shadow-2xl backdrop-blur-xl transition-all">
                <div className="pl-4 pr-2 text-slate-400">
                  <Mail className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    lang === 'fi'
                      ? 'Kirjoita sähköpostiosoitteesi...'
                      : 'Enter your email address...'
                  }
                  required
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base px-2 py-2.5 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto mt-2 sm:mt-0 px-6 sm:px-8 py-3 rounded-full bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#070a12] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-[#c9a84c]/30 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                >
                  <span>{lang === 'fi' ? 'LIITY JONOON' : 'SUBSCRIBE'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[#0e172a]/90 border border-[#c9a84c]/50 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center mb-2.5">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-white font-medium text-base sm:text-lg mb-1">
                {lang === 'fi' ? 'Olet mukana VIP-jonossa!' : "You're on the VIP Waitlist!"}
              </h4>
              <p className="text-xs text-slate-300 max-w-sm mb-3">
                {lang === 'fi'
                  ? 'Koodisi oikeuttaa -25 % alennukseen ensimmäisestä tilauksesta avajaispäivänä.'
                  : 'Your personal early-bird pass gives you 25% off your first cleaning service.'}
              </p>
              <div className="flex items-center space-x-2 bg-black/40 border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-lg mb-2">
                <span className="font-mono text-xs sm:text-sm text-[#f3e7c4] tracking-widest font-bold">
                  {vipCode || 'LUMI-VIP20'}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
                  title="Copy code"
                >
                  {copiedCode ? (
                    <CheckCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <button
                onClick={handleShare}
                className="text-xs text-[#c9a84c] hover:underline flex items-center space-x-1 mt-1 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>
                  {copiedShare
                    ? lang === 'fi' ? 'Linkki kopioitu leikepöydälle!' : 'Link copied to clipboard!'
                    : lang === 'fi' ? 'Jaa ystävälle tai naapurille' : 'Share with a friend'}
                </span>
              </button>
            </div>
          )}

          {/* Micro-incentive text */}
          <p className="text-[11px] sm:text-xs text-slate-400 font-light mt-3 tracking-wide">
            {lang === 'fi'
              ? '✨ 50 ensimmäiselle liittyjälle -25 % etuseteli ja etuajo-oikeus kalenteriin. Ei roskapostia.'
              : '✨ First 50 sign-ups receive -25% off voucher + exclusive priority booking. No spam.'}
          </p>
        </div>

        {/* 4 CORE VALUE PILLARS - Minimalist Micro Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-4 border-t border-white/10">
          <div className="flex items-center space-x-2 text-left p-2 rounded-lg bg-white/[0.02]">
            <UserCheck className="w-4 h-4 text-[#c9a84c] shrink-0" />
            <span className="text-xs text-slate-300 font-light">
              {lang === 'fi' ? '100% Taustatarkistettu' : '100% Vetted Cleaners'}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-left p-2 rounded-lg bg-white/[0.02]">
            <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-300 font-light">
              {lang === 'fi' ? 'Pohjoismainen Joutsenmerkki' : 'Nordic Swan Certified'}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-left p-2 rounded-lg bg-white/[0.02]">
            <Percent className="w-4 h-4 text-[#c9a84c] shrink-0" />
            <span className="text-xs text-slate-300 font-light">
              {lang === 'fi' ? '60% Kotitalousvähennys' : '60% Tax Credit'}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-left p-2 rounded-lg bg-white/[0.02]">
            <ShieldCheck className="w-4 h-4 text-[#c9a84c] shrink-0" />
            <span className="text-xs text-slate-300 font-light">
              {lang === 'fi' ? '100% Tyytyväisyystakuu' : 'Satisfaction Guarantee'}
            </span>
          </div>
        </div>
      </main>

      {/* FOOTER: Follow Us & Direct Contacts */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        {/* Direct Contact info */}
        <div className="flex items-center space-x-4">
          <a
            href="mailto:info@jknordsourcing.com"
            className="hover:text-[#c9a84c] transition-colors flex items-center space-x-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@jknordsourcing.com</span>
          </a>
          <span className="text-slate-600">•</span>
          <a
            href="tel:+358466650787"
            className="hover:text-[#c9a84c] transition-colors flex items-center space-x-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+358 46 665 0787</span>
          </a>
        </div>

        {/* FOLLOW US Row (as requested in reference image) */}
        <div className="flex items-center space-x-3.5">
          <span className="uppercase tracking-[0.25em] text-[10px] text-slate-400 font-medium">
            FOLLOW US
          </span>
          <div className="flex items-center space-x-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#c9a84c] hover:text-[#070a12] border border-white/10 transition-all flex items-center justify-center text-slate-300 cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#c9a84c] hover:text-[#070a12] border border-white/10 transition-all flex items-center justify-center text-slate-300 cursor-pointer"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#c9a84c] hover:text-[#070a12] border border-white/10 transition-all flex items-center justify-center text-slate-300 cursor-pointer"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#c9a84c] hover:text-[#070a12] border border-white/10 transition-all flex items-center justify-center text-slate-300 cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[#c9a84c] hover:text-[#070a12] border border-white/10 transition-all flex items-center justify-center text-slate-300 cursor-pointer"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-400">
          © 2026 Lumi Siivous Suomi. {lang === 'fi' ? 'Kaikki oikeudet pidätetään.' : 'All rights reserved.'}
        </div>
      </footer>

      {/* POPUP MODAL: SERVICES & FINNISH TAX ESTIMATOR */}
      {showServicesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0d1424] border border-[#c9a84c]/30 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setShowServicesModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-left mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] font-semibold">
                LUMI SIIVOUS SUOMI
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white font-display mt-1">
                {lang === 'fi' ? 'Palvelut & Kotitalousvähennyslaskuri' : 'Services & Tax Deduction Preview'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'fi'
                  ? 'Suomen verottaja korvaa 60 % kotisiivouksen työn osuudesta (omavastuu 100 €).'
                  : 'The Finnish Tax Administration reimburses 60% of cleaning labor costs (self-liability €100).'}
              </p>
            </div>

            {/* Interactive Calculator Slider */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate-300 font-medium">
                  {lang === 'fi' ? 'Asunnon koko' : 'Apartment size'}:
                </span>
                <span className="text-sm font-bold text-[#c9a84c]">{apartmentSize} m²</span>
              </div>
              <input
                type="range"
                min="30"
                max="180"
                step="5"
                value={apartmentSize}
                onChange={(e) => setApartmentSize(Number(e.target.value))}
                className="w-full accent-[#c9a84c] cursor-pointer"
              />

              <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-white/10 text-center">
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-[10px] uppercase text-slate-400 block mb-0.5">
                    {lang === 'fi' ? 'Normaali hinta' : 'Standard Rate'}
                  </span>
                  <span className="text-lg font-semibold text-slate-400 line-through">
                    ~{regularTotal} €
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30">
                  <span className="text-[10px] uppercase text-[#c9a84c] font-semibold block mb-0.5">
                    {lang === 'fi' ? 'Sinä maksat (60% vähennys)' : 'You Pay (After 60% Credit)'}
                  </span>
                  <span className="text-xl font-bold text-white">
                    ~{netTotal} €
                  </span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">
                    {lang === 'fi' ? `Säästät ${taxSaving} € / kerta` : `Save €${taxSaving} / clean`}
                  </span>
                </div>
              </div>
            </div>

            {/* Service Types */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                {lang === 'fi' ? 'Tulevat Palvelut' : 'Upcoming Services'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
                  <Home className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Kotisiivous (Home)</h5>
                    <p className="text-[11px] text-slate-400">Ylläpitosiivous 1–4 krt kuukaudessa</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
                  <FileCheck className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Muuttosiivous (Moving)</h5>
                    <p className="text-[11px] text-slate-400">100% hyväksymistakuu vuokranantajalle</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Toimitilat & Toimistot</h5>
                    <p className="text-[11px] text-slate-400">Räätälöity yrityssiivous pääkaupunkiseudulla</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
                  <Sparkles className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Ikkunanpesu & Suursiivous</h5>
                    <p className="text-[11px] text-slate-400">Kevät- ja kausipesut ammattivälinein</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-xs text-slate-400">
                {lang === 'fi' ? 'Liity VIP-listalle saadaksesi -25% alennuksen.' : 'Join the VIP list to get 25% off.'}
              </span>
              <button
                onClick={() => setShowServicesModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#c9a84c] hover:bg-[#d4af37] text-[#070a12] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                {lang === 'fi' ? 'Palaa etusivulle' : 'Back to Countdown'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CleaningComingSoon;
