import * as yup from 'yup';

export const visitorSchema = yup
    .object({
        name: yup.string().required('Username is required'),
        phone: yup.string().required('Phone number is required').min(10, "Phone number is invalid"),
        visit_date: yup
            .date()
            .required('Date Of Birth is Required')
            .typeError('Date is invalid'),
        purpose: yup.string().required('Write Visit Purpose'),

    })
    .required();
