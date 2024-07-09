import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import Logo from '../../logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({className, ...props }: SidebarProps): JSX.Element => {
	return (
		<aside {...props} className={cn(className, styles.sidebar)}>
			<Logo className={styles.logo}/>
			<div>Поиск</div>
			<Menu />
		</aside>
	);
};
