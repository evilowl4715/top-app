
import styles from '../page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Новости'
};

export default function News() {

	return (
		<div className={styles.main}>
			Новости
		</div>
	);
}
