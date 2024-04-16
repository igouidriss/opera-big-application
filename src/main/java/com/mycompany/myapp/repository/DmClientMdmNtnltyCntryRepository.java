package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DmClientMdmNtnltyCntry;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the DmClientMdmNtnltyCntry entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmClientMdmNtnltyCntryRepository extends JpaRepository<DmClientMdmNtnltyCntry, Long> {}
