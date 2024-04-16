package com.mycompany.myapp.service.mapper;

import static com.mycompany.myapp.domain.DmClientMdmNtnltyCntryAsserts.*;
import static com.mycompany.myapp.domain.DmClientMdmNtnltyCntryTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DmClientMdmNtnltyCntryMapperTest {

    private DmClientMdmNtnltyCntryMapper dmClientMdmNtnltyCntryMapper;

    @BeforeEach
    void setUp() {
        dmClientMdmNtnltyCntryMapper = new DmClientMdmNtnltyCntryMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getDmClientMdmNtnltyCntrySample1();
        var actual = dmClientMdmNtnltyCntryMapper.toEntity(dmClientMdmNtnltyCntryMapper.toDto(expected));
        assertDmClientMdmNtnltyCntryAllPropertiesEquals(expected, actual);
    }
}
