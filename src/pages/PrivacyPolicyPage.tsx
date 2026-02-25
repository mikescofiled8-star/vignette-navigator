import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 1 – Contact details and data controller</h2>
            <p>1.1 This Privacy Policy applies to the processing of personal data by:</p>
            <p>Roadwise Group B.V.<br/>Oudegracht 294<br/>3511 NX Utrecht<br/>The Netherlands</p>
            <p>Website: Tollvignettes.eu<br/>Email: support@tollvignettes.com<br/>Chamber of Commerce (KvK) number: 90577434<br/>VAT numbers: NL865371131B01 / HU30991369</p>
            <p>1.2 Roadwise Group B.V. is the data controller within the meaning of the General Data Protection Regulation (GDPR).</p>
            <p>1.3 For specific services, Roadwise Group B.V. engages third parties ("processors" or "sub-processors") who process data on its behalf.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 2 – Types of data processed</h2>
            <p>2.1 Roadwise Group B.V. processes only those data that are strictly necessary for the provision of its services.</p>
            <p>2.2 The following categories of personal data may be processed:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address – for confirmation, communication, and customer support</li>
              <li>Vehicle registration number (license plate)</li>
              <li>Country of vehicle registration</li>
              <li>Vehicle category/type</li>
              <li>Start date and duration of validity of the requested vignette</li>
              <li>Order details and history</li>
            </ul>
            <p>2.3 In certain cases, additional personal data are processed due to the requirements of the respective vignette issuers (e.g., full name and address for Hungary, passport number and VIN for Moldova, VIN for Romania).</p>
            <p>2.4 Roadwise Group B.V. does not process any special categories of personal data nor does it knowingly collect data from children under 16.</p>
            <p>2.5 Payment information is not processed by Roadwise Group B.V. All payments are securely handled by certified third-party providers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 3 – Purposes and legal bases of processing</h2>
            <p>3.1 Personal data is processed solely for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fulfilling the agreement with the customer</li>
              <li>Communicating regarding order status, questions, or support</li>
              <li>Ensuring proper functioning and optimisation of the website</li>
              <li>Preventing fraud and monitoring service abuse</li>
              <li>Complying with legal and administrative obligations</li>
              <li>Sending service-related messages or limited promotional communication</li>
            </ul>
            <p>3.2 The processing is based on: Performance of a contract (Art. 6(1)(b)), Legal obligation (Art. 6(1)(c)), Legitimate interest (Art. 6(1)(f)), and Consent (Art. 6(1)(a)) GDPR.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 4 – Sharing of data with third parties</h2>
            <p>4.1 Roadwise Group B.V. does not sell personal data to third parties. Data are only shared when necessary for service performance or to meet legal obligations.</p>
            <p>4.2 Third-party service providers include payment processors (Nuvei, Pay.nl, PayPal), email communication (Klaviyo), analytics (Google Analytics, Google Ads, Converge), customer support (Trengo), UX tools (Hotjar), and customer feedback (Trustpilot).</p>
            <p>4.3 All third parties are bound by data processing agreements ensuring GDPR compliance.</p>
            <p>4.4 Data may be shared with official vignette issuing authorities for registration purposes.</p>
            <p>4.5 Transfers outside the EEA are based on appropriate safeguards.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 5 – Data retention periods</h2>
            <p>5.1 Personal data is not retained longer than necessary for the purposes for which it was collected.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vehicle and registration data: up to 7 years</li>
              <li>Personal data for Hungarian and Moldovan vignettes: maximum 18 months</li>
              <li>Communication data: up to 2 years</li>
              <li>Analytics and conversion data: up to 26 months</li>
            </ul>
            <p>5.4 After expiration, data are securely deleted or irreversibly anonymised.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 6 – Security measures</h2>
            <p>6.1 Roadwise Group B.V. takes appropriate technical and organisational measures to protect personal data.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>All communication is secured using TLS encryption (HTTPS)</li>
              <li>Role-based access control (RBAC)</li>
              <li>Employees are bound by confidentiality agreements</li>
              <li>Data stored in ISO 27001 or SOC 2-certified data centres within the EEA</li>
              <li>Multi-factor authentication (MFA) and timely security updates</li>
              <li>Regular risk assessments and internal audits</li>
            </ul>
            <p>6.3 In the event of a data breach, the competent supervisory authority will be notified without undue delay.</p>
            <p>6.4 Contact: support@tollvignettes.com</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 7 – Cookies</h2>
            <p>7.1 We use essential cookies (session, language, cart), analytical cookies (Google Analytics, Converge, Hotjar), and marketing cookies (Google Ads, Klaviyo, Trustpilot).</p>
            <p>7.2 Consent for non-essential cookies is obtained via Cookiebot.</p>
            <p>7.3 You may manage or delete cookies via your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 8 – Data subject rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
              <li>Right not to be subject to automated decision-making</li>
            </ul>
            <p>To exercise any of these rights, contact: support@tollvignettes.com</p>
            <p>You may also lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens): <a href="https://www.autoriteitpersoonsgegevens.nl" className="text-primary underline" target="_blank" rel="noopener noreferrer">www.autoriteitpersoonsgegevens.nl</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 9 – Supervisory Authority and Applicable Law</h2>
            <p>9.1 This privacy policy is governed by Dutch law and supervised by the Dutch Data Protection Authority.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 10 – Language and prevailing version</h2>
            <p>10.1 This privacy policy was originally drafted in Dutch. In the event of discrepancies, the Dutch version shall prevail.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
