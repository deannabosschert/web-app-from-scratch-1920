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

const fetcher = {
  get: (path, params) =>
    fetch(path, params)
    .then(checkStatus)
    .then(parseJSON)
};
export {
  fetcher
};