import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FtOResv from './ft-o-resv';
import FtOResvDetail from './ft-o-resv-detail';
import FtOResvUpdate from './ft-o-resv-update';
import FtOResvDeleteDialog from './ft-o-resv-delete-dialog';

const FtOResvRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FtOResv />} />
    <Route path="new" element={<FtOResvUpdate />} />
    <Route path=":id">
      <Route index element={<FtOResvDetail />} />
      <Route path="edit" element={<FtOResvUpdate />} />
      <Route path="delete" element={<FtOResvDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FtOResvRoutes;
