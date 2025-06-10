# Quick Setup Guide

## Method 1: Download All Files

1. **Download these files and create the folder structure:**

```
your-project-folder/
├── package.json
├── package-lock.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── components.json
├── drizzle.config.ts
├── README.md
├── client/
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── lib/
│       │   ├── utils.ts
│       │   └── queryClient.ts
│       ├── hooks/
│       │   └── use-toast.ts
│       ├── pages/
│       │   ├── home.tsx
│       │   └── not-found.tsx
│       └── components/
│           ├── navigation.tsx
│           ├── hero-section.tsx
│           ├── about-section.tsx
│           ├── skills-section.tsx
│           ├── projects-section.tsx
│           ├── services-section.tsx
│           ├── blog-section.tsx
│           ├── contact-section.tsx
│           ├── footer.tsx
│           └── ui/ (contains all UI components)
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
└── shared/
    └── schema.ts
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the application:**
```bash
npm run dev
```

## Method 2: Copy to New Project

If you want to start fresh:

1. **Create a new folder and initialize:**
```bash
mkdir my-portfolio
cd my-portfolio
npm init -y
```

2. **Copy the package.json dependencies section and run:**
```bash
npm install
```

3. **Copy all the configuration files** (vite.config.ts, tailwind.config.ts, etc.)

4. **Copy the source code** from client/, server/, and shared/ folders

5. **Start development:**
```bash
npm run dev
```

## Key Configuration Files

- **package.json** - Contains all dependencies and scripts
- **vite.config.ts** - Build tool configuration
- **tailwind.config.ts** - Styling configuration
- **tsconfig.json** - TypeScript configuration
- **components.json** - UI component library settings

## Next Steps

1. **Customize content** - Update personal information in components
2. **Add your projects** - Replace example projects with your actual work
3. **Configure database** - Replace in-memory storage with real database
4. **Deploy** - Use Vercel, Netlify, or your preferred hosting platform

## Important Notes

- The app runs on port 5000 by default
- Frontend and backend are served from the same port
- Contact form submissions are stored in memory (restart loses data)
- All dependencies are already configured in package.json