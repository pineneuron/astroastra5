import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import MaintenancePage from "@/components/MaintenancePage";
import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import { getGeneralSettings } from "@/lib/settings";

export const dynamic = 'force-dynamic';

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" });

const larken = localFont({
  src: [
    { path: "../../public/fonts/fonnts.com-Larken_Thin.otf", weight: "100", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_Thin_Italic.otf", weight: "100", style: "italic" },
    { path: "../../public/fonts/fonnts.com-Larken_Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_Light_Italic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/fonnts.com-Larken_Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/fonnts.com-Larken_Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_Medium_Italic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/fonnts.com-Larken_Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_Bold_Italic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/fonnts.com-Larken_ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_ExtraBold_Italic.otf", weight: "800", style: "italic" },
    { path: "../../public/fonts/fonnts.com-Larken_Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Larken_Black_Italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-larken",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGeneralSettings();
  const faviconHref = settings.siteIcon || '/images/astra-logo-svg';

  return {
    title: settings.tagline
      ? `${settings.siteTitle} – ${settings.tagline}`
      : settings.siteTitle,
    description: settings.tagline,
    icons: {
      icon: [{ url: faviconHref, rel: 'icon', type: 'image/svg+xml' }],
      shortcut: [{ url: faviconHref }],
      apple: [{ url: faviconHref }],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getGeneralSettings();
  const faviconHref = settings.siteIcon || '/images/astra-logo-svg';

  // To disable: Set MAINTENANCE_MODE=false in .env.local
  const isMaintenanceMode = process.env.MAINTENANCE_MODE !== 'false';

  return (
    <html lang="en" className={`${larken.variable} ${publicSans.variable}`}>
      <head>
        <link rel="icon" href={faviconHref} type="image/svg+xml" />
        <link rel="shortcut icon" href={faviconHref} />
        <link rel="apple-touch-icon" href={faviconHref} />
      </head>
      <body suppressHydrationWarning>
        {isMaintenanceMode ? (
          <MaintenancePage />
        ) : (
          <Providers generalSettings={settings}>
            {children}
          </Providers>
        )}
      </body>
    </html>
  );
}
