interface Props {
  api?: string;
  endpoint: string;
  headers?: any;
  method?: string;
  body?: any;
}

const authenticatedFetcher: (params: Props) => any = async ({
  api = process.env.NEXT_PUBLIC_API_AUTH,
  endpoint = "",
  headers = {},
  method = "GET",
  body = "",
}) => {
  const params = {
    method: method,
    headers: headers,
  };
  if (body) {
    // @ts-ignore
    params.body = body;
  }
  // @ts-ignore
  const response = await fetch(api + endpoint, params);

  if (response.status == 204) {
    return;
  }

  if (response.ok) {
    return response.json();
  }

  if (response.status == 401) {
  }

  if (response.status >= 400 && response.status < 500) {
    return response.json().then((data: any) => {
      return Promise.reject({
        status: response.status,
        ...data,
      });
    });
  }

  return response.json().then((data: any) => {
    return Promise.reject({
      status: 500,
      error:
        "Não foi possível processar sua requisição. Tente novamente mais tarde.",
    });
  });
};

export default authenticatedFetcher;
