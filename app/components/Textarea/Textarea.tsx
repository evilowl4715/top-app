import { ForwardedRef, forwardRef } from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

export const Textarea = forwardRef(
	(
		{ error, className, placeholder, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles.inputWrapper)}>
				<textarea
					className={cn(styles.textarea, {
						[styles.error]: error
					})}
					{...props}
					ref={ref}
					placeholder={placeholder}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);

// что бы линтер не ругался
Textarea.displayName = 'Textarea';
