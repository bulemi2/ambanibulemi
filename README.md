# Data Analyst Portfolio Website

A professional portfolio website for data analysts built with React, TypeScript, and Express.js.

## Features

- **Modern Design**: Clean, professional layout with data-focused color scheme
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**: 
  - Hero section with professional introduction
  - About section with statistics and achievements
  - Skills showcase with progress indicators
  - Featured projects with case studies
  - Services offerings with pricing
  - Blog section for articles and tutorials
  - Contact form with validation
- **Backend Integration**: Express.js server with contact form handling
- **Professional UI**: Built with shadcn/ui components and Tailwind CSS

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- React Hook Form with Zod validation
- TanStack Query for data fetching
- Wouter for routing

**Backend:**
- Express.js with TypeScript
- In-memory storage (easily replaceable with database)
- Zod for request validation
- CORS enabled for development

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

The application runs both frontend and backend on the same port (5000) for seamless development.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript types
│   └── schema.ts         # Data schemas and validation
└── components.json       # shadcn/ui configuration
```

## Customization

### Personal Information
Update the following files with your information:

1. **client/index.html** - Page title and meta description
2. **client/src/components/hero-section.tsx** - Name, title, and introduction
3. **client/src/components/about-section.tsx** - Background and statistics
4. **client/src/components/contact-section.tsx** - Contact information
5. **client/src/components/navigation.tsx** - Brand name

### Content
- **Skills**: Edit `client/src/components/skills-section.tsx`
- **Projects**: Edit `client/src/components/projects-section.tsx`
- **Services**: Edit `client/src/components/services-section.tsx`
- **Blog Posts**: Edit `client/src/components/blog-section.tsx`

### Styling
- **Colors**: Modify CSS variables in `client/src/index.css`
- **Fonts**: Update font imports in `client/index.html`
- **Layout**: Adjust Tailwind classes in component files

## Database Integration

The current setup uses in-memory storage. To integrate with a real database:

1. **Install database dependencies**
   ```bash
   npm install drizzle-orm @neondatabase/serverless
   # or your preferred database driver
   ```

2. **Update `server/storage.ts`** to use your database
3. **Configure database connection** in `drizzle.config.ts`
4. **Run migrations** using Drizzle Kit

## Deployment

### Frontend Only (Static)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to any static hosting service

### Full Stack
1. Deploy to platforms like Vercel, Netlify, or Railway
2. Configure environment variables for database connection
3. Update CORS settings for production domain

## Environment Variables

Create a `.env` file for production:

```env
NODE_ENV=production
DATABASE_URL=your_database_connection_string
CORS_ORIGIN=https://yourdomain.com
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact through the portfolio website contact form.