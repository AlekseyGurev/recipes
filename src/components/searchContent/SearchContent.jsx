import { Layout, Pagination } from 'antd';
import styles from './SearchContent.module.css';
import { Card } from '../';
import { selectRecipes } from '../../selectors';
import { useSelector } from 'react-redux';
import { DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Link } from 'react-router-dom';

export function SearchContent({ onChangePage, currentPage, dataRecipes, total }) {
	const recipes = useSelector(selectRecipes);
	return (
		<Layout.Content>
			<Layout>
				<div className={styles.header}>
					{total ? (
						<>
							<span>Found recipes</span>
							<span className={styles.total}>{total}</span>
						</>
					) : (
						<span>Recipes not found</span>
					)}
				</div>
				{total ? (
					<div className={styles.containerCards}>
						<ul className={styles.listCards}>
							{dataRecipes.map((recipe) => (
								<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
									<Card recipe={recipe} />
								</Link>
							))}
						</ul>
					</div>
				) : null}
				{total > DEFAULT_PAGE_SIZE && (
					<div className={styles.paginationContainer}>
						<Pagination
							onChange={(page) => {
								onChangePage(page);
							}}
							defaultCurrent={currentPage}
							showSizeChanger={false}
							defaultPageSize={DEFAULT_PAGE_SIZE}
							total={total}
							className={styles.pagination}
						/>
					</div>
				)}
			</Layout>
		</Layout.Content>
	);
}
