import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDmOResv } from 'app/shared/model/dm-o-resv.model';
import { getEntity, updateEntity, createEntity, reset } from './dm-o-resv.reducer';

export const DmOResvUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const dmOResvEntity = useAppSelector(state => state.dmOResv.entity);
  const loading = useAppSelector(state => state.dmOResv.loading);
  const updating = useAppSelector(state => state.dmOResv.updating);
  const updateSuccess = useAppSelector(state => state.dmOResv.updateSuccess);

  const handleClose = () => {
    navigate('/dm-o-resv' + location.search);
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
    if (values.numLigne1 !== undefined && typeof values.numLigne1 !== 'number') {
      values.numLigne1 = Number(values.numLigne1);
    }
    if (values.resvNameId3 !== undefined && typeof values.resvNameId3 !== 'number') {
      values.resvNameId3 = Number(values.resvNameId3);
    }
    if (values.nameId8 !== undefined && typeof values.nameId8 !== 'number') {
      values.nameId8 = Number(values.nameId8);
    }
    if (values.parentResvNameId9 !== undefined && typeof values.parentResvNameId9 !== 'number') {
      values.parentResvNameId9 = Number(values.parentResvNameId9);
    }
    if (values.contactId10 !== undefined && typeof values.contactId10 !== 'number') {
      values.contactId10 = Number(values.contactId10);
    }
    if (values.agenceId11 !== undefined && typeof values.agenceId11 !== 'number') {
      values.agenceId11 = Number(values.agenceId11);
    }
    if (values.societeId13 !== undefined && typeof values.societeId13 !== 'number') {
      values.societeId13 = Number(values.societeId13);
    }
    if (values.groupeId14 !== undefined && typeof values.groupeId14 !== 'number') {
      values.groupeId14 = Number(values.groupeId14);
    }
    if (values.numBloc15 !== undefined && typeof values.numBloc15 !== 'number') {
      values.numBloc15 = Number(values.numBloc15);
    }
    if (values.createurResv24 !== undefined && typeof values.createurResv24 !== 'number') {
      values.createurResv24 = Number(values.createurResv24);
    }
    if (values.diffDtCreaAnn65 !== undefined && typeof values.diffDtCreaAnn65 !== 'number') {
      values.diffDtCreaAnn65 = Number(values.diffDtCreaAnn65);
    }
    if (values.diffDtArrAnn66 !== undefined && typeof values.diffDtArrAnn66 !== 'number') {
      values.diffDtArrAnn66 = Number(values.diffDtArrAnn66);
    }
    if (values.leadtime67 !== undefined && typeof values.leadtime67 !== 'number') {
      values.leadtime67 = Number(values.leadtime67);
    }
    if (values.los68 !== undefined && typeof values.los68 !== 'number') {
      values.los68 = Number(values.los68);
    }
    if (values.nbNuitee70 !== undefined && typeof values.nbNuitee70 !== 'number') {
      values.nbNuitee70 = Number(values.nbNuitee70);
    }
    if (values.nbNuiteeNnDed71 !== undefined && typeof values.nbNuiteeNnDed71 !== 'number') {
      values.nbNuiteeNnDed71 = Number(values.nbNuiteeNnDed71);
    }
    if (values.nbResvAnn72 !== undefined && typeof values.nbResvAnn72 !== 'number') {
      values.nbResvAnn72 = Number(values.nbResvAnn72);
    }
    if (values.nbAdu73 !== undefined && typeof values.nbAdu73 !== 'number') {
      values.nbAdu73 = Number(values.nbAdu73);
    }
    if (values.nbEnf74 !== undefined && typeof values.nbEnf74 !== 'number') {
      values.nbEnf74 = Number(values.nbEnf74);
    }
    if (values.nbPersDayU75 !== undefined && typeof values.nbPersDayU75 !== 'number') {
      values.nbPersDayU75 = Number(values.nbPersDayU75);
    }
    if (values.nbPersArr76 !== undefined && typeof values.nbPersArr76 !== 'number') {
      values.nbPersArr76 = Number(values.nbPersArr76);
    }
    if (values.nbPersDep77 !== undefined && typeof values.nbPersDep77 !== 'number') {
      values.nbPersDep77 = Number(values.nbPersDep77);
    }
    if (values.nbPersAnn78 !== undefined && typeof values.nbPersAnn78 !== 'number') {
      values.nbPersAnn78 = Number(values.nbPersAnn78);
    }
    if (values.nbPersNoshow79 !== undefined && typeof values.nbPersNoshow79 !== 'number') {
      values.nbPersNoshow79 = Number(values.nbPersNoshow79);
    }
    if (values.nbChbDayU80 !== undefined && typeof values.nbChbDayU80 !== 'number') {
      values.nbChbDayU80 = Number(values.nbChbDayU80);
    }
    if (values.nbChbArr81 !== undefined && typeof values.nbChbArr81 !== 'number') {
      values.nbChbArr81 = Number(values.nbChbArr81);
    }
    if (values.nbChbDep82 !== undefined && typeof values.nbChbDep82 !== 'number') {
      values.nbChbDep82 = Number(values.nbChbDep82);
    }
    if (values.nbChbAnn83 !== undefined && typeof values.nbChbAnn83 !== 'number') {
      values.nbChbAnn83 = Number(values.nbChbAnn83);
    }
    if (values.nbChbNoshow84 !== undefined && typeof values.nbChbNoshow84 !== 'number') {
      values.nbChbNoshow84 = Number(values.nbChbNoshow84);
    }
    if (values.revenuNetChambre85 !== undefined && typeof values.revenuNetChambre85 !== 'number') {
      values.revenuNetChambre85 = Number(values.revenuNetChambre85);
    }
    if (values.revenuTaxeChambre86 !== undefined && typeof values.revenuTaxeChambre86 !== 'number') {
      values.revenuTaxeChambre86 = Number(values.revenuTaxeChambre86);
    }
    if (values.revenuNetChambreGlobal87 !== undefined && typeof values.revenuNetChambreGlobal87 !== 'number') {
      values.revenuNetChambreGlobal87 = Number(values.revenuNetChambreGlobal87);
    }
    if (values.revenuTaxeChambreGlobal88 !== undefined && typeof values.revenuTaxeChambreGlobal88 !== 'number') {
      values.revenuTaxeChambreGlobal88 = Number(values.revenuTaxeChambreGlobal88);
    }
    if (values.revenuNetBq89 !== undefined && typeof values.revenuNetBq89 !== 'number') {
      values.revenuNetBq89 = Number(values.revenuNetBq89);
    }
    if (values.revenuTaxeBq90 !== undefined && typeof values.revenuTaxeBq90 !== 'number') {
      values.revenuTaxeBq90 = Number(values.revenuTaxeBq90);
    }
    if (values.revenuNetBqGlobal91 !== undefined && typeof values.revenuNetBqGlobal91 !== 'number') {
      values.revenuNetBqGlobal91 = Number(values.revenuNetBqGlobal91);
    }
    if (values.revenuTaxeBqGlobal92 !== undefined && typeof values.revenuTaxeBqGlobal92 !== 'number') {
      values.revenuTaxeBqGlobal92 = Number(values.revenuTaxeBqGlobal92);
    }
    if (values.revenuNetExtra93 !== undefined && typeof values.revenuNetExtra93 !== 'number') {
      values.revenuNetExtra93 = Number(values.revenuNetExtra93);
    }
    if (values.revenuTaxeExtra94 !== undefined && typeof values.revenuTaxeExtra94 !== 'number') {
      values.revenuTaxeExtra94 = Number(values.revenuTaxeExtra94);
    }
    if (values.revenuNetExtraGlobal95 !== undefined && typeof values.revenuNetExtraGlobal95 !== 'number') {
      values.revenuNetExtraGlobal95 = Number(values.revenuNetExtraGlobal95);
    }
    if (values.revenuTaxeExtraGlobal96 !== undefined && typeof values.revenuTaxeExtraGlobal96 !== 'number') {
      values.revenuTaxeExtraGlobal96 = Number(values.revenuTaxeExtraGlobal96);
    }
    if (values.revenuNetTotal97 !== undefined && typeof values.revenuNetTotal97 !== 'number') {
      values.revenuNetTotal97 = Number(values.revenuNetTotal97);
    }
    if (values.revenuTaxeTotal98 !== undefined && typeof values.revenuTaxeTotal98 !== 'number') {
      values.revenuTaxeTotal98 = Number(values.revenuTaxeTotal98);
    }
    if (values.revenuNetTotalGlobal99 !== undefined && typeof values.revenuNetTotalGlobal99 !== 'number') {
      values.revenuNetTotalGlobal99 = Number(values.revenuNetTotalGlobal99);
    }
    if (values.revenuTaxeTotalGlobal100 !== undefined && typeof values.revenuTaxeTotalGlobal100 !== 'number') {
      values.revenuTaxeTotalGlobal100 = Number(values.revenuTaxeTotalGlobal100);
    }
    if (values.prodRevenuChambre101 !== undefined && typeof values.prodRevenuChambre101 !== 'number') {
      values.prodRevenuChambre101 = Number(values.prodRevenuChambre101);
    }
    if (values.prodRevenuBq102 !== undefined && typeof values.prodRevenuBq102 !== 'number') {
      values.prodRevenuBq102 = Number(values.prodRevenuBq102);
    }
    if (values.prodRevenuExtra103 !== undefined && typeof values.prodRevenuExtra103 !== 'number') {
      values.prodRevenuExtra103 = Number(values.prodRevenuExtra103);
    }
    if (values.prodRevenuTotal104 !== undefined && typeof values.prodRevenuTotal104 !== 'number') {
      values.prodRevenuTotal104 = Number(values.prodRevenuTotal104);
    }
    if (values.prodChambreNbNuitees105 !== undefined && typeof values.prodChambreNbNuitees105 !== 'number') {
      values.prodChambreNbNuitees105 = Number(values.prodChambreNbNuitees105);
    }
    if (values.numLigne108 !== undefined && typeof values.numLigne108 !== 'number') {
      values.numLigne108 = Number(values.numLigne108);
    }
    if (values.resvNameId110 !== undefined && typeof values.resvNameId110 !== 'number') {
      values.resvNameId110 = Number(values.resvNameId110);
    }
    if (values.nameId115 !== undefined && typeof values.nameId115 !== 'number') {
      values.nameId115 = Number(values.nameId115);
    }
    if (values.parentResvNameId116 !== undefined && typeof values.parentResvNameId116 !== 'number') {
      values.parentResvNameId116 = Number(values.parentResvNameId116);
    }
    if (values.contactId117 !== undefined && typeof values.contactId117 !== 'number') {
      values.contactId117 = Number(values.contactId117);
    }
    if (values.agenceId118 !== undefined && typeof values.agenceId118 !== 'number') {
      values.agenceId118 = Number(values.agenceId118);
    }
    if (values.societeId120 !== undefined && typeof values.societeId120 !== 'number') {
      values.societeId120 = Number(values.societeId120);
    }
    if (values.groupeId121 !== undefined && typeof values.groupeId121 !== 'number') {
      values.groupeId121 = Number(values.groupeId121);
    }
    if (values.numBloc122 !== undefined && typeof values.numBloc122 !== 'number') {
      values.numBloc122 = Number(values.numBloc122);
    }
    if (values.createurResv131 !== undefined && typeof values.createurResv131 !== 'number') {
      values.createurResv131 = Number(values.createurResv131);
    }
    if (values.diffDtCreaAnn172 !== undefined && typeof values.diffDtCreaAnn172 !== 'number') {
      values.diffDtCreaAnn172 = Number(values.diffDtCreaAnn172);
    }
    if (values.diffDtArrAnn173 !== undefined && typeof values.diffDtArrAnn173 !== 'number') {
      values.diffDtArrAnn173 = Number(values.diffDtArrAnn173);
    }
    if (values.leadtime174 !== undefined && typeof values.leadtime174 !== 'number') {
      values.leadtime174 = Number(values.leadtime174);
    }
    if (values.los175 !== undefined && typeof values.los175 !== 'number') {
      values.los175 = Number(values.los175);
    }
    if (values.nbNuitee177 !== undefined && typeof values.nbNuitee177 !== 'number') {
      values.nbNuitee177 = Number(values.nbNuitee177);
    }
    if (values.nbNuiteeNnDed178 !== undefined && typeof values.nbNuiteeNnDed178 !== 'number') {
      values.nbNuiteeNnDed178 = Number(values.nbNuiteeNnDed178);
    }
    if (values.nbResvAnn179 !== undefined && typeof values.nbResvAnn179 !== 'number') {
      values.nbResvAnn179 = Number(values.nbResvAnn179);
    }
    if (values.nbAdu180 !== undefined && typeof values.nbAdu180 !== 'number') {
      values.nbAdu180 = Number(values.nbAdu180);
    }
    if (values.nbEnf181 !== undefined && typeof values.nbEnf181 !== 'number') {
      values.nbEnf181 = Number(values.nbEnf181);
    }
    if (values.nbPersDayU182 !== undefined && typeof values.nbPersDayU182 !== 'number') {
      values.nbPersDayU182 = Number(values.nbPersDayU182);
    }
    if (values.nbPersArr183 !== undefined && typeof values.nbPersArr183 !== 'number') {
      values.nbPersArr183 = Number(values.nbPersArr183);
    }
    if (values.nbPersDep184 !== undefined && typeof values.nbPersDep184 !== 'number') {
      values.nbPersDep184 = Number(values.nbPersDep184);
    }
    if (values.nbPersAnn185 !== undefined && typeof values.nbPersAnn185 !== 'number') {
      values.nbPersAnn185 = Number(values.nbPersAnn185);
    }
    if (values.nbPersNoshow186 !== undefined && typeof values.nbPersNoshow186 !== 'number') {
      values.nbPersNoshow186 = Number(values.nbPersNoshow186);
    }
    if (values.nbChbDayU187 !== undefined && typeof values.nbChbDayU187 !== 'number') {
      values.nbChbDayU187 = Number(values.nbChbDayU187);
    }
    if (values.nbChbArr188 !== undefined && typeof values.nbChbArr188 !== 'number') {
      values.nbChbArr188 = Number(values.nbChbArr188);
    }
    if (values.nbChbDep189 !== undefined && typeof values.nbChbDep189 !== 'number') {
      values.nbChbDep189 = Number(values.nbChbDep189);
    }
    if (values.nbChbAnn190 !== undefined && typeof values.nbChbAnn190 !== 'number') {
      values.nbChbAnn190 = Number(values.nbChbAnn190);
    }
    if (values.nbChbNoshow191 !== undefined && typeof values.nbChbNoshow191 !== 'number') {
      values.nbChbNoshow191 = Number(values.nbChbNoshow191);
    }
    if (values.revenuNetChambre192 !== undefined && typeof values.revenuNetChambre192 !== 'number') {
      values.revenuNetChambre192 = Number(values.revenuNetChambre192);
    }
    if (values.revenuTaxeChambre193 !== undefined && typeof values.revenuTaxeChambre193 !== 'number') {
      values.revenuTaxeChambre193 = Number(values.revenuTaxeChambre193);
    }
    if (values.revenuNetChambreGlobal194 !== undefined && typeof values.revenuNetChambreGlobal194 !== 'number') {
      values.revenuNetChambreGlobal194 = Number(values.revenuNetChambreGlobal194);
    }
    if (values.revenuTaxeChambreGlobal195 !== undefined && typeof values.revenuTaxeChambreGlobal195 !== 'number') {
      values.revenuTaxeChambreGlobal195 = Number(values.revenuTaxeChambreGlobal195);
    }
    if (values.revenuNetBq196 !== undefined && typeof values.revenuNetBq196 !== 'number') {
      values.revenuNetBq196 = Number(values.revenuNetBq196);
    }
    if (values.revenuTaxeBq197 !== undefined && typeof values.revenuTaxeBq197 !== 'number') {
      values.revenuTaxeBq197 = Number(values.revenuTaxeBq197);
    }
    if (values.revenuNetBqGlobal198 !== undefined && typeof values.revenuNetBqGlobal198 !== 'number') {
      values.revenuNetBqGlobal198 = Number(values.revenuNetBqGlobal198);
    }
    if (values.revenuTaxeBqGlobal199 !== undefined && typeof values.revenuTaxeBqGlobal199 !== 'number') {
      values.revenuTaxeBqGlobal199 = Number(values.revenuTaxeBqGlobal199);
    }
    if (values.revenuNetExtra200 !== undefined && typeof values.revenuNetExtra200 !== 'number') {
      values.revenuNetExtra200 = Number(values.revenuNetExtra200);
    }
    if (values.revenuTaxeExtra201 !== undefined && typeof values.revenuTaxeExtra201 !== 'number') {
      values.revenuTaxeExtra201 = Number(values.revenuTaxeExtra201);
    }
    if (values.revenuNetExtraGlobal202 !== undefined && typeof values.revenuNetExtraGlobal202 !== 'number') {
      values.revenuNetExtraGlobal202 = Number(values.revenuNetExtraGlobal202);
    }
    if (values.revenuTaxeExtraGlobal203 !== undefined && typeof values.revenuTaxeExtraGlobal203 !== 'number') {
      values.revenuTaxeExtraGlobal203 = Number(values.revenuTaxeExtraGlobal203);
    }
    if (values.revenuNetTotal204 !== undefined && typeof values.revenuNetTotal204 !== 'number') {
      values.revenuNetTotal204 = Number(values.revenuNetTotal204);
    }
    if (values.revenuTaxeTotal205 !== undefined && typeof values.revenuTaxeTotal205 !== 'number') {
      values.revenuTaxeTotal205 = Number(values.revenuTaxeTotal205);
    }
    if (values.revenuNetTotalGlobal206 !== undefined && typeof values.revenuNetTotalGlobal206 !== 'number') {
      values.revenuNetTotalGlobal206 = Number(values.revenuNetTotalGlobal206);
    }
    if (values.revenuTaxeTotalGlobal207 !== undefined && typeof values.revenuTaxeTotalGlobal207 !== 'number') {
      values.revenuTaxeTotalGlobal207 = Number(values.revenuTaxeTotalGlobal207);
    }
    if (values.prodRevenuChambre208 !== undefined && typeof values.prodRevenuChambre208 !== 'number') {
      values.prodRevenuChambre208 = Number(values.prodRevenuChambre208);
    }
    if (values.prodRevenuBq209 !== undefined && typeof values.prodRevenuBq209 !== 'number') {
      values.prodRevenuBq209 = Number(values.prodRevenuBq209);
    }
    if (values.prodRevenuExtra210 !== undefined && typeof values.prodRevenuExtra210 !== 'number') {
      values.prodRevenuExtra210 = Number(values.prodRevenuExtra210);
    }
    if (values.prodRevenuTotal211 !== undefined && typeof values.prodRevenuTotal211 !== 'number') {
      values.prodRevenuTotal211 = Number(values.prodRevenuTotal211);
    }
    if (values.prodChambreNbNuitees212 !== undefined && typeof values.prodChambreNbNuitees212 !== 'number') {
      values.prodChambreNbNuitees212 = Number(values.prodChambreNbNuitees212);
    }
    if (values.numLigne215 !== undefined && typeof values.numLigne215 !== 'number') {
      values.numLigne215 = Number(values.numLigne215);
    }
    if (values.resvNameId217 !== undefined && typeof values.resvNameId217 !== 'number') {
      values.resvNameId217 = Number(values.resvNameId217);
    }
    if (values.nameId222 !== undefined && typeof values.nameId222 !== 'number') {
      values.nameId222 = Number(values.nameId222);
    }
    if (values.parentResvNameId223 !== undefined && typeof values.parentResvNameId223 !== 'number') {
      values.parentResvNameId223 = Number(values.parentResvNameId223);
    }
    if (values.contactId224 !== undefined && typeof values.contactId224 !== 'number') {
      values.contactId224 = Number(values.contactId224);
    }
    if (values.agenceId225 !== undefined && typeof values.agenceId225 !== 'number') {
      values.agenceId225 = Number(values.agenceId225);
    }
    if (values.societeId227 !== undefined && typeof values.societeId227 !== 'number') {
      values.societeId227 = Number(values.societeId227);
    }
    if (values.groupeId228 !== undefined && typeof values.groupeId228 !== 'number') {
      values.groupeId228 = Number(values.groupeId228);
    }
    if (values.numBloc229 !== undefined && typeof values.numBloc229 !== 'number') {
      values.numBloc229 = Number(values.numBloc229);
    }
    if (values.createurResv238 !== undefined && typeof values.createurResv238 !== 'number') {
      values.createurResv238 = Number(values.createurResv238);
    }
    if (values.diffDtCreaAnn279 !== undefined && typeof values.diffDtCreaAnn279 !== 'number') {
      values.diffDtCreaAnn279 = Number(values.diffDtCreaAnn279);
    }
    if (values.diffDtArrAnn280 !== undefined && typeof values.diffDtArrAnn280 !== 'number') {
      values.diffDtArrAnn280 = Number(values.diffDtArrAnn280);
    }
    if (values.leadtime281 !== undefined && typeof values.leadtime281 !== 'number') {
      values.leadtime281 = Number(values.leadtime281);
    }
    if (values.los282 !== undefined && typeof values.los282 !== 'number') {
      values.los282 = Number(values.los282);
    }
    if (values.nbNuitee284 !== undefined && typeof values.nbNuitee284 !== 'number') {
      values.nbNuitee284 = Number(values.nbNuitee284);
    }
    if (values.nbNuiteeNnDed285 !== undefined && typeof values.nbNuiteeNnDed285 !== 'number') {
      values.nbNuiteeNnDed285 = Number(values.nbNuiteeNnDed285);
    }
    if (values.nbResvAnn286 !== undefined && typeof values.nbResvAnn286 !== 'number') {
      values.nbResvAnn286 = Number(values.nbResvAnn286);
    }
    if (values.nbAdu287 !== undefined && typeof values.nbAdu287 !== 'number') {
      values.nbAdu287 = Number(values.nbAdu287);
    }
    if (values.nbEnf288 !== undefined && typeof values.nbEnf288 !== 'number') {
      values.nbEnf288 = Number(values.nbEnf288);
    }
    if (values.nbPersDayU289 !== undefined && typeof values.nbPersDayU289 !== 'number') {
      values.nbPersDayU289 = Number(values.nbPersDayU289);
    }
    if (values.nbPersArr290 !== undefined && typeof values.nbPersArr290 !== 'number') {
      values.nbPersArr290 = Number(values.nbPersArr290);
    }
    if (values.nbPersDep291 !== undefined && typeof values.nbPersDep291 !== 'number') {
      values.nbPersDep291 = Number(values.nbPersDep291);
    }
    if (values.nbPersAnn292 !== undefined && typeof values.nbPersAnn292 !== 'number') {
      values.nbPersAnn292 = Number(values.nbPersAnn292);
    }
    if (values.nbPersNoshow293 !== undefined && typeof values.nbPersNoshow293 !== 'number') {
      values.nbPersNoshow293 = Number(values.nbPersNoshow293);
    }
    if (values.nbChbDayU294 !== undefined && typeof values.nbChbDayU294 !== 'number') {
      values.nbChbDayU294 = Number(values.nbChbDayU294);
    }
    if (values.nbChbArr295 !== undefined && typeof values.nbChbArr295 !== 'number') {
      values.nbChbArr295 = Number(values.nbChbArr295);
    }
    if (values.nbChbDep296 !== undefined && typeof values.nbChbDep296 !== 'number') {
      values.nbChbDep296 = Number(values.nbChbDep296);
    }
    if (values.nbChbAnn297 !== undefined && typeof values.nbChbAnn297 !== 'number') {
      values.nbChbAnn297 = Number(values.nbChbAnn297);
    }
    if (values.nbChbNoshow298 !== undefined && typeof values.nbChbNoshow298 !== 'number') {
      values.nbChbNoshow298 = Number(values.nbChbNoshow298);
    }
    if (values.revenuNetChambre299 !== undefined && typeof values.revenuNetChambre299 !== 'number') {
      values.revenuNetChambre299 = Number(values.revenuNetChambre299);
    }
    if (values.revenuTaxeChambre300 !== undefined && typeof values.revenuTaxeChambre300 !== 'number') {
      values.revenuTaxeChambre300 = Number(values.revenuTaxeChambre300);
    }

    const entity = {
      ...dmOResvEntity,
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
          ...dmOResvEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="operaBigApplicationApp.dmOResv.home.createOrEditLabel" data-cy="DmOResvCreateUpdateHeading">
            <Translate contentKey="operaBigApplicationApp.dmOResv.home.createOrEditLabel">Create or edit a DmOResv</Translate>
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
                  id="dm-o-resv-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numLigne1')}
                id="dm-o-resv-numLigne1"
                name="numLigne1"
                data-cy="numLigne1"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.resort2')}
                id="dm-o-resv-resort2"
                name="resort2"
                data-cy="resort2"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.resvNameId3')}
                id="dm-o-resv-resvNameId3"
                name="resvNameId3"
                data-cy="resvNameId3"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.clientOId4')}
                id="dm-o-resv-clientOId4"
                name="clientOId4"
                data-cy="clientOId4"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeChb5')}
                id="dm-o-resv-typeChb5"
                name="typeChb5"
                data-cy="typeChb5"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.confirmationNo6')}
                id="dm-o-resv-confirmationNo6"
                name="confirmationNo6"
                data-cy="confirmationNo6"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.clientMdmId7')}
                id="dm-o-resv-clientMdmId7"
                name="clientMdmId7"
                data-cy="clientMdmId7"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nameId8')}
                id="dm-o-resv-nameId8"
                name="nameId8"
                data-cy="nameId8"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.parentResvNameId9')}
                id="dm-o-resv-parentResvNameId9"
                name="parentResvNameId9"
                data-cy="parentResvNameId9"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.contactId10')}
                id="dm-o-resv-contactId10"
                name="contactId10"
                data-cy="contactId10"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.agenceId11')}
                id="dm-o-resv-agenceId11"
                name="agenceId11"
                data-cy="agenceId11"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.agenceNom12')}
                id="dm-o-resv-agenceNom12"
                name="agenceNom12"
                data-cy="agenceNom12"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.societeId13')}
                id="dm-o-resv-societeId13"
                name="societeId13"
                data-cy="societeId13"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.groupeId14')}
                id="dm-o-resv-groupeId14"
                name="groupeId14"
                data-cy="groupeId14"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numBloc15')}
                id="dm-o-resv-numBloc15"
                name="numBloc15"
                data-cy="numBloc15"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeResv16')}
                id="dm-o-resv-typeResv16"
                name="typeResv16"
                data-cy="typeResv16"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutResv17')}
                id="dm-o-resv-statutResv17"
                name="statutResv17"
                data-cy="statutResv17"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDebutResv18')}
                id="dm-o-resv-dateDebutResv18"
                name="dateDebutResv18"
                data-cy="dateDebutResv18"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateFinResv19')}
                id="dm-o-resv-dateFinResv19"
                name="dateFinResv19"
                data-cy="dateFinResv19"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.truncDateDebutResv20')}
                id="dm-o-resv-truncDateDebutResv20"
                name="truncDateDebutResv20"
                data-cy="truncDateDebutResv20"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.truncDateFinResv21')}
                id="dm-o-resv-truncDateFinResv21"
                name="truncDateFinResv21"
                data-cy="truncDateFinResv21"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateAnnResv22')}
                id="dm-o-resv-dateAnnResv22"
                name="dateAnnResv22"
                data-cy="dateAnnResv22"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.pseudoRoomYn23')}
                id="dm-o-resv-pseudoRoomYn23"
                name="pseudoRoomYn23"
                data-cy="pseudoRoomYn23"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.createurResv24')}
                id="dm-o-resv-createurResv24"
                name="createurResv24"
                data-cy="createurResv24"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nomCreateurResv25')}
                id="dm-o-resv-nomCreateurResv25"
                name="nomCreateurResv25"
                data-cy="nomCreateurResv25"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGarantie26')}
                id="dm-o-resv-codeGarantie26"
                name="codeGarantie26"
                data-cy="codeGarantie26"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.flgDed27')}
                id="dm-o-resv-flgDed27"
                name="flgDed27"
                data-cy="flgDed27"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codePays28')}
                id="dm-o-resv-codePays28"
                name="codePays28"
                data-cy="codePays28"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libPays29')}
                id="dm-o-resv-libPays29"
                name="libPays29"
                data-cy="libPays29"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeNationalite30')}
                id="dm-o-resv-codeNationalite30"
                name="codeNationalite30"
                data-cy="codeNationalite30"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libNationalite31')}
                id="dm-o-resv-libNationalite31"
                name="libNationalite31"
                data-cy="libNationalite31"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeSource32')}
                id="dm-o-resv-codeSource32"
                name="codeSource32"
                data-cy="codeSource32"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libSource33')}
                id="dm-o-resv-libSource33"
                name="libSource33"
                data-cy="libSource33"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGrandSource34')}
                id="dm-o-resv-codeGrandSource34"
                name="codeGrandSource34"
                data-cy="codeGrandSource34"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeOrigine35')}
                id="dm-o-resv-codeOrigine35"
                name="codeOrigine35"
                data-cy="codeOrigine35"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libOrigine36')}
                id="dm-o-resv-libOrigine36"
                name="libOrigine36"
                data-cy="libOrigine36"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeMarche37')}
                id="dm-o-resv-codeMarche37"
                name="codeMarche37"
                data-cy="codeMarche37"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libMarche38')}
                id="dm-o-resv-libMarche38"
                name="libMarche38"
                data-cy="libMarche38"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGrandMarche39')}
                id="dm-o-resv-codeGrandMarche39"
                name="codeGrandMarche39"
                data-cy="codeGrandMarche39"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libGrandMarche40')}
                id="dm-o-resv-libGrandMarche40"
                name="libGrandMarche40"
                data-cy="libGrandMarche40"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codePrix41')}
                id="dm-o-resv-codePrix41"
                name="codePrix41"
                data-cy="codePrix41"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.categPrix42')}
                id="dm-o-resv-categPrix42"
                name="categPrix42"
                data-cy="categPrix42"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libPrix43')}
                id="dm-o-resv-libPrix43"
                name="libPrix43"
                data-cy="libPrix43"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numChb44')}
                id="dm-o-resv-numChb44"
                name="numChb44"
                data-cy="numChb44"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.descriptionTypeChb45')}
                id="dm-o-resv-descriptionTypeChb45"
                name="descriptionTypeChb45"
                data-cy="descriptionTypeChb45"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeTypeChb46')}
                id="dm-o-resv-codeTypeChb46"
                name="codeTypeChb46"
                data-cy="codeTypeChb46"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.classChb47')}
                id="dm-o-resv-classChb47"
                name="classChb47"
                data-cy="classChb47"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.caractChb48')}
                id="dm-o-resv-caractChb48"
                name="caractChb48"
                data-cy="caractChb48"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeChbDeReservation49')}
                id="dm-o-resv-typeChbDeReservation49"
                name="typeChbDeReservation49"
                data-cy="typeChbDeReservation49"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv50')}
                id="dm-o-resv-descriptionTypeChbDeResv50"
                name="descriptionTypeChbDeResv50"
                data-cy="descriptionTypeChbDeResv50"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeTypeChbDeResv51')}
                id="dm-o-resv-codeTypeChbDeResv51"
                name="codeTypeChbDeResv51"
                data-cy="codeTypeChbDeResv51"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDeReservation52')}
                id="dm-o-resv-statutDeReservation52"
                name="statutDeReservation52"
                data-cy="statutDeReservation52"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.circuitDistribution53')}
                id="dm-o-resv-circuitDistribution53"
                name="circuitDistribution53"
                data-cy="circuitDistribution53"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.circuitDistribUserRegroup54')}
                id="dm-o-resv-circuitDistribUserRegroup54"
                name="circuitDistribUserRegroup54"
                data-cy="circuitDistribUserRegroup54"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numCrs55')}
                id="dm-o-resv-numCrs55"
                name="numCrs55"
                data-cy="numCrs55"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeRefCrs56')}
                id="dm-o-resv-typeRefCrs56"
                name="typeRefCrs56"
                data-cy="typeRefCrs56"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.crsInsertDate57')}
                id="dm-o-resv-crsInsertDate57"
                name="crsInsertDate57"
                data-cy="crsInsertDate57"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateCreaResv58')}
                id="dm-o-resv-dateCreaResv58"
                name="dateCreaResv58"
                data-cy="dateCreaResv58"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.datePremier59')}
                id="dm-o-resv-datePremier59"
                name="datePremier59"
                data-cy="datePremier59"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutPremier60')}
                id="dm-o-resv-statutPremier60"
                name="statutPremier60"
                data-cy="statutPremier60"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDernier61')}
                id="dm-o-resv-dateDernier61"
                name="dateDernier61"
                data-cy="dateDernier61"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDernier62')}
                id="dm-o-resv-statutDernier62"
                name="statutDernier62"
                data-cy="statutDernier62"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDernierPseudo63')}
                id="dm-o-resv-dateDernierPseudo63"
                name="dateDernierPseudo63"
                data-cy="dateDernierPseudo63"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDernierPseudo64')}
                id="dm-o-resv-statutDernierPseudo64"
                name="statutDernierPseudo64"
                data-cy="statutDernierPseudo64"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.diffDtCreaAnn65')}
                id="dm-o-resv-diffDtCreaAnn65"
                name="diffDtCreaAnn65"
                data-cy="diffDtCreaAnn65"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.diffDtArrAnn66')}
                id="dm-o-resv-diffDtArrAnn66"
                name="diffDtArrAnn66"
                data-cy="diffDtArrAnn66"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.leadtime67')}
                id="dm-o-resv-leadtime67"
                name="leadtime67"
                data-cy="leadtime67"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.los68')}
                id="dm-o-resv-los68"
                name="los68"
                data-cy="los68"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.occupantsGroupe69')}
                id="dm-o-resv-occupantsGroupe69"
                name="occupantsGroupe69"
                data-cy="occupantsGroupe69"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbNuitee70')}
                id="dm-o-resv-nbNuitee70"
                name="nbNuitee70"
                data-cy="nbNuitee70"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbNuiteeNnDed71')}
                id="dm-o-resv-nbNuiteeNnDed71"
                name="nbNuiteeNnDed71"
                data-cy="nbNuiteeNnDed71"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbResvAnn72')}
                id="dm-o-resv-nbResvAnn72"
                name="nbResvAnn72"
                data-cy="nbResvAnn72"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbAdu73')}
                id="dm-o-resv-nbAdu73"
                name="nbAdu73"
                data-cy="nbAdu73"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbEnf74')}
                id="dm-o-resv-nbEnf74"
                name="nbEnf74"
                data-cy="nbEnf74"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersDayU75')}
                id="dm-o-resv-nbPersDayU75"
                name="nbPersDayU75"
                data-cy="nbPersDayU75"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersArr76')}
                id="dm-o-resv-nbPersArr76"
                name="nbPersArr76"
                data-cy="nbPersArr76"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersDep77')}
                id="dm-o-resv-nbPersDep77"
                name="nbPersDep77"
                data-cy="nbPersDep77"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersAnn78')}
                id="dm-o-resv-nbPersAnn78"
                name="nbPersAnn78"
                data-cy="nbPersAnn78"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersNoshow79')}
                id="dm-o-resv-nbPersNoshow79"
                name="nbPersNoshow79"
                data-cy="nbPersNoshow79"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbDayU80')}
                id="dm-o-resv-nbChbDayU80"
                name="nbChbDayU80"
                data-cy="nbChbDayU80"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbArr81')}
                id="dm-o-resv-nbChbArr81"
                name="nbChbArr81"
                data-cy="nbChbArr81"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbDep82')}
                id="dm-o-resv-nbChbDep82"
                name="nbChbDep82"
                data-cy="nbChbDep82"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbAnn83')}
                id="dm-o-resv-nbChbAnn83"
                name="nbChbAnn83"
                data-cy="nbChbAnn83"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbNoshow84')}
                id="dm-o-resv-nbChbNoshow84"
                name="nbChbNoshow84"
                data-cy="nbChbNoshow84"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetChambre85')}
                id="dm-o-resv-revenuNetChambre85"
                name="revenuNetChambre85"
                data-cy="revenuNetChambre85"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeChambre86')}
                id="dm-o-resv-revenuTaxeChambre86"
                name="revenuTaxeChambre86"
                data-cy="revenuTaxeChambre86"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetChambreGlobal87')}
                id="dm-o-resv-revenuNetChambreGlobal87"
                name="revenuNetChambreGlobal87"
                data-cy="revenuNetChambreGlobal87"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeChambreGlobal88')}
                id="dm-o-resv-revenuTaxeChambreGlobal88"
                name="revenuTaxeChambreGlobal88"
                data-cy="revenuTaxeChambreGlobal88"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetBq89')}
                id="dm-o-resv-revenuNetBq89"
                name="revenuNetBq89"
                data-cy="revenuNetBq89"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeBq90')}
                id="dm-o-resv-revenuTaxeBq90"
                name="revenuTaxeBq90"
                data-cy="revenuTaxeBq90"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetBqGlobal91')}
                id="dm-o-resv-revenuNetBqGlobal91"
                name="revenuNetBqGlobal91"
                data-cy="revenuNetBqGlobal91"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeBqGlobal92')}
                id="dm-o-resv-revenuTaxeBqGlobal92"
                name="revenuTaxeBqGlobal92"
                data-cy="revenuTaxeBqGlobal92"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetExtra93')}
                id="dm-o-resv-revenuNetExtra93"
                name="revenuNetExtra93"
                data-cy="revenuNetExtra93"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeExtra94')}
                id="dm-o-resv-revenuTaxeExtra94"
                name="revenuTaxeExtra94"
                data-cy="revenuTaxeExtra94"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetExtraGlobal95')}
                id="dm-o-resv-revenuNetExtraGlobal95"
                name="revenuNetExtraGlobal95"
                data-cy="revenuNetExtraGlobal95"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeExtraGlobal96')}
                id="dm-o-resv-revenuTaxeExtraGlobal96"
                name="revenuTaxeExtraGlobal96"
                data-cy="revenuTaxeExtraGlobal96"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetTotal97')}
                id="dm-o-resv-revenuNetTotal97"
                name="revenuNetTotal97"
                data-cy="revenuNetTotal97"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeTotal98')}
                id="dm-o-resv-revenuTaxeTotal98"
                name="revenuTaxeTotal98"
                data-cy="revenuTaxeTotal98"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetTotalGlobal99')}
                id="dm-o-resv-revenuNetTotalGlobal99"
                name="revenuNetTotalGlobal99"
                data-cy="revenuNetTotalGlobal99"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeTotalGlobal100')}
                id="dm-o-resv-revenuTaxeTotalGlobal100"
                name="revenuTaxeTotalGlobal100"
                data-cy="revenuTaxeTotalGlobal100"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuChambre101')}
                id="dm-o-resv-prodRevenuChambre101"
                name="prodRevenuChambre101"
                data-cy="prodRevenuChambre101"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuBq102')}
                id="dm-o-resv-prodRevenuBq102"
                name="prodRevenuBq102"
                data-cy="prodRevenuBq102"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuExtra103')}
                id="dm-o-resv-prodRevenuExtra103"
                name="prodRevenuExtra103"
                data-cy="prodRevenuExtra103"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuTotal104')}
                id="dm-o-resv-prodRevenuTotal104"
                name="prodRevenuTotal104"
                data-cy="prodRevenuTotal104"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodChambreNbNuitees105')}
                id="dm-o-resv-prodChambreNbNuitees105"
                name="prodChambreNbNuitees105"
                data-cy="prodChambreNbNuitees105"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.techCreateDate106')}
                id="dm-o-resv-techCreateDate106"
                name="techCreateDate106"
                data-cy="techCreateDate106"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.techUpdateDate107')}
                id="dm-o-resv-techUpdateDate107"
                name="techUpdateDate107"
                data-cy="techUpdateDate107"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numLigne108')}
                id="dm-o-resv-numLigne108"
                name="numLigne108"
                data-cy="numLigne108"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.resort109')}
                id="dm-o-resv-resort109"
                name="resort109"
                data-cy="resort109"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.resvNameId110')}
                id="dm-o-resv-resvNameId110"
                name="resvNameId110"
                data-cy="resvNameId110"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.clientOId111')}
                id="dm-o-resv-clientOId111"
                name="clientOId111"
                data-cy="clientOId111"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeChb112')}
                id="dm-o-resv-typeChb112"
                name="typeChb112"
                data-cy="typeChb112"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.confirmationNo113')}
                id="dm-o-resv-confirmationNo113"
                name="confirmationNo113"
                data-cy="confirmationNo113"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.clientMdmId114')}
                id="dm-o-resv-clientMdmId114"
                name="clientMdmId114"
                data-cy="clientMdmId114"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nameId115')}
                id="dm-o-resv-nameId115"
                name="nameId115"
                data-cy="nameId115"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.parentResvNameId116')}
                id="dm-o-resv-parentResvNameId116"
                name="parentResvNameId116"
                data-cy="parentResvNameId116"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.contactId117')}
                id="dm-o-resv-contactId117"
                name="contactId117"
                data-cy="contactId117"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.agenceId118')}
                id="dm-o-resv-agenceId118"
                name="agenceId118"
                data-cy="agenceId118"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.agenceNom119')}
                id="dm-o-resv-agenceNom119"
                name="agenceNom119"
                data-cy="agenceNom119"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.societeId120')}
                id="dm-o-resv-societeId120"
                name="societeId120"
                data-cy="societeId120"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.groupeId121')}
                id="dm-o-resv-groupeId121"
                name="groupeId121"
                data-cy="groupeId121"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numBloc122')}
                id="dm-o-resv-numBloc122"
                name="numBloc122"
                data-cy="numBloc122"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeResv123')}
                id="dm-o-resv-typeResv123"
                name="typeResv123"
                data-cy="typeResv123"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutResv124')}
                id="dm-o-resv-statutResv124"
                name="statutResv124"
                data-cy="statutResv124"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDebutResv125')}
                id="dm-o-resv-dateDebutResv125"
                name="dateDebutResv125"
                data-cy="dateDebutResv125"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateFinResv126')}
                id="dm-o-resv-dateFinResv126"
                name="dateFinResv126"
                data-cy="dateFinResv126"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.truncDateDebutResv127')}
                id="dm-o-resv-truncDateDebutResv127"
                name="truncDateDebutResv127"
                data-cy="truncDateDebutResv127"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.truncDateFinResv128')}
                id="dm-o-resv-truncDateFinResv128"
                name="truncDateFinResv128"
                data-cy="truncDateFinResv128"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateAnnResv129')}
                id="dm-o-resv-dateAnnResv129"
                name="dateAnnResv129"
                data-cy="dateAnnResv129"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.pseudoRoomYn130')}
                id="dm-o-resv-pseudoRoomYn130"
                name="pseudoRoomYn130"
                data-cy="pseudoRoomYn130"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.createurResv131')}
                id="dm-o-resv-createurResv131"
                name="createurResv131"
                data-cy="createurResv131"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nomCreateurResv132')}
                id="dm-o-resv-nomCreateurResv132"
                name="nomCreateurResv132"
                data-cy="nomCreateurResv132"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGarantie133')}
                id="dm-o-resv-codeGarantie133"
                name="codeGarantie133"
                data-cy="codeGarantie133"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.flgDed134')}
                id="dm-o-resv-flgDed134"
                name="flgDed134"
                data-cy="flgDed134"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codePays135')}
                id="dm-o-resv-codePays135"
                name="codePays135"
                data-cy="codePays135"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libPays136')}
                id="dm-o-resv-libPays136"
                name="libPays136"
                data-cy="libPays136"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeNationalite137')}
                id="dm-o-resv-codeNationalite137"
                name="codeNationalite137"
                data-cy="codeNationalite137"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libNationalite138')}
                id="dm-o-resv-libNationalite138"
                name="libNationalite138"
                data-cy="libNationalite138"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeSource139')}
                id="dm-o-resv-codeSource139"
                name="codeSource139"
                data-cy="codeSource139"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libSource140')}
                id="dm-o-resv-libSource140"
                name="libSource140"
                data-cy="libSource140"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGrandSource141')}
                id="dm-o-resv-codeGrandSource141"
                name="codeGrandSource141"
                data-cy="codeGrandSource141"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeOrigine142')}
                id="dm-o-resv-codeOrigine142"
                name="codeOrigine142"
                data-cy="codeOrigine142"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libOrigine143')}
                id="dm-o-resv-libOrigine143"
                name="libOrigine143"
                data-cy="libOrigine143"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeMarche144')}
                id="dm-o-resv-codeMarche144"
                name="codeMarche144"
                data-cy="codeMarche144"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libMarche145')}
                id="dm-o-resv-libMarche145"
                name="libMarche145"
                data-cy="libMarche145"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGrandMarche146')}
                id="dm-o-resv-codeGrandMarche146"
                name="codeGrandMarche146"
                data-cy="codeGrandMarche146"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libGrandMarche147')}
                id="dm-o-resv-libGrandMarche147"
                name="libGrandMarche147"
                data-cy="libGrandMarche147"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codePrix148')}
                id="dm-o-resv-codePrix148"
                name="codePrix148"
                data-cy="codePrix148"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.categPrix149')}
                id="dm-o-resv-categPrix149"
                name="categPrix149"
                data-cy="categPrix149"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libPrix150')}
                id="dm-o-resv-libPrix150"
                name="libPrix150"
                data-cy="libPrix150"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numChb151')}
                id="dm-o-resv-numChb151"
                name="numChb151"
                data-cy="numChb151"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.descriptionTypeChb152')}
                id="dm-o-resv-descriptionTypeChb152"
                name="descriptionTypeChb152"
                data-cy="descriptionTypeChb152"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeTypeChb153')}
                id="dm-o-resv-codeTypeChb153"
                name="codeTypeChb153"
                data-cy="codeTypeChb153"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.classChb154')}
                id="dm-o-resv-classChb154"
                name="classChb154"
                data-cy="classChb154"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.caractChb155')}
                id="dm-o-resv-caractChb155"
                name="caractChb155"
                data-cy="caractChb155"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeChbDeReservation156')}
                id="dm-o-resv-typeChbDeReservation156"
                name="typeChbDeReservation156"
                data-cy="typeChbDeReservation156"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv157')}
                id="dm-o-resv-descriptionTypeChbDeResv157"
                name="descriptionTypeChbDeResv157"
                data-cy="descriptionTypeChbDeResv157"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeTypeChbDeResv158')}
                id="dm-o-resv-codeTypeChbDeResv158"
                name="codeTypeChbDeResv158"
                data-cy="codeTypeChbDeResv158"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDeReservation159')}
                id="dm-o-resv-statutDeReservation159"
                name="statutDeReservation159"
                data-cy="statutDeReservation159"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.circuitDistribution160')}
                id="dm-o-resv-circuitDistribution160"
                name="circuitDistribution160"
                data-cy="circuitDistribution160"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.circuitDistribUserRegroup161')}
                id="dm-o-resv-circuitDistribUserRegroup161"
                name="circuitDistribUserRegroup161"
                data-cy="circuitDistribUserRegroup161"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numCrs162')}
                id="dm-o-resv-numCrs162"
                name="numCrs162"
                data-cy="numCrs162"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeRefCrs163')}
                id="dm-o-resv-typeRefCrs163"
                name="typeRefCrs163"
                data-cy="typeRefCrs163"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.crsInsertDate164')}
                id="dm-o-resv-crsInsertDate164"
                name="crsInsertDate164"
                data-cy="crsInsertDate164"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateCreaResv165')}
                id="dm-o-resv-dateCreaResv165"
                name="dateCreaResv165"
                data-cy="dateCreaResv165"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.datePremier166')}
                id="dm-o-resv-datePremier166"
                name="datePremier166"
                data-cy="datePremier166"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutPremier167')}
                id="dm-o-resv-statutPremier167"
                name="statutPremier167"
                data-cy="statutPremier167"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDernier168')}
                id="dm-o-resv-dateDernier168"
                name="dateDernier168"
                data-cy="dateDernier168"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDernier169')}
                id="dm-o-resv-statutDernier169"
                name="statutDernier169"
                data-cy="statutDernier169"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDernierPseudo170')}
                id="dm-o-resv-dateDernierPseudo170"
                name="dateDernierPseudo170"
                data-cy="dateDernierPseudo170"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDernierPseudo171')}
                id="dm-o-resv-statutDernierPseudo171"
                name="statutDernierPseudo171"
                data-cy="statutDernierPseudo171"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.diffDtCreaAnn172')}
                id="dm-o-resv-diffDtCreaAnn172"
                name="diffDtCreaAnn172"
                data-cy="diffDtCreaAnn172"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.diffDtArrAnn173')}
                id="dm-o-resv-diffDtArrAnn173"
                name="diffDtArrAnn173"
                data-cy="diffDtArrAnn173"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.leadtime174')}
                id="dm-o-resv-leadtime174"
                name="leadtime174"
                data-cy="leadtime174"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.los175')}
                id="dm-o-resv-los175"
                name="los175"
                data-cy="los175"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.occupantsGroupe176')}
                id="dm-o-resv-occupantsGroupe176"
                name="occupantsGroupe176"
                data-cy="occupantsGroupe176"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbNuitee177')}
                id="dm-o-resv-nbNuitee177"
                name="nbNuitee177"
                data-cy="nbNuitee177"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbNuiteeNnDed178')}
                id="dm-o-resv-nbNuiteeNnDed178"
                name="nbNuiteeNnDed178"
                data-cy="nbNuiteeNnDed178"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbResvAnn179')}
                id="dm-o-resv-nbResvAnn179"
                name="nbResvAnn179"
                data-cy="nbResvAnn179"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbAdu180')}
                id="dm-o-resv-nbAdu180"
                name="nbAdu180"
                data-cy="nbAdu180"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbEnf181')}
                id="dm-o-resv-nbEnf181"
                name="nbEnf181"
                data-cy="nbEnf181"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersDayU182')}
                id="dm-o-resv-nbPersDayU182"
                name="nbPersDayU182"
                data-cy="nbPersDayU182"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersArr183')}
                id="dm-o-resv-nbPersArr183"
                name="nbPersArr183"
                data-cy="nbPersArr183"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersDep184')}
                id="dm-o-resv-nbPersDep184"
                name="nbPersDep184"
                data-cy="nbPersDep184"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersAnn185')}
                id="dm-o-resv-nbPersAnn185"
                name="nbPersAnn185"
                data-cy="nbPersAnn185"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersNoshow186')}
                id="dm-o-resv-nbPersNoshow186"
                name="nbPersNoshow186"
                data-cy="nbPersNoshow186"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbDayU187')}
                id="dm-o-resv-nbChbDayU187"
                name="nbChbDayU187"
                data-cy="nbChbDayU187"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbArr188')}
                id="dm-o-resv-nbChbArr188"
                name="nbChbArr188"
                data-cy="nbChbArr188"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbDep189')}
                id="dm-o-resv-nbChbDep189"
                name="nbChbDep189"
                data-cy="nbChbDep189"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbAnn190')}
                id="dm-o-resv-nbChbAnn190"
                name="nbChbAnn190"
                data-cy="nbChbAnn190"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbNoshow191')}
                id="dm-o-resv-nbChbNoshow191"
                name="nbChbNoshow191"
                data-cy="nbChbNoshow191"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetChambre192')}
                id="dm-o-resv-revenuNetChambre192"
                name="revenuNetChambre192"
                data-cy="revenuNetChambre192"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeChambre193')}
                id="dm-o-resv-revenuTaxeChambre193"
                name="revenuTaxeChambre193"
                data-cy="revenuTaxeChambre193"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetChambreGlobal194')}
                id="dm-o-resv-revenuNetChambreGlobal194"
                name="revenuNetChambreGlobal194"
                data-cy="revenuNetChambreGlobal194"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeChambreGlobal195')}
                id="dm-o-resv-revenuTaxeChambreGlobal195"
                name="revenuTaxeChambreGlobal195"
                data-cy="revenuTaxeChambreGlobal195"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetBq196')}
                id="dm-o-resv-revenuNetBq196"
                name="revenuNetBq196"
                data-cy="revenuNetBq196"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeBq197')}
                id="dm-o-resv-revenuTaxeBq197"
                name="revenuTaxeBq197"
                data-cy="revenuTaxeBq197"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetBqGlobal198')}
                id="dm-o-resv-revenuNetBqGlobal198"
                name="revenuNetBqGlobal198"
                data-cy="revenuNetBqGlobal198"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeBqGlobal199')}
                id="dm-o-resv-revenuTaxeBqGlobal199"
                name="revenuTaxeBqGlobal199"
                data-cy="revenuTaxeBqGlobal199"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetExtra200')}
                id="dm-o-resv-revenuNetExtra200"
                name="revenuNetExtra200"
                data-cy="revenuNetExtra200"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeExtra201')}
                id="dm-o-resv-revenuTaxeExtra201"
                name="revenuTaxeExtra201"
                data-cy="revenuTaxeExtra201"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetExtraGlobal202')}
                id="dm-o-resv-revenuNetExtraGlobal202"
                name="revenuNetExtraGlobal202"
                data-cy="revenuNetExtraGlobal202"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeExtraGlobal203')}
                id="dm-o-resv-revenuTaxeExtraGlobal203"
                name="revenuTaxeExtraGlobal203"
                data-cy="revenuTaxeExtraGlobal203"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetTotal204')}
                id="dm-o-resv-revenuNetTotal204"
                name="revenuNetTotal204"
                data-cy="revenuNetTotal204"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeTotal205')}
                id="dm-o-resv-revenuTaxeTotal205"
                name="revenuTaxeTotal205"
                data-cy="revenuTaxeTotal205"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetTotalGlobal206')}
                id="dm-o-resv-revenuNetTotalGlobal206"
                name="revenuNetTotalGlobal206"
                data-cy="revenuNetTotalGlobal206"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeTotalGlobal207')}
                id="dm-o-resv-revenuTaxeTotalGlobal207"
                name="revenuTaxeTotalGlobal207"
                data-cy="revenuTaxeTotalGlobal207"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuChambre208')}
                id="dm-o-resv-prodRevenuChambre208"
                name="prodRevenuChambre208"
                data-cy="prodRevenuChambre208"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuBq209')}
                id="dm-o-resv-prodRevenuBq209"
                name="prodRevenuBq209"
                data-cy="prodRevenuBq209"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuExtra210')}
                id="dm-o-resv-prodRevenuExtra210"
                name="prodRevenuExtra210"
                data-cy="prodRevenuExtra210"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodRevenuTotal211')}
                id="dm-o-resv-prodRevenuTotal211"
                name="prodRevenuTotal211"
                data-cy="prodRevenuTotal211"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.prodChambreNbNuitees212')}
                id="dm-o-resv-prodChambreNbNuitees212"
                name="prodChambreNbNuitees212"
                data-cy="prodChambreNbNuitees212"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.techCreateDate213')}
                id="dm-o-resv-techCreateDate213"
                name="techCreateDate213"
                data-cy="techCreateDate213"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.techUpdateDate214')}
                id="dm-o-resv-techUpdateDate214"
                name="techUpdateDate214"
                data-cy="techUpdateDate214"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numLigne215')}
                id="dm-o-resv-numLigne215"
                name="numLigne215"
                data-cy="numLigne215"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.resort216')}
                id="dm-o-resv-resort216"
                name="resort216"
                data-cy="resort216"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.resvNameId217')}
                id="dm-o-resv-resvNameId217"
                name="resvNameId217"
                data-cy="resvNameId217"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.clientOId218')}
                id="dm-o-resv-clientOId218"
                name="clientOId218"
                data-cy="clientOId218"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeChb219')}
                id="dm-o-resv-typeChb219"
                name="typeChb219"
                data-cy="typeChb219"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.confirmationNo220')}
                id="dm-o-resv-confirmationNo220"
                name="confirmationNo220"
                data-cy="confirmationNo220"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.clientMdmId221')}
                id="dm-o-resv-clientMdmId221"
                name="clientMdmId221"
                data-cy="clientMdmId221"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nameId222')}
                id="dm-o-resv-nameId222"
                name="nameId222"
                data-cy="nameId222"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.parentResvNameId223')}
                id="dm-o-resv-parentResvNameId223"
                name="parentResvNameId223"
                data-cy="parentResvNameId223"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.contactId224')}
                id="dm-o-resv-contactId224"
                name="contactId224"
                data-cy="contactId224"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.agenceId225')}
                id="dm-o-resv-agenceId225"
                name="agenceId225"
                data-cy="agenceId225"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.agenceNom226')}
                id="dm-o-resv-agenceNom226"
                name="agenceNom226"
                data-cy="agenceNom226"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.societeId227')}
                id="dm-o-resv-societeId227"
                name="societeId227"
                data-cy="societeId227"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.groupeId228')}
                id="dm-o-resv-groupeId228"
                name="groupeId228"
                data-cy="groupeId228"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numBloc229')}
                id="dm-o-resv-numBloc229"
                name="numBloc229"
                data-cy="numBloc229"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeResv230')}
                id="dm-o-resv-typeResv230"
                name="typeResv230"
                data-cy="typeResv230"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutResv231')}
                id="dm-o-resv-statutResv231"
                name="statutResv231"
                data-cy="statutResv231"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDebutResv232')}
                id="dm-o-resv-dateDebutResv232"
                name="dateDebutResv232"
                data-cy="dateDebutResv232"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateFinResv233')}
                id="dm-o-resv-dateFinResv233"
                name="dateFinResv233"
                data-cy="dateFinResv233"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.truncDateDebutResv234')}
                id="dm-o-resv-truncDateDebutResv234"
                name="truncDateDebutResv234"
                data-cy="truncDateDebutResv234"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.truncDateFinResv235')}
                id="dm-o-resv-truncDateFinResv235"
                name="truncDateFinResv235"
                data-cy="truncDateFinResv235"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateAnnResv236')}
                id="dm-o-resv-dateAnnResv236"
                name="dateAnnResv236"
                data-cy="dateAnnResv236"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.pseudoRoomYn237')}
                id="dm-o-resv-pseudoRoomYn237"
                name="pseudoRoomYn237"
                data-cy="pseudoRoomYn237"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.createurResv238')}
                id="dm-o-resv-createurResv238"
                name="createurResv238"
                data-cy="createurResv238"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nomCreateurResv239')}
                id="dm-o-resv-nomCreateurResv239"
                name="nomCreateurResv239"
                data-cy="nomCreateurResv239"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGarantie240')}
                id="dm-o-resv-codeGarantie240"
                name="codeGarantie240"
                data-cy="codeGarantie240"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.flgDed241')}
                id="dm-o-resv-flgDed241"
                name="flgDed241"
                data-cy="flgDed241"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codePays242')}
                id="dm-o-resv-codePays242"
                name="codePays242"
                data-cy="codePays242"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libPays243')}
                id="dm-o-resv-libPays243"
                name="libPays243"
                data-cy="libPays243"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeNationalite244')}
                id="dm-o-resv-codeNationalite244"
                name="codeNationalite244"
                data-cy="codeNationalite244"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libNationalite245')}
                id="dm-o-resv-libNationalite245"
                name="libNationalite245"
                data-cy="libNationalite245"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeSource246')}
                id="dm-o-resv-codeSource246"
                name="codeSource246"
                data-cy="codeSource246"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libSource247')}
                id="dm-o-resv-libSource247"
                name="libSource247"
                data-cy="libSource247"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGrandSource248')}
                id="dm-o-resv-codeGrandSource248"
                name="codeGrandSource248"
                data-cy="codeGrandSource248"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeOrigine249')}
                id="dm-o-resv-codeOrigine249"
                name="codeOrigine249"
                data-cy="codeOrigine249"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libOrigine250')}
                id="dm-o-resv-libOrigine250"
                name="libOrigine250"
                data-cy="libOrigine250"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeMarche251')}
                id="dm-o-resv-codeMarche251"
                name="codeMarche251"
                data-cy="codeMarche251"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libMarche252')}
                id="dm-o-resv-libMarche252"
                name="libMarche252"
                data-cy="libMarche252"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeGrandMarche253')}
                id="dm-o-resv-codeGrandMarche253"
                name="codeGrandMarche253"
                data-cy="codeGrandMarche253"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libGrandMarche254')}
                id="dm-o-resv-libGrandMarche254"
                name="libGrandMarche254"
                data-cy="libGrandMarche254"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codePrix255')}
                id="dm-o-resv-codePrix255"
                name="codePrix255"
                data-cy="codePrix255"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.categPrix256')}
                id="dm-o-resv-categPrix256"
                name="categPrix256"
                data-cy="categPrix256"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.libPrix257')}
                id="dm-o-resv-libPrix257"
                name="libPrix257"
                data-cy="libPrix257"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numChb258')}
                id="dm-o-resv-numChb258"
                name="numChb258"
                data-cy="numChb258"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.descriptionTypeChb259')}
                id="dm-o-resv-descriptionTypeChb259"
                name="descriptionTypeChb259"
                data-cy="descriptionTypeChb259"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeTypeChb260')}
                id="dm-o-resv-codeTypeChb260"
                name="codeTypeChb260"
                data-cy="codeTypeChb260"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.classChb261')}
                id="dm-o-resv-classChb261"
                name="classChb261"
                data-cy="classChb261"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.caractChb262')}
                id="dm-o-resv-caractChb262"
                name="caractChb262"
                data-cy="caractChb262"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeChbDeReservation263')}
                id="dm-o-resv-typeChbDeReservation263"
                name="typeChbDeReservation263"
                data-cy="typeChbDeReservation263"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.descriptionTypeChbDeResv264')}
                id="dm-o-resv-descriptionTypeChbDeResv264"
                name="descriptionTypeChbDeResv264"
                data-cy="descriptionTypeChbDeResv264"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.codeTypeChbDeResv265')}
                id="dm-o-resv-codeTypeChbDeResv265"
                name="codeTypeChbDeResv265"
                data-cy="codeTypeChbDeResv265"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDeReservation266')}
                id="dm-o-resv-statutDeReservation266"
                name="statutDeReservation266"
                data-cy="statutDeReservation266"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.circuitDistribution267')}
                id="dm-o-resv-circuitDistribution267"
                name="circuitDistribution267"
                data-cy="circuitDistribution267"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.circuitDistribUserRegroup268')}
                id="dm-o-resv-circuitDistribUserRegroup268"
                name="circuitDistribUserRegroup268"
                data-cy="circuitDistribUserRegroup268"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.numCrs269')}
                id="dm-o-resv-numCrs269"
                name="numCrs269"
                data-cy="numCrs269"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.typeRefCrs270')}
                id="dm-o-resv-typeRefCrs270"
                name="typeRefCrs270"
                data-cy="typeRefCrs270"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.crsInsertDate271')}
                id="dm-o-resv-crsInsertDate271"
                name="crsInsertDate271"
                data-cy="crsInsertDate271"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateCreaResv272')}
                id="dm-o-resv-dateCreaResv272"
                name="dateCreaResv272"
                data-cy="dateCreaResv272"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.datePremier273')}
                id="dm-o-resv-datePremier273"
                name="datePremier273"
                data-cy="datePremier273"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutPremier274')}
                id="dm-o-resv-statutPremier274"
                name="statutPremier274"
                data-cy="statutPremier274"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDernier275')}
                id="dm-o-resv-dateDernier275"
                name="dateDernier275"
                data-cy="dateDernier275"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDernier276')}
                id="dm-o-resv-statutDernier276"
                name="statutDernier276"
                data-cy="statutDernier276"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.dateDernierPseudo277')}
                id="dm-o-resv-dateDernierPseudo277"
                name="dateDernierPseudo277"
                data-cy="dateDernierPseudo277"
                type="date"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.statutDernierPseudo278')}
                id="dm-o-resv-statutDernierPseudo278"
                name="statutDernierPseudo278"
                data-cy="statutDernierPseudo278"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.diffDtCreaAnn279')}
                id="dm-o-resv-diffDtCreaAnn279"
                name="diffDtCreaAnn279"
                data-cy="diffDtCreaAnn279"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.diffDtArrAnn280')}
                id="dm-o-resv-diffDtArrAnn280"
                name="diffDtArrAnn280"
                data-cy="diffDtArrAnn280"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.leadtime281')}
                id="dm-o-resv-leadtime281"
                name="leadtime281"
                data-cy="leadtime281"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.los282')}
                id="dm-o-resv-los282"
                name="los282"
                data-cy="los282"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.occupantsGroupe283')}
                id="dm-o-resv-occupantsGroupe283"
                name="occupantsGroupe283"
                data-cy="occupantsGroupe283"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbNuitee284')}
                id="dm-o-resv-nbNuitee284"
                name="nbNuitee284"
                data-cy="nbNuitee284"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbNuiteeNnDed285')}
                id="dm-o-resv-nbNuiteeNnDed285"
                name="nbNuiteeNnDed285"
                data-cy="nbNuiteeNnDed285"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbResvAnn286')}
                id="dm-o-resv-nbResvAnn286"
                name="nbResvAnn286"
                data-cy="nbResvAnn286"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbAdu287')}
                id="dm-o-resv-nbAdu287"
                name="nbAdu287"
                data-cy="nbAdu287"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbEnf288')}
                id="dm-o-resv-nbEnf288"
                name="nbEnf288"
                data-cy="nbEnf288"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersDayU289')}
                id="dm-o-resv-nbPersDayU289"
                name="nbPersDayU289"
                data-cy="nbPersDayU289"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersArr290')}
                id="dm-o-resv-nbPersArr290"
                name="nbPersArr290"
                data-cy="nbPersArr290"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersDep291')}
                id="dm-o-resv-nbPersDep291"
                name="nbPersDep291"
                data-cy="nbPersDep291"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersAnn292')}
                id="dm-o-resv-nbPersAnn292"
                name="nbPersAnn292"
                data-cy="nbPersAnn292"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbPersNoshow293')}
                id="dm-o-resv-nbPersNoshow293"
                name="nbPersNoshow293"
                data-cy="nbPersNoshow293"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbDayU294')}
                id="dm-o-resv-nbChbDayU294"
                name="nbChbDayU294"
                data-cy="nbChbDayU294"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbArr295')}
                id="dm-o-resv-nbChbArr295"
                name="nbChbArr295"
                data-cy="nbChbArr295"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbDep296')}
                id="dm-o-resv-nbChbDep296"
                name="nbChbDep296"
                data-cy="nbChbDep296"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbAnn297')}
                id="dm-o-resv-nbChbAnn297"
                name="nbChbAnn297"
                data-cy="nbChbAnn297"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.nbChbNoshow298')}
                id="dm-o-resv-nbChbNoshow298"
                name="nbChbNoshow298"
                data-cy="nbChbNoshow298"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuNetChambre299')}
                id="dm-o-resv-revenuNetChambre299"
                name="revenuNetChambre299"
                data-cy="revenuNetChambre299"
                type="text"
              />
              <ValidatedField
                label={translate('operaBigApplicationApp.dmOResv.revenuTaxeChambre300')}
                id="dm-o-resv-revenuTaxeChambre300"
                name="revenuTaxeChambre300"
                data-cy="revenuTaxeChambre300"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/dm-o-resv" replace color="info">
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

export default DmOResvUpdate;
