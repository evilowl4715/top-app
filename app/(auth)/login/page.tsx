
import styles from '../../(site)/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Логин'
};

export default function Login() {

	return (
		<div className={styles.main}>
			Логин
		</div>
	);
}
