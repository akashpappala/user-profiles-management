# Lead Assignment Flow (Record-Triggered)

**Trigger:** When a Lead is created  
**Criteria:** (example: Lead Source = Website)  
**Action:** Assign Lead Owner based on rules (e.g., round robin or territory match)

## Steps:
1. Navigate: Setup > Flows > New Flow
2. Select Record-Triggered Flow, Object: Lead
3. Set Trigger: Only when record is created
4. Create Decision logic (if needed, e.g., Source, Region)
5. Add Assignment element: Assign Owner from Sales team
6. Save, activate, and test

**Validation:**  
- Created Lead automatically assigned to correct Owner.
