# Zendesk Severity Highlighter

Color-codes Zendesk support tickets by severity level.

## Features
- Sev1: Red (Critical)
- Sev2: Orange (High)
- Sev3: Yellow (Medium)
- Sev4: Green (Low)

## Installation
Install from Firefox Add-ons store or load manually.

## Privacy
This extension does not collect any data and only runs on Zendesk pages.
```

### Step 3: Create a ZIP File

1. **Select all your extension files**:
   - `manifest.json`
   - `content.js`
   - `styles.css`
   - `icon-48.png`
   - `icon-96.png`
   - `README.md` (optional)

2. **Right-click** and select "Compress" or "Send to → Compressed folder"
3. **Name it**: `zendesk-highlighter-1.0.0.zip`

**Important**: Don't zip the folder itself - zip the files inside. When you open the ZIP, you should see `manifest.json` directly, not a folder.

### Step 4: Submit to Mozilla

1. Go to https://addons.mozilla.org/developers/
2. Click **"Submit a New Add-on"**
3. Click **"On this site"** (for listed add-ons) or **"On your own"** (for self-distribution)

**Choose your distribution:**
- **"On this site"**: Public listing, anyone can install (goes through review)
- **"On your own"**: Self-hosted, you get a signed XPI file to share privately

### Step 5: Upload Your Extension

1. **Upload your ZIP file**
2. Mozilla will automatically validate it
3. Fix any validation errors if they appear
4. Click **"Continue"**

### Step 6: Fill Out the Listing Details

You'll need to provide:

**Required:**
- **Add-on name**: Zendesk Severity Highlighter
- **Summary**: Brief description (max 250 chars)
  - Example: "Color-codes Zendesk support tickets by severity level (Sev1-4) with vibrant colors for easier prioritization and faster ticket triage."
- **Categories**: Select "Productivity" and/or "Other"

**Recommended:**
- **Detailed description**: Explain what it does
- **Screenshots**: Take screenshots of your Zendesk page showing the highlighting
- **Version notes**: "Initial release with Sev1-4 color coding"
- **License**: MIT or Mozilla Public License 2.0

**Example Detailed Description:**
```
Zendesk Severity Highlighter makes it easier to quickly identify and prioritize 
support tickets based on their severity level.

Features:
- Sev1 (Critical) - Highlighted in bright red
- Sev2 (High) - Highlighted in orange  
- Sev3 (Medium) - Highlighted in yellow
- Sev4 (Low) - Highlighted in green

The extension adds visual color coding to both the severity cell and the entire 
ticket row, making it easy to scan your ticket queue at a glance.

Privacy: This extension does not collect, store, or transmit any data. It only 
applies visual styling to Zendesk pages you visit.
