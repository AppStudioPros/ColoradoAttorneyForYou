import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import LawIcon from '@/components/LawIcon'

export const metadata: Metadata = {
  title: 'Colorado Unemployment Appeals Lawyer | Flat-Fee Representation',
  description: 'Experienced Colorado unemployment appeals attorney. Flat-fee representation for denied benefits. 20-day appeal deadline. Free consultation available.',
  keywords: 'Colorado unemployment appeal lawyer, unemployment benefits appeal, unemployment hearing attorney, denied unemployment benefits Colorado',
}

export default function UnemploymentAppealsPage() {
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
                Unemployment Appeals
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-5">
                Colorado Unemployment Appeals
              </h1>
              <p className="text-base md:text-lg text-muted max-w-2xl mb-6">
                If you've been denied unemployment benefits in Colorado, you have the right to appeal.
                Warren provides flat-fee representation for unemployment hearings, helping you understand
                the process and prepare your case.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href="tel:+17204957315">
                  <button className="rounded-full bg-accent text-white px-6 h-12 hover:bg-accent-hover transition-colors shadow-lg">
                    Call (720) 495-7315
                  </button>
                </a>
                <a href="#contact">
                  <button className="rounded-full border-2 border-accent text-accent px-6 h-12 hover:bg-accent/10 transition-colors">
                    Request Consultation
                  </button>
                </a>
              </div>

              <div className="bg-white rounded-card border border-gray-200 shadow-md p-5 text-sm">
                <p className="font-semibold text-primary mb-2">Flat-Fee Pricing</p>
                <p className="text-muted mb-1">
                  <strong>$650</strong> for most unemployment hearings (initial level)
                </p>
                <p className="text-xs text-muted">Clear, upfront pricing with no hourly billing surprises.</p>
              </div>
            </div>

            {/* Right Column - Info Card */}
            <div className="relative">
              <div className="absolute -top-3 right-4 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-10">
                20-day deadline
              </div>
              <div className="rounded-card bg-white border border-gray-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Act quickly to preserve your rights
                </h3>
                <p className="text-[0.95rem] text-muted">
                  In most cases, you have only 20 days from the mailing date on your denial notice to
                  file an appeal. Missing this deadline can cost you months of benefits you might
                  otherwise win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              The Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How Unemployment Appeals Work
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Most people only go through this process once. Here's what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="contract" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">1. File Your Appeal</h3>
              <p className="text-[0.95rem] text-muted">
                You must file your appeal within 20 days of the mailing date on your determination
                notice. Warren can help you file properly and on time.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="research" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">2. Prepare Your Case</h3>
              <p className="text-[0.95rem] text-muted">
                Warren reviews your file, gathers supporting documents, and prepares you for what
                questions you'll be asked at the hearing.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="gavel" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">3. Hearing & Decision</h3>
              <p className="text-[0.95rem] text-muted">
                Your hearing is typically held by phone. Warren presents your case, questions
                witnesses, and argues why you should receive benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              Common Issues
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Claims Are Denied
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Understanding the reason for your denial is the first step toward winning your appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Misconduct / Discharge</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                Your employer claims you were fired for breaking company rules or policy. These cases
                often come down to what you knew, what you did, and whether a warning was given.
              </p>
              <p className="text-sm text-muted">
                Warren helps you tell your side of the story and challenge the employer's version of
                events.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Voluntary Quit</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                If you quit, Colorado law requires you to show you had "good cause" attributable to the
                employer. This might include unsafe conditions, harassment, or a significant change in
                your job.
              </p>
              <p className="text-sm text-muted">
                Warren walks you through what evidence you need to prove good cause.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Able & Available</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                Colorado requires you to be able to work, available for work, and actively seeking work.
                Denials can happen if you have restrictions, didn't apply for jobs, or weren't ready to
                start.
              </p>
              <p className="text-sm text-muted">
                Warren helps you show you met these requirements or had a valid reason for any gaps.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Overpayment Appeals</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                If the state says you were overpaid, you have the right to appeal. Warren reviews
                whether the overpayment calculation is correct and whether you can show you weren't at
                fault.
              </p>
              <p className="text-sm text-muted">
                Even if the overpayment is valid, Warren can argue for a waiver if you acted in good
                faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[900px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What You Need to Know
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Do I have to pay upfront?
              </h3>
              <p className="text-[0.95rem] text-muted">
                Yes. The flat fee is due before your hearing. This keeps things simple and ensures
                Warren is prepared to represent you from day one.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                What if I can't afford an attorney?
              </h3>
              <p className="text-[0.95rem] text-muted">
                You have the right to represent yourself. Warren also offers a free initial
                consultation so you can understand your options before deciding whether to hire counsel.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                How long does the process take?
              </h3>
              <p className="text-[0.95rem] text-muted">
                Most hearings are scheduled within 4-6 weeks after you file your appeal. The hearing
                itself usually lasts 30-60 minutes. You typically receive a written decision within 10
                days after the hearing.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Should I keep filing my weekly claims?
              </h3>
              <p className="text-[0.95rem] text-muted">
                Yes. Even if you were denied, continue filing your weekly requests for benefits. If you
                win your appeal, you can be paid for all eligible weeks—but only if you filed for them.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                What if I lose my appeal?
              </h3>
              <p className="text-[0.95rem] text-muted">
                You have the right to appeal further to the Industrial Claim Appeals Office (ICAO) and,
                if necessary, to the Colorado Court of Appeals. Warren can explain your options and
                chances at each level.
              </p>
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
                Ready to Appeal Your Denial?
              </h2>
              <p className="text-base text-muted mb-4">
                If you have received a denial letter or an overpayment notice, it's important to act
                quickly. The 20-day appeal deadline is strict.
              </p>
              <p className="text-base text-muted mb-6">
                Call or send a message to discuss your case and learn whether an appeal makes sense for
                you.
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
              <ContactForm sourcePage="/unemployment-appeals" practiceArea="Unemployment Appeals" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
