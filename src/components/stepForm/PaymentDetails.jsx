
import { useFormContext } from 'react-hook-form';

const PaymentDetails = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <div>
        <label>Card Number</label>
        <input
          {...register('cardNumber')}
          type="text"
          className="block w-full p-2 border"
        />
        {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
      </div>
    </div>
  );
};

export default PaymentDetails;
