import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

api.defaults.headers.post['Content-Type'] = 'application/json';

api.interceptors.request.use(config => {
  console.tron.log('axios request: ', {
    url: config.url,
    data: config.data,
  });

  return config;
});

api.interceptors.response.use(
  res => {
    console.tron.log('axios response success: ', {
      status: res.status,
      data: res.data,
    });

    return res;
  },
  err => {
    console.tron.log('axios response error: ', {
      err,
      status: err.response ? err.response.status : 'none',
      data: err.response ? err.response.data : 'none',
    });

    return Promise.reject(err);
  }
);

export default api;
