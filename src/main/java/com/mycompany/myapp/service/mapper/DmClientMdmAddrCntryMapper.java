package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.DmClientMdmAddrCntry;
import com.mycompany.myapp.service.dto.DmClientMdmAddrCntryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link DmClientMdmAddrCntry} and its DTO {@link DmClientMdmAddrCntryDTO}.
 */
@Mapper(componentModel = "spring")
public interface DmClientMdmAddrCntryMapper extends EntityMapper<DmClientMdmAddrCntryDTO, DmClientMdmAddrCntry> {}
