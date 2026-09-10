import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-[#ededed] selection:bg-emerald-500/30">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise z-[9999]" pointer-events-none="true" aria-hidden="true" />
      
      <Navbar />

      <div className="pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400">Effective Date: [Insert Date]</p>
            
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-amber-500 font-medium">
                IMPORTANT NOTE: The final legal text should be reviewed by qualified legal counsel before being used as a binding agreement.
              </p>
            </div>
          </div>

          <div className="prose prose-invert prose-teal max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Scope of Services</h2>
              <p className="text-gray-400 leading-relaxed">
                Agletras provides research, automation, and intelligence services based on publicly accessible or lawfully provided information. The specific scope, deliverables, and timeline will be defined in a separate Statement of Work (SOW) or service agreement for each engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Lawful & Ethical Research</h2>
              <p className="text-gray-400 leading-relaxed">
                Agletras strictly adheres to legal and ethical research practices. We explicitly DO NOT perform:
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2 mt-4">
                <li>Unauthorized access</li>
                <li>Credential theft</li>
                <li>Account takeover</li>
                <li>Unauthorized penetration testing</li>
                <li>Malware deployment</li>
                <li>Unauthorized phishing</li>
                <li>Unauthorized surveillance</li>
                <li>Circumvention of access controls</li>
                <li>Acquisition of illegally obtained private information</li>
                <li>Unauthorized access to private communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Client Authorization</h2>
              <p className="text-gray-400 leading-relaxed">
                By requesting a service, the Client represents and warrants that they are authorized to request the engagement and that the information provided to Agletras may be lawfully used for the requested service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Public Information Limitations</h2>
              <p className="text-gray-400 leading-relaxed">
                Our research relies primarily on publicly accessible information. Such information may be incomplete, outdated, incorrect, removed, misleading, or temporarily unavailable. We do not control the sources of this information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. No Guarantee of Complete Results</h2>
              <p className="text-gray-400 leading-relaxed">
                Agletras does not guarantee that every relevant piece of information will be discovered. Our reports represent an assessment based on information available within the defined scope and research period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Accuracy and Verification</h2>
              <p className="text-gray-400 leading-relaxed">
                While we strive for accuracy, we cannot independently verify the absolute truthfulness of all third-party public information. We provide confidence assessments where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Sources and Evidence</h2>
              <p className="text-gray-400 leading-relaxed">
                Deliverables will include source references and evidence (such as screenshots or data excerpts) where appropriate and legally permissible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Personal Data</h2>
              <p className="text-gray-400 leading-relaxed">
                Agletras processes personal data in accordance with our Privacy Policy and applicable data protection laws. We collect only what is necessary for the specified research objective.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Confidentiality</h2>
              <p className="text-gray-400 leading-relaxed">
                Both parties agree to maintain the confidentiality of non-public information exchanged during the engagement. Agletras will not disclose the Client's identity or the specifics of the engagement without consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                Agletras retains project data only as long as necessary to fulfill the engagement and comply with legal obligations, after which it is securely deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                Unless explicitly stated otherwise in the project agreement, Agletras retains ownership of its proprietary methodologies, tools, and underlying source code (e.g., for Research Automation). The Client receives a license to use the final deliverables for their internal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Third-Party Sources</h2>
              <p className="text-gray-400 leading-relaxed">
                Our reports may reference third-party sources. Agletras is not responsible for the content, availability, or practices of these external entities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Report Validity</h2>
              <p className="text-gray-400 leading-relaxed">
                Intelligence reports represent a snapshot in time. Information can change rapidly, and Agletras is under no obligation to update reports after delivery unless continuous monitoring is explicitly contracted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Client Responsibilities</h2>
              <p className="text-gray-400 leading-relaxed">
                The Client is responsible for how they use the provided intelligence. Agletras is not liable for actions taken by the Client based on our reports.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. No Legal/Financial/Employment Guarantee</h2>
              <p className="text-gray-400 leading-relaxed">
                Agletras provides intelligence and research findings. We do NOT provide legal advice, financial advice, or employment recommendations. Our reports do not certify that a company is safe to invest in or that a candidate should be hired.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">16. Payment</h2>
              <p className="text-gray-400 leading-relaxed">
                Payment terms will be specified in the individual service agreement or invoice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">17. Revisions</h2>
              <p className="text-gray-400 leading-relaxed">
                Requests for revisions must fall within the original scope of work. Significant scope changes will require a new agreement or change order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">18. Cancellation</h2>
              <p className="text-gray-400 leading-relaxed">
                Cancellation terms will be outlined in the specific service agreement. Agletras reserves the right to terminate an engagement if it discovers the request violates legal or ethical boundaries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">19. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                To the maximum extent permitted by law, Agletras's liability for any claim arising out of or related to these services shall be limited to the amount paid by the Client for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">20. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].
              </p>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
