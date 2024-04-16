import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DmClientMdmAddrCntry from './dm-client-mdm-addr-cntry';
import DmClientMdmAddrCntryDetail from './dm-client-mdm-addr-cntry-detail';
import DmClientMdmAddrCntryUpdate from './dm-client-mdm-addr-cntry-update';
import DmClientMdmAddrCntryDeleteDialog from './dm-client-mdm-addr-cntry-delete-dialog';

const DmClientMdmAddrCntryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<DmClientMdmAddrCntry />} />
    <Route path="new" element={<DmClientMdmAddrCntryUpdate />} />
    <Route path=":id">
      <Route index element={<DmClientMdmAddrCntryDetail />} />
      <Route path="edit" element={<DmClientMdmAddrCntryUpdate />} />
      <Route path="delete" element={<DmClientMdmAddrCntryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DmClientMdmAddrCntryRoutes;
