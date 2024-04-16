import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DmClientMdmAddrCntry from './dm-client-mdm-addr-cntry';
import DmClientMdmNtnltyCntry from './dm-client-mdm-ntnlty-cntry';
import FtOResv from './ft-o-resv';
import DmOResv from './dm-o-resv';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="dm-client-mdm-addr-cntry/*" element={<DmClientMdmAddrCntry />} />
        <Route path="dm-client-mdm-ntnlty-cntry/*" element={<DmClientMdmNtnltyCntry />} />
        <Route path="ft-o-resv/*" element={<FtOResv />} />
        <Route path="dm-o-resv/*" element={<DmOResv />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
