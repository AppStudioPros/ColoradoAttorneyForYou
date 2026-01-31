import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import LawIcon from '@/components/LawIcon'

export const metadata: Metadata = {
  title: 'Family Law & Criminal Defense | Colorado Attorney',
  description: 'Colorado family law and criminal defense attorney. Divorce, custody, child support, DUI/DWAI, drug charges, and criminal appeals. Experienced representation in Littleton and Denver.',
  keywords: 'Colorado family law attorney, divorce lawyer Littleton, child custody attorney, DUI lawyer Colorado, criminal defense Denver',
}

export default function OtherAreasPage() {
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
                Additional Practice Areas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-5">
                Family Law & Criminal Defense
              </h1>
              <p className="text-base md:text-lg text-muted max-w-2xl mb-6">
                Warren provides experienced representation in family law matters and criminal defense.
                From divorce and custody disputes to DUI charges and criminal appeals, you get direct
                access to an attorney who knows Colorado law and cares about real-world results.
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
            </div>

            {/* Right Column - Info Card */}
            <div className="relative">
              <div className="absolute -top-3 right-4 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-10">
                Real-world solutions
              </div>
              <div className="rounded-card bg-white border border-gray-200 shadow-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Legal issues that affect your life
                </h3>
                <p className="text-[0.95rem] text-muted">
                  Whether you're facing a family law matter or criminal charge, Warren provides
                  straightforward counsel focused on your goals, not unnecessary legal battles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Law Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              Family Law
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Divorce, Custody & Family Matters
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Warren handles both uncontested and contested family law cases in Colorado, from initial
              filings through trial if necessary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="handshake" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Divorce & Legal Separation</h3>
              <p className="text-[0.95rem] text-muted">
                Whether you and your spouse agree on the terms or need to litigate contested issues,
                Warren guides you through the dissolution process with clarity and care.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="contract" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Child Custody & Parenting Time</h3>
              <p className="text-[0.95rem] text-muted">
                Allocation of parental responsibilities (legal custody) and parenting time (physical
                custody) are often the most important issues in a family law case. Warren fights for
                arrangements that protect your relationship with your children.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="balance" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Child Support & Maintenance</h3>
              <p className="text-[0.95rem] text-muted">
                Colorado uses statutory guidelines to calculate child support. Warren ensures the
                calculations are accurate and argues for deviations when appropriate. Spousal
                maintenance (alimony) is also addressed.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="folder" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Modifications & Enforcement</h3>
              <p className="text-[0.95rem] text-muted">
                If circumstances have changed since your original orders, you may be able to modify
                custody, support, or other terms. Warren also handles enforcement actions when the
                other party isn't following court orders.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="courthouse" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Relocation Cases</h3>
              <p className="text-[0.95rem] text-muted">
                If you or the other parent wants to move out of state (or a significant distance within
                Colorado), court approval may be required. Warren represents both parents seeking to
                relocate and those objecting to relocation.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="gavel" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Contempt & Compliance</h3>
              <p className="text-[0.95rem] text-muted">
                When a party repeatedly violates court orders, contempt proceedings may be necessary.
                Warren handles both motions for contempt and defenses to contempt claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Defense Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              Criminal Defense
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Protecting Your Rights from Day One
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              If you've been charged with a crime, you have constitutional rights. Warren ensures
              those rights are protected at every stage of your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="handcuffs" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">DUI / DWAI Defense</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                Driving under the influence (DUI) and driving while ability impaired (DWAI) charges
                carry serious consequences, including license suspension, jail time, and increased
                insurance costs.
              </p>
              <p className="text-sm text-muted">
                Warren challenges the stop, the testing procedures, and the prosecution's evidence to
                protect your driving privileges and your record.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="evidence" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Drug Charges</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                Possession, distribution, and manufacturing charges can result in felony convictions
                with long-term consequences. Warren examines whether the search was legal, whether the
                evidence can be suppressed, and what diversion or treatment options might be available.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="gavel" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Theft & Property Crimes</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                Shoplifting, theft, burglary, and criminal mischief charges can lead to jail time and
                restitution orders. Warren works to minimize the impact on your record and explore
                alternatives to prosecution when possible.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <LawIcon name="courthouse" size={40} className="mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Domestic Violence Defense</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                Domestic violence charges carry a mandatory arrest policy in Colorado and can result in
                protective orders that affect your housing, custody, and gun rights. Warren defends
                against these charges and challenges unjust protective orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Appeals Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">
              Criminal Appeals
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Post-Conviction Relief
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              If you were convicted at trial or believe your plea was unlawful, you may have grounds
              for an appeal or post-conviction motion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Direct Criminal Appeals</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                A direct appeal challenges errors that occurred during your trial, such as improper
                admission of evidence, incorrect jury instructions, or insufficient evidence to support
                the verdict.
              </p>
              <p className="text-sm text-muted">
                Warren reviews the trial record, identifies appellate issues, and briefs those issues
                to the Colorado Court of Appeals.
              </p>
            </div>

            <div className="rounded-card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Post-Conviction Motions (Rule 35)</h3>
              <p className="text-[0.95rem] text-muted mb-3">
                If you believe your trial attorney provided ineffective assistance, or if you entered
                a plea without understanding the consequences, you may file a Crim. P. 35(c) motion.
              </p>
              <p className="text-sm text-muted">
                Warren investigates these claims and presents evidence to support relief, including
                withdrawal of your plea or a new trial.
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
                Discuss Your Family Law or Criminal Case
              </h2>
              <p className="text-base text-muted mb-4">
                Legal problems in these areas can be stressful and confusing. Warren is here to
                explain your options in plain language and help you make informed decisions.
              </p>
              <p className="text-base text-muted mb-6">
                Call or send a message to schedule a consultation.
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
              <ContactForm sourcePage="/other-areas" practiceArea="Family Law / Criminal Defense" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
