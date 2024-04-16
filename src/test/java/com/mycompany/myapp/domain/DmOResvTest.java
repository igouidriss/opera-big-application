package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.DmOResvTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class DmOResvTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmOResv.class);
        DmOResv dmOResv1 = getDmOResvSample1();
        DmOResv dmOResv2 = new DmOResv();
        assertThat(dmOResv1).isNotEqualTo(dmOResv2);

        dmOResv2.setId(dmOResv1.getId());
        assertThat(dmOResv1).isEqualTo(dmOResv2);

        dmOResv2 = getDmOResvSample2();
        assertThat(dmOResv1).isNotEqualTo(dmOResv2);
    }
}
