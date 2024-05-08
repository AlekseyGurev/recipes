import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';

import { Typography, Button, Layout } from 'antd';

export function ErrorPage() {
	const navigate = useNavigate();
	return (
		<div className={styles.containerError}>
			<Typography.Title>Page not found</Typography.Title>
			<Button
				type="primary"
				onClick={() => {
					navigate('/');
				}}
			>
				Go to main page
			</Button>
		</div>
	);
}
