import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BONAMED Education — QADAM 2030 и проверка сертификатов",
  description: "Проверка подлинности сертификатов и образовательные программы ТОО «Бонамед»."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
