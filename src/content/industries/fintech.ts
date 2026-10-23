import type { IndustryDetail } from "../types";

const content: IndustryDetail = {
  visual: "dashboard",
  overview: {
    heading: "Secure, simple digital experiences for finance businesses",
    paragraphs: [
      "Finance customers expect two things above all: speed and safety. They want to apply, pay, track and download statements on their phones in minutes, and they want to be confident that their money and personal information are protected at every step.",
      "We help NBFCs, fintech startups, microfinance institutions, insurance and investment advisors, and accounting firms build digital products that deliver both. That includes customer onboarding with document upload and verification through licensed providers, loan and payment apps, collection tools for field teams, and dashboards that give management a clear, live view of the business.",
      "Finance is a regulated industry, so we work closely with your compliance and legal teams. We focus on secure engineering practices, clear user journeys and careful data handling, while your organisation remains responsible for regulatory approvals and audits.",
    ],
  },
  landscape: {
    heading: "Fintech and finance in Hyderabad",
    paragraphs: [
      "Hyderabad has become an important centre for financial services and fintech, with global banks' technology centres, insurance and investment operations, and a growing number of fintech startups in the Financial District, Gachibowli and HITEC City. Traditional finance businesses across Telangana are also digitising lending, collections and customer service.",
      "Customers across urban and semi-urban areas now expect UPI-first payments, quick digital onboarding and easy self-service, which creates both opportunity and responsibility for finance businesses.",
    ],
  },
  challengesDetail: [
    { title: "Paper-heavy onboarding", text: "Physical forms and document collection slow down applications and frustrate customers." },
    { title: "Manual collections", text: "Field collections tracked on paper or spreadsheets cause delays and reconciliation errors." },
    { title: "Disconnected systems", text: "Loan management, payments and accounts often run in separate tools." },
    { title: "Customer service load", text: "Customers call repeatedly for balances, statements and payment confirmations." },
    { title: "Security expectations", text: "Customers and regulators expect strong protection of financial and personal data." },
    { title: "Limited real-time visibility", text: "Management often waits for end-of-day reports to understand disbursals and collections." },
  ],
  modules: [
    { title: "Digital onboarding", text: "Mobile-first applications with document upload and verification through providers you choose.", features: ["Step-by-step application", "Document upload", "KYC provider integration", "Application status tracking", "Assisted onboarding mode"] },
    { title: "Loan & payment app", text: "Customers apply, track, pay and download statements in one place.", features: ["Loan applications", "EMI schedules", "UPI & NACH payments", "Statements & receipts", "Notifications"] },
    { title: "Collections app for field teams", text: "Simple tools for agents to record visits and payments accurately.", features: ["Daily visit lists", "Payment recording", "Receipts on WhatsApp/SMS", "GPS check-ins", "Offline mode"] },
    { title: "Management dashboards", text: "A live view of disbursals, collections and portfolio health.", features: ["Disbursal & collection trends", "Branch performance", "Overdue tracking", "Export to Excel", "Role-based access"] },
    { title: "Customer self-service portal", text: "Reduce calls by letting customers find answers themselves.", features: ["Balance & due dates", "Download statements", "Raise requests", "FAQ & chat support", "Profile updates"] },
    { title: "Reconciliation & integrations", text: "Payments matched automatically with records and accounts.", features: ["Payment gateway reconciliation", "Bank statement matching", "Accounting sync", "Audit logs", "Exception reports"] },
  ],
  journey: [
    { title: "Apply", text: "A customer starts an application on their phone in a few minutes." },
    { title: "Verify", text: "Documents are uploaded and verified through licensed providers integrated into the flow." },
    { title: "Approve", text: "Your team reviews applications in a clear dashboard with all details in one place." },
    { title: "Repay", text: "The customer pays EMIs via UPI or auto-debit and receives instant receipts." },
    { title: "Self-serve", text: "Statements, balances and requests are available anytime in the app." },
  ],
  integrations: [
    { title: "Payment gateways & UPI", text: "Collections through UPI, cards and payment links." },
    { title: "Auto-debit (NACH/e-mandate)", text: "Recurring payment setup through your banking partners." },
    { title: "KYC & verification providers", text: "Identity and document verification through licensed providers you select." },
    { title: "Credit information services", text: "Integrations with credit bureaus as permitted for your organisation." },
    { title: "Accounting & core systems", text: "Sync with accounting software and existing loan management systems." },
  ],
  considerations: [
    { title: "Regulatory compliance", text: "Lending, payments and investment products are regulated. Your organisation is responsible for licences and compliance; we build to the requirements your compliance team defines." },
    { title: "Security practices", text: "Encryption, secure authentication, role-based access, audit logs and regular reviews are built in from the start." },
    { title: "Data protection", text: "Personal and financial data must be collected with consent, minimised and stored securely in line with Indian data protection law." },
    { title: "Clear communication", text: "Fees, interest, terms and charges must be presented transparently to customers." },
  ],
  outcomes: [
    { title: "Faster onboarding", text: "Digital applications reduce paperwork and waiting time." },
    { title: "More accurate collections", text: "Digital recording and automatic receipts reduce errors and disputes." },
    { title: "Fewer support calls", text: "Self-service portals answer common customer questions instantly." },
    { title: "Live business visibility", text: "Dashboards show performance without waiting for manual reports." },
  ],
  gettingStarted: [
    { title: "Consultation", text: "We understand your products, customers, current systems and regulatory context." },
    { title: "Requirements with compliance", text: "We define requirements together with your compliance and risk teams." },
    { title: "Phased build", text: "We start with the highest-impact module, such as onboarding or collections." },
    { title: "Launch & support", text: "We launch carefully, monitor closely and keep improving." },
  ],
  moreFaqs: [
    { q: "Are your systems certified for compliance?", a: "We follow secure development practices and build to your requirements. Formal certifications and regulatory approvals depend on your organisation's own audits." },
    { q: "Can you integrate with our existing loan management system?", a: "Where your system offers APIs or data exports, we can integrate apps and dashboards with it." },
    { q: "Do you support offline field collections?", a: "Yes. Collection apps can work offline and sync when the network is available." },
    { q: "Can customers set up auto-debit?", a: "Yes, through e-mandate or NACH integrations offered by your banking or payment partners." },
    { q: "How do you protect customer data?", a: "Through encryption, strict access control, audit logs, secure hosting and minimal data collection." },
  ],
};

export default content;
