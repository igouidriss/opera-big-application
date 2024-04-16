package com.mycompany.myapp.service.mapper;

import static com.mycompany.myapp.domain.FtOResvAsserts.*;
import static com.mycompany.myapp.domain.FtOResvTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FtOResvMapperTest {

    private FtOResvMapper ftOResvMapper;

    @BeforeEach
    void setUp() {
        ftOResvMapper = new FtOResvMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getFtOResvSample1();
        var actual = ftOResvMapper.toEntity(ftOResvMapper.toDto(expected));
        assertFtOResvAllPropertiesEquals(expected, actual);
    }
}
