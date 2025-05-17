// lib/axios.js
import axios from 'axios';
// import { createBrowserClient } from '@supabase/ssr'; // Optional for access
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// api.interceptors.request.use(async (config) => {
//   const supabase = createClientComponentClient();
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const accessToken = session?.access_token;

//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   return config;
// });

export default api;
