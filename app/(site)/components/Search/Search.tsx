'use client';
import { Button, Input } from '@/app/components';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import { useState } from 'react';
import IconSearch from './search.svg';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');

	const router = useRouter();

	const goToSearch = () => {
		const searchQuery = search ? `?q=${encodeURIComponent(search)}` : '';
		router.push(`/search${searchQuery}`);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key == 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button appearance='primary' className={styles.button} onClick={goToSearch}>
				<IconSearch />
			</Button>
		</div>
	);
};
