import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDmClientMdmNtnltyCntry } from 'app/shared/model/dm-client-mdm-ntnlty-cntry.model';
import { getEntity, updateEntity, createEntity, reset } from './dm-client-mdm-ntnlty-cntry.reducer';

export const DmClientMdmNtnltyCntryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const dmClientMdmNtnltyCntryEntity = useAppSelector(state => state.dmClientMdmNtnltyCntry.entity);
  const loading = useAppSelector(state => state.dmClientMdmNtnltyCntry.loading);
  const updating = useAppSelector(state => state.dmClientMdmNtnltyCntry.updating);
  const updateSuccess = useAppSelector(state => state.dmClientMdmNtnltyCntry.updateSuccess);

  const handleClose = () => {
    navigate('/dm-client-mdm-ntnlty-cntry' + location.search);
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
      ...dmClientMdmNtnltyCntryEntity,
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
          ...dmClientMdmNtnltyCntryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="operaBigApplicationApp.dmClientMdmNtnltyCntry.home.createOrEditLabel" data-cy="DmClientMdmNtnltyCntryCreateUpdateHeading">
            <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.home.createOrEditLabel">
              Create or edit a DmClientMdmNtnltyCntry
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
                  id="dm-client-mdm-ntnlty-cntry-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.prtyFk')}
                id="dm-client-mdm-ntnlty-cntry-prtyFk"
                name="prtyFk"
                data-cy="prtyFk"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.frstNtnltFrmt')}
                id="dm-client-mdm-ntnlty-cntry-frstNtnltFrmt"
                name="frstNtnltFrmt"
                data-cy="frstNtnltFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.frstContinent')}
                id="dm-client-mdm-ntnlty-cntry-frstContinent"
                name="frstContinent"
                data-cy="frstContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.scndNtnltFrmt')}
                id="dm-client-mdm-ntnlty-cntry-scndNtnltFrmt"
                name="scndNtnltFrmt"
                data-cy="scndNtnltFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.scndContinent')}
                id="dm-client-mdm-ntnlty-cntry-scndContinent"
                name="scndContinent"
                data-cy="scndContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.thrdNtnltFrmt')}
                id="dm-client-mdm-ntnlty-cntry-thrdNtnltFrmt"
                name="thrdNtnltFrmt"
                data-cy="thrdNtnltFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.thrdContinent')}
                id="dm-client-mdm-ntnlty-cntry-thrdContinent"
                name="thrdContinent"
                data-cy="thrdContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.frthNtnltFrmt')}
                id="dm-client-mdm-ntnlty-cntry-frthNtnltFrmt"
                name="frthNtnltFrmt"
                data-cy="frthNtnltFrmt"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.frthContinent')}
                id="dm-client-mdm-ntnlty-cntry-frthContinent"
                name="frthContinent"
                data-cy="frthContinent"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.techLineage')}
                id="dm-client-mdm-ntnlty-cntry-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.techCreatedDate')}
                id="dm-client-mdm-ntnlty-cntry-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.techUpdatedDate')}
                id="dm-client-mdm-ntnlty-cntry-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.techMapping')}
                id="dm-client-mdm-ntnlty-cntry-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmClientMdmNtnltyCntry.techComment')}
                id="dm-client-mdm-ntnlty-cntry-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/dm-client-mdm-ntnlty-cntry" replace color="info">
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

export default DmClientMdmNtnltyCntryUpdate;
