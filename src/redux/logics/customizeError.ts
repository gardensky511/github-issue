/**
 * エラーからメッセージだけ取り出して返す
 * @param error - エラー
 * @return エラーメッセージ
 */
export const customizeError = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return '予期せぬエラーが発生しました';
};
