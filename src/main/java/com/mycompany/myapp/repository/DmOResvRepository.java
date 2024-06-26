package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DmOResv;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the DmOResv entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmOResvRepository extends JpaRepository<DmOResv, Long> {}
