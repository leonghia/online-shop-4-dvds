export interface RequestParams {
    pageSize?: number;
    pageNumber?: number;
}

export interface GenresRequestParams extends RequestParams {
    type?: number;
}