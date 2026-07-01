/* CA STUDIO — Tailwind Play CDN config (loaded after cdn.tailwindcss.com)
   Only theme tokens live here; animations/effects are in assets/styles.css */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          text: '#0F172A',   /* Slate 900 */
          muted: '#475569',  /* Slate 600 */
          blue: '#2563EB',   /* Royal Blue */
          cyan: '#06B6D4',   /* Cyan */
        },
      },
    },
  },
};
