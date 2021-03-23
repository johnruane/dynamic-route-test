import fetch from 'isomorphic-unfetch';

const fetcher = async (uri, req, init) => {
  const url = new URL(uri, 'http://localhost:3000');

  const res = await fetch(url.href, { mode: 'same-origin', ...init });
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw { ...error, info: await res.json(), status: res.status };
  }
  return res.json();
};

export default fetcher;

export const putInit = (body) => ({
  method: 'PUT',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'error',
  referrerPolicy: 'same-origin',
  body,
});
