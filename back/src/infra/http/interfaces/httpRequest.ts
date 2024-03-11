export type HttpRequest<TBody = any, TParams = any> = {
  body?: TBody;
  params?: TParams;
};
