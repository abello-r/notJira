// Info:
import type { Metadata } from "next";

// Styles:
import { maven_pro } from "@/components/ui/fonts";
import "./globals.css";

// Lang:
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// Auth:
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/session-provider";

export const metadata: Metadata = {
	title: "Not Jira",
	description: "Customizable, fast, and modern Jira clone.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();
	const session = await getServerSession();

	return (
		<html lang={locale}>
			<head>
				<link rel="icon" href="favicon.ico" sizes="any" />
			</head>
			<body className={`${maven_pro.className} antialiased`}>
				<SessionProvider session={session}>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
