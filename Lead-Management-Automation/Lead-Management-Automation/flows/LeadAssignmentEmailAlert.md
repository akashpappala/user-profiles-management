# Lead Assignment Email Alert

**Purpose:** Notify newly assigned Lead Owner by email after Lead assignment.

## Steps
1. Go to Setup → Email Alerts in Salesforce.
2. Click "New Email Alert".
3. Choose Object: Lead.
4. Set Recipient: Owner (Assigned via Flow).
5. Use an Email Template (create or select one) with Lead details:
   - Subject: "New Lead Assigned: {!Lead.Name}"
   - Body: "You have been assigned a new Lead - {!Lead.Name}, {!Lead.Company}, Status: {!Lead.Status}"
6. In the Lead Assignment Flow, after Owner assignment, add Action: Email Alert. Use the Email Alert you just created.

**Validation:**
- When a new Lead is assigned, the Owner receives the email alert with all Lead information.

