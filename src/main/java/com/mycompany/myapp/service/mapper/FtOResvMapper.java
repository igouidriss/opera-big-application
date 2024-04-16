package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.FtOResv;
import com.mycompany.myapp.service.dto.FtOResvDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link FtOResv} and its DTO {@link FtOResvDTO}.
 */
@Mapper(componentModel = "spring")
public interface FtOResvMapper extends EntityMapper<FtOResvDTO, FtOResv> {}
