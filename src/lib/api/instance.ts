import axios from 'axios';

import { API_BASE_URL } from '@/lib/api/config';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
