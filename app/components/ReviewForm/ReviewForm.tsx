'use client';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { ReviewFormProps } from './ReviewForm.props';
import { Input } from '../Input/Input';
import { Button, Rating, Textarea } from '..';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '@/app/api';
import { useState } from 'react';

export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IReviewForm>();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		// Преобразование значения рейтинга в число
		const rating = Number(formData.rating);

		if (isNaN(rating) || rating < 1 || rating > 5) {
			setError('Рейтинг должен быть числом от 1 до 5');
			return;
		}

		const response = await fetch(API.review.createDemo, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ...formData, productId, rating })
		});

		const responseData: IReviewSentResponse = await response.json();
		console.log(responseData); // Отладочная информация

		if (response.ok) {
			if (responseData.message) {
				setIsSuccess(true);
				reset();
			}
		} else {
			setError(
				'Что-то пошло не так: ' +
					(responseData.message || 'Неизвестная ошибка')
			);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					className={styles.input}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					className={styles.input}
					placeholder='Заголовок отзыва'
					error={errors.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Поставьте оценку' } }}
						render={({ field }) => (
							<Rating
								isEditable
								error={errors.rating}
								rating={Number(field.value)}
								ref={field.ref}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Напишите отзыв' }
					})}
					className={styles.description}
					placeholder='Текст отзыва'
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={styles.success}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо за отзыв</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{error && (
				<div className={styles.error}>
					{error}
					<CloseIcon
						className={styles.close}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
