import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
// import { SuModal } from 'seumodal';
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
        <SuModal
          isOpen={showModal}
          setIsOpen={toggleModal}
          styleOptions={{
            background: { zIndex: 10000 },
          }}
        >
          <Box sx={{ m: 12 }}>
            <Typography>
              Employee created, c'est cool c'est bô la vie !
            </Typography>
          </Box>
        </SuModal>
      )}
    </>
  );
};
