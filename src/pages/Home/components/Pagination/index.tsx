import { css } from '@emotion/css';
import ReactPaginate from 'react-paginate';
import { ISSUE_COUNT_PER_PAGE } from '../../const';

type Props = {
  openIssuesCount: number;
};

export const Pagination = ({ openIssuesCount }: Props) => {
  const pageCount = Math.ceil(openIssuesCount / ISSUE_COUNT_PER_PAGE);

  return (
    <ReactPaginate
      pageCount={pageCount}
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={5}
      previousLabel="<"
      className={styles.container}
      pageClassName={styles.paginationItem}
      previousClassName={styles.paginationItem}
      nextClassName={styles.paginationItem}
      activeClassName={styles.activated}
    />
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & > li {
      list-style: none;
      box-sizing: border-box;
    }
  `,
  paginationItem: css`
    border: 1px solid #c1cfd7;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      background-color: #f2f2fa;
    }
  `,
  activated: css`
    font-weight: 700;
    background-color: #f2f2fa;
  `,
};
