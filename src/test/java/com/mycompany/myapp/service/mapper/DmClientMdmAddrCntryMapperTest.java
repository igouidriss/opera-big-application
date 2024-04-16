package com.mycompany.myapp.service.mapper;

import static com.mycompany.myapp.domain.DmClientMdmAddrCntryAsserts.*;
import static com.mycompany.myapp.domain.DmClientMdmAddrCntryTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DmClientMdmAddrCntryMapperTest {

    private DmClientMdmAddrCntryMapper dmClientMdmAddrCntryMapper;

    @BeforeEach
    void setUp() {
        dmClientMdmAddrCntryMapper = new DmClientMdmAddrCntryMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getDmClientMdmAddrCntrySample1();
        var actual = dmClientMdmAddrCntryMapper.toEntity(dmClientMdmAddrCntryMapper.toDto(expected));
        assertDmClientMdmAddrCntryAllPropertiesEquals(expected, actual);
    }
}
