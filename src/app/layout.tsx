import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mulez Administration',
	description: 'Mulez Administration',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='h-full'>
			<body className={clsx(inter.className, 'h-full')}>{children}</body>
		</html>
	);
}
