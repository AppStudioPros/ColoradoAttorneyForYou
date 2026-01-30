import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ContactForm } from '../components/ContactForm';
import { CheckCircle, Scale, Users, FileText } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: 'Warren J. Domangue',
    businessName: 'Law Office of Warren J. Domangue',
    description:
      'Colorado unemployment appeals, family law, and criminal defense attorney serving Littleton and Denver metro area',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9888 West Belleview Ave., #158',
      addressLocality: 'Littleton',
      addressRegion: 'CO',
      postalCode: '80123',
      addressCountry: 'US',
    },
    telephone: '(720) 495-7315',
    url: 'https://coloradoattorneyforyou.com',
    areaServed: [{ '@type': 'State', name: 'Colorado' }],
    knowsAbout: [
      'Unemployment Appeals',
      'Family Law',
      'Divorce',
      'Child Custody',
      'Criminal Defense',
      'DUI Defense',
      'Appeals',
    ],
    priceRange: '$',
  };

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Law Office of Warren J. Domangue',
    description:
      'Colorado unemployment appeals, family law, and criminal defense attorney',
    telephone: '(720) 495-7315',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9888 West Belleview Ave., #158',
      addressLocality: 'Littleton',
      addressRegion: 'CO',
      postalCode: '80123',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    url: 'https://coloradoattorneyforyou.com',
    priceRange: '$',
  };

  return (
    <>
      <Helmet>
        <title>
          Colorado Unemployment Appeals & Family Law | Law Office of Warren J. Domangue
        </title>
        <meta
          name="description"
          content="Experienced Colorado attorney specializing in unemployment appeals, family law, and criminal defense. Flat-fee unemployment representation. Free consultation available."
        />
        <meta
          name="keywords"
          content="Colorado unemployment appeal lawyer, family law attorney Littleton, criminal defense Colorado, divorce attorney Denver"
        />
        <link rel="canonical" href="https://coloradoattorneyforyou.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Colorado Unemployment Appeals & Family Law | Law Office of Warren J. Domangue"
        />
        <meta
          property="og:description"
          content="Experienced Colorado attorney specializing in unemployment appeals, family law, and criminal defense."
        />
        <meta property="og:url" content="https://coloradoattorneyforyou.com/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Colorado Unemployment Appeals & Family Law | Law Office of Warren J. Domangue"
        />
        <meta
          name="twitter:description"
          content="Experienced Colorado attorney specializing in unemployment appeals, family law, and criminal defense."
        />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLdOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdLocalBusiness)}</script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#f5f8fb] bg-opacity-75 pt-20 pb-16 md:pt-24 md:pb-20"
        data-testid="hero-section"
      >
        <div className="absolute inset-x-0 top-0 h-[40vh] bg-[linear-gradient(180deg,rgba(19,38,59,0.75)_0%,rgba(30,58,92,0.55)_25%,rgba(30,58,92,0.35)_50%,rgba(245,248,251,0.15)_75%,rgba(245,248,251,0)_100%)]" />
        
        <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                Colorado Legal Services
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#13263b] leading-tight mb-5"
                data-testid="hero-title"
              >
                Colorado Unemployment Appeals & Family Law
              </h1>
              <p
                className="text-base md:text-lg text-[#6b7280] max-w-2xl mb-6"
                data-testid="hero-subtitle"
              >
                Experienced, responsive counsel focused on clear communication and real-world solutions.
                Whether you're facing a denied unemployment claim, family law matter, or criminal charge,
                Warren provides approachable guidance without the corporate feel.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="tel:+17204957315" data-testid="hero-call-link">
                  <Button
                    className="rounded-full bg-[#1ea6a3] text-white px-6 h-12 hover:bg-[#189694] transition-colors shadow-lg"
                    data-testid="hero-call-button"
                  >
                    Call for Free Consultation
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#1ea6a3] text-[#1ea6a3] px-6 h-12 hover:bg-[#e6f6f6] transition-colors"
                  >
                    Request Consultation
                  </Button>
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#6b7280]">
                <div>
                  <p className="font-semibold text-[#13263b] mb-1">Flat-fee unemployment appeals</p>
                  <p>Clear pricing: <strong>$650</strong> for most unemployment hearings</p>
                </div>
                <div>
                  <p className="font-semibold text-[#13263b] mb-1">Focused on Colorado workers</p>
                  <p>15+ years paralegal experience in Colorado law</p>
                </div>
              </div>
            </div>

            {/* Right Column - Info Card */}
            <div className="animate-on-scroll relative" style={{ opacity: 0 }}>
              <div className="absolute -top-3 right-4 bg-[#1ea6a3] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-10">
                Calm, practical guidance
              </div>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-6">
                <h3 className="text-lg font-semibold text-[#13263b] mb-3">
                  That letter in the mail is not the final word.
                </h3>
                <p className="text-[0.95rem] text-[#6b7280]">
                  Most people only go through this process once and are not expected to know the rules.
                  Warren helps you understand timelines, what the decision means, and what you can
                  realistically hope to achieve through an appeal.
                </p>
              </Card>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-on-scroll" style={{ opacity: 0 }}>
            <div>
              <h4 className="font-semibold text-[#1e3a5c] mb-2">Short deadlines</h4>
              <p className="text-sm text-[#6b7280]">
                In most cases, you have only 20 days from the mailing date on your decision to file an
                appeal. Acting quickly helps preserve your rights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1e3a5c] mb-2">Keep filing weekly</h4>
              <p className="text-sm text-[#6b7280]">
                Even if you were denied, continue filing your weekly requests for benefits so that, if you
                win, you can be paid for all eligible weeks.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1e3a5c] mb-2">You don't have to do this alone</h4>
              <p className="text-sm text-[#6b7280]">
                From preparing testimony to questioning witnesses, Warren guides you through each step so
                you know what to expect on the day of your hearing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 md:py-20 bg-white" data-testid="practice-areas-section">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12 animate-on-scroll" style={{ opacity: 0 }}>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
              Practice Areas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-4">
              Focused Legal Services
            </h2>
            <p className="text-base text-[#6b7280] max-w-2xl mx-auto">
              Warren concentrates on areas where clear communication and real-world experience make the
              biggest difference for Colorado clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
            <Card
              className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6 animate-on-scroll"
              style={{ opacity: 0 }}
              data-testid="practice-card"
            >
              <Scale className="w-8 h-8 text-[#1ea6a3] mb-4" />
              <h3 className="text-xl font-semibold text-[#13263b] mb-3">Unemployment Appeals</h3>
              <p className="text-[0.95rem] text-[#6b7280] mb-4">
                Flat-fee representation for denied Colorado unemployment benefits. 20-day appeal deadline
                matters.
              </p>
              <a href="/unemployment-appeals" className="text-[#1ea6a3] hover:underline font-medium">
                Learn More →
              </a>
            </Card>

            <Card
              className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6 animate-on-scroll"
              style={{ opacity: 0, animationDelay: '0.1s' }}
              data-testid="practice-card"
            >
              <Users className="w-8 h-8 text-[#1ea6a3] mb-4" />
              <h3 className="text-xl font-semibold text-[#13263b] mb-3">Family Law</h3>
              <p className="text-[0.95rem] text-[#6b7280] mb-4">
                Divorce, custody, child support, modifications, and relocation. Uncontested and contested
                matters.
              </p>
              <a href="/other-areas" className="text-[#1ea6a3] hover:underline font-medium">
                Learn More →
              </a>
            </Card>

            <Card
              className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6 animate-on-scroll"
              style={{ opacity: 0, animationDelay: '0.2s' }}
              data-testid="practice-card"
            >
              <FileText className="w-8 h-8 text-[#1ea6a3] mb-4" />
              <h3 className="text-xl font-semibold text-[#13263b] mb-3">Criminal Defense & Appeals</h3>
              <p className="text-[0.95rem] text-[#6b7280] mb-4">
                DUI/DWAI defense, drug charges, criminal appeals. Protecting your rights from day one.
              </p>
              <a href="/other-areas" className="text-[#1ea6a3] hover:underline font-medium">
                Learn More →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-[#f5f8fb]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                About Warren J. Domangue
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-5">
                Experience You Can Understand
              </h2>
              <p className="text-base text-[#6b7280] mb-4">
                Warren J. Domangue brings over 15 years of paralegal experience in family law, criminal
                defense, and litigation before becoming a licensed Colorado attorney. This background means
                Warren knows the system from the inside out—not just the law, but how things actually work
                in practice.
              </p>
              <p className="text-base text-[#6b7280] mb-4">
                When you call, you speak with Warren directly. When you hire the firm, Warren handles your
                case personally. There's no shuffling between associates or paralegals who don't know your
                story.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#6b7280] mt-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1ea6a3] flex-shrink-0 mt-0.5" />
                  <span>Colorado Bar Licensed Attorney</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1ea6a3] flex-shrink-0 mt-0.5" />
                  <span>15+ Years Paralegal Experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1ea6a3] flex-shrink-0 mt-0.5" />
                  <span>Transparent, Flat-Fee Options</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#1ea6a3] flex-shrink-0 mt-0.5" />
                  <span>Free Initial Consultation</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_12px_34px_rgba(15,23,42,0.1)] p-6">
                <h3 className="text-lg font-semibold text-[#13263b] mb-3">Client-Focused Approach</h3>
                <p className="text-[0.95rem] text-[#6b7280] mb-4">
                  Legal problems are stressful. Warren's approach is to explain things in plain language,
                  set realistic expectations, and focus on what actually matters to you—not legal jargon
                  that sounds impressive but doesn't help.
                </p>
                <p className="text-[0.95rem] text-[#6b7280]">
                  Whether it's a flat-fee unemployment appeal or a family law case with multiple moving
                  parts, the goal is always the same: help you understand the process and move forward with
                  confidence.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12 animate-on-scroll" style={{ opacity: 0 }}>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-base text-[#6b7280] max-w-2xl mx-auto">
              No complicated intake forms or endless phone trees. Here's how working with Warren typically
              goes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Free Consultation',
                desc: 'Call or submit the form. Warren personally returns calls and answers questions in a brief, no-obligation conversation.',
              },
              {
                step: 2,
                title: 'Clear Agreement',
                desc: 'If we move forward, you will know exactly what is included, what it costs, and what to expect. No surprise fees.',
              },
              {
                step: 3,
                title: 'Personal Representation',
                desc: 'Warren handles your case directly. You will always know who you are working with and what is happening next.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative pt-10 animate-on-scroll"
                style={{ opacity: 0 }}
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-[#1ea6a3] bg-white flex items-center justify-center text-[#1ea6a3] font-bold text-sm">
                  {item.step}
                </div>
                <h4 className="font-semibold text-[#1e3a5c] mb-2">{item.title}</h4>
                <p className="text-[0.95rem] text-[#6b7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 bg-[#e0f4f3]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[900px]">
          <div className="animate-on-scroll" style={{ opacity: 0 }}>
            <blockquote className="border-l-4 border-[#1ea6a3] pl-6 text-base md:text-lg text-[#6b7280] italic">
              "Working with Warren, I never felt talked down to or rushed. He explained each step of my
              unemployment appeal hearing in a way that actually made sense, and when the day came, I felt
              prepared instead of panicked. We won the appeal, and I can't recommend him enough."
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-[#1e3a5c]">— Former Client, Denver Metro</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 md:py-20 bg-[#f5f8fb]" data-testid="contact-section">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1.1fr] gap-8 md:gap-12 items-start">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-5">
                Ready to Discuss Your Case?
              </h2>
              <p className="text-base text-[#6b7280] mb-4">
                If you have received a denial letter, a notice of overpayment, or a hearing notice, it can
                help to talk with someone who works with these issues regularly. Together, you can look at
                deadlines, discuss what the decision means, and consider the next steps.
              </p>
              <p className="text-base text-[#6b7280] mb-6">
                You are welcome to call directly or send a brief message using the form. Whenever possible,
                Warren personally returns calls so you can speak with the attorney who would handle your
                case.
              </p>
              <div className="bg-white rounded-[18px] border border-[#e6edf5] p-5 text-sm">
                <p className="font-semibold text-[#13263b] mb-2">
                  Office: Law Office of Warren J. Domangue
                </p>
                <p className="text-[#6b7280] mb-1">9888 West Belleview Ave., #158</p>
                <p className="text-[#6b7280] mb-3">Littleton, Colorado 80123</p>
                <p className="text-[#6b7280]">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+17204957315" className="text-[#1ea6a3] hover:underline">
                    (720) 495-7315
                  </a>
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <ContactForm sourcePage="/" practiceArea="General Inquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
