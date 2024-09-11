
import { useFormContext } from 'react-hook-form';

const AddressDetails = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Address Details</h2>
      <div>
        <label>Address</label>
        <input
          {...register('address')}
          className="block w-full p-2 border"
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>
    </div>
  );
};

export default AddressDetails;
