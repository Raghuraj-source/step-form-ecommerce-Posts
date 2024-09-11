
import { useFormContext } from 'react-hook-form';

const PersonalDetails = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>
      <div>
        <label>Name</label>
        <input
          {...register('name')}
          className="block w-full p-2 border"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          {...register('email')}
          type="email"
          className="block w-full p-2 border"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
    </div>
  );
};

export default PersonalDetails;
