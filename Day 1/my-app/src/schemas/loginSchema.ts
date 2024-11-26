import { object, string, number, date, InferType } from 'yup';

export const loginSchema = object({
  username: string().required('Username is required yup'),
  email: string().email('invalid email'),
});

// parse and assert validity