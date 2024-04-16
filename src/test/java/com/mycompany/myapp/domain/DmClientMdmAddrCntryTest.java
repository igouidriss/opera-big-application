package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.DmClientMdmAddrCntryTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class DmClientMdmAddrCntryTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmClientMdmAddrCntry.class);
        DmClientMdmAddrCntry dmClientMdmAddrCntry1 = getDmClientMdmAddrCntrySample1();
        DmClientMdmAddrCntry dmClientMdmAddrCntry2 = new DmClientMdmAddrCntry();
        assertThat(dmClientMdmAddrCntry1).isNotEqualTo(dmClientMdmAddrCntry2);

        dmClientMdmAddrCntry2.setId(dmClientMdmAddrCntry1.getId());
        assertThat(dmClientMdmAddrCntry1).isEqualTo(dmClientMdmAddrCntry2);

        dmClientMdmAddrCntry2 = getDmClientMdmAddrCntrySample2();
        assertThat(dmClientMdmAddrCntry1).isNotEqualTo(dmClientMdmAddrCntry2);
    }
}
