# Salesforce Lead Object: Fields and Validation

| Field Name          | API Name       | Type      | Required | Validation/Notes                |
|---------------------|----------------|-----------|----------|---------------------------------|
| First Name          | FirstName      | Text      | No       |                                 |
| Last Name           | LastName       | Text      | Yes      |                                 |
| Company             | Company        | Text      | Yes      |                                 |
| Email               | Email          | Email     | Yes      | Must be unique/valid format     |
| Phone               | Phone          | Phone     | No       |                                 |
| Lead Source         | LeadSource     | Picklist  | Yes      | e.g., Form, Email, Call         |
| Status              | Status         | Picklist  | Yes      | (New, Working, Qualified, Lost) |
| Owner               | OwnerId        | Lookup    | Yes      | Assigned automatically          |
| ... (add more)      |                |           |          |                                 |

## Validation Rules
- Email must be unique (no duplicate Emails in Lead).
- Required fields: Last Name, Company, Email, Lead Source, Status.

## Validation Rules

### `Lead_RequireStatusSource`
- **Formula**:
  ```
  OR(
    ISBLANK(TEXT(Status)),
    ISBLANK(TEXT(LeadSource))
  )
  ```
- **Error Message**: Status and Source are required.

