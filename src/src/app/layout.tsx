import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Wix_Madefor_Text } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import theme from '../theme';
import GlobalCss from '@/components/GlobalCss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "S10.AI: AI Medical Scribe | Accurate, Real-Time Clinical Notes",
  description: "S10.AI Delivers The Fastest AI Medical Scribe, Converting Conversations Into Precise Clinical Notes. Reduce Admin Work & Focus on Patient Care",
};

const wixMadeforText  = Wix_Madefor_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-wix-madefor-text',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={wixMadeforText.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalCss theme={theme} />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
