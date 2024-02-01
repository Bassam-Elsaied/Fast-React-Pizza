import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className='text-center my-6'>
      <h1>Something went wrong 😢</h1>
      <p className='bg-red-300 text-red-700 p-2 rounded-md text-sm w-fit my-2 mx-auto '>{error.data || error.message}</p>
      <LinkButton onClick={() => navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
