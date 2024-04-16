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

import { getEntities } from './dm-client-mdm-ntnlty-cntry.reducer';

export const DmClientMdmNtnltyCntry = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const dmClientMdmNtnltyCntryList = useAppSelector(state => state.dmClientMdmNtnltyCntry.entities);
  const loading = useAppSelector(state => state.dmClientMdmNtnltyCntry.loading);
  const totalItems = useAppSelector(state => state.dmClientMdmNtnltyCntry.totalItems);

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
      <h2 id="dm-client-mdm-ntnlty-cntry-heading" data-cy="DmClientMdmNtnltyCntryHeading">
        <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.home.title">Dm Client Mdm Ntnlty Cntries</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link
            to="/dm-client-mdm-ntnlty-cntry/new"
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            data-cy="entityCreateButton"
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.home.createLabel">
              Create new Dm Client Mdm Ntnlty Cntry
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {dmClientMdmNtnltyCntryList && dmClientMdmNtnltyCntryList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('prtyFk')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.prtyFk">Prty Fk</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prtyFk')} />
                </th>
                <th className="hand" onClick={sort('frstNtnltFrmt')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frstNtnltFrmt">Frst Ntnlt Frmt</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('frstNtnltFrmt')} />
                </th>
                <th className="hand" onClick={sort('frstContinent')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frstContinent">Frst Continent</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('frstContinent')} />
                </th>
                <th className="hand" onClick={sort('scndNtnltFrmt')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.scndNtnltFrmt">Scnd Ntnlt Frmt</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('scndNtnltFrmt')} />
                </th>
                <th className="hand" onClick={sort('scndContinent')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.scndContinent">Scnd Continent</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('scndContinent')} />
                </th>
                <th className="hand" onClick={sort('thrdNtnltFrmt')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.thrdNtnltFrmt">Thrd Ntnlt Frmt</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('thrdNtnltFrmt')} />
                </th>
                <th className="hand" onClick={sort('thrdContinent')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.thrdContinent">Thrd Continent</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('thrdContinent')} />
                </th>
                <th className="hand" onClick={sort('frthNtnltFrmt')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frthNtnltFrmt">Frth Ntnlt Frmt</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('frthNtnltFrmt')} />
                </th>
                <th className="hand" onClick={sort('frthContinent')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.frthContinent">Frth Continent</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('frthContinent')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {dmClientMdmNtnltyCntryList.map((dmClientMdmNtnltyCntry, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/dm-client-mdm-ntnlty-cntry/${dmClientMdmNtnltyCntry.id}`} color="link" size="sm">
                      {dmClientMdmNtnltyCntry.id}
                    </Button>
                  </td>
                  <td>{dmClientMdmNtnltyCntry.prtyFk}</td>
                  <td>{dmClientMdmNtnltyCntry.frstNtnltFrmt}</td>
                  <td>{dmClientMdmNtnltyCntry.frstContinent}</td>
                  <td>{dmClientMdmNtnltyCntry.scndNtnltFrmt}</td>
                  <td>{dmClientMdmNtnltyCntry.scndContinent}</td>
                  <td>{dmClientMdmNtnltyCntry.thrdNtnltFrmt}</td>
                  <td>{dmClientMdmNtnltyCntry.thrdContinent}</td>
                  <td>{dmClientMdmNtnltyCntry.frthNtnltFrmt}</td>
                  <td>{dmClientMdmNtnltyCntry.frthContinent}</td>
                  <td>{dmClientMdmNtnltyCntry.techLineage}</td>
                  <td>
                    {dmClientMdmNtnltyCntry.techCreatedDate ? (
                      <TextFormat type="date" value={dmClientMdmNtnltyCntry.techCreatedDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {dmClientMdmNtnltyCntry.techUpdatedDate ? (
                      <TextFormat type="date" value={dmClientMdmNtnltyCntry.techUpdatedDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{dmClientMdmNtnltyCntry.techMapping}</td>
                  <td>{dmClientMdmNtnltyCntry.techComment}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`/dm-client-mdm-ntnlty-cntry/${dmClientMdmNtnltyCntry.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/dm-client-mdm-ntnlty-cntry/${dmClientMdmNtnltyCntry.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/dm-client-mdm-ntnlty-cntry/${dmClientMdmNtnltyCntry.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="operaBigApplicationApp.dmClientMdmNtnltyCntry.home.notFound">
                No Dm Client Mdm Ntnlty Cntries found
              </Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={dmClientMdmNtnltyCntryList && dmClientMdmNtnltyCntryList.length > 0 ? '' : 'd-none'}>
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

export default DmClientMdmNtnltyCntry;
