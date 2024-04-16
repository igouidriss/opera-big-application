package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.FtOResvTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class FtOResvTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FtOResv.class);
        FtOResv ftOResv1 = getFtOResvSample1();
        FtOResv ftOResv2 = new FtOResv();
        assertThat(ftOResv1).isNotEqualTo(ftOResv2);

        ftOResv2.setId(ftOResv1.getId());
        assertThat(ftOResv1).isEqualTo(ftOResv2);

        ftOResv2 = getFtOResvSample2();
        assertThat(ftOResv1).isNotEqualTo(ftOResv2);
    }
}
