import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './dm-client-mdm-addr-cntry.reducer';

export const DmClientMdmAddrCntryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const dmClientMdmAddrCntryEntity = useAppSelector(state => state.dmClientMdmAddrCntry.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="dmClientMdmAddrCntryDetailsHeading">
          <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.detail.title">DmClientMdmAddrCntry</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.id}</dd>
          <dt>
            <span id="prtyFk">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.prtyFk">Prty Fk</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.prtyFk}</dd>
          <dt>
            <span id="frstCntryFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.frstCntryFrmt">Frst Cntry Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.frstCntryFrmt}</dd>
          <dt>
            <span id="frstContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.frstContinent">Frst Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.frstContinent}</dd>
          <dt>
            <span id="scndCntryFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.scndCntryFrmt">Scnd Cntry Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.scndCntryFrmt}</dd>
          <dt>
            <span id="scndContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.scndContinent">Scnd Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.scndContinent}</dd>
          <dt>
            <span id="thrdCntryFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.thrdCntryFrmt">Thrd Cntry Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.thrdCntryFrmt}</dd>
          <dt>
            <span id="thrdContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.thrdContinent">Thrd Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.thrdContinent}</dd>
          <dt>
            <span id="frthCntryFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.frthCntryFrmt">Frth Cntry Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.frthCntryFrmt}</dd>
          <dt>
            <span id="frthContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.frthContinent">Frth Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.frthContinent}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {dmClientMdmAddrCntryEntity.techCreatedDate ? (
              <TextFormat value={dmClientMdmAddrCntryEntity.techCreatedDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {dmClientMdmAddrCntryEntity.techUpdatedDate ? (
              <TextFormat value={dmClientMdmAddrCntryEntity.techUpdatedDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmAddrCntry.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmAddrCntryEntity.techComment}</dd>
        </dl>
        <Button tag={Link} to="/dm-client-mdm-addr-cntry" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/dm-client-mdm-addr-cntry/${dmClientMdmAddrCntryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DmClientMdmAddrCntryDetail;
