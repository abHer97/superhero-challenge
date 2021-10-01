import axios, { AxiosRequestConfig } from 'axios';

export const useHttpClient = () => {
   const get = async (url: string, options: AxiosRequestConfig) => {
      const resp = await axios.get(url, { ...options });

      return resp;
   };

   const post = () => {};

   const put = () => {};

   const _delete = () => {};

   return { get, post, put, delete: _delete };
};
