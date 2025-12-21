# Data Mapper V1

A modern, retro-styled data mapping tool for matching records between two datasets (CSV/Excel files). Built with vanilla HTML, CSS, and JavaScript.

## Features

- **File Upload**: Support for CSV and Excel files with multiple sheets
- **Intelligent Matching**: Advanced fuzzy matching algorithm with configurable match columns
- **Column Selection**: Flexible column matching and reference column selection
- **Output Control**: Customizable output column ordering
- **Filtering & Sorting**: Filter results by match status and sort by confidence
- **Export**: Export results to Excel or CSV format

## Usage

1. Upload your **Source file** (CSV or Excel)
2. Upload your **Target file** (CSV or Excel)
3. Configure matching columns by selecting match columns from each file
4. Optionally select reference columns to include in output
5. Click **"Run Mapping"** to generate matches
6. Review results, filter, and sort as needed
7. Export results using **"Export to Excel"** or **"Export to CSV"**

## Design

Modern-retro Windows 2005/XP aesthetic with Apple-level polish - a nostalgic interface executed with 2025 craftsmanship.

## Deployment

This is a single-page application (SPA) that can be hosted on any static hosting service:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `index.html` file or connect via Git
- **GitHub Pages**: Enable in repository settings
- **Any static host**: Simply upload `index.html`

## Technical Details

- Pure vanilla JavaScript (no frameworks)
- Uses SheetJS library for Excel/CSV parsing
- Client-side processing (no server required)
- Modern matching algorithm with fuzzy string matching

