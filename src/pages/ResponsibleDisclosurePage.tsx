import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResponsibleDisclosurePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Responsible disclosure policy</h1>
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>At Roadwise Group B.V., the security of our systems is a top priority. Despite our best efforts to secure our infrastructure, vulnerabilities may still occur. If you discover a security issue, we kindly ask you to report it to us in a responsible manner so we can take prompt action to address it.</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Reporting a vulnerability</h2>
            <p>If you identify a vulnerability, please adhere to the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send your findings to <a href="mailto:support@tollvignettes.com" className="text-primary underline">support@tollvignettes.com</a>.</li>
              <li>Do not exploit the vulnerability, for example by downloading more data than necessary to demonstrate the issue or by deleting or modifying other users' data.</li>
              <li>Do not disclose the vulnerability to others until it has been resolved.</li>
              <li>Do not use methods such as attacks on physical security, social engineering, denial of service (DDoS), spam, or third-party application attacks.</li>
              <li>Provide sufficient detail to allow us to reproduce the issue, such as the IP address, affected URL, and a clear description.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Our commitment</h2>
            <p>Provided that you comply with the guidelines above, we commit to the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will acknowledge receipt of your report within three business days and provide an initial evaluation and estimated timeline for resolution.</li>
              <li>We will not pursue legal action against you in relation to the report, provided it is submitted in good faith.</li>
              <li>We will handle your report with strict confidentiality and will not share your personal details without your explicit permission.</li>
              <li>We will keep you informed of the progress made in resolving the issue.</li>
              <li>We will credit you publicly as the discoverer if you wish.</li>
              <li>We offer a reward for reports that reveal previously unknown security issues. The reward amount is determined based on the severity of the issue and the quality of the report, with a minimum of a €50 gift certificate.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResponsibleDisclosurePage;
