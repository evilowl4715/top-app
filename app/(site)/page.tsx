'use client';
import { useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating, Input, Textarea } from '../components';
import styles from './page.module.css';

// для pages route
// const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
// 	firstCategory: 0
// });

export default  function Home() {
	const [rating, setRating] = useState<number>(4);

	// useEffect(() => {
	// 	console.log(counter);
	// 	return function cleanup() {
	// 		console.log('Unmount');
	// 	};
	// }, []);

	return (
		<main className={styles.main}>
			<Htag tag='h1'>hi</Htag>
			<Button appearance='primary'>Привет</Button>
			<Button appearance='ghost' arrow='right'>
				Привет
			</Button>
			<Ptag size='s'>Текст</Ptag>
			<Tag size='s' color='green'>
				tag
			</Tag>
			<Tag size='s' color='ghost'>
				tag
			</Tag>
			<Tag size='s' color='red'>
				tag
			</Tag>
			<Tag size='s' color='primary'>
				tag
			</Tag>
			<Tag>tag</Tag>
			<Tag href='https://react-svgr.com/docs/next/' size='m' color='grey'>
				tag
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder={'что то'}/>
			<Textarea placeholder={'что то'}/>
		</main>
	);
}
