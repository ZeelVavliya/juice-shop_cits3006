# OWASP Juice Shop - CITS3006 Custom Configuration

This is a customized version of OWASP Juice Shop configured specifically for CITS3006 penetration testing exercises. It contains **8 main challenges** focusing on the most important vulnerability categories for learning, plus 3 additional helper challenges that ensure the application functions properly.

## Available Challenges

### 🗃️ SQL Injection (3 challenges)
1. **Login Admin** (⭐⭐) - `loginAdminChallenge`
   - Log in with the administrator's user account using SQL injection
   - **Category:** Injection
   - **Hint:** Try SQL injection on the login form

2. **Database Schema** (⭐⭐⭐) - `dbSchemaChallenge`
   - Exfiltrate the entire DB schema definition via SQL Injection
   - **Category:** Injection
   - **Hint:** Find an endpoint that allows you to query database metadata

3. **User Credentials** (⭐⭐⭐⭐) - `unionSqlInjectionChallenge`
   - Retrieve a list of all user credentials via SQL Injection
   - **Category:** Injection
   - **Hint:** Use UNION SELECT to join data from the users table

### 🔗 Cross-Site Scripting - XSS (3 challenges)
1. **DOM XSS** (⭐) - `localXssChallenge`
   - Perform a DOM XSS attack with `<iframe src="javascript:alert(\`xss\`)">`
   - **Category:** XSS
   - **Hint:** Look for input fields where content appears in HTML output

2. **API-only XSS** (⭐⭐⭐) - `restfulXssChallenge`
   - Perform a persisted XSS attack without using the frontend application
   - **Category:** XSS
   - **Hint:** Work directly with the server-side API endpoints

3. **Client-side XSS Protection** (⭐⭐⭐) - `persistedXssUserChallenge`
   - Perform a persisted XSS attack bypassing client-side security mechanisms
   - **Category:** XSS
   - **Hint:** Bypass validation by manipulating requests directly

### 📁 Directory Traversal (2 challenges)
1. **Confidential Document** (⭐) - `directoryListingChallenge`
   - Access a confidential document through directory traversal
   - **Category:** Sensitive Data Exposure
   - **Hint:** Tamper with file delivery links

2. **Forgotten Sales Backup** (⭐⭐⭐⭐) - `forgottenBackupChallenge`
   - Access a salesman's forgotten backup file
   - **Category:** Sensitive Data Exposure
   - **Hint:** Trick security mechanisms by manipulating file types

## Quick Start

### Windows
```bash
start-cits3006.bat
```

### Linux/macOS
```bash
./start-cits3006.sh
```

### Manual Start
```bash
# Set the custom configuration
set NODE_ENV=cits3006        # Windows
export NODE_ENV=cits3006     # Linux/macOS

# Start the application
npm start
```

The application will be available at: **http://localhost:3000**

## Configuration Files

- **`config/cits3006.yml`** - Custom configuration with optimized settings
- **`data/static/challenges.yml`** - Contains only the 7 specified challenges
- **`data/static/challenges.yml.backup`** - Backup of original challenges

## Key Features

✅ **Only 7 challenges** - Focused learning experience
✅ **All environments supported** - Removed environment restrictions
✅ **Tutorial mode enabled** - Built-in hints and guidance
✅ **Safety mode disabled** - All challenges fully functional
✅ **Simplified interface** - Reduced distractions

## Restoring Original Configuration

To restore all challenges:
```bash
# Restore the backup
cp data/static/challenges.yml.backup data/static/challenges.yml

# Use default configuration
set NODE_ENV=development     # Windows
export NODE_ENV=development  # Linux/macOS
npm start
```

## Challenge Categories Mapping

| Vulnerability Type | Challenge Count | Difficulty Range |
|-------------------|----------------|------------------|
| SQL Injection     | 3              | ⭐⭐ to ⭐⭐⭐⭐        |
| XSS               | 3              | ⭐ to ⭐⭐⭐         |
| Directory Traversal| 2              | ⭐ to ⭐⭐⭐⭐        |

## Learning Path Recommendation

1. **Start with easy challenges (⭐)**:
   - Confidential Document
   - DOM XSS

2. **Progress to medium challenges (⭐⭐-⭐⭐⭐)**:
   - Login Admin
   - Database Schema
   - API-only XSS
   - Client-side XSS Protection

3. **Tackle advanced challenges (⭐⭐⭐⭐)**:
   - User Credentials
   - Forgotten Sales Backup

## Support

- Use the built-in hint system (click the hint button on each challenge)
- Check the Score Board at `http://localhost:3000/#/score-board`
- Refer to OWASP documentation links provided in challenge descriptions

---
**Created for CITS3006 Penetration Testing Course**
*Custom configuration by Claude Code Assistant*