import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>Privacy Policy | Saroj International University</title>
          <meta
            name="description"
            content="Learn how Saroj International University collects, uses, and protects your personal information."
          />
        </Helmet>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Our commitment to your privacy and data protection.
            </p>
          </div>

          {/* Introduction */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">Introduction</h2>
            <p>
              Saroj International University ("we", "our", or "us") is committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
            <p>
              By accessing our website or using our services, you agree to the
              collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              Information We Collect
            </h2>
            <p>
              When you voluntarily send us electronic mail or fill up a form on our
              website, we will keep a record of this information so that we can
              respond to you. We only collect information from you when you
              register on our site or fill out a form. When filling out a form,
              you may be asked to enter your name, e-mail address, or phone number.
              You may, however, visit our site anonymously.
            </p>
            <p>
              In case you have submitted your personal information and contact
              details, we reserve the right to Call, SMS, Email, or WhatsApp you
              about our products and offers, even if your number has DND/NDNC
              activated on it.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register for an account on our website</li>
              <li>Apply for admission or enroll in programs</li>
              <li>Subscribe to our newsletters or updates</li>
              <li>Participate in surveys or feedback forms</li>
              <li>Contact us via email, phone, or other channels</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Name and contact details',
                'Demographic information',
                'Academic records and qualifications',
                'Payment and financial information',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Academic Purposes',
                  points: [
                    'Admission processing',
                    'Academic record maintenance',
                    'Course registration and management',
                  ],
                },
                {
                  title: 'Administrative Purposes',
                  points: [
                    'Account management',
                    'Fee collection and processing',
                    'Communication with students',
                  ],
                },
                {
                  title: 'Improvement Purposes',
                  points: [
                    'Website enhancement',
                    'Service improvement',
                    'Research and analytics',
                  ],
                },
                {
                  title: 'Legal Compliance',
                  points: [
                    'Regulatory requirements',
                    'Legal obligations',
                    'Dispute resolution',
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-2">
                    {section.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-indigo-900">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">
              We will never sell your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          {/* Data Protection */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              Data Protection
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized or unlawful
              processing, accidental loss, destruction, or damage.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <p className="text-sm text-green-700">
                Our security measures include encryption, access controls,
                secure networks, and regular security audits.
              </p>
            </div>
            <p>
              While we strive to protect your personal information, no method
              of transmission over the Internet or electronic storage is 100%
              secure. Therefore, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Control
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Essential
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Website functionality
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Cannot be disabled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Analytics
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Website improvement
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Opt-out
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Marketing
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Personalized content
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Manage preferences
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, some features of our website
              may not function properly without cookies.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              Your Data Protection Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Access and Portability',
                  desc: 'Request access to or a copy of your personal data.',
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  ),
                },
                {
                  title: 'Deletion',
                  desc: 'Request deletion of your personal data under certain conditions.',
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  ),
                },
                {
                  title: 'Rectification',
                  desc: 'Request correction of inaccurate or incomplete data.',
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ),
                },
                {
                  title: 'Restriction',
                  desc: 'Request restriction of processing your personal data.',
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              To exercise any of these rights, please contact us using the
              information provided in the "Contact Us" section below.
            </p>
          </section>

          {/* Policy Changes */}
          <section className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-yellow-700">
                For significant changes, we may provide more prominent notice
                (including, for certain services, email notification of privacy
                policy changes).
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
