package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.DmClientMdmNtnltyCntry;
import com.mycompany.myapp.service.dto.DmClientMdmNtnltyCntryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link DmClientMdmNtnltyCntry} and its DTO {@link DmClientMdmNtnltyCntryDTO}.
 */
@Mapper(componentModel = "spring")
public interface DmClientMdmNtnltyCntryMapper extends EntityMapper<DmClientMdmNtnltyCntryDTO, DmClientMdmNtnltyCntry> {}
