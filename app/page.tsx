import { Button, Htag, Ptag, Tag } from './components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Htag tag='h1'>Hello</Htag>
			<Button appearance='primary'>Привет</Button>
			<Button appearance='ghost' arrow='right'>Привет</Button>
			<Ptag size='s'>Текст</Ptag>
			<Tag size='s' color="green">tag</Tag>
			<Tag size='s' color="ghost">tag</Tag>
			<Tag size='s' color="red">tag</Tag>
			<Tag size='s' color="primary">tag</Tag>
			<Tag>tag</Tag>
			<Tag href="https://react-svgr.com/docs/next/" size='m' color="grey">tag</Tag>
		</main>
	);
}
