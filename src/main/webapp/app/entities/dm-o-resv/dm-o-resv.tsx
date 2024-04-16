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

import { getEntities } from './dm-o-resv.reducer';

export const DmOResv = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const dmOResvList = useAppSelector(state => state.dmOResv.entities);
  const loading = useAppSelector(state => state.dmOResv.loading);
  const totalItems = useAppSelector(state => state.dmOResv.totalItems);

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
      <h2 id="dm-o-resv-heading" data-cy="DmOResvHeading">
        <Translate contentKey="operaBigApplicationApp.dmOResv.home.title">Dm O Resvs</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="operaBigApplicationApp.dmOResv.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/dm-o-resv/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="operaBigApplicationApp.dmOResv.home.createLabel">Create new Dm O Resv</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {dmOResvList && dmOResvList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('numLigne1')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numLigne1">Num Ligne 1</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne1')} />
                </th>
                <th className="hand" onClick={sort('resort2')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.resort2">Resort 2</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort2')} />
                </th>
                <th className="hand" onClick={sort('resvNameId3')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.resvNameId3">Resv Name Id 3</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId3')} />
                </th>
                <th className="hand" onClick={sort('clientOId4')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.clientOId4">Client O Id 4</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId4')} />
                </th>
                <th className="hand" onClick={sort('typeChb5')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeChb5">Type Chb 5</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb5')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo6')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.confirmationNo6">Confirmation No 6</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo6')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId7')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.clientMdmId7">Client Mdm Id 7</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId7')} />
                </th>
                <th className="hand" onClick={sort('nameId8')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nameId8">Name Id 8</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId8')} />
                </th>
                <th className="hand" onClick={sort('parentResvNameId9')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.parentResvNameId9">Parent Resv Name Id 9</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('parentResvNameId9')} />
                </th>
                <th className="hand" onClick={sort('contactId10')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.contactId10">Contact Id 10</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId10')} />
                </th>
                <th className="hand" onClick={sort('agenceId11')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.agenceId11">Agence Id 11</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId11')} />
                </th>
                <th className="hand" onClick={sort('agenceNom12')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.agenceNom12">Agence Nom 12</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom12')} />
                </th>
                <th className="hand" onClick={sort('societeId13')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.societeId13">Societe Id 13</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId13')} />
                </th>
                <th className="hand" onClick={sort('groupeId14')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.groupeId14">Groupe Id 14</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId14')} />
                </th>
                <th className="hand" onClick={sort('numBloc15')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numBloc15">Num Bloc 15</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc15')} />
                </th>
                <th className="hand" onClick={sort('typeResv16')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeResv16">Type Resv 16</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeResv16')} />
                </th>
                <th className="hand" onClick={sort('statutResv17')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutResv17">Statut Resv 17</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv17')} />
                </th>
                <th className="hand" onClick={sort('dateDebutResv18')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDebutResv18">Date Debut Resv 18</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutResv18')} />
                </th>
                <th className="hand" onClick={sort('dateFinResv19')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateFinResv19">Date Fin Resv 19</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinResv19')} />
                </th>
                <th className="hand" onClick={sort('truncDateDebutResv20')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateDebutResv20">Trunc Date Debut Resv 20</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateDebutResv20')} />
                </th>
                <th className="hand" onClick={sort('truncDateFinResv21')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateFinResv21">Trunc Date Fin Resv 21</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateFinResv21')} />
                </th>
                <th className="hand" onClick={sort('dateAnnResv22')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateAnnResv22">Date Ann Resv 22</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnnResv22')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn23')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.pseudoRoomYn23">Pseudo Room Yn 23</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn23')} />
                </th>
                <th className="hand" onClick={sort('createurResv24')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.createurResv24">Createur Resv 24</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv24')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv25')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nomCreateurResv25">Nom Createur Resv 25</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv25')} />
                </th>
                <th className="hand" onClick={sort('codeGarantie26')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGarantie26">Code Garantie 26</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGarantie26')} />
                </th>
                <th className="hand" onClick={sort('flgDed27')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.flgDed27">Flg Ded 27</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('flgDed27')} />
                </th>
                <th className="hand" onClick={sort('codePays28')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codePays28">Code Pays 28</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays28')} />
                </th>
                <th className="hand" onClick={sort('libPays29')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libPays29">Lib Pays 29</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays29')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite30')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeNationalite30">Code Nationalite 30</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite30')} />
                </th>
                <th className="hand" onClick={sort('libNationalite31')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libNationalite31">Lib Nationalite 31</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite31')} />
                </th>
                <th className="hand" onClick={sort('codeSource32')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeSource32">Code Source 32</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource32')} />
                </th>
                <th className="hand" onClick={sort('libSource33')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libSource33">Lib Source 33</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource33')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource34')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandSource34">Code Grand Source 34</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource34')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine35')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeOrigine35">Code Origine 35</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine35')} />
                </th>
                <th className="hand" onClick={sort('libOrigine36')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libOrigine36">Lib Origine 36</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine36')} />
                </th>
                <th className="hand" onClick={sort('codeMarche37')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeMarche37">Code Marche 37</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche37')} />
                </th>
                <th className="hand" onClick={sort('libMarche38')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libMarche38">Lib Marche 38</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche38')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche39')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandMarche39">Code Grand Marche 39</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche39')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche40')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libGrandMarche40">Lib Grand Marche 40</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche40')} />
                </th>
                <th className="hand" onClick={sort('codePrix41')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codePrix41">Code Prix 41</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix41')} />
                </th>
                <th className="hand" onClick={sort('categPrix42')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.categPrix42">Categ Prix 42</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix42')} />
                </th>
                <th className="hand" onClick={sort('libPrix43')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libPrix43">Lib Prix 43</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix43')} />
                </th>
                <th className="hand" onClick={sort('numChb44')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numChb44">Num Chb 44</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb44')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb45')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChb45">Description Type Chb 45</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb45')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb46')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChb46">Code Type Chb 46</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb46')} />
                </th>
                <th className="hand" onClick={sort('classChb47')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.classChb47">Class Chb 47</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb47')} />
                </th>
                <th className="hand" onClick={sort('caractChb48')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.caractChb48">Caract Chb 48</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('caractChb48')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation49')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeChbDeReservation49">Type Chb De Reservation 49</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation49')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv50')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv50">
                    Description Type Chb De Resv 50
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv50')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv51')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChbDeResv51">Code Type Chb De Resv 51</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv51')} />
                </th>
                <th className="hand" onClick={sort('statutDeReservation52')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDeReservation52">Statut De Reservation 52</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDeReservation52')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution53')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribution53">Circuit Distribution 53</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution53')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup54')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribUserRegroup54">
                    Circuit Distrib User Regroup 54
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup54')} />
                </th>
                <th className="hand" onClick={sort('numCrs55')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numCrs55">Num Crs 55</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numCrs55')} />
                </th>
                <th className="hand" onClick={sort('typeRefCrs56')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeRefCrs56">Type Ref Crs 56</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeRefCrs56')} />
                </th>
                <th className="hand" onClick={sort('crsInsertDate57')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.crsInsertDate57">Crs Insert Date 57</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('crsInsertDate57')} />
                </th>
                <th className="hand" onClick={sort('dateCreaResv58')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateCreaResv58">Date Crea Resv 58</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateCreaResv58')} />
                </th>
                <th className="hand" onClick={sort('datePremier59')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.datePremier59">Date Premier 59</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datePremier59')} />
                </th>
                <th className="hand" onClick={sort('statutPremier60')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutPremier60">Statut Premier 60</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutPremier60')} />
                </th>
                <th className="hand" onClick={sort('dateDernier61')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernier61">Date Dernier 61</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernier61')} />
                </th>
                <th className="hand" onClick={sort('statutDernier62')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernier62">Statut Dernier 62</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernier62')} />
                </th>
                <th className="hand" onClick={sort('dateDernierPseudo63')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernierPseudo63">Date Dernier Pseudo 63</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernierPseudo63')} />
                </th>
                <th className="hand" onClick={sort('statutDernierPseudo64')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernierPseudo64">Statut Dernier Pseudo 64</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernierPseudo64')} />
                </th>
                <th className="hand" onClick={sort('diffDtCreaAnn65')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtCreaAnn65">Diff Dt Crea Ann 65</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtCreaAnn65')} />
                </th>
                <th className="hand" onClick={sort('diffDtArrAnn66')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtArrAnn66">Diff Dt Arr Ann 66</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtArrAnn66')} />
                </th>
                <th className="hand" onClick={sort('leadtime67')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.leadtime67">Leadtime 67</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leadtime67')} />
                </th>
                <th className="hand" onClick={sort('los68')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.los68">Los 68</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('los68')} />
                </th>
                <th className="hand" onClick={sort('occupantsGroupe69')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.occupantsGroupe69">Occupants Groupe 69</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('occupantsGroupe69')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee70')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuitee70">Nb Nuitee 70</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee70')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed71')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuiteeNnDed71">Nb Nuitee Nn Ded 71</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed71')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn72')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbResvAnn72">Nb Resv Ann 72</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn72')} />
                </th>
                <th className="hand" onClick={sort('nbAdu73')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbAdu73">Nb Adu 73</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAdu73')} />
                </th>
                <th className="hand" onClick={sort('nbEnf74')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbEnf74">Nb Enf 74</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnf74')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayU75')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDayU75">Nb Pers Day U 75</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayU75')} />
                </th>
                <th className="hand" onClick={sort('nbPersArr76')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersArr76">Nb Pers Arr 76</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArr76')} />
                </th>
                <th className="hand" onClick={sort('nbPersDep77')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDep77">Nb Pers Dep 77</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDep77')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn78')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersAnn78">Nb Pers Ann 78</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn78')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow79')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersNoshow79">Nb Pers Noshow 79</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow79')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayU80')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDayU80">Nb Chb Day U 80</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayU80')} />
                </th>
                <th className="hand" onClick={sort('nbChbArr81')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbArr81">Nb Chb Arr 81</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArr81')} />
                </th>
                <th className="hand" onClick={sort('nbChbDep82')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDep82">Nb Chb Dep 82</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDep82')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn83')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbAnn83">Nb Chb Ann 83</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn83')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow84')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbNoshow84">Nb Chb Noshow 84</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow84')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambre85')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambre85">Revenu Net Chambre 85</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambre85')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambre86')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambre86">Revenu Taxe Chambre 86</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambre86')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambreGlobal87')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambreGlobal87">Revenu Net Chambre Global 87</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambreGlobal87')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambreGlobal88')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambreGlobal88">Revenu Taxe Chambre Global 88</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambreGlobal88')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBq89')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBq89">Revenu Net Bq 89</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBq89')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBq90')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBq90">Revenu Taxe Bq 90</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBq90')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBqGlobal91')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBqGlobal91">Revenu Net Bq Global 91</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBqGlobal91')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBqGlobal92')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBqGlobal92">Revenu Taxe Bq Global 92</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBqGlobal92')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtra93')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtra93">Revenu Net Extra 93</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtra93')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtra94')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtra94">Revenu Taxe Extra 94</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtra94')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtraGlobal95')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtraGlobal95">Revenu Net Extra Global 95</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtraGlobal95')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtraGlobal96')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtraGlobal96">Revenu Taxe Extra Global 96</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtraGlobal96')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotal97')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotal97">Revenu Net Total 97</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotal97')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotal98')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotal98">Revenu Taxe Total 98</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotal98')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotalGlobal99')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotalGlobal99">Revenu Net Total Global 99</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotalGlobal99')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotalGlobal100')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotalGlobal100">Revenu Taxe Total Global 100</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotalGlobal100')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuChambre101')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuChambre101">Prod Revenu Chambre 101</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuChambre101')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuBq102')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuBq102">Prod Revenu Bq 102</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuBq102')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuExtra103')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuExtra103">Prod Revenu Extra 103</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuExtra103')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuTotal104')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuTotal104">Prod Revenu Total 104</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuTotal104')} />
                </th>
                <th className="hand" onClick={sort('prodChambreNbNuitees105')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodChambreNbNuitees105">Prod Chambre Nb Nuitees 105</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodChambreNbNuitees105')} />
                </th>
                <th className="hand" onClick={sort('techCreateDate106')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.techCreateDate106">Tech Create Date 106</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreateDate106')} />
                </th>
                <th className="hand" onClick={sort('techUpdateDate107')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.techUpdateDate107">Tech Update Date 107</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdateDate107')} />
                </th>
                <th className="hand" onClick={sort('numLigne108')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numLigne108">Num Ligne 108</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne108')} />
                </th>
                <th className="hand" onClick={sort('resort109')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.resort109">Resort 109</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort109')} />
                </th>
                <th className="hand" onClick={sort('resvNameId110')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.resvNameId110">Resv Name Id 110</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId110')} />
                </th>
                <th className="hand" onClick={sort('clientOId111')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.clientOId111">Client O Id 111</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId111')} />
                </th>
                <th className="hand" onClick={sort('typeChb112')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeChb112">Type Chb 112</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb112')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo113')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.confirmationNo113">Confirmation No 113</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo113')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId114')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.clientMdmId114">Client Mdm Id 114</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId114')} />
                </th>
                <th className="hand" onClick={sort('nameId115')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nameId115">Name Id 115</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId115')} />
                </th>
                <th className="hand" onClick={sort('parentResvNameId116')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.parentResvNameId116">Parent Resv Name Id 116</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('parentResvNameId116')} />
                </th>
                <th className="hand" onClick={sort('contactId117')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.contactId117">Contact Id 117</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId117')} />
                </th>
                <th className="hand" onClick={sort('agenceId118')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.agenceId118">Agence Id 118</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId118')} />
                </th>
                <th className="hand" onClick={sort('agenceNom119')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.agenceNom119">Agence Nom 119</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom119')} />
                </th>
                <th className="hand" onClick={sort('societeId120')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.societeId120">Societe Id 120</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId120')} />
                </th>
                <th className="hand" onClick={sort('groupeId121')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.groupeId121">Groupe Id 121</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId121')} />
                </th>
                <th className="hand" onClick={sort('numBloc122')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numBloc122">Num Bloc 122</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc122')} />
                </th>
                <th className="hand" onClick={sort('typeResv123')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeResv123">Type Resv 123</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeResv123')} />
                </th>
                <th className="hand" onClick={sort('statutResv124')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutResv124">Statut Resv 124</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv124')} />
                </th>
                <th className="hand" onClick={sort('dateDebutResv125')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDebutResv125">Date Debut Resv 125</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutResv125')} />
                </th>
                <th className="hand" onClick={sort('dateFinResv126')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateFinResv126">Date Fin Resv 126</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinResv126')} />
                </th>
                <th className="hand" onClick={sort('truncDateDebutResv127')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateDebutResv127">Trunc Date Debut Resv 127</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateDebutResv127')} />
                </th>
                <th className="hand" onClick={sort('truncDateFinResv128')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateFinResv128">Trunc Date Fin Resv 128</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateFinResv128')} />
                </th>
                <th className="hand" onClick={sort('dateAnnResv129')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateAnnResv129">Date Ann Resv 129</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnnResv129')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn130')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.pseudoRoomYn130">Pseudo Room Yn 130</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn130')} />
                </th>
                <th className="hand" onClick={sort('createurResv131')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.createurResv131">Createur Resv 131</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv131')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv132')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nomCreateurResv132">Nom Createur Resv 132</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv132')} />
                </th>
                <th className="hand" onClick={sort('codeGarantie133')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGarantie133">Code Garantie 133</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGarantie133')} />
                </th>
                <th className="hand" onClick={sort('flgDed134')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.flgDed134">Flg Ded 134</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('flgDed134')} />
                </th>
                <th className="hand" onClick={sort('codePays135')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codePays135">Code Pays 135</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays135')} />
                </th>
                <th className="hand" onClick={sort('libPays136')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libPays136">Lib Pays 136</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays136')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite137')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeNationalite137">Code Nationalite 137</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite137')} />
                </th>
                <th className="hand" onClick={sort('libNationalite138')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libNationalite138">Lib Nationalite 138</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite138')} />
                </th>
                <th className="hand" onClick={sort('codeSource139')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeSource139">Code Source 139</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource139')} />
                </th>
                <th className="hand" onClick={sort('libSource140')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libSource140">Lib Source 140</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource140')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource141')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandSource141">Code Grand Source 141</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource141')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine142')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeOrigine142">Code Origine 142</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine142')} />
                </th>
                <th className="hand" onClick={sort('libOrigine143')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libOrigine143">Lib Origine 143</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine143')} />
                </th>
                <th className="hand" onClick={sort('codeMarche144')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeMarche144">Code Marche 144</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche144')} />
                </th>
                <th className="hand" onClick={sort('libMarche145')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libMarche145">Lib Marche 145</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche145')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche146')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandMarche146">Code Grand Marche 146</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche146')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche147')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libGrandMarche147">Lib Grand Marche 147</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche147')} />
                </th>
                <th className="hand" onClick={sort('codePrix148')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codePrix148">Code Prix 148</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix148')} />
                </th>
                <th className="hand" onClick={sort('categPrix149')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.categPrix149">Categ Prix 149</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix149')} />
                </th>
                <th className="hand" onClick={sort('libPrix150')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libPrix150">Lib Prix 150</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix150')} />
                </th>
                <th className="hand" onClick={sort('numChb151')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numChb151">Num Chb 151</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb151')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb152')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChb152">Description Type Chb 152</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb152')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb153')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChb153">Code Type Chb 153</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb153')} />
                </th>
                <th className="hand" onClick={sort('classChb154')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.classChb154">Class Chb 154</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb154')} />
                </th>
                <th className="hand" onClick={sort('caractChb155')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.caractChb155">Caract Chb 155</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('caractChb155')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation156')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeChbDeReservation156">Type Chb De Reservation 156</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation156')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv157')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv157">
                    Description Type Chb De Resv 157
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv157')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv158')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChbDeResv158">Code Type Chb De Resv 158</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv158')} />
                </th>
                <th className="hand" onClick={sort('statutDeReservation159')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDeReservation159">Statut De Reservation 159</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDeReservation159')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution160')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribution160">Circuit Distribution 160</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution160')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup161')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribUserRegroup161">
                    Circuit Distrib User Regroup 161
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup161')} />
                </th>
                <th className="hand" onClick={sort('numCrs162')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numCrs162">Num Crs 162</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numCrs162')} />
                </th>
                <th className="hand" onClick={sort('typeRefCrs163')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeRefCrs163">Type Ref Crs 163</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeRefCrs163')} />
                </th>
                <th className="hand" onClick={sort('crsInsertDate164')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.crsInsertDate164">Crs Insert Date 164</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('crsInsertDate164')} />
                </th>
                <th className="hand" onClick={sort('dateCreaResv165')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateCreaResv165">Date Crea Resv 165</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateCreaResv165')} />
                </th>
                <th className="hand" onClick={sort('datePremier166')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.datePremier166">Date Premier 166</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datePremier166')} />
                </th>
                <th className="hand" onClick={sort('statutPremier167')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutPremier167">Statut Premier 167</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutPremier167')} />
                </th>
                <th className="hand" onClick={sort('dateDernier168')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernier168">Date Dernier 168</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernier168')} />
                </th>
                <th className="hand" onClick={sort('statutDernier169')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernier169">Statut Dernier 169</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernier169')} />
                </th>
                <th className="hand" onClick={sort('dateDernierPseudo170')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernierPseudo170">Date Dernier Pseudo 170</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernierPseudo170')} />
                </th>
                <th className="hand" onClick={sort('statutDernierPseudo171')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernierPseudo171">Statut Dernier Pseudo 171</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernierPseudo171')} />
                </th>
                <th className="hand" onClick={sort('diffDtCreaAnn172')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtCreaAnn172">Diff Dt Crea Ann 172</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtCreaAnn172')} />
                </th>
                <th className="hand" onClick={sort('diffDtArrAnn173')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtArrAnn173">Diff Dt Arr Ann 173</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtArrAnn173')} />
                </th>
                <th className="hand" onClick={sort('leadtime174')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.leadtime174">Leadtime 174</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leadtime174')} />
                </th>
                <th className="hand" onClick={sort('los175')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.los175">Los 175</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('los175')} />
                </th>
                <th className="hand" onClick={sort('occupantsGroupe176')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.occupantsGroupe176">Occupants Groupe 176</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('occupantsGroupe176')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee177')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuitee177">Nb Nuitee 177</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee177')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed178')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuiteeNnDed178">Nb Nuitee Nn Ded 178</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed178')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn179')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbResvAnn179">Nb Resv Ann 179</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn179')} />
                </th>
                <th className="hand" onClick={sort('nbAdu180')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbAdu180">Nb Adu 180</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAdu180')} />
                </th>
                <th className="hand" onClick={sort('nbEnf181')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbEnf181">Nb Enf 181</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnf181')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayU182')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDayU182">Nb Pers Day U 182</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayU182')} />
                </th>
                <th className="hand" onClick={sort('nbPersArr183')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersArr183">Nb Pers Arr 183</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArr183')} />
                </th>
                <th className="hand" onClick={sort('nbPersDep184')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDep184">Nb Pers Dep 184</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDep184')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn185')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersAnn185">Nb Pers Ann 185</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn185')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow186')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersNoshow186">Nb Pers Noshow 186</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow186')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayU187')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDayU187">Nb Chb Day U 187</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayU187')} />
                </th>
                <th className="hand" onClick={sort('nbChbArr188')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbArr188">Nb Chb Arr 188</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArr188')} />
                </th>
                <th className="hand" onClick={sort('nbChbDep189')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDep189">Nb Chb Dep 189</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDep189')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn190')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbAnn190">Nb Chb Ann 190</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn190')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow191')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbNoshow191">Nb Chb Noshow 191</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow191')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambre192')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambre192">Revenu Net Chambre 192</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambre192')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambre193')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambre193">Revenu Taxe Chambre 193</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambre193')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambreGlobal194')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambreGlobal194">Revenu Net Chambre Global 194</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambreGlobal194')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambreGlobal195')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambreGlobal195">
                    Revenu Taxe Chambre Global 195
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambreGlobal195')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBq196')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBq196">Revenu Net Bq 196</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBq196')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBq197')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBq197">Revenu Taxe Bq 197</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBq197')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBqGlobal198')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBqGlobal198">Revenu Net Bq Global 198</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBqGlobal198')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBqGlobal199')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBqGlobal199">Revenu Taxe Bq Global 199</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBqGlobal199')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtra200')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtra200">Revenu Net Extra 200</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtra200')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtra201')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtra201">Revenu Taxe Extra 201</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtra201')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtraGlobal202')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtraGlobal202">Revenu Net Extra Global 202</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtraGlobal202')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtraGlobal203')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtraGlobal203">Revenu Taxe Extra Global 203</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtraGlobal203')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotal204')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotal204">Revenu Net Total 204</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotal204')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotal205')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotal205">Revenu Taxe Total 205</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotal205')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotalGlobal206')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotalGlobal206">Revenu Net Total Global 206</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotalGlobal206')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotalGlobal207')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotalGlobal207">Revenu Taxe Total Global 207</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotalGlobal207')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuChambre208')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuChambre208">Prod Revenu Chambre 208</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuChambre208')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuBq209')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuBq209">Prod Revenu Bq 209</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuBq209')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuExtra210')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuExtra210">Prod Revenu Extra 210</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuExtra210')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuTotal211')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuTotal211">Prod Revenu Total 211</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuTotal211')} />
                </th>
                <th className="hand" onClick={sort('prodChambreNbNuitees212')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.prodChambreNbNuitees212">Prod Chambre Nb Nuitees 212</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodChambreNbNuitees212')} />
                </th>
                <th className="hand" onClick={sort('techCreateDate213')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.techCreateDate213">Tech Create Date 213</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreateDate213')} />
                </th>
                <th className="hand" onClick={sort('techUpdateDate214')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.techUpdateDate214">Tech Update Date 214</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdateDate214')} />
                </th>
                <th className="hand" onClick={sort('numLigne215')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numLigne215">Num Ligne 215</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne215')} />
                </th>
                <th className="hand" onClick={sort('resort216')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.resort216">Resort 216</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort216')} />
                </th>
                <th className="hand" onClick={sort('resvNameId217')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.resvNameId217">Resv Name Id 217</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId217')} />
                </th>
                <th className="hand" onClick={sort('clientOId218')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.clientOId218">Client O Id 218</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId218')} />
                </th>
                <th className="hand" onClick={sort('typeChb219')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeChb219">Type Chb 219</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb219')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo220')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.confirmationNo220">Confirmation No 220</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo220')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId221')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.clientMdmId221">Client Mdm Id 221</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId221')} />
                </th>
                <th className="hand" onClick={sort('nameId222')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nameId222">Name Id 222</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId222')} />
                </th>
                <th className="hand" onClick={sort('parentResvNameId223')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.parentResvNameId223">Parent Resv Name Id 223</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('parentResvNameId223')} />
                </th>
                <th className="hand" onClick={sort('contactId224')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.contactId224">Contact Id 224</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId224')} />
                </th>
                <th className="hand" onClick={sort('agenceId225')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.agenceId225">Agence Id 225</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId225')} />
                </th>
                <th className="hand" onClick={sort('agenceNom226')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.agenceNom226">Agence Nom 226</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom226')} />
                </th>
                <th className="hand" onClick={sort('societeId227')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.societeId227">Societe Id 227</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId227')} />
                </th>
                <th className="hand" onClick={sort('groupeId228')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.groupeId228">Groupe Id 228</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId228')} />
                </th>
                <th className="hand" onClick={sort('numBloc229')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numBloc229">Num Bloc 229</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc229')} />
                </th>
                <th className="hand" onClick={sort('typeResv230')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeResv230">Type Resv 230</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeResv230')} />
                </th>
                <th className="hand" onClick={sort('statutResv231')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutResv231">Statut Resv 231</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv231')} />
                </th>
                <th className="hand" onClick={sort('dateDebutResv232')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDebutResv232">Date Debut Resv 232</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutResv232')} />
                </th>
                <th className="hand" onClick={sort('dateFinResv233')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateFinResv233">Date Fin Resv 233</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinResv233')} />
                </th>
                <th className="hand" onClick={sort('truncDateDebutResv234')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateDebutResv234">Trunc Date Debut Resv 234</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateDebutResv234')} />
                </th>
                <th className="hand" onClick={sort('truncDateFinResv235')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateFinResv235">Trunc Date Fin Resv 235</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateFinResv235')} />
                </th>
                <th className="hand" onClick={sort('dateAnnResv236')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateAnnResv236">Date Ann Resv 236</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnnResv236')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn237')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.pseudoRoomYn237">Pseudo Room Yn 237</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn237')} />
                </th>
                <th className="hand" onClick={sort('createurResv238')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.createurResv238">Createur Resv 238</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv238')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv239')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nomCreateurResv239">Nom Createur Resv 239</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv239')} />
                </th>
                <th className="hand" onClick={sort('codeGarantie240')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGarantie240">Code Garantie 240</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGarantie240')} />
                </th>
                <th className="hand" onClick={sort('flgDed241')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.flgDed241">Flg Ded 241</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('flgDed241')} />
                </th>
                <th className="hand" onClick={sort('codePays242')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codePays242">Code Pays 242</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays242')} />
                </th>
                <th className="hand" onClick={sort('libPays243')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libPays243">Lib Pays 243</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays243')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite244')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeNationalite244">Code Nationalite 244</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite244')} />
                </th>
                <th className="hand" onClick={sort('libNationalite245')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libNationalite245">Lib Nationalite 245</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite245')} />
                </th>
                <th className="hand" onClick={sort('codeSource246')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeSource246">Code Source 246</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource246')} />
                </th>
                <th className="hand" onClick={sort('libSource247')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libSource247">Lib Source 247</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource247')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource248')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandSource248">Code Grand Source 248</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource248')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine249')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeOrigine249">Code Origine 249</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine249')} />
                </th>
                <th className="hand" onClick={sort('libOrigine250')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libOrigine250">Lib Origine 250</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine250')} />
                </th>
                <th className="hand" onClick={sort('codeMarche251')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeMarche251">Code Marche 251</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche251')} />
                </th>
                <th className="hand" onClick={sort('libMarche252')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libMarche252">Lib Marche 252</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche252')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche253')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandMarche253">Code Grand Marche 253</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche253')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche254')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libGrandMarche254">Lib Grand Marche 254</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche254')} />
                </th>
                <th className="hand" onClick={sort('codePrix255')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codePrix255">Code Prix 255</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix255')} />
                </th>
                <th className="hand" onClick={sort('categPrix256')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.categPrix256">Categ Prix 256</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix256')} />
                </th>
                <th className="hand" onClick={sort('libPrix257')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.libPrix257">Lib Prix 257</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix257')} />
                </th>
                <th className="hand" onClick={sort('numChb258')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numChb258">Num Chb 258</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb258')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb259')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChb259">Description Type Chb 259</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb259')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb260')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChb260">Code Type Chb 260</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb260')} />
                </th>
                <th className="hand" onClick={sort('classChb261')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.classChb261">Class Chb 261</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb261')} />
                </th>
                <th className="hand" onClick={sort('caractChb262')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.caractChb262">Caract Chb 262</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('caractChb262')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation263')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeChbDeReservation263">Type Chb De Reservation 263</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation263')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv264')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv264">
                    Description Type Chb De Resv 264
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv264')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv265')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChbDeResv265">Code Type Chb De Resv 265</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv265')} />
                </th>
                <th className="hand" onClick={sort('statutDeReservation266')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDeReservation266">Statut De Reservation 266</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDeReservation266')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution267')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribution267">Circuit Distribution 267</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution267')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup268')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribUserRegroup268">
                    Circuit Distrib User Regroup 268
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup268')} />
                </th>
                <th className="hand" onClick={sort('numCrs269')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.numCrs269">Num Crs 269</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numCrs269')} />
                </th>
                <th className="hand" onClick={sort('typeRefCrs270')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.typeRefCrs270">Type Ref Crs 270</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeRefCrs270')} />
                </th>
                <th className="hand" onClick={sort('crsInsertDate271')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.crsInsertDate271">Crs Insert Date 271</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('crsInsertDate271')} />
                </th>
                <th className="hand" onClick={sort('dateCreaResv272')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateCreaResv272">Date Crea Resv 272</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateCreaResv272')} />
                </th>
                <th className="hand" onClick={sort('datePremier273')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.datePremier273">Date Premier 273</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datePremier273')} />
                </th>
                <th className="hand" onClick={sort('statutPremier274')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutPremier274">Statut Premier 274</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutPremier274')} />
                </th>
                <th className="hand" onClick={sort('dateDernier275')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernier275">Date Dernier 275</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernier275')} />
                </th>
                <th className="hand" onClick={sort('statutDernier276')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernier276">Statut Dernier 276</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernier276')} />
                </th>
                <th className="hand" onClick={sort('dateDernierPseudo277')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernierPseudo277">Date Dernier Pseudo 277</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernierPseudo277')} />
                </th>
                <th className="hand" onClick={sort('statutDernierPseudo278')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernierPseudo278">Statut Dernier Pseudo 278</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernierPseudo278')} />
                </th>
                <th className="hand" onClick={sort('diffDtCreaAnn279')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtCreaAnn279">Diff Dt Crea Ann 279</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtCreaAnn279')} />
                </th>
                <th className="hand" onClick={sort('diffDtArrAnn280')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtArrAnn280">Diff Dt Arr Ann 280</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtArrAnn280')} />
                </th>
                <th className="hand" onClick={sort('leadtime281')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.leadtime281">Leadtime 281</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leadtime281')} />
                </th>
                <th className="hand" onClick={sort('los282')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.los282">Los 282</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('los282')} />
                </th>
                <th className="hand" onClick={sort('occupantsGroupe283')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.occupantsGroupe283">Occupants Groupe 283</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('occupantsGroupe283')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee284')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuitee284">Nb Nuitee 284</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee284')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed285')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuiteeNnDed285">Nb Nuitee Nn Ded 285</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed285')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn286')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbResvAnn286">Nb Resv Ann 286</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn286')} />
                </th>
                <th className="hand" onClick={sort('nbAdu287')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbAdu287">Nb Adu 287</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAdu287')} />
                </th>
                <th className="hand" onClick={sort('nbEnf288')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbEnf288">Nb Enf 288</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnf288')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayU289')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDayU289">Nb Pers Day U 289</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayU289')} />
                </th>
                <th className="hand" onClick={sort('nbPersArr290')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersArr290">Nb Pers Arr 290</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArr290')} />
                </th>
                <th className="hand" onClick={sort('nbPersDep291')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDep291">Nb Pers Dep 291</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDep291')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn292')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersAnn292">Nb Pers Ann 292</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn292')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow293')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersNoshow293">Nb Pers Noshow 293</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow293')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayU294')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDayU294">Nb Chb Day U 294</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayU294')} />
                </th>
                <th className="hand" onClick={sort('nbChbArr295')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbArr295">Nb Chb Arr 295</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArr295')} />
                </th>
                <th className="hand" onClick={sort('nbChbDep296')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDep296">Nb Chb Dep 296</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDep296')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn297')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbAnn297">Nb Chb Ann 297</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn297')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow298')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbNoshow298">Nb Chb Noshow 298</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow298')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambre299')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambre299">Revenu Net Chambre 299</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambre299')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambre300')}>
                  <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambre300">Revenu Taxe Chambre 300</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambre300')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {dmOResvList.map((dmOResv, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/dm-o-resv/${dmOResv.id}`} color="link" size="sm">
                      {dmOResv.id}
                    </Button>
                  </td>
                  <td>{dmOResv.numLigne1}</td>
                  <td>{dmOResv.resort2}</td>
                  <td>{dmOResv.resvNameId3}</td>
                  <td>{dmOResv.clientOId4}</td>
                  <td>{dmOResv.typeChb5}</td>
                  <td>{dmOResv.confirmationNo6}</td>
                  <td>{dmOResv.clientMdmId7}</td>
                  <td>{dmOResv.nameId8}</td>
                  <td>{dmOResv.parentResvNameId9}</td>
                  <td>{dmOResv.contactId10}</td>
                  <td>{dmOResv.agenceId11}</td>
                  <td>{dmOResv.agenceNom12}</td>
                  <td>{dmOResv.societeId13}</td>
                  <td>{dmOResv.groupeId14}</td>
                  <td>{dmOResv.numBloc15}</td>
                  <td>{dmOResv.typeResv16}</td>
                  <td>{dmOResv.statutResv17}</td>
                  <td>
                    {dmOResv.dateDebutResv18 ? (
                      <TextFormat type="date" value={dmOResv.dateDebutResv18} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateFinResv19 ? <TextFormat type="date" value={dmOResv.dateFinResv19} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {dmOResv.truncDateDebutResv20 ? (
                      <TextFormat type="date" value={dmOResv.truncDateDebutResv20} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.truncDateFinResv21 ? (
                      <TextFormat type="date" value={dmOResv.truncDateFinResv21} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateAnnResv22 ? <TextFormat type="date" value={dmOResv.dateAnnResv22} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{dmOResv.pseudoRoomYn23}</td>
                  <td>{dmOResv.createurResv24}</td>
                  <td>{dmOResv.nomCreateurResv25}</td>
                  <td>{dmOResv.codeGarantie26}</td>
                  <td>{dmOResv.flgDed27}</td>
                  <td>{dmOResv.codePays28}</td>
                  <td>{dmOResv.libPays29}</td>
                  <td>{dmOResv.codeNationalite30}</td>
                  <td>{dmOResv.libNationalite31}</td>
                  <td>{dmOResv.codeSource32}</td>
                  <td>{dmOResv.libSource33}</td>
                  <td>{dmOResv.codeGrandSource34}</td>
                  <td>{dmOResv.codeOrigine35}</td>
                  <td>{dmOResv.libOrigine36}</td>
                  <td>{dmOResv.codeMarche37}</td>
                  <td>{dmOResv.libMarche38}</td>
                  <td>{dmOResv.codeGrandMarche39}</td>
                  <td>{dmOResv.libGrandMarche40}</td>
                  <td>{dmOResv.codePrix41}</td>
                  <td>{dmOResv.categPrix42}</td>
                  <td>{dmOResv.libPrix43}</td>
                  <td>{dmOResv.numChb44}</td>
                  <td>{dmOResv.descriptionTypeChb45}</td>
                  <td>{dmOResv.codeTypeChb46}</td>
                  <td>{dmOResv.classChb47}</td>
                  <td>{dmOResv.caractChb48}</td>
                  <td>{dmOResv.typeChbDeReservation49}</td>
                  <td>{dmOResv.descriptionTypeChbDeResv50}</td>
                  <td>{dmOResv.codeTypeChbDeResv51}</td>
                  <td>{dmOResv.statutDeReservation52}</td>
                  <td>{dmOResv.circuitDistribution53}</td>
                  <td>{dmOResv.circuitDistribUserRegroup54}</td>
                  <td>{dmOResv.numCrs55}</td>
                  <td>{dmOResv.typeRefCrs56}</td>
                  <td>
                    {dmOResv.crsInsertDate57 ? (
                      <TextFormat type="date" value={dmOResv.crsInsertDate57} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateCreaResv58 ? (
                      <TextFormat type="date" value={dmOResv.dateCreaResv58} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.datePremier59 ? <TextFormat type="date" value={dmOResv.datePremier59} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{dmOResv.statutPremier60}</td>
                  <td>
                    {dmOResv.dateDernier61 ? <TextFormat type="date" value={dmOResv.dateDernier61} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{dmOResv.statutDernier62}</td>
                  <td>
                    {dmOResv.dateDernierPseudo63 ? (
                      <TextFormat type="date" value={dmOResv.dateDernierPseudo63} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutDernierPseudo64}</td>
                  <td>{dmOResv.diffDtCreaAnn65}</td>
                  <td>{dmOResv.diffDtArrAnn66}</td>
                  <td>{dmOResv.leadtime67}</td>
                  <td>{dmOResv.los68}</td>
                  <td>{dmOResv.occupantsGroupe69}</td>
                  <td>{dmOResv.nbNuitee70}</td>
                  <td>{dmOResv.nbNuiteeNnDed71}</td>
                  <td>{dmOResv.nbResvAnn72}</td>
                  <td>{dmOResv.nbAdu73}</td>
                  <td>{dmOResv.nbEnf74}</td>
                  <td>{dmOResv.nbPersDayU75}</td>
                  <td>{dmOResv.nbPersArr76}</td>
                  <td>{dmOResv.nbPersDep77}</td>
                  <td>{dmOResv.nbPersAnn78}</td>
                  <td>{dmOResv.nbPersNoshow79}</td>
                  <td>{dmOResv.nbChbDayU80}</td>
                  <td>{dmOResv.nbChbArr81}</td>
                  <td>{dmOResv.nbChbDep82}</td>
                  <td>{dmOResv.nbChbAnn83}</td>
                  <td>{dmOResv.nbChbNoshow84}</td>
                  <td>{dmOResv.revenuNetChambre85}</td>
                  <td>{dmOResv.revenuTaxeChambre86}</td>
                  <td>{dmOResv.revenuNetChambreGlobal87}</td>
                  <td>{dmOResv.revenuTaxeChambreGlobal88}</td>
                  <td>{dmOResv.revenuNetBq89}</td>
                  <td>{dmOResv.revenuTaxeBq90}</td>
                  <td>{dmOResv.revenuNetBqGlobal91}</td>
                  <td>{dmOResv.revenuTaxeBqGlobal92}</td>
                  <td>{dmOResv.revenuNetExtra93}</td>
                  <td>{dmOResv.revenuTaxeExtra94}</td>
                  <td>{dmOResv.revenuNetExtraGlobal95}</td>
                  <td>{dmOResv.revenuTaxeExtraGlobal96}</td>
                  <td>{dmOResv.revenuNetTotal97}</td>
                  <td>{dmOResv.revenuTaxeTotal98}</td>
                  <td>{dmOResv.revenuNetTotalGlobal99}</td>
                  <td>{dmOResv.revenuTaxeTotalGlobal100}</td>
                  <td>{dmOResv.prodRevenuChambre101}</td>
                  <td>{dmOResv.prodRevenuBq102}</td>
                  <td>{dmOResv.prodRevenuExtra103}</td>
                  <td>{dmOResv.prodRevenuTotal104}</td>
                  <td>{dmOResv.prodChambreNbNuitees105}</td>
                  <td>
                    {dmOResv.techCreateDate106 ? (
                      <TextFormat type="date" value={dmOResv.techCreateDate106} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.techUpdateDate107 ? (
                      <TextFormat type="date" value={dmOResv.techUpdateDate107} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.numLigne108}</td>
                  <td>{dmOResv.resort109}</td>
                  <td>{dmOResv.resvNameId110}</td>
                  <td>{dmOResv.clientOId111}</td>
                  <td>{dmOResv.typeChb112}</td>
                  <td>{dmOResv.confirmationNo113}</td>
                  <td>{dmOResv.clientMdmId114}</td>
                  <td>{dmOResv.nameId115}</td>
                  <td>{dmOResv.parentResvNameId116}</td>
                  <td>{dmOResv.contactId117}</td>
                  <td>{dmOResv.agenceId118}</td>
                  <td>{dmOResv.agenceNom119}</td>
                  <td>{dmOResv.societeId120}</td>
                  <td>{dmOResv.groupeId121}</td>
                  <td>{dmOResv.numBloc122}</td>
                  <td>{dmOResv.typeResv123}</td>
                  <td>{dmOResv.statutResv124}</td>
                  <td>
                    {dmOResv.dateDebutResv125 ? (
                      <TextFormat type="date" value={dmOResv.dateDebutResv125} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateFinResv126 ? (
                      <TextFormat type="date" value={dmOResv.dateFinResv126} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.truncDateDebutResv127 ? (
                      <TextFormat type="date" value={dmOResv.truncDateDebutResv127} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.truncDateFinResv128 ? (
                      <TextFormat type="date" value={dmOResv.truncDateFinResv128} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateAnnResv129 ? (
                      <TextFormat type="date" value={dmOResv.dateAnnResv129} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.pseudoRoomYn130}</td>
                  <td>{dmOResv.createurResv131}</td>
                  <td>{dmOResv.nomCreateurResv132}</td>
                  <td>{dmOResv.codeGarantie133}</td>
                  <td>{dmOResv.flgDed134}</td>
                  <td>{dmOResv.codePays135}</td>
                  <td>{dmOResv.libPays136}</td>
                  <td>{dmOResv.codeNationalite137}</td>
                  <td>{dmOResv.libNationalite138}</td>
                  <td>{dmOResv.codeSource139}</td>
                  <td>{dmOResv.libSource140}</td>
                  <td>{dmOResv.codeGrandSource141}</td>
                  <td>{dmOResv.codeOrigine142}</td>
                  <td>{dmOResv.libOrigine143}</td>
                  <td>{dmOResv.codeMarche144}</td>
                  <td>{dmOResv.libMarche145}</td>
                  <td>{dmOResv.codeGrandMarche146}</td>
                  <td>{dmOResv.libGrandMarche147}</td>
                  <td>{dmOResv.codePrix148}</td>
                  <td>{dmOResv.categPrix149}</td>
                  <td>{dmOResv.libPrix150}</td>
                  <td>{dmOResv.numChb151}</td>
                  <td>{dmOResv.descriptionTypeChb152}</td>
                  <td>{dmOResv.codeTypeChb153}</td>
                  <td>{dmOResv.classChb154}</td>
                  <td>{dmOResv.caractChb155}</td>
                  <td>{dmOResv.typeChbDeReservation156}</td>
                  <td>{dmOResv.descriptionTypeChbDeResv157}</td>
                  <td>{dmOResv.codeTypeChbDeResv158}</td>
                  <td>{dmOResv.statutDeReservation159}</td>
                  <td>{dmOResv.circuitDistribution160}</td>
                  <td>{dmOResv.circuitDistribUserRegroup161}</td>
                  <td>{dmOResv.numCrs162}</td>
                  <td>{dmOResv.typeRefCrs163}</td>
                  <td>
                    {dmOResv.crsInsertDate164 ? (
                      <TextFormat type="date" value={dmOResv.crsInsertDate164} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateCreaResv165 ? (
                      <TextFormat type="date" value={dmOResv.dateCreaResv165} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.datePremier166 ? (
                      <TextFormat type="date" value={dmOResv.datePremier166} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutPremier167}</td>
                  <td>
                    {dmOResv.dateDernier168 ? (
                      <TextFormat type="date" value={dmOResv.dateDernier168} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutDernier169}</td>
                  <td>
                    {dmOResv.dateDernierPseudo170 ? (
                      <TextFormat type="date" value={dmOResv.dateDernierPseudo170} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutDernierPseudo171}</td>
                  <td>{dmOResv.diffDtCreaAnn172}</td>
                  <td>{dmOResv.diffDtArrAnn173}</td>
                  <td>{dmOResv.leadtime174}</td>
                  <td>{dmOResv.los175}</td>
                  <td>{dmOResv.occupantsGroupe176}</td>
                  <td>{dmOResv.nbNuitee177}</td>
                  <td>{dmOResv.nbNuiteeNnDed178}</td>
                  <td>{dmOResv.nbResvAnn179}</td>
                  <td>{dmOResv.nbAdu180}</td>
                  <td>{dmOResv.nbEnf181}</td>
                  <td>{dmOResv.nbPersDayU182}</td>
                  <td>{dmOResv.nbPersArr183}</td>
                  <td>{dmOResv.nbPersDep184}</td>
                  <td>{dmOResv.nbPersAnn185}</td>
                  <td>{dmOResv.nbPersNoshow186}</td>
                  <td>{dmOResv.nbChbDayU187}</td>
                  <td>{dmOResv.nbChbArr188}</td>
                  <td>{dmOResv.nbChbDep189}</td>
                  <td>{dmOResv.nbChbAnn190}</td>
                  <td>{dmOResv.nbChbNoshow191}</td>
                  <td>{dmOResv.revenuNetChambre192}</td>
                  <td>{dmOResv.revenuTaxeChambre193}</td>
                  <td>{dmOResv.revenuNetChambreGlobal194}</td>
                  <td>{dmOResv.revenuTaxeChambreGlobal195}</td>
                  <td>{dmOResv.revenuNetBq196}</td>
                  <td>{dmOResv.revenuTaxeBq197}</td>
                  <td>{dmOResv.revenuNetBqGlobal198}</td>
                  <td>{dmOResv.revenuTaxeBqGlobal199}</td>
                  <td>{dmOResv.revenuNetExtra200}</td>
                  <td>{dmOResv.revenuTaxeExtra201}</td>
                  <td>{dmOResv.revenuNetExtraGlobal202}</td>
                  <td>{dmOResv.revenuTaxeExtraGlobal203}</td>
                  <td>{dmOResv.revenuNetTotal204}</td>
                  <td>{dmOResv.revenuTaxeTotal205}</td>
                  <td>{dmOResv.revenuNetTotalGlobal206}</td>
                  <td>{dmOResv.revenuTaxeTotalGlobal207}</td>
                  <td>{dmOResv.prodRevenuChambre208}</td>
                  <td>{dmOResv.prodRevenuBq209}</td>
                  <td>{dmOResv.prodRevenuExtra210}</td>
                  <td>{dmOResv.prodRevenuTotal211}</td>
                  <td>{dmOResv.prodChambreNbNuitees212}</td>
                  <td>
                    {dmOResv.techCreateDate213 ? (
                      <TextFormat type="date" value={dmOResv.techCreateDate213} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.techUpdateDate214 ? (
                      <TextFormat type="date" value={dmOResv.techUpdateDate214} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.numLigne215}</td>
                  <td>{dmOResv.resort216}</td>
                  <td>{dmOResv.resvNameId217}</td>
                  <td>{dmOResv.clientOId218}</td>
                  <td>{dmOResv.typeChb219}</td>
                  <td>{dmOResv.confirmationNo220}</td>
                  <td>{dmOResv.clientMdmId221}</td>
                  <td>{dmOResv.nameId222}</td>
                  <td>{dmOResv.parentResvNameId223}</td>
                  <td>{dmOResv.contactId224}</td>
                  <td>{dmOResv.agenceId225}</td>
                  <td>{dmOResv.agenceNom226}</td>
                  <td>{dmOResv.societeId227}</td>
                  <td>{dmOResv.groupeId228}</td>
                  <td>{dmOResv.numBloc229}</td>
                  <td>{dmOResv.typeResv230}</td>
                  <td>{dmOResv.statutResv231}</td>
                  <td>
                    {dmOResv.dateDebutResv232 ? (
                      <TextFormat type="date" value={dmOResv.dateDebutResv232} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateFinResv233 ? (
                      <TextFormat type="date" value={dmOResv.dateFinResv233} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.truncDateDebutResv234 ? (
                      <TextFormat type="date" value={dmOResv.truncDateDebutResv234} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.truncDateFinResv235 ? (
                      <TextFormat type="date" value={dmOResv.truncDateFinResv235} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateAnnResv236 ? (
                      <TextFormat type="date" value={dmOResv.dateAnnResv236} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.pseudoRoomYn237}</td>
                  <td>{dmOResv.createurResv238}</td>
                  <td>{dmOResv.nomCreateurResv239}</td>
                  <td>{dmOResv.codeGarantie240}</td>
                  <td>{dmOResv.flgDed241}</td>
                  <td>{dmOResv.codePays242}</td>
                  <td>{dmOResv.libPays243}</td>
                  <td>{dmOResv.codeNationalite244}</td>
                  <td>{dmOResv.libNationalite245}</td>
                  <td>{dmOResv.codeSource246}</td>
                  <td>{dmOResv.libSource247}</td>
                  <td>{dmOResv.codeGrandSource248}</td>
                  <td>{dmOResv.codeOrigine249}</td>
                  <td>{dmOResv.libOrigine250}</td>
                  <td>{dmOResv.codeMarche251}</td>
                  <td>{dmOResv.libMarche252}</td>
                  <td>{dmOResv.codeGrandMarche253}</td>
                  <td>{dmOResv.libGrandMarche254}</td>
                  <td>{dmOResv.codePrix255}</td>
                  <td>{dmOResv.categPrix256}</td>
                  <td>{dmOResv.libPrix257}</td>
                  <td>{dmOResv.numChb258}</td>
                  <td>{dmOResv.descriptionTypeChb259}</td>
                  <td>{dmOResv.codeTypeChb260}</td>
                  <td>{dmOResv.classChb261}</td>
                  <td>{dmOResv.caractChb262}</td>
                  <td>{dmOResv.typeChbDeReservation263}</td>
                  <td>{dmOResv.descriptionTypeChbDeResv264}</td>
                  <td>{dmOResv.codeTypeChbDeResv265}</td>
                  <td>{dmOResv.statutDeReservation266}</td>
                  <td>{dmOResv.circuitDistribution267}</td>
                  <td>{dmOResv.circuitDistribUserRegroup268}</td>
                  <td>{dmOResv.numCrs269}</td>
                  <td>{dmOResv.typeRefCrs270}</td>
                  <td>
                    {dmOResv.crsInsertDate271 ? (
                      <TextFormat type="date" value={dmOResv.crsInsertDate271} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.dateCreaResv272 ? (
                      <TextFormat type="date" value={dmOResv.dateCreaResv272} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmOResv.datePremier273 ? (
                      <TextFormat type="date" value={dmOResv.datePremier273} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutPremier274}</td>
                  <td>
                    {dmOResv.dateDernier275 ? (
                      <TextFormat type="date" value={dmOResv.dateDernier275} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutDernier276}</td>
                  <td>
                    {dmOResv.dateDernierPseudo277 ? (
                      <TextFormat type="date" value={dmOResv.dateDernierPseudo277} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmOResv.statutDernierPseudo278}</td>
                  <td>{dmOResv.diffDtCreaAnn279}</td>
                  <td>{dmOResv.diffDtArrAnn280}</td>
                  <td>{dmOResv.leadtime281}</td>
                  <td>{dmOResv.los282}</td>
                  <td>{dmOResv.occupantsGroupe283}</td>
                  <td>{dmOResv.nbNuitee284}</td>
                  <td>{dmOResv.nbNuiteeNnDed285}</td>
                  <td>{dmOResv.nbResvAnn286}</td>
                  <td>{dmOResv.nbAdu287}</td>
                  <td>{dmOResv.nbEnf288}</td>
                  <td>{dmOResv.nbPersDayU289}</td>
                  <td>{dmOResv.nbPersArr290}</td>
                  <td>{dmOResv.nbPersDep291}</td>
                  <td>{dmOResv.nbPersAnn292}</td>
                  <td>{dmOResv.nbPersNoshow293}</td>
                  <td>{dmOResv.nbChbDayU294}</td>
                  <td>{dmOResv.nbChbArr295}</td>
                  <td>{dmOResv.nbChbDep296}</td>
                  <td>{dmOResv.nbChbAnn297}</td>
                  <td>{dmOResv.nbChbNoshow298}</td>
                  <td>{dmOResv.revenuNetChambre299}</td>
                  <td>{dmOResv.revenuTaxeChambre300}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/dm-o-resv/${dmOResv.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/dm-o-resv/${dmOResv.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/dm-o-resv/${dmOResv.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="operaBigApplicationApp.dmOResv.home.notFound">No Dm O Resvs found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={dmOResvList && dmOResvList.length > 0 ? '' : 'd-none'}>
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

export default DmOResv;
