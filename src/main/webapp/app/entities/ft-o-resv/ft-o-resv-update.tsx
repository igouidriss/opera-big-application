import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFtOResv } from 'app/shared/model/ft-o-resv.model';
import { getEntity, updateEntity, createEntity, reset } from './ft-o-resv.reducer';

export const FtOResvUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const ftOResvEntity = useAppSelector(state => state.ftOResv.entity);
  const loading = useAppSelector(state => state.ftOResv.loading);
  const updating = useAppSelector(state => state.ftOResv.updating);
  const updateSuccess = useAppSelector(state => state.ftOResv.updateSuccess);

  const handleClose = () => {
    navigate('/ft-o-resv' + location.search);
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
    if (values.numLigne !== undefined && typeof values.numLigne !== 'number') {
      values.numLigne = Number(values.numLigne);
    }
    if (values.resvNameId !== undefined && typeof values.resvNameId !== 'number') {
      values.resvNameId = Number(values.resvNameId);
    }
    if (values.numOrdre !== undefined && typeof values.numOrdre !== 'number') {
      values.numOrdre = Number(values.numOrdre);
    }
    if (values.nameId !== undefined && typeof values.nameId !== 'number') {
      values.nameId = Number(values.nameId);
    }
    if (values.nameIdLigne !== undefined && typeof values.nameIdLigne !== 'number') {
      values.nameIdLigne = Number(values.nameIdLigne);
    }
    if (values.contactId !== undefined && typeof values.contactId !== 'number') {
      values.contactId = Number(values.contactId);
    }
    if (values.agenceId !== undefined && typeof values.agenceId !== 'number') {
      values.agenceId = Number(values.agenceId);
    }
    if (values.societeId !== undefined && typeof values.societeId !== 'number') {
      values.societeId = Number(values.societeId);
    }
    if (values.groupeId !== undefined && typeof values.groupeId !== 'number') {
      values.groupeId = Number(values.groupeId);
    }
    if (values.membreId !== undefined && typeof values.membreId !== 'number') {
      values.membreId = Number(values.membreId);
    }
    if (values.sourceProfileId !== undefined && typeof values.sourceProfileId !== 'number') {
      values.sourceProfileId = Number(values.sourceProfileId);
    }
    if (values.numBloc !== undefined && typeof values.numBloc !== 'number') {
      values.numBloc = Number(values.numBloc);
    }
    if (values.createurResv !== undefined && typeof values.createurResv !== 'number') {
      values.createurResv = Number(values.createurResv);
    }
    if (values.nbResvAnn !== undefined && typeof values.nbResvAnn !== 'number') {
      values.nbResvAnn = Number(values.nbResvAnn);
    }
    if (values.nbNuitee !== undefined && typeof values.nbNuitee !== 'number') {
      values.nbNuitee = Number(values.nbNuitee);
    }
    if (values.nbNuiteeNnDed !== undefined && typeof values.nbNuiteeNnDed !== 'number') {
      values.nbNuiteeNnDed = Number(values.nbNuiteeNnDed);
    }
    if (values.nbNuiteeGlobal !== undefined && typeof values.nbNuiteeGlobal !== 'number') {
      values.nbNuiteeGlobal = Number(values.nbNuiteeGlobal);
    }
    if (values.nbOccupationMultiple !== undefined && typeof values.nbOccupationMultiple !== 'number') {
      values.nbOccupationMultiple = Number(values.nbOccupationMultiple);
    }
    if (values.nbAduGlobal !== undefined && typeof values.nbAduGlobal !== 'number') {
      values.nbAduGlobal = Number(values.nbAduGlobal);
    }
    if (values.nbEnfGlobal !== undefined && typeof values.nbEnfGlobal !== 'number') {
      values.nbEnfGlobal = Number(values.nbEnfGlobal);
    }
    if (values.nbPersDayUGlobal !== undefined && typeof values.nbPersDayUGlobal !== 'number') {
      values.nbPersDayUGlobal = Number(values.nbPersDayUGlobal);
    }
    if (values.nbPersArrGlobal !== undefined && typeof values.nbPersArrGlobal !== 'number') {
      values.nbPersArrGlobal = Number(values.nbPersArrGlobal);
    }
    if (values.nbPersDepGlobal !== undefined && typeof values.nbPersDepGlobal !== 'number') {
      values.nbPersDepGlobal = Number(values.nbPersDepGlobal);
    }
    if (values.nbPersAnn !== undefined && typeof values.nbPersAnn !== 'number') {
      values.nbPersAnn = Number(values.nbPersAnn);
    }
    if (values.nbPersNoshow !== undefined && typeof values.nbPersNoshow !== 'number') {
      values.nbPersNoshow = Number(values.nbPersNoshow);
    }
    if (values.nbChbDayUGlobal !== undefined && typeof values.nbChbDayUGlobal !== 'number') {
      values.nbChbDayUGlobal = Number(values.nbChbDayUGlobal);
    }
    if (values.nbChbArrGlobal !== undefined && typeof values.nbChbArrGlobal !== 'number') {
      values.nbChbArrGlobal = Number(values.nbChbArrGlobal);
    }
    if (values.nbChbDepGlobal !== undefined && typeof values.nbChbDepGlobal !== 'number') {
      values.nbChbDepGlobal = Number(values.nbChbDepGlobal);
    }
    if (values.nbChbAnn !== undefined && typeof values.nbChbAnn !== 'number') {
      values.nbChbAnn = Number(values.nbChbAnn);
    }
    if (values.nbChbNoshow !== undefined && typeof values.nbChbNoshow !== 'number') {
      values.nbChbNoshow = Number(values.nbChbNoshow);
    }
    if (values.revenuNetChambreGlobal !== undefined && typeof values.revenuNetChambreGlobal !== 'number') {
      values.revenuNetChambreGlobal = Number(values.revenuNetChambreGlobal);
    }
    if (values.revenuTaxeChambreGlobal !== undefined && typeof values.revenuTaxeChambreGlobal !== 'number') {
      values.revenuTaxeChambreGlobal = Number(values.revenuTaxeChambreGlobal);
    }
    if (values.revenuNetBqGlobal !== undefined && typeof values.revenuNetBqGlobal !== 'number') {
      values.revenuNetBqGlobal = Number(values.revenuNetBqGlobal);
    }
    if (values.revenuTaxeBqGlobal !== undefined && typeof values.revenuTaxeBqGlobal !== 'number') {
      values.revenuTaxeBqGlobal = Number(values.revenuTaxeBqGlobal);
    }
    if (values.revenuNetExtraGlobal !== undefined && typeof values.revenuNetExtraGlobal !== 'number') {
      values.revenuNetExtraGlobal = Number(values.revenuNetExtraGlobal);
    }
    if (values.revenuTaxeExtraGlobal !== undefined && typeof values.revenuTaxeExtraGlobal !== 'number') {
      values.revenuTaxeExtraGlobal = Number(values.revenuTaxeExtraGlobal);
    }
    if (values.revenuNetTotalGlobal !== undefined && typeof values.revenuNetTotalGlobal !== 'number') {
      values.revenuNetTotalGlobal = Number(values.revenuNetTotalGlobal);
    }
    if (values.revenuTaxeTotalGlobal !== undefined && typeof values.revenuTaxeTotalGlobal !== 'number') {
      values.revenuTaxeTotalGlobal = Number(values.revenuTaxeTotalGlobal);
    }
    if (values.prodRevenuChambre !== undefined && typeof values.prodRevenuChambre !== 'number') {
      values.prodRevenuChambre = Number(values.prodRevenuChambre);
    }
    if (values.prodRevenuBq !== undefined && typeof values.prodRevenuBq !== 'number') {
      values.prodRevenuBq = Number(values.prodRevenuBq);
    }
    if (values.prodRevenuExtra !== undefined && typeof values.prodRevenuExtra !== 'number') {
      values.prodRevenuExtra = Number(values.prodRevenuExtra);
    }
    if (values.prodRevenuTotal !== undefined && typeof values.prodRevenuTotal !== 'number') {
      values.prodRevenuTotal = Number(values.prodRevenuTotal);
    }
    if (values.prodChambreNbNuitees !== undefined && typeof values.prodChambreNbNuitees !== 'number') {
      values.prodChambreNbNuitees = Number(values.prodChambreNbNuitees);
    }
    if (values.techGrpNumOrdre !== undefined && typeof values.techGrpNumOrdre !== 'number') {
      values.techGrpNumOrdre = Number(values.techGrpNumOrdre);
    }
    if (values.resvNameIdPrincipal !== undefined && typeof values.resvNameIdPrincipal !== 'number') {
      values.resvNameIdPrincipal = Number(values.resvNameIdPrincipal);
    }

    const entity = {
      ...ftOResvEntity,
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
          ...ftOResvEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="operaBigApplicationApp.ftOResv.home.createOrEditLabel" data-cy="FtOResvCreateUpdateHeading">
            <Translate contentKey="operaBigApplicationApp.ftOResv.home.createOrEditLabel">Create or edit a FtOResv</Translate>
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
                  id="ft-o-resv-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.numLigne')}
                id="ft-o-resv-numLigne"
                name="numLigne"
                data-cy="numLigne"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.resort')}
                id="ft-o-resv-resort"
                name="resort"
                data-cy="resort"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.resvNameId')}
                id="ft-o-resv-resvNameId"
                name="resvNameId"
                data-cy="resvNameId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.clientOId')}
                id="ft-o-resv-clientOId"
                name="clientOId"
                data-cy="clientOId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.typeChb')}
                id="ft-o-resv-typeChb"
                name="typeChb"
                data-cy="typeChb"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.businessDate')}
                id="ft-o-resv-businessDate"
                name="businessDate"
                data-cy="businessDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.numOrdre')}
                id="ft-o-resv-numOrdre"
                name="numOrdre"
                data-cy="numOrdre"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.confirmationNo')}
                id="ft-o-resv-confirmationNo"
                name="confirmationNo"
                data-cy="confirmationNo"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.clientMdmId')}
                id="ft-o-resv-clientMdmId"
                name="clientMdmId"
                data-cy="clientMdmId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nameId')}
                id="ft-o-resv-nameId"
                name="nameId"
                data-cy="nameId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nameIdLigne')}
                id="ft-o-resv-nameIdLigne"
                name="nameIdLigne"
                data-cy="nameIdLigne"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.contactId')}
                id="ft-o-resv-contactId"
                name="contactId"
                data-cy="contactId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.agenceId')}
                id="ft-o-resv-agenceId"
                name="agenceId"
                data-cy="agenceId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.agenceNom')}
                id="ft-o-resv-agenceNom"
                name="agenceNom"
                data-cy="agenceNom"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.societeId')}
                id="ft-o-resv-societeId"
                name="societeId"
                data-cy="societeId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.groupeId')}
                id="ft-o-resv-groupeId"
                name="groupeId"
                data-cy="groupeId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.membreId')}
                id="ft-o-resv-membreId"
                name="membreId"
                data-cy="membreId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.sourceProfileId')}
                id="ft-o-resv-sourceProfileId"
                name="sourceProfileId"
                data-cy="sourceProfileId"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.numBloc')}
                id="ft-o-resv-numBloc"
                name="numBloc"
                data-cy="numBloc"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.statutResv')}
                id="ft-o-resv-statutResv"
                name="statutResv"
                data-cy="statutResv"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.statutVip')}
                id="ft-o-resv-statutVip"
                name="statutVip"
                data-cy="statutVip"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.dateDebutLigne')}
                id="ft-o-resv-dateDebutLigne"
                name="dateDebutLigne"
                data-cy="dateDebutLigne"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.dateFinLigne')}
                id="ft-o-resv-dateFinLigne"
                name="dateFinLigne"
                data-cy="dateFinLigne"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.dateFinOrigine')}
                id="ft-o-resv-dateFinOrigine"
                name="dateFinOrigine"
                data-cy="dateFinOrigine"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.dateAnn')}
                id="ft-o-resv-dateAnn"
                name="dateAnn"
                data-cy="dateAnn"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.pseudoRoomYn')}
                id="ft-o-resv-pseudoRoomYn"
                name="pseudoRoomYn"
                data-cy="pseudoRoomYn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.complementaireYn')}
                id="ft-o-resv-complementaireYn"
                name="complementaireYn"
                data-cy="complementaireYn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.interneYn')}
                id="ft-o-resv-interneYn"
                name="interneYn"
                data-cy="interneYn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.walkinYn')}
                id="ft-o-resv-walkinYn"
                name="walkinYn"
                data-cy="walkinYn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.createurResv')}
                id="ft-o-resv-createurResv"
                name="createurResv"
                data-cy="createurResv"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nomCreateurResv')}
                id="ft-o-resv-nomCreateurResv"
                name="nomCreateurResv"
                data-cy="nomCreateurResv"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codePays')}
                id="ft-o-resv-codePays"
                name="codePays"
                data-cy="codePays"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libPays')}
                id="ft-o-resv-libPays"
                name="libPays"
                data-cy="libPays"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeNationalite')}
                id="ft-o-resv-codeNationalite"
                name="codeNationalite"
                data-cy="codeNationalite"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libNationalite')}
                id="ft-o-resv-libNationalite"
                name="libNationalite"
                data-cy="libNationalite"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeSource')}
                id="ft-o-resv-codeSource"
                name="codeSource"
                data-cy="codeSource"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libSource')}
                id="ft-o-resv-libSource"
                name="libSource"
                data-cy="libSource"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeGrandSource')}
                id="ft-o-resv-codeGrandSource"
                name="codeGrandSource"
                data-cy="codeGrandSource"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeOrigine')}
                id="ft-o-resv-codeOrigine"
                name="codeOrigine"
                data-cy="codeOrigine"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libOrigine')}
                id="ft-o-resv-libOrigine"
                name="libOrigine"
                data-cy="libOrigine"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeMarche')}
                id="ft-o-resv-codeMarche"
                name="codeMarche"
                data-cy="codeMarche"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libMarche')}
                id="ft-o-resv-libMarche"
                name="libMarche"
                data-cy="libMarche"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeGrandMarche')}
                id="ft-o-resv-codeGrandMarche"
                name="codeGrandMarche"
                data-cy="codeGrandMarche"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libGrandMarche')}
                id="ft-o-resv-libGrandMarche"
                name="libGrandMarche"
                data-cy="libGrandMarche"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codePrix')}
                id="ft-o-resv-codePrix"
                name="codePrix"
                data-cy="codePrix"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.categPrix')}
                id="ft-o-resv-categPrix"
                name="categPrix"
                data-cy="categPrix"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.libPrix')}
                id="ft-o-resv-libPrix"
                name="libPrix"
                data-cy="libPrix"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.numChb')}
                id="ft-o-resv-numChb"
                name="numChb"
                data-cy="numChb"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.typeChbLigne')}
                id="ft-o-resv-typeChbLigne"
                name="typeChbLigne"
                data-cy="typeChbLigne"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.descriptionTypeChb')}
                id="ft-o-resv-descriptionTypeChb"
                name="descriptionTypeChb"
                data-cy="descriptionTypeChb"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeTypeChb')}
                id="ft-o-resv-codeTypeChb"
                name="codeTypeChb"
                data-cy="codeTypeChb"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.classChb')}
                id="ft-o-resv-classChb"
                name="classChb"
                data-cy="classChb"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.statutChbResv')}
                id="ft-o-resv-statutChbResv"
                name="statutChbResv"
                data-cy="statutChbResv"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.typeChbDeReservation')}
                id="ft-o-resv-typeChbDeReservation"
                name="typeChbDeReservation"
                data-cy="typeChbDeReservation"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.descriptionTypeChbDeResv')}
                id="ft-o-resv-descriptionTypeChbDeResv"
                name="descriptionTypeChbDeResv"
                data-cy="descriptionTypeChbDeResv"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.codeTypeChbDeResv')}
                id="ft-o-resv-codeTypeChbDeResv"
                name="codeTypeChbDeResv"
                data-cy="codeTypeChbDeResv"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.circuitDistribution')}
                id="ft-o-resv-circuitDistribution"
                name="circuitDistribution"
                data-cy="circuitDistribution"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.circuitDistribUserRegroup')}
                id="ft-o-resv-circuitDistribUserRegroup"
                name="circuitDistribUserRegroup"
                data-cy="circuitDistribUserRegroup"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbResvAnn')}
                id="ft-o-resv-nbResvAnn"
                name="nbResvAnn"
                data-cy="nbResvAnn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbNuitee')}
                id="ft-o-resv-nbNuitee"
                name="nbNuitee"
                data-cy="nbNuitee"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbNuiteeNnDed')}
                id="ft-o-resv-nbNuiteeNnDed"
                name="nbNuiteeNnDed"
                data-cy="nbNuiteeNnDed"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbNuiteeGlobal')}
                id="ft-o-resv-nbNuiteeGlobal"
                name="nbNuiteeGlobal"
                data-cy="nbNuiteeGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbOccupationMultiple')}
                id="ft-o-resv-nbOccupationMultiple"
                name="nbOccupationMultiple"
                data-cy="nbOccupationMultiple"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbAduGlobal')}
                id="ft-o-resv-nbAduGlobal"
                name="nbAduGlobal"
                data-cy="nbAduGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbEnfGlobal')}
                id="ft-o-resv-nbEnfGlobal"
                name="nbEnfGlobal"
                data-cy="nbEnfGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbPersDayUGlobal')}
                id="ft-o-resv-nbPersDayUGlobal"
                name="nbPersDayUGlobal"
                data-cy="nbPersDayUGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbPersArrGlobal')}
                id="ft-o-resv-nbPersArrGlobal"
                name="nbPersArrGlobal"
                data-cy="nbPersArrGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbPersDepGlobal')}
                id="ft-o-resv-nbPersDepGlobal"
                name="nbPersDepGlobal"
                data-cy="nbPersDepGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbPersAnn')}
                id="ft-o-resv-nbPersAnn"
                name="nbPersAnn"
                data-cy="nbPersAnn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbPersNoshow')}
                id="ft-o-resv-nbPersNoshow"
                name="nbPersNoshow"
                data-cy="nbPersNoshow"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbChbDayUGlobal')}
                id="ft-o-resv-nbChbDayUGlobal"
                name="nbChbDayUGlobal"
                data-cy="nbChbDayUGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbChbArrGlobal')}
                id="ft-o-resv-nbChbArrGlobal"
                name="nbChbArrGlobal"
                data-cy="nbChbArrGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbChbDepGlobal')}
                id="ft-o-resv-nbChbDepGlobal"
                name="nbChbDepGlobal"
                data-cy="nbChbDepGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbChbAnn')}
                id="ft-o-resv-nbChbAnn"
                name="nbChbAnn"
                data-cy="nbChbAnn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.nbChbNoshow')}
                id="ft-o-resv-nbChbNoshow"
                name="nbChbNoshow"
                data-cy="nbChbNoshow"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuNetChambreGlobal')}
                id="ft-o-resv-revenuNetChambreGlobal"
                name="revenuNetChambreGlobal"
                data-cy="revenuNetChambreGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuTaxeChambreGlobal')}
                id="ft-o-resv-revenuTaxeChambreGlobal"
                name="revenuTaxeChambreGlobal"
                data-cy="revenuTaxeChambreGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuNetBqGlobal')}
                id="ft-o-resv-revenuNetBqGlobal"
                name="revenuNetBqGlobal"
                data-cy="revenuNetBqGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuTaxeBqGlobal')}
                id="ft-o-resv-revenuTaxeBqGlobal"
                name="revenuTaxeBqGlobal"
                data-cy="revenuTaxeBqGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuNetExtraGlobal')}
                id="ft-o-resv-revenuNetExtraGlobal"
                name="revenuNetExtraGlobal"
                data-cy="revenuNetExtraGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuTaxeExtraGlobal')}
                id="ft-o-resv-revenuTaxeExtraGlobal"
                name="revenuTaxeExtraGlobal"
                data-cy="revenuTaxeExtraGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuNetTotalGlobal')}
                id="ft-o-resv-revenuNetTotalGlobal"
                name="revenuNetTotalGlobal"
                data-cy="revenuNetTotalGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.revenuTaxeTotalGlobal')}
                id="ft-o-resv-revenuTaxeTotalGlobal"
                name="revenuTaxeTotalGlobal"
                data-cy="revenuTaxeTotalGlobal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.prodRevenuChambre')}
                id="ft-o-resv-prodRevenuChambre"
                name="prodRevenuChambre"
                data-cy="prodRevenuChambre"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.prodRevenuBq')}
                id="ft-o-resv-prodRevenuBq"
                name="prodRevenuBq"
                data-cy="prodRevenuBq"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.prodRevenuExtra')}
                id="ft-o-resv-prodRevenuExtra"
                name="prodRevenuExtra"
                data-cy="prodRevenuExtra"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.prodRevenuTotal')}
                id="ft-o-resv-prodRevenuTotal"
                name="prodRevenuTotal"
                data-cy="prodRevenuTotal"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.prodChambreNbNuitees')}
                id="ft-o-resv-prodChambreNbNuitees"
                name="prodChambreNbNuitees"
                data-cy="prodChambreNbNuitees"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.datesSejourRensYn')}
                id="ft-o-resv-datesSejourRensYn"
                name="datesSejourRensYn"
                data-cy="datesSejourRensYn"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.techEventType')}
                id="ft-o-resv-techEventType"
                name="techEventType"
                data-cy="techEventType"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.techResvInvType')}
                id="ft-o-resv-techResvInvType"
                name="techResvInvType"
                data-cy="techResvInvType"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.techOrigine')}
                id="ft-o-resv-techOrigine"
                name="techOrigine"
                data-cy="techOrigine"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.techGrpNumOrdre')}
                id="ft-o-resv-techGrpNumOrdre"
                name="techGrpNumOrdre"
                data-cy="techGrpNumOrdre"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.techCreateDate')}
                id="ft-o-resv-techCreateDate"
                name="techCreateDate"
                data-cy="techCreateDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.techUpdateDate')}
                id="ft-o-resv-techUpdateDate"
                name="techUpdateDate"
                data-cy="techUpdateDate"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.ftOResv.resvNameIdPrincipal')}
                id="ft-o-resv-resvNameIdPrincipal"
                name="resvNameIdPrincipal"
                data-cy="resvNameIdPrincipal"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/ft-o-resv" replace color="info">
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

export default FtOResvUpdate;
