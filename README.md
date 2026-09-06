# Pradeep Kandala - Personal Website

A clean, thoughtful personal website for a senior software engineer built with React and Vite.

## Features

- Responsive design
- Smooth scrolling navigation
- Sticky header
- Sections: Hero, About, Principles, Projects, Writing, Contact

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Deployment

This project is ready to deploy on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## Technologies

- React 18
- Vite
- Plain CSS
- ESLint

## Resume download

The hero downloads `public/Pradeep_Kumar_Kandala_Master_CV.pdf`.
Replace that file with an updated PDF using the same filename to keep the link working.

## Visitor analytics (Vercel)

Production builds load Vercel Web Analytics without an additional dependency.
The Vite development server does not load tracking.

1. Open the Vercel project dashboard, select **Analytics**, and enable **Web Analytics**.
2. Deploy these changes, including the resume PDF.
3. Visit the deployed site, then check **Analytics** for visitors and page views.

Data collection starts after enablement and deployment; it does not backfill earlier visits.
The tracking endpoint is provided by Vercel, so a local production preview will not collect analytics.
Visitor totals are analytics estimates, not an exact count of individual people.

Setup reference: https://vercel.com/docs/analytics/quickstart
