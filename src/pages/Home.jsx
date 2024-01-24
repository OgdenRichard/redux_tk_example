import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageTitle } from '../components/PageTitle';
import { FormView } from '../features/form/FormView';
import { closeModal } from '../features/form/formSlice';
import { SuModal } from '../modal/SuModal';

export const Home = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.employees.showModal);
  const toggleModal = useCallback(() => {
    dispatch(closeModal(false));
  }, [dispatch]);

  return (
    <>
      <PageTitle title="HRnet" variant="h3" my={5} />
      <FormView />
      {showModal && (
        <SuModal width={50} isOpen={showModal} setIsOpen={toggleModal}>
          Employee Created!
        </SuModal>
      )}
    </>
  );
};
