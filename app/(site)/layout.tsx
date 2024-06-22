import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/Sidebar';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import styles from './layout.module.css';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Топ проект',
	description: 'Мой первый проект'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head></head>
			<body className={NotoSans.className}>
				<div className={styles.wrapper}>
					<Header className={styles.header} />
					<Sidebar className={styles.sidebar} />
					<div className={styles.body}>{children}</div>
					<Footer className={styles.footer}/>
				</div>
			</body>
		</html>
	);
}
