import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './ft-o-resv.reducer';

export const FtOResvDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const ftOResvEntity = useAppSelector(state => state.ftOResv.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ftOResvDetailsHeading">
          <Translate contentKey="operaBigApplicationApp.ftOResv.detail.title">FtOResv</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.id}</dd>
          <dt>
            <span id="numLigne">
              <Translate contentKey="operaBigApplicationApp.ftOResv.numLigne">Num Ligne</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.numLigne}</dd>
          <dt>
            <span id="resort">
              <Translate contentKey="operaBigApplicationApp.ftOResv.resort">Resort</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.resort}</dd>
          <dt>
            <span id="resvNameId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.resvNameId">Resv Name Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.resvNameId}</dd>
          <dt>
            <span id="clientOId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.clientOId">Client O Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.clientOId}</dd>
          <dt>
            <span id="typeChb">
              <Translate contentKey="operaBigApplicationApp.ftOResv.typeChb">Type Chb</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.typeChb}</dd>
          <dt>
            <span id="businessDate">
              <Translate contentKey="operaBigApplicationApp.ftOResv.businessDate">Business Date</Translate>
            </span>
          </dt>
          <dd>
            {ftOResvEntity.businessDate ? (
              <TextFormat value={ftOResvEntity.businessDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="numOrdre">
              <Translate contentKey="operaBigApplicationApp.ftOResv.numOrdre">Num Ordre</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.numOrdre}</dd>
          <dt>
            <span id="confirmationNo">
              <Translate contentKey="operaBigApplicationApp.ftOResv.confirmationNo">Confirmation No</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.confirmationNo}</dd>
          <dt>
            <span id="clientMdmId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.clientMdmId">Client Mdm Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.clientMdmId}</dd>
          <dt>
            <span id="nameId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nameId">Name Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nameId}</dd>
          <dt>
            <span id="nameIdLigne">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nameIdLigne">Name Id Ligne</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nameIdLigne}</dd>
          <dt>
            <span id="contactId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.contactId">Contact Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.contactId}</dd>
          <dt>
            <span id="agenceId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.agenceId">Agence Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.agenceId}</dd>
          <dt>
            <span id="agenceNom">
              <Translate contentKey="operaBigApplicationApp.ftOResv.agenceNom">Agence Nom</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.agenceNom}</dd>
          <dt>
            <span id="societeId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.societeId">Societe Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.societeId}</dd>
          <dt>
            <span id="groupeId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.groupeId">Groupe Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.groupeId}</dd>
          <dt>
            <span id="membreId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.membreId">Membre Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.membreId}</dd>
          <dt>
            <span id="sourceProfileId">
              <Translate contentKey="operaBigApplicationApp.ftOResv.sourceProfileId">Source Profile Id</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.sourceProfileId}</dd>
          <dt>
            <span id="numBloc">
              <Translate contentKey="operaBigApplicationApp.ftOResv.numBloc">Num Bloc</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.numBloc}</dd>
          <dt>
            <span id="statutResv">
              <Translate contentKey="operaBigApplicationApp.ftOResv.statutResv">Statut Resv</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.statutResv}</dd>
          <dt>
            <span id="statutVip">
              <Translate contentKey="operaBigApplicationApp.ftOResv.statutVip">Statut Vip</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.statutVip}</dd>
          <dt>
            <span id="dateDebutLigne">
              <Translate contentKey="operaBigApplicationApp.ftOResv.dateDebutLigne">Date Debut Ligne</Translate>
            </span>
          </dt>
          <dd>
            {ftOResvEntity.dateDebutLigne ? (
              <TextFormat value={ftOResvEntity.dateDebutLigne} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinLigne">
              <Translate contentKey="operaBigApplicationApp.ftOResv.dateFinLigne">Date Fin Ligne</Translate>
            </span>
          </dt>
          <dd>
            {ftOResvEntity.dateFinLigne ? (
              <TextFormat value={ftOResvEntity.dateFinLigne} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinOrigine">
              <Translate contentKey="operaBigApplicationApp.ftOResv.dateFinOrigine">Date Fin Origine</Translate>
            </span>
          </dt>
          <dd>
            {ftOResvEntity.dateFinOrigine ? (
              <TextFormat value={ftOResvEntity.dateFinOrigine} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.dateAnn">Date Ann</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.dateAnn ? <TextFormat value={ftOResvEntity.dateAnn} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="pseudoRoomYn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.pseudoRoomYn">Pseudo Room Yn</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.pseudoRoomYn}</dd>
          <dt>
            <span id="complementaireYn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.complementaireYn">Complementaire Yn</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.complementaireYn}</dd>
          <dt>
            <span id="interneYn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.interneYn">Interne Yn</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.interneYn}</dd>
          <dt>
            <span id="walkinYn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.walkinYn">Walkin Yn</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.walkinYn}</dd>
          <dt>
            <span id="createurResv">
              <Translate contentKey="operaBigApplicationApp.ftOResv.createurResv">Createur Resv</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.createurResv}</dd>
          <dt>
            <span id="nomCreateurResv">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nomCreateurResv">Nom Createur Resv</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nomCreateurResv}</dd>
          <dt>
            <span id="codePays">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codePays">Code Pays</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codePays}</dd>
          <dt>
            <span id="libPays">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libPays">Lib Pays</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libPays}</dd>
          <dt>
            <span id="codeNationalite">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeNationalite">Code Nationalite</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeNationalite}</dd>
          <dt>
            <span id="libNationalite">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libNationalite">Lib Nationalite</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libNationalite}</dd>
          <dt>
            <span id="codeSource">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeSource">Code Source</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeSource}</dd>
          <dt>
            <span id="libSource">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libSource">Lib Source</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libSource}</dd>
          <dt>
            <span id="codeGrandSource">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeGrandSource">Code Grand Source</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeGrandSource}</dd>
          <dt>
            <span id="codeOrigine">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeOrigine">Code Origine</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeOrigine}</dd>
          <dt>
            <span id="libOrigine">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libOrigine">Lib Origine</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libOrigine}</dd>
          <dt>
            <span id="codeMarche">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeMarche">Code Marche</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeMarche}</dd>
          <dt>
            <span id="libMarche">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libMarche">Lib Marche</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libMarche}</dd>
          <dt>
            <span id="codeGrandMarche">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeGrandMarche">Code Grand Marche</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeGrandMarche}</dd>
          <dt>
            <span id="libGrandMarche">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libGrandMarche">Lib Grand Marche</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libGrandMarche}</dd>
          <dt>
            <span id="codePrix">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codePrix">Code Prix</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codePrix}</dd>
          <dt>
            <span id="categPrix">
              <Translate contentKey="operaBigApplicationApp.ftOResv.categPrix">Categ Prix</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.categPrix}</dd>
          <dt>
            <span id="libPrix">
              <Translate contentKey="operaBigApplicationApp.ftOResv.libPrix">Lib Prix</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.libPrix}</dd>
          <dt>
            <span id="numChb">
              <Translate contentKey="operaBigApplicationApp.ftOResv.numChb">Num Chb</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.numChb}</dd>
          <dt>
            <span id="typeChbLigne">
              <Translate contentKey="operaBigApplicationApp.ftOResv.typeChbLigne">Type Chb Ligne</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.typeChbLigne}</dd>
          <dt>
            <span id="descriptionTypeChb">
              <Translate contentKey="operaBigApplicationApp.ftOResv.descriptionTypeChb">Description Type Chb</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.descriptionTypeChb}</dd>
          <dt>
            <span id="codeTypeChb">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeTypeChb">Code Type Chb</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeTypeChb}</dd>
          <dt>
            <span id="classChb">
              <Translate contentKey="operaBigApplicationApp.ftOResv.classChb">Class Chb</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.classChb}</dd>
          <dt>
            <span id="statutChbResv">
              <Translate contentKey="operaBigApplicationApp.ftOResv.statutChbResv">Statut Chb Resv</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.statutChbResv}</dd>
          <dt>
            <span id="typeChbDeReservation">
              <Translate contentKey="operaBigApplicationApp.ftOResv.typeChbDeReservation">Type Chb De Reservation</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.typeChbDeReservation}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv">
              <Translate contentKey="operaBigApplicationApp.ftOResv.descriptionTypeChbDeResv">Description Type Chb De Resv</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.descriptionTypeChbDeResv}</dd>
          <dt>
            <span id="codeTypeChbDeResv">
              <Translate contentKey="operaBigApplicationApp.ftOResv.codeTypeChbDeResv">Code Type Chb De Resv</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.codeTypeChbDeResv}</dd>
          <dt>
            <span id="circuitDistribution">
              <Translate contentKey="operaBigApplicationApp.ftOResv.circuitDistribution">Circuit Distribution</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.circuitDistribution}</dd>
          <dt>
            <span id="circuitDistribUserRegroup">
              <Translate contentKey="operaBigApplicationApp.ftOResv.circuitDistribUserRegroup">Circuit Distrib User Regroup</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.circuitDistribUserRegroup}</dd>
          <dt>
            <span id="nbResvAnn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbResvAnn">Nb Resv Ann</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbResvAnn}</dd>
          <dt>
            <span id="nbNuitee">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbNuitee">Nb Nuitee</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbNuitee}</dd>
          <dt>
            <span id="nbNuiteeNnDed">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbNuiteeNnDed">Nb Nuitee Nn Ded</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbNuiteeNnDed}</dd>
          <dt>
            <span id="nbNuiteeGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbNuiteeGlobal">Nb Nuitee Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbNuiteeGlobal}</dd>
          <dt>
            <span id="nbOccupationMultiple">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbOccupationMultiple">Nb Occupation Multiple</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbOccupationMultiple}</dd>
          <dt>
            <span id="nbAduGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbAduGlobal">Nb Adu Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbAduGlobal}</dd>
          <dt>
            <span id="nbEnfGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbEnfGlobal">Nb Enf Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbEnfGlobal}</dd>
          <dt>
            <span id="nbPersDayUGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersDayUGlobal">Nb Pers Day U Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbPersDayUGlobal}</dd>
          <dt>
            <span id="nbPersArrGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersArrGlobal">Nb Pers Arr Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbPersArrGlobal}</dd>
          <dt>
            <span id="nbPersDepGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersDepGlobal">Nb Pers Dep Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbPersDepGlobal}</dd>
          <dt>
            <span id="nbPersAnn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersAnn">Nb Pers Ann</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbPersAnn}</dd>
          <dt>
            <span id="nbPersNoshow">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersNoshow">Nb Pers Noshow</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbPersNoshow}</dd>
          <dt>
            <span id="nbChbDayUGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbDayUGlobal">Nb Chb Day U Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbChbDayUGlobal}</dd>
          <dt>
            <span id="nbChbArrGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbArrGlobal">Nb Chb Arr Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbChbArrGlobal}</dd>
          <dt>
            <span id="nbChbDepGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbDepGlobal">Nb Chb Dep Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbChbDepGlobal}</dd>
          <dt>
            <span id="nbChbAnn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbAnn">Nb Chb Ann</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbChbAnn}</dd>
          <dt>
            <span id="nbChbNoshow">
              <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbNoshow">Nb Chb Noshow</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.nbChbNoshow}</dd>
          <dt>
            <span id="revenuNetChambreGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetChambreGlobal">Revenu Net Chambre Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuNetChambreGlobal}</dd>
          <dt>
            <span id="revenuTaxeChambreGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeChambreGlobal">Revenu Taxe Chambre Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuTaxeChambreGlobal}</dd>
          <dt>
            <span id="revenuNetBqGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetBqGlobal">Revenu Net Bq Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuNetBqGlobal}</dd>
          <dt>
            <span id="revenuTaxeBqGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeBqGlobal">Revenu Taxe Bq Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuTaxeBqGlobal}</dd>
          <dt>
            <span id="revenuNetExtraGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetExtraGlobal">Revenu Net Extra Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuNetExtraGlobal}</dd>
          <dt>
            <span id="revenuTaxeExtraGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeExtraGlobal">Revenu Taxe Extra Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuTaxeExtraGlobal}</dd>
          <dt>
            <span id="revenuNetTotalGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetTotalGlobal">Revenu Net Total Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuNetTotalGlobal}</dd>
          <dt>
            <span id="revenuTaxeTotalGlobal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeTotalGlobal">Revenu Taxe Total Global</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.revenuTaxeTotalGlobal}</dd>
          <dt>
            <span id="prodRevenuChambre">
              <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuChambre">Prod Revenu Chambre</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.prodRevenuChambre}</dd>
          <dt>
            <span id="prodRevenuBq">
              <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuBq">Prod Revenu Bq</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.prodRevenuBq}</dd>
          <dt>
            <span id="prodRevenuExtra">
              <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuExtra">Prod Revenu Extra</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.prodRevenuExtra}</dd>
          <dt>
            <span id="prodRevenuTotal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuTotal">Prod Revenu Total</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.prodRevenuTotal}</dd>
          <dt>
            <span id="prodChambreNbNuitees">
              <Translate contentKey="operaBigApplicationApp.ftOResv.prodChambreNbNuitees">Prod Chambre Nb Nuitees</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.prodChambreNbNuitees}</dd>
          <dt>
            <span id="datesSejourRensYn">
              <Translate contentKey="operaBigApplicationApp.ftOResv.datesSejourRensYn">Dates Sejour Rens Yn</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.datesSejourRensYn}</dd>
          <dt>
            <span id="techEventType">
              <Translate contentKey="operaBigApplicationApp.ftOResv.techEventType">Tech Event Type</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.techEventType}</dd>
          <dt>
            <span id="techResvInvType">
              <Translate contentKey="operaBigApplicationApp.ftOResv.techResvInvType">Tech Resv Inv Type</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.techResvInvType}</dd>
          <dt>
            <span id="techOrigine">
              <Translate contentKey="operaBigApplicationApp.ftOResv.techOrigine">Tech Origine</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.techOrigine}</dd>
          <dt>
            <span id="techGrpNumOrdre">
              <Translate contentKey="operaBigApplicationApp.ftOResv.techGrpNumOrdre">Tech Grp Num Ordre</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.techGrpNumOrdre}</dd>
          <dt>
            <span id="techCreateDate">
              <Translate contentKey="operaBigApplicationApp.ftOResv.techCreateDate">Tech Create Date</Translate>
            </span>
          </dt>
          <dd>
            {ftOResvEntity.techCreateDate ? (
              <TextFormat value={ftOResvEntity.techCreateDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdateDate">
              <Translate contentKey="operaBigApplicationApp.ftOResv.techUpdateDate">Tech Update Date</Translate>
            </span>
          </dt>
          <dd>
            {ftOResvEntity.techUpdateDate ? (
              <TextFormat value={ftOResvEntity.techUpdateDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="resvNameIdPrincipal">
              <Translate contentKey="operaBigApplicationApp.ftOResv.resvNameIdPrincipal">Resv Name Id Principal</Translate>
            </span>
          </dt>
          <dd>{ftOResvEntity.resvNameIdPrincipal}</dd>
        </dl>
        <Button tag={Link} to="/ft-o-resv" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ft-o-resv/${ftOResvEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FtOResvDetail;
