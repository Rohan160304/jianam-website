
import "./PrivacySafetyPage.css";
import type { ReactNode } from "react";

export const privacySafetyRoutes: Record<string, string> = {
  "Account & Data Deletion":
    "/privacy-safety/account-data-deletion",
  "Data Protection & Security":
    "/privacy-safety/data-protection-security",
  "Child Safety Standards":
    "/privacy-safety/child-safety-standards",
  "Grievance Redressal":
    "/privacy-safety/grievance-redressal",
};

const privacySafetyContent: Record<
  string,
  {
    title: string;
    intro: string;
    sections: { heading: string; text: ReactNode }[];
  }
> = {
  "account-data-deletion": {
    title: "Account & Data Deletion",
    intro:
      "JiNANAM respects your control over your account and personal information. This page explains how you can request account deletion and what happens to your information.",
    sections: [
      {
    heading: "ACCOUNT & DATA DELETION POLICY",
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
      <p>Jain Vihaar Foundation ("Foundation", "we", "us" or "our"), which operates the JINANAM platform, respects users' rights concerning their accounts and personal information.</p>
      <p>This Account &amp; Data Deletion Policy explains how individuals can request the deletion of their JINANAM accounts and associated personal information.</p>
      <p><strong>This policy applies to the following JINANAM services:</strong></p>
      <ol>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App.</li>
        <li>JINANAM Tracking App.</li>
        <li>JINANAM Security App.</li>
        <li>JINANAM website and associated online services.</li>
      </ol>
      <p>The Foundation aims to make account deletion straightforward, transparent and accessible, while complying with applicable data protection laws, statutory record-retention requirements and legitimate security obligations.</p>
      </>
    ),
  },
  {
    heading: "2. Who Can Request Account Deletion?",
    text: (
      <>
      <p><strong>The following users may request deletion of their accounts, subject to appropriate identity and authority verification:</strong></p>
      <ul>
        <li>Registered JINANAM members, including Jain and non-Jain members.</li>
        <li>Authorised administrators.</li>
        <li>Temple, Dharamshala, Sthanak and Jain Centre administrators.</li>
        <li>Monks, Sadhvis or their authorised representatives, where applicable.</li>
        <li>Security personnel and other registered staff.</li>
        <li>Parents or legal guardians acting on behalf of a child, where legally authorised.</li>
        <li>Any other individual who holds an account on JINANAM.</li>
      </ul>
      <p>A person may also request deletion of personal information without necessarily requesting deletion of their entire account, subject to applicable law and technical requirements.</p>
      </>
    ),
  },
  {
    heading: "3. How to Request Account Deletion",
    text: (
      <>
      <p>Users may request account deletion through either of the following methods.</p>
      <h4>3.1 Through the JINANAM Mobile Application</h4>
      <p>Users should be able to initiate account deletion through the following general navigation:</p>
      <p>Profile → Settings → Account → Delete Account</p>
      <p>The exact menu labels may vary depending on the application version.</p>
      <p>The deletion option should be clearly visible and should not be hidden behind unnecessary steps.</p>
      <p><strong>Before submitting the request, users will be shown information explaining:</strong></p>
      <ul>
        <li>That the request concerns permanent account deletion.</li>
        <li>That access to account-related services will end.</li>
        <li>That associated personal information will be deleted, subject to lawful retention requirements.</li>
        <li>That certain records may need to be retained for legal, financial, security or regulatory reasons.</li>
        <li>The expected deletion completion period.</li>
      </ul>
      <p>Users will be required to confirm their decision before the request is submitted.</p>
      <h4>3.2 Through the JINANAM Website</h4>
      <p>Users who cannot access the mobile application may submit an account deletion request through the dedicated account deletion facility on:</p>
      <p>https://www.jinanam.org</p>
      <p>The website deletion facility should allow users to request deletion without requiring them to reinstall or log in to the mobile application.</p>
      <h4>3.3 Through Email</h4>
      <p><strong>Users may also submit a deletion request to:</strong></p>
      <p><strong>Email:</strong> appsupport@jinanam.org</p>
      <p><strong>Suggested subject line:</strong></p>
      <p>Request for JINANAM Account and Data Deletion</p>
      <p><strong>The request should include:</strong></p>
      <ul>
        <li>Full name.</li>
        <li>Registered mobile number or email address, as applicable.</li>
        <li>JINANAM Member ID or account identifier, if available.</li>
        <li>Name of the JiNANAM application being used.</li>
        <li>Confirmation that permanent account deletion is requested.</li>
      </ul>
      <p>Users should not include passwords, OTPs, payment PINs or other confidential authentication credentials in their email.</p>
      </>
    ),
  },
  {
    heading: "4. Identity Verification",
    text: (
      <>
      <p>To protect accounts against unauthorised deletion requests, Jain Vihaar Foundation may take reasonable steps to verify the identity and authority of the person submitting the request.</p>
      <p><strong>Verification may include:</strong></p>
      <ul>
        <li>Confirmation through the registered email address.</li>
        <li>Confirmation through the registered mobile number.</li>
        <li>Verification of the JiNANAM Member ID.</li>
        <li>Confirmation through an existing authenticated account session.</li>
        <li>Additional reasonable verification for administrator, institutional or representative accounts.</li>
      </ul>
      <p>Where a request is submitted by a parent, guardian or authorised representative, the Foundation may request reasonable evidence of their authority.</p>
      <p>Verification will be proportionate to the nature of the account and the risk of unauthorised deletion.</p>
      <p>The Foundation will not unnecessarily request sensitive documents or information that is not required to establish the validity of the request.</p>
      </>
    ),
  },
  {
    heading: "5. Account Deletion Timeline",
    text: (
      <>
      <p>Jain Vihaar Foundation aims to complete a valid and verified account deletion request within seven days of receiving the request.</p>
      <p><strong>The deletion process may include:</strong></p>
      <ol>
        <li>Receipt of the request.</li>
        <li>Identity and authority verification, where necessary.</li>
        <li>Review of any applicable legal or regulatory retention requirements.</li>
        <li>Deletion or anonymisation of eligible personal information.</li>
        <li>Removal of account access and associated permissions.</li>
        <li>Completion of deletion across relevant systems and service providers, as applicable.</li>
        <li>Confirmation to the user where contact details are available.</li>
      </ol>
      <p>If additional verification or information is reasonably necessary, the user may be contacted.</p>
      <p>Where a legal obligation, valid court order, regulatory requirement or other lawful preservation requirement applies, the affected information may be retained for the required period. The Foundation will not use this exception to retain unrelated personal information unnecessarily.</p>
      </>
    ),
  },
  {
    heading: "6. What Happens After Account Deletion?",
    text: (
      <>
      <p><strong>Once the account deletion process is completed:</strong></p>
      <ul>
        <li>The account will no longer be available for ordinary login or use.</li>
        <li>The JINANAM Member ID associated with the deleted account will no longer be usable for normal account access.</li>
        <li>Personal profile information will be deleted or anonymised where legally permissible.</li>
        <li>Profile photographs will be removed where applicable.</li>
        <li>Personal account preferences and associated information will be deleted where no longer required.</li>
        <li>Access permissions and application credentials will be revoked.</li>
        <li>Relevant authentication sessions and tokens will be invalidated.</li>
        <li>Associated personal information held by relevant service providers will be addressed in accordance with applicable deletion arrangements.</li>
        <li>Information that must legally be retained may be kept in restricted form for the required period.</li>
      </ul>
      <p>Account deletion is permanent once completed and may not be reversible.</p>
      </>
    ),
  },
  {
    heading: "7. Information That May Be Deleted",
    text: (
      <>
      <p>Subject to applicable legal requirements, the Foundation will delete or anonymise personal information associated with the account that is no longer necessary.</p>
      <p><strong>This may include:</strong></p>
      <ul>
        <li>Name and profile information.</li>
        <li>Contact details.</li>
        <li>Profile photographs.</li>
        <li>Account preferences.</li>
        <li>User-specific application settings.</li>
        <li>Authentication-related information.</li>
        <li>User-associated location information.</li>
        <li>Personal activity records.</li>
        <li>Other account-linked information that is no longer required.</li>
      </ul>
      <p>Where content or records involve multiple individuals, institutions or legal obligations, the Foundation may need to assess whether complete deletion, partial deletion, anonymisation or removal of identifying information is appropriate.</p>
      </>
    ),
  },
  {
    heading: "8. Information That May Be Retained",
    text: (
      <>
      <p>Certain information may need to be retained after account deletion where required by applicable law or reasonably necessary for a legitimate legal or security purpose.</p>
      <p><strong>This may include:</strong></p>
      <h4>8.1 Financial and Donation Records</h4>
      <p><strong>When donation functionality is introduced, the Foundation may retain:</strong></p>
      <ul>
        <li>Donation transaction records.</li>
        <li>Donor information required for statutory accounting.</li>
        <li>Payment references.</li>
        <li>Donation receipts.</li>
        <li>Refund and reconciliation records.</li>
        <li>Other legally required financial documents.</li>
      </ul>
      <p>These records may be retained for the applicable accounting, tax and statutory record-keeping period.</p>
      <h4>8.2 Legal and Regulatory Records</h4>
      <p><strong>Information may be retained where necessary to:</strong></p>
      <ul>
        <li>Comply with applicable laws and regulations.</li>
        <li>Meet statutory record-preservation requirements.</li>
        <li>Respond to valid court orders or government directions.</li>
        <li>Cooperate with legally authorised investigations.</li>
        <li>Establish, exercise or defend legal claims.</li>
      </ul>
      <h4>8.3 Security and Fraud-Prevention Records</h4>
      <p><strong>Relevant information may be retained where reasonably necessary to:</strong></p>
      <ul>
        <li>Investigate suspected fraud or misuse.</li>
        <li>Prevent unauthorised access.</li>
        <li>Investigate security incidents.</li>
        <li>Protect other users and the platform.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <h4>8.4 Complaints and Moderation Records</h4>
      <p><strong>Relevant records may be retained where required for:</strong></p>
      <ul>
        <li>Pending complaints or grievances.</li>
        <li>Content moderation investigations.</li>
        <li>Appeals.</li>
        <li>Legal disputes.</li>
        <li>Statutory intermediary obligations.</li>
      </ul>
      <h4>8.5 Required Intermediary Records</h4>
      <p>Where applicable, JINANAM may preserve registration information and other specified records for the periods prescribed under applicable intermediary laws, including the applicable 180-day preservation requirement following cancellation or withdrawal of registration.</p>
      <p>Retained information will be restricted to the relevant legal, security or operational purpose and will not remain available for ordinary account use.</p>
      </>
    ),
  },
  {
    heading: "9. What Happens to Monk and Vihaar Location Information?",
    text: (
      <>
      <p>JINANAM's monk tracking functionality is designed to operate during an authorised active Vihaar route.</p>
      <p><strong>When an account deletion request is completed:</strong></p>
      <ul>
        <li>Relevant account access and tracking permissions will be revoked.</li>
        <li>The account will no longer be able to participate in ordinary tracking activities.</li>
        <li>Active tracking permissions associated with the deleted account will be reviewed and disabled where applicable.</li>
        <li>Historical GPS information will be handled according to the Data Retention Policy, including the ordinary 30-day retention period.</li>
        <li>Information required for a lawful investigation or preservation obligation may be retained for the applicable period.</li>
      </ul>
      <p>Member location sharing is voluntary and is not intended to continue after the member's account access and participation have been terminated.</p>
      </>
    ),
  },
  {
    heading: "10. Institutional and Administrator Accounts",
    text: (
      <>
      <p>Some JINANAM accounts may have administrative responsibilities for temples, Dharamshalas, Sthanaks, Jain Centres or other institutions.</p>
      <p><strong>Before deleting an administrator account, the Foundation may verify whether:</strong></p>
      <ul>
        <li>The administrator currently controls institutional services.</li>
        <li>Other authorised administrators are available.</li>
        <li>Administrative responsibilities need to be transferred.</li>
        <li>Any pending bookings, visitor records, complaints or institutional operations require reassignment.</li>
      </ul>
      <p>Where necessary, the Foundation may coordinate with the relevant institution or Super Admin to ensure continuity of essential services.</p>
      <p>An individual administrator's deletion request does not automatically require deletion of the institution's profile or independently maintained institutional records.</p>
      <p>The Foundation will delete or remove the individual's personal information where legally permissible while retaining necessary institutional records.</p>
      </>
    ),
  },
  {
    heading: "11. Security Staff and Tracking Accounts",
    text: (
      <>
      <p><strong>For JINANAM Security App and JINANAM Tracking App:</strong></p>
      <ul>
        <li>Security staff may request deletion of their assigned account through the authorised process.</li>
        <li>Authorised monk representatives may request deletion of their personal account information.</li>
        <li>Tracking and administrative permissions will be revoked where applicable.</li>
        <li>Relevant visitor, entry, route or safety records may be retained where required for legitimate institutional, security or legal purposes.</li>
      </ul>
      <p>Deleting a staff or representative account will not automatically delete independently required records relating to visitors, institutions or other individuals.</p>
      </>
    ),
  },
  {
    heading: "12. Account Suspension Is Different from Account Deletion",
    text: (
      <>
      <p>Temporary suspension, account restriction, deactivation and permanent deletion are different actions.</p>
      <ul>
        <li><strong>Suspension:</strong> Access may be temporarily restricted due to a policy violation, security concern or investigation.</li>
        <li><strong>Deactivation:</strong> Account access may be disabled without permanently deleting associated information.</li>
        <li><strong>Deletion:</strong> The account is permanently removed and associated personal information is deleted or anonymised, subject to lawful retention requirements.</li>
      </ul>
      <p>Users whose accounts have been suspended may still submit a valid account deletion request. A suspension or investigation does not automatically prevent deletion. However, information subject to a lawful preservation obligation may be retained.</p>
      </>
    ),
  },
  {
    heading: "13. Deletion of Accounts Used Across Multiple JiNANAM Applications",
    text: (
      <>
      <p>Certain users may access more than one JINANAM application using a common JINANAM Member ID or associated credentials.</p>
      <p>Where an account is shared across multiple JINANAM services, a valid deletion request may affect access to all connected services that rely on that account.</p>
      <p><strong>For example, deleting a common member account may affect access to:</strong></p>
      <ul>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App, where applicable.</li>
        <li>JINANAM Tracking App, where applicable.</li>
      </ul>
      <p>Security personnel using separately issued credentials may have a separate account deletion process.</p>
      <p>Before final confirmation, JiNANAM should clearly explain which connected services and account permissions will be affected.</p>
      </>
    ),
  },
  {
    heading: "14. Third-Party Service Providers",
    text: (
      <>
      <p>JINANAM uses third-party technology providers to support hosting, authentication, database services, analytics, notifications, mapping, communication and other platform functions.</p>
      <p>Where personal information is processed by such providers on behalf of the Foundation, relevant deletion requests will be handled through applicable service-provider arrangements.</p>
      <p>Some information may remain temporarily in protected backups or system recovery environments and will be removed through the applicable backup expiry process, unless preservation is legally required.</p>
      <p>Information independently retained by a third-party provider under its own legal obligations may be subject to that provider's applicable privacy and retention practices.</p>
      </>
    ),
  },
  {
    heading: "15. Deletion of Information from Backups",
    text: (
      <>
      <p>After account deletion, information may remain temporarily in encrypted or otherwise protected backups maintained for disaster recovery and business continuity.</p>
      <p><strong>Such information:</strong></p>
      <ul>
        <li>Will not be used for ordinary active account services.</li>
        <li>Will not be intentionally restored to normal active use.</li>
        <li>Will remain subject to appropriate access restrictions.</li>
        <li>Will expire in accordance with the applicable backup retention and deletion process, unless legally required to be preserved.</li>
      </ul>
      <p>If a backup is restored for disaster recovery, the Foundation will take reasonable steps to ensure that previously completed deletion requests are reapplied.</p>
      </>
    ),
  },
  {
    heading: "16. Children's Accounts",
    text: (
      <>
      <p>A parent or lawful guardian may submit an account deletion request on behalf of a child where authorised under applicable law.</p>
      <p>The Foundation may request reasonable information to verify the parent's or guardian's identity and authority.</p>
      <p>Where the deletion request concerns a child, JiNANAM will give appropriate consideration to the child's privacy, safety and applicable legal protections.</p>
      <p>Any information that must be preserved under applicable law will be retained only for the required purpose and period.</p>
      </>
    ),
  },
  {
    heading: "17. Data Deletion Requests Without Account Deletion",
    text: (
      <>
      <p>Users may also contact the Foundation to request deletion of particular personal information without deleting their entire account.</p>
      <p><strong>Such requests may include:</strong></p>
      <ul>
        <li>Removal of a profile photograph.</li>
        <li>Correction or removal of personal contact information.</li>
        <li>Deletion of particular account-linked information.</li>
        <li>Withdrawal of consent for processing based on consent.</li>
        <li>Other applicable personal data rights.</li>
      </ul>
      <p>The Foundation will assess the request under applicable law and may explain where information must continue to be retained for a valid legal or operational reason.</p>
      </>
    ),
  },
  {
    heading: "18. Confirmation of Deletion",
    text: (
      <>
      <p>Where the Foundation has sufficient contact information, it may send a confirmation after the deletion request has been processed.</p>
      <p>If some information must be retained, the Foundation may explain the relevant category and reason where reasonably possible and legally permitted.</p>
      <p>Confirmation of account deletion does not mean that every historical record, backup or legally required document has been immediately erased from every system.</p>
      </>
    ),
  },
  {
    heading: "19. Changes to This Policy",
    text: (
      <>
      <p>Jain Vihaar Foundation may update this Account &amp; Data Deletion Policy from time to time to reflect changes in applicable law, application functionality, service providers or operational practices.</p>
      <p>The latest version will be published on the JiNANAM website.</p>
      </>
    ),
  },
  {
    heading: "20. Contact Information",
    text: (
      <>
      <p><strong>For account deletion and personal data deletion requests:</strong></p>
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

  "data-protection-security": {
    title: "Data Protection & Security",
    intro:
      "Protecting user information is important to JiNANAM. We aim to maintain appropriate safeguards to protect personal information and platform data.",
    sections: [
      {
    heading: "DATA PROTECTION & SECURITY POLICY",
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
      <p>Jain Vihaar Foundation ("Foundation", "we", "us" or "our"), which operates the JiNANAM platform, recognises the importance of protecting personal information and maintaining the security, confidentiality and integrity of its digital services.</p>
      <p>JINANAM uses technology to connect members, temples, Dharamshalas, Sthanaks, Jain Centres, monks, Sadhvis, volunteers and other community participants.</p>
      <p>The platform may process personal information, institutional records, account credentials, visitor information, administrative records and location information. The Foundation is committed to handling this information responsibly and applying appropriate technical and organisational safeguards.</p>
      <p><strong>This policy explains:</strong></p>
      <ul>
        <li>How JINANAM protects personal information.</li>
        <li>How access to information is controlled.</li>
        <li>How information is stored and transmitted.</li>
        <li>How third-party technology providers are managed.</li>
        <li>How location and tracking information is protected.</li>
        <li>How security incidents and personal data breaches are handled.</li>
        <li>What responsibilities users and administrators have.</li>
      </ul>
      <p><strong>This policy applies to:</strong></p>
      <ol>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App.</li>
        <li>JINANAM Tracking App.</li>
        <li>JINANAM Security App.</li>
        <li>JINANAM website, backend systems, APIs, databases and associated services.</li>
      </ol>
      </>
    ),
  },
  {
    heading: "2. Organisation Responsible for Data Protection",
    text: (
      <>
      <p><strong>The JINANAM platform is operated by:</strong></p>
      <p><strong>Jain Vihaar Foundation</strong></p>
      <p>A Section 8 company incorporated under the Companies Act, 2013.</p>
      <p>The Foundation is responsible for determining the purposes and means of processing personal information through JiNANAM, subject to applicable law and the arrangements governing particular services.</p>
      <p>For the purposes of applicable Indian data protection law, the Foundation will fulfil the responsibilities applicable to a Data Fiduciary in respect of personal data for which it determines the purpose and means of processing.</p>
      <p>Third-party service providers may process information on behalf of the Foundation under applicable contractual and legal arrangements.</p>
      </>
    ),
  },
  {
    heading: "3. Information We Protect",
    text: (
      <>
      <p>Depending on the services used, JINANAM may collect or process the following categories of information.</p>
      <h4>3.1 Personal and Account Information</h4>
      <ul>
        <li>Name and profile details.</li>
        <li>JINANAM Member ID.</li>
        <li>Mobile number and email address.</li>
        <li>Profile photographs.</li>
        <li>Login and authentication information.</li>
        <li>Account status and preferences.</li>
        <li>Role and permission information.</li>
      </ul>
      <h4>3.2 Community and Institutional Information</h4>
      <ul>
        <li>Temple and institutional profiles.</li>
        <li>Dharamshala and facility information.</li>
        <li>Sthanak and Jain Centre records.</li>
        <li>Administrator and authorised representative details.</li>
        <li>Community and membership-related information.</li>
        <li>Institutional announcements and service records.</li>
      </ul>
      <p>Information indicating a person's religious or sect affiliation may be particularly sensitive in certain jurisdictions. JINANAM will use such information only for relevant platform purposes and in accordance with applicable law.</p>
      <h4>3.3 Monk and Vihaar Information</h4>
      <ul>
        <li>Monk and Sadhvi profile information.</li>
        <li>Authorised representative information.</li>
        <li>Active Vihaar route information.</li>
        <li>GPS location information collected during an active route.</li>
        <li>Route participation information.</li>
        <li>Historical tracking records.</li>
      </ul>
      <h4>3.4 Member Location Information</h4>
      <p>Where a member voluntarily joins a Vihaar route and enables location sharing, JINANAM may process the member's location for the relevant participation.</p>
      <p>Member location sharing is voluntary and is not intended to involve continuous background location collection.</p>
      <h4>3.5 Visitor and Security Information</h4>
      <ul>
        <li>Visitor names and details where collected.</li>
        <li>Vehicle registration information.</li>
        <li>Member verification records.</li>
        <li>QR scanning and entry records.</li>
        <li>Visitor category and visit details.</li>
        <li>Security staff account information.</li>
        <li>Entry and exit records.</li>
      </ul>
      <h4>3.6 Technical and Security Information</h4>
      <ul>
        <li>Device and application details.</li>
        <li>IP addresses and access logs.</li>
        <li>Authentication and session records.</li>
        <li>Application diagnostics.</li>
        <li>Crash reports.</li>
        <li>Security events and audit trails.</li>
        <li>Usage and analytics information.</li>
      </ul>
      <h4>3.7 Booking, Donation and Transaction Information</h4>
      <p><strong>Where these features are enabled, JINANAM may process:</strong></p>
      <ul>
        <li>Booking requests and confirmations.</li>
        <li>Room and facility allocation details.</li>
        <li>Event registration information.</li>
        <li>Donation details and payment references.</li>
        <li>Receipt and accounting records.</li>
        <li>Related communications and transaction status.</li>
      </ul>
      <p>Donation functionality is not currently active. Any future donation processing will be subject to the Donation Policy and applicable legal requirements.</p>
      </>
    ),
  },
  {
    heading: "4. Purposes of Data Processing",
    text: (
      <>
      <p><strong>The Foundation may process personal information for legitimate and disclosed purposes, including:</strong></p>
      <ul>
        <li>Creating and managing user accounts.</li>
        <li>Authenticating users and authorised administrators.</li>
        <li>Providing community and institutional services.</li>
        <li>Maintaining temple, Dharamshala and Jain Centre directories.</li>
        <li>Managing bookings and events.</li>
        <li>Supporting monk safety and active Vihaar tracking.</li>
        <li>Managing visitor registration and security.</li>
        <li>Sending service-related notifications.</li>
        <li>Responding to support requests and complaints.</li>
        <li>Preventing fraud, unauthorised access and misuse.</li>
        <li>Maintaining platform functionality and security.</li>
        <li>Improving application performance.</li>
        <li>Meeting legal, accounting and regulatory requirements.</li>
      </ul>
      <p>Personal information will not be used for an unrelated purpose merely because it is available to the Foundation. Where required by law, the Foundation will obtain appropriate consent or establish another valid legal basis before processing.</p>
      </>
    ),
  },
  {
    heading: "5. Data Protection Principles",
    text: (
      <>
      <p><strong>The Foundation aims to follow these principles when handling personal information:</strong></p>
      <h4>5.1 Purpose Limitation</h4>
      <p>Information should be collected and processed for specified, lawful and relevant purposes.</p>
      <h4>5.2 Data Minimisation</h4>
      <p>Only information reasonably necessary for the relevant purpose should be collected.</p>
      <h4>5.3 Accuracy</h4>
      <p>Reasonable steps should be taken to maintain accurate and up-to-date information, particularly where inaccurate information could affect safety, access, identity verification or institutional operations.</p>
      <h4>5.4 Storage Limitation</h4>
      <p>Personal information should not be retained longer than necessary, subject to statutory retention and legal preservation requirements.</p>
      <h4>5.5 Confidentiality</h4>
      <p>Access to personal information should be restricted to authorised individuals and service providers who require it for their responsibilities.</p>
      <h4>5.6 Accountability</h4>
      <p>The Foundation aims to maintain appropriate policies, procedures, records and safeguards to demonstrate responsible handling of personal information.</p>
      </>
    ),
  },
  {
    heading: "6. Technical Security Measures",
    text: (
      <>
      <p>The Foundation will implement and maintain reasonable technical security measures appropriate to the nature of the information and the risks associated with its processing.</p>
      <p><strong>These measures may include:</strong></p>
      <h4>6.1 Secure Data Transmission</h4>
      <p>Where supported by the relevant service, information transmitted between JINANAM applications, websites, APIs and backend systems should be protected using secure encrypted communication protocols such as HTTPS and TLS.</p>
      <h4>6.2 Data Encryption</h4>
      <p>Appropriate encryption or equivalent safeguards should be used to protect personal information during transmission and, where technically supported and appropriate, while stored. Sensitive credentials, authentication tokens and other confidential information should receive additional protection.</p>
      <h4>6.3 Password and Authentication Security</h4>
      <p>The Foundation will use appropriate authentication safeguards to prevent unauthorised access.</p>
      <p><strong>These may include:</strong></p>
      <ul>
        <li>Secure password storage using suitable password-hashing methods.</li>
        <li>Protection against repeated or suspicious login attempts.</li>
        <li>Secure session management.</li>
        <li>Session expiry and token invalidation.</li>
        <li>Password reset and account recovery controls.</li>
        <li>Additional authentication safeguards for privileged accounts.</li>
      </ul>
      <p>Passwords should never be stored or transmitted in plain text.</p>
      <h4>6.4 Access Controls</h4>
      <p>Access to personal information and administrative functions will be restricted according to assigned roles and responsibilities. Access should be granted only to authorised individuals who require it for legitimate platform operations.</p>
      <h4>6.5 System and API Security</h4>
      <p>JINANAM will use reasonable safeguards to protect its backend systems, APIs, databases and application infrastructure against unauthorised access, manipulation, misuse and disruption.</p>
      <p><strong>Security measures may include:</strong></p>
      <ul>
        <li>API authentication and authorisation.</li>
        <li>Server-side permission checks.</li>
        <li>Input validation and sanitisation.</li>
        <li>Protection against common application vulnerabilities.</li>
        <li>Rate limiting and abuse prevention.</li>
        <li>Secure configuration of databases and infrastructure.</li>
        <li>Monitoring of suspicious system activity.</li>
      </ul>
      <h4>6.6 Backups and Recovery</h4>
      <p>The Foundation will maintain appropriate backup and recovery arrangements to support business continuity and reduce the risk of permanent data loss. Backup systems should be protected through suitable access restrictions and security measures.</p>
      <h4>6.7 Monitoring and Audit Trails</h4>
      <p>Relevant system and administrative activities may be recorded and monitored to detect unauthorised access, investigate security incidents and maintain accountability.</p>
      </>
    ),
  },
  {
    heading: "7. Role-Based Access and Administrative Security",
    text: (
      <>
      <p>JINANAM uses role-based access arrangements to manage permissions across its applications.</p>
      <p><strong>Depending on the service and role, access may be granted to:</strong></p>
      <ul>
        <li>Super Admins.</li>
        <li>Temple Admins.</li>
        <li>Dharamshala Admins.</li>
        <li>Sthanak Admins.</li>
        <li>Jain Centre Admins.</li>
        <li>Other authorised community administrators.</li>
        <li>Monk and Sadhvi representatives.</li>
        <li>Registered security personnel.</li>
      </ul>
      <p>The Foundation aims to apply the principle of least privilege, meaning that each user should receive only the access necessary to perform their assigned responsibilities.</p>
      <h4>7.1 Super Admin Access</h4>
      <p>Super Admin access may include broader platform administration and oversight responsibilities. Such access should be limited to authorised personnel and protected by appropriate authentication, monitoring and audit controls.</p>
      <h4>7.2 Sub-Administrator Access</h4>
      <p>Sub-administrators should have only the permissions assigned by an authorised Super Admin. They must not use their access to obtain unrelated personal information, create unauthorised accounts or perform actions outside their assigned responsibilities.</p>
      <h4>7.3 Administrative Accountability</h4>
      <p><strong>Relevant administrative actions may be recorded, including:</strong></p>
      <ul>
        <li>Account creation and modification.</li>
        <li>Role and permission changes.</li>
        <li>Institutional record updates.</li>
        <li>Access to restricted information.</li>
        <li>Changes to Vihaar routes and tracking settings.</li>
        <li>Security and visitor management actions.</li>
        <li>Other privileged operations.</li>
      </ul>
      </>
    ),
  },
  {
    heading: "8. Protection of Monk and Vihaar Location Information",
    text: (
      <>
      <p>The safety and privacy of monks and Sadhvis are important considerations in JiNANAM's tracking functionality.</p>
      <p><strong>The Foundation applies the following intended safeguards:</strong></p>
      <ol>
        <li>Monk GPS tracking is designed to operate only during an authorised active Vihaar route.</li>
        <li>Authorised representatives may start or stop tracking.</li>
        <li>Tracking automatically stops when the active route ends.</li>
        <li>Public visitors may see an approximate monk location.</li>
        <li>Registered members may access live location information according to the applicable platform permissions.</li>
        <li>Members may voluntarily join a route and share their location for that participation.</li>
        <li>Member location is not continuously collected in the background for this feature.</li>
        <li>Historical GPS records are retained for the ordinary 30-day retention period, unless a lawful preservation requirement applies.</li>
      </ol>
      <p>Access to tracking information should be restricted according to the user's role and the relevant route permissions.</p>
      <p>Users must not misuse, copy, publish or distribute monk location information in a manner that creates a safety or privacy risk.</p>
      </>
    ),
  },
  {
    heading: "9. Protection of Visitor and Security Information",
    text: (
      <>
      <p>JINANAM Security App supports visitor and entry management at participating institutions.</p>
      <p><strong>The Foundation will apply reasonable safeguards to protect visitor and security records, including:</strong></p>
      <ul>
        <li>Restricting access to authorised security personnel and administrators.</li>
        <li>Limiting access to records according to institutional responsibilities.</li>
        <li>Protecting member and visitor information from unauthorised disclosure.</li>
        <li>Maintaining relevant entry and access logs.</li>
        <li>Avoiding unnecessary collection of visitor information.</li>
        <li>Restricting the use of visitor information to legitimate security and institutional purposes.</li>
      </ul>
      <p>Security personnel must not access, copy or disclose visitor information for personal or unrelated purposes.</p>
      <p>JINANAM Security App does not collect staff location information as part of its visitor management functionality.</p>
      </>
    ),
  },
  {
    heading: "10. Third-Party Service Providers",
    text: (
      <>
      <p>The Foundation uses or may use third-party providers to operate and support JINANAM.</p>
      <p><strong>These may include:</strong></p>
      <table>
        <thead>
          <tr>
            <th>Provider / Service</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hostinger</td>
            <td>Hosting and infrastructure</td>
          </tr>
          <tr>
            <td>PostgreSQL</td>
            <td>Database technology</td>
          </tr>
          <tr>
            <td>Firebase</td>
            <td>Authentication and application-related services</td>
          </tr>
          <tr>
            <td>Firebase Cloud Messaging</td>
            <td>Push notifications</td>
          </tr>
          <tr>
            <td>Firebase Analytics</td>
            <td>Application usage analytics</td>
          </tr>
          <tr>
            <td>Crashlytics</td>
            <td>Crash reporting and diagnostics</td>
          </tr>
          <tr>
            <td>Google Maps</td>
            <td>Maps and location-related services</td>
          </tr>
          <tr>
            <td>Razorpay</td>
            <td>Payment processing when donations are enabled</td>
          </tr>
          <tr>
            <td>WhatsApp Business API</td>
            <td>Authorised communication services</td>
          </tr>
        </tbody>
      </table>
      <p>This list may change as the platform develops.</p>
      <p>Third-party providers may process personal information to deliver their services, maintain security, provide technical support or meet applicable legal requirements.</p>
      <p>The Foundation will take reasonable steps to ensure that relevant providers are subject to appropriate confidentiality, security and data-processing obligations.</p>
      <p><strong>Where required, contractual arrangements will address:</strong></p>
      <ul>
        <li>Permitted processing purposes.</li>
        <li>Confidentiality obligations.</li>
        <li>Appropriate security safeguards.</li>
        <li>Access restrictions.</li>
        <li>Assistance with data subject requests.</li>
        <li>Personal data breach notification and cooperation.</li>
        <li>Deletion or return of information when services end, subject to legal requirements.</li>
      </ul>
      <p>Third-party providers may also have independent responsibilities under their own applicable terms and privacy policies.</p>
      </>
    ),
  },
  {
    heading: "11. Data Storage and International Processing",
    text: (
      <>
      <p>The Foundation's primary data storage arrangement is in India.</p>
      <p>However, certain third-party providers may process or access information from other jurisdictions depending on their infrastructure, support arrangements and service configurations.</p>
      <p>Where personal information is transferred or accessed outside India, the Foundation will take reasonable steps to ensure that the processing complies with applicable Indian data protection requirements and any mandatory local laws.</p>
      <p>International users should also review the JiNANAM Privacy Policy for information about the collection and processing of their personal information.</p>
      </>
    ),
  },
  {
    heading: "12. Personal Data Breach and Security Incidents",
    text: (
      <>
      <p><strong>A personal data breach or security incident may include:</strong></p>
      <ul>
        <li>Unauthorised access to personal information.</li>
        <li>Accidental disclosure of personal information.</li>
        <li>Loss or theft of devices or records containing personal information.</li>
        <li>Unauthorised modification or destruction of information.</li>
        <li>Compromise of accounts or authentication credentials.</li>
        <li>Malware, ransomware or other malicious activity.</li>
        <li>Unauthorised access to databases, servers or application systems.</li>
        <li>Loss of confidentiality, integrity or availability of personal information.</li>
      </ul>
      <p>The Foundation will maintain an appropriate process to identify, assess, contain, investigate and respond to security incidents.</p>
      <h4>12.1 Incident Response</h4>
      <p><strong>Where a suspected incident is identified, the Foundation may:</strong></p>
      <ol>
        <li>Record and assess the incident.</li>
        <li>Identify affected systems and information.</li>
        <li>Restrict or suspend compromised access.</li>
        <li>Contain the incident and prevent further unauthorised activity.</li>
        <li>Investigate the cause and likely impact.</li>
        <li>Take appropriate corrective and preventive action.</li>
        <li>Preserve relevant evidence and records.</li>
        <li>Notify affected individuals and authorities where required by applicable law.</li>
        <li>Review the incident and strengthen safeguards to reduce recurrence.</li>
      </ol>
      <h4>12.2 Notification to Affected Individuals</h4>
      <p>Where a personal data breach requires notification under applicable law, the Foundation will notify affected individuals in the prescribed manner and within the applicable timeframe.</p>
      <p><strong>The communication may include:</strong></p>
      <ul>
        <li>A description of the nature and extent of the breach.</li>
        <li>Relevant timing information.</li>
        <li>The likely consequences for affected individuals.</li>
        <li>Measures taken or being taken to mitigate the risk.</li>
        <li>Steps individuals may take to protect themselves.</li>
        <li>Contact information for further assistance.</li>
      </ul>
      <h4>12.3 Notification to Authorities</h4>
      <p>The Foundation will report incidents to the relevant authorities where required by applicable law. This includes compliance with applicable personal data breach reporting requirements under the Digital Personal Data Protection Act and Rules when the relevant provisions are in force.</p>
      <p>The Foundation will also comply with applicable CERT-In reporting directions, including the six-hour reporting requirement for specified reportable cyber incidents where applicable.</p>
      <h4>12.4 No Unauthorised Disclosure</h4>
      <p>The Foundation will not intentionally disclose personal information to unauthorised persons. However, no digital platform or transmission method can be guaranteed to be completely secure. The Foundation will take reasonable steps to reduce risks but cannot guarantee that unauthorised access, cyberattacks or technical failures will never occur.</p>
      </>
    ),
  },
  {
    heading: "13. User Responsibilities",
    text: (
      <>
      <p>Users and administrators also play an important role in protecting their information and the security of JiNANAM.</p>
      <p><strong>Users should:</strong></p>
      <ul>
        <li>Keep their login credentials confidential.</li>
        <li>Use strong and unique passwords.</li>
        <li>Avoid sharing account access with unauthorised individuals.</li>
        <li>Log out from shared or public devices.</li>
        <li>Avoid opening suspicious links or attachments.</li>
        <li>Keep their devices and applications updated.</li>
        <li>Report suspected account compromise promptly.</li>
        <li>Provide accurate account information.</li>
        <li>Avoid sharing other people's personal information without proper authority.</li>
        <li>Use monk tracking and location information responsibly.</li>
      </ul>
      <p><strong>Administrators and institutional users must additionally:</strong></p>
      <ul>
        <li>Protect administrator credentials.</li>
        <li>Avoid sharing privileged access.</li>
        <li>Remove access when staff or representatives leave their roles.</li>
        <li>Use personal information only for assigned responsibilities.</li>
        <li>Report suspected misuse or unauthorised disclosure promptly.</li>
        <li>Maintain confidentiality of institutional and visitor records.</li>
      </ul>
      </>
    ),
  },
  {
    heading: "14. Children's Personal Information",
    text: (
      <>
      <p>JINANAM may be used by individuals under the age of 18, subject to applicable parental or guardian consent and child-protection requirements.</p>
      <p><strong>The Foundation will apply appropriate safeguards when processing children's personal information, including:</strong></p>
      <ul>
        <li>Obtaining verifiable parental or guardian consent where required.</li>
        <li>Restricting access to children's information.</li>
        <li>Avoiding unnecessary collection of children's information.</li>
        <li>Applying appropriate safety and moderation measures.</li>
        <li>Respecting applicable restrictions on tracking, monitoring, profiling and targeted advertising.</li>
        <li>Handling parental or guardian deletion requests in accordance with applicable law.</li>
      </ul>
      <p>The Foundation will not knowingly use children's information for prohibited or unrelated purposes.</p>
      </>
    ),
  },
  {
    heading: "15. Data Retention and Secure Deletion",
    text: (
      <>
      <p>Personal information will be retained in accordance with the JiNANAM Data Retention Policy.</p>
      <p><strong>The ordinary retention arrangements include:</strong></p>
      <ul>
        <li>Active account information: retained while the account remains active, subject to deletion requests and legal requirements.</li>
        <li>Monk and Vihaar historical GPS information: 30 days.</li>
        <li>Security and application audit logs: 365 days under the current retention schedule, subject to applicable statutory requirements.</li>
        <li>Donation and financial information: retained for the applicable statutory accounting and tax periods once donation functionality is introduced.</li>
        <li>Information subject to a legal hold: retained for the legally required period.</li>
      </ul>
      <p>When information is no longer required and no legal retention obligation applies, it will be deleted or anonymised using appropriate methods.</p>
      </>
    ),
  },
  {
    heading: "16. User Rights and Privacy Requests",
    text: (
      <>
      <p><strong>Subject to applicable law, individuals may have rights relating to their personal information, including:</strong></p>
      <ul>
        <li>Requesting information about personal data processing.</li>
        <li>Requesting correction or updating of inaccurate information.</li>
        <li>Requesting deletion of personal information.</li>
        <li>Withdrawing consent where processing is based on consent.</li>
        <li>Raising a grievance concerning the handling of personal information.</li>
        <li>Exercising other rights available under applicable data protection laws.</li>
      </ul>
      <p><strong>Requests may be submitted to:</strong></p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>For account deletion:</strong></p>
      <p><strong>Email:</strong> appsupport@jinanam.org</p>
      <p>The Foundation may request reasonable information to verify the identity and authority of the person making a request.</p>
      </>
    ),
  },
  {
    heading: "17. Compliance with Applicable Laws",
    text: (
      <>
      <p>The Foundation aims to comply with applicable Indian data protection, cybersecurity and information technology laws and relevant requirements in other jurisdictions where JINANAM services are offered.</p>
      <p><strong>These may include:</strong></p>
      <ul>
        <li>Digital Personal Data Protection Act, 2023.</li>
        <li>Digital Personal Data Protection Rules, 2025, as and when the relevant provisions become effective.</li>
        <li>Information Technology Act, 2000.</li>
        <li>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended, where applicable.</li>
        <li>CERT-In directions and applicable cybersecurity requirements.</li>
        <li>Other mandatory privacy and data protection laws applicable to the Foundation's activities.</li>
      </ul>
      <p>The DPDP Rules, 2025 have staggered commencement dates. The Foundation will implement the requirements according to their respective effective dates and applicable legal provisions.</p>
      <p>Where a mandatory legal requirement provides a higher level of protection or imposes an additional obligation, that requirement will prevail over any inconsistent provision in this policy.</p>
      </>
    ),
  },
  {
    heading: "18. Changes to This Policy",
    text: (
      <>
      <p><strong>Jain Vihaar Foundation may update this Data Protection &amp; Security Policy from time to time to reflect changes in:</strong></p>
      <ul>
        <li>Applicable laws and regulations.</li>
        <li>Technology and infrastructure.</li>
        <li>Security practices.</li>
        <li>Platform features and services.</li>
        <li>Third-party service providers.</li>
        <li>Data processing and retention arrangements.</li>
      </ul>
      <p>The latest version will be published on the JiNANAM website.</p>
      </>
    ),
  },
  {
    heading: "19. Contact Information",
    text: (
      <>
      <p><strong>For privacy, data protection and security-related concerns:</strong></p>
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

  "child-safety-standards": {
    title: "Child Safety Standards",
    intro:
      "JiNANAM is committed to maintaining a respectful and safe digital environment, particularly for children and young users who may interact with the platform.",
    sections: [
      {
    heading: "CHILD SAFETY STANDARDS",
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
      <p>Jain Vihaar Foundation ("Foundation", "we", "us" or "our"), operator of JiNANAM, is committed to providing a safe, respectful and responsible digital environment for children and young people who access the JiNANAM platform.</p>
      <p>JINANAM connects members, families, temples, Dharamshalas, Sthanaks, Jain Centres, monks, Sadhvis and other community participants. The Foundation recognises that children may interact with community information, institutional announcements, event information, photographs and other platform services.</p>
      <p>The safety, dignity, privacy and well-being of children are important priorities.</p>
      <p>This Child Safety Standards Policy establishes the rules, safeguards, reporting procedures and responsibilities applicable to children using JiNANAM.</p>
      </>
    ),
  },
  {
    heading: "2. Scope and Applicability",
    text: (
      <>
      <p><strong>This policy applies to:</strong></p>
      <ol>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App.</li>
        <li>JINANAM Tracking App.</li>
        <li>JINANAM Security App.</li>
        <li>JINANAM website and associated digital services.</li>
        <li>All users, members, administrators, institutional representatives, volunteers and other persons interacting with children through JiNANAM services.</li>
      </ol>
      <p>It applies to online interactions and to child-related information collected or processed through the platform.</p>
      </>
    ),
  },
  {
    heading: "3. Definition of a Child",
    text: (
      <>
      <p>For the purposes of this policy, a child means an individual who has not completed 18 years of age.</p>
      <p>This definition is consistent with the Digital Personal Data Protection Act, 2023.</p>
      <p>Additional age thresholds may apply under other laws in countries where JiNANAM operates. Where a local law provides stronger child protections, the applicable legal requirements will prevail.</p>
      </>
    ),
  },
  {
    heading: "4. Age Eligibility and Registration",
    text: (
      <>
      <p>JINANAM may permit individuals under 18 years of age to register for permitted services, subject to applicable legal requirements and appropriate parental or guardian consent.</p>
      <p><strong>Where required by law:</strong></p>
      <ul>
        <li>A parent or lawful guardian must provide verifiable consent before the child's personal information is processed.</li>
        <li>The Foundation may take reasonable steps to verify the parent's or guardian's identity and adult status.</li>
        <li>The child's access may be restricted until the required consent is obtained.</li>
      </ul>
      <p>The Foundation may suspend or restrict an account if required consent cannot be established or maintained.</p>
      <p>Providing an incorrect date of birth or falsely claiming to be an adult to bypass child-safety controls is prohibited.</p>
      </>
    ),
  },
  {
    heading: "5. Parental and Guardian Responsibility",
    text: (
      <>
      <p>Parents and lawful guardians are encouraged to supervise children's use of JiNANAM and help them understand safe online behaviour.</p>
      <p><strong>Parents and guardians should:</strong></p>
      <ul>
        <li>Provide accurate information during registration.</li>
        <li>Review the services and information their child can access.</li>
        <li>Avoid sharing a child's login credentials with unauthorised individuals.</li>
        <li>Explain the importance of not sharing personal information with strangers.</li>
        <li>Report suspicious behaviour, inappropriate content or suspected exploitation.</li>
        <li>Contact JINANAM if they believe their child's account or information is being misused.</li>
      </ul>
      <p>A parent or guardian may contact the Foundation to request information about the processing of their child's personal information, subject to identity and authority verification.</p>
      </>
    ),
  },
  {
    heading: "6. Collection and Protection of Children's Personal Information",
    text: (
      <>
      <p>JINANAM will seek to collect only information reasonably necessary for the relevant service and permitted purpose.</p>
      <p><strong>Depending on the feature used, information may include:</strong></p>
      <ul>
        <li>Child's name and permitted profile details.</li>
        <li>Age or date of birth, where required.</li>
        <li>Parent or guardian contact and consent information.</li>
        <li>Profile photograph, where permitted.</li>
        <li>Membership or institutional information.</li>
        <li>Event or booking information.</li>
        <li>Device and technical information necessary to operate the service.</li>
      </ul>
      <p>The Foundation will apply appropriate safeguards to children's information, including access restrictions, purpose limitation and appropriate retention and deletion controls.</p>
      <p>Children's personal information will not knowingly be sold or disclosed for unrelated commercial purposes.</p>
      </>
    ),
  },
  {
    heading: "7. Restrictions on Use of Children's Information",
    text: (
      <>
      <p>The Foundation will not knowingly use children's personal information in a manner that is prohibited by applicable law.</p>
      <p><strong>In particular, subject to applicable statutory exemptions and commencement provisions, the Foundation will observe restrictions relating to:</strong></p>
      <ul>
        <li>Processing likely to cause a detrimental effect on a child's well-being.</li>
        <li>Tracking or behavioural monitoring of children.</li>
        <li>Targeted advertising directed at children.</li>
        <li>Unauthorised disclosure or use of children's personal information.</li>
      </ul>
      <p>The Foundation will not use children's information to encourage harmful, exploitative or inappropriate interactions.</p>
      </>
    ),
  },
  {
    heading: "8. Child Safety in Community Interactions",
    text: (
      <>
      <p>JINANAM aims to maintain respectful and safe community interactions.</p>
      <p><strong>The following conduct is strictly prohibited:</strong></p>
      <ul>
        <li>Bullying, harassment or intimidation of children.</li>
        <li>Threatening, abusive or sexually inappropriate communication.</li>
        <li>Grooming or attempts to establish exploitative relationships with children.</li>
        <li>Requests for inappropriate photographs, videos or personal information.</li>
        <li>Sexual exploitation or solicitation of children.</li>
        <li>Sharing or distributing child sexual abuse material.</li>
        <li>Attempts to move interactions with children to private or unmonitored channels for exploitative purposes.</li>
        <li>Impersonating a parent, guardian, child or authorised representative.</li>
        <li>Any conduct intended to harm, manipulate, exploit or endanger a child.</li>
      </ul>
      <p>Users must not use JiNANAM to contact, approach or target children for unlawful or inappropriate purposes.</p>
      </>
    ),
  },
  {
    heading: "9. Photographs, Videos and Other Media",
    text: (
      <>
      <p>Users must respect children's privacy and dignity when uploading, sharing or distributing photographs or other media.</p>
      <p><strong>The following rules apply:</strong></p>
      <ul>
        <li>Do not upload or share intimate, sexually explicit or exploitative images of children.</li>
        <li>Do not publish a child's personal information without appropriate authority or consent.</li>
        <li>Do not use a child's photograph to harass, threaten, impersonate or exploit them.</li>
        <li>Do not manipulate or edit a child's image to create inappropriate or misleading material.</li>
        <li>Do not distribute images of children in circumstances that may expose them to harm.</li>
      </ul>
      <p>Where photographs of children are shared through institutional activities or community announcements, the responsible institution or authorised uploader must ensure that appropriate permission has been obtained.</p>
      <p>The Foundation may restrict or remove content that violates these standards or applicable law.</p>
      </>
    ),
  },
  {
    heading: "10. Location and Tracking Safety",
    text: (
      <>
      <p>JINANAM includes monk and Vihaar tracking functionality. Location information requires particular care where children may be involved.</p>
      <p><strong>The following safeguards apply:</strong></p>
      <ol>
        <li>Monk GPS tracking is intended to operate only during an authorised active Vihaar route.</li>
        <li>Public visitors may see approximate monk location information.</li>
        <li>Registered members may access live location information according to their permissions.</li>
        <li>Children's access to location-related information will be subject to applicable age, consent and safety restrictions.</li>
        <li>Children must not be encouraged to share their personal location publicly.</li>
        <li>A child's location must not be disclosed to unauthorised persons.</li>
        <li>Member participation in a route and location sharing must remain voluntary and subject to appropriate safeguards.</li>
      </ol>
      <p>The Foundation will not knowingly use JINANAM to facilitate stalking, targeting or exploitation of children.</p>
      </>
    ),
  },
  {
    heading: "11. Institutional and Event Safety",
    text: (
      <>
      <p>Temples, Dharamshalas, Sthanaks, Jain Centres and other participating institutions are responsible for maintaining appropriate child-safety practices during activities they organise.</p>
      <p><strong>Institutions and their authorised administrators should:</strong></p>
      <ul>
        <li>Obtain appropriate parental or guardian permission where required.</li>
        <li>Use children's information only for legitimate institutional purposes.</li>
        <li>Restrict access to children's records to authorised personnel.</li>
        <li>Avoid publishing unnecessary personal details of children.</li>
        <li>Ensure that event photographs and announcements respect children's privacy.</li>
        <li>Report suspected abuse, exploitation or safety risks promptly.</li>
        <li>Follow applicable child-protection laws and institutional safeguarding procedures.</li>
      </ul>
      <p>JINANAM's digital services do not replace the institution's responsibility to supervise children during physical events or activities.</p>
      </>
    ),
  },
  {
    heading: "12. Visitor Management and Security App",
    text: (
      <>
      <p>Where JINANAM Security App is used by an institution, visitor information relating to children must be handled responsibly.</p>
      <p><strong>Authorised security personnel and administrators must:</strong></p>
      <ul>
        <li>Use visitor information only for legitimate entry and security purposes.</li>
        <li>Avoid unnecessary disclosure of children's personal information.</li>
        <li>Restrict access to authorised personnel.</li>
        <li>Follow the institution's applicable child-protection and visitor-management procedures.</li>
        <li>Escalate suspicious or unauthorised attempts to access a child.</li>
      </ul>
      <p>JINANAM does not authorise security personnel to use visitor information to contact children for personal or unrelated purposes.</p>
      </>
    ),
  },
  {
    heading: "13. Reporting Child Safety Concerns",
    text: (
      <>
      <p>Any user, parent, guardian, institution or other concerned person may report suspected child-safety violations.</p>
      <p><strong>Reports may relate to:</strong></p>
      <ul>
        <li>Suspected grooming or exploitation.</li>
        <li>Bullying or harassment involving a child.</li>
        <li>Inappropriate photographs or other media.</li>
        <li>Unauthorised sharing of a child's information.</li>
        <li>Suspicious communication or contact.</li>
        <li>Attempts to obtain a child's location.</li>
        <li>Suspected child sexual abuse material.</li>
        <li>Any other conduct that may put a child at risk.</li>
      </ul>
      <p><strong>Reports may be submitted through the platform's reporting functionality, where available, or by contacting:</strong></p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Subject:</strong> URGENT - CHILD SAFETY REPORT</p>
      <p>Where there is immediate danger to a child, the reporting person should contact the appropriate local emergency services or child-protection authorities without waiting for a response from JINANAM.</p>
      </>
    ),
  },
  {
    heading: "14. Review and Response to Reports",
    text: (
      <>
      <p>The Foundation will review child-safety reports with appropriate priority.</p>
      <p><strong>Depending on the nature and seriousness of the report, the Foundation may:</strong></p>
      <ul>
        <li>Restrict access to the reported content.</li>
        <li>Remove content that violates this policy or applicable law.</li>
        <li>Temporarily suspend an account during investigation.</li>
        <li>Permanently suspend or ban an account.</li>
        <li>Restrict access to relevant features.</li>
        <li>Preserve relevant information and evidence where legally appropriate.</li>
        <li>Escalate the matter to appropriate authorities where required.</li>
        <li>Cooperate with lawful investigations.</li>
      </ul>
      <p>The Foundation may take immediate protective action where a child's safety appears to be at risk.</p>
      </>
    ),
  },
  {
    heading: "15. Child Sexual Abuse Material and Exploitation",
    text: (
      <>
      <p>JINANAM strictly prohibits the creation, upload, sharing, storage, distribution or promotion of child sexual abuse material or any material that sexually exploits or endangers a child.</p>
      <p><strong>Users must not:</strong></p>
      <ul>
        <li>Upload or distribute child sexual abuse material.</li>
        <li>Request or solicit sexual images from a child.</li>
        <li>Share links to child exploitation material.</li>
        <li>Attempt to groom or sexually exploit a child.</li>
        <li>Use JINANAM to facilitate trafficking, exploitation or abuse of children.</li>
      </ul>
      <p>The Foundation will take appropriate action upon identifying or receiving credible reports of such material or conduct. This may include restricting access, preserving relevant evidence where lawful, suspending accounts and reporting the matter to the appropriate authorities.</p>
      <p>The Foundation will comply with mandatory reporting obligations under applicable laws, including the Protection of Children from Sexual Offences Act, 2012 (POCSO), where applicable.</p>
      </>
    ),
  },
  {
    heading: "16. Enforcement and Account Restrictions",
    text: (
      <>
      <p><strong>Violations of this policy may result in one or more of the following actions:</strong></p>
      <ul>
        <li>Warning or formal notice.</li>
        <li>Removal or restriction of content.</li>
        <li>Temporary account suspension.</li>
        <li>Permanent account termination.</li>
        <li>Restriction of administrative privileges.</li>
        <li>Restriction from institutional or community services.</li>
        <li>Reporting to law-enforcement or child-protection authorities where required.</li>
      </ul>
      <p>The Foundation may take immediate action without prior notice in serious cases involving child safety, exploitation, abuse or unlawful conduct.</p>
      </>
    ),
  },
  {
    heading: "17. Confidentiality of Reports and Complaints",
    text: (
      <>
      <p>The Foundation will take reasonable steps to protect the confidentiality of individuals reporting child-safety concerns.</p>
      <p>Information about a report may be shared with authorised personnel, relevant institutions, service providers or authorities where necessary to investigate the matter, protect a child, comply with law or prevent further harm.</p>
      <p>The Foundation cannot guarantee absolute confidentiality where disclosure is legally required or necessary to address an immediate safety risk.</p>
      </>
    ),
  },
  {
    heading: "18. Cooperation with Parents, Guardians and Authorities",
    text: (
      <>
      <p>The Foundation may cooperate with parents, lawful guardians, child-protection organisations, law-enforcement agencies and other competent authorities in matters involving child safety.</p>
      <p>Where required by law, the Foundation will preserve and provide relevant information in response to valid legal requests.</p>
      <p>Nothing in this policy prevents a person from directly reporting a suspected offence to the appropriate authorities.</p>
      </>
    ),
  },
  {
    heading: "19. Policy Review and Updates",
    text: (
      <>
      <p><strong>The Foundation may update these Child Safety Standards to reflect changes in:</strong></p>
      <ul>
        <li>Applicable child-protection and privacy laws.</li>
        <li>Platform features and functionality.</li>
        <li>App Store and Google Play requirements.</li>
        <li>Safety risks and abuse patterns.</li>
        <li>Reporting and moderation procedures.</li>
      </ul>
      <p>The latest version will be published on the JiNANAM website.</p>
      </>
    ),
  },
  {
    heading: "20. Contact Information",
    text: (
      <>
      <p><strong>For child-safety concerns, parental requests or safeguarding complaints:</strong></p>
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

  "grievance-redressal": {
    title: "Grievance Redressal",
    intro:
      "JiNANAM aims to provide a transparent process for users to raise complaints, report concerns, and seek assistance regarding the platform and its services.",
    sections: [
  {
    heading: "GRIEVANCE REDRESSAL POLICY",
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
      <p>Jain Vihaar Foundation ("Foundation", "we", "us" or "our"), operator of the JiNANAM platform, is committed to providing a transparent, accessible and fair mechanism for receiving and resolving grievances.</p>
      <p>We recognise that users may have concerns regarding their accounts, personal information, community interactions, institutional services, monk tracking, visitor management, bookings, donations or any other aspect of the JINANAM platform.</p>
      <p>This Grievance Redressal Policy explains how individuals can submit complaints, how the Foundation handles grievances, the applicable response timelines and how unresolved matters may be escalated.</p>
      </>
    ),
  },
  {
    heading: "2. Scope and Applicability",
    text: (
      <>
      <p><strong>This policy applies to all JINANAM digital services, including:</strong></p>
      <ol>
        <li>JINANAM App.</li>
        <li>JINANAM Admin App.</li>
        <li>JINANAM Tracking App.</li>
        <li>JINANAM Security App.</li>
        <li>JINANAM website and associated digital services.</li>
      </ol>
      <p><strong>A grievance may be submitted by:</strong></p>
      <ul>
        <li>Registered members.</li>
        <li>Non-Jain users and other visitors.</li>
        <li>Parents and lawful guardians.</li>
        <li>Jain monks and Sadhvis or their authorised representatives.</li>
        <li>Temple, Dharamshala, Sthanak and Jain Centre administrators.</li>
        <li>Security personnel and institutional staff.</li>
        <li>Individuals whose personal information or rights may be affected by the platform.</li>
        <li>Any other person who has a legitimate concern relating to JiNANAM.</li>
      </ul>
      <p>A person does not necessarily need to hold a registered JINANAM account to submit a grievance.</p>
      </>
    ),
  },
  {
    heading: "3. Grievance Officer",
    text: (
      <>
      <p><strong>The Foundation has designated the following person to receive and handle grievances relating to JINANAM.</strong></p>
      <p><strong>Name:</strong> Saurabh Motta</p>
      <p><strong>Designation:</strong> Manager</p>
      <p><strong>Organisation:</strong> Jain Vihaar Foundation</p>
      <p><strong>Email:</strong> support@jinanam.org</p>
      <p><strong>Phone:</strong> +91 8693838281 / +918693838282</p>
      <p><strong>Correspondence Address:</strong></p>
      <p>12, First Floor, Londhe Building,</p>
      <p>Near Station, Mulund East,</p>
      <p>Mumbai - 400081, Maharashtra, India.</p>
      <p>The Grievance Officer is responsible for receiving grievances, coordinating their investigation, communicating decisions and facilitating appropriate resolution.</p>
      </>
    ),
  },
  {
    heading: "4. Types of Grievances Accepted",
    text: (
      <>
      <p>Individuals may submit grievances concerning any of the following matters.</p>
      <h4>4.1 Account and Registration Issues</h4>
      <ul>
        <li>Account registration or login problems.</li>
        <li>Incorrect profile information.</li>
        <li>Duplicate or unauthorised accounts.</li>
        <li>Member ID-related concerns.</li>
        <li>Unauthorised access to an account.</li>
        <li>Account suspension or termination disputes.</li>
        <li>Account deletion requests that have not been appropriately addressed.</li>
      </ul>
      <h4>4.2 Privacy and Data Protection</h4>
      <ul>
        <li>Unauthorised collection or disclosure of personal information.</li>
        <li>Incorrect or outdated personal information.</li>
        <li>Unauthorised access to account or institutional records.</li>
        <li>Location privacy concerns.</li>
        <li>Requests relating to personal information.</li>
        <li>Data deletion or consent-related complaints.</li>
        <li>Suspected personal data breaches.</li>
      </ul>
      <h4>4.3 Community and Content-Related Issues</h4>
      <ul>
        <li>Inappropriate or unlawful content.</li>
        <li>Harassment, bullying or threats.</li>
        <li>Religious or community-related abuse.</li>
        <li>Impersonation or fraudulent profiles.</li>
        <li>Copyright or intellectual property complaints.</li>
        <li>Misuse of photographs or personal information.</li>
        <li>Spam, misleading information or suspicious activity.</li>
        <li>Inappropriate comments or interactions.</li>
      </ul>
      <h4>4.4 Child Safety Complaints</h4>
      <ul>
        <li>Suspected grooming or exploitation.</li>
        <li>Inappropriate communication involving a child.</li>
        <li>Child privacy violations.</li>
        <li>Unauthorised use of children's photographs or information.</li>
        <li>Suspected child sexual abuse material.</li>
        <li>Any conduct that may put a child at risk.</li>
      </ul>
      <p>Child-safety grievances will receive urgent attention and may be escalated to the appropriate authorities where required by law.</p>
      <h4>4.5 Monk Tracking and Safety</h4>
      <ul>
        <li>Incorrect monk location information.</li>
        <li>Unauthorised access to live tracking.</li>
        <li>Tracking not stopping after a route ends.</li>
        <li>Unauthorised changes to an active Vihaar route.</li>
        <li>Misuse of monk or Sadhvi location information.</li>
        <li>Safety-related concerns involving tracking functionality.</li>
      </ul>
      <h4>4.6 Institutional and Administrative Issues</h4>
      <ul>
        <li>Unauthorised administrator access.</li>
        <li>Incorrect temple, Dharamshala or institutional information.</li>
        <li>Misuse of administrative permissions.</li>
        <li>Disputes concerning institutional account access.</li>
        <li>Unauthorised changes to institutional records.</li>
        <li>Visitor management or security-related complaints.</li>
      </ul>
      <h4>4.7 Booking, Event and Service Issues</h4>
      <p><strong>Where relevant services are enabled:</strong></p>
      <ul>
        <li>Booking requests and confirmations.</li>
        <li>Incorrect booking information.</li>
        <li>Room or facility allocation disputes.</li>
        <li>Event registration issues.</li>
        <li>Service-related communication failures.</li>
        <li>Other issues involving a JINANAM service.</li>
      </ul>
      <h4>4.8 Donation and Payment Issues</h4>
      <p><strong>Where donation functionality is enabled:</strong></p>
      <ul>
        <li>Payment confirmation issues.</li>
        <li>Incorrect donation records.</li>
        <li>Receipt-related complaints.</li>
        <li>Duplicate or failed transactions.</li>
        <li>Refund-related concerns.</li>
        <li>Suspected fraudulent payment requests.</li>
      </ul>
      <h4>4.9 Technical and Application Issues</h4>
      <ul>
        <li>Application crashes or errors.</li>
        <li>Login and authentication failures.</li>
        <li>Notifications not being delivered.</li>
        <li>Incorrect information displayed by the platform.</li>
        <li>Security vulnerabilities.</li>
        <li>Website or service availability problems.</li>
        <li>Other technical concerns.</li>
      </ul>
      </>
    ),
  },
  {
    heading: "5. How to Submit a Grievance",
    text: (
      <>
      <p>An individual may submit a grievance through any of the following channels.</p>
      <h4>5.1 Email</h4>
      <p><strong>Send an email to:</strong></p>
      <p>support@jinanam.org</p>
      <p><strong>The email should contain:</strong></p>
      <ul>
        <li>Full name of the complainant.</li>
        <li>Registered mobile number or email address, if applicable.</li>
        <li>JINANAM Member ID, if available.</li>
        <li>Application or service involved.</li>
        <li>Description of the grievance.</li>
        <li>Date and approximate time of the incident.</li>
        <li>Relevant screenshots, documents or other supporting information, where available.</li>
        <li>Preferred method of communication.</li>
      </ul>
      <p>For urgent child-safety or security-related matters, clearly mention URGENT in the subject line.</p>
      <h4>5.2 Phone</h4>
      <p><strong>Individuals may contact the Grievance Officer at:</strong></p>
      <p>+91 8693838281</p>
      <p>+91 8693838282</p>
      <p>Phone calls may be used to explain a concern or seek assistance. Where a formal investigation or written decision is required, the individual may be requested to submit the complaint by email or through the platform's grievance facility.</p>
      <h4>5.3 In-App Grievance Submission</h4>
      <p>Where available, users may submit a grievance through the Help &amp; Support or Grievance section of the relevant JINANAM application.</p>
      <p>The Foundation will provide an accessible route for submitting grievances without requiring users to search for contact information.</p>
      <h4>5.4 Website</h4>
      <p><strong>Individuals may also submit grievances using the contact or grievance facility published on:</strong></p>
      <p>https://www.jinanam.org</p>
      </>
    ),
  },
  {
    heading: "6. Information Required for a Grievance",
    text: (
      <>
      <p>To help the Foundation investigate a complaint efficiently, the complainant should provide sufficient information to identify the issue.</p>
      <p>The Foundation may request additional information where reasonably necessary.</p>
      <p>A complaint should not be rejected merely because the complainant does not possess every suggested document or detail.</p>
      <p>Where a complaint concerns another person's information, the Foundation may require evidence of lawful authority before disclosing account-specific information or taking certain actions.</p>
      </>
    ),
  },
  {
    heading: "7. Acknowledgement of Grievances",
    text: (
      <>
      <p>The Foundation will acknowledge receipt of grievances through the contact method provided by the complainant.</p>
      <p>Where the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended, apply to the Foundation in its capacity as an intermediary, the applicable statutory acknowledgement requirement will be followed.</p>
      <p>The current general acknowledgement period under Rule 3(2)(a)(i) is 24 hours from receipt of the grievance.</p>
      <p><strong>An acknowledgement may include:</strong></p>
      <ul>
        <li>Confirmation that the complaint has been received.</li>
        <li>A grievance reference or ticket number, where available.</li>
        <li>The date of registration.</li>
        <li>The next steps in the process.</li>
        <li>Any additional information required.</li>
      </ul>
      <p>Acknowledgement does not necessarily mean that the complaint has been accepted or that the alleged violation has been established.</p>
      </>
    ),
  },
  {
    heading: "8. Grievance Investigation and Resolution",
    text: (
      <>
      <p>The Foundation will review each grievance fairly and according to its nature, urgency and complexity.</p>
      <p><strong>The investigation may include:</strong></p>
      <ol>
        <li>Reviewing the complaint and supporting documents.</li>
        <li>Identifying the relevant account, application or service.</li>
        <li>Reviewing available system records and audit logs.</li>
        <li>Seeking clarification from the complainant.</li>
        <li>Contacting the relevant administrator or service team.</li>
        <li>Assessing the applicable policy and legal requirements.</li>
        <li>Taking appropriate corrective or preventive action.</li>
        <li>Communicating the outcome to the complainant.</li>
      </ol>
      <p>The Foundation may refer a complaint to an appropriate internal team or authorised service provider for investigation, while maintaining responsibility for grievance handling.</p>
      </>
    ),
  },
  {
    heading: "9. Grievance Resolution Timelines",
    text: (
      <>
      <p>The Foundation aims to resolve grievances as promptly as reasonably possible.</p>
      <p><strong>Where applicable under the Information Technology Rules, the following statutory timelines will be followed:</strong></p>
      <table>
        <thead>
          <tr>
            <th>Grievance action</th>
            <th>Applicable timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acknowledgement of grievance</td>
            <td>Within 24 hours</td>
          </tr>
          <tr>
            <td>General grievance resolution</td>
            <td>Within 7 days</td>
          </tr>
          <tr>
            <td>Certain specified content-removal grievances</td>
            <td>Within 36 hours</td>
          </tr>
          <tr>
            <td>Certain complaints involving intimate imagery, nudity or impersonation</td>
            <td>Applicable 24-hour removal or disabling-access requirement</td>
          </tr>
        </tbody>
      </table>
      <p>The 36-hour timeline applies only to the categories specified in the applicable IT Rules. The 24-hour content-removal requirement applies to the categories specified under Rule 3(2)(b).</p>
      <p>Other complaints may require additional investigation, particularly where they involve complex technical issues, third parties, legal proceedings or verification of identity and authority.</p>
      <p>Where a statutory timeline applies, it will take precedence over any longer internal target.</p>
      </>
    ),
  },
  {
    heading: "10. Urgent and Safety-Related Grievances",
    text: (
      <>
      <p>Certain grievances may require immediate attention because of the risk of harm to individuals or the community.</p>
      <p><strong>These include:</strong></p>
      <ul>
        <li>Child abuse or exploitation concerns.</li>
        <li>Threats of physical harm.</li>
        <li>Suspected stalking or misuse of monk location information.</li>
        <li>Unauthorised disclosure of sensitive personal information.</li>
        <li>Suspected account takeover or serious security incidents.</li>
        <li>Intimate imagery or impersonation complaints covered by applicable law.</li>
        <li>Other matters requiring urgent protective action.</li>
      </ul>
      <p>The Foundation may take interim action before completing the full investigation.</p>
      <p><strong>Such action may include:</strong></p>
      <ul>
        <li>Restricting access to reported content.</li>
        <li>Temporarily suspending an account.</li>
        <li>Disabling relevant features.</li>
        <li>Revoking unauthorised access.</li>
        <li>Preserving relevant records where legally appropriate.</li>
        <li>Escalating the matter to law-enforcement or other competent authorities where required.</li>
      </ul>
      <p>Where a person faces immediate physical danger, they should contact the appropriate emergency services or authorities directly rather than relying solely on JiNANAM's grievance process.</p>
      </>
    ),
  },
  {
    heading: "11. Content Removal and User Complaints",
    text: (
      <>
      <p>Where a grievance requests removal or disabling access to content, the Foundation will assess the complaint under applicable law and its Content Reporting Policy.</p>
      <p><strong>The Foundation may consider:</strong></p>
      <ul>
        <li>The nature of the reported content.</li>
        <li>The rights and interests of the affected person.</li>
        <li>Applicable legal requirements.</li>
        <li>Whether the content creates a safety or privacy risk.</li>
        <li>Whether removal, restriction or another corrective measure is appropriate.</li>
      </ul>
      <p>Where applicable, the Foundation will follow the statutory timelines for specified categories of content.</p>
      <p>The Foundation may also preserve relevant information where required by law or necessary for a legitimate investigation.</p>
      </>
    ),
  },
  {
    heading: "12. Privacy and Confidentiality of Grievances",
    text: (
      <>
      <p>The Foundation will handle grievance-related personal information responsibly.</p>
      <p>Information submitted in a complaint may be accessed by authorised personnel who require it to investigate and resolve the matter.</p>
      <p><strong>The Foundation may disclose relevant information to:</strong></p>
      <ul>
        <li>The complainant.</li>
        <li>The person or institution against whom the complaint is made, where necessary for a fair investigation.</li>
        <li>Authorised internal personnel.</li>
        <li>Relevant service providers assisting with investigation.</li>
        <li>Competent government authorities or law-enforcement agencies where required by law.</li>
      </ul>
      <p>The Foundation will take reasonable steps to avoid unnecessary disclosure of complaint details and the identity of complainants.</p>
      <p>However, absolute confidentiality cannot be guaranteed where disclosure is necessary for a lawful investigation, safety protection or legal compliance.</p>
      </>
    ),
  },
  {
    heading: "13. Outcome and Communication",
    text: (
      <>
      <p>After reviewing a grievance, the Foundation will communicate its decision or the action taken through an appropriate communication channel.</p>
      <p><strong>Depending on the matter, the outcome may include:</strong></p>
      <ul>
        <li>Complaint resolved.</li>
        <li>Corrective action completed.</li>
        <li>Content removed or restricted.</li>
        <li>Account or access restrictions applied.</li>
        <li>Additional information requested.</li>
        <li>Complaint referred to another authorised department.</li>
        <li>Complaint rejected with an explanation.</li>
        <li>Complaint closed because the matter is outside the Foundation's responsibility.</li>
      </ul>
      <p>Where appropriate, the Foundation may provide a brief explanation of the decision.</p>
      <p>The Foundation may withhold confidential information about another person, internal security measures or legally protected investigation details.</p>
      </>
    ),
  },
  {
    heading: "14. Reconsideration and Internal Escalation",
    text: (
      <>
      <p>If a complainant is dissatisfied with the outcome, they may request reconsideration by replying to the grievance communication or writing to:</p>
      <p>support@jinanam.org</p>
      <p><strong>The request should include:</strong></p>
      <ul>
        <li>Original grievance reference number, if available.</li>
        <li>Reasons for disagreement.</li>
        <li>Additional information or evidence, if any.</li>
        <li>The specific outcome or corrective action requested.</li>
      </ul>
      <p>The Foundation may assign the matter to a senior authorised representative for further review.</p>
      <p>A request for reconsideration does not suspend or extend any statutory appeal period.</p>
      </>
    ),
  },
  {
    heading: "15. Appeal to the Grievance Appellate Committee",
    text: (
      <>
      <p>Where the Information Technology Rules apply and the complainant is eligible to appeal, the complainant may approach the Government of India's Grievance Appellate Committee (GAC).</p>
      <p><strong>An appeal may generally be filed:</strong></p>
      <ul>
        <li>Within 30 days after receiving the decision of the intermediary's Grievance Officer; or</li>
        <li>Where the intermediary has not responded, within the applicable period described by the GAC.</li>
      </ul>
      <p>The GAC provides an online appeal mechanism for eligible grievances against intermediaries.</p>
      <p><strong>Official website:</strong></p>
      <p>https://gac.gov.in</p>
      <p>The complainant should first approach JINANAM's Grievance Officer and retain the complaint reference and relevant correspondence.</p>
      <p>The availability of a GAC appeal depends on the applicable law and the nature of the complaint. It is not a replacement for remedies available before courts, regulators or other competent authorities.</p>
      </>
    ),
  },
  {
    heading: "16. Complaints Outside JINANAM's Direct Control",
    text: (
      <>
      <p>Certain matters may involve independent institutions, service providers, payment providers, telecommunications companies, banks or other third parties.</p>
      <p>JINANAM will review complaints relating to its own platform and responsibilities. However, the Foundation may not be able to independently determine or resolve disputes that fall entirely within another organisation's control.</p>
      <p><strong>Where appropriate, the Foundation may:</strong></p>
      <ul>
        <li>Explain the relevant third-party process.</li>
        <li>Refer the complainant to the responsible organisation.</li>
        <li>Share relevant transaction or service information with the complainant, subject to applicable law.</li>
        <li>Cooperate with the relevant provider or authority.</li>
      </ul>
      <p>This does not limit the Foundation's responsibility for its own actions or obligations.</p>
      </>
    ),
  },
  {
    heading: "17. Malicious or Abusive Complaints",
    text: (
      <>
      <p>The Foundation encourages users to report genuine concerns in good faith.</p>
      <p><strong>However, the grievance process must not be misused to:</strong></p>
      <ul>
        <li>Harass or threaten another person.</li>
        <li>Submit knowingly false allegations.</li>
        <li>Impersonate another individual.</li>
        <li>Submit repeated complaints solely to disrupt platform operations.</li>
        <li>Obtain another person's confidential information.</li>
        <li>Intentionally obstruct investigations.</li>
      </ul>
      <p>The Foundation may take appropriate action against demonstrably abusive or fraudulent use of the grievance mechanism.</p>
      <p>A complaint will not be treated as malicious merely because it is not substantiated.</p>
      </>
    ),
  },
  {
    heading: "18. Record Keeping",
    text: (
      <>
      <p>The Foundation may maintain grievance records for appropriate operational, security, legal and regulatory purposes.</p>
      <p><strong>Such records may include:</strong></p>
      <ul>
        <li>Grievance reference number.</li>
        <li>Date and time of receipt.</li>
        <li>Complainant details.</li>
        <li>Complaint category.</li>
        <li>Supporting documents.</li>
        <li>Investigation notes.</li>
        <li>Actions taken.</li>
        <li>Decision and communication details.</li>
        <li>Escalation or appeal information.</li>
      </ul>
      <p>Grievance records will be retained according to applicable legal requirements and the Foundation's Data Retention Policy.</p>
      </>
    ),
  },
  {
    heading: "19. No Retaliation",
    text: (
      <>
      <p>The Foundation does not permit retaliation against individuals who submit genuine grievances in good faith.</p>
      <p>Users should be able to report concerns without being threatened, harassed or unfairly penalised merely for raising a legitimate complaint.</p>
      <p>This protection does not prevent the Foundation from taking appropriate action against proven misuse of the platform or grievance mechanism.</p>
      </>
    ),
  },
  {
    heading: "20. Policy Updates",
    text: (
      <>
      <p><strong>The Foundation may update this policy to reflect changes in:</strong></p>
      <ul>
        <li>Applicable laws and regulations.</li>
        <li>Government grievance procedures.</li>
        <li>JINANAM features and services.</li>
        <li>Internal grievance handling procedures.</li>
        <li>Contact details and designated personnel.</li>
      </ul>
      <p>The latest version will be published on the JiNANAM website.</p>
      </>
    ),
  },
  {
    heading: "21. Official Contact Details",
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
};

function PrivacySafetyPage() {
  const slug =
    window.location.pathname.replace(/\/+$/, "").split("/").pop() || "";

  const page = privacySafetyContent[slug];

  if (!page) {
    return (
      <main className="privacy-safety-page">
        <div className="privacy-safety-container">
          <h1>Page Not Found</h1>
          <p>The requested Privacy & Safety page could not be found.</p>
          <a href="/">Return to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="privacy-safety-page">
      <div className="privacy-safety-container">
        <a href="/" className="privacy-safety-back">
          ← Back to Home
        </a>

        <div className="privacy-safety-header">
          <span className="privacy-safety-eyebrow">
            JiNANAM • PRIVACY & SAFETY
          </span>

          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>

        <div className="privacy-safety-content">
          {page.sections.map((section) => (
            <section
              className="privacy-safety-section"
              key={section.heading}
            >
              <h2>{section.heading}</h2>
              {typeof section.text === "string" ? (
                <p>{section.text}</p>
              ) : (
                section.text
              )}
            </section>
          ))}
        </div>

        <div className="privacy-safety-footer">
          <p>
            Have questions or need assistance? Our team is here to help.
          </p>

          <a href="/contact" className="privacy-safety-contact">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

export default PrivacySafetyPage;
