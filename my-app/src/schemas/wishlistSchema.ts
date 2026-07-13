import * as yup from 'yup';

export const wishlistSchema = yup.object().shape({
    title: yup.string().required('Username must be have a title'),
    author: yup.string().required('Book must be have an author'),
    link: yup.string(),
    fabric: yup.string()
});