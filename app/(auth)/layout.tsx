import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Топ проект',
	description: 'Мой первый проект'
};

export default function LoginLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head></head>
			<body className={NotoSans.className}>
				{children}
			</body>
		</html>
	);
}
