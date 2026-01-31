import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ContactForm } from '../components/ContactForm';
import LawIcon from '../components/LawIcon';

const OtherAreasPage = () => {
  useEffect(() => {
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

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://coloradoattorneyforyou.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Other Practice Areas',
        item: 'https://coloradoattorneyforyou.com/other-areas',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Other Practice Areas | Law Office of Warren J. Domangue</title>
        <meta
          name="description"
          content="Family law, criminal defense, and appeals representation in Colorado. Divorce, custody, child support, DUI defense, and more."
        />
        <meta
          name="keywords"
          content="family law attorney Littleton, divorce attorney Colorado, criminal defense lawyer, DUI attorney Colorado"
        />
        <link rel="canonical" href="https://coloradoattorneyforyou.com/other-areas" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Other Practice Areas | Law Office of Warren J. Domangue"
        />
        <meta
          property="og:description"
          content="Family law, criminal defense, and appeals representation in Colorado."
        />
        <meta property="og:url" content="https://coloradoattorneyforyou.com/other-areas" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#f5f8fb] pt-20 pb-16 md:pt-24 md:pb-20"
        data-testid="hero-section"
      >
        <div className="absolute inset-x-0 top-0 h-[20vh] bg-[linear-gradient(180deg,rgba(19,38,59,1)_0%,rgba(30,58,92,0.92)_60%,rgba(245,248,251,0)_100%)]" />

        <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                Other Practice Areas
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#13263b] leading-tight mb-5"
                data-testid="hero-title"
              >
                Family Law, Criminal Defense & Appeals
              </h1>
              <p
                className="text-base md:text-lg text-[#6b7280] max-w-2xl mb-6"
                data-testid="hero-subtitle"
              >
                In addition to unemployment appeals, Warren provides experienced representation in family
                law, criminal defense, and appeals across Colorado. Each practice area focuses on clear
                communication, realistic expectations, and practical solutions.
              </p>

              <div className="flex flex-wrap gap-3">
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
            </div>

            <div className="animate-on-scroll relative" style={{ opacity: 0 }}>
              <div className="absolute -top-3 right-4 bg-[#1ea6a3] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-10">
                Experienced Counsel
              </div>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-6">
                <h2 className="text-lg font-semibold text-[#13263b] mb-3">
                  Representation Grounded in Experience
                </h2>
                <p className="text-[0.95rem] text-[#6b7280]">
                  With over 15 years of paralegal experience in family law, criminal defense, and
                  litigation, Warren understands the system from multiple perspectives. This background
                  helps provide realistic advice and effective advocacy.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Family Law Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.25fr_1fr] gap-8 md:gap-12">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <LawIcon name="handshake" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold text-[#13263b]">Family Law</h2>
              </div>
              <p className="text-base text-[#6b7280] mb-6">
                Family law matters are often emotional and stressful. Warren's approach is to explain
                Colorado law clearly, set realistic expectations, and help you make informed decisions
                about what's best for you and your family.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-3">Divorce</h3>
                  <p className="text-[0.95rem] text-[#6b7280] mb-3">
                    Uncontested and contested divorce, division of property and debt, spousal maintenance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-3">Custody & Parenting Time</h3>
                  <p className="text-[0.95rem] text-[#6b7280] mb-3">
                    Allocation of parental responsibilities, parenting plans, decision-making authority.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-3">Child Support</h3>
                  <p className="text-[0.95rem] text-[#6b7280] mb-3">
                    Initial determinations, modifications based on substantial changes in circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-3">
                    Modifications & Enforcement
                  </h3>
                  <p className="text-[0.95rem] text-[#6b7280] mb-3">
                    Post-decree modifications, contempt motions, enforcement of existing orders.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-3">Relocation</h3>
                  <p className="text-[0.95rem] text-[#6b7280] mb-3">
                    Notice requirements, relocation disputes, modification of parenting time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-3">Protection Orders</h3>
                  <p className="text-[0.95rem] text-[#6b7280] mb-3">
                    Civil protection orders, restraining orders in family law cases.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_12px_34px_rgba(15,23,42,0.1)] p-6">
                <h3 className="text-lg font-semibold text-[#13263b] mb-3">Reasonable Approach</h3>
                <p className="text-[0.95rem] text-[#6b7280] mb-4">
                  Not every family law case requires a protracted court battle. Warren works to identify
                  where negotiation makes sense and where litigation is necessary. The goal is always to
                  help you move forward with clarity and confidence.
                </p>
                <p className="text-[0.95rem] text-[#6b7280]">
                  Fees for family law matters vary based on complexity. Warren discusses pricing
                  transparently during the initial consultation so you understand what to expect.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Defense Section */}
      <section className="py-16 md:py-20 bg-[#f5f8fb]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.25fr_1fr] gap-8 md:gap-12">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <LawIcon name="handcuffs" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold text-[#13263b]">Criminal Defense</h2>
              </div>
              <p className="text-base text-[#6b7280] mb-6">
                Facing criminal charges is serious. Warren provides experienced defense representation in
                misdemeanor and some felony matters, focusing on protecting your rights and exploring all
                available options.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-2">DUI/DWAI/DUID</h3>
                  <p className="text-[0.95rem] text-[#6b7280]">
                    Defense for alcohol and drug-related driving offenses, including field sobriety test
                    challenges, BAC accuracy issues, and license suspension hearings.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-2">Drug Charges</h3>
                  <p className="text-[0.95rem] text-[#6b7280]">
                    Possession, distribution, and related offenses. Focus on Fourth Amendment protections
                    and case-specific defenses.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-2">Assault & Harassment</h3>
                  <p className="text-[0.95rem] text-[#6b7280]">
                    Defense against assault charges, harassment, menacing, and related violent crime
                    allegations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-2">Theft & Property Crimes</h3>
                  <p className="text-[0.95rem] text-[#6b7280]">
                    Theft, burglary, trespassing, criminal mischief, and related property offenses.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1e3a5c] mb-2">Probation Violations</h3>
                  <p className="text-[0.95rem] text-[#6b7280]">
                    Representation at probation revocation hearings and violation of protection order
                    cases.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_12px_34px_rgba(15,23,42,0.1)] p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#13263b] mb-3">Protecting Your Rights</h3>
                <p className="text-[0.95rem] text-[#6b7280]">
                  Criminal cases move quickly, and the decisions you make early can affect the outcome.
                  Warren focuses on understanding the facts, identifying potential defenses, and exploring
                  negotiated resolutions when appropriate. If trial is necessary, you'll be prepared.
                </p>
              </Card>

              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_12px_34px_rgba(15,23,42,0.1)] p-6">
                <h3 className="text-lg font-semibold text-[#13263b] mb-3">When to Call</h3>
                <p className="text-[0.95rem] text-[#6b7280]">
                  If you've been arrested, cited, or are under investigation, call as soon as possible.
                  Early involvement helps protect your rights and preserve your options.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Appeals Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div className="text-center mb-10 animate-on-scroll" style={{ opacity: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <LawIcon name="pillars" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-[#13263b]">Appeals</h2>
            </div>
            <p className="text-base text-[#6b7280] max-w-2xl mx-auto">
              Appeals focus on legal errors, not re-trying the entire case. Warren handles appeals of
              criminal convictions, family law orders, and protection orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll" style={{ opacity: 0 }}>
            <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6">
              <LawIcon name="judge" size={36} className="mb-3" />
              <h3 className="text-lg font-semibold text-[#13263b] mb-2">Criminal Appeals</h3>
              <p className="text-[0.95rem] text-[#6b7280]">
                Challenging convictions based on legal errors, procedural violations, or ineffective
                assistance of counsel.
              </p>
            </Card>

            <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6">
              <LawIcon name="case" size={36} className="mb-3" />
              <h3 className="text-lg font-semibold text-[#13263b] mb-2">Family Law Appeals</h3>
              <p className="text-[0.95rem] text-[#6b7280]">
                Appealing custody decisions, support orders, property division, and other family law
                rulings.
              </p>
            </Card>

            <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_10px_30px_rgba(19,38,59,0.08)] hover:shadow-[0_14px_36px_rgba(19,38,59,0.12)] transition-shadow p-6">
              <LawIcon name="law" size={36} className="mb-3" />
              <h3 className="text-lg font-semibold text-[#13263b] mb-2">Protection Order Appeals</h3>
              <p className="text-[0.95rem] text-[#6b7280]">
                Challenging the issuance of protection orders or other restraining orders.
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center text-sm text-[#6b7280] animate-on-scroll" style={{ opacity: 0 }}>
            <p>
              Appeals involve strict deadlines and complex legal arguments. Warren evaluates whether an
              appeal has merit and handles the written briefing process.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-[#f5f8fb]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12 animate-on-scroll" style={{ opacity: 0 }}>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-4">
              Simple, Transparent Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Initial Consultation',
                desc: 'Call or use the contact form. Warren returns calls personally and provides a brief, no-obligation consultation to discuss your situation.',
              },
              {
                step: 2,
                title: 'Clear Fee Agreement',
                desc: 'If representation makes sense, Warren explains what is included, what it costs, and what to expect. No hidden fees or surprises.',
              },
              {
                step: 3,
                title: 'Personal Representation',
                desc: 'Warren handles your case directly. You will always know who you are working with and what is happening at each stage.',
              },
            ].map((item) => (
              <div key={item.step} className="relative pt-10 animate-on-scroll" style={{ opacity: 0 }}>
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

      {/* Contact CTA */}
      <section id="contact" className="py-16 md:py-20 bg-white" data-testid="contact-section">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1.1fr] gap-8 md:gap-12 items-start">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-5">
                Ready to Discuss Your Legal Matter?
              </h2>
              <p className="text-base text-[#6b7280] mb-4">
                Whether you're facing a family law issue, criminal charge, or considering an appeal,
                Warren can help you understand your options and what to expect.
              </p>
              <p className="text-base text-[#6b7280] mb-6">
                Call directly or use the form to request a consultation. Warren personally returns calls
                and provides straightforward advice about your situation.
              </p>
              <div className="bg-[#f5f8fb] rounded-[18px] border border-[#e6edf5] p-5 text-sm">
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
              <ContactForm sourcePage="/other-areas" practiceArea="Family Law / Criminal Defense" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherAreasPage;
