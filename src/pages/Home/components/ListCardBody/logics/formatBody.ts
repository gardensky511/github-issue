import { MAX_ISSUE_BODY_LENGTH } from '../../../const';

/**
 * イッシュ本文を最大表示文字数まで切って返す
 * @param body - イッシュ本文全文
 */
export const formatBody = (body: string) => {
  if (!body) return '';

  if (body.length < MAX_ISSUE_BODY_LENGTH) return body;

  return `${body.substring(0, MAX_ISSUE_BODY_LENGTH)}...`;
};
