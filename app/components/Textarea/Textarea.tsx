import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

export const Textarea = ({
	className,
	placeholder,
	...props
}: TextareaProps): JSX.Element => {
	return (
		<textarea className={cn(className, styles.textarea)} {...props} placeholder={placeholder}/>
	);
};
