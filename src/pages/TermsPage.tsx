import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms and conditions</h1>
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 1 – Parties and definitions</h2>
            <p>1.1 Roadwise Group B.V., having its registered office at Oudegracht 294, 3511 NX Utrecht, the Netherlands, and registered with the Dutch Chamber of Commerce under number 90577434, is the user of these general terms and conditions. Roadwise Group B.V. provides intermediary services for the acquisition of digital toll vignettes and, where applicable, acts as an authorized reseller.</p>
            <p>1.2 Further company details of Roadwise Group B.V.:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website: Tollvignettes.eu</li>
              <li>Email: support@tollvignettes.com</li>
              <li>VAT identification numbers:
                <ul className="list-disc pl-6">
                  <li>The Netherlands: NL865371131B01</li>
                  <li>Hungary: HU30991369 / 30991369-2-51</li>
                  <li>Switzerland: CHE‑303.839.348</li>
                </ul>
              </li>
            </ul>
            <p>1.3 The customer: any natural person acting as a consumer. A consumer is defined as any natural person who is acting for purposes which are outside his trade, business, craft or profession, in accordance with Directive 2011/83/EU.</p>
            <p>1.4 The vignette issuer: the official authority responsible for issuing the vignette for the relevant country.</p>
            <p>1.5 The order: the customer's request to Roadwise Group B.V. for the provision of one or more services, which includes the application for and registration of a vignette with a vignette issuer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 2 – Applicability</h2>
            <p>2.1 These general terms and conditions apply to the use of the website of Roadwise Group B.V., to every offer made by Roadwise Group B.V., and to every agreement concluded between Roadwise Group B.V. and the customer.</p>
            <p>2.2 Deviations from these general terms and conditions are only valid if they have been expressly agreed upon in writing between Roadwise Group B.V. and the customer.</p>
            <p>2.3 Any general terms and conditions of the customer, of whatever nature, are expressly rejected and shall not apply, unless Roadwise Group B.V. has expressly agreed to them in writing.</p>
            <p>2.4 Third parties engaged by Roadwise Group B.V. in the execution of the agreement may invoke these general terms and conditions as if they were a party to the agreement.</p>
            <p>2.5 If any provision of these general terms and conditions is wholly or partially void or annulled, the remaining provisions shall remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 3 – Offer, prices and formation of the agreement</h2>
            <p>3.1 All offers, prices, and information on the website of Roadwise Group B.V. are non-binding and indicative, unless expressly stated otherwise.</p>
            <p>3.2 The prices listed on the website include VAT and any other applicable taxes or levies, unless indicated otherwise.</p>
            <p>3.3 The descriptions of the services offered, product details, images, and other information on the website are intended to provide as accurate a representation as possible.</p>
            <p>3.4 Obvious errors or mistakes in the offer do not bind Roadwise Group B.V.</p>
            <p>3.5 Roadwise Group B.V. is entitled to engage third parties for the execution of the agreement.</p>
            <p>3.6 The agreement between Roadwise Group B.V. and the customer is concluded once the customer has completed the ordering process on the website, has accepted these general terms and conditions, and the payment has been successfully processed.</p>
            <p>3.7 Roadwise Group B.V. shall make reasonable efforts to provide the service as soon as possible after payment.</p>
            <p>3.8 Unless expressly agreed otherwise, Roadwise Group B.V. has sole discretion in determining the manner in which the service is provided.</p>
            <p>3.9 Roadwise Group B.V. is not a party to the agreement between the customer and the official authority that issues the vignette.</p>
            <p>3.10 The customer is fully responsible for entering accurate and complete vehicle information, including the license plate number, country of registration, vehicle category, and other relevant data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 4 – Obligations of the customer</h2>
            <p>4.1 The customer shall enable Roadwise Group B.V. to properly perform the agreement and shall provide all necessary cooperation for that purpose.</p>
            <p>4.2 The customer is responsible for providing all information required for the execution of the service in a timely and accurate manner.</p>
            <p>4.3 Roadwise Group B.V. is not obliged to verify the information provided by the customer.</p>
            <p>4.4 The customer is solely responsible for reviewing and understanding the terms applicable to the relevant vignette.</p>
            <p>4.5 Disputes or issues arising from the relationship between the customer and the vignette issuer must be resolved directly by the customer with the relevant authority.</p>
            <p>4.6 Roadwise Group B.V. will review the information provided by the customer to the best of its ability, but accepts no liability for any damage resulting from the execution of the agreement based on incorrect information.</p>
            <p>4.7 The customer guarantees that all files or data submitted digitally are free of viruses or malicious software.</p>
            <p>4.8 The customer must verify the received vignette no later than 24 hours before use.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 5 – Prices and payment</h2>
            <p>5.1 The prices of the services offered are clearly stated on the website and include VAT, unless expressly indicated otherwise.</p>
            <p>5.2 The amount paid by the customer consists of two components: the toll fee (official fee) and the registration fee (service fee).</p>
            <p>5.3 Full payment must be made immediately prior to the performance of the service via one of the available payment methods.</p>
            <p>5.4 In the event of non-payment, Roadwise Group B.V. is under no obligation to perform any service.</p>
            <p>5.5 In the event of unjustified chargebacks, the customer shall owe statutory interest and reasonable extrajudicial collection costs (minimum €40).</p>
            <p>5.6 The customer is not entitled to suspend or offset any payment obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 6 – Termination of the agreement</h2>
            <p>6.1 Roadwise Group B.V. has the right to terminate the agreement with immediate effect if the customer has provided false information, breaches terms, or there is suspicion of fraud.</p>
            <p>6.2 In the event of termination, the customer is not entitled to a refund of any amounts already paid.</p>
            <p>6.3 All payment obligations that have already arisen shall remain fully enforceable.</p>
            <p>6.4 The termination does not affect the relationship between the customer and the vignette issuer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 7 – Liability</h2>
            <p>7.1 Liability shall be limited to the amount paid by the customer for the relevant service.</p>
            <p>7.2 Roadwise Group B.V. shall not be liable for indirect or consequential damages, including fines, missed bookings, delays, or other costs.</p>
            <p>7.3 Roadwise Group B.V. is not liable for any statements, decisions, or errors made by the vignette issuer.</p>
            <p>7.4 If incorrect information was provided by the customer, the customer shall be liable for any resulting damage.</p>
            <p>7.5 Any claim for compensation must be submitted within 12 months of the performance of the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 8 – Privacy and intellectual property</h2>
            <p>8.1 Roadwise Group B.V. processes personal data in accordance with applicable privacy legislation (GDPR) and its privacy policy.</p>
            <p>8.2 The customer agrees that their data may be shared with the relevant vignette issuer solely for registration purposes.</p>
            <p>8.3 Roadwise Group B.V. reserves the right to use anonymized data for internal analysis.</p>
            <p>8.4 All intellectual property rights relating to the website are the exclusive property of Roadwise Group B.V.</p>
            <p>8.5 Third parties may not copy, reproduce, publish, or commercially exploit these materials without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 9 – Right of withdrawal</h2>
            <p>9.1 The customer has the right to withdraw from the agreement within 14 days without giving any reason, in accordance with European consumer legislation.</p>
            <p>9.2 This right lapses once the service has been fully performed with the customer's explicit prior consent.</p>
            <p>9.3 During ordering, the customer explicitly consents to the immediate commencement of the service.</p>
            <p>9.4 If the customer wishes to withdraw before the service has been performed, they must notify support@tollvignettes.com within the withdrawal period.</p>
            <p>9.5 The right of withdrawal applies exclusively to consumers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 10 – Force majeure</h2>
            <p>10.1 Force majeure refers to any circumstance beyond the control of Roadwise Group B.V. that prevents or hinders performance of the agreement.</p>
            <p>10.2 In the event of force majeure, obligations are suspended. If performance remains impossible for more than 30 days, Roadwise Group B.V. may terminate the agreement.</p>
            <p>10.3 Roadwise Group B.V. is entitled to invoice the completed portion separately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 11 – Use of the website</h2>
            <p>11.1 Roadwise Group B.V. strives to keep the information on its website current, accurate, and complete.</p>
            <p>11.2 Roadwise Group B.V. shall not be liable for any damages resulting from the use of the website.</p>
            <p>11.3 The website may contain links to third-party websites. Roadwise Group B.V. is not responsible for the content of such external websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 12 – Complaints</h2>
            <p>12.1 Complaints must be submitted within 14 days to support@tollvignettes.com. Customers may also use the European ODR platform: <a href="https://ec.europa.eu/consumers/odr" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
            <p>12.2 Roadwise Group B.V. aims to respond within 5 working days.</p>
            <p>12.3 If a dispute cannot be resolved by mutual agreement, the customer may submit the matter to the competent court.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 13 – Limitation of legal assumptions</h2>
            <p>13.1 Roadwise Group B.V. does not provide formal permission or guarantees for the customer to use toll roads.</p>
            <p>13.2 The assessment of whether a vehicle qualifies for a vignette lies solely with the issuing authority.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 14 – Language and interpretation</h2>
            <p>14.1 These general terms and conditions were originally drafted in Dutch.</p>
            <p>14.2 In the event of any discrepancy, the Dutch text shall prevail.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 15 – Jurisdiction, governing law, and assignment of rights</h2>
            <p>15.1 Roadwise Group B.V. is entitled to assign its rights and obligations to a third party.</p>
            <p>15.2 This agreement is governed by Dutch law.</p>
            <p>15.3 Disputes shall be submitted to the competent court in the district of Utrecht. Consumers may submit disputes to the competent court in their place of residence.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Article 16 – Swiss vignette (Applicable as of 1 January 2026)</h2>
            <p>16.1 This article applies exclusively to the acquisition of the Swiss vignette.</p>
            <p>16.2 For the Swiss vignette, Roadwise Group B.V. acts as a technical service provider that performs the registration in the motorway operator's digital toll system on behalf of the Customer.</p>
            <p>16.3 The Customer acknowledges that Roadwise Group B.V. acts solely as a technical service provider and is not the issuer of the vignette.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
