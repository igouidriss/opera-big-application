import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDmClientMdmAddrCntry } from 'app/shared/model/dm-client-mdm-addr-cntry.model';
import { getEntity, updateEntity, createEntity, reset } from './dm-client-mdm-addr-cntry.reducer';

export const DmClientMdmAddrCntryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const dmClientMdmAddrCntryEntity = useAppSelector(state => state.dmClientMdmAddrCntry.entity);
  const loading = useAppSelector(state => state.dmClientMdmAddrCntry.loading);
  const updating = useAppSelector(state => state.dmClientMdmAddrCntry.updating);
  const updateSuccess = useAppSelector(state => state.dmClientMdmAddrCntry.updateSuccess);

  const handleClose = () => {
    navigate('/dm-client-mdm-addr-cntry' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }

    const entity = {
      ...dmClientMdmAddrCntryEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...dmClientMdmAddrCntryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="operaBigApplicationApp.dmClientMdmAddrCntry.home.createOrEditLabel" data-cy="DmClientMdmAddrCntryCreateUpdateHeading">
            <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.home.createOrEditLabel">
              Create or edit a DmClientMdmAddrCntry
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="dm-client-mdm-addr-cntry-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.prtyFk')}
                id="dm-client-mdm-addr-cntry-prtyFk"
                name="prtyFk"
                data-cy="prtyFk"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.frstCntryFrmt')}
                id="dm-client-mdm-addr-cntry-frstCntryFrmt"
                name="frstCntryFrmt"
                data-cy="frstCntryFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.frstContinent')}
                id="dm-client-mdm-addr-cntry-frstContinent"
                name="frstContinent"
                data-cy="frstContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.scndCntryFrmt')}
                id="dm-client-mdm-addr-cntry-scndCntryFrmt"
                name="scndCntryFrmt"
                data-cy="scndCntryFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.scndContinent')}
                id="dm-client-mdm-addr-cntry-scndContinent"
                name="scndContinent"
                data-cy="scndContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.thrdCntryFrmt')}
                id="dm-client-mdm-addr-cntry-thrdCntryFrmt"
                name="thrdCntryFrmt"
                data-cy="thrdCntryFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.thrdContinent')}
                id="dm-client-mdm-addr-cntry-thrdContinent"
                name="thrdContinent"
                data-cy="thrdContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.frthCntryFrmt')}
                id="dm-client-mdm-addr-cntry-frthCntryFrmt"
                name="frthCntryFrmt"
                data-cy="frthCntryFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.frthContinent')}
                id="dm-client-mdm-addr-cntry-frthContinent"
                name="frthContinent"
                data-cy="frthContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.techLineage')}
                id="dm-client-mdm-addr-cntry-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.techCreatedDate')}
                id="dm-client-mdm-addr-cntry-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.techUpdatedDate')}
                id="dm-client-mdm-addr-cntry-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.techMapping')}
                id="dm-client-mdm-addr-cntry-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmAddrCntry.techComment')}
                id="dm-client-mdm-addr-cntry-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/dm-client-mdm-addr-cntry" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DmClientMdmAddrCntryUpdate;
