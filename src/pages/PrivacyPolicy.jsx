import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Privacy Policy - PanenKita';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'interpretation-definitions', title: 'Interpretation & Definitions' },
    { id: 'data-collected', title: 'Types of Data Collected' },
    { id: 'use-of-data', title: 'Use of Your Personal Data' },
    { id: 'sharing', title: 'When We Share Your Data' },
    { id: 'retention', title: 'Retention' },
    { id: 'transfer', title: 'Transfer of Your Personal Data' },
    { id: 'delete', title: 'Delete Your Personal Data' },
    { id: 'disclosure', title: 'Disclosure' },
    { id: 'security', title: 'Security' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'changes', title: 'Changes to this Privacy Policy' },
    { id: 'child-safety', title: 'Child Safety Standards' },
    { id: 'contact', title: 'Contact Us' },
  ];

  // Helper component untuk Section Title agar konsisten
  const SectionTitle = ({ children, id }) => (
    <h2
      id={id}
      className="text-2xl font-bold text-dark-green mt-8 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );

  // Helper component untuk Sub-Heading
  const SubHeading = ({ children }) => (
    <h3 className="text-lg font-semibold text-teal-blue mt-6 mb-3">
      {children}
    </h3>
  );

  return (
    <div className="min-h-screen bg-cream font-sans text-gray-700">
      {/* Header Background Accent */}
      <div className="bg-dark-green h-36 w-full absolute top-16 left-0 z-0 shadow-md"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Privacy Policy
            </h1>
            <p className="mt-3 text-white/80 italic text-sm">
              Last updated: December 12, 2025
            </p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all text-white text-sm font-medium flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg bg-mustard-yellow hover:bg-yellow-500 text-white shadow-lg transition-all text-sm font-medium flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Print
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start animate-slide-up">
          {/* Main Content Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 w-full">
            <section id="overview" className="mb-8">
              <p className="leading-relaxed mb-4">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p className="leading-relaxed">
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <SectionTitle id="interpretation-definitions">
                Interpretation and Definitions
              </SectionTitle>
              <SubHeading>Interpretation</SubHeading>
              <p className="mb-4">
                The words whose initial letters are capitalized have meanings
                defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>

              <SubHeading>Definitions</SubHeading>
              <p className="mb-4">For the purposes of this Privacy Policy:</p>
              <ul className="list-none space-y-4 pl-2">
                {[
                  {
                    term: 'Account',
                    desc: 'means a unique account created for You to access our Service or parts of our Service.',
                  },
                  {
                    term: 'Affiliate',
                    desc: 'means an entity that controls, is controlled by, or is under common control with a party.',
                  },
                  {
                    term: 'Application',
                    desc: 'refers to PanenKita, the software program provided by the Company.',
                  },
                  { term: 'Company', desc: 'refers to PanenKita.' },
                  { term: 'Country', desc: 'refers to: Indonesia' },
                  {
                    term: 'Device',
                    desc: 'means any device that can access the Service.',
                  },
                  {
                    term: 'Personal Data',
                    desc: 'is any information that relates to an identified or identifiable individual.',
                  },
                  { term: 'Service', desc: 'refers to the Application.' },
                  {
                    term: 'Service Provider',
                    desc: 'means any natural or legal person who processes the data on behalf of the Company.',
                  },
                  {
                    term: 'Usage Data',
                    desc: 'refers to data collected automatically.',
                  },
                  {
                    term: 'You',
                    desc: 'means the individual accessing or using the Service.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-light-green rounded-full"></span>
                    <strong className="text-dark-green">{item.term}</strong>{' '}
                    {item.desc}
                  </li>
                ))}
              </ul>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <SectionTitle id="data-collected">
                Collecting and Using Your Personal Data
              </SectionTitle>
              <SubHeading>Types of Data Collected</SubHeading>

              <h4 className="font-bold text-gray-800 mt-4 mb-2">
                Personal Data
              </h4>
              <p className="mb-4">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-6 marker:text-light-green">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
              </ul>

              <h4 className="font-bold text-gray-800 mt-4 mb-2">Usage Data</h4>
              <p className="mb-4">
                Usage Data is collected automatically when using the Service and
                may include IP address, browser type/version, pages visited,
                time and date of visit, time spent on those pages, unique device
                identifiers and other diagnostic data.
              </p>

              <h4 className="font-bold text-gray-800 mt-4 mb-2">
                Information Collected while Using the Application
              </h4>
              <p className="mb-4">
                In order to provide features of Our Application, We may collect,
                with Your prior permission:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-light-green">
                <li>
                  Pictures and other information from your Device's camera and
                  photo library
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                You can enable or disable access to this information at any
                time, through Your Device settings.
              </p>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <SectionTitle id="use-of-data">
                Use of Your Personal Data
              </SectionTitle>
              <p className="mb-4">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'To provide and maintain our Service.',
                  'To manage Your Account.',
                  'For the performance of a contract.',
                  'To contact You by email/SMS.',
                  'To provide news & special offers.',
                  'To manage Your requests.',
                  'For business transfers.',
                  'For data analysis & improvements.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-cream/50 p-3 rounded-lg"
                  >
                    <span className="text-teal-blue mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <SectionTitle id="sharing">When We Share Your Data</SectionTitle>
              <p className="mb-4">
                We may share Your personal information in the following
                situations:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'With Service Providers',
                    text: 'to monitor and analyze the use of our Service, to contact You.',
                  },
                  {
                    title: 'For business transfers',
                    text: 'in connection with a merger, sale of assets, financing or acquisition.',
                  },
                  {
                    title: 'With Affiliates',
                    text: 'affiliates will be required to honor this Privacy Policy.',
                  },
                  {
                    title: 'With business partners',
                    text: 'to offer certain products, services or promotions.',
                  },
                  {
                    title: 'With other users',
                    text: 'when You share personal information in public areas.',
                  },
                  {
                    title: 'With Your consent',
                    text: 'for any other purpose with Your consent.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-light-green"
                  >
                    <strong className="block text-gray-900 mb-1">
                      {item.title}
                    </strong>
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
              <hr className="border-gray-100 my-8" />
            </section>

            {/* Combined simpler sections for brevity in code but kept all content */}
            <section>
              <SectionTitle id="retention">
                Retention of Your Personal Data
              </SectionTitle>
              <p className="mb-4">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy.
              </p>
              <SectionTitle id="transfer">
                Transfer of Your Personal Data
              </SectionTitle>
              <p className="mb-4">
                Your information may be processed at the Company's operating
                offices and in other places where the parties involved in
                processing are located.
              </p>
              <SectionTitle id="delete">Delete Your Personal Data</SectionTitle>
              <p className="mb-4">
                You have the right to delete or request that We assist in
                deleting the Personal Data we have collected about You.
              </p>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <SectionTitle id="disclosure">
                Disclosure of Your Personal Data
              </SectionTitle>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Business Transactions
                  </h4>
                  <p className="text-sm">
                    If the Company is involved in a merger, acquisition or asset
                    sale, Your Personal Data may be transferred.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Law enforcement
                  </h4>
                  <p className="text-sm">
                    The Company may be required to disclose Your Personal Data
                    if required by law or valid requests.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Other legal requirements
                  </h4>
                  <p className="text-sm">
                    To comply with legal obligations, protect rights, prevent
                    wrongdoing, or protect safety.
                  </p>
                </div>
              </div>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <SectionTitle id="security">
                Security of Your Personal Data
              </SectionTitle>
              <p>
                The security of Your Personal Data is important to Us. While We
                strive to use commercially reasonable means to protect Your
                Personal Data, no method of transmission or electronic storage
                is 100% secure.
              </p>
              <SectionTitle id="children">Children's Privacy</SectionTitle>
              <p>
                Our Service does not address anyone under the age of 13. If We
                learn we have collected such data without parental consent, We
                will remove it.
              </p>
              <SectionTitle id="links">Links to Other Websites</SectionTitle>
              <p>
                Our Service may contain links to other websites not operated by
                Us. We are not responsible for the content, privacy policies or
                practices of any third party sites or services.
              </p>
              <SectionTitle id="changes">
                Changes to this Privacy Policy
              </SectionTitle>
              <p>
                We may update Our Privacy Policy from time to time. Changes are
                effective when posted on this page.
              </p>
              <SectionTitle id="communication">
                Communication via Third-Party Services
              </SectionTitle>
              <p>
                Users may contact sellers or other users through third-party
                applications (e.g., WhatsApp). PanenKita is not responsible for
                messages, content, or interactions that occur outside of our
                application.
              </p>
              <hr className="border-gray-100 my-8" />
            </section>

            <section>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <SectionTitle id="child-safety">
                  <span className="text-red-700">
                    Child Safety Standards (Zero Tolerance)
                  </span>
                </SectionTitle>
                <p className="mb-4">
                  PanenKita is committed to providing a safe environment for all
                  users. We have a{' '}
                  <span className="font-bold text-red-600">
                    strict zero-tolerance policy
                  </span>{' '}
                  against Child Sexual Abuse and Exploitation (CSAE).
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-red-500">
                  <li>
                    Users are prohibited from using our Service to create,
                    upload, share, or distribute any content that depicts,
                    promotes, or normalizes child sexual abuse or exploitation.
                  </li>
                  <li>
                    If we identify violations, we will take immediate action
                    including removing content, reporting to NCMEC and law
                    enforcement, and suspending or terminating accounts.
                  </li>
                </ul>
                <p className="text-sm font-medium bg-white p-3 rounded border border-red-100 inline-block">
                  Report violations to:{' '}
                  <a
                    href="mailto:panenkita.official@gmail.com"
                    className="text-red-600 underline"
                  >
                    panenkita.official@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="mt-12 bg-cream p-8 rounded-xl text-center">
              <SectionTitle id="contact">Contact Us</SectionTitle>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <a
                href="mailto:panenkita.official@gmail.com"
                className="inline-flex items-center gap-2 text-dark-green font-bold text-lg hover:text-teal-blue transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                panenkita.official@gmail.com
              </a>
            </section>
          </div>

          {/* Table of Contents - Desktop Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 p-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <h4 className="font-bold text-dark-green mb-4 pb-2 border-b border-gray-100">
                On this page
              </h4>
              <nav>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block py-2 px-3 text-sm text-gray-500 hover:text-dark-green hover:bg-cream rounded-md transition-colors border-l-2 border-transparent hover:border-light-green truncate"
                        title={s.title}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
