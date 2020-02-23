const checkStatus = response => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = res => res.json();

const Fetcher = {
  get: (path, params) =>
    fetch(path, params)
      .then(checkStatus)
      .then(parseJSON)
};
export { Fetcher };
