
import styles from '../page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'О нас'
};

export default function About() {

	return (
		<div className={styles.main}>
			О нас
		</div>
	);
}
