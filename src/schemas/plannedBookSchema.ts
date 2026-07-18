import * as yup from 'yup';

export const plannedBookSchema = yup.object().shape({
    title: yup.string().required('Username must be have a title'),
    author: yup.string().required('Book must be have an author'),
});