import * as yup from 'yup';

export const luggageDeliveryOrderValidationSchema = yup.object().shape({
  order_details: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
