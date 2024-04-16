import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DmOResv from './dm-o-resv';
import DmOResvDetail from './dm-o-resv-detail';
import DmOResvUpdate from './dm-o-resv-update';
import DmOResvDeleteDialog from './dm-o-resv-delete-dialog';

const DmOResvRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<DmOResv />} />
    <Route path="new" element={<DmOResvUpdate />} />
    <Route path=":id">
      <Route index element={<DmOResvDetail />} />
      <Route path="edit" element={<DmOResvUpdate />} />
      <Route path="delete" element={<DmOResvDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DmOResvRoutes;
