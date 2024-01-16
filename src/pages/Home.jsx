import { PageTitle } from '../components/PageTitle';
import { FormView } from '../features/form/FormView';

export const Home = () => {
  return (
    <>
      <PageTitle title="HRnet" variant="h3" my={5} />
      <FormView />
    </>
  );
};
