import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated Sections based on new content
  const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'age', title: '2. Age Restriction' },
    { id: 'collection', title: '3. Information We Collect' },
    { id: 'usage', title: '4. How We Use Your Information' },
    { id: 'whatsapp', title: '5. Communication (WhatsApp)' },
    { id: 'retention', title: '6. Data Retention & Deletion' },
    { id: 'security', title: '7. Security' },
    { id: 'changes', title: '8. Changes to Policy' },
    { id: 'contact', title: '9. Contact Us' },
  ];

  // Helper component for consistent Section Titles
  const SectionTitle = ({ children, id }) => (
    <h2
      id={id}
      className="text-2xl font-bold text-dark-green mt-8 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );

  // Helper component for Sub-Headings
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
              Last updated: January 08, 2026
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
            {/* 1. Introduction */}
            <section id="intro">
              <SectionTitle id="intro">1. Introduction</SectionTitle>
              <p className="leading-relaxed mb-4">
                Welcome to{' '}
                <strong className="text-dark-green">PanenKita</strong> ("we,"
                "our," or "us"). PanenKita is a productivity application
                designed to help farmers and buyers record harvest data and
                manage stock. This Privacy Policy explains how we collect, use,
                and protect your information when you use our mobile application
                (the "Service").
              </p>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 2. Age Restriction */}
            <section>
              <SectionTitle id="age">2. Age Restriction (18+)</SectionTitle>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <p className="text-gray-800">
                  Our Service is intended for users{' '}
                  <strong>aged 18 and older</strong>. We do not knowingly
                  collect personal information from children under the age of
                  13. If you are a parent or guardian and believe your child has
                  provided us with personal data, please contact us immediately
                  so we can delete it.
                </p>
              </div>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 3. Information We Collect */}
            <section>
              <SectionTitle id="collection">
                3. Information We Collect
              </SectionTitle>
              <p className="mb-4">
                To provide the Service, we collect the following types of
                information:
              </p>

              <SubHeading>
                A. Information You Provide to Us (Manually)
              </SubHeading>
              <ul className="list-none space-y-3 pl-2 mb-6">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-light-green rounded-full"></span>
                  <strong className="text-dark-green">Identity Data:</strong>{' '}
                  Full name, Email address, and Phone number (for account
                  creation).
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-light-green rounded-full"></span>
                  <strong className="text-dark-green">Address Data:</strong>{' '}
                  Village name, city, or address details that you manually type
                  into the application to describe your harvest location. We do
                  not track your real-time GPS location.
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-light-green rounded-full"></span>
                  <strong className="text-dark-green">Harvest Content:</strong>{' '}
                  Data about your crops, harvest dates, prices, and stock
                  quantities.
                </li>
              </ul>

              <SubHeading>B. Information Collected Automatically</SubHeading>
              <p className="mb-4">
                <strong className="text-gray-800">Device & Analytics:</strong>{' '}
                We use third-party services (Google Firebase) that may collect
                your Device ID (Advertising ID), IP address, operating system
                version, and app usage statistics. This helps us monitor app
                stability and fix bugs.
              </p>

              <SubHeading>C. Camera & Images</SubHeading>
              <p className="mb-4">
                We request access to your device's camera and photo gallery
                solely to allow you to upload images of your harvest products.
              </p>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 4. Use of Information */}
            <section>
              <SectionTitle id="usage">
                4. How We Use Your Information
              </SectionTitle>
              <p className="mb-4">
                We use your data for the following purposes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                {[
                  'To register and manage your account.',
                  'To display your harvest listings to other users within the app.',
                  'To facilitate communication via third-party apps (see Section 5).',
                  'To improve app performance via analytics.',
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
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 5. Communication (WhatsApp) */}
            <section>
              <SectionTitle id="whatsapp">
                5. Communication via Third-Party Services
              </SectionTitle>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-green-600 fill-current"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.574 1.731.83 2.806.83 3.181 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.767-5.766-5.767zm0 10.5c-1.126 0-1.921-.301-2.924-.901l-.226-.128-1.579.414.422-1.539-.144-.229c-.588-.934-.897-1.634-.896-2.964.001-2.576 2.096-4.671 4.672-4.671 2.575 0 4.671 2.095 4.671 4.671-.001 2.576-2.097 4.672-4.673 4.672z" />
                  </svg>
                  <h4 className="font-bold text-green-800">
                    WhatsApp Integration
                  </h4>
                </div>
                <p className="mb-4 text-sm text-green-900">
                  Our Service allows users to contact sellers or buyers to
                  negotiate transactions. Please be aware that direct
                  communication takes place outside of the PanenKita app,
                  specifically through WhatsApp.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-green-900 marker:text-green-600">
                  <li>
                    When you click the "Contact" or "Chat" button, you will be
                    redirected to WhatsApp.
                  </li>
                  <li>
                    PanenKita is not responsible for the privacy practices,
                    message content, or interactions that occur on WhatsApp.
                  </li>
                  <li>
                    We strictly advise you to review WhatsApp's Privacy Policy.
                  </li>
                </ul>
              </div>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 6. Retention & Deletion */}
            <section>
              <SectionTitle id="retention">
                6. Data Retention and Deletion
              </SectionTitle>
              <p className="mb-4">
                We retain your personal data only as long as necessary to
                provide our Service.
              </p>

              <SubHeading>User Rights (Account Deletion)</SubHeading>
              <p className="mb-4">
                You have the right to request the deletion of your account and
                all associated data at any time.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-dark-green">
                <strong className="block text-gray-900 mb-2">
                  How to delete:
                </strong>
                <p className="text-gray-700">
                  Please send a request to{' '}
                  <a
                    href="mailto:panenkita.official@gmail.com"
                    className="text-teal-blue font-semibold hover:underline"
                  >
                    panenkita.official@gmail.com
                  </a>{' '}
                  with the subject
                  <span className="font-mono bg-gray-200 px-1 py-0.5 rounded ml-1 text-sm text-black">
                    "Delete Account"
                  </span>
                  . We will process your request and remove your data from our
                  servers within a reasonable timeframe.
                </p>
              </div>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 7. Security */}
            <section>
              <SectionTitle id="security">7. Security</SectionTitle>
              <p className="leading-relaxed">
                We value your trust in providing us your Personal Information
                and strive to use commercially acceptable means to protect it.
                However, no method of transmission over the internet or method
                of electronic storage is 100% secure.
              </p>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 8. Changes */}
            <section>
              <SectionTitle id="changes">
                8. Changes to This Privacy Policy
              </SectionTitle>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. You are
                advised to review this page periodically for any changes.
                Changes are effective immediately after they are posted on this
                page.
              </p>
              <hr className="border-gray-100 my-6" />
            </section>

            {/* 9. Contact */}
            <section className="mt-8 bg-cream p-8 rounded-xl text-center">
              <SectionTitle id="contact">9. Contact Us</SectionTitle>
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
                Table of Contents
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
