import { Issue } from '../../../types/issue';

/**
 * APIから取得したイッシュリストから必要なプロパティだけ残して返す
 * @param data - APIから取得したイッシュリスト
 * @todo - dataのは Issue より多くのプロパティを持ってるので型を正確に指定する
 */
export const formatIssueList = (data: Issue[]): Issue[] =>
  data.map(({ id, number, state, body, comments, comments_url, labels, title, user }) => ({
    id,
    number,
    state,
    body,
    comments,
    comments_url,
    labels,
    title,
    user,
  }));
