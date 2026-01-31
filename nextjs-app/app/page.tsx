import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import LawIcon from '@/components/LawIcon'

export const metadata: Metadata = {
  title: 'Colorado Unemployment Appeals & Family Law | Law Office of Warren J. Domangue',
  description: 'Experienced Colorado attorney specializing in unemployment appeals, family law, and criminal defense. Flat-fee unemployment representation. Free consultation available.',
  keywords: 'Colorado unemployment appeal lawyer, family law attorney Littleton, criminal defense Colorado, divorce attorney Denver',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-x-0 top-0 h-[35vh] bg-[linear-gradient(180deg,rgba(19,38,59,1)_0%,rgba(25,48,75,0.85)_25%,rgba(30,58,92,0.65)_50%,rgba(200,215,230,0.25)_75%,rgba(245,248,251,0)_100%)]" />

        <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                Colorado Legal Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-5">
                Colorado Unemployment Appeals & Family Law
              </h1>
              <p className="text-base md:text-lg text-muted max-w-2xl mb-6">
                Experienced, responsive counsel focused on clear communication and real-world solutions.
                Whether you're facing a denied unemployment claim, family law matter, or criminal charge,
                Warren provides approachable guidance without the corporate feel.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href="tel:+17204957315">
                  <button className="rounded-full bg-accent text-white px-6 h-12 hover:bg-accent-hover transition-colors shadow-lg">
                    Call for Free Consultation
                  </button>
                </a>
                <a href="#contact">
                  <button className="rounded-full border-2 border-accent text-accent px-6 h-12 hover:bg-accent/10 transition-colors">
                    Request Consultation
                  </button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted">
                <div>
                  <p className="font-semibold text-primary mb-1">Flat-fee unemployment appeals</p>
                  <p>Clear pricing: <strong>$650</strong> for most unemployment hearings</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Focused on Colorado workers</p>
                  <p>15+ years paralegal experience in Colorado law</p>
                </div>
              </div>
            </div>

            {/* Right Column - Info Card */}
            <div className="relative">
              <div className="absolute -top-3 right-4 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-10">
                Calm, practical guidance
              </div>
              <div className="rounded-card bg-white border border-gray-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  That letter in the mail is not the final word.
                </h3>
                <p className="text-[0.95rem] text-muted">
                  Most people only go through this process once and are not expected to know the rules.
                  Warren helps you understand timelines, what the decision means, and what you can
                  realistically hope to achieve through an appeal.
                </p>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div>
              <h4 className="font-semibold text-primary-light mb-2">Short deadlines</h4>
              <p className="text-sm text-muted">
                In most cases, you have only 20 days from the mailing date on your decision to file an
                appeal. Acting quickly helps preserve your rights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-light mb-2">Keep filing weekly</h4>
              <p className="text-sm text-muted">
                Even if you were denied, continue filing your weekly requests for benefits so that, if you
                win, you can be paid for all eligible weeks.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-light mb-2">You don't have to do this alone</h4>
              <p className="text-sm text-muted">
                From preparing testimony to questioning witnesses, Warren guides you through each step so
                you know what to expect on the day of your hearing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              Practice Areas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Focused Legal Services
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Warren concentrates on areas where clear communication and real-world experience make the
              biggest difference for Colorado clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-6">
              <LawIcon name="balance" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Unemployment Appeals</h3>
              <p className="text-[0.95rem] text-muted mb-4">
                Flat-fee representation for denied Colorado unemployment benefits. 20-day appeal deadline
                matters.
              </p>
              <Link href="/unemployment-appeals" className="text-accent hover:underline font-medium">
                Learn More →
              </Link>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-6">
              <LawIcon name="handshake" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Family Law</h3>
              <p className="text-[0.95rem] text-muted mb-4">
                Divorce, custody, child support, modifications, and relocation. Uncontested and contested
                matters.
              </p>
              <Link href="/other-areas" className="text-accent hover:underline font-medium">
                Learn More →
              </Link>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-6">
              <LawIcon name="gavel" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Criminal Defense & Appeals</h3>
              <p className="text-[0.95rem] text-muted mb-4">
                DUI/DWAI defense, drug charges, criminal appeals. Protecting your rights from day one.
              </p>
              <Link href="/other-areas" className="text-accent hover:underline font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                About Warren J. Domangue
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
                Experience You Can Understand
              </h2>
              <p className="text-base text-muted mb-4">
                Warren J. Domangue brings over 15 years of paralegal experience in family law, criminal
                defense, and litigation before becoming a licensed Colorado attorney. This background means
                Warren knows the system from the inside out—not just the law, but how things actually work
                in practice.
              </p>
              <p className="text-base text-muted mb-4">
                When you call, you speak with Warren directly. When you hire the firm, Warren handles your
                case personally. There's no shuffling between associates or paralegals who don't know your
                story.
              </p>
            </div>

            <div>
              <div className="rounded-card bg-white border border-gray-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Client-Focused Approach</h3>
                <p className="text-[0.95rem] text-muted mb-4">
                  Legal problems are stressful. Warren's approach is to explain things in plain language,
                  set realistic expectations, and focus on what actually matters to you—not legal jargon
                  that sounds impressive but doesn't help.
                </p>
                <p className="text-[0.95rem] text-muted">
                  Whether it's a flat-fee unemployment appeal or a family law case with multiple moving
                  parts, the goal is always the same: help you understand the process and move forward with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 md:py-20 bg-background">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1.1fr] gap-8 md:gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
                Ready to Discuss Your Case?
              </h2>
              <p className="text-base text-muted mb-4">
                If you have received a denial letter, a notice of overpayment, or a hearing notice, it can
                help to talk with someone who works with these issues regularly.
              </p>
              <p className="text-base text-muted mb-6">
                You are welcome to call directly or send a brief message using the form.
              </p>
              <div className="bg-white rounded-card border border-gray-200 p-5 text-sm">
                <p className="font-semibold text-primary mb-2">
                  Office: Law Office of Warren J. Domangue
                </p>
                <p className="text-muted mb-1">9888 West Belleview Ave., #158</p>
                <p className="text-muted mb-3">Littleton, Colorado 80123</p>
                <p className="text-muted">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+17204957315" className="text-accent hover:underline">
                    (720) 495-7315
                  </a>
                </p>
              </div>
            </div>

            <div>
              <ContactForm sourcePage="/" practiceArea="General Inquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
