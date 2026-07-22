import * as yup from 'yup';

export const readBookSchema = yup.object().shape({
    title: yup.string().required('Username must be have a title'),
    author: yup.string().required('Book must be have an author'),
    rating: yup.number().required('Rate book').min(1, 'Minimal rating is 1').max(5, 'maximal rating is 5'),
    review: yup.string().max(160, 'no more 160 letters')
});