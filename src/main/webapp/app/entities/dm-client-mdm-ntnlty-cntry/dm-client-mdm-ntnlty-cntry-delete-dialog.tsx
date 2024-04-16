import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity, deleteEntity } from './dm-client-mdm-ntnlty-cntry.reducer';

export const DmClientMdmNtnltyCntryDeleteDialog = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  const [loadModal, setLoadModal] = useState(false);

  useEffect(() => {
    dispatch(getEntity(id));
    setLoadModal(true);
  }, []);

  const dmClientMdmNtnltyCntryEntity = useAppSelector(state => state.dmClientMdmNtnltyCntry.entity);
  const updateSuccess = useAppSelector(state => state.dmClientMdmNtnltyCntry.updateSuccess);

  const handleClose = () => {
    navigate('/dm-client-mdm-ntnlty-cntry' + pageLocation.search);
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmDelete = () => {
    dispatch(deleteEntity(dmClientMdmNtnltyCntryEntity.id));
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="dmClientMdmNtnltyCntryDeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="operaBigApplicationApp.dmClientMdmNtnltyCntry.delete.question">
        <Translate
          contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.delete.question"
          interpolate={{ id: dmClientMdmNtnltyCntryEntity.id }}
        >
          Are you sure you want to delete this DmClientMdmNtnltyCntry?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-dmClientMdmNtnltyCntry" data-cy="entityConfirmDeleteButton" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DmClientMdmNtnltyCntryDeleteDialog;
