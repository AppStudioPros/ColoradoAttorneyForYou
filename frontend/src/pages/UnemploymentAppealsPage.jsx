import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ContactForm } from '../components/ContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { AlertCircle, Clock, FileText, Users } from 'lucide-react';

const UnemploymentAppealsPage = () => {
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

  const jsonLdLegalService = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Colorado Unemployment Appeals',
    description:
      'Flat-fee unemployment appeal representation for denied Colorado benefits',
    provider: {
      '@type': 'Attorney',
      name: 'Warren J. Domangue',
      url: 'https://coloradoattorneyforyou.com',
    },
    areaServed: { '@type': 'State', name: 'Colorado' },
    serviceType: 'Unemployment Appeals',
    price: '650',
    priceCurrency: 'USD',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://coloradoattorneyforyou.com/unemployment-appeals',
    },
  };

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a lawyer for my unemployment appeal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You are not required to have an attorney, but many people find it helpful. A lawyer can subpoena documents, question witnesses, and help you focus on the facts that matter most under Colorado law.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my claim was denied?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Continue filing your weekly requests for benefits and file an appeal before your deadline. Your appeal letter does not need to be long, but it should identify that you disagree with the decision and want a hearing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I already had a hearing and lost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You may be able to appeal in writing to the Industrial Claims Appeals Office. Success at this stage depends on how the hearing officer applied the law and evaluated the evidence.',
        },
      },
    ],
  };

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
        name: 'Unemployment Appeals',
        item: 'https://coloradoattorneyforyou.com/unemployment-appeals',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Colorado Unemployment Appeal Lawyer | $650 Flat Fee</title>
        <meta
          name="description"
          content="Denied unemployment benefits? Warren Domangue offers affordable, flat-fee unemployment appeal representation. 20-day appeal deadline. Free consultation."
        />
        <meta
          name="keywords"
          content="unemployment appeal lawyer Colorado, Colorado unemployment benefits denied, unemployment hearing representation Colorado"
        />
        <link
          rel="canonical"
          href="https://coloradoattorneyforyou.com/unemployment-appeals"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Colorado Unemployment Appeal Lawyer | $650 Flat Fee"
        />
        <meta
          property="og:description"
          content="Denied unemployment benefits? Affordable unemployment appeal representation in Colorado."
        />
        <meta
          property="og:url"
          content="https://coloradoattorneyforyou.com/unemployment-appeals"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdLegalService)}
        </script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFAQ)}</script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBreadcrumb)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#f5f8fb] bg-opacity-75 pt-20 pb-16 md:pt-24 md:pb-20"
        data-testid="hero-section"
      >
        <div className="absolute inset-x-0 top-0 h-[20vh] bg-[linear-gradient(180deg,rgba(19,38,59,0.75)_0%,rgba(30,58,92,0.69)_60%,rgba(245,248,251,0)_100%)]" />

        <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                Colorado Unemployment Appeals
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#13263b] leading-tight mb-5"
                data-testid="hero-title"
              >
                Help When Your Unemployment Benefits Are Denied or Delayed
              </h1>
              <p
                className="text-base md:text-lg text-[#6b7280] max-w-2xl mb-6"
                data-testid="hero-subtitle"
              >
                A denial letter can feel discouraging, but it does not have to
                be the end of the process. Warren J. Domangue focuses on
                Colorado unemployment appeals and helps workers understand their
                options, prepare for hearings, and move forward with clarity.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href="tel:+17204957315" data-testid="hero-call-link">
                  <Button
                    className="rounded-full bg-[#1ea6a3] text-white px-6 h-12 hover:bg-[#189694] transition-colors shadow-lg"
                    data-testid="hero-call-button"
                  >
                    Talk About Your Denial Letter
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#1ea6a3] text-[#1ea6a3] px-6 h-12 hover:bg-[#e6f6f6] transition-colors"
                  >
                    Request Free Consultation
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#6b7280]">
                <div>
                  <p className="font-semibold text-[#13263b] mb-1">
                    Flat-fee unemployment appeals
                  </p>
                  <p>
                    Clear pricing: <strong>$650</strong> for representation in
                    most unemployment appeal hearings.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#13263b] mb-1">
                    Focused on Colorado workers
                  </p>
                  <p>
                    Guidance grounded in experience with Colorado's unemployment
                    system and hearing process.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll relative"
              style={{ opacity: 0 }}
            >
              <div className="absolute -top-3 right-4 bg-[#1ea6a3] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-10">
                Calm, practical guidance
              </div>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-6">
                <h2 className="text-lg font-semibold text-[#13263b] mb-3">
                  That letter in the mail is not the final word.
                </h2>
                <p className="text-[0.95rem] text-[#6b7280]">
                  Most people only go through this process once and are not
                  expected to know the rules. Warren helps you understand
                  timelines, what the decision means, and what you can
                  realistically hope to achieve through an appeal.
                </p>
              </Card>
            </div>
          </div>

          {/* Key Points */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#1ea6a3] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#1e3a5c] mb-2">
                  Short deadlines
                </h4>
                <p className="text-sm text-[#6b7280]">
                  In most cases, you have only 20 days from the mailing date on
                  your decision to file an appeal. Acting quickly helps preserve
                  your rights.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-[#1ea6a3] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#1e3a5c] mb-2">
                  Keep filing weekly
                </h4>
                <p className="text-sm text-[#6b7280]">
                  Even if you were denied, continue filing your weekly requests
                  for benefits so that, if you win, you can be paid for all
                  eligible weeks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-[#1ea6a3] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#1e3a5c] mb-2">
                  You don't have to do this alone
                </h4>
                <p className="text-sm text-[#6b7280]">
                  From preparing testimony to questioning witnesses, Warren
                  guides you through each step so you know what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div
            className="text-center mb-12 animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
              Understanding the Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-4">
              What Happens After Your Colorado Unemployment Claim Is Denied?
            </h2>
            <p className="text-base text-[#6b7280] max-w-2xl mx-auto">
              The appeal process can feel unfamiliar, but it follows a clear
              sequence. Knowing what comes next can make the situation feel more
              manageable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'File a timely appeal',
                desc: 'You generally have 20 days from the date the decision was mailed to submit your appeal. The appeal does not need to tell your whole story, but it must identify the issues you want reviewed.',
              },
              {
                step: 2,
                title: 'Prepare for the hearing',
                desc: 'Once a hearing is scheduled, evidence and witnesses become important. Warren helps you gather documents, request subpoenas when appropriate, and organize your testimony.',
              },
              {
                step: 3,
                title: 'Attend the hearing',
                desc: 'At the hearing, the hearing officer will take testimony from you and from any employer witnesses. Warren guides you through questions, cross-examines the other side, and focuses on facts that support eligibility.',
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
                <h4 className="font-semibold text-[#1e3a5c] mb-2">
                  {item.title}
                </h4>
                <p className="text-[0.95rem] text-[#6b7280]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 text-sm text-[#6b7280] max-w-3xl animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <p>
              If either side disagrees with the hearing officer's decision, a
              written appeal can be filed with the Industrial Claims Appeals
              Office. Warren prepares written briefs when a further appeal makes
              sense.
            </p>
          </div>
        </div>
      </section>

      {/* How Warren Helps */}
      <section className="py-16 md:py-20 bg-[#f5f8fb]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.25fr_1fr] gap-8 md:gap-12">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#13263b] mb-5">
                How Warren helps in unemployment cases
              </h2>
              <ul className="space-y-3 text-[0.95rem] text-[#6b7280]">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-2" />
                  <span>
                    Reviews your decision letter and explains what it means in
                    everyday language.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-2" />
                  <span>
                    Identifies key issues such as alleged misconduct, job
                    separation reasons, or availability for work.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-2" />
                  <span>
                    Prepares you for the types of questions you will likely be
                    asked.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-2" />
                  <span>
                    Requests subpoenas for records or witnesses when needed.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-2" />
                  <span>
                    Represents you at the hearing and, when appropriate, on
                    written appeal.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-[#6b7280] mt-6">
                A short conversation can help you decide whether hiring an
                attorney for your appeal is right for you.
              </p>
            </div>

            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <Card className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_12px_34px_rgba(15,23,42,0.1)] p-6">
                <h3 className="text-lg font-semibold text-[#13263b] mb-3">
                  Flat-Fee Representation
                </h3>
                <p className="text-[0.95rem] text-[#6b7280] mb-4">
                  For most unemployment appeal hearings, Warren offers
                  representation for a one-time fee of <strong>$650</strong>.
                  This flat fee is designed to keep costs predictable at a time
                  when your income may already feel uncertain.
                </p>
                <ul className="space-y-2 text-sm text-[#6b7280] mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-1.5" />
                    <span>Includes preparation time and representation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-1.5" />
                    <span>Covers strategy planning and document review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1ea6a3] flex-shrink-0 mt-1.5" />
                    <span>Questions answered before hearing date</span>
                  </li>
                </ul>
                <p className="text-xs text-[#6b7280]">
                  If a written appeal to the Industrial Claims Appeals Office is
                  needed after the hearing, Warren will discuss additional fees
                  before any work begins.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div
            className="text-center mb-12 animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
              Common Situations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-4">
              You Are Not Alone in This
            </h2>
            <p className="text-base text-[#6b7280] max-w-2xl mx-auto">
              Many people who contact the office share similar stories. Your
              circumstances are unique, but you may recognize yourself in some
              of these situations.
            </p>
          </div>

          <div
            className="space-y-4 max-w-3xl mx-auto animate-on-scroll"
            style={{ opacity: 0 }}
          >
            {[
              'You were fired and the employer claims you were at fault for misconduct.',
              'You resigned because of difficult or unsafe working conditions and are unsure whether it counts as "good cause" to quit.',
              'You were denied for allegedly not looking for work or not being available, even though you believe you complied with the rules.',
              'You represented yourself at a hearing and received an unfavorable decision.',
              'You won your initial appeal, and now your former employer has appealed that decision.',
            ].map((situation, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#f5f8fb] border border-[#e6edf5]"
              >
                <AlertCircle className="w-5 h-5 text-[#1ea6a3] flex-shrink-0 mt-0.5" />
                <p className="text-[0.95rem] text-[#6b7280]">{situation}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 text-center text-sm text-[#6b7280] animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <p>
              Whatever has brought you here, the next step is to understand the
              deadlines and the options that still remain.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#f5f8fb]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[900px]">
          <div
            className="text-center mb-12 animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-4">
              Questions Workers Often Ask About Colorado Unemployment Appeals
            </h2>
            <p className="text-base text-[#6b7280] max-w-2xl mx-auto">
              The unemployment system has its own language and rules. These
              answers are general and are not legal advice for your specific
              situation, but they may help you feel more oriented before you
              call.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4 animate-on-scroll"
            style={{ opacity: 0 }}
          >
            <AccordionItem
              value="item-1"
              className="bg-white rounded-[18px] border border-[#e6edf5] px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#13263b] hover:no-underline py-4">
                Do I need a lawyer for my unemployment appeal?
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] text-[#6b7280] pb-4">
                You are not required to have an attorney, but many people find
                it helpful. A lawyer can subpoena documents, question witnesses,
                and help you focus on the facts that matter most under Colorado
                law.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-[18px] border border-[#e6edf5] px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#13263b] hover:no-underline py-4">
                What should I do if my claim was denied?
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] text-[#6b7280] pb-4">
                Continue filing your weekly requests for benefits and file an
                appeal before your deadline. Your appeal letter does not need to
                be long, but it should identify that you disagree with the
                decision and want a hearing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-[18px] border border-[#e6edf5] px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#13263b] hover:no-underline py-4">
                What if I already had a hearing and lost?
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] text-[#6b7280] pb-4">
                You may be able to appeal in writing to the Industrial Claims
                Appeals Office. Success at this stage depends on how the hearing
                officer applied the law and evaluated the evidence. Warren
                reviews your decision and lets you know whether a written appeal
                may be worthwhile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-[18px] border border-[#e6edf5] px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#13263b] hover:no-underline py-4">
                What happens if my former employer does not show up?
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] text-[#6b7280] pb-4">
                The hearing usually still goes forward. You will be asked about
                your job separation, and the hearing officer will decide based
                on the information available. In some cases, the non-appearing
                party may ask for another hearing date if they can show good
                cause for missing the first one.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-[18px] border border-[#e6edf5] px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#13263b] hover:no-underline py-4">
                Can I call witnesses or get records from my employer?
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] text-[#6b7280] pb-4">
                Yes. Witnesses who have first-hand knowledge of events leading
                up to your separation can be helpful. You can also request
                subpoenas for documents, such as write-ups or emails, that may
                support your version of events.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-[18px] border border-[#e6edf5] px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#13263b] hover:no-underline py-4">
                Will talking with Warren create an attorney–client relationship?
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] text-[#6b7280] pb-4">
                An initial phone consultation is a chance to share basic
                information and decide whether to work together. Representation
                begins only after both you and Warren agree to move forward and
                you sign an engagement agreement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-white"
        data-testid="contact-section"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1.1fr] gap-8 md:gap-12 items-start">
            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1ea6a3] mb-3">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#13263b] mb-5">
                Talk with Warren About Your Unemployment Appeal
              </h2>
              <p className="text-base text-[#6b7280] mb-4">
                If you have received a denial letter, a notice of overpayment,
                or a hearing notice, it can help to talk with someone who works
                with these issues regularly. Together, you can look at
                deadlines, discuss what the decision means, and consider the
                next steps.
              </p>
              <p className="text-base text-[#6b7280] mb-6">
                You are welcome to call directly or send a brief message using
                the form. Whenever possible, Warren personally returns calls so
                you can speak with the attorney who would handle your case.
              </p>
              <div className="bg-[#f5f8fb] rounded-[18px] border border-[#e6edf5] p-5 text-sm">
                <p className="font-semibold text-[#13263b] mb-2">
                  Office: Law Office of Warren J. Domangue
                </p>
                <p className="text-[#6b7280] mb-1">
                  9888 West Belleview Ave., #158
                </p>
                <p className="text-[#6b7280] mb-3">
                  Littleton, Colorado 80123
                </p>
                <p className="text-[#6b7280]">
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+17204957315"
                    className="text-[#1ea6a3] hover:underline"
                  >
                    (720) 495-7315
                  </a>
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ opacity: 0 }}>
              <ContactForm
                sourcePage="/unemployment-appeals"
                practiceArea="Unemployment Appeals"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnemploymentAppealsPage;
