
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Define emotion packages for consistent usage
const emotionPackages = [
  '@emotion/react',
  '@emotion/styled',
  '@emotion/cache',
  '@emotion/serialize',
  '@emotion/utils',
  '@emotion/hash',
  '@emotion/unitless',
  '@emotion/memoize',
  '@emotion/weak-memoize',
  '@emotion/is-prop-valid',
  '@emotion/sheet',
  '@emotion/css',
  '@emotion/react/jsx-runtime',
  '@emotion/react/jsx-dev-runtime'
];

const splinetoolPackages = [
  "@splinetool/runtime",
  "@splinetool/react-spline"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: 'react', 
      plugins: [],
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        ...splinetoolPackages,
      ]
    }
  },
  optimizeDeps: {
    include: emotionPackages,
    exclude: splinetoolPackages
  }
}));
