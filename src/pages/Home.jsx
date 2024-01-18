import { PageTitle } from '../components/PageTitle';
import { FormView } from '../features/form/FormView';
import { SuModal } from '../modal/SuModal';

export const Home = () => {
  return (
    <>
      <PageTitle title="HRnet" variant="h3" my={5} />
      <FormView />
      <SuModal>Hé salut</SuModal>
    </>
  );
};
