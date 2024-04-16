package com.mycompany.myapp.service.mapper;

import static com.mycompany.myapp.domain.DmOResvAsserts.*;
import static com.mycompany.myapp.domain.DmOResvTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DmOResvMapperTest {

    private DmOResvMapper dmOResvMapper;

    @BeforeEach
    void setUp() {
        dmOResvMapper = new DmOResvMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getDmOResvSample1();
        var actual = dmOResvMapper.toEntity(dmOResvMapper.toDto(expected));
        assertDmOResvAllPropertiesEquals(expected, actual);
    }
}
