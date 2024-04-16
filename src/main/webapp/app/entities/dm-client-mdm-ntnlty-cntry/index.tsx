import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DmClientMdmNtnltyCntry from './dm-client-mdm-ntnlty-cntry';
import DmClientMdmNtnltyCntryDetail from './dm-client-mdm-ntnlty-cntry-detail';
import DmClientMdmNtnltyCntryUpdate from './dm-client-mdm-ntnlty-cntry-update';
import DmClientMdmNtnltyCntryDeleteDialog from './dm-client-mdm-ntnlty-cntry-delete-dialog';

const DmClientMdmNtnltyCntryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<DmClientMdmNtnltyCntry />} />
    <Route path="new" element={<DmClientMdmNtnltyCntryUpdate />} />
    <Route path=":id">
      <Route index element={<DmClientMdmNtnltyCntryDetail />} />
      <Route path="edit" element={<DmClientMdmNtnltyCntryUpdate />} />
      <Route path="delete" element={<DmClientMdmNtnltyCntryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DmClientMdmNtnltyCntryRoutes;
