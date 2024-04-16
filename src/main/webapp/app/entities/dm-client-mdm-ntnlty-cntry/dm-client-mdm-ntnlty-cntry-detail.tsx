import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './dm-client-mdm-ntnlty-cntry.reducer';

export const DmClientMdmNtnltyCntryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const dmClientMdmNtnltyCntryEntity = useAppSelector(state => state.dmClientMdmNtnltyCntry.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="dmClientMdmNtnltyCntryDetailsHeading">
          <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.detail.title">DmClientMdmNtnltyCntry</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.id}</dd>
          <dt>
            <span id="prtyFk">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.prtyFk">Prty Fk</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.prtyFk}</dd>
          <dt>
            <span id="frstNtnltFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frstNtnltFrmt">Frst Ntnlt Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.frstNtnltFrmt}</dd>
          <dt>
            <span id="frstContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frstContinent">Frst Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.frstContinent}</dd>
          <dt>
            <span id="scndNtnltFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.scndNtnltFrmt">Scnd Ntnlt Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.scndNtnltFrmt}</dd>
          <dt>
            <span id="scndContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.scndContinent">Scnd Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.scndContinent}</dd>
          <dt>
            <span id="thrdNtnltFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.thrdNtnltFrmt">Thrd Ntnlt Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.thrdNtnltFrmt}</dd>
          <dt>
            <span id="thrdContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.thrdContinent">Thrd Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.thrdContinent}</dd>
          <dt>
            <span id="frthNtnltFrmt">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frthNtnltFrmt">Frth Ntnlt Frmt</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.frthNtnltFrmt}</dd>
          <dt>
            <span id="frthContinent">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frthContinent">Frth Continent</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.frthContinent}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {dmClientMdmNtnltyCntryEntity.techCreatedDate ? (
              <TextFormat value={dmClientMdmNtnltyCntryEntity.techCreatedDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {dmClientMdmNtnltyCntryEntity.techUpdatedDate ? (
              <TextFormat value={dmClientMdmNtnltyCntryEntity.techUpdatedDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{dmClientMdmNtnltyCntryEntity.techComment}</dd>
        </dl>
        <Button tag={Link} to="/dm-client-mdm-ntnlty-cntry" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/dm-client-mdm-ntnlty-cntry/${dmClientMdmNtnltyCntryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DmClientMdmNtnltyCntryDetail;
