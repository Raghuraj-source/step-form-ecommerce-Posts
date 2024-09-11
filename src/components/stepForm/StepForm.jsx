import  { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import PaymentDetails from './PaymentDetails';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  cardNumber: yup.string().min(16, 'Card number should be 16 digits').required('Card number is required'),
});

const StepForm = () => {
  const [step, setStep] = useState(0);
  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white shadow-md">
        {step === 0 && <PersonalDetails />}
        {step === 1 && <AddressDetails />}
        {step === 2 && <PaymentDetails />}
        <div className="flex justify-between">
          <button type="button" onClick={() => setStep((prev) => prev - 1)} disabled={step === 0} className="p-2 bg-gray-300">
            Back
          </button>
          {step < 2 ? (
            <button type="button" onClick={() => setStep((prev) => prev + 1)} className="p-2 bg-blue-500 text-white">
              Next
            </button>
          ) : (
            <button type="submit" className="p-2 bg-green-500 text-white">
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default StepForm;
