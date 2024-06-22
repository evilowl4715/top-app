import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'О нас',
	description: 'Мой первый проект'
};

export default function AboutLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='about'>
			{children}
		</div>
	);
}
