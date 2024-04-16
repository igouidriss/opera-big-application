import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/dm-client-mdm-addr-cntry">
        <Translate contentKey="global.menu.entities.dmClientMdmAddrCntry" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/dm-client-mdm-ntnlty-cntry">
        <Translate contentKey="global.menu.entities.dmClientMdmNtnltyCntry" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/ft-o-resv">
        <Translate contentKey="global.menu.entities.ftOResv" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/dm-o-resv">
        <Translate contentKey="global.menu.entities.dmOResv" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
