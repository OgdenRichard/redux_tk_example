import { useState } from 'react';
import { PageTitle } from '../components/PageTitle';
import { FormView } from '../features/form/FormView';
import { SuModal } from '../modal/SuModal';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PageTitle title="HRnet" variant="h3" my={5} />
      <FormView showModal={showModal} setShowModal={setShowModal} />
      <SuModal width={50} isOpen={showModal} setIsOpen={setShowModal}>
        Hé salut
      </SuModal>
    </>
  );
};
