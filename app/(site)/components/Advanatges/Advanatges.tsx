import styles from './Advanatges.module.css';
import { AdvanatgesProps } from './Advanatges.props';
import CheckIcon from './check.svg';

export const Advanatges = ({ advantages }: AdvanatgesProps) => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<i>
						<CheckIcon />
					</i>
					<div className={styles.title}>{a.title}</div>
					<div className={styles.vline}></div>
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};
