import { Button, Layout, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useMatch, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export function Header({ title }) {
	const isRecipe = useMatch('/recipe/:id');
	const navigate = useNavigate();
	return (
		<Layout.Header className={styles.headerStyle}>
			{isRecipe && (
				<Button
					type="Link"
					onClick={() => navigate(-1)}
					className={styles.button}
				>
					<ArrowLeftOutlined className={styles.icon} />
				</Button>
			)}
			{title ? (
				<Typography.Title level={2} className={styles.title}>
					{title}
				</Typography.Title>
			) : (
				<Typography.Title level={2} className={styles.title}>
					Collection of recipes from around the world
				</Typography.Title>
			)}
		</Layout.Header>
	);
}
