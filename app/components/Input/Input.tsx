import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({
	className,
	placeholder,
	...props
}: InputProps): JSX.Element => {
	return (
		<input className={cn(className, styles.input)} {...props} placeholder={placeholder}/>
	);
};
