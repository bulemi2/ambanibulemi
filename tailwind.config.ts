import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    fontFamily: {
    pacifico:["Pacifico", "cursive"],
    inter: ["Inter", "sans-serif"],
    roboto: ["Roboto", "sans-serif"],
    poppins: ["Poppins", "sans-serif"],
    montserrat: ["Montserrat", "sans-serif"],
    raleway: ["Raleway", "sans-serif"],
    openSans: ["Open Sans", "sans-serif"],
    lato: ["Lato", "sans-serif"],
    ubuntu: ["Ubuntu", "sans-serif"],
    sourceSansPro: ["Source Sans Pro", "sans-serif"],
    nunito: ["Nunito", "sans-serif"],
    oswald: ["Oswald", "sans-serif"],
    playfairDisplay: ["Playfair Display", "serif"],
    robotoMono: ["Roboto Mono", "monospace"],
    sourceCodePro: ["Source Code Pro", "monospace"],
    firaCode: ["Fira Code", "monospace"],
    courierNew: ["Courier New", "monospace"],
    inconsolata: ["Inconsolata", "monospace"],
    droidSansMono: ["Droid Sans Mono", "monospace"],
    ptMono: ["PT Mono", "monospace"],
    spaceMono: ["Space Mono", "monospace"],
    merriweather: ["Merriweather", "serif"],
    arial: ["Arial", "sans-serif"],
    georgia: ["Georgia", "serif"],
      },
      },
    },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
