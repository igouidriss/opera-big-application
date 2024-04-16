import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './dm-o-resv.reducer';

export const DmOResvDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const dmOResvEntity = useAppSelector(state => state.dmOResv.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="dmOResvDetailsHeading">
          <Translate contentKey="operaBigApplicationApp.dmOResv.detail.title">DmOResv</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.id}</dd>
          <dt>
            <span id="numLigne1">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numLigne1">Num Ligne 1</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numLigne1}</dd>
          <dt>
            <span id="resort2">
              <Translate contentKey="operaBigApplicationApp.dmOResv.resort2">Resort 2</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.resort2}</dd>
          <dt>
            <span id="resvNameId3">
              <Translate contentKey="operaBigApplicationApp.dmOResv.resvNameId3">Resv Name Id 3</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.resvNameId3}</dd>
          <dt>
            <span id="clientOId4">
              <Translate contentKey="operaBigApplicationApp.dmOResv.clientOId4">Client O Id 4</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.clientOId4}</dd>
          <dt>
            <span id="typeChb5">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeChb5">Type Chb 5</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeChb5}</dd>
          <dt>
            <span id="confirmationNo6">
              <Translate contentKey="operaBigApplicationApp.dmOResv.confirmationNo6">Confirmation No 6</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.confirmationNo6}</dd>
          <dt>
            <span id="clientMdmId7">
              <Translate contentKey="operaBigApplicationApp.dmOResv.clientMdmId7">Client Mdm Id 7</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.clientMdmId7}</dd>
          <dt>
            <span id="nameId8">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nameId8">Name Id 8</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nameId8}</dd>
          <dt>
            <span id="parentResvNameId9">
              <Translate contentKey="operaBigApplicationApp.dmOResv.parentResvNameId9">Parent Resv Name Id 9</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.parentResvNameId9}</dd>
          <dt>
            <span id="contactId10">
              <Translate contentKey="operaBigApplicationApp.dmOResv.contactId10">Contact Id 10</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.contactId10}</dd>
          <dt>
            <span id="agenceId11">
              <Translate contentKey="operaBigApplicationApp.dmOResv.agenceId11">Agence Id 11</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.agenceId11}</dd>
          <dt>
            <span id="agenceNom12">
              <Translate contentKey="operaBigApplicationApp.dmOResv.agenceNom12">Agence Nom 12</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.agenceNom12}</dd>
          <dt>
            <span id="societeId13">
              <Translate contentKey="operaBigApplicationApp.dmOResv.societeId13">Societe Id 13</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.societeId13}</dd>
          <dt>
            <span id="groupeId14">
              <Translate contentKey="operaBigApplicationApp.dmOResv.groupeId14">Groupe Id 14</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.groupeId14}</dd>
          <dt>
            <span id="numBloc15">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numBloc15">Num Bloc 15</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numBloc15}</dd>
          <dt>
            <span id="typeResv16">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeResv16">Type Resv 16</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeResv16}</dd>
          <dt>
            <span id="statutResv17">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutResv17">Statut Resv 17</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutResv17}</dd>
          <dt>
            <span id="dateDebutResv18">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDebutResv18">Date Debut Resv 18</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDebutResv18 ? (
              <TextFormat value={dmOResvEntity.dateDebutResv18} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinResv19">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateFinResv19">Date Fin Resv 19</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateFinResv19 ? (
              <TextFormat value={dmOResvEntity.dateFinResv19} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateDebutResv20">
              <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateDebutResv20">Trunc Date Debut Resv 20</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.truncDateDebutResv20 ? (
              <TextFormat value={dmOResvEntity.truncDateDebutResv20} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateFinResv21">
              <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateFinResv21">Trunc Date Fin Resv 21</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.truncDateFinResv21 ? (
              <TextFormat value={dmOResvEntity.truncDateFinResv21} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnnResv22">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateAnnResv22">Date Ann Resv 22</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateAnnResv22 ? (
              <TextFormat value={dmOResvEntity.dateAnnResv22} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="pseudoRoomYn23">
              <Translate contentKey="operaBigApplicationApp.dmOResv.pseudoRoomYn23">Pseudo Room Yn 23</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.pseudoRoomYn23}</dd>
          <dt>
            <span id="createurResv24">
              <Translate contentKey="operaBigApplicationApp.dmOResv.createurResv24">Createur Resv 24</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.createurResv24}</dd>
          <dt>
            <span id="nomCreateurResv25">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nomCreateurResv25">Nom Createur Resv 25</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nomCreateurResv25}</dd>
          <dt>
            <span id="codeGarantie26">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGarantie26">Code Garantie 26</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGarantie26}</dd>
          <dt>
            <span id="flgDed27">
              <Translate contentKey="operaBigApplicationApp.dmOResv.flgDed27">Flg Ded 27</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.flgDed27}</dd>
          <dt>
            <span id="codePays28">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codePays28">Code Pays 28</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codePays28}</dd>
          <dt>
            <span id="libPays29">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libPays29">Lib Pays 29</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libPays29}</dd>
          <dt>
            <span id="codeNationalite30">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeNationalite30">Code Nationalite 30</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeNationalite30}</dd>
          <dt>
            <span id="libNationalite31">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libNationalite31">Lib Nationalite 31</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libNationalite31}</dd>
          <dt>
            <span id="codeSource32">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeSource32">Code Source 32</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeSource32}</dd>
          <dt>
            <span id="libSource33">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libSource33">Lib Source 33</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libSource33}</dd>
          <dt>
            <span id="codeGrandSource34">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandSource34">Code Grand Source 34</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGrandSource34}</dd>
          <dt>
            <span id="codeOrigine35">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeOrigine35">Code Origine 35</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeOrigine35}</dd>
          <dt>
            <span id="libOrigine36">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libOrigine36">Lib Origine 36</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libOrigine36}</dd>
          <dt>
            <span id="codeMarche37">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeMarche37">Code Marche 37</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeMarche37}</dd>
          <dt>
            <span id="libMarche38">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libMarche38">Lib Marche 38</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libMarche38}</dd>
          <dt>
            <span id="codeGrandMarche39">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandMarche39">Code Grand Marche 39</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGrandMarche39}</dd>
          <dt>
            <span id="libGrandMarche40">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libGrandMarche40">Lib Grand Marche 40</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libGrandMarche40}</dd>
          <dt>
            <span id="codePrix41">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codePrix41">Code Prix 41</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codePrix41}</dd>
          <dt>
            <span id="categPrix42">
              <Translate contentKey="operaBigApplicationApp.dmOResv.categPrix42">Categ Prix 42</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.categPrix42}</dd>
          <dt>
            <span id="libPrix43">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libPrix43">Lib Prix 43</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libPrix43}</dd>
          <dt>
            <span id="numChb44">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numChb44">Num Chb 44</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numChb44}</dd>
          <dt>
            <span id="descriptionTypeChb45">
              <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChb45">Description Type Chb 45</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.descriptionTypeChb45}</dd>
          <dt>
            <span id="codeTypeChb46">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChb46">Code Type Chb 46</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeTypeChb46}</dd>
          <dt>
            <span id="classChb47">
              <Translate contentKey="operaBigApplicationApp.dmOResv.classChb47">Class Chb 47</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.classChb47}</dd>
          <dt>
            <span id="caractChb48">
              <Translate contentKey="operaBigApplicationApp.dmOResv.caractChb48">Caract Chb 48</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.caractChb48}</dd>
          <dt>
            <span id="typeChbDeReservation49">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeChbDeReservation49">Type Chb De Reservation 49</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeChbDeReservation49}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv50">
              <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv50">Description Type Chb De Resv 50</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.descriptionTypeChbDeResv50}</dd>
          <dt>
            <span id="codeTypeChbDeResv51">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChbDeResv51">Code Type Chb De Resv 51</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeTypeChbDeResv51}</dd>
          <dt>
            <span id="statutDeReservation52">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDeReservation52">Statut De Reservation 52</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDeReservation52}</dd>
          <dt>
            <span id="circuitDistribution53">
              <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribution53">Circuit Distribution 53</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.circuitDistribution53}</dd>
          <dt>
            <span id="circuitDistribUserRegroup54">
              <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribUserRegroup54">Circuit Distrib User Regroup 54</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.circuitDistribUserRegroup54}</dd>
          <dt>
            <span id="numCrs55">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numCrs55">Num Crs 55</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numCrs55}</dd>
          <dt>
            <span id="typeRefCrs56">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeRefCrs56">Type Ref Crs 56</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeRefCrs56}</dd>
          <dt>
            <span id="crsInsertDate57">
              <Translate contentKey="operaBigApplicationApp.dmOResv.crsInsertDate57">Crs Insert Date 57</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.crsInsertDate57 ? (
              <TextFormat value={dmOResvEntity.crsInsertDate57} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateCreaResv58">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateCreaResv58">Date Crea Resv 58</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateCreaResv58 ? (
              <TextFormat value={dmOResvEntity.dateCreaResv58} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="datePremier59">
              <Translate contentKey="operaBigApplicationApp.dmOResv.datePremier59">Date Premier 59</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.datePremier59 ? (
              <TextFormat value={dmOResvEntity.datePremier59} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutPremier60">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutPremier60">Statut Premier 60</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutPremier60}</dd>
          <dt>
            <span id="dateDernier61">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernier61">Date Dernier 61</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDernier61 ? (
              <TextFormat value={dmOResvEntity.dateDernier61} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernier62">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernier62">Statut Dernier 62</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDernier62}</dd>
          <dt>
            <span id="dateDernierPseudo63">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernierPseudo63">Date Dernier Pseudo 63</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDernierPseudo63 ? (
              <TextFormat value={dmOResvEntity.dateDernierPseudo63} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernierPseudo64">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernierPseudo64">Statut Dernier Pseudo 64</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDernierPseudo64}</dd>
          <dt>
            <span id="diffDtCreaAnn65">
              <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtCreaAnn65">Diff Dt Crea Ann 65</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.diffDtCreaAnn65}</dd>
          <dt>
            <span id="diffDtArrAnn66">
              <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtArrAnn66">Diff Dt Arr Ann 66</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.diffDtArrAnn66}</dd>
          <dt>
            <span id="leadtime67">
              <Translate contentKey="operaBigApplicationApp.dmOResv.leadtime67">Leadtime 67</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.leadtime67}</dd>
          <dt>
            <span id="los68">
              <Translate contentKey="operaBigApplicationApp.dmOResv.los68">Los 68</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.los68}</dd>
          <dt>
            <span id="occupantsGroupe69">
              <Translate contentKey="operaBigApplicationApp.dmOResv.occupantsGroupe69">Occupants Groupe 69</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.occupantsGroupe69}</dd>
          <dt>
            <span id="nbNuitee70">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuitee70">Nb Nuitee 70</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbNuitee70}</dd>
          <dt>
            <span id="nbNuiteeNnDed71">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuiteeNnDed71">Nb Nuitee Nn Ded 71</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbNuiteeNnDed71}</dd>
          <dt>
            <span id="nbResvAnn72">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbResvAnn72">Nb Resv Ann 72</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbResvAnn72}</dd>
          <dt>
            <span id="nbAdu73">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbAdu73">Nb Adu 73</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbAdu73}</dd>
          <dt>
            <span id="nbEnf74">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbEnf74">Nb Enf 74</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbEnf74}</dd>
          <dt>
            <span id="nbPersDayU75">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDayU75">Nb Pers Day U 75</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersDayU75}</dd>
          <dt>
            <span id="nbPersArr76">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersArr76">Nb Pers Arr 76</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersArr76}</dd>
          <dt>
            <span id="nbPersDep77">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDep77">Nb Pers Dep 77</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersDep77}</dd>
          <dt>
            <span id="nbPersAnn78">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersAnn78">Nb Pers Ann 78</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersAnn78}</dd>
          <dt>
            <span id="nbPersNoshow79">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersNoshow79">Nb Pers Noshow 79</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersNoshow79}</dd>
          <dt>
            <span id="nbChbDayU80">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDayU80">Nb Chb Day U 80</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbDayU80}</dd>
          <dt>
            <span id="nbChbArr81">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbArr81">Nb Chb Arr 81</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbArr81}</dd>
          <dt>
            <span id="nbChbDep82">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDep82">Nb Chb Dep 82</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbDep82}</dd>
          <dt>
            <span id="nbChbAnn83">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbAnn83">Nb Chb Ann 83</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbAnn83}</dd>
          <dt>
            <span id="nbChbNoshow84">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbNoshow84">Nb Chb Noshow 84</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbNoshow84}</dd>
          <dt>
            <span id="revenuNetChambre85">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambre85">Revenu Net Chambre 85</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetChambre85}</dd>
          <dt>
            <span id="revenuTaxeChambre86">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambre86">Revenu Taxe Chambre 86</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeChambre86}</dd>
          <dt>
            <span id="revenuNetChambreGlobal87">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambreGlobal87">Revenu Net Chambre Global 87</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetChambreGlobal87}</dd>
          <dt>
            <span id="revenuTaxeChambreGlobal88">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambreGlobal88">Revenu Taxe Chambre Global 88</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeChambreGlobal88}</dd>
          <dt>
            <span id="revenuNetBq89">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBq89">Revenu Net Bq 89</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetBq89}</dd>
          <dt>
            <span id="revenuTaxeBq90">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBq90">Revenu Taxe Bq 90</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeBq90}</dd>
          <dt>
            <span id="revenuNetBqGlobal91">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBqGlobal91">Revenu Net Bq Global 91</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetBqGlobal91}</dd>
          <dt>
            <span id="revenuTaxeBqGlobal92">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBqGlobal92">Revenu Taxe Bq Global 92</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeBqGlobal92}</dd>
          <dt>
            <span id="revenuNetExtra93">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtra93">Revenu Net Extra 93</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetExtra93}</dd>
          <dt>
            <span id="revenuTaxeExtra94">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtra94">Revenu Taxe Extra 94</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeExtra94}</dd>
          <dt>
            <span id="revenuNetExtraGlobal95">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtraGlobal95">Revenu Net Extra Global 95</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetExtraGlobal95}</dd>
          <dt>
            <span id="revenuTaxeExtraGlobal96">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtraGlobal96">Revenu Taxe Extra Global 96</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeExtraGlobal96}</dd>
          <dt>
            <span id="revenuNetTotal97">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotal97">Revenu Net Total 97</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetTotal97}</dd>
          <dt>
            <span id="revenuTaxeTotal98">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotal98">Revenu Taxe Total 98</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeTotal98}</dd>
          <dt>
            <span id="revenuNetTotalGlobal99">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotalGlobal99">Revenu Net Total Global 99</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetTotalGlobal99}</dd>
          <dt>
            <span id="revenuTaxeTotalGlobal100">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotalGlobal100">Revenu Taxe Total Global 100</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeTotalGlobal100}</dd>
          <dt>
            <span id="prodRevenuChambre101">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuChambre101">Prod Revenu Chambre 101</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuChambre101}</dd>
          <dt>
            <span id="prodRevenuBq102">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuBq102">Prod Revenu Bq 102</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuBq102}</dd>
          <dt>
            <span id="prodRevenuExtra103">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuExtra103">Prod Revenu Extra 103</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuExtra103}</dd>
          <dt>
            <span id="prodRevenuTotal104">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuTotal104">Prod Revenu Total 104</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuTotal104}</dd>
          <dt>
            <span id="prodChambreNbNuitees105">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodChambreNbNuitees105">Prod Chambre Nb Nuitees 105</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodChambreNbNuitees105}</dd>
          <dt>
            <span id="techCreateDate106">
              <Translate contentKey="operaBigApplicationApp.dmOResv.techCreateDate106">Tech Create Date 106</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.techCreateDate106 ? (
              <TextFormat value={dmOResvEntity.techCreateDate106} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdateDate107">
              <Translate contentKey="operaBigApplicationApp.dmOResv.techUpdateDate107">Tech Update Date 107</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.techUpdateDate107 ? (
              <TextFormat value={dmOResvEntity.techUpdateDate107} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="numLigne108">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numLigne108">Num Ligne 108</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numLigne108}</dd>
          <dt>
            <span id="resort109">
              <Translate contentKey="operaBigApplicationApp.dmOResv.resort109">Resort 109</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.resort109}</dd>
          <dt>
            <span id="resvNameId110">
              <Translate contentKey="operaBigApplicationApp.dmOResv.resvNameId110">Resv Name Id 110</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.resvNameId110}</dd>
          <dt>
            <span id="clientOId111">
              <Translate contentKey="operaBigApplicationApp.dmOResv.clientOId111">Client O Id 111</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.clientOId111}</dd>
          <dt>
            <span id="typeChb112">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeChb112">Type Chb 112</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeChb112}</dd>
          <dt>
            <span id="confirmationNo113">
              <Translate contentKey="operaBigApplicationApp.dmOResv.confirmationNo113">Confirmation No 113</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.confirmationNo113}</dd>
          <dt>
            <span id="clientMdmId114">
              <Translate contentKey="operaBigApplicationApp.dmOResv.clientMdmId114">Client Mdm Id 114</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.clientMdmId114}</dd>
          <dt>
            <span id="nameId115">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nameId115">Name Id 115</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nameId115}</dd>
          <dt>
            <span id="parentResvNameId116">
              <Translate contentKey="operaBigApplicationApp.dmOResv.parentResvNameId116">Parent Resv Name Id 116</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.parentResvNameId116}</dd>
          <dt>
            <span id="contactId117">
              <Translate contentKey="operaBigApplicationApp.dmOResv.contactId117">Contact Id 117</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.contactId117}</dd>
          <dt>
            <span id="agenceId118">
              <Translate contentKey="operaBigApplicationApp.dmOResv.agenceId118">Agence Id 118</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.agenceId118}</dd>
          <dt>
            <span id="agenceNom119">
              <Translate contentKey="operaBigApplicationApp.dmOResv.agenceNom119">Agence Nom 119</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.agenceNom119}</dd>
          <dt>
            <span id="societeId120">
              <Translate contentKey="operaBigApplicationApp.dmOResv.societeId120">Societe Id 120</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.societeId120}</dd>
          <dt>
            <span id="groupeId121">
              <Translate contentKey="operaBigApplicationApp.dmOResv.groupeId121">Groupe Id 121</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.groupeId121}</dd>
          <dt>
            <span id="numBloc122">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numBloc122">Num Bloc 122</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numBloc122}</dd>
          <dt>
            <span id="typeResv123">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeResv123">Type Resv 123</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeResv123}</dd>
          <dt>
            <span id="statutResv124">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutResv124">Statut Resv 124</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutResv124}</dd>
          <dt>
            <span id="dateDebutResv125">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDebutResv125">Date Debut Resv 125</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDebutResv125 ? (
              <TextFormat value={dmOResvEntity.dateDebutResv125} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinResv126">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateFinResv126">Date Fin Resv 126</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateFinResv126 ? (
              <TextFormat value={dmOResvEntity.dateFinResv126} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateDebutResv127">
              <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateDebutResv127">Trunc Date Debut Resv 127</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.truncDateDebutResv127 ? (
              <TextFormat value={dmOResvEntity.truncDateDebutResv127} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateFinResv128">
              <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateFinResv128">Trunc Date Fin Resv 128</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.truncDateFinResv128 ? (
              <TextFormat value={dmOResvEntity.truncDateFinResv128} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnnResv129">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateAnnResv129">Date Ann Resv 129</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateAnnResv129 ? (
              <TextFormat value={dmOResvEntity.dateAnnResv129} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="pseudoRoomYn130">
              <Translate contentKey="operaBigApplicationApp.dmOResv.pseudoRoomYn130">Pseudo Room Yn 130</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.pseudoRoomYn130}</dd>
          <dt>
            <span id="createurResv131">
              <Translate contentKey="operaBigApplicationApp.dmOResv.createurResv131">Createur Resv 131</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.createurResv131}</dd>
          <dt>
            <span id="nomCreateurResv132">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nomCreateurResv132">Nom Createur Resv 132</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nomCreateurResv132}</dd>
          <dt>
            <span id="codeGarantie133">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGarantie133">Code Garantie 133</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGarantie133}</dd>
          <dt>
            <span id="flgDed134">
              <Translate contentKey="operaBigApplicationApp.dmOResv.flgDed134">Flg Ded 134</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.flgDed134}</dd>
          <dt>
            <span id="codePays135">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codePays135">Code Pays 135</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codePays135}</dd>
          <dt>
            <span id="libPays136">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libPays136">Lib Pays 136</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libPays136}</dd>
          <dt>
            <span id="codeNationalite137">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeNationalite137">Code Nationalite 137</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeNationalite137}</dd>
          <dt>
            <span id="libNationalite138">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libNationalite138">Lib Nationalite 138</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libNationalite138}</dd>
          <dt>
            <span id="codeSource139">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeSource139">Code Source 139</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeSource139}</dd>
          <dt>
            <span id="libSource140">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libSource140">Lib Source 140</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libSource140}</dd>
          <dt>
            <span id="codeGrandSource141">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandSource141">Code Grand Source 141</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGrandSource141}</dd>
          <dt>
            <span id="codeOrigine142">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeOrigine142">Code Origine 142</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeOrigine142}</dd>
          <dt>
            <span id="libOrigine143">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libOrigine143">Lib Origine 143</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libOrigine143}</dd>
          <dt>
            <span id="codeMarche144">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeMarche144">Code Marche 144</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeMarche144}</dd>
          <dt>
            <span id="libMarche145">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libMarche145">Lib Marche 145</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libMarche145}</dd>
          <dt>
            <span id="codeGrandMarche146">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandMarche146">Code Grand Marche 146</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGrandMarche146}</dd>
          <dt>
            <span id="libGrandMarche147">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libGrandMarche147">Lib Grand Marche 147</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libGrandMarche147}</dd>
          <dt>
            <span id="codePrix148">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codePrix148">Code Prix 148</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codePrix148}</dd>
          <dt>
            <span id="categPrix149">
              <Translate contentKey="operaBigApplicationApp.dmOResv.categPrix149">Categ Prix 149</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.categPrix149}</dd>
          <dt>
            <span id="libPrix150">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libPrix150">Lib Prix 150</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libPrix150}</dd>
          <dt>
            <span id="numChb151">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numChb151">Num Chb 151</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numChb151}</dd>
          <dt>
            <span id="descriptionTypeChb152">
              <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChb152">Description Type Chb 152</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.descriptionTypeChb152}</dd>
          <dt>
            <span id="codeTypeChb153">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChb153">Code Type Chb 153</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeTypeChb153}</dd>
          <dt>
            <span id="classChb154">
              <Translate contentKey="operaBigApplicationApp.dmOResv.classChb154">Class Chb 154</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.classChb154}</dd>
          <dt>
            <span id="caractChb155">
              <Translate contentKey="operaBigApplicationApp.dmOResv.caractChb155">Caract Chb 155</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.caractChb155}</dd>
          <dt>
            <span id="typeChbDeReservation156">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeChbDeReservation156">Type Chb De Reservation 156</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeChbDeReservation156}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv157">
              <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv157">
                Description Type Chb De Resv 157
              </Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.descriptionTypeChbDeResv157}</dd>
          <dt>
            <span id="codeTypeChbDeResv158">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChbDeResv158">Code Type Chb De Resv 158</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeTypeChbDeResv158}</dd>
          <dt>
            <span id="statutDeReservation159">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDeReservation159">Statut De Reservation 159</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDeReservation159}</dd>
          <dt>
            <span id="circuitDistribution160">
              <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribution160">Circuit Distribution 160</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.circuitDistribution160}</dd>
          <dt>
            <span id="circuitDistribUserRegroup161">
              <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribUserRegroup161">
                Circuit Distrib User Regroup 161
              </Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.circuitDistribUserRegroup161}</dd>
          <dt>
            <span id="numCrs162">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numCrs162">Num Crs 162</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numCrs162}</dd>
          <dt>
            <span id="typeRefCrs163">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeRefCrs163">Type Ref Crs 163</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeRefCrs163}</dd>
          <dt>
            <span id="crsInsertDate164">
              <Translate contentKey="operaBigApplicationApp.dmOResv.crsInsertDate164">Crs Insert Date 164</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.crsInsertDate164 ? (
              <TextFormat value={dmOResvEntity.crsInsertDate164} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateCreaResv165">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateCreaResv165">Date Crea Resv 165</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateCreaResv165 ? (
              <TextFormat value={dmOResvEntity.dateCreaResv165} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="datePremier166">
              <Translate contentKey="operaBigApplicationApp.dmOResv.datePremier166">Date Premier 166</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.datePremier166 ? (
              <TextFormat value={dmOResvEntity.datePremier166} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutPremier167">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutPremier167">Statut Premier 167</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutPremier167}</dd>
          <dt>
            <span id="dateDernier168">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernier168">Date Dernier 168</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDernier168 ? (
              <TextFormat value={dmOResvEntity.dateDernier168} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernier169">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernier169">Statut Dernier 169</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDernier169}</dd>
          <dt>
            <span id="dateDernierPseudo170">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernierPseudo170">Date Dernier Pseudo 170</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDernierPseudo170 ? (
              <TextFormat value={dmOResvEntity.dateDernierPseudo170} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernierPseudo171">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernierPseudo171">Statut Dernier Pseudo 171</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDernierPseudo171}</dd>
          <dt>
            <span id="diffDtCreaAnn172">
              <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtCreaAnn172">Diff Dt Crea Ann 172</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.diffDtCreaAnn172}</dd>
          <dt>
            <span id="diffDtArrAnn173">
              <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtArrAnn173">Diff Dt Arr Ann 173</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.diffDtArrAnn173}</dd>
          <dt>
            <span id="leadtime174">
              <Translate contentKey="operaBigApplicationApp.dmOResv.leadtime174">Leadtime 174</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.leadtime174}</dd>
          <dt>
            <span id="los175">
              <Translate contentKey="operaBigApplicationApp.dmOResv.los175">Los 175</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.los175}</dd>
          <dt>
            <span id="occupantsGroupe176">
              <Translate contentKey="operaBigApplicationApp.dmOResv.occupantsGroupe176">Occupants Groupe 176</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.occupantsGroupe176}</dd>
          <dt>
            <span id="nbNuitee177">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuitee177">Nb Nuitee 177</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbNuitee177}</dd>
          <dt>
            <span id="nbNuiteeNnDed178">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuiteeNnDed178">Nb Nuitee Nn Ded 178</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbNuiteeNnDed178}</dd>
          <dt>
            <span id="nbResvAnn179">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbResvAnn179">Nb Resv Ann 179</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbResvAnn179}</dd>
          <dt>
            <span id="nbAdu180">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbAdu180">Nb Adu 180</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbAdu180}</dd>
          <dt>
            <span id="nbEnf181">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbEnf181">Nb Enf 181</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbEnf181}</dd>
          <dt>
            <span id="nbPersDayU182">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDayU182">Nb Pers Day U 182</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersDayU182}</dd>
          <dt>
            <span id="nbPersArr183">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersArr183">Nb Pers Arr 183</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersArr183}</dd>
          <dt>
            <span id="nbPersDep184">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDep184">Nb Pers Dep 184</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersDep184}</dd>
          <dt>
            <span id="nbPersAnn185">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersAnn185">Nb Pers Ann 185</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersAnn185}</dd>
          <dt>
            <span id="nbPersNoshow186">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersNoshow186">Nb Pers Noshow 186</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersNoshow186}</dd>
          <dt>
            <span id="nbChbDayU187">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDayU187">Nb Chb Day U 187</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbDayU187}</dd>
          <dt>
            <span id="nbChbArr188">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbArr188">Nb Chb Arr 188</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbArr188}</dd>
          <dt>
            <span id="nbChbDep189">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDep189">Nb Chb Dep 189</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbDep189}</dd>
          <dt>
            <span id="nbChbAnn190">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbAnn190">Nb Chb Ann 190</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbAnn190}</dd>
          <dt>
            <span id="nbChbNoshow191">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbNoshow191">Nb Chb Noshow 191</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbNoshow191}</dd>
          <dt>
            <span id="revenuNetChambre192">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambre192">Revenu Net Chambre 192</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetChambre192}</dd>
          <dt>
            <span id="revenuTaxeChambre193">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambre193">Revenu Taxe Chambre 193</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeChambre193}</dd>
          <dt>
            <span id="revenuNetChambreGlobal194">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambreGlobal194">Revenu Net Chambre Global 194</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetChambreGlobal194}</dd>
          <dt>
            <span id="revenuTaxeChambreGlobal195">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambreGlobal195">Revenu Taxe Chambre Global 195</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeChambreGlobal195}</dd>
          <dt>
            <span id="revenuNetBq196">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBq196">Revenu Net Bq 196</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetBq196}</dd>
          <dt>
            <span id="revenuTaxeBq197">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBq197">Revenu Taxe Bq 197</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeBq197}</dd>
          <dt>
            <span id="revenuNetBqGlobal198">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetBqGlobal198">Revenu Net Bq Global 198</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetBqGlobal198}</dd>
          <dt>
            <span id="revenuTaxeBqGlobal199">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeBqGlobal199">Revenu Taxe Bq Global 199</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeBqGlobal199}</dd>
          <dt>
            <span id="revenuNetExtra200">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtra200">Revenu Net Extra 200</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetExtra200}</dd>
          <dt>
            <span id="revenuTaxeExtra201">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtra201">Revenu Taxe Extra 201</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeExtra201}</dd>
          <dt>
            <span id="revenuNetExtraGlobal202">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetExtraGlobal202">Revenu Net Extra Global 202</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetExtraGlobal202}</dd>
          <dt>
            <span id="revenuTaxeExtraGlobal203">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeExtraGlobal203">Revenu Taxe Extra Global 203</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeExtraGlobal203}</dd>
          <dt>
            <span id="revenuNetTotal204">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotal204">Revenu Net Total 204</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetTotal204}</dd>
          <dt>
            <span id="revenuTaxeTotal205">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotal205">Revenu Taxe Total 205</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeTotal205}</dd>
          <dt>
            <span id="revenuNetTotalGlobal206">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetTotalGlobal206">Revenu Net Total Global 206</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetTotalGlobal206}</dd>
          <dt>
            <span id="revenuTaxeTotalGlobal207">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeTotalGlobal207">Revenu Taxe Total Global 207</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeTotalGlobal207}</dd>
          <dt>
            <span id="prodRevenuChambre208">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuChambre208">Prod Revenu Chambre 208</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuChambre208}</dd>
          <dt>
            <span id="prodRevenuBq209">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuBq209">Prod Revenu Bq 209</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuBq209}</dd>
          <dt>
            <span id="prodRevenuExtra210">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuExtra210">Prod Revenu Extra 210</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuExtra210}</dd>
          <dt>
            <span id="prodRevenuTotal211">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodRevenuTotal211">Prod Revenu Total 211</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodRevenuTotal211}</dd>
          <dt>
            <span id="prodChambreNbNuitees212">
              <Translate contentKey="operaBigApplicationApp.dmOResv.prodChambreNbNuitees212">Prod Chambre Nb Nuitees 212</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.prodChambreNbNuitees212}</dd>
          <dt>
            <span id="techCreateDate213">
              <Translate contentKey="operaBigApplicationApp.dmOResv.techCreateDate213">Tech Create Date 213</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.techCreateDate213 ? (
              <TextFormat value={dmOResvEntity.techCreateDate213} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdateDate214">
              <Translate contentKey="operaBigApplicationApp.dmOResv.techUpdateDate214">Tech Update Date 214</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.techUpdateDate214 ? (
              <TextFormat value={dmOResvEntity.techUpdateDate214} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="numLigne215">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numLigne215">Num Ligne 215</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numLigne215}</dd>
          <dt>
            <span id="resort216">
              <Translate contentKey="operaBigApplicationApp.dmOResv.resort216">Resort 216</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.resort216}</dd>
          <dt>
            <span id="resvNameId217">
              <Translate contentKey="operaBigApplicationApp.dmOResv.resvNameId217">Resv Name Id 217</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.resvNameId217}</dd>
          <dt>
            <span id="clientOId218">
              <Translate contentKey="operaBigApplicationApp.dmOResv.clientOId218">Client O Id 218</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.clientOId218}</dd>
          <dt>
            <span id="typeChb219">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeChb219">Type Chb 219</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeChb219}</dd>
          <dt>
            <span id="confirmationNo220">
              <Translate contentKey="operaBigApplicationApp.dmOResv.confirmationNo220">Confirmation No 220</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.confirmationNo220}</dd>
          <dt>
            <span id="clientMdmId221">
              <Translate contentKey="operaBigApplicationApp.dmOResv.clientMdmId221">Client Mdm Id 221</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.clientMdmId221}</dd>
          <dt>
            <span id="nameId222">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nameId222">Name Id 222</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nameId222}</dd>
          <dt>
            <span id="parentResvNameId223">
              <Translate contentKey="operaBigApplicationApp.dmOResv.parentResvNameId223">Parent Resv Name Id 223</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.parentResvNameId223}</dd>
          <dt>
            <span id="contactId224">
              <Translate contentKey="operaBigApplicationApp.dmOResv.contactId224">Contact Id 224</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.contactId224}</dd>
          <dt>
            <span id="agenceId225">
              <Translate contentKey="operaBigApplicationApp.dmOResv.agenceId225">Agence Id 225</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.agenceId225}</dd>
          <dt>
            <span id="agenceNom226">
              <Translate contentKey="operaBigApplicationApp.dmOResv.agenceNom226">Agence Nom 226</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.agenceNom226}</dd>
          <dt>
            <span id="societeId227">
              <Translate contentKey="operaBigApplicationApp.dmOResv.societeId227">Societe Id 227</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.societeId227}</dd>
          <dt>
            <span id="groupeId228">
              <Translate contentKey="operaBigApplicationApp.dmOResv.groupeId228">Groupe Id 228</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.groupeId228}</dd>
          <dt>
            <span id="numBloc229">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numBloc229">Num Bloc 229</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numBloc229}</dd>
          <dt>
            <span id="typeResv230">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeResv230">Type Resv 230</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeResv230}</dd>
          <dt>
            <span id="statutResv231">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutResv231">Statut Resv 231</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutResv231}</dd>
          <dt>
            <span id="dateDebutResv232">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDebutResv232">Date Debut Resv 232</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDebutResv232 ? (
              <TextFormat value={dmOResvEntity.dateDebutResv232} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinResv233">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateFinResv233">Date Fin Resv 233</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateFinResv233 ? (
              <TextFormat value={dmOResvEntity.dateFinResv233} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateDebutResv234">
              <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateDebutResv234">Trunc Date Debut Resv 234</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.truncDateDebutResv234 ? (
              <TextFormat value={dmOResvEntity.truncDateDebutResv234} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateFinResv235">
              <Translate contentKey="operaBigApplicationApp.dmOResv.truncDateFinResv235">Trunc Date Fin Resv 235</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.truncDateFinResv235 ? (
              <TextFormat value={dmOResvEntity.truncDateFinResv235} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnnResv236">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateAnnResv236">Date Ann Resv 236</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateAnnResv236 ? (
              <TextFormat value={dmOResvEntity.dateAnnResv236} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="pseudoRoomYn237">
              <Translate contentKey="operaBigApplicationApp.dmOResv.pseudoRoomYn237">Pseudo Room Yn 237</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.pseudoRoomYn237}</dd>
          <dt>
            <span id="createurResv238">
              <Translate contentKey="operaBigApplicationApp.dmOResv.createurResv238">Createur Resv 238</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.createurResv238}</dd>
          <dt>
            <span id="nomCreateurResv239">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nomCreateurResv239">Nom Createur Resv 239</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nomCreateurResv239}</dd>
          <dt>
            <span id="codeGarantie240">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGarantie240">Code Garantie 240</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGarantie240}</dd>
          <dt>
            <span id="flgDed241">
              <Translate contentKey="operaBigApplicationApp.dmOResv.flgDed241">Flg Ded 241</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.flgDed241}</dd>
          <dt>
            <span id="codePays242">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codePays242">Code Pays 242</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codePays242}</dd>
          <dt>
            <span id="libPays243">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libPays243">Lib Pays 243</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libPays243}</dd>
          <dt>
            <span id="codeNationalite244">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeNationalite244">Code Nationalite 244</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeNationalite244}</dd>
          <dt>
            <span id="libNationalite245">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libNationalite245">Lib Nationalite 245</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libNationalite245}</dd>
          <dt>
            <span id="codeSource246">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeSource246">Code Source 246</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeSource246}</dd>
          <dt>
            <span id="libSource247">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libSource247">Lib Source 247</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libSource247}</dd>
          <dt>
            <span id="codeGrandSource248">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandSource248">Code Grand Source 248</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGrandSource248}</dd>
          <dt>
            <span id="codeOrigine249">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeOrigine249">Code Origine 249</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeOrigine249}</dd>
          <dt>
            <span id="libOrigine250">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libOrigine250">Lib Origine 250</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libOrigine250}</dd>
          <dt>
            <span id="codeMarche251">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeMarche251">Code Marche 251</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeMarche251}</dd>
          <dt>
            <span id="libMarche252">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libMarche252">Lib Marche 252</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libMarche252}</dd>
          <dt>
            <span id="codeGrandMarche253">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeGrandMarche253">Code Grand Marche 253</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeGrandMarche253}</dd>
          <dt>
            <span id="libGrandMarche254">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libGrandMarche254">Lib Grand Marche 254</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libGrandMarche254}</dd>
          <dt>
            <span id="codePrix255">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codePrix255">Code Prix 255</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codePrix255}</dd>
          <dt>
            <span id="categPrix256">
              <Translate contentKey="operaBigApplicationApp.dmOResv.categPrix256">Categ Prix 256</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.categPrix256}</dd>
          <dt>
            <span id="libPrix257">
              <Translate contentKey="operaBigApplicationApp.dmOResv.libPrix257">Lib Prix 257</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.libPrix257}</dd>
          <dt>
            <span id="numChb258">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numChb258">Num Chb 258</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numChb258}</dd>
          <dt>
            <span id="descriptionTypeChb259">
              <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChb259">Description Type Chb 259</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.descriptionTypeChb259}</dd>
          <dt>
            <span id="codeTypeChb260">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChb260">Code Type Chb 260</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeTypeChb260}</dd>
          <dt>
            <span id="classChb261">
              <Translate contentKey="operaBigApplicationApp.dmOResv.classChb261">Class Chb 261</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.classChb261}</dd>
          <dt>
            <span id="caractChb262">
              <Translate contentKey="operaBigApplicationApp.dmOResv.caractChb262">Caract Chb 262</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.caractChb262}</dd>
          <dt>
            <span id="typeChbDeReservation263">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeChbDeReservation263">Type Chb De Reservation 263</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeChbDeReservation263}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv264">
              <Translate contentKey="operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv264">
                Description Type Chb De Resv 264
              </Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.descriptionTypeChbDeResv264}</dd>
          <dt>
            <span id="codeTypeChbDeResv265">
              <Translate contentKey="operaBigApplicationApp.dmOResv.codeTypeChbDeResv265">Code Type Chb De Resv 265</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.codeTypeChbDeResv265}</dd>
          <dt>
            <span id="statutDeReservation266">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDeReservation266">Statut De Reservation 266</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDeReservation266}</dd>
          <dt>
            <span id="circuitDistribution267">
              <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribution267">Circuit Distribution 267</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.circuitDistribution267}</dd>
          <dt>
            <span id="circuitDistribUserRegroup268">
              <Translate contentKey="operaBigApplicationApp.dmOResv.circuitDistribUserRegroup268">
                Circuit Distrib User Regroup 268
              </Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.circuitDistribUserRegroup268}</dd>
          <dt>
            <span id="numCrs269">
              <Translate contentKey="operaBigApplicationApp.dmOResv.numCrs269">Num Crs 269</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.numCrs269}</dd>
          <dt>
            <span id="typeRefCrs270">
              <Translate contentKey="operaBigApplicationApp.dmOResv.typeRefCrs270">Type Ref Crs 270</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.typeRefCrs270}</dd>
          <dt>
            <span id="crsInsertDate271">
              <Translate contentKey="operaBigApplicationApp.dmOResv.crsInsertDate271">Crs Insert Date 271</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.crsInsertDate271 ? (
              <TextFormat value={dmOResvEntity.crsInsertDate271} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateCreaResv272">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateCreaResv272">Date Crea Resv 272</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateCreaResv272 ? (
              <TextFormat value={dmOResvEntity.dateCreaResv272} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="datePremier273">
              <Translate contentKey="operaBigApplicationApp.dmOResv.datePremier273">Date Premier 273</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.datePremier273 ? (
              <TextFormat value={dmOResvEntity.datePremier273} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutPremier274">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutPremier274">Statut Premier 274</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutPremier274}</dd>
          <dt>
            <span id="dateDernier275">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernier275">Date Dernier 275</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDernier275 ? (
              <TextFormat value={dmOResvEntity.dateDernier275} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernier276">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernier276">Statut Dernier 276</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDernier276}</dd>
          <dt>
            <span id="dateDernierPseudo277">
              <Translate contentKey="operaBigApplicationApp.dmOResv.dateDernierPseudo277">Date Dernier Pseudo 277</Translate>
            </span>
          </dt>
          <dd>
            {dmOResvEntity.dateDernierPseudo277 ? (
              <TextFormat value={dmOResvEntity.dateDernierPseudo277} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernierPseudo278">
              <Translate contentKey="operaBigApplicationApp.dmOResv.statutDernierPseudo278">Statut Dernier Pseudo 278</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.statutDernierPseudo278}</dd>
          <dt>
            <span id="diffDtCreaAnn279">
              <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtCreaAnn279">Diff Dt Crea Ann 279</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.diffDtCreaAnn279}</dd>
          <dt>
            <span id="diffDtArrAnn280">
              <Translate contentKey="operaBigApplicationApp.dmOResv.diffDtArrAnn280">Diff Dt Arr Ann 280</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.diffDtArrAnn280}</dd>
          <dt>
            <span id="leadtime281">
              <Translate contentKey="operaBigApplicationApp.dmOResv.leadtime281">Leadtime 281</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.leadtime281}</dd>
          <dt>
            <span id="los282">
              <Translate contentKey="operaBigApplicationApp.dmOResv.los282">Los 282</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.los282}</dd>
          <dt>
            <span id="occupantsGroupe283">
              <Translate contentKey="operaBigApplicationApp.dmOResv.occupantsGroupe283">Occupants Groupe 283</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.occupantsGroupe283}</dd>
          <dt>
            <span id="nbNuitee284">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuitee284">Nb Nuitee 284</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbNuitee284}</dd>
          <dt>
            <span id="nbNuiteeNnDed285">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbNuiteeNnDed285">Nb Nuitee Nn Ded 285</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbNuiteeNnDed285}</dd>
          <dt>
            <span id="nbResvAnn286">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbResvAnn286">Nb Resv Ann 286</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbResvAnn286}</dd>
          <dt>
            <span id="nbAdu287">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbAdu287">Nb Adu 287</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbAdu287}</dd>
          <dt>
            <span id="nbEnf288">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbEnf288">Nb Enf 288</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbEnf288}</dd>
          <dt>
            <span id="nbPersDayU289">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDayU289">Nb Pers Day U 289</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersDayU289}</dd>
          <dt>
            <span id="nbPersArr290">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersArr290">Nb Pers Arr 290</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersArr290}</dd>
          <dt>
            <span id="nbPersDep291">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersDep291">Nb Pers Dep 291</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersDep291}</dd>
          <dt>
            <span id="nbPersAnn292">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersAnn292">Nb Pers Ann 292</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersAnn292}</dd>
          <dt>
            <span id="nbPersNoshow293">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbPersNoshow293">Nb Pers Noshow 293</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbPersNoshow293}</dd>
          <dt>
            <span id="nbChbDayU294">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDayU294">Nb Chb Day U 294</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbDayU294}</dd>
          <dt>
            <span id="nbChbArr295">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbArr295">Nb Chb Arr 295</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbArr295}</dd>
          <dt>
            <span id="nbChbDep296">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbDep296">Nb Chb Dep 296</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbDep296}</dd>
          <dt>
            <span id="nbChbAnn297">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbAnn297">Nb Chb Ann 297</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbAnn297}</dd>
          <dt>
            <span id="nbChbNoshow298">
              <Translate contentKey="operaBigApplicationApp.dmOResv.nbChbNoshow298">Nb Chb Noshow 298</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.nbChbNoshow298}</dd>
          <dt>
            <span id="revenuNetChambre299">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuNetChambre299">Revenu Net Chambre 299</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuNetChambre299}</dd>
          <dt>
            <span id="revenuTaxeChambre300">
              <Translate contentKey="operaBigApplicationApp.dmOResv.revenuTaxeChambre300">Revenu Taxe Chambre 300</Translate>
            </span>
          </dt>
          <dd>{dmOResvEntity.revenuTaxeChambre300}</dd>
        </dl>
        <Button tag={Link} to="/dm-o-resv" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/dm-o-resv/${dmOResvEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DmOResvDetail;
