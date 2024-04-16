package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.DmClientMdmNtnltyCntryTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class DmClientMdmNtnltyCntryTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmClientMdmNtnltyCntry.class);
        DmClientMdmNtnltyCntry dmClientMdmNtnltyCntry1 = getDmClientMdmNtnltyCntrySample1();
        DmClientMdmNtnltyCntry dmClientMdmNtnltyCntry2 = new DmClientMdmNtnltyCntry();
        assertThat(dmClientMdmNtnltyCntry1).isNotEqualTo(dmClientMdmNtnltyCntry2);

        dmClientMdmNtnltyCntry2.setId(dmClientMdmNtnltyCntry1.getId());
        assertThat(dmClientMdmNtnltyCntry1).isEqualTo(dmClientMdmNtnltyCntry2);

        dmClientMdmNtnltyCntry2 = getDmClientMdmNtnltyCntrySample2();
        assertThat(dmClientMdmNtnltyCntry1).isNotEqualTo(dmClientMdmNtnltyCntry2);
    }
}
