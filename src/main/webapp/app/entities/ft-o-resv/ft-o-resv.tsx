import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getPaginationState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities } from './ft-o-resv.reducer';

export const FtOResv = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const ftOResvList = useAppSelector(state => state.ftOResv.entities);
  const loading = useAppSelector(state => state.ftOResv.loading);
  const totalItems = useAppSelector(state => state.ftOResv.totalItems);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      }),
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (pageLocation.search !== endURL) {
      navigate(`${pageLocation.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(pageLocation.search);
    const page = params.get('page');
    const sort = params.get(SORT);
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [pageLocation.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const getSortIconByFieldName = (fieldName: string) => {
    const sortFieldName = paginationState.sort;
    const order = paginationState.order;
    if (sortFieldName !== fieldName) {
      return faSort;
    } else {
      return order === ASC ? faSortUp : faSortDown;
    }
  };

  return (
    <div>
      <h2 id="ft-o-resv-heading" data-cy="FtOResvHeading">
        <Translate contentKey="operaBigApplicationApp.ftOResv.home.title">Ft O Resvs</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="operaBigApplicationApp.ftOResv.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/ft-o-resv/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="operaBigApplicationApp.ftOResv.home.createLabel">Create new Ft O Resv</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {ftOResvList && ftOResvList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('numLigne')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.numLigne">Num Ligne</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne')} />
                </th>
                <th className="hand" onClick={sort('resort')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.resort">Resort</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort')} />
                </th>
                <th className="hand" onClick={sort('resvNameId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.resvNameId">Resv Name Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId')} />
                </th>
                <th className="hand" onClick={sort('clientOId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.clientOId">Client O Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId')} />
                </th>
                <th className="hand" onClick={sort('typeChb')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.typeChb">Type Chb</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb')} />
                </th>
                <th className="hand" onClick={sort('businessDate')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.businessDate">Business Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('businessDate')} />
                </th>
                <th className="hand" onClick={sort('numOrdre')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.numOrdre">Num Ordre</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numOrdre')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.confirmationNo">Confirmation No</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.clientMdmId">Client Mdm Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId')} />
                </th>
                <th className="hand" onClick={sort('nameId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nameId">Name Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId')} />
                </th>
                <th className="hand" onClick={sort('nameIdLigne')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nameIdLigne">Name Id Ligne</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameIdLigne')} />
                </th>
                <th className="hand" onClick={sort('contactId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.contactId">Contact Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId')} />
                </th>
                <th className="hand" onClick={sort('agenceId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.agenceId">Agence Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId')} />
                </th>
                <th className="hand" onClick={sort('agenceNom')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.agenceNom">Agence Nom</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom')} />
                </th>
                <th className="hand" onClick={sort('societeId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.societeId">Societe Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId')} />
                </th>
                <th className="hand" onClick={sort('groupeId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.groupeId">Groupe Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId')} />
                </th>
                <th className="hand" onClick={sort('membreId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.membreId">Membre Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('membreId')} />
                </th>
                <th className="hand" onClick={sort('sourceProfileId')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.sourceProfileId">Source Profile Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('sourceProfileId')} />
                </th>
                <th className="hand" onClick={sort('numBloc')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.numBloc">Num Bloc</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc')} />
                </th>
                <th className="hand" onClick={sort('statutResv')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.statutResv">Statut Resv</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv')} />
                </th>
                <th className="hand" onClick={sort('statutVip')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.statutVip">Statut Vip</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutVip')} />
                </th>
                <th className="hand" onClick={sort('dateDebutLigne')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.dateDebutLigne">Date Debut Ligne</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutLigne')} />
                </th>
                <th className="hand" onClick={sort('dateFinLigne')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.dateFinLigne">Date Fin Ligne</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinLigne')} />
                </th>
                <th className="hand" onClick={sort('dateFinOrigine')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.dateFinOrigine">Date Fin Origine</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinOrigine')} />
                </th>
                <th className="hand" onClick={sort('dateAnn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.dateAnn">Date Ann</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnn')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.pseudoRoomYn">Pseudo Room Yn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn')} />
                </th>
                <th className="hand" onClick={sort('complementaireYn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.complementaireYn">Complementaire Yn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('complementaireYn')} />
                </th>
                <th className="hand" onClick={sort('interneYn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.interneYn">Interne Yn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('interneYn')} />
                </th>
                <th className="hand" onClick={sort('walkinYn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.walkinYn">Walkin Yn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('walkinYn')} />
                </th>
                <th className="hand" onClick={sort('createurResv')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.createurResv">Createur Resv</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nomCreateurResv">Nom Createur Resv</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv')} />
                </th>
                <th className="hand" onClick={sort('codePays')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codePays">Code Pays</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays')} />
                </th>
                <th className="hand" onClick={sort('libPays')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libPays">Lib Pays</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeNationalite">Code Nationalite</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite')} />
                </th>
                <th className="hand" onClick={sort('libNationalite')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libNationalite">Lib Nationalite</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite')} />
                </th>
                <th className="hand" onClick={sort('codeSource')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeSource">Code Source</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource')} />
                </th>
                <th className="hand" onClick={sort('libSource')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libSource">Lib Source</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeGrandSource">Code Grand Source</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeOrigine">Code Origine</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine')} />
                </th>
                <th className="hand" onClick={sort('libOrigine')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libOrigine">Lib Origine</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine')} />
                </th>
                <th className="hand" onClick={sort('codeMarche')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeMarche">Code Marche</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche')} />
                </th>
                <th className="hand" onClick={sort('libMarche')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libMarche">Lib Marche</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeGrandMarche">Code Grand Marche</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libGrandMarche">Lib Grand Marche</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche')} />
                </th>
                <th className="hand" onClick={sort('codePrix')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codePrix">Code Prix</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix')} />
                </th>
                <th className="hand" onClick={sort('categPrix')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.categPrix">Categ Prix</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix')} />
                </th>
                <th className="hand" onClick={sort('libPrix')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.libPrix">Lib Prix</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix')} />
                </th>
                <th className="hand" onClick={sort('numChb')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.numChb">Num Chb</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb')} />
                </th>
                <th className="hand" onClick={sort('typeChbLigne')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.typeChbLigne">Type Chb Ligne</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbLigne')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.descriptionTypeChb">Description Type Chb</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeTypeChb">Code Type Chb</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb')} />
                </th>
                <th className="hand" onClick={sort('classChb')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.classChb">Class Chb</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb')} />
                </th>
                <th className="hand" onClick={sort('statutChbResv')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.statutChbResv">Statut Chb Resv</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutChbResv')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.typeChbDeReservation">Type Chb De Reservation</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.descriptionTypeChbDeResv">Description Type Chb De Resv</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.codeTypeChbDeResv">Code Type Chb De Resv</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.circuitDistribution">Circuit Distribution</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.circuitDistribUserRegroup">Circuit Distrib User Regroup</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbResvAnn">Nb Resv Ann</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbNuitee">Nb Nuitee</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbNuiteeNnDed">Nb Nuitee Nn Ded</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbNuiteeGlobal">Nb Nuitee Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbOccupationMultiple')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbOccupationMultiple">Nb Occupation Multiple</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbOccupationMultiple')} />
                </th>
                <th className="hand" onClick={sort('nbAduGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbAduGlobal">Nb Adu Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAduGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbEnfGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbEnfGlobal">Nb Enf Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnfGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayUGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersDayUGlobal">Nb Pers Day U Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayUGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbPersArrGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersArrGlobal">Nb Pers Arr Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArrGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbPersDepGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersDepGlobal">Nb Pers Dep Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDepGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersAnn">Nb Pers Ann</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbPersNoshow">Nb Pers Noshow</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayUGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbDayUGlobal">Nb Chb Day U Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayUGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbChbArrGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbArrGlobal">Nb Chb Arr Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArrGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbChbDepGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbDepGlobal">Nb Chb Dep Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDepGlobal')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbAnn">Nb Chb Ann</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.nbChbNoshow">Nb Chb Noshow</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambreGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetChambreGlobal">Revenu Net Chambre Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambreGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambreGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeChambreGlobal">Revenu Taxe Chambre Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambreGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBqGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetBqGlobal">Revenu Net Bq Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBqGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBqGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeBqGlobal">Revenu Taxe Bq Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBqGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtraGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetExtraGlobal">Revenu Net Extra Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtraGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtraGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeExtraGlobal">Revenu Taxe Extra Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtraGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotalGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuNetTotalGlobal">Revenu Net Total Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotalGlobal')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotalGlobal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.revenuTaxeTotalGlobal">Revenu Taxe Total Global</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotalGlobal')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuChambre')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuChambre">Prod Revenu Chambre</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuChambre')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuBq')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuBq">Prod Revenu Bq</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuBq')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuExtra')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuExtra">Prod Revenu Extra</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuExtra')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuTotal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.prodRevenuTotal">Prod Revenu Total</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuTotal')} />
                </th>
                <th className="hand" onClick={sort('prodChambreNbNuitees')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.prodChambreNbNuitees">Prod Chambre Nb Nuitees</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodChambreNbNuitees')} />
                </th>
                <th className="hand" onClick={sort('datesSejourRensYn')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.datesSejourRensYn">Dates Sejour Rens Yn</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datesSejourRensYn')} />
                </th>
                <th className="hand" onClick={sort('techEventType')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.techEventType">Tech Event Type</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techEventType')} />
                </th>
                <th className="hand" onClick={sort('techResvInvType')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.techResvInvType">Tech Resv Inv Type</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techResvInvType')} />
                </th>
                <th className="hand" onClick={sort('techOrigine')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.techOrigine">Tech Origine</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techOrigine')} />
                </th>
                <th className="hand" onClick={sort('techGrpNumOrdre')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.techGrpNumOrdre">Tech Grp Num Ordre</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techGrpNumOrdre')} />
                </th>
                <th className="hand" onClick={sort('techCreateDate')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.techCreateDate">Tech Create Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreateDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdateDate')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.techUpdateDate">Tech Update Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdateDate')} />
                </th>
                <th className="hand" onClick={sort('resvNameIdPrincipal')}>
                  <Translate contentKey="operaBigApplicationApp.ftOResv.resvNameIdPrincipal">Resv Name Id Principal</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameIdPrincipal')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {ftOResvList.map((ftOResv, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/ft-o-resv/${ftOResv.id}`} color="link" size="sm">
                      {ftOResv.id}
                    </Button>
                  </td>
                  <td>{ftOResv.numLigne}</td>
                  <td>{ftOResv.resort}</td>
                  <td>{ftOResv.resvNameId}</td>
                  <td>{ftOResv.clientOId}</td>
                  <td>{ftOResv.typeChb}</td>
                  <td>
                    {ftOResv.businessDate ? <TextFormat type="date" value={ftOResv.businessDate} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{ftOResv.numOrdre}</td>
                  <td>{ftOResv.confirmationNo}</td>
                  <td>{ftOResv.clientMdmId}</td>
                  <td>{ftOResv.nameId}</td>
                  <td>{ftOResv.nameIdLigne}</td>
                  <td>{ftOResv.contactId}</td>
                  <td>{ftOResv.agenceId}</td>
                  <td>{ftOResv.agenceNom}</td>
                  <td>{ftOResv.societeId}</td>
                  <td>{ftOResv.groupeId}</td>
                  <td>{ftOResv.membreId}</td>
                  <td>{ftOResv.sourceProfileId}</td>
                  <td>{ftOResv.numBloc}</td>
                  <td>{ftOResv.statutResv}</td>
                  <td>{ftOResv.statutVip}</td>
                  <td>
                    {ftOResv.dateDebutLigne ? (
                      <TextFormat type="date" value={ftOResv.dateDebutLigne} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {ftOResv.dateFinLigne ? <TextFormat type="date" value={ftOResv.dateFinLigne} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {ftOResv.dateFinOrigine ? (
                      <TextFormat type="date" value={ftOResv.dateFinOrigine} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{ftOResv.dateAnn ? <TextFormat type="date" value={ftOResv.dateAnn} format={APP_LOCAL_DATE_FORMAT} /> : null}</td>
                  <td>{ftOResv.pseudoRoomYn}</td>
                  <td>{ftOResv.complementaireYn}</td>
                  <td>{ftOResv.interneYn}</td>
                  <td>{ftOResv.walkinYn}</td>
                  <td>{ftOResv.createurResv}</td>
                  <td>{ftOResv.nomCreateurResv}</td>
                  <td>{ftOResv.codePays}</td>
                  <td>{ftOResv.libPays}</td>
                  <td>{ftOResv.codeNationalite}</td>
                  <td>{ftOResv.libNationalite}</td>
                  <td>{ftOResv.codeSource}</td>
                  <td>{ftOResv.libSource}</td>
                  <td>{ftOResv.codeGrandSource}</td>
                  <td>{ftOResv.codeOrigine}</td>
                  <td>{ftOResv.libOrigine}</td>
                  <td>{ftOResv.codeMarche}</td>
                  <td>{ftOResv.libMarche}</td>
                  <td>{ftOResv.codeGrandMarche}</td>
                  <td>{ftOResv.libGrandMarche}</td>
                  <td>{ftOResv.codePrix}</td>
                  <td>{ftOResv.categPrix}</td>
                  <td>{ftOResv.libPrix}</td>
                  <td>{ftOResv.numChb}</td>
                  <td>{ftOResv.typeChbLigne}</td>
                  <td>{ftOResv.descriptionTypeChb}</td>
                  <td>{ftOResv.codeTypeChb}</td>
                  <td>{ftOResv.classChb}</td>
                  <td>{ftOResv.statutChbResv}</td>
                  <td>{ftOResv.typeChbDeReservation}</td>
                  <td>{ftOResv.descriptionTypeChbDeResv}</td>
                  <td>{ftOResv.codeTypeChbDeResv}</td>
                  <td>{ftOResv.circuitDistribution}</td>
                  <td>{ftOResv.circuitDistribUserRegroup}</td>
                  <td>{ftOResv.nbResvAnn}</td>
                  <td>{ftOResv.nbNuitee}</td>
                  <td>{ftOResv.nbNuiteeNnDed}</td>
                  <td>{ftOResv.nbNuiteeGlobal}</td>
                  <td>{ftOResv.nbOccupationMultiple}</td>
                  <td>{ftOResv.nbAduGlobal}</td>
                  <td>{ftOResv.nbEnfGlobal}</td>
                  <td>{ftOResv.nbPersDayUGlobal}</td>
                  <td>{ftOResv.nbPersArrGlobal}</td>
                  <td>{ftOResv.nbPersDepGlobal}</td>
                  <td>{ftOResv.nbPersAnn}</td>
                  <td>{ftOResv.nbPersNoshow}</td>
                  <td>{ftOResv.nbChbDayUGlobal}</td>
                  <td>{ftOResv.nbChbArrGlobal}</td>
                  <td>{ftOResv.nbChbDepGlobal}</td>
                  <td>{ftOResv.nbChbAnn}</td>
                  <td>{ftOResv.nbChbNoshow}</td>
                  <td>{ftOResv.revenuNetChambreGlobal}</td>
                  <td>{ftOResv.revenuTaxeChambreGlobal}</td>
                  <td>{ftOResv.revenuNetBqGlobal}</td>
                  <td>{ftOResv.revenuTaxeBqGlobal}</td>
                  <td>{ftOResv.revenuNetExtraGlobal}</td>
                  <td>{ftOResv.revenuTaxeExtraGlobal}</td>
                  <td>{ftOResv.revenuNetTotalGlobal}</td>
                  <td>{ftOResv.revenuTaxeTotalGlobal}</td>
                  <td>{ftOResv.prodRevenuChambre}</td>
                  <td>{ftOResv.prodRevenuBq}</td>
                  <td>{ftOResv.prodRevenuExtra}</td>
                  <td>{ftOResv.prodRevenuTotal}</td>
                  <td>{ftOResv.prodChambreNbNuitees}</td>
                  <td>{ftOResv.datesSejourRensYn}</td>
                  <td>{ftOResv.techEventType}</td>
                  <td>{ftOResv.techResvInvType}</td>
                  <td>{ftOResv.techOrigine}</td>
                  <td>{ftOResv.techGrpNumOrdre}</td>
                  <td>
                    {ftOResv.techCreateDate ? (
                      <TextFormat type="date" value={ftOResv.techCreateDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {ftOResv.techUpdateDate ? (
                      <TextFormat type="date" value={ftOResv.techUpdateDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{ftOResv.resvNameIdPrincipal}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/ft-o-resv/${ftOResv.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/ft-o-resv/${ftOResv.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        onClick={() =>
                          (window.location.href = `/ft-o-resv/${ftOResv.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
                        }
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="operaBigApplicationApp.ftOResv.home.notFound">No Ft O Resvs found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={ftOResvList && ftOResvList.length > 0 ? '' : 'd-none'}>
          <div className="justify-content-center d-flex">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </div>
          <div className="justify-content-center d-flex">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={totalItems}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default FtOResv;
