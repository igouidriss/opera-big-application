package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.DmOResv;
import com.mycompany.myapp.service.dto.DmOResvDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link DmOResv} and its DTO {@link DmOResvDTO}.
 */
@Mapper(componentModel = "spring")
public interface DmOResvMapper extends EntityMapper<DmOResvDTO, DmOResv> {}
