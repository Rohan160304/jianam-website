
import "./LegalPolicyPage.css";
import "./LegalPolicyPage.css";
import type { ReactNode } from "react";

export const legalPolicyRoutes: Record<string, string> = {
  "Privacy Policy": "/legal/privacy-policy",
  "Terms & Conditions": "/legal/terms-conditions",
  "Community Guidelines": "/legal/community-guidelines",
  "Content Reporting Policy": "/legal/content-reporting-policy",
  "Data Retention Policy": "/legal/data-retention-policy",
  "Donation Policy": "/legal/donation-policy",
  "Cookie Policy": "/legal/cookie-policy",
};

const policyContent: Record<
  string,
  {
    title: string;
    intro: string;
    sections: { heading: string; text: ReactNode }[];
  }
> = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro:
      "Your privacy matters to JiNANAM. This policy explains how personal information may be collected, used, stored, and protected when you use our website and services.",
    sections: [
  {
    heading: "PRIVACY POLICY",
    text: (
      <>
      <p><strong>Operated by:</strong> JAIN VIHAAR FOUNDATION</p>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>Contact Email:</strong> support@jinanam.org</p>
      </>
    ),
  },
  {
    heading: "1. INTRODUCTION",
    text: (
      <>
      <p>JAIN VIHAAR FOUNDATION, a company incorporated under Section 8 of the Companies Act, 2013, operates the JiNANAM platform (hereinafter referred to as "JINANAM", "we", "us", "our" or the "Foundation").</p>
      <p>JINANAM is a technology-enabled Jain community platform designed to connect Jain and non-Jain individuals, temples, Dharamshalas, Sthanaks, Jain Centres, religious institutions, monks, Sadhvis, volunteers and other community organisations across India and internationally.</p>
      <p><strong>Our platform is accessible through our official website and the following mobile applications:</strong></p>
      <ol>
        <li>JINANAM App: For members to access community information, temple and Dharamshala directories, bookings, events, tours, announcements, community interactions and monk tracking services.</li>
        <li>JINANAM Admin App: For Super Admins and authorised Temple Admins, Dharamshala Admins, Sthanak Admins, Jain Centre Admins and other authorised community administrators.</li>
        <li>JINANAM Tracking App: For monk and Sadhvi location tracking, Vihaar route management and voluntary location sharing by participating members.</li>
        <li>JINANAM Security App: For authorised security personnel and staff to manage visitor entry, staff entry, vehicle registration, member verification and QR-based entry management.</li>
      </ol>
      <p>This Privacy Policy explains how we collect, receive, use, process, store, disclose, protect and delete personal information when you access or use any part of the JiNANAM platform.</p>
      <p>We are committed to respecting individual privacy, protecting personal information and processing data transparently and responsibly.</p>
      <p>By accessing or using JiNANAM, you acknowledge that you have been provided with this Privacy Policy. Where applicable law requires consent, we will obtain the required consent separately and through an appropriate mechanism.</p>
      </>
    ),
  },
  {
    heading: "2. LEGAL ENTITY AND CONTACT INFORMATION",
    text: (
      <>
      <p><strong>The JiNANAM platform is operated by:</strong></p>
      <p><strong>Legal Name:</strong> JAIN VIHAAR FOUNDATION</p>
      <p><strong>Legal Structure:</strong> Section 8 Company under the Companies Act, 2013</p>
      <p><strong>CIN:</strong> U88900MH2026NPL471732</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Wing D, Building No. 9, Rehab Building, Wadar Pada, Malad East, Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, First Floor, Londhe Building, Near Station, Mulund East, Mumbai - 400081, Maharashtra, India.</p>
      <p><strong>Official Website:</strong> https://www.jinanam.org</p>
      <p><strong>Privacy and Support Email:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion Email:</strong> appsupport@jinanam.org</p>
      <p>For privacy-related questions, requests or concerns, users may contact us using the above details.</p>
      </>
    ),
  },
  {
    heading: "3. SCOPE AND APPLICABILITY",
    text: (
      <>
      <p><strong>This Privacy Policy applies to:</strong></p>
      <ul>
        <li>All four JINANAM mobile applications.</li>
        <li>The official JiNANAM website.</li>
        <li>Members and registered users.</li>
        <li>Jain and non-Jain individuals.</li>
        <li>Monks, Sadhvis and their authorised representatives.</li>
        <li>Super Admins and other authorised administrators.</li>
        <li>Temple, Dharamshala, Sthanak and Jain Centre representatives.</li>
        <li>Volunteers and individuals participating in Vihaar routes.</li>
        <li>Security personnel and other authorised staff.</li>
        <li>Visitors whose information is recorded through the Security App.</li>
        <li>Individuals who contact us, submit enquiries or otherwise interact with the platform.</li>
      </ul>
      <p>This policy applies regardless of the country from which the platform is accessed, subject to applicable local privacy and data protection laws.</p>
      <p>Certain additional rights and obligations may apply depending on the user's country or region.</p>
      </>
    ),
  },
  {
    heading: "4. INFORMATION WE COLLECT",
    text: (
      <>
      <p>We collect only information that is relevant to providing, maintaining, securing and improving the JINANAM platform, subject to applicable law.</p>
      <p>The categories of information we may collect include the following.</p>
      <h4>4.1 Personal and Profile Information</h4>
      <p><strong>When an individual registers or maintains an account, we may collect:</strong></p>
      <ul>
        <li>Full name.</li>
        <li>Mobile number.</li>
        <li>Email address.</li>
        <li>Date of birth.</li>
        <li>Gender, where provided.</li>
        <li>Profile photograph.</li>
        <li>Residential address.</li>
        <li>City, state, country and pincode.</li>
        <li>Jain sect or community affiliation, where provided.</li>
        <li>Emergency contact information.</li>
        <li>Member identification number.</li>
        <li>Account and profile preferences.</li>
      </ul>
      <p>Some information may be mandatory for registration or particular platform services, while other information may be optional.</p>
      <h4>4.2 Religious and Community Affiliation Information</h4>
      <p><strong>JINANAM is designed specifically for the Jain community and may collect information concerning:</strong></p>
      <ul>
        <li>Jain or non-Jain membership status.</li>
        <li>Jain sect or community affiliation.</li>
        <li>Temple or religious institution association.</li>
        <li>Community membership and participation.</li>
        <li>Religious or community-related preferences.</li>
      </ul>
      <p>We recognise that religious affiliation and related information can be particularly sensitive.</p>
      <p>We will use this information only for relevant platform purposes, such as community identification, membership services, access permissions and relevant community functionality, and in accordance with applicable law.</p>
      <p>We will not use religious affiliation to make unrelated decisions about individuals or disclose it for unrelated marketing purposes.</p>
      <h4>4.3 Identity and Verification Information</h4>
      <p><strong>Depending on the service or verification requirement, we may collect:</strong></p>
      <ul>
        <li>Aadhaar information or details, where lawfully required and voluntarily provided.</li>
        <li>PAN information, where lawfully required.</li>
        <li>Other government-issued identification documents.</li>
        <li>Member identification details.</li>
        <li>Temple or community membership verification information.</li>
        <li>Documents submitted for account verification or administrative purposes.</li>
      </ul>
      <p>We will collect government identity information only where there is a legitimate and lawful purpose.</p>
      <p>We will not require Aadhaar information merely because an individual wishes to access ordinary community features. Any Aadhaar-related collection or verification will be subject to applicable Aadhaar legislation and restrictions.</p>
      <p>Users should not upload identity documents unless requested through an authorised JINANAM process.</p>
      <h4>4.4 Authentication and Account Information</h4>
      <p>JINANAM uses password-based authentication.</p>
      <p><strong>We may process:</strong></p>
      <ul>
        <li>Login credentials and authentication information.</li>
        <li>Password reset requests.</li>
        <li>Account identifiers.</li>
        <li>Authentication records.</li>
        <li>Login timestamps.</li>
        <li>Account status.</li>
        <li>Security and access logs.</li>
      </ul>
      <p>Authentication services may be provided through Firebase or associated authentication infrastructure.</p>
      <p>We do not intend to store user passwords in readable or plaintext form. Authentication credentials are handled through the applicable authentication infrastructure.</p>
      <p>Users are responsible for keeping their passwords confidential and must not share their login credentials with unauthorised individuals.</p>
      <h4>4.5 Payment and Donation Information</h4>
      <p><strong>When donation functionality is introduced, we may collect:</strong></p>
      <ul>
        <li>Donor name.</li>
        <li>Contact information.</li>
        <li>Donation amount.</li>
        <li>Transaction reference or payment identification number.</li>
        <li>Payment status.</li>
        <li>Donation date and time.</li>
        <li>Donation purpose, where applicable.</li>
        <li>Receipt details.</li>
        <li>Other information required for statutory accounting and financial records.</li>
      </ul>
      <p>Payments may be processed through authorised payment gateways, including Razorpay, UPI or other supported payment methods.</p>
      <p>Payment card, banking and other sensitive payment credentials may be collected and processed directly by the payment service provider.</p>
      <p>JINANAM does not intend to collect or store complete payment card numbers, CVVs or banking passwords on its own servers.</p>
      <p>Donation processing will be activated only after the necessary organisational, banking, payment and regulatory requirements have been addressed.</p>
      <h4>4.6 Location Information</h4>
      <p>Location information is an important part of JiNANAM's monk safety and Vihaar tracking functionality.</p>
      <p><strong>Depending on the application and the user's participation, we may collect the following:</strong></p>
      <h4>A. Monk and Sadhvi Location Information</h4>
      <p>During an active Vihaar route, the Tracking App may collect the monk's or Sadhvi's live GPS location to facilitate tracking and safety-related services.</p>
      <p><strong>This information may include:</strong></p>
      <ul>
        <li>Current GPS coordinates.</li>
        <li>Location timestamps.</li>
        <li>Route information.</li>
        <li>Movement history during the active tracking period.</li>
        <li>Route commencement and completion information.</li>
      </ul>
      <p>Tracking is intended to operate during an active Vihaar route and should automatically stop when the route is completed.</p>
      <p>Authorised representatives may be permitted to start or stop tracking, subject to their assigned permissions.</p>
      <h4>B. Public and Member Location Visibility</h4>
      <p><strong>JINANAM may display:</strong></p>
      <ul>
        <li>Approximate monk location information to public visitors.</li>
        <li>Live monk location information to eligible registered members.</li>
      </ul>
      <p>The availability and accuracy of location information may depend on the active tracking status, permissions, network availability and safety controls.</p>
      <p>Public location displays may be generalised or delayed to reduce unnecessary exposure of precise location information.</p>
      <h4>C. Member and Volunteer Location Information</h4>
      <p>Members may voluntarily participate in an active Vihaar route and share their location for coordination and safety purposes.</p>
      <p>Member location sharing is intended to operate only while the member is participating in the relevant activity.</p>
      <p>JINANAM does not intend to collect members' background location when they are not participating in a Vihaar route.</p>
      <h4>D. Security App Location Information</h4>
      <p>The JINANAM Security App does not intend to collect the continuous GPS location of security personnel.</p>
      <p>Location permissions will be requested only where a specific feature genuinely requires them.</p>
      <p>Location collection and access will be subject to applicable consent requirements, device permissions and the relevant app functionality.</p>
      <h4>4.7 Device and Technical Information</h4>
      <p><strong>When users access JINANAM, we may automatically receive certain technical information, including:</strong></p>
      <ul>
        <li>Device model and manufacturer.</li>
        <li>Operating system and version.</li>
        <li>Application version.</li>
        <li>IP address.</li>
        <li>Device and application identifiers, where available and permitted.</li>
        <li>Network information.</li>
        <li>Login and access timestamps.</li>
        <li>Crash reports.</li>
        <li>Application performance information.</li>
        <li>Diagnostic information.</li>
        <li>Push notification tokens.</li>
        <li>Security and authentication logs.</li>
      </ul>
      <p>This information helps us maintain the platform, troubleshoot problems, prevent misuse and improve application reliability.</p>
      <h4>4.8 Community Interaction Information</h4>
      <p><strong>JINANAM may collect information relating to user interactions, including:</strong></p>
      <ul>
        <li>Likes and reactions.</li>
        <li>Comments.</li>
        <li>Sharing activity.</li>
        <li>Following of official community accounts and pages, including temples, Dharamshalas, monks and other authorised entities.</li>
        <li>Reports of inappropriate content.</li>
        <li>Community participation.</li>
        <li>Interaction timestamps.</li>
      </ul>
      <p>JINANAM currently does not provide unrestricted member-to-member private messaging or member-created public video and photo posts.</p>
      <p>Users may upload profile photographs.</p>
      <p>If additional communication or content-sharing features are introduced, this Privacy Policy and the relevant in-app disclosures will be updated before or when those features become operational, as required.</p>
      <h4>4.9 Security and Visitor Management Information</h4>
      <p>Through the JiNANAM Security App, authorised personnel may record information relating to individuals entering a temple, Dharamshala or other participating premises.</p>
      <p><strong>Such information may include:</strong></p>
      <ul>
        <li>Visitor name, where collected.</li>
        <li>Member identification number.</li>
        <li>Vehicle registration number.</li>
        <li>Number of visitors.</li>
        <li>Pincode.</li>
        <li>Visitor category.</li>
        <li>Staff or employee details.</li>
        <li>Entry and exit information, where recorded.</li>
        <li>QR scanning and verification records.</li>
        <li>Date and time of entry.</li>
        <li>Related security or administrative notes.</li>
      </ul>
      <p>Visitor categories may include members, non-members, VIPs, monks, vendors, staff, delivery personnel, contractors and other permitted categories.</p>
      <p>Information may be accessible to authorised administrators of the relevant participating organisation for legitimate visitor management and security purposes.</p>
      <h4>4.10 Website and Cookie Information</h4>
      <p>When users visit our website, certain information may be collected through cookies and similar technologies.</p>
      <p><strong>This may include:</strong></p>
      <ul>
        <li>Browser type.</li>
        <li>Device information.</li>
        <li>IP address.</li>
        <li>Website usage.</li>
        <li>Page visits.</li>
        <li>Session information.</li>
        <li>Website performance and analytics information.</li>
      </ul>
      <p>Further details are provided in our separate Cookie Policy.</p>
      </>
    ),
  },
  {
    heading: "5. PURPOSES FOR WHICH WE USE PERSONAL INFORMATION",
    text: (
      <>
      <p><strong>We may use collected information for the following purposes:</strong></p>
      <ol>
        <li>Creating, maintaining and managing user accounts.</li>
        <li>Authenticating users and securing account access.</li>
        <li>Providing community services and platform functionality.</li>
        <li>Maintaining temple, Dharamshala, Sthanak and Jain Centre directories.</li>
        <li>Facilitating bookings, registrations, events and tours.</li>
        <li>Managing community announcements and notices.</li>
        <li>Supporting monk and Sadhvi safety through Vihaar tracking.</li>
        <li>Facilitating voluntary participation in Vihaar routes.</li>
        <li>Managing authorised administrative and security operations.</li>
        <li>Verifying members, visitors and authorised staff.</li>
        <li>Processing donations and generating receipts when donation functionality becomes available.</li>
        <li>Sending service-related notifications and communications.</li>
        <li>Responding to enquiries, complaints and support requests.</li>
        <li>Moderating content and addressing violations of community guidelines.</li>
        <li>Detecting fraud, misuse, unauthorised access and security incidents.</li>
        <li>Maintaining platform performance and reliability.</li>
        <li>Complying with applicable legal and regulatory obligations.</li>
        <li>Enforcing our Terms &amp; Conditions and other published policies.</li>
        <li>Protecting the safety, security and legitimate interests of users and the Foundation.</li>
        <li>Improving the functionality and user experience of the platform.</li>
      </ol>
      <p>We will not use personal information for purposes materially different from those disclosed to users without providing the required notice and obtaining consent where applicable.</p>
      </>
    ),
  },
  {
    heading: "6. LEGAL BASIS FOR PROCESSING",
    text: (
      <>
      <p>Depending on the applicable jurisdiction, we process personal information on one or more of the following legal grounds:</p>
      <ul>
        <li>Consent provided by the individual.</li>
        <li>Performance of a contract or provision of a requested service.</li>
        <li>Compliance with applicable legal obligations.</li>
        <li>Protection of vital interests and safety, where legally permitted.</li>
        <li>Legitimate interests pursued by JiNANAM or another relevant party, where recognised by applicable law and where such interests do not override the individual's rights.</li>
        <li>Other lawful grounds recognised under applicable local data protection legislation.</li>
      </ul>
      <p>For users governed by India's Digital Personal Data Protection Act, 2023, processing will be undertaken in accordance with the applicable provisions of that legislation and its rules as they come into force.</p>
      <p>Where consent is the applicable basis, users will be provided with appropriate information about the purpose of processing and the means to withdraw consent, subject to applicable law.</p>
      <p>Withdrawal of consent may affect the availability of certain services that depend on the relevant information.</p>
      </>
    ),
  },
  {
    heading: "7. HOW WE SHARE AND DISCLOSE INFORMATION",
    text: (
      <>
      <p>JINANAM does not sell personal information to third parties.</p>
      <p>We do not intend to disclose personal information to unrelated organisations for their independent marketing purposes.</p>
      <p>However, information may be accessed or processed in the following circumstances.</p>
      <h4>7.1 Authorised JINANAM Administrators</h4>
      <p>Relevant information may be accessible to authorised administrators according to their assigned roles and permissions.</p>
      <p><strong>For example:</strong></p>
      <ul>
        <li>Temple administrators may access information necessary for managing their temple-related services.</li>
        <li>Dharamshala administrators may access relevant booking and accommodation information.</li>
        <li>Sthanak and Jain Centre administrators may access relevant community administration information.</li>
        <li>Super Admins may access information necessary for platform administration and oversight.</li>
        <li>Authorised representatives may access monk tracking information for their assigned responsibilities.</li>
        <li>Security personnel may access information necessary for visitor and staff management.</li>
      </ul>
      <p>Access should be limited to legitimate operational purposes and the permissions assigned to each role.</p>
      <h4>7.2 Technology and Infrastructure Service Providers</h4>
      <p>We may engage third-party service providers to support our operations.</p>
      <p><strong>Our current or planned providers include:</strong></p>
      <ul>
        <li>Hostinger - Hosting and infrastructure</li>
        <li>PostgreSQL - Database infrastructure</li>
        <li>Firebase Authentication - User authentication</li>
        <li>Firebase Cloud Messaging - Push notifications</li>
        <li>Firebase Analytics - Application analytics</li>
        <li>Firebase Crashlytics - Application diagnostics and crash reporting</li>
        <li>Google Maps - Mapping and location-related services</li>
        <li>Razorpay - Payment processing when activated</li>
        <li>WhatsApp Business API provider - Service-related communications</li>
      </ul>
      <p>These providers may process information on our behalf or in accordance with their own applicable terms and privacy policies.</p>
      <p>Where required, we will implement appropriate contractual, technical and organisational safeguards.</p>
      <h4>7.3 Legal and Regulatory Disclosure</h4>
      <p><strong>We may disclose information where necessary to:</strong></p>
      <ul>
        <li>Comply with applicable laws and regulations.</li>
        <li>Respond to valid court orders or lawful government requests.</li>
        <li>Cooperate with authorised law enforcement agencies.</li>
        <li>Investigate fraud, abuse or security incidents.</li>
        <li>Protect the rights, safety and property of users, the Foundation or others.</li>
        <li>Enforce our legal agreements and published policies.</li>
      </ul>
      <p>We will assess such requests and disclose only information that we are legally required or permitted to disclose.</p>
      <h4>7.4 International Service Providers and Transfers</h4>
      <p>JINANAM intends to host its primary application and database infrastructure in India.</p>
      <p>However, certain third-party technology providers may process or access information through infrastructure located outside India.</p>
      <p>Accordingly, information may be processed internationally where necessary to provide platform functionality, subject to applicable legal requirements.</p>
      <p>Where required by applicable law, we will implement appropriate safeguards, contractual arrangements and transfer mechanisms.</p>
      <p>We will not represent that all data remains exclusively within India merely because our primary hosting infrastructure is located there.</p>
      </>
    ),
  },
  {
    heading: "8. CHILDREN'S PRIVACY",
    text: (
      <>
      <p>JINANAM recognises the importance of protecting children and their personal information.</p>
      <p>Individuals below 18 years of age may be permitted to create accounts or use relevant services only subject to applicable legal requirements and appropriate parental or guardian safeguards.</p>
      <p>Where required, we will obtain verifiable consent from a parent or lawful guardian before processing a child's personal information.</p>
      <p><strong>Our child protection approach includes:</strong></p>
      <ol>
        <li>Appropriate parental or guardian consent mechanisms.</li>
        <li>Age-appropriate privacy disclosures.</li>
        <li>Restricted access to sensitive features.</li>
        <li>Appropriate controls over children's profile information.</li>
        <li>Additional safeguards for location-sharing functionality.</li>
        <li>Restrictions on targeted or behavioural advertising to children where prohibited by law.</li>
        <li>Reporting mechanisms for inappropriate or harmful content.</li>
        <li>Appropriate investigation and action concerning child safety complaints.</li>
      </ol>
      <p>We will not knowingly permit children to independently activate sensitive location-sharing functionality without the necessary legal safeguards.</p>
      <p>Where a child participates in an activity involving location sharing, the relevant consent and safety requirements must be satisfied.</p>
      <p>Parents or lawful guardians may contact us to raise concerns regarding a child's information or request appropriate action.</p>
      <p>For more information, please refer to our Child Safety Standards.</p>
      </>
    ),
  },
  {
    heading: "9. LOCATION PERMISSIONS AND CONSENT",
    text: (
      <>
      <p>JINANAM may request access to device location when a feature requires it.</p>
      <p><strong>Location access may be used for:</strong></p>
      <ul>
        <li>Monk and Sadhvi Vihaar tracking.</li>
        <li>Displaying relevant monk location information.</li>
        <li>Voluntary member participation in Vihaar routes.</li>
        <li>Mapping and route-related services.</li>
      </ul>
      <p>We will request location permissions through the relevant operating system permission mechanisms.</p>
      <p>Where location processing requires additional disclosure or consent, we will provide appropriate in-app explanations before the relevant processing begins.</p>
      <p>Users may manage location permissions through their device settings.</p>
      <p>Disabling location permissions may affect certain features, but should not unnecessarily prevent access to unrelated services.</p>
      <p>Background location access will not be requested for ordinary member route participation under the current design.</p>
      </>
    ),
  },
  {
    heading: "10. PUBLICLY VISIBLE INFORMATION",
    text: (
      <>
      <p>Certain information may be visible to other users or visitors of the JiNANAM platform.</p>
      <p><strong>Examples include:</strong></p>
      <ul>
        <li>Public temple and community listings.</li>
        <li>Official organisational information.</li>
        <li>Public announcements.</li>
        <li>Community comments and interactions.</li>
        <li>Profile photographs, depending on the applicable profile visibility settings.</li>
        <li>Approximate monk location information.</li>
        <li>Other information deliberately made available through public platform features.</li>
      </ul>
      <p>Certain monk live location information may be accessible to registered members.</p>
      <p>Users should exercise care when submitting information that may become publicly accessible.</p>
      <p>We do not guarantee that information made publicly available can be completely removed from copies, screenshots, caches or external records maintained by other individuals or services.</p>
      </>
    ),
  },
  {
    heading: "11. DATA RETENTION",
    text: (
      <>
      <p>We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, subject to applicable legal, regulatory, accounting, security and operational requirements.</p>
      <p><strong>Our intended retention approach includes:</strong></p>
      <ul>
        <li>Active account information: While the account remains active</li>
        <li>Inactive accounts: Until the user requests deletion, subject to lawful requirements</li>
        <li>Profile information: Until account deletion or another applicable deletion requirement</li>
        <li>Monk GPS history: Normally 30 days after the relevant tracking activity</li>
        <li>Member route participation history: Normally 30 days, unless a legitimate safety or legal requirement requires longer retention</li>
        <li>Visitor and security records: Normally 365 days</li>
        <li>Donation and accounting records: Applicable statutory and tax retention periods</li>
        <li>Payment transaction information: Applicable financial and statutory retention periods</li>
        <li>Technical and diagnostic records: For a period appropriate to the relevant operational and security purpose</li>
        <li>Backups: According to the applicable backup rotation and deletion schedule</li>
      </ul>
      <p>Certain records may need to be retained after an account deletion request where required by law, necessary to resolve disputes, investigate security incidents or establish, exercise or defend legal claims.</p>
      <p>Such retained information will be restricted and will not be used for unrelated purposes.</p>
      <p>For further details, please refer to our Data Retention Policy.</p>
      </>
    ),
  },
  {
    heading: "12. DATA SECURITY",
    text: (
      <>
      <p>We take reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, alteration, disclosure, loss or destruction.</p>
      <p><strong>Our security framework may include:</strong></p>
      <ul>
        <li>Role-based access controls.</li>
        <li>Authentication and access management.</li>
        <li>Secure hosting infrastructure.</li>
        <li>Database access restrictions.</li>
        <li>Secure communication protocols.</li>
        <li>Security monitoring and logging.</li>
        <li>Backup and recovery arrangements.</li>
        <li>Administrative access controls.</li>
        <li>Vulnerability and security assessments.</li>
        <li>Incident management procedures.</li>
      </ul>
      <p>Access to personal information is intended to be restricted to authorised personnel and service providers who require such access for legitimate purposes.</p>
      <p>However, no internet-based platform, electronic transmission or storage system can be guaranteed to be completely secure.</p>
      <p>In the event of a personal data breach, we will investigate and take appropriate steps, including notifications to affected individuals and relevant authorities where required by applicable law.</p>
      <p>For additional information, please refer to our Data Protection &amp; Security Policy.</p>
      </>
    ),
  },
  {
    heading: "13. USER RIGHTS AND PRIVACY CHOICES",
    text: (
      <>
      <p>Depending on the user's country or applicable legal framework, individuals may have certain rights concerning their personal information.</p>
      <p><strong>These rights may include:</strong></p>
      <ul>
        <li>The right to obtain information about personal data processing.</li>
        <li>The right to access personal information.</li>
        <li>The right to correct inaccurate or incomplete information.</li>
        <li>The right to update personal information.</li>
        <li>The right to request deletion of personal information.</li>
        <li>The right to withdraw consent where processing is based on consent.</li>
        <li>The right to object to or restrict certain processing, where applicable.</li>
        <li>The right to request data portability, where applicable.</li>
        <li>The right to lodge a complaint with the appropriate supervisory or regulatory authority.</li>
        <li>The right to nominate another individual to exercise certain rights, where provided by applicable law.</li>
      </ul>
      <p>The availability and scope of these rights depend on the applicable legislation and any lawful exceptions.</p>
      <h4>13.1 Rights under Indian Law</h4>
      <p>Subject to the applicable commencement of relevant provisions of India's Digital Personal Data Protection Act, 2023, individuals may exercise rights recognised under that legislation, including applicable rights concerning:</p>
      <ul>
        <li>Access to information about personal data processing.</li>
        <li>Correction and updating of personal information.</li>
        <li>Erasure of personal information.</li>
        <li>Grievance redressal.</li>
        <li>Nomination of another individual to exercise applicable rights.</li>
      </ul>
      <p>Requests may be submitted using our official support email.</p>
      <h4>13.2 Rights under European and Other International Laws</h4>
      <p>Where applicable, individuals in the European Economic Area, United Kingdom and other jurisdictions may have additional rights under their respective privacy laws.</p>
      <p>Such rights may include access, rectification, erasure, restriction, objection, portability and withdrawal of consent.</p>
      <p>Where required, individuals may also have the right to complain to their local data protection authority.</p>
      <p>JINANAM will assess and respond to applicable requests in accordance with the relevant legal requirements.</p>
      </>
    ),
  },
  {
    heading: "14. ACCOUNT DELETION AND DATA ERASURE",
    text: (
      <>
      <p>Users may request deletion of their JiNANAM accounts through the available in-app account deletion request mechanism.</p>
      <p><strong>Users may also contact:</strong></p>
      <p><strong>Email:</strong> appsupport@jinanam.org</p>
      <p>Our target processing period is seven days from receipt of a valid deletion request, subject to verification, applicable legal obligations and exceptional circumstances.</p>
      <p>Upon processing a valid deletion request, we will delete or anonymise eligible personal information associated with the account, subject to applicable law.</p>
      <p><strong>Certain information may be retained where necessary for:</strong></p>
      <ul>
        <li>Statutory accounting and tax obligations.</li>
        <li>Donation and payment records.</li>
        <li>Legal compliance.</li>
        <li>Fraud prevention.</li>
        <li>Security investigations.</li>
        <li>Dispute resolution.</li>
        <li>Establishing, exercising or defending legal claims.</li>
      </ul>
      <p>Information retained for these purposes will be restricted and retained only for the applicable period.</p>
      <p>Deleting a JiNANAM account may result in loss of access to platform services, bookings, community features and other account-related functionality.</p>
      <p>For complete details, please refer to our Account &amp; Data Deletion Policy.</p>
      </>
    ),
  },
  {
    heading: "15. COOKIES AND SIMILAR TECHNOLOGIES",
    text: (
      <>
      <p><strong>Our website may use cookies and similar technologies to:</strong></p>
      <ul>
        <li>Maintain website functionality.</li>
        <li>Remember user preferences.</li>
        <li>Improve website performance.</li>
        <li>Understand website usage.</li>
        <li>Maintain security.</li>
        <li>Support analytics where enabled.</li>
      </ul>
      <p>Users may manage cookie preferences through available website controls and browser settings.</p>
      <p>Where legally required, non-essential cookies and tracking technologies will be activated only after obtaining the necessary consent.</p>
      <p>For additional information, please refer to our Cookie Policy.</p>
      </>
    ),
  },
  {
    heading: "16. THIRD-PARTY LINKS AND EXTERNAL SERVICES",
    text: (
      <>
      <p>The JiNANAM platform may contain links to external websites, services, maps, payment gateways or other third-party resources.</p>
      <p>Such external services may have their own privacy policies, terms and data processing practices.</p>
      <p>JINANAM does not control the privacy practices of independent third-party websites.</p>
      <p>Users are encouraged to review the relevant third-party privacy policies before submitting personal information through external services.</p>
      </>
    ),
  },
  {
    heading: "17. DATA BREACHES AND SECURITY INCIDENTS",
    text: (
      <>
      <p>JINANAM maintains an incident response approach for identifying, assessing and addressing potential data breaches and security incidents.</p>
      <p><strong>Where an incident involving personal information occurs, we may:</strong></p>
      <ol>
        <li>Investigate the nature and extent of the incident.</li>
        <li>Take reasonable steps to contain and mitigate the impact.</li>
        <li>Assess the information and individuals affected.</li>
        <li>Preserve relevant evidence where necessary.</li>
        <li>Notify affected individuals where required.</li>
        <li>Notify relevant regulatory authorities within applicable legal timelines.</li>
        <li>Take corrective action to reduce the likelihood of recurrence.</li>
      </ol>
      <p>The nature, timing and extent of notifications will depend on applicable legal requirements.</p>
      </>
    ),
  },
  {
    heading: "18. GRIEVANCE REDRESSAL AND PRIVACY COMPLAINTS",
    text: (
      <>
      <p><strong>Individuals may contact JINANAM regarding:</strong></p>
      <ul>
        <li>Privacy-related questions.</li>
        <li>Personal information requests.</li>
        <li>Data correction or deletion.</li>
        <li>Consent withdrawal.</li>
        <li>Location privacy concerns.</li>
        <li>Unauthorised disclosure concerns.</li>
        <li>Children's privacy complaints.</li>
        <li>Other concerns relating to the processing of personal information.</li>
      </ul>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Organisation:</strong> JAIN VIHAAR FOUNDATION</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong> +91 8693838281 / +918693838282</p>
      <p><strong>Postal Address:</strong></p>
      <p>12, First Floor, Londhe Building, Near Station, Mulund East, Mumbai - 400081, Maharashtra, India.</p>
      <p>We will acknowledge and address complaints within the timelines prescribed by applicable law.</p>
      <p>For complaints governed by the applicable Indian IT intermediary grievance framework, the prescribed acknowledgement and resolution timelines will be followed.</p>
      </>
    ),
  },
    ],
  },

  "terms-conditions": {
    title: "Terms & Conditions",
    intro:
      "Welcome to JiNANAM. These terms explain the conditions for accessing and using the JiNANAM website, applications, and related services.",
    sections: [
      {
    heading: "JINANAM - TERMS & CONDITIONS",
    text: (
      <>
      <p><strong>Operated by:</strong> JAIN VIHAAR FOUNDATION</p>
      <p><strong>Platform:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      </>
    ),
  },
  {
    heading: "1. INTRODUCTION AND ACCEPTANCE",
    text: (
      <>
      <p>These Terms &amp; Conditions ("Terms") govern access to and use of the JiNANAM platform, including its website, mobile applications, digital services and associated features.</p>
      <p>JINANAM is a community-focused technology platform operated by JAIN VIHAAR FOUNDATION, a Section 8 Company incorporated under the Companies Act, 2013.</p>
      <p><strong>Throughout these Terms:</strong></p>
      <ul>
        <li>"JINANAM", "Platform", "we", "us" or "our" means JAIN VIHAAR FOUNDATION and its authorised representatives.</li>
        <li>"User", "you" or "your" means any individual or organisation accessing or using the platform.</li>
        <li>"Member" means an individual registered on the JINANAM Member App.</li>
        <li>"Administrator" means a person authorised to manage a temple, Dharamshala, Sthanak, Jain Centre, community page or another platform entity.</li>
        <li>"Participating Organisation" means a temple, Dharamshala, Sthanak, Jain Centre, community organisation or other institution using JINANAM.</li>
        <li>"Monk" includes Jain monks and Sadhvis whose profiles or tracking services are managed through the platform.</li>
        <li>"Authorised Representative" means an individual authorised to manage a monk's profile, Vihaar route or related services.</li>
        <li>"Platform Services" means all features, applications and services provided through JINANAM.</li>
      </ul>
      <p>By downloading, registering, accessing or using JiNANAM, you acknowledge that you have read and understood these Terms and agree to comply with them.</p>
      <p>If you do not agree with these Terms, you must discontinue using the relevant services.</p>
      <p>Where acceptance or consent by a parent or lawful guardian is required by applicable law, the relevant account or service may be used only after that requirement has been satisfied.</p>
      </>
    ),
  },
  {
    heading: "2. ABOUT JINANAM",
    text: (
      <>
      <p>JINANAM is designed to connect the Jain community globally through technology-enabled community services, religious information, institutional coordination, safety initiatives and digital facilities.</p>
      <p><strong>The platform may provide:</strong></p>
      <ul>
        <li>Jain member registration and community profiles.</li>
        <li>Temple, Dharamshala and Sthanak directories.</li>
        <li>Jain Centre and community organisation information.</li>
        <li>Monk and Sadhvi profiles.</li>
        <li>Vihaar route management and location tracking.</li>
        <li>Community announcements and notices.</li>
        <li>Events and religious programmes.</li>
        <li>Tours and related registrations.</li>
        <li>Dharamshala and other participating facility booking requests.</li>
        <li>Community interactions, including likes, comments and sharing.</li>
        <li>Digital visitor and security management.</li>
        <li>QR-based identification and verification.</li>
        <li>Donations and related financial facilities when introduced.</li>
        <li>Other community-related digital services introduced from time to time.</li>
      </ul>
      <p>JINANAM is a technology platform intended to facilitate coordination and access to information. It does not replace the independent management, legal responsibilities or decision-making authority of participating religious institutions.</p>
      </>
    ),
  },
  {
    heading: "3. JINANAM APPLICATIONS",
    text: (
      <>
      <p>The platform consists of four principal applications.</p>
      <h4>3.1 JINANAM App - Member Application</h4>
      <p>The Member App is intended for Jain and non-Jain individuals who wish to access the community platform.</p>
      <p><strong>Its features may include:</strong></p>
      <ul>
        <li>Member registration and account management.</li>
        <li>Community and institutional information.</li>
        <li>Temple and Dharamshala directories.</li>
        <li>Bookings and registration requests.</li>
        <li>Events and tours.</li>
        <li>Community announcements.</li>
        <li>Monk and Sadhvi tracking information.</li>
        <li>Community interactions.</li>
        <li>Following official temple, Dharamshala, monk and other authorised community profiles.</li>
        <li>Other available member services.</li>
      </ul>
      <p>Certain features may require registration, verification or additional permissions.</p>
      <h4>3.2 JINANAM Admin App - Administration Application</h4>
      <p>The Admin App is intended for authorised individuals responsible for managing platform entities and community operations.</p>
      <p><strong>Administrative roles may include:</strong></p>
      <ul>
        <li>Super Admin.</li>
        <li>Temple Admin.</li>
        <li>Dharamshala Admin.</li>
        <li>Sthanak Admin.</li>
        <li>Jain Centre Admin.</li>
        <li>Other authorised community administrators.</li>
      </ul>
      <p>Access to administrative functionality is based on assigned roles and permissions.</p>
      <p>Creating an account does not automatically grant administrator privileges. Any elevated access may require approval, verification or assignment by an authorised Super Admin or another authorised person.</p>
      <p>Administrators must use their accounts only for legitimate responsibilities and must not access information beyond their assigned permissions.</p>
      <h4>3.3 JINANAM Tracking App</h4>
      <p>The Tracking App is intended for monks, Sadhvis and authorised representatives involved in Vihaar management and related safety activities.</p>
      <p><strong>Features may include:</strong></p>
      <ul>
        <li>Monk and Sadhvi profile access.</li>
        <li>Vihaar route creation and management.</li>
        <li>Live location sharing during active routes.</li>
        <li>Route commencement and completion.</li>
        <li>Authorised tracking controls.</li>
        <li>Voluntary member participation.</li>
        <li>Route-related coordination.</li>
      </ul>
      <p>Tracking functionality is subject to device permissions, connectivity, availability of GPS services, applicable consent requirements and safety controls.</p>
      <h4>3.4 JINANAM Security App</h4>
      <p>The Security App is intended for authorised security personnel and staff of participating institutions.</p>
      <p><strong>Its features may include:</strong></p>
      <ul>
        <li>Visitor entry management.</li>
        <li>Staff entry management.</li>
        <li>Vehicle registration.</li>
        <li>Member verification.</li>
        <li>Visitor categorisation.</li>
        <li>QR code scanning.</li>
        <li>Entry records.</li>
        <li>Other authorised security and administrative functions.</li>
      </ul>
      <p>Security App accounts may be created or registered by authorised administrators, who may provide login credentials to the relevant staff members.</p>
      <p>Security personnel must use the application only for authorised operational purposes.</p>
      </>
    ),
  },
  {
    heading: "4. ELIGIBILITY AND REGISTRATION",
    text: (
      <>
      <h4>4.1 Eligibility</h4>
      <p>JINANAM may be accessed by individuals and organisations across different countries, subject to applicable laws and these Terms.</p>
      <p>Both Jain and non-Jain individuals may register on the Member App.</p>
      <p>The platform may also support monks and Sadhvis, religious institutions, community organisations, volunteers, authorised administrative personnel, security staff and other individuals or entities approved for relevant services.</p>
      <h4>4.2 Minimum Age and Children</h4>
      <p>JINANAM may permit individuals below 18 years of age to access relevant services and create accounts, subject to applicable child protection and privacy laws.</p>
      <p>Where required, verifiable consent from a parent or lawful guardian must be obtained before processing a child's personal information.</p>
      <p>Children must not independently access restricted administrative, financial, security or sensitive location-sharing functionality without the required authorisation and safeguards.</p>
      <p>Parents and lawful guardians are responsible for supervising children's use of the platform to the extent required by applicable law.</p>
      <p>JINANAM reserves the right to restrict features or suspend access where necessary to protect children.</p>
      <h4>4.3 Registration Information</h4>
      <p>Users agree to provide accurate, current and complete information during registration and to update their information whenever necessary.</p>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Provide false or misleading information.</li>
        <li>Impersonate another individual.</li>
        <li>Create accounts using another person's identity without authority.</li>
        <li>Use another person's contact details without permission.</li>
        <li>Misrepresent their membership or organisational affiliation.</li>
        <li>Create multiple accounts to bypass restrictions.</li>
      </ul>
      <p>JINANAM may request additional information or verification where reasonably necessary for security, identity verification or provision of particular services.</p>
      <h4>4.4 Account Credentials</h4>
      <p>Users are responsible for maintaining the confidentiality of their login credentials.</p>
      <p>JINANAM currently supports password-based authentication.</p>
      <p>Users must create secure passwords, avoid sharing credentials, notify JiNANAM of suspected unauthorised access and log out from devices they do not control.</p>
      <p>JINANAM will not be responsible for unauthorised activity arising from a user's failure to protect their credentials, except to the extent caused by our failure to meet applicable legal or security obligations.</p>
      <h4>4.5 Common JINANAM Member Identity</h4>
      <p>JINANAM may provide a common member identification system across supported applications.</p>
      <p>The availability of a common Member ID does not mean that every application provides the same functionality or access rights.</p>
      <p>Access to the Admin App, Tracking App and Security App remains subject to the relevant authorisation and role requirements. Security personnel may use separately issued credentials.</p>
      </>
    ),
  },
  {
    heading: "5. USER RESPONSIBILITIES",
    text: (
      <>
      <p>All users must use JiNANAM lawfully, responsibly and respectfully.</p>
      <p><strong>You agree that you will:</strong></p>
      <ol>
        <li>Provide accurate registration and verification information.</li>
        <li>Use the platform only for legitimate purposes.</li>
        <li>Respect the rights, privacy and dignity of other individuals.</li>
        <li>Respect Jain religious traditions, institutions, monks, Sadhvis and community members.</li>
        <li>Avoid publishing or sharing unlawful, misleading or harmful information.</li>
        <li>Not misuse location information or tracking facilities.</li>
        <li>Not attempt to access restricted accounts or administrative systems.</li>
        <li>Not interfere with the operation or security of the platform.</li>
        <li>Not use the platform to harass, threaten, defraud or exploit others.</li>
        <li>Follow the Community Guidelines and other published policies.</li>
        <li>Comply with applicable local, national and international laws.</li>
        <li>Cooperate with reasonable verification and security requirements.</li>
      </ol>
      <p>Users are responsible for activities performed through their accounts, subject to applicable law and the circumstances of any unauthorised access.</p>
      </>
    ),
  },
  {
    heading: "6. PARTICIPATING ORGANISATIONS AND ADMINISTRATORS",
    text: (
      <>
      <h4>6.1 Participation by Religious and Community Organisations</h4>
      <p>Temples, Dharamshalas, Sthanaks, Jain Centres and other community organisations may participate in JiNANAM to manage their institutional information and access relevant platform services.</p>
      <p>Participation may be subject to registration, verification and approval by the Foundation.</p>
      <h4>6.2 Administrator Responsibilities</h4>
      <p><strong>Administrators must:</strong></p>
      <ul>
        <li>Provide accurate institutional information.</li>
        <li>Maintain updated contact and facility details.</li>
        <li>Use administrative access only for authorised purposes.</li>
        <li>Protect member, visitor and institutional information.</li>
        <li>Maintain the confidentiality of login credentials.</li>
        <li>Avoid unauthorised disclosure or misuse of personal information.</li>
        <li>Follow applicable laws and JiNANAM policies.</li>
        <li>Ensure that staff and representatives use the platform responsibly.</li>
        <li>Notify JINANAM of changes in authorised representatives or administrative access.</li>
      </ul>
      <p>Administrators must not use their privileges for personal gain, harassment, discrimination, unauthorised surveillance or any unlawful purpose.</p>
      <h4>6.3 Independent Organisational Responsibility</h4>
      <p>Participating organisations remain independent entities responsible for their own management, staff, premises, facilities, religious activities, events, accommodation and services.</p>
      <p>Their participation in JINANAM does not create a partnership, joint venture, employment relationship, agency or legal association with the Foundation unless expressly agreed in a separate written agreement.</p>
      <h4>6.4 Administrator Misuse</h4>
      <p>JINANAM may investigate suspected misuse of administrative privileges and may restrict, suspend or revoke administrative access where necessary to protect users, institutional information or platform security.</p>
      </>
    ),
  },
  {
    heading: "7. TEMPLE, DHARAMSHALA AND FACILITY INFORMATION",
    text: (
      <>
      <p>JINANAM may display information about temples, Dharamshalas, Sthanaks, Jain Centres and other participating institutions.</p>
      <p>Such information may include addresses, contact details, facilities, room availability, rules, services, photographs, directions and other details provided by the relevant institution or its authorised representatives.</p>
      <p>The relevant institution is responsible for ensuring that information submitted by it is accurate and updated.</p>
      <p>JINANAM may review, correct, restrict or remove information where necessary due to suspected inaccuracies, policy violations, legal requirements or safety concerns.</p>
      <p>Users should independently verify important information with the relevant institution before relying on it.</p>
      </>
    ),
  },
  {
    heading: "8. BOOKINGS AND RESERVATIONS",
    text: (
      <>
      <p>JINANAM may facilitate booking requests for rooms, halls, accommodation, facilities or other services offered by participating institutions.</p>
      <h4>8.1 Booking Confirmation</h4>
      <p>Submitting a booking request does not automatically guarantee a reservation.</p>
      <p>A booking will be considered confirmed only when the relevant participating institution has accepted it and communicated confirmation through the platform or another authorised channel.</p>
      <h4>8.2 Booking Rules and Charges</h4>
      <p>The participating institution is responsible for establishing and communicating applicable prices, payment instructions, eligibility conditions, facility rules and other booking requirements.</p>
      <p>Users must review those conditions before making a booking or payment.</p>
      <h4>8.3 Changes and Cancellation</h4>
      <p>Changes, cancellations, refunds and related conditions will be governed by the rules communicated by the relevant institution and applicable law.</p>
      <p>JINANAM may facilitate communication but does not independently determine the institution's booking policies.</p>
      <h4>8.4 Disputes</h4>
      <p>Booking-related disputes should initially be raised with the relevant participating institution.</p>
      <p>JINANAM may assist with communication or review platform-related complaints but does not guarantee the outcome of disputes concerning independent institutional services.</p>
      </>
    ),
  },
  {
    heading: "9. EVENTS, TOURS AND COMMUNITY PROGRAMMES",
    text: (
      <>
      <p>JINANAM may display, promote or facilitate registration for religious programmes, tours, events, gatherings and other community activities.</p>
      <p>The relevant organiser is responsible for event details, eligibility, pricing, venue arrangements, safety measures, permissions, cancellations and other operational matters.</p>
      <p>Users must comply with the event rules and instructions issued by the organiser.</p>
      <p>JINANAM may display information supplied by organisers but does not guarantee the accuracy, availability or successful conduct of every event.</p>
      <p>Any event-related payment, cancellation or refund will be governed by the terms communicated for that event and applicable law.</p>
      </>
    ),
  },
  {
    heading: "10. MONK AND SADHVI TRACKING  SPECIAL TERMS",
    text: (
      <>
      <h4>10.1 Purpose of Tracking</h4>
      <p>JINANAM provides monk and Sadhvi tracking functionality to support safety, route coordination and community awareness during Vihaar.</p>
      <p>Location tracking is intended to operate only during an authorised active Vihaar route.</p>
      <h4>10.2 Commencement and Completion of Tracking</h4>
      <p>An authorised representative may commence or stop tracking for an active route.</p>
      <p>Tracking should automatically stop when the route is completed or otherwise closed.</p>
      <p>The platform may display route information and location data according to the applicable access permissions.</p>
      <h4>10.3 Public and Registered Member Access</h4>
      <p>Public visitors may be shown an approximate monk location.</p>
      <p>Registered members may access live location information according to the permissions and functionality provided by JiNANAM.</p>
      <p>Access may be restricted or modified where necessary for safety, privacy, security or legal compliance.</p>
      <h4>10.4 Member Participation</h4>
      <p>Members may voluntarily join a Vihaar route and share their location for the relevant participation, subject to the available consent and device permission controls.</p>
      <p>Member location sharing is voluntary and is not intended to involve continuous background location collection.</p>
      <h4>10.5 Restrictions</h4>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Use tracking information to stalk, threaten, harass or endanger a monk or Sadhvi.</li>
        <li>Attempt to access restricted location information.</li>
        <li>Manipulate or interfere with tracking functionality.</li>
        <li>Publish or redistribute location information for unlawful or harmful purposes.</li>
        <li>Use location information to facilitate unauthorised contact or physical interception.</li>
      </ul>
      <h4>10.6 Tracking Limitations</h4>
      <p>GPS information may be inaccurate, delayed or unavailable due to device limitations, network connectivity, environmental conditions or third-party service interruptions.</p>
      <p>JINANAM is not an emergency response service and does not guarantee rescue, security or physical protection through its tracking functionality.</p>
      <p>Users should not rely solely on digital location information for emergency decisions.</p>
      </>
    ),
  },
  {
    heading: "11. COMMUNITY INTERACTIONS AND USER CONTENT",
    text: (
      <>
      <h4>11.1 User Responsibilities for Comments and Interactions</h4>
      <p>JINANAM may provide features such as likes, comments, sharing, profile photographs and interactions with authorised institutional or community profiles.</p>
      <p>Users must ensure that their comments and interactions are lawful, respectful and consistent with the Community Guidelines.</p>
      <h4>11.2 Responsibility for User Content</h4>
      <p>Users are responsible for information and content they submit, upload, publish or share through JINANAM.</p>
      <p>Users must have the necessary rights, permissions and lawful authority to submit such content.</p>
      <p>JINANAM does not endorse every statement, comment, photograph or representation submitted by users or independent organisations.</p>
      <h4>11.3 Administrative Content</h4>
      <p>Participating institutions and authorised administrators may publish announcements, notices, event details, photographs and other institutional information.</p>
      <p>The relevant institution or administrator remains responsible for the accuracy, legality and appropriateness of the content it submits.</p>
      <h4>11.4 Content Moderation</h4>
      <p>JINANAM may review, restrict or remove content that violates applicable law, these Terms or other published platform policies.</p>
      <p>Moderation may be carried out through automated tools, manual review, user reports or other reasonable mechanisms.</p>
      <p>JINANAM may take action without prior notice where necessary to protect users, prevent harm, comply with law or preserve platform security.</p>
      </>
    ),
  },
  {
    heading: "12. SECURITY AND VISITOR MANAGEMENT",
    text: (
      <>
      <p>JINANAM Security App may facilitate visitor entry management, vehicle registration, member verification, QR scanning and other security-related functions at participating institutions.</p>
      <p>Participating institutions are responsible for ensuring that their security personnel use the application only for authorised purposes.</p>
      <p><strong>Security personnel must:</strong></p>
      <ul>
        <li>Use their own authorised credentials.</li>
        <li>Maintain confidentiality of visitor and member information.</li>
        <li>Avoid unauthorised access, copying or disclosure of records.</li>
        <li>Enter accurate information.</li>
        <li>Follow the institution's security procedures.</li>
        <li>Report suspected misuse or security incidents.</li>
      </ul>
      <p>The relevant institution remains responsible for its physical premises, visitor supervision, staff conduct and security arrangements.</p>
      <p>JINANAM does not guarantee the physical security of any premises or visitor.</p>
      </>
    ),
  },
  {
    heading: "13. DONATIONS AND FINANCIAL TRANSACTIONS",
    text: (
      <>
      <p>JINANAM may introduce donation functionality and other financial facilities in the future.</p>
      <p>Where donation functionality is enabled, donations made through the platform will be directed to Jain Vihaar Foundation, unless an expressly disclosed and lawfully authorised alternative arrangement is introduced.</p>
      <p>The Foundation will communicate the recipient, payment method, applicable conditions and receipt arrangements before accepting donations.</p>
      <h4>13.1 Donation Conditions</h4>
      <p>Donations will be subject to the published Donation Policy and applicable law.</p>
      <p>Users must ensure that payment information is accurate and that donations are made voluntarily.</p>
      <h4>13.2 Payment Processing</h4>
      <p>Payments may be processed through authorised payment gateways, banks or other payment service providers.</p>
      <p>Users may also be provided with other authorised payment instructions where applicable.</p>
      <p>The Foundation does not guarantee uninterrupted availability of third-party payment services.</p>
      <h4>13.3 Receipts and Tax Benefits</h4>
      <p>Donation receipts may be issued after successful payment confirmation.</p>
      <p>Any tax deduction or exemption may be claimed only where the Foundation holds the applicable approval or registration and the donation satisfies the relevant statutory conditions.</p>
      <p>No tax benefit is guaranteed merely because a donation is made through JiNANAM.</p>
      <h4>13.4 Refunds</h4>
      <p>Donation refunds will be governed by the Donation Policy and applicable law.</p>
      <p>Users should review the relevant conditions before making a donation.</p>
      <h4>13.5 International Donations</h4>
      <p>International donations will be accepted only where the Foundation has obtained the permissions, registrations and banking arrangements required under applicable Indian law, including FCRA requirements where applicable.</p>
      <p>Until those requirements are satisfied, international donations will not be enabled.</p>
      </>
    ),
  },
  {
    heading: "14. FEES AND PLATFORM CHARGES",
    text: (
      <>
      <p>JINANAM currently provides its core platform services free of charge.</p>
      <p>The Foundation may introduce subscriptions, paid features, service charges or other commercial arrangements in the future.</p>
      <p>Where charges are introduced, the applicable pricing, payment conditions, subscription period, renewal arrangements and cancellation conditions will be communicated before they take effect for the relevant service or organisation.</p>
      <p>No new paid arrangement will be imposed retrospectively without an applicable contractual or legal basis.</p>
      </>
    ),
  },
  {
    heading: "15. THIRD-PARTY SERVICES AND INTEGRATIONS",
    text: (
      <>
      <p>JINANAM may integrate with or rely on third-party services, including hosting providers, databases, authentication services, payment gateways, mapping services, analytics tools, notification services, communication providers and other technology vendors.</p>
      <p>Such providers may operate under their own terms, privacy policies and service conditions.</p>
      <p>Users may be required to comply with applicable third-party terms when using integrated services.</p>
      <p>The Foundation is not responsible for independent third-party services to the extent permitted by law, but remains responsible for its own obligations relating to the platform and its handling of personal information.</p>
      </>
    ),
  },
  {
    heading: "16. INTELLECTUAL PROPERTY RIGHTS",
    text: (
      <>
      <p>The JiNANAM name, branding, logos, software, application design, website, platform architecture, databases, text, graphics and other materials owned or licensed by the Foundation are protected by applicable intellectual property laws.</p>
      <p>Users are granted a limited, personal, non-exclusive, non-transferable and revocable right to access and use the platform for its intended purposes.</p>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Copy, reproduce or distribute platform materials without authorisation.</li>
        <li>Reverse engineer, decompile or attempt to extract source code except where permitted by law.</li>
        <li>Modify or create derivative works from platform software without permission.</li>
        <li>Use JINANAM branding without written authorisation.</li>
        <li>Interfere with intellectual property or proprietary rights.</li>
      </ul>
      <p>Users retain rights in content they lawfully own and submit to JINANAM.</p>
      <p>By submitting content, users grant the Foundation a limited licence to host, store, display, reproduce and process that content as reasonably necessary to operate, provide, secure and improve the relevant platform services, subject to applicable law and the Privacy Policy.</p>
      </>
    ),
  },
  {
    heading: "17. PROHIBITED ACTIVITIES",
    text: (
      <>
      <p><strong>Users must not use JiNANAM to:</strong></p>
      <ul>
        <li>Commit or facilitate unlawful activities.</li>
        <li>Harass, threaten, intimidate or exploit others.</li>
        <li>Promote violence, terrorism or unlawful hatred.</li>
        <li>Upload child sexual abuse material or exploit children.</li>
        <li>Publish defamatory, obscene or unlawful content.</li>
        <li>Impersonate individuals or organisations.</li>
        <li>Commit fraud or misrepresent information.</li>
        <li>Violate intellectual property rights.</li>
        <li>Obtain unauthorised access to accounts, systems or data.</li>
        <li>Distribute malware or harmful code.</li>
        <li>Interfere with platform availability or security.</li>
        <li>Scrape, harvest or misuse personal information.</li>
        <li>Misuse monk, Sadhvi or member location information.</li>
        <li>Circumvent access controls or role permissions.</li>
        <li>Use the platform for spam, scams or unauthorised solicitation.</li>
        <li>Violate applicable laws or published JINANAM policies.</li>
      </ul>
      <p>JINANAM may investigate suspected violations and take appropriate action.</p>
      </>
    ),
  },
  {
    heading: "18. ACCOUNT SUSPENSION, RESTRICTION AND TERMINATION",
    text: (
      <>
      <p><strong>The Foundation may restrict, suspend or terminate an account or access to particular features where:</strong></p>
      <ul>
        <li>These Terms or other platform policies are violated.</li>
        <li>False or misleading information is provided.</li>
        <li>An account is used for fraud, abuse or unlawful activity.</li>
        <li>Administrative privileges are misused.</li>
        <li>Personal information or location information is unlawfully accessed or disclosed.</li>
        <li>Platform security is compromised.</li>
        <li>Continued access creates a material risk to users or the platform.</li>
        <li>A competent authority requires such action.</li>
      </ul>
      <p>Where reasonably practicable and legally permissible, users will be informed of significant account restrictions and the reason for the action.</p>
      <p>Users may submit an appeal or request a review through the official support channel.</p>
      <p>Nothing in this section removes any rights that users may have under applicable law.</p>
      </>
    ),
  },
  {
    heading: "19. ACCOUNT DELETION",
    text: (
      <>
      <p>Users may request deletion of their accounts through the available in-app account deletion mechanism.</p>
      <p><strong>Users may also contact:</strong></p>
      <p><strong>Email:</strong> appsupport@jinanam.org</p>
      <p>JINANAM aims to process valid deletion requests within seven days, subject to verification and applicable legal obligations.</p>
      <p>Upon deletion, eligible personal information will be deleted or anonymised.</p>
      <p>Certain records may be retained where required for statutory, accounting, financial, legal, security or dispute-related purposes.</p>
      <p>Account deletion does not automatically cancel separate obligations or transactions already incurred, where such obligations lawfully continue.</p>
      <p>Please refer to the Account &amp; Data Deletion Policy and Privacy Policy for additional information.</p>
      </>
    ),
  },
  {
    heading: "20. PRIVACY AND DATA PROTECTION",
    text: (
      <>
      <p>Use of JINANAM is also governed by the Privacy Policy and Data Protection &amp; Security Policy.</p>
      <p><strong>These policies explain:</strong></p>
      <ul>
        <li>Information collected.</li>
        <li>Purposes of processing.</li>
        <li>Location and tracking information.</li>
        <li>Children's personal information.</li>
        <li>Third-party service providers.</li>
        <li>Data retention.</li>
        <li>International data processing.</li>
        <li>Security measures.</li>
        <li>User privacy rights.</li>
        <li>Account deletion.</li>
      </ul>
      <p>Users are encouraged to review these policies before using the platform.</p>
      <p>Where separate consent is required under applicable law, acceptance of these Terms does not replace that consent.</p>
      </>
    ),
  },
  {
    heading: "21. PLATFORM AVAILABILITY AND TECHNICAL LIMITATIONS",
    text: (
      <>
      <p>JINANAM aims to provide reliable platform services. However, uninterrupted availability cannot be guaranteed.</p>
      <p><strong>Services may be temporarily unavailable due to:</strong></p>
      <ul>
        <li>Scheduled maintenance.</li>
        <li>Software updates.</li>
        <li>Infrastructure issues.</li>
        <li>Internet or network failures.</li>
        <li>Third-party service disruptions.</li>
        <li>Device compatibility issues.</li>
        <li>Cybersecurity incidents.</li>
        <li>Circumstances beyond our reasonable control.</li>
      </ul>
      <p>JINANAM may modify, suspend or discontinue particular features where necessary for technical, security, legal or operational reasons.</p>
      <p>Where reasonably practicable, significant changes affecting users will be communicated through appropriate channels.</p>
      </>
    ),
  },
  {
    heading: "22. NO GUARANTEE OF THIRD-PARTY SERVICES OR INSTITUTIONAL INFORMATION",
    text: (
      <>
      <p>Information and services relating to participating temples, Dharamshalas, Sthanaks, Jain Centres, events and other organisations may be supplied by independent entities.</p>
      <p><strong>JINANAM does not guarantee:</strong></p>
      <ul>
        <li>The accuracy of every third-party listing.</li>
        <li>The quality of accommodation or facilities.</li>
        <li>The conduct of independent staff or representatives.</li>
        <li>The availability of rooms, halls or event registrations.</li>
        <li>The safety of third-party premises.</li>
        <li>The performance of external payment or map providers.</li>
        <li>The accuracy or uninterrupted availability of third-party location services.</li>
      </ul>
      <p>Users should independently verify important arrangements with the relevant organisation.</p>
      <p>Nothing in this section excludes liability where JiNANAM is legally responsible for its own acts or omissions.</p>
      </>
    ),
  },
  {
    heading: "23. DISCLAIMERS",
    text: (
      <>
      <p><strong>To the maximum extent permitted by applicable law:</strong></p>
      <ol>
        <li>JINANAM is provided as a technology and community facilitation platform.</li>
        <li>The platform is not an emergency response service.</li>
        <li>GPS and location information may be inaccurate, delayed or unavailable.</li>
        <li>Third-party information may change without notice.</li>
        <li>Participation in community activities and physical events is undertaken subject to the relevant organiser's conditions.</li>
        <li>JINANAM does not independently verify every statement, profile or representation submitted by users or participating organisations.</li>
        <li>The platform does not provide professional legal, medical, financial or emergency advice.</li>
      </ol>
      <p>Users must exercise their own judgement when relying on information available through the platform.</p>
      </>
    ),
  },
  {
    heading: "24. LIMITATION OF LIABILITY",
    text: (
      <>
      <p>To the maximum extent permitted by applicable law, JAIN VIHAAR FOUNDATION will not be liable for indirect, incidental, special, punitive or consequential losses arising from the use or inability to use the platform, including loss of profits, data or business opportunities.</p>
      <p><strong>JINANAM will not be responsible for losses arising solely from:</strong></p>
      <ul>
        <li>Independent acts or omissions of participating organisations.</li>
        <li>Incorrect information submitted by users or third parties.</li>
        <li>Unauthorised access caused by a user's failure to protect credentials.</li>
        <li>External service disruptions.</li>
        <li>Network failures or device-related limitations.</li>
        <li>Events beyond the Foundation's reasonable control.</li>
      </ul>
      <p>Nothing in these Terms excludes or limits liability for fraud, wilful misconduct, gross negligence where such exclusion is prohibited, death or personal injury where liability cannot lawfully be excluded, statutory consumer rights, data protection obligations or any other liability that cannot be excluded under applicable law.</p>
      <p>Where a limitation of liability is permitted, it will be applied only to the extent legally enforceable.</p>
      </>
    ),
  },
  {
    heading: "25. INDEMNIFICATION",
    text: (
      <>
      <p><strong>To the extent permitted by applicable law, users agree to be responsible for losses, claims and reasonable expenses directly arising from:</strong></p>
      <ul>
        <li>Their unlawful use of the platform.</li>
        <li>Their violation of these Terms.</li>
        <li>Their infringement of another person's rights.</li>
        <li>Their fraudulent or misleading representations.</li>
        <li>Their unauthorised use of platform systems.</li>
        <li>Their misuse of another person's personal or location information.</li>
      </ul>
      <p>This provision does not apply to the extent that a claim results from the Foundation's own unlawful conduct, negligence or breach of legal obligations.</p>
      </>
    ),
  },
  {
    heading: "26. FORCE MAJEURE",
    text: (
      <>
      <p>JINANAM will not be responsible for delays or failure to perform obligations to the extent caused by circumstances beyond its reasonable control.</p>
      <p>Such circumstances may include natural disasters, floods, earthquakes, extreme weather, government restrictions, war, civil unrest, terrorism, epidemics, public health emergencies, power or telecommunications failures, cyberattacks, widespread infrastructure disruptions or failures of essential third-party services.</p>
      <p>The Foundation will take reasonable steps to minimise the impact and restore affected services where practicable.</p>
      </>
    ),
  },
  {
    heading: "27. CHANGES TO THE PLATFORM AND THESE TERMS",
    text: (
      <>
      <p>JINANAM may introduce new features, modify existing services or discontinue certain functionalities.</p>
      <p><strong>We may also update these Terms to reflect:</strong></p>
      <ul>
        <li>Changes in laws and regulations.</li>
        <li>New platform functionality.</li>
        <li>Security and operational requirements.</li>
        <li>Changes in application store requirements.</li>
        <li>Changes in payment or booking arrangements.</li>
        <li>New international service requirements.</li>
      </ul>
      <p>Material changes will be published on the official website or communicated through appropriate platform channels.</p>
      <p>Where required by law, fresh consent or acceptance will be obtained.</p>
      <p>The revised Terms will include an updated effective date or last updated date.</p>
      </>
    ),
  },
  {
    heading: "28. INFORMATION TECHNOLOGY ACT AND INTERMEDIARY COMPLIANCE",
    text: (
      <>
      <p>JINANAM operates as a digital community and technology platform and may facilitate the hosting, display, transmission, publication and sharing of information submitted by users, administrators and participating organisations.</p>
      <p><strong>To the extent applicable to its activities, JAIN VIHAAR FOUNDATION intends to comply with:</strong></p>
      <ol>
        <li>The Information Technology Act, 2000.</li>
        <li>The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended from time to time.</li>
        <li>Applicable rules, regulations, notifications and directions issued by the Ministry of Electronics and Information Technology.</li>
        <li>Applicable Indian data protection and cybersecurity requirements.</li>
        <li>Other applicable laws governing online platforms, digital communications and user-generated content.</li>
      </ol>
      <p>JINANAM will maintain appropriate policies and operational procedures for the handling of unlawful content, user complaints, account misuse, content moderation and other matters relating to its digital services.</p>
      <h4>28.1 User Awareness and Platform Rules</h4>
      <p><strong>Users are expected to comply with the following published policies:</strong></p>
      <ul>
        <li>Privacy Policy.</li>
        <li>Terms &amp; Conditions.</li>
        <li>Community Guidelines.</li>
        <li>Content Reporting Policy.</li>
        <li>Data Retention Policy.</li>
        <li>Donation Policy.</li>
        <li>Cookie Policy.</li>
        <li>Account &amp; Data Deletion Policy.</li>
        <li>Data Protection &amp; Security Policy.</li>
        <li>Child Safety Standards.</li>
        <li>Grievance Redressal Policy.</li>
      </ul>
      <p>These policies will be made accessible through the JiNANAM website and relevant application interfaces.</p>
      <p>JINANAM may periodically communicate material policy changes and remind users of their applicable obligations, including in English or another supported language.</p>
      <h4>28.2 Prohibited Information and Activities</h4>
      <p><strong>Users must not create, upload, publish, transmit, distribute or otherwise make available information that:</strong></p>
      <ul>
        <li>Belongs to another person without lawful authority.</li>
        <li>Is defamatory, obscene, pornographic, paedophilic, invasive of privacy or otherwise unlawful.</li>
        <li>Exploits or harms children.</li>
        <li>Promotes terrorism, violence or unlawful activities.</li>
        <li>Incites religious, communal or other unlawful hatred.</li>
        <li>Impersonates another individual or organisation.</li>
        <li>Contains misleading information intended to defraud or deceive.</li>
        <li>Infringes intellectual property rights.</li>
        <li>Contains malicious software or harmful computer code.</li>
        <li>Violates applicable Indian or foreign laws.</li>
        <li>Contains artificially generated or manipulated material used for unlawful impersonation, deception or harm.</li>
        <li>Otherwise violates applicable laws or JiNANAM policies.</li>
      </ul>
      <p>JINANAM may restrict, remove or disable access to information in accordance with applicable law and its published policies.</p>
      <h4>28.3 Government and Court Directions</h4>
      <p>JINANAM may receive lawful directions, orders, notices or requests from competent courts, government authorities, law-enforcement agencies or other authorised bodies.</p>
      <p>Where legally required, JiNANAM will take appropriate action within the applicable statutory timelines.</p>
      <p>JINANAM will maintain appropriate procedures for receiving, verifying, recording and responding to such directions.</p>
      <h4>28.4 Synthetically Generated and Manipulated Content</h4>
      <p>Users must not use JINANAM to create, publish or distribute unlawful synthetic or artificially manipulated information, including deceptive deepfakes, non-consensual intimate imagery or material impersonating another individual.</p>
      <p>Where applicable, JINANAM will follow the labelling, provenance, reporting and removal requirements prescribed under the Information Technology Rules, including amendments concerning synthetically generated information.</p>
      </>
    ),
  },
  {
    heading: "29. CONTENT MODERATION AND USER-GENERATED CONTENT",
    text: (
      <>
      <p>JINANAM may display comments, photographs, institutional announcements, notices, profile information and other content submitted by users or authorised administrators.</p>
      <p>Although the platform does not currently permit unrestricted member-created public posts or member-to-member messaging, certain interactive features involve user-generated content.</p>
      <p>Accordingly, JiNANAM will maintain appropriate content moderation and safety mechanisms.</p>
      <h4>29.1 Content Filtering</h4>
      <p><strong>JINANAM may use automated tools, manual review and other reasonable mechanisms to identify and restrict:</strong></p>
      <ul>
        <li>Abusive language.</li>
        <li>Hate speech.</li>
        <li>Threats and harassment.</li>
        <li>Obscene or sexually explicit material.</li>
        <li>Content harmful to children.</li>
        <li>Fraudulent or misleading information.</li>
        <li>Unauthorised personal information.</li>
        <li>Copyright-infringing material.</li>
        <li>Other prohibited content.</li>
      </ul>
      <h4>29.2 Reporting Mechanism</h4>
      <p>Users may report inappropriate comments, profiles, photographs, announcements or other content through the available reporting mechanism or by contacting support@jinanam.org.</p>
      <p>Reports should include sufficient information to identify the relevant content and understand the alleged violation.</p>
      <h4>29.3 Blocking and Restriction</h4>
      <p>JINANAM may provide functionality allowing users to restrict or block abusive accounts and prevent unwanted interactions, subject to the functionality available in the relevant application.</p>
      <p>JINANAM may also restrict an account's ability to comment, interact with institutional pages or access other community features.</p>
      <h4>29.4 Moderation Decisions</h4>
      <p><strong>JINANAM may review reported content and take proportionate action, including:</strong></p>
      <ul>
        <li>Removing content.</li>
        <li>Disabling comments.</li>
        <li>Restricting interactions.</li>
        <li>Restricting access to specific features.</li>
        <li>Temporarily suspending accounts.</li>
        <li>Permanently disabling accounts.</li>
        <li>Reporting unlawful conduct to competent authorities where legally required.</li>
      </ul>
      <p>Where reasonably practicable, affected users may be informed of significant moderation decisions and provided an opportunity to appeal, subject to legal and safety requirements.</p>
      <h4>29.5 No Guarantee of Prior Review</h4>
      <p>JINANAM may not review every item of content before it becomes visible.</p>
      <p>Users must therefore exercise caution when interacting with content submitted by others.</p>
      <p>The availability of user reporting and moderation mechanisms does not transfer responsibility for unlawful conduct from the person who creates or publishes the relevant content.</p>
      </>
    ),
  },
  {
    heading: "30. GRIEVANCE REDRESSAL UNDER INDIAN IT RULES",
    text: (
      <>
      <p>JAIN VIHAAR FOUNDATION will maintain a grievance redressal mechanism for complaints relating to JiNANAM's services, content, user safety, privacy and other applicable matters.</p>
      <p><strong>Appointed Grievance Officer:</strong></p>
      <p><strong>Name:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact:</strong> +918693838281 / +918693838282</p>
      <h4>30.1 General Grievance Timelines</h4>
      <p><strong>For complaints falling under the applicable Information Technology Rules:</strong></p>
      <ul>
        <li>Complaints will be acknowledged within 24 hours of receipt.</li>
        <li>Complaints will be resolved within seven days of receipt, as prescribed by the applicable amended rules, unless a different statutory timeline applies.</li>
      </ul>
      <h4>30.2 Special Content Removal Complaints</h4>
      <p>Complaints concerning specified unlawful information or communication links covered by the applicable IT Rules will be handled within the relevant statutory timelines, including resolution within 36 hours where prescribed.</p>
      <p>Complaints concerning content that prima facie exposes an individual's private area, depicts full or partial nudity, depicts sexual acts or conduct, or involves electronic impersonation, including artificially morphed images, will receive the expedited handling prescribed by applicable law, including the applicable two-hour action requirement where it applies.</p>
      <h4>30.3 Appeal Mechanism</h4>
      <p>Where a complainant is dissatisfied with the decision of the Grievance Officer, or the complaint is not resolved within the applicable period, the complainant may approach the Grievance Appellate Committee through the official government mechanism, subject to applicable eligibility and filing requirements.</p>
      <p><strong>Information about the appeal mechanism is available at:</strong></p>
      <p>https://gac.gov.in</p>
      <h4>30.4 Government and Regulatory Complaints</h4>
      <p>JINANAM will cooperate with competent government authorities, courts and law-enforcement agencies in accordance with applicable law.</p>
      <p>The Foundation will maintain reasonable records of complaints, actions taken and relevant communications.</p>
      </>
    ),
  },
  {
    heading: "31. NATURE OF THE JINANAM SAAS PLATFORM",
    text: (
      <>
      <p>JINANAM is a technology-enabled Software-as-a-Service (SaaS) platform operated by JAIN VIHAAR FOUNDATION.</p>
      <p><strong>The platform is intended to serve the Jain community globally and may be used by independent institutions, including:</strong></p>
      <ul>
        <li>Jain Temples and Derasars.</li>
        <li>Dharamshalas.</li>
        <li>Sthanaks.</li>
        <li>Jain Centres.</li>
        <li>Religious and community organisations.</li>
        <li>Other authorised community institutions.</li>
      </ul>
      <p>JAIN VIHAAR FOUNDATION provides digital infrastructure, software applications and related technology services to facilitate institutional management, member engagement, visitor management, bookings, announcements, tracking and other community-related activities.</p>
      <p>Unless expressly agreed otherwise, participation in JINANAM does not create a partnership, joint venture, employment relationship, agency or legal association between the Foundation and any participating organisation.</p>
      <p>Each participating organisation remains an independent entity.</p>
      </>
    ),
  },
  {
    heading: "32. INSTITUTIONAL REGISTRATION AND AUTHORISATION",
    text: (
      <>
      <p>A participating organisation may register or be onboarded through an authorised representative.</p>
      <p>The representative must have the authority to submit organisational information and accept the applicable institutional terms.</p>
      <p>JINANAM may request documents or other information to verify the identity, existence or authority of a participating organisation or its representative.</p>
      <p>The organisation is responsible for ensuring that the information supplied is accurate and that its representative has the necessary authority.</p>
      <p>JINANAM may refuse, suspend or revoke institutional access where verification is unsuccessful, information is misleading or continued access creates a legal, security or operational risk.</p>
      </>
    ),
  },
  {
    heading: "33. INSTITUTIONAL ADMINISTRATOR RESPONSIBILITIES",
    text: (
      <>
      <p>Participating organisations are responsible for managing their authorised administrators and ensuring that administrative privileges are assigned appropriately.</p>
      <p><strong>Organisations must:</strong></p>
      <ul>
        <li>Appoint trustworthy and authorised representatives.</li>
        <li>Keep administrator details updated.</li>
        <li>Remove or modify access when an administrator leaves or changes responsibilities.</li>
        <li>Ensure administrators comply with these Terms and applicable policies.</li>
        <li>Protect institutional and member information.</li>
        <li>Avoid unauthorised access or disclosure.</li>
        <li>Review relevant administrative actions.</li>
        <li>Notify JINANAM of suspected misuse or compromise.</li>
      </ul>
      <p>The Foundation may provide role-based access controls, but each organisation remains responsible for the actions of its representatives within the organisation's authorised operational scope.</p>
      </>
    ),
  },
  {
    heading: "34. OWNERSHIP AND CONTROL OF INSTITUTIONAL DATA",
    text: (
      <>
      <p>Information submitted by a participating organisation about its institution, facilities, staff, events, bookings and operations remains subject to the organisation's applicable rights and responsibilities.</p>
      <p>The organisation authorises JINANAM to host, store, process, display and use that information as reasonably necessary to provide the platform services.</p>
      <p>JINANAM retains ownership of its software, platform architecture, database structure, designs, systems and underlying technology.</p>
      <p>Nothing in these Terms transfers ownership of JiNANAM's intellectual property to a participating organisation.</p>
      <p>The Foundation may use aggregated or anonymised information for legitimate operational, analytical, security and service-improvement purposes, provided that such use complies with applicable law and does not improperly identify individuals.</p>
      </>
    ),
  },
  {
    heading: "35. DATA PROTECTION AND PROCESSING RESPONSIBILITIES",
    text: (
      <>
      <h4>35.1 Responsibilities of JiNANAM</h4>
      <p>The Foundation will apply reasonable technical and organisational safeguards to protect personal information processed through its platform.</p>
      <p>It will handle personal information in accordance with its Privacy Policy, Data Protection &amp; Security Policy, Data Retention Policy and applicable law.</p>
      <h4>35.2 Responsibilities of Participating Organisations</h4>
      <p><strong>Participating organisations must:</strong></p>
      <ul>
        <li>Collect and submit personal information lawfully.</li>
        <li>Provide appropriate notices and obtain consent where required.</li>
        <li>Use information only for authorised institutional purposes.</li>
        <li>Restrict access to authorised personnel.</li>
        <li>Maintain confidentiality.</li>
        <li>Respond appropriately to requests relating to information they control.</li>
        <li>Notify the Foundation of suspected breaches or unauthorised access.</li>
        <li>Follow applicable data protection laws.</li>
      </ul>
      <p>Where an organisation determines the purposes and means of processing personal information through its use of JINANAM, it remains responsible for its own legal obligations relating to that processing.</p>
      <h4>35.3 Data Breach and Security Incident Cooperation</h4>
      <p>Participating organisations must promptly notify the Foundation if they become aware of an incident involving personal information or JiNANAM systems.</p>
      <p>The parties will reasonably cooperate in investigating, containing and responding to incidents, including notifications to affected individuals and authorities where legally required.</p>
      <p>Nothing in this section reduces the independent legal obligations of either party.</p>
      </>
    ),
  },
  {
    heading: "36. CONFIDENTIALITY",
    text: (
      <>
      <p>Participating organisations and their administrators may receive access to confidential institutional, member, visitor or operational information.</p>
      <p>They must not disclose, copy, distribute or use such information for purposes unrelated to their authorised responsibilities.</p>
      <p>Confidential information may be disclosed where required by law, court order or competent authority, or where disclosure is necessary for a legitimate purpose permitted under applicable law.</p>
      <p>These confidentiality obligations continue after an organisation or administrator stops using JINANAM.</p>
      </>
    ),
  },
  {
    heading: "37. PLATFORM ACCESS AND LICENCE",
    text: (
      <>
      <p>Subject to these Terms, the Foundation grants participating organisations a limited, non-exclusive, non-transferable and revocable right to access and use JINANAM for their authorised institutional purposes.</p>
      <p><strong>Organisations must not:</strong></p>
      <ul>
        <li>Resell or sublicense platform access without written permission.</li>
        <li>Copy or reverse engineer the platform.</li>
        <li>Circumvent access restrictions.</li>
        <li>Use the platform to develop unauthorised competing services.</li>
        <li>Remove proprietary notices.</li>
        <li>Use platform systems for unlawful or unauthorised purposes.</li>
      </ul>
      <p>The Foundation retains all rights not expressly granted under these Terms.</p>
      </>
    ),
  },
  {
    heading: "38. SERVICE AVAILABILITY AND MAINTENANCE",
    text: (
      <>
      <p>JINANAM will make reasonable efforts to maintain platform availability and reliability. However, continuous and uninterrupted access cannot be guaranteed.</p>
      <p>Services may be affected by scheduled maintenance, technical upgrades, hosting or infrastructure failures, internet connectivity issues, third-party service disruptions, cybersecurity incidents, government restrictions or other circumstances beyond the Foundation's reasonable control.</p>
      <p>JINANAM may perform maintenance, updates and technical modifications where reasonably necessary.</p>
      </>
    ),
  },
  {
    heading: "39. INSTITUTIONAL MISUSE AND SUSPENSION",
    text: (
      <>
      <p><strong>JINANAM may suspend or restrict an organisation's access where:</strong></p>
      <ul>
        <li>False organisational information is submitted.</li>
        <li>Administrative accounts are misused.</li>
        <li>Member or visitor data is unlawfully accessed or disclosed.</li>
        <li>The organisation violates these Terms.</li>
        <li>Platform security is compromised.</li>
        <li>The organisation uses JINANAM for unlawful purposes.</li>
        <li>Continued access creates a material risk to users or the platform.</li>
        <li>A competent authority requires such action.</li>
      </ul>
      <p>Where reasonably practicable, the organisation will receive notice of significant restrictions and an opportunity to respond, except where immediate action is necessary for safety, security or legal compliance.</p>
      </>
    ),
  },
  {
    heading: "40. TERMINATION AND INSTITUTIONAL EXIT",
    text: (
      <>
      <p>A participating organisation may request termination of its JiNANAM access by contacting support@jinanam.org.</p>
      <p><strong>Upon termination:</strong></p>
      <ol>
        <li>Relevant administrative access may be disabled.</li>
        <li>The organisation's authorised administrators will no longer be able to use restricted institutional features.</li>
        <li>The organisation may request access to eligible institutional records, subject to identity verification, legal restrictions and technical feasibility.</li>
        <li>JINANAM will process applicable data deletion or retention requirements according to the Privacy Policy and Data Retention Policy.</li>
        <li>Information required for statutory, accounting, security or legal purposes may be retained for the applicable period.</li>
        <li>The organisation must discontinue unauthorised use of JINANAM branding and restricted platform materials.</li>
      </ol>
      <p>Termination does not affect obligations that accrued before termination or provisions intended to survive termination.</p>
      </>
    ),
  },
  {
    heading: "41. INSTITUTIONAL FEES AND FUTURE COMMERCIAL ARRANGEMENTS",
    text: (
      <>
      <p>JINANAM currently provides its core platform services free of charge.</p>
      <p>The Foundation may introduce institutional subscriptions, paid features, service charges or other commercial arrangements in the future.</p>
      <p>Where such charges are introduced, the applicable pricing, payment conditions, subscription period, renewal arrangements and cancellation conditions will be communicated before they take effect for the relevant organisation.</p>
      <p>No new paid arrangement will be imposed retrospectively without an applicable contractual or legal basis.</p>
      </>
    ),
  },
  {
    heading: "42. INSTITUTIONAL LIABILITY",
    text: (
      <>
      <p>Each participating organisation remains responsible for its own staff, facilities, religious activities, accommodation services, visitor management, bookings, events and other independent operations.</p>
      <p>The organisation will be responsible for claims arising from its own unlawful conduct, negligence, misrepresentations, unauthorised processing of personal information or violation of these Terms, to the extent permitted by applicable law.</p>
      <p>The Foundation remains responsible for its own acts and omissions and statutory obligations.</p>
      <p>Nothing in these provisions excludes liability that cannot legally be excluded.</p>
      </>
    ),
  },
  {
    heading: "43. GLOBAL ACCESS AND INTERNATIONAL COMPLIANCE",
    text: (
      <>
      <p>JINANAM is intended to serve Jain community members and participating organisations across the world.</p>
      <p>Users accessing the platform outside India must comply with applicable laws in their respective jurisdictions.</p>
      <p>The Foundation will take reasonable steps to comply with applicable legal requirements relevant to its international operations.</p>
      <p><strong>Depending on the user's location and the nature of the service, applicable requirements may include:</strong></p>
      <ul>
        <li>General Data Protection Regulation (GDPR) and applicable European privacy laws.</li>
        <li>UK data protection legislation.</li>
        <li>Applicable United States federal and state privacy laws.</li>
        <li>Children's Online Privacy Protection Act (COPPA), where applicable.</li>
        <li>Applicable consumer protection laws.</li>
        <li>Applicable electronic communications and cybersecurity regulations.</li>
        <li>Local rules governing donations, payments and financial transactions.</li>
      </ul>
      <p>Where mandatory local law provides users with additional rights or protections, those provisions will prevail to the extent applicable.</p>
      <p>These Terms do not intend to exclude mandatory consumer, privacy or statutory rights available to users in their country of residence.</p>
      </>
    ),
  },
  {
    heading: "44. INTERNATIONAL CHILD PROTECTION",
    text: (
      <>
      <p>JINANAM may support users below the age of 18, subject to applicable child protection and privacy laws.</p>
      <p>The age of a child, requirements for parental or guardian consent and restrictions on processing children's information may differ between jurisdictions.</p>
      <p>JINANAM will apply the relevant requirements based on the applicable law and the nature of the service.</p>
      <p>Where required, verified parental or lawful guardian consent must be obtained before collecting or processing a child's personal information.</p>
      <p>The Foundation may restrict certain services or functionalities for children where required for safety or legal compliance.</p>
      </>
    ),
  },
  {
    heading: "45. GOOGLE PLAY AND APPLE APP STORE",
    text: (
      <>
      <p>JINANAM applications may be distributed through Google Play, the Apple App Store or other authorised distribution channels.</p>
      <p>Users must comply with the applicable platform rules and the terms imposed by the relevant application marketplace.</p>
      <p>The Foundation will maintain appropriate application disclosures, privacy information, reporting mechanisms, security controls and account management functionality.</p>
      <h4>45.1 Account Creation and Deletion</h4>
      <p>Where an application permits account creation, users must be provided with an accessible account deletion request mechanism within the application and an external website facility, as required by the relevant application marketplace.</p>
      <p>Disabling or temporarily suspending an account does not constitute account deletion.</p>
      <p>Upon a valid deletion request, JINANAM will delete or anonymise associated personal information, subject to lawful retention obligations.</p>
      <h4>45.2 Permissions</h4>
      <p>Applications may request access to device permissions such as location, camera, photos, notifications and other permissions required for specific features.</p>
      <p>Such permissions will be requested only where reasonably necessary for the relevant functionality and subject to applicable platform requirements.</p>
      <p>Users may withdraw permissions through their device settings, although certain features may become unavailable.</p>
      <h4>45.3 Location Services</h4>
      <p>Location access will be used only for the purposes disclosed in the Privacy Policy and relevant in-app notices.</p>
      <p>Background location access, where applicable, will be limited to authorised functionality and will require the appropriate device permission and disclosures.</p>
      <h4>45.4 Third-Party Marketplace Relationship</h4>
      <p>Google and Apple are not parties to the agreement between users and JAIN VIHAAR FOUNDATION solely because an application is distributed through their respective marketplaces.</p>
      <p>To the extent permitted by applicable law and the relevant marketplace rules, the Foundation and the user acknowledge that the relevant marketplace provider is not responsible for providing the platform's underlying community, institutional or administrative services.</p>
      <p>Any applicable third-party beneficiary or support provisions imposed by the relevant marketplace will remain unaffected.</p>
      </>
    ),
  },
  {
    heading: "46. GOVERNING LAW AND DISPUTE RESOLUTION",
    text: (
      <>
      <p>These Terms will be governed by the laws of India, subject to mandatory consumer protection, privacy and other applicable laws in the country or jurisdiction where a user resides or accesses the platform.</p>
      <p>The parties will endeavour to resolve disputes through good-faith communication.</p>
      <p>Where a dispute cannot be resolved informally, courts of competent jurisdiction in Mumbai, Maharashtra, India, will have jurisdiction, subject to mandatory local consumer protection and other applicable laws.</p>
      <p>Nothing in these Terms prevents users from approaching a competent regulatory authority or exercising rights available under applicable law.</p>
      <p>Where mandatory local law requires a different dispute resolution procedure or forum, that law will prevail.</p>
      </>
    ),
  },
  {
    heading: "47. PRECEDENCE OF POLICIES AND AGREEMENTS",
    text: (
      <>
      <p><strong>The following documents form part of the JiNANAM policy framework:</strong></p>
      <ol>
        <li>Privacy Policy.</li>
        <li>Terms &amp; Conditions.</li>
        <li>Community Guidelines.</li>
        <li>Content Reporting Policy.</li>
        <li>Data Retention Policy.</li>
        <li>Donation Policy.</li>
        <li>Cookie Policy.</li>
        <li>Account &amp; Data Deletion Policy.</li>
        <li>Data Protection &amp; Security Policy.</li>
        <li>Child Safety Standards.</li>
        <li>Grievance Redressal Policy.</li>
      </ol>
      <p>Additional agreements may apply to participating organisations, vendors, service providers and other authorised entities.</p>
      <p>Where a specific written agreement governs an institutional relationship, its terms will apply to that relationship to the extent of any inconsistency, subject to applicable law.</p>
      <p>Where a specific service policy applies to a particular matter, that policy will govern the relevant operational details, provided it does not override these Terms or any mandatory legal requirement.</p>
      <p>No provision in these documents overrides mandatory statutory rights or obligations.</p>
      </>
    ),
  },
  {
    heading: "48. SEVERABILITY",
    text: (
      <>
      <p>If any provision of these Terms is held invalid, unlawful or unenforceable by a competent authority, the remaining provisions will continue to apply to the extent legally permissible.</p>
      <p>The invalid provision will be interpreted or modified only to the extent necessary to make it enforceable, where permitted by law.</p>
      </>
    ),
  },
  {
    heading: "49. NO WAIVER",
    text: (
      <>
      <p>Failure by JINANAM to enforce any provision of these Terms on a particular occasion will not constitute a waiver of its right to enforce that provision or any other provision in the future.</p>
      </>
    ),
  },
  {
    heading: "50. ENTIRE AGREEMENT",
    text: (
      <>
      <p>These Terms, together with the published JiNANAM policies listed in Section 47, constitute the applicable published policy framework governing use of JiNANAM.</p>
      <p>Additional terms may apply to particular bookings, events, donations, participating organisations or other specialised services.</p>
      <p>Where a separate written agreement applies to a specific institutional or commercial relationship, its provisions will govern that relationship to the extent of any inconsistency, subject to applicable law.</p>
      </>
    ),
  },
  {
    heading: "51. CONTACT INFORMATION",
    text: (
      <>
      <p><strong>For questions, concerns, complaints or clarification regarding these Terms, please contact:</strong></p>
      <p><strong>JAIN VIHAAR FOUNDATION</strong></p>
      <p><strong>Platform Brand:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>General Support:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion:</strong> appsupport@jinanam.org</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Building No. 9, Rehab Building,</p>
      <p>Wadar Pada, Malad East,</p>
      <p>Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      <p>These Terms apply to the JiNANAM website and all four JiNANAM applications operated by JAIN VIHAAR FOUNDATION.</p>
      </>
    ),
  },
    ],
  },

  "community-guidelines": {
    title: "Community Guidelines",
    intro:
      "JiNANAM brings Jain families, temples, monks, and organizations together. These guidelines help maintain a respectful, safe, and welcoming community.",
    sections: [
      {
    heading: "COMMUNITY GUIDELINES",
    text: (
      <>
      <p><strong>Operated by:</strong> JAIN VIHAAR FOUNDATION</p>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      </>
    ),
  },
  {
    heading: "1. INTRODUCTION",
    text: (
      <>
      <p>JINANAM is a digital platform created to connect the Jain community globally through technology, religious information, community participation, institutional services and safety initiatives.</p>
      <p>Our objective is to provide a respectful, secure, inclusive and trustworthy digital environment for Jain and non-Jain individuals, monks, Sadhvis, temples, Dharamshalas, Sthanaks, Jain Centres and other participating organisations.</p>
      <p>These Community Guidelines establish the standards of behaviour expected from everyone using JINANAM.</p>
      <p><strong>They apply to all activities conducted through:</strong></p>
      <ol>
        <li>JINANAM App - Member Application.</li>
        <li>JINANAM Admin App - Administration Application.</li>
        <li>JINANAM Tracking App - Monk Tracking Application.</li>
        <li>JINANAM Security App - Security and Visitor Management Application.</li>
        <li>JINANAM Website and associated digital services.</li>
      </ol>
      <p>By registering or using JINANAM, you agree to follow these guidelines, our Terms &amp; Conditions and all other applicable platform policies.</p>
      </>
    ),
  },
  {
    heading: "2. WHO MUST FOLLOW THESE GUIDELINES?",
    text: (
      <>
      <p><strong>These guidelines apply to:</strong></p>
      <ul>
        <li>Jain members.</li>
        <li>Non-Jain members.</li>
        <li>Monks and Sadhvis.</li>
        <li>Temple and Derasar administrators.</li>
        <li>Dharamshala administrators.</li>
        <li>Sthanak administrators.</li>
        <li>Jain Centre administrators.</li>
        <li>Community page administrators.</li>
        <li>Volunteers and authorised representatives.</li>
        <li>Security personnel and institutional staff.</li>
        <li>Parents and guardians managing children's accounts.</li>
        <li>Other individuals or organisations accessing JINANAM.</li>
      </ul>
      <p>No individual or organisation is exempt from these guidelines because of their religious status, administrative position, membership, authority or association with the Foundation.</p>
      <p>Administrators and authorised representatives are expected to maintain higher standards of responsibility because of their access to institutional and user information.</p>
      </>
    ),
  },
  {
    heading: "3. RESPECT FOR RELIGION AND COMMUNITY",
    text: (
      <>
      <p>JINANAM is built to connect the Jain community while welcoming individuals from other backgrounds.</p>
      <p>We expect every user to respect Jain religious beliefs, traditions, practices, institutions, monks, Sadhvis and community members.</p>
      <p><strong>Users must:</strong></p>
      <ul>
        <li>Respect Jain religious principles and traditions.</li>
        <li>Communicate respectfully about religious beliefs and practices.</li>
        <li>Respect monks, Sadhvis and religious representatives.</li>
        <li>Avoid intentionally misrepresenting religious teachings or scriptures.</li>
        <li>Avoid insulting or provoking individuals based on their religious beliefs.</li>
        <li>Respect differences between Jain sects, traditions and practices.</li>
        <li>Avoid creating unnecessary disputes between communities.</li>
        <li>Respect non-Jain members and visitors.</li>
        <li>Engage in constructive and peaceful discussions.</li>
      </ul>
      <h4>3.1 Religious Disagreement</h4>
      <p>Users may have different interpretations, opinions and understandings of religious practices. Respectful disagreement is permitted.</p>
      <p>However, JINANAM does not permit threats, harassment, intimidation, communal hatred, incitement to violence or deliberately inflammatory religious content.</p>
      <h4>3.2 Religious and Community Sensitivity</h4>
      <p><strong>Users must not use JiNANAM to:</strong></p>
      <ul>
        <li>Insult or deliberately demean religious figures.</li>
        <li>Publish deliberately misleading quotations from religious scriptures.</li>
        <li>Promote hatred against Jain or non-Jain communities.</li>
        <li>Encourage religious violence or discrimination.</li>
        <li>Misrepresent an institution's religious position.</li>
        <li>Use religious identity to threaten, exploit or defraud others.</li>
      </ul>
      </>
    ),
  },
  {
    heading: "4. HONEST AND AUTHENTIC PROFILES",
    text: (
      <>
      <p>Users must maintain authentic and accurate accounts.</p>
      <p><strong>The following activities are prohibited:</strong></p>
      <ul>
        <li>Impersonating another member.</li>
        <li>Creating fake monk or Sadhvi profiles.</li>
        <li>Creating fake temple or Dharamshala accounts.</li>
        <li>Using another person's photographs without permission.</li>
        <li>Misrepresenting organisational affiliation.</li>
        <li>Creating accounts using another person's identity without authority.</li>
        <li>Misrepresenting administrative authority.</li>
        <li>Using fake contact information.</li>
        <li>Creating duplicate accounts to evade restrictions.</li>
      </ul>
      <p>JINANAM may request additional verification where reasonably necessary to protect the platform and its users.</p>
      <p>Administrators must ensure that institutional profiles represent the actual organisation they claim to represent.</p>
      </>
    ),
  },
  {
    heading: "5. PROFILE PHOTOGRAPHS AND PERSONAL INFORMATION",
    text: (
      <>
      <p>Members may upload profile photographs where the feature is available.</p>
      <p><strong>Profile photographs must:</strong></p>
      <ul>
        <li>Represent the account holder or an appropriately authorised identity.</li>
        <li>Not impersonate another individual.</li>
        <li>Not contain obscene or sexually explicit material.</li>
        <li>Not promote violence, hatred or harassment.</li>
        <li>Not infringe another person's intellectual property rights.</li>
        <li>Not expose another individual's private information without appropriate authority.</li>
        <li>Not contain misleading or fraudulent representations.</li>
      </ul>
      <p>Users must not upload photographs of children or other individuals without appropriate authority and consent.</p>
      <p>JINANAM may remove photographs that violate these guidelines.</p>
      </>
    ),
  },
  {
    heading: "6. COMMENTS, LIKES AND COMMUNITY INTERACTIONS",
    text: (
      <>
      <p>JINANAM may allow members to like, comment on and share available community content, including announcements and content published by authorised institutional profiles.</p>
      <p>All interactions must remain respectful and lawful.</p>
      <h4>6.1 Acceptable Behaviour</h4>
      <p><strong>Users are encouraged to:</strong></p>
      <ul>
        <li>Appreciate useful community information.</li>
        <li>Share constructive feedback.</li>
        <li>Ask relevant questions.</li>
        <li>Participate in respectful discussions.</li>
        <li>Share verified information.</li>
        <li>Support community initiatives.</li>
        <li>Report inappropriate content.</li>
        <li>Help maintain a positive community environment.</li>
      </ul>
      <h4>6.2 Unacceptable Behaviour</h4>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Post abusive comments.</li>
        <li>Threaten other individuals.</li>
        <li>Use discriminatory or hateful language.</li>
        <li>Engage in bullying or targeted harassment.</li>
        <li>Spread rumours or knowingly false allegations.</li>
        <li>Publish another person's private information.</li>
        <li>Repeatedly post irrelevant or disruptive comments.</li>
        <li>Use comments to solicit money fraudulently.</li>
        <li>Promote illegal activities.</li>
        <li>Engage in coordinated harassment.</li>
        <li>Use comments to intimidate monks, Sadhvis, administrators or other members.</li>
      </ul>
      <p>JINANAM may remove comments and restrict accounts involved in repeated or serious violations.</p>
      </>
    ),
  },
  {
    heading: "7. PROHIBITED CONTENT",
    text: (
      <>
      <p>The following categories of content are prohibited across JINANAM.</p>
      <h4>7.1 Hate Speech and Discrimination</h4>
      <p>Content that promotes hatred, violence or discrimination against an individual or group based on religion, caste, ethnicity, nationality, race, gender, disability or another protected characteristic is prohibited.</p>
      <h4>7.2 Harassment and Bullying</h4>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Threaten or intimidate others.</li>
        <li>Repeatedly target individuals with abusive comments.</li>
        <li>Encourage others to harass a particular person.</li>
        <li>Publish humiliating or degrading material.</li>
        <li>Engage in cyberbullying.</li>
        <li>Encourage violence or physical harm.</li>
      </ul>
      <h4>7.3 Sexual and Explicit Content</h4>
      <p><strong>The following are prohibited:</strong></p>
      <ul>
        <li>Pornographic content.</li>
        <li>Sexually explicit photographs or videos.</li>
        <li>Sexual exploitation.</li>
        <li>Non-consensual intimate imagery.</li>
        <li>Sexual harassment.</li>
        <li>Content involving child sexual abuse or exploitation.</li>
        <li>Sexually suggestive content involving minors.</li>
      </ul>
      <h4>7.4 Violence and Dangerous Activities</h4>
      <p><strong>Users must not publish content that encourages:</strong></p>
      <ul>
        <li>Physical violence.</li>
        <li>Religious or communal violence.</li>
        <li>Terrorism or extremist activities.</li>
        <li>Serious criminal conduct.</li>
        <li>Self-harm or harm to others.</li>
        <li>Dangerous or unlawful activities.</li>
      </ul>
      <h4>7.5 Fraud and Financial Misconduct</h4>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Publish fraudulent donation requests.</li>
        <li>Impersonate charitable organisations.</li>
        <li>Circulate fake payment instructions.</li>
        <li>Misrepresent booking payments.</li>
        <li>Share fraudulent QR codes.</li>
        <li>Conduct financial scams.</li>
        <li>Misuse the JiNANAM name or branding to collect money without authorisation.</li>
      </ul>
      <h4>7.6 Misinformation and Misrepresentation</h4>
      <p><strong>Users must not knowingly distribute false or misleading information concerning:</strong></p>
      <ul>
        <li>Religious activities.</li>
        <li>Temple or Dharamshala facilities.</li>
        <li>Monk and Sadhvi movements.</li>
        <li>Events and tours.</li>
        <li>Bookings.</li>
        <li>Donations.</li>
        <li>Community announcements.</li>
        <li>Emergency situations.</li>
        <li>Public safety.</li>
      </ul>
      <h4>7.7 Copyright and Intellectual Property</h4>
      <p>Users must not upload or share content without the necessary rights or permission.</p>
      <p><strong>This includes:</strong></p>
      <ul>
        <li>Copyright-protected photographs.</li>
        <li>Videos.</li>
        <li>Music.</li>
        <li>Logos.</li>
        <li>Written material.</li>
        <li>Other protected intellectual property.</li>
      </ul>
      <p>JINANAM may remove infringing content upon receiving a valid complaint or identifying a violation.</p>
      <h4>7.8 Malicious and Harmful Content</h4>
      <p>Users must not upload malware, harmful links, malicious files, phishing links or other material intended to compromise devices, accounts or platform security.</p>
      <h4>7.9 Artificially Generated and Manipulated Content</h4>
      <p><strong>Users must not use Al-generated or manipulated photographs, videos, audio or other information to:</strong></p>
      <ul>
        <li>Impersonate another person.</li>
        <li>Create misleading religious announcements.</li>
        <li>Fabricate statements attributed to monks or Sadhvis.</li>
        <li>Create fraudulent institutional communications.</li>
        <li>Misrepresent events or incidents.</li>
        <li>Defraud, harass or threaten others.</li>
        <li>Publish non-consensual intimate imagery.</li>
        <li>Mislead users about an individual's identity or activities.</li>
      </ul>
      <p>Where applicable, synthetically generated or manipulated information must comply with Indian law and relevant platform requirements, including applicable disclosure and labelling obligations.</p>
      </>
    ),
  },
  {
    heading: "8. MONK AND SADHVI SAFETY",
    text: (
      <>
      <p>The safety, dignity and privacy of Jain monks and Sadhvis are among the important objectives of JINANAM.</p>
      <p>The Tracking App is designed to facilitate authorised Vihaar route management and safety-related location sharing.</p>
      <p>All users must respect the privacy, movement and religious activities of monks and Sadhvis.</p>
      <h4>8.1 Responsible Use of Location Information</h4>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Use location information to harass or follow monks or Sadhvis.</li>
        <li>Share precise location information for malicious purposes.</li>
        <li>Use tracking information for stalking or unauthorised surveillance.</li>
        <li>Misrepresent a monk's location or movement.</li>
        <li>Interfere with active Vihaar routes.</li>
        <li>Publish misleading route information.</li>
        <li>Use location information for unauthorised commercial activities.</li>
        <li>Attempt to gain unauthorised access to tracking systems.</li>
      </ul>
      <h4>8.2 Location Sharing</h4>
      <p>Approximate monk location information may be visible to public visitors, while eligible registered members may have access to live location information according to platform permissions.</p>
      <p>Users must not misuse, copy, redistribute or exploit such information.</p>
      <h4>8.3 Member Participation in Vihaar</h4>
      <p>Members may voluntarily join an active Vihaar route where the functionality is available.</p>
      <p><strong>Members participating in a route must:</strong></p>
      <ul>
        <li>Share their location only after providing the required permission.</li>
        <li>Respect the monk's religious practices and movement.</li>
        <li>Avoid creating unnecessary interruptions.</li>
        <li>Follow authorised route instructions.</li>
        <li>Leave the route when participation is no longer required.</li>
        <li>Avoid sharing other participants' location information without permission.</li>
      </ul>
      <h4>8.4 Safety Concerns</h4>
      <p>Any suspected misuse of monk or Sadhvi tracking information should be reported immediately through the available reporting mechanism or support@jinanam.org.</p>
      <p>JINANAM may restrict tracking access or suspend accounts where a safety risk is identified.</p>
      </>
    ),
  },
  {
    heading: "9. CHILD SAFETY AND PROTECTION",
    text: (
      <>
      <p>JINANAM may permit users below 18 years of age to access relevant services, subject to applicable laws and verifiable parental or lawful guardian consent where required.</p>
      <p>We are committed to maintaining a safe digital environment for children.</p>
      <p><strong>The following activities are strictly prohibited:</strong></p>
      <ul>
        <li>Child sexual abuse material.</li>
        <li>Sexual exploitation of minors.</li>
        <li>Grooming or predatory behaviour.</li>
        <li>Sexual harassment involving children.</li>
        <li>Threatening or intimidating children.</li>
        <li>Soliciting inappropriate photographs or personal information.</li>
        <li>Encouraging children to meet strangers without appropriate safeguards.</li>
        <li>Sharing children's private information without authority.</li>
        <li>Using JINANAM to exploit, manipulate or endanger minors.</li>
      </ul>
      <h4>9.1 Children's Privacy</h4>
      <p>Users must not request or disclose a child's personal information, location, contact details, photographs or other sensitive information without appropriate authority and lawful justification.</p>
      <h4>9.2 Reporting Child Safety Concerns</h4>
      <p>Any suspected child exploitation, abuse or other serious child safety concern must be reported immediately.</p>
      <p><strong>JINANAM may:</strong></p>
      <ul>
        <li>Remove or restrict relevant content.</li>
        <li>Suspend associated accounts.</li>
        <li>Preserve relevant information where legally required.</li>
        <li>Report suspected offences to competent authorities.</li>
        <li>Cooperate with lawful investigations.</li>
      </ul>
      <p>Child safety reports will receive priority handling.</p>
      <h4>9.3 Parental and Guardian Responsibility</h4>
      <p>Parents and lawful guardians are encouraged to supervise children's use of JINANAM and ensure that children understand safe online behaviour.</p>
      <p>JINANAM may restrict certain features or accounts where necessary to protect minors.</p>
      </>
    ),
  },
  {
    heading: "10. ADMINISTRATOR AND INSTITUTIONAL RESPONSIBILITIES",
    text: (
      <>
      <p>Administrators have additional responsibilities because they can manage institutional information and interact with members.</p>
      <p><strong>This section applies to:</strong></p>
      <ul>
        <li>Super Admins.</li>
        <li>Temple Admins.</li>
        <li>Dharamshala Admins.</li>
        <li>Sthanak Admins.</li>
        <li>Jain Centre Admins.</li>
        <li>Community Page Admins.</li>
        <li>Other authorised administrators.</li>
      </ul>
      <h4>10.1 Accurate Information</h4>
      <p><strong>Administrators must publish accurate and current information concerning:</strong></p>
      <ul>
        <li>Institution details.</li>
        <li>Contact information.</li>
        <li>Facilities.</li>
        <li>Accommodation.</li>
        <li>Booking conditions.</li>
        <li>Events.</li>
        <li>Announcements.</li>
        <li>Religious programmes.</li>
        <li>Other institutional services.</li>
      </ul>
      <h4>10.2 Responsible Administration</h4>
      <p><strong>Administrators must:</strong></p>
      <ul>
        <li>Protect their administrative credentials.</li>
        <li>Use only their assigned permissions.</li>
        <li>Avoid accessing unauthorised information.</li>
        <li>Protect member and visitor information.</li>
        <li>Maintain appropriate records.</li>
        <li>Respond responsibly to relevant enquiries.</li>
        <li>Avoid publishing misleading information.</li>
        <li>Follow JINANAM's Privacy Policy and security requirements.</li>
      </ul>
      <h4>10.3 Abuse of Administrative Privileges</h4>
      <p><strong>Administrators must not:</strong></p>
      <ul>
        <li>Misuse member information.</li>
        <li>Access personal records without authority.</li>
        <li>Modify records for fraudulent purposes.</li>
        <li>Share confidential information.</li>
        <li>Misuse monk tracking facilities.</li>
        <li>Create unauthorised administrator accounts.</li>
        <li>Use institutional pages for personal harassment.</li>
        <li>Misrepresent their authority.</li>
      </ul>
      <p>JINANAM may revoke administrative privileges or suspend accounts for violations.</p>
      </>
    ),
  },
  {
    heading: "11. SECURITY APP AND VISITOR MANAGEMENT",
    text: (
      <>
      <p>The JINANAM Security App is intended for authorised security personnel and staff of participating institutions.</p>
      <p>Security personnel must use the application only for legitimate institutional operations.</p>
      <p><strong>They must:</strong></p>
      <ul>
        <li>Enter accurate visitor information.</li>
        <li>Verify members through authorised procedures.</li>
        <li>Use QR scanning only for legitimate verification.</li>
        <li>Maintain confidentiality of visitor information.</li>
        <li>Avoid sharing visitor records without authority.</li>
        <li>Avoid using visitor details for personal purposes.</li>
        <li>Protect their assigned login credentials.</li>
        <li>Report suspicious activities and suspected data misuse.</li>
      </ul>
      <p><strong>Security personnel must not:</strong></p>
      <ul>
        <li>Falsify visitor entries.</li>
        <li>Misuse member identification details.</li>
        <li>Share visitor records publicly.</li>
        <li>Photograph or copy personal information without authority.</li>
        <li>Misuse vehicle information.</li>
        <li>Use the application for unauthorised surveillance.</li>
        <li>Disclose security-related information to unauthorised individuals.</li>
      </ul>
      <p>Violations may result in removal of access and reporting to the relevant institution or authorities.</p>
      </>
    ),
  },
  {
    heading: "12. SPAM, SOLICITATION AND MISUSE",
    text: (
      <>
      <p>JINANAM must not be used for unsolicited or misleading activities.</p>
      <p><strong>The following are prohibited:</strong></p>
      <ul>
        <li>Repeated irrelevant comments.</li>
        <li>Fake donation campaigns.</li>
        <li>Fraudulent fundraising.</li>
        <li>Unauthorised commercial solicitation.</li>
        <li>Misleading promotional messages.</li>
        <li>Phishing and suspicious links.</li>
        <li>Fake event registrations.</li>
        <li>Impersonation of official accounts.</li>
        <li>Unauthorised advertising.</li>
        <li>Repeated attempts to bypass platform restrictions.</li>
      </ul>
      <p>JINANAM may restrict accounts involved in spam or fraudulent activities.</p>
      </>
    ),
  },
  {
    heading: "13. PRIVACY AND PERSONAL INFORMATION",
    text: (
      <>
      <p>Users must respect the privacy of all individuals using JINANAM.</p>
      <p><strong>Users must not publish or distribute another person's:</strong></p>
      <ul>
        <li>Phone number.</li>
        <li>Residential address.</li>
        <li>Personal email address.</li>
        <li>Identification documents.</li>
        <li>Financial information.</li>
        <li>Private photographs.</li>
        <li>Live location.</li>
        <li>Medical information.</li>
        <li>Confidential institutional records.</li>
        <li>Other personal or sensitive information.</li>
      </ul>
      <p>Such information must not be collected, accessed or shared without an appropriate lawful basis or authority.</p>
      <p>Users must not attempt to access another person's account or confidential records.</p>
      <p>For further information, refer to our Privacy Policy and Data Protection &amp; Security Policy.</p>
      </>
    ),
  },
  {
    heading: "14. REPORTING INAPPROPRIATE CONTENT AND BEHAVIOUR",
    text: (
      <>
      <p>JINANAM encourages all users to report content or behaviour that violates these guidelines.</p>
      <p><strong>Users may report:</strong></p>
      <ul>
        <li>Abusive comments.</li>
        <li>Inappropriate profile photographs.</li>
        <li>Fake accounts.</li>
        <li>Impersonation.</li>
        <li>Religious hatred.</li>
        <li>Harassment.</li>
        <li>Fraudulent information.</li>
        <li>Child safety concerns.</li>
        <li>Copyright violations.</li>
        <li>Misuse of monk tracking information.</li>
        <li>Unauthorised disclosure of personal information.</li>
        <li>Other prohibited activities.</li>
      </ul>
      <h4>14.1 How to Report</h4>
      <p><strong>Users may submit reports through:</strong></p>
      <ol>
        <li>The Report option available within the relevant application or content interface.</li>
        <li>The official website: https://www.jinanam.org</li>
        <li>Email: support@jinanam.org</li>
      </ol>
      <p>Reports should include the relevant account, content or information, a description of the concern and supporting details where available.</p>
      <h4>14.2 Reporting in Good Faith</h4>
      <p>Users must submit genuine reports.</p>
      <p>Knowingly submitting false, malicious or misleading complaints to harass another individual or organisation may itself constitute a violation.</p>
      <h4>14.3 Review of Reports</h4>
      <p>JINANAM may review reported material through automated tools, manual review or other appropriate processes.</p>
      <p><strong>Depending on the nature and seriousness of the complaint, action may include:</strong></p>
      <ul>
        <li>Removing content.</li>
        <li>Restricting access.</li>
        <li>Disabling comments.</li>
        <li>Issuing warnings.</li>
        <li>Suspending accounts.</li>
        <li>Permanently banning accounts.</li>
        <li>Escalating matters to relevant authorities.</li>
      </ul>
      <p>Reports involving child exploitation, threats, intimate imagery, electronic impersonation and other serious safety issues will receive priority handling in accordance with applicable law.</p>
      <p>For further details, refer to our Content Reporting Policy.</p>
      </>
    ),
  },
  {
    heading: "15. BLOCKING AND RESTRICTING USERS",
    text: (
      <>
      <p>JINANAM will provide appropriate safety controls for users to restrict or block abusive accounts where the relevant interaction functionality permits such controls.</p>
      <p>Users should use these controls when they experience unwanted or abusive interactions.</p>
      <p>Blocking or restricting an account may prevent or limit further interactions, subject to the functionality of the relevant application.</p>
      <p>Blocking does not replace the need to report serious violations or unlawful conduct.</p>
      <p>JINANAM may independently suspend or restrict accounts to protect users and the platform.</p>
      </>
    ),
  },
  {
    heading: "16. CONSEQUENCES OF VIOLATING THESE GUIDELINES",
    text: (
      <>
      <p>JINANAM may take action against users who violate these Community Guidelines.</p>
      <p>The action will depend on the nature, seriousness, frequency and potential impact of the violation.</p>
      <p><strong>Possible actions include:</strong></p>
      <p><strong>First-level violations</strong></p>
      <ul>
        <li>Content removal.</li>
        <li>Warning.</li>
        <li>Request to correct misleading information.</li>
        <li>Temporary restriction of certain interactions.</li>
      </ul>
      <p><strong>Repeated or moderate violations</strong></p>
      <ul>
        <li>Temporary suspension.</li>
        <li>Restriction of commenting.</li>
        <li>Restriction of profile functionality.</li>
        <li>Removal of administrative permissions.</li>
      </ul>
      <p><strong>Serious violations</strong></p>
      <ul>
        <li>Immediate account suspension.</li>
        <li>Permanent account termination.</li>
        <li>Removal of access to specific platform services.</li>
        <li>Reporting to competent authorities where required.</li>
      </ul>
      <p><strong>Critical safety violations</strong></p>
      <ul>
        <li>Immediate restriction of access where necessary.</li>
        <li>Priority investigation.</li>
        <li>Preservation of relevant records where legally required.</li>
        <li>Referral to law enforcement or child protection authorities where appropriate.</li>
      </ul>
      <p>JINANAM may take immediate action without a prior warning where there is a serious risk to an individual, child, institution or platform.</p>
      </>
    ),
  },
  {
    heading: "17. APPEALS AND REVIEW",
    text: (
      <>
      <p>Users whose content has been removed or whose accounts have been restricted may request a review through support@jinanam.org.</p>
      <p><strong>The request should include:</strong></p>
      <ul>
        <li>Registered account information.</li>
        <li>Relevant content or account details.</li>
        <li>Explanation of the concern.</li>
        <li>Any supporting evidence.</li>
      </ul>
      <p>JINANAM may review the action and communicate its decision within the applicable process and legal timelines.</p>
      <p>Where applicable, users may also exercise their rights under the Information Technology Rules, including approaching the Grievance Appellate Committee.</p>
      </>
    ),
  },
  {
    heading: "18. COPYRIGHT AND INTELLECTUAL PROPERTY",
    text: (
      <>
      <p>Users must respect the intellectual property rights of other individuals and organisations.</p>
      <p>If a user believes that material available through JiNANAM infringes their copyright or other intellectual property rights, they may submit a complaint to:</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>The complaint should include:</strong></p>
      <ul>
        <li>Identification of the copyrighted material.</li>
        <li>Identification of the allegedly infringing content.</li>
        <li>Evidence of ownership or authority to act.</li>
        <li>Relevant links or account information.</li>
        <li>Contact details of the complainant.</li>
      </ul>
      <p>JINANAM may remove or restrict the relevant material where appropriate and in accordance with applicable law.</p>
      </>
    ),
  },
  {
    heading: "19. NO GUARANTEE OF CONTENT ACCURACY",
    text: (
      <>
      <p>JINANAM may display information submitted by members, administrators, temples, Dharamshalas, Jain Centres, monks, Sadhvis and other participating organisations.</p>
      <p>Although reasonable efforts may be made to maintain appropriate standards, JINANAM does not guarantee that every statement or item of information submitted by third parties is accurate or independently verified.</p>
      <p>Users should verify important information directly with the relevant organisation before relying on it.</p>
      </>
    ),
  },
  {
    heading: "20. COOPERATION WITH AUTHORITIES",
    text: (
      <>
      <p>JINANAM may cooperate with competent government authorities, law enforcement agencies, courts and other authorised bodies where required by law.</p>
      <p>Where legally required, relevant information may be preserved, disclosed or processed in response to valid legal directions.</p>
      <p>JINANAM may take immediate action to prevent unlawful activities or protect individuals from serious harm.</p>
      </>
    ),
  },
  {
    heading: "21. UPDATES TO THESE GUIDELINES",
    text: (
      <>
      <p>JINANAM may update these Community Guidelines from time to time to reflect:</p>
      <ul>
        <li>Changes in applicable laws.</li>
        <li>New application features.</li>
        <li>Changes in Google Play or Apple App Store requirements.</li>
        <li>Emerging online safety risks.</li>
        <li>Changes in community standards.</li>
        <li>Improvements to moderation and reporting procedures.</li>
      </ul>
      <p>Updated guidelines will be published on the official website.</p>
      <p>Material changes may also be communicated through the applications or other appropriate channels.</p>
      <p>Continued use of JiNANAM after applicable updates will be subject to the revised guidelines, to the extent permitted by law.</p>
      </>
    ),
  },
  {
    heading: "22. CONTACT INFORMATION",
    text: (
      <>
      <p><strong>For questions, reports, safety concerns or complaints regarding these Community Guidelines, please contact:</strong></p>
      <p><strong>JAIN VIHAAR FOUNDATION</strong></p>
      <p><strong>Platform Brand:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>General Support:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion:</strong> appsupport@jinanam.org</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Building No. 9, Rehab Building,</p>
      <p>Wadar Pada, Malad East,</p>
      <p>Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      <p>These guidelines apply to all JiNANAM applications, website services, users, administrators and participating organisations.</p>
      </>
    ),
  },
    ],
  },

  "content-reporting-policy": {
    title: "Content Reporting Policy",
    intro:
      "JiNANAM encourages users to report content that may be harmful, inappropriate, misleading, abusive, or inconsistent with our community guidelines.",
    sections: [
      {
    heading: "CONTENT REPORTING POLICY",
    text: (
      <>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      <p><strong>Platform:</strong> JINANAM</p>
      <p><strong>Operated by:</strong> Jain Vihaar Foundation</p>
      </>
    ),
  },
  {
    heading: "1. Introduction",
    text: (
      <>
      <p>JINANAM is committed to maintaining a safe, respectful and trustworthy digital platform for the Jain community and other individuals who access its services.</p>
      <p>This Content Reporting Policy explains how users and affected individuals can report content, profiles, comments, activities or other material that may be inappropriate, harmful, unlawful, misleading, abusive or inconsistent with JiNANAM's Community Guidelines, Terms &amp; Conditions or applicable laws.</p>
      <p><strong>This policy applies to the JiNANAM website and all JINANAM applications, including:</strong></p>
      <ul>
        <li>JINANAM App</li>
        <li>JINANAM Admin App</li>
        <li>JINANAM Tracking App</li>
        <li>JINANAM Security App</li>
      </ul>
      <p>Jain Vihaar Foundation will review reports in a fair, reasonable and timely manner, taking into account the nature and seriousness of the reported matter, the safety of affected individuals and applicable legal obligations.</p>
      </>
    ),
  },
  {
    heading: "2. Who Can Submit a Report?",
    text: (
      <>
      <p><strong>A report may be submitted by:</strong></p>
      <ul>
        <li>A registered JiNANAM member.</li>
        <li>A non-Jain user or visitor accessing publicly available JiNANAM content.</li>
        <li>A person directly affected by the reported content or activity.</li>
        <li>A parent or legal guardian reporting content or activity affecting a child.</li>
        <li>An authorised representative submitting a report on behalf of an individual or institution.</li>
        <li>A temple, Dharamshala, Sthanak, Jain Centre or other authorised institution reporting misuse of its profile, name, photographs or information.</li>
        <li>Any other person who reasonably believes that content or activity on JINANAM violates this policy or applicable law.</li>
      </ul>
      <p>A person does not need to be a registered member to submit a grievance to the Grievance Officer.</p>
      </>
    ),
  },
  {
    heading: "3. What Can Be Reported?",
    text: (
      <>
      <p><strong>Users may report the following categories of content or activity:</strong></p>
      <h4>3.1 Abusive, Harassing or Threatening Content</h4>
      <ul>
        <li>Abusive, insulting, threatening or harassing comments.</li>
        <li>Bullying, intimidation or targeted harassment.</li>
        <li>Content intended to humiliate, threaten or repeatedly disturb an individual.</li>
        <li>Threats of physical harm or violence.</li>
      </ul>
      <h4>3.2 Religious or Community-Related Misconduct</h4>
      <ul>
        <li>Content intended to provoke religious hatred or hostility.</li>
        <li>Deliberate insults or harassment targeting a religion, sect, community or caste.</li>
        <li>Content promoting violence or discrimination against a religious or community group.</li>
        <li>Deliberate misuse or misrepresentation of Jain religious practices, institutions or identities.</li>
      </ul>
      <p>Respectful disagreement, criticism or discussion is not automatically a violation. Reports will be assessed in context.</p>
      <h4>3.3 False Information and Impersonation</h4>
      <ul>
        <li>Fake or misleading profiles.</li>
        <li>Impersonation of a member, monk, Sadhvi, temple, institution, administrator or other person.</li>
        <li>Unauthorised use of another person's identity or photographs.</li>
        <li>Misleading institutional information, contact details or announcements.</li>
        <li>Fraudulent claims, deceptive communications or scams.</li>
      </ul>
      <h4>3.4 Privacy and Personal Information</h4>
      <ul>
        <li>Publishing someone's personal information without proper authority.</li>
        <li>Sharing private contact details, addresses or identifying information to harass, threaten or expose an individual.</li>
        <li>Unauthorised photographs or information that violate an individual's privacy.</li>
        <li>Unauthorised disclosure of sensitive information or confidential institutional records.</li>
      </ul>
      <h4>3.5 Sexual Exploitation and Child Safety</h4>
      <ul>
        <li>Child sexual abuse or exploitation material.</li>
        <li>Sexual harassment or exploitation.</li>
        <li>Non-consensual intimate images or videos.</li>
        <li>Content depicting an individual in nudity or sexual activity without consent.</li>
        <li>Morphed, manipulated or impersonated sexual images.</li>
        <li>Grooming, inappropriate contact or conduct involving a child.</li>
      </ul>
      <p>These reports will be treated as high priority and escalated for urgent review and action in accordance with applicable law.</p>
      <h4>3.6 Copyright and Intellectual Property</h4>
      <ul>
        <li>Unauthorised use of copyrighted photographs, videos, text, artwork or other protected material.</li>
        <li>Trademark infringement.</li>
        <li>Unauthorised use of institutional logos, names or branding.</li>
        <li>Other intellectual property violations.</li>
      </ul>
      <p>A person submitting an intellectual property complaint should provide sufficient information to identify the protected work and explain their authority or rights in relation to it.</p>
      <h4>3.7 Fraud, Spam and Misuse</h4>
      <ul>
        <li>Fraudulent donation or payment requests.</li>
        <li>Fake booking or event announcements.</li>
        <li>Spam, repetitive or misleading comments.</li>
        <li>Unauthorised commercial solicitation.</li>
        <li>Suspicious links, phishing attempts or malware.</li>
        <li>Misuse of institutional accounts or administrative access.</li>
        <li>Attempts to manipulate, disrupt or misuse JiNANAM services.</li>
      </ul>
      <h4>3.8 Monk Safety and Vihaar-Related Concerns</h4>
      <p><strong>Reports may also concern:</strong></p>
      <ul>
        <li>False or misleading monk location information.</li>
        <li>Unauthorised disclosure or misuse of live or historical location information.</li>
        <li>Misuse of Vihaar route information.</li>
        <li>Attempts to interfere with monk tracking or route management.</li>
        <li>Conduct that may endanger monks, Sadhvis, volunteers or other participants.</li>
      </ul>
      <p>JINANAM's monk location-sharing features operate subject to the applicable tracking permissions and active Vihaar arrangements. Reports involving immediate physical danger should also be brought to the attention of the appropriate emergency services.</p>
      <h4>3.9 Other Violations</h4>
      <p>Any other content, conduct, profile or activity that may violate the JiNANAM Community Guidelines, Terms &amp; Conditions, other applicable JiNANAM policies or applicable law may be reported.</p>
      </>
    ),
  },
  {
    heading: "4. How to Report Content Through JiNANAM",
    text: (
      <>
      <p>Where the reporting feature is available, users may submit a report through the relevant content or profile interface in the JiNANAM App.</p>
      <p><strong>The reporting facility should allow users to:</strong></p>
      <ol>
        <li>Select the content, comment, profile or activity they wish to report.</li>
        <li>Choose the most appropriate reason for the report.</li>
        <li>Provide an optional explanation or additional details.</li>
        <li>Attach supporting evidence where the reporting interface permits.</li>
        <li>Submit the report for review.</li>
      </ol>
      <p>Users should report the specific content or activity wherever possible, rather than submitting a general complaint without identifying the matter.</p>
      <p>JINANAM may introduce or update reporting options across its applications as features and safety requirements evolve.</p>
      </>
    ),
  },
  {
    heading: "5. Reporting Through Email or the Grievance Officer",
    text: (
      <>
      <p>If the in-app reporting facility is unavailable, or if the matter concerns serious misconduct, privacy, child safety, impersonation, unlawful content or an institutional account, a complaint may be submitted directly to:</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Organisation:</strong> Jain Vihaar Foundation</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Phone:</strong> +91 8693838281 / +918693838282</p>
      <p><strong>Postal Address:</strong></p>
      <p>12, First Floor, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      <p>Users may also write to the support team at support@jinanam.org.</p>
      <p>A complaint submitted to the Grievance Officer should clearly state that it is a formal grievance where the complainant intends to invoke the grievance redressal process.</p>
      </>
    ),
  },
  {
    heading: "6. Information to Include in a Report",
    text: (
      <>
      <p><strong>To help JINANAM investigate a report, the complainant should provide, where available:</strong></p>
      <ul>
        <li>Name and contact details of the complainant.</li>
        <li>The relevant JiNANAM application or website section.</li>
        <li>A description of the reported content or activity.</li>
        <li>The username, profile name or institution involved, if known.</li>
        <li>A link, URL, content identifier or other reference to the reported material.</li>
        <li>Screenshots or other supporting evidence, where available.</li>
        <li>The date and approximate time when the incident occurred.</li>
        <li>The reason the content or activity is believed to violate this policy or applicable law.</li>
        <li>Any immediate safety concern or risk to an affected person.</li>
      </ul>
      <p>For reports involving copyright or other intellectual property, the complainant should also identify the protected work and explain their ownership or authority to act.</p>
      <p>For reports submitted on behalf of another individual, the complainant may be asked to provide reasonable information establishing their authority to act on that individual's behalf.</p>
      <p>Please do not send passwords, OTPs, full payment card details or unrelated sensitive personal information when submitting a report.</p>
      </>
    ),
  },
  {
    heading: "7. Review and Investigation Process",
    text: (
      <>
      <p><strong>After receiving a report, JINANAM may:</strong></p>
      <ol>
        <li>Register the complaint and record the relevant details.</li>
        <li>Review the reported content, profile, activity or account.</li>
        <li>Assess the report against the Community Guidelines, Terms &amp; Conditions, applicable policies and applicable law.</li>
        <li>Request additional information or clarification where reasonably necessary.</li>
        <li>Assess whether immediate protective action is required.</li>
        <li>Take appropriate action based on the findings.</li>
        <li>Communicate the outcome to the complainant where reasonably possible and legally permitted.</li>
      </ol>
      <p>JINANAM may use human review, technical tools, automated detection or a combination of these methods to identify and assess potentially harmful content.</p>
      <p>The review process may take into account context, intent, severity, repetition, credibility of evidence, potential harm and applicable legal requirements.</p>
      </>
    ),
  },
  {
    heading: "8. Action JiNANAM May Take",
    text: (
      <>
      <p><strong>Depending on the nature and seriousness of the matter, JiNANAM may take one or more of the following actions:</strong></p>
      <ul>
        <li>Remove or disable access to the reported content.</li>
        <li>Restrict the visibility or distribution of content.</li>
        <li>Add a warning or other appropriate notice.</li>
        <li>Remove an inappropriate comment or profile photograph.</li>
        <li>Restrict specific account functions.</li>
        <li>Temporarily suspend an account.</li>
        <li>Permanently suspend or terminate an account.</li>
        <li>Restrict an administrator's access or privileges.</li>
        <li>Require an institution or account holder to correct misleading information.</li>
        <li>Preserve relevant records where required by law or reasonably necessary for an investigation.</li>
        <li>Refer the matter to an appropriate authority where legally required or appropriate.</li>
      </ul>
      <p>JINANAM may take action even if no user report has been received, where it independently identifies a serious violation or receives a valid legal direction.</p>
      <p>JINANAM may also decline to remove content where the report is unsupported, the content does not violate applicable rules or law, or removal is not otherwise justified. Any such decision remains subject to applicable legal obligations.</p>
      </>
    ),
  },
  {
    heading: "9. Priority and Urgent Reports",
    text: (
      <>
      <p><strong>JINANAM will prioritise reports involving:</strong></p>
      <ul>
        <li>Immediate threats to life or physical safety.</li>
        <li>Child sexual abuse or exploitation.</li>
        <li>Non-consensual intimate images or sexual content.</li>
        <li>Sexual harassment or exploitation.</li>
        <li>Credible threats of violence.</li>
        <li>Doxxing or exposure of personal information that creates a safety risk.</li>
        <li>Monk or Sadhvi safety and location-related threats.</li>
        <li>Fraudulent activity that may cause immediate financial harm.</li>
        <li>Content or activity subject to a valid court order or government direction.</li>
      </ul>
      <p>Where a person is in immediate danger, they should contact the appropriate local emergency services or law enforcement authority without waiting for JiNANAM's review.</p>
      <p>JINANAM will take reasonable and practicable steps to address urgent reports and will follow any faster response or removal deadline prescribed by applicable law.</p>
      </>
    ),
  },
  {
    heading: "10. Statutory Grievance Timelines",
    text: (
      <>
      <p><strong>Where the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended, apply to JiNANAM and the relevant complaint:</strong></p>
      <ul>
        <li>The Grievance Officer will acknowledge a grievance within 24 hours of receipt.</li>
        <li>The grievance will be resolved within seven days of receipt, subject to any shorter statutory deadline that applies.</li>
        <li>Certain complaints requesting removal or disabling of access to specified unlawful information must be handled within the applicable expedited statutory period, including the 36-hour period where prescribed.</li>
        <li>Complaints concerning private-area imagery, nudity, sexual acts or electronic impersonation, including morphed images, will be handled under the specific statutory requirements and applicable expedited timelines.</li>
      </ul>
      <p>These are statutory grievance timelines and are distinct from the ordinary in-app content moderation workflow. JINANAM will follow any shorter or additional deadline that applies to a particular category of complaint or legal direction.</p>
      </>
    ),
  },
  {
    heading: "11. Special Reports Involving Intimate Images, Impersonation or Child Safety",
    text: (
      <>
      <p><strong>A person, or an authorised person acting on their behalf, may submit an urgent complaint concerning content that:</strong></p>
      <ul>
        <li>Exposes the person's private area.</li>
        <li>Shows the person in full or partial nudity.</li>
        <li>Shows or depicts the person in a sexual act or conduct.</li>
        <li>Constitutes electronic impersonation, including artificially morphed images.</li>
      </ul>
      <p><strong>Such complaints should be sent to support@jinanam.org with the subject line:</strong></p>
      <p>URGENT - PRIVACY/INTIMATE IMAGE/IMPERSONATION REPORT</p>
      <p>The complainant should provide the relevant content link or identifier and sufficient details to identify the affected individual and the material.</p>
      <p>JINANAM will take reasonable and practicable action within the applicable statutory timeline. A complainant should not forward, repost or otherwise circulate unlawful intimate imagery or child sexual abuse material as evidence. Where possible, provide the link, identifier and relevant contextual information instead.</p>
      <p>Reports involving suspected child sexual abuse or exploitation will be escalated urgently and handled in accordance with applicable reporting and preservation obligations.</p>
      </>
    ),
  },
  {
    heading: "12. Reporting Accounts and Repeat Misconduct",
    text: (
      <>
      <p><strong>Users may report a profile or account where they reasonably believe that the account:</strong></p>
      <ul>
        <li>Is fake or impersonating another person or institution.</li>
        <li>Is being used for harassment, fraud or threats.</li>
        <li>Repeatedly posts or distributes prohibited content.</li>
        <li>Misuses institutional or administrative privileges.</li>
        <li>Creates a safety or privacy risk.</li>
      </ul>
      <p>JINANAM may review the account and its relevant activity. Depending on the findings, it may issue a warning, restrict access, suspend or terminate the account.</p>
      <p>Reporting an account does not automatically result in its suspension or removal. JINANAM will assess the available information and take proportionate action.</p>
      </>
    ),
  },
  {
    heading: "13. False, Frivolous or Malicious Reports",
    text: (
      <>
      <p>Reporting facilities must not be misused to harass, intimidate, threaten or unfairly target another person or institution.</p>
      <p>JINANAM may take appropriate action against individuals who knowingly submit false, fabricated, repetitive or malicious complaints, manipulate the reporting process or use reports to silence legitimate expression.</p>
      <p>However, a report will not be treated as malicious merely because it is not substantiated or because JiNANAM decides not to take action.</p>
      </>
    ),
  },
  {
    heading: "14. Confidentiality and Privacy of Complainants",
    text: (
      <>
      <p>JINANAM will handle reports and complaint-related information with reasonable confidentiality and in accordance with its Privacy Policy and applicable law.</p>
      <p><strong>Information submitted in a report may be accessed by authorised personnel and service providers where necessary to:</strong></p>
      <ul>
        <li>Review and investigate the complaint.</li>
        <li>Protect users and the platform.</li>
        <li>Enforce JINANAM policies.</li>
        <li>Comply with legal obligations.</li>
        <li>Respond to valid requests from competent authorities.</li>
      </ul>
      <p>JINANAM will not ordinarily disclose the complainant's identity to the reported person unless disclosure is necessary for a fair investigation, required by law or directed by a competent authority.</p>
      <p>JINANAM cannot guarantee absolute confidentiality where disclosure is legally required or necessary to address a serious safety concern.</p>
      </>
    ),
  },
  {
    heading: "15. Appeals and Requests for Reconsideration",
    text: (
      <>
      <p>If a user disagrees with an account restriction, content removal or other moderation decision, the user may request reconsideration by contacting support@jinanam.org.</p>
      <p><strong>The request should include:</strong></p>
      <ul>
        <li>The relevant account or content details.</li>
        <li>The action being challenged.</li>
        <li>The reason the user believes the decision should be reconsidered.</li>
        <li>Any supporting information or evidence.</li>
      </ul>
      <p>JINANAM may review the decision and communicate its outcome where appropriate.</p>
      <p>Where the statutory Grievance Appellate Committee mechanism applies, a person aggrieved by the decision of the Grievance Officer, or whose grievance has not been resolved within the applicable prescribed period, may appeal to the Grievance Appellate Committee within the statutory period, currently 30 days.</p>
      <p><strong>The online appeal mechanism is available at:</strong></p>
      <p>https://gac.gov.in</p>
      <p>This statutory appeal mechanism is separate from JiNANAM's internal reconsideration process.</p>
      </>
    ),
  },
  {
    heading: "16. Preservation of Evidence and Records",
    text: (
      <>
      <p><strong>JINANAM may retain reports, relevant content references, account information, investigation records and associated technical logs for as long as reasonably necessary to:</strong></p>
      <ul>
        <li>Investigate and resolve the report.</li>
        <li>Maintain platform safety and security.</li>
        <li>Handle appeals or disputes.</li>
        <li>Comply with applicable law or lawful directions.</li>
        <li>Establish, exercise or defend legal claims.</li>
      </ul>
      <p>Where required by law or a valid direction, JiNANAM may preserve relevant information even if the reported content or associated account is otherwise removed or deleted.</p>
      <p>Such information will be handled in accordance with the Privacy Policy and Data Retention Policy.</p>
      </>
    ),
  },
  {
    heading: "17. No Guarantee of Immediate Removal",
    text: (
      <>
      <p>Submitting a report does not guarantee that the reported content or account will be immediately removed, suspended or restricted.</p>
      <p>JINANAM will assess reports in good faith and take action where justified under its policies or applicable law. Certain matters may require additional information, investigation or legal review.</p>
      <p>Nothing in this policy limits JINANAM's ability to take urgent protective action where reasonably necessary.</p>
      </>
    ),
  },
  {
    heading: "18. Relationship with Other Policies",
    text: (
      <>
      <p><strong>This policy should be read together with:</strong></p>
      <ul>
        <li>JINANAM Terms &amp; Conditions.</li>
        <li>JINANAM Community Guidelines.</li>
        <li>JINANAM Privacy Policy.</li>
        <li>JINANAM Data Retention Policy.</li>
        <li>JINANAM Data Protection &amp; Security Policy.</li>
        <li>JINANAM Child Safety Standards.</li>
        <li>JINANAM Grievance Redressal Policy.</li>
      </ul>
      <p>If there is a conflict between this policy and a mandatory legal requirement, the applicable legal requirement will prevail.</p>
      </>
    ),
  },
  {
    heading: "19. Changes to This Policy",
    text: (
      <>
      <p><strong>Jain Vihaar Foundation may update this Content Reporting Policy from time to time to reflect changes in law, platform features, safety practices or operational requirements.</strong></p>
      <p>The latest version will be published on the JiNANAM website. Users are encouraged to review it periodically.</p>
      </>
    ),
  },
  {
    heading: "20. Contact Information",
    text: (
      <>
      <p><strong>JAIN VIHAAR FOUNDATION</strong></p>
      <p><strong>Platform Brand:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>General Support:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion:</strong> appsupport@jinanam.org</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Building No. 9, Rehab Building,</p>
      <p>Wadar Pada, Malad East,</p>
      <p>Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      </>
    ),
  },
    ],
  },

  "data-retention-policy": {
    title: "Data Retention Policy",
    intro:
      "This policy explains how JiNANAM should manage and retain information associated with user accounts and platform activities.",
    sections: [
      {
    heading: "DATA RETENTION POLICY",
    text: (
      <>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      <p><strong>Platform:</strong> JINANAM</p>
      <p><strong>Operated by:</strong> Jain Vihaar Foundation</p>
      </>
    ),
  },
  {
    heading: "1. Introduction",
    text: (
      <>
      <p>Jain Vihaar Foundation ("Foundation", "we", "us" or "our"), which operates the JINANAM platform, is committed to retaining personal information only for as long as reasonably necessary for the purposes for which it was collected, subject to applicable legal, regulatory, security and operational requirements.</p>
      <p><strong>This Data Retention Policy explains:</strong></p>
      <ul>
        <li>What categories of information JiNANAM may retain.</li>
        <li>Why information is retained.</li>
        <li>The applicable retention periods.</li>
        <li>When information may be deleted, anonymised or archived.</li>
        <li>What happens when a user requests account deletion.</li>
        <li>When information may need to be retained beyond the ordinary retention period.</li>
      </ul>
      <p><strong>This policy applies to the JiNANAM website and all JINANAM applications:</strong></p>
      <ol>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App.</li>
        <li>JINANAM Tracking App.</li>
        <li>JINANAM Security App.</li>
      </ol>
      <p>This policy should be read together with the JiNANAM Privacy Policy and Data Protection &amp; Security Policy.</p>
      </>
    ),
  },
  {
    heading: "2. Categories of Information We May Retain",
    text: (
      <>
      <p><strong>Depending on the services used, JINANAM may retain the following categories of information:</strong></p>
      <h4>2.1 Account and Profile Information</h4>
      <ul>
        <li>Name and profile information.</li>
        <li>JINANAM Member ID.</li>
        <li>Login and authentication-related records.</li>
        <li>Contact details.</li>
        <li>Profile photographs.</li>
        <li>Account type, role and permissions.</li>
        <li>Registration and account status.</li>
        <li>Account creation, modification and deletion records.</li>
      </ul>
      <h4>2.2 Institutional and Administrative Information</h4>
      <ul>
        <li>Temple, Dharamshala, Sthanak and Jain Centre profiles.</li>
        <li>Administrator and authorised representative details.</li>
        <li>Institutional contact information.</li>
        <li>Administrative permissions and role assignments.</li>
        <li>Institutional records and configuration information.</li>
        <li>Records of administrative actions and approvals.</li>
      </ul>
      <h4>2.3 Monk and Vihaar Information</h4>
      <ul>
        <li>Monk and Sadhvi profile information.</li>
        <li>Authorised representative details.</li>
        <li>Vihaar route information.</li>
        <li>Active route records.</li>
        <li>Location information collected during an active Vihaar route.</li>
        <li>Route participation and related consent records.</li>
        <li>Relevant tracking and route-management records.</li>
      </ul>
      <h4>2.4 Member Location Information</h4>
      <p>Where a member voluntarily joins a Vihaar route and enables location sharing, JiNANAM may process the location information necessary for that participation.</p>
      <p>Member location sharing is voluntary. JiNANAM does not collect member location continuously in the background for this feature.</p>
      <h4>2.5 Security and Visitor Management Information</h4>
      <ul>
        <li>Visitor and entry records.</li>
        <li>Vehicle registration details.</li>
        <li>Member verification records.</li>
        <li>QR scanning and entry-related records.</li>
        <li>Staff and security user account information.</li>
        <li>Entry, exit and access-control records.</li>
      </ul>
      <p>JINANAM Security App does not collect staff location information as part of its visitor management functionality.</p>
      <h4>2.6 Usage and Technical Information</h4>
      <ul>
        <li>Device and application information.</li>
        <li>Login and access logs.</li>
        <li>IP address and relevant technical information.</li>
        <li>Application activity and diagnostic records.</li>
        <li>Error reports and crash logs.</li>
        <li>Security events and audit trails.</li>
        <li>Analytics information.</li>
      </ul>
      <h4>2.7 Booking and Event Information</h4>
      <p><strong>Where these services are used, JINANAM may retain:</strong></p>
      <ul>
        <li>Booking requests and confirmations.</li>
        <li>Room or facility allocation records.</li>
        <li>Check-in and check-out records.</li>
        <li>Event registrations and participation information.</li>
        <li>Related communications and transaction records.</li>
      </ul>
      <h4>2.8 Donation and Financial Information</h4>
      <p><strong>When donation functionality is introduced, JiNANAM may retain:</strong></p>
      <ul>
        <li>Donor information.</li>
        <li>Donation amount and date.</li>
        <li>Payment status and transaction references.</li>
        <li>Payment gateway confirmation records.</li>
        <li>Donation receipts.</li>
        <li>Refund or reversal records, where applicable.</li>
        <li>Accounting and statutory records.</li>
      </ul>
      <p>Payment card credentials and other sensitive payment credentials will be handled by the relevant payment service provider where applicable, rather than being retained by JINANAM unless a specific lawful and necessary arrangement is implemented.</p>
      <h4>2.9 Reports, Complaints and Support Records</h4>
      <ul>
        <li>User complaints and support tickets.</li>
        <li>Content reports.</li>
        <li>Grievance submissions.</li>
        <li>Moderation and enforcement records.</li>
        <li>Appeals and investigation records.</li>
        <li>Communications with users and institutions.</li>
      </ul>
      </>
    ),
  },
  {
    heading: "3. Data Retention Schedule",
    text: (
      <>
      <p>JINANAM follows the retention periods below, subject to applicable law, legitimate operational requirements and any valid legal preservation obligation.</p>
      <table>
        <thead>
          <tr>
            <th>Information category</th>
            <th>Retention period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Active member account and profile information</td>
            <td>Retained while the account remains active, unless deletion is requested or another lawful reason requires earlier deletion</td>
          </tr>
          <tr>
            <td>Inactive accounts</td>
            <td>Retained until the user requests deletion or a legal or operational requirement requires otherwise</td>
          </tr>
          <tr>
            <td>Account registration information after cancellation or withdrawal</td>
            <td>At least 180 days where required under applicable intermediary obligations</td>
          </tr>
          <tr>
            <td>Monk and Sadhvi profile information</td>
            <td>While the profile remains active or authorised, subject to deletion and legal requirements</td>
          </tr>
          <tr>
            <td>Active Vihaar location information</td>
            <td>Processed while the authorised Vihaar route is active</td>
          </tr>
          <tr>
            <td>Historical monk and Vihaar GPS records</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td>Voluntarily shared member route-location records</td>
            <td>Limited to the relevant route and operational purpose, with historical records retained for no longer than 30 days unless legally required</td>
          </tr>
          <tr>
            <td>Security and application audit logs</td>
            <td>365 days</td>
          </tr>
          <tr>
            <td>Visitor and entry management records</td>
            <td>Retained according to operational requirements and applicable legal obligations</td>
          </tr>
          <tr>
            <td>Booking and event records</td>
            <td>Retained as necessary for service administration, dispute resolution and applicable legal requirements</td>
          </tr>
          <tr>
            <td>Donation and financial records</td>
            <td>Retained for the applicable statutory accounting, tax and financial record-keeping period</td>
          </tr>
          <tr>
            <td>Content reports and moderation records</td>
            <td>As necessary for investigation, appeals, safety and applicable legal requirements</td>
          </tr>
          <tr>
            <td>Support tickets and grievances</td>
            <td>As necessary to resolve the matter, manage disputes and comply with applicable legal requirements</td>
          </tr>
          <tr>
            <td>Technical diagnostics and crash reports</td>
            <td>As necessary for troubleshooting, service improvement and security</td>
          </tr>
          <tr>
            <td>Backups</td>
            <td>Retained in accordance with the applicable backup and recovery cycle</td>
          </tr>
          <tr>
            <td>Records subject to a legal hold or investigation</td>
            <td>Until the relevant legal, regulatory or investigative requirement is satisfied</td>
          </tr>
        </tbody>
      </table>
      <p>The retention periods above are not a promise that every record will be retained for the full period in every case. Where information is no longer necessary and no legal or other valid retention requirement applies, it may be deleted or anonymised earlier.</p>
      </>
    ),
  },
  {
    heading: "4. Monk GPS and Vihaar Location Data",
    text: (
      <>
      <p>The safety of Jain monks and Sadhvis is an important purpose of JINANAM's tracking functionality.</p>
      <p><strong>Accordingly:</strong></p>
      <ol>
        <li>Monk GPS tracking is intended to operate only during an authorised and active Vihaar route.</li>
        <li>Tracking may be started and stopped by authorised representatives.</li>
        <li>Tracking automatically stops when the active Vihaar route ends.</li>
        <li>Public visitors may be shown an approximate monk location, while registered members may be provided live location access in accordance with the platform's access controls.</li>
        <li>Members may voluntarily join a route and share their location for the relevant participation.</li>
        <li>Member location is not continuously collected in the background for this feature.</li>
        <li>Historical GPS records are retained for a maximum of 30 days under the ordinary retention schedule, after which they are deleted or anonymised unless preservation is legally required.</li>
      </ol>
      <p>JINANAM does not intend to use historical location information for unrelated purposes.</p>
      </>
    ),
  },
  {
    heading: "5. Account Inactivity",
    text: (
      <>
      <p>JINANAM does not automatically delete an account merely because the user has not logged in for a period of time.</p>
      <p>Inactive accounts may remain registered until the user requests deletion or a legal, security or operational requirement justifies another action.</p>
      <p>However, retaining an inactive account does not mean that JiNANAM will continue collecting every category of information associated with that account. Data that is no longer required for the relevant service may be deleted or anonymised, subject to applicable retention requirements.</p>
      <p>JINANAM may contact users to verify account information or provide important service-related notices where reasonably necessary.</p>
      </>
    ),
  },
  {
    heading: "6. Account Deletion and Data Erasure",
    text: (
      <>
      <p>Users may request deletion of their JiNANAM accounts through the in-app account deletion facility or the available website deletion request facility.</p>
      <p><strong>Users may also submit a request to:</strong></p>
      <p><strong>Email:</strong> appsupport@jinanam.org</p>
      <p><strong>After receiving a valid account deletion request:</strong></p>
      <ol>
        <li>JINANAM will verify the request and the identity or authority of the person submitting it, where reasonably necessary.</li>
        <li>The account will be scheduled for deletion.</li>
        <li>JINANAM will aim to complete account deletion within seven days of receiving a valid and verified request.</li>
        <li>Personal information that is no longer required and is not subject to a lawful retention obligation will be deleted or anonymised.</li>
        <li>Profile photographs and other user-associated information will be deleted or removed where applicable.</li>
        <li>Information that must legally be retained may be preserved for the required period.</li>
        <li>The user may receive confirmation once the deletion process has been completed, where contact details are available.</li>
      </ol>
      <p>The seven-day deletion timeline does not override mandatory statutory retention, a legal hold, a valid government or court direction, or another applicable legal requirement.</p>
      <h4>6.1 Information That May Be Retained After Account Deletion</h4>
      <p><strong>Certain information may need to be retained even after an account is deleted, including:</strong></p>
      <ul>
        <li>Records required under applicable tax, accounting or financial laws.</li>
        <li>Donation and transaction records.</li>
        <li>Records required under applicable intermediary obligations.</li>
        <li>Information connected with a pending investigation, complaint or legal proceeding.</li>
        <li>Records required to establish, exercise or defend legal claims.</li>
        <li>Security and fraud-prevention records where retention is legally justified.</li>
      </ul>
      <p>Such information will be retained only for the relevant purpose and period and will not be used for ordinary account activity after deletion.</p>
      <h4>6.2 Deleted Account Information in Backups</h4>
      <p>Some information may remain temporarily in protected system backups after it has been deleted from the active production system.</p>
      <p>Backup copies are maintained for disaster recovery, business continuity and security purposes. They are not intended to be used to restore deleted information to ordinary active use.</p>
      <p>Deleted information will be allowed to expire from backups in accordance with the applicable backup rotation and deletion process, unless restoration or preservation is legally required.</p>
      </>
    ),
  },
  {
    heading: "7. Donation and Financial Record Retention",
    text: (
      <>
      <p>When donation functionality is made available, Jain Vihaar Foundation may retain donation and financial information to meet its accounting, tax, audit, regulatory and legal obligations.</p>
      <p><strong>This may include:</strong></p>
      <ul>
        <li>Donor name and relevant contact details.</li>
        <li>Donation amount and date.</li>
        <li>Payment confirmation and transaction reference.</li>
        <li>Receipt number and receipt details.</li>
        <li>Refund, reversal or reconciliation records.</li>
        <li>Relevant correspondence and accounting records.</li>
      </ul>
      <p>Donation and financial records may be retained beyond the ordinary account deletion period where required by applicable law.</p>
      <p>Deleting a JINANAM account will not automatically erase financial records that Jain Vihaar Foundation is legally required to preserve.</p>
      </>
    ),
  },
  {
    heading: "8. Security Logs and Audit Records",
    text: (
      <>
      <p>JINANAM may retain system and security logs for up to 365 days under its ordinary retention schedule.</p>
      <p><strong>These records may include:</strong></p>
      <ul>
        <li>Login and logout events.</li>
        <li>Authentication and access attempts.</li>
        <li>Administrative activity.</li>
        <li>Changes to account roles and permissions.</li>
        <li>Security incidents.</li>
        <li>Relevant application and system events.</li>
        <li>Other records required to investigate misuse or maintain platform security.</li>
      </ul>
      <p>Where applicable law requires a different or longer retention period, the legal requirement will prevail.</p>
      <p>Where information has been removed or access disabled following a complaint, legal direction or policy violation, associated information may be preserved for the period required under applicable law, including the 180-day preservation requirement where the Information Technology Rules apply, or for a longer period when lawfully directed.</p>
      </>
    ),
  },
  {
    heading: "9. Content Reports, Complaints and Investigations",
    text: (
      <>
      <p><strong>JINANAM may retain reports, grievances, evidence, moderation decisions and related communications for as long as reasonably necessary to:</strong></p>
      <ul>
        <li>Investigate reported violations.</li>
        <li>Protect users and the community.</li>
        <li>Review appeals.</li>
        <li>Prevent repeat abuse.</li>
        <li>Comply with statutory grievance and intermediary obligations.</li>
        <li>Respond to lawful requests from competent authorities.</li>
        <li>Establish, exercise or defend legal claims.</li>
      </ul>
      <p>Where content or an account is removed or restricted, relevant evidence may be preserved without making it publicly accessible, where required or justified under applicable law.</p>
      </>
    ),
  },
  {
    heading: "10. Legal and Regulatory Retention",
    text: (
      <>
      <p><strong>JINANAM may retain information for longer than the ordinary retention period where necessary to comply with:</strong></p>
      <ul>
        <li>Applicable Indian laws and regulations.</li>
        <li>Tax, accounting and audit requirements.</li>
        <li>Court orders and legal proceedings.</li>
        <li>Lawful government or regulatory directions.</li>
        <li>Law-enforcement requests made through legally authorised processes.</li>
        <li>Applicable data protection and intermediary obligations.</li>
        <li>Other mandatory record-preservation requirements.</li>
      </ul>
      <p>Where a legal hold applies, deletion may be suspended for the affected information until the relevant obligation has ended.</p>
      <p>JINANAM will assess legal requests and directions in accordance with applicable law.</p>
      </>
    ),
  },
  {
    heading: "11. Data Deletion and Anonymisation",
    text: (
      <>
      <p><strong>When information is no longer required for the purpose for which it was collected, and no legal or other valid retention obligation applies, JINANAM may:</strong></p>
      <ul>
        <li>Permanently delete the information.</li>
        <li>Anonymise the information so that it can no longer reasonably identify an individual.</li>
        <li>Securely dispose of relevant files or records.</li>
        <li>Remove or disable access to the information.</li>
        <li>Allow the information to expire through an established backup deletion cycle.</li>
      </ul>
      <p>Anonymised information may be retained for statistical, analytical, operational or service-improvement purposes where it cannot reasonably identify an individual.</p>
      </>
    ),
  },
  {
    heading: "12. Third-Party Service Providers",
    text: (
      <>
      <p>JINANAM uses third-party service providers to support its operations and deliver platform services. <strong>These may include:</strong></p>
      <ul>
        <li>Hosting and infrastructure providers.</li>
        <li>Database and cloud service providers.</li>
        <li>Authentication and notification providers.</li>
        <li>Payment gateway providers, when donation functionality is implemented.</li>
        <li>Mapping and location service providers.</li>
        <li>Analytics and crash-reporting providers.</li>
        <li>Communication service providers.</li>
      </ul>
      <p>These providers may process or retain relevant information on behalf of JiNANAM in accordance with their service requirements, contractual arrangements and applicable law.</p>
      <p>Jain Vihaar Foundation will take reasonable steps to ensure that relevant service providers are subject to appropriate confidentiality, security and data-processing obligations.</p>
      <p>Information held by a third-party provider may also be subject to that provider's applicable retention and deletion processes. JiNANAM will take reasonable steps to manage deletion requests and retention obligations with relevant providers.</p>
      </>
    ),
  },
  {
    heading: "13. International Access and Data Storage",
    text: (
      <>
      <p>JINANAM is intended for use by the Jain community globally. Its primary data storage arrangement is in India.</p>
      <p>However, certain third-party service providers may process information from other locations depending on their infrastructure, technical arrangements and service operations.</p>
      <p>Where personal information is transferred or accessed outside India, such processing will be subject to applicable Indian data protection requirements and any other mandatory local laws that apply.</p>
      </>
    ),
  },
  {
    heading: "14. Children's Information",
    text: (
      <>
      <p>Where JINANAM processes information relating to a child, it will apply the relevant safeguards and retention requirements under applicable law.</p>
      <p>Where parental or guardian consent is required, JINANAM will take the necessary steps before processing the relevant personal information.</p>
      <p>Information relating to a child will not be retained longer than necessary for the relevant lawful purpose, subject to applicable statutory retention obligations and legal preservation requirements.</p>
      <p>A parent or lawful guardian may contact JINANAM to raise a concern or request deletion of a child's information, subject to appropriate identity and authority verification.</p>
      </>
    ),
  },
  {
    heading: "15. User Rights and Retention-Related Requests",
    text: (
      <>
      <p><strong>Subject to applicable law, users may request information or action concerning their personal data, including:</strong></p>
      <ul>
        <li>Access to relevant personal information.</li>
        <li>Correction or updating of inaccurate information.</li>
        <li>Erasure of personal information where legally permissible.</li>
        <li>Withdrawal of consent where processing is based on consent.</li>
        <li>Information about the handling of a deletion request.</li>
        <li>Submission of a grievance concerning the handling of personal information.</li>
      </ul>
      <p><strong>Requests may be submitted through the relevant account or privacy facilities, or by contacting:</strong></p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>For account deletion:</strong></p>
      <p><strong>Email:</strong> appsupport@jinanam.org</p>
      <p>JINANAM may request reasonable information to verify the identity and authority of the person making a request.</p>
      </>
    ),
  },
  {
    heading: "16. Changes to This Policy",
    text: (
      <>
      <p><strong>Jain Vihaar Foundation may update this Data Retention Policy from time to time to reflect changes in applicable law, technology, platform features, service providers or operational requirements.</strong></p>
      <p>The latest version will be published on the JiNANAM website. Users are encouraged to review it periodically.</p>
      </>
    ),
  },
  {
    heading: "17. Contact Information",
    text: (
      <>
      <p><strong>JAIN VIHAAR FOUNDATION</strong></p>
      <p><strong>Platform Brand:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>General Support:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion:</strong> appsupport@jinanam.org</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Building No. 9, Rehab Building,</p>
      <p>Wadar Pada, Malad East,</p>
      <p>Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      </>
    ),
  },
    ],
  },

  "donation-policy": {
    title: "Donation Policy",
    intro:
      "JiNANAM aims to support transparent and responsible donation-related activities that help Jain communities, charitable initiatives, and organizations.",
    sections: [
      {
    heading: "DONATION POLICY",
    text: (
      <>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      <p><strong>Platform:</strong> JINANAM</p>
      <p><strong>Donation Recipient:</strong> Jain Vihaar Foundation</p>
      </>
    ),
  },
  {
    heading: "1. Introduction",
    text: (
      <>
      <p>JINANAM is a community platform operated by Jain Vihaar Foundation, a Section 8 company established for charitable and community-oriented purposes.</p>
      <p>This Donation Policy explains the terms under which donations may be made to Jain Vihaar Foundation through the JiNANAM website, mobile applications or other authorised donation channels.</p>
      <p>The purpose of this policy is to ensure transparency, accountability and responsible handling of contributions received for the Foundation's charitable objectives.</p>
      <p><strong>Current status:</strong> Donation collection through JiNANAM is not currently enabled. The Foundation will activate donation facilities only after the necessary payment arrangements, legal requirements and operational processes are in place.</p>
      </>
    ),
  },
  {
    heading: "2. Who Receives the Donation?",
    text: (
      <>
      <p><strong>All donations made through JiNANAM's donation facility will be received solely by:</strong></p>
      <p><strong>Jain Vihaar Foundation</strong></p>
      <p>A Section 8 company incorporated under the Companies Act, 2013.</p>
      <p>JINANAM is the name of the Foundation's digital platform and is not a separate donation recipient.</p>
      <p>Donations made through JiNANAM will not be collected on behalf of individual temples, Dharamshalas, Sthanaks, Jain Centres, monks, Sadhvis, administrators or other individuals.</p>
      <p>The Foundation will be responsible for receiving, accounting for and applying donations towards its permitted charitable objectives.</p>
      </>
    ),
  },
  {
    heading: "3. Purpose and Utilisation of Donations",
    text: (
      <>
      <p>Donations may be used to support the charitable objectives and activities of Jain Vihaar Foundation, subject to its constitutional documents, applicable laws and internal governance requirements.</p>
      <p><strong>Such activities may include:</strong></p>
      <ul>
        <li>Jain community welfare and development.</li>
        <li>Religious, spiritual and cultural initiatives consistent with the Foundation's objects.</li>
        <li>Monk and Sadhvi safety and Vihaar-related initiatives.</li>
        <li>Community support and charitable programmes.</li>
        <li>Educational and awareness initiatives.</li>
        <li>Technology and digital infrastructure supporting the Foundation's charitable activities.</li>
        <li>Events, programmes and initiatives organised for charitable or community purposes.</li>
        <li>Other activities permitted under the Foundation's constitutional documents and applicable law.</li>
      </ul>
      <p>The Foundation will determine the allocation and utilisation of funds in accordance with its charitable objectives, financial controls and applicable legal requirements.</p>
      <p>A donation does not automatically create a right to control, direct or approve how the Foundation spends the contributed amount.</p>
      </>
    ),
  },
  {
    heading: "4. Voluntary Nature of Donations",
    text: (
      <>
      <p>All donations are voluntary.</p>
      <p>A person may choose whether or not to contribute. Access to the ordinary free features of JINANAM will not be conditional upon making a donation.</p>
      <p>A donation does not purchase a membership, subscription, service, product, event ticket or other commercial benefit unless a separate arrangement is expressly stated.</p>
      <p>The Foundation will not represent a donation as a payment for a guaranteed personal benefit, preferential treatment or a specific service.</p>
      </>
    ),
  },
  {
    heading: "5. Donation Eligibility and Donor Information",
    text: (
      <>
      <p>Individuals and eligible organisations may make donations through authorised donation channels, subject to applicable laws and payment-provider requirements.</p>
      <p><strong>To support proper accounting, verification, receipt generation and legal compliance, JINANAM may require donors to provide:</strong></p>
      <ul>
        <li>Full name or registered organisation name.</li>
        <li>Contact details, such as email address and mobile number.</li>
        <li>Donation amount.</li>
        <li>Payment transaction reference.</li>
        <li>Address or other information where required by applicable law.</li>
        <li>PAN or other tax identification information where legally required or necessary for an applicable tax certificate.</li>
        <li>Any additional information reasonably required for verification or statutory reporting.</li>
      </ul>
      <h4>5.1 Anonymous Donations</h4>
      <p>JINANAM's donation facility will not accept anonymous donations.</p>
      <p>Donors may be able to choose whether their names are publicly displayed, where such a feature is offered. However, the Foundation will retain the donor information required for accounting, verification and legal compliance.</p>
      <p>Public display preferences do not make a donation anonymous to the Foundation.</p>
      <h4>5.2 Donations on Behalf of Others</h4>
      <p>A person making a donation on behalf of another individual or organisation must ensure that the donor details supplied are accurate and that they are authorised to provide those details.</p>
      <p>The Foundation may request additional verification where necessary.</p>
      </>
    ),
  },
  {
    heading: "6. Donation Methods and Payment Processing",
    text: (
      <>
      <p><strong>When donation functionality is launched, the Foundation may provide one or more of the following payment methods:</strong></p>
      <ul>
        <li>UPI.</li>
        <li>Debit cards.</li>
        <li>Credit cards.</li>
        <li>Net banking.</li>
        <li>Other payment methods supported by the authorised payment gateway.</li>
        <li>Bank transfer or other officially communicated banking arrangements.</li>
      </ul>
      <p>Payments made through the online donation facility may be processed through an authorised third-party payment gateway, such as Razorpay, or another payment service provider selected by the Foundation.</p>
      <p>The availability of individual payment methods may change.</p>
      <h4>6.1 Payment Confirmation</h4>
      <p>A donation will be treated as successfully received only after the relevant payment provider or bank confirms the transaction and the Foundation's records reflect the successful receipt or settlement, as applicable.</p>
      <p>A payment initiation screen, screenshot, pending transaction message or debit entry alone does not necessarily establish that the Foundation has received the donation.</p>
      <p>If an amount is debited but the transaction remains unsuccessful or unresolved, the donor should contact the payment provider and the Foundation with the transaction reference.</p>
      <h4>6.2 Payment Security</h4>
      <p>Payment credentials will be processed through the relevant payment service provider where applicable.</p>
      <p>Donors should not share their passwords, OTPs, PINS, CVVs or other confidential payment credentials with anyone claiming to represent JiNANAM or Jain Vihaar Foundation.</p>
      <p>The Foundation will not ask donors to disclose their banking passwords or OTPs.</p>
      </>
    ),
  },
  {
    heading: "7. Donation Acknowledgement and Receipts",
    text: (
      <>
      <p>After a successful and verified donation, the Foundation may issue an electronic donation acknowledgement or receipt.</p>
      <p><strong>The receipt may contain:</strong></p>
      <ul>
        <li>Jain Vihaar Foundation's name and relevant details.</li>
        <li>Donor's name.</li>
        <li>Donation amount.</li>
        <li>Donation date.</li>
        <li>Transaction reference.</li>
        <li>Receipt number.</li>
        <li>Relevant tax registration or approval details, where applicable.</li>
        <li>Other particulars required under applicable law.</li>
      </ul>
      <p>Receipts may be delivered through the registered email address, the JiNANAM account or another authorised communication channel.</p>
      <p>Donors should check their receipt details and promptly contact the Foundation if any correction is required.</p>
      <h4>7.1 Tax Deduction Receipts</h4>
      <p>The Foundation has not obtained approval for donations to qualify for tax deduction under the applicable charitable-donation approval provisions.</p>
      <p><strong>Accordingly:</strong></p>
      <ul>
        <li>No donation made through JiNANAM should presently be represented as eligible for a tax deduction.</li>
        <li>A normal donation acknowledgement or receipt does not by itself establish eligibility for a tax deduction.</li>
        <li>The Foundation will issue any prescribed tax certificate only after obtaining the relevant approval and fulfilling the applicable reporting and certification requirements.</li>
        <li>Donors should not claim a deduction based solely on a JiNANAM donation receipt unless the Foundation confirms that the donation qualifies under the applicable law.</li>
      </ul>
      <p>If the Foundation obtains the necessary approval in the future, it will update the relevant information and issue the prescribed documentation for eligible donations.</p>
      </>
    ),
  },
  {
    heading: "8. Donation Amounts and Fees",
    text: (
      <>
      <p>Donors may select from the available suggested donation amounts or enter another amount where the donation interface permits.</p>
      <p>The Foundation does not currently intend to charge a separate JiNANAM platform or convenience fee on donations.</p>
      <p>If a payment provider or bank independently imposes a transaction-related charge, such charge will be subject to the payment provider's applicable terms and the information displayed during the payment process.</p>
      <p>The Foundation will not knowingly represent a payment amount as a donation if a separate charge is being collected without appropriate disclosure.</p>
      </>
    ),
  },
  {
    heading: "9. Refund and Cancellation Policy",
    text: (
      <>
      <p>Donations are voluntary charitable contributions and are generally non-refundable once successfully received by Jain Vihaar Foundation.</p>
      <p><strong>However, a refund may be considered in circumstances such as:</strong></p>
      <ul>
        <li>Duplicate payment caused by a technical or payment-processing error.</li>
        <li>An amount debited from the donor's account but received more than once by the Foundation.</li>
        <li>A payment credited to the Foundation due to a demonstrable technical error.</li>
        <li>A transaction that must be reversed under applicable law or a valid direction from a competent authority.</li>
        <li>Another exceptional circumstance approved by the Foundation in accordance with its internal controls.</li>
      </ul>
      <p><strong>A donor seeking a review of a transaction should contact the Foundation with:</strong></p>
      <ul>
        <li>Donor name.</li>
        <li>Donation date.</li>
        <li>Amount paid.</li>
        <li>Payment transaction reference.</li>
        <li>Registered email address or mobile number.</li>
        <li>Explanation of the issue.</li>
        <li>Supporting bank or payment-provider evidence, where available.</li>
      </ul>
      <p><strong>Refund requests should be sent to:</strong> support@jinanam.org</p>
      <p>The Foundation will review the request and communicate its decision. Where a refund is approved, the amount will ordinarily be returned through the original payment method, subject to payment-provider and banking procedures.</p>
      <p>A refund request does not automatically mean that a refund will be granted.</p>
      <p>Nothing in this policy excludes a refund or reversal where required by applicable law or a competent authority.</p>
      </>
    ),
  },
  {
    heading: "10. Donor Responsibilities",
    text: (
      <>
      <p><strong>Every donor is responsible for:</strong></p>
      <ul>
        <li>Providing accurate and complete donor information.</li>
        <li>Ensuring that the donation is made voluntarily.</li>
        <li>Using a legitimate payment method.</li>
        <li>Ensuring that they are authorised to use the payment instrument.</li>
        <li>Reviewing the donation amount before completing payment.</li>
        <li>Retaining the transaction reference and receipt.</li>
        <li>Informing the Foundation of any suspected unauthorised or duplicate transaction.</li>
        <li>Complying with applicable laws relating to the source and transfer of funds.</li>
      </ul>
      <p>The Foundation may refuse, suspend, return or otherwise deal with a contribution where there is a reasonable concern about its source, legality, authenticity or compliance with applicable requirements.</p>
      </>
    ),
  },
  {
    heading: "11. Domestic and International Donations",
    text: (
      <>
      <h4>11.1 Donations Within India</h4>
      <p>Domestic donations may be accepted through authorised payment channels after the Foundation activates its donation facility and completes the applicable legal, financial and operational requirements.</p>
      <p>Donors must use lawful sources of funds and comply with applicable payment and banking requirements.</p>
      <h4>11.2 Donations from Outside India</h4>
      <p>International donations and foreign contributions are not currently enabled through JiNANAM. The Foundation will not activate international donation collection or accept foreign contributions through the platform unless it has first obtained the registrations, prior permissions, banking arrangements and other approvals required under the Foreign Contribution (Regulation) Act, 2010, as amended, and other applicable laws.</p>
      <p>The mere availability of a foreign-issued card, overseas bank account or international payment option will not be treated as permission to accept a foreign contribution.</p>
      <p>The Foundation may restrict or reject a transaction where it cannot establish that the contribution can lawfully be accepted.</p>
      </>
    ),
  },
  {
    heading: "12. Donation Verification and Suspicious Transactions",
    text: (
      <>
      <p>The Foundation may carry out reasonable checks to verify donations and identify suspicious, fraudulent or unauthorised transactions.</p>
      <p><strong>Such checks may include:</strong></p>
      <ul>
        <li>Payment-provider verification.</li>
        <li>Transaction reference verification.</li>
        <li>Donor identity or information verification where legally required.</li>
        <li>Review of unusual or repeated transactions.</li>
        <li>Verification of the source or eligibility of funds where required by law.</li>
        <li>Review of suspected payment fraud or misuse.</li>
      </ul>
      <p>The Foundation may delay issuing a final receipt, suspend processing, reject a contribution or initiate a refund or reversal where appropriate.</p>
      <p>Where required, relevant information may be shared with payment providers, banks, auditors, regulators or competent authorities in accordance with applicable law and the Privacy Policy.</p>
      </>
    ),
  },
  {
    heading: "13. Use of Donations and Financial Accountability",
    text: (
      <>
      <p>All donations received by the Foundation will be recorded and accounted for in accordance with applicable accounting, audit, tax and regulatory requirements.</p>
      <p>The Foundation will maintain appropriate financial records and internal controls relating to donations received and their utilisation.</p>
      <p>Donations will be applied towards the Foundation's permitted charitable objectives and will not be treated as personal funds of any member, administrator, monk, Sadhvi or other individual.</p>
      <p>The Foundation may publish information about its charitable activities and the utilisation of donations through its authorised communication channels.</p>
      <p>Any reporting will be subject to applicable privacy, confidentiality and legal requirements.</p>
      </>
    ),
  },
  {
    heading: "14. No Direct Donation to Individual Institutions Through JINANAM",
    text: (
      <>
      <p>The JiNANAM donation facility is intended for donations to Jain Vihaar Foundation.</p>
      <p>It does not currently operate as a collection facility for individual temples, Dharamshalas, Sthanaks, Jain Centres, monks, Sadhvis or other institutions or individuals.</p>
      <p>A donation made through JiNANAM must not be understood as a donation directly to a particular institution unless the Foundation expressly introduces and communicates a separate authorised arrangement in the future.</p>
      </>
    ),
  },
  {
    heading: "15. Fraud Prevention and Misrepresentation",
    text: (
      <>
      <p>No person is authorised to collect donations in the name of JiNANAM or Jain Vihaar Foundation through a personal bank account, personal UPI ID or unauthorised payment link.</p>
      <p>Donors should make contributions only through payment channels officially published or communicated by the Foundation.</p>
      <p><strong>Users should report suspected fraudulent donation requests, fake receipts, impersonation or unauthorised fundraising to:</strong></p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p>The Foundation may investigate suspected misuse and take appropriate action, including reporting the matter to relevant authorities where necessary.</p>
      </>
    ),
  },
  {
    heading: "16. Privacy and Processing of Donor Information",
    text: (
      <>
      <p><strong>Donor information will be collected and processed for purposes including:</strong></p>
      <ul>
        <li>Processing and verifying donations.</li>
        <li>Generating receipts and acknowledgements.</li>
        <li>Maintaining financial and accounting records.</li>
        <li>Meeting tax and regulatory obligations.</li>
        <li>Preventing fraud and unauthorised transactions.</li>
        <li>Responding to donor enquiries and complaints.</li>
        <li>Complying with lawful requests from competent authorities.</li>
      </ul>
      <p>Donor information will be handled in accordance with the JiNANAM Privacy Policy and Data Protection &amp; Security Policy.</p>
      <p>Financial and donation records may need to be retained even after a donor requests deletion of their JiNANAM account, where retention is required under applicable law.</p>
      </>
    ),
  },
  {
    heading: "17. Changes to This Donation Policy",
    text: (
      <>
      <p>Jain Vihaar Foundation may update this Donation Policy to reflect changes in applicable law, donation functionality, payment methods, tax approvals, regulatory requirements or operational practices.</p>
      <p>The latest version will be published on the JiNANAM website.</p>
      <p>The Foundation will communicate material changes through appropriate channels where required.</p>
      </>
    ),
  },
  {
    heading: "18. Contact Information",
    text: (
      <>
      <p><strong>For donation-related questions, payment issues, receipt corrections or refund requests, contact:</strong></p>
      <p><strong>JAIN VIHAAR FOUNDATION</strong></p>
      <p><strong>Platform Brand:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>General Support:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion:</strong> appsupport@jinanam.org</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Building No. 9, Rehab Building,</p>
      <p>Wadar Pada, Malad East,</p>
      <p>Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      </>
    ),
  },
    ],
  },

  "cookie-policy": {
    title: "Cookie Policy",
    intro:
      "This Cookie Policy explains how cookies and similar technologies may be used when visitors access the JiNANAM website.",
    sections: [
      {
    heading: "COOKIE POLICY",
    text: (
      <>
      <p><strong>Effective Date:</strong> 22 November 2026</p>
      <p><strong>Last Updated:</strong> 22 November 2026</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>Platform:</strong> JINANAM</p>
      <p><strong>Operated by:</strong> Jain Vihaar Foundation</p>
      </>
    ),
  },
  {
    heading: "1. Introduction",
    text: (
      <>
      <p>This Cookie Policy explains how the Jain Vihaar Foundation ("Foundation", "we", "us" or "our"), which operates the JiNANAM platform, uses cookies and similar technologies when you visit or interact with the JiNANAM website.</p>
      <p>Cookies are small text files that may be stored on your device when you visit a website. They help websites operate, remember preferences, maintain sessions, protect against misuse and understand how visitors use their services.</p>
      <p><strong>This policy explains:</strong></p>
      <ul>
        <li>What cookies and similar technologies are.</li>
        <li>Why JiNANAM may use them.</li>
        <li>What categories of cookies may be used.</li>
        <li>How third-party services may use cookies or similar technologies.</li>
        <li>How you can manage or withdraw your cookie preferences.</li>
      </ul>
      <p>This policy should be read together with the JiNANAM Privacy Policy and Data Protection &amp; Security Policy.</p>
      </>
    ),
  },
  {
    heading: "2. Scope of This Policy",
    text: (
      <>
      <p><strong>This policy primarily applies to the JiNANAM website:</strong></p>
      <p>https://www.jinanam.org</p>
      <p><strong>JINANAM also provides mobile applications:</strong></p>
      <ol>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App.</li>
        <li>JINANAM Tracking App.</li>
        <li>JINANAM Security App.</li>
      </ol>
      <p>Mobile applications may use technologies such as device identifiers, software development kits (SDKs), local storage, analytics tools and notification technologies. These are not necessarily browser cookies and may be governed by the relevant application permissions, device settings and JINANAM Privacy Policy.</p>
      </>
    ),
  },
  {
    heading: "3. What Are Cookies?",
    text: (
      <>
      <p>Cookies are small files that a website may store on your browser or device.</p>
      <p><strong>They may help the website:</strong></p>
      <ul>
        <li>Recognise your browser or device during a visit.</li>
        <li>Keep you signed in.</li>
        <li>Remember your preferences.</li>
        <li>Maintain website security.</li>
        <li>Understand how visitors navigate the website.</li>
        <li>Improve website performance and functionality.</li>
      </ul>
      <p><strong>Cookies may be:</strong></p>
      <h4>3.1 First-Party Cookies</h4>
      <p>These are cookies set directly by the JINANAM website or its authorised service providers on behalf of the Foundation.</p>
      <h4>3.2 Third-Party Cookies</h4>
      <p>These are cookies or similar technologies set by external service providers whose tools or services may be integrated into the website.</p>
      <h4>3.3 Session Cookies</h4>
      <p>These cookies generally remain active only while your browser session is open and are deleted or expire when the session ends.</p>
      <h4>3.4 Persistent Cookies</h4>
      <p>These cookies remain on your device for a specified period or until you delete them through your browser settings.</p>
      </>
    ),
  },
  {
    heading: "4. Categories of Cookies We May Use",
    text: (
      <>
      <p>Depending on the website features and services enabled, JINANAM may use the following categories of cookies.</p>
      <h4>4.1 Strictly Necessary Cookies</h4>
      <p>These cookies are required for the website to function properly and securely.</p>
      <p><strong>They may be used to:</strong></p>
      <ul>
        <li>Maintain website sessions.</li>
        <li>Support login and authentication.</li>
        <li>Protect against unauthorised access.</li>
        <li>Maintain security and prevent fraudulent activity.</li>
        <li>Support essential website functionality.</li>
        <li>Remember privacy and cookie consent choices.</li>
      </ul>
      <p>Strictly necessary cookies are generally required for the operation of the website and cannot be disabled through the website's cookie preference tool without affecting essential functionality.</p>
      <h4>4.2 Functional Cookies</h4>
      <p><strong>These cookies may help the website remember choices and preferences, such as:</strong></p>
      <ul>
        <li>Language preferences.</li>
        <li>Region or location preferences where selected.</li>
        <li>Display and accessibility settings.</li>
        <li>Previously selected website preferences.</li>
      </ul>
      <p>They help provide a more consistent browsing experience.</p>
      <h4>4.3 Analytics and Performance Cookies</h4>
      <p>These cookies or similar technologies may help us understand how visitors use the website.</p>
      <p><strong>They may collect information such as:</strong></p>
      <ul>
        <li>Pages visited.</li>
        <li>Time spent on pages.</li>
        <li>Website navigation patterns.</li>
        <li>Browser and device information.</li>
        <li>General usage statistics.</li>
        <li>Website errors and performance information.</li>
      </ul>
      <p>This information may help us identify technical issues, improve website navigation and understand which website features are useful.</p>
      <p>Where consent is legally required, non-essential analytics cookies or technologies will be activated only after the visitor provides the required consent.</p>
      <h4>4.4 Security Cookies</h4>
      <p><strong>These cookies or similar technologies may help us:</strong></p>
      <ul>
        <li>Detect suspicious website activity.</li>
        <li>Identify unusual login attempts.</li>
        <li>Protect accounts and website infrastructure.</li>
        <li>Prevent spam, abuse and unauthorised access.</li>
        <li>Maintain the integrity of website sessions.</li>
      </ul>
      <h4>4.5 Third-Party Service Cookies</h4>
      <p>Some website features may rely on external service providers. Depending on the integrations enabled, these providers may use cookies or similar technologies to deliver their services.</p>
      <p><strong>These may include services related to:</strong></p>
      <ul>
        <li>Website hosting and infrastructure.</li>
        <li>Authentication and account management.</li>
        <li>Website analytics.</li>
        <li>Maps and location-related functionality.</li>
        <li>Payment processing, when donation functionality is enabled.</li>
        <li>Security and performance monitoring.</li>
      </ul>
      <p>Third-party providers may process technical information in accordance with their own privacy policies and applicable contractual arrangements.</p>
      </>
    ),
  },
  {
    heading: "5. Third-Party Technologies and Services",
    text: (
      <>
      <p>JINANAM uses or may use external technology providers to support its website and applications.</p>
      <p><strong>These may include:</strong></p>
      <table>
        <thead>
          <tr>
            <th>Provider / Technology</th>
            <th>Potential purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hostinger</td>
            <td>Website hosting and infrastructure</td>
          </tr>
          <tr>
            <td>Firebase</td>
            <td>Authentication, analytics and application-related services</td>
          </tr>
          <tr>
            <td>Google Maps</td>
            <td>Map and location-related functionality</td>
          </tr>
          <tr>
            <td>Razorpay</td>
            <td>Payment processing when donation functionality is enabled</td>
          </tr>
          <tr>
            <td>Firebase Cloud Messaging</td>
            <td>Push notification delivery</td>
          </tr>
          <tr>
            <td>Crashlytics</td>
            <td>Application crash and diagnostic reporting</td>
          </tr>
          <tr>
            <td>WhatsApp Business services</td>
            <td>Authorised communication services</td>
          </tr>
        </tbody>
      </table>
      <p>Not every provider listed above necessarily places cookies on the JiNANAM website. The technologies used depend on the specific website integration and configuration.</p>
      <p>External providers may process information under their own terms and privacy policies. Visitors should review the relevant provider's privacy information where appropriate.</p>
      </>
    ),
  },
  {
    heading: "6. Cookies and Personal Information",
    text: (
      <>
      <p>Some cookies may collect information that identifies or can reasonably be associated with a visitor or their device.</p>
      <p><strong>Depending on the technology used, information may include:</strong></p>
      <ul>
        <li>IP address or approximate network information.</li>
        <li>Browser type and version.</li>
        <li>Device and operating system information.</li>
        <li>Website session identifiers.</li>
        <li>Website usage and interaction information.</li>
        <li>Login or authentication-related information.</li>
        <li>Cookie preference choices.</li>
      </ul>
      <p>JINANAM will handle personal information collected through cookies in accordance with its Privacy Policy and applicable data protection laws.</p>
      <p>We do not intend to use cookies to collect passwords, OTPs, payment PINs or other confidential payment credentials.</p>
      </>
    ),
  },
  {
    heading: "7. Consent and Cookie Preferences",
    text: (
      <>
      <p>Where required by applicable law, JiNANAM will seek consent before placing or activating non-essential cookies and similar tracking technologies.</p>
      <p><strong>Visitors may be provided with a cookie preference interface that allows them to:</strong></p>
      <ul>
        <li>Accept all cookies.</li>
        <li>Reject non-essential cookies.</li>
        <li>Select permitted cookie categories.</li>
        <li>Review or change their preferences.</li>
      </ul>
      <p>Strictly necessary cookies may remain active because they are required for essential website functions.</p>
      <p>Visitors should be able to change or withdraw their cookie consent through the website's cookie settings or preference management facility, where available.</p>
      <p>Withdrawing consent will not affect the lawfulness of processing that took place before the withdrawal.</p>
      </>
    ),
  },
  {
    heading: "8. How to Manage Cookies Through Your Browser",
    text: (
      <>
      <p>Most internet browsers allow users to manage cookies through their settings.</p>
      <p><strong>Depending on the browser, you may be able to:</strong></p>
      <ul>
        <li>View cookies stored on your device.</li>
        <li>Delete existing cookies.</li>
        <li>Block all cookies.</li>
        <li>Block cookies from selected websites.</li>
        <li>Receive notifications before cookies are stored.</li>
        <li>Clear cookies automatically when closing the browser.</li>
      </ul>
      <p>Please note that blocking or deleting certain cookies may affect website functionality, including login sessions, saved preferences and other essential features.</p>
      <p>For instructions, consult the official support documentation of your browser, such as Google Chrome, Microsoft Edge, Mozilla Firefox or Apple Safari.</p>
      </>
    ),
  },
  {
    heading: "9. Cookies on Mobile Applications",
    text: (
      <>
      <p>JINANAM mobile applications may use SDKs, local storage, device identifiers and other technologies that perform functions similar to cookies.</p>
      <p><strong>These technologies may support:</strong></p>
      <ul>
        <li>Authentication and account security.</li>
        <li>Push notifications.</li>
        <li>Application analytics.</li>
        <li>Crash reporting.</li>
        <li>Map and location functionality.</li>
        <li>Application performance and diagnostics.</li>
      </ul>
      <p>Mobile application permissions and privacy controls are managed through the relevant application and device settings.</p>
      <p>For more information about personal information collected through JiNANAM mobile applications, please refer to the JiNANAM Privacy Policy.</p>
      </>
    ),
  },
  {
    heading: "10. Data Retention",
    text: (
      <>
      <p>Cookies may remain on your device for different periods depending on their purpose and configuration.</p>
      <p>Session cookies generally expire when the browser session ends. Persistent cookies may remain until their specified expiry date or until you delete them.</p>
      <p>JINANAM will aim to configure cookies and similar technologies so that their duration is proportionate to their purpose.</p>
      <p>Information collected through cookies may be retained in accordance with the JINANAM Data Retention Policy and applicable legal requirements.</p>
      </>
    ),
  },
  {
    heading: "11. International Visitors",
    text: (
      <>
      <p>JINANAM is intended for use by the Jain community and other visitors globally.</p>
      <p>Depending on your location, different privacy and cookie-consent requirements may apply. The Foundation will apply the consent and disclosure requirements that are legally applicable to the relevant visitor and processing activity.</p>
      <p>Where applicable, visitors may have rights to access, withdraw consent, object to certain processing or exercise other rights under local data protection laws.</p>
      </>
    ),
  },
  {
    heading: "12. Children's Privacy",
    text: (
      <>
      <p>JINANAM's services may be used by individuals under the age of 18 subject to applicable parental or guardian consent and child-protection requirements.</p>
      <p>JINANAM does not intend to use cookies or similar technologies to unlawfully track children or engage in prohibited profiling or targeted advertising.</p>
      <p>Where applicable law requires parental or guardian consent for relevant technologies or processing, the necessary consent and safeguards will be implemented.</p>
      </>
    ),
  },
  {
    heading: "13. Changes to This Cookie Policy",
    text: (
      <>
      <p><strong>Jain Vihaar Foundation may update this Cookie Policy from time to time to reflect changes in:</strong></p>
      <ul>
        <li>Website functionality.</li>
        <li>Cookies and tracking technologies used.</li>
        <li>Third-party service providers.</li>
        <li>Applicable privacy and data protection laws.</li>
        <li>Cookie consent and preference management practices.</li>
      </ul>
      <p>The latest version will be published on the JiNANAM website.</p>
      <p>Where required, visitors will be informed of material changes and asked to provide updated consent.</p>
      </>
    ),
  },
  {
    heading: "14. Contact Information",
    text: (
      <>
      <p><strong>For questions, concerns or requests relating to cookies and privacy, please contact:</strong></p>
      <p><strong>JAIN VIHAAR FOUNDATION</strong></p>
      <p><strong>Platform Brand:</strong> JINANAM</p>
      <p><strong>Website:</strong> https://www.jinanam.org</p>
      <p><strong>General Support:</strong> support@jinanam.org</p>
      <p><strong>Account Deletion:</strong> appsupport@jinanam.org</p>
      <p><strong>Grievance Officer:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Contact Numbers:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p><strong>Registered Office:</strong></p>
      <p>302, Building No. 9, Rehab Building,</p>
      <p>Wadar Pada, Malad East,</p>
      <p>Mumbai - 400097, Maharashtra, India.</p>
      <p><strong>Operational Office:</strong></p>
      <p>12, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      </>
    ),
  },
    ],
  },
};

function LegalPolicyPage() {
  const slug = window.location.pathname
    .replace(/\/+$/, "")
    .split("/")
    .pop() || "";

  const policy = policyContent[slug];

  if (!policy) {
    return (
      <main className="legal-policy-page">
        <div className="legal-policy-container">
          <h1>Page Not Found</h1>
          <p>The requested policy page could not be found.</p>
          <a href="/">Return to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="legal-policy-page">
      <div className="legal-policy-container">

        <a href="/" className="legal-back-link">
          ← Back to Home
        </a>

        <div className="legal-policy-header">
          <span className="legal-eyebrow">JiNANAM • LEGAL INFORMATION</span>
          <h1>{policy.title}</h1>
          <p>{policy.intro}</p>
        </div>

        <div className="legal-policy-content">
          {policy.sections.map((section) => (
            <section className="legal-policy-section" key={section.heading}>
              <h2>{section.heading}</h2>
              <div>{section.text}</div>
            </section>
          ))}
        </div>

        <div className="legal-policy-footer">
          <p>
            If you have any questions regarding this policy,
            please contact the JiNANAM team.
          </p>
          <a href="/contact" className="legal-contact-button">
            Contact Us
          </a>
        </div>

      </div>
    </main>
  );
}

export default LegalPolicyPage;
