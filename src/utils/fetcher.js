import { setSearchParams } from './search-params';

export const ApiResponseStatus = {
  SUCCESS: "success",
  ERROR: "error",
}

const fetcher = async (options) => {
  const { requestInit = {}, endpoint, params, path, dangerousThrow } = options;
  const searchParams = setSearchParams({
    searchParams: {
      ...(params ?? {}),
    },
  });
  try {
    const res = await fetch(`${endpoint ?? ""}${path ?? ""}${searchParams && `?${searchParams}`}`, {
      ...requestInit,
    });
    if (res.status === 204) {
      return {
        statusCode: 204,
        status: ApiResponseStatus.SUCCESS,
      };
    }
    const _data = (await res.json());
    if (!res.ok && _data?.status !== ApiResponseStatus.SUCCESS) {
      if (dangerousThrow) {
        throw new Error(_data?.message ?? getErrorMessages(res.status));
      }
      return {
        statusCode: res.status ?? 400,
        status: ApiResponseStatus.ERROR,
        message: _data?.message ??
        getErrorMessages(res.status),
      };
    }
    return {
      statusCode: res.status,
      status: ApiResponseStatus.SUCCESS,
      data: _data?.data,
    };
  }
  catch (e) {
    if (e instanceof DOMException && dangerousThrow) {
      throw new Error("You have aborted the request.");
    }
    if (e instanceof Error && dangerousThrow) {
      throw new Error(e.message);
    }
    return {
      statusCode: 500,
      status: ApiResponseStatus.ERROR,
      message: getErrorMessages(500),
    };
  }
};
export { fetcher };